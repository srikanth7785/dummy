'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2c058aa405b0356bec961f44efbb816c",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/coffee.png": "da51e6edd4ba44b95f071b8570b500f3",
"assets/images/fingerCounter.png": "4d0b02d2aa997331acfa2a274ed5ffe3",
"assets/images/Gmaterials.png": "99f80798bbc528c40ff5ed0bfd69ec8d",
"assets/images/gmaterials.webp": "844f6c961969c5b07d819ecbe75b5459",
"assets/images/Handshake.jpg": "e5e028b24a307b5df95a1978c6692ef0",
"assets/images/masterYogi.jpeg": "afa41d33d0f07fe3b2098984e35d754e",
"assets/images/me.jpg": "f9e37181c7af32882ce7f2ae8ffc5785",
"assets/images/othello.png": "09f93e6752f1b880c886469a4c7427ad",
"assets/images/projects.jpg": "cb002c9cf20780668a75e5bedc6a375b",
"assets/images/work.png": "c23bf852d84e7d0447010cd285a2ff63",
"assets/images/working.png": "f793d03f44250016202d46b910323bee",
"assets/images/writing.jpg": "7477e0b28384589819fee94764f90b3b",
"assets/LICENSE": "55a1a27db2c1701c407e3bbaf128b66b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5a8ddab7b4893786d6e1f08acb66aded",
"/": "5a8ddab7b4893786d6e1f08acb66aded",
"main.dart.js": "784029be4f434523374846bb51515720",
"manifest.json": "ca680362568a8c71669303d04ede2597"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
