import{t as V,m as D,i as K,r as n,c as j,f as B,k as U,l as g}from"./index-DRvFTYPe.js";import{u as q}from"./index-DCNQ8fe8.js";var L=V({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]});function G(i){const[r,d]=D(i,L.variantKeys),{ref:f,as:b,src:a,className:w,classNames:e,loading:m,isBlurred:h,fallbackSrc:s,isLoading:c,disableSkeleton:l=!!s,removeWrapper:v=!1,onError:o,onLoad:u,srcSet:I,sizes:k,crossOrigin:y,...Z}=r,x=q({src:a,loading:m,onError:o,onLoad:u,ignoreFallback:!1,srcSet:I,sizes:k,crossOrigin:y}),z=x==="loaded"&&!c,S=x==="loading"||c,C=i.isZoomed,E=b||"img",W=K(f),{w:A}=n.useMemo(()=>({w:r.width?typeof r.width=="number"?`${r.width}px`:r.width:"fit-content"}),[r==null?void 0:r.width]),N=(!a||!z)&&!!s,P=S&&!l,t=n.useMemo(()=>L({...d,showSkeleton:P}),[...Object.values(d),P]),M=j(w,e==null?void 0:e.img),O=(p={})=>{const F=j(M,p==null?void 0:p.className);return{src:a,ref:W,"data-loaded":B(z),className:t.img({class:F}),loading:m,srcSet:I,sizes:k,crossOrigin:y,...Z}},_=n.useCallback(()=>{const p=N?{backgroundImage:`url(${s})`}:{};return{className:t.wrapper({class:e==null?void 0:e.wrapper}),style:{...p,maxWidth:A}}},[t,N,s,e==null?void 0:e.wrapper]),$=n.useCallback(()=>({src:a,"aria-hidden":B(!0),className:t.blurredImg({class:e==null?void 0:e.blurredImg})}),[t,a,e==null?void 0:e.blurredImg]);return{Component:E,domRef:W,slots:t,classNames:e,isBlurred:h,disableSkeleton:l,fallbackSrc:s,removeWrapper:v,isZoomed:C,isLoading:S,getImgProps:O,getWrapperProps:_,getBlurredImgProps:$}}var R=U((i,r)=>{const{Component:d,domRef:f,slots:b,classNames:a,isBlurred:w,isZoomed:e,fallbackSrc:m,removeWrapper:h,disableSkeleton:s,getImgProps:c,getWrapperProps:l,getBlurredImgProps:v}=G({...i,ref:r}),o=g.jsx(d,{ref:f,...c()});if(h)return o;const u=g.jsx("div",{className:b.zoomedWrapper({class:a==null?void 0:a.zoomedWrapper}),children:o});return w?g.jsxs("div",{...l(),children:[e?u:o,n.cloneElement(o,v())]}):e||!s||m?g.jsxs("div",{...l(),children:[" ",e?u:o]}):o});R.displayName="NextUI.Image";var Q=R;export{Q as i};
