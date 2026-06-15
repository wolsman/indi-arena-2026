/* ============================================================
   henk-generate.mjs — vult window.POOL_HENK in data/pool-data.js met
   door gpt-4o geschreven Henk-teksten: speler-takes, dagmonoloog en
   hot-takes. Draait server-side in GitHub Actions ná de scrape.

   - 1x per dag (stale-guard op generatedAt = NL-datum).
   - Gebatcht: 1 call voor alle speler-takes, 1 voor monoloog + hot-takes.
   - Vangrail: alleen de meegegeven feiten gebruiken; nooit cijfers/namen
     verzinnen. Leunt NIET op het onbetrouwbare matches-veld.
   - Faalt veilig: geen key / API-fout → POOL_HENK blijft ongewijzigd, en
     de frontend valt terug op de HENK-sjablonen. Exit altijd 0 zodat de
     scrape-pijplijn nooit blokkeert.

   Env: OPENAI_API_KEY (vereist), OPENAI_MODEL (default gpt-4o).
   ============================================================ */
import { readFileSync, writeFileSync } from 'node:fs';

// .env.local lokaal inladen (in CI komt env uit secrets)
try {
  const e = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
  e.split(/\r?\n/).forEach((l) => {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  });
} catch { /* geen .env.local — prima */ }

const KEY = (process.env.OPENAI_API_KEY || '').trim();
const MODEL = (process.env.OPENAI_MODEL || 'gpt-4o').trim();
const FILE = new URL('../data/pool-data.js', import.meta.url);
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Amsterdam' });
const done = (msg) => { console.log(msg); process.exit(0); };

if (!KEY) done('· Geen OPENAI_API_KEY — POOL_HENK ongewijzigd (frontend gebruikt sjablonen).');

// pool-data.js inladen (browserbestand → window-stub)
const src = readFileSync(FILE, 'utf8');
const window = {};
eval(src);
const POOL_PLAYERS = window.POOL_PLAYERS || [];
const POOL_META = window.POOL_META || {};
const POOL_HISTORY = window.POOL_HISTORY || {};
const existingHenk = window.POOL_HENK || {};

if (existingHenk.generatedAt === today) done(`· POOL_HENK al vandaag (${today}) gegenereerd — overslaan.`);

// ── stand bepalen (gedeelde rangen) ──
const pts = POOL_META.pointsAvailable || POOL_PLAYERS.some((p) => (p.points || 0) > 0);
const ranked = [...POOL_PLAYERS].filter((p) => p.name).sort((a, b) => (b.points || 0) - (a.points || 0));
let lastVal = null, lastRank = 0; const rankOf = {};
ranked.forEach((p, i) => { const v = p.points || 0; let r; if (v === lastVal) r = lastRank; else { r = i + 1; lastVal = v; lastRank = r; } rankOf[p.name] = r; });
const leaders = ranked.filter((p) => rankOf[p.name] === 1).map((p) => p.name);
const nul = POOL_PLAYERS.filter((p) => (p.points || 0) === 0 && p.matches === 0).map((p) => p.name);

const persona = 'Je bent Henk, vaste analist van de Indicium WK Poule — kantinepraat met een scherp mes, stijl Voetbal Inside: fel, gevat, mag roasten. Schrijf in het Nederlands. Gebruik UITSLUITEND de gegeven feiten; verzin NOOIT namen, scores of punten. Roast op stand, picks en gedrag — NOOIT op uiterlijk of de persoon zelf. Kort en pittig.';

async function ask(system, user) {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({
        model: MODEL, temperature: 0.9, response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }]
      })
    });
    if (!res.ok) { console.log(`  ⚠ OpenAI ${res.status}`); return null; }
    const d = await res.json();
    const t = d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content;
    return t ? JSON.parse(t) : null;
  } catch (e) { console.log(`  ⚠ OpenAI-call mislukt: ${e.message}`); return null; }
}

// 1) speler-takes — gegrond op rang/beweging/trend (NIET op matches-veld)
const playerFacts = ranked.map((p) => {
  const r = rankOf[p.name];
  const prev = typeof p.prevPos === 'number' ? p.prevPos : null;
  const delta = prev != null ? prev - r : null;
  const hist = POOL_HISTORY[p.name];
  return {
    naam: p.name, rang: r, punten: p.points || 0,
    beweging: delta == null ? 'onbekend' : (delta > 0 ? `${delta} omhoog` : (delta < 0 ? `${-delta} omlaag` : 'stilstaand')),
    trendPunten: Array.isArray(hist) && hist.length > 1 ? (hist[hist.length - 1] - hist[0]) : null,
    opNul: (p.points || 0) === 0
  };
});
const takesSys = persona + ' Schrijf voor ELKE speler één pittige take van 1-2 zinnen, gebaseerd op rang, beweging en puntentrend (NIET op aantal ingevulde duels — dat is onbetrouwbaar). Antwoord als JSON: {"takes": {"<exacte spelernaam>": "<take>", ...}} voor alle spelers.';

// 2) dagmonoloog + hot-takes — over de poule-stand van vandaag
const poolFacts = {
  datum: today, totaalSpelers: POOL_PLAYERS.length, koplopers: leaders,
  koploperPunten: leaders.length ? (ranked[0].points || 0) : 0,
  aantalOpNul: nul.length, opNulNamen: nul.slice(0, 5), puntenLopen: pts
};
const monoSys = persona + ' Antwoord als JSON: {"monoloog": "<3-4 zinnen dagmonoloog over de stand van vandaag>", "hotTakes": ["<one-liner>", ... (5 stuks)]}';

const [takesRes, monoRes] = await Promise.all([
  ask(takesSys, 'Spelers (feiten):\n' + JSON.stringify(playerFacts)),
  ask(monoSys, 'Poule-feiten:\n' + JSON.stringify(poolFacts))
]);

const henk = { generatedAt: today };
if (takesRes && takesRes.takes && typeof takesRes.takes === 'object') henk.playerTakes = takesRes.takes;
if (monoRes && monoRes.monoloog) henk.monoloog = monoRes.monoloog;
if (monoRes && Array.isArray(monoRes.hotTakes)) henk.hotTakes = monoRes.hotTakes;

if (!henk.playerTakes && !henk.monoloog && !henk.hotTakes) done('  ⚠ Niets gegenereerd — POOL_HENK ongewijzigd.');

const next = src.replace(/window\.POOL_HENK\s*=\s*\{[\s\S]*?\};/, `window.POOL_HENK = ${JSON.stringify(henk)};`);
writeFileSync(FILE, next, 'utf8');
console.log(`  ✓ POOL_HENK bijgewerkt (${today}): ${henk.playerTakes ? Object.keys(henk.playerTakes).length : 0} takes, monoloog:${!!henk.monoloog}, hotTakes:${henk.hotTakes ? henk.hotTakes.length : 0}`);
