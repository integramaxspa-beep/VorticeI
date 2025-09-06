// Simple offline cache
const CACHE = 'vortice-v1';
const ASSETS = [
  '/', '/index.html', '/assets/css/styles.css', '/assets/js/app.js',
  '/assets/img/logo-vortice.svg','/assets/img/placeholder-1200x630.svg',
  '/ediciones/index.html','/ediciones/v001/index.html',
  '/articulos/tu-primer-articulo.html','/acerca.html','/contacto.html'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(res => res || fetch(req).then(net => {
      const copy = net.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return net;
    }).catch(() => caches.match('/index.html')))
  );
});
