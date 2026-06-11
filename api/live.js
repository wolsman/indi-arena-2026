/* ============================================================
   /api/live — Vercel serverfunctie voor live tussenstanden
   ============================================================
   Haalt server-side (geen CORS) de live wedstrijden op bij
   API-Sports (api-football) — die levert echte in-play data
   inclusief de stand en de speelminuut. Edge-cache van ~50s
   zorgt dat de bron hooguit ~1x/min wordt geraakt, ongeacht
   hoeveel bezoekers er pollen.

   Vereist env-var FOOTBALL_API_KEY = je gratis API-Sports-sleutel
   (dashboard.api-football.com). Zonder sleutel of bij een fout
   geeft de functie netjes een lege lijst terug — de site blijft
   dan gewoon werken.
   ============================================================ */

export default async function handler(req, res) {
  // Edge-cache: hooguit ~1 upstream-call per 2 min (max ~30/uur), rest uit
  // cache. Houdt ons ruim binnen de 100 calls/dag van het gratis API-Sports-plan.
  res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=180');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const key = process.env.FOOTBALL_API_KEY;
  if (!key) {
    res.status(200).send(JSON.stringify({ matches: [], note: 'no-key' }));
    return;
  }

  try {
    const r = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
      headers: { 'x-apisports-key': key }
    });
    if (!r.ok) {
      res.status(200).send(JSON.stringify({ matches: [], note: 'http-' + r.status }));
      return;
    }
    const j = await r.json();
    // API-Sports meldt fouten (verkeerde sleutel/limiet) in j.errors met status 200.
    const errs = j && j.errors;
    if (errs && ((Array.isArray(errs) && errs.length) || (typeof errs === 'object' && Object.keys(errs).length))) {
      res.status(200).send(JSON.stringify({ matches: [], note: 'api-err', errors: errs }));
      return;
    }
    const all = j.response || [];
    const map = f => ({
      home: (f.teams && f.teams.home && f.teams.home.name) || '',
      away: (f.teams && f.teams.away && f.teams.away.name) || '',
      hs: (f.goals && f.goals.home) ?? 0,
      as: (f.goals && f.goals.away) ?? 0,
      status: (f.fixture && f.fixture.status && f.fixture.status.short) || '',
      minute: (f.fixture && f.fixture.status && f.fixture.status.elapsed) ?? null,
      league: (f.league && f.league.name) || ''
    });
    const live = all.map(map);
    // Diagnose: /api/live?debug=1 toont dat de bron live data levert.
    if (req.query && req.query.debug) {
      const sample = live.slice(0, 6).map(m => `${m.home} ${m.hs}-${m.as} ${m.away} [${m.status} ${m.minute || ''}'] (${m.league})`);
      res.status(200).send(JSON.stringify({ totalLive: all.length, sample }));
      return;
    }
    res.status(200).send(JSON.stringify({ matches: live, ts: Date.now() }));
  } catch (e) {
    res.status(200).send(JSON.stringify({ matches: [], note: 'error' }));
  }
}
