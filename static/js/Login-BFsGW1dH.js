import{l as e,r as u,M as _,K as N,L as C,z as L,y as i,B as x,N as g,aw as j,ax as P,ay as z}from"./index-Bdb2K0In.js";import{L as A,F as V}from"./index-Bi-ndJC6.js";import{P as H,c as M,G as B}from"./oauth2-DHt7GDpF.js";import{R as E}from"./index-QgJNSAtq.js";import{T as F}from"./Trans-V8zU5cAC.js";import{l as o}from"./chunk-MPX6TMFQ-CKC6tm38.js";import{i as R}from"./chunk-TC4QW7OA-CzQNgGc1.js";import{s as U}from"./chunk-KRADFROI-CSOyV3m0.js";import"./index-UZt1w7k1.js";import"./index-4p7Y4qC5.js";import"./chunk-OFGZKCFR-Dtjwqsqb.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./chunk-LY2CD73K-CI9XjIYS.js";import"./text-B64jcAFk.js";import"./context-C_qVSYZe.js";const S=a=>e.jsxs("svg",{height:"1em",width:"1em",viewBox:"0 0 48 48",...a,children:[e.jsx("defs",{children:e.jsx("path",{id:"a",d:"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"})}),e.jsx("clipPath",{id:"b",children:e.jsx("use",{xlinkHref:"#a",overflow:"visible"})}),e.jsx("path",{clipPath:"url(#b)",fill:"#FBBC05",d:"M0 37V11l17 13z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#EA4335",d:"M0 11l17 13 7-6.1L48 14V0H0z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#34A853",d:"M0 37l30-23 7.9 1L48 0v48H0z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#4285F4",d:"M48 48L17 24l-4-3 35-10z"})]}),ee=()=>{const[a,r]=u.useState({certificate:"",password:"",recaptcha:"",remember:!1}),{show:l}=_(),n=N(),{authed:v,update:b}=C(),w=L();u.useEffect(()=>{if(v()){n("/");return}},[]);const y=()=>{if(!g(a.certificate)&&!j(a.certificate)||!a.password||!a.recaptcha){l({message:"Invalid form input"});return}P({email:j(a.certificate)?a.certificate:void 0,username:g(a.certificate)?a.certificate:void 0,password:a.password,ticket:a.recaptcha}).then(s=>{var c,d,m,p;if(!((c=s.data)!=null&&c.status)){l({message:(d=s.data)==null?void 0:d.msg});return}b({ticket:(m=s.data.data)==null?void 0:m.ticket,expire:(p=s.data.data)==null?void 0:p.expire}),z().then(t=>{var f,h;!((f=t.data)!=null&&f.data)||!((h=t.data)!=null&&h.status)||w.set({...t.data.data.profile,recentActivity:t.data.data.recentActivity,emailVerified:t.data.data.emailVerified})}).catch(t=>{l({message:t.toString()})}).finally(()=>n("/"))}).catch(s=>l({message:s.toString()}))};return e.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:[e.jsx(o,{href:"/",children:e.jsx(A,{className:"select-none",width:200,loading:"lazy"})}),e.jsx("div",{className:"w-full mt-6 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-2",children:[e.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",children:[e.jsx("div",{children:e.jsx(R,{isClearable:!0,className:"font-medium",type:"email",labelPlacement:"outside",label:i("pages.sign_in.input1"),variant:"bordered",placeholder:" ",value:a.certificate,onValueChange:s=>{r({...a,certificate:s})},onClear:()=>{r({...a,certificate:""})}})}),e.jsx(U,{y:4}),e.jsx("div",{children:e.jsx(H,{className:"font-medium",labelPlacement:"outside",label:i("pages.sign_in.input2"),variant:"bordered",placeholder:" ",value:a.password,onValueChange:s=>{r({...a,password:s})}})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(E,{onValueChange:s=>{r({...a,recaptcha:s})}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-start",children:e.jsx(M,{isSelected:a.remember,onValueChange:s=>{r({...a,remember:s})},children:i("pages.sign_in.remember_me")})}),e.jsx(o,{isDisabled:!0,className:"font-medium",href:"/forgot_password",children:i("pages.sign_in.forgot_password")})]}),e.jsx(x,{className:"font-bold",color:"primary",fullWidth:!0,size:"lg",onClick:y,children:i("pages.sign_in.sign_in")}),e.jsx("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:e.jsx(F,{i18nKey:"pages.sign_in.hint_sign_up",components:{Link:e.jsx(o,{className:"font-medium",size:"sm",href:"/signup"})}})})]}),e.jsx("div",{className:"flex flex-col justify-center mt-6 space-y-2",children:e.jsx(x,{color:"secondary",startContent:e.jsx(S,{height:"1.5rem",width:"1.5rem"}),variant:"bordered",className:"font-medium",fullWidth:!0,onClick:()=>{window.location.href=B({clientID:"558588134492-5a8ln7oijv9mih62pet5huom9q03621r.apps.googleusercontent.com",redirectURI:"https://itrans.app/oauth2/google"})},children:i("pages.sign_in.use_google")})})]})}),e.jsx(V.Login,{})]})};export{ee as default};