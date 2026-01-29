// Service Worker for Property Maintenance Website
const CACHE_NAME = 'property-maintenance-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/basic.html',
  '/standard.html', 
  '/premium.html',
  '/src/css/reset.css',
  '/src/css/variables.css',
  '/src/css/main.css',
  '/src/js/i18n.js',
  '/src/js/ui.js',
  '/src/js/form.js',
  '/src/js/analytics.js',
  '/src/js/config.js',
  '/manifest.json',
  '/stile.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
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