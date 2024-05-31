import{ax as W,ag as z,r as b,ah as B}from"./index-BJB5ivqQ.js";import{w as M,b as K,I as J}from"./chunk-context-B75TDu2a.js";var U={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const X=W(U);var Y=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function S(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(X[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var o=e.indexOf("-->");return{type:"comment",comment:o!==-1?e.slice(4,o):""}}for(var f=new RegExp(Y),s=null;(s=f.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),p=[l,""];l.indexOf("=")>-1&&(p=l.split("=")),t.attrs[p[0]]=p[1],f.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var Z=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,q=/^\s*$/,G=Object.create(null);function I(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var o=[];for(var f in n)o.push(f+'="'+n[f]+'"');return o.length?" "+o.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(I,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var Q={parse:function(e,t){t||(t={}),t.components||(t.components=G);var n,o=[],f=[],s=-1,l=!1;if(e.indexOf("<")!==0){var p=e.indexOf("<");o.push({type:"text",content:p===-1?e:e.substring(0,p)})}return e.replace(Z,function(m,u){if(l){if(m!=="</"+n.name+">")return;l=!1}var v,O=m.charAt(1)!=="/",C=m.startsWith("<!--"),x=u+m.length,E=e.charAt(x);if(C){var h=S(m);return s<0?(o.push(h),o):((v=f[s]).children.push(h),o)}if(O&&(s++,(n=S(m)).type==="tag"&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!E||E==="<"||n.children.push({type:"text",content:e.slice(x,e.indexOf("<",x))}),s===0&&o.push(n),(v=f[s-1])&&v.children.push(n),f[s]=n),(!O||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?o:f[s]),!l&&E!=="<"&&E)){v=s===-1?o:f[s].children;var c=e.indexOf("<",x),i=e.slice(x,c===-1?void 0:c);q.test(i)&&(i=" "),(c>-1&&s+v.length>=0||i!==" ")&&v.push({type:"text",content:i})}}),o},stringify:function(e){return e.reduce(function(t,n){return t+I("",n)},"")}};function D(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function H(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?P(t):t}function _(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>b.isValidElement(t))}function P(e){return Array.isArray(e)?e:[e]}function R(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function L(e,t){if(!e)return"";let n="";const o=P(e),f=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((s,l)=>{if(typeof s=="string")n+=`${s}`;else if(b.isValidElement(s)){const p=Object.keys(s.props).length,m=f.indexOf(s.type)>-1,u=s.props.children;if(!u&&m&&p===0)n+=`<${s.type}/>`;else if(!u&&(!m||p!==0))n+=`<${l}></${l}>`;else if(s.props.i18nIsDynamicList)n+=`<${l}></${l}>`;else if(m&&p===1&&typeof u=="string")n+=`<${s.type}>${u}</${s.type}>`;else{const v=L(u,t);n+=`<${l}>${v}</${l}>`}}else if(s===null)K("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:p,...m}=s,u=Object.keys(m);if(u.length===1){const v=p?`${u[0]}, ${p}`:u[0];n+=`{{${v}}}`}else K("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else K("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function ee(e,t,n,o,f,s){if(t==="")return[];const l=o.transKeepBasicHtmlNodesFor||[],p=t&&new RegExp(l.map(c=>`<${c}`).join("|")).test(t);if(!e&&!p&&!s)return[t];const m={};function u(c){P(c).forEach(a=>{typeof a!="string"&&(D(a)?u(H(a)):typeof a=="object"&&!b.isValidElement(a)&&Object.assign(m,a))})}u(e);const v=Q.parse(`<0>${t}</0>`),O={...m,...f};function C(c,i,a){const g=H(c),k=E(g,i.children,a);return _(g)&&k.length===0||c.props&&c.props.i18nIsDynamicList?g:k}function x(c,i,a,g,k){c.dummy?(c.children=i,a.push(b.cloneElement(c,{key:g},k?void 0:i))):a.push(...b.Children.map([c],y=>{const r={...y.props};return delete r.i18nIsDynamicList,b.createElement(y.type,{...r,key:g,ref:y.ref},k?null:i)}))}function E(c,i,a){const g=P(c);return P(i).reduce((y,r,A)=>{const N=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,O,n.language);if(r.type==="tag"){let j=g[parseInt(r.name,10)];a.length===1&&!j&&(j=a[0][r.name]),j||(j={});const d=Object.keys(r.attrs).length!==0?R({props:r.attrs},j):j,w=b.isValidElement(d),T=w&&D(r,!0)&&!r.voidElement,F=p&&typeof d=="object"&&d.dummy&&!w,V=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof d=="string"){const $=n.services.interpolator.interpolate(d,O,n.language);y.push($)}else if(D(d)||T){const $=C(d,r,a);x(d,$,y,A)}else if(F){const $=E(g,r.children,a);x(d,$,y,A)}else if(Number.isNaN(parseFloat(r.name)))if(V){const $=C(d,r,a);x(d,$,y,A,r.voidElement)}else if(o.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)y.push(b.createElement(r.name,{key:`${r.name}-${A}`}));else{const $=E(g,r.children,a);y.push(b.createElement(r.name,{key:`${r.name}-${A}`},$))}else if(r.voidElement)y.push(`<${r.name} />`);else{const $=E(g,r.children,a);y.push(`<${r.name}>${$}</${r.name}>`)}else if(typeof d=="object"&&!w){const $=r.children[0]?N:null;$&&y.push($)}else x(d,N,y,A,r.children.length!==1||!N)}else if(r.type==="text"){const j=o.transWrapTextNodes,d=s?o.unescape(n.services.interpolator.interpolate(r.content,O,n.language)):n.services.interpolator.interpolate(r.content,O,n.language);j?y.push(b.createElement(j,{key:`${r.name}-${A}`},d)):y.push(d)}return y},[])}const h=E([{dummy:!0,children:e||[]}],v,P(e||[]));return H(h[0])}function te(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:O,t:C,shouldUnescape:x,...E}=e;const h=O||B();if(!h)return M("You will need to pass in an i18next instance by using i18nextReactModule"),t;const c=C||h.t.bind(h)||(T=>T),i={...z(),...h.options&&h.options.react};let a=v||c.ns||h.options&&h.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"];const g=L(t,i),k=m||g||i.transEmptyNodeValue||f,{hashTransKey:y}=i,r=f||(y?y(g||k):g||k);h.options&&h.options.interpolation&&h.options.interpolation.defaultVariables&&(p=p&&Object.keys(p).length>0?{...p,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const A=p||n!==void 0||!t?l.interpolation:{interpolation:{...l.interpolation,prefix:"#$?",suffix:"?$#"}},N={...l,context:s||l.context,count:n,...p,...A,defaultValue:k,ns:a},j=r?c(r,N):k;u&&Object.keys(u).forEach(T=>{const F=u[T];if(typeof F.type=="function"||!F.props||!F.props.children||j.indexOf(`${T}/>`)<0&&j.indexOf(`${T} />`)<0)return;function V(){return b.createElement(b.Fragment,null,F)}u[T]=b.createElement(V)});const d=ee(u||t,j,h,i,N,x),w=o!==void 0?o:i.defaultTransParent;return w?b.createElement(w,E,d):d}function re(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:O,t:C,shouldUnescape:x,...E}=e;const{i18n:h,defaultNS:c}=b.useContext(J)||{},i=O||h||B(),a=C||i&&i.t.bind(i);return te({children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l,values:p,defaults:m,components:u,ns:v||a&&a.ns||c||i&&i.options&&i.options.defaultNS,i18n:i,t:C,shouldUnescape:x,...E})}export{re as T};
