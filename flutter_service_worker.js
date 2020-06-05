'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "77d1f0b46b196c5a930777365a2e4cb7",
".git/config": "dfe1a96c979a44232a2b8d6c9e158ee9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "66fc76c2ef3d5b9809b7becc515e2c8a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "350941dc814b4b6164a8750665f18371",
".git/logs/refs/heads/master": "350941dc814b4b6164a8750665f18371",
".git/logs/refs/remotes/origin/master": "40cfee332353adc516f7ddb37dd3ea01",
".git/objects/07/819d1bf788718b16982cdc8c9a4be971f98f79": "fc087e265ac0ead006a7024b343dddbf",
".git/objects/0d/f13cf375bb64b896b5cbb36a44651c6d065834": "ef9acc4f4cb3b9d9dd9eb25beaaa2073",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1b/89aef9a1333e2d89af9fe6e3c9c436c5407955": "0b9055dbafeecede8997cdddc372e53d",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/36e58d4d6dc24f10a708a08327a7dab51a45da": "32a88adf50818012e64265f10a21fe98",
".git/objects/25/79fb460056c9d955b2cea755b231444011e629": "c365a770b293c068c3e5fc8ebdb5f546",
".git/objects/2a/1dd5651ca6512d5d547afd69e605e2592459c5": "e42586b18db300613320f281518ab137",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/e2e591e58457824d46d8604355eb91364e4d14": "f56a26f4513eb39c0b3404907fba9b96",
".git/objects/36/ed3cfbb5e339fdd05923ab02732410147f5819": "90c8238676b085aa776ef9bc3e3d5c04",
".git/objects/3c/8d2b7af8eb90c245544abea949b62cd2ce3992": "8e774f0a3025d3e0bdaa4f6a2bf80334",
".git/objects/46/67e0532691fb640290555aef016c0600834abd": "70192f1062c4b0797a6d612fc59036e4",
".git/objects/4a/eb7ec1a3571d9dbc41f204d3c5863584b554e8": "0d0d482998f6b45f8c23dd5fe8ecdc78",
".git/objects/50/6cf471cd9df7ad65ffaf6279de34f7e733014a": "7aaa5ade90223f5033fbc6da76e0ec81",
".git/objects/52/1a346ef8651655ee6c900fcdbb434aa9bb79a6": "020505b296be8882a48683a79564d882",
".git/objects/57/14dc3a02af2475f36d43dcced06eb0b9514d82": "c3af3d48e1d792731e07ad6b100617a8",
".git/objects/57/db2d73d136888f4ad16e9bc5c3be1a93522d6b": "578e6a265beb096f940b6fe7f61c5f70",
".git/objects/5a/62c6639b0211ab5c2ed255692a6a4ae9985f49": "2c40e4018705f7182122692e4ab2180d",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/62/3457ebb981c5b118e01333ec7413f254262463": "f25629e3f3d5ae034c0f6eb19664edc9",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/87783c3e2dc37f52677c1bc08806b1608a1335": "a0252e07b29e5899ed6063602f79e30d",
".git/objects/79/84291b8f86f18d825a24547304f438ce606eb3": "51a8d0496838483be8096b0b7d7e0d90",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/6feafd1c0e4dd150e32de64ae7667211150691": "15ddc8d1e03a2f735089fd4b959a97c5",
".git/objects/84/dc1a05ffc56fdcb4fad4e72c586cc5eb656b34": "f087ba193da6d094e11c2a0e32ada803",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/7afdaec0a1d4384e87d32f99bef87b7fe571d7": "63ae4243eb8421934ec4d411df23ce27",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/ac96fdca2499c17be8c18c5394dc425b8f9b5d": "2079979a84b9726578e74b1f134cf882",
".git/objects/af/cef515f3fa2dc87c489de9b2d29636101460a9": "7ebecaea94616d61b5d27ff0f1b96b62",
".git/objects/b3/227c067f624c33169e9f9f04f33b58c14b6a8a": "6e52aa1c02dd361dc1767354fbc6c6c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b677b9c9e7ddd9a063c2b9532422098545e4b0": "04022e732d843d2ff705c15a928c82d7",
".git/objects/c6/602bc9af642309a4949787e773602ed1c00196": "21a459d1827a20d351a1254aca7b2515",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cc/2ad9c164ebd1a5e969d739379b7ff870ad0f52": "34c3b2314751ca758eb2ba310b5f8d65",
".git/objects/cf/a730e836c9bf468c3d4321307cbe033c2067b9": "947e3eea5254420081f02878d9bc2385",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/67887455ac2f15731bb60a4492133b5c263f16": "eef2d71434e18396a7f1578eab80f08c",
".git/objects/d2/848c1a8bc6c70e50146b9257b03e1d73845114": "607b241cadf460c7eac9ccf268491195",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e3/f2f2423eda4c308622952191a4a2c83d78ca83": "c83a1d216101792703da297e24f1d894",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e8/06add8a2b1474d4dc92bc40d44c67b884bf052": "66b7498135e4f93b4efdeaa4c680a336",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fc/3cadfa66e366d3dafa9df44003c491bcf9dc74": "c2c24f7a0ac11c98b4c37718c3fda410",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/refs/heads/master": "34597d6f51aa2b5a9e9bdb218fcddf0d",
".git/refs/remotes/origin/master": "34597d6f51aa2b5a9e9bdb218fcddf0d",
"assets/AssetManifest.json": "2c058aa405b0356bec961f44efbb816c",
"assets/coffee.png": "da51e6edd4ba44b95f071b8570b500f3",
"assets/fingerCounter.png": "4d0b02d2aa997331acfa2a274ed5ffe3",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/Gmaterials.png": "99f80798bbc528c40ff5ed0bfd69ec8d",
"assets/gmaterials.webp": "844f6c961969c5b07d819ecbe75b5459",
"assets/Handshake.jpg": "e5e028b24a307b5df95a1978c6692ef0",
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
"assets/masterYogi.jpeg": "afa41d33d0f07fe3b2098984e35d754e",
"assets/me.jpg": "f9e37181c7af32882ce7f2ae8ffc5785",
"assets/othello.png": "09f93e6752f1b880c886469a4c7427ad",
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
"assets/projects.jpg": "cb002c9cf20780668a75e5bedc6a375b",
"assets/work.png": "c23bf852d84e7d0447010cd285a2ff63",
"assets/working.png": "f793d03f44250016202d46b910323bee",
"assets/writing.jpg": "7477e0b28384589819fee94764f90b3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5a8ddab7b4893786d6e1f08acb66aded",
"/": "5a8ddab7b4893786d6e1f08acb66aded",
"main.dart.js": "1321e641fce3609fce4696a6163a9c7c",
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
