if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>i(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dd3e8d3a09a8db18af18263b70c6b1a3"},{url:"docs-src/guidelines/community_content_guidelines_zh.md",revision:"60d77b7d328293d432b170fd240d4ae2"},{url:"docs-src/policy/general_privacy_statement_en.md",revision:"970568111819425308baf22b52f45f7a"},{url:"docs-src/policy/general_privacy_statement_zh.md",revision:"8adcbee9121f4c0dbcef12bf08271bc0"},{url:"favicon.ico",revision:"297800eb4b8d034457838047b4db260d"},{url:"favicon.svg",revision:"c3aa1f0a57870f6a240497244a2556b8"},{url:"images/apple-touch-icon.png",revision:"5f028df5b0c70a0b025ccbd37a9f8a9b"},{url:"images/backtrace.svg",revision:"677433a0892aaed7b7d2628c313c9775"},{url:"images/default-avatar.jpg",revision:"06b32b0e98c5a5e4a11b0986cf23e5b2"},{url:"images/default-background.png",revision:"5606223623da76e87af20f06fcbf74db"},{url:"images/logo-192x192.png",revision:"7cdd90aa470f754761bede64ea12ef58"},{url:"images/logo-512x512.png",revision:"04ed1ff6b8f31ddfa5217e9a932c5cf7"},{url:"images/logo-64x64.png",revision:"4d128cf393f8a35c8092aadc164e2482"},{url:"images/logo.png",revision:"7fb31c76aa7e2c5591684d4f6191ccff"},{url:"images/maskable-icon-512x512.png",revision:"08888fd120629330f78337a14e9155a2"},{url:"index.html",revision:"20f4da914d310b2e8a0b2a7259f1536d"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"static/css/ColorDot-CObDsjnJ.css",revision:"c2ac74447c50a1968ad1b981dc5c2154"},{url:"static/css/index-BHefk8Cq.css",revision:"ad48e31dfcfc361a4ea49e3dfab37c10"},{url:"static/css/index-Ce5vDml6.css",revision:"e5b9effb698eacaeb635398588593d30"},{url:"static/js/Accessibility-DXjNASuA.js",revision:"dfc2ddd815587f6ab397278ada7ea566"},{url:"static/js/Account-DLvJjMXn.js",revision:"b7622b99696e79b6ef3a7ff54d48e643"},{url:"static/js/Avatar-BDnhnUuc.js",revision:"46ba52367a8c7159c65480b77fdc3e14"},{url:"static/js/Base-C4wC4ywf.js",revision:"36938e523f68ce6650ed2a641f951915"},{url:"static/js/chunk-3YEK3JGC-Dn-qlPX0.js",revision:"3681a204e7f38c2120593aa3888f8a96"},{url:"static/js/chunk-44JHHBS2-C4rnbOjz.js",revision:"7dec44ed1dc7f8c78fb47c039a6eb013"},{url:"static/js/chunk-4HJHOVVR-DjY6Cfgy.js",revision:"18a6335ea2889fe5fb725f6378dc3637"},{url:"static/js/chunk-BOCK7NOT-BrEpyJAA.js",revision:"7b6acf8e7ec48b7f8aac287892a914e3"},{url:"static/js/chunk-CIZQCQPA-D9tTA1IC.js",revision:"fb0d3e4b36b58b28c6b2cdecd198fb90"},{url:"static/js/chunk-CQCLQUUP-C4y7mNFx.js",revision:"21484f50a60ac40e972bc8c0fc71cf6f"},{url:"static/js/chunk-H4VOEXHF-DF9dm-Yq.js",revision:"64f12ead6783af17779d44a8cebfa458"},{url:"static/js/chunk-IXXDDLGU-FylGI5ct.js",revision:"1bf4b352010677d320b26a921023df0f"},{url:"static/js/chunk-J333S7JQ-DuFg_PM_.js",revision:"a0883903cb75bcfbbe872dbf847f4420"},{url:"static/js/chunk-JHUBASYZ-OrdpxU5m.js",revision:"158f831ed134046d3837147ec431fc10"},{url:"static/js/chunk-NNXNFLWG-Cr4Ihhkc.js",revision:"492a9623cdf421fa90a2d8ac4c76ed88"},{url:"static/js/chunk-OZXMJY32-BrTLvvn-.js",revision:"a080e32fb17c4155206a626a46d3dbc1"},{url:"static/js/chunk-QXREVWCS-BrmcdeOx.js",revision:"d7f4ba8af0787b1259b48e8ca9107764"},{url:"static/js/chunk-SWJHOPKY-h31ikYfg.js",revision:"f4659be06577c26fca16e3d557d3c732"},{url:"static/js/chunk-UWUNWEEL-BFMIhj0Z.js",revision:"5d4d3c1d65e37a12c511ef0de7572d63"},{url:"static/js/chunk-YOZJQNDF-BC40oJ10.js",revision:"fcd11f174aa6424decfd60d410cdb3a5"},{url:"static/js/ColorDot-uM8mXPiX.js",revision:"618c53924d81b5ada4c79fd05b361130"},{url:"static/js/context-CUzjdZ5i.js",revision:"0e7c6d6a32faf11f738b2dd9a6815e14"},{url:"static/js/Create-C8NO0rnb.js",revision:"fbaec01bf0a77ef5af75545ca556082a"},{url:"static/js/data-DRuPbbQh.js",revision:"afae8455094b14cf6023f386665f57ef"},{url:"static/js/Details-u4ZUxQ4F.js",revision:"7fa63f53691c9e8aeff59289d24fafac"},{url:"static/js/Google-Bj15Ukj8.js",revision:"10a35cc45cd3d6f18f4a3aceae9c0edc"},{url:"static/js/Google-Bxhkxhot.js",revision:"af72fd9fe99057e061467ff552fc4f69"},{url:"static/js/Home-BevzH6Pn.js",revision:"fb40d4b859689837a230cde1620d3777"},{url:"static/js/import-BOVGfX2I.js",revision:"8ca99791a7c619d52f0e2a987aaeeb6c"},{url:"static/js/import-DC_cHT8U.js",revision:"5cb62ed98d21dc4d5452f3e2abcb193e"},{url:"static/js/index-b6qINuoo.js",revision:"e48ccd984cfc1456ad980074a0aad23b"},{url:"static/js/index-BRu2pxxr.js",revision:"5763a094ecd00ffd93eb5b860adc6485"},{url:"static/js/index-C952Dgwm.js",revision:"852d8989f46e2e2d9dc28b5960201f59"},{url:"static/js/index-CesfN3FV.js",revision:"28ac6550faa3a0291a97cb8848064b31"},{url:"static/js/index-Cm1hEiZD.js",revision:"68de23d9538c58b0122bf04c1b8c364a"},{url:"static/js/index-D3UbvBbJ.js",revision:"30a7a4a95b127e5c5d0577f9b7daddb9"},{url:"static/js/index-DeOvVWbR.js",revision:"c8b72b1514c68054b0c3bf11b929f63f"},{url:"static/js/index-DmLg2sDX.js",revision:"9b69a701272f605c6030d86cee740021"},{url:"static/js/index-jiOdPd88.js",revision:"15d1c42e7156fa4d83eb81fc367af840"},{url:"static/js/index-NqHki5yn.js",revision:"31792b09507b7181ba359ac93f1b44e1"},{url:"static/js/index.module-DCDypNhi.js",revision:"0f27b04b9c046b58574b70bb0e551d95"},{url:"static/js/List-DjthkmvY.js",revision:"ea1f113ae993d73d3ac1e0e4a808546b"},{url:"static/js/Login-3Sda8tNN.js",revision:"109ab5be3a776e7d7a7a1c8d3d979306"},{url:"static/js/Login-CA5SSGAA.js",revision:"c9ac2f4a45908f9358721f96d51114a8"},{url:"static/js/Logout-C01X3mwa.js",revision:"b75eeaedca37c7adde08c014995d64d5"},{url:"static/js/Main--Yv2E6Wt.js",revision:"aee7f7646ac8fbb02e7adf283ab06d13"},{url:"static/js/NotFound-B0vE0USz.js",revision:"d600a205c1f87285e0348fe71afd00ac"},{url:"static/js/Notifications-JdKvoxHi.js",revision:"36560ba1608623ec283c85ae9a1b5303"},{url:"static/js/oauth2-Ct6e3wCI.js",revision:"164b17e801a06a0aa226ee711aef8066"},{url:"static/js/Open-4m9s9m5Z.js",revision:"ef1bc3350a8557e827140b3b73f41a2b"},{url:"static/js/Person-Dzdd0Mbi.js",revision:"8747b50c921399e31c47dd19d7eb54d5"},{url:"static/js/Preview-WQlf8S-b.js",revision:"4493342277fb0a4c8d562fe82c7ada90"},{url:"static/js/Profile-CM9yaxBK.js",revision:"b2eba235247921e6286bfb2e6a578189"},{url:"static/js/Reader-BmFieybG.js",revision:"640e8e183d996041e211e611cdf88063"},{url:"static/js/Register-Dqu_Nxlk.js",revision:"831d483de73595e0e30219b47c622411"},{url:"static/js/Report-CkdRyurF.js",revision:"60de945155fc5fa19b05486d19dce4b2"},{url:"static/js/scrollIntoView-BTkDRPyZ.js",revision:"5e7cc6176dd7077f0d2f3344e9b503b7"},{url:"static/js/Security-CR2d8SaW.js",revision:"a520dd51e832a61cde2cf656ddca5796"},{url:"static/js/Settings-CSesJkZW.js",revision:"bb1303eba987ac69df00448a14deca65"},{url:"static/js/Share-DgkfPMdl.js",revision:"39c0f23d32901f7599abffb5d8aed13b"},{url:"static/js/text-B64jcAFk.js",revision:"894512dd336c0c6185bcbb01136ad31b"},{url:"static/js/Trans-BJqNJRsT.js",revision:"09febc896302698673cd70a306c325d3"},{url:"static/js/useCollator-BWQpwPTU.js",revision:"1d058bb9abe23edb43a08014c00934ec"},{url:"static/js/useSelectableItem-CzIjaCsH.js",revision:"f5f8379ad40e3c44d51369dbfd17b446"},{url:"static/js/VerifyEmail-Bpe8J_OT.js",revision:"0fa354a2e72fe0cad1511be93ffedd58"},{url:"static/js/workbox-window.prod.es5-DFjpnwFp.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"images/logo-64x64.png",revision:"b8ed003694fe92462750debe19d804fc"},{url:"images/logo-192x192.png",revision:"3bef79eec5462d7f3f65ca99ca043e5a"},{url:"images/logo-512x512.png",revision:"8a7168cead8b2ac692fdca02de2c6004"},{url:"images/maskable-icon-512x512.png",revision:"5d3cbcc58297b23845b1e4881c07f971"},{url:"manifest.webmanifest",revision:"ea81d65e43588528e5d4bf715d6ac83f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
