import{t as Ct,d as Vt,g as _t,n as ke,a9 as I,ag as F,af as je,al as Ne,an as He,ac as ae,r as o,ar as Se,as as kt,aQ as Ie,e as z,aa as St,ae as De,ah as It,R as Dt,ap as zt,u as Ft,m as Bt,j as te,cd as Tt,c as _,$ as ze,a as Ot,ce as Rt,b as At,o as jt,f as p,k as Nt,h as Ht}from"./index-CCtfz-Ra.js";import{a as Kt,$ as qt,u as Ut,b as Gt}from"./index-CzYzjwve.js";var Fe=Ct({slots:{base:"group flex flex-col",label:["absolute","z-10","pointer-events-none","origin-top-left","rtl:origin-top-right","subpixel-antialiased","block","text-small","text-foreground-500"],mainWrapper:"h-full",inputWrapper:"relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",innerWrapper:"inline-flex w-full items-center h-full box-border",input:["w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none","data-[has-start-content=true]:ps-1.5","data-[has-end-content=true]:pe-1.5"],clearButton:["p-2","-m-2","z-10","hidden","absolute","right-3","rtl:right-auto","rtl:left-3","appearance-none","outline-none","select-none","opacity-0","hover:!opacity-100","cursor-pointer","active:!opacity-70","rounded-full",...Vt],helperWrapper:"hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",description:"text-tiny text-foreground-400",errorMessage:"text-tiny text-danger"},variants:{variant:{flat:{inputWrapper:["bg-default-100","data-[hover=true]:bg-default-200","group-data-[focus=true]:bg-default-100"]},faded:{inputWrapper:["bg-default-100","border-medium","border-default-200","data-[hover=true]:border-default-400"],value:"group-data-[has-value=true]:text-default-foreground"},bordered:{inputWrapper:["border-medium","border-default-200","data-[hover=true]:border-default-400","group-data-[focus=true]:border-default-foreground"]},underlined:{inputWrapper:["!px-1","!pb-0","!gap-0","relative","box-border","border-b-medium","shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","border-default-200","!rounded-none","hover:border-default-300","after:content-['']","after:w-0","after:origin-center","after:bg-default-foreground","after:absolute","after:left-1/2","after:-translate-x-1/2","after:-bottom-[2px]","after:h-[2px]","group-data-[focus=true]:after:w-full"],innerWrapper:"pb-1",label:"group-data-[filled-within=true]:text-foreground"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{label:"text-tiny",inputWrapper:"h-8 min-h-8 px-2 rounded-small",input:"text-small",clearButton:"text-medium"},md:{inputWrapper:"h-10 min-h-10 rounded-medium",input:"text-small",clearButton:"text-large"},lg:{inputWrapper:"h-12 min-h-12 rounded-large",input:"text-medium",clearButton:"text-large"}},radius:{none:{inputWrapper:"rounded-none"},sm:{inputWrapper:"rounded-small"},md:{inputWrapper:"rounded-medium"},lg:{inputWrapper:"rounded-large"},full:{inputWrapper:"rounded-full"}},labelPlacement:{outside:{mainWrapper:"flex flex-col"},"outside-left":{base:"flex-row items-center flex-nowrap data-[has-helper=true]:items-start",inputWrapper:"flex-1",mainWrapper:"flex flex-col",label:"relative text-foreground pr-2 rtl:pr-0 rtl:pl-2"},inside:{label:"text-tiny cursor-text",inputWrapper:"flex-col items-start justify-center gap-0",innerWrapper:"group-data-[has-label=true]:items-end"}},fullWidth:{true:{base:"w-full"}},isClearable:{true:{input:"peer pr-6 rtl:pr-0 rtl:pl-6",clearButton:"peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none",inputWrapper:"pointer-events-none",label:"pointer-events-none"}},isInvalid:{true:{label:"!text-danger",input:"!placeholder:text-danger !text-danger"}},isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5 rtl:after:ml-[unset] rtl:after:mr-0.5"}},isMultiline:{true:{label:"relative",inputWrapper:"!h-auto",innerWrapper:"items-start group-data-[has-label=true]:items-start",input:"resize-none data-[hide-scroll=true]:scrollbar-hide"}},disableAnimation:{true:{input:"transition-none",inputWrapper:"transition-none",label:"transition-none"},false:{inputWrapper:"transition-background motion-reduce:transition-none !duration-150",label:["will-change-auto","!duration-200","!ease-out","motion-reduce:transition-none","transition-[transform,color,left,opacity]"],clearButton:["transition-opacity","motion-reduce:transition-none"]}}},defaultVariants:{variant:"flat",color:"default",size:"md",fullWidth:!0,labelPlacement:"inside",isDisabled:!1,isMultiline:!1},compoundVariants:[{variant:"flat",color:"default",class:{input:"group-data-[has-value=true]:text-default-foreground"}},{variant:"flat",color:"primary",class:{inputWrapper:["bg-primary-50","data-[hover=true]:bg-primary-100","text-primary","group-data-[focus=true]:bg-primary-50","placeholder:text-primary"],input:"placeholder:text-primary",label:"text-primary"}},{variant:"flat",color:"secondary",class:{inputWrapper:["bg-secondary-50","text-secondary","data-[hover=true]:bg-secondary-100","group-data-[focus=true]:bg-secondary-50","placeholder:text-secondary"],input:"placeholder:text-secondary",label:"text-secondary"}},{variant:"flat",color:"success",class:{inputWrapper:["bg-success-50","text-success-600","dark:text-success","placeholder:text-success-600","dark:placeholder:text-success","data-[hover=true]:bg-success-100","group-data-[focus=true]:bg-success-50"],input:"placeholder:text-success-600 dark:placeholder:text-success",label:"text-success-600 dark:text-success"}},{variant:"flat",color:"warning",class:{inputWrapper:["bg-warning-50","text-warning-600","dark:text-warning","placeholder:text-warning-600","dark:placeholder:text-warning","data-[hover=true]:bg-warning-100","group-data-[focus=true]:bg-warning-50"],input:"placeholder:text-warning-600 dark:placeholder:text-warning",label:"text-warning-600 dark:text-warning"}},{variant:"flat",color:"danger",class:{inputWrapper:["bg-danger-50","text-danger","dark:text-danger-500","placeholder:text-danger","dark:placeholder:text-danger-500","data-[hover=true]:bg-danger-100","group-data-[focus=true]:bg-danger-50"],input:"placeholder:text-danger dark:placeholder:text-danger-500",label:"text-danger dark:text-danger-500"}},{variant:"faded",color:"primary",class:{label:"text-primary",inputWrapper:"data-[hover=true]:border-primary focus-within:border-primary"}},{variant:"faded",color:"secondary",class:{label:"text-secondary",inputWrapper:"data-[hover=true]:border-secondary focus-within:border-secondary"}},{variant:"faded",color:"success",class:{label:"text-success",inputWrapper:"data-[hover=true]:border-success focus-within:border-success"}},{variant:"faded",color:"warning",class:{label:"text-warning",inputWrapper:"data-[hover=true]:border-warning focus-within:border-warning"}},{variant:"faded",color:"danger",class:{label:"text-danger",inputWrapper:"data-[hover=true]:border-danger focus-within:border-danger"}},{variant:"underlined",color:"default",class:{input:"group-data-[has-value=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{inputWrapper:"after:bg-primary",label:"text-primary"}},{variant:"underlined",color:"secondary",class:{inputWrapper:"after:bg-secondary",label:"text-secondary"}},{variant:"underlined",color:"success",class:{inputWrapper:"after:bg-success",label:"text-success"}},{variant:"underlined",color:"warning",class:{inputWrapper:"after:bg-warning",label:"text-warning"}},{variant:"underlined",color:"danger",class:{inputWrapper:"after:bg-danger",label:"text-danger"}},{variant:"bordered",color:"primary",class:{inputWrapper:"group-data-[focus=true]:border-primary",label:"text-primary"}},{variant:"bordered",color:"secondary",class:{inputWrapper:"group-data-[focus=true]:border-secondary",label:"text-secondary"}},{variant:"bordered",color:"success",class:{inputWrapper:"group-data-[focus=true]:border-success",label:"text-success"}},{variant:"bordered",color:"warning",class:{inputWrapper:"group-data-[focus=true]:border-warning",label:"text-warning"}},{variant:"bordered",color:"danger",class:{inputWrapper:"group-data-[focus=true]:border-danger",label:"text-danger"}},{labelPlacement:"inside",color:"default",class:{label:"group-data-[filled-within=true]:text-default-600"}},{labelPlacement:"outside",color:"default",class:{label:"group-data-[filled-within=true]:text-foreground"}},{radius:"full",size:["sm"],class:{inputWrapper:"px-3"}},{radius:"full",size:"md",class:{inputWrapper:"px-4"}},{radius:"full",size:"lg",class:{inputWrapper:"px-5"}},{disableAnimation:!1,variant:["faded","bordered"],class:{inputWrapper:"transition-colors motion-reduce:transition-none"}},{disableAnimation:!1,variant:"underlined",class:{inputWrapper:"after:transition-width motion-reduce:after:transition-none"}},{variant:["flat","faded"],class:{inputWrapper:[..._t]}},{isInvalid:!0,variant:"flat",class:{inputWrapper:["!bg-danger-50","data-[hover=true]:!bg-danger-100","group-data-[focus=true]:!bg-danger-50"]}},{isInvalid:!0,variant:"bordered",class:{inputWrapper:"!border-danger group-data-[focus=true]:!border-danger"}},{isInvalid:!0,variant:"underlined",class:{inputWrapper:"after:!bg-danger"}},{labelPlacement:"inside",size:"sm",class:{inputWrapper:"h-12 py-1.5 px-3"}},{labelPlacement:"inside",size:"md",class:{inputWrapper:"h-14 py-2"}},{labelPlacement:"inside",size:"lg",class:{label:"text-small",inputWrapper:"h-16 py-2.5 gap-0"}},{labelPlacement:"inside",size:"sm",variant:["bordered","faded"],class:{inputWrapper:"py-1"}},{labelPlacement:["inside","outside"],class:{label:["group-data-[filled-within=true]:pointer-events-auto"]}},{labelPlacement:["outside","outside-left"],class:{input:"h-full"}},{labelPlacement:"outside",isMultiline:!1,class:{base:"group relative justify-end",label:["pb-0","z-20","top-1/2","-translate-y-1/2","group-data-[filled-within=true]:left-0"]}},{labelPlacement:["inside"],class:{label:["group-data-[filled-within=true]:scale-85"]}},{labelPlacement:["inside"],variant:"flat",class:{innerWrapper:"pb-0.5"}},{variant:"underlined",size:"sm",class:{innerWrapper:"pb-1"}},{variant:"underlined",size:["md","lg"],class:{innerWrapper:"pb-1.5"}},{labelPlacement:"inside",size:["sm","md"],class:{label:"text-small"}},{labelPlacement:"inside",isMultiline:!1,size:"sm",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]"]}},{labelPlacement:"inside",isMultiline:!1,size:"md",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]"]}},{labelPlacement:"inside",isMultiline:!1,size:"lg",class:{label:["text-medium","group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]"]}},{labelPlacement:"inside",variant:["faded","bordered"],isMultiline:!1,size:"sm",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]"]}},{labelPlacement:"inside",variant:["faded","bordered"],isMultiline:!1,size:"md",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]"]}},{labelPlacement:"inside",variant:["faded","bordered"],isMultiline:!1,size:"lg",class:{label:["text-medium","group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]"]}},{labelPlacement:"inside",variant:"underlined",isMultiline:!1,size:"sm",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]"]}},{labelPlacement:"inside",variant:"underlined",isMultiline:!1,size:"md",class:{label:["group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]"]}},{labelPlacement:"inside",variant:"underlined",size:"lg",isMultiline:!1,class:{label:["text-medium","group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]"]}},{labelPlacement:"outside",size:"sm",isMultiline:!1,class:{label:["left-2","text-tiny","group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]"],base:"data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]"}},{labelPlacement:"outside",size:"md",isMultiline:!1,class:{label:["left-3","rtl:left-auto","rtl:right-3","text-small","group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]"],base:"data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"}},{labelPlacement:"outside",size:"lg",isMultiline:!1,class:{label:["left-3","rtl:left-auto","rtl:right-3","text-medium","group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]"],base:"data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]"}},{labelPlacement:"outside-left",size:"sm",class:{label:"group-data-[has-helper=true]:pt-2"}},{labelPlacement:"outside-left",size:"md",class:{label:"group-data-[has-helper=true]:pt-3"}},{labelPlacement:"outside-left",size:"lg",class:{label:"group-data-[has-helper=true]:pt-4"}},{labelPlacement:["outside","outside-left"],isMultiline:!0,class:{inputWrapper:"py-2"}},{labelPlacement:"outside",isMultiline:!0,class:{label:"pb-1.5"}},{labelPlacement:"inside",isMultiline:!0,class:{label:"pb-0.5",input:"pt-0"}},{isMultiline:!0,disableAnimation:!1,class:{input:"transition-height !duration-100 motion-reduce:transition-none"}},{labelPlacement:["inside","outside"],class:{label:["pe-2","max-w-full","text-ellipsis","overflow-hidden"]}},{isMultiline:!0,radius:"full",class:{inputWrapper:"data-[has-multiple-rows=true]:rounded-large"}}]}),Wa=e=>ke.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:ke.jsx("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})});let Qt=new Set,K=new Map,B=!1,be=!1;function le(e,a){for(let t of Qt)t(e,a)}function Yt(e){return!(e.metaKey||!Ne()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function re(e){B=!0,Yt(e)&&le("keyboard",e)}function y(e){(e.type==="mousedown"||e.type==="pointerdown")&&(B=!0,le("pointer",e))}function Ke(e){je(e)&&(B=!0)}function qe(e){e.target===window||e.target===document||(!B&&!be&&le("virtual",e),B=!1,be=!1)}function Ue(){B=!1,be=!0}function Be(e){if(typeof window>"u"||K.get(F(e)))return;const a=F(e),t=I(e);let r=a.HTMLElement.prototype.focus;a.HTMLElement.prototype.focus=function(){B=!0,r.apply(this,arguments)},t.addEventListener("keydown",re,!0),t.addEventListener("keyup",re,!0),t.addEventListener("click",Ke,!0),a.addEventListener("focus",qe,!0),a.addEventListener("blur",Ue,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",y,!0),t.addEventListener("pointermove",y,!0),t.addEventListener("pointerup",y,!0)):(t.addEventListener("mousedown",y,!0),t.addEventListener("mousemove",y,!0),t.addEventListener("mouseup",y,!0)),a.addEventListener("beforeunload",()=>{Ge(e)},{once:!0}),K.set(a,{focus:r})}const Ge=(e,a)=>{const t=F(e),r=I(e);a&&r.removeEventListener("DOMContentLoaded",a),K.has(t)&&(t.HTMLElement.prototype.focus=K.get(t).focus,r.removeEventListener("keydown",re,!0),r.removeEventListener("keyup",re,!0),r.removeEventListener("click",Ke,!0),t.removeEventListener("focus",qe,!0),t.removeEventListener("blur",Ue,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",y,!0),r.removeEventListener("pointermove",y,!0),r.removeEventListener("pointerup",y,!0)):(r.removeEventListener("mousedown",y,!0),r.removeEventListener("mousemove",y,!0),r.removeEventListener("mouseup",y,!0)),K.delete(t))};function Jt(e){const a=I(e);let t;return a.readyState!=="loading"?Be(e):(t=()=>{Be(e)},a.addEventListener("DOMContentLoaded",t)),()=>Ge(e,t)}typeof document<"u"&&Jt();function Xt(e){le(e,null)}function Zt(e,a,t){let{validationBehavior:r,focus:i}=e;He(()=>{if(r==="native"&&(t!=null&&t.current)){let d=a.realtimeValidation.isInvalid?a.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(d),t.current.hasAttribute("title")||(t.current.title=""),a.realtimeValidation.isInvalid||a.updateValidation(ta(t.current))}});let u=ae(()=>{a.resetValidation()}),n=ae(d=>{var f;a.displayValidation.isInvalid||a.commitValidation();let m=t==null||(f=t.current)===null||f===void 0?void 0:f.form;if(!d.defaultPrevented&&t&&m&&aa(m)===t.current){var v;i?i():(v=t.current)===null||v===void 0||v.focus(),Xt("keyboard")}d.preventDefault()}),c=ae(()=>{a.commitValidation()});o.useEffect(()=>{let d=t==null?void 0:t.current;if(!d)return;let f=d.form;return d.addEventListener("invalid",n),d.addEventListener("change",c),f==null||f.addEventListener("reset",u),()=>{d.removeEventListener("invalid",n),d.removeEventListener("change",c),f==null||f.removeEventListener("reset",u)}},[t,n,c,u,r])}function ea(e){let a=e.validity;return{badInput:a.badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid}}function ta(e){return{isInvalid:!e.validity.valid,validationDetails:ea(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function aa(e){for(let a=0;a<e.elements.length;a++){let t=e.elements[a];if(!t.validity.valid)return t}return null}const Qe={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Ye={...Qe,customError:!0,valid:!1},H={isInvalid:!1,validationDetails:Qe,validationErrors:[]},ra=o.createContext({}),Te="__formValidationState"+Date.now();function na(e){if(e[Te]){let{realtimeValidation:a,displayValidation:t,updateValidation:r,resetValidation:i,commitValidation:u}=e[Te];return{realtimeValidation:a,displayValidation:t,updateValidation:r,resetValidation:i,commitValidation:u}}return la(e)}function la(e){let{isInvalid:a,validationState:t,name:r,value:i,builtinValidation:u,validate:n,validationBehavior:c="aria"}=e;t&&(a||(a=t==="invalid"));let d=a!==void 0?{isInvalid:a,validationErrors:[],validationDetails:Ye}:null,f=o.useMemo(()=>Oe(ia(n,i)),[n,i]);u!=null&&u.validationDetails.valid&&(u=null);let m=o.useContext(ra),v=o.useMemo(()=>r?Array.isArray(r)?r.flatMap(g=>ve(m[g])):ve(m[r]):[],[m,r]),[$,w]=o.useState(m),[P,W]=o.useState(!1);m!==$&&(w(m),W(!1));let l=o.useMemo(()=>Oe(P?[]:v),[P,v]),O=o.useRef(H),[k,M]=o.useState(H),E=o.useRef(H),C=()=>{if(!ie)return;j(!1);let g=f||u||O.current;pe(g,E.current)||(E.current=g,M(g))},[ie,j]=o.useState(!1);return o.useEffect(C),{realtimeValidation:d||l||f||u||H,displayValidation:c==="native"?d||l||k:d||l||f||u||k,updateValidation(g){c==="aria"&&!pe(k,g)?M(g):O.current=g},resetValidation(){let g=H;pe(g,E.current)||(E.current=g,M(g)),c==="native"&&j(!1),W(!0)},commitValidation(){c==="native"&&j(!0),W(!0)}}}function ve(e){return e?Array.isArray(e)?e:[e]:[]}function ia(e,a){if(typeof e=="function"){let t=e(a);if(t&&typeof t!="boolean")return ve(t)}return[]}function Oe(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:Ye}:null}function pe(e,a){return e===a?!0:e&&a&&e.isInvalid===a.isInvalid&&e.validationErrors.length===a.validationErrors.length&&e.validationErrors.every((t,r)=>t===a.validationErrors[r])&&Object.entries(e.validationDetails).every(([t,r])=>a.validationDetails[t]===r)}function sa(e){let{id:a,label:t,"aria-labelledby":r,"aria-label":i,labelElementType:u="label"}=e;a=Se(a);let n=Se(),c={};t?(r=r?`${n} ${r}`:n,c={id:n,htmlFor:u==="label"?a:void 0}):!r&&!i&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let d=kt({id:a,"aria-label":i,"aria-labelledby":r});return{labelProps:c,fieldProps:d}}function oa(e){let{description:a,errorMessage:t,isInvalid:r,validationState:i}=e,{labelProps:u,fieldProps:n}=sa(e),c=Ie([!!a,!!t,r,i]),d=Ie([!!a,!!t,r,i]);return n=z(n,{"aria-describedby":[c,d,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:u,fieldProps:n,descriptionProps:{id:c},errorMessageProps:{id:d}}}function da(e,a,t){let[r,i]=o.useState(e||a),u=o.useRef(e!==void 0),n=e!==void 0;o.useEffect(()=>{let f=u.current;f!==n&&console.warn(`WARN: A component changed from ${f?"controlled":"uncontrolled"} to ${n?"controlled":"uncontrolled"}.`),u.current=n},[n]);let c=n?e:r,d=o.useCallback((f,...m)=>{let v=($,...w)=>{t&&(Object.is(c,$)||t($,...w)),n||(c=$)};typeof f=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((w,...P)=>{let W=f(n?c:w,...P);return v(W,...m),n?w:W})):(n||i(f),v(f,...m))},[n,c,t]);return[c,d]}class ua{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(a,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=a}}function ca(e){let a=o.useRef({isFocused:!1,observer:null});He(()=>{const r=a.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=ae(r=>{e==null||e(r)});return o.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){a.current.isFocused=!0;let i=r.target,u=n=>{a.current.isFocused=!1,i.disabled&&t(new ua("blur",n)),a.current.observer&&(a.current.observer.disconnect(),a.current.observer=null)};i.addEventListener("focusout",u,{once:!0}),a.current.observer=new MutationObserver(()=>{if(a.current.isFocused&&i.disabled){var n;(n=a.current.observer)===null||n===void 0||n.disconnect();let c=i===document.activeElement?null:document.activeElement;i.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),i.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),a.current.observer.observe(i,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function fa(e){let{isDisabled:a,onFocus:t,onBlur:r,onFocusChange:i}=e;const u=o.useCallback(d=>{if(d.target===d.currentTarget)return r&&r(d),i&&i(!1),!0},[r,i]),n=ca(u),c=o.useCallback(d=>{const f=I(d.target);d.target===d.currentTarget&&f.activeElement===d.target&&(t&&t(d),i&&i(!0),n(d))},[i,t,n]);return{focusProps:{onFocus:!a&&(t||i||r)?c:void 0,onBlur:!a&&(r||i)?u:void 0}}}let U=null,pa=new Set,q=new Map,T=!1,me=!1;function ge(e,a){for(let t of pa)t(e,a)}function ba(e){return!(e.metaKey||!Ne()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ne(e){T=!0,ba(e)&&(U="keyboard",ge("keyboard",e))}function x(e){U="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(T=!0,ge("pointer",e))}function Je(e){je(e)&&(T=!0,U="virtual")}function Xe(e){e.target===window||e.target===document||(!T&&!me&&(U="virtual",ge("virtual",e)),T=!1,me=!1)}function Ze(){T=!1,me=!0}function Re(e){if(typeof window>"u"||q.get(F(e)))return;const a=F(e),t=I(e);let r=a.HTMLElement.prototype.focus;a.HTMLElement.prototype.focus=function(){T=!0,r.apply(this,arguments)},t.addEventListener("keydown",ne,!0),t.addEventListener("keyup",ne,!0),t.addEventListener("click",Je,!0),a.addEventListener("focus",Xe,!0),a.addEventListener("blur",Ze,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",x,!0),t.addEventListener("pointermove",x,!0),t.addEventListener("pointerup",x,!0)):(t.addEventListener("mousedown",x,!0),t.addEventListener("mousemove",x,!0),t.addEventListener("mouseup",x,!0)),a.addEventListener("beforeunload",()=>{et(e)},{once:!0}),q.set(a,{focus:r})}const et=(e,a)=>{const t=F(e),r=I(e);a&&r.removeEventListener("DOMContentLoaded",a),q.has(t)&&(t.HTMLElement.prototype.focus=q.get(t).focus,r.removeEventListener("keydown",ne,!0),r.removeEventListener("keyup",ne,!0),r.removeEventListener("click",Je,!0),t.removeEventListener("focus",Xe,!0),t.removeEventListener("blur",Ze,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",x,!0),r.removeEventListener("pointermove",x,!0),r.removeEventListener("pointerup",x,!0)):(r.removeEventListener("mousedown",x,!0),r.removeEventListener("mousemove",x,!0),r.removeEventListener("mouseup",x,!0)),q.delete(t))};function va(e){const a=I(e);let t;return a.readyState!=="loading"?Re(e):(t=()=>{Re(e)},a.addEventListener("DOMContentLoaded",t)),()=>et(e,t)}typeof document<"u"&&va();function ma(){return U}function Ae(e){if(!e)return;let a=!0;return t=>{let r={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){a=!1}};e(r),a&&t.stopPropagation()}}function ga(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Ae(e.onKeyDown),onKeyUp:Ae(e.onKeyUp)}}}function ha(e){const a=I(e);if(ma()==="virtual"){let t=a.activeElement;St(()=>{a.activeElement===t&&e.isConnected&&De(e)})}else De(e)}let $a=Dt.createContext(null);function ya(e){let a=o.useContext($a)||{};It(a,e);let{ref:t,...r}=a;return r}function xa(e,a){let{focusProps:t}=fa(e),{keyboardProps:r}=ga(e),i=z(t,r),u=ya(a),n=e.isDisabled?{}:u,c=o.useRef(e.autoFocus);return o.useEffect(()=>{c.current&&a.current&&ha(a.current),c.current=!1},[a]),{focusableProps:z({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},n)}}function wa(e,a){let{inputElementType:t="input",isDisabled:r=!1,isRequired:i=!1,isReadOnly:u=!1,type:n="text",validationBehavior:c="aria"}=e,[d,f]=Kt(e.value,e.defaultValue||"",e.onChange),{focusableProps:m}=xa(e,a),v=na({...e,value:d}),{isInvalid:$,validationErrors:w,validationDetails:P}=v.displayValidation,{labelProps:W,fieldProps:l,descriptionProps:O,errorMessageProps:k}=oa({...e,isInvalid:$,errorMessage:e.errorMessage||w}),M=zt(e,{labelable:!0});const E={type:n,pattern:e.pattern};return qt(a,d,f),Zt(e,v,a),o.useEffect(()=>{if(a.current instanceof F(a.current).HTMLTextAreaElement){let C=a.current;Object.defineProperty(C,"defaultValue",{get:()=>C.value,set:()=>{},configurable:!0})}},[a]),{labelProps:W,inputProps:z(M,t==="input"&&E,{disabled:r,readOnly:u,required:i&&c==="native","aria-required":i&&c==="aria"||void 0,"aria-invalid":$||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:d,onChange:C=>f(C.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...m,...l}),descriptionProps:O,errorMessageProps:k,isInvalid:$,validationErrors:w,validationDetails:P}}function La(e){var a,t,r,i;const u=Ft(),[n,c]=Bt(e,Fe.variantKeys),{ref:d,as:f,type:m,label:v,baseRef:$,wrapperRef:w,description:P,className:W,classNames:l,autoFocus:O,startContent:k,endContent:M,onClear:E,onChange:C,validationState:ie,validationBehavior:j=(a=u==null?void 0:u.validationBehavior)!=null?a:"aria",innerWrapperRef:he,onValueChange:se=()=>{},...g}=n,tt=o.useCallback(s=>{se(s??"")},[se]),[oe,at]=o.useState(!1),rt=f||"div",$e=(r=(t=e.disableAnimation)!=null?t:u==null?void 0:u.disableAnimation)!=null?r:!1,h=te(d),nt=te($),lt=te(w),it=te(he),[R,G]=da(n.value,(i=n.defaultValue)!=null?i:"",tt),st=["date","time","month","week","range"].includes(m),S=!Tt(R)||st,Q=S||oe,ye=_(l==null?void 0:l.base,W,S?"is-filled":""),ot=e.isMultiline,dt=o.useCallback(()=>{var s;G(""),E==null||E(),(s=h.current)==null||s.focus()},[G,E]);Ut(()=>{h.current&&G(h.current.value)},[h.current]);const{labelProps:xe,inputProps:Y,isInvalid:ut,validationErrors:de,validationDetails:ct,descriptionProps:ft,errorMessageProps:we}=wa({...e,validationBehavior:j,autoCapitalize:e.autoCapitalize,value:R,"aria-label":Gt(e["aria-label"],e.label,e.placeholder),inputElementType:ot?"textarea":"input",onChange:G},h),{isFocusVisible:J,isFocused:X,focusProps:Ee}=ze({autoFocus:O,isTextInput:!0}),{isHovered:Z,hoverProps:pt}=Ot({isDisabled:!!(e!=null&&e.isDisabled)}),{focusProps:Pe,isFocusVisible:We}=ze(),{focusWithinProps:Le}=Rt({onFocusWithinChange:at}),{pressProps:Me}=At({isDisabled:!!(e!=null&&e.isDisabled),onPress:dt}),A=ie==="invalid"||e.isInvalid||ut,L=o.useMemo(()=>{var s;return(!e.labelPlacement||e.labelPlacement==="inside")&&!v?"outside":(s=e.labelPlacement)!=null?s:"inside"},[e.labelPlacement,v]),ue=typeof n.errorMessage=="function"?n.errorMessage({isInvalid:A,validationErrors:de,validationDetails:ct}):n.errorMessage||(de==null?void 0:de.join(" ")),ce=!!E||e.isClearable,Ce=!!v||!!P||!!ue,D=!!n.placeholder,Ve=!!v,fe=!!P||!!ue,_e=L==="outside"||L==="outside-left",bt=L==="inside",ee=h.current?(!h.current.value||h.current.value===""||!R||R==="")&&D:!1,vt=L==="outside-left",V=!!k,mt=_e?L==="outside-left"||D||L==="outside"&&V:!1,gt=L==="outside"&&!D&&!V,b=o.useMemo(()=>Fe({...c,isInvalid:A,labelPlacement:L,isClearable:ce,disableAnimation:$e}),[jt(c),A,L,ce,V,$e]),ht=o.useCallback((s={})=>({ref:nt,className:b.base({class:ye}),"data-slot":"base","data-filled":p(S||D||V||ee),"data-filled-within":p(Q||D||V||ee),"data-focus-within":p(oe),"data-focus-visible":p(J),"data-readonly":p(e.isReadOnly),"data-focus":p(X),"data-hover":p(Z),"data-required":p(e.isRequired),"data-invalid":p(A),"data-disabled":p(e.isDisabled),"data-has-elements":p(Ce),"data-has-helper":p(fe),"data-has-label":p(Ve),"data-has-value":p(!ee),...Le,...s}),[b,ye,S,X,Z,A,fe,Ve,Ce,ee,V,oe,J,Q,D,Le,e.isReadOnly,e.isRequired,e.isDisabled]),$t=o.useCallback((s={})=>({"data-slot":"label",className:b.label({class:l==null?void 0:l.label}),...xe,...s}),[b,xe,l==null?void 0:l.label]),yt=o.useCallback((s={})=>({ref:h,"data-slot":"input","data-filled":p(S),"data-filled-within":p(Q),"data-has-start-content":p(V),"data-has-end-content":p(!!M),className:b.input({class:_(l==null?void 0:l.input,S?"is-filled":"")}),...z(Ee,Y,Nt(g,{enabled:!0,labelable:!0,omitEventNames:new Set(Object.keys(Y))}),s),"aria-readonly":p(e.isReadOnly),onChange:Ht(Y.onChange,C)}),[b,R,Ee,Y,g,S,Q,V,M,l==null?void 0:l.input,e.isReadOnly,e.isRequired,C]),xt=o.useCallback((s={})=>({ref:lt,"data-slot":"input-wrapper","data-hover":p(Z),"data-focus-visible":p(J),"data-focus":p(X),className:b.inputWrapper({class:_(l==null?void 0:l.inputWrapper,S?"is-filled":"")}),...z(s,pt),onClick:N=>{h.current&&N.currentTarget===N.target&&h.current.focus()},style:{cursor:"text",...s.style}}),[b,Z,J,X,R,l==null?void 0:l.inputWrapper]),wt=o.useCallback((s={})=>({...s,ref:it,"data-slot":"inner-wrapper",onClick:N=>{h.current&&N.currentTarget===N.target&&h.current.focus()},className:b.innerWrapper({class:_(l==null?void 0:l.innerWrapper,s==null?void 0:s.className)})}),[b,l==null?void 0:l.innerWrapper]),Et=o.useCallback((s={})=>({...s,"data-slot":"main-wrapper",className:b.mainWrapper({class:_(l==null?void 0:l.mainWrapper,s==null?void 0:s.className)})}),[b,l==null?void 0:l.mainWrapper]),Pt=o.useCallback((s={})=>({...s,"data-slot":"helper-wrapper",className:b.helperWrapper({class:_(l==null?void 0:l.helperWrapper,s==null?void 0:s.className)})}),[b,l==null?void 0:l.helperWrapper]),Wt=o.useCallback((s={})=>({...s,...ft,"data-slot":"description",className:b.description({class:_(l==null?void 0:l.description,s==null?void 0:s.className)})}),[b,l==null?void 0:l.description]),Lt=o.useCallback((s={})=>({...s,...we,"data-slot":"error-message",className:b.errorMessage({class:_(l==null?void 0:l.errorMessage,s==null?void 0:s.className)})}),[b,we,l==null?void 0:l.errorMessage]),Mt=o.useCallback((s={})=>({...s,role:"button",tabIndex:0,"data-slot":"clear-button","data-focus-visible":p(We),className:b.clearButton({class:_(l==null?void 0:l.clearButton,s==null?void 0:s.className)}),...z(Me,Pe)}),[b,We,Me,Pe,l==null?void 0:l.clearButton]);return{Component:rt,classNames:l,domRef:h,label:v,description:P,startContent:k,endContent:M,labelPlacement:L,isClearable:ce,hasHelper:fe,hasStartContent:V,isLabelOutside:mt,isOutsideLeft:vt,isLabelOutsideAsPlaceholder:gt,shouldLabelBeOutside:_e,shouldLabelBeInside:bt,hasPlaceholder:D,isInvalid:A,errorMessage:ue,getBaseProps:ht,getLabelProps:$t,getInputProps:yt,getMainWrapperProps:Et,getInputWrapperProps:xt,getInnerWrapperProps:wt,getHelperWrapperProps:Pt,getDescriptionProps:Wt,getErrorMessageProps:Lt,getClearButtonProps:Mt}}export{oa as $,Wa as C,Zt as a,na as b,sa as c,H as d,Te as e,La as u};