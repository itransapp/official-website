import{a as x,b as M,c as $}from"./import-1WoNq3kn.js";import{q as k,r}from"./index-BqcC4ZVp.js";class b{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let e=this.keyMap.get(t);return e?e.prevKey:null}getKeyAfter(t){let e=this.keyMap.get(t);return e?e.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){return this.keyMap.get(t)}at(t){const e=[...this.getKeys()];return this.getItem(e[t])}getChildren(t){let e=this.keyMap.get(t);return(e==null?void 0:e.childNodes)||[]}constructor(t){this.keyMap=new Map,this.iterable=t;let e=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&s.type==="section")for(let l of s.childNodes)e(l)};for(let s of t)e(s);let i,y=0;for(let[s,l]of this.keyMap)i?(i.nextKey=s,l.prevKey=i.key):(this.firstKey=s,l.prevKey=void 0),l.type==="item"&&(l.index=y++),i=l,i.nextKey=void 0;this.lastKey=i==null?void 0:i.key}}function v(n){let{filter:t}=n,e=x(n),i=r.useMemo(()=>n.disabledKeys?new Set(n.disabledKeys):new Set,[n.disabledKeys]),y=r.useCallback(a=>t?new b(t(a)):new b(a),[t]),s=r.useMemo(()=>({suppressTextValueWarning:n.suppressTextValueWarning}),[n.suppressTextValueWarning]),l=M(n,y,s),f=r.useMemo(()=>new $(l,e),[l,e]);const u=r.useRef(null);return r.useEffect(()=>{if(e.focusedKey!=null&&!l.getItem(e.focusedKey)){const a=u.current.getItem(e.focusedKey),K=[...u.current.getKeys()].map(o=>{const g=u.current.getItem(o);return g.type==="item"?g:null}).filter(o=>o!==null),c=[...l.getKeys()].map(o=>{const g=l.getItem(o);return g.type==="item"?g:null}).filter(o=>o!==null),m=K.length-c.length;let d=Math.min(m>1?Math.max(a.index-m+1,0):a.index,c.length-1),h;for(;d>=0;){if(!f.isDisabled(c[d].key)){h=c[d];break}d<c.length-1?d++:(d>a.index&&(d=a.index),d--)}e.setFocusedKey(h?h.key:null)}u.current=l},[l,f,e,e.focusedKey]),{collection:l,disabledKeys:i,selectionManager:f}}function I(n){var t;let[e,i]=k(n.selectedKey,(t=n.defaultSelectedKey)!==null&&t!==void 0?t:null,n.onSelectionChange),y=r.useMemo(()=>e!=null?[e]:[],[e]),{collection:s,disabledKeys:l,selectionManager:f}=v({...n,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:y,onSelectionChange:a=>{var K;let c=(K=a.values().next().value)!==null&&K!==void 0?K:null;c===e&&n.onSelectionChange&&n.onSelectionChange(c),i(c)}}),u=e!=null?s.getItem(e):null;return{collection:s,disabledKeys:l,selectionManager:f,selectedKey:e,setSelectedKey:i,selectedItem:u}}export{I as $,v as a};
