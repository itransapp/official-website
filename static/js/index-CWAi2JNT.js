import{aE as f,aU as R,e as o,Z as E,ar as O,q as I,l as C,r as b,aV as u}from"./index-BYN8y91X.js";import{i as k}from"./chunk-OFGZKCFR-al74kn49.js";function j(e,a,s){let{isDisabled:l=!1,isReadOnly:i=!1,value:d,name:r,children:$,"aria-label":p,"aria-labelledby":P,validationState:n="valid",isInvalid:c}=e,g=t=>{t.stopPropagation(),a.setSelected(t.target.checked)},v=$!=null,m=p!=null||P!=null;!v&&!m&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:y,isPressed:S}=f({isDisabled:l}),{pressProps:x,isPressed:_}=f({isDisabled:l||i,onPress(){a.toggle()}}),{focusableProps:h}=R(e,s),L=o(y,h),D=E(e,{labelable:!0});return O(s,a.isSelected,a.setSelected),{labelProps:o(x,{onClick:t=>t.preventDefault()}),inputProps:o(D,{"aria-invalid":c||n==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":i||void 0,onChange:g,disabled:l,...d==null?{}:{value:d},name:r,type:"checkbox",...L}),isSelected:a.isSelected,isPressed:S||_,isDisabled:l,isReadOnly:i,isInvalid:c||n==="invalid"}}function z(e={}){let{isReadOnly:a}=e,[s,l]=I(e.isSelected,e.defaultSelected||!1,e.onChange);function i(r){a||l(r)}function d(){a||l(!s)}return{isSelected:s,setSelected:i,toggle:d}}const F=e=>C.jsx(k,{...e,src:"/logo.png"}),T={Login:b.lazy(()=>u(()=>import("./Login-DWOFrwgj.js"),__vite__mapDeps([0,1,2,3,4]))),Base:b.lazy(()=>u(()=>import("./Base-CPRf6CID.js"),__vite__mapDeps([5,1,2,3,4])))};export{j as $,T as F,F as L,z as a};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/js/Login-DWOFrwgj.js","static/js/index-BYN8y91X.js","static/css/index-DIjXEcGm.css","static/js/data-SKDLe2qg.js","static/js/chunk-MPX6TMFQ-Bwn6g9r0.js","static/js/Base-CPRf6CID.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}