import{r as l}from"./index-CCtfz-Ra.js";function f(){if(console&&console.warn){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const i={};function p(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];typeof e[0]=="string"&&i[e[0]]||(typeof e[0]=="string"&&(i[e[0]]=new Date),f(...e))}const g=(n,e)=>()=>{if(n.isInitialized)e();else{const a=()=>{setTimeout(()=>{n.off("initialized",a)},0),e()};n.on("initialized",a)}};function N(n,e,a){n.loadNamespaces(e,g(n,a))}function b(n,e,a,s){typeof a=="string"&&(a=[a]),a.forEach(t=>{n.options.ns.indexOf(t)<0&&n.options.ns.push(t)}),n.loadLanguages(e,g(n,s))}function m(n,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=e.languages[0],t=e.options?e.options.fallbackLng:!1,o=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(c,d)=>{const u=e.services.backendConnector.state[`${c}|${d}`];return u===-1||u===2};return a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(s,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(s,n)&&(!t||r(o,n)))}function C(n,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(p("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(n,{lng:a.lng,precheck:(t,o)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,n))return!1}}):m(n,e,a)}const L=l.createContext();class w{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}export{L as I,w as R,N as a,f as b,C as h,b as l,p as w};