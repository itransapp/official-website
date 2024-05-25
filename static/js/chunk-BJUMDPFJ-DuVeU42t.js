import{t as q,d as G,n as J,k as y,i as N,c as R,l as m,m as L,am as Q,v as X,h as Y,a as Z,$ as ee,r as v,f,e as se,j as P,an as ae}from"./index-CP6YXhxA.js";var M=q({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...G],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),[te,O]=J({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),S=y((e,d)=>{var s;const{as:l,className:r,children:n,...o}=e,i=l||"div",u=N(d),{slots:a,classNames:c}=O(),t=R(c==null?void 0:c.body,r);return m.jsx(i,{ref:u,className:(s=a.body)==null?void 0:s.call(a,{class:t}),...o,children:n})});S.displayName="NextUI.CardBody";var de=S,V=y((e,d)=>{var s;const{as:l,className:r,children:n,...o}=e,i=l||"div",u=N(d),{slots:a,classNames:c}=O(),t=R(c==null?void 0:c.header,r);return m.jsx(i,{ref:u,className:(s=a.header)==null?void 0:s.call(a,{class:t}),...o,children:n})});V.displayName="NextUI.CardHeader";var le=V;function re(e){const[d,s]=L(e,M.variantKeys),{ref:l,as:r,children:n,disableRipple:o=!1,onClick:i,onPress:u,autoFocus:a,className:c,classNames:t,allowTextSelectionOnPress:I=!0,...h}=d,b=N(l),$=r||(e.isPressable?"button":"div"),A=typeof $=="string",D=R(t==null?void 0:t.base,c),{onClick:U,onClear:H,ripples:F}=Q(),j=w=>{!e.disableAnimation&&!o&&b.current&&U(w)},{buttonProps:B,isPressed:x}=X({onPress:u,elementType:r,isDisabled:!e.isPressable,onClick:Y(i,j),allowTextSelectionOnPress:I,...h},b),{hoverProps:_,isHovered:C}=Z({isDisabled:!e.isHoverable,...h}),{isFocusVisible:k,isFocused:E,focusProps:g}=ee({autoFocus:a}),p=v.useMemo(()=>M({...s}),[...Object.values(s)]),T=v.useMemo(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:p,classNames:t}),[p,t,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),z=v.useCallback((w={})=>({ref:b,className:p.base({class:D}),tabIndex:e.isPressable?0:-1,"data-hover":f(C),"data-pressed":f(x),"data-focus":f(E),"data-focus-visible":f(k),"data-disabled":f(e.isDisabled),...se(e.isPressable?{...B,...g,role:"button"}:{},e.isHoverable?_:{},P(h,{enabled:A}),P(w))}),[b,p,D,A,e.isPressable,e.isHoverable,e.isDisabled,C,x,k,B,g,_,h]),K=v.useCallback(()=>({ripples:F,onClear:H}),[F,H]);return{context:T,domRef:b,Component:$,classNames:t,children:n,isHovered:C,isPressed:x,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:o,handleClick:j,isFocusVisible:k,getCardProps:z,getRippleProps:K}}var W=y((e,d)=>{const{children:s,context:l,Component:r,isPressable:n,disableAnimation:o,disableRipple:i,getCardProps:u,getRippleProps:a}=re({...e,ref:d});return m.jsxs(r,{...u(),children:[m.jsx(te,{value:l,children:s}),n&&!o&&!i&&m.jsx(ae,{...a()})]})});W.displayName="NextUI.Card";var ne=W;export{le as a,de as b,ne as c,O as u};