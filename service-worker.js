"use strict";var precacheConfig=[["/ideawork-project/index.html","b798022dc0256f8b056951b0c3ad9be5"],["/ideawork-project/static/css/main.d6f2a032.css","953c9cc30d4362ccae1e1d4b9bf9e5b2"],["/ideawork-project/static/js/main.ae8a70d8.js","a10896e0094ca3e270a176d779762e0f"],["/ideawork-project/static/media/ACaslonPro-Regular.07c51e08.otf","07c51e088dd888466d2688c5658a6d33"],["/ideawork-project/static/media/Adobe-Caslon-Pro_2006.db00440b.ttf","db00440b2da8c263e86272ad63bc01b0"],["/ideawork-project/static/media/Springville-Regular3.47a715e6.otf","47a715e624d7411ee8969fe1712d19b1"],["/ideawork-project/static/media/ev1.0d1c14d0.png","0d1c14d0ce40105c555a20d7be5d5706"],["/ideawork-project/static/media/ev2.6171cc0a.png","6171cc0afca4ff51fc6519f7a8c83edf"],["/ideawork-project/static/media/ev3.4aa825ae.png","4aa825aeb32f1c3b0504c095bc3195f3"],["/ideawork-project/static/media/ev4.8ac6f2ff.png","8ac6f2ff88c6af6c8c3f11de1761ce25"],["/ideawork-project/static/media/ev5.d660aeee.png","d660aeee607c720e8214a82d730cd203"],["/ideawork-project/static/media/ev6.836468f5.png","836468f58e0c93b0ba2b4fbf16bfda7e"],["/ideawork-project/static/media/slide1.e97a648c.png","e97a648cde40a0bd9ffaba5deda96df8"],["/ideawork-project/static/media/slide2.aecb4e0e.png","aecb4e0e4becdf93ebda34681f5780eb"],["/ideawork-project/static/media/slide3.06c98e13.png","06c98e136aa9a75e0366a0b7afbb310a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/ideawork-project/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});