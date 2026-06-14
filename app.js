/* ============================================================
   Indi-Arena 2026 — app logic (v3)
   Dag-bewust: de site weet of het toernooi nog moet beginnen,
   vandaag begint, of al loopt — en past tekst en sortering aan.
   ============================================================ */

const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

function getInitial(name) {
  const clean = name.replace(/[^A-Za-zÀ-ÿ ]/g, '').trim();
  return (clean[0] || '?').toUpperCase();
}

function bucket(p) {
  if (p.matches === 104) return 'complete';
  if (p.matches === 72)  return 'groep';
  if (p.matches === 0)   return 'nul';
  return 'bezig';
}

// Statuschip voor de ranglijst vóór er punten zijn (i.p.v. een leeg "—").
function statusChip(p) {
  if (p.matches === 104 && p.winner && p.topscorer) return '<span class="lb-status klaar">klaar</span>';
  const b = bucket(p);
  if (b === 'groep') return '<span class="lb-status groep">groepsfase</span>';
  if (b === 'nul')   return '<span class="lb-status leeg">—</span>';
  return '<span class="lb-status bezig">bezig</span>';
}

// Genormaliseerde landnaam → sleutel voor vlaggen en uitslagen.
function norm(name) {
  return (name || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // accenten weg
    .replace(/[^a-z0-9]/g, '');                        // spaties/koppels/punten weg
}
// Echte vlaggen via flagcdn.com (scherpe SVG's i.p.v. emoji).
const TEAM_ISO = {
  mexico:'mx', zuidafrika:'za', zuidkorea:'kr', tsjechie:'cz', canada:'ca', bosnie:'ba',
  qatar:'qa', zwitserland:'ch', usa:'us', paraguay:'py', australie:'au', turkije:'tr',
  brazilie:'br', marokko:'ma', haiti:'ht', schotland:'gb-sct', duitsland:'de', curacao:'cw',
  ecuador:'ec', ivoorkust:'ci', nederland:'nl', japan:'jp', zweden:'se', tunesie:'tn',
  spanje:'es', kaapverdie:'cv', uruguay:'uy', saoediarabie:'sa', belgie:'be', egypte:'eg',
  iran:'ir', nieuwzeeland:'nz', frankrijk:'fr', senegal:'sn', noorwegen:'no', irak:'iq',
  argentinie:'ar', algerije:'dz', oostenrijk:'at', jordanie:'jo', portugal:'pt', colombia:'co',
  oezbekistan:'uz', congo:'cg', kroatie:'hr', engeland:'gb-eng', panama:'pa', ghana:'gh'
};
function flagFor(name) {
  const code = TEAM_ISO[norm(name)];
  if (code) return `<img class="flag" src="https://flagcdn.com/${code}.svg" alt="" loading="lazy">`;
  return (window.POOL_FLAGS && POOL_FLAGS[norm(name)]) || '';
}
// Uitslag van een wedstrijd (of null) — kijkt in POOL_RESULTS op home|away.
function resultFor(m) {
  const key = norm(m.home) + '|' + norm(m.away);
  return (window.POOL_RESULTS && POOL_RESULTS[key]) || null;
}

// ── Live tussenstand (via /api/live, bron football-data.org) ──
// Onze namen zijn Nederlands; de API gebruikt Engelse namen. Per NL-naam
// een set genormaliseerde Engelse aliassen om de juiste wedstrijd te vinden.
const TEAM_EN = {
  mexico:["mexico"], zuidafrika:["southafrica"], zuidkorea:["southkorea","korearepublic","korea"],
  tsjechie:["czechrepublic","czechia"], canada:["canada"], bosnie:["bosniaandherzegovina","bosnia"],
  qatar:["qatar"], zwitserland:["switzerland"], usa:["usa","unitedstates"], paraguay:["paraguay"],
  australie:["australia"], turkije:["turkey","turkiye"], brazilie:["brazil"], marokko:["morocco"],
  haiti:["haiti"], schotland:["scotland"], duitsland:["germany"], curacao:["curacao"], ecuador:["ecuador"],
  ivoorkust:["cotedivoire","ivorycoast"], nederland:["netherlands"], japan:["japan"], zweden:["sweden"],
  tunesie:["tunisia"], spanje:["spain"], kaapverdie:["capeverde","caboverde"], uruguay:["uruguay"],
  saoediarabie:["saudiarabia"], belgie:["belgium"], egypte:["egypt"], iran:["iran","iriran"],
  nieuwzeeland:["newzealand"], frankrijk:["france"], senegal:["senegal"], noorwegen:["norway"],
  irak:["iraq"], argentinie:["argentina"], algerije:["algeria"], oostenrijk:["austria"],
  jordanie:["jordan"], portugal:["portugal"], colombia:["colombia"], oezbekistan:["uzbekistan"],
  congo:["congo","drcongo","democraticrepublicofcongo"], kroatie:["croatia"], engeland:["england"],
  ghana:["ghana"], panama:["panama"]
};
function enAliases(nlName) { return TEAM_EN[norm(nlName)] || [norm(nlName)]; }

window.__liveScores = {}; // genormaliseerde "home|away" → { hs, as, status, minute, recvTs }

function liveScoreFor(m) {
  const key = norm(m.home) + '|' + norm(m.away);
  return window.__liveScores[key] || null;
}

// Weergave-minuut: laat de klok lokaal elke minuut doortikken vanaf de laatst
// opgehaalde minuut, zodat hij niet "hangt" tussen polls in. Alleen tijdens een
// lopende helft; gecapt zodat een gemiste poll geen onzin oplevert.
function liveMinute(ls) {
  if (!ls || ls.minute == null) return null;
  const running = ['1H', '2H', 'ET', 'LIVE'].includes(ls.status);
  if (!running) return ls.minute; // rust/pauze/penalty's → bevroren
  const ticked = Math.floor((Date.now() - (ls.recvTs || Date.now())) / 60000);
  return ls.minute + Math.min(ticked, 5); // cap +5; volgende poll corrigeert
}

// Koppelt een API-wedstrijd aan een van onze (NL) wedstrijden.
function ingestLiveMatches(apiMatches) {
  const prev = window.__liveScores || {};
  const next = {};
  (apiMatches || []).forEach(am => {
    const ah = norm(am.home), aa = norm(am.away);
    // Vind onze wedstrijd waarvan de EN-aliassen matchen.
    for (const m of POOL_CALENDAR) {
      const hAl = enAliases(m.home), aAl = enAliases(m.away);
      const homeOk = hAl.some(x => x === ah || x.includes(ah) || ah.includes(x));
      const awayOk = aAl.some(x => x === aa || x.includes(aa) || aa.includes(x));
      if (homeOk && awayOk) {
        next[norm(m.home) + '|' + norm(m.away)] = { hs: am.hs, as: am.as, status: am.status, minute: am.minute, recvTs: Date.now() };
        break;
      }
    }
  });
  // Event-detectie op de stand-diff: goal / gelijkmaker / ommekeer / rust.
  const events = [];
  if (window.__liveInit) {
    Object.keys(next).forEach(key => {
      const n = next[key], p = prev[key];
      if (!p) return;
      if ((n.hs + n.as) > (p.hs + p.as)) {
        const pLead = Math.sign(p.hs - p.as), nLead = Math.sign(n.hs - n.as);
        let type = 'goal';
        if (nLead === 0 && pLead !== 0) type = 'equalizer';
        else if (nLead !== 0 && pLead !== 0 && nLead !== pLead) type = 'turnaround';
        events.push({ type, key, ls: n });
      } else if (p.status !== 'HT' && n.status === 'HT') {
        events.push({ type: 'ht', key, ls: n });
      }
    });
  }
  window.__liveScores = next;
  window.__liveInit = true;
  return events;
}

async function fetchLive() {
  try {
    const r = await fetch('/api/live', { cache: 'no-store' });
    if (!r.ok) return;
    const j = await r.json();
    const events = ingestLiveMatches(j.matches);
    renderLiveNow();
    renderArena();
    buildScorebug();
    events.forEach(fireEvent);
  } catch (e) { /* stil falen — site blijft werken */ }
}

// Vind onze kalender-index voor een genormaliseerde "home|away"-sleutel.
function calIndexForKey(key) {
  for (let i = 0; i < POOL_CALENDAR.length; i++) {
    const m = POOL_CALENDAR[i];
    if (norm(m.home) + '|' + norm(m.away) === key) return i;
  }
  return -1;
}

// Henk-regel per live-event — data-gegrond, roast én ophemelen.
function henkEventLine(type, m, picks, ls) {
  const list = picks || [];
  const lh = ls.hs, la = ls.as, total = list.length || 1;
  const exact = list.filter(p => p.h === lh && p.a === la).map(p => p.player);
  const lo = lh > la ? 'h' : (lh < la ? 'a' : 'd');
  const leader = lh > la ? m.home : (lh < la ? m.away : null);
  const tend = list.filter(p => { const po = p.h>p.a?'h':(p.h<p.a?'a':'d'); return po === lo; }).length;
  const names = arr => arr.slice(0, 3).join(', ') + (arr.length > 3 ? ` +${arr.length - 3}` : '');

  if (type === 'equalizer') {
    return `${lh}-${la}, gelijk! De ${Math.max(0, total - tend)} man die op een winst gokten kijken nu bedrukt. Voetbal is wreed — en ik geniet ervan.`;
  }
  if (type === 'turnaround') {
    return `Ommekeer — ${leader} draait het om naar ${lh}-${la}. De halve poule zit z'n formulier opnieuw te lezen. Te laat, jongens.`;
  }
  if (type === 'ht') {
    return exact.length
      ? `Rust: ${lh}-${la}. ${names(exact)} ${exact.length === 1 ? 'heeft' : 'hebben'} dit exact staan — 45 minuten nagelbijten te gaan.`
      : `Rust, ${lh}-${la}. Niemand had 'm precies zo. De tweede helft beslist wie er juicht en wie een smoes verzint.`;
  }
  // gewoon doelpunt
  if (exact.length) {
    return `${lh}-${la}! ${names(exact)} juicht mee — precies hun voorspelling. De rest mag toekijken.`;
  }
  if (leader) {
    return `${lh}-${la}. ${tend} van de ${total} gokten op ${leader} — die staan er nu goed bij. De andere ${Math.max(0, total - tend)} beginnen te zweten.`;
  }
  return `${lh}-${la}. Dit zag bijna niemand aankomen — de hele poule herrekent live.`;
}

const EVENT_FLASH = { goal: '⚽ GOAL', equalizer: '🎯 GELIJK', turnaround: '🔄 OMMEKEER', ht: '⏸ RUST' };

// De Henk-toast die over het scherm ploft bij een live-event.
function showHenkToast(type, m, ls, line) {
  const toast = $('#goalToast');
  if (!toast) return;
  const flash = $('#goalFlash');
  if (flash) flash.textContent = EVENT_FLASH[type] || '⚽ GOAL';
  $('#goalScore').innerHTML = `${flagFor(m.home)} ${m.home} <b>${ls.hs} - ${ls.as}</b> ${m.away} ${flagFor(m.away)}`;
  $('#goalHenk').textContent = line;
  toast.classList.remove('hidden');
  void toast.offsetWidth; // restart animatie
  toast.classList.add('show');
  clearTimeout(window.__goalTimer);
  window.__goalTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 7000);
  if (type !== 'ht') confettiBurst(type === 'turnaround' ? 90 : 70);
}

// Laat de bijbehorende Arena-kaart kort oplichten bij een event.
function flashArenaCard(idx) {
  const card = document.querySelector(`.arena-card[data-idx="${idx}"]`);
  if (!card) return;
  card.classList.remove('just-event');
  void card.offsetWidth;
  card.classList.add('just-event');
  setTimeout(() => card.classList.remove('just-event'), 1600);
}

// Live-event → Henk ploft over het scherm + de Arena-kaart flitst.
function fireEvent(e) {
  const idx = calIndexForKey(e.key);
  const m = idx >= 0 ? POOL_CALENDAR[idx] : null;
  if (!m) return;
  const picks = idx >= 0 ? predictionsFor(idx) : null;
  const line = henkEventLine(e.type, m, picks, e.ls);
  showHenkToast(e.type, m, e.ls, line);
  flashArenaCard(idx);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// FASE-DETECTIE — weet welke dag het is
// ============================================================
function phaseInfo() {
  const now = new Date();
  const kickoff = new Date(POOL_META.firstMatchAt);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const kickoffDay = new Date(kickoff.getFullYear(), kickoff.getMonth(), kickoff.getDate());
  const dayDiff = Math.round((kickoffDay - startOfToday) / 86400000);
  if (now >= kickoff) {
    const speeldag = Math.max(1, Math.round((startOfToday - kickoffDay) / 86400000) + 1);
    return { mode: 'tournament', speeldag };
  }
  if (dayDiff === 0) return { mode: 'today', days: 0 };
  return { mode: 'pre', days: dayDiff };
}

function todaysMatches() {
  const now = new Date();
  return POOL_CALENDAR.filter(m => {
    const d = new Date(m.date);
    return d.getFullYear() === now.getFullYear() &&
           d.getMonth() === now.getMonth() &&
           d.getDate() === now.getDate();
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
}

function pointsMode() {
  return POOL_META.pointsAvailable || POOL_PLAYERS.some(p => (p.points || 0) > 0);
}

// ============================================================
// HENK — statistieken en quote-engine
// ============================================================
function henkStats() {
  const ps = POOL_PLAYERS.filter(p => p.name);
  const nulNames = ps.filter(p => p.matches === 0).map(p => p.name);
  const ph = phaseInfo();
  return {
    total: ps.length,
    complete: ps.filter(p => p.matches === 104).length,
    groep: ps.filter(p => p.matches === 72).length,
    bezig: ps.filter(p => p.matches > 0 && p.matches !== 72 && p.matches !== 104).length,
    nul: nulNames.length,
    nulNames,
    notPaid: ps.filter(p => !p.paid).length,
    notPaidNames: ps.filter(p => !p.paid).map(p => p.name),
    phase: ph.mode,
    daysToKickoff: ph.days || 0,
    speeldag: ph.speeldag || 0,
    todayCount: todaysMatches().length
  };
}

function resolveQuote(q, s) { return typeof q === 'function' ? q(s) : q; }

// Dagmonoloog: deterministisch per datum — iedereen ziet vandaag dezelfde.
function dailyMonoloog() {
  const s = henkStats();
  const set = s.phase === 'tournament' ? HENK.monologen_toernooi : HENK.monologen_vooraf;
  const d = new Date();
  const seed = d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate();
  return resolveQuote(set[seed % set.length], s);
}

// Bubbel-quotes: geschud, zonder herhaling tot de voorraad op is.
let henkQueue = [];
function nextHenkQuote() {
  if (!henkQueue.length) {
    const s = henkStats();
    const groups = s.phase === 'tournament'
      ? [...HENK.hot_takes, ...HENK.ranking_change]
      : [...HENK.hot_takes];
    henkQueue = shuffle(groups.map(q => resolveQuote(q, s)));
  }
  return henkQueue.pop();
}

// Typewriter: typt platte tekst, zet daarna de opgemaakte versie neer.
function typeInto(el, html, speed = 12) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const plain = tmp.textContent;
  clearInterval(el.__tw);
  el.classList.add('typing');
  el.textContent = '';
  let i = 0;
  el.__tw = setInterval(() => {
    i += 2;
    el.textContent = plain.slice(0, i);
    if (i >= plain.length) {
      clearInterval(el.__tw);
      el.classList.remove('typing');
      el.innerHTML = html;
    }
  }, speed);
}

// ============================================================
// "WIE BEN IK" — speler-selectie
// ============================================================
function getMyName() { return localStorage.getItem('indi-arena-me') || ''; }
function isMe(name)  { return getMyName().toLowerCase() === name.toLowerCase(); }
function setMyName(name) {
  localStorage.setItem('indi-arena-me', name);
  const lbl = $('#meBtnLabel');
  if (lbl) lbl.textContent = name ? `Ik ben: ${name}` : '— wie ben jij? —';
}
function openMeModal() {
  const sel = $('#meSelect');
  const players = [...POOL_PLAYERS]
    .filter(p => p.name)
    .sort((a, b) => a.name.localeCompare(b.name, 'nl'));
  sel.innerHTML = '<option value="">— kies je naam —</option>' +
    players.map(p => `<option value="${p.name}"${getMyName() === p.name ? ' selected' : ''}>${p.name}</option>`).join('');
  $('#meModal').classList.remove('hidden');
  const btn = $('#meConfirm');
  btn.disabled = !sel.value;
  sel.onchange = () => { btn.disabled = !sel.value; };
  btn.onclick = () => {
    if (!sel.value) return;
    setMyName(sel.value);
    $('#meModal').classList.add('hidden');
    renderMyCockpit();
    renderHeroLeaderboard();
    renderLeaderboard($('.chip-btn.active')?.dataset.filter || 'all');
  };
}

// ============================================================
// COUNTDOWN-PIL (header)
// ============================================================
function updateCountdown() {
  const ph = phaseInfo();
  const el = $('#countdownTxt');
  const suffix = $('#countdownSuffix');
  if (ph.mode === 'tournament') {
    el.textContent = `Speeldag ${ph.speeldag}`;
    if (suffix) suffix.textContent = '';
    return;
  }
  const target = new Date(POOL_META.firstMatchAt).getTime();
  const diff = target - Date.now();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  el.textContent = `${d}d ${String(h).padStart(2,'0')}u ${String(m).padStart(2,'0')}m`;
  if (suffix) suffix.textContent = 'tot de aftrap';
}
setInterval(updateCountdown, 60_000);

// ============================================================
// VANDAAG — dag-bewuste hero
// ============================================================
const GRAD = 'bg-gradient-to-r from-oranje via-goud to-veld bg-clip-text text-transparent';

function renderToday() {
  const now = new Date();
  $('#todayDate').textContent = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });

  const ph = phaseInfo();
  const today = todaysMatches();
  const title = $('#heroTitle');
  const lead = $('#heroLead');

  if (ph.mode === 'pre') {
    const dagen = ph.days === 1 ? 'Nog één dag.' : `Nog ${ph.days} dagen.`;
    const sub = ph.days === 1 ? 'Morgen rolt de bal.' : 'Dan rolt de bal.';
    title.innerHTML = `${dagen}<br/><span class="${GRAD}">${sub}</span>`;
    lead.innerHTML = `De eerste wedstrijd is <strong>Mexico — Zuid-Afrika</strong>, donderdag 11 juni om 21:00 uur (Nederlandse tijd) in het Estadio Azteca. Hieronder zie je wie er klaar is voor de aftrap, wie nog moet, en wat de groep verwacht.`;
  } else if (ph.mode === 'today') {
    const first = today[0];
    const t = first ? new Date(first.date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) : '21:00';
    title.innerHTML = `Vandaag is het zover.<br/><span class="${GRAD}">Om ${t} uur rolt de bal.</span>`;
    lead.innerHTML = `<strong>Mexico — Zuid-Afrika</strong> opent vanavond het WK in het Estadio Azteca. Laatste kans om je voorspellingen aan te scherpen: tot één minuut voor elke aftrap kun je nog wijzigen.`;
  } else {
    const count = today.length;
    const sub = count > 0
      ? (count === 1 ? 'Vandaag één wedstrijd.' : `Vandaag ${count} wedstrijden.`)
      : 'Vandaag geen wedstrijden.';
    title.innerHTML = `Speeldag ${ph.speeldag}.<br/><span class="${GRAD}">${sub}</span>`;
    lead.innerHTML = `Hieronder de actuele stand van de poule en het programma van vandaag. Alle tijden zijn Nederlandse tijden.`;
  }

  // Programma-chips van vandaag (alleen als er wedstrijden zijn)
  const wrap = $('#todayMatches');
  if (wrap) {
    if ((ph.mode === 'today' || ph.mode === 'tournament') && today.length) {
      wrap.innerHTML = today.map(m => {
        const t = new Date(m.date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
        return `<span class="today-chip"><span class="tc-time">${t}</span> ${m.home} — ${m.away}</span>`;
      }).join('');
    } else {
      wrap.innerHTML = '';
    }
  }

  // Henks dagmonoloog
  $('#henkToday').innerHTML = dailyMonoloog();
  $('#qaPlayers').textContent = POOL_PLAYERS.filter(p => p.name).length;
}

// ============================================================
// STATUS-TEGELS
// ============================================================
function fillStatusTiles() {
  if (!$('#cntComplete')) return; // tegels verwijderd in command-center-layout
  const c = { complete: 0, groep: 0, bezig: 0, nul: 0 };
  POOL_PLAYERS.filter(p => p.name).forEach(p => c[bucket(p)]++);
  $('#cntComplete').textContent = c.complete;
  $('#cntGroep').textContent    = c.groep;
  $('#cntBezig').textContent    = c.bezig;
  $('#cntNul').textContent      = c.nul;
}

// ============================================================
// TABS — homepage is één scherm; secties wisselen i.p.v. scrollen
// ============================================================
const TAB_OF = {
  vandaag: 'vandaag', 'arena-sectie': 'arena', radar: 'arena',
  ranglijst: 'stand', schema: 'schema', groepen: 'groepen', dna: 'dna', hallofame: 'dna'
};
const TAB_NAMES = ['vandaag', 'stand', 'arena', 'schema', 'groepen', 'dna'];

function showTab(name, { scroll = true, push = true } = {}) {
  if (!TAB_NAMES.includes(name)) name = 'vandaag';
  document.querySelectorAll('[data-tab-group]').forEach(el => { el.hidden = el.dataset.tabGroup !== name; });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  if (push) { try { history.replaceState(null, '', '#' + name); } catch {} }
  if (scroll) window.scrollTo(0, 0);
}

function initTabs() {
  // Koppel bestaande secties (op id) aan een tab-groep.
  Object.entries(TAB_OF).forEach(([id, tab]) => {
    const el = document.getElementById(id);
    if (el) el.dataset.tabGroup = tab;
  });
  const cock = $('#myCockpit');
  if (cock && cock.closest('section')) cock.closest('section').dataset.tabGroup = 'vandaag';

  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => {
    const go = () => showTab(b.dataset.tab);
    if (document.startViewTransition) document.startViewTransition(go); else go();
  }));
  window.addEventListener('hashchange', () => showTab((location.hash || '').replace('#', ''), { push: false }));

  const initial = (location.hash || '').replace('#', '');
  showTab(initial || 'vandaag', { scroll: false, push: false });
}

// ============================================================
// RANGLIJST — sorteert op punten zodra die er zijn
// ============================================================
function completeness(p) {
  return p.matches + (p.winner ? 6 : 0) + (p.topscorer ? 6 : 0);
}

function sortedPlayers() {
  const pts = pointsMode();
  return [...POOL_PLAYERS].filter(p => p.name).sort((a, b) => {
    if (pts) {
      return (b.points - a.points) || a.name.localeCompare(b.name, 'nl');
    }
    return (completeness(b) - completeness(a)) || a.name.localeCompare(b.name, 'nl');
  });
}

// Klassement met GEDEELDE posities: gelijke punten = dezelfde plek.
// Berekent ook beweging (vs prevPos), de stijger van de dag en het verschil
// met de koploper. prevPos wordt door de scraper als gedeelde positie gezet,
// zodat gelijke-punters geen nep-bewegingen tonen.
function rankedPlayers() {
  const pts = pointsMode();
  const list = sortedPlayers();
  let lastVal = null, lastRank = 0;
  const ranked = list.map((p, i) => {
    const val = pts ? (p.points || 0) : completeness(p);
    let rank;
    if (val === lastVal) { rank = lastRank; }
    else { rank = i + 1; lastVal = val; lastRank = rank; }
    return { p, rank, idx: i, val };
  });
  const rankCount = {};
  ranked.forEach(r => { rankCount[r.rank] = (rankCount[r.rank] || 0) + 1; });

  let mover = null;
  if (pts) {
    ranked.forEach(r => {
      if (typeof r.p.prevPos === 'number') {
        r.delta = r.p.prevPos - r.rank;
        if (r.delta > 0 && (!mover || r.delta > mover.delta)) mover = r;
      }
    });
  }
  const leaderVal = ranked.length ? ranked[0].val : 0;
  ranked.forEach(r => {
    r.shared = rankCount[r.rank] > 1;
    r.gap = pts ? (leaderVal - (r.p.points || 0)) : 0;
    r.isMover = !!(mover && r === mover && mover.delta > 0);
  });
  return ranked;
}

// Mini puntentrend-sparkline uit POOL_HISTORY (alleen tonen bij ≥2 metingen).
function sparkline(name) {
  const h = (window.POOL_HISTORY && POOL_HISTORY[name]) || [];
  if (h.length < 2) return '';
  const min = Math.min(...h), max = Math.max(...h), span = (max - min) || 1;
  const W = 54, H = 16;
  const pts = h.map((v, i) => {
    const x = (i / (h.length - 1)) * W;
    const y = H - ((v - min) / span) * H;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const up = h[h.length - 1] >= h[0];
  return `<svg class="spark ${up ? 'up' : 'down'}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}"/></svg>`;
}

function renderHeroLeaderboard() {
  const ranked = rankedPlayers().slice(0, 6);
  const pts = pointsMode();
  $('#heroLeaderboard').innerHTML = ranked.map(({ p, rank }) => `
    <div class="hero-row" onclick="openPlayerModal('${p.name.replace(/'/g, "\\'")}')">
      <span class="pos">${rank}</span>
      <span class="nm">${p.name}${isMe(p.name) ? ' <span class="text-oranje text-[10px] font-black ml-1">JIJ</span>' : ''}</span>
      <span class="pts text-white/40">${pts ? p.points + ' pt' : p.matches + '/104'}</span>
    </div>
  `).join('');

  const badge = $('#standBadge');
  if (badge) {
    const synced = new Date(POOL_META.syncedAt);
    badge.textContent = 'Stand: ' + synced.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' }) +
      ' ' + synced.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  }
  const sub = $('#heroBoardSub');
  if (sub) {
    sub.textContent = pts
      ? 'Gesorteerd op punten'
      : 'Gesorteerd op invulstatus — tot de eerste uitslag binnen is';
  }
}

// Koploper-band boven de ranglijst (toont de leider[s] + of het gedeeld is).
// Podium top-3 — tie-aware (een trede kan gedeeld zijn) + leiderwissel-detectie.
function renderPodium() {
  const el = $('#podium');
  if (!el) return;
  const ranked = rankedPlayers();
  if (!pointsMode() || !ranked.length || ranked[0].val <= 0) { el.innerHTML = ''; return; }

  const distinctRanks = [...new Set(ranked.map(r => r.rank))].slice(0, 3);
  const steps = distinctRanks.map((rank, i) => ({
    rank, medal: i + 1, players: ranked.filter(r => r.rank === rank)
  }));

  const stepHtml = (s) => {
    if (!s) return '';
    const pl = s.players, pts = pl[0].p.points, isGroup = pl.length > 1;
    const medalIcon = s.medal === 1 ? '🥇' : s.medal === 2 ? '🥈' : '🥉';
    const face = isGroup
      ? `<div class="pod-avatar group">${pl.length}</div>`
      : `<div class="pod-avatar">${getInitial(pl[0].p.name)}</div>`;
    const nameHtml = isGroup
      ? `<div class="pod-name">${pl.slice(0, 2).map(x => x.p.name).join(', ')}${pl.length > 2 ? ` +${pl.length - 2}` : ''}</div><div class="pod-shared">${pl.length} gedeeld</div>`
      : `<div class="pod-name">${pl[0].p.name}${isMe(pl[0].p.name) ? ' <span class="pod-jij">JIJ</span>' : ''}</div>`;
    const click = !isGroup ? `onclick="openPlayerModal('${pl[0].p.name.replace(/'/g, "\\'")}')"` : '';
    return `
      <div class="pod-step medal-${s.medal}" ${click}>
        <div class="pod-rank">${medalIcon}</div>
        ${face}${nameHtml}
        <div class="pod-pts">${pts}<span>pt</span></div>
        <div class="pod-base">#${s.rank}</div>
      </div>`;
  };

  // Klassieke podiumvolgorde: 2 — 1 — 3 (winnaar in het midden, hoogste trede).
  const order = [steps[1], steps[0], steps[2]].filter(Boolean);
  el.innerHTML = `<div class="podium">${order.map(stepHtml).join('')}</div>`;
  checkLeaderChange(ranked);
}

// Detecteer of de koploper(s) zijn gewijzigd sinds het laatste bezoek.
function checkLeaderChange(ranked) {
  const leaders = ranked.filter(r => r.rank === 1).map(r => r.p.name).sort();
  if (!leaders.length) return;
  const key = leaders.join('|');
  let prev = null;
  try { prev = localStorage.getItem('indi-arena-leader'); } catch {}
  try { localStorage.setItem('indi-arena-leader', key); } catch {}
  if (prev && prev !== key) fireLeaderChange(leaders, prev.split('|'));
}

function fireLeaderChange(now, before) {
  const newName = now.find(n => !before.includes(n)) || now[0];
  const lostName = before.find(n => !now.includes(n));
  const line = `Nieuwe koploper: ${newName}. ` + (lostName
    ? `${lostName} stond er net nog — en kijkt nu naar de rug van een ander. Zo snel kan het.`
    : `De top is van eigenaar gewisseld. Onthoud dit moment, het komt terug.`);
  const toast = $('#goalToast');
  if (toast) {
    const flash = $('#goalFlash'); if (flash) flash.textContent = '👑 NIEUWE KOPLOPER';
    $('#goalScore').textContent = now.length > 1 ? now.slice(0, 3).join(' · ') : newName;
    $('#goalHenk').textContent = line;
    toast.classList.remove('hidden'); void toast.offsetWidth; toast.classList.add('show');
    clearTimeout(window.__goalTimer);
    window.__goalTimer = setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 400); }, 8000);
  }
  confettiBurst(110);
}

function renderLeaderboard(filter = 'all') {
  const pts = pointsMode();
  let ranked = rankedPlayers();

  if (filter === 'top10')       ranked = ranked.filter(r => r.rank <= 10);
  else if (filter === 'movers') ranked = ranked.filter(r => r.delta > 0);
  else if (filter === 'me') {
    const meIdx = ranked.findIndex(r => isMe(r.p.name));
    if (meIdx >= 0) ranked = ranked.slice(Math.max(0, meIdx - 3), Math.min(ranked.length, meIdx + 4));
    else ranked = [];
  }

  renderPodium();

  const wrap = $('#leaderboard');
  if (!ranked.length) {
    const hint = filter === 'me' ? ' — kies eerst je naam bij “Mijn cockpit”.' : '.';
    wrap.innerHTML = `<div class="lb-empty">Niemand in deze weergave${hint}</div>`;
    return;
  }

  // FLIP: onthoud de huidige rij-posities zodat ze straks soepel naar hun
  // nieuwe plek schuiven (bij filterwissel of een toekomstige rang-update).
  const firstTop = new Map();
  wrap.querySelectorAll('.lb-row').forEach(r => firstTop.set(r.dataset.player, r.getBoundingClientRect().top));

  wrap.innerHTML = ranked.map(({ p, rank, delta, gap, shared, isMover }) => {
    const mine = isMe(p.name);
    const medal = rank === 1 ? 'rank1' : rank === 2 ? 'rank2' : rank === 3 ? 'rank3' : '';
    let deltaHtml = '';
    if (pts && typeof delta === 'number') {
      if (delta > 0)      deltaHtml = `<span class="lb-delta delta-up">▲ ${delta}</span>`;
      else if (delta < 0) deltaHtml = `<span class="lb-delta delta-down">▼ ${-delta}</span>`;
      else                deltaHtml = `<span class="lb-delta delta-flat">=</span>`;
    }
    const gapHtml = pts
      ? (rank === 1 ? '<span class="lb-gap leader">koploper</span>' : `<span class="lb-gap">−${gap}</span>`)
      : '';
    const moverHtml = isMover ? '<span class="mover-badge">🔥 stijger v/d dag</span>' : '';
    const tieHtml = shared ? '<span class="lb-tie">=</span>' : '';
    const spark = pts ? sparkline(p.name) : '';
    return `
      <div class="lb-row ${mine ? 'you' : ''} ${medal}" data-player="${p.name.replace(/"/g, '&quot;')}" onclick="openPlayerModal('${p.name.replace(/'/g, "\\'")}')">
        <div class="lb-pos-cell"><span class="lb-pos ${medal}">${rank}</span>${tieHtml}</div>
        <div class="lb-name-cell">
          <div class="avatar">${getInitial(p.name)}</div>
          <div class="lb-name-wrap">
            <div class="lb-name-line">${p.name}${mine ? ' <span class="text-oranje text-[10px] font-black ml-1">JIJ</span>' : ''}${moverHtml}</div>
            ${spark}
          </div>
        </div>
        <div class="lb-pts-cell">
          ${pts
            ? `<div class="lb-pts-main"><span class="pts-val">${p.points}</span><span class="pts-unit">pt</span>${deltaHtml}</div>${gapHtml}`
            : statusChip(p)}
        </div>
      </div>`;
  }).join('');

  // FLIP-animatie: van oude naar nieuwe positie.
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    wrap.querySelectorAll('.lb-row').forEach(r => {
      const prevTop = firstTop.get(r.dataset.player);
      if (prevTop == null) return;
      const dy = prevTop - r.getBoundingClientRect().top;
      if (Math.abs(dy) < 2) return;
      r.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }],
        { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' });
    });
  }
}

$$('.chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderLeaderboard(btn.dataset.filter);
  });
});

// ============================================================
// SPELER-PROFIEL
// ============================================================
function openPlayerModal(name) {
  const p = POOL_PLAYERS.find(x => x.name === name);
  if (!p) return;
  const henkTake = HENK.player_takes[p.name] || HENK.player_takes.default;
  const bucketLabel = {
    complete: 'Helemaal klaar — alles ingevuld',
    groep:    'Groepsfase compleet — de knock-outfase moet nog',
    bezig:    'Bezig met invullen',
    nul:      'Nog geen wedstrijden ingevuld'
  }[bucket(p)];
  const pts = pointsMode();
  $('#playerModalBody').innerHTML = `
    <div class="flex items-start gap-4">
      <div class="player-modal-avatar">${getInitial(p.name)}</div>
      <div class="flex-1">
        <div class="player-modal-name">${p.name}${isMe(p.name) ? ' <span class="text-oranje text-sm font-bold ml-2">JIJ</span>' : ''}</div>
        <div class="player-modal-status">${bucketLabel}</div>
      </div>
    </div>

    <div class="player-stats-grid">
      <div class="player-stat">
        <div class="v">${p.matches}<span class="text-white/30 text-base">/104</span></div>
        <div class="l">wedstrijden voorspeld</div>
      </div>
      <div class="player-stat">
        <div class="v">${p.winner && p.topscorer ? '2/2' : (p.winner || p.topscorer ? '1/2' : '0/2')}</div>
        <div class="l">winnaar + topscorer</div>
      </div>
      <div class="player-stat">
        <div class="v">${p.paid ? '✓' : '✗'}</div>
        <div class="l">inleg betaald</div>
      </div>
      <div class="player-stat">
        <div class="v">${pts ? p.points : '—'}<span class="text-white/30 text-base">${pts ? ' pt' : ''}</span></div>
        <div class="l">punten</div>
      </div>
    </div>

    <div class="henk-quote">
      <strong class="text-oranje">Henk over ${p.name}:</strong><br/>
      ${henkTake}
    </div>
  `;
  $('#playerModal').classList.remove('hidden');
}
function closePlayerModal() { $('#playerModal').classList.add('hidden'); }
$('#playerModal').addEventListener('click', (e) => {
  if (e.target.id === 'playerModal') closePlayerModal();
});

// ============================================================
// WEDSTRIJD-RADAR
// ============================================================
function renderMatchRadar() {
  const now = Date.now();
  // Hand-geschreven analyse (consensus + Henk-take) als overlay op kalender-id.
  const editorial = {};
  (window.POOL_MATCHES_UPCOMING || []).forEach(m => { editorial[String(m.id)] = m; });

  // Volgende ongespeelde duels uit de kalender — gespeelde/lopende vallen weg,
  // en de radar rolt vanzelf het hele toernooi door (loopt nooit leeg op oude data).
  const upcoming = POOL_CALENDAR
    .filter(m => !resultFor(m) && new Date(m.date).getTime() > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6);

  if (!upcoming.length) {
    $('#matchRadar').innerHTML = `<div class="radar-empty">Even geen geplande wedstrijden in beeld — de radar vult zich weer zodra het volgende programma vaststaat.</div>`;
    return;
  }

  $('#matchRadar').innerHTML = upcoming.map(m => {
    const d = new Date(m.date);
    const when = d.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' }) + ' · ' +
                 d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    const ed = editorial[String(m.id)];
    const place = ed ? `${ed.stadium} · ${ed.city}` : (m.phase || '');

    let analysis;
    if (ed && ed.consensus) {
      const c = ed.consensus, total = (c.home + c.draw + c.away) || 1;
      analysis = `
        <div class="heat">
          <div class="bar h" style="height: ${(c.home / total) * 100}%"></div>
          <div class="bar d" style="height: ${(c.draw / total) * 100}%"></div>
          <div class="bar a" style="height: ${(c.away / total) * 100}%"></div>
        </div>
        <div class="heat-legend">
          <span class="text-veld">${c.home}% thuiswinst</span>
          <span>${c.draw}% gelijk</span>
          <span class="text-oranje">${c.away}% uitwinst</span>
        </div>
        ${ed.outlier ? `<div class="mt-2 text-xs text-white/45"><span class="text-goud font-semibold">Tegendraads:</span> ${ed.outlier}</div>` : ''}
        <div class="henk-mini">${ed.henkPick}</div>`;
    } else {
      analysis = `<div class="radar-soon">${m.phase || 'Komende wedstrijd'} — de analyse volgt zodra de poule heeft ingevuld.</div>`;
    }

    return `
      <div class="match-card">
        <div class="when">${when}</div>
        <div class="city">${place}</div>
        <div class="teams">
          <div class="team">${m.home}</div>
          <div class="vs">VS</div>
          <div class="team right">${m.away}</div>
        </div>
        ${analysis}
      </div>`;
  }).join('');
}

// ============================================================
// POOL-DNA
// ============================================================
function renderDNA() {
  const fillList = (selector, items) => {
    const max = items[0].count;
    $(selector).innerHTML = items.map(it => `
      <div class="pick-row">
        <span class="flag">${it.flag || it.country || ''}</span>
        <div class="nm">${it.name}</div>
        <div class="barbg"><div class="bar" style="width:${(it.count / max) * 100}%"></div></div>
        <div class="cnt">${it.count}</div>
      </div>
    `).join('');
  };
  fillList('#championPicks', POOL_DNA.champions);
  fillList('#topscorerPicks', POOL_DNA.topscorers);

  $('#championHenk').innerHTML = `<strong class="text-oranje">Henk:</strong> De meeste stemmen gaan naar Spanje. Veilig, voorspelbaar, zó braaf dat het pijn doet. <strong>Mauricio1980</strong> gokt Frankrijk — moedig, maar de bracket is onverbiddelijk en kent geen genade. En Nederland? Amper stemmen, in een poule die vól Oranje zit op vrijdag. Dat mag een paar mensen zich persoonlijk aanrekenen.`;
  $('#topscorerHenk').innerHTML = `<strong class="text-oranje">Henk:</strong> Mbappé favoriet, net als bij de halve wereldbevolking — origineel is anders. Drie stemmen voor <strong>Vinícius</strong>, de man die naast Mbappé staat bij Real: dat is geen analyse, dat is gokken met je ogen dicht. En wie Yamal links laat liggen terwijl hij Spanje wél kampioen maakt, moet z'n huiswerk helemaal overdoen.`;
}

// ============================================================
// BADGES
// ============================================================
function renderBadges() {
  $('#badges').innerHTML = POOL_BADGES.map(b => `
    <div class="badge-card ${b.holder ? '' : 'locked'}">
      <span class="icon">${b.icon}</span>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
      <div class="holder">${b.holder ? '🏆 ' + b.holder : 'Nog niet vergeven'}</div>
    </div>
  `).join('');
}

// ============================================================
// NU LIVE — indicator op basis van aftraptijden (client-side)
// ============================================================
const LIVE_WINDOW_MIN = 120; // een wedstrijd loopt ~2 uur (incl. rust/blessuretijd)

function liveMatches() {
  const now = Date.now();
  return POOL_CALENDAR.filter(m => {
    const start = new Date(m.date).getTime();
    const elapsed = (now - start) / 60000;
    return elapsed >= 0 && elapsed <= LIVE_WINDOW_MIN;
  }).map(m => ({ ...m, elapsed: Math.floor((now - new Date(m.date).getTime()) / 60000) }));
}

function renderLiveNow() {
  const el = $('#liveNow');
  if (!el) return;
  const live = liveMatches();
  if (!live.length) { el.innerHTML = ''; return; }
  el.innerHTML = live.map(m => {
    const kickoff = new Date(m.date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    const ls = liveScoreFor(m);
    const score = ls ? `${ls.hs} - ${ls.as}` : '–';
    const lm = liveMinute(ls);
    const clock = ls && lm != null
      ? (ls.status === 'HT' ? 'rust' : `${lm}'`)
      : `afgetrapt ${kickoff} · ±${m.elapsed}'`;
    return `
      <div class="livebar">
        <span class="live-dot"></span>
        <span class="live-label">LIVE</span>
        <span class="live-match">${flagFor(m.home)} ${m.home} <span class="live-vs">${score}</span> ${m.away} ${flagFor(m.away)}</span>
        <span class="live-meta">${clock}</span>
      </div>`;
  }).join('');
}

// ============================================================
// LIVE ARENA — voorspellingen van de poule per gestarte wedstrijd
// ============================================================
function predictionsFor(idx) {
  return (window.POOL_PREDICTIONS && (POOL_PREDICTIONS[idx] || POOL_PREDICTIONS[String(idx)])) || null;
}

// Verdeling van de picks: thuiswinst / gelijk / uitwinst + exacte scores.
function pickStats(picks) {
  let h = 0, d = 0, a = 0;
  const exact = {};
  picks.forEach(p => {
    if (p.h > p.a) h++; else if (p.h < p.a) a++; else d++;
    const k = p.h + '-' + p.a;
    exact[k] = (exact[k] || 0) + 1;
  });
  const exactSorted = Object.entries(exact).sort((x, y) => y[1] - x[1]);
  return { h, d, a, total: picks.length, exact: exactSorted };
}

// De meest tegendraadse voorspeller (afwijkend van de meerderheid).
function boldestPick(picks, stats) {
  const major = stats.h >= stats.d && stats.h >= stats.a ? 'h' : (stats.a >= stats.d ? 'a' : 'd');
  const against = picks.filter(p => {
    const o = p.h > p.a ? 'h' : (p.h < p.a ? 'a' : 'd');
    return o !== major;
  });
  const pool = against.length ? against : picks;
  // grootste doelsaldo-afwijking = meest gedurfd
  return pool.slice().sort((x, y) => Math.abs(y.h - y.a) - Math.abs(x.h - x.a))[0];
}

// Henks scherpe live-take per wedstrijd, op basis van de échte picks (+ uitslag/live stand).
function henkMatchTake(m, picks, result, liveScore) {
  const s = pickStats(picks);
  const bold = boldestPick(picks, s);
  const topScore = s.exact[0] ? s.exact[0][0].replace('-', ' - ') : '?';
  const topScoreN = s.exact[0] ? s.exact[0][1] : 0;

  // Live tussenstand bekend en nog geen eindstand → reageer op de stand.
  if (liveScore && !result) {
    const lh = liveScore.hs, la = liveScore.as;
    const exactNow = picks.filter(p => p.h === lh && p.a === la).map(p => p.player);
    const lo = lh > la ? 'h' : (lh < la ? 'a' : 'd');
    const tendNow = picks.filter(p => {
      const po = p.h > p.a ? 'h' : (p.h < p.a ? 'a' : 'd');
      return po === lo;
    }).length;
    const lead = lh > la ? m.home : (lh < la ? m.away : null);
    let line = `Het staat <strong>${lh}-${la}</strong>. `;
    if (exactNow.length) {
      line += `${exactNow.slice(0,3).join(', ')}${exactNow.length>3?` +${exactNow.length-3}`:''} heeft precies dit als eindstand — die zit nu met de billen samengeknepen te bidden dat de scheids vervroegd affluit.`;
    } else if (lead) {
      line += `${tendNow} van de ${s.total} voorspelde een zege voor ${lead}; die zitten voorlopig goed. De rest mag hopen op een ommekeer — of vast aan een goede smoes werken.`;
    } else {
      line += `Een gelijkspel had bijna niemand zien aankomen — blijft dit zo, dan ligt de hele poule plat op de buik.`;
    }
    return line;
  }

  if (result) {
    const [rh, ra] = result.split('-').map(Number);
    const exactWinners = picks.filter(p => p.h === rh && p.a === ra).map(p => p.player);
    const tendErr = picks.filter(p => {
      const po = p.h > p.a ? 'h' : (p.h < p.a ? 'a' : 'd');
      const ro = rh > ra ? 'h' : (rh < ra ? 'a' : 'd');
      return po !== ro;
    });
    if (exactWinners.length) {
      const names = exactWinners.slice(0, 4).join(', ') + (exactWinners.length > 4 ? ` +${exactWinners.length - 4}` : '');
      return `Eindstand ${rh}-${ra}. Held${exactWinners.length > 1 ? 'en' : ''} van de wedstrijd: <strong>${names}</strong> — exact goed. De rest? Toekijken en klappen voor andermans gokwerk.`;
    }
    if (tendErr.length === picks.length) {
      return `Eindstand ${rh}-${ra}. Niemand had de juiste afloop. De hele poule zit ernaast — collectief de plank misgeslagen, en ik geniet van elke seconde.`;
    }
    return `Eindstand ${rh}-${ra}. Niemand had 'm exact, maar ${picks.length - tendErr.length} van de ${picks.length} had tenminste de juiste afloop. ${tendErr.length ? `<strong>${tendErr[0].player}</strong> en ${tendErr.length - 1} ander${tendErr.length - 1 === 1 ? '' : 'en'} zaten er finaal naast — terug naar de tekentafel.` : ''}`;
  }

  // Live (nog geen uitslag)
  const homePct = Math.round((s.h / s.total) * 100);
  const boldOutcome = bold.h > bold.a ? 'h' : (bold.h < bold.a ? 'a' : 'd');
  if (s.h >= s.total * 0.85) {
    const contrarian = boldOutcome !== 'h';
    if (contrarian) {
      return `${s.h} van de ${s.total} gokt op winst voor ${m.home} — ${homePct}%, bijna unaniem. En dan <strong>${bold.player}</strong>: ${bold.h}-${bold.a}. Eén dwarsdenker tegen de hele poule in. Lef of waanzin, we gaan het zien.`;
    }
    return `${s.h} van de ${s.total} gokt op winst voor ${m.home} — ${homePct}%, bijna unaniem. Niemand durft tegen de stroom in; <strong>${bold.player}</strong> ging met ${bold.h}-${bold.a} nog het meest voor de show.`;
  }
  if (Math.abs(s.h - s.a) <= 2) {
    return `Verdeelde poule: ${s.h}× ${m.home}, ${s.a}× ${m.away}, ${s.d}× gelijk. Niemand durft hier hardop iets te roepen. <strong>${bold.player}</strong> dan nog het meest, met ${bold.h}-${bold.a}.`;
  }
  return `De poule leunt naar ${s.h >= s.a ? m.home : m.away} (populairste uitslag: ${topScore}, ${topScoreN}×). <strong>${bold.player}</strong> gaat tegen de stroom in met ${bold.h}-${bold.a} — die kan straks de held of de pineut zijn.`;
}

function arenaMatches() {
  if (!window.POOL_PREDICTIONS) return [];
  const now = Date.now();
  return Object.keys(POOL_PREDICTIONS).map(k => {
    const idx = +k;
    const m = POOL_CALENDAR[idx];
    if (!m) return null;
    const picks = POOL_PREDICTIONS[k];
    const result = resultFor(m);
    const start = new Date(m.date).getTime();
    const live = !result && now >= start && (now - start) <= LIVE_WINDOW_MIN * 60000;
    return { idx, m, picks, result, live, start };
  }).filter(Boolean).sort((a, b) => (b.live - a.live) || (b.start - a.start)).slice(0, 6);
}

function renderArena() {
  const wrap = $('#arena');
  if (!wrap) return;
  const matches = arenaMatches();
  if (!matches.length) {
    wrap.innerHTML = `<div class="arena-empty">De Arena opent zodra de eerste wedstrijd begint — dan onthult de poule alle voorspellingen en gaat Henk los.</div>`;
    return;
  }
  wrap.innerHTML = matches.map(({ idx, m, picks, result, live }) => {
    const s = pickStats(picks);
    const total = s.total || 1;
    const when = new Date(m.date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    const ls = live ? liveScoreFor(m) : null;
    const liveKey = ls ? `${ls.hs}-${ls.as}` : null;
    const status = result
      ? `<span class="arena-final">${result.replace('-', ' - ')}</span>`
      : (live
          ? `<span class="arena-live"><span class="live-dot"></span> LIVE${ls ? ` <b class="arena-livescore">${ls.hs}-${ls.as}</b>` : ''}</span>`
          : `<span class="arena-soon">${when}</span>`);
    const top3 = s.exact.slice(0, 3).map(([sc, n]) =>
      `<span class="ascore${sc === liveKey ? ' hot' : ''}">${sc}<b>${n}×</b></span>`).join('');
    // Wat-als + inzet: bij de huidige live stand, wie juicht en wie baalt?
    let watals = '';
    if (live && ls) {
      const exactNow = picks.filter(p => p.h === ls.hs && p.a === ls.as);
      const lo = ls.hs > ls.as ? 'h' : (ls.hs < ls.as ? 'a' : 'd');
      const totoNow = picks.filter(p => { const po = p.h>p.a?'h':(p.h<p.a?'a':'d'); return po === lo; });
      const miss = picks.length - totoNow.length;
      const meName = getMyName().toLowerCase();
      const mePick = meName ? picks.find(p => p.player.toLowerCase() === meName) : null;
      const meExact = !!(mePick && exactNow.some(p => p.player.toLowerCase() === meName));
      const meToto = !!(mePick && totoNow.some(p => p.player.toLowerCase() === meName));
      const meTag = mePick
        ? `<span class="watals-me ${meExact ? 'good' : meToto ? 'ok' : 'bad'}">jij gokte ${mePick.h}-${mePick.a} · ${meExact ? 'exact goed ✓' : meToto ? 'juiste toto' : 'zit ernaast'}</span>`
        : '';
      watals = `
        <div class="watals">
          <div class="watals-title">Als het ${ls.hs}-${ls.as} blijft:</div>
          <div class="watals-row">
            <span class="wa good">${exactNow.length}× exact</span>
            <span class="wa ok">${totoNow.length}× juiste toto</span>
            <span class="wa bad">${miss}× mis</span>
          </div>
          <div class="watals-stakes"><span class="st-juich">🎉 ${totoNow.length} juichen</span><span class="st-baal">😬 ${miss} balen</span>${meTag}</div>
        </div>`;
    }
    return `
      <div class="arena-card ${live ? 'is-live arena-hero' : ''} ${result ? 'is-final' : ''}" data-idx="${idx}">
        <div class="arena-head">
          <div class="arena-teams">${flagFor(m.home)} ${m.home} <span class="arena-vs">—</span> ${m.away} ${flagFor(m.away)}</div>
          ${status}
        </div>
        <div class="arena-dist">
          <div class="ad-seg veld" style="flex:${s.h || 0.001}" title="${m.home}: ${s.h}"></div>
          <div class="ad-seg grijs" style="flex:${s.d || 0.001}" title="gelijk: ${s.d}"></div>
          <div class="ad-seg oranje" style="flex:${s.a || 0.001}" title="${m.away}: ${s.a}"></div>
        </div>
        <div class="arena-legend">
          <span class="text-veld">${s.h}× ${m.home}</span>
          <span>${s.d}× gelijk</span>
          <span class="text-oranje">${s.a}× ${m.away}</span>
        </div>
        <div class="arena-scores">${top3}</div>
        ${watals}
        <div class="arena-henk">${henkMatchTake(m, picks, result, ls)}</div>
      </div>`;
  }).join('');
}

// ============================================================
// MIJN COCKPIT — persoonlijk paneel
// ============================================================
function renderMyCockpit() {
  const sec = $('#myCockpit');
  if (!sec) return;
  const me = getMyName();
  if (!me) {
    sec.innerHTML = `
      <div class="cockpit-empty">
        <div>
          <div class="font-bold text-lg">Wie ben jij?</div>
          <div class="text-white/60 text-sm mt-1">Kies je naam en je ziet hier je eigen cockpit: stand, punten en wat je nog mist.</div>
        </div>
        <button onclick="openMeModal()" class="px-4 py-2 rounded-xl bg-oranje text-ink font-bold hover:bg-oranje2 transition whitespace-nowrap">Kies je naam →</button>
      </div>`;
    return;
  }
  const p = POOL_PLAYERS.find(x => isMe(x.name));
  if (!p) { sec.innerHTML = ''; return; }

  const ranked = sortedPlayers();
  const pos = ranked.findIndex(x => x.name === p.name) + 1;
  const pts = pointsMode();
  const missing = 104 - p.matches;
  const henkTake = HENK.player_takes[p.name] || HENK.player_takes.default;

  // Waarschuwing: nog wedstrijden in te vullen vóór hun aftrap?
  let warn = '';
  if (missing > 0) {
    warn = `<div class="cockpit-warn">⚠ Je mist nog <strong>${missing}</strong> ${missing === 1 ? 'wedstrijd' : 'wedstrijden'}. Vul ze in op wkpooltjes — tot één minuut vóór elke aftrap kan het nog.</div>`;
  } else if (!p.winner || !p.topscorer) {
    warn = `<div class="cockpit-warn">⚠ Je wedstrijden staan, maar je ${!p.winner && !p.topscorer ? 'wereldkampioen én topscorer' : !p.winner ? 'wereldkampioen' : 'topscorer'} ontbreekt nog.</div>`;
  } else if (!p.paid) {
    warn = `<div class="cockpit-warn">⚠ Je voorspelling is compleet — alleen je inleg staat nog open.</div>`;
  }

  sec.innerHTML = `
    <div class="cockpit-head">
      <div class="cockpit-avatar">${getInitial(p.name)}</div>
      <div class="flex-1">
        <div class="text-[11px] uppercase tracking-widest text-oranje font-bold">Mijn cockpit</div>
        <div class="text-2xl font-black leading-tight">${p.name}</div>
      </div>
      <button onclick="openMeModal()" class="text-xs px-3 py-1.5 rounded-full bg-ink border border-line text-white/60 hover:text-white hover:border-oranje transition">wisselen</button>
    </div>
    <div class="cockpit-stats">
      <div class="cockpit-stat"><div class="v">${pos > 0 ? '#' + pos : '—'}</div><div class="l">positie</div></div>
      <div class="cockpit-stat"><div class="v">${pts ? p.points : '—'}<span class="text-white/30 text-sm">${pts ? ' pt' : ''}</span></div><div class="l">punten</div></div>
      <div class="cockpit-stat"><div class="v">${p.matches}<span class="text-white/30 text-sm">/104</span></div><div class="l">ingevuld</div></div>
      <div class="cockpit-stat"><div class="v">${p.paid ? '✓' : '✗'}</div><div class="l">betaald</div></div>
    </div>
    ${warn}
    <div class="henk-quote mt-4"><strong class="text-oranje">Henk over jou:</strong><br/>${henkTake}</div>`;
}

// ============================================================
// SPEELSCHEMA — per dag, met fasefilter en uitslagen
// ============================================================
let scheduleFilter = 'all';
function matchPhaseClass(phase) {
  return phase === 'Groepsfase' ? 'group' : 'knockout';
}
function renderSchedule() {
  const wrap = $('#schedule');
  if (!wrap) return;
  let list = POOL_CALENDAR.slice();
  if (scheduleFilter === 'group')    list = list.filter(m => m.phase === 'Groepsfase');
  if (scheduleFilter === 'knockout') list = list.filter(m => m.phase !== 'Groepsfase');

  // Groeperen per dag
  const days = {};
  list.forEach(m => {
    const d = new Date(m.date);
    const key = d.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });
    (days[key] = days[key] || []).push(m);
  });

  const todayStr = new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });
  wrap.innerHTML = Object.entries(days).map(([day, matches]) => `
    <div class="sched-day ${day === todayStr ? 'is-today' : ''}">
      <div class="sched-daylabel">${day === todayStr ? '▶ Vandaag · ' : ''}${day}</div>
      ${matches.map(m => {
        const t = new Date(m.date).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
        const res = resultFor(m);
        const fH = flagFor(m.home), fA = flagFor(m.away);
        return `
          <div class="sched-row">
            <span class="sched-time">${t}</span>
            <span class="sched-team home">${m.home} ${fH}</span>
            <span class="sched-score">${res ? res.replace('-', ' - ') : '<span class="text-white/25">—</span>'}</span>
            <span class="sched-team away">${fA} ${m.away}</span>
          </div>`;
      }).join('')}
    </div>`).join('');
}
$$('.sched-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.sched-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    scheduleFilter = btn.dataset.phase;
    renderSchedule();
  });
});

// ============================================================
// GROEPEN A–L
// ============================================================
function renderGroups() {
  const wrap = $('#groups');
  if (!wrap) return;
  wrap.innerHTML = POOL_GROUPS.map(g => {
    const standings = window.POOL_STANDINGS && POOL_STANDINGS[g.groep];
    const played = standings && standings.some(s => s.played > 0);
    let rows;
    if (standings && standings.length && played) {
      rows = standings.map((s, i) => `
        <div class="group-row ${i < 2 ? 'qualify' : ''}">
          <span class="gr-pos">${i + 1}</span>
          <span class="gr-team">${flagFor(s.team)} ${s.team}</span>
          <span class="gr-pts">${s.points}</span>
        </div>`).join('');
    } else {
      rows = g.teams.map(t => `
        <div class="group-row">
          <span class="gr-pos">·</span>
          <span class="gr-team">${flagFor(t)} ${t}</span>
          <span class="gr-pts text-white/25">0</span>
        </div>`).join('');
    }
    return `
      <div class="group-card">
        <div class="group-title">Groep ${g.groep}</div>
        <div class="group-cols"><span>#</span><span>Team</span><span>Ptn</span></div>
        ${rows}
      </div>`;
  }).join('');
}

// ============================================================
// FOOTER
// ============================================================
function renderFooter() {
  const synced = new Date(POOL_META.syncedAt);
  $('#lastSync').textContent = 'Stand van: ' + synced.toLocaleString('nl-NL', {
    day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
  });
}

// ============================================================
// HENK-BUBBEL
// ============================================================
function refreshHenkBubble() {
  typeInto($('#henkBubbleText'), nextHenkQuote());
}
$('#henkToggle').addEventListener('click', () => {
  $('#henkBubble').classList.remove('hidden');
  document.body.classList.add('henk-open');
  refreshHenkBubble();
});
$('#henkBubble .henk-bubble-close').addEventListener('click', () => {
  $('#henkBubble').classList.add('hidden');
  document.body.classList.remove('henk-open');
});
$('#henkNewBtn').addEventListener('click', refreshHenkBubble);

setTimeout(() => {
  $('#henkBubble').classList.remove('hidden');
  document.body.classList.add('henk-open');
  refreshHenkBubble();
}, 4500);

// ============================================================
// CONFETTI
// ============================================================
function confettiBurst(intensity = 40) {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#ff6b00', '#ffd700', '#0eb84a', '#ffffff'];
  const parts = Array.from({ length: intensity }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 100,
    vx: (Math.random() - .5) * 4,
    vy: 2 + Math.random() * 4,
    s: 4 + Math.random() * 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    r: Math.random() * Math.PI,
    vr: (Math.random() - .5) * 0.3
  }));
  let frames = 0;
  (function step() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (frames < 240) requestAnimationFrame(step);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

// ============================================================
// TOETSENBORD
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closePlayerModal();
  const meModal = $('#meModal');
  if (meModal && !meModal.classList.contains('hidden') && getMyName()) {
    meModal.classList.add('hidden');
  }
});

// ============================================================
// INIT
// ============================================================
// ============================================================
// SCOREBUG — sticky broadcast-balk, altijd zichtbaar op elke tab.
// Live → pulserende stand + minuut (roteert bij meerdere duels);
// niets live → countdown naar de volgende aftrap. Klik → Arena.
// ============================================================
let _sbIdx = 0, _sbLiveN = -1, _sbTick = 0;

function nextScheduledMatch() {
  const now = Date.now();
  return POOL_CALENDAR
    .filter(m => !resultFor(m) && new Date(m.date).getTime() > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
}

function fmtCountdown(ms) {
  if (ms < 0) ms = 0;
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function liveClock(ls) {
  if (!ls) return 'bezig';
  if (ls.status === 'HT') return 'rust';
  const lm = liveMinute(ls);
  return lm != null ? `${lm}'` : 'bezig';
}

function buildScorebug() {
  const el = $('#scorebug');
  if (!el) return;
  const live = liveMatches();

  if (live.length) {
    if (_sbIdx >= live.length) _sbIdx = 0;
    const m = live[_sbIdx];
    const ls = liveScoreFor(m);
    const score = ls ? `${ls.hs}–${ls.as}` : '–';
    const rot = live.length > 1 ? `<span class="sb-count">${_sbIdx + 1}/${live.length}</span>` : '';
    el.className = 'scorebug is-live';
    el.innerHTML =
      `<span class="sb-dot"></span><span class="sb-tag">Live</span>` +
      `<span class="sb-match">${flagFor(m.home)} <b>${m.home}</b> <span class="sb-score">${score}</span> <b>${m.away}</b> ${flagFor(m.away)}</span>` +
      rot +
      `<span class="sb-time" data-sb-min>${liveClock(ls)}</span>` +
      `<span class="sb-cta">→ Arena</span>`;
  } else {
    const nm = nextScheduledMatch();
    el.className = 'scorebug is-countdown';
    if (!nm) {
      el.innerHTML = `<span class="sb-dot off"></span><span class="sb-tag muted">Geen wedstrijden gepland</span>`;
    } else {
      const d = new Date(nm.date);
      const when = d.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' }) + ' ' +
                   d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
      el.innerHTML =
        `<span class="sb-dot countdown"></span><span class="sb-tag">Volgende</span>` +
        `<span class="sb-match">${flagFor(nm.home)} <b>${nm.home}</b> — <b>${nm.away}</b> ${flagFor(nm.away)} <span class="sb-when">${when}</span></span>` +
        `<span class="sb-time" data-sb-cd>${fmtCountdown(d.getTime() - Date.now())}</span>`;
    }
  }
}

function scorebugLoop() {
  if (document.hidden || !$('#scorebug')) return;
  const liveN = liveMatches().length;
  document.body.classList.toggle('is-matchday', liveN > 0); // stadionlicht aan bij live duel
  if (liveN !== _sbLiveN) {                 // modus/aantal gewijzigd → herbouw
    _sbLiveN = liveN; _sbIdx = 0; _sbTick = 0;
    buildScorebug();
    return;
  }
  _sbTick++;
  if (liveN > 1 && _sbTick % 6 === 0) {     // roteer ~elke 6s bij meerdere live duels
    _sbIdx = (_sbIdx + 1) % liveN;
    buildScorebug();
    return;
  }
  // anders alleen dynamische tekst verversen (geen rebuild → pulse blijft vloeiend)
  const cd = document.querySelector('[data-sb-cd]');
  if (cd) {
    const nm = nextScheduledMatch();
    if (nm) cd.textContent = fmtCountdown(new Date(nm.date).getTime() - Date.now());
    else buildScorebug();
  }
  const minEl = document.querySelector('[data-sb-min]');
  if (minEl && liveN) minEl.textContent = liveClock(liveScoreFor(liveMatches()[_sbIdx % liveN]));
}

// ============================================================
// AMBIANCE — subtiele zwevende embers achter de content.
// Uit bij reduced-motion / zuinige toestellen; pauzeert bij verborgen tab.
// ============================================================
function initAmbient() {
  const canvas = document.getElementById('ambient');
  if (!canvas) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const weak = (navigator.hardwareConcurrency || 4) < 4;
  if (reduce || weak) return;
  const ctx = canvas.getContext('2d');
  let w, h, parts, raf = 0;
  const COLORS = ['255,107,0', '255,215,0', '14,184,74'];
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  function seed() {
    const n = Math.min(28, Math.floor(window.innerWidth / 48));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: 1 + Math.random() * 2,
      vy: -(0.15 + Math.random() * 0.4), vx: (Math.random() - 0.5) * 0.2,
      a: 0.05 + Math.random() * 0.16,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function step() {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y += p.vy; p.x += p.vx;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${p.a})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(step);
  }
  resize(); seed(); step();
  window.addEventListener('resize', () => { resize(); seed(); });
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(step);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setMyName(getMyName());
  updateCountdown();
  renderLiveNow();
  renderToday();
  renderArena();
  renderMyCockpit();
  fillStatusTiles();
  renderHeroLeaderboard();
  renderLeaderboard();
  renderMatchRadar();
  renderSchedule();
  renderGroups();
  renderDNA();
  renderBadges();
  renderFooter();

  // Lege Hall of Fame (nog geen badges vergeven) niet tonen — geen lege huls.
  if (!POOL_BADGES.some(b => b.holder)) {
    const hof = document.getElementById('hallofame');
    if (hof) hof.remove();
  }

  initTabs();
  setTimeout(() => confettiBurst(40), 600);

  // Live-indicator, klok en arena elke minuut verversen.
  setInterval(() => { renderLiveNow(); renderArena(); }, 60_000);

  // Live tussenstand ophalen zodra/zolang er een wedstrijd loopt.
  if (liveMatches().length) fetchLive();
  setInterval(() => { if (liveMatches().length) fetchLive(); }, 60_000);

  // Scorebug: altijd-zichtbare broadcast-balk (live stand of countdown).
  buildScorebug();
  setInterval(scorebugLoop, 1000);
  initAmbient();

  // Anoniem-schakelaar (presence): stand inladen + live bijwerken.
  const anonToggle = $('#anonToggle');
  if (anonToggle) {
    try { anonToggle.checked = localStorage.getItem('indi-arena-anon') === '1'; } catch (e) {}
    anonToggle.addEventListener('change', () => {
      if (typeof window.indiSetAnon === 'function') window.indiSetAnon(anonToggle.checked);
      else { try { localStorage.setItem('indi-arena-anon', anonToggle.checked ? '1' : '0'); } catch (e) {} }
    });
  }

  if (!getMyName()) {
    setTimeout(() => openMeModal(), 800);
  }
});

// Generieke Henk-toast (hergebruikt door events, leiderwissel én presence).
function henkSay(label, title, line, intensity) {
  const toast = $('#goalToast');
  if (!toast) return;
  const flash = $('#goalFlash'); if (flash) flash.textContent = label;
  $('#goalScore').textContent = title || '';
  $('#goalHenk').textContent = line;
  toast.classList.remove('hidden'); void toast.offsetWidth; toast.classList.add('show');
  clearTimeout(window.__goalTimer);
  window.__goalTimer = setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 400); }, 7000);
  if (intensity) confettiBurst(intensity);
}

window.openPlayerModal = openPlayerModal;
window.closePlayerModal = closePlayerModal;
window.openMeModal = openMeModal;
window.showTab = showTab;
window.henkSay = henkSay;
