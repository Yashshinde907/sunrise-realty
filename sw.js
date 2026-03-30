const CACHE_NAME = 'sunrise-realty-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',  
  './icon-512.png',  
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Strategy: Network first, then Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});