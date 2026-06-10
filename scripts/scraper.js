#!/usr/bin/env node
/* ============================================================
   Indi-Arena 2026 — wkpooltjes scraper (v2)
   ============================================================
   Haalt uit pool 423:
     1. memberlistPool → spelers, invulstatus, betaalstatus
     2. rankingPool    → punten per speler (zodra het toernooi loopt)
   en schrijft het resultaat naar ../data/pool-data.js. De vorige
   puntenstand wordt bewaard als prevPos zodat de site stijgers en
   dalers kan tonen.

   Gebruik:
     node scripts/scraper.js
       → vraagt om je wkpooltjes-cookie (of zet WKPOOL_COOKIE)

   Cookie ophalen:
     Chrome → wkpooltjes.nl (ingelogd) → F12 → Network → klik een
     request aan → kopieer de waarde van de Cookie-header.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { URLSearchParams } = require('url');

const POOL_ID    = 423;
const PROFILE_ID = 59482;
const BASE       = 'https://www.wkpooltjes.nl';
const OUT_FILE   = path.join(__dirname, '..', 'data', 'pool-data.js');

async function askCookie() {
  if (process.env.WKPOOL_COOKIE) return process.env.WKPOOL_COOKIE;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => {
    rl.question('Plak je wkpooltjes-cookie (zonder "Cookie: "): ', ans => { rl.close(); res(ans.trim()); });
  });
}

async function call(submodule, cookie) {
  const params = new URLSearchParams({
    A: 'S', module: 'pool', submodule,
    poolID: String(POOL_ID), profileID: String(PROFILE_ID)
  });
  const r = await fetch(`${BASE}/data/getContentXML.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookie,
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: params.toString()
  });
  return await r.text();
}

function extractContent(xml) {
  const m = xml.match(/<Data\s+Content="([^"]*)"/s);
  if (!m) {
    // Fallback: CDATA/tekst-inhoud
    const t = xml.match(/<Data[^>]*>([\s\S]*?)<\/Data>/);
    return t ? t[1] : '';
  }
  return m[1]
    .replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function parseMemberlist(html) {
  const players = [];
  const rows = html.match(/<tr[\s\S]*?<\/tr>/g) || [];
  for (const r of rows) {
    if (!r.includes('player-info-container')) continue;
    const nameMatch = r.match(/player-info-container[^>]*>([^<]+)</);
    const name = nameMatch ? nameMatch[1].trim() : '';
    if (!name) continue;
    const tt  = r.match(/<a[^>]*class='toggletip'[^>]*title='([^']+)'/);
    const tip = tt ? tt[1] : '';
    const matchesMatch  = tip.match(/Aantal wedstrijden voorspeld:\s*(\d+)/);
    const winnerMatch   = tip.match(/Winnaar[^<]*<span class='(available|notavailable)'>/);
    const tsMatch       = tip.match(/Topscorer[^<]*<span class='(available|notavailable)'>/);
    const voornaamMatch = tip.match(/Voornaam:\s*([^<]+)</);
    players.push({
      name,
      voornaam:  voornaamMatch ? voornaamMatch[1].trim() : '',
      matches:   matchesMatch ? parseInt(matchesMatch[1], 10) : 0,
      winner:    winnerMatch ? winnerMatch[1] === 'available' : false,
      topscorer: tsMatch ? tsMatch[1] === 'available' : false,
      paid:      /class='checkbox hasPayed'[^>]*checked/.test(r)
    });
  }
  return players;
}

function parseRanking(html, players) {
  // Ranglijst-rijen: positie | weergavenaam | punten ("12+3")
  // Weergavenaam kan de echte voornaam zijn (instelling van de pool),
  // dus we matchen eerst op spelersnaam en daarna op voornaam.
  const byName = new Map(players.map(p => [p.name.toLowerCase(), p]));
  const byVoornaam = new Map();
  players.forEach(p => {
    const v = (p.voornaam || '').toLowerCase();
    if (v && v !== 'niet ingevuld') {
      if (byVoornaam.has(v)) byVoornaam.set(v, null); // dubbel → onbruikbaar
      else byVoornaam.set(v, p);
    }
  });

  let matched = 0;
  const rows = html.match(/<tr[\s\S]*?<\/tr>/g) || [];
  for (const r of rows) {
    const text = r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const ptsMatch = text.match(/(\d+)\s*\+\s*(\d+)/);
    if (!ptsMatch) continue;
    const total = parseInt(ptsMatch[1], 10);
    const display = text
      .replace(/^\d+\.\s*\([^)]*\)\s*/, '')   // "1.(+2) " weg
      .replace(/\s*\(beheerder\)/i, '')
      .replace(/(\d+)\s*\+\s*(\d+).*/, '')
      .trim()
      .toLowerCase();
    if (!display) continue;
    const p = byName.get(display) || byVoornaam.get(display) || null;
    if (p) { p.points = total; matched++; }
    else if (total > 0) console.warn(`  ⚠ Geen match voor ranglijstnaam "${display}" (${total} pt)`);
  }
  return matched;
}

function buildJs(players, existing) {
  // Bewaar prevPos op basis van de OUDE puntenstand in het huidige bestand
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
  return next;
}

(async () => {
  console.log('▸ Indi-Arena scraper — pool 423');
  const cookie = await askCookie();
  if (!cookie) { console.error('Geen cookie opgegeven. Gestopt.'); process.exit(1); }

  console.log('  ⟳ memberlistPool ophalen…');
  const memberXml = await call('memberlistPool', cookie);
  if (memberXml.length < 200) {
    console.error('Lege respons — cookie verlopen of geen toegang tot de pool.');
    process.exit(2);
  }
  const players = parseMemberlist(extractContent(memberXml));
  console.log(`  ✓ ${players.length} spelers gevonden`);

  console.log('  ⟳ rankingPool ophalen (punten)…');
  const rankXml = await call('rankingPool', cookie);
  players.forEach(p => p.points = 0);
  const matched = parseRanking(extractContent(rankXml), players);
  console.log(`  ✓ punten gematcht voor ${matched} spelers`);

  console.log(`     Helemaal klaar (104): ${players.filter(p => p.matches === 104).length}`);
  console.log(`     Groepsfase af (72):   ${players.filter(p => p.matches === 72).length}`);
  console.log(`     Onderweg:             ${players.filter(p => p.matches > 0 && p.matches !== 72 && p.matches !== 104).length}`);
  console.log(`     Op nul:               ${players.filter(p => p.matches === 0).length}`);
  console.log(`     Niet betaald:         ${players.filter(p => !p.paid).length}`);

  const existing = fs.readFileSync(OUT_FILE, 'utf8');
  fs.writeFileSync(OUT_FILE, buildJs(players, existing), 'utf8');
  console.log(`  ✓ Weggeschreven naar ${OUT_FILE}`);
  console.log('  → Nu deployen: vercel --prod  (of dubbelklik update.bat)');
})();
