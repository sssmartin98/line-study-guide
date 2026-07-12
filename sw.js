// Line Study service worker — cache-first offline shell.
// The CACHE name is stamped by release.py on every release; installed apps
// fetch the new shell when it changes. Do not add version.json to SHELL —
// the in-app update checker must always read it from the network.
const CACHE = 'line-study-1-0-1';
const SHELL = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(r => r || fetch(e.request)));
});
