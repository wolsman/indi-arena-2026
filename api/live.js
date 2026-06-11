/* ============================================================
   /api/live — Vercel serverfunctie voor live tussenstanden
   ============================================================
   Haalt server-side (geen CORS) de live WK-wedstrijden op bij
   football-data.org en geeft een compacte JSON terug. Edge-cache
   van ~50s zorgt dat de bron hooguit ~1x/min wordt geraakt,
   ongeacht hoeveel bezoekers er pollen.

   Vereist env-var FOOTBALL_API_KEY (gratis sleutel van
   football-data.org). Zonder sleutel geeft de functie netjes een
   lege lijst terug — de site blijft dan gewoon werken.
   ============================================================ */

export default async function handler(req, res) {
  // Edge-cache: hooguit ~1 upstream-call per minuut, rest uit cache.
  res.setHeader('Cache-Control', 's-maxage=50, stale-while-revalidate=120');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const key = process.env.FOOTBALL_API_KEY;
  if (!key) {
    res.status(200).send(JSON.stringify({ matches: [], note: 'no-key' }));
    return;
  }

  try {
    const r = await fetch('https://api.football-data.org/v4/competitions/WC/matches', {
      headers: { 'X-Auth-Token': key }
    });
    if (!r.ok) {
      res.status(200).send(JSON.stringify({ matches: [], note: 'api-' + r.status }));
      return;
    }
    const j = await r.json();
    const live = (j.matches || [])
      .filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED')
      .map(m => ({
        home: (m.homeTeam && m.homeTeam.name) || '',
        away: (m.awayTeam && m.awayTeam.name) || '',
        hs: (m.score && m.score.fullTime && m.score.fullTime.home) ?? 0,
        as: (m.score && m.score.fullTime && m.score.fullTime.away) ?? 0,
        status: m.status
      }));
    res.status(200).send(JSON.stringify({ matches: live, ts: Date.now() }));
  } catch (e) {
    res.status(200).send(JSON.stringify({ matches: [], note: 'error' }));
  }
}
