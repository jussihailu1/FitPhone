/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

var CACHE_NAME = 'FitPhone-cache-v1';
var urlsToCache = [
  '/',
  '/favicon.ico',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/precache-manifest.fe01a7bbdf217a52dd108c7ce47ce70e.js',
  '/js/app.0cc9776b.js',
  '/js/chunk-vendors.d1f78ff5.js',
  '/css/app.3824285f.css',
  '/css/chunk-vendors.7dfe9cf6.css',
  '/fonts/Poppins-Regular.de2dd933.otf'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});