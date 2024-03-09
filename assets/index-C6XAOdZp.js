import{F as w,j as e,G as N,H as k,l as m,E as _,r as f,I as x,J as b,b as c,K as p,L as j}from"./index-CulB5GRl.js";import{O as y}from"./Open-CSSBCN5Q.js";import{c as A,a as g}from"./date-D3g1y_YN.js";import{o as $}from"./index.module-WIlcljw-.js";import{i as B}from"./chunk-TC4QW7OA-DPuHMej8.js";import"./chunk-M3MASYO7-Csn0uAC7.js";var H=w,T=H;const F=s=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",color:"#a371f7",className:"inline-block overflow-visible align-text-bottom fill-current",...s,children:[e.jsx("path",{d:"M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"}),e.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"})]}),I=s=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...s,children:e.jsx("path",{d:"M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"})}),M=s=>{if(s.length!==6&&s.length!==7)return;const r=parseInt(s.charAt(0)==="#"?s.slice(1,7):s,16);return{R:r>>16&255,G:r>>8&255,B:r&255}},C=s=>{const r=s.R/255,n=s.G/255,t=s.B/255,a=Math.min(r,n,t),l=Math.max(r,n,t),i=l-a;let o=0,u=0;const h=(l+a)/2;return i!==0&&(u=i/(h<=.5?l+a:2-l-a),r===l?o=(n-t)/i+(n<t?6:0):n===l?o=(t-r)/i+2:o=(r-n)/i+4,o*=60),{H:o,S:u*100,L:Math.round(h*100)}},L=({size:s,mode:r,color:n,name:t,style:a})=>{const l=M(n);if(!l)return null;const i=C(l);return e.jsx(A,{size:s,className:`${r==="light"?"label-light":"label-dark"}`,style:{"--label-r":l.R,"--label-g":l.G,"--label-b":l.B,"--label-h":i.H,"--label-s":i.S,"--label-l":i.L,marginRight:"0.250rem",...a},classNames:{content:"font-medium"},children:t})},S=({size:s,mode:r,labels:n})=>n.map((t,a)=>e.jsx(L,{mode:r,size:s,...t},a)),Z=({mode:s,entry:r})=>e.jsxs("div",{className:"flex flex-auto items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none sm:rounded-lg",children:[e.jsx("div",{className:"flex-shrink-0 pt-2 pl-3",children:r.close?e.jsx(F,{height:"2em",width:"2em"}):e.jsx(y,{height:"2em",width:"2em"})}),e.jsxs("div",{className:"min-w-0 p-2 pr-3 md:pr-2",children:[e.jsx(m,{className:"text-large font-medium",color:"foreground",underline:"hover",style:{userSelect:"text"},href:`/chalkboard/${r.id}`,children:r.title}),e.jsx("div",{className:"ml-2 inline",children:e.jsx(S,{size:"sm",mode:s,labels:r.labels})}),e.jsxs("div",{className:"text-gray-400",style:{fontSize:"13px"},children:[`#${r.id.toString(16).slice(0,8)} `,r.close?e.jsxs(e.Fragment,{children:[e.jsx(m,{size:"sm",href:`/user/${r.username}`,children:`@${r.username}`}),e.jsx("p",{className:"inline ml-1",children:`was closed ${g(r.updatedAt)} ago`})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"inline",children:`opened ${g(r.createdAt)} ago by`}),e.jsx(m,{className:"ml-1",size:"sm",href:`/user/${r.username}`,children:`@${r.username}`})]})]})]}),e.jsxs("div",{className:"hidden sm:flex ml-auto flex-shrink-0 items-center justify-between text-right pr-3 whitespace-nowrap ",children:[e.jsx("span",{className:"ml-2 flex-1 flex-shrink-0",children:e.jsx(_,{alt:r.username,size:"sm",src:"https://avatars.githubusercontent.com/u/4324516?v=4"})}),e.jsxs("span",{className:"ml-6 flex-1 flex-shrink-0 items-center content-center text-gray-700 dark:text-gray-300",children:[e.jsx(I,{width:"1rem",height:"1rem",className:"inline-flex overflow-visible fill-current"}),e.jsx("span",{className:"ml-1 text-small font-bold",children:r.comments})]})]})]}),R=({entries:s})=>{const[r]=N(k);return e.jsx("div",{className:"w-full divide-y divide-gray-200 dark:divide-gray-700",children:s.map((n,t)=>e.jsx(Z,{mode:r,entry:n},t))})},D=s=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...s,children:e.jsx("path",{d:"M480-360 280-560h400L480-360Z"})}),E=({color:s,width:r,height:n})=>e.jsx("span",{className:"flex-shrink-0 inline-block rounded-lg",style:{width:r,height:n,backgroundColor:s}}),d={is:{open:()=>({open:!0})},author:{"@me":()=>({author:"self"}),"*":s=>s.charAt(0)==="@"?{author:s.slice(1,s.length)}:{author:s}},mentions:{"@me":()=>({mentions:"self"}),"*":s=>s.charAt(0)==="@"?{mentions:s.slice(1,s.length)}:{mentions:s}},label:{"*":s=>({label:[s.slice(1,s.length-1)]})}},z=s=>{const r={};return s.split(" ").reduce((n,t)=>{const[a,l]=t.split(":");if(a&&l){const i=a.trim(),o=l.trim();n[i]||(n[i]=new Set),n[i].has(i)||n[i].add(o)}return n},r),Object.fromEntries(Object.entries(r).map(([n,t])=>[n,[...t]]))},O=s=>{const r=[],n=z(s);for(const[t,a]of Object.entries(n))d[t]&&a.forEach(l=>{(d[t][l]||d[t]["*"])&&r.push(`${t}:${l}`)});return r.join(" ")},G=[{close:!1,id:7164271119128596480n,author:BigInt(1),username:"Z-Siqi",comments:1,title:"新加坡 Mount Elizabeth 医院的 Alex Fok 医生可以给16岁开HRT治疗",contentPreview:"Hello",labels:[{name:"内容",color:"#4feeff"},{name:"HRT",color:"#0be01f"}],createdAt:new Date,updatedAt:new Date},{close:!0,id:1164235119128596480n,author:BigInt(2),username:"BeiyanYunyi",comments:2,title:"在页面内跳转时，跳转到的内容被 Header 遮挡 ",contentPreview:"what the fuck?",labels:[{name:"Issue",color:"#fcb6be"}],createdAt:new Date,updatedAt:new Date("Fri Feb 16 2023 23:31:51")},{close:!0,id:1164235119128596481n,author:BigInt(2),username:"BeiyanYunyi",comments:2,title:"在页面内跳转时，跳转到的内容被 Header 遮挡 ",contentPreview:"what the fuck?",labels:[{name:"Issue",color:"#fcb6be"}],createdAt:new Date,updatedAt:new Date("Fri Feb 16 2023 23:31:51")}],v=[{name:"Issue",color:"#fcb6be"},{name:"内容",color:"#4feeff"},{name:"HRT",color:"#0be01f"}],q=[{name:"Open chalkboards",rules:"is:open"},{name:"Your chalkboards",rules:"is:open author:@me"},{name:"Everything mentioning you",rules:"is:open mentions:@me"}],W=()=>{const[s,r]=f.useState("is:open"),[n]=$(s,1e3);return f.useEffect(()=>{s&&r(O(s))},[n]),e.jsxs("div",{className:"sm:pl-2 sm:pr-2",children:[e.jsxs("div",{className:"pb-2 flex gap-2",children:[e.jsx(B,{classNames:{inputWrapper:"pl-0 h-unit-10 rounded-medium rounded-l-none sm:rounded-l-medium"},color:"primary",radius:"md",startContent:e.jsxs(x,{children:[e.jsx(b,{children:e.jsx(c,{endContent:e.jsx(D,{width:"1.25rem",height:"1.25rem"}),size:"md",className:"font-medium",variant:"light",children:"Filter"})}),e.jsx(p,{"aria-label":"chalkboard filter options",children:q.map((t,a)=>e.jsx(j,{onClick:()=>r(t.rules),children:t.name},a))})]}),value:s,onValueChange:r}),e.jsxs(x,{children:[e.jsx(b,{children:e.jsx(c,{className:"hidden md:flex font-medium",variant:"bordered",color:"secondary",children:"Labels"})}),e.jsx(p,{"aria-label":"label filter",selectionMode:"single",onAction:t=>{r(`${s} label:"${v[t].name}"`)},children:e.jsx(T,{title:"Filter by label",children:v.map((t,a)=>e.jsx(j,{textValue:t.name,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(E,{color:t.color,width:"1rem",height:"1rem"}),e.jsx("div",{className:"ml-2 truncate min-w-0 flex items-center",children:e.jsx("div",{className:"font-medium",children:t.name})})]})},a))})})]}),e.jsx(c,{className:"hidden md:flex font-medium",color:"primary",as:m,href:"/chalkboard/new",children:"New Chalkboard"}),e.jsx(c,{className:"flex md:hidden rounded-r-none sm:rounded-r-medium font-medium",color:"primary",as:m,href:"/chalkboard/new",children:"New"})]}),e.jsx("div",{children:e.jsx(R,{entries:G})})]})};export{W as default};
