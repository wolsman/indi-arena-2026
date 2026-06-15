/* ============================================================
   Henk's dagrapport — dagelijkse mail naar de goedgekeurde leden
   van de Indicium WK Poule. Draait in GitHub Actions (daily-report.yml),
   getriggerd door een dagelijkse cron-job.org-aanroep.

   Env (GitHub secrets):
     SUPABASE_URL, SUPABASE_SERVICE_KEY   (leden ophalen, RLS-bypass)
     GMAIL_USER, GMAIL_APP_PW             (versturen via Gmail SMTP)
     REPORT_TEST (optioneel)             (alleen naar dit adres sturen)
   ============================================================ */
import { readFileSync } from 'fs';

// .env.local lokaal inladen (bestaat niet in CI — daar komt env uit GitHub-secrets)
try {
  const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
  env.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  });
} catch { /* geen .env.local — prima */ }

const SITE = 'https://indi-arena-2026v3.vercel.app/';
const OPENAI_KEY = (process.env.OPENAI_API_KEY || '').trim();
const OPENAI_MODEL = (process.env.OPENAI_MODEL || 'gpt-4o').trim();

// ── 1. pool-data.js inladen (browserbestand → window-stub) ──
const window = {};
eval(readFileSync(new URL('../data/pool-data.js', import.meta.url), 'utf8'));
const POOL_PLAYERS = window.POOL_PLAYERS || [];
const POOL_CALENDAR = window.POOL_CALENDAR || [];
const POOL_META = window.POOL_META || {};
const HENK = window.HENK || {};

// ── 2. stand + bewegingen ──
const completeness = (p) => p.matches + (p.winner ? 6 : 0) + (p.topscorer ? 6 : 0);
const pts = POOL_META.pointsAvailable || POOL_PLAYERS.some((p) => (p.points || 0) > 0);
const sorted = [...POOL_PLAYERS].filter((p) => p.name).sort((a, b) =>
  pts ? ((b.points - a.points) || a.name.localeCompare(b.name, 'nl'))
      : (completeness(b) - completeness(a)) || a.name.localeCompare(b.name, 'nl'));
let lastVal = null, lastRank = 0;
const ranked = sorted.map((p, i) => {
  const v = pts ? (p.points || 0) : completeness(p);
  let rank; if (v === lastVal) rank = lastRank; else { rank = i + 1; lastVal = v; lastRank = rank; }
  const delta = typeof p.prevPos === 'number' ? p.prevPos - rank : null;
  return { p, rank, delta };
});
const leaders = ranked.filter((r) => r.rank === 1).map((r) => r.p.name);
const leaderPts = ranked[0] ? (ranked[0].p.points || 0) : 0;
const gapOf = (r) => leaderPts - (r.p.points || 0);
const top = ranked.slice(0, 5);
const climbers = ranked.filter((r) => r.delta > 0).sort((a, b) => b.delta - a.delta).slice(0, 3);
const fallers = ranked.filter((r) => r.delta < 0).sort((a, b) => a.delta - b.delta).slice(0, 3);
const onNul = ranked.filter((r) => (r.p.points || 0) === 0 && r.p.matches === 0).map((r) => r.p.name);
const bottom = ranked.filter((r) => (r.p.points || 0) > 0).slice(-3).reverse();

// ── 3. wedstrijden van vandaag (alles in NL-tijd — niet de UTC-runnertijd!) ──
const NL_TZ = 'Europe/Amsterdam';
const now = new Date();
const nowMs = now.getTime();
const fmtT = (d) => new Date(d).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', timeZone: NL_TZ });
const nlDay = (d) => new Date(d).toLocaleDateString('en-CA', { timeZone: NL_TZ }); // "YYYY-MM-DD" in NL-tijd
const isNL = (m) => /nederland/i.test(m.home) || /nederland/i.test(m.away);
const todayKey = nlDay(now);
const today = POOL_CALENDAR.filter((m) => nlDay(m.date) === todayKey)
  .sort((a, b) => new Date(a.date) - new Date(b.date));
const todayPast = today.filter((m) => new Date(m.date).getTime() <= nowMs); // al begonnen/gespeeld
const todayNext = today.filter((m) => new Date(m.date).getTime() > nowMs);  // moet nog beginnen

// uitslag-lookup (zelfde genormaliseerde sleutel als POOL_RESULTS: lowercase, zonder accenten/leestekens)
const POOL_RESULTS = window.POOL_RESULTS || {};
const normTeam = (s) => String(s).toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, ''); // NFD + filter strip ook accenten
const resultOf = (m) => POOL_RESULTS[`${normTeam(m.home)}|${normTeam(m.away)}`] || null;

function henkMatch(m) {
  const t = fmtT(m.date);
  if (isNL(m)) {
    const opp = /nederland/i.test(m.home) ? m.away : m.home;
    return `<b>${m.home} – ${m.away}</b> (${t}) — Oranje in actie. De halve poule kleurt blind oranje; durf eens tégen Nederland te gokken, lafaards. Ik hou de dwarsdenkers scherp in de gaten.`;
  }
  const variants = [
    `<b>${m.home} – ${m.away}</b> (${t}) — op papier duidelijk, op het veld nooit. Dé banana skin van de dag: wie te makkelijk gokte, krijgt straks de rekening.`,
    `<b>${m.home} – ${m.away}</b> (${t}) — de poule speelt dit op zeker. Saai, veilig, voorspelbaar. Eén lef-gok kan hier het verschil maken; de rest vult braaf 2-1 in.`,
    `<b>${m.home} – ${m.away}</b> (${t}) — hier zijn punten te pakken voor wie durft. Henk ruikt een verrassing, en onthoudt wie er wegkeek.`,
    `<b>${m.home} – ${m.away}</b> (${t}) — een duel dat niemand op de radar heeft. Precies daar wordt het klassement vanavond stilletjes herschud.`
  ];
  return variants[Math.abs(parseInt(m.id, 10) || 0) % variants.length];
}

// terugblik op een duel dat al begonnen/gespeeld is — verleden tijd, mét uitslag indien bekend
function henkMatchPast(m) {
  const r = resultOf(m);
  if (!r) {
    return `<b>${m.home} – ${m.away}</b> — is onderweg, uitslag nog niet binnen. Die druppelt zo de Arena in; check straks wie er goed gokte.`;
  }
  const score = ` <b style="color:#fff">${r.replace('-', '–')}</b>`;
  const [gh, ga] = r.split('-').map(Number);
  const draw = gh === ga;
  if (isNL(m)) {
    const nlHome = /nederland/i.test(m.home);
    const won = (nlHome && gh > ga) || (!nlHome && ga > gh);
    return `<b>${m.home} – ${m.away}</b> →${score}. ${draw ? 'Oranje morste punten — en de halve poule die blind 2-1 invulde, morste mee.' : won ? 'Oranje leverde; de oranje-gokkers juichen, de dwarsdenkers likken hun wonden.' : 'Oranje ging onderuit. Wie tégen Nederland dúrfde te gokken, lacht nu het hardst.'}`;
  }
  const lines = [
    `<b>${m.home} – ${m.away}</b> →${score}. ${draw ? 'Gelijkspel — de banana skin gleed precies zoals ik rook. Wie te makkelijk gokte, betaalt.' : 'Op papier duidelijk, en het veld luisterde. De voorzichtige gokkers pakken hun punten.'}`,
    `<b>${m.home} – ${m.away}</b> →${score}. Het klassement is alweer stilletjes herschud; straks in de Arena zie je wie er wakker van lag.`
  ];
  return lines[Math.abs(parseInt(m.id, 10) || 0) % lines.length];
}

// ── 3b. Held & sukkel van de nacht (voorspellingen vs. uitslag — keihard gegrond) ──
// POOL_PREDICTIONS is gesleuteld op kalenderindex; POOL_RESULTS op genormaliseerde teamnaam.
const POOL_PREDICTIONS = window.POOL_PREDICTIONS || {};
const sgn = (x) => (x > 0 ? 1 : x < 0 ? -1 : 0);
const RECENT_MS = 30 * 3600 * 1000; // ~laatste 30 uur = gisteravond + vannacht

function scoreMatch(i, m) {
  const r = resultOf(m);
  if (!r) return null;
  const [gh, ga] = r.split('-').map(Number);
  if (Number.isNaN(gh) || Number.isNaN(ga)) return null;
  const out = sgn(gh - ga);
  const preds = POOL_PREDICTIONS[i] || POOL_PREDICTIONS[String(i)] || [];
  const exact = [], miss = [];
  for (const p of preds) {
    if (p.h === gh && p.a === ga) exact.push(p);
    else if (sgn(p.h - p.a) !== out) miss.push(p); // verkeerde winnaar/uitkomst = echte blunder
  }
  // grootste blunder = pick die qua doelpunten het verst van de realiteit zat
  miss.sort((a, b) => (Math.abs(b.h - gh) + Math.abs(b.a - ga)) - (Math.abs(a.h - gh) + Math.abs(a.a - ga)));
  return { m, r, gh, ga, exact, miss, total: preds.length };
}

const recentFinished = POOL_CALENDAR
  .map((m, i) => ({ m, i }))
  .filter(({ m }) => resultOf(m) && new Date(m.date).getTime() <= nowMs && (nowMs - new Date(m.date).getTime()) <= RECENT_MS)
  .sort((a, b) => new Date(a.m.date) - new Date(b.m.date))
  .map(({ m, i }) => scoreMatch(i, m))
  .filter(Boolean);

function heldSukkelLine(s) {
  const score = `<b style="color:#fff">${s.r.replace('-', '–')}</b>`;
  const names = (arr, n = 3) => arr.slice(0, n).map((p) => p.player).join(', ') + (arr.length > n ? ` +${arr.length - n}` : '');
  if (s.total === 0) {
    return `<b>${s.m.home} – ${s.m.away}</b> → ${score}<br><span style="color:#9aa6bd">de Arena rekent de punten nog af — straks zie je wie 'm had.</span>`;
  }
  let held;
  if (s.exact.length === 1) held = `🏅 als énige exact: <b>${s.exact[0].player}</b> — chapeau`;
  else if (s.exact.length >= 2 && s.exact.length <= 4) held = `🏅 exact gegokt door <b>${names(s.exact)}</b>`;
  else if (s.exact.length > 4) held = `🏅 ${s.exact.length} mensen hadden 'm exact — knappe kudde`;
  else held = `🏅 niemand had de juiste uitslag, dit zag de hele poule fout`;
  let sukkel = '';
  if (s.miss.length) {
    const b = s.miss[0];
    const err = Math.abs(b.h - s.gh) + Math.abs(b.a - s.ga); // doelpunten ernaast
    // alleen een echte sukkel benoemen: verkeerde winnaar én flink ernaast (geen bijna-goed)
    if (err >= 3) sukkel = ` &nbsp;·&nbsp; 🤡 <b>${b.player}</b> gokte ${b.h}-${b.a} en zat er straal naast`;
  }
  return `<b>${s.m.home} – ${s.m.away}</b> → ${score}<br><span style="color:#9aa6bd">${held}${sukkel}.</span>`;
}

// "held van de nacht" voor de onderwerpregel: een uitslag die maar één iemand exact had
const nightHero = recentFinished
  .filter((s) => s.exact.length === 1)
  .map((s) => ({ player: s.exact[0].player, m: s.m, r: s.r }))
  .slice(-1)[0] || null;

// ── 4. Roast van de dag (roteert per dag — niet steeds hetzelfde slachtoffer) ──
const cocky = ranked.find((r) => /meestervoorspeller/i.test(r.p.name)) || (leaders.length ? ranked[0] : null);
const onNulR = onNul.length ? ranked.find((r) => r.p.name === onNul[0]) : null;
const candidates = [];
if (fallers[0]) candidates.push({ r: fallers[0], type: 'faller' });
if (onNulR) candidates.push({ r: onNulR, type: 'nul' });
if (cocky) candidates.push({ r: cocky, type: 'cocky' });
if (bottom[0]) candidates.push({ r: bottom[0], type: 'bottom' });
const roast = candidates.length ? candidates[now.getDate() % candidates.length] : null;
let roastLine = '';
if (roast) {
  const nm = roast.r.p.name;
  // player_takes alléén voor de meestervoorspeller — andere takes leunen op het
  // onbetrouwbare `matches`-veld ("9 duels ingevuld") en zouden Henk laten liegen.
  const safeTake = /meestervoorspeller/i.test(nm) && HENK.player_takes ? HENK.player_takes[nm] : '';
  if (roast.type === 'faller') {
    roastLine = `${nm} kukelde ${-roast.r.delta} ${(-roast.r.delta) === 1 ? 'plek' : 'plekken'} omlaag. Gisteren nog een naam, vandaag een voetnoot in mijn samenvatting. Voetbal is meedogenloos — en ik, toevallig, ook.`;
  } else if (roast.type === 'nul') {
    roastLine = `${nm} staat nóg op nul. Niet één pick, niet één punt. De rest speelt een toernooi; ${nm} speelt verstoppertje met het invulformulier. De boot is weg, mensen — zwaaien heeft geen zin meer.`;
  } else if (roast.type === 'cocky') {
    roastLine = safeTake || `${nm} torent boven de poule uit met ${roast.r.p.points} punten en weet het zelf maar al te goed. Onthoud dit moment, ${nm}: ik heb een lange lijst van mensen die te vroeg juichten — en jouw naam staat er met potlood al bij.`;
  } else {
    roastLine = `Helemaal onderin bij de mensen mét punten: ${nm} (${roast.r.p.points} pt). Iemand moet de rode lantaarn dragen, en ${nm} klemt 'm vast alsof het een beker is. Omhoogvallen kan altijd nog — al wordt het krap.`;
  }
}

// ── 5. Tekst opbouwen ──
const dateLabel = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', timeZone: NL_TZ });
const subjectHooks = [];
if (nightHero) subjectHooks.push(`${nightHero.player} had ${nightHero.m.home}–${nightHero.m.away} (${nightHero.r}) als énige exact`);
if (leaders.length && leaderPts > 0) subjectHooks.push(`${leaders[0]} aan kop met ${leaderPts} — Henk is niet onder de indruk`);
if (onNul.length) subjectHooks.push(`${onNul.length} ${onNul.length === 1 ? 'deelnemer staat' : 'deelnemers staan'} nóg op nul — Henk noemt namen`);
if (!subjectHooks.length) subjectHooks.push(`Henk's dagrapport`);
const subject = `Indicium WK Poule · ${subjectHooks[now.getDate() % subjectHooks.length]} — ${dateLabel}`;

const O = '#ff6b00';
const H = (t) => `<div style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:${O};font-weight:800;margin:20px 0 8px">${t}</div>`;
const P = (t) => `<p style="line-height:1.6;margin:0 0 10px;color:#e8edf6">${t}</p>`;

const topHtml = top.map((r, i) => {
  const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${r.rank}.`;
  const g = i === 0 ? '' : ` <span style="color:#9aa6bd">(−${gapOf(r)})</span>`;
  return `<div style="padding:6px 0;border-bottom:1px solid #1a2238"><b>${medal} ${r.p.name}</b> — ${r.p.points} pt${g}</div>`;
}).join('');

const climbHtml = climbers.length ? climbers.map((r) => `${r.p.name} <span style="color:#0eb84a">▲${r.delta}</span>`).join(' &nbsp;·&nbsp; ') : '';
const fallHtml = fallers.length ? fallers.map((r) => `${r.p.name} <span style="color:#ff3b5c">▼${-r.delta}</span>`).join(' &nbsp;·&nbsp; ') : '';
const wrapMatch = (s) => `<p style="line-height:1.55;margin:0 0 10px;color:#e8edf6">${s}</p>`;
const heldHtml = recentFinished.map((s) => wrapMatch(heldSukkelLine(s))).join('');
// fallback: afgelopen duels van vandaag zónder voorspellingen (zeldzaam) — toch even tonen
const pastFallbackHtml = (!recentFinished.length)
  ? todayPast.filter((m) => resultOf(m)).slice(0, 4).map((m) => wrapMatch(henkMatchPast(m))).join('')
  : '';
const nextHtml = todayNext.slice(0, 4).map((m) => wrapMatch(henkMatch(m))).join('');

// gat naar nr. 2 + de grootste gedeelde-punten-kluwen (voor de standduiding)
const second = ranked.find((r) => r.rank === 2);
const gapTo2 = second ? leaderPts - (second.p.points || 0) : 0;
const tieGroups = {};
ranked.forEach((r) => { const v = r.p.points || 0; (tieGroups[v] = tieGroups[v] || []).push(r.p.name); });
const biggestTie = Object.entries(tieGroups)
  .filter(([v, n]) => Number(v) > 0 && n.length >= 2)
  .sort((a, b) => b[1].length - a[1].length || Number(b[0]) - Number(a[0]))[0];
const packLine = biggestTie
  ? `${biggestTie[1].slice(0, 3).join(', ')}${biggestTie[1].length > 3 ? ` (+${biggestTie[1].length - 3})` : ''} hangen op ${biggestTie[0]} punten aan elkaar vast — één goede speeldag en die hele kluwen schuift door elkaar.`
  : '';

const standIntro = (leaders.length && leaderPts > 0)
  ? (leaders.length > 1
      ? `${leaders.slice(0, 3).join(', ')}${leaders.length > 3 ? ` +${leaders.length - 3}` : ''} delen de kop met ${leaderPts} punten. Bovenin is het dringen — en dringen veroorzaakt ongelukken.`
      : `<b>${leaders[0]}</b> staat bovenaan met ${leaderPts} punten${gapTo2 > 0 ? `, ${gapTo2} los van nummer twee` : ''}. Geniet ervan, ${leaders[0]} — een voorsprong is geleend, nooit bezit, en ik ken de bank die 'm terugvraagt.`)
  : `De punten moeten nog echt gaan lopen. Maar onthoud: wie nu het hardst lacht, lacht straks vaak als laatste.`;

// wisselende, fellere opener
const openers = [
  'Goeiemorgen, voetbalvolk. Henk hier. Koffie gepakt? Mooi — want ik ga vanochtend niemand sparen.',
  'Daar ben ik weer. Henk, met het rapport dat niemand dúrft te schrijven en iedereen stiekem leest.',
  'Opstaan, kampioenen-in-eigen-hoofd. Henk heeft de cijfers, en de cijfers liegen niet — jullie wel.',
  'Henk hier. Ik heb vannacht jullie voorspellingen gelezen. Eentje was scherp. De rest was een hulpkreet.'
];
const opener = openers[now.getDate() % openers.length];

// wervingsblok + korte handleiding (gegrond op de echte magic-link-flow)
const stepP = (t) => `<p style="line-height:1.55;margin:0 0 8px;color:#e8edf6">${t}</p>`;
const signupHtml = H('📣 Nog geen account voor de Arena?')
  + P('Speel je mee in de poule, maar mis je het dashboard nog? Dáár zie je je eigen positie, ieders voorspellingen, de live tussenstanden — en mij, Henk, die alles van commentaar voorziet. Aanmelden kost je 30 seconden:')
  + `<div style="border:1px solid #1a2238;border-radius:10px;padding:12px 14px;margin:0 0 12px">`
  + stepP(`<b style="color:${O}">1.</b> Ga naar <b>indi-arena-2026v3.vercel.app</b> en vul je e-mailadres in → <i>Stuur inloglink</i>.`)
  + stepP(`<b style="color:${O}">2.</b> Klik op de link in je mail (geen wachtwoord nodig) en kies je <b>poule-naam</b> — dezelfde als op wkpooltjes.`)
  + stepP(`<b style="color:${O}">3.</b> Heel even geduld terwijl ik je binnenlaat. Daarna sta je in de Arena. Welkom.`)
  + `</div>`;

// ── 5a. Henk schrijft (OpenAI gpt-4o) — verse stem bovenop de harde cijfers ──
// De cijfers (stand, held/sukkel) blijven door de code gerenderd; Henk krijgt ze
// als enige bron van waarheid en schrijft de stem eromheen. Faalt de call → sjablonen.
async function henkWrite(briefing) {
  if (!OPENAI_KEY) return null;
  const system = [
    'Je bent Henk, vaste analist van de Indicium WK Poule — kantinepraat met een scherp mes, stijl Voetbal Inside: fel, gevat, mag roasten. Schrijf in het Nederlands.',
    'STRENGE REGELS:',
    '- Gebruik UITSLUITEND de feiten uit de briefing. Verzin NOOIT namen, scores, punten of statistieken.',
    '- Roast op picks, invulgedrag en stand — NOOIT op uiterlijk of de persoon zelf.',
    '- Geen verzonnen puntenprojecties. Kort en pittig, geen emoji-spam. Je mag <b>…</b> voor nadruk gebruiken.',
    'Antwoord als JSON met exact deze velden (platte tekst, mag <b> bevatten):',
    '{"opener","standTake","nachtTake","vandaagTake","roast"}',
    '- opener: 1-2 zinnen begroeting/aftrap.',
    '- standTake: 1-2 zinnen duiding van de stand (koploper, gat, de punten-file).',
    '- nachtTake: 2-3 zinnen over de gespeelde duels en wie goed/fout gokte (gebruik exacte namen/scores uit de briefing).',
    '- vandaagTake: 1-2 zinnen vooruitblik op de duels van vandaag; lege string als er geen zijn.',
    '- roast: 2-3 zinnen scherpe "roast van de dag", gericht op de roastKandidaat.'
  ].join('\n');
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_KEY}` },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        temperature: 0.9,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: 'Briefing met alle feiten van vandaag:\n' + JSON.stringify(briefing, null, 2) }
        ]
      })
    });
    if (!res.ok) { console.log(`  ⚠ OpenAI ${res.status} — Henk valt terug op sjablonen`); return null; }
    const data = await res.json();
    const txt = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    return txt ? JSON.parse(txt) : null;
  } catch (e) {
    console.log(`  ⚠ OpenAI-call mislukt (${e.message}) — Henk valt terug op sjablonen`);
    return null;
  }
}

const briefing = {
  datum: dateLabel,
  koplopers: leaders,
  koploperPunten: leaderPts,
  gatNaarNr2: gapTo2,
  top5: top.map((r) => ({ naam: r.p.name, punten: r.p.points || 0, rang: r.rank })),
  puntenFile: biggestTie ? { punten: Number(biggestTie[0]), namen: biggestTie[1] } : null,
  klimmers: climbers.map((r) => ({ naam: r.p.name, plekken: r.delta })),
  dalers: fallers.map((r) => ({ naam: r.p.name, plekken: -r.delta })),
  opNul: onNul,
  gespeeldeDuels: recentFinished.map((s) => ({
    duel: `${s.m.home}–${s.m.away}`,
    uitslag: s.r,
    exactGegokt: s.exact.map((p) => p.player),
    grootsteMisser: s.miss[0] ? { speler: s.miss[0].player, gok: `${s.miss[0].h}-${s.miss[0].a}` } : null
  })),
  vandaagKomtNog: todayNext.map((m) => ({ duel: `${m.home}–${m.away}`, tijd: fmtT(m.date), oranje: isNL(m) })),
  roastKandidaat: roast ? {
    type: roast.type, naam: roast.r.p.name, punten: roast.r.p.points || 0,
    plekkenGezakt: roast.type === 'faller' ? -roast.r.delta : undefined
  } : null
};
const henk = await henkWrite(briefing);
console.log(henk ? '  ✓ Henk geschreven door OpenAI' : '  · Henk via sjablonen');

const html = `
  <div style="background:#0a0e1a;color:#fff;font-family:Inter,Arial,sans-serif;padding:24px;max-width:600px;margin:0 auto;border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff3b5c);display:flex;align-items:center;justify-content:center;font-weight:900;color:#0a0e1a;font-size:18px">H</div>
      <div>
        <div style="font-weight:800;font-size:16px">Henk &middot; dagrapport</div>
        <div style="font-size:12px;color:#9aa6bd">Indicium WK Poule &middot; ${dateLabel}</div>
      </div>
    </div>
    ${P((henk && henk.opener) || opener)}
    ${H('De stand')}
    ${P((henk && henk.standTake) || standIntro)}
    ${(!henk && packLine) ? P(packLine) : ''}
    ${topHtml}
    ${(climbHtml || fallHtml) ? H('Klimmers &amp; duikelaars') + (climbHtml ? P('▲ ' + climbHtml + ' — sluipverkeer in het klassement, ik hou het bij.') : '') + (fallHtml ? P('▼ ' + fallHtml + ' — vrije val. Riemen vast.') : '') : ''}
    ${heldHtml ? H('🏅 Held &amp; 🤡 sukkel van de nacht') + ((henk && henk.nachtTake) ? P(henk.nachtTake) : '') + heldHtml : (pastFallbackHtml ? H('Eerder gespeeld') + pastFallbackHtml : '')}
    ${onNul.length ? H('De schaamlijst') + P(`Nog altijd op <b>nul</b>: ${onNul.slice(0, 6).join(', ')}${onNul.length > 6 ? ` +${onNul.length - 6}` : ''}. Geen pick, geen punt, geen excuus. Het toernooi dendert door; zij staan erbij, kijken ernaar — en betalen straks vrolijk mee aan andermans prijs.`) : ''}
    ${nextHtml ? H(heldHtml || pastFallbackHtml ? 'Komt nog vandaag' : 'Henk over vandaag') + ((henk && henk.vandaagTake) ? P(henk.vandaagTake) : '') + nextHtml : ''}
    ${(!today.length && !heldHtml && !pastFallbackHtml) ? H('Vandaag') + P('Geen wedstrijden vandaag — een rustdag, zogenaamd. De ranglijst slaapt nooit, en ik ook niet.') : ''}
    ${roastLine ? H('🔥 Roast van de dag') + `<div style="border-left:3px solid ${O};padding:10px 14px;background:rgba(255,107,0,.10);border-radius:8px"><p style="margin:0;line-height:1.6;color:#fff">${(henk && henk.roast) || roastLine}</p></div>` : ''}
    ${P('Tot vanavond in de Arena — daar reken ik live af. — <b>Henk</b>')}
    <a href="${SITE}" style="display:inline-block;margin:8px 0 4px;background:#ff6b00;color:#0a0e1a;font-weight:800;text-decoration:none;padding:13px 22px;border-radius:10px">Open de Arena &rarr;</a>
    ${signupHtml}
    <div style="margin-top:20px;font-size:11px;color:#5b6678">Indi-Arena 2026 &middot; Indicium WK Poule &middot; je krijgt deze mail omdat je bent toegelaten tot de poule. Ken je een poule-genoot die het dashboard nog mist? Stuur 'm gerust door.</div>
  </div>`;

// ── 5b. preview-modus (schrijf naar schijf, verstuur NIETS) ──
if ((process.env.REPORT_PREVIEW || '').trim()) {
  const { writeFileSync } = await import('fs');
  const out = new URL('../mail-daily-preview.html', import.meta.url);
  writeFileSync(out, `<!doctype html><meta charset="utf-8"><title>${subject}</title>` +
    `<div style="font-family:Arial;background:#05070f;padding:16px;color:#9aa6bd">` +
    `<div style="margin-bottom:12px;font-size:13px">Onderwerp: <b style="color:#fff">${subject}</b></div></div>` + html);
  console.log(`Preview geschreven → mail-daily-preview.html`);
  console.log(`Onderwerp: ${subject}`);
  process.exit(0);
}

// ── 6. ontvangers ──
const TEST_TO = (process.env.REPORT_TEST || '').trim();
let recipients = [];
if (TEST_TO) {
  recipients = [TEST_TO];
} else {
  const url = `${process.env.SUPABASE_URL}/rest/v1/members?status=eq.approved&select=email`;
  try {
    const res = await fetch(url, { headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}` } });
    const data = await res.json();
    const raw = (Array.isArray(data) ? data : []).map((m) => (m.email || '').trim()).filter(Boolean);
    const seen = new Set();
    recipients = raw.filter((e) => { const k = e.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });
    if (raw.length !== recipients.length) console.log(`(${raw.length - recipients.length} dubbele adres(sen) ontdubbeld)`);
    if (!Array.isArray(data)) console.log('Supabase-respons:', JSON.stringify(data).slice(0, 200));
  } catch (e) { console.log('Leden ophalen mislukt:', e.message); }
}
if (!recipients.length) { console.log('Geen ontvangers — niets verstuurd. (test_to leeg? of nog geen goedgekeurde leden?)'); process.exit(0); }

// ── 6b. dubbel-verstuur-guard: claim de dag van vandaag atomair (alleen bij de echte broadcast) ──
// Vereist tabel: create table public.report_log (report_date date primary key, sent_at timestamptz default now());
if (!TEST_TO && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
  try {
    const claim = await fetch(`${process.env.SUPABASE_URL}/rest/v1/report_log`, {
      method: 'POST',
      headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ report_date: todayKey })
    });
    if (claim.status === 409) { console.log(`Dagrapport voor ${todayKey} is vandaag al verstuurd — overslaan (dubbel-guard).`); process.exit(0); }
    if (!claim.ok && claim.status !== 201) console.log(`⚠ report_log-claim faalde (${claim.status}) — ga toch door, zonder dubbel-guard deze run.`);
  } catch (e) { console.log(`⚠ report_log-claim onbereikbaar (${e.message}) — ga toch door.`); }
}

// ── 7. versturen via Gmail SMTP ──
const nodemailer = (await import('nodemailer')).default;
const tx = nodemailer.createTransport({
  host: 'smtp.gmail.com', port: 465, secure: true,
  auth: { user: process.env.GMAIL_USER, pass: (process.env.GMAIL_APP_PW || '').replace(/\s+/g, '') }
});
let ok = 0;
for (const to of recipients) {
  try {
    await tx.sendMail({ from: `Henk · Indicium WK Poule <${process.env.GMAIL_USER}>`, to, subject, html });
    ok++;
    await new Promise((r) => setTimeout(r, 400));
  } catch (e) {
    console.log(`  ✗ ${to}: ${e.message}`);
  }
}
console.log(`✓ Dagrapport verstuurd naar ${ok}/${recipients.length} ${TEST_TO ? '(TEST)' : 'leden'}.`);
