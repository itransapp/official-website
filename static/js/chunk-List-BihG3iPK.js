import{aq as d,K as m,au as o,r as l,l as e}from"./index-BJB5ivqQ.js";import{s as i}from"./chunk-chunk-KRADFROI-D5SgYlnK.js";import{l as u}from"./chunk-chunk-MPX6TMFQ-BaznUk19.js";const h=()=>{const{get:c}=d(),n=m(),[a]=o(),[r,p]=l.useState({description:"",name:"",pages:[],path:""});return l.useEffect(()=>{const s=a.get("part");if(!s){n("/docs");return}const t=c(s);if(!t){n("/docs");return}p(t)},[a]),e.jsxs("div",{className:"md:w-1/2 md:pl-0 pl-5 md:pr-0 pr-5 mt-5",children:[e.jsx("p",{className:"text-4xl font-medium pl-2",children:r.name}),e.jsx(i,{y:2}),r.pages.length?e.jsx("div",{children:r.pages.map((s,t)=>e.jsx(u,{underline:"always",className:"text-lg w-full hover:dark:bg-gray-700 hover:bg-gray-200 p-2 rounded-medium",href:`/docs/r?part=${a.get("part")}&path=${s.path}`,children:s.title},t))}):e.jsx("span",{className:"flex ml-2 justify-center text-lg",children:"Empty..."})]})};export{h as default};
