const CACHE='e7v80';
const ASSETS=['./','./index.html','./manifest.json','./yl_blends.json','./oracle_whispering.json','./hidden_cards.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate',e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
