import{r as g,O as w,M as N,N as C,B as L,n as e,z as i,C as h,P as x,bX as j,bY as A,bZ as P}from"./index-BZuw93n6.js";import{L as V,F as R}from"./index-ChNaDT1y.js";import{P as U,c as z,G as E}from"./oauth2-DAPA5i-w.js";import{R as G}from"./index-CNvPc50Z.js";import{G as S}from"./Google-CeAuoRrE.js";import{T as F}from"./Trans-Bz2Icpdg.js";import{l as n}from"./chunk-4HJHOVVR-CXAIXo2B.js";import{i as I}from"./chunk-NNXNFLWG-jK9JqOol.js";import{s as T}from"./chunk-IXXDDLGU-yum4hPNY.js";import"./index-DuXFV1Sf.js";import"./index-BFz3kMmm.js";import"./chunk-UWUNWEEL-D7WxGfPl.js";import"./chunk-OZXMJY32-VBfMvjtg.js";import"./chunk-CIZQCQPA-juggb4aQ.js";import"./import-BmH5WJZm.js";import"./text-B64jcAFk.js";import"./context-CxrHh6qv.js";const se=()=>{const[a,r]=g.useState({certificate:"",password:"",recaptcha:"",remember:!1}),{show:o}=w(),l=N(),{authed:v,update:b}=C(),y=L();g.useEffect(()=>{if(v()){l("/");return}},[]);const _=()=>{if(!x(a.certificate)&&!j(a.certificate)||!a.password||!a.recaptcha){o({message:"Invalid form input"});return}A({email:j(a.certificate)?a.certificate:void 0,username:x(a.certificate)?a.certificate:void 0,password:a.password,ticket:a.recaptcha}).then(s=>{var c,m,d,p;if(!((c=s.data)!=null&&c.status)){o({message:(m=s.data)==null?void 0:m.msg});return}b({ticket:(d=s.data.data)==null?void 0:d.ticket,expire:(p=s.data.data)==null?void 0:p.expire}),P().then(t=>{var f,u;!((f=t.data)!=null&&f.data)||!((u=t.data)!=null&&u.status)||y.set({...t.data.data.profile,recentActivity:t.data.data.recentActivity,emailVerified:t.data.data.emailVerified})}).catch(t=>{o({message:t.toString()})}).finally(()=>l("/"))}).catch(s=>o({message:s.toString()}))};return e.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:[e.jsx(n,{href:"/",children:e.jsx(V,{className:"select-none",width:200,loading:"lazy"})}),e.jsx("div",{className:"w-full mt-6 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-2",children:[e.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",children:[e.jsx("div",{children:e.jsx(I,{isClearable:!0,className:"font-medium",type:"email",labelPlacement:"outside",label:i("pages.sign_in.input1"),variant:"bordered",placeholder:" ",value:a.certificate,onValueChange:s=>{r({...a,certificate:s})},onClear:()=>{r({...a,certificate:""})}})}),e.jsx(T,{y:4}),e.jsx("div",{children:e.jsx(U,{className:"font-medium",labelPlacement:"outside",label:i("pages.sign_in.input2"),variant:"bordered",placeholder:" ",value:a.password,onValueChange:s=>{r({...a,password:s})}})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(G,{onValueChange:s=>{r({...a,recaptcha:s})}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-start",children:e.jsx(z,{isSelected:a.remember,onValueChange:s=>{r({...a,remember:s})},children:i("pages.sign_in.remember_me")})}),e.jsx(n,{isDisabled:!0,className:"font-medium",href:"/forgot_password",children:i("pages.sign_in.forgot_password")})]}),e.jsx(h,{className:"font-bold",color:"primary",fullWidth:!0,size:"lg",onClick:_,children:i("pages.sign_in.sign_in")}),e.jsx("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:e.jsx(F,{i18nKey:"pages.sign_in.hint_sign_up",components:{Link:e.jsx(n,{className:"font-medium",size:"sm",href:"/signup"})}})})]}),e.jsx("div",{className:"flex flex-col justify-center mt-6 space-y-2",children:e.jsx(h,{color:"secondary",startContent:e.jsx(S,{height:"1.5rem",width:"1.5rem"}),variant:"bordered",className:"font-medium",fullWidth:!0,onClick:()=>{window.location.href=E({clientID:"558588134492-5a8ln7oijv9mih62pet5huom9q03621r.apps.googleusercontent.com",redirectURI:"https://itrans.app/oauth2/google"})},children:i("pages.sign_in.use_google")})})]})}),e.jsx(R.Login,{})]})};export{se as default};
