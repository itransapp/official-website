import{t as ie,d as be,aa as ee,V as z,l as f,n as le,i as re,$ as he,a as ge,r as j,c as te,f as K,e as H,k as Q,a4 as ne,o as oe,z as _e,v as Ce,A as Pe,p as xe}from"./index-Cdk21UJT.js";import{s as je}from"./chunk-CAFRINWI-CcU5yOMx.js";import{u as we}from"./index-B7CtHPKC.js";import{a as ae}from"./import-OVYACUzW.js";import{$ as ke,R as Se}from"./Combination-vFTf2qnz.js";import{g as $e,u as Re}from"./chunk-3YBC73XM-C_i8c7Y_.js";var Oe=ie({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...be],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...ee,"flex","items-center","justify-center"],name:[...ee,"font-normal","text-center","text-inherit"],icon:[...ee,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:z.solid.default},primary:{base:z.solid.primary},secondary:{base:z.solid.secondary},success:{base:z.solid.success},warning:{base:z.solid.warning},danger:{base:z.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});ie({base:"flex items-center justify-center h-auto w-max-content",variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var Ie=Object.create,ue=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyNames,Ne=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty,fe=(t,o)=>function(){return o||(0,t[ce(t)[0]])((o={exports:{}}).exports,o),o.exports},Be=(t,o,p,v)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of ce(o))!Ae.call(t,s)&&s!==p&&ue(t,s,{get:()=>o[s],enumerable:!(v=Ee(o,s))||v.enumerable});return t},Me=(t,o,p)=>(p=t!=null?Ie(Ne(t)):{},Be(o||!t||!t.__esModule?ue(p,"default",{value:t,enumerable:!0}):p,t)),Fe=fe({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(t){var o=Symbol.for("react.element"),p=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),n=Symbol.for("react.provider"),y=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),O=Symbol.iterator;function w(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function k(e,r,a){this.props=e,this.context=r,this.refs=T,this.updater=a||I}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function E(){}E.prototype=k.prototype;function N(e,r,a){this.props=e,this.context=r,this.refs=T,this.updater=a||I}var $=N.prototype=new E;$.constructor=N,S($,k.prototype),$.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,A={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function J(e,r,a){var i,l={},u=null,m=null;if(r!=null)for(i in r.ref!==void 0&&(m=r.ref),r.key!==void 0&&(u=""+r.key),r)B.call(r,i)&&!M.hasOwnProperty(i)&&(l[i]=r[i]);var c=arguments.length-2;if(c===1)l.children=a;else if(1<c){for(var d=Array(c),x=0;x<c;x++)d[x]=arguments[x+2];l.children=d}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)l[i]===void 0&&(l[i]=c[i]);return{$$typeof:o,type:e,key:u,ref:m,props:l,_owner:A.current}}function Y(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function X(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return r[a]})}var W=/\/+/g;function V(e,r){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):r.toString(36)}function G(e,r,a,i,l){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var m=!1;if(e===null)m=!0;else switch(u){case"string":case"number":m=!0;break;case"object":switch(e.$$typeof){case o:case p:m=!0}}if(m)return m=e,l=l(m),e=i===""?"."+V(m,0):i,R(l)?(a="",e!=null&&(a=e.replace(W,"$&/")+"/"),G(l,r,a,"",function(x){return x})):l!=null&&(D(l)&&(l=Y(l,a+(!l.key||m&&m.key===l.key?"":(""+l.key).replace(W,"$&/")+"/")+e)),r.push(l)),1;if(m=0,i=i===""?".":i+":",R(e))for(var c=0;c<e.length;c++){u=e[c];var d=i+V(u,c);m+=G(u,r,a,d,l)}else if(d=w(e),typeof d=="function")for(e=d.call(e),c=0;!(u=e.next()).done;)u=u.value,d=i+V(u,c++),m+=G(u,r,a,d,l);else if(u==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return m}function U(e,r,a){if(e==null)return e;var i=[],l=0;return G(e,i,"","",function(u){return r.call(a,u,l++)}),i}function L(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var b={current:null},q={transition:null},Z={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:q,ReactCurrentOwner:A};t.Children={map:U,forEach:function(e,r,a){U(e,function(){r.apply(this,arguments)},a)},count:function(e){var r=0;return U(e,function(){r++}),r},toArray:function(e){return U(e,function(r){return r})||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=k,t.Fragment=v,t.Profiler=h,t.PureComponent=N,t.StrictMode=s,t.Suspense=P,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,t.cloneElement=function(e,r,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=S({},e.props),l=e.key,u=e.ref,m=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,m=A.current),r.key!==void 0&&(l=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in r)B.call(r,d)&&!M.hasOwnProperty(d)&&(i[d]=r[d]===void 0&&c!==void 0?c[d]:r[d])}var d=arguments.length-2;if(d===1)i.children=a;else if(1<d){c=Array(d);for(var x=0;x<d;x++)c[x]=arguments[x+2];i.children=c}return{$$typeof:o,type:e.type,key:l,ref:u,props:i,_owner:m}},t.createContext=function(e){return e={$$typeof:y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n,_context:e},e.Consumer=e},t.createElement=J,t.createFactory=function(e){var r=J.bind(null,e);return r.type=e,r},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:_,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:C,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,r){return{$$typeof:g,type:e,compare:r===void 0?null:r}},t.startTransition=function(e){var r=q.transition;q.transition={};try{e()}finally{q.transition=r}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,r){return b.current.useCallback(e,r)},t.useContext=function(e){return b.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return b.current.useDeferredValue(e)},t.useEffect=function(e,r){return b.current.useEffect(e,r)},t.useId=function(){return b.current.useId()},t.useImperativeHandle=function(e,r,a){return b.current.useImperativeHandle(e,r,a)},t.useInsertionEffect=function(e,r){return b.current.useInsertionEffect(e,r)},t.useLayoutEffect=function(e,r){return b.current.useLayoutEffect(e,r)},t.useMemo=function(e,r){return b.current.useMemo(e,r)},t.useReducer=function(e,r,a){return b.current.useReducer(e,r,a)},t.useRef=function(e){return b.current.useRef(e)},t.useState=function(e){return b.current.useState(e)},t.useSyncExternalStore=function(e,r,a){return b.current.useSyncExternalStore(e,r,a)},t.useTransition=function(){return b.current.useTransition()},t.version="18.2.0"}}),Te=fe({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(t,o){o.exports=Fe()}});/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=Me(Te()),De=(t,o)=>{var p;let v=[];const s=(p=se.Children.map(t,n=>(0,se.isValidElement)(n)&&n.type===o?(v.push(n),null):n))==null?void 0:p.filter(Boolean),h=v.length>=0?v:void 0;return[s,h]},Ve=()=>f.jsxs("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[f.jsx("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),f.jsx("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[Ke,Ge]=le({name:"AvatarGroupContext",strict:!1});function Ue(t={}){var o,p,v,s,h;const n=Ge(),y=!!n,{as:_,ref:P,src:g,name:C,icon:O,classNames:w,fallback:I,alt:S=C||"avatar",imgRef:T,color:k=(o=n==null?void 0:n.color)!=null?o:"default",radius:E=(p=n==null?void 0:n.radius)!=null?p:"full",size:N=(v=n==null?void 0:n.size)!=null?v:"md",isBordered:$=(s=n==null?void 0:n.isBordered)!=null?s:!1,isDisabled:R=(h=n==null?void 0:n.isDisabled)!=null?h:!1,isFocusable:B=!1,getInitials:A=je,ignoreFallback:M=!1,showFallback:J=!1,ImgComponent:Y="img",imgProps:D,className:X,onError:W,...V}=t,G=_||"span",U=re(P),L=re(T),{isFocusVisible:b,isFocused:q,focusProps:Z}=he(),{isHovered:e,hoverProps:r}=ge({isDisabled:R}),i=we({src:g,onError:W,ignoreFallback:M})==="loaded",l=(!g||!i)&&J,u=j.useMemo(()=>{var F;return Oe({color:k,radius:E,size:N,isBordered:$,isDisabled:R,isInGroup:y,isInGridGroup:(F=n==null?void 0:n.isGrid)!=null?F:!1})},[k,E,N,$,R,y,n==null?void 0:n.isGrid]),m=te(w==null?void 0:w.base,X),c=j.useMemo(()=>B||_==="button",[B,_]),d=j.useCallback((F={})=>({ref:U,tabIndex:c?0:-1,"data-hover":K(e),"data-focus":K(q),"data-focus-visible":K(b),className:u.base({class:te(m,F==null?void 0:F.className)}),...H(V,r,c?Z:{})}),[c,u,m,Z,V]),x=j.useCallback((F={})=>({ref:L,src:g,"data-loaded":K(i),className:u.img({class:w==null?void 0:w.img}),...H(D,F)}),[u,i,D,g,L]);return{Component:G,ImgComponent:Y,src:g,alt:S,icon:O,name:C,imgRef:L,slots:u,classNames:w,fallback:I,isImgLoaded:i,showFallback:l,ignoreFallback:M,getInitials:A,getAvatarProps:d,getImageProps:x}}var de=Q((t,o)=>{const{Component:p,ImgComponent:v,src:s,icon:h=f.jsx(Ve,{}),alt:n,classNames:y,slots:_,name:P,showFallback:g,fallback:C,getInitials:O,getAvatarProps:w,getImageProps:I}=Ue({...t,ref:o}),S=j.useMemo(()=>!g&&s?null:C?f.jsx("div",{"aria-label":n,className:_.fallback({class:y==null?void 0:y.fallback}),role:"img",children:C}):P?f.jsx("span",{"aria-label":n,className:_.name({class:y==null?void 0:y.name}),role:"img",children:O(P)}):f.jsx("span",{"aria-label":n,className:_.icon({class:y==null?void 0:y.icon}),role:"img",children:h}),[g,s,C,P,y]);return f.jsxs(p,{...w(),children:[s&&f.jsx(v,{...I(),alt:n}),S]})});de.displayName="NextUI.Avatar";var Qe=de,[qe,pe]=le({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),ve=Q((t,o)=>{const{as:p,children:v,className:s,...h}=t,{Component:n,isOpen:y,placement:_,motionProps:P,backdrop:g,disableAnimation:C,shouldBlockScroll:O,getPopoverProps:w,getDialogProps:I,getBackdropProps:S,getContentProps:T,isNonModal:k,onClose:E}=pe(),N=p||n||"div",$=j.useRef(null),{dialogProps:R,titleProps:B}=ke({},$);delete R.role;const A=f.jsxs(f.Fragment,{children:[!k&&f.jsx(ne,{onDismiss:E}),f.jsx(N,{...I(H(R,h)),ref:$,children:f.jsx("div",{...T({className:s}),children:typeof v=="function"?v(B):v})}),f.jsx(ne,{onDismiss:E})]}),M=j.useMemo(()=>g==="transparent"?null:C?f.jsx("div",{...S()}):f.jsx(oe.div,{animate:"enter",exit:"exit",initial:"exit",variants:ae.fade,...S()}),[g,C,S]);return f.jsxs("div",{...w(),children:[M,f.jsx(Se,{forwardProps:!0,enabled:O&&y,removeScrollBar:!1,children:C?A:f.jsx(oe.div,{animate:"enter",exit:"exit",initial:"initial",style:{...$e(_==="center"?"top":_)},variants:ae.scaleSpringOpacity,...P,children:A})})]})});ve.displayName="NextUI.PopoverContent";var Ye=ve,me=Q((t,o)=>{const{triggerRef:p,getTriggerProps:v}=pe(),{children:s,...h}=t,n=j.useMemo(()=>typeof s=="string"?f.jsx("p",{children:s}):j.Children.only(s),[s]),{onPress:y,..._}=j.useMemo(()=>v(H(n.props,h),n.ref),[v,n.props,h,n.ref]),[,P]=De(s,_e),{buttonProps:g}=Ce({onPress:y},p),C=j.useMemo(()=>(P==null?void 0:P[0])!==void 0,[P]);return j.cloneElement(n,H(_,C?{onPress:y}:g))});me.displayName="NextUI.PopoverTrigger";var Xe=me,ye=Q((t,o)=>{const{children:p,...v}=t,s=Re({...v,ref:o}),[h,n]=j.Children.toArray(p),y=f.jsx(xe,{portalContainer:s.portalContainer,children:n});return f.jsxs(qe,{value:s,children:[h,s.disableAnimation&&s.isOpen?y:f.jsx(Pe,{children:s.isOpen?y:null})]})});ye.displayName="NextUI.Popover";var er=ye;export{Qe as a,Ye as b,Xe as c,er as d,De as p};