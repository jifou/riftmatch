const CACHE_NAME    = 'lolp-v2';
const DDRAGON_CACHE = 'lolp-ddragon-v2';

const STATIC_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap'
];

/* ─── INSTALL ─── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(STATIC_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ─── ACTIVATE ─── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== DDRAGON_CACHE)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ─── FETCH ─── */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Riot Data Dragon assets: cache-first, long TTL
  if (url.hostname === 'ddragon.leagueoflegends.com') {
    e.respondWith(cacheThenNetwork(e.request, DDRAGON_CACHE));
    return;
  }

  // Google Fonts: cache-first
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheThenNetwork(e.request, CACHE_NAME));
    return;
  }

  // App shell: stale-while-revalidate
  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(e.request, CACHE_NAME));
    return;
  }
});

/* ─── Strategies ─── */
async function cacheThenNetwork(req, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const fresh = await fetch(req);
    if (fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch {
    return offlineFallback();
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchP = fetch(req).then(res => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return cached || await fetchP || offlineFallback();
}

function offlineFallback() {
  return new Response(
    `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>RiftMatch — Hors ligne</title>
    <style>
      body{background:#0A0E1A;color:#C8AA6E;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem}
      h1{font-size:1.5rem;margin-bottom:1rem}p{color:#5B6070;margin-bottom:2rem}
      button{background:linear-gradient(135deg,#C89B3C,#a07830);border:none;color:#0A0E1A;padding:.8rem 2rem;border-radius:8px;font-size:1rem;cursor:pointer}
    </style></head>
    <body><h1>⚔️ Tu es hors ligne</h1><p>Reconnecte-toi pour découvrir ton champion idéal.</p>
    <button onclick="location.reload()">Réessayer</button></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}

/* ─── PUSH NOTIFICATIONS ─── */
self.addEventListener('push', e => {
  const d = e.data?.json() ?? {};
  e.waitUntil(
    self.registration.showNotification(d.title || 'RiftMatch', {
      body: d.body || 'Un nouveau champion t\'attend !',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-96.png',
      data: { url: d.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data?.url || '/'));
});
