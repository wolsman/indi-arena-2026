/* ============================================================
   Indi-Arena — live sociale laag: emoji-reacties + kantine-chat.
   ============================================================
   Realtime via Supabase Broadcast (fire-and-forget, geen database).
   Emoji's die iemand stuurt vliegen bij álle kijkers over het scherm;
   korte chatberichten verschijnen in een mini-feed. Henk (de MC)
   reageert op drukte. Gegate als presence.js: alleen met geldige
   config en — in magic-link-modus — pas na login/toelating. Faalt
   stil: geen config/CDN → de site werkt gewoon door zonder dit.
   ============================================================ */
(async function () {
  const cfg = window.INDI_SUPABASE || {};
  if (!cfg.url || !cfg.key || /JOUW-/.test(cfg.url + cfg.key)) return;
  if (window.INDI_AUTH_ON && window.__authReady) {
    try { if (!(await window.__authReady)) return; } catch (e) { return; }
  }

  let client = window.__sb;
  if (!client) {
    try {
      const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
      client = createClient(cfg.url, cfg.key, { realtime: { params: { eventsPerSecond: 10 } } });
    } catch (e) { return; }
  }

  const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const myName = () => { try { return (typeof getMyName === 'function' && getMyName()) || ''; } catch (e) { return ''; } };
  const isAnon = () => { try { return localStorage.getItem('indi-arena-anon') === '1'; } catch (e) { return false; } };
  const senderName = () => (isAnon() ? 'Anoniem' : (myName() || 'gast'));

  const EMOJIS = ['🔥', '⚽', '😱', '😂', '👏', '🙈', '🇳🇱'];

  // ---- UI injecteren ----
  const floatLayer = document.createElement('div');
  floatLayer.className = 'emoji-float-layer';
  document.body.appendChild(floatLayer);

  const dock = document.createElement('div');
  dock.className = 'live-dock';
  dock.innerHTML =
    `<div class="live-chat hidden" id="liveChat">
       <div class="lc-head">Kantine <span class="lc-hint">— live, alleen wie nu kijkt</span></div>
       <div class="lc-feed" id="lcFeed"></div>
       <form class="lc-form" id="lcForm"><input id="lcInput" maxlength="140" placeholder="Zeg iets…" autocomplete="off" /><button type="submit" aria-label="Stuur">▶</button></form>
     </div>
     <div class="live-react-bar">
       ${EMOJIS.map((e) => `<button class="react-btn" data-emoji="${e}">${e}</button>`).join('')}
       <button class="react-btn chat-toggle" id="chatToggle" title="Kantine-chat">💬</button>
     </div>`;
  document.body.appendChild(dock);

  // ---- Broadcast-kanaal (self:true → je ziet je eigen reactie ook) ----
  const channel = client.channel('indi-arena-live', { config: { broadcast: { self: true } } });

  function floatEmoji(emoji) {
    const el = document.createElement('div');
    el.className = 'emoji-float';
    el.textContent = emoji;
    el.style.left = (6 + Math.random() * 86) + 'vw';
    el.style.fontSize = (26 + Math.random() * 22) + 'px';
    el.style.animationDuration = (2.6 + Math.random() * 1.5) + 's';
    floatLayer.appendChild(el);
    setTimeout(() => el.remove(), 4400);
  }

  function addChat(name, text, me) {
    const f = document.getElementById('lcFeed');
    if (!f) return;
    const row = document.createElement('div');
    row.className = 'lc-msg' + (me ? ' me' : '');
    row.innerHTML = `<b>${esc(name)}</b> ${esc(text)}`;
    f.appendChild(row);
    while (f.children.length > 40) f.firstChild.remove();
    f.scrollTop = f.scrollHeight;
  }

  // ---- Henk MC: reageert op een burst van reacties (met cooldown) ----
  let burst = 0, lastHenk = 0, burstTimer = null;
  function onBurst() {
    burst++;
    clearTimeout(burstTimer);
    burstTimer = setTimeout(() => {
      const n = burst; burst = 0;
      if (n >= 6 && (Date.now() - lastHenk) > 25000 && typeof window.henkSay === 'function') {
        lastHenk = Date.now();
        window.henkSay('🔥 KANTINE', 'Het kookt', `De kantine staat in vuur en vlam — ${n} reacties in een paar tellen. Eindelijk leven in deze poule.`);
      }
    }, 1100);
  }

  channel
    .on('broadcast', { event: 'reaction' }, ({ payload }) => { if (payload && payload.emoji) { floatEmoji(payload.emoji); onBurst(); } })
    .on('broadcast', { event: 'chat' }, ({ payload }) => { if (payload && payload.text) addChat(payload.name || 'gast', payload.text, false); })
    .subscribe();

  // ---- interacties ----
  let lastSend = 0;
  dock.querySelectorAll('.react-btn[data-emoji]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastSend < 200) return; // lichte throttle tegen ratelimit
      lastSend = now;
      channel.send({ type: 'broadcast', event: 'reaction', payload: { emoji: btn.dataset.emoji, name: senderName() } });
      btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
    });
  });

  const chatBox = document.getElementById('liveChat');
  document.getElementById('chatToggle').addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    if (!chatBox.classList.contains('hidden')) { const i = document.getElementById('lcInput'); if (i) i.focus(); }
  });
  document.getElementById('lcForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('lcInput');
    const text = (input.value || '').trim();
    if (!text) return;
    // self:true echo't het bericht terug via de broadcast-handler → niet lokaal toevoegen (anders dubbel)
    channel.send({ type: 'broadcast', event: 'chat', payload: { name: senderName(), text } });
    input.value = '';
  });

  window.addEventListener('beforeunload', () => { try { client.removeChannel(channel); } catch (e) {} });
})();
