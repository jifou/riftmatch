/* RiftMatch service worker.
 * Volontairement prudent : le site est rendu côté serveur et alimenté par un CMS,
 * donc on ne met JAMAIS en cache les pages HTML, /admin ni /api.
 * Cache uniquement : icônes, polices, images Data Dragon et assets Astro versionnés. */
const VERSION = 'rm-v3'
const STATIC_CACHE = `${VERSION}-static`
const DDRAGON_CACHE = `${VERSION}-ddragon`

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

function isStaticAsset(url) {
  return url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/icons/') || url.pathname === '/favicon.svg'
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName)
  const hit = await cache.match(req)
  if (hit) return hit
  const res = await fetch(req)
  if (res.ok) cache.put(req, res.clone())
  return res
}

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)

  if (url.hostname === 'ddragon.leagueoflegends.com') {
    e.respondWith(cacheFirst(req, DDRAGON_CACHE).catch(() => fetch(req)))
    return
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheFirst(req, STATIC_CACHE).catch(() => fetch(req)))
    return
  }
  if (url.origin === self.location.origin && isStaticAsset(url)) {
    e.respondWith(cacheFirst(req, STATIC_CACHE).catch(() => fetch(req)))
    return
  }

  // Pages : réseau uniquement, avec une page hors ligne si le réseau tombe.
  if (url.origin === self.location.origin && req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(
        () =>
          new Response(
            '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RiftMatch - Hors ligne</title><style>body{background:#0A0E1A;color:#C8AA6E;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem}p{color:#8a8f9c}button{background:#C89B3C;border:0;color:#0A0E1A;padding:.8rem 2rem;border-radius:8px;font-size:1rem;cursor:pointer}</style></head><body><h1>Tu es hors ligne</h1><p>Reconnecte-toi pour découvrir ton champion idéal.</p><button onclick="location.reload()">Réessayer</button></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          )
      )
    )
  }
})
