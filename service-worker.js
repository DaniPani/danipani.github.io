/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["index.html","c2b398a66c84d3683d4734ca80f5dcd3"],["manifest.json","3a746ea2922eba920bddc5199f597533"],["node_modules/@bit/danipani.projects.global.button-3d/index.js","3d5f6d281b6fd2e5993746f6bbb3c8fb"],["node_modules/@bit/danipani.projects.global.scroll-down/index.js","11671793f6d99a9cb533b7a09200629d"],["node_modules/@bit/danipani.projects.global.social-button/index.js","24e32775da89726ae050a4461db056e5"],["node_modules/@fortawesome/fontawesome-svg-core/index.es.js","01d6b4cf262ad8c1b69655f6fb927a09"],["node_modules/@fortawesome/free-brands-svg-icons/index.es.js","422d9f6d5d1ba3718cdf20f6c73a9ba9"],["node_modules/@fortawesome/free-solid-svg-icons/index.es.js","b4fa80df924b40e0e3b5b708d69f0a98"],["node_modules/@polymer/lit-element/lib/decorators.js","b37d8583c29b126e1f78ccf80efb0f3c"],["node_modules/@polymer/lit-element/lib/updating-element.js","4abd67d14262437b6fbbf4ed11164fe4"],["node_modules/@polymer/lit-element/lit-element.js","012a83b3d8106346fa7152449622712c"],["node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js","0f9a5cf89f1d4757a6a4945a329e1fc0"],["node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js","449e154f5a93678178caf6d1d5857d65"],["node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js","abb358dc9afad389c31bee5903095e06"],["node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd.js","da48dd1cd76dee364cc403d607193f16"],["node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js","8391957aaff84ed2243736878b5b1108"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/custom-elements-es5-adapter-index.js","5652c8f83533d62943792a7fe7a2e581"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-bundle-index.js","8dd62a28e52d133ef1ecf044bc51f109"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-ce-index.js","0867f0cb4caf5081f1e85da13c24528a"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-index.js","5d9cd4fb5d341a0e2890edaa2cc8e226"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-pf-index.js","905226b876defd9d0c1444d353a4c4c5"],["node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-index.js","d4e3a4413d567733a71057462763e36f"],["node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js","893102e1869adc5bce0a94feb6f74249"],["node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js","d42dd0732b85d5efa9e1660a1747b05c"],["node_modules/jump.js/dist/jump.module.js","0dd0682f96c3dd40d66e42280416f967"],["node_modules/lit-html/lib/default-template-processor.js","40578b5429c74e67b339bcd7d766e6ed"],["node_modules/lit-html/lib/directive.js","b7ef5ab3d1e77d7d8f131621a8873b6c"],["node_modules/lit-html/lib/dom.js","57682e107ca31a82c65e92442e9f08f8"],["node_modules/lit-html/lib/modify-template.js","dda2f1038811ddd457050684bbee4852"],["node_modules/lit-html/lib/part.js","e28dbc6ff40597561aea7df2d536f672"],["node_modules/lit-html/lib/parts.js","66ae882f84d40bceecdfdac3dff745dc"],["node_modules/lit-html/lib/render.js","0c42bbeef370e2eec5be06a529f76d3c"],["node_modules/lit-html/lib/shady-render.js","93e8c8284da7ef0ac7a166e78b4279e2"],["node_modules/lit-html/lib/template-factory.js","97a9127b1c534be0cb4151c6eeec8c9f"],["node_modules/lit-html/lib/template-instance.js","6cd84919b909fecef87d3ed0408a4c28"],["node_modules/lit-html/lib/template-result.js","ff89b6fc9e49453751da1297c33ad848"],["node_modules/lit-html/lib/template.js","1c3b0da21cb25f40800da58681243978"],["node_modules/lit-html/lit-html.js","0dfe1874a1b29dfa2f9306b9e1ffdbf8"],["node_modules/litelement-fontawesome/index.js","443db7dd6e6f281c9a430aa4e89c6d49"],["robots.txt","5e03405c0d3d28da0bbf9e5dfd97b5c8"],["serviceWorker.js","2cae60f857794ab80d68e61795805dfd"],["sitemap.xml","eef2bae4cfe39349f2f93b77ef3227be"],["src/image/abstract-wallpaper-1442844111BON.jpg","c2d9cc7d5d151cf54b4cc2ce7449d346"],["src/image/abstract-wallpaper-47342-48869-hd-wallpapers.jpg","651f1994a84516fb0cdc5d2ca0749f83"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







