import{t as fe,g as Se,r as n,p as Ie,n as i,u as je,c8 as Ve,b as _e,a as De,$ as Be,c as T,f as x,e as le,h as de,l as Oe}from"./index-D6APwUTW.js";import{$ as Le,a as Ee}from"./index-BeoW2HFN.js";import{u as Ne}from"./index-DL0yfG4w.js";import{a as Me,b as qe,u as Ae}from"./index-D-5-tOUf.js";import{b as be,a as Te,d as Ge,e as Ue}from"./chunk-OZXMJY32-DHgDBK26.js";import{m as Ze}from"./index-GDUb_ijs.js";import{$ as ze}from"./import-Cx_ALsw0.js";import{i as Fe}from"./chunk-NNXNFLWG-CROHFMTe.js";import{r as We}from"./text-B64jcAFk.js";var He={},ce={};function ue(e,a,...r){var o;const l=`[Next UI]${a?` [${a}]`:" "}: ${e}`;if(!(typeof console>"u")&&!ce[l]&&(ce[l]=!0,((o=process==null?void 0:He)==null?void 0:o.NODE_ENV)!=="production"))return console.warn(l,r)}var Ke=fe({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...Se],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1}});fe({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1}});function Je(e={}){let{isReadOnly:a}=e,[r,o]=Me(e.isSelected,e.defaultSelected||!1,e.onChange);function s(m){a||o(m)}function l(){a||o(!r)}return{isSelected:r,setSelected:s,toggle:l}}function me(e,a,r){let o=be({...e,value:a.isSelected}),{isInvalid:s,validationErrors:l,validationDetails:m}=o.displayValidation,{labelProps:u,inputProps:f,isSelected:b,isPressed:t,isDisabled:y,isReadOnly:R}=Le({...e,isInvalid:s},a,r);Te(e,o,r);let{isIndeterminate:j,isRequired:h,validationBehavior:p="aria"}=e;return n.useEffect(()=>{r.current&&(r.current.indeterminate=!!j)}),{labelProps:u,inputProps:{...f,checked:b,"aria-required":h&&p==="aria"||void 0,required:h&&p==="native"},isSelected:b,isPressed:t,isDisabled:y,isReadOnly:R,isInvalid:s,validationErrors:l,validationDetails:m}}const Qe=new WeakMap;function Xe(e,a,r){const o=Je({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(P){P?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(P)}});let{name:s,descriptionId:l,errorMessageId:m,validationBehavior:u}=Qe.get(a);var f;u=(f=e.validationBehavior)!==null&&f!==void 0?f:u;let{realtimeValidation:b}=be({...e,value:o.isSelected,name:void 0,validationBehavior:"aria"}),t=n.useRef(Ge),y=()=>{a.setInvalid(e.value,b.isInvalid?b:t.current)};n.useEffect(y);let R=a.realtimeValidation.isInvalid?a.realtimeValidation:b,j=u==="native"?a.displayValidation:R;var h;let p=me({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||s,isRequired:(h=e.isRequired)!==null&&h!==void 0?h:a.isRequired,validationBehavior:u,[Ue]:{realtimeValidation:R,displayValidation:j,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(P){t.current=P,y()}}},o,r);return{...p,inputProps:{...p.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?m:null,l].filter(Boolean).join(" ")||void 0}}}var[pa,Ye]=Ie({name:"CheckboxGroupContext",strict:!1});function ea(e){const{isSelected:a,disableAnimation:r,...o}=e;return i.jsx("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...o,children:i.jsx("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!r&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function aa(e){const{isSelected:a,disableAnimation:r,...o}=e;return i.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...o,children:i.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function ra(e){const{isIndeterminate:a,...r}=e,o=a?aa:ea;return i.jsx(o,{...r})}function ta(e={}){var a,r,o,s,l,m,u,f;const b=je(),t=Ye(),y=!!t,{as:R,ref:j,value:h="",children:p,icon:P,name:G,isRequired:he,isReadOnly:U=!1,autoFocus:Z=!1,isSelected:_,size:z=(a=t==null?void 0:t.size)!=null?a:"md",color:F=(r=t==null?void 0:t.color)!=null?r:"primary",radius:W=t==null?void 0:t.radius,lineThrough:H=(o=t==null?void 0:t.lineThrough)!=null?o:!1,isDisabled:K=(s=t==null?void 0:t.isDisabled)!=null?s:!1,disableAnimation:V=(m=(l=t==null?void 0:t.disableAnimation)!=null?l:b==null?void 0:b.disableAnimation)!=null?m:!1,validationState:J,isInvalid:v=J?J==="invalid":(u=t==null?void 0:t.isInvalid)!=null?u:!1,isIndeterminate:w=!1,validationBehavior:Q=(f=t==null?void 0:t.validationBehavior)!=null?f:"aria",defaultSelected:D,classNames:d,className:ge,onValueChange:X,...k}=e;t&&Ve&&(_&&ue("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),D&&ue("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const xe=R||"label",ve=n.useRef(null),S=n.useRef(null);let B=e.onChange;y&&(B=de(()=>{t.groupState.resetValidation()},B));const O=n.useId(),L=n.useMemo(()=>({name:G,value:h,children:p,autoFocus:Z,defaultSelected:D,validationBehavior:Q,isIndeterminate:w,isRequired:he,isInvalid:v,isSelected:_,isDisabled:K,isReadOnly:U,"aria-label":qe(k["aria-label"],p),"aria-labelledby":k["aria-labelledby"]||O,onChange:X}),[h,G,O,p,Z,v,w,K,U,_,D,Q,k["aria-label"],k["aria-labelledby"],X]),Y=Ee(L),{inputProps:$,isSelected:I,isDisabled:g,isReadOnly:E,isPressed:Ce}=y?Xe({...L},t.groupState,S):me({...L},Y,S),ee=g||E,[ye,ae]=n.useState(!1),{pressProps:re}=_e({isDisabled:ee,onPressStart(c){c.pointerType!=="keyboard"&&ae(!0)},onPressEnd(c){c.pointerType!=="keyboard"&&ae(!1)}}),te=ee?!1:ye||Ce,{hoverProps:oe,isHovered:N}=De({isDisabled:$.disabled}),{focusProps:ie,isFocused:M,isFocusVisible:q}=Be({autoFocus:$.autoFocus}),C=n.useMemo(()=>Ke({color:F,size:z,radius:W,isInvalid:v,lineThrough:H,isDisabled:g,disableAnimation:V}),[F,z,W,v,H,g,V]);Ae(()=>{if(!S.current)return;const c=!!S.current.checked;Y.setSelected(c)},[S.current]);const A=Ne(B),ne=n.useCallback(c=>{if(E||g){c.preventDefault();return}A==null||A(c)},[E,g,A]),se=T(d==null?void 0:d.base,ge),we=n.useCallback(()=>({ref:ve,className:C.base({class:se}),"data-disabled":x(g),"data-selected":x(I||w),"data-invalid":x(v),"data-hover":x(N),"data-focus":x(M),"data-pressed":x(te),"data-readonly":x($.readOnly),"data-focus-visible":x(q),"data-indeterminate":x(w),...le(oe,re,k)}),[C,se,g,I,w,v,N,M,te,$.readOnly,q,oe,re,k]),$e=n.useCallback((c={})=>({...c,"aria-hidden":!0,className:T(C.wrapper({class:T(d==null?void 0:d.wrapper,c==null?void 0:c.className)}))}),[C,d==null?void 0:d.wrapper]),Re=n.useCallback(()=>({ref:Ze(S,j),...le($,ie),onChange:de($.onChange,ne)}),[$,ie,ne]),Pe=n.useCallback(()=>({id:O,className:C.label({class:d==null?void 0:d.label})}),[C,d==null?void 0:d.label,g,I,v]),ke=n.useCallback(()=>({isSelected:I,isIndeterminate:w,disableAnimation:V,className:C.icon({class:d==null?void 0:d.icon})}),[C,d==null?void 0:d.icon,I,w,V]);return{Component:xe,icon:P,children:p,isSelected:I,isDisabled:g,isInvalid:v,isFocused:M,isHovered:N,isFocusVisible:q,getBaseProps:we,getWrapperProps:$e,getInputProps:Re,getLabelProps:Pe,getIconProps:ke}}var pe=Oe((e,a)=>{const{Component:r,children:o,icon:s=i.jsx(ra,{}),getBaseProps:l,getWrapperProps:m,getInputProps:u,getIconProps:f,getLabelProps:b}=ta({...e,ref:a}),t=typeof s=="function"?s(f()):n.cloneElement(s,f());return i.jsxs(r,{...l(),children:[i.jsx(ze,{elementType:"span",children:i.jsx("input",{...u()})}),i.jsx("span",{...m(),children:t}),o&&i.jsx("span",{...b(),children:o})]})});pe.displayName="NextUI.Checkbox";var ha=pe;const oa=e=>i.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[i.jsx("path",{d:"M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z",fill:"currentColor"}),i.jsx("path",{d:"M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z",fill:"currentColor"}),i.jsx("path",{d:"M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z",fill:"currentColor"}),i.jsx("path",{d:"M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z",fill:"currentColor"}),i.jsx("path",{d:"M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z",fill:"currentColor"})]}),ia=e=>i.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[i.jsx("path",{d:"M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z",fill:"currentColor"}),i.jsx("path",{d:"M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z",fill:"currentColor"})]}),ga=e=>{const[a,r]=n.useState(!1);return n.useEffect(()=>{e.value||r(!1)},[e.value]),i.jsx(Fe,{...e,endContent:i.jsx("button",{disabled:!e.value,className:"focus:outline-none",type:"button",onClick:()=>r(!a),children:a?i.jsx(oa,{className:"text-2xl text-default-400 pointer-events-none"}):i.jsx(ia,{className:"text-2xl text-default-400 pointer-events-none"})}),type:a?"text":"password"})},xa=()=>`${window.location.protocol}//${window.location.host}`,va=({clientID:e,redirectURI:a})=>`https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({client_id:e,redirect_uri:a,response_type:"code",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",state:We(16)}).toString()}`,Ca=({botID:e,origin:a,redirectURI:r})=>`https://oauth.telegram.org/auth?${new URLSearchParams({bot_id:e,origin:a,embed:"1",request_access:"write",return_to:r}).toString()}`;export{va as G,ga as P,Ca as T,ha as c,xa as g};
