/* ============================================================
   Henk's dagrapport — dagelijkse mail naar de goedgekeurde leden.
   Draait in GitHub Actions (workflow daily-report.yml), getriggerd
   door een dagelijkse cron-job.org-aanroep.

   Env (GitHub secrets):
     SUPABASE_URL, SUPABASE_SERVICE_KEY   (leden ophalen, RLS-bypass)
     GMAIL_USER, GMAIL_APP_PW             (versturen via Gmail SMTP)
     REPORT_TEST (optioneel)             (alleen naar dit adres sturen)
   ============================================================ */
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';

const SITE = 'https://indi-arena-2026v3.vercel.app/';

// ── 1. pool-data.js inladen (browserbestand → window-stub) ──
const window = {};
eval(readFileSync(new URL('../data/pool-data.js', import.meta.url), 'utf8'));
const POOL_PLAYERS = window.POOL_PLAYERS || [];
const POOL_CALENDAR = window.POOL_CALENDAR || [];
const POOL_META = window.POOL_META || {};

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
const leaderPts = ranked[0] ? ranked[0].p.points : 0;
let climber = null, faller = null;
ranked.forEach((r) => {
  if (r.delta > 0 && (!climber || r.delta > climber.delta)) climber = r;
  if (r.delta < 0 && (!faller || r.delta < faller.delta)) faller = r;
});

// ── 3. wedstrijden van vandaag ──
const now = new Date();
const fmtT = (d) => new Date(d).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
const today = POOL_CALENDAR.filter((m) => {
  const d = new Date(m.date);
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
}).sort((a, b) => new Date(a.date) - new Date(b.date));
const isNL = (m) => /nederland/i.test(m.home) || /nederland/i.test(m.away);
const matchOfDay = today.find(isNL) || today[0] || null;

// ── 4. Henks tekst ──
const dateLabel = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });
const lines = [];
if (leaders.length && leaderPts > 0) {
  lines.push(leaders.length > 1
    ? `Bovenaan is het dringen: ${leaders.slice(0, 3).join(', ')} delen de kop met ${leaderPts} punten. Eén misstap en de boel kantelt.`
    : `${leaders[0]} staat nog fier bovenaan met ${leaderPts} punten. Geniet ervan — een voorsprong is geleend, nooit bezit.`);
}
if (climber) lines.push(`Stijger van het moment: ${climber.p.name} klimt ${climber.delta} ${climber.delta === 1 ? 'plek' : 'plekken'}. Sluipverkeer in het klassement, ik hou 'm in de gaten.`);
if (faller) lines.push(`En ${faller.p.name} zakt ${-faller.delta} ${(-faller.delta) === 1 ? 'plek' : 'plekken'} — gisteren held, vandaag inhoudelijk materiaal voor mijn samenvatting.`);
if (matchOfDay) {
  lines.push(isNL(matchOfDay)
    ? `Wedstrijd van de dag: <b>${matchOfDay.home} – ${matchOfDay.away}</b> om ${fmtT(matchOfDay.date)}. Oranje in actie — de halve poule durft niet tegen Nederland te gokken. Slappelingen.`
    : `Wedstrijd van de dag: <b>${matchOfDay.home} – ${matchOfDay.away}</b> om ${fmtT(matchOfDay.date)}. Zet 'm in je agenda.`);
} else {
  lines.push(`Vandaag geen wedstrijden — een rustdag, zogenaamd. De ranglijst slaapt nooit.`);
}
lines.push(`Tot in de Arena. — Henk`);

const subject = `Henk's dagrapport — ${dateLabel}`;
const html = `
  <div style="background:#0a0e1a;color:#fff;font-family:Inter,Arial,sans-serif;padding:24px;max-width:560px;margin:0 auto;border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff3b5c);display:flex;align-items:center;justify-content:center;font-weight:900;color:#0a0e1a">H</div>
      <div><div style="font-weight:800">Henk · dagrapport</div><div style="font-size:12px;color:#9aa6bd">${dateLabel}</div></div>
    </div>
    ${lines.map((l) => `<p style="line-height:1.6;margin:0 0 12px;color:#e8edf6">${l}</p>`).join('')}
    <a href="${SITE}" style="display:inline-block;margin-top:8px;background:#ff6b00;color:#0a0e1a;font-weight:800;text-decoration:none;padding:12px 20px;border-radius:10px">Open de Arena &rarr;</a>
    <div style="margin-top:18px;font-size:11px;color:#5b6678">Indi-Arena 2026 · Indicium WK Poule</div>
  </div>`;

// ── 5. ontvangers ──
const TEST_TO = (process.env.REPORT_TEST || '').trim();
let recipients = [];
if (TEST_TO) {
  recipients = [TEST_TO];
} else {
  const url = `${process.env.SUPABASE_URL}/rest/v1/members?status=eq.approved&select=email`;
  const res = await fetch(url, { headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}` } });
  const data = await res.json();
  recipients = (Array.isArray(data) ? data : []).map((m) => m.email).filter(Boolean);
}
if (!recipients.length) { console.log('Geen ontvangers — niets verstuurd.'); process.exit(0); }

// ── 6. versturen via Gmail SMTP ──
const tx = nodemailer.createTransport({
  host: 'smtp.gmail.com', port: 465, secure: true,
  auth: { user: process.env.GMAIL_USER, pass: (process.env.GMAIL_APP_PW || '').replace(/\s+/g, '') }
});
let ok = 0;
for (const to of recipients) {
  try {
    await tx.sendMail({ from: `Henk · Indi-Arena <${process.env.GMAIL_USER}>`, to, subject, html });
    ok++;
    await new Promise((r) => setTimeout(r, 400)); // rustig aan tegen limieten
  } catch (e) {
    console.log(`  ✗ ${to}: ${e.message}`);
  }
}
console.log(`✓ Dagrapport verstuurd naar ${ok}/${recipients.length} ${TEST_TO ? '(TEST)' : 'leden'}.`);
