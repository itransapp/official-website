import{k as I,i as E,c as Q,l as e,r as x,B as v,y as i,W as A,K as L,O as U,M as W,z as K,_ as G,a0 as V,a1 as J,a2 as X}from"./index-BJB5ivqQ.js";import{m as R,O as Y}from"./chunk-Open-DkEnA-h5.js";import{f as ee,t as te}from"./chunk-text-DMYT1VWy.js";import{e as D,f as Z,g as S,d as se,b as ae,c as re,m as N}from"./chunk-chunk-L6QJ42W6-DoMROV_h.js";import{F as le,u as ne,P as ie}from"./chunk-Preview-CPA_qrHQ.js";import{A as oe}from"./chunk-Avatar-DLppRWSH.js";import{R as de,t as ce}from"./chunk-Report-DMoG2yVt.js";import{d as w}from"./chunk-chunk-44JHHBS2-B2wnH7aU.js";import{u as me,c as P,a as M,b as k}from"./chunk-chunk-BJUMDPFJ-DHtbeQup.js";import{R as he}from"./chunk-index-DUAOQo21.js";import{m as ue,a as fe,b as xe,c as pe,d as ge}from"./chunk-chunk-II5OMS4Q-nfWupkIP.js";import{c as je}from"./chunk-chunk-OFH6WYRQ-DzrXGvBk.js";import{l as ve}from"./chunk-chunk-MPX6TMFQ-BaznUk19.js";import"./chunk-import-i_ziLMaV.js";import"./chunk-chunk-CAFRINWI-CcU5yOMx.js";import"./chunk-index-93a82q7x.js";import"./chunk-index-C_iefjck.js";import"./chunk-Combination-1BDyRlWr.js";import"./chunk-index-CtvH9OHa.js";import"./chunk-context-B75TDu2a.js";import"./chunk-import-DviOdVdv.js";import"./chunk-chunk-LY2CD73K-C7NVsmB4.js";var O=I((r,p)=>{var l;const{as:u,className:o,children:a,...s}=r,f=u||"div",d=E(p),{slots:j,classNames:c}=me(),q=Q(c==null?void 0:c.footer,o);return e.jsx(f,{ref:d,className:(l=j.footer)==null?void 0:l.call(j,{class:q}),...s,children:a})});O.displayName="NextUI.CardFooter";var $=O;const be=r=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...r,children:e.jsx("path",{d:"M480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q43 0 83 8.5t77 24.5v90q-35-20-75.5-31.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-32-6.5-62T776-600h86q9 29 13.5 58.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Z"})}),qe=["👍","👎","😁","🎉","❤️","👀","💩"],Te=({username:r,reactions:p,onReactions:l})=>{const[u,o]=x.useState(()=>{const a={};for(let s=0;s<p.length;s++)a[s]=!1;return a});return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(D,{placement:"top-start",backdrop:"opaque",radius:"sm",children:[e.jsx(Z,{children:e.jsx(v,{className:"text-lg",variant:"flat",radius:"full",size:"sm",isIconOnly:!0,children:e.jsx(be,{})})}),e.jsx(S,{children:e.jsx("div",{className:"flex gap-1",children:qe.map((a,s)=>e.jsx(v,{className:"inline-block text-lg",isIconOnly:!0,size:"sm",variant:"light",children:a},s))})})]}),p.map((a,s)=>{const f=a.users.indexOf(r)!==-1;return e.jsxs(D,{isOpen:u[s],onOpenChange:d=>o({...u,[s]:d}),showArrow:!0,radius:"sm",children:[e.jsx(Z,{children:e.jsxs(v,{className:"text-md",variant:f?"solid":"bordered",color:f?"primary":"default",radius:"full",size:"sm",onMouseEnter:()=>o({...u,[s]:!0}),onMouseLeave:()=>o({...u,[s]:!1}),onClick:()=>{o({...u,[s]:!1}),l&&l(f,a.emoji)},children:[a.emoji," ",a.users.length]})}),e.jsx(S,{className:"text-gray-500 dark:text-gray-400",style:{maxWidth:"300px"},children:ee(a.emoji,a.users)})]},s)})]})},Ne=r=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...r,children:e.jsx("path",{d:"M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"})}),we=r=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...r,children:e.jsx("path",{d:"M727-80q-47.5 0-80.75-33.346Q613-146.693 613-194.331q0-6.669 1.5-16.312T619-228L316-404q-15 17-37 27.5T234-366q-47.5 0-80.75-33.25T120-480q0-47.5 33.25-80.75T234-594q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613-757.75 613-766q0-47.5 33.25-80.75T727-880q47.5 0 80.75 33.25T841-766q0 47.5-33.25 80.75T727-652q-23.354 0-44.677-7.5T646-684L343-516q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345-457 343-449l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841-194q0 47.5-33.25 80.75T727-80Zm.035-632Q750-712 765.5-727.535q15.5-15.535 15.5-38.5T765.465-804.5q-15.535-15.5-38.5-15.5T688.5-804.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm-493 286Q257-426 272.5-441.535q15.5-15.535 15.5-38.5T272.465-518.5q-15.535-15.5-38.5-15.5T195.5-518.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm493 286Q750-140 765.5-155.535q15.5-15.535 15.5-38.5T765.465-232.5q-15.535-15.5-38.5-15.5T688.5-232.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5ZM727-766ZM234-480Zm493 286Z"})}),_e=r=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...r,children:e.jsx("path",{d:"M780-200v-156q0-60-39-99t-99-39H236l163 163-43 43-236-236 236-236 43 43-163 163h406q85 0 141.5 56.5T840-356v156h-60Z"})}),Ce=r=>e.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 -960 960 960",width:"1em",className:"inline-block overflow-visible align-text-bottom fill-current",...r,children:e.jsx("path",{d:"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"})}),F=({cid:r,id:p,firstname:l,lastname:u,username:o,content:a,createdAt:s,allowedDelete:f,followed:d,showFollow:j,onFollow:c,onReply:q,onDelete:m,reactions:h})=>{const[g,T]=x.useState(!1);return e.jsxs(P,{fullWidth:!0,classNames:{base:"rounded-r-none md:rounded-r-lg rounded-l-none md:rounded-l-lg"},children:[e.jsxs(M,{className:"justify-between",children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsx(oe,{radius:"full",size:"md",src:`@${o}`}),e.jsxs("div",{className:"flex flex-col gap-1 items-start justify-center",children:[e.jsxs("h4",{className:"text-medium font-semibold leading-none text-default-600",children:[l," ",u]}),e.jsx(e.Fragment,{children:o?e.jsxs("h5",{className:"text-small tracking-tight text-default-400",children:["@",o]}):null})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{className:`font-medium ${j?"":"hidden"} ${d?"bg-transparent text-foreground border-default-200":""}`,color:"primary",radius:"full",size:"sm",variant:d?"bordered":"solid",onPress:c,isDisabled:!0,children:d?"Unfollow":"Follow"}),e.jsxs(se,{size:"sm",children:[e.jsx(ae,{children:e.jsx(v,{size:"sm",isIconOnly:!0,variant:"light",children:e.jsx(Ne,{width:"1.25rem",height:"1.25rem"})})}),e.jsxs(re,{"aria-label":"comment actions",disabledKeys:g?["share"]:void 0,children:[e.jsxs(R,{title:i("actions"),showDivider:!0,children:[e.jsx(N,{startContent:e.jsx(we,{width:"1.25rem",height:"1.25rem"}),onPress:()=>{navigator.clipboard.writeText(`https://itrans.app/chalkboard/${r}?${new URLSearchParams({mid:p.toString(16)})}`).then(()=>{T(!0),setTimeout(()=>{T(!1)},1500)})},children:g?i("pages.chalkboard.details.copy_success"):i("pages.chalkboard.details.copy_link")},"share"),e.jsx(N,{startContent:e.jsx(_e,{width:"1.25rem",height:"1.25rem"}),onPress:q,children:i("reply")},"reply"),e.jsx(N,{startContent:e.jsx(Ce,{width:"1.25rem",height:"1.25rem"}),onPress:m,className:`${f?"":"hidden"}`,children:i("delete")},"delete")]}),e.jsx(R,{title:i("feedback"),children:e.jsx(N,{startContent:e.jsx(de,{width:"1.25rem",height:"1.25rem"}),color:"danger",className:"text-danger",children:i("report_content")},"report")})]})]})]})]}),e.jsx(w,{}),e.jsxs(k,{children:[e.jsx(le,{className:"pt-2 pb-2 pr-1 pl-1",children:decodeURIComponent(a)}),h!=null&&h.reactions?e.jsx("div",{className:"mt-3",children:e.jsx(Te,{username:h.username,reactions:h.reactions,onReactions:h.onReactions})}):null]}),e.jsx(w,{}),e.jsx($,{className:"gap-3",children:e.jsx("span",{className:"text-small text-gray-500",children:i("pages.chalkboard.details.commented_on",{created_at:A(s)})})})]})},ye={close:!1,id:7164271119128596480n,author:BigInt(1),username:"Z-Siqi",comments:1,title:"新加坡 Mount Elizabeth 医院的 Alex Fok 医生可以给16岁开HRT治疗",contentPreview:"Hello",labels:[{name:"内容",color:"#4feeff"},{name:"HRT",color:"#0be01f"}],createdAt:new Date,updatedAt:new Date},Ve=()=>{const r=L(),p=U(),{show:l}=W(),{isOpen:u,onOpenChange:o}=ne(),{profile:a}=K(),[s,f]=x.useState({author:0n,close:!1,comments:0,content:"",createdAt:new Date,firstname:"",labels:[],lastname:"",reactions:[],title:"",updatedAt:new Date,username:""}),[d,j]=x.useState([]),[c,q]=x.useState(0n),[m,h]=x.useState({description:"",recaptcha:null}),[g,T]=x.useState({total:0,offset:0,limit:10,beforeOffset:0}),z=()=>{V({offset:g.offset,limit:g.limit,cid:c}).then(t=>{var n;if(!t.data){l({message:"Failed to fetch chalkboard comments"});return}if(!t.data.status||!t.data.data){l({message:(n=t.data)==null?void 0:n.msg});return}t.data.data.total!==0&&(j([...d,...t.data.data.list]),T({...g,total:t.data.data.total,beforeOffset:g.offset}))}).catch(t=>l({message:t}))},B=()=>{a&&(o(),J({cid:c,content:m.description,ticket:m.recaptcha||""}).then(t=>{var n,b;if(!((n=t.data)!=null&&n.status)){l({message:(b=t.data)==null?void 0:b.msg});return}j([...d,{id:t.data.data||0n,author:a.id,username:a.username,firstname:a.firstname,lastname:a.lastname,content:m.description,reactions:[],createdAt:new Date,updatedAt:new Date}]),h({description:"",recaptcha:null,reply:void 0})}).catch(t=>l({message:t})))},H=(t,n)=>{X({cid:c,tid:n}).then(b=>{var C,y;if(!((C=b.data)!=null&&C.status)){l({message:(y=b.data)==null?void 0:y.msg});return}j([...d.slice(0,t),...d.slice(t+1,d.length)]),f({...s,comments:s.comments-1})}).catch(b=>l({message:b}))},_=x.useCallback(t=>{h(n=>({...n,description:t}))},[]);return x.useEffect(()=>{const t=p.id;if(!t){r("/chalkboard");return}const n=ce(t);if(!n){r("/chalkboard");return}q(n)},[p]),x.useEffect(()=>{c&&(s.title||G({id:c}).then(t=>{if(!t.data){l({message:"Failed to fetch chalkboard details"});return}if(!t.data.status||!t.data.data){l({message:t.data.msg});return}f(t.data.data)}).catch(t=>l({message:t})),z())},[c,g.limit,g.offset]),e.jsxs("div",{className:"md:w-10/12 ml-auto mr-auto mt-8",children:[e.jsx(ue,{isOpen:u,onOpenChange:o,children:e.jsx(fe,{children:t=>e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:i("captcha")}),e.jsx(pe,{className:"flex items-center justify-center",children:e.jsx(he,{onValueChange:n=>h({...m,recaptcha:n})})}),e.jsxs(ge,{children:[e.jsx(v,{color:"danger",variant:"light",onPress:t,children:i("cancel")}),e.jsx(v,{color:"primary",onPress:B,isDisabled:!m.recaptcha,children:i("submit")})]})]})})}),e.jsxs("div",{className:"block w-full pl-3 pr-3 md:pl-0 md:pr-0",children:[e.jsxs("h1",{className:"text-3xl",children:[e.jsx("bdi",{className:"break-words tracking-tight",children:s.title}),e.jsx("span",{className:"text-2xl text-gray-500",children:` #${c.toString(16).slice(0,8)}`})]}),e.jsx("div",{className:"flex mt-2 items-center",children:e.jsxs(e.Fragment,{children:[e.jsx(je,{startContent:e.jsx(Y,{height:"2em",width:"2em",style:{marginTop:"0.5rem",fill:"#FFFFFF"}}),className:"text-white pl-2",classNames:{content:"pl-0"},variant:"solid",color:"success",children:e.jsx("p",{className:"text-large font-medium",children:i("pages.chalkboard.open")})}),e.jsxs("div",{className:"inline ml-2 text-gray-500 text-small",children:[e.jsx(ve,{size:"sm",href:`/user/${s.username||s.author.toString()}`,className:"mr-1 font-medium text-medium text-gray-500",children:s.username?`@${s.username}`:`@${s.author.toString(16).slice(0,8)}`}),i("pages.chalkboard.details.hint_open",{created_at:A(ye.createdAt),comment:s.comments})]})]})})]}),e.jsx(w,{className:"mt-5 mb-5"}),e.jsx("div",{className:"flex gap-10",children:e.jsxs("div",{className:"w-full space-y-4",children:[e.jsx(F,{cid:c,id:0n,firstname:s.firstname,lastname:s.lastname,username:s.username||"",content:s.content,createdAt:s.createdAt,reactions:{username:"",reactions:s.reactions||[]},allowedDelete:!1,onDelete:()=>{},onReply:()=>h({...m,reply:void 0})}),d.map((t,n)=>e.jsx(F,{...t,username:t.username||"",cid:c,onReply:()=>{h({...m,reply:t.id}),_(`${te(t.content)}

${m.description}`)},allowedDelete:(a==null?void 0:a.id.toString())===t.author.toString(),onFollow:()=>{},onDelete:()=>H(n,t.id),reactions:{username:"",reactions:t.reactions||[]}},n)),a?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"mt-5 mb-5"}),e.jsxs(P,{fullWidth:!0,children:[e.jsx(M,{className:"pb-0",children:e.jsx("span",{className:"font-medium",children:i("pages.chalkboard.details.add_comment")})}),e.jsx(k,{className:"pb-1",children:e.jsx(ie,{className:"w-full max-h-screen",color:"primary",content:m.description,setContent:_,classNames:{panel:"px-0"},minRows:5,maxRows:15})}),e.jsxs($,{className:"pt-1 flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-sm font-medium text-transgender",children:["Remember, that your Comment should adhere to the"," ",e.jsx("p",{className:"font-bold inline",children:"iTrans Community Content Guidelines"})]})}),e.jsx(v,{className:"font-medium",color:"primary",isDisabled:!m.description,onPress:o,children:i("submit")})]})]})]}):null]})})]})};export{Ve as default};
