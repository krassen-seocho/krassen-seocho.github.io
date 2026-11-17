// 앱 설치용 최소 서비스워커 — 화면은 항상 최신으로 불러와요
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
