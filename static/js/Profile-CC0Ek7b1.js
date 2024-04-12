import{l as e,r as d,K as T,U,z as g,L as _,k as M,y as P,M as L,N as C}from"./index-BA3JRRZ5.js";import{c as b,f as w,g as y}from"./date-rfXAztqP.js";import{i as j}from"./validator-CEpkGiwj.js";import{o as E}from"./index.module-BXiJ1Ue_.js";import{m as R,a as k,b as S,c as O,d as B}from"./chunk-II5OMS4Q-Ds9bt6WE.js";import{i as F}from"./chunk-TC4QW7OA-7-2DSIhj.js";import{i as $}from"./chunk-OFGZKCFR-Wc9vKp1O.js";import{a as D}from"./chunk-LSZJW3GU-BuYza4jQ.js";import{d as H,a as A,b as z,m as v}from"./chunk-L6QJ42W6-C_M82JSv.js";import"./chunk-M3MASYO7-2e61k_sZ.js";import"./import-D_yr0w2r.js";import"./Combination-Bue1CJDg.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./index-BbXHBBvm.js";import"./index-CU6hB0G8.js";import"./chunk-3YBC73XM-lWRnFjvn.js";import"./import-BjhSzjRw.js";import"./import-D4RQZQ9S.js";import"./chunk-44JHHBS2-ChQ74yVg.js";const I=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"})}),V=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z"})}),G=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"})}),J=t=>{try{return BigInt(t)}catch{return}},K=({isOpen:t,onOpenChange:c,username:a,onUsernameChange:o})=>{const[r,n]=d.useState(a),[p,x]=d.useState(!1),[u]=E(r,1e3),{show:m}=T();return d.useEffect(()=>{if(u&&u!==a){if(!j(u)){x(!1);return}U({username:u,checkOnly:!0}).then(h=>{var s,i;if(!((s=h.data)!=null&&s.status)){x(!1),h.statusCode===200?m({message:"username already used"}):m({message:(i=h.data)==null?void 0:i.msg});return}x(!0)}).catch(h=>{m({message:h})})}else x(!1)},[u]),d.useEffect(()=>{n(a)},[a]),e.jsx(R,{isOpen:t,onOpenChange:h=>{n(a),c(h)},children:e.jsx(k,{children:h=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1",children:"Change your username"}),e.jsx(O,{children:e.jsx(F,{className:"font-medium",placeholder:"iTrans unique username",startContent:e.jsx("p",{className:"font-bold",children:"@"}),value:r,onValueChange:s=>{n(s)},errorMessage:j(r)?"":"invalid username"})}),e.jsxs(B,{children:[e.jsx(g,{color:"danger",variant:"light",onPress:h,children:"Cancel"}),e.jsx(g,{color:"primary",isDisabled:!p||r===a||!j(r),onPress:()=>{o(r),h()},children:"Submit"})]})]})})})},Y=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"})}),Q=t=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...t,children:e.jsx("path",{d:"M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"})}),W=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],Z=(t,c=2)=>{if(t==0)return"0 Bytes";const a=1024,o=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,o)).toFixed(c))+" "+W[o]},X=({maxUploadSize:t=3<<20,onSetHook:c,onUpload:a,onCancel:o})=>{const[r,n]=d.useState(null),[p,x]=d.useState(""),[u,m]=d.useState(!1),h=d.useRef(null),{show:s}=T(),i=()=>{URL.revokeObjectURL(p),m(!1),r&&(a(r),n(null))};return d.useEffect(()=>{r&&(x(URL.createObjectURL(r)),m(!0))},[r]),d.useEffect(()=>{c(()=>()=>{var l;(l=h.current)==null||l.click()})},[c,h.current]),e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",id:"photo-uploader",ref:h,className:"hidden",accept:"image/png, image/jpeg, image/gif, image/webp",onChange:l=>{if(l.target.files&&l.target.files.length===1){const f=l.target.files.item(0);if(!f)return;if(f.size>t){s({message:`current file too large (${Z(f.size)}), max: ${Z(t)}`});return}n(f)}}}),e.jsx(R,{isOpen:u,onOpenChange:l=>{URL.revokeObjectURL(p),m(l),!l&&o&&o()},children:e.jsx(k,{children:l=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1",children:"Confirm the image you are about to upload"}),e.jsx(O,{className:"flex items-center justify-center",children:e.jsx($,{style:{maxWidth:"256px",maxHeight:"256px"},src:p,alt:"Preview image"})}),e.jsxs(B,{children:[e.jsx(g,{color:"danger",variant:"light",onPress:()=>{l(),URL.revokeObjectURL(p),o&&o(),n(null)},children:"Cancel"}),e.jsx(g,{color:"primary",onPress:i,children:"Upload"})]})]})})})]})};var q=(t=>(t.Avatar="/file/avatar",t.Custom="",t))(q||{});const ee=(t="/file/avatar",c)=>{const a=new FormData;return a.append("file",c),_("POST",t,{file:!0,data:a})},N=new Map,te=async(t="/file/avatar",c)=>{let a;switch(t){case"/file/avatar":a=`/file/avatar/${c}`;break;case"":a=c;break}const o=N.get(a);if(o)return o;const r=await _("GET",a,{mustJSON:!1,local:t===""}),n=URL.createObjectURL(r.blob);return N.set(a,n),n},ae=M((t,c)=>{const[a,o]=d.useState("");d.useEffect(()=>{t.src&&te(t.fixedsrc?q.Custom:q.Avatar,t.src).then(n=>{o(n)})},[t.src]);const r=Object.keys(t).filter(n=>n!=="fixedsrc").reduce((n,p)=>(n[p]=t[p],n),{});return e.jsx(D,{ref:c,...r,src:a})}),Te=()=>{const[t,c]=d.useState({type:"self"}),[a,o]=d.useState({firstname:"",lastname:"System",createdAt:new Date}),[r,n]=d.useState({isOpen:!1,username:""}),[p,x]=d.useState(()=>{}),{profile:u}=P(),{show:m}=T(),h=L();return d.useEffect(()=>{const s=h.id;if(!s)return;if(j(s)){c({type:"username",username:s});return}const i=J(s);if(i){c({type:"userID",userID:i});return}},[]),d.useEffect(()=>{switch(t.type){case"username":U({username:t.username}).then(s=>{var i,l,f;if(!((i=s.data)!=null&&i.data)||!((l=s.data)!=null&&l.status)){m({message:(f=s.data)==null?void 0:f.msg});return}o({...s.data.data})}).catch(s=>{m({message:s})});break;case"userID":m({message:"unsupported query method"});break;case"self":if(!u){m({message:"failed to get user profile"});return}o({...u});break}},[t]),e.jsxs("div",{children:[e.jsx(K,{isOpen:r.isOpen,onOpenChange:s=>{n({...r,isOpen:s})},username:a.username,onUsernameChange:s=>{n({...r,username:s}),s&&C({username:s}).then(i=>{var l,f;if(!((l=i.data)!=null&&l.status)){m({message:(f=i.data)==null?void 0:f.msg});return}o({...a,username:s})}).catch(i=>{m({message:i})})}}),e.jsx(X,{maxUploadSize:10<<20,onSetHook:x,onUpload:s=>{console.log("on uploader",s),ee(q.Avatar,s).then(i=>{var l,f;if(!((l=i.data)!=null&&l.status)){m({message:`failed to upload avatar, cause: ${(f=i.data)==null?void 0:f.msg}`});return}}).catch(i=>{m({message:`failed to upload avatar, cause: ${i}`})})}}),e.jsx("div",{style:{backgroundSize:"cover",backgroundImage:`url('${a.background?a.background:"/default-background.png"}')`,backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"200px"},children:e.jsxs(H,{size:"sm",placement:"right-end",children:[e.jsx(A,{children:e.jsx(ae,{fixedsrc:!a.avatar,style:{position:"relative",zIndex:10,top:"100%",left:"5%",transform:"translate(-5%, -50%)",width:"20vh",height:"auto",userSelect:"none"},alt:a.firstname,src:a.avatar?u==null?void 0:u.id.toString():"/default-avatar.jpg",name:a.firstname,showFallback:!0})}),e.jsxs(z,{"aria-label":"avatar action",title:"Actions",children:[t.type==="self"&&a?e.jsx(v,{startContent:e.jsx(Y,{width:"1.25rem",height:"1.25rem"}),onPress:p,textValue:"Upload photo",children:e.jsx("span",{className:"font-medium",children:"Upload photo"})},"select-new-photo"):e.jsx(v,{className:"hidden",textValue:"hidden item",isReadOnly:!0}),t.type!=="self"&&a?e.jsx(v,{color:"danger",className:"text-danger",startContent:e.jsx(Q,{width:"1.25rem",height:"1.25rem"}),textValue:"Report this user",children:e.jsx("span",{className:"font-medium",children:"Report this user"})},"report-this-user"):e.jsx(v,{className:"hidden",textValue:"hidden item",isReadOnly:!0})]})]})}),e.jsx(g,{style:{position:"relative",zIndex:10,top:"100%",left:"95%",transform:"translate(-95%, 50%)"},color:"primary",variant:"bordered",radius:"lg",children:"Edit your profile"}),e.jsx("div",{className:"flex items-center mt-16 dark:bg-black",style:{marginTop:"10vh",width:"90%",transform:"translate(5%, 0%)"},children:e.jsxs("div",{children:[e.jsxs("p",{className:"text-4xl font-bold",children:[a.firstname," ",a.lastname,e.jsxs("span",{className:`${t.type!=="self"?"hidden":""} ml-3 font-normal text-small text-gray-500 dark:text-gray-400 hover:underline`,onClick:()=>n({...r,isOpen:!0}),children:["@",a.username||"SET YOUR USERNAME"]})]}),e.jsxs("p",{className:`${a.bio?"":"hidden"} font-medium`,children:["Bio:",e.jsx("span",{className:"ml-1 font-normal text-gray-600 dark:text-gray-300",children:a.bio})]}),e.jsxs("div",{className:"mt-5 whitespace-pre-wrap inline",children:[e.jsxs(b,{variant:"bordered",className:`${a.location?"mr-2":"hidden"}`,children:[e.jsx(I,{width:"1rem",height:"1rem"}),e.jsx("span",{className:"ml-1",children:a.location})]}),e.jsxs(b,{variant:"bordered",className:`${a.birthday?"mt-1 mr-2":"hidden"}`,children:[e.jsx(V,{width:"1rem",height:"1rem"}),e.jsxs("span",{className:"ml-1",children:["Born ",w(a.birthday,y("universal"))]})]}),e.jsxs(b,{variant:"bordered",className:"mt-1",children:[e.jsx(G,{width:"1rem",height:"1rem"}),e.jsxs("span",{className:"ml-1",children:["Joined ",w(a.createdAt,y("joinDay"))]})]})]})]})})]})};export{Te as default};
