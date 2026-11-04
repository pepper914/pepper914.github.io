/* 冰雪城堡英语大冒险 · Service Worker
   改代码后把 CACHE 里的版本号 +1（eg-v2、eg-v3…）才会让 iPad 上的 PWA 拿到新版
   策略：网络优先（有网就拿最新版并顺手更新缓存），断网才回落缓存 → 离线也能玩
   这样每次部署，孩子下次打开就是新版，不用再手动清缓存 */
const CACHE = 'eg-v9';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './words220.js',
  './sentences220.js',
  './app.js',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* 网络优先：先要最新的，拿到就顺手更新缓存；网络不通才用缓存（离线照玩） */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // 只处理本站资源，跨域（比如语音接口）不拦
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
  );
});
