if(!self.define){let s,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(c,a)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let d={};const f=s=>i(s,r),t={module:{uri:r},exports:d,require:f};e[r]=Promise.all(c.map((s=>t[s]||f(s)))).then((s=>(a(...s),d)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"dd3e8d3a09a8db18af18263b70c6b1a3"},{url:"docs-src/guidelines/community_content_guidelines_zh.md",revision:"60d77b7d328293d432b170fd240d4ae2"},{url:"docs-src/policy/general_privacy_statement_en.md",revision:"970568111819425308baf22b52f45f7a"},{url:"docs-src/policy/general_privacy_statement_zh.md",revision:"8adcbee9121f4c0dbcef12bf08271bc0"},{url:"favicon.ico",revision:"297800eb4b8d034457838047b4db260d"},{url:"favicon.svg",revision:"c3aa1f0a57870f6a240497244a2556b8"},{url:"images/apple-touch-icon.png",revision:"5f028df5b0c70a0b025ccbd37a9f8a9b"},{url:"images/backtrace.svg",revision:"677433a0892aaed7b7d2628c313c9775"},{url:"images/default-avatar.jpg",revision:"06b32b0e98c5a5e4a11b0986cf23e5b2"},{url:"images/default-background.png",revision:"5606223623da76e87af20f06fcbf74db"},{url:"images/logo-192x192.png",revision:"7cdd90aa470f754761bede64ea12ef58"},{url:"images/logo-512x512.png",revision:"04ed1ff6b8f31ddfa5217e9a932c5cf7"},{url:"images/logo-64x64.png",revision:"4d128cf393f8a35c8092aadc164e2482"},{url:"images/logo.png",revision:"7fb31c76aa7e2c5591684d4f6191ccff"},{url:"images/maskable-icon-512x512.png",revision:"08888fd120629330f78337a14e9155a2"},{url:"index.html",revision:"3e4785fac4269b071ef14cca89598b88"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"static/css/ColorDot-CObDsjnJ.css",revision:"c2ac74447c50a1968ad1b981dc5c2154"},{url:"static/css/index-BHefk8Cq.css",revision:"ad48e31dfcfc361a4ea49e3dfab37c10"},{url:"static/css/index-Ce5vDml6.css",revision:"e5b9effb698eacaeb635398588593d30"},{url:"static/js/Accessibility-DXNCmxsF.js",revision:"7f83362ab3fc1ec21eee19a72418848e"},{url:"static/js/Account-C5al2Gby.js",revision:"b0dd35596069f62b951bf5d75cf2acc7"},{url:"static/js/Avatar-dIpUSPgE.js",revision:"b64e1766e58d924997d734a7f3f95fc4"},{url:"static/js/Base-BO6fQHOZ.js",revision:"f08a316f1f936005baffd74cfbc2fdf8"},{url:"static/js/chunk-3YEK3JGC-CXK-9Hx1.js",revision:"af49b32fab884e1ab8eb8079a76b8091"},{url:"static/js/chunk-44JHHBS2-C8Xsrbrr.js",revision:"422a03ded391f30a7cb0d0a858baca25"},{url:"static/js/chunk-4HJHOVVR-BgWRVHHN.js",revision:"de5ffab406eb9f1b21b295607db88f09"},{url:"static/js/chunk-BOCK7NOT-DzCpzrQ5.js",revision:"9fe4db61eef49715945d524b2854b3a8"},{url:"static/js/chunk-CIZQCQPA-BS9sw4GB.js",revision:"af6175ddbf9deaf41fec9b4d3b3c1a10"},{url:"static/js/chunk-CQCLQUUP-CHwlLVmi.js",revision:"302dd9a213293e96b7ea1fd6d6dfd947"},{url:"static/js/chunk-H4VOEXHF-D-yflce9.js",revision:"1badda4252c34798dcdfd1e9d82a9440"},{url:"static/js/chunk-IXXDDLGU-CaDbTR_5.js",revision:"34c61727b6e2b35be826c682ef706700"},{url:"static/js/chunk-J333S7JQ-LJ7VuMHS.js",revision:"e6d69c317a369f567bd16b6ca8f17e40"},{url:"static/js/chunk-JHUBASYZ-CsDZytoS.js",revision:"5f0c76c998435bd124fd110cb2ccc15c"},{url:"static/js/chunk-NNXNFLWG-BLJrQLMZ.js",revision:"02e6bd4d33099f7a426a434c553446d8"},{url:"static/js/chunk-OZXMJY32-BhlXwG9k.js",revision:"287f65058734ef61aabc922bc1f25e8b"},{url:"static/js/chunk-QXREVWCS-D9IHVVo8.js",revision:"0be94e90f17f0554f69a7a413449cc2b"},{url:"static/js/chunk-SWJHOPKY-CfQhU_Mw.js",revision:"ccf25cf6671b11c303b07d5eb1a6c858"},{url:"static/js/chunk-UWUNWEEL-CUVz7qT6.js",revision:"903b1f8f7b36366004ffe017b13362dc"},{url:"static/js/chunk-YOZJQNDF-DQXYy8b0.js",revision:"0626467d44a7a9989951db68eea6b6eb"},{url:"static/js/ColorDot-NYZZJ81q.js",revision:"186714474fbb5d781a30907fc6a0fbdd"},{url:"static/js/context-DySvizlm.js",revision:"88c29aebbd06fab09e1c9b3b35fc312a"},{url:"static/js/Create-YbmtRast.js",revision:"9b5844a5c81725841245898b61c072b3"},{url:"static/js/data-08ZE4bTw.js",revision:"4e51e23946a19c27cf95b56a119d820b"},{url:"static/js/Details-715q6Els.js",revision:"f68e226faba27ca8438c3c72bda45b4d"},{url:"static/js/Google-D8Oqf6TT.js",revision:"11ec03a63826dbf82e2726f0c30a1797"},{url:"static/js/Google-GPqdro_J.js",revision:"5e77d361c18c62ea87fbc620094bd899"},{url:"static/js/Home-DmrnrIm9.js",revision:"0676b31d4e3bb99b23a487ca23e74aeb"},{url:"static/js/import-BGv_aV7E.js",revision:"ea079bd330c0905bebc26cc8c0cb6b4a"},{url:"static/js/import-BLqmaX7R.js",revision:"2b50f60ba3fa9283f77b19059ebeef78"},{url:"static/js/index-BaSqwigg.js",revision:"a5cfe5e55d595a067193f80fc9b64508"},{url:"static/js/index-C0lBt-P2.js",revision:"5b878bef4b65d6ff80e0ced8e7e3eea7"},{url:"static/js/index-Chbb0eIy.js",revision:"4f3fdc26a5bd076630009dc62136f481"},{url:"static/js/index-ChIc7hGn.js",revision:"d5a4e4548371232027a26c75eb84672e"},{url:"static/js/index-CuEp0Ry6.js",revision:"fbc503123e4d0fdae17e784c5718da80"},{url:"static/js/index-D3WP9dv0.js",revision:"9fbdf6b85c1b7338080e7355dc513b11"},{url:"static/js/index-DGWmBMVC.js",revision:"9155ea1236fefc2857e6416d6726a70f"},{url:"static/js/index-DjvujNST.js",revision:"e79616a5d872801229c5b18307a3121d"},{url:"static/js/index-DOEd7kfV.js",revision:"55f9c2e8863eaf0ebcc70d0c70a8c709"},{url:"static/js/index-Dz4xq95z.js",revision:"fd6e566c871949005ea9bcc696a38394"},{url:"static/js/index.module-ByX_Z7Lc.js",revision:"94060c49958c7d6e1af7711c3a744105"},{url:"static/js/List-BPpGUirA.js",revision:"91162b856b2aca926b4fcfa277342606"},{url:"static/js/Login-DKDyY1dU.js",revision:"f91cf45e265a8a1094daa129ce114f3f"},{url:"static/js/Login-KuAG5fBo.js",revision:"34df093d9c570d4078ea55cf6f5355a3"},{url:"static/js/Logout-BEhHBIid.js",revision:"8488e9250e88932fb53d2a04c0e8b5fa"},{url:"static/js/Main-COlhk2mo.js",revision:"64e6e74c0980519ba7b6712b7da3e28b"},{url:"static/js/NotFound-DrfWfmC4.js",revision:"67e6c68adb1acad3458bcf41f186ee3b"},{url:"static/js/Notifications-DhVBuSgN.js",revision:"bd73048d5378445beaba160c86ffd248"},{url:"static/js/oauth2-D3oIbF3a.js",revision:"9a360001fde073f8c44caa2125c73477"},{url:"static/js/Open-iIQL5_b7.js",revision:"ee11cd0130f4610a68ec904da1285290"},{url:"static/js/Person-CFd-7SUX.js",revision:"106d807ff246a99c996b95e6cc82e725"},{url:"static/js/Preview-Bd_2B3W6.js",revision:"2c5fd79c08006c93f7027a7724808d23"},{url:"static/js/Profile-BufgifI2.js",revision:"561a4d5fc253d7df7f6f43bd637229cf"},{url:"static/js/Reader-dV_3Q2lK.js",revision:"db29306682b6c24270f9636b4b162da5"},{url:"static/js/Register-6ePt9jPr.js",revision:"363a9bb6033410247470deb7317bc6d8"},{url:"static/js/Report-YWtHoXOM.js",revision:"0fab233fd1e6198d91c361021b61b111"},{url:"static/js/scrollIntoView-BqvmOxVM.js",revision:"5ef609e637e86a12ec532d16b2db7013"},{url:"static/js/Security-CFkc9GPi.js",revision:"471179dc517062369c71606cf41bf8d1"},{url:"static/js/Settings-BrxuXFR3.js",revision:"b5c8a0dffdea790c58096442ff760649"},{url:"static/js/Share-DbSs0Gvs.js",revision:"c0651525f575eef7f8f313f59ac81123"},{url:"static/js/text-B64jcAFk.js",revision:"894512dd336c0c6185bcbb01136ad31b"},{url:"static/js/Trans-Df9JsVJf.js",revision:"74afd4173d35a8323422f9774e402452"},{url:"static/js/useCollator-CF06zaoN.js",revision:"2a9dd2f4f630bce99d78049260c060ad"},{url:"static/js/useSelectableItem-CrjRw6Wo.js",revision:"121a4309d96d75d43d595cbab6d8ab75"},{url:"static/js/VerifyEmail-CyXvRs-U.js",revision:"af312f9014334d8d33021cf02adc62cb"},{url:"static/js/workbox-window.prod.es5-DFjpnwFp.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"images/logo-64x64.png",revision:"b8ed003694fe92462750debe19d804fc"},{url:"images/logo-192x192.png",revision:"3bef79eec5462d7f3f65ca99ca043e5a"},{url:"images/logo-512x512.png",revision:"8a7168cead8b2ac692fdca02de2c6004"},{url:"images/maskable-icon-512x512.png",revision:"5d3cbcc58297b23845b1e4881c07f971"},{url:"manifest.webmanifest",revision:"ea81d65e43588528e5d4bf715d6ac83f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
