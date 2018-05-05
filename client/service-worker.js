var cacheName = "notes-cache-v1";
var self = this;

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([]);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("Service Worker Activated");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
