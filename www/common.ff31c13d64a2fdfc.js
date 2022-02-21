"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1833:(y,g,u)=>{u.d(g,{c:()=>c});var d=u(9533),a=u(2335),v=u(1363);const c=(l,o)=>{let t,e;const n=(r,m,f)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(r,m);_&&o(_)?_!==t&&(s(),i(_,f)):s()},i=(r,m)=>{t=r,e||(e=t);const f=t;(0,d.c)(()=>f.classList.add("ion-activated")),m()},s=(r=!1)=>{if(!t)return;const m=t;(0,d.c)(()=>m.classList.remove("ion-activated")),r&&e!==t&&t.click(),t=void 0};return(0,v.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>n(r.currentX,r.currentY,a.a),onMove:r=>n(r.currentX,r.currentY,a.b),onEnd:()=>{s(!0),(0,a.h)(),e=void 0}})}},7438:(y,g,u)=>{u.d(g,{g:()=>d});const d=(o,t,e,n,i)=>v(o[1],t[1],e[1],n[1],i).map(s=>a(o[0],t[0],e[0],n[0],s)),a=(o,t,e,n,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+n*i))-o*Math.pow(i-1,3),v=(o,t,e,n,i)=>l((n-=i)-3*(e-=i)+3*(t-=i)-(o-=i),3*e-6*t+3*o,3*t-3*o,o).filter(r=>r>=0&&r<=1),l=(o,t,e,n)=>{if(0===o)return((o,t,e)=>{const n=t*t-4*o*e;return n<0?[]:[(-t+Math.sqrt(n))/(2*o),(-t-Math.sqrt(n))/(2*o)]})(t,e,n);const i=(3*(e/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*e+27*(n/=o))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const r=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===r)return[Math.pow(s/2,.5)-t/3];if(r>0)return[Math.pow(-s/2+Math.sqrt(r),1/3)-Math.pow(s/2+Math.sqrt(r),1/3)-t/3];const m=Math.sqrt(Math.pow(-i/3,3)),f=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(m,1/3);return[_*Math.cos(f/3)-t/3,_*Math.cos((f+2*Math.PI)/3)-t/3,_*Math.cos((f+4*Math.PI)/3)-t/3]}},5062:(y,g,u)=>{u.d(g,{i:()=>d});const d=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(y,g,u)=>{u.r(g),u.d(g,{startFocusVisible:()=>c});const d="ion-focused",v=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=l=>{let o=[],t=!0;const e=l?l.shadowRoot:document,n=l||document.body,i=w=>{o.forEach(p=>p.classList.remove(d)),w.forEach(p=>p.classList.add(d)),o=w},s=()=>{t=!1,i([])},r=w=>{t=v.includes(w.key),t||i([])},m=w=>{if(t&&w.composedPath){const p=w.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));i(p)}},f=()=>{e.activeElement===n&&i([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",m),e.addEventListener("focusout",f),e.addEventListener("touchstart",s),e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",m),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)},setFocus:i}}},5695:(y,g,u)=>{u.d(g,{C:()=>l,a:()=>v,d:()=>c});var d=u(5861),a=u(5359);const v=function(){var o=(0,d.Z)(function*(t,e,n,i,s,r){if(t)return t.attachViewToDom(e,n,s,i);if(!(r||"string"==typeof n||n instanceof HTMLElement))throw new Error("framework delegate is missing");const m="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(f=>m.classList.add(f)),s&&Object.assign(m,s),e.appendChild(m),yield new Promise(f=>(0,a.c)(m,f)),m});return function(e,n,i,s,r,m){return o.apply(this,arguments)}}(),c=(o,t)=>{if(t){if(o)return o.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},l=()=>{let o,t;return{attachViewToDom:function(){var i=(0,d.Z)(function*(s,r,m={},f=[]){if(o=s,r){const w="string"==typeof r?o.ownerDocument&&o.ownerDocument.createElement(r):r;f.forEach(p=>w.classList.add(p)),Object.assign(w,m),o.appendChild(w),yield new Promise(p=>(0,a.c)(w,p))}else if(o.children.length>0){const w=o.ownerDocument&&o.ownerDocument.createElement("div");f.forEach(p=>w.classList.add(p)),w.append(...o.children),o.appendChild(w)}const _=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),_.appendChild(o),o});return function(r,m){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},2335:(y,g,u)=>{u.d(g,{a:()=>v,b:()=>c,c:()=>a,d:()=>o,h:()=>l});const d={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},a=()=>{d.selection()},v=()=>{d.selectionStart()},c=()=>{d.selectionChanged()},l=()=>{d.selectionEnd()},o=t=>{d.impact(t)}},6665:(y,g,u)=>{u.d(g,{s:()=>d});const d=e=>{try{if(e instanceof class t{constructor(n){this.value=n}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),i=document.createElement("div");n.appendChild(i),i.innerHTML=e,o.forEach(f=>{const _=n.querySelectorAll(f);for(let w=_.length-1;w>=0;w--){const p=_[w];p.parentNode?p.parentNode.removeChild(p):n.removeChild(p);const E=v(p);for(let h=0;h<E.length;h++)a(E[h])}});const s=v(n);for(let f=0;f<s.length;f++)a(s[f]);const r=document.createElement("div");r.appendChild(n);const m=r.querySelector("div");return null!==m?m.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},a=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let i=e.attributes.length-1;i>=0;i--){const s=e.attributes.item(i),r=s.name;if(!l.includes(r.toLowerCase())){e.removeAttribute(r);continue}const m=s.value;null!=m&&m.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const n=v(e);for(let i=0;i<n.length;i++)a(n[i])},v=e=>null!=e.children?e.children:e.childNodes,c=()=>{const e=window,n=e&&e.Ionic&&e.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},l=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},8117:(y,g,u)=>{u.d(g,{a:()=>d,b:()=>s,c:()=>o,d:()=>r,e:()=>h,f:()=>v,g:()=>a,h:()=>p,i:()=>t,j:()=>n,k:()=>m,l:()=>e,m:()=>l,n:()=>c,o:()=>i,p:()=>f,q:()=>_,r:()=>w,s:()=>E});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(y,g,u)=>{u.r(g),u.d(g,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>E,keyboardDidClose:()=>f,keyboardDidOpen:()=>r,keyboardDidResize:()=>m,resetKeyboardAssist:()=>t,setKeyboardClose:()=>s,setKeyboardOpen:()=>i,startKeyboardAssist:()=>e,trackViewportChanges:()=>p});const d="ionKeyboardDidShow",a="ionKeyboardDidHide";let c={},l={},o=!1;const t=()=>{c={},l={},o=!1},e=h=>{n(h),h.visualViewport&&(l=E(h.visualViewport),h.visualViewport.onresize=()=>{p(h),r()||m(h)?i(h):f(h)&&s(h)})},n=h=>{h.addEventListener("keyboardDidShow",M=>i(h,M)),h.addEventListener("keyboardDidHide",()=>s(h))},i=(h,M)=>{_(h,M),o=!0},s=h=>{w(h),o=!1},r=()=>!o&&c.width===l.width&&(c.height-l.height)*l.scale>150,m=h=>o&&!f(h),f=h=>o&&l.height===h.innerHeight,_=(h,M)=>{const D=new CustomEvent(d,{detail:{keyboardHeight:M?M.keyboardHeight:h.innerHeight-l.height}});h.dispatchEvent(D)},w=h=>{const M=new CustomEvent(a);h.dispatchEvent(M)},p=h=>{c=Object.assign({},l),l=E(h.visualViewport)},E=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},9955:(y,g,u)=>{u.d(g,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(v,c,l)=>{const o=v*c/l-v+"ms",t=2*Math.PI*c/l;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(v,c,l)=>{const o=c/l,t=v*o-v+"ms",e=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(v,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(v,c,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*c+(c<l/2?180:-180)}deg)`,"animation-delay":v*c/l-v+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(v,c,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*c+(c<l/2?180:-180)}deg)`,"animation-delay":v*c/l-v+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(v,c,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":v*c/l-v+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(v,c,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":v*c/l-v+"ms"}})}}},7300:(y,g,u)=>{u.d(g,{c:()=>v,g:()=>l,h:()=>a,o:()=>t});var d=u(5861);const a=(e,n)=>null!==n.closest(e),v=(e,n)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},n):n,l=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(e).forEach(i=>n[i]=!0),n},o=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,d.Z)(function*(n,i,s,r){if(null!=n&&"#"!==n[0]&&!o.test(n)){const m=document.querySelector("ion-router");if(m)return null!=i&&i.preventDefault(),m.push(n,s,r)}return!1});return function(i,s,r,m){return e.apply(this,arguments)}}()},93:(y,g,u)=>{u.d(g,{q:()=>d});let d=(()=>{class a{constructor(c){this.vocable=c}}return a.ID="vocabulary:added",a})()},1018:(y,g,u)=>{u.d(g,{M:()=>d});let d=(()=>{class a{constructor(){}}return a.ID="vocabulary:imported",a})()},3513:(y,g,u)=>{u.d(g,{x:()=>d});let d=(()=>{class a{constructor(c){this.vocable=c}}return a.ID="vocabulary:updated",a})()},4090:(y,g,u)=>{u.d(g,{u:()=>d});var d=(()=>{return(a=d||(d={}))[a.NeverKnownOrPracticed=0]="NeverKnownOrPracticed",a[a.AtLeastOnceKnown=1]="AtLeastOnceKnown",a[a.OnTheRightTrack=2]="OnTheRightTrack",a[a.Good=3]="Good",a[a.VeryGood=4]="VeryGood",d;var a})()},1756:(y,g,u)=>{u.d(g,{c:()=>e});var d=u(655),a=u(93),v=u(1018),c=u(3513),l=u(9863),o=u(1485),t=u(6955);let e=(()=>{class n{constructor(s,r){this.db=s,this.eventBus=r}getAll(){return(0,d.mG)(this,void 0,void 0,function*(){return yield this.db.vocabulary.toArray()})}count(){return(0,d.mG)(this,void 0,void 0,function*(){return yield this.db.vocabulary.count()})}load(s,r){return(0,d.mG)(this,void 0,void 0,function*(){return yield this.db.vocabulary.reverse().offset(s).limit(r).toArray()})}search(s,r=10){return(0,d.mG)(this,void 0,void 0,function*(){return s=s.toLowerCase(),yield this.db.vocabulary.filter(m=>m.foreignMeaning.toLowerCase().includes(s)||!!m.nativeMeanings.find(f=>f.toLowerCase().includes(s))).limit(r).toArray()})}add(s){return(0,d.mG)(this,void 0,void 0,function*(){yield this.db.vocabulary.add(s),this.eventBus.cast(a.q.ID,new a.q(s))})}update(s){return(0,d.mG)(this,void 0,void 0,function*(){if(void 0===s.id)throw"vocable does not exist in database";yield this.db.vocabulary.put(s),this.eventBus.cast(c.x.ID,new c.x(s))})}delete(s){return(0,d.mG)(this,void 0,void 0,function*(){if(void 0===s.id)throw"vocable does not exist in database";yield this.db.vocabulary.delete(s.id)})}deleteAll(){return(0,d.mG)(this,void 0,void 0,function*(){yield this.db.vocabulary.clear()})}import(s){return(0,d.mG)(this,void 0,void 0,function*(){yield this.db.vocabulary.bulkPut(s),this.eventBus.cast(v.M.ID,new v.M)})}}return n.\u0275fac=function(s){return new(s||n)(l.LFG(o.S),l.LFG(t.F))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);