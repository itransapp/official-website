import{K as f,P as x,L as b,r as c,l as e,z as r,R as j}from"./index-BbDRvRl6.js";import{u as w,P as y}from"./Preview-DTeVes19.js";import{R as v}from"./index-9Np3C4zK.js";import{L as N,C as g}from"./ColorDot-DyqRVGdV.js";import{m as C,a as _,b as P,c as A,d as S}from"./chunk-II5OMS4Q-CHCYIPJj.js";import{s as i}from"./chunk-KRADFROI-HOKbUT8A.js";import{s as k,l as L}from"./chunk-ZFWMN6TD-Z8gVOKSC.js";import{i as R}from"./chunk-TC4QW7OA-BA-mUk_6.js";import"./index-CC48CE27.js";import"./index-DA-UXv0o.js";import"./import-DT7tNXLE.js";import"./import-C3mL1QH0.js";import"./chunk-LY2CD73K-OaXaY9yd.js";import"./chunk-CAFRINWI-CcU5yOMx.js";import"./chunk-OFH6WYRQ-CVPk87_g.js";import"./Combination-CHCGW9AK.js";import"./chunk-44JHHBS2-Dcz5RYuS.js";const U=()=>{const m=f(),{labels:u}=x(),{show:d}=b(),{isOpen:p,onOpenChange:o}=w(),[t,n]=c.useState({title:"",labels:[],description:"",recaptcha:null}),h=()=>{o(),j({labels:t.labels,title:t.title,content:t.description,visible:!0,ticket:t.recaptcha||""}).then(s=>{var a,l;if(!((a=s.data)!=null&&a.status)){d({message:(l=s.data)==null?void 0:l.msg});return}window.onbeforeunload=null,window.onunload=null,m("/chalkboard")}).catch(s=>{d({message:s})})};return c.useEffect(()=>{if(!t.title&&!t.description){window.onbeforeunload=null,window.onunload=null;return}window.onbeforeunload=()=>"The content has not been saved. Are you sure you want to leave?",window.onunload=()=>"The content has not been saved. Are you sure you want to leave?"},[t.title,t.description]),e.jsxs("div",{className:"pb-5",children:[e.jsx(C,{isOpen:p,onOpenChange:o,children:e.jsx(_,{children:s=>e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"Verify your is human"}),e.jsx(A,{className:"flex items-center justify-center",children:e.jsx(v,{onValueChange:a=>n({...t,recaptcha:a})})}),e.jsxs(S,{children:[e.jsx(r,{color:"danger",variant:"light",onPress:s,children:"Cancel"}),e.jsx(r,{color:"primary",onPress:h,isDisabled:!t.recaptcha,children:"Submit"})]})]})})}),e.jsxs("div",{className:"pl-1 pr-1 md:pl-4 md:pr-4",children:[e.jsx("span",{className:"ml-1 text-lg font-bold",children:"Add a title"}),e.jsx(i,{y:2}),e.jsx(R,{isClearable:!0,className:"font-medium",variant:"bordered",labelPlacement:"outside",value:t.title,onValueChange:s=>n({...t,title:s})}),e.jsx(i,{y:2}),e.jsx("span",{className:"ml-1 text-lg font-bold",children:"Add a description"}),e.jsx(i,{y:2}),e.jsx(y,{className:"w-full max-h-screen",color:"primary",content:t.description,setContent:s=>n({...t,description:s}),classNames:{panel:"px-0"}}),e.jsxs("div",{className:"flex flex-wrap justify-between space-y-2",children:[e.jsx(k,{items:u,label:"Labels",placeholder:"Select labels",labelPlacement:"inside",className:"font-medium",fullWidth:!1,selectionMode:"multiple",classNames:{value:"mt-1"},onSelectionChange:s=>{const a=[];for(const l of s)a.push(BigInt(l));n({...t,labels:a})},renderValue:s=>{const a=[];return s.map(l=>l.data?a.push({...l.data}):null),e.jsx(N,{size:"md",labels:a})},children:s=>e.jsx(L,{textValue:s.name,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{color:s.color,width:"1rem",height:"1rem"}),e.jsx("div",{className:"ml-2 truncate min-w-0 flex items-center",children:e.jsx("div",{className:"font-medium",children:s.name})})]})},s.id.toString())}),e.jsx(r,{className:"font-medium",color:"primary",onPress:()=>o(),isDisabled:!t.title||!t.description,children:"Submit new chalkboard"})]}),e.jsx("div",{className:"flex flex-wrap justify-end space-y-2",children:e.jsxs("p",{className:"text-sm font-medium text-transgender mt-3",children:["Remember, that your Chalkboard should adhere to the ",e.jsx("p",{className:"font-bold inline",children:"iTrans Community Content Guidelines"})]})})]})]})};export{U as default};
