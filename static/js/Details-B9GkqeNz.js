import{k as N,i as b,c as q,l as e,r as T,z as x}from"./index-BIm2R1bB.js";import{O as w}from"./Open-VLBuuZOM.js";import{f as _,c as R,a as F}from"./date-KJJRCVTo.js";import{f as C}from"./text-BJweRK6z.js";import{c as h,b as p,a as j}from"./chunk-LSZJW3GU-Dt3mln_A.js";import{F as k}from"./Full-C3AQuM4H.js";import{u as y,c as D,a as O,b as z}from"./chunk-BJUMDPFJ-B3AbHz5E.js";import{d as f}from"./chunk-44JHHBS2-BXCKrGou.js";import{a as A}from"./Combination-61256Lny.js";import{l as S}from"./chunk-MPX6TMFQ-BBIkz6hk.js";import"./chunk-M3MASYO7-C-GI9k7v.js";import"./import-ZFOqRTpX.js";import"./chunk-3YBC73XM-C0WnVvlf.js";import"./index-CZSlj1jZ.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./index-Dniv9Jhg.js";var v=N((a,l)=>{var i;const{as:r,className:o,children:s,...t}=a,n=r||"div",m=b(l),{slots:d,classNames:u}=y(),g=q(u==null?void 0:u.footer,o);return e.jsx(n,{ref:m,className:(i=d.footer)==null?void 0:i.call(d,{class:g}),...t,children:s})});v.displayName="NextUI.CardFooter";var Z=v;const I=a=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...a,children:e.jsx("path",{d:"M480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q43 0 83 8.5t77 24.5v90q-35-20-75.5-31.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-32-6.5-62T776-600h86q9 29 13.5 58.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Z"})}),M=["👍","👎","😁","🎉","❤️","👀","💩"],P=({username:a,reactions:l,onReactions:i})=>{const[r,o]=T.useState(()=>{const s={};for(let t=0;t<l.length;t++)s[t]=!1;return s});return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(h,{placement:"top-start",backdrop:"opaque",radius:"sm",children:[e.jsx(p,{children:e.jsx(x,{className:"text-lg",variant:"flat",radius:"full",size:"sm",isIconOnly:!0,children:e.jsx(I,{})})}),e.jsx(j,{children:e.jsx("div",{className:"flex gap-1",children:M.map((s,t)=>e.jsx(x,{className:"inline-block text-lg",isIconOnly:!0,size:"sm",variant:"light",children:s},t))})})]}),l.map((s,t)=>{const n=s.users.indexOf(a)!==-1;return e.jsxs(h,{isOpen:r[t],onOpenChange:m=>o({...r,[t]:m}),showArrow:!0,radius:"sm",children:[e.jsx(p,{children:e.jsxs(x,{className:"text-md",variant:n?"solid":"bordered",color:n?"primary":"default",radius:"full",size:"sm",onMouseEnter:()=>o({...r,[t]:!0}),onMouseLeave:()=>o({...r,[t]:!1}),onClick:()=>{o({...r,[t]:!1}),i(n,s.emoji)},children:[s.emoji," ",s.users.length]})}),e.jsx(j,{className:"text-gray-500 dark:text-gray-400",style:{maxWidth:"300px"},children:C(s.emoji,s.users)})]},t)})]})},$=({firstname:a,lastname:l,username:i,content:r,createdAt:o,followed:s,showFollow:t,onFollow:n,reactions:m})=>e.jsxs(D,{fullWidth:!0,classNames:{base:"rounded-r-none md:rounded-r-lg rounded-l-none md:rounded-l-lg"},children:[e.jsxs(O,{className:"justify-between",children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsx(A,{radius:"full",size:"md",src:"https://avatars.githubusercontent.com/u/4324516?v=4"}),e.jsxs("div",{className:"flex flex-col gap-1 items-start justify-center",children:[e.jsxs("h4",{className:"text-medium font-semibold leading-none text-default-600",children:[l," ",a]}),e.jsxs("h5",{className:"text-small tracking-tight text-default-400",children:["@",i]})]})]}),e.jsx(x,{className:`font-medium ${t?"":"hidden"} ${s?"bg-transparent text-foreground border-default-200":""}`,color:"primary",radius:"full",size:"sm",variant:s?"bordered":"solid",onPress:n,isDisabled:!0,children:s?"Unfollow":"Follow"})]}),e.jsx(f,{}),e.jsxs(z,{children:[e.jsx(k,{className:"p-2",children:decodeURIComponent(r)}),e.jsx("div",{className:"mt-5",children:e.jsx(P,{username:"PotatoCloud",reactions:m,onReactions:(d,u)=>{console.log(d,u)}})})]}),e.jsx(f,{}),e.jsx(Z,{className:"gap-3",children:e.jsxs("span",{className:"text-small text-gray-500",children:["commented on ",_(o)," • edited"]})})]}),c={close:!1,id:7164271119128596480n,author:BigInt(1),username:"Z-Siqi",comments:1,title:"新加坡 Mount Elizabeth 医院的 Alex Fok 医生可以给16岁开HRT治疗",contentPreview:"Hello",labels:[{name:"内容",color:"#4feeff"},{name:"HRT",color:"#0be01f"}],createdAt:new Date,updatedAt:new Date},E=[{id:1n,firstname:"Cox",lastname:"Russ",username:"rsc",content:'- [x] check \n ```golang \n fmt.Println("test") \n  ``` \n ```java \n System.out.println("fuck you") \n```',createdAt:new Date,reactions:[{emoji:"👍",users:["PotatoCloud","rsc"]}],onReactions:()=>{},followed:!1,showFollow:!0}],re=()=>e.jsxs("div",{className:"md:w-10/12 ml-auto mr-auto mt-8",children:[e.jsxs("div",{className:"block w-full",children:[e.jsxs("h1",{className:"text-3xl",children:[e.jsx("bdi",{className:"break-words tracking-tight",children:c.title}),e.jsx("span",{className:"text-2xl text-gray-500",children:`#${c.id.toString(16).slice(0,8)}`})]}),e.jsx("div",{className:"flex mt-2 items-center",children:e.jsxs(e.Fragment,{children:[e.jsx(R,{startContent:e.jsx(w,{height:"2em",width:"2em",style:{marginTop:"0.5rem",fill:"#FFFFFF"}}),className:"text-white pl-2",classNames:{content:"pl-0"},variant:"solid",color:"success",children:e.jsx("p",{className:"text-large font-medium",children:"Open"})}),e.jsxs("div",{className:"inline ml-2 text-gray-500 text-small",children:[e.jsx(S,{size:"sm",href:`/user/${c.username}`,className:"mr-1 font-medium text-medium text-gray-500",children:`@${c.username}`}),"opened this chalkboard on ",F(c.createdAt)," · ",c.comments," comments"]})]})})]}),e.jsx(f,{className:"mt-5 mb-5"}),e.jsx("div",{className:"flex gap-10",children:e.jsx("div",{className:" w-full",children:E.map((a,l)=>e.jsx($,{...a},l))})})]});export{re as default};
