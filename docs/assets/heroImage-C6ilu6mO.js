(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function m(e,t,r,a){var o=arguments.length,s=o<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,r):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=globalThis,Se=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,De=Symbol(),We=new WeakMap;let fr=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==De)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Se&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=We.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&We.set(r,t))}return t}toString(){return this.cssText}};const Br=e=>new fr(typeof e=="string"?e:e+"",void 0,De),D=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((a,o,s)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new fr(r,e,De)},Ur=(e,t)=>{if(Se)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const a=document.createElement("style"),o=Ht.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=r.cssText,e.appendChild(a)}},Je=Se?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return Br(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hr,defineProperty:qr,getOwnPropertyDescriptor:Vr,getOwnPropertyNames:jr,getOwnPropertySymbols:Gr,getPrototypeOf:Kr}=Object,it=globalThis,Xe=it.trustedTypes,Yr=Xe?Xe.emptyScript:"",re=it.reactiveElementPolyfillSupport,Ct=(e,t)=>e,Vt={toAttribute(e,t){switch(t){case Boolean:e=e?Yr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Re=(e,t)=>!Hr(e,t),Ze={attribute:!0,type:String,converter:Vt,reflect:!1,useDefault:!1,hasChanged:Re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),it.litPropertyMetadata??(it.litPropertyMetadata=new WeakMap);let bt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ze){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(t,a,r);o!==void 0&&qr(this.prototype,t,o)}}static getPropertyDescriptor(t,r,a){const{get:o,set:s}=Vr(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:o,set(n){const i=o==null?void 0:o.call(this);s==null||s.call(this,n),this.requestUpdate(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ze}static _$Ei(){if(this.hasOwnProperty(Ct("elementProperties")))return;const t=Kr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ct("properties"))){const r=this.properties,a=[...jr(r),...Gr(r)];for(const o of a)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,o]of r)this.elementProperties.set(a,o)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const o=this._$Eu(r,a);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const o of a)r.unshift(Je(o))}else t!==void 0&&r.push(Je(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ur(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostConnected)==null?void 0:a.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostDisconnected)==null?void 0:a.call(r)})}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){var s;const a=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,a);if(o!==void 0&&a.reflect===!0){const n=(((s=a.converter)==null?void 0:s.toAttribute)!==void 0?a.converter:Vt).toAttribute(r,a.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,r){var s,n;const a=this.constructor,o=a._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=a.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:((s=i.converter)==null?void 0:s.fromAttribute)!==void 0?i.converter:Vt;this._$Em=o;const d=l.fromAttribute(r,i.type);this[o]=d??((n=this._$Ej)==null?void 0:n.get(o))??d,this._$Em=null}}requestUpdate(t,r,a){var o;if(t!==void 0){const s=this.constructor,n=this[t];if(a??(a=s.getPropertyOptions(t)),!((a.hasChanged??Re)(n,r)||a.useDefault&&a.reflect&&n===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:o,wrapped:s},n){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??r??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:i}=n,l=this[s];i!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(a=this._$EO)==null||a.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(a=>{var o;return(o=a.hostUpdated)==null?void 0:o.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[Ct("elementProperties")]=new Map,bt[Ct("finalized")]=new Map,re==null||re({ReactiveElement:bt}),(it.reactiveElementVersions??(it.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr={attribute:!0,type:String,converter:Vt,reflect:!1,hasChanged:Re},Jr=(e=Wr,t,r)=>{const{kind:a,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),a==="accessor"){const{name:n}=r;return{set(i){const l=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,l,e)},init(i){return i!==void 0&&this.C(n,void 0,e,i),i}}}if(a==="setter"){const{name:n}=r;return function(i){const l=this[n];t.call(this,i),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+a)};function _(e){return(t,r)=>typeof r=="object"?Jr(e,t,r):((a,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,a),n?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(e){return _({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(e,t){return(r,a,o)=>{const s=n=>{var i;return((i=n.renderRoot)==null?void 0:i.querySelector(e))??null};return Kt(r,a,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xr;function Zr(e){return(t,r)=>Kt(t,r,{get(){return(this.renderRoot??Xr??(Xr=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(e){return(t,r)=>{const{slot:a,selector:o}=e??{},s="slot"+(a?`[name=${a}]`:":not([name])");return Kt(t,r,{get(){var l;const n=(l=this.renderRoot)==null?void 0:l.querySelector(s),i=(n==null?void 0:n.assignedElements(e))??[];return o===void 0?i:i.filter(d=>d.matches(o))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qr(e){return(t,r)=>{const{slot:a}=e??{},o="slot"+(a?`[name=${a}]`:":not([name])");return Kt(t,r,{get(){var n;const s=(n=this.renderRoot)==null?void 0:n.querySelector(o);return(s==null?void 0:s.assignedNodes(e))??[]}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=globalThis,jt=At.trustedTypes,Qe=jt?jt.createPolicy("lit-html",{createHTML:e=>e}):void 0,br="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,vr="?"+st,ta=`<${vr}>`,pt=document,kt=()=>pt.createComment(""),Pt=e=>e===null||typeof e!="object"&&typeof e!="function",Fe=Array.isArray,ea=e=>Fe(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tr=/-->/g,er=/>/g,ct=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rr=/'/g,ar=/"/g,yr=/^(?:script|style|textarea|title)$/i,ra=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=ra(1),mt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),or=new WeakMap,dt=pt.createTreeWalker(pt,129);function gr(e,t){if(!Fe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(t):t}const aa=(e,t)=>{const r=e.length-1,a=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=wt;for(let i=0;i<r;i++){const l=e[i];let d,h,u=-1,f=0;for(;f<l.length&&(n.lastIndex=f,h=n.exec(l),h!==null);)f=n.lastIndex,n===wt?h[1]==="!--"?n=tr:h[1]!==void 0?n=er:h[2]!==void 0?(yr.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=ct):h[3]!==void 0&&(n=ct):n===ct?h[0]===">"?(n=o??wt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?ct:h[3]==='"'?ar:rr):n===ar||n===rr?n=ct:n===tr||n===er?n=wt:(n=ct,o=void 0);const b=n===ct&&e[i+1].startsWith("/>")?" ":"";s+=n===wt?l+ta:u>=0?(a.push(d),l.slice(0,u)+br+l.slice(u)+st+b):l+st+(u===-2?i:b)}return[gr(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class It{constructor({strings:t,_$litType$:r},a){let o;this.parts=[];let s=0,n=0;const i=t.length-1,l=this.parts,[d,h]=aa(t,r);if(this.el=It.createElement(d,a),dt.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=dt.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(br)){const f=h[n++],b=o.getAttribute(u).split(st),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:x[2],strings:b,ctor:x[1]==="."?sa:x[1]==="?"?na:x[1]==="@"?ia:Wt}),o.removeAttribute(u)}else u.startsWith(st)&&(l.push({type:6,index:s}),o.removeAttribute(u));if(yr.test(o.tagName)){const u=o.textContent.split(st),f=u.length-1;if(f>0){o.textContent=jt?jt.emptyScript:"";for(let b=0;b<f;b++)o.append(u[b],kt()),dt.nextNode(),l.push({type:2,index:++s});o.append(u[f],kt())}}}else if(o.nodeType===8)if(o.data===vr)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(st,u+1))!==-1;)l.push({type:7,index:s}),u+=st.length-1}s++}}static createElement(t,r){const a=pt.createElement("template");return a.innerHTML=t,a}}function yt(e,t,r=e,a){var n,i;if(t===mt)return t;let o=a!==void 0?(n=r._$Co)==null?void 0:n[a]:r._$Cl;const s=Pt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((i=o==null?void 0:o._$AO)==null||i.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,r,a)),a!==void 0?(r._$Co??(r._$Co=[]))[a]=o:r._$Cl=o),o!==void 0&&(t=yt(e,o._$AS(e,t.values),o,a)),t}class oa{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,o=((t==null?void 0:t.creationScope)??pt).importNode(r,!0);dt.currentNode=o;let s=dt.nextNode(),n=0,i=0,l=a[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Tt(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new la(s,this,t)),this._$AV.push(d),l=a[++i]}n!==(l==null?void 0:l.index)&&(s=dt.nextNode(),n++)}return dt.currentNode=pt,o}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class Tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,a,o){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=yt(this,t,r),Pt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==mt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ea(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Pt(this._$AH)?this._$AA.nextSibling.data=t:this.T(pt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:a}=t,o=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=It.createElement(gr(a.h,a.h[0]),this.options)),a);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(r);else{const n=new oa(o,this),i=n.u(this.options);n.p(r),this.T(i),this._$AH=n}}_$AC(t){let r=or.get(t.strings);return r===void 0&&or.set(t.strings,r=new It(t)),r}k(t){Fe(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,o=0;for(const s of t)o===r.length?r.push(a=new Tt(this.O(kt()),this.O(kt()),this,this.options)):a=r[o],a._$AI(s),o++;o<r.length&&(this._$AR(a&&a._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,r);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Wt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,o,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=y}_$AI(t,r=this,a,o){const s=this.strings;let n=!1;if(s===void 0)t=yt(this,t,r,0),n=!Pt(t)||t!==this._$AH&&t!==mt,n&&(this._$AH=t);else{const i=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=yt(this,i[a+l],r,l),d===mt&&(d=this._$AH[l]),n||(n=!Pt(d)||d!==this._$AH[l]),d===y?t=y:t!==y&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}n&&!o&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sa extends Wt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class na extends Wt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class ia extends Wt{constructor(t,r,a,o,s){super(t,r,a,o,s),this.type=5}_$AI(t,r=this){if((t=yt(this,t,r,0)??y)===mt)return;const a=this._$AH,o=t===y&&a!==y||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,s=t!==y&&(a===y||o);o&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class la{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const oe=At.litHtmlPolyfillSupport;oe==null||oe(It,Tt),(At.litHtmlVersions??(At.litHtmlVersions=[])).push("3.3.1");const ca=(e,t,r)=>{const a=(r==null?void 0:r.renderBefore)??t;let o=a._$litPart$;if(o===void 0){const s=(r==null?void 0:r.renderBefore)??null;a._$litPart$=o=new Tt(t.insertBefore(kt(),s),s,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis;let N=class extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ca(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return mt}};var mr;N._$litElement$=!0,N.finalized=!0,(mr=ht.litElementHydrateSupport)==null||mr.call(ht,{LitElement:N});const se=ht.litElementPolyfillSupport;se==null||se({LitElement:N});(ht.litElementVersions??(ht.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class da extends N{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return k`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ha=D`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pe=class extends da{};pe.styles=[ha];pe=m([K("md-elevation")],pe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xr=Symbol("attachableController");let qt;qt=new MutationObserver(e=>{var t;for(const r of e)(t=r.target[xr])==null||t.hostConnected()});class _r{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,r){this.host=t,this.onControlChange=r,this.currentControl=null,t.addController(this),t[xr]=this,qt==null||qt.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ua=["focusin","focusout","pointerdown"];class Oe extends N{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new _r(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){var r;if(!t[sr]){switch(t.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[sr]=!0}}onControlChange(t,r){for(const a of ua)t==null||t.removeEventListener(a,this),r==null||r.addEventListener(a,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}m([_({type:Boolean,reflect:!0})],Oe.prototype,"visible",void 0);m([_({type:Boolean,reflect:!0})],Oe.prototype,"inward",void 0);const sr=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pa=D`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let me=class extends Oe{};me.styles=[pa];me=m([K("md-focus-ring")],me);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma={ATTRIBUTE:1},fa=e=>(...t)=>({_$litDirective$:e,values:t});let ba=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,a){this._$Ct=t,this._$AM=r,this._$Ci=a}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=fa(class extends ba{constructor(e){var t;if(super(e),e.type!==ma.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var a,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((a=this.nt)!=null&&a.has(s))&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return mt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wr={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const va=450,nr=225,ya=.2,ga=10,xa=75,_a=.35,wa="::after",Ca="forwards";var H;(function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(H||(H={}));const Aa=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],$a=150,ne=window.matchMedia("(forced-colors: active)");class Mt extends N{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=H.INACTIVE,this.attachableController=new _r(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return k`<div class="surface ${Jt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==H.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===H.HOLDING){this.state=H.WAITING_FOR_CLICK;return}if(this.state===H.TOUCH_DELAY){this.state=H.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=H.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.state=H.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,$a)}),this.state===H.TOUCH_DELAY&&(this.state=H.HOLDING,this.startPressAnimation(t))}}handleClick(){if(!this.disabled){if(this.state===H.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===H.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:t,width:r}=this.getBoundingClientRect(),a=Math.max(t,r),o=Math.max(_a*a,xa),s=this.currentCSSZoom??1,n=Math.floor(a*ya/s),l=Math.sqrt(r**2+t**2)+ga;this.initialSize=n;const d=(l+o)/n;this.rippleScale=`${d/s}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(t){const{scrollX:r,scrollY:a}=window,{left:o,top:s}=this.getBoundingClientRect(),n=r+o,i=a+s,{pageX:l,pageY:d}=t,h=this.currentCSSZoom??1;return{x:(l-n)/h,y:(d-i)/h}}getTranslationCoordinates(t){const{height:r,width:a}=this.getBoundingClientRect(),o=this.currentCSSZoom??1,s={x:(a/o-this.initialSize)/2,y:(r/o-this.initialSize)/2};let n;return t instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(t):n={x:a/o/2,y:r/o/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:s}}startPressAnimation(t){var n;if(!this.mdRoot)return;this.pressed=!0,(n=this.growAnimation)==null||n.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:a}=this.getTranslationCoordinates(t),o=`${r.x}px, ${r.y}px`,s=`${a.x}px, ${a.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${o}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:wa,duration:va,easing:wr.STANDARD,fill:Ca})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=H.INACTIVE;const t=this.growAnimation;let r=1/0;if(typeof(t==null?void 0:t.currentTime)=="number"?r=t.currentTime:t!=null&&t.currentTime&&(r=t.currentTime.to("ms").value),r>=nr){this.pressed=!1;return}await new Promise(a=>{setTimeout(a,nr-r)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);const r=t.buttons===1;return this.isTouch(t)||r}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!(ne!=null&&ne.matches))switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break}}onControlChange(t,r){for(const a of Aa)t==null||t.removeEventListener(a,this),r==null||r.addEventListener(a,this)}}m([_({type:Boolean,reflect:!0})],Mt.prototype,"disabled",void 0);m([Le()],Mt.prototype,"hovered",void 0);m([Le()],Mt.prototype,"pressed",void 0);m([gt(".surface")],Mt.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ka=D`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fe=class extends Mt{};fe.styles=[ka];fe=m([K("md-ripple")],fe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cr=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Pa=Cr.map(Ar);function ie(e){return Pa.includes(e)}function Ar(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ot=Symbol("privateIgnoreAttributeChangesFor");function Ne(e){var t;class r extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(o,s,n){if(!ie(o)){super.attributeChangedCallback(o,s,n);return}if(this[Ot].has(o))return;this[Ot].add(o),this.removeAttribute(o),this[Ot].delete(o);const i=ve(o);n===null?delete this.dataset[i]:this.dataset[i]=n,this.requestUpdate(ve(o),s)}getAttribute(o){return ie(o)?super.getAttribute(be(o)):super.getAttribute(o)}removeAttribute(o){super.removeAttribute(o),ie(o)&&(super.removeAttribute(be(o)),this.requestUpdate())}}return t=Ot,Ia(r),r}function Ia(e){for(const t of Cr){const r=Ar(t),a=be(r),o=ve(r);e.createProperty(t,{attribute:r,noAccessor:!0}),e.createProperty(Symbol(a),{attribute:a,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(s){const n=this.dataset[o]??null;s!==n&&(s===null?delete this.dataset[o]:this.dataset[o]=s,this.requestUpdate(t,n))}})}}function be(e){return`data-${e}`}function ve(e){return e.replace(/-\w/,t=>t[1].toUpperCase())}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ze=Symbol("internals"),le=Symbol("privateInternals");function Ea(e){class t extends e{get[ze](){return this[le]||(this[le]=this.attachInternals()),this[le]}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ta(e){e.addInitializer(t=>{const r=t;r.addEventListener("click",async a=>{const{type:o,[ze]:s}=r,{form:n}=s;if(!(!n||o==="button")&&(await new Promise(i=>{setTimeout(i)}),!a.defaultPrevented)){if(o==="reset"){n.reset();return}n.addEventListener("submit",i=>{Object.defineProperty(i,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),s.setFormValue(r.value),n.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ma(e){const t=new MouseEvent("click",{bubbles:!0});return e.dispatchEvent(t),t}function Sa(e){return e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!Da(e)}function Da(e){const t=ye;return t&&(e.preventDefault(),e.stopImmediatePropagation()),Ra(),t}let ye=!1;async function Ra(){ye=!0,await null,ye=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const La=Ne(Ea(N));class V extends La{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[ze].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){var t;(t=this.buttonElement)==null||t.focus()}blur(){var t;(t=this.buttonElement)==null||t.blur()}render(){var o;const t=this.disabled||this.softDisabled,r=this.href?this.renderLink():this.renderButton(),a=this.href?"link":"button";return k`
      ${(o=this.renderElevationOrOutline)==null?void 0:o.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${a}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${a}
        ?disabled="${t}"></md-ripple>
      ${r}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:r,ariaExpanded:a}=this;return k`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||y}
      aria-label="${t||y}"
      aria-haspopup="${r||y}"
      aria-expanded="${a||y}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:r,ariaExpanded:a}=this;return k`<a
      id="link"
      class="button"
      aria-label="${t||y}"
      aria-haspopup="${r||y}"
      aria-expanded="${a||y}"
      aria-disabled=${this.disabled||this.softDisabled||y}
      tabindex="${this.disabled&&!this.softDisabled?-1:y}"
      href=${this.href}
      download=${this.download||y}
      target=${this.target||y}
      >${this.renderContent()}
    </a>`}renderContent(){const t=k`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return k`
      <span class="touch"></span>
      ${this.trailingIcon?y:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:y}
    `}handleClick(t){if(this.softDisabled||this.disabled&&this.href){t.stopImmediatePropagation(),t.preventDefault();return}!Sa(t)||!this.buttonElement||(this.focus(),Ma(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Ta(V);V.formAssociated=!0;V.shadowRootOptions={mode:"open",delegatesFocus:!0};m([_({type:Boolean,reflect:!0})],V.prototype,"disabled",void 0);m([_({type:Boolean,attribute:"soft-disabled",reflect:!0})],V.prototype,"softDisabled",void 0);m([_()],V.prototype,"href",void 0);m([_()],V.prototype,"download",void 0);m([_()],V.prototype,"target",void 0);m([_({type:Boolean,attribute:"trailing-icon",reflect:!0})],V.prototype,"trailingIcon",void 0);m([_({type:Boolean,attribute:"has-icon",reflect:!0})],V.prototype,"hasIcon",void 0);m([_()],V.prototype,"type",void 0);m([_({reflect:!0})],V.prototype,"value",void 0);m([gt(".button")],V.prototype,"buttonElement",void 0);m([Yt({slot:"icon",flatten:!0})],V.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Fa extends V{renderElevationOrOutline(){return k`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Oa=D`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Na=D`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const za=D`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ge=class extends Fa{};ge.styles=[za,Na,Oa];ge=m([K("md-filled-button")],ge);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $r(e,t=rt){const r=Pr(e,t);return r&&(r.tabIndex=0,r.focus()),r}function kr(e,t=rt){const r=Ba(e,t);return r&&(r.tabIndex=0,r.focus()),r}function ce(e,t=rt){for(let r=0;r<e.length;r++){const a=e[r];if(a.tabIndex===0&&t(a))return{item:a,index:r}}return null}function Pr(e,t=rt){for(const r of e)if(t(r))return r;return null}function Ba(e,t=rt){for(let r=e.length-1;r>=0;r--){const a=e[r];if(t(a))return a}return null}function Ua(e,t,r=rt,a=!0){for(let o=1;o<e.length;o++){const s=(o+t)%e.length;if(s<t&&!a)return null;const n=e[s];if(r(n))return n}return e[t]?e[t]:null}function Ha(e,t,r=rt,a=!0){for(let o=1;o<e.length;o++){const s=(t-o+e.length)%e.length;if(s>t&&!a)return null;const n=e[s];if(r(n))return n}return e[t]?e[t]:null}function ir(e,t,r=rt,a=!0){if(t){const o=Ua(e,t.index,r,a);return o&&(o.tabIndex=0,o.focus()),o}else return $r(e,r)}function lr(e,t,r=rt,a=!0){if(t){const o=Ha(e,t.index,r,a);return o&&(o.tabIndex=0,o.focus()),o}else return kr(e,r)}function qa(){return new Event("request-activation",{bubbles:!0,composed:!0})}function rt(e){return!e.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tt={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Va{constructor(t){this.handleKeydown=h=>{const u=h.key;if(h.defaultPrevented||!this.isNavigableKey(u))return;const f=this.items;if(!f.length)return;const b=ce(f,this.isActivatable);h.preventDefault();const x=this.isRtl(),w=x?tt.ArrowRight:tt.ArrowLeft,$=x?tt.ArrowLeft:tt.ArrowRight;let P=null;switch(u){case tt.ArrowDown:case $:P=ir(f,b,this.isActivatable,this.wrapNavigation());break;case tt.ArrowUp:case w:P=lr(f,b,this.isActivatable,this.wrapNavigation());break;case tt.Home:P=$r(f,this.isActivatable);break;case tt.End:P=kr(f,this.isActivatable);break}P&&b&&b.item!==P&&(b.item.tabIndex=-1)},this.onDeactivateItems=()=>{const h=this.items;for(const u of h)this.deactivateItem(u)},this.onRequestActivation=h=>{this.onDeactivateItems();const u=h.target;this.activateItem(u),u.focus()},this.onSlotchange=()=>{const h=this.items;let u=!1;for(const b of h){if(!b.disabled&&b.tabIndex>-1&&!u){u=!0,b.tabIndex=0;continue}b.tabIndex=-1}if(u)return;const f=Pr(h,this.isActivatable);f&&(f.tabIndex=0)};const{isItem:r,getPossibleItems:a,isRtl:o,deactivateItem:s,activateItem:n,isNavigableKey:i,isActivatable:l,wrapNavigation:d}=t;this.isItem=r,this.getPossibleItems=a,this.isRtl=o,this.deactivateItem=s,this.activateItem=n,this.isNavigableKey=i,this.isActivatable=l,this.wrapNavigation=d??(()=>!0)}get items(){const t=this.getPossibleItems(),r=[];for(const a of t){if(this.isItem(a)){r.push(a);continue}const s=a.item;s&&this.isItem(s)&&r.push(s)}return r}activateNextItem(){const t=this.items,r=ce(t,this.isActivatable);return r&&(r.item.tabIndex=-1),ir(t,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,r=ce(t,this.isActivatable);return r&&(r.item.tabIndex=-1),lr(t,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ja=new Set(Object.values(tt));class Ir extends N{get items(){return this.listController.items}constructor(){super(),this.listController=new Va({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>ja.has(t),isActivatable:t=>!t.disabled&&t.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return k`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}m([Yt({flatten:!0})],Ir.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ga=D`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let xe=class extends Ir{};xe.styles=[Ga];xe=m([K("md-list")],xe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Be extends N{constructor(){super(...arguments),this.multiline=!1}render(){return k`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let t=!1,r=0;for(const a of this.textSlots)if(Ka(a)&&(r+=1),r>1){t=!0;break}this.multiline=t}}m([_({type:Boolean,reflect:!0})],Be.prototype,"multiline",void 0);m([Zr(".text slot")],Be.prototype,"textSlots",void 0);function Ka(e){var t;for(const r of e.assignedNodes({flatten:!0})){const a=r.nodeType===Node.ELEMENT_NODE,o=r.nodeType===Node.TEXT_NODE&&((t=r.textContent)==null?void 0:t.match(/\S/));if(a||o)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ya=D`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _e=class extends Be{};_e.styles=[Ya];_e=m([K("md-item")],_e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=Symbol.for(""),Wa=e=>{if((e==null?void 0:e.r)===Er)return e==null?void 0:e._$litStatic$},de=(e,...t)=>({_$litStatic$:t.reduce((r,a,o)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[o+1],e[0]),r:Er}),cr=new Map,Ja=e=>(t,...r)=>{const a=r.length;let o,s;const n=[],i=[];let l,d=0,h=!1;for(;d<a;){for(l=t[d];d<a&&(s=r[d],(o=Wa(s))!==void 0);)l+=o+t[++d],h=!0;d!==a&&i.push(s),n.push(l),d++}if(d===a&&n.push(t[a]),h){const u=n.join("$$lit$$");(t=cr.get(u))===void 0&&(n.raw=n,cr.set(u,t=n)),r=i}return e(t,...r)},Xa=Ja(k);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Za=Ne(N);class lt extends Za{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(k`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const r=this.type==="link";let a;switch(this.type){case"link":a=de`a`;break;case"button":a=de`button`;break;default:case"text":a=de`li`;break}const o=this.type!=="text",s=r&&this.target?this.target:y;return Xa`
      <${a}
        id="item"
        tabindex="${this.isDisabled||!o?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||y}
        aria-checked=${this.ariaChecked||y}
        aria-expanded=${this.ariaExpanded||y}
        aria-haspopup=${this.ariaHasPopup||y}
        class="list-item ${Jt(this.getRenderClasses())}"
        href=${this.href||y}
        target=${s}
        @focus=${this.onFocus}
      >${t}</${a}>
    `}renderRipple(){return this.type==="text"?y:k` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?y:k` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return k`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(qa())}focus(){var t;(t=this.listItemRoot)==null||t.focus()}click(){if(!this.listItemRoot){super.click();return}this.listItemRoot.click()}}lt.shadowRootOptions={...N.shadowRootOptions,delegatesFocus:!0};m([_({type:Boolean,reflect:!0})],lt.prototype,"disabled",void 0);m([_({reflect:!0})],lt.prototype,"type",void 0);m([_({type:Boolean,attribute:"md-list-item",reflect:!0})],lt.prototype,"isListItem",void 0);m([_()],lt.prototype,"href",void 0);m([_()],lt.prototype,"target",void 0);m([gt(".list-item")],lt.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qa=D`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let we=class extends lt{};we.styles=[Qa];we=m([K("md-list-item")],we);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xt extends N{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}m([_({type:Boolean,reflect:!0})],Xt.prototype,"inset",void 0);m([_({type:Boolean,reflect:!0,attribute:"inset-start"})],Xt.prototype,"insetStart",void 0);m([_({type:Boolean,reflect:!0,attribute:"inset-end"})],Xt.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const to=D`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ce=class extends Xt{};Ce.styles=[to];Ce=m([K("md-divider")],Ce);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nt=Symbol("isFocusable"),he=Symbol("privateIsFocusable"),zt=Symbol("externalTabIndex"),Bt=Symbol("isUpdatingTabIndex"),Ut=Symbol("updateTabIndex");function eo(e){var t,r,a;class o extends e{constructor(){super(...arguments),this[t]=!0,this[r]=null,this[a]=!1}get[Nt](){return this[he]}set[Nt](n){this[Nt]!==n&&(this[he]=n,this[Ut]())}connectedCallback(){super.connectedCallback(),this[Ut]()}attributeChangedCallback(n,i,l){if(n!=="tabindex"){super.attributeChangedCallback(n,i,l);return}if(this.requestUpdate("tabIndex",Number(i??-1)),!this[Bt]){if(!this.hasAttribute("tabindex")){this[zt]=null,this[Ut]();return}this[zt]=this.tabIndex}}[(t=he,r=zt,a=Bt,Ut)](){const n=this[Nt]?0:-1,i=this[zt]??n;this[Bt]=!0,this.tabIndex=i,this[Bt]=!1}}return m([_({noAccessor:!0})],o.prototype,"tabIndex",void 0),o}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tr=Symbol("animateIndicator"),ro=eo(N);class X extends ro{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const t=k`<div class="indicator"></div>`;return k`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${Jt(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?y:t}
      </div>
      ${this.fullWidthIndicator?t:y}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,!t.defaultPrevented&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[Tr](t){if(!this.indicator)return;this.indicator.getAnimations().forEach(a=>{a.cancel()});const r=this.getKeyframes(t);r!==null&&this.indicator.animate(r,{duration:250,easing:wr.EMPHASIZED})}getKeyframes(t){var u;const r=ao();if(!this.active)return r?[{opacity:1},{transform:"none"}]:null;const a={},o=((u=t.indicator)==null?void 0:u.getBoundingClientRect())??{},s=o.left,n=o.width,i=this.indicator.getBoundingClientRect(),l=i.left,d=i.width,h=n/d;return!r&&s!==void 0&&l!==void 0&&!isNaN(h)?a.transform=`translateX(${(s-l).toFixed(4)}px) scaleX(${h.toFixed(4)})`:a.opacity=0,[a,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const r=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||r)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}m([_({type:Boolean,reflect:!0,attribute:"md-tab"})],X.prototype,"isTab",void 0);m([_({type:Boolean,reflect:!0})],X.prototype,"active",void 0);m([_({type:Boolean})],X.prototype,"selected",null);m([_({type:Boolean,attribute:"has-icon"})],X.prototype,"hasIcon",void 0);m([_({type:Boolean,attribute:"icon-only"})],X.prototype,"iconOnly",void 0);m([gt(".indicator")],X.prototype,"indicator",void 0);m([Le()],X.prototype,"fullWidthIndicator",void 0);m([Qr({flatten:!0})],X.prototype,"assignedDefaultNodes",void 0);m([Yt({slot:"icon",flatten:!0})],X.prototype,"assignedIcons",void 0);function ao(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xt extends N{get activeTab(){return this.tabs.find(t=>t.active)??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex(t=>t.active)}set activeTabIndex(t){const r=()=>{const a=this.tabs[t];a&&this.activateTab(a)};if(!this.slotElement){this.updateComplete.then(r);return}r()}get focusedTab(){return this.tabs.find(t=>t.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:r}=this;if(t??(t=this.activeTab),!t||!r.includes(t)||!this.tabsScrollerElement)return;for(const f of this.tabs)await f.updateComplete;const a=t.offsetLeft,o=t.offsetWidth,s=this.scrollLeft,n=this.offsetWidth,i=48,l=a-i,d=a+o-n+i,h=Math.min(l,Math.max(d,s)),u=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:u,top:0,left:h})}render(){return k`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(t){const r=t.target;await 0,!(t.defaultPrevented||!oo(r)||r.active)&&this.activateTab(r)}activateTab(t){const{tabs:r}=this,a=this.activeTab;if(!(!r.includes(t)||a===t)){for(const o of r)o.active=o===t;if(a){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const s of r)s.active=s===a;return}t[Tr](a)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const r of this.tabs)r.tabIndex=r===t?0:-1}async handleKeydown(t){await 0;const r=t.key==="ArrowLeft",a=t.key==="ArrowRight",o=t.key==="Home",s=t.key==="End";if(t.defaultPrevented||!r&&!a&&!o&&!s)return;const{tabs:n}=this;if(n.length<2)return;t.preventDefault();let i;if(o||s)i=o?0:n.length-1;else{const h=getComputedStyle(this).direction==="rtl"?r:a,{focusedTab:u}=this;if(!u)i=h?0:n.length-1;else{const f=this.tabs.indexOf(u);i=h?f+1:f-1,i>=n.length?i=0:i<0&&(i=n.length-1)}}const l=n[i];l.focus(),this.autoActivate?this.activateTab(l):this.updateFocusableTab(l)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}m([Yt({flatten:!0,selector:"[md-tab]"})],xt.prototype,"tabs",void 0);m([_({type:Number,attribute:"active-tab-index"})],xt.prototype,"activeTabIndex",null);m([_({type:Boolean,attribute:"auto-activate"})],xt.prototype,"autoActivate",void 0);m([gt(".tabs")],xt.prototype,"tabsScrollerElement",void 0);m([gt("slot")],xt.prototype,"slotElement",void 0);function oo(e){return e instanceof HTMLElement&&e.hasAttribute("md-tab")}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const so=D`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ae=class extends xt{};Ae.styles=[so];Ae=m([K("md-tabs")],Ae);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mr extends X{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}m([_({type:Boolean,attribute:"inline-icon"})],Mr.prototype,"inlineIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const no=D`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const io=D`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let $e=class extends Mr{};$e.styles=[io,no];$e=m([K("md-primary-tab")],$e);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Sr extends N{render(){return k`
      <md-elevation part="elevation"></md-elevation>
      <div class="background"></div>
      <slot></slot>
      <div class="outline"></div>
    `}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lo=D`:host{--_container-color: var(--md-elevated-card-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-card-container-elevation, 1);--_container-shadow-color: var(--md-elevated-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-elevated-card-container-shape, var(--md-sys-shape-corner-medium, 12px))}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Dr=D`:host{border-radius:var(--_container-shape);box-sizing:border-box;display:flex;flex-direction:column;position:relative;z-index:0}md-elevation,.background,.outline{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color);z-index:-1}.outline{border:1px solid rgba(0,0,0,0);z-index:1}md-elevation{z-index:-1;--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}slot{border-radius:inherit}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ke=class extends Sr{};ke.styles=[Dr,lo];ke=m([K("md-elevated-card")],ke);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const co=D`:host{--_container-color: var(--md-filled-card-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-elevation: var(--md-filled-card-container-elevation, 0);--_container-shadow-color: var(--md-filled-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-card-container-shape, var(--md-sys-shape-corner-medium, 12px))}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Pe=class extends Sr{};Pe.styles=[Dr,co];Pe=m([K("md-filled-card")],Pe);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return e<0?-1:e===0?0:1}function $t(e,t,r){return(1-r)*e+r*t}function ho(e,t,r){return r<e?e:r>t?t:r}function Gt(e,t,r){return r<e?e:r>t?t:r}function Ue(e){return e=e%360,e<0&&(e=e+360),e}function uo(e,t){return Ue(t-e)<=180?1:-1}function po(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function Ie(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],a=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],o=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,a,o]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],fo=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],bo=[95.047,100,108.883];function He(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function dr(e){const t=ut(e[0]),r=ut(e[1]),a=ut(e[2]);return He(t,r,a)}function vo(e){return e>>16&255}function yo(e){return e>>8&255}function go(e){return e&255}function xo(e,t,r){const a=fo,o=a[0][0]*e+a[0][1]*t+a[0][2]*r,s=a[1][0]*e+a[1][1]*t+a[1][2]*r,n=a[2][0]*e+a[2][1]*t+a[2][2]*r,i=ut(o),l=ut(s),d=ut(n);return He(i,l,d)}function _o(e){const t=vt(vo(e)),r=vt(yo(e)),a=vt(go(e));return Ie([t,r,a],mo)}function wo(e){const t=nt(e),r=ut(t);return He(r,r,r)}function Ee(e){const t=_o(e)[1];return 116*Rr(t/100)-16}function nt(e){return 100*Ao((e+16)/116)}function Te(e){return Rr(e/100)*116-16}function vt(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function ut(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,ho(0,255,Math.round(r*255))}function Co(){return bo}function Rr(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function Ao(e){const t=.008856451679035631,r=24389/27,a=e*e*e;return a>t?a:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static make(t=Co(),r=200/Math.PI*nt(50)/100,a=50,o=2,s=!1){const n=t,i=n[0]*.401288+n[1]*.650173+n[2]*-.051461,l=n[0]*-.250268+n[1]*1.204414+n[2]*.045854,d=n[0]*-.002079+n[1]*.048952+n[2]*.953127,h=.8+o/10,u=h>=.9?$t(.59,.69,(h-.9)*10):$t(.525,.59,(h-.8)*10);let f=s?1:h*(1-1/3.6*Math.exp((-r-42)/92));f=f>1?1:f<0?0:f;const b=h,x=[f*(100/i)+1-f,f*(100/l)+1-f,f*(100/d)+1-f],w=1/(5*r+1),$=w*w*w*w,P=1-$,E=$*r+.1*P*P*Math.cbrt(5*r),A=nt(a)/t[1],U=1.48+Math.sqrt(A),C=.725/Math.pow(A,.2),R=C,I=[Math.pow(E*x[0]*i/100,.42),Math.pow(E*x[1]*l/100,.42),Math.pow(E*x[2]*d/100,.42)],S=[400*I[0]/(I[0]+27.13),400*I[1]/(I[1]+27.13),400*I[2]/(I[2]+27.13)],z=(2*S[0]+S[1]+.05*S[2])*C;return new J(A,z,C,R,u,b,x,E,Math.pow(E,.25),U)}constructor(t,r,a,o,s,n,i,l,d,h){this.n=t,this.aw=r,this.nbb=a,this.ncb=o,this.c=s,this.nc=n,this.rgbD=i,this.fl=l,this.fLRoot=d,this.z=h}}J.DEFAULT=J.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,r,a,o,s,n,i,l,d){this.hue=t,this.chroma=r,this.j=a,this.q=o,this.m=s,this.s=n,this.jstar=i,this.astar=l,this.bstar=d}distance(t){const r=this.jstar-t.jstar,a=this.astar-t.astar,o=this.bstar-t.bstar,s=Math.sqrt(r*r+a*a+o*o);return 1.41*Math.pow(s,.63)}static fromInt(t){return F.fromIntInViewingConditions(t,J.DEFAULT)}static fromIntInViewingConditions(t,r){const a=(t&16711680)>>16,o=(t&65280)>>8,s=t&255,n=vt(a),i=vt(o),l=vt(s),d=.41233895*n+.35762064*i+.18051042*l,h=.2126*n+.7152*i+.0722*l,u=.01932141*n+.11916382*i+.95034478*l,f=.401288*d+.650173*h-.051461*u,b=-.250268*d+1.204414*h+.045854*u,x=-.002079*d+.048952*h+.953127*u,w=r.rgbD[0]*f,$=r.rgbD[1]*b,P=r.rgbD[2]*x,E=Math.pow(r.fl*Math.abs(w)/100,.42),A=Math.pow(r.fl*Math.abs($)/100,.42),U=Math.pow(r.fl*Math.abs(P)/100,.42),C=j(w)*400*E/(E+27.13),R=j($)*400*A/(A+27.13),I=j(P)*400*U/(U+27.13),S=(11*C+-12*R+I)/11,z=(C+R-2*I)/9,M=(20*C+20*R+21*I)/20,Z=(40*C+20*R+I)/20,W=Math.atan2(z,S)*180/Math.PI,Y=W<0?W+360:W>=360?W-360:W,Dt=Y*Math.PI/180,Rt=Z*r.nbb,ot=100*Math.pow(Rt/r.aw,r.c*r.z),Lt=4/r.c*Math.sqrt(ot/100)*(r.aw+4)*r.fLRoot,Zt=Y<20.14?Y+360:Y,Qt=.25*(Math.cos(Zt*Math.PI/180+2)+3.8),ee=5e4/13*Qt*r.nc*r.ncb*Math.sqrt(S*S+z*z)/(M+.305),Ft=Math.pow(ee,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Ge=Ft*Math.sqrt(ot/100),Ke=Ge*r.fLRoot,Fr=50*Math.sqrt(Ft*r.c/(r.aw+4)),Or=(1+100*.007)*ot/(1+.007*ot),Ye=1/.0228*Math.log(1+.0228*Ke),Nr=Ye*Math.cos(Dt),zr=Ye*Math.sin(Dt);return new F(Y,Ge,ot,Lt,Ke,Fr,Or,Nr,zr)}static fromJch(t,r,a){return F.fromJchInViewingConditions(t,r,a,J.DEFAULT)}static fromJchInViewingConditions(t,r,a,o){const s=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,n=r*o.fLRoot,i=r/Math.sqrt(t/100),l=50*Math.sqrt(i*o.c/(o.aw+4)),d=a*Math.PI/180,h=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*n),f=u*Math.cos(d),b=u*Math.sin(d);return new F(a,r,t,s,n,l,h,f,b)}static fromUcs(t,r,a){return F.fromUcsInViewingConditions(t,r,a,J.DEFAULT)}static fromUcsInViewingConditions(t,r,a,o){const s=r,n=a,i=Math.sqrt(s*s+n*n),d=(Math.exp(i*.0228)-1)/.0228/o.fLRoot;let h=Math.atan2(n,s)*(180/Math.PI);h<0&&(h+=360);const u=t/(1-(t-100)*.007);return F.fromJchInViewingConditions(u,d,h,o)}toInt(){return this.viewed(J.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),n=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,l=n/t.nbb,d=Math.sin(o),h=Math.cos(o),u=23*(l+.305)*a/(23*i+11*a*h+108*a*d),f=u*h,b=u*d,x=(460*l+451*f+288*b)/1403,w=(460*l-891*f-261*b)/1403,$=(460*l-220*f-6300*b)/1403,P=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),E=j(x)*(100/t.fl)*Math.pow(P,1/.42),A=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),U=j(w)*(100/t.fl)*Math.pow(A,1/.42),C=Math.max(0,27.13*Math.abs($)/(400-Math.abs($))),R=j($)*(100/t.fl)*Math.pow(C,1/.42),I=E/t.rgbD[0],S=U/t.rgbD[1],z=R/t.rgbD[2],M=1.86206786*I-1.01125463*S+.14918677*z,Z=.38752654*I+.62144744*S-.00897398*z,at=-.0158415*I-.03412294*S+1.04996444*z;return xo(M,Z,at)}static fromXyzInViewingConditions(t,r,a,o){const s=.401288*t+.650173*r-.051461*a,n=-.250268*t+1.204414*r+.045854*a,i=-.002079*t+.048952*r+.953127*a,l=o.rgbD[0]*s,d=o.rgbD[1]*n,h=o.rgbD[2]*i,u=Math.pow(o.fl*Math.abs(l)/100,.42),f=Math.pow(o.fl*Math.abs(d)/100,.42),b=Math.pow(o.fl*Math.abs(h)/100,.42),x=j(l)*400*u/(u+27.13),w=j(d)*400*f/(f+27.13),$=j(h)*400*b/(b+27.13),P=(11*x+-12*w+$)/11,E=(x+w-2*$)/9,A=(20*x+20*w+21*$)/20,U=(40*x+20*w+$)/20,R=Math.atan2(E,P)*180/Math.PI,I=R<0?R+360:R>=360?R-360:R,S=I*Math.PI/180,z=U*o.nbb,M=100*Math.pow(z/o.aw,o.c*o.z),Z=4/o.c*Math.sqrt(M/100)*(o.aw+4)*o.fLRoot,at=I<20.14?I+360:I,W=1/4*(Math.cos(at*Math.PI/180+2)+3.8),Dt=5e4/13*W*o.nc*o.ncb*Math.sqrt(P*P+E*E)/(A+.305),Rt=Math.pow(Dt,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),ot=Rt*Math.sqrt(M/100),Lt=ot*o.fLRoot,Zt=50*Math.sqrt(Rt*o.c/(o.aw+4)),Qt=(1+100*.007)*M/(1+.007*M),te=Math.log(1+.0228*Lt)/.0228,ee=te*Math.cos(S),Ft=te*Math.sin(S);return new F(I,ot,M,Z,Lt,Zt,Qt,ee,Ft)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),n=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,l=n/t.nbb,d=Math.sin(o),h=Math.cos(o),u=23*(l+.305)*a/(23*i+11*a*h+108*a*d),f=u*h,b=u*d,x=(460*l+451*f+288*b)/1403,w=(460*l-891*f-261*b)/1403,$=(460*l-220*f-6300*b)/1403,P=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),E=j(x)*(100/t.fl)*Math.pow(P,1/.42),A=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),U=j(w)*(100/t.fl)*Math.pow(A,1/.42),C=Math.max(0,27.13*Math.abs($)/(400-Math.abs($))),R=j($)*(100/t.fl)*Math.pow(C,1/.42),I=E/t.rgbD[0],S=U/t.rgbD[1],z=R/t.rgbD[2],M=1.86206786*I-1.01125463*S+.14918677*z,Z=.38752654*I+.62144744*S-.00897398*z,at=-.0158415*I-.03412294*S+1.04996444*z;return[M,Z,at]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let a=0;return r<=.0031308?a=r*12.92:a=1.055*Math.pow(r,1/2.4)-.055,a*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return j(t)*400*r/(r+27.13)}static hueOf(t){const r=Ie(t,v.SCALED_DISCOUNT_FROM_LINRGB),a=v.chromaticAdaptation(r[0]),o=v.chromaticAdaptation(r[1]),s=v.chromaticAdaptation(r[2]),n=(11*a+-12*o+s)/11,i=(a+o-2*s)/9;return Math.atan2(i,n)}static areInCyclicOrder(t,r,a){const o=v.sanitizeRadians(r-t),s=v.sanitizeRadians(a-t);return o<s}static intercept(t,r,a){return(r-t)/(a-t)}static lerpPoint(t,r,a){return[t[0]+(a[0]-t[0])*r,t[1]+(a[1]-t[1])*r,t[2]+(a[2]-t[2])*r]}static setCoordinate(t,r,a,o){const s=v.intercept(t[o],r,a[o]);return v.lerpPoint(t,s,a)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const a=v.Y_FROM_LINRGB[0],o=v.Y_FROM_LINRGB[1],s=v.Y_FROM_LINRGB[2],n=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){const l=n,d=i,h=(t-l*o-d*s)/a;return v.isBounded(h)?[h,l,d]:[-1,-1,-1]}else if(r<8){const l=n,d=i,h=(t-d*a-l*s)/o;return v.isBounded(h)?[d,h,l]:[-1,-1,-1]}else{const l=n,d=i,h=(t-l*a-d*o)/s;return v.isBounded(h)?[l,d,h]:[-1,-1,-1]}}static bisectToSegment(t,r){let a=[-1,-1,-1],o=a,s=0,n=0,i=!1,l=!0;for(let d=0;d<12;d++){const h=v.nthVertex(t,d);if(h[0]<0)continue;const u=v.hueOf(h);if(!i){a=h,o=h,s=u,n=u,i=!0;continue}(l||v.areInCyclicOrder(s,u,n))&&(l=!1,v.areInCyclicOrder(s,r,u)?(o=h,n=u):(a=h,s=u))}return[a,o]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const a=v.bisectToSegment(t,r);let o=a[0],s=v.hueOf(o),n=a[1];for(let i=0;i<3;i++)if(o[i]!==n[i]){let l=-1,d=255;o[i]<n[i]?(l=v.criticalPlaneBelow(v.trueDelinearized(o[i])),d=v.criticalPlaneAbove(v.trueDelinearized(n[i]))):(l=v.criticalPlaneAbove(v.trueDelinearized(o[i])),d=v.criticalPlaneBelow(v.trueDelinearized(n[i])));for(let h=0;h<8&&!(Math.abs(d-l)<=1);h++){const u=Math.floor((l+d)/2),f=v.CRITICAL_PLANES[u],b=v.setCoordinate(o,f,n,i),x=v.hueOf(b);v.areInCyclicOrder(s,r,x)?(n=b,d=u):(o=b,s=x,l=u)}}return v.midpoint(o,n)}static inverseChromaticAdaptation(t){const r=Math.abs(t),a=Math.max(0,27.13*r/(400-r));return j(t)*Math.pow(a,1/.42)}static findResultByJ(t,r,a){let o=Math.sqrt(a)*11;const s=J.DEFAULT,n=1/Math.pow(1.64-Math.pow(.29,s.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,d=Math.sin(t),h=Math.cos(t);for(let u=0;u<5;u++){const f=o/100,b=r===0||o===0?0:r/Math.sqrt(f),x=Math.pow(b*n,1/.9),$=s.aw*Math.pow(f,1/s.c/s.z)/s.nbb,P=23*($+.305)*x/(23*l+11*x*h+108*x*d),E=P*h,A=P*d,U=(460*$+451*E+288*A)/1403,C=(460*$-891*E-261*A)/1403,R=(460*$-220*E-6300*A)/1403,I=v.inverseChromaticAdaptation(U),S=v.inverseChromaticAdaptation(C),z=v.inverseChromaticAdaptation(R),M=Ie([I,S,z],v.LINRGB_FROM_SCALED_DISCOUNT);if(M[0]<0||M[1]<0||M[2]<0)return 0;const Z=v.Y_FROM_LINRGB[0],at=v.Y_FROM_LINRGB[1],W=v.Y_FROM_LINRGB[2],Y=Z*M[0]+at*M[1]+W*M[2];if(Y<=0)return 0;if(u===4||Math.abs(Y-a)<.002)return M[0]>100.01||M[1]>100.01||M[2]>100.01?0:dr(M);o=o-(Y-a)*o/(2*Y)}return 0}static solveToInt(t,r,a){if(r<1e-4||a<1e-4||a>99.9999)return wo(a);t=Ue(t);const o=t/180*Math.PI,s=nt(a),n=v.findResultByJ(o,r,s);if(n!==0)return n;const i=v.bisectToLimit(s,o);return dr(i)}static solveToCam(t,r,a){return F.fromInt(v.solveToInt(t,r,a))}}v.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];v.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];v.Y_FROM_LINRGB=[.2126,.7152,.0722];v.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static from(t,r,a){return new O(v.solveToInt(t,r,a))}static fromInt(t){return new O(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(v.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(v.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(v.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=F.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ee(t),this.argb=t}setInternalState(t){const r=F.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ee(t),this.argb=t}inViewingConditions(t){const a=F.fromInt(this.toInt()).xyzInViewingConditions(t),o=F.fromXyzInViewingConditions(a[0],a[1],a[2],J.make());return O.from(o.hue,o.chroma,Te(a[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{static harmonize(t,r){const a=O.fromInt(t),o=O.fromInt(r),s=po(a.hue,o.hue),n=Math.min(s*.5,15),i=Ue(a.hue+n*uo(a.hue,o.hue));return O.from(i,a.chroma,a.tone).toInt()}static hctHue(t,r,a){const o=qe.cam16Ucs(t,r,a),s=F.fromInt(o),n=F.fromInt(t);return O.from(s.hue,n.chroma,Ee(t)).toInt()}static cam16Ucs(t,r,a){const o=F.fromInt(t),s=F.fromInt(r),n=o.jstar,i=o.astar,l=o.bstar,d=s.jstar,h=s.astar,u=s.bstar,f=n+(d-n)*a,b=i+(h-i)*a,x=l+(u-l)*a;return F.fromUcs(f,b,x).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static ratioOfTones(t,r){return t=Gt(0,100,t),r=Gt(0,100,r),L.ratioOfYs(nt(t),nt(r))}static ratioOfYs(t,r){const a=t>r?t:r,o=a===r?t:r;return(a+5)/(o+5)}static lighter(t,r){if(t<0||t>100)return-1;const a=nt(t),o=r*(a+5)-5,s=L.ratioOfYs(o,a),n=Math.abs(s-r);if(s<r&&n>.04)return-1;const i=Te(o)+.4;return i<0||i>100?-1:i}static darker(t,r){if(t<0||t>100)return-1;const a=nt(t),o=(a+5)/r-5,s=L.ratioOfYs(a,o),n=Math.abs(s-r);if(s<r&&n>.04)return-1;const i=Te(o)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,r){const a=L.lighter(t,r);return a<0?100:a}static darkerUnsafe(t,r){const a=L.darker(t,r);return a<0?0:a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,a=Math.round(t.chroma)>16,o=Math.round(t.tone)<65;return r&&a&&o}static fixIfDisliked(t){return Ve.isDisliked(t)?O.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{static fromPalette(t){return new p(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,a,o,s,n,i,l){if(this.name=t,this.palette=r,this.tone=a,this.isBackground=o,this.background=s,this.secondBackground=n,this.contrastCurve=i,this.toneDeltaPair=l,this.hctCache=new Map,!s&&n)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&i)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!i)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const a=this.getTone(t),o=this.palette(t).getHct(a);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,o),o}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const a=this.toneDeltaPair(t),o=a.roleA,s=a.roleB,n=a.delta,i=a.polarity,l=a.stayTogether,h=this.background(t).getTone(t),u=i==="nearer"||i==="lighter"&&!t.isDark||i==="darker"&&t.isDark,f=u?o:s,b=u?s:o,x=this.name===f.name,w=t.isDark?1:-1,$=f.contrastCurve.get(t.contrastLevel),P=b.contrastCurve.get(t.contrastLevel),E=f.tone(t);let A=L.ratioOfTones(h,E)>=$?E:p.foregroundTone(h,$);const U=b.tone(t);let C=L.ratioOfTones(h,U)>=P?U:p.foregroundTone(h,P);return r&&(A=p.foregroundTone(h,$),C=p.foregroundTone(h,P)),(C-A)*w>=n||(C=Gt(0,100,A+n*w),(C-A)*w>=n||(A=Gt(0,100,C-n*w))),50<=A&&A<60?w>0?(A=60,C=Math.max(C,A+n*w)):(A=49,C=Math.min(C,A+n*w)):50<=C&&C<60&&(l?w>0?(A=60,C=Math.max(C,A+n*w)):(A=49,C=Math.min(C,A+n*w)):w>0?C=60:C=49),x?A:C}else{let a=this.tone(t);if(this.background==null)return a;const o=this.background(t).getTone(t),s=this.contrastCurve.get(t.contrastLevel);if(L.ratioOfTones(o,a)>=s||(a=p.foregroundTone(o,s)),r&&(a=p.foregroundTone(o,s)),this.isBackground&&50<=a&&a<60&&(L.ratioOfTones(49,o)>=s?a=49:a=60),this.secondBackground){const[n,i]=[this.background,this.secondBackground],[l,d]=[n(t).getTone(t),i(t).getTone(t)],[h,u]=[Math.max(l,d),Math.min(l,d)];if(L.ratioOfTones(h,a)>=s&&L.ratioOfTones(u,a)>=s)return a;const f=L.lighter(h,s),b=L.darker(u,s),x=[];return f!==-1&&x.push(f),b!==-1&&x.push(b),p.tonePrefersLightForeground(l)||p.tonePrefersLightForeground(d)?f<0?100:f:x.length===1?x[0]:b<0?0:b}return a}}static foregroundTone(t,r){const a=L.lighterUnsafe(t,r),o=L.darkerUnsafe(t,r),s=L.ratioOfTones(a,t),n=L.ratioOfTones(o,t);if(p.tonePrefersLightForeground(t)){const l=Math.abs(s-n)<.1&&s<r&&n<r;return s>=r||s>=n||l?a:o}else return n>=r||n>=s?o:a}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return p.tonePrefersLightForeground(t)&&!p.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromInt(t){const r=O.fromInt(t);return q.fromHct(r)}static fromHct(t){return new q(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){const a=new $o(t,r).create();return new q(t,r,a)}constructor(t,r,a){this.hue=t,this.chroma=r,this.keyColor=a,this.cache=new Map}tone(t){let r=this.cache.get(t);return r===void 0&&(r=O.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return O.fromInt(this.tone(t))}}class $o{constructor(t,r){this.hue=t,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let o=0,s=100;for(;o<s;){const n=Math.floor((o+s)/2),i=this.maxChroma(n)<this.maxChroma(n+1);if(this.maxChroma(n)>=this.requestedChroma-.01)if(Math.abs(o-50)<Math.abs(s-50))s=n;else{if(o===n)return O.from(this.hue,this.requestedChroma,o);o=n}else i?o=n+1:s=n}return O.from(this.hue,this.requestedChroma,o)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);const r=O.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,r),r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t,r,a,o){this.low=t,this.normal=r,this.medium=a,this.high=o}get(t){return t<=-1?this.low:t<0?$t(this.low,this.normal,(t- -1)/1):t<.5?$t(this.normal,this.medium,(t-0)/.5):t<1?$t(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,r,a,o,s){this.roleA=t,this.roleB=r,this.delta=a,this.polarity=o,this.stayTogether=s}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(Et||(Et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return e.variant===Et.FIDELITY||e.variant===Et.CONTENT}function T(e){return e.variant===Et.MONOCHROME}function ko(e,t,r,a){let o=r,s=O.from(e,t,r);if(s.chroma<t){let n=s.chroma;for(;s.chroma<t;){o+=a?-1:1;const i=O.from(e,t,o);if(n>i.chroma||Math.abs(i.chroma-t)<.4)break;const l=Math.abs(i.chroma-t),d=Math.abs(s.chroma-t);l<d&&(s=i),n=Math.max(n,i.chroma)}}return o}class c{static highestSurface(t){return t.isDark?c.surfaceBright:c.surfaceDim}}c.contentAccentToneDelta=15;c.primaryPaletteKeyColor=p.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});c.secondaryPaletteKeyColor=p.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});c.tertiaryPaletteKeyColor=p.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});c.neutralPaletteKeyColor=p.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});c.neutralVariantPaletteKeyColor=p.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});c.background=p.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.onBackground=p.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.background,contrastCurve:new g(3,3,4.5,7)});c.surface=p.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.surfaceDim=p.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new g(87,87,80,75).get(e.contrastLevel),isBackground:!0});c.surfaceBright=p.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});c.surfaceContainerLowest=p.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});c.surfaceContainerLow=p.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(10,10,11,12).get(e.contrastLevel):new g(96,96,96,95).get(e.contrastLevel),isBackground:!0});c.surfaceContainer=p.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(12,12,16,20).get(e.contrastLevel):new g(94,94,92,90).get(e.contrastLevel),isBackground:!0});c.surfaceContainerHigh=p.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(17,17,21,25).get(e.contrastLevel):new g(92,92,88,85).get(e.contrastLevel),isBackground:!0});c.surfaceContainerHighest=p.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new g(22,22,26,30).get(e.contrastLevel):new g(90,90,84,80).get(e.contrastLevel),isBackground:!0});c.onSurface=p.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.highestSurface(e),contrastCurve:new g(4.5,7,11,21)});c.surfaceVariant=p.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});c.onSurfaceVariant=p.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>c.highestSurface(e),contrastCurve:new g(3,4.5,7,11)});c.inverseSurface=p.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});c.inverseOnSurface=p.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>c.inverseSurface,contrastCurve:new g(4.5,7,11,21)});c.outline=p.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>c.highestSurface(e),contrastCurve:new g(1.5,3,4.5,7)});c.outlineVariant=p.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5)});c.shadow=p.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});c.scrim=p.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});c.surfaceTint=p.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});c.primary=p.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>T(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(3,4.5,7,7),toneDeltaPair:e=>new G(c.primaryContainer,c.primary,10,"nearer",!1)});c.onPrimary=p.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>T(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.primary,contrastCurve:new g(4.5,7,11,21)});c.primaryContainer=p.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>_t(e)?e.sourceColorHct.tone:T(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.primaryContainer,c.primary,10,"nearer",!1)});c.onPrimaryContainer=p.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>_t(e)?p.foregroundTone(c.primaryContainer.tone(e),4.5):T(e)?e.isDark?0:100:e.isDark?90:30,background:e=>c.primaryContainer,contrastCurve:new g(3,4.5,7,11)});c.inversePrimary=p.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>c.inverseSurface,contrastCurve:new g(3,4.5,7,7)});c.secondary=p.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(3,4.5,7,7),toneDeltaPair:e=>new G(c.secondaryContainer,c.secondary,10,"nearer",!1)});c.onSecondary=p.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>T(e)?e.isDark?10:100:e.isDark?20:100,background:e=>c.secondary,contrastCurve:new g(4.5,7,11,21)});c.secondaryContainer=p.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return T(e)?e.isDark?30:85:_t(e)?ko(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.secondaryContainer,c.secondary,10,"nearer",!1)});c.onSecondaryContainer=p.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>T(e)?e.isDark?90:10:_t(e)?p.foregroundTone(c.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>c.secondaryContainer,contrastCurve:new g(3,4.5,7,11)});c.tertiary=p.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>T(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(3,4.5,7,7),toneDeltaPair:e=>new G(c.tertiaryContainer,c.tertiary,10,"nearer",!1)});c.onTertiary=p.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>T(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.tertiary,contrastCurve:new g(4.5,7,11,21)});c.tertiaryContainer=p.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(T(e))return e.isDark?60:49;if(!_t(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Ve.fixIfDisliked(t).tone},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.tertiaryContainer,c.tertiary,10,"nearer",!1)});c.onTertiaryContainer=p.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>T(e)?e.isDark?0:100:_t(e)?p.foregroundTone(c.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>c.tertiaryContainer,contrastCurve:new g(3,4.5,7,11)});c.error=p.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(3,4.5,7,7),toneDeltaPair:e=>new G(c.errorContainer,c.error,10,"nearer",!1)});c.onError=p.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>c.error,contrastCurve:new g(4.5,7,11,21)});c.errorContainer=p.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.errorContainer,c.error,10,"nearer",!1)});c.onErrorContainer=p.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>T(e)?e.isDark?90:10:e.isDark?90:30,background:e=>c.errorContainer,contrastCurve:new g(3,4.5,7,11)});c.primaryFixed=p.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>T(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.primaryFixedDim=p.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>T(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.onPrimaryFixed=p.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>T(e)?100:10,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new g(4.5,7,11,21)});c.onPrimaryFixedVariant=p.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>T(e)?90:30,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new g(3,4.5,7,11)});c.secondaryFixed=p.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>T(e)?80:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.secondaryFixedDim=p.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>T(e)?70:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.onSecondaryFixed=p.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new g(4.5,7,11,21)});c.onSecondaryFixedVariant=p.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>T(e)?25:30,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new g(3,4.5,7,11)});c.tertiaryFixed=p.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>T(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.tertiaryFixedDim=p.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>T(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new g(1,1,3,4.5),toneDeltaPair:e=>new G(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.onTertiaryFixed=p.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>T(e)?100:10,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new g(4.5,7,11,21)});c.onTertiaryFixedVariant=p.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>T(e)?90:30,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new g(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static of(t){return new B(t,!1)}static contentOf(t){return new B(t,!0)}static fromColors(t){return B.createPaletteFromColors(!1,t)}static contentFromColors(t){return B.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const a=new B(r.primary,t);if(r.secondary){const o=new B(r.secondary,t);a.a2=o.a1}if(r.tertiary){const o=new B(r.tertiary,t);a.a3=o.a1}if(r.error){const o=new B(r.error,t);a.error=o.a1}if(r.neutral){const o=new B(r.neutral,t);a.n1=o.n1}if(r.neutralVariant){const o=new B(r.neutralVariant,t);a.n2=o.n2}return a}constructor(t,r){const a=O.fromInt(t),o=a.hue,s=a.chroma;r?(this.a1=q.fromHueAndChroma(o,s),this.a2=q.fromHueAndChroma(o,s/3),this.a3=q.fromHueAndChroma(o+60,s/2),this.n1=q.fromHueAndChroma(o,Math.min(s/12,4)),this.n2=q.fromHueAndChroma(o,Math.min(s/6,8))):(this.a1=q.fromHueAndChroma(o,Math.max(48,s)),this.a2=q.fromHueAndChroma(o,16),this.a3=q.fromHueAndChroma(o+60,24),this.n1=q.fromHueAndChroma(o,4),this.n2=q.fromHueAndChroma(o,8)),this.error=q.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return et.lightFromCorePalette(B.of(t))}static dark(t){return et.darkFromCorePalette(B.of(t))}static lightContent(t){return et.lightFromCorePalette(B.contentOf(t))}static darkContent(t){return et.darkFromCorePalette(B.contentOf(t))}static lightFromCorePalette(t){return new et({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new et({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(e){e=e.replace("#","");const t=e.length===3,r=e.length===6,a=e.length===8;if(!t&&!r&&!a)throw new Error("unexpected hex "+e);let o=0,s=0,n=0;return t?(o=Q(e.slice(0,1).repeat(2)),s=Q(e.slice(1,2).repeat(2)),n=Q(e.slice(2,3).repeat(2))):r?(o=Q(e.slice(0,2)),s=Q(e.slice(2,4)),n=Q(e.slice(4,6))):a&&(o=Q(e.slice(2,4)),s=Q(e.slice(4,6)),n=Q(e.slice(6,8))),(255<<24|(o&255)<<16|(s&255)<<8|n&255)>>>0}function Q(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e,t=[]){const r=B.of(e);return{source:e,schemes:{light:et.light(e),dark:et.dark(e)},palettes:{primary:r.a1,secondary:r.a2,tertiary:r.a3,neutral:r.n1,neutralVariant:r.n2,error:r.error},customColors:t.map(a=>Eo(e,a))}}function Eo(e,t){let r=t.value;const a=r,o=e;t.blend&&(r=qe.harmonize(a,o));const n=B.of(r).a1;return{color:t,value:r,light:{color:n.tone(40),onColor:n.tone(100),colorContainer:n.tone(90),onColorContainer:n.tone(10)},dark:{color:n.tone(80),onColor:n.tone(20),colorContainer:n.tone(30),onColorContainer:n.tone(90)}}}const To="#005d6f";function Mo(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function So(){const t=Io(Po(To)).schemes.light.toJSON(),r=document.documentElement;Object.entries(t).forEach(([a,o])=>{r.style.setProperty(`--md-sys-color-${Mo(a)}`,o)}),r.style.setProperty("--md-sys-color-brand",t.primary),r.style.setProperty("--md-sys-color-brand-container",t.primaryContainer)}function hr(e,t,r){e.setAttribute("aria-expanded",String(r)),t.hidden=!r}function Do(e=document){e.querySelectorAll("[data-accordion]").forEach(r=>{const a=r.querySelectorAll("[data-accordion-trigger]"),o=r.querySelectorAll("[data-accordion-panel]");a.forEach((s,n)=>{const i=o[n];i&&(s.setAttribute("aria-controls",i.id||`${r.id||"accordion"}-panel-${n}`),i.id=s.getAttribute("aria-controls"),hr(s,i,n===0),s.addEventListener("click",()=>{const l=s.getAttribute("aria-expanded")==="true";hr(s,i,!l)}),s.addEventListener("keydown",l=>{const d=l.key,h=Array.from(a).indexOf(s);["ArrowDown","ArrowUp","Home","End"].includes(d)&&l.preventDefault(),d==="ArrowDown"?a[(h+1)%a.length].focus():d==="ArrowUp"?a[(h-1+a.length)%a.length].focus():d==="Home"?a[0].focus():d==="End"&&a[a.length-1].focus()}))})})}function Ro(e=document){e.querySelectorAll("[data-tabs]").forEach(r=>{const a=r.querySelector("md-tabs"),o=r.querySelectorAll("[data-tab-panel]");if(!a)return;const s=n=>{o.forEach((i,l)=>{i.hidden=l!==n})};a.addEventListener("change",n=>{var i;s(n.target.activeTabIndex??((i=n.detail)==null?void 0:i.activeTabIndex)??0)}),s(a.activeTabIndex??0)})}So();document.addEventListener("DOMContentLoaded",()=>{Do(),Ro()});const Lr=document.createElement("template");Lr.innerHTML=`
  <style>
    :host {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 5vw;
      background: rgba(255, 255, 255, 0.95);
      color: var(--text-primary, #1f2933);
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
      position: relative;
    }

    ::slotted([slot='navigation-icon']),
    ::slotted([slot='headline']),
    ::slotted([slot='action-items']) {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
    }

    ::slotted([slot='headline']) {
      justify-self: center;
      font-family: 'Crimson Text', serif;
      font-size: clamp(1.25rem, 2vw, 1.75rem);
      font-weight: 600;
    }

    ::slotted([slot='action-items']) {
      justify-self: end;
    }

    @media (max-width: 720px) {
      :host {
        grid-template-columns: auto 1fr;
        grid-template-areas:
          'nav donate'
          'headline headline';
        row-gap: 0.5rem;
      }

      ::slotted([slot='navigation-icon']) {
        grid-area: nav;
      }

      ::slotted([slot='headline']) {
        grid-area: headline;
        justify-content: flex-start;
      }

      ::slotted([slot='action-items']) {
        grid-area: donate;
        justify-content: flex-end;
      }
    }
  </style>
  <slot name="navigation-icon"></slot>
  <slot name="headline"></slot>
  <slot name="action-items"></slot>
`;class Lo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(Lr.content.cloneNode(!0))}}customElements.get("md-top-app-bar")||customElements.define("md-top-app-bar",Lo);const Fo=[{label:"Home",href:"./index.html",id:"home"},{label:"About Us",href:"./about-story.html",id:"about"},{label:"Our Programmes",href:"./programmes-overview.html",id:"programmes"},{label:"Our Impact",href:"./impact-overview.html",id:"impact"},{label:"Stories",href:"./stories.html",id:"stories"},{label:"Join Us",href:"./join-students.html",id:"join"}],Oo=[{label:"Contact Us",href:"#footer-contact"},{label:"FAQ",href:"./faq.html"},{label:"Financials",href:"./financials.html"}],No=[{title:"Mission",links:[{label:"Language unlocks agency for refugees and newcomers worldwide.",href:"./about-story.html"}]},{title:"Explore",links:[{label:"About Us",href:"./about-story.html"},{label:"Our Programmes",href:"./programmes-overview.html"},{label:"Our Impact",href:"./impact-overview.html"}]},{title:"Act",links:[{label:"Apply",href:"./join-students.html"},{label:"Volunteer",href:"./join-volunteers.html"},{label:"Contact Us",href:"#footer-contact"}]},{title:"Trust",links:[{label:"FAQ",href:"./faq.html"},{label:"Financials & Transparency",href:"./financials.html"},{label:"Follow on Instagram",href:"https://instagram.com",external:!0}]}];function ur(e,t){const r=document.createElement("ul");return r.classList.add("nav-list"),e.forEach(a=>{const o=document.createElement("li"),s=document.createElement("a");s.href=a.href,s.textContent=a.label,s.classList.add("nav-link"),t&&a.id===t&&s.setAttribute("aria-current","page"),a.external&&(s.target="_blank",s.rel="noreferrer noopener"),o.append(s),r.append(o)}),r}function zo(){const e=document.createElement("footer");e.classList.add("site-footer");const t=document.createElement("div");t.classList.add("footer-grid"),No.forEach(o=>{const s=document.createElement("section");s.innerHTML=`
      <h3>${o.title}</h3>
      <ul class="footer-links"></ul>
    `;const n=s.querySelector("ul");o.links.forEach(i=>{const l=document.createElement("li"),d=document.createElement("a");d.href=i.href,d.textContent=i.label,i.external&&(d.target="_blank",d.rel="noreferrer noopener"),l.append(d),n.append(l)}),t.append(s)}),e.append(t);const r=document.createElement("div");r.classList.add("footer-contact"),r.id="footer-contact",r.innerHTML=`
    <p><strong>Email</strong> hello@noorcommunity.org</p>
    <p><strong>WhatsApp</strong> +44 0000 000000</p>
  `,e.append(r);const a=document.createElement("div");return a.classList.add("sub-footer"),a.innerHTML=`
    <p>© ${new Date().getFullYear()} Noor Community. Privacy Policy.</p>
  `,e.append(a),e}function ns({activeId:e="home",headline:t="Noor Community"}={}){document.body.innerHTML="",document.body.classList.add("noor-shell");const r=document.createElement("a");r.href="#main-content",r.classList.add("skip-link"),r.textContent="Skip to main content";const a=document.createElement("header");a.classList.add("site-header");const o=document.createElement("div");o.classList.add("utility-nav"),o.append(ur(Oo));const s=document.createElement("md-top-app-bar");s.classList.add("primary-app-bar"),s.innerHTML=`
    <a slot="navigation-icon" class="brand" href="./index.html" aria-label="Noor Community home">
      Noor Community
    </a>
    <div slot="headline" class="headline">${t}</div>
    <nav slot="action-items" class="primary-nav"></nav>
    <md-filled-button slot="action-items" class="donate" href="./donate.html">Donate</md-filled-button>
  `;const n=ur(Fo,e);n.setAttribute("role","menubar"),s.querySelector(".primary-nav").append(n),a.append(o,s);const i=document.createElement("main");i.id="main-content",i.tabIndex=-1;const l=zo();return document.body.append(r,a,i,l),{main:i,header:a,footer:l}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Bo=Ne(N);class ft extends Bo{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return k`
      <div class="container ${Jt(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&t.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return k`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return k`<span class="outline"></span>`}renderLeadingIcon(){return k`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return k`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:k`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const r=t.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable){t.stopImmediatePropagation(),t.preventDefault();return}}}ft.shadowRootOptions={...N.shadowRootOptions,delegatesFocus:!0};m([_({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0);m([_({type:Boolean,attribute:"soft-disabled",reflect:!0})],ft.prototype,"softDisabled",void 0);m([_({type:Boolean,attribute:"always-focusable"})],ft.prototype,"alwaysFocusable",void 0);m([_()],ft.prototype,"label",void 0);m([_({type:Boolean,reflect:!0,attribute:"has-icon"})],ft.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class St extends ft{constructor(){super(...arguments),this.elevated=!1,this.href="",this.download="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(t){const{ariaLabel:r}=this;return this.href?k`
        <a
          class="primary action"
          id="link"
          aria-label=${r||y}
          href=${this.href}
          download=${this.download||y}
          target=${this.target||y}
          >${t}</a
        >
      `:k`
      <button
        class="primary action"
        id="button"
        aria-label=${r||y}
        aria-disabled=${this.softDisabled||y}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderOutline(){return this.elevated?k`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}}m([_({type:Boolean})],St.prototype,"elevated",void 0);m([_()],St.prototype,"href",void 0);m([_()],St.prototype,"download",void 0);m([_()],St.prototype,"target",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Uo=D`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ho=D`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qo=D`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Me=class extends St{};Me.styles=[qo,Ho,Uo];Me=m([K("md-assist-chip")],Me);function ls({title:e,body:t,actions:r=[]}){const a=document.createElement("section");a.classList.add("hero"),a.innerHTML=`
    <div class="hero-content">
      <h1>${e}</h1>
      ${t?`<p>${t}</p>`:""}
      <div class="hero-actions"></div>
    </div>
  `;const o=a.querySelector(".hero-actions");return r.forEach(s=>{const n=document.createElement("md-filled-button");n.href=s.href,n.textContent=s.label,o.append(n)}),a}function cs(e){const t=document.createElement("div");return t.classList.add("card-grid"),e.forEach(r=>{const a=document.createElement("md-elevated-card");a.innerHTML=`
      <div class="card-content">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        ${r.link?`<a class="story-link" href="${r.link}">${r.linkLabel??"Learn more"}</a>`:""}
      </div>
    `,t.append(a)}),t}function ds(e){const t=document.createElement("div");return t.classList.add("stat-blocks"),e.forEach(r=>{const a=document.createElement("div");a.classList.add("stat-block"),a.innerHTML=`
      <h3>${r.value}</h3>
      <p><strong>${r.label}</strong></p>
      <p>${r.description}</p>
    `,t.append(a)}),t}function hs(e){const t=document.createElement("section");t.classList.add("section"),t.innerHTML=`
    <header>
      <h2>Voices from the Community</h2>
      <p>Stories from learners, volunteers, and partners around the world.</p>
    </header>
    <div class="card-grid"></div>
  `;const r=t.querySelector(".card-grid");return e.forEach(a=>{const o=document.createElement("md-filled-card");o.innerHTML=`
      <div class="card-content">
        <p>“${a.quote}”</p>
        <p><strong>${a.name}</strong></p>
      </div>
    `,r.append(o)}),t}const je=[{id:"amira-progress",title:"Amira Finds Her Voice in Business English",summary:"How tailored business English coaching helped Amira secure a promotion and advocate for her team.",tags:["business-english","career-growth","women"],programme:"general-business",type:"student",url:"./stories.html#amira-progress",featured:!0},{id:"sami-eap",title:"Sami Navigates University Admissions",summary:"Focused academic English support gave Sami the confidence to submit outstanding personal statements and thrive abroad.",tags:["eap","higher-education"],programme:"eap",type:"student",url:"./stories.html#sami-eap"},{id:"noor-impact",title:"Measuring Confidence Beyond the Classroom",summary:"Our data team connects storytelling with assessment to show how confidence scales across the cohort.",tags:["impact","data","theory-of-change"],programme:"impact",type:"impact",url:"./impact-stories.html#noor-impact"},{id:"fatima-skills",title:"Fatima Earns Her IELTS Scholarship",summary:"Community-powered peer study and targeted exam prep delivered a scholarship for Fatima.",tags:["skills-exams","ielts"],programme:"skills-exams",type:"student",url:"./stories.html#fatima-skills"},{id:"volunteer-spotlight",title:"Volunteer Spotlight: David’s Classroom in the Cloud",summary:"David brings asynchronous speaking labs and mentorship to students navigating time zones.",tags:["volunteer","mentorship"],programme:"volunteers",type:"volunteer",url:"./stories.html#volunteer-spotlight",featured:!0},{id:"partner-journey",title:"Partners in Progress: Zahra Foundation",summary:"A regional foundation co-designs scholarship pathways with Noor Community educators.",tags:["partners","collaboration"],programme:"partners",type:"partner",url:"./stories.html#partner-journey"}];function us(e){return je.filter(t=>t.programme===e)}function ps(e=3){return je.filter(t=>t.featured).slice(0,e)}function ms(e){const t=Array.isArray(e)?e:[e];return je.filter(r=>t.includes(r.type))}const ue=new Map;function pr(e,t){e&&(e.style.setProperty("--hero-image",`url("${t}")`),e.dataset.heroReady="true")}async function fs(e,t,r={}){var o,s,n;if(!e)return;if(!t){e.dataset.heroReady="false";return}if(ue.has(t)){pr(e,ue.get(t));return}const a=r.apiKey||void 0;if(!a){e.dataset.heroReady="false";return}try{const i=await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(t)}&orientation=landscape&per_page=1`,{headers:{Authorization:a}});if(!i.ok)throw new Error(`Pexels request failed: ${i.status}`);const l=await i.json(),d=(n=(s=(o=l==null?void 0:l.photos)==null?void 0:o[0])==null?void 0:s.src)==null?void 0:n.landscape;d?(ue.set(t,d),pr(e,d)):e.dataset.heroReady="false"}catch(i){console.error("Hero image fetch failed",i),e.dataset.heroReady="false"}}export{fs as a,cs as b,ls as c,ds as d,hs as e,ms as f,ps as g,us as h,Ro as i,ns as r,je as s};
