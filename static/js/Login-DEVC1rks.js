import{r as g,O as w,M as N,N as C,B as L,n as e,z as r,C as h,P as x,b_ as j,b$ as A,c0 as P}from"./index-CdfQvaAC.js";import{L as V,F}from"./index-CT0eaP_6.js";import{P as R,c as T,G as U}from"./oauth2-Di0ms9Kz.js";import{R as z}from"./index-Bbsk-tbw.js";import{G as E}from"./Google-C-td5cl0.js";import{T as G}from"./Trans-C56zKsEg.js";import{l}from"./chunk-4HJHOVVR-BDi0_4ms.js";import{i as S}from"./chunk-NNXNFLWG-CweIpbc1.js";import{s as I}from"./chunk-IXXDDLGU-BPztPuYK.js";import"./index-BP6GSUqB.js";import"./index-DHiFKBZu.js";import"./chunk-UWUNWEEL-D5JstLy5.js";import"./chunk-OZXMJY32-J5zo1sif.js";import"./chunk-CIZQCQPA-CUQ3Sjur.js";import"./import-BwPBkkid.js";import"./text-B64jcAFk.js";import"./context-DKp-FRtK.js";const te=()=>{const[a,i]=g.useState({certificate:"",password:"",recaptcha:null,remember:!1}),{show:o}=w(),n=N(),{authed:b,update:v}=C(),y=L();g.useEffect(()=>{if(b()){n("/");return}},[]);const _=()=>{if(!x(a.certificate)&&!j(a.certificate)||!a.password||!a.recaptcha){o({message:"Invalid form input"});return}A({email:j(a.certificate)?a.certificate:void 0,username:x(a.certificate)?a.certificate:void 0,password:a.password,ticket:a.recaptcha}).then(t=>{var c,d,m,p;if(!((c=t.data)!=null&&c.status)){i({...a,recaptcha:null}),o({message:(d=t.data)==null?void 0:d.msg});return}v({ticket:(m=t.data.data)==null?void 0:m.ticket,expire:(p=t.data.data)==null?void 0:p.expire}),P().then(s=>{var f,u;!((f=s.data)!=null&&f.data)||!((u=s.data)!=null&&u.status)||(y.set({...s.data.data.profile,emailVerified:s.data.data.emailVerified,bindTelegram:s.data.data.bindTelegram,recentActivity:s.data.data.recentActivity,subscription:s.data.data.subscription,twoFactor:s.data.data.twoFactor}),s.data.data.emailVerified||n("/user/verify_email"))}).catch(s=>{o({message:s.toString()})}).finally(()=>n("/"))}).catch(t=>o({message:t.toString()}))};return e.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:[e.jsx(l,{href:"/",children:e.jsx(V,{className:"select-none",width:200,loading:"lazy"})}),e.jsx("div",{className:"w-full mt-6 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-2",children:[e.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",children:[e.jsx("div",{children:e.jsx(S,{isClearable:!0,className:"font-medium",type:"email",labelPlacement:"outside",label:r("pages.sign_in.input1"),variant:"bordered",placeholder:" ",value:a.certificate,onValueChange:t=>{i({...a,certificate:t})},onClear:()=>{i({...a,certificate:""})}})}),e.jsx(I,{y:4}),e.jsx("div",{children:e.jsx(R,{className:"font-medium",labelPlacement:"outside",label:r("pages.sign_in.input2"),variant:"bordered",placeholder:" ",value:a.password,onValueChange:t=>{i({...a,password:t})}})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(z,{onValueChange:t=>{i({...a,recaptcha:t})}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-start",children:e.jsx(T,{isSelected:a.remember,onValueChange:t=>{i({...a,remember:t})},children:r("pages.sign_in.remember_me")})}),e.jsx(l,{isDisabled:!0,className:"font-medium",href:"/forgot_password",children:r("pages.sign_in.forgot_password")})]}),e.jsx(h,{className:"font-bold",color:"primary",fullWidth:!0,size:"lg",onClick:_,children:r("pages.sign_in.sign_in")}),e.jsx("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:e.jsx(G,{i18nKey:"pages.sign_in.hint_sign_up",components:{Link:e.jsx(l,{className:"font-medium",size:"sm",href:"/signup"})}})})]}),e.jsx("div",{className:"flex flex-col justify-center mt-6 space-y-2",children:e.jsx(h,{color:"secondary",startContent:e.jsx(E,{height:"1.5rem",width:"1.5rem"}),variant:"bordered",className:"font-medium",fullWidth:!0,onClick:()=>{window.location.href=U({clientID:"558588134492-5a8ln7oijv9mih62pet5huom9q03621r.apps.googleusercontent.com",redirectURI:"https://itrans.app/oauth2/google"})},children:r("pages.sign_in.use_google")})})]})}),e.jsx(F.Login,{})]})};export{te as default};
