const CACHE_NAME = "civils-master-v1";

const files = [
"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json"
];

self.addEventListener("install", e => {
 e.waitUntil(
  caches.open(CACHE_NAME).then(cache=>cache.addAll(files))
 );
 self.skipWaiting();
});

self.addEventListener("activate", e=>{
 e.waitUntil(clients.claim());
});

self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request).then(res=>{
   return res || fetch(e.request);
  })
 );
});
