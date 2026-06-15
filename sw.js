/* Indi-Arena service worker — maakt de site installeerbaar (PWA) en biedt een
   offline-fallback. Strategie: network-first voor eigen-origin GET-verzoeken
   (altijd verse data/stand), met de cache als terugval bij geen verbinding.
   API-calls (/api/*) en externe bronnen (Supabase/OpenAI/API-Sports/CDN's)
   worden NIET gecachet — die moeten altijd live zijn. */
const CACHE = 'indi-arena-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
  await self.clients.claim();
})()));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;     // externe bronnen ongemoeid
  if (url.pathname.startsWith('/api/')) return;          // serverfuncties nooit cachen

  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      // navigatie zonder netwerk én zonder cache → val terug op de homepage-cache
      if (req.mode === 'navigate') {
        const home = await caches.match('/');
        if (home) return home;
      }
      throw err;
    }
  })());
});
