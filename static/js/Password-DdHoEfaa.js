import{t as te,g as Ce,r as n,n as ye,l as i,b4 as we,u as $e,b as Re,a as Pe,$ as ke,c as q,f as m,e as ae,h as Ie,k as je,x as Ve}from"./index-DRvFTYPe.js";import{$ as Se,a as oe}from"./index-BMdAIpgh.js";import{a as De}from"./chunk-CAFRINWI-CcU5yOMx.js";import{b as ne,c as _e,d as Be,e as Oe}from"./chunk-LY2CD73K-P2tgL981.js";import{i as Ee}from"./chunk-TC4QW7OA-BlWzeEIC.js";var Ne=te({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...Ce],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});te({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});var Me={},re={};function ie(e,a,...t){var o;const d=`[Next UI]${a?` [${a}]`:" "}: ${e}`;if(!(typeof console>"u")&&!re[d]&&(re[d]=!0,((o=process==null?void 0:Me)==null?void 0:o.NODE_ENV)!=="production"))return console.warn(d,t)}function se(e,a,t){let o=ne({...e,value:a.isSelected}),{isInvalid:l,validationErrors:d,validationDetails:h}=o.displayValidation,{labelProps:r,inputProps:u,isSelected:c,isPressed:x,isDisabled:y,isReadOnly:f}=Se({...e,isInvalid:l},a,t);_e(e,o,t);let{isIndeterminate:j,isRequired:b,validationBehavior:v="aria"}=e;return n.useEffect(()=>{t.current&&(t.current.indeterminate=!!j)}),{labelProps:r,inputProps:{...u,checked:c,"aria-required":b&&v==="aria"||void 0,required:b&&v==="native"},isSelected:c,isPressed:x,isDisabled:y,isReadOnly:f,isInvalid:l,validationErrors:d,validationDetails:h}}const qe=new WeakMap;function Le(e,a,t){const o=oe({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(w){w?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(w)}});let{name:l,descriptionId:d,errorMessageId:h,validationBehavior:r}=qe.get(a);var u;r=(u=e.validationBehavior)!==null&&u!==void 0?u:r;let{realtimeValidation:c}=ne({...e,value:o.isSelected,name:void 0,validationBehavior:"aria"}),x=n.useRef(Be),y=()=>{a.setInvalid(e.value,c.isInvalid?c:x.current)};n.useEffect(y);let f=a.realtimeValidation.isInvalid?a.realtimeValidation:c,j=r==="native"?a.displayValidation:f;var b;let v=se({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||l,isRequired:(b=e.isRequired)!==null&&b!==void 0?b:a.isRequired,validationBehavior:r,[Oe]:{realtimeValidation:f,displayValidation:j,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(w){x.current=w,y()}}},o,t);return{...v,inputProps:{...v.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?h:null,d].filter(Boolean).join(" ")||void 0}}}var[Xe,Ae]=ye({name:"CheckboxGroupContext",strict:!1});function Ge(e){const{isSelected:a,disableAnimation:t,...o}=e;return i.jsx("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...o,children:i.jsx("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!t&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function Te(e){const{isSelected:a,disableAnimation:t,...o}=e;return i.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...o,children:i.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Ze(e){const{isIndeterminate:a,...t}=e,o=a?Te:Ge;return i.jsx(o,{...t})}function Fe(e={}){var a,t,o,l,d,h;const r=Ae(),u=!!r,{as:c,ref:x,value:y="",children:f,icon:j,name:b,isRequired:v=!1,isReadOnly:w=!1,autoFocus:L=!1,isSelected:D,validationState:A,size:G=(a=r==null?void 0:r.size)!=null?a:"md",color:T=(t=r==null?void 0:r.color)!=null?t:"primary",radius:Z=r==null?void 0:r.radius,lineThrough:F=(o=r==null?void 0:r.lineThrough)!=null?o:!1,isDisabled:z=(l=r==null?void 0:r.isDisabled)!=null?l:!1,disableAnimation:V=(d=r==null?void 0:r.disableAnimation)!=null?d:!1,isInvalid:p=A?A==="invalid":(h=r==null?void 0:r.isInvalid)!=null?h:!1,isIndeterminate:$=!1,defaultSelected:_,classNames:s,onChange:W,className:de,onValueChange:U,...k}=e;r&&we&&(D&&ie("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),_&&ie("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const ue=c||"label",S=n.useRef(null),ce=$e(x,S),B=n.useId(),O=n.useMemo(()=>({name:b,value:y,children:f,autoFocus:L,defaultSelected:_,isIndeterminate:$,isRequired:v,isInvalid:p,isSelected:D,isDisabled:z,isReadOnly:w,"aria-label":De(k["aria-label"],f),"aria-labelledby":k["aria-labelledby"]||B,onChange:U}),[y,b,B,f,L,p,$,z,w,D,_,k["aria-label"],k["aria-labelledby"],U]),{inputProps:g,isSelected:I,isDisabled:R,isReadOnly:fe,isPressed:be}=u?Le({...O,isInvalid:p},r.groupState,S):se(O,oe(O),S),H=R||fe,[pe,K]=n.useState(!1),{pressProps:J}=Re({isDisabled:H,onPressStart(P){P.pointerType!=="keyboard"&&K(!0)},onPressEnd(P){P.pointerType!=="keyboard"&&K(!1)}}),Q=H?!1:pe||be;v&&(g.required=!0);const{hoverProps:X,isHovered:E}=Pe({isDisabled:g.disabled}),{focusProps:Y,isFocused:N,isFocusVisible:M}=ke({autoFocus:g.autoFocus}),C=n.useMemo(()=>Ne({color:T,size:G,radius:Z,isInvalid:p,lineThrough:F,isDisabled:R,disableAnimation:V}),[T,G,Z,p,F,R,V]),ee=q(s==null?void 0:s.base,de),me=n.useCallback(()=>({ref:ce,className:C.base({class:ee}),"data-disabled":m(R),"data-selected":m(I||$),"data-invalid":m(p),"data-hover":m(E),"data-focus":m(N),"data-pressed":m(Q),"data-readonly":m(g.readOnly),"data-focus-visible":m(M),"data-indeterminate":m($),...ae(X,J,k)}),[C,ee,R,I,$,p,E,N,Q,g.readOnly,M,X,J,k]),he=n.useCallback((P={})=>({...P,"aria-hidden":!0,className:q(C.wrapper({class:q(s==null?void 0:s.wrapper,P==null?void 0:P.className)}))}),[C,s==null?void 0:s.wrapper]),xe=n.useCallback(()=>({ref:S,...ae(g,Y),onChange:Ie(g.onChange,W)}),[g,Y,W]),ve=n.useCallback(()=>({id:B,className:C.label({class:s==null?void 0:s.label})}),[C,s==null?void 0:s.label,R,I,p]),ge=n.useCallback(()=>({isSelected:I,isIndeterminate:!!$,disableAnimation:!!V,className:C.icon({class:s==null?void 0:s.icon})}),[C,s==null?void 0:s.icon,I,$,V]);return{Component:ue,icon:j,children:f,isSelected:I,isDisabled:R,isInvalid:p,isFocused:N,isHovered:E,isFocusVisible:M,getBaseProps:me,getWrapperProps:he,getInputProps:xe,getLabelProps:ve,getIconProps:ge}}var le=je((e,a)=>{const{Component:t,children:o,icon:l=i.jsx(Ze,{}),getBaseProps:d,getWrapperProps:h,getInputProps:r,getIconProps:u,getLabelProps:c}=Fe({...e,ref:a}),x=typeof l=="function"?l(u()):n.cloneElement(l,u());return i.jsxs(t,{...d(),children:[i.jsx(Ve,{children:i.jsx("input",{...r()})}),i.jsx("span",{...h(),children:x}),o&&i.jsx("span",{...c(),children:o})]})});le.displayName="NextUI.Checkbox";var Ye=le;const ze=e=>i.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[i.jsx("path",{d:"M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z",fill:"currentColor"}),i.jsx("path",{d:"M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z",fill:"currentColor"}),i.jsx("path",{d:"M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z",fill:"currentColor"}),i.jsx("path",{d:"M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z",fill:"currentColor"}),i.jsx("path",{d:"M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z",fill:"currentColor"})]}),We=e=>i.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[i.jsx("path",{d:"M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z",fill:"currentColor"}),i.jsx("path",{d:"M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z",fill:"currentColor"})]}),ea=e=>{const[a,t]=n.useState(!1);return n.useEffect(()=>{e.value||t(!1)},[e.value]),i.jsx(Ee,{...e,endContent:i.jsx("button",{disabled:!e.value,className:"focus:outline-none",type:"button",onClick:()=>t(!a),children:a?i.jsx(ze,{className:"text-2xl text-default-400 pointer-events-none"}):i.jsx(We,{className:"text-2xl text-default-400 pointer-events-none"})}),type:a?"text":"password"})};export{ea as P,Ye as c};
