import{t as q,d as G,p as J,u as L,m as Q,j as X,c as Y,c9 as Z,x as ee,h as se,a as ae,$ as te,r as p,o as re,f as o,e as oe,k as B,l as le,n as w,ca as de}from"./index-CZ9qgNtX.js";var M=q({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...G],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),[ne,be]=J({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"});function ie(e){var l,d,n,i;const s=L(),[m,u]=Q(e,M.variantKeys),{ref:h,as:b,children:N,onClick:V,onPress:W,autoFocus:O,className:S,classNames:t,allowTextSelectionOnPress:T=!0,...c}=m,r=X(h),D=b||(e.isPressable?"button":"div"),R=typeof D=="string",a=(d=(l=e.disableAnimation)!=null?l:s==null?void 0:s.disableAnimation)!=null?d:!1,$=(i=(n=e.disableRipple)!=null?n:s==null?void 0:s.disableRipple)!=null?i:!1,y=Y(t==null?void 0:t.base,S),{onClick:E,onClear:F,ripples:g}=Z(),H=k=>{!a&&!$&&r.current&&E(k)},{buttonProps:P,isPressed:x}=ee({onPress:W,elementType:b,isDisabled:!e.isPressable,onClick:se(V,H),allowTextSelectionOnPress:T,...c},r),{hoverProps:j,isHovered:v}=ae({isDisabled:!e.isHoverable,...c}),{isFocusVisible:C,isFocused:I,focusProps:A}=te({autoFocus:O}),f=p.useMemo(()=>M({...u,disableAnimation:a}),[re(u),a]),z=p.useMemo(()=>({slots:f,classNames:t,disableAnimation:a,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[f,t,e.isDisabled,e.isFooterBlurred,a,e.fullWidth]),K=p.useCallback((k={})=>({ref:r,className:f.base({class:y}),tabIndex:e.isPressable?0:-1,"data-hover":o(v),"data-pressed":o(x),"data-focus":o(I),"data-focus-visible":o(C),"data-disabled":o(e.isDisabled),...oe(e.isPressable?{...P,...A,role:"button"}:{},e.isHoverable?j:{},B(c,{enabled:R}),B(k))}),[r,f,y,R,e.isPressable,e.isHoverable,e.isDisabled,v,x,C,P,A,j,c]),U=p.useCallback(()=>({ripples:g,onClear:F}),[g,F]);return{context:z,domRef:r,Component:D,classNames:t,children:N,isHovered:v,isPressed:x,disableAnimation:a,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:$,handleClick:H,isFocusVisible:C,getCardProps:K,getRippleProps:U}}var _=le((e,l)=>{const{children:d,context:n,Component:i,isPressable:s,disableAnimation:m,disableRipple:u,getCardProps:h,getRippleProps:b}=ie({...e,ref:l});return w.jsxs(i,{...h(),children:[w.jsx(ne,{value:n,children:d}),s&&!m&&!u&&w.jsx(de,{...b()})]})});_.displayName="NextUI.Card";var ce=_;export{ce as c,be as u};