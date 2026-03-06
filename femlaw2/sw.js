const CACHE = 'femlaw-v2';
const ASSETS = [
  '/', '/index.html', '/femme.html', '/avocat.html',
  '/css/style-femme.css', '/css/style-avocat.css',
  '/js/i18n.js', '/js/data.js', '/js/app-femme.js', '/js/app-avocat.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
