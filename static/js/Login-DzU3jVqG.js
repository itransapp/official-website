import{l as e,r as g,M as b,K as C,L as N,z as L,y as o,B as n,N as x,ay as j,az as A,aA as P}from"./index-DRvFTYPe.js";import{L as R,F as z}from"./index-BMdAIpgh.js";import{P as F,c as S}from"./Password-DdHoEfaa.js";import{R as U}from"./index-n3-5Dd4l.js";import{r as E}from"./text-B64jcAFk.js";import{T as V}from"./Trans-Bj5qprHj.js";import{l as c}from"./chunk-MPX6TMFQ-CMOUOn_9.js";import{i as $}from"./chunk-TC4QW7OA-BlWzeEIC.js";import{s as B}from"./chunk-KRADFROI-B2hRjb4P.js";import"./index-DCNQ8fe8.js";import"./index-BpVUWTyF.js";import"./chunk-OFGZKCFR-BAgrYf4h.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./chunk-LY2CD73K-P2tgL981.js";import"./context-BSWbG1mg.js";const H=t=>e.jsxs("svg",{height:"1em",width:"1em",viewBox:"0 0 48 48",...t,children:[e.jsx("defs",{children:e.jsx("path",{id:"a",d:"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"})}),e.jsx("clipPath",{id:"b",children:e.jsx("use",{xlinkHref:"#a",overflow:"visible"})}),e.jsx("path",{clipPath:"url(#b)",fill:"#FBBC05",d:"M0 37V11l17 13z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#EA4335",d:"M0 11l17 13 7-6.1L48 14V0H0z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#34A853",d:"M0 37l30-23 7.9 1L48 0v48H0z"}),e.jsx("path",{clipPath:"url(#b)",fill:"#4285F4",d:"M48 48L17 24l-4-3 35-10z"})]}),M=()=>`${window.location.protocol}//${window.location.host}`,T=({clientID:t,redirectURI:a})=>`https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({client_id:t,redirect_uri:a,response_type:"code",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",state:E(16)}).toString()}`,I=({botID:t,origin:a,redirectURI:i})=>`https://oauth.telegram.org/auth?${new URLSearchParams({bot_id:t,origin:a,embed:"1",request_access:"write",return_to:i}).toString()}`,k=t=>e.jsxs("svg",{height:"1em",width:"1em",viewBox:"0 0 240.1 240.1",...t,children:[e.jsxs("linearGradient",{id:"Oval_1_",gradientUnits:"userSpaceOnUse",x1:"-838.041",y1:"660.581",x2:"-838.041",y2:"660.3427",gradientTransform:"matrix(1000 0 0 -1000 838161 660581)",children:[e.jsx("stop",{offset:"0",style:{stopColor:"#2AABEE"}}),e.jsx("stop",{offset:"1",style:{stopColor:"#229ED9"}})]}),e.jsx("circle",{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#Oval_1_)",cx:"120.1",cy:"120.1",r:"120.1"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FFFFFF",d:"M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3 c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8 c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"})]}),ie=()=>{const[t,a]=g.useState({certificate:"",password:"",recaptcha:"",remember:!1}),{show:i}=b(),l=C(),{authed:w,update:v}=N(),y=L();g.useEffect(()=>{if(w()){l("/");return}},[]);const _=()=>{if(!x(t.certificate)&&!j(t.certificate)||!t.password||!t.recaptcha){i({message:"Invalid form input"});return}A({email:j(t.certificate)?t.certificate:void 0,username:x(t.certificate)?t.certificate:void 0,password:t.password,ticket:t.recaptcha}).then(s=>{var d,m,p,h;if(!((d=s.data)!=null&&d.status)){i({message:(m=s.data)==null?void 0:m.msg});return}v({ticket:(p=s.data.data)==null?void 0:p.ticket,expire:(h=s.data.data)==null?void 0:h.expire}),P().then(r=>{var u,f;!((u=r.data)!=null&&u.data)||!((f=r.data)!=null&&f.status)||y.set({...r.data.data.profile,recentActivity:r.data.data.recentActivity,emailVerified:r.data.data.emailVerified})}).catch(r=>{i({message:r.toString()})}).finally(()=>l("/"))}).catch(s=>i({message:s.toString()}))};return e.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:[e.jsx(c,{href:"/",children:e.jsx(R,{className:"select-none",width:200,loading:"lazy"})}),e.jsx("div",{className:"w-full mt-6 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-2",children:[e.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",children:[e.jsx("div",{children:e.jsx($,{isClearable:!0,className:"font-medium",type:"email",labelPlacement:"outside",label:o("pages.sign_in.input1"),variant:"bordered",placeholder:" ",value:t.certificate,onValueChange:s=>{a({...t,certificate:s})},onClear:()=>{a({...t,certificate:""})}})}),e.jsx(B,{y:4}),e.jsx("div",{children:e.jsx(F,{className:"font-medium",labelPlacement:"outside",label:o("pages.sign_in.input2"),variant:"bordered",placeholder:" ",value:t.password,onValueChange:s=>{a({...t,password:s})}})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(U,{onValueChange:s=>{a({...t,recaptcha:s})}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-start",children:e.jsx(S,{isSelected:t.remember,onValueChange:s=>{a({...t,remember:s})},children:o("pages.sign_in.remember_me")})}),e.jsx(c,{isDisabled:!0,className:"font-medium",href:"/forgot_password",children:o("pages.sign_in.forgot_password")})]}),e.jsx(n,{className:"font-bold",color:"primary",fullWidth:!0,size:"lg",onClick:_,children:o("pages.sign_in.sign_in")}),e.jsx("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:e.jsx(V,{i18nKey:"pages.sign_in.hint_sign_up",components:{Link:e.jsx(c,{className:"font-medium",size:"sm",href:"/signup"})}})})]}),e.jsxs("div",{className:"flex flex-col justify-center mt-6 space-y-2",children:[e.jsx(n,{color:"secondary",startContent:e.jsx(H,{height:"1.5rem",width:"1.5rem"}),variant:"bordered",className:"font-medium",fullWidth:!0,onClick:()=>{window.location.href=T({clientID:"558588134492-5a8ln7oijv9mih62pet5huom9q03621r.apps.googleusercontent.com",redirectURI:"https://itrans.app/oauth2/google"})},children:o("pages.sign_in.use_google")}),e.jsx(n,{color:"secondary",startContent:e.jsx(k,{height:"1.5rem",width:"1.5rem"}),variant:"bordered",className:"font-medium",fullWidth:!0,onClick:()=>{window.location.href=I({botID:"7068700945",origin:M(),redirectURI:"https://itrans.app/oauth2/telegram"})},children:"使用Telegram账户登录"})]})]})}),e.jsx(z.Login,{})]})};export{ie as default};
