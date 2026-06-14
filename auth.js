/* ============================================================
   auth.js — gecontroleerde login via Supabase (magic link).
   - Login-scherm verstuurt een inloglink (login.html).
   - Op de app-pagina: sessie-gate + allowlist-check + koppeling
     account ↔ poule-naam (profiles-tabel).
   Actief zodra er een geldige Supabase-config staat; anders no-op
   (dan valt de site terug op de oude wachtwoord-gate).
   ============================================================ */
(function () {
  const cfg = window.INDI_SUPABASE || {};
  const ON = cfg.url && cfg.key && !/JOUW-/.test(cfg.url + cfg.key);
  window.INDI_AUTH_ON = !!ON;
  if (!ON) return;

  // Eén gedeelde Supabase-client (presence.js hergebruikt window.__sb).
  const clientPromise = (async () => {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    const sb = createClient(cfg.url, cfg.key, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
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
    async user() { const sb = await clientPromise; return (await sb.auth.getUser()).data.user; },
    async isAllowed() {
      const sb = await clientPromise;
      const { data } = await sb.from('allowlist').select('email').limit(1); // RLS geeft alleen je eigen rij terug
      return Array.isArray(data) && data.length > 0;
    },
    async getProfileName() {
      const sb = await clientPromise;
      const u = (await sb.auth.getUser()).data.user;
      if (!u) return null;
      const { data } = await sb.from('profiles').select('poule_naam').eq('id', u.id).maybeSingle();
      return (data && data.poule_naam) || null;
    },
    async setProfileName(name) {
      const sb = await clientPromise;
      const u = (await sb.auth.getUser()).data.user;
      if (!u) return;
      await sb.from('profiles').upsert({ id: u.id, email: u.email, poule_naam: name, updated_at: new Date().toISOString() });
    },
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
        if (!(await api.isAllowed())) { showBlocked(session.user && session.user.email); return false; }
        const name = await api.getProfileName();
        if (name) { try { localStorage.setItem('indi-arena-me', name); } catch (e) {} }
        document.documentElement.classList.remove('auth-checking');
        return true;
      } catch (e) {
        location.replace('./login.html');
        return false;
      }
    })();
  }

  function showBlocked(email) {
    document.documentElement.classList.remove('auth-checking');
    document.body.innerHTML =
      '<div style="min-height:100vh;display:grid;place-items:center;padding:2rem;text-align:center;' +
      'font-family:Inter,system-ui,sans-serif;color:#fff;background:#0a0e1a">' +
      '<div style="max-width:26rem"><div style="font-size:2rem;font-weight:900;margin-bottom:.5rem">Geen toegang</div>' +
      '<div style="color:#9aa6bd;line-height:1.5">Het adres <b style="color:#fff">' + (email || '') + '</b> staat nog niet op de gastenlijst van de poule.<br>Vraag Dennis om je toe te voegen.</div>' +
      '<button onclick="window.indiAuth.signOut()" style="margin-top:1.5rem;padding:.6rem 1.2rem;border-radius:.6rem;' +
      'background:#ff6b00;color:#0a0e1a;font-weight:800;border:none;cursor:pointer">Uitloggen</button></div></div>';
  }
})();
