import{t as J,g as _e,d as de,m as ce,r as m,u as Ae,$ as Q,a as ue,b as Te,c as w,e as $,f as j,h as me,i as q,j as ze,k as R,l as e,n as De,A as Fe,o as fe,p as Be,q as qe,s as He,v as We,w as Ue,x as Ve,y as Ee,z as Le,B as Ze,C as Ke,D as Ge,E as Xe,F as Ye,G as Je,H as Qe,I as et}from"./index-CP6YXhxA.js";import{$ as tt,a as pe,L as se,F as st}from"./index-Hkpbh-Vr.js";import{A as at,D as nt}from"./index-B426X8vB.js";import{a as rt,p as lt,d as ot,b as it,c as dt,m as ae}from"./chunk-L6QJ42W6-DohJcDIq.js";import{R as ct}from"./Combination-DKfVhoKJ.js";import{T as ne}from"./import-ch58Z01W.js";import{l as I}from"./chunk-MPX6TMFQ-DgX7tMJz.js";import"./chunk-OFGZKCFR-DMxuWMPy.js";import"./index-_JI0cjyd.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./chunk-44JHHBS2-BxgHoykE.js";var re=J({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",..._e],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 text-current",endContent:"z-0 absolute right-1.5 text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]}),ut=J({slots:{base:["inline-flex items-center justify-center gap-2 rounded-small outline-none",...de],wrapper:"inline-flex flex-col items-start",name:"text-small text-inherit",description:"text-tiny text-foreground-400"}}),le=J({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...de],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}});function mt(t,n,i){let{labelProps:d,inputProps:s,isSelected:r,isPressed:a,isDisabled:l,isReadOnly:c}=tt(t,n,i);return{labelProps:d,inputProps:{...s,role:"switch",checked:r},isSelected:r,isPressed:a,isDisabled:l,isReadOnly:c}}function ft(t={}){const[n,i]=ce(t,re.variantKeys),{ref:d,as:s,name:r,value:a="",isReadOnly:l=!1,autoFocus:c=!1,startContent:h,endContent:g,defaultSelected:p,isSelected:b,children:v,thumbIcon:N,className:S,classNames:o,onChange:y,onValueChange:C,...x}=n,O=s||"label",M=m.useRef(null),_=Ae(d,M),A=m.useId(),T=m.useMemo(()=>{const u=x["aria-label"]||typeof v=="string"?v:void 0;return{name:r,value:a,children:v,autoFocus:c,defaultSelected:p,isSelected:b,isDisabled:!!t.isDisabled,isReadOnly:l,"aria-label":u,"aria-labelledby":x["aria-labelledby"]||A,onChange:C}},[a,r,A,v,c,l,b,p,t.isDisabled,x["aria-label"],x["aria-labelledby"],C]),z=pe(T),{inputProps:k,isPressed:D,isReadOnly:H}=mt(T,z,M),{focusProps:G,isFocused:L,isFocusVisible:Z}=Q({autoFocus:k.autoFocus}),{hoverProps:f,isHovered:F}=ue({isDisabled:k.disabled}),U=T.isDisabled||H,[K,ee]=m.useState(!1),{pressProps:Ne}=Te({isDisabled:U,onPressStart(u){u.pointerType!=="keyboard"&&ee(!0)},onPressEnd(u){u.pointerType!=="keyboard"&&ee(!1)}}),te=U?!1:K||D,B=k.checked,X=k.disabled,P=m.useMemo(()=>re({...i}),[...Object.values(i)]),Pe=w(o==null?void 0:o.base,S),Ce=u=>({...$(f,Ne,x,u),ref:_,className:P.base({class:w(Pe,u==null?void 0:u.className)}),"data-disabled":j(X),"data-selected":j(B),"data-readonly":j(H),"data-focus":j(L),"data-focus-visible":j(Z),"data-hover":j(F),"data-pressed":j(te)}),ke=m.useCallback((u={})=>({...u,"aria-hidden":!0,className:w(P.wrapper({class:w(o==null?void 0:o.wrapper,u==null?void 0:u.className)}))}),[P,o==null?void 0:o.wrapper]),Se=(u={})=>({...$(k,G,u),ref:M,id:k.id,onChange:me(y,k.onChange)}),Oe=m.useCallback((u={})=>({...u,className:P.thumb({class:w(o==null?void 0:o.thumb,u==null?void 0:u.className)})}),[P,o==null?void 0:o.thumb]),$e=m.useCallback((u={})=>({...u,id:A,className:P.label({class:w(o==null?void 0:o.label,u==null?void 0:u.className)})}),[P,o==null?void 0:o.label,X,B]),Me=m.useCallback((u={includeStateProps:!1})=>$({width:"1em",height:"1em",className:P.thumbIcon({class:w(o==null?void 0:o.thumbIcon)})},u.includeStateProps?{isSelected:B}:{}),[P,o==null?void 0:o.thumbIcon,B]),Ie=m.useCallback((u={})=>({width:"1em",height:"1em",...u,className:P.startContent({class:w(o==null?void 0:o.startContent,u==null?void 0:u.className)})}),[P,o==null?void 0:o.startContent,B]),Re=m.useCallback((u={})=>({width:"1em",height:"1em",...u,className:P.endContent({class:w(o==null?void 0:o.endContent,u==null?void 0:u.className)})}),[P,o==null?void 0:o.endContent,B]);return{Component:O,slots:P,classNames:o,domRef:_,children:v,thumbIcon:N,startContent:h,endContent:g,isHovered:F,isSelected:B,isPressed:te,isFocused:L,isFocusVisible:Z,isDisabled:X,getBaseProps:Ce,getWrapperProps:ke,getInputProps:Se,getLabelProps:$e,getThumbProps:Oe,getThumbIconProps:Me,getStartContentProps:Ie,getEndContentProps:Re}}function pt(t){const{as:n,ref:i,name:d,description:s,className:r,classNames:a,isFocusable:l=!1,avatarProps:c={},...h}=t,g={isFocusable:!1,name:typeof d=="string"?d:void 0,...c},p=n||"div",b=typeof p=="string",v=q(i),{isFocusVisible:N,isFocused:S,focusProps:o}=Q({}),y=m.useMemo(()=>l||n==="button",[l,n]),C=m.useMemo(()=>ut(),[]),x=w(a==null?void 0:a.base,r),O=m.useCallback(()=>({ref:v,tabIndex:y?0:-1,"data-focus-visible":j(N),"data-focus":j(S),className:C.base({class:x}),...$(ze(h,{enabled:b}),y?o:{})}),[y,C,x,o,h]);return{Component:p,className:r,slots:C,name:d,description:s,classNames:a,baseStyles:x,avatarProps:g,getUserProps:O}}var he=R((t,n)=>{const{Component:i,name:d,slots:s,classNames:r,description:a,avatarProps:l,getUserProps:c}=pt({...t,ref:n});return e.jsxs(i,{...c(),children:[e.jsx(rt,{...l}),e.jsxs("div",{className:s.wrapper({class:r==null?void 0:r.wrapper}),children:[e.jsx("span",{className:s.name({class:r==null?void 0:r.name}),children:d}),e.jsx("span",{className:s.description({class:r==null?void 0:r.description}),children:a})]})]})});he.displayName="NextUI.User";var ht=he,[bt,E]=De({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),xt={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},be=R((t,n)=>{var i,d;const{className:s,children:r,portalContainer:a,motionProps:l,style:c,...h}=t,g=q(n),{slots:p,isMenuOpen:b,height:v,disableAnimation:N,classNames:S}=E(),o=w(S==null?void 0:S.menu,s),y=m.useCallback(({children:x})=>e.jsx(ct,{forwardProps:!0,enabled:b,removeScrollBar:!1,children:x}),[b]),C=N?e.jsx(y,{children:e.jsx("ul",{ref:g,className:(i=p.menu)==null?void 0:i.call(p,{class:o}),"data-open":j(b),style:{"--navbar-height":v},...h,children:r})}):e.jsx(Fe,{mode:"wait",children:b?e.jsx(y,{children:e.jsx(fe.ul,{ref:g,layoutScroll:!0,animate:"enter",className:(d=p.menu)==null?void 0:d.call(p,{class:o}),"data-open":j(b),exit:"exit",initial:"exit",style:{"--navbar-height":v,...c},variants:xt,...$(l,h),children:r})}):null});return e.jsx(Be,{portalContainer:a,children:C})});be.displayName="NextUI.NavbarMenu";var xe=be,gt={visible:{y:0,transition:{ease:ne.easeOut}},hidden:{y:"-100%",transition:{ease:ne.easeIn}}},vt=typeof window<"u";function oe(t){return vt?t?{x:t.scrollLeft,y:t.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var jt=t=>{const{elementRef:n,delay:i=30,callback:d,isEnabled:s}=t,r=m.useRef(s?oe(n==null?void 0:n.current):{x:0,y:0});let a=null;const l=()=>{const c=oe(n==null?void 0:n.current);typeof d=="function"&&d({prevPos:r.current,currPos:c}),r.current=c,a=null};return m.useEffect(()=>{if(!s)return;const c=()=>{i?a===null&&(a=setTimeout(l,i)):l()},h=(n==null?void 0:n.current)||window;return h.addEventListener("scroll",c),()=>h.removeEventListener("scroll",c)},[n==null?void 0:n.current,i,s]),r.current};function wt(t){var n;const[i,d]=ce(t,le.variantKeys),{ref:s,as:r,parentRef:a,height:l="4rem",shouldHideOnScroll:c=!1,disableScrollHandler:h=!1,onScrollPositionChange:g,isMenuOpen:p,isMenuDefaultOpen:b,onMenuOpenChange:v=()=>{},motionProps:N,className:S,classNames:o,...y}=i,C=r||"nav",x=q(s),O=m.useRef(0),M=m.useRef(0),[_,A]=m.useState(!1),T=m.useCallback(f=>{v(f||!1)},[v]),[z,k]=qe(p,b,T),D=()=>{if(x.current){const f=x.current.offsetWidth;f!==O.current&&(O.current=f)}};He({ref:x,onResize:()=>{var f;((f=x.current)==null?void 0:f.offsetWidth)!==O.current&&(D(),k(!1))}}),m.useEffect(()=>{var f;D(),M.current=((f=x.current)==null?void 0:f.offsetHeight)||0},[]);const H=m.useMemo(()=>le({...d,hideOnScroll:c}),[...Object.values(d),c]),G=w(o==null?void 0:o.base,S);jt({elementRef:a,isEnabled:c||!h,callback:({prevPos:f,currPos:F})=>{g==null||g(F.y),c&&A(U=>{const K=F.y>f.y&&F.y>M.current;return K!==U?K:U})}});const L=(f={})=>({...$(y,f),"data-hidden":j(_),"data-menu-open":j(z),ref:x,className:H.base({class:w(G,f==null?void 0:f.className)}),style:{"--navbar-height":l,...y==null?void 0:y.style,...f==null?void 0:f.style}}),Z=(f={})=>({...f,"data-menu-open":j(z),className:H.wrapper({class:w(o==null?void 0:o.wrapper,f==null?void 0:f.className)})});return{Component:C,slots:H,domRef:x,height:l,isHidden:_,disableAnimation:(n=t.disableAnimation)!=null?n:!1,shouldHideOnScroll:c,isMenuOpen:z,classNames:o,setIsMenuOpen:k,motionProps:N,getBaseProps:L,getWrapperProps:Z}}var ge=R((t,n)=>{const{children:i,...d}=t,s=wt({...d,ref:n}),r=s.Component,[a,l]=lt(i,xe),c=e.jsxs(e.Fragment,{children:[e.jsx("header",{...s.getWrapperProps(),children:a}),l]});return e.jsx(bt,{value:s,children:s.shouldHideOnScroll?e.jsx(fe.nav,{animate:s.isHidden?"hidden":"visible",initial:!1,variants:gt,...$(s.getBaseProps(),s.motionProps),children:c}):e.jsx(r,{...s.getBaseProps(),children:c})})});ge.displayName="NextUI.Navbar";var yt=ge,ve=R((t,n)=>{var i;const{as:d,className:s,children:r,...a}=t,l=d||"div",c=q(n),{slots:h,classNames:g}=E(),p=w(g==null?void 0:g.brand,s);return e.jsx(l,{ref:c,className:(i=h.brand)==null?void 0:i.call(h,{class:p}),...a,children:r})});ve.displayName="NextUI.NavbarBrand";var ie=ve,je=R((t,n)=>{var i;const{as:d,className:s,children:r,justify:a="start",...l}=t,c=d||"ul",h=q(n),{slots:g,classNames:p}=E(),b=w(p==null?void 0:p.content,s);return e.jsx(c,{ref:h,className:(i=g.content)==null?void 0:i.call(g,{class:b}),"data-justify":a,...l,children:r})});je.displayName="NextUI.NavbarContent";var V=je,we=R((t,n)=>{var i;const{as:d,className:s,children:r,isActive:a,...l}=t,c=d||"li",h=q(n),{slots:g,classNames:p}=E(),b=w(p==null?void 0:p.item,s);return e.jsx(c,{ref:h,className:(i=g.item)==null?void 0:i.call(g,{class:b}),"data-active":j(a),...l,children:r})});we.displayName="NextUI.NavbarItem";var W=we;function Nt(t,n,i){const{isSelected:d}=n,{isPressed:s,buttonProps:r}=We({...t,onPress:me(n.toggle,t.onPress)},i);return{isPressed:s,buttonProps:$(r,{"aria-pressed":d})}}var ye=R((t,n)=>{var i;const{as:d,icon:s,className:r,onChange:a,autoFocus:l,srOnlyText:c,...h}=t,g=d||"button",p=q(n),{slots:b,classNames:v,isMenuOpen:N,setIsMenuOpen:S}=E(),y=pe({...h,isSelected:N,onChange:D=>{a==null||a(D),S(D)}}),{buttonProps:C,isPressed:x}=Nt(t,y,p),{isFocusVisible:O,focusProps:M}=Q({autoFocus:l}),{isHovered:_,hoverProps:A}=ue({}),T=w(v==null?void 0:v.toggle,r),z=m.useMemo(()=>typeof s=="function"?s(N??!1):s||e.jsx("span",{className:b.toggleIcon({class:v==null?void 0:v.toggleIcon})}),[s,N,b.toggleIcon,v==null?void 0:v.toggleIcon]),k=m.useMemo(()=>c||(y.isSelected?"close navigation menu":"open navigation menu"),[c,N]);return e.jsxs(g,{ref:p,className:(i=b.toggle)==null?void 0:i.call(b,{class:T}),"data-focus-visible":j(O),"data-hover":j(_),"data-open":j(N),"data-pressed":j(x),...$(C,M,A,h),children:[e.jsx("span",{className:b.srOnly(),children:k}),z]})});ye.displayName="NextUI.NavbarMenuToggle";var Pt=ye;const Ct=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...t,children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M19 12a7 7 0 11-7-7 7 7 0 017 7z"}),e.jsx("path",{d:"M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"})]})}),kt=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...t,children:e.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),Y=t=>{const{mode:n,toggle:i}=Ue(),{Component:d,slots:s,getBaseProps:r,getInputProps:a,getWrapperProps:l}=ft(t);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(d,{...r(),children:[e.jsx(Ve,{children:e.jsx("input",{...a()})}),e.jsx("div",{onClick:i,...l(),className:s.wrapper({class:["w-8 h-8","flex items-center justify-center","rounded-lg bg-default-100 hover:bg-default-200"]}),children:n==="dark"?e.jsx(Ct,{}):e.jsx(kt,{})})]})})},St=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"})}),Ot=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"})}),$t=[{name:"Chalkboard",link:"/chalkboard"},{name:"Document",link:"/docs"},{name:"About",link:"/about"}],Mt=[{name:"Chalkboard",link:"/chalkboard"},{name:"Fake Drug Dealers",link:"/fake-drug-dealers"},{name:"Document",link:"/docs"},{name:"About",link:"/about"},{name:"Sign in",link:"/login",hideOnAuthed:!0},{name:"Sign up",link:"/signup",hideOnAuthed:!0},{name:"Profile",link:"/user",hideOnAuthed:!1},{name:"Logout",link:"/logout",hideOnAuthed:!1}],It=()=>{const[t,n]=m.useState(-1),[i,d]=m.useState(!1),{profile:s}=Ee(),r=R((a,l)=>s?e.jsx(ht,{...a,as:"button",className:"font-medium",name:`${s.firstname} ${s.lastname}`,description:s.username?`@${s.username}`:"",avatarProps:{src:at({src:s.id.toString(),backtrace:nt})},ref:l}):null);return e.jsxs(yt,{shouldHideOnScroll:!0,isMenuOpen:i,onMenuOpenChange:d,children:[e.jsx(V,{className:"sm:hidden",justify:"start",children:e.jsx(Pt,{"aria-label":i?"Close menu":"Open menu"})}),e.jsx(V,{className:"sm:hidden ",justify:"center",children:e.jsx(ie,{children:e.jsx(I,{href:"/",isDisabled:i,onClick:()=>n(-1),children:e.jsx(se,{width:150,className:"justify-end",loading:"lazy"})})})}),e.jsxs(xe,{children:[Mt.map((a,l)=>a.hideOnAuthed===!0&&s!==void 0||a.hideOnAuthed===!1&&s===void 0?null:e.jsx(W,{isActive:t===l,children:a.children?a.children:e.jsx(I,{color:a.color?a.color:t===l?"primary":"foreground",href:a.link,onClick:()=>{d(!1),n(l)},className:"w-full",size:"lg",children:a.name})},l)),e.jsxs(W,{className:"mt-2.5 flex items-center",children:[e.jsx(r,{}),e.jsx(Y,{size:"lg",className:`${s?"ml-5":""}`})]})]}),e.jsx(V,{className:"hidden sm:flex",justify:"start",children:e.jsx(ie,{children:e.jsx(I,{href:"/",onClick:()=>n(-1),children:e.jsx(se,{width:150,loading:"lazy"})})})}),e.jsx(V,{className:"hidden sm:flex gap-4",justify:"center",children:$t.map((a,l)=>e.jsx(W,{isActive:t===l,children:a.children?a.children:e.jsx(I,{color:a.color?a.color:t===l?"primary":"foreground",href:a.link,onClick:()=>n(l),children:a.name})},l))}),e.jsx(V,{justify:"end",children:s?e.jsxs(W,{className:"hidden sm:flex items-center",children:[e.jsxs(ot,{size:"sm",children:[e.jsx(it,{children:e.jsx(r,{})}),e.jsxs(dt,{"aria-label":"user dropdown",children:[e.jsx(ae,{startContent:e.jsx(St,{width:"1.5rem",height:"1.5rem"}),href:"/user",as:I,children:"Profile"},"profile"),e.jsx(ae,{startContent:e.jsx(Ot,{width:"1.5rem",height:"1.5rem"}),color:"danger",className:"text-danger",href:"/logout",as:I,children:"Logout"},"logout")]})]}),e.jsx(Y,{className:"ml-5"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(W,{className:"hidden lg:flex",children:[e.jsx(Y,{}),e.jsx(I,{href:"/login",children:"Sign in"})]}),e.jsx(W,{children:e.jsx(Le,{as:I,color:"primary",href:"/signup",variant:"flat",className:"font-medium",children:"Sign Up"})})]})})]})},Rt=[...Ke,...Ge,...Xe,...Ye,...Je,...Qe],_t=()=>Ze(Rt),At=st.Base,Lt=()=>{const{navbar:t}=et();return e.jsxs("div",{className:"min-h-screen",children:[e.jsx("div",{className:`${t?"":"hidden"}`,children:e.jsx(It,{})}),e.jsx(_t,{}),e.jsx("div",{className:`sticky top-[100vh] mt-5 ${t?"":"hidden"}`,children:e.jsx(At,{})})]})};export{Lt as default};