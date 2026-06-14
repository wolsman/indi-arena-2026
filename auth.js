/* ============================================================
   auth.js — gecontroleerde login via Supabase (magic link).
   Model: zelf aanmelden → Dennis keurt goed.
   - login.html: e-mail → inloglink.
   - app-pagina: sessie-gate. Geen lid-rij → aanmeld-scherm (kies poule-naam).
     status 'pending' → wachtkamer. 'approved' → binnen. 'rejected' → geweigerd.
   - Beheerder (is_admin) krijgt de Beheer-tab in de app.
   Geen geldige config → no-op (valt terug op de oude wachtwoord-gate).
   ============================================================ */
(function () {
  const cfg = window.INDI_SUPABASE || {};
  const ON = cfg.url && cfg.key && !/JOUW-/.test(cfg.url + cfg.key);
  window.INDI_AUTH_ON = !!ON;
  if (!ON) return;

  const clientPromise = (async () => {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    const sb = createClient(cfg.url, cfg.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    window.__sb = sb;
    return sb;
  })();

  const api = {
    client: () => clientPromise,
    async sendMagicLink(email) {
      const sb = await clientPromise;
      return sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + '/' } });
    },
    async session() { const sb = await clientPromise; return (await sb.auth.getSession()).data.session; },
    async getMember() {
      const sb = await clientPromise;
      const u = (await sb.auth.getUser()).data.user;
      if (!u) return null;
      const { data } = await sb.from('members').select('status, poule_naam, is_admin').eq('id', u.id).maybeSingle();
      return data || null;
    },
    async register(name) {
      const sb = await clientPromise;
      const u = (await sb.auth.getUser()).data.user;
      if (!u) return;
      await sb.from('members').insert({ id: u.id, email: u.email, poule_naam: name });
    },
    async listMembers() {
      const sb = await clientPromise;
      const { data } = await sb.from('members').select('id, email, poule_naam, status, is_admin').order('created_at', { ascending: true });
      return data || [];
    },
    async setStatus(id, status) { const sb = await clientPromise; return sb.from('members').update({ status }).eq('id', id); },
    async signOut() {
      const sb = await clientPromise;
      try { await sb.auth.signOut(); } catch (e) {}
      try { localStorage.removeItem('indi-arena-me'); } catch (e) {}
      location.replace('./login.html');
    }
  };
  window.indiAuth = api;

  // ── App-pagina-gate (niet op login.html — die heeft geen #vandaag) ──
  if (document.getElementById('vandaag')) {
    document.documentElement.classList.add('auth-checking');
    window.__authReady = (async () => {
      try {
        const session = await api.session();
        if (!session) { location.replace('./login.html'); return false; }
        const email = session.user.email;
        const m = await api.getMember();
        if (!m) { showSignup(email); return false; }
        if (m.status === 'approved') {
          if (m.poule_naam) { try { localStorage.setItem('indi-arena-me', m.poule_naam); } catch (e) {} }
          window.INDI_IS_ADMIN = !!m.is_admin;
          document.documentElement.classList.remove('auth-checking');
          return true;
        }
        if (m.status === 'rejected') {
          showState('Geen toegang', 'Je aanmelding is afgewezen. Klopt dat niet? Vraag Dennis even.', email);
          return false;
        }
        showState('In afwachting', 'Je aanmelding als <b style="color:#fff">' + (m.poule_naam || '?') + '</b> is binnen. Zodra Dennis je goedkeurt kun je de Arena in. Even geduld &#9203;', email);
        return false;
      } catch (e) {
        location.replace('./login.html');
        return false;
      }
    })();
  }

  // ── Pre-app schermen (vervangen de body) ──
  function frame(inner) {
    document.documentElement.classList.remove('auth-checking');
    document.body.innerHTML =
      '<div style="min-height:100vh;display:grid;place-items:center;padding:2rem;font-family:Inter,system-ui,sans-serif;color:#fff;background:#0a0e1a">' +
      '<div style="max-width:28rem;width:100%;text-align:center">' + inner + '</div></div>';
  }
  function showState(title, body, email) {
    frame('<div style="font-size:1.8rem;font-weight:900;margin-bottom:.5rem">' + title + '</div>' +
      '<div style="color:#9aa6bd;line-height:1.6">' + body + '</div>' +
      '<div style="color:#5b6678;font-size:.8rem;margin-top:1rem">' + (email || '') + '</div>' +
      '<button onclick="window.indiAuth.signOut()" style="margin-top:1.5rem;padding:.55rem 1.1rem;border-radius:.6rem;background:#1a2238;color:#fff;border:1px solid #22304d;cursor:pointer">Uitloggen</button>');
  }
  function showSignup(email) {
    const players = (window.POOL_PLAYERS || []).filter(p => p.name).map(p => p.name).sort((a, b) => a.localeCompare(b, 'nl'));
    const opts = '<option value="">&mdash; kies je naam &mdash;</option>' + players.map(n => '<option value="' + n.replace(/"/g, '&quot;') + '">' + n + '</option>').join('');
    frame('<div style="font-size:1.6rem;font-weight:900;margin-bottom:.25rem">Welkom in de Arena</div>' +
      '<div style="color:#9aa6bd;margin-bottom:1.25rem">Je bent ingelogd als <b style="color:#fff">' + email + '</b>.<br>Welke speler ben jij in de poule?</div>' +
      '<select id="suName" style="width:100%;padding:.7rem;border-radius:.7rem;background:#0a0e1a;border:1px solid #22304d;color:#fff;font-size:1rem;font-weight:600">' + opts + '</select>' +
      '<button id="suBtn" style="width:100%;margin-top:.8rem;padding:.7rem;border-radius:.7rem;background:#ff6b00;color:#0a0e1a;font-weight:800;border:none;cursor:pointer">Aanmelden &rarr;</button>' +
      '<div style="color:#5b6678;font-size:.78rem;margin-top:.8rem">Dennis keurt je aanmelding daarna goed.</div>');
    const sel = document.getElementById('suName'), btn = document.getElementById('suBtn');
    btn.onclick = async () => { if (!sel.value) return; btn.disabled = true; btn.textContent = 'Versturen…'; try { await api.register(sel.value); } catch (e) {} location.reload(); };
  }
})();
