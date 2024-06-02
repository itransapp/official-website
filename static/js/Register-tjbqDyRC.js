import{r as u,n as e,C as w,M as J,O as K,bX as I,z as r,b_ as X}from"./index-D6APwUTW.js";import{L as q,F as Q}from"./index-BeoW2HFN.js";import{T as Y,P as B,c as F,g as ee}from"./oauth2-DtAEGFYU.js";import{R as se}from"./index-DL0yfG4w.js";import{A as T}from"./index-GDUb_ijs.js";import{T as te}from"./Trans-BuzdzK_N.js";import{l as R}from"./chunk-4HJHOVVR-5n4F40U5.js";import{c as $}from"./chunk-H4VOEXHF-BgN6OVXB.js";import{i as L}from"./chunk-UWUNWEEL-C4n7mRoK.js";import{c as E}from"./chunk-JHUBASYZ-_hMh56-U.js";import{i as N}from"./chunk-NNXNFLWG-CROHFMTe.js";import{s as b}from"./chunk-IXXDDLGU-DL16Yohx.js";import{s as ae,l as C}from"./chunk-SWJHOPKY-CLDofC6-.js";import"./index-D-5-tOUf.js";import"./chunk-OZXMJY32-DHgDBK26.js";import"./import-Cx_ALsw0.js";import"./text-B64jcAFk.js";import"./context-CFtrlPnG.js";import"./import-CJ6h7l8b.js";import"./scrollIntoView-D0rOy9b1.js";import"./useSelectableItem-D-oaQRX9.js";import"./useCollator-CpP5gLAK.js";import"./chunk-44JHHBS2-Crx0OwVM.js";const ie=a=>{const{children:s=[],showProgressBar:t=!0,defaultActiveStep:j=1,prevText:P,continueText:n,submitText:p,onContinue:i=()=>{},onPrev:x=()=>{},onSubmit:y=()=>{},disableContinue:S=!1,disableSubmit:o=!1,btnPos:g="space-between",barWidth:h="",strokeColor:D="#cdd3d8",fillStroke:V="#3a4047",stroke:A=2,activeColor:z="#3A4047",activeProgressBorder:U="2px solid #f3f4f5",progressBarClassName:M="",contentBoxClassName:W="",allowClickControl:H=!0}=a,[d,v]=u.useState(0);u.useEffect(()=>{j<=s.length&&j>0?(_(j-1),v(j)):(_(0),v(1))},[]),u.useEffect(()=>{s.length>1&&t&&s.map((l,m)=>{const c=document.getElementById(`input_${m}`);c.classList.length>1?(c.style.background=z,c.style.border=U):(c.style.background="#fff",c.style.border="2px solid #3A4047")})},[d]);const O=()=>{if(!d||d<=1)return;_(d-2);const l=d-1;v(l),x(l)},Z=()=>{if(!d||d>=s.length)return;_(d);const l=d+1;v(l),i(l)},G=l=>{H&&(v(l+1),_(l))},_=l=>{var m;if(s.length>1&&t){const c=l/(s.length-1)*100;document.getElementsByClassName("percent")[0].style.width=`${c}%`}if(s.length>1&&t)for(let c=0;c<s.length;c++){const f=document.getElementById(`input_${c}`),k=parseInt((m=f==null?void 0:f.id)==null?void 0:m.split("_")[1]);k===l&&(f.classList.add("selected"),f.classList.remove("completed")),k<=l&&f.classList.add("completed"),k>l&&f.classList.remove("selected","completed")}};return e.jsxs("div",{className:"stepperDiv",children:[s.length>1&&t&&e.jsx("div",{className:`progressBarDiv ${M}`,children:e.jsxs("div",{className:"progressBarContainer",style:{width:h},children:[e.jsx("div",{className:"progress",style:{borderBottom:`${A}px solid ${D}`},children:e.jsx("div",{className:"percent",style:{borderBottom:`${A}px solid ${V}`}})}),e.jsx("div",{className:"steps",children:s.map((l,m)=>e.jsx("div",{className:"step",id:`input_${m}`,onClick:()=>G(m)},m))})]})}),e.jsxs("div",{className:W,children:[s.length>1?s.map((l,m)=>d===m+1&&l):s,e.jsxs("div",{style:{display:"flex",justifyContent:g,marginTop:"20px"},children:[d>1?e.jsx(w,{className:"font-medium",color:"default",onPress:O,children:P||"Prev"}):e.jsx("span",{}),d<s.length?e.jsx(w,{className:"font-medium",color:"primary",onPress:()=>Z(),isDisabled:S,children:n||"Next"}):e.jsx(w,{className:"font-medium",color:"primary",onPress:()=>y(d),isDisabled:o,children:p||"Submit"})]})]})]})},re=({form:a,setForm:s})=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(N,{isClearable:!0,className:"font-medium",type:"text",labelPlacement:"outside",label:r("pages.sign_up.step1.input1"),variant:"bordered",placeholder:" ",value:a.firstname,onValueChange:t=>s({...a,firstname:t})})}),e.jsx(b,{y:4}),e.jsx("div",{children:e.jsx(N,{isClearable:!0,className:"font-medium",type:"text",labelPlacement:"outside",label:r("pages.sign_up.step1.input2"),variant:"bordered",placeholder:" ",value:a.lastname,onValueChange:t=>s({...a,lastname:t})})}),e.jsx(b,{y:4}),e.jsxs(ae,{className:"font-medium",label:r("pages.sign_up.step1.input3"),labelPlacement:"outside",variant:"bordered",placeholder:r("pages.sign_up.step1.input3_placeholder"),onSelectionChange:t=>s({...a,irrigationDitch:t.values().next().value}),children:[e.jsx(C,{children:r("pages.sign_up.step1.options.key1")},"friend-recommend"),e.jsx(C,{children:r("pages.sign_up.step1.options.key2")},"search-engine"),e.jsx(C,{children:r("pages.sign_up.step1.options.key3")},"third-party-website-recommend"),e.jsx(C,{children:r("pages.sign_up.step1.options.key4")},"other")]})]}),le=({form:a,setForm:s})=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(N,{isClearable:!0,className:"font-medium",type:"email",labelPlacement:"outside",label:r("pages.sign_up.step2.input1"),variant:"bordered",placeholder:" ",errorMessage:I(a.email)?"":"invalid email address",value:a.email,onValueChange:t=>s({...a,email:t})})}),e.jsx(b,{y:4}),e.jsx("div",{children:e.jsx(N,{isClearable:!0,className:"font-medium",type:"text",labelPlacement:"outside",label:r("pages.sign_up.step2.input2"),variant:"bordered",placeholder:" ",value:a.inviteCode,onValueChange:t=>s({...a,inviteCode:t})})})]}),ne=({form:a,setForm:s})=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(B,{className:"font-medium",labelPlacement:"outside",label:r("pages.sign_up.step3.input1"),variant:"bordered",placeholder:" ",value:a.password,onValueChange:t=>s({...a,password:t})})}),e.jsx(b,{y:4}),e.jsx("div",{children:e.jsx(B,{className:"font-medium",labelPlacement:"outside",label:r("pages.sign_up.step3.input2"),variant:"bordered",placeholder:" ",value:a.repeatPassword,onValueChange:t=>s({...a,repeatPassword:t}),errorMessage:a.password!==a.repeatPassword?"invalid repeat password":""})}),e.jsx(b,{y:4}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(se,{onValueChange:t=>{s({...a,recaptcha:t})}})}),e.jsx(b,{y:4}),e.jsx("div",{className:"flex items-start",children:e.jsx(F,{onValueChange:t=>s({...a,acceptTerm:t}),children:e.jsx(te,{i18nKey:"pages.sign_up.step3.terms",components:{Link:e.jsx(R,{href:"/docs/t?part=term"})}})})})]}),Te=()=>{const a=J(),[s,t]=u.useState(!0),[j,P]=u.useState(!1),[n,p]=u.useState({step:1,disabled:!1}),[i,x]=u.useState({recaptcha:null,acceptTerm:!1,email:"",firstname:"",irrigationDitch:"",lastname:"",password:"",repeatPassword:""}),{show:y}=K(),S=()=>{p({...n,disabled:!0}),X({email:i.email,password:i.password,firstname:i.firstname,lastname:i.lastname,ticket:i.recaptcha,inviteCode:i.inviteCode}).then(o=>{var g,h;if(!((g=o.data)!=null&&g.status)){y({message:(h=o.data)==null?void 0:h.msg});return}a("/login")}).catch(o=>{y({message:o})}).finally(()=>{p({...n,disabled:!1})})};return u.useEffect(()=>{switch(p({...n,disabled:!0}),n.step){case 1:p({...n,disabled:!i.firstname||!i.lastname||!i.irrigationDitch});break;case 2:p({...n,disabled:!i.email||!I(i.email)});break;case 3:p({...n,disabled:!i.recaptcha||!i.password||i.password!==i.repeatPassword||!i.acceptTerm});break}},[i,n.step]),u.useEffect(()=>{const o=window.location.hash;if(!o)return;const g=new URLSearchParams(o.substring(1)).get("tgAuthResult");if(!g)return;const h=JSON.parse(atob(g));x({...i,firstname:h.first_name,lastname:h.last_name}),P(!0),t(!1)},[]),e.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:[e.jsx(R,{href:"/",children:e.jsx(q,{className:"select-none",width:200,loading:"lazy"})}),e.jsxs("div",{className:`${s?"":"hidden"} mt-10 flex flex-row justify-between space-x-4 text-medium`,children:[e.jsxs($,{isFooterBlurred:!0,radius:"lg",className:"border-none",children:[e.jsx(L,{alt:r("pages.sign_up.import_from_telegram"),className:"object-cover",height:200,src:T({src:"/images/gifs/signup_new_account.gif",custom:!0}),width:200,radius:"lg",isZoomed:!0}),e.jsx(E,{className:"p-0 justify-center overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10",children:e.jsx(w,{variant:"solid",color:"primary",radius:"lg",fullWidth:!0,onClick:()=>t(!1),children:r("pages.sign_up.new_account")})})]}),e.jsxs($,{isFooterBlurred:!0,radius:"lg",className:"border-none",children:[e.jsx(L,{alt:r("pages.sign_up.import_from_telegram"),className:"object-cover",height:200,src:T({src:"/images/gifs/signup_import_from_telegram.gif",custom:!0}),width:200,radius:"lg",isZoomed:!0}),e.jsx(E,{className:"p-0 justify-center overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10",children:e.jsx(w,{variant:"solid",color:"primary",radius:"lg",fullWidth:!0,onClick:()=>{window.location.href=Y({botID:"7068700945",origin:ee(),redirectURI:"https://itrans.app/signup"})},children:r("pages.sign_up.import_from_telegram")})})]})]}),e.jsx("div",{className:`w-full mt-6 sm:max-w-md xl:p-5 p-2 ${s?"hidden":""}`,children:e.jsxs(ie,{defaultActiveStep:n.step,showProgressBar:!1,prevText:r("step_prev"),continueText:r("step_next"),submitText:r("pages.sign_up.sign_up"),disableContinue:n.disabled,disableSubmit:n.disabled,onContinue:o=>p({...n,step:o}),onPrev:o=>p({...n,step:o}),onSubmit:S,children:[e.jsx(re,{form:i,setForm:x}),e.jsx(le,{form:i,setForm:x}),e.jsx(ne,{form:i,setForm:x})]})}),e.jsx(Q.Login,{})]})};export{Te as default};