/* ============================================================
   Indi-Arena — presence-laag (wie kijkt er mee)
   Realtime via Supabase Presence. Laadt de Supabase-client alleen
   als er een geldige config staat; anders doet dit bestand niets
   (de site werkt dan gewoon door, zonder extra netwerk).
   ============================================================ */
(async function () {
  const cfg = window.INDI_SUPABASE || {};
  if (!cfg.url || !cfg.key || /JOUW-/.test(cfg.url + cfg.key)) return; // niet geconfigureerd → uit

  let createClient;
  try {
    ({ createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'));
  } catch (e) {
    return; // CDN niet bereikbaar → stil uit
  }

  const $ = (s) => document.querySelector(s);
  const getName = () => (typeof getMyName === 'function' && getMyName()) || '';
  const myName = getName();
  const anon = (() => { try { return localStorage.getItem('indi-arena-anon') === '1'; } catch (e) { return false; } })();
  const displayName = anon ? 'Anoniem' : (myName || 'een gast');

  const client = createClient(cfg.url, cfg.key, { realtime: { params: { eventsPerSecond: 2 } } });
  const channel = client.channel('indi-arena-presence', {
    config: { presence: { key: (anon ? 'anon-' : '') + (myName || 'gast') + '-' + Math.random().toString(36).slice(2, 7) } }
  });

  // ---- online-lijst uit de presence-state ----
  function onlineNames() {
    const state = channel.presenceState();
    const names = [];
    Object.values(state).forEach(arr => arr.forEach(p => { if (p && p.name && p.name !== 'Anoniem') names.push(p.name); }));
    return [...new Set(names)];
  }
  function onlineCount() {
    // tel ook anonieme kijkers mee voor het totaal
    const state = channel.presenceState();
    let n = 0; Object.values(state).forEach(arr => { n += arr.length; });
    return n;
  }

  const initial = (n) => (typeof getInitial === 'function' ? getInitial(n) : (n[0] || '?').toUpperCase());
  const mine = (n) => (typeof isMe === 'function' ? isMe(n) : false);

  function render() {
    const names = onlineNames();
    const count = onlineCount();
    const cluster = $('#onlineCluster');
    if (cluster) {
      if (count > 0) {
        const shown = names.slice(0, 4);
        cluster.innerHTML =
          `<span class="on-dot"></span><span class="on-count">${count}</span>` +
          `<span class="on-avs">${shown.map(n => `<span class="on-av" title="${n}">${initial(n)}</span>`).join('')}</span>`;
        cluster.classList.remove('hidden');
      } else {
        cluster.classList.add('hidden');
      }
    }
    const panel = $('#onlinePanel');
    if (panel) {
      const anonExtra = count - names.length;
      panel.innerHTML = count > 0
        ? `<div class="op-title"><span class="on-dot"></span> Nu online — ${count}</div>` +
          `<div class="op-names">${names.map(n => `<span class="op-name${mine(n) ? ' me' : ''}">${initial(n)} ${n}</span>`).join('')}` +
          `${anonExtra > 0 ? `<span class="op-name anon">+${anonExtra} anoniem</span>` : ''}</div>`
        : '';
    }
  }

  // ---- Henk reageert op presence (met cooldown tegen spam) ----
  let lastSpoke = 0;
  function canSpeak() { const t = Date.now(); if (t - lastSpoke < 18000) return false; lastSpoke = t; return true; }
  function say(label, title, line, intensity) {
    if (typeof window.henkSay === 'function') window.henkSay(label, title, line, intensity);
  }
  function ranks() {
    try {
      const r = (typeof rankedPlayers === 'function') ? rankedPlayers() : [];
      const leaders = r.filter(x => x.rank === 1).map(x => x.p.name);
      const meIdx = r.findIndex(x => mine(x.p.name));
      const rivals = [];
      if (meIdx > 0) rivals.push(r[meIdx - 1].p.name);
      if (meIdx >= 0 && meIdx < r.length - 1) rivals.push(r[meIdx + 1].p.name);
      return { leaders, rivals };
    } catch (e) { return { leaders: [], rivals: [] }; }
  }
  function henkJoin(name) {
    if (!canSpeak()) return;
    const { leaders, rivals } = ranks();
    let line;
    if (leaders.includes(name)) line = `Daar is ${name} — de koploper komt z'n voorsprong bewonderen. Geniet ervan, het is tijdelijk.`;
    else if (rivals.includes(name)) line = `${name} is online. Je directe rivaal kijkt mee — hou 'm in de gaten. Of andersom.`;
    else line = `${name} komt erbij zitten in de Arena. Welkom — en gedraag je.`;
    say('👋 ' + name, name + ' kijkt mee', line);
  }
  const firedMilestones = new Set();
  function henkMilestone(count) {
    let tier = count >= 8 ? 8 : count >= 4 ? 4 : 0;
    if (!tier || firedMilestones.has(tier) || !canSpeak()) return;
    firedMilestones.add(tier);
    if (tier >= 8) say('🔥 DRUK', count + ' online', `${count} man tegelijk online. Dit is jullie Champions League-avond, geef het maar toe.`);
    else say('👀 ' + count + ' ONLINE', count + ' kijken mee', `${count} man kijkt mee. De rest mist het — hun verlies.`);
  }
  function henkLateNight() {
    const h = new Date().getHours();
    if (h >= 0 && h < 5 && canSpeak()) {
      say('🌙 LAAT', 'Nog wakker?', `Het is diep in de nacht en jij bent online. Je voorspellingen waren al niet best — slaap zou helpen.`);
    }
  }

  let ready = false;
  const seen = new Set();

  channel
    .on('presence', { event: 'sync' }, () => {
      render();
      if (!ready) {
        onlineNames().forEach(n => seen.add(n));
        setTimeout(() => { henkMilestone(onlineCount()); henkLateNight(); }, 1200);
        ready = true;
      }
    })
    .on('presence', { event: 'join' }, ({ newPresences }) => {
      render();
      if (!ready) return;
      (newPresences || []).forEach(p => {
        if (p && p.name && p.name !== 'Anoniem' && !mine(p.name) && !seen.has(p.name)) {
          seen.add(p.name);
          henkJoin(p.name);
        }
      });
      henkMilestone(onlineCount());
    })
    .on('presence', { event: 'leave' }, () => { render(); })
    .subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({ name: displayName, at: Date.now(), hour: new Date().getHours() });
      }
    });

  window.addEventListener('beforeunload', () => { try { channel.untrack(); client.removeChannel(channel); } catch (e) {} });

  // Anoniem-schakelaar kan presence live bijwerken (aangeroepen vanuit app.js).
  window.indiSetAnon = async function (on) {
    try { localStorage.setItem('indi-arena-anon', on ? '1' : '0'); } catch (e) {}
    try { await channel.track({ name: on ? 'Anoniem' : (getName() || 'een gast'), at: Date.now(), hour: new Date().getHours() }); } catch (e) {}
    render();
  };
})();
