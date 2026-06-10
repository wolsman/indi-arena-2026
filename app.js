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
  const c = { complete: 0, groep: 0, bezig: 0, nul: 0 };
  POOL_PLAYERS.filter(p => p.name).forEach(p => c[bucket(p)]++);
  $('#cntComplete').textContent = c.complete;
  $('#cntGroep').textContent    = c.groep;
  $('#cntBezig').textContent    = c.bezig;
  $('#cntNul').textContent      = c.nul;
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
      return (b.points - a.points) || (completeness(b) - completeness(a)) || a.name.localeCompare(b.name, 'nl');
    }
    return (completeness(b) - completeness(a)) || a.name.localeCompare(b.name, 'nl');
  });
}

function renderHeroLeaderboard() {
  const sorted = sortedPlayers().slice(0, 6);
  const pts = pointsMode();
  $('#heroLeaderboard').innerHTML = sorted.map((p, i) => `
    <div class="hero-row" onclick="openPlayerModal('${p.name.replace(/'/g, "\\'")}')">
      <span class="pos">${i + 1}</span>
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

function renderLeaderboard(filter = 'all') {
  const pts = pointsMode();
  let list = sortedPlayers();
  if (filter !== 'all') list = list.filter(p => bucket(p) === filter);

  $('#leaderboard').innerHTML = list.map((p, i) => {
    const pct = Math.round((completeness(p) / 116) * 100);
    const posCls = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
    const mine = isMe(p.name);
    let delta = '';
    if (pts && typeof p.prevPos === 'number') {
      const diff = p.prevPos - (i + 1);
      if (diff > 0)      delta = `<span class="lb-delta delta-up">▲ ${diff}</span>`;
      else if (diff < 0) delta = `<span class="lb-delta delta-down">▼ ${-diff}</span>`;
      else               delta = `<span class="lb-delta delta-flat">=</span>`;
    }
    return `
      <div class="lb-row ${mine ? 'you' : ''}" onclick="openPlayerModal('${p.name.replace(/'/g, "\\'")}')">
        <div class="col-span-1">
          <span class="lb-pos ${posCls}">#${i + 1}</span>
        </div>
        <div class="col-span-5">
          <div class="lb-name">
            <div class="avatar">${getInitial(p.name)}</div>
            <div>
              <div>${p.name}${mine ? ' <span class="text-oranje text-[10px] font-black ml-1">JIJ</span>' : ''}</div>
              <div class="lb-bar"><div style="width:${pct}%"></div></div>
            </div>
          </div>
        </div>
        <div class="col-span-2 text-center col-hide">
          <div class="font-bold font-mono">${p.matches}<span class="text-white/40">/104</span></div>
        </div>
        <div class="col-span-1 text-center col-hide">
          <span class="lb-pill ${p.winner ? 'pill-yes' : 'pill-no'}">${p.winner ? '✓' : '×'}</span>
        </div>
        <div class="col-span-1 text-center col-hide">
          <span class="lb-pill ${p.topscorer ? 'pill-yes' : 'pill-no'}">${p.topscorer ? '✓' : '×'}</span>
        </div>
        <div class="col-span-2 lb-pts">
          ${pts ? `<span class="text-white">${p.points}</span> <span class="text-white/30">pt</span>${delta}` : `<span class="text-white/30">—</span>`}
        </div>
      </div>
    `;
  }).join('');
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
  $('#matchRadar').innerHTML = POOL_MATCHES_UPCOMING.map(m => {
    const d = new Date(m.date);
    const when = d.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' }) + ' · ' +
                 d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    const total = m.consensus.home + m.consensus.draw + m.consensus.away;
    return `
      <div class="match-card">
        <div class="when">${when}</div>
        <div class="city">${m.stadium} · ${m.city}</div>
        <div class="teams">
          <div class="team">${m.home}</div>
          <div class="vs">VS</div>
          <div class="team right">${m.away}</div>
        </div>
        <div class="heat">
          <div class="bar h" style="height: ${(m.consensus.home / total) * 100}%"></div>
          <div class="bar d" style="height: ${(m.consensus.draw / total) * 100}%"></div>
          <div class="bar a" style="height: ${(m.consensus.away / total) * 100}%"></div>
        </div>
        <div class="heat-legend">
          <span class="text-veld">${m.consensus.home}% thuiswinst</span>
          <span>${m.consensus.draw}% gelijk</span>
          <span class="text-oranje">${m.consensus.away}% uitwinst</span>
        </div>
        <div class="mt-2 text-xs text-white/45">
          <span class="text-goud font-semibold">Tegendraads:</span> ${m.outlier}
        </div>
        <div class="henk-mini">${m.henkPick}</div>
      </div>
    `;
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

  $('#championHenk').innerHTML = `<strong class="text-oranje">Henk:</strong> De meeste stemmen gaan naar Spanje. Veilig, voorspelbaar, een tikje braaf. <strong>Mauricio1980</strong> gokt op Frankrijk — moedig, want de bracket is onverbiddelijk. En Nederland krijgt amper stemmen, in een poule vol Oranje-shirts. Dat mag iemand zich persoonlijk aanrekenen.`;
  $('#topscorerHenk').innerHTML = `<strong class="text-oranje">Henk:</strong> Mbappé is favoriet, net als bij de halve wereldbevolking. Maar drie stemmen voor <strong>Vinícius</strong> — de man die naast Mbappé speelt bij Real Madrid — is gewoon slordig. En wie Yamal links laat liggen terwijl half de poule Spanje kampioen maakt, moet zijn huiswerk overdoen.`;
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
window.addEventListener('DOMContentLoaded', () => {
  setMyName(getMyName());
  updateCountdown();
  renderToday();
  fillStatusTiles();
  renderHeroLeaderboard();
  renderLeaderboard();
  renderMatchRadar();
  renderDNA();
  renderBadges();
  renderFooter();
  setTimeout(() => confettiBurst(40), 600);

  if (!getMyName()) {
    setTimeout(() => openMeModal(), 800);
  }
});

window.openPlayerModal = openPlayerModal;
window.closePlayerModal = closePlayerModal;
window.openMeModal = openMeModal;
