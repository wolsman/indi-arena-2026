/* ============================================================
   /api/henk — live Henk-reactie op een wedstrijd-event via gpt-4o.
   ============================================================
   Houdt de OpenAI-key server-side (Vercel env-var OPENAI_API_KEY).
   De client (event-engine in app.js) stuurt de feiten van een live
   event (doelpunt/gelijkmaker/ommekeer/rust) + wie wat gokte; deze
   functie laat Henk er één korte, gegronde regel over schrijven.

   - Cachet per event-signatuur (in-memory) zodat alle kijkers
     dezelfde regel zien en we niet dubbel betalen.
   - Faalt veilig: geen key / API-fout → { line: null }; de client
     houdt dan de sjabloon-regel die al in de toast staat.

   Env: OPENAI_API_KEY (Vercel), OPENAI_MODEL (default gpt-4o).
   ============================================================ */

const cache = new Map(); // sig -> { line, ts }  (warme-instance dedup)
const TTL = 5 * 60 * 1000;

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') { res.status(200).send(JSON.stringify({ line: null })); return; }

  const key = process.env.OPENAI_API_KEY;
  if (!key) { res.status(200).send(JSON.stringify({ line: null, note: 'no-key' })); return; }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};
  const type = body.type || 'goal';
  const home = body.home || '', away = body.away || '';
  const hs = body.hs ?? 0, as = body.as ?? 0;
  if (!home || !away) { res.status(200).send(JSON.stringify({ line: null })); return; }

  const sig = `${home}|${away}|${hs}-${as}|${type}`;
  const now = Date.now();
  const hit = cache.get(sig);
  if (hit && (now - hit.ts) < TTL) { res.status(200).send(JSON.stringify({ line: hit.line, cached: true })); return; }

  const labels = { goal: 'doelpunt', equalizer: 'gelijkmaker', turnaround: 'ommekeer', ht: 'rust' };
  const facts = {
    moment: labels[type] || 'doelpunt',
    wedstrijd: `${home} - ${away}`, stand: `${hs}-${as}`, minuut: body.minute ?? null,
    exactGegokt: Array.isArray(body.exact) ? body.exact : [],
    aantalRichtingGoed: body.tend ?? 0, totaalVoorspellers: body.total ?? 0, leidt: body.leader ?? null
  };
  const system = 'Je bent Henk, vaste analist van de Indicium WK Poule — kantinepraat met een scherp mes (Voetbal Inside-stijl): fel, gevat, mag roasten. Schrijf in het Nederlands. Geef ÉÉN korte live-reactie (1-2 zinnen) op DIT moment in de wedstrijd. Gebruik UITSLUITEND de gegeven feiten; verzin NOOIT namen of scores. Roast op de poule-voorspellingen (wie staat er nu goed/fout), nooit op personen. Geen emoji. Antwoord als JSON: {"line":"..."}';
  const model = (process.env.OPENAI_MODEL || 'gpt-4o').trim();

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model, temperature: 0.9, max_tokens: 150, response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: system }, { role: 'user', content: 'Event-feiten:\n' + JSON.stringify(facts) }]
      })
    });
    if (!r.ok) { res.status(200).send(JSON.stringify({ line: null, note: 'http-' + r.status })); return; }
    const j = await r.json();
    const txt = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    let line = null;
    try { line = txt ? (JSON.parse(txt).line || null) : null; } catch { line = null; }
    if (line) cache.set(sig, { line, ts: now });
    res.status(200).send(JSON.stringify({ line }));
  } catch (e) {
    res.status(200).send(JSON.stringify({ line: null, note: 'error' }));
  }
}
