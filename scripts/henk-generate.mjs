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
const FORCE = /^(1|true|yes)$/i.test(process.env.HENK_FORCE || '');   // negeer de stale-guard
const DRYRUN = /^(1|true|yes)$/i.test(process.env.HENK_DRYRUN || ''); // toon de briefing, géén API-call

if (!KEY && !DRYRUN) done('· Geen OPENAI_API_KEY — POOL_HENK ongewijzigd (frontend gebruikt sjablonen).');

// pool-data.js inladen (browserbestand → window-stub)
const src = readFileSync(FILE, 'utf8');
const window = {};
eval(src);
const POOL_PLAYERS = window.POOL_PLAYERS || [];
const POOL_META = window.POOL_META || {};
const POOL_HISTORY = window.POOL_HISTORY || {};
const POOL_CALENDAR = window.POOL_CALENDAR || [];
const POOL_PREDICTIONS = window.POOL_PREDICTIONS || {};
const POOL_RESULTS = window.POOL_RESULTS || {};
const existingHenk = window.POOL_HENK || {};

if (existingHenk.generatedAt === today && !FORCE) done(`· POOL_HENK al vandaag (${today}) gegenereerd — overslaan (HENK_FORCE=1 om te forceren).`);

// ── stand bepalen (gedeelde rangen) ──
const pts = POOL_META.pointsAvailable || POOL_PLAYERS.some((p) => (p.points || 0) > 0);
const ranked = [...POOL_PLAYERS].filter((p) => p.name).sort((a, b) => (b.points || 0) - (a.points || 0));
let lastVal = null, lastRank = 0; const rankOf = {};
ranked.forEach((p, i) => { const v = p.points || 0; let r; if (v === lastVal) r = lastRank; else { r = i + 1; lastVal = v; lastRank = r; } rankOf[p.name] = r; });
const leaders = ranked.filter((p) => rankOf[p.name] === 1).map((p) => p.name);
const nul = POOL_PLAYERS.filter((p) => (p.points || 0) === 0 && p.matches === 0).map((p) => p.name);

// ── pick-analyse: échte, specifieke haakjes per speler uit de Arena-data ──
// (exacte uitslagen, tegen-de-stroom-winst, grofste blunders, toto-streak)
const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
const resultFor = (m) => POOL_RESULTS[norm(m.home) + '|' + norm(m.away)] || null;
const oc = (h, a) => (h > a ? 'h' : (h < a ? 'a' : 'd'));
const decided = Object.keys(POOL_PREDICTIONS).map((k) => +k)
  .filter((idx) => POOL_CALENDAR[idx] && resultFor(POOL_CALENDAR[idx]))
  .sort((a, b) => a - b);

const hooks = {};                 // spelernaam (uit predictions) -> haakjes
const ensure = (n) => (hooks[n] = hooks[n] || { exact: 0, contra: null, blunder: null, _seq: [] });
decided.forEach((idx) => {
  const m = POOL_CALENDAR[idx];
  const [rh, ra] = resultFor(m).split('-').map(Number);
  const rO = oc(rh, ra);
  const picks = POOL_PREDICTIONS[idx] || POOL_PREDICTIONS[String(idx)] || [];
  const cnt = { h: 0, d: 0, a: 0 };
  picks.forEach((p) => { cnt[oc(p.h, p.a)]++; });
  const tot = picks.length || 1;
  picks.forEach((p) => {
    const hk = ensure(p.player);
    const ex = p.h === rh && p.a === ra;
    const tOk = oc(p.h, p.a) === rO;
    hk._seq.push(tOk);
    if (ex) hk.exact++;
    if (tOk) {
      const share = cnt[rO] / tot;
      if (!hk.contra || share < hk.contra.share) hk.contra = { match: `${m.home}-${m.away}`, score: `${rh}-${ra}`, share: Math.round(share * 100) };
    } else {
      const miss = Math.abs((p.h - p.a) - (rh - ra));
      if (rh + ra >= 3 && (!hk.blunder || miss > hk.blunder.miss)) hk.blunder = { match: `${m.home}-${m.away}`, jij: `${p.h}-${p.a}`, echt: `${rh}-${ra}`, miss };
    }
  });
});
Object.values(hooks).forEach((hk) => {
  let run = 0, best = 0; hk._seq.forEach((ok) => { run = ok ? run + 1 : 0; if (run > best) best = run; });
  let cur = 0; for (let i = hk._seq.length - 1; i >= 0; i--) { if (hk._seq[i]) cur++; else break; }
  hk.streakNu = cur; hk.langsteStreak = best; delete hk._seq;
});
// predictions gebruiken soms voornamen, POOL_PLAYERS nicknames — koppel zo goed mogelijk.
const hookFor = (playerName) => {
  if (hooks[playerName]) return hooks[playerName];
  const target = norm(playerName);
  const key = Object.keys(hooks).find((k) => { const nk = norm(k); return nk === target || nk.startsWith(target) || target.startsWith(nk); });
  return key ? hooks[key] : null;
};

const persona = 'Je bent Henk, de gevreesde vaste analist van de Indicium WK Poule — kantinepraat met een scherp mes, stijl Voetbal Inside: fel, gevat, genadeloos, mag hard roasten. Schrijf in het Nederlands. Gebruik UITSLUITEND de gegeven feiten; verzin NOOIT namen, scores of punten. Roast op stand, picks, voorspelgedrag en betaling — NOOIT op uiterlijk of de persoon zelf. Spreid je vuur over VEEL verschillende mensen, niet alleen de koploper. Kort, pittig, origineel — geen cliché.';

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

// Feiten-/haakjessheet per speler — gedeeld door takes, cast en dagslachtoffer.
// Alleen niet-triviale velden meenemen → punchy briefing, minder tokens.
const factOf = (p) => {
  const r = rankOf[p.name];
  const prev = typeof p.prevPos === 'number' ? p.prevPos : null;
  const delta = prev != null ? prev - r : null;
  const hist = POOL_HISTORY[p.name];
  const hk = hookFor(p.name) || {};
  const f = {
    naam: p.name, rang: r, punten: p.points || 0,
    beweging: delta == null ? 'onbekend' : (delta > 0 ? `${delta} omhoog` : (delta < 0 ? `${-delta} omlaag` : 'stilstaand')),
    trendPunten: Array.isArray(hist) && hist.length > 1 ? (hist[hist.length - 1] - hist[0]) : null
  };
  if ((p.points || 0) === 0) f.opNul = true;
  if (p.paid === false) f.nietBetaald = true;
  if (hk.exact) f.exacteUitslagen = hk.exact;
  if (hk.contra && hk.contra.share < 50) f.besteStunt = `${hk.contra.match} ${hk.contra.score} goed terwijl maar ${hk.contra.share}% dat zag`;
  if (hk.blunder) f.grofsteMisser = `${hk.blunder.match}: gokte ${hk.blunder.jij}, werd ${hk.blunder.echt}`;
  if (hk.streakNu >= 2) f.streakNu = hk.streakNu;
  if (hk.langsteStreak >= 3) f.langsteStreak = hk.langsteStreak;
  return f;
};

// Date-seeded PRNG → cast + dagslachtoffer roteren netjes per dag.
let seed = 0; for (const c of today) seed = (seed * 31 + c.charCodeAt(0)) >>> 0;
const rng = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const playerByName = (n) => POOL_PLAYERS.find((p) => p.name === n);

// 1) speler-takes — gegrond op rang/beweging/trend/picks (NIET op matches-veld)
const playerFacts = ranked.map(factOf);
const takesSys = persona + ' Schrijf voor ELKE speler één pittige take van 1-2 zinnen, gebaseerd op de gegeven feiten (rang, beweging, puntentrend en — indien aanwezig — exacte uitslagen, stunts, blunders, streak, betaling). NIET op aantal ingevulde duels. Antwoord als JSON: {"takes": {"<exacte spelernaam>": "<take>", ...}} voor alle spelers.';

// 2) dagmonoloog + hot-takes — gevarieerde cast dwars door de stand
const N = ranked.length;
const tierNames = (lo, hi) => ranked.slice(lo, hi).map((p) => p.name);
const pick = (names, k) => shuffle(names).slice(0, k);
const juicy = ranked.filter((p) => { const h = hookFor(p.name) || {}; return h.exact || h.contra || h.blunder || h.streakNu >= 2; }).map((p) => p.name);
const castNames = [...new Set([
  ...pick(tierNames(0, 5), 1),                       // hooguit 1 uit de top
  ...pick(tierNames(5, Math.max(5, N - 6)), 6),      // zwaartepunt: middenmoot
  ...pick(tierNames(Math.max(5, N - 6), N), 2),      // staart/nul
  ...pick(juicy, 4)                                  // sappige haakjes
])];
const cast = shuffle(castNames).slice(0, 14).map(playerByName).filter(Boolean).map(factOf);
const poolFacts = {
  datum: today, totaalSpelers: POOL_PLAYERS.length, koploper: leaders.join(' & '),
  koploperPunten: leaders.length ? (ranked[0].points || 0) : 0, aantalOpNul: nul.length, puntenLopen: pts, cast
};
const monoSys = persona + ' Hieronder een "cast" van spelers met hun feiten/haakjes. Schrijf (1) een dagmonoloog van 3-4 zinnen die MINSTENS 3 VERSCHILLENDE mensen uit de cast noemt (niet alleen de koploper), en (2) vijf hot-takes, ELK over een ÁNDERE persoon uit de cast — gebruik minstens 4 verschillende namen, de koploper hooguit één keer. Leun op de middenmoot en de sappige haakjes (exacte uitslagen, stunts, blunders, streaks, niet-betalers). Antwoord als JSON: {"monoloog": "...", "hotTakes": ["...", ... (5 stuks)]}.';

// 3) "Henk pakt aan vandaag" — roterend dagslachtoffer (niet de koploper, geen recente herhaling)
const history = Array.isArray(existingHenk.targetHistory) ? existingHenk.targetHistory : [];
const leaderSet = new Set(leaders);
const eligible = ranked.filter((p) => !leaderSet.has(p.name));
const recent = new Set(history.slice(-Math.max(0, Math.min(history.length, eligible.length - 1))));
let targetPool = eligible.filter((p) => !recent.has(p.name));
if (!targetPool.length) targetPool = eligible;
const target = targetPool.length ? shuffle(targetPool.map((p) => p.name))[0] : null;
const targetFact = target ? factOf(playerByName(target)) : null;
const targetSys = persona + ' Dit is het DOELWIT VAN DE DAG — Henk pakt vandaag specifiek deze speler aan. Schrijf een vlijmscherpe, originele roast van 2-3 korte zinnen, volledig gegrond op deze feiten. Antwoord als JSON: {"lines": ["<zin>", ... (2-3 zinnen)]}.';

if (DRYRUN) {
  console.log('— HENK DRYRUN — geen API-call.');
  console.log(`Spelers met haakjes: ${Object.keys(hooks).length}; gespeelde duels met picks: ${decided.length}`);
  console.log(`Cast (${cast.length}): ${cast.map((c) => c.naam).join(', ')}`);
  console.log(`Doelwit van de dag: ${target}  (recent uitgesloten: ${[...recent].join(', ') || '—'})`);
  console.log('Doelwit-feiten:', JSON.stringify(targetFact, null, 2));
  console.log('Cast-voorbeeld (3):', JSON.stringify(cast.slice(0, 3), null, 2));
  done('DRYRUN klaar.');
}

const [takesRes, monoRes, targetRes] = await Promise.all([
  ask(takesSys, 'Spelers (feiten):\n' + JSON.stringify(playerFacts)),
  ask(monoSys, 'Poule-feiten:\n' + JSON.stringify(poolFacts)),
  target ? ask(targetSys, 'Doelwit (feiten):\n' + JSON.stringify(targetFact)) : Promise.resolve(null)
]);

const henk = { generatedAt: today };
if (takesRes && takesRes.takes && typeof takesRes.takes === 'object') henk.playerTakes = takesRes.takes;
if (monoRes && monoRes.monoloog) henk.monoloog = monoRes.monoloog;
if (monoRes && Array.isArray(monoRes.hotTakes)) henk.hotTakes = monoRes.hotTakes;
if (target && targetRes && Array.isArray(targetRes.lines) && targetRes.lines.length) {
  henk.dailyTarget = { name: target, lines: targetRes.lines.slice(0, 3) };
}
// Alleen het slachtoffer 'verbruiken' als de roast ook echt gelukt is.
henk.targetHistory = henk.dailyTarget ? [...history, target].slice(-20) : history;

if (!henk.playerTakes && !henk.monoloog && !henk.hotTakes && !henk.dailyTarget) done('  ⚠ Niets gegenereerd — POOL_HENK ongewijzigd.');

const next = src.replace(/window\.POOL_HENK\s*=\s*\{[\s\S]*?\};/, `window.POOL_HENK = ${JSON.stringify(henk)};`);
writeFileSync(FILE, next, 'utf8');
console.log(`  ✓ POOL_HENK bijgewerkt (${today}): ${henk.playerTakes ? Object.keys(henk.playerTakes).length : 0} takes, monoloog:${!!henk.monoloog}, hotTakes:${henk.hotTakes ? henk.hotTakes.length : 0}, doelwit:${henk.dailyTarget ? henk.dailyTarget.name : '—'}`);
