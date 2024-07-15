import{aR as Ve,al as pe,r as w,a8 as xe,a9 as F,aa as De,R as Ge,ab as Me,ac as X,ad as je,ae as N,af as se,ag as V,e as J,ah as We,ai as Te,aj as ze,ak as Ye,h as Xe,am as ae,a7 as qe,aP as Oe,aS as Je}from"./index-CdfQvaAC.js";import{$ as Ze,a as Qe,i as _e,b as he}from"./import-Cw9Vh-pe.js";function le(t){return Ve()?t.altKey:t.ctrlKey}function z(t){return pe()?t.metaKey:t.ctrlKey}const et=1e3;function tt(t){let{keyboardDelegate:e,selectionManager:n,onTypeSelect:a}=t,u=w.useRef({search:"",timeout:null}).current,d=g=>{let h=rt(g.key);if(!h||g.ctrlKey||g.metaKey||!g.currentTarget.contains(g.target))return;h===" "&&u.search.trim().length>0&&(g.preventDefault(),"continuePropagation"in g||g.stopPropagation()),u.search+=h;let $=e.getKeyForSearch(u.search,n.focusedKey);$==null&&($=e.getKeyForSearch(u.search)),$!=null&&(n.setFocusedKey($),a&&a($)),clearTimeout(u.timeout),u.timeout=setTimeout(()=>{u.search=""},et)};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?d:null}}}function rt(t){return t.length===1||!/^[A-Z]/i.test(t)?t:""}let Y="default",ce="",te=new WeakMap;function Pe(t){if(xe()){if(Y==="default"){const e=F(t);ce=e.documentElement.style.webkitUserSelect,e.documentElement.style.webkitUserSelect="none"}Y="disabled"}else(t instanceof HTMLElement||t instanceof SVGElement)&&(te.set(t,t.style.userSelect),t.style.userSelect="none")}function Q(t){if(xe()){if(Y!=="disabled")return;Y="restoring",setTimeout(()=>{De(()=>{if(Y==="restoring"){const e=F(t);e.documentElement.style.webkitUserSelect==="none"&&(e.documentElement.style.webkitUserSelect=ce||""),ce="",Y="default"}})},300)}else if((t instanceof HTMLElement||t instanceof SVGElement)&&t&&te.has(t)){let e=te.get(t);t.style.userSelect==="none"&&(t.style.userSelect=e),t.getAttribute("style")===""&&t.removeAttribute("style"),te.delete(t)}}const Fe=Ge.createContext({register:()=>{}});Fe.displayName="PressResponderContext";function nt(t){let e=w.useContext(Fe);if(e){let{register:n,...a}=e;t=J(a,t),n()}return We(e,t.ref),t}var _=new WeakMap;class ee{continuePropagation(){Te(this,_,!1)}get shouldStopPropagation(){return ze(this,_)}constructor(e,n,a){Ye(this,_,{writable:!0,value:void 0}),Te(this,_,!0),this.type=e,this.pointerType=n,this.target=a.currentTarget,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.ctrlKey=a.ctrlKey,this.altKey=a.altKey}}const Ee=Symbol("linkClicked");function Ce(t){let{onPress:e,onPressChange:n,onPressStart:a,onPressEnd:u,onPressUp:d,isDisabled:g,isPressed:h,preventFocusOnPress:$,shouldCancelOnPointerExit:U,allowTextSelectionOnPress:E,ref:B,...b}=nt(t),[T,C]=w.useState(!1),k=w.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:m,removeAllGlobalListeners:x}=Me(),P=X((r,f)=>{let l=k.current;if(g||l.didFirePressStart)return!1;let s=!0;if(l.isTriggeringEvent=!0,a){let v=new ee("pressstart",f,r);a(v),s=v.shouldStopPropagation}return n&&n(!0),l.isTriggeringEvent=!1,l.didFirePressStart=!0,C(!0),s}),S=X((r,f,l=!0)=>{let s=k.current;if(!s.didFirePressStart)return!1;s.ignoreClickAfterPress=!0,s.didFirePressStart=!1,s.isTriggeringEvent=!0;let v=!0;if(u){let o=new ee("pressend",f,r);u(o),v=o.shouldStopPropagation}if(n&&n(!1),C(!1),e&&l&&!g){let o=new ee("press",f,r);e(o),v&&(v=o.shouldStopPropagation)}return s.isTriggeringEvent=!1,v}),L=X((r,f)=>{let l=k.current;if(g)return!1;if(d){l.isTriggeringEvent=!0;let s=new ee("pressup",f,r);return d(s),l.isTriggeringEvent=!1,s.shouldStopPropagation}return!0}),K=X(r=>{let f=k.current;f.isPressed&&f.target&&(f.isOverTarget&&f.pointerType!=null&&S(I(f.target,r),f.pointerType,!1),f.isPressed=!1,f.isOverTarget=!1,f.activePointerId=null,f.pointerType=null,x(),E||Q(f.target))}),D=X(r=>{U&&K(r)}),A=w.useMemo(()=>{let r=k.current,f={onKeyDown(s){if(oe(s.nativeEvent,s.currentTarget)&&s.currentTarget.contains(s.target)){var v;Se(s.target,s.key)&&s.preventDefault();let o=!0;if(!r.isPressed&&!s.repeat){r.target=s.currentTarget,r.isPressed=!0,o=P(s,"keyboard");let i=s.currentTarget,y=M=>{oe(M,i)&&!M.repeat&&i.contains(M.target)&&r.target&&L(I(r.target,M),"keyboard")};m(F(s.currentTarget),"keyup",Xe(y,l),!0)}o&&s.stopPropagation(),s.metaKey&&pe()&&((v=r.metaKeyEvents)===null||v===void 0||v.set(s.key,s.nativeEvent))}else s.key==="Meta"&&(r.metaKeyEvents=new Map)},onClick(s){if(!(s&&!s.currentTarget.contains(s.target))&&s&&s.button===0&&!r.isTriggeringEvent&&!ae.isOpening){let v=!0;if(g&&s.preventDefault(),!r.ignoreClickAfterPress&&!r.ignoreEmulatedMouseEvents&&!r.isPressed&&(r.pointerType==="virtual"||se(s.nativeEvent))){!g&&!$&&N(s.currentTarget);let o=P(s,"virtual"),i=L(s,"virtual"),y=S(s,"virtual");v=o&&i&&y}r.ignoreEmulatedMouseEvents=!1,r.ignoreClickAfterPress=!1,v&&s.stopPropagation()}}},l=s=>{var v;if(r.isPressed&&r.target&&oe(s,r.target)){var o;Se(s.target,s.key)&&s.preventDefault();let y=s.target;S(I(r.target,s),"keyboard",r.target.contains(y)),x(),s.key!=="Enter"&&ve(r.target)&&r.target.contains(y)&&!s[Ee]&&(s[Ee]=!0,ae(r.target,s,!1)),r.isPressed=!1,(o=r.metaKeyEvents)===null||o===void 0||o.delete(s.key)}else if(s.key==="Meta"&&(!((v=r.metaKeyEvents)===null||v===void 0)&&v.size)){var i;let y=r.metaKeyEvents;r.metaKeyEvents=void 0;for(let M of y.values())(i=r.target)===null||i===void 0||i.dispatchEvent(new KeyboardEvent("keyup",M))}};if(typeof PointerEvent<"u"){f.onPointerDown=i=>{if(i.button!==0||!i.currentTarget.contains(i.target))return;if(je(i.nativeEvent)){r.pointerType="virtual";return}ie(i.currentTarget)&&i.preventDefault(),r.pointerType=i.pointerType;let y=!0;r.isPressed||(r.isPressed=!0,r.isOverTarget=!0,r.activePointerId=i.pointerId,r.target=i.currentTarget,!g&&!$&&N(i.currentTarget),E||Pe(r.target),y=P(i,r.pointerType),m(F(i.currentTarget),"pointermove",s,!1),m(F(i.currentTarget),"pointerup",v,!1),m(F(i.currentTarget),"pointercancel",o,!1)),y&&i.stopPropagation()},f.onMouseDown=i=>{i.currentTarget.contains(i.target)&&i.button===0&&(ie(i.currentTarget)&&i.preventDefault(),i.stopPropagation())},f.onPointerUp=i=>{!i.currentTarget.contains(i.target)||r.pointerType==="virtual"||i.button===0&&W(i,i.currentTarget)&&L(i,r.pointerType||i.pointerType)};let s=i=>{i.pointerId===r.activePointerId&&(r.target&&W(i,r.target)?!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,P(I(r.target,i),r.pointerType)):r.target&&r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,S(I(r.target,i),r.pointerType,!1),D(i)))},v=i=>{i.pointerId===r.activePointerId&&r.isPressed&&i.button===0&&r.target&&(W(i,r.target)&&r.pointerType!=null?S(I(r.target,i),r.pointerType):r.isOverTarget&&r.pointerType!=null&&S(I(r.target,i),r.pointerType,!1),r.isPressed=!1,r.isOverTarget=!1,r.activePointerId=null,r.pointerType=null,x(),E||Q(r.target))},o=i=>{K(i)};f.onDragStart=i=>{i.currentTarget.contains(i.target)&&K(i)}}else{f.onMouseDown=o=>{if(o.button!==0||!o.currentTarget.contains(o.target))return;if(ie(o.currentTarget)&&o.preventDefault(),r.ignoreEmulatedMouseEvents){o.stopPropagation();return}r.isPressed=!0,r.isOverTarget=!0,r.target=o.currentTarget,r.pointerType=se(o.nativeEvent)?"virtual":"mouse",!g&&!$&&N(o.currentTarget),P(o,r.pointerType)&&o.stopPropagation(),m(F(o.currentTarget),"mouseup",s,!1)},f.onMouseEnter=o=>{if(!o.currentTarget.contains(o.target))return;let i=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!0,i=P(o,r.pointerType)),i&&o.stopPropagation()},f.onMouseLeave=o=>{if(!o.currentTarget.contains(o.target))return;let i=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!1,i=S(o,r.pointerType,!1),D(o)),i&&o.stopPropagation()},f.onMouseUp=o=>{o.currentTarget.contains(o.target)&&!r.ignoreEmulatedMouseEvents&&o.button===0&&L(o,r.pointerType||"mouse")};let s=o=>{if(o.button===0){if(r.isPressed=!1,x(),r.ignoreEmulatedMouseEvents){r.ignoreEmulatedMouseEvents=!1;return}r.target&&W(o,r.target)&&r.pointerType!=null?S(I(r.target,o),r.pointerType):r.target&&r.isOverTarget&&r.pointerType!=null&&S(I(r.target,o),r.pointerType,!1),r.isOverTarget=!1}};f.onTouchStart=o=>{if(!o.currentTarget.contains(o.target))return;let i=ot(o.nativeEvent);if(!i)return;r.activePointerId=i.identifier,r.ignoreEmulatedMouseEvents=!0,r.isOverTarget=!0,r.isPressed=!0,r.target=o.currentTarget,r.pointerType="touch",!g&&!$&&N(o.currentTarget),E||Pe(r.target),P(o,r.pointerType)&&o.stopPropagation(),m(V(o.currentTarget),"scroll",v,!0)},f.onTouchMove=o=>{if(!o.currentTarget.contains(o.target))return;if(!r.isPressed){o.stopPropagation();return}let i=me(o.nativeEvent,r.activePointerId),y=!0;i&&W(i,o.currentTarget)?!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,y=P(o,r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,y=S(o,r.pointerType,!1),D(o)),y&&o.stopPropagation()},f.onTouchEnd=o=>{if(!o.currentTarget.contains(o.target))return;if(!r.isPressed){o.stopPropagation();return}let i=me(o.nativeEvent,r.activePointerId),y=!0;i&&W(i,o.currentTarget)&&r.pointerType!=null?(L(o,r.pointerType),y=S(o,r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(y=S(o,r.pointerType,!1)),y&&o.stopPropagation(),r.isPressed=!1,r.activePointerId=null,r.isOverTarget=!1,r.ignoreEmulatedMouseEvents=!0,r.target&&!E&&Q(r.target),x()},f.onTouchCancel=o=>{o.currentTarget.contains(o.target)&&(o.stopPropagation(),r.isPressed&&K(o))};let v=o=>{r.isPressed&&o.target.contains(r.target)&&K({currentTarget:r.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};f.onDragStart=o=>{o.currentTarget.contains(o.target)&&K(o)}}return f},[m,g,$,x,E,K,D,S,P,L]);return w.useEffect(()=>()=>{var r;E||Q((r=k.current.target)!==null&&r!==void 0?r:void 0)},[E]),{isPressed:h||T,pressProps:J(b,A)}}function ve(t){return t.tagName==="A"&&t.hasAttribute("href")}function oe(t,e){const{key:n,code:a}=t,u=e,d=u.getAttribute("role");return(n==="Enter"||n===" "||n==="Spacebar"||a==="Space")&&!(u instanceof V(u).HTMLInputElement&&!Ae(u,n)||u instanceof V(u).HTMLTextAreaElement||u.isContentEditable)&&!((d==="link"||!d&&ve(u))&&n!=="Enter")}function ot(t){const{targetTouches:e}=t;return e.length>0?e[0]:null}function me(t,e){const n=t.changedTouches;for(let a=0;a<n.length;a++){const u=n[a];if(u.identifier===e)return u}return null}function I(t,e){return{currentTarget:t,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey}}function it(t){let e=0,n=0;return t.width!==void 0?e=t.width/2:t.radiusX!==void 0&&(e=t.radiusX),t.height!==void 0?n=t.height/2:t.radiusY!==void 0&&(n=t.radiusY),{top:t.clientY-n,right:t.clientX+e,bottom:t.clientY+n,left:t.clientX-e}}function st(t,e){return!(t.left>e.right||e.left>t.right||t.top>e.bottom||e.top>t.bottom)}function W(t,e){let n=e.getBoundingClientRect(),a=it(t);return st(n,a)}function ie(t){return!(t instanceof HTMLElement)||!t.hasAttribute("draggable")}function Se(t,e){return t instanceof HTMLInputElement?!Ae(t,e):t instanceof HTMLButtonElement?t.type!=="submit"&&t.type!=="reset":!ve(t)}const at=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ae(t,e){return t.type==="checkbox"||t.type==="radio"?e===" ":at.has(t.type)}let Z=null,lt=new Set,q=new Map,G=!1,ue=!1;function ge(t,e){for(let n of lt)n(t,e)}function ct(t){return!(t.metaKey||!pe()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function re(t){G=!0,ct(t)&&(Z="keyboard",ge("keyboard",t))}function O(t){Z="pointer",(t.type==="mousedown"||t.type==="pointerdown")&&(G=!0,ge("pointer",t))}function Re(t){se(t)&&(G=!0,Z="virtual")}function Ie(t){t.target===window||t.target===document||(!G&&!ue&&(Z="virtual",ge("virtual",t)),G=!1,ue=!1)}function Ne(){G=!1,ue=!0}function Ke(t){if(typeof window>"u"||q.get(V(t)))return;const e=V(t),n=F(t);let a=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){G=!0,a.apply(this,arguments)},n.addEventListener("keydown",re,!0),n.addEventListener("keyup",re,!0),n.addEventListener("click",Re,!0),e.addEventListener("focus",Ie,!0),e.addEventListener("blur",Ne,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",O,!0),n.addEventListener("pointermove",O,!0),n.addEventListener("pointerup",O,!0)):(n.addEventListener("mousedown",O,!0),n.addEventListener("mousemove",O,!0),n.addEventListener("mouseup",O,!0)),e.addEventListener("beforeunload",()=>{Ue(t)},{once:!0}),q.set(e,{focus:a})}const Ue=(t,e)=>{const n=V(t),a=F(t);e&&a.removeEventListener("DOMContentLoaded",e),q.has(n)&&(n.HTMLElement.prototype.focus=q.get(n).focus,a.removeEventListener("keydown",re,!0),a.removeEventListener("keyup",re,!0),a.removeEventListener("click",Re,!0),n.removeEventListener("focus",Ie,!0),n.removeEventListener("blur",Ne,!1),typeof PointerEvent<"u"?(a.removeEventListener("pointerdown",O,!0),a.removeEventListener("pointermove",O,!0),a.removeEventListener("pointerup",O,!0)):(a.removeEventListener("mousedown",O,!0),a.removeEventListener("mousemove",O,!0),a.removeEventListener("mouseup",O,!0)),q.delete(n))};function ut(t){const e=F(t);let n;return e.readyState!=="loading"?Ke(t):(n=()=>{Ke(t)},e.addEventListener("DOMContentLoaded",n)),()=>Ue(t,n)}typeof document<"u"&&ut();function fe(){return Z}const ft=500;function dt(t){let{isDisabled:e,onLongPressStart:n,onLongPressEnd:a,onLongPress:u,threshold:d=ft,accessibilityDescription:g}=t;const h=w.useRef();let{addGlobalListener:$,removeGlobalListener:U}=Me(),{pressProps:E}=Ce({isDisabled:e,onPressStart(b){if(b.continuePropagation(),(b.pointerType==="mouse"||b.pointerType==="touch")&&(n&&n({...b,type:"longpressstart"}),h.current=setTimeout(()=>{b.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),u&&u({...b,type:"longpress"}),h.current=void 0},d),b.pointerType==="touch")){let T=C=>{C.preventDefault()};$(b.target,"contextmenu",T,{once:!0}),$(window,"pointerup",()=>{setTimeout(()=>{U(b.target,"contextmenu",T)},30)},{once:!0})}},onPressEnd(b){h.current&&clearTimeout(h.current),a&&(b.pointerType==="mouse"||b.pointerType==="touch")&&a({...b,type:"longpressend"})}}),B=Ze(u&&!e?g:void 0);return{longPressProps:J(E,B)}}function de(t){const e=F(t);if(fe()==="virtual"){let n=e.activeElement;De(()=>{e.activeElement===n&&t.isConnected&&N(t)})}else N(t)}function pt(t){const e=V(t);if(!(t instanceof e.HTMLElement)&&!(t instanceof e.SVGElement))return!1;let{display:n,visibility:a}=t.style,u=n!=="none"&&a!=="hidden"&&a!=="collapse";if(u){const{getComputedStyle:d}=t.ownerDocument.defaultView;let{display:g,visibility:h}=d(t);u=g!=="none"&&h!=="hidden"&&h!=="collapse"}return u}function vt(t,e){return!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}function Be(t,e){return t.nodeName!=="#comment"&&pt(t)&&vt(t,e)&&(!t.parentElement||Be(t.parentElement,t))}const ye=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],gt=ye.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";ye.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const yt=ye.join(':not([hidden]):not([tabindex="-1"]),');function He(t,e){return!t||!e?!1:e.some(n=>n.contains(t))}function bt(t,e,n){let a=e!=null&&e.tabbable?yt:gt,u=F(t).createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode(d){var g;return!(e==null||(g=e.from)===null||g===void 0)&&g.contains(d)?NodeFilter.FILTER_REJECT:d.matches(a)&&Be(d)&&(!n||He(d,n))&&(!(e!=null&&e.accept)||e.accept(d))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return e!=null&&e.from&&(u.currentNode=e.from),u}class be{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,n,a){let u=this.fastMap.get(n??null);if(!u)return;let d=new we({scopeRef:e});u.addChild(d),d.parent=u,this.fastMap.set(e,d),a&&(d.nodeToRestore=a)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(e===null)return;let n=this.fastMap.get(e);if(!n)return;let a=n.parent;for(let d of this.traverse())d!==n&&n.nodeToRestore&&d.nodeToRestore&&n.scopeRef&&n.scopeRef.current&&He(d.nodeToRestore,n.scopeRef.current)&&(d.nodeToRestore=n.nodeToRestore);let u=n.children;a&&(a.removeChild(n),u.size>0&&u.forEach(d=>a&&a.addChild(d))),this.fastMap.delete(n.scopeRef)}*traverse(e=this.root){if(e.scopeRef!=null&&(yield e),e.children.size>0)for(let n of e.children)yield*this.traverse(n)}clone(){var e;let n=new be;var a;for(let u of this.traverse())n.addTreeNode(u.scopeRef,(a=(e=u.parent)===null||e===void 0?void 0:e.scopeRef)!==null&&a!==void 0?a:null,u.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new we({scopeRef:null}),this.fastMap.set(null,this.root)}}class we{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new be;function ht(t){let{selectionManager:e,keyboardDelegate:n,ref:a,autoFocus:u=!1,shouldFocusWrap:d=!1,disallowEmptySelection:g=!1,disallowSelectAll:h=!1,selectOnFocus:$=e.selectionBehavior==="replace",disallowTypeAhead:U=!1,shouldUseVirtualFocus:E,allowsTabNavigation:B=!1,isVirtualized:b,scrollRef:T=a,linkBehavior:C="action"}=t,{direction:k}=qe(),m=Oe(),x=l=>{if(l.altKey&&l.key==="Tab"&&l.preventDefault(),!a.current.contains(l.target))return;const s=(p,H)=>{if(p!=null){if(e.isLink(p)&&C==="selection"&&$&&!le(l)){Je.flushSync(()=>{e.setFocusedKey(p,H)});let j=T.current.querySelector(`[data-key="${CSS.escape(p.toString())}"]`),$e=e.getItemProps(p);m.open(j,l,$e.href,$e.routerOptions);return}if(e.setFocusedKey(p,H),e.isLink(p)&&C==="override")return;l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(p):$&&!le(l)&&e.replaceSelection(p)}};switch(l.key){case"ArrowDown":if(n.getKeyBelow){var v,o;l.preventDefault();let p=e.focusedKey!=null?n.getKeyBelow(e.focusedKey):(v=n.getFirstKey)===null||v===void 0?void 0:v.call(n);p==null&&d&&(p=(o=n.getFirstKey)===null||o===void 0?void 0:o.call(n,e.focusedKey)),s(p)}break;case"ArrowUp":if(n.getKeyAbove){var i,y;l.preventDefault();let p=e.focusedKey!=null?n.getKeyAbove(e.focusedKey):(i=n.getLastKey)===null||i===void 0?void 0:i.call(n);p==null&&d&&(p=(y=n.getLastKey)===null||y===void 0?void 0:y.call(n,e.focusedKey)),s(p)}break;case"ArrowLeft":if(n.getKeyLeftOf){var M,c;l.preventDefault();let p=n.getKeyLeftOf(e.focusedKey);p==null&&d&&(p=k==="rtl"?(M=n.getFirstKey)===null||M===void 0?void 0:M.call(n,e.focusedKey):(c=n.getLastKey)===null||c===void 0?void 0:c.call(n,e.focusedKey)),s(p,k==="rtl"?"first":"last")}break;case"ArrowRight":if(n.getKeyRightOf){var R,ne;l.preventDefault();let p=n.getKeyRightOf(e.focusedKey);p==null&&d&&(p=k==="rtl"?(R=n.getLastKey)===null||R===void 0?void 0:R.call(n,e.focusedKey):(ne=n.getFirstKey)===null||ne===void 0?void 0:ne.call(n,e.focusedKey)),s(p,k==="rtl"?"last":"first")}break;case"Home":if(n.getFirstKey){l.preventDefault();let p=n.getFirstKey(e.focusedKey,z(l));e.setFocusedKey(p),z(l)&&l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(p):$&&e.replaceSelection(p)}break;case"End":if(n.getLastKey){l.preventDefault();let p=n.getLastKey(e.focusedKey,z(l));e.setFocusedKey(p),z(l)&&l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(p):$&&e.replaceSelection(p)}break;case"PageDown":if(n.getKeyPageBelow){l.preventDefault();let p=n.getKeyPageBelow(e.focusedKey);s(p)}break;case"PageUp":if(n.getKeyPageAbove){l.preventDefault();let p=n.getKeyPageAbove(e.focusedKey);s(p)}break;case"a":z(l)&&e.selectionMode==="multiple"&&h!==!0&&(l.preventDefault(),e.selectAll());break;case"Escape":!g&&e.selectedKeys.size!==0&&(l.stopPropagation(),l.preventDefault(),e.clearSelection());break;case"Tab":if(!B){if(l.shiftKey)a.current.focus();else{let p=bt(a.current,{tabbable:!0}),H,j;do j=p.lastChild(),j&&(H=j);while(j);H&&!H.contains(document.activeElement)&&N(H)}break}}},P=w.useRef({top:0,left:0});Qe(T,"scroll",b?null:()=>{P.current={top:T.current.scrollTop,left:T.current.scrollLeft}});let S=l=>{if(e.isFocused){l.currentTarget.contains(l.target)||e.setFocused(!1);return}if(l.currentTarget.contains(l.target)){if(e.setFocused(!0),e.focusedKey==null){let o=y=>{y!=null&&(e.setFocusedKey(y),$&&e.replaceSelection(y))},i=l.relatedTarget;var s,v;i&&l.currentTarget.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?o((s=e.lastSelectedKey)!==null&&s!==void 0?s:n.getLastKey()):o((v=e.firstSelectedKey)!==null&&v!==void 0?v:n.getFirstKey())}else b||(T.current.scrollTop=P.current.top,T.current.scrollLeft=P.current.left);if(!b&&e.focusedKey!=null){let o=T.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);o&&(o.contains(document.activeElement)||N(o),fe()==="keyboard"&&he(o,{containingElement:a.current}))}}},L=l=>{l.currentTarget.contains(l.relatedTarget)||e.setFocused(!1)};const K=w.useRef(u);w.useEffect(()=>{if(K.current){let l=null;u==="first"&&(l=n.getFirstKey()),u==="last"&&(l=n.getLastKey());let s=e.selectedKeys;if(s.size){for(let v of s)if(e.canSelectItem(v)){l=v;break}}e.setFocused(!0),e.setFocusedKey(l),l==null&&!E&&de(a.current)}},[]);let D=w.useRef(e.focusedKey);w.useEffect(()=>{let l=fe();if(e.isFocused&&e.focusedKey!=null&&(T!=null&&T.current)){let s=T.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);s&&(l==="keyboard"||K.current)&&(b||_e(T.current,s),l!=="virtual"&&he(s,{containingElement:a.current}))}e.isFocused&&e.focusedKey==null&&D.current!=null&&de(a.current),D.current=e.focusedKey,K.current=!1},[b,T,e.focusedKey,e.isFocused,a]);let A={onKeyDown:x,onFocus:S,onBlur:L,onMouseDown(l){T.current===l.target&&l.preventDefault()}},{typeSelectProps:r}=tt({keyboardDelegate:n,selectionManager:e});U||(A=J(r,A));let f;return E||(f=e.focusedKey==null?0:-1),{collectionProps:{...A,tabIndex:f}}}function Pt(t){let{selectionManager:e,key:n,ref:a,shouldSelectOnPressUp:u,shouldUseVirtualFocus:d,focus:g,isDisabled:h,onAction:$,allowsDifferentPressOrigin:U,linkBehavior:E="action"}=t,B=Oe(),b=c=>{if(c.pointerType==="keyboard"&&le(c))e.toggleSelection(n);else{if(e.selectionMode==="none")return;if(e.isLink(n)){if(E==="selection"){let R=e.getItemProps(n);B.open(a.current,c,R.href,R.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(E==="override"||E==="none")return}e.selectionMode==="single"?e.isSelected(n)&&!e.disallowEmptySelection?e.toggleSelection(n):e.replaceSelection(n):c&&c.shiftKey?e.extendSelection(n):e.selectionBehavior==="toggle"||c&&(z(c)||c.pointerType==="touch"||c.pointerType==="virtual")?e.toggleSelection(n):e.replaceSelection(n)}};w.useEffect(()=>{n===e.focusedKey&&e.isFocused&&!d&&(g?g():document.activeElement!==a.current&&de(a.current))},[a,n,e.focusedKey,e.childFocusStrategy,e.isFocused,d]),h=h||e.isDisabled(n);let T={};!d&&!h?T={tabIndex:n===e.focusedKey?0:-1,onFocus(c){c.target===a.current&&e.setFocusedKey(n)}}:h&&(T.onMouseDown=c=>{c.preventDefault()});let C=e.isLink(n)&&E==="override",k=e.isLink(n)&&E!=="selection"&&E!=="none",m=!h&&e.canSelectItem(n)&&!C,x=($||k)&&!h,P=x&&(e.selectionBehavior==="replace"?!m:!m||e.isEmpty),S=x&&m&&e.selectionBehavior==="replace",L=P||S,K=w.useRef(null),D=L&&m,A=w.useRef(!1),r=w.useRef(!1),f=c=>{if($&&$(),k){let R=e.getItemProps(n);B.open(a.current,c,R.href,R.routerOptions)}},l={};u?(l.onPressStart=c=>{K.current=c.pointerType,A.current=D,c.pointerType==="keyboard"&&(!L||Le())&&b(c)},U?(l.onPressUp=P?null:c=>{c.pointerType!=="keyboard"&&m&&b(c)},l.onPress=P?f:null):l.onPress=c=>{if(P||S&&c.pointerType!=="mouse"){if(c.pointerType==="keyboard"&&!ke())return;f(c)}else c.pointerType!=="keyboard"&&m&&b(c)}):(l.onPressStart=c=>{K.current=c.pointerType,A.current=D,r.current=P,m&&(c.pointerType==="mouse"&&!P||c.pointerType==="keyboard"&&(!x||Le()))&&b(c)},l.onPress=c=>{(c.pointerType==="touch"||c.pointerType==="pen"||c.pointerType==="virtual"||c.pointerType==="keyboard"&&L&&ke()||c.pointerType==="mouse"&&r.current)&&(L?f(c):m&&b(c))}),T["data-key"]=n,l.preventFocusOnPress=d;let{pressProps:s,isPressed:v}=Ce(l),o=S?c=>{K.current==="mouse"&&(c.stopPropagation(),c.preventDefault(),f(c))}:void 0,{longPressProps:i}=dt({isDisabled:!D,onLongPress(c){c.pointerType==="touch"&&(b(c),e.setSelectionBehavior("toggle"))}}),y=c=>{K.current==="touch"&&A.current&&c.preventDefault()},M=e.isLink(n)?c=>{ae.isOpening||c.preventDefault()}:void 0;return{itemProps:J(T,m||P?s:{},D?i:{},{onDoubleClick:o,onDragStartCapture:y,onClick:M}),isPressed:v,isSelected:e.isSelected(n),isFocused:e.isFocused&&e.focusedKey===n,isDisabled:h,allowsSelection:m,hasAction:L}}function ke(){let t=window.event;return(t==null?void 0:t.key)==="Enter"}function Le(){let t=window.event;return(t==null?void 0:t.key)===" "||(t==null?void 0:t.code)==="Space"}export{Pt as $,ht as a};
