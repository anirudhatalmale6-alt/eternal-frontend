// public/sw.js
const CACHE_NAME = 'omega-nextjs-v1';

// Aset yang wajib di-bypass (jangan di-cache)
const BYPASS_ERRORS = [
  '/_next/webpack-hmr', // Hot Module Replacement saat development
  '/api/'               // Jangan cache rute API internal Next.js
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Strategi Rata Kanan: Instan < 2ms via Cache, Update di Background
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // 1. Bypass rules
  if (req.method !== 'GET' || !url.origin.startsWith(self.location.origin)) return;
  if (BYPASS_ERRORS.some(path => url.pathname.includes(path))) return;

  // 2. Eksekusi Cache-First untuk HTML & Statis Aset Next.js
  e.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(req);

      // Ambil data segar dari network di background untuk update cache berikutnya
      const networkFetch = fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          cache.put(req, networkResponse.clone());
        }
        return networkResponse;
      }).catch(() => null);

      // Jika ada di cache, kembalikan instan (< 2ms). Jika tidak, tunggu network.
      return cachedResponse || networkFetch;
    })
  );
});