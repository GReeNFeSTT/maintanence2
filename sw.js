// Service Worker for PWA functionality
const CACHE_NAME = 'property-care-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/basic.html',
  '/standard.html',
  '/premium.html',
  '/src/css/reset.css',
  '/src/css/variables.css',
  '/src/css/main.css',
  '/src/js/config.js',
  '/src/js/i18n.js',
  '/src/js/ui.js',
  '/src/js/form.js',
  '/src/js/analytics.js',
  '/manifest.json',
  '/src/assets/icons/favicon.svg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return networkResponse;
          }
        );
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});