import{M as x,aE as b,O as j,r as m,n as e,z as l,C as d,aG as w}from"./index-D6APwUTW.js";import{u as g,P as v}from"./Preview-Ej2WJ2Eu.js";import{R as y}from"./index-DL0yfG4w.js";import{L as _,C as N}from"./ColorDot-B7UR1BHm.js";import{m as C,a as k,b as P,c as A,d as D}from"./chunk-CQCLQUUP-cHkFKXm0.js";import{s as o}from"./chunk-IXXDDLGU-DL16Yohx.js";import{s as E,l as R}from"./chunk-SWJHOPKY-CLDofC6-.js";import{i as S}from"./chunk-NNXNFLWG-CROHFMTe.js";import"./index-MCf5YpR0.js";import"./context-CFtrlPnG.js";import"./useSelectableItem-D-oaQRX9.js";import"./scrollIntoView-D0rOy9b1.js";import"./import-CJ6h7l8b.js";import"./index-D-5-tOUf.js";import"./chunk-BOCK7NOT-DV8ciTKr.js";import"./chunk-OZXMJY32-DHgDBK26.js";import"./chunk-YOZJQNDF-D2Go2UR_.js";import"./import-Cx_ALsw0.js";import"./useCollator-CpP5gLAK.js";import"./chunk-44JHHBS2-Crx0OwVM.js";const $=()=>{const u=x(),{labels:p}=b(),{show:c}=j(),{isOpen:h,onOpenChange:i}=g(),[a,n]=m.useState({title:"",labels:[],description:"",recaptcha:null}),f=()=>{i(),w({labels:a.labels,title:a.title,content:a.description,visible:!0,ticket:a.recaptcha||""}).then(s=>{var t,r;if(!((t=s.data)!=null&&t.status)){c({message:(r=s.data)==null?void 0:r.msg});return}window.onbeforeunload=null,window.onunload=null,u("/chalkboard")}).catch(s=>{c({message:s})})};return m.useEffect(()=>{if(!a.title&&!a.description){window.onbeforeunload=null,window.onunload=null;return}window.onbeforeunload=()=>"The content has not been saved. Are you sure you want to leave?",window.onunload=()=>"The content has not been saved. Are you sure you want to leave?"},[a.title,a.description]),e.jsxs("div",{children:[e.jsx(C,{isOpen:h,onOpenChange:i,children:e.jsx(k,{children:s=>e.jsxs(e.Fragment,{children:[e.jsx(P,{children:l("captcha")}),e.jsx(A,{className:"flex items-center justify-center",children:e.jsx(y,{onValueChange:t=>n({...a,recaptcha:t})})}),e.jsxs(D,{children:[e.jsx(d,{color:"danger",variant:"light",onPress:s,children:l("cancel")}),e.jsx(d,{color:"primary",onPress:f,isDisabled:!a.recaptcha,children:l("submit")})]})]})})}),e.jsxs("div",{className:"pl-1 pr-1 md:pl-4 md:pr-4",children:[e.jsx("span",{className:"ml-1 text-lg font-bold",children:l("pages.chalkboard.create.add_title")}),e.jsx(o,{y:2}),e.jsx(S,{isClearable:!0,className:"font-medium",variant:"bordered",labelPlacement:"outside",value:a.title,onValueChange:s=>n({...a,title:s})}),e.jsx(o,{y:2}),e.jsx("span",{className:"ml-1 text-lg font-bold",children:l("pages.chalkboard.create.add_desc")}),e.jsx(o,{y:2}),e.jsx(v,{className:"w-full max-h-screen",color:"primary",content:a.description,setContent:s=>n({...a,description:s}),classNames:{panel:"px-0"}}),e.jsxs("div",{className:"flex flex-wrap justify-between",children:[e.jsx(E,{items:p,label:l("label"),placeholder:l("pages.chalkboard.create.add_label"),labelPlacement:"inside",className:"font-medium",fullWidth:!1,selectionMode:"multiple",classNames:{value:"mt-1"},onSelectionChange:s=>{const t=[];for(const r of s)t.push(BigInt(r));n({...a,labels:t})},renderValue:s=>{const t=[];return s.map(r=>r.data?t.push({...r.data}):null),e.jsx(_,{size:"md",labels:t})},children:s=>e.jsx(R,{textValue:s.name,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(N,{color:s.color,width:"1rem",height:"1rem"}),e.jsx("div",{className:"ml-2 truncate min-w-0 flex items-center",children:e.jsx("div",{className:"font-medium",children:s.name})})]})},s.id.toString())}),e.jsx(o,{y:2}),e.jsxs("div",{className:"flex justify-between w-full flex-col md:flex-row",children:[e.jsx(d,{className:"font-medium ",color:"primary",onPress:()=>i(),isDisabled:!a.title||!a.description,children:l("pages.chalkboard.create.submit")}),e.jsx(o,{y:2}),e.jsx("div",{children:e.jsxs("p",{className:"text-sm font-medium text-transgender",children:["Remember, that your Chalkboard should adhere to the"," ",e.jsx("p",{className:"font-bold inline",children:"iTrans Community Content Guidelines"})]})})]})]})]})]})};export{$ as default};
