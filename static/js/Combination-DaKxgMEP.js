import{ac as K,r as i,ad as j,a7 as U,Z as ee}from"./index-CK0qWxHE.js";var y=function(){return y=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},y.apply(this,arguments)};function Z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function te(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Oe(e,t){let{role:n="dialog"}=e,r=K();r=e["aria-label"]?void 0:r;let a=i.useRef(!1);return i.useEffect(()=>{if(t.current&&!t.current.contains(document.activeElement)){j(t.current);let o=setTimeout(()=>{document.activeElement===t.current&&(a.current=!0,t.current&&(t.current.blur(),j(t.current)),a.current=!1)},500);return()=>{clearTimeout(o)}}},[t]),U(),{dialogProps:{...ee(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||r,onBlur:o=>{a.current&&o.stopPropagation()}},titleProps:{id:r}}}var L="right-scroll-bar-position",N="width-before-scroll-bar",re="with-scroll-bars-hidden",ne="--removed-body-scroll-bar-size";function I(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ae(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var A=new WeakMap;function oe(e,t){var n=ae(t||null,function(r){return e.forEach(function(a){return I(a,r)})});return i.useLayoutEffect(function(){var r=A.get(n);if(r){var a=new Set(r),o=new Set(e),u=n.current;a.forEach(function(c){o.has(c)||I(c,null)}),o.forEach(function(c){a.has(c)||I(c,u)})}A.set(n,e)},[e]),n}function ce(e){return e}function ie(e,t){t===void 0&&(t=ce);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var u=t(o,r);return n.push(u),function(){n=n.filter(function(c){return c!==u})}},assignSyncMedium:function(o){for(r=!0;n.length;){var u=n;n=[],u.forEach(o)}n={push:function(c){return o(c)},filter:function(){return n}}},assignMedium:function(o){r=!0;var u=[];if(n.length){var c=n;n=[],c.forEach(o),u=n}var h=function(){var d=u;u=[],d.forEach(o)},m=function(){return Promise.resolve().then(h)};m(),n={push:function(d){u.push(d),m()},filter:function(d){return u=u.filter(d),n}}}};return a}function le(e){e===void 0&&(e={});var t=ie(null);return t.options=y({async:!0,ssr:!1},e),t}var _=function(e){var t=e.sideCar,n=Z(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,y({},n))};_.isSideCarExport=!0;function ue(e,t){return e.useMedium(t),_}var z=le(),W=function(){},$=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:W,onWheelCapture:W,onTouchMoveCapture:W}),a=r[0],o=r[1],u=e.forwardProps,c=e.children,h=e.className,m=e.removeScrollBar,d=e.enabled,p=e.shards,w=e.sideCar,C=e.noIsolation,E=e.inert,l=e.allowPinchZoom,f=e.as,v=f===void 0?"div":f,b=e.gapMode,g=Z(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=w,s=oe([n,t]),R=y(y({},g),a);return i.createElement(i.Fragment,null,d&&i.createElement(S,{sideCar:z,removeScrollBar:m,shards:p,noIsolation:C,inert:E,setCallbacks:o,allowPinchZoom:!!l,lockRef:n,gapMode:b}),u?i.cloneElement(i.Children.only(c),y(y({},R),{ref:s})):i.createElement(v,y({},R,{className:h,ref:s}),c))});$.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};$.classNames={fullWidth:N,zeroRight:L};var fe=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function se(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=fe();return t&&e.setAttribute("nonce",t),e}function de(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ve(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var he=function(){var e=0,t=null;return{add:function(n){e==0&&(t=se())&&(de(t,n),ve(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},me=function(){var e=he();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},F=function(){var e=me(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},ge={left:0,top:0,right:0,gap:0},O=function(e){return parseInt(e||"",10)||0},be=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[O(n),O(r),O(a)]},ye=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ge;var t=be(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Se=F(),pe=function(e,t,n,r){var a=e.left,o=e.top,u=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(re,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(L,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(N,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(L," .").concat(L,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(N," .").concat(N,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(ne,": ").concat(c,`px;
  }
`)},we=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,o=i.useMemo(function(){return ye(a)},[a]);return i.createElement(Se,{styles:pe(o,!t,a,n?"":"!important")})},X=!1;if(typeof window<"u")try{var B=Object.defineProperty({},"passive",{get:function(){return X=!0,!0}});window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch{X=!1}var k=X?{passive:!1}:!1,Ce=function(e){return e.tagName==="TEXTAREA"},Q=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ce(e)&&n[t]==="visible")},Ee=function(e){return Q(e,"overflowY")},Re=function(e){return Q(e,"overflowX")},D=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=G(e,r);if(a){var o=q(e,r),u=o[1],c=o[2];if(u>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ke=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Pe=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},G=function(e,t){return e==="v"?Ee(t):Re(t)},q=function(e,t){return e==="v"?ke(t):Pe(t)},xe=function(e,t){return e==="h"&&t==="rtl"?-1:1},Te=function(e,t,n,r,a){var o=xe(e,window.getComputedStyle(t).direction),u=o*r,c=n.target,h=t.contains(c),m=!1,d=u>0,p=0,w=0;do{var C=q(e,c),E=C[0],l=C[1],f=C[2],v=l-f-o*E;(E||v)&&G(e,c)&&(p+=v,w+=E),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!h&&c!==document.body||h&&(t.contains(c)||t===c));return(d&&(a&&Math.abs(p)<1||!a&&u>p)||!d&&(a&&Math.abs(w)<1||!a&&-u>w))&&(m=!0),m},M=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},V=function(e){return[e.deltaX,e.deltaY]},H=function(e){return e&&"current"in e?e.current:e},Be=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Me=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Le=0,P=[];function Ne(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(Le++)[0],o=i.useState(F)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var l=te([e.lockRef.current],(e.shards||[]).map(H),!0).filter(Boolean);return l.forEach(function(f){return f.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),l.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(l,f){if("touches"in l&&l.touches.length===2)return!u.current.allowPinchZoom;var v=M(l),b=n.current,g="deltaX"in l?l.deltaX:b[0]-v[0],S="deltaY"in l?l.deltaY:b[1]-v[1],s,R=l.target,x=Math.abs(g)>Math.abs(S)?"h":"v";if("touches"in l&&x==="h"&&R.type==="range")return!1;var T=D(x,R);if(!T)return!0;if(T?s=x:(s=x==="v"?"h":"v",T=D(x,R)),!T)return!1;if(!r.current&&"changedTouches"in l&&(g||S)&&(r.current=s),!s)return!0;var Y=r.current||s;return Te(Y,f,l,Y==="h"?g:S,!0)},[]),h=i.useCallback(function(l){var f=l;if(!(!P.length||P[P.length-1]!==o)){var v="deltaY"in f?V(f):M(f),b=t.current.filter(function(s){return s.name===f.type&&(s.target===f.target||f.target===s.shadowParent)&&Be(s.delta,v)})[0];if(b&&b.should){f.cancelable&&f.preventDefault();return}if(!b){var g=(u.current.shards||[]).map(H).filter(Boolean).filter(function(s){return s.contains(f.target)}),S=g.length>0?c(f,g[0]):!u.current.noIsolation;S&&f.cancelable&&f.preventDefault()}}},[]),m=i.useCallback(function(l,f,v,b){var g={name:l,delta:f,target:v,should:b,shadowParent:$e(v)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(S){return S!==g})},1)},[]),d=i.useCallback(function(l){n.current=M(l),r.current=void 0},[]),p=i.useCallback(function(l){m(l.type,V(l),l.target,c(l,e.lockRef.current))},[]),w=i.useCallback(function(l){m(l.type,M(l),l.target,c(l,e.lockRef.current))},[]);i.useEffect(function(){return P.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:w}),document.addEventListener("wheel",h,k),document.addEventListener("touchmove",h,k),document.addEventListener("touchstart",d,k),function(){P=P.filter(function(l){return l!==o}),document.removeEventListener("wheel",h,k),document.removeEventListener("touchmove",h,k),document.removeEventListener("touchstart",d,k)}},[]);var C=e.removeScrollBar,E=e.inert;return i.createElement(i.Fragment,null,E?i.createElement(o,{styles:Me(a)}):null,C?i.createElement(we,{gapMode:e.gapMode}):null)}function $e(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ie=ue(z,Ne);var J=i.forwardRef(function(e,t){return i.createElement($,y({},e,{ref:t,sideCar:Ie}))});J.classNames=$.classNames;const Xe=J;export{Oe as $,Xe as R};