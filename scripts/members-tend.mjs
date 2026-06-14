/* ============================================================
   Indi-Arena — ledenonderhoud (welkom + pending-seintje)
   Draait periodiek in GitHub Actions (members-tend.yml),
   getriggerd door cron-job.org (bv. elk uur).

   Doet twee dingen, idempotent via vlag-kolommen:
   1) WELKOM: stuurt elk goedgekeurd lid dat nog geen welkom kreeg
      (welcomed_at IS NULL) een 'je bent binnen'-mail van Henk en
      zet daarna welcomed_at.
   2) PENDING-SEINTJE: meldt de beheerder (REPORT_ADMIN of GMAIL_USER)
      welke nieuwe aanmeldingen op goedkeuring wachten
      (status=pending, pending_notified_at IS NULL) en zet daarna
      pending_notified_at.

   Vereiste schema-kolommen (eenmalig in Supabase toevoegen):
     alter table public.members add column if not exists welcomed_at timestamptz;
     alter table public.members add column if not exists pending_notified_at timestamptz;

   Env (GitHub secrets):
     SUPABASE_URL, SUPABASE_SERVICE_KEY   (RLS-bypass)
     GMAIL_USER, GMAIL_APP_PW             (Gmail SMTP)
     REPORT_ADMIN (optioneel)             (ontvanger pending-seintje; default GMAIL_USER)
     MEMBERS_DRYRUN (optioneel)           (alles loggen, niets sturen/schrijven)
   ============================================================ */

const SITE = 'https://indi-arena-2026v3.vercel.app/';
const SB = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_KEY;
const ADMIN = (process.env.REPORT_ADMIN || process.env.GMAIL_USER || '').trim();
const DRY = !!(process.env.MEMBERS_DRYRUN || '').trim();

if (!SB || !KEY) { console.log('Supabase-config ontbreekt — niets te doen.'); process.exit(0); }

const sbHeaders = { apikey: KEY, Authorization: `Bearer ${KEY}` };
const sbGet = async (q) => {
  const r = await fetch(`${SB}/rest/v1/${q}`, { headers: sbHeaders });
  if (!r.ok) { console.log(`  ⚠ Supabase GET ${q} → ${r.status}`); return []; }
  const j = await r.json();
  return Array.isArray(j) ? j : [];
};
const sbPatch = (q, body) => fetch(`${SB}/rest/v1/${q}`, {
  method: 'PATCH',
  headers: { ...sbHeaders, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
  body: JSON.stringify(body)
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

// ── e-mail-styling (zelfde donkere kaart als het dagrapport) ──
const O = '#ff6b00';
const card = (inner) =>
  `<div style="background:#0a0e1a;color:#fff;font-family:Inter,Arial,sans-serif;padding:24px;max-width:600px;margin:0 auto;border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff3b5c);display:flex;align-items:center;justify-content:center;font-weight:900;color:#0a0e1a;font-size:18px">H</div>
      <div><div style="font-weight:800;font-size:16px">Henk &middot; Indi-Arena</div>
      <div style="font-size:12px;color:#9aa6bd">Indicium WK Poule</div></div>
    </div>${inner}
  </div>`;
const btn = `<a href="${SITE}" style="display:inline-block;margin-top:8px;background:${O};color:#0a0e1a;font-weight:800;text-decoration:none;padding:13px 22px;border-radius:10px">Open de Arena &rarr;</a>`;

const welcomeSubject = (m) => `Welkom in de Arena${m.poule_naam ? `, ${m.poule_naam}` : ''} — Indicium WK Poule`;
const welcomeHtml = (m) => card(
  `<p style="line-height:1.6;margin:0 0 10px;color:#e8edf6">Daar ben je. <b>${esc(m.poule_naam) || 'Speler'}</b>, je bent toegelaten tot de Arena — welkom bij de Indicium WK Poule.</p>
   <p style="line-height:1.6;margin:0 0 10px;color:#e8edf6">Vanaf nu zie je live waar je staat, wat iedereen heeft voorspeld en hoe de tussenstanden lopen. En je krijgt mijn dagrapport: de stand, de helden, de sukkels en de roast van de dag. Ik zeg het maar vast: ik ga je niet sparen.</p>
   <p style="line-height:1.6;margin:0 0 14px;color:#e8edf6">Tot in de Arena.<br>— <b>Henk</b></p>
   ${btn}`
);

const pendingSubject = (n) => `[Indi-Arena] ${n} ${n === 1 ? 'aanmelding wacht' : 'aanmeldingen wachten'} op goedkeuring`;
const pendingHtml = (list) => card(
  `<p style="line-height:1.6;margin:0 0 10px;color:#e8edf6">Er ${list.length === 1 ? 'staat 1 nieuwe aanmelding' : `staan ${list.length} nieuwe aanmeldingen`} klaar voor goedkeuring in de Beheer-tab:</p>
   <div style="border:1px solid #1a2238;border-radius:10px;padding:6px 14px;margin:0 0 12px">
     ${list.map((m) => `<div style="padding:6px 0;border-bottom:1px solid #1a2238"><b>${esc(m.poule_naam) || '(geen naam)'}</b> <span style="color:#9aa6bd">— ${esc(m.email)}</span></div>`).join('')}
   </div>
   <p style="line-height:1.6;margin:0 0 14px;color:#9aa6bd">Open de Arena en ga naar Beheer om goed te keuren of af te wijzen.</p>
   ${btn}`
);

const run = async () => {
  console.log(`▸ members-tend${DRY ? ' (DRY-RUN — niets wordt verstuurd/geschreven)' : ''}`);
  const from = `Henk · Indicium WK Poule <${process.env.GMAIL_USER}>`;
  let tx = null;
  const mailer = async () => {
    if (!tx) {
      const nodemailer = (await import('nodemailer')).default;
      tx = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465, secure: true,
        auth: { user: process.env.GMAIL_USER, pass: (process.env.GMAIL_APP_PW || '').replace(/\s+/g, '') }
      });
    }
    return tx;
  };

  // 1) WELKOM
  const toWelcome = await sbGet('members?status=eq.approved&welcomed_at=is.null&select=id,email,poule_naam');
  let okW = 0;
  for (const m of toWelcome) {
    if (!m.email) continue;
    try {
      if (DRY) { console.log(`  · zou welkom sturen → ${m.email} (${m.poule_naam || '?'})`); okW++; continue; }
      await (await mailer()).sendMail({ from, to: m.email, subject: welcomeSubject(m), html: welcomeHtml(m) });
      const pr = await sbPatch(`members?id=eq.${m.id}`, { welcomed_at: new Date().toISOString() });
      if (!pr.ok) console.log(`  ⚠ welcomed_at niet gezet voor ${m.email} (${pr.status}) — kan dubbel worden`);
      okW++;
      await sleep(400);
    } catch (e) { console.log(`  ✗ welkom ${m.email}: ${e.message}`); }
  }
  console.log(`  ✓ welkom: ${okW}/${toWelcome.length}`);

  // 2) PENDING-SEINTJE
  const pend = await sbGet('members?status=eq.pending&pending_notified_at=is.null&select=id,email,poule_naam,created_at');
  if (!pend.length) {
    console.log('  ✓ pending: geen nieuwe aanmeldingen');
  } else if (!ADMIN) {
    console.log(`  ⚠ ${pend.length} pending, maar geen REPORT_ADMIN/GMAIL_USER om naar te melden`);
  } else {
    try {
      if (DRY) {
        console.log(`  · zou pending-seintje sturen → ${ADMIN}: ${pend.map((m) => m.poule_naam || m.email).join(', ')}`);
      } else {
        await (await mailer()).sendMail({ from, to: ADMIN, subject: pendingSubject(pend.length), html: pendingHtml(pend) });
        for (const m of pend) {
          const pr = await sbPatch(`members?id=eq.${m.id}`, { pending_notified_at: new Date().toISOString() });
          if (!pr.ok) console.log(`  ⚠ pending_notified_at niet gezet voor ${m.email} (${pr.status})`);
        }
        console.log(`  ✓ pending: ${pend.length} gemeld aan ${ADMIN}`);
      }
    } catch (e) { console.log(`  ✗ pending-seintje: ${e.message}`); }
  }
};

run().catch((e) => { console.error('✗', e.message); process.exit(1); });
