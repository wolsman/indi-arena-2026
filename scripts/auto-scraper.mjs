/* ============================================================
   Indi-Arena 2026 — automatische scraper (headless login)
   ============================================================
   Draait in GitHub Actions. Logt vers in op wkpooltjes via een
   echte (headless) browser — zo gebruiken we hun eigen
   versleuteling en hoeven we geen cookie te bewaren. Schrijft
   data/pool-data.js, dat door de Action wordt gecommit en
   automatisch door Vercel wordt gedeployd.

   Vereiste env-variabelen (GitHub Secrets):
     WKPOOL_EMAIL     — je wkpooltjes e-mailadres
     WKPOOL_PASSWORD  — je wkpooltjes wachtwoord

   Lokaal testen:
     $env:WKPOOL_EMAIL="..."; $env:WKPOOL_PASSWORD="..."
     node scripts/auto-scraper.mjs
   ============================================================ */

import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE  = join(__dirname, '..', 'data', 'pool-data.js');
const POOL_ID    = 423;
const PROFILE_ID = 59482;
const BASE = 'https://www.wkpooltjes.nl';

const EMAIL = process.env.WKPOOL_EMAIL;
const PASS  = process.env.WKPOOL_PASSWORD;

if (!EMAIL || !PASS) {
  console.error('✗ WKPOOL_EMAIL en/of WKPOOL_PASSWORD ontbreken (zet ze als GitHub Secret).');
  process.exit(1);
}

// Parsen + bestand opbouwen gebeurt in Node; scrapen in de browsercontext.
function buildJs(players, existing, results, standings, predictions) {
  // prevPos bepalen uit de vorige puntenstand in het huidige bestand
  const oldPoints = new Map();
  const re = /name:\s*"([^"]+)"[^}]*points:\s*(\d+)/g;
  let m;
  while ((m = re.exec(existing)) !== null) oldPoints.set(m[1], parseInt(m[2], 10));

  if (oldPoints.size && [...oldPoints.values()].some(v => v > 0)) {
    const oldSorted = [...oldPoints.entries()].sort((a, b) => b[1] - a[1]);
    const oldPos = new Map(oldSorted.map(([n], i) => [n, i + 1]));
    players.forEach(p => { if (oldPos.has(p.name)) p.prevPos = oldPos.get(p.name); });
  }

  const anyPoints = players.some(p => p.points > 0);
  const playersJs = players.map(p =>
    `  { name: ${JSON.stringify(p.name)}, matches: ${p.matches}, winner: ${p.winner}, ` +
    `topscorer: ${p.topscorer}, paid: ${p.paid}, points: ${p.points || 0}` +
    (typeof p.prevPos === 'number' ? `, prevPos: ${p.prevPos}` : '') + ` }`
  ).join(',\n');

  let next = existing;
  next = next.replace(/syncedAt:\s*"[^"]*"/, `syncedAt: "${new Date().toISOString()}"`);
  next = next.replace(/totalPlayers:\s*\d+/, `totalPlayers: ${players.length}`);
  next = next.replace(/pointsAvailable:\s*(true|false)/, `pointsAvailable: ${anyPoints}`);
  next = next.replace(/window\.POOL_PLAYERS\s*=\s*\[[\s\S]*?\n\];/, `window.POOL_PLAYERS = [\n${playersJs}\n];`);
  if (results) {
    next = next.replace(/window\.POOL_RESULTS\s*=\s*\{[\s\S]*?\};/, `window.POOL_RESULTS = ${JSON.stringify(results)};`);
  }
  if (standings) {
    next = next.replace(/window\.POOL_STANDINGS\s*=\s*\{[\s\S]*?\};/, `window.POOL_STANDINGS = ${JSON.stringify(standings)};`);
  }
  if (predictions) {
    next = next.replace(/window\.POOL_PREDICTIONS\s*=\s*\{[\s\S]*?\};/, `window.POOL_PREDICTIONS = ${JSON.stringify(predictions)};`);
  }
  return next;
}

const run = async () => {
  console.log('▸ Indi-Arena auto-scraper');
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ locale: 'nl-NL' });
  const page = await ctx.newPage();

  try {
    // 1) Inloggen via de echte loginpagina (hun JS versleutelt het wachtwoord)
    console.log('  ⟳ inloggen…');
    await page.goto(`${BASE}/login/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    // Cookiebanner wegklikken indien aanwezig (best effort)
    try {
      await page.click('button:has-text("Akkoord"), button:has-text("Accepteren"), .fc-cta-consent', { timeout: 4000 });
    } catch { /* geen banner — prima */ }

    await page.fill('#playerName', EMAIL);
    await page.fill('#playerPassVis', PASS);
    await page.click('input.submit[type="submit"]');

    // 2) Wachten tot we daadwerkelijk ingelogd zijn: pollen op echte ledendata
    console.log('  ⟳ login verifiëren…');
    let memberHtml = '';
    for (let attempt = 0; attempt < 12; attempt++) {
      await page.waitForTimeout(2500);
      const xml = await page.evaluate(async ({ poolID, profileID }) => {
        const params = new URLSearchParams({ A: 'S', module: 'pool', submodule: 'memberlistPool', poolID: String(poolID), profileID: String(profileID) });
        const r = await fetch('/data/getContentXML.php', { method: 'POST', body: params, credentials: 'include' });
        return await r.text();
      }, { poolID: POOL_ID, profileID: PROFILE_ID });
      if (xml && xml.length > 2000 && xml.includes('player-info-container')) { memberHtml = xml; break; }
    }
    if (!memberHtml) throw new Error('Login mislukt of pool niet bereikbaar (controleer e-mail/wachtwoord).');
    console.log('  ✓ ingelogd');

    // 3) Ledenlijst + ranglijst ophalen en parsen in de browsercontext
    const data = await page.evaluate(async ({ poolID, profileID }) => {
      // De ledenlijst en ranglijst zijn gepagineerd op 50 per pagina
      // (parameter currentPage). We lopen alle pagina's door tot een
      // pagina niets nieuws meer oplevert.
      const post = async (submodule, pageNr) => {
        const params = new URLSearchParams({ A: 'S', module: 'pool', submodule, poolID: String(poolID), profileID: String(profileID), currentPage: String(pageNr) });
        const r = await fetch('/data/getContentXML.php', { method: 'POST', body: params, credentials: 'include' });
        return await r.text();
      };
      const contentOf = (xml) => {
        const doc = new DOMParser().parseFromString(xml, 'text/xml');
        const d = doc.querySelector('Data');
        return d ? (d.getAttribute('Content') || d.textContent) : '';
      };
      const MAX_PAGES = 6; // 50/pagina → ruim genoeg voor max. 75 spelers

      // --- Leden (alle pagina's) ---
      const players = [];
      const seen = new Set();
      for (let pg = 1; pg <= MAX_PAGES; pg++) {
        const div = document.createElement('div');
        div.innerHTML = contentOf(await post('memberlistPool', pg));
        let added = 0;
        div.querySelectorAll('tr').forEach(row => {
          const nameEl = row.querySelector('.player-info-container');
          if (!nameEl) return;
          const name = nameEl.innerText.trim();
          if (!name || seen.has(name.toLowerCase())) return; // dedup: overlap/herhaalde pagina
          seen.add(name.toLowerCase());
          const tip = row.querySelector('.toggletip');
          const title = tip ? tip.getAttribute('title') || '' : '';
          const mm = title.match(/Aantal wedstrijden voorspeld:\s*(\d+)/);
          const wm = title.match(/Winnaar[^<]*<span class='(available|notavailable)'>/);
          const tm = title.match(/Topscorer[^<]*<span class='(available|notavailable)'>/);
          const vm = title.match(/Voornaam:\s*([^<]+)</);
          const paidEl = row.querySelector('input.hasPayed');
          players.push({
            name,
            voornaam: vm ? vm[1].trim() : '',
            matches: mm ? parseInt(mm[1], 10) : 0,
            winner: wm ? wm[1] === 'available' : false,
            topscorer: tm ? tm[1] === 'available' : false,
            paid: paidEl ? paidEl.checked : false,
            points: 0
          });
          added++;
        });
        if (added === 0) break; // geen nieuwe spelers meer → klaar
      }

      // --- Ranglijst (alle pagina's) → puntenmap ---
      const byName = new Map(players.map(p => [p.name.toLowerCase(), p]));
      const byVoornaam = new Map();
      players.forEach(p => {
        const v = (p.voornaam || '').toLowerCase();
        if (v && v !== 'niet ingevuld') {
          byVoornaam.set(v, byVoornaam.has(v) ? null : p);
        }
      });
      let matched = 0;
      const seenRank = new Set();
      for (let pg = 1; pg <= MAX_PAGES; pg++) {
        const div = document.createElement('div');
        div.innerHTML = contentOf(await post('rankingPool', pg));
        let added = 0;
        div.querySelectorAll('tr').forEach(row => {
          // Rij ziet er zo uit:
          //   kale opmaak (huidige realiteit):  "1 (-) Dennis (beheerder) ✉ 400"
          //   oude "X + Y"-opmaak (fallback):   "1. (+3) Dennis 220 + 30"
          const text = row.innerText
            .replace(/[☀-➿️\u{1F000}-\u{1FFFF}]/gu, ' ') // emoji/icons (✉) eruit
            .replace(/\s+/g, ' ').trim();
          // strip leiding: positie + verschil-indicator, bv "1 (-)" of "12. (+3)"
          const body = text.replace(/^\d+\.?\s*(?:\([^)]*\)\s*)?/, '');

          // Punten = de PUNTEN-kolom. Eerst oude "X + Y"-opmaak proberen (totaal = X),
          // anders het kale getal aan het eind van de rij. Naam = de rest ervóór.
          let total, display;
          const plus = body.match(/^(.*?)\s*(\d+)\s*\+\s*\d+/);
          if (plus) {
            display = plus[1];
            total = parseInt(plus[2], 10);
          } else {
            const kaal = body.match(/^(.*?)\s+(\d+)\s*$/);
            if (!kaal) return; // geen punten-getal → kop/lege rij overslaan
            display = kaal[1];
            total = parseInt(kaal[2], 10);
          }
          display = display.replace(/\s*\(beheerder\)/i, '').trim().toLowerCase();
          if (!display || seenRank.has(display)) return;
          seenRank.add(display);
          added++;
          const p = byName.get(display) || byVoornaam.get(display);
          if (p) { p.points = total; matched++; }
        });
        if (added === 0) break;
      }

      players.forEach(p => delete p.voornaam);
      return { players, matched };
    }, { poolID: POOL_ID, profileID: PROFILE_ID });

    console.log(`  ✓ ${data.players.length} spelers, punten gematcht voor ${data.matched}`);
    const c = (f) => data.players.filter(f).length;
    console.log(`     klaar(104):${c(p=>p.matches===104)}  groep(72):${c(p=>p.matches===72)}  bezig:${c(p=>p.matches>0&&p.matches!==72&&p.matches!==104)}  nul:${c(p=>p.matches===0)}  niet-betaald:${c(p=>!p.paid)}`);

    if (data.players.length < 10) throw new Error('Verdacht weinig spelers — scrape afgebroken om geen lege data te committen.');

    // 4) Uitslagen van het publieke speelschema — optioneel: een hapering
    //    hier mag de kern-update (spelers + punten) NOOIT blokkeren.
    let results = null;
    try {
      console.log('  ⟳ uitslagen ophalen…');
      await page.goto(`${BASE}/fixtures/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
      results = await page.evaluate(() => {
        const norm = (s) => (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'');
        const out = {};
        document.querySelectorAll('table tr').forEach(row => {
          const cells = Array.from(row.querySelectorAll('td')).map(c => c.innerText.trim());
          if (cells.length < 6) return;
          const home = cells[1], away = cells[2], uitslag = cells[5];
          const m = uitslag.match(/(\d+)\s*-\s*(\d+)/);
          if (home && away && m) out[norm(home) + '|' + norm(away)] = `${m[1]}-${m[2]}`;
        });
        return out;
      });
      console.log(`  ✓ ${Object.keys(results).length} uitslagen gevonden`);
    } catch (e) {
      console.warn(`  ⚠ uitslagen overgeslagen (${e.message}) — vorige uitslagen blijven staan`);
    }

    // 5) Groepsstanden — ook optioneel/defensief.
    let standings = null;
    try {
      console.log('  ⟳ groepsstanden ophalen…');
      await page.goto(`${BASE}/standings/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
      standings = await page.evaluate(() => {
        const text = document.body.innerText;
        const parts = text.split(/POULE\s+([A-L])/);
        const res = {};
        for (let i = 1; i < parts.length; i += 2) {
          const letter = parts[i];
          const block = parts[i+1] || '';
          const teams = [];
          block.split('\n').forEach(line => {
            const m = line.trim().match(/^(\d)\s+(.+?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(-?\d+)$/);
            if (m && teams.length < 4) teams.push({
              team: m[2].trim(), played: +m[3], w: +m[4], g: +m[5], v: +m[6], points: +m[7], saldo: +m[8]
            });
          });
          if (teams.length) res[letter] = teams;
        }
        return res;
      });
      const anyPlayed = Object.values(standings).some(g => g.some(t => t.played > 0));
      console.log(`  ✓ ${Object.keys(standings).length} groepen${anyPlayed ? ' (met gespeelde wedstrijden)' : ' (nog 0-0)'}`);
    } catch (e) {
      console.warn(`  ⚠ groepsstanden overgeslagen (${e.message}) — vorige standen blijven staan`);
    }

    // 6) Voorspellingen per wedstrijd — zichtbaar zodra een wedstrijd is gestart.
    //    We bewaren alleen de gestarte/gespeelde wedstrijden (meer dan 1 pick),
    //    gesleuteld op blok-index (= kalendervolgorde), gecapt op de laatste 14.
    let predictions = null;
    try {
      console.log('  ⟳ voorspellingen per wedstrijd ophalen…');
      predictions = await page.evaluate(async ({ poolID, profileID }) => {
        const params = new URLSearchParams({ A:'S', module:'pool', submodule:'compareResultsPool', poolID:String(poolID), profileID:String(profileID) });
        const r = await fetch('/data/getContentXML.php', { method:'POST', body:params, credentials:'include' });
        const t = await r.text();
        const d = new DOMParser().parseFromString(t, 'text/xml').querySelector('Data');
        const html = d ? (d.getAttribute('Content') || d.textContent) : '';
        const div = document.createElement('div'); div.innerHTML = html;
        const blocks = Array.from(div.querySelectorAll('.match-compare-table'));
        const out = {};
        blocks.forEach((b, i) => {
          const items = Array.from(b.querySelectorAll('.match-compare-table-item'));
          if (items.length <= 1) return; // alleen gestarte wedstrijden (ieders picks zichtbaar)
          const picks = items.map(it => {
            const p = it.querySelector('.player'); const s = it.querySelector('.score');
            const score = s ? s.innerText.replace(/\s+/g,'').replace(/(\d+)-(\d+)/, '$1-$2') : '';
            const sm = score.match(/(\d+)-(\d+)/);
            return { player: p ? p.innerText.trim() : '?', h: sm?+sm[1]:null, a: sm?+sm[2]:null };
          }).filter(x => x.h !== null);
          if (picks.length) out[i] = picks;
        });
        return out;
      }, { poolID: POOL_ID, profileID: PROFILE_ID });
      // Cap op de 14 hoogste indices (meest recent gestart) om het bestand klein te houden.
      const idxs = Object.keys(predictions).map(Number).sort((a,b)=>a-b);
      if (idxs.length > 14) {
        const keep = idxs.slice(-14);
        predictions = Object.fromEntries(keep.map(i => [i, predictions[i]]));
      }
      console.log(`  ✓ voorspellingen voor ${Object.keys(predictions).length} gestarte wedstrijd(en)`);
    } catch (e) {
      console.warn(`  ⚠ voorspellingen overgeslagen (${e.message})`);
    }

    const existing = readFileSync(OUT_FILE, 'utf8');
    writeFileSync(OUT_FILE, buildJs(data.players, existing, results, standings, predictions), 'utf8');
    console.log('  ✓ data/pool-data.js bijgewerkt');
  } finally {
    await browser.close();
  }
};

run().catch(err => { console.error('✗', err.message); process.exit(1); });
