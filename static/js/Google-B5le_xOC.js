import{bW as b,M as v,O as A,N as j,B as y,r as g,ci as E,c0 as w,n as i,cj as F}from"./index-CZ9qgNtX.js";const T=()=>{const[s]=b(),e=v(),{show:r}=A(),{authed:p,update:h}=j(),x=y();return g.useEffect(()=>{if(p()){e("/");return}},[]),g.useEffect(()=>{const d=s.get("state"),o=s.get("code");if(!d||!o){r({message:"invalid params 'state', 'code'"}),setTimeout(()=>e("/login"),1500);return}E({state:d,code:o}).then(a=>{var n,u,c,l;if(!((n=a.data)!=null&&n.status)||!a.data.data){e("/"),r({message:(u=a.data)==null?void 0:u.msg});return}h({ticket:(c=a.data.data)==null?void 0:c.ticket,expire:(l=a.data.data)==null?void 0:l.expire}),w().then(t=>{var f,m;!((f=t.data)!=null&&f.data)||!((m=t.data)!=null&&m.status)||(x.set({...t.data.data.profile,emailVerified:t.data.data.emailVerified,bindTelegram:t.data.data.bindTelegram,recentActivity:t.data.data.recentActivity,subscription:t.data.data.subscription,twoFactor:t.data.data.twoFactor}),t.data.data.emailVerified||e("/user/verify_email"))}).finally(()=>e("/"))}).catch(a=>{r({message:a}),e("/")})},[s]),i.jsx(i.Fragment,{children:i.jsx(F,{})})};export{T as default};