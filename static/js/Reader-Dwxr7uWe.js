import{l as t,af as x,a3 as j,aj as g,K as y,r as o,ak as N}from"./index-CK0qWxHE.js";import{M as v,C as _}from"./index-lxfJTlwP.js";import{a as k}from"./text-BJweRK6z.js";import{s as r}from"./chunk-KRADFROI-C4eQnUZb.js";import{d as w}from"./chunk-44JHHBS2-CclwqFtp.js";const C=a=>t.jsx(v,{...a,components:{code:_},className:`comment ${a.className}`,children:a.children}),S=()=>{const{get:a}=x(),c=j(),[n]=g(),{show:i}=y(),[d,h]=o.useState(""),[s,u]=o.useState({authors:[],description:"",path:"",title:""});return o.useEffect(()=>{const e=n.get("part"),m=n.get("path");if(!e||!m){c("/docs");return}const l=a(e);if(!l){c("/docs");return}let p=!1;if(l.pages.map(f=>{f.path===m&&(u(f),p=!0)}),!p){c("/docs");return}},[n]),o.useEffect(()=>{s.path&&N(`/${s.path}`).then(e=>{if(!e.text){i({message:"failed to fetch document"});return}h(e.text)}).catch(e=>{i({message:e})})},[s.path]),t.jsxs("div",{className:"md:w-2/3",children:[t.jsx(r,{y:d?0:5}),d?null:t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-3xl font-bold",children:s.title}),t.jsx(r,{y:3}),t.jsx("span",{className:"text-md block text-gray-500 dark:text-gray-400",children:s.description})]}),t.jsx(r,{y:5})]}),t.jsx(C,{className:"md:pl-0 pl-5 md:pr-0 pr-5",children:decodeURIComponent(d)||"Nothing to preview"}),t.jsx(r,{y:5}),t.jsx(w,{}),t.jsx(r,{y:5}),t.jsxs("div",{className:"flex md:justify-end justify-center text-gray-500 dark:text-gray-400 font-medium",children:["Authors:  ",t.jsx("p",{className:"italic",children:k(s.authors)})]})]})};export{S as default};