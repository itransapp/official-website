if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>i(e,r),f={module:{uri:r},exports:d,require:t};s[r]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dd3e8d3a09a8db18af18263b70c6b1a3"},{url:"docs-src/guidelines/community_content_guidelines_zh.md",revision:"60d77b7d328293d432b170fd240d4ae2"},{url:"docs-src/policy/general_privacy_statement_en.md",revision:"970568111819425308baf22b52f45f7a"},{url:"docs-src/policy/general_privacy_statement_zh.md",revision:"8adcbee9121f4c0dbcef12bf08271bc0"},{url:"favicon.ico",revision:"297800eb4b8d034457838047b4db260d"},{url:"favicon.svg",revision:"c3aa1f0a57870f6a240497244a2556b8"},{url:"images/apple-touch-icon.png",revision:"5f028df5b0c70a0b025ccbd37a9f8a9b"},{url:"images/backtrace.svg",revision:"677433a0892aaed7b7d2628c313c9775"},{url:"images/default-avatar.jpg",revision:"06b32b0e98c5a5e4a11b0986cf23e5b2"},{url:"images/default-background.png",revision:"5606223623da76e87af20f06fcbf74db"},{url:"images/logo-192x192.png",revision:"7cdd90aa470f754761bede64ea12ef58"},{url:"images/logo-512x512.png",revision:"04ed1ff6b8f31ddfa5217e9a932c5cf7"},{url:"images/logo-64x64.png",revision:"4d128cf393f8a35c8092aadc164e2482"},{url:"images/logo.png",revision:"7fb31c76aa7e2c5591684d4f6191ccff"},{url:"images/maskable-icon-512x512.png",revision:"08888fd120629330f78337a14e9155a2"},{url:"index.html",revision:"b151b4dbc7e8895d638fbbf4ee9d5311"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"static/css/ColorDot-B0NftNp9.css",revision:"f960cda9c2a73586f3d9abbf8e5a689b"},{url:"static/css/index-BHefk8Cq.css",revision:"ad48e31dfcfc361a4ea49e3dfab37c10"},{url:"static/css/index-BtZeOnSD.css",revision:"0ebf169bcbd3a81ad23e131dcd0162e7"},{url:"static/js/Avatar-ha2IHVuW.js",revision:"c7a499737439c6ae6346893e18df8b0d"},{url:"static/js/Base-DVGoHt5a.js",revision:"4662c27fced18949a0e15de78d0d0aa0"},{url:"static/js/chunk-44JHHBS2-Bb1E5rdh.js",revision:"07f084680c6513720a7559bdcfe80943"},{url:"static/js/chunk-BJUMDPFJ-tD731dTn.js",revision:"66a78331be9b66b78b5ba15497d88c6f"},{url:"static/js/chunk-CAFRINWI-CcU5yOMx.js",revision:"4f4dc2d31cd07460ce8f4d03d10ebe06"},{url:"static/js/chunk-II5OMS4Q-fle510sq.js",revision:"5cec78a39a944a4b82538994269544c4"},{url:"static/js/chunk-J333S7JQ-BlCs8NA8.js",revision:"5b8f5a7b758b74b61b135c85455495a2"},{url:"static/js/chunk-JHUBASYZ-OCr0ZHKS.js",revision:"e7c6984d46b6d7c553a0d3f76c1197d2"},{url:"static/js/chunk-KRADFROI-DvDiBrLQ.js",revision:"b8dd3c9a9567479aaf69fd11dd6369b3"},{url:"static/js/chunk-L6QJ42W6-BaQD7fw1.js",revision:"7f11ef33a22933396550608cc2be42d6"},{url:"static/js/chunk-LY2CD73K-CC9VIfTG.js",revision:"5359246b0ab535fc9f3d90c1834d7d52"},{url:"static/js/chunk-MPX6TMFQ-CDG7PaKH.js",revision:"364ad29ffcbff3ed2b18e20d5b918637"},{url:"static/js/chunk-OFGZKCFR-BH8VkvhB.js",revision:"c66d7b4a5e5666e35d38dab94d516195"},{url:"static/js/chunk-OFH6WYRQ-D6cyFlKR.js",revision:"1ea5cdd1763a69db17023f68a29a6b5c"},{url:"static/js/chunk-TC4QW7OA-DQMmF9l7.js",revision:"ccf2cbe090c83228ccbfe55412f7edc0"},{url:"static/js/chunk-ZFWMN6TD-sC3EvR__.js",revision:"f7247114814c469d8a1f69d94e36eeb8"},{url:"static/js/ColorDot-Db9dDFDJ.js",revision:"5adb1502c728afb75a1ca10afd97ae40"},{url:"static/js/Combination-9l7ojKmP.js",revision:"ea643f594b20ef55e11232191084cdb4"},{url:"static/js/context-C-9Mtarj.js",revision:"8ef87d575241f289f8b574d3bb459c0e"},{url:"static/js/Create-CcEKu00p.js",revision:"b87522e295dbfdb17580219f993e1c7b"},{url:"static/js/data-BXay3fV5.js",revision:"36839a23efa654bfc4ab1f57944e202f"},{url:"static/js/Details-BN9vqwSc.js",revision:"1d21cfadede66322c3104168f462f7b6"},{url:"static/js/Google-VBNWyoYC.js",revision:"9e2af499679c8799b3184c0bd92dc673"},{url:"static/js/Home-B2I4WAeF.js",revision:"6d47888824ccac782567a692ef2f48a8"},{url:"static/js/import-BrksDhE8.js",revision:"cadf7526c6d18f9f9e5af6437d7e6735"},{url:"static/js/import-xf42wq4N.js",revision:"9423388be3967333259745faec652cd6"},{url:"static/js/index-B1TS27TH.js",revision:"ed1698b14eefae06f38f920660c6224d"},{url:"static/js/index-BBCdqyJu.js",revision:"6314e9007d7c68b58c669e63c3626f63"},{url:"static/js/index-BeNkhpPC.js",revision:"a3990383bd5274054a90d7d356f50d2c"},{url:"static/js/index-BoZfB6Oh.js",revision:"e089e65a52510616cdfb001e58a86ffe"},{url:"static/js/index-BVFsU4iq.js",revision:"abb7c6a703cce70e1b530831b434c2ce"},{url:"static/js/index-BwWDGFAR.js",revision:"a281f86df8944d57eb8a2b341d5e14a7"},{url:"static/js/index-CfawpANU.js",revision:"06517fa17f78f7d5d437862c3559427e"},{url:"static/js/index-ChBpnyTH.js",revision:"4391371060b96f2ad90471c08e35c3a0"},{url:"static/js/index-DjCs9h1F.js",revision:"f5ca769095b6cc337b703e21d06b2a2b"},{url:"static/js/index-IGalbb5p.js",revision:"6ba28c8fc8d491f30892a34b6f29a77f"},{url:"static/js/index.module-Kn6g6alu.js",revision:"524cb6115331945a46fac7120245d3e4"},{url:"static/js/List-MZflDlxX.js",revision:"74213ece54ff8215d3388052f3dbd64d"},{url:"static/js/Login-DhlGadXA.js",revision:"fe0cb268dc68926f767b464bc7a310a6"},{url:"static/js/Login-JEPrPtb3.js",revision:"e7d045a6db6a1aa34bd6a4a76d537131"},{url:"static/js/Logout-BjLpJq5W.js",revision:"b35c81314c54af5d75ca91dd0a31f053"},{url:"static/js/Main-CJgJJKxi.js",revision:"736527249a427433fe7871a2ba7c91b3"},{url:"static/js/NotFound-DQL6bjb0.js",revision:"bb972cd1841765ebe6bcc2efe037d597"},{url:"static/js/oauth2-Dxrq3KaQ.js",revision:"1eca69d47fc3bae17e93fd8d2b83c39f"},{url:"static/js/Open-DTZBYmfT.js",revision:"560fe4413ff080941b9877323cb03f9a"},{url:"static/js/Preview-DdDFrdTd.js",revision:"0f78aee7438dfb08d37b0bdc68b8c2a7"},{url:"static/js/Profile-g49PX4hL.js",revision:"377a4e8b4fd535e3cefdd52b51507dd7"},{url:"static/js/Reader-Do_a9I4o.js",revision:"147e2ec43f3f3666947f3f883ac9316d"},{url:"static/js/Register-BGqMwjPU.js",revision:"297c4fa1043ca2eb8eb6f9d9a088f13a"},{url:"static/js/Report-Cwl8M3bo.js",revision:"c734a398ac46fe31637551a825680572"},{url:"static/js/text-B64jcAFk.js",revision:"894512dd336c0c6185bcbb01136ad31b"},{url:"static/js/Trans-O-gUDf2w.js",revision:"73f0497e49c1343195c48eb28a24bea3"},{url:"static/js/VerifyEmail-C0j2izi-.js",revision:"3e173a81a8f24d2b8cb8e7352189197b"},{url:"images/logo-64x64.png",revision:"b8ed003694fe92462750debe19d804fc"},{url:"images/logo-192x192.png",revision:"3bef79eec5462d7f3f65ca99ca043e5a"},{url:"images/logo-512x512.png",revision:"8a7168cead8b2ac692fdca02de2c6004"},{url:"images/maskable-icon-512x512.png",revision:"5d3cbcc58297b23845b1e4881c07f971"},{url:"manifest.webmanifest",revision:"ea81d65e43588528e5d4bf715d6ac83f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
