if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>i(e,r),f={module:{uri:r},exports:d,require:t};s[r]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(a(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2bdba0b1446c947cb7e679bfe64ee219"},{url:"default-avatar.jpg",revision:"06b32b0e98c5a5e4a11b0986cf23e5b2"},{url:"default-background.png",revision:"5606223623da76e87af20f06fcbf74db"},{url:"docs-src/policy/general_privacy_statement_en.md",revision:"970568111819425308baf22b52f45f7a"},{url:"docs-src/policy/general_privacy_statement_zh.md",revision:"8adcbee9121f4c0dbcef12bf08271bc0"},{url:"favicon.ico",revision:"297800eb4b8d034457838047b4db260d"},{url:"favicon.svg",revision:"c3aa1f0a57870f6a240497244a2556b8"},{url:"images/apple-touch-icon.png",revision:"5f028df5b0c70a0b025ccbd37a9f8a9b"},{url:"images/logo-192x192.png",revision:"7cdd90aa470f754761bede64ea12ef58"},{url:"images/logo-512x512.png",revision:"04ed1ff6b8f31ddfa5217e9a932c5cf7"},{url:"images/logo-64x64.png",revision:"4d128cf393f8a35c8092aadc164e2482"},{url:"images/maskable-icon-512x512.png",revision:"08888fd120629330f78337a14e9155a2"},{url:"index.html",revision:"8bb2d2d6c07de9e1098a1cf6eb387e00"},{url:"logo.png",revision:"7fb31c76aa7e2c5591684d4f6191ccff"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"static/css/index-CZ9F0rjM.css",revision:"2bbb44eaacb1171f8fe1ec5d552aeed0"},{url:"static/css/index-DgFGtst8.css",revision:"2fe15e74562dd1cc59b763e4dc40f52d"},{url:"static/css/index-DIjXEcGm.css",revision:"3e82049a39086844509580e1ea90b581"},{url:"static/js/Base-D47K_J6G.js",revision:"4ffa88ae78f771f2f6af9f1924cfede2"},{url:"static/js/chunk-3YBC73XM-BC-oLrZW.js",revision:"40658cd455103aaf9037707c116c71d2"},{url:"static/js/chunk-44JHHBS2-BrNNn6kB.js",revision:"9275d7faa379bf01e1abb1a3f852b14a"},{url:"static/js/chunk-BJUMDPFJ-CrW8grZr.js",revision:"f5537eea45a9fe0c2512e373a5f9ae9b"},{url:"static/js/chunk-CAFRINWI-CcU5yOMx.js",revision:"4f4dc2d31cd07460ce8f4d03d10ebe06"},{url:"static/js/chunk-II5OMS4Q-BxdYPM8K.js",revision:"2b0116fc9827e6f941b236777e4da122"},{url:"static/js/chunk-KRADFROI-Cb853AWE.js",revision:"6a5ec93f01e174ed2569ed0e5e3c2d51"},{url:"static/js/chunk-L6QJ42W6-DkGgdWon.js",revision:"305c0137a25b4bc0394b8310d2151edf"},{url:"static/js/chunk-LSZJW3GU-_IDEUZgR.js",revision:"d8cd835dcb740112c256a9cc9e338280"},{url:"static/js/chunk-M3MASYO7-BCjy7JXE.js",revision:"29b6fb3a663f49d7a1565ccd147866a1"},{url:"static/js/chunk-MPX6TMFQ-Ckit8S-R.js",revision:"40792b30fb54f0b0528990dfa922ea6c"},{url:"static/js/chunk-OFGZKCFR-DMD41YH-.js",revision:"c455cecf2b5f5a6a1c693a51538be0ea"},{url:"static/js/chunk-TC4QW7OA-BR1MQ8kt.js",revision:"374877714bcd7fc56a9d4674e66cc80c"},{url:"static/js/Combination-DzHVXwRp.js",revision:"bd63de79807f3d4fc689cbd03751d5a6"},{url:"static/js/Create-DQb-Y6Rs.js",revision:"2feddec5ee94e465b82adbb0f312ca5a"},{url:"static/js/data-SKDLe2qg.js",revision:"869314193087d5474b0fe1e992ab21c2"},{url:"static/js/date-DxB7P7Xg.js",revision:"c809df46d72105f2d21cd038ef44b8d6"},{url:"static/js/Details-C9BeeWEQ.js",revision:"6c259bfa29fc02ab1115e0c9890d7023"},{url:"static/js/Full-BMfigcPj.js",revision:"e14e16277c0b7c4dcf76ec5164bba3f8"},{url:"static/js/Home-Cra2wZky.js",revision:"b23ea57085159e9f55edd7286f18c646"},{url:"static/js/import-BYAPuWd2.js",revision:"eebc1cbd3b563449e9261fdf1246c1f0"},{url:"static/js/import-C0LPorT5.js",revision:"2b020b8deb2e9983a2d62afda43cc80b"},{url:"static/js/import-CO6wevGg.js",revision:"7e1380e40479df31c632559493ee7a05"},{url:"static/js/import-DGHSTZk5.js",revision:"f431b3f03b8ca39de9cc8fe53cc16ed8"},{url:"static/js/index-B65i2en_.js",revision:"423b5f3d5be42e5b152db6b01c2f2d00"},{url:"static/js/index-BHTssK_p.js",revision:"2412116d97812b872d3a87c655c1ae29"},{url:"static/js/index-BmrYyI8Q.js",revision:"e1fe02f0c90494fe3826923e146b0a59"},{url:"static/js/index-Bxvt32Fn.js",revision:"515cdbb5dda0db1bc78f862bf1e4e419"},{url:"static/js/index-CVzwPXPS.js",revision:"46ce7380e3ca6b410c7f6f3e8ca6478e"},{url:"static/js/index-D8dER8n7.js",revision:"35340125858a1a46bc497b2f04956a03"},{url:"static/js/index-DFOjVUWo.js",revision:"87bc27dbd24994dca6242b56b0d5e6c3"},{url:"static/js/index-r4eSVliT.js",revision:"bdcc367f732a18c340b2297ff92b4204"},{url:"static/js/index.module-DK4_OHVx.js",revision:"fe166d64cf90a677d11e48421ed6630e"},{url:"static/js/List-qPaiTPXv.js",revision:"552c2ef1ae07636c13a210ff89563566"},{url:"static/js/Login-CNvz_flA.js",revision:"07d4b17c4bba0980ae03afa2c0822be1"},{url:"static/js/Login-DfpIVf2g.js",revision:"674ec7f10f1b0b15393ac82ce2325901"},{url:"static/js/Main-D5OmkXEt.js",revision:"b7e0ed8c216e6af2410c2d130bf2dd88"},{url:"static/js/NotFound-DMNwwOeE.js",revision:"7e1b3b0cc811308e230de158148ff0a8"},{url:"static/js/Open-Ci7REEIw.js",revision:"97360ece91e016b41bc94d24d120d1a9"},{url:"static/js/Password-DJcKaKSp.js",revision:"5f4d10d4fa6f73fa3ae595925a953e83"},{url:"static/js/Profile-DA9-_Yhs.js",revision:"35b2d9595dac0d4e57ac7448ad6ae542"},{url:"static/js/Reader-DeXsLP3W.js",revision:"0bd9db5add089d4a348a76176389a59d"},{url:"static/js/Register-pKZhkt9D.js",revision:"13e17201ccde5438eb481653c5a63f83"},{url:"static/js/text-BJweRK6z.js",revision:"d610a5819745154134506ff66335e9f1"},{url:"static/js/validator-CEpkGiwj.js",revision:"6ff7bb700b1802c2594ab4f68a1a77f7"},{url:"images/logo-64x64.png",revision:"b8ed003694fe92462750debe19d804fc"},{url:"images/logo-192x192.png",revision:"3bef79eec5462d7f3f65ca99ca043e5a"},{url:"images/logo-512x512.png",revision:"8a7168cead8b2ac692fdca02de2c6004"},{url:"images/maskable-icon-512x512.png",revision:"5d3cbcc58297b23845b1e4881c07f971"},{url:"manifest.webmanifest",revision:"6f7570c4b8da90fc7ebf134f83895d42"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
