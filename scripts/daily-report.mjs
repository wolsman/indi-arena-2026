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

const SITE = 'https://indi-arena-2026v3.vercel.app/';

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

// ── 4. Roast van de dag (roteert per dag — niet steeds hetzelfde slachtoffer) ──
const cocky = ranked.find((r) => /meestervoorspeller/i.test(r.p.name)) || (leaders.length ? ranked[0] : null);
const onNulR = onNul.length ? ranked.find((r) => r.p.name === onNul[0]) : null;
const candidates = [];
if (fallers[0]) candidates.push({ r: fallers[0], type: 'faller' });
if (onNulR) candidates.push({ r: onNulR, type: 'nul' });
if (cocky) candidates.push({ r: cocky, type: 'cocky' });
if (bottom[0]) candidates.push({ r: bottom[0], type: 'bottom' });
const roast = candidates.length ? candidates[now.getDate() % candidates.length] : null;
const roastTarget = roast ? roast.r : null;
let roastLine = '';
if (roast) {
  const nm = roast.r.p.name;
  const take = (HENK.player_takes && HENK.player_takes[nm]) || '';
  if (roast.type === 'faller') {
    roastLine = `${nm} duikelde ${-roast.r.delta} ${(-roast.r.delta) === 1 ? 'plek' : 'plekken'} omlaag. Gisteren held, vandaag materiaal voor mijn samenvatting. Voetbal is wreed — en ik geniet van elke seconde.`;
  } else if (roast.type === 'nul') {
    roastLine = `${nm} staat nóg op nul. Nul. De boot is allang weg, mensen, en ${nm} staat op de kade te zwaaien naar een schip dat niet terugkomt.`;
  } else if (roast.type === 'cocky') {
    roastLine = take || `${nm} staat lekker hoog en weet het zelf ook — reken maar. Geniet ervan: hoe hoger de toren, hoe harder de smak. Ik wacht geduldig.`;
  } else {
    roastLine = take || `Onderaan de mensen mét punten bivakkeert ${nm} (${roast.r.p.points} pt). Iemand moet de rode lantaarn dragen, en ${nm} doet het met verve. Omhoogvallen kan altijd nog.`;
  }
}

// ── 5. Tekst opbouwen ──
const dateLabel = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', timeZone: NL_TZ });
const hookName = (fallers[0] && fallers[0].p.name) || (onNul.length ? onNul[0] : null);
const subject = hookName
  ? `Indicium WK Poule · Henk neemt ${hookName} onder vuur — ${dateLabel}`
  : (leaders.length
      ? `Indicium WK Poule · ${leaders[0]} aan kop, Henk is niet onder de indruk — ${dateLabel}`
      : `Indicium WK Poule · Henk's dagrapport — ${dateLabel}`);

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
const pastHtml = todayPast.slice(0, 4).map((m) => wrapMatch(henkMatchPast(m))).join('');
const nextHtml = todayNext.slice(0, 4).map((m) => wrapMatch(henkMatch(m))).join('');

const standIntro = (leaders.length && leaderPts > 0)
  ? (leaders.length > 1
      ? `${leaders.slice(0, 3).join(', ')}${leaders.length > 3 ? ` +${leaders.length - 3}` : ''} delen de kop met ${leaderPts} punten. Bovenin is het dringen — en dringen veroorzaakt ongelukken.`
      : `${leaders[0]} staat bovenaan met ${leaderPts} punten. Geniet ervan: een voorsprong is geleend, nooit bezit.`)
  : `De punten moeten nog echt gaan lopen. Maar onthoud: wie nu lacht, lacht straks misschien als laatste.`;

const html = `
  <div style="background:#0a0e1a;color:#fff;font-family:Inter,Arial,sans-serif;padding:24px;max-width:600px;margin:0 auto;border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff3b5c);display:flex;align-items:center;justify-content:center;font-weight:900;color:#0a0e1a;font-size:18px">H</div>
      <div>
        <div style="font-weight:800;font-size:16px">Henk &middot; dagrapport</div>
        <div style="font-size:12px;color:#9aa6bd">Indicium WK Poule &middot; ${dateLabel}</div>
      </div>
    </div>
    ${P('Goeiemorgen, voetbalvolk. Henk hier met het dagrapport van de <b>Indicium WK Poule</b>. Pak je koffie — ik ga niemand sparen.')}
    ${H('De stand')}
    ${P(standIntro)}
    ${topHtml}
    ${(climbHtml || fallHtml) ? H('Klimmers &amp; duikelaars') + (climbHtml ? P('▲ ' + climbHtml + ' — sluipverkeer in het klassement, ik hou het bij.') : '') + (fallHtml ? P('▼ ' + fallHtml + ' — vrije val. Riemen vast.') : '') : ''}
    ${onNul.length ? H('De schaamlijst') + P(`Nog op <b>nul</b>: ${onNul.slice(0, 5).join(', ')}${onNul.length > 5 ? ` +${onNul.length - 5}` : ''}. Het toernooi draait, zij niet. Pijnlijk.`) : ''}
    ${today.length
      ? (pastHtml ? H(nextHtml ? 'Eerder vandaag gespeeld' : 'Vandaag gespeeld') + pastHtml : '')
        + (nextHtml ? H(pastHtml ? 'Komt nog vandaag' : 'Henk over vandaag') + nextHtml : '')
      : H('Vandaag') + P('Geen wedstrijden vandaag — een rustdag, zogenaamd. De ranglijst slaapt nooit, en ik ook niet.')}
    ${roastLine ? H('🔥 Roast van de dag') + `<div style="border-left:3px solid ${O};padding:10px 14px;background:rgba(255,107,0,.10);border-radius:8px"><p style="margin:0;line-height:1.6;color:#fff">${roastLine}</p></div>` : ''}
    ${P('Tot vanavond in de Arena — daar reken ik live af. — <b>Henk</b>')}
    <a href="${SITE}" style="display:inline-block;margin-top:8px;background:#ff6b00;color:#0a0e1a;font-weight:800;text-decoration:none;padding:13px 22px;border-radius:10px">Open de Arena &rarr;</a>
    <div style="margin-top:20px;font-size:11px;color:#5b6678">Indi-Arena 2026 &middot; Indicium WK Poule &middot; je krijgt deze mail omdat je bent toegelaten tot de poule.</div>
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
    recipients = (Array.isArray(data) ? data : []).map((m) => m.email).filter(Boolean);
    if (!Array.isArray(data)) console.log('Supabase-respons:', JSON.stringify(data).slice(0, 200));
  } catch (e) { console.log('Leden ophalen mislukt:', e.message); }
}
if (!recipients.length) { console.log('Geen ontvangers — niets verstuurd. (test_to leeg? of nog geen goedgekeurde leden?)'); process.exit(0); }

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
