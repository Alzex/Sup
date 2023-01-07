/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b69070dfa1da005ddfb5e62db8bb5895"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a738c0d3.css",
    "revision": "f06e2cc6c962725ffaf57cdff688d3f2"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8b22aed.js",
    "revision": "a27dd73579ae30c58e257864c16ba955"
  },
  {
    "url": "assets/js/11.fda23a57.js",
    "revision": "17b4b1432ea3f61de7240ff26aeb21de"
  },
  {
    "url": "assets/js/12.c7603f45.js",
    "revision": "1ec073e6a68806556c502c9d9f21d670"
  },
  {
    "url": "assets/js/13.fa4b3007.js",
    "revision": "9a50aee71e86b50d936c5913eb6a5806"
  },
  {
    "url": "assets/js/14.b620f02c.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.db4876d9.js",
    "revision": "9a54d91e51084f77f1034582097cdb91"
  },
  {
    "url": "assets/js/16.df877972.js",
    "revision": "7b23743e45847e85d2e554e76ceec14b"
  },
  {
    "url": "assets/js/17.e2b5a499.js",
    "revision": "1cba65c394d893ad345116fb9408376e"
  },
  {
    "url": "assets/js/18.5c3753ad.js",
    "revision": "d2920050b8920e4a10d4531bba68bd93"
  },
  {
    "url": "assets/js/19.2a70d17d.js",
    "revision": "3cf6b86d2d714ff29d45bafee68ee8da"
  },
  {
    "url": "assets/js/2.3a76ac76.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.d3df1b47.js",
    "revision": "9bf6cf4926a6a33794f4f5588826f251"
  },
  {
    "url": "assets/js/21.8cd9e579.js",
    "revision": "6b4453463e0a042cf05269fafe886a2f"
  },
  {
    "url": "assets/js/22.bf4e1080.js",
    "revision": "0ca9087acda5433adf7e804bccf11717"
  },
  {
    "url": "assets/js/23.0ee08ec9.js",
    "revision": "b1862ad7ef6b9d93f86adf33c7ee08ad"
  },
  {
    "url": "assets/js/24.cb4112b8.js",
    "revision": "fb902d5a200066788ef29d75c4f6dd03"
  },
  {
    "url": "assets/js/26.a1ce5b76.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.6a5a2d29.js",
    "revision": "e3d8ea9b477cd8c1ca68583b241caebf"
  },
  {
    "url": "assets/js/4.50554d69.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.c9d8986c.js",
    "revision": "a83c521aed90313eec9d564dd1a80b8e"
  },
  {
    "url": "assets/js/6.10931e33.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.b865a5f1.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.cce4fd62.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.73326d59.js",
    "revision": "255f60e84533194dda0653b6ccba0ddb"
  },
  {
    "url": "assets/js/app.274f456c.js",
    "revision": "fa7c14c35fcbcd540450d0546c711fe0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b5c441158b6d926420695e3e0cf99b60"
  },
  {
    "url": "design/index.html",
    "revision": "8620511c0b767d58aae9034e5adcfa9b"
  },
  {
    "url": "index.html",
    "revision": "99094c363ceb19d67d910ae7c9de819b"
  },
  {
    "url": "intro/index.html",
    "revision": "480bd50b7f48c94558fc7785699cbe05"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ab3e6736e5f6d4413889c12912a83c56"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "44c84708140e843ba106de60f2c1c606"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "764d865b27530032035706db0e74baf6"
  },
  {
    "url": "software/index.html",
    "revision": "ff772e4e94286515d46f7f9ea5b1b839"
  },
  {
    "url": "test/index.html",
    "revision": "976ecd7797ab3d644688e6e22a141c31"
  },
  {
    "url": "use cases/index.html",
    "revision": "96f4e9ceb9b374da2270a2d0817544b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
