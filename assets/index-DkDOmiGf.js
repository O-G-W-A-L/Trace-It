function MR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cE={exports:{}},Ju={},uE={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),VR=Symbol.for("react.portal"),FR=Symbol.for("react.fragment"),UR=Symbol.for("react.strict_mode"),BR=Symbol.for("react.profiler"),zR=Symbol.for("react.provider"),$R=Symbol.for("react.context"),WR=Symbol.for("react.forward_ref"),qR=Symbol.for("react.suspense"),HR=Symbol.for("react.memo"),KR=Symbol.for("react.lazy"),Dy=Symbol.iterator;function GR(t){return t===null||typeof t!="object"?null:(t=Dy&&t[Dy]||t["@@iterator"],typeof t=="function"?t:null)}var hE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dE=Object.assign,fE={};function po(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||hE}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pE(){}pE.prototype=po.prototype;function em(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||hE}var tm=em.prototype=new pE;tm.constructor=em;dE(tm,po.prototype);tm.isPureReactComponent=!0;var Oy=Array.isArray,mE=Object.prototype.hasOwnProperty,nm={current:null},gE={key:!0,ref:!0,__self:!0,__source:!0};function _E(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fl,type:t,key:s,ref:o,props:i,_owner:nm.current}}function QR(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function YR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ly=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YR(""+t.key):e.toString(36)}function Ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case VR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yd(o,0):r,Oy(i)?(n="",t!=null&&(n=t.replace(Ly,"$&/")+"/"),Ac(i,e,n,"",function(u){return u})):i!=null&&(rm(i)&&(i=QR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Oy(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+yd(s,a);o+=Ac(s,e,n,c,i)}else if(c=GR(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+yd(s,a++),o+=Ac(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nc(t,e,n){if(t==null)return t;var r=[],i=0;return Ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function XR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},Nc={transition:null},JR={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:nm};function yE(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:nc,forEach:function(t,e,n){nc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nc(t,function(){e++}),e},toArray:function(t){return nc(t,function(e){return e})||[]},only:function(t){if(!rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=po;ee.Fragment=FR;ee.Profiler=BR;ee.PureComponent=em;ee.StrictMode=UR;ee.Suspense=qR;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JR;ee.act=yE;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)mE.call(e,c)&&!gE.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fl,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:$R,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zR,_context:t},t.Consumer=t};ee.createElement=_E;ee.createFactory=function(t){var e=_E.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:WR,render:t}};ee.isValidElement=rm;ee.lazy=function(t){return{$$typeof:KR,_payload:{_status:-1,_result:t},_init:XR}};ee.memo=function(t,e){return{$$typeof:HR,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};ee.unstable_act=yE;ee.useCallback=function(t,e){return Dt.current.useCallback(t,e)};ee.useContext=function(t){return Dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Dt.current.useEffect(t,e)};ee.useId=function(){return Dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};ee.useRef=function(t){return Dt.current.useRef(t)};ee.useState=function(t){return Dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Dt.current.useTransition()};ee.version="18.3.1";uE.exports=ee;var L=uE.exports;const im=jR(L),ZR=MR({__proto__:null,default:im},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eA=L,tA=Symbol.for("react.element"),nA=Symbol.for("react.fragment"),rA=Object.prototype.hasOwnProperty,iA=eA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sA={key:!0,ref:!0,__self:!0,__source:!0};function vE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rA.call(e,r)&&!sA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tA,type:t,key:s,ref:o,props:i,_owner:iA.current}}Ju.Fragment=nA;Ju.jsx=vE;Ju.jsxs=vE;cE.exports=Ju;var d=cE.exports,gf={},wE={exports:{}},tn={},EE={exports:{}},TE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var Z=z.length;z.push(G);e:for(;0<Z;){var pe=Z-1>>>1,ae=z[pe];if(0<i(ae,G))z[pe]=G,z[Z]=ae,Z=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],Z=z.pop();if(Z!==G){z[0]=Z;e:for(var pe=0,ae=z.length,Ve=ae>>>1;pe<Ve;){var Kn=2*(pe+1)-1,Gn=z[Kn],Qn=Kn+1,Yn=z[Qn];if(0>i(Gn,Z))Qn<ae&&0>i(Yn,Gn)?(z[pe]=Yn,z[Qn]=Z,pe=Qn):(z[pe]=Gn,z[Kn]=Z,pe=Kn);else if(Qn<ae&&0>i(Yn,Z))z[pe]=Yn,z[Qn]=Z,pe=Qn;else break e}}return G}function i(z,G){var Z=z.sortIndex-G.sortIndex;return Z!==0?Z:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],f=1,p=null,g=3,I=!1,x=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=z)r(u),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(u)}}function P(z){if(k=!1,w(z),!x)if(n(c)!==null)x=!0,kn(j);else{var G=n(u);G!==null&&Ee(P,G.startTime-z)}}function j(z,G){x=!1,k&&(k=!1,y(v),v=-1),I=!0;var Z=g;try{for(w(G),p=n(c);p!==null&&(!(p.expirationTime>G)||z&&!A());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,g=p.priorityLevel;var ae=pe(p.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(c)&&r(c),w(G)}else r(c);p=n(c)}if(p!==null)var Ve=!0;else{var Kn=n(u);Kn!==null&&Ee(P,Kn.startTime-G),Ve=!1}return Ve}finally{p=null,g=Z,I=!1}}var D=!1,C=null,v=-1,T=5,S=-1;function A(){return!(t.unstable_now()-S<T)}function b(){if(C!==null){var z=t.unstable_now();S=z;var G=!0;try{G=C(!0,z)}finally{G?N():(D=!1,C=null)}}else D=!1}var N;if(typeof _=="function")N=function(){_(b)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Lt=qe.port2;qe.port1.onmessage=b,N=function(){Lt.postMessage(null)}}else N=function(){R(b,0)};function kn(z){C=z,D||(D=!0,N())}function Ee(z,G){v=R(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,kn(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return z()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=g;g=z;try{return G()}finally{g=Z}},t.unstable_scheduleCallback=function(z,G,Z){var pe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?pe+Z:pe):Z=pe,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Z+ae,z={id:f++,callback:G,priorityLevel:z,startTime:Z,expirationTime:ae,sortIndex:-1},Z>pe?(z.sortIndex=Z,e(u,z),n(c)===null&&z===n(u)&&(k?(y(v),v=-1):k=!0,Ee(P,Z-pe))):(z.sortIndex=ae,e(c,z),x||I||(x=!0,kn(j))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=g;return function(){var Z=g;g=G;try{return z.apply(this,arguments)}finally{g=Z}}}})(TE);EE.exports=TE;var oA=EE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aA=L,Zt=oA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var IE=new Set,La={};function Zi(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(La[t]=e,t=0;t<e.length;t++)IE.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,lA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,My={},jy={};function cA(t){return _f.call(jy,t)?!0:_f.call(My,t)?!1:lA.test(t)?jy[t]=!0:(My[t]=!0,!1)}function uA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hA(t,e,n,r){if(e===null||typeof e>"u"||uA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sm,om);ut[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sm,om);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sm,om);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function am(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hA(e,n,i,r)&&(n=null),r||i===null?cA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=aA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rc=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),xE=Symbol.for("react.provider"),SE=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),um=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),CE=Symbol.for("react.offscreen"),Vy=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=Vy&&t[Vy]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,vd;function ia(t){if(vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var wd=!1;function Ed(t,e){if(!t||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function dA(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case yf:return"Profiler";case lm:return"StrictMode";case vf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case SE:return(t.displayName||"Context")+".Consumer";case xE:return(t._context.displayName||"Context")+".Provider";case cm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case um:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function fA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function RE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pA(t){var e=RE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=pA(t))}function AE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=RE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NE(t,e){e=e.checked,e!=null&&am(t,"checked",e,!1)}function If(t,e){NE(t,e);var n=si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function By(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(sa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:si(n)}}function kE(t,e){var n=si(e.value),r=si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sc,PE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sc=sc||document.createElement("div"),sc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mA=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){mA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function DE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function OE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=DE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gA=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(t,e){if(e){if(gA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nf=null;function hm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kf=null,Ds=null,Os=null;function $y(t){if(t=gl(t)){if(typeof kf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=rh(e),kf(t.stateNode,t.type,e))}}function LE(t){Ds?Os?Os.push(t):Os=[t]:Ds=t}function ME(){if(Ds){var t=Ds,e=Os;if(Os=Ds=null,$y(t),e)for(t=0;t<e.length;t++)$y(e[t])}}function jE(t,e){return t(e)}function VE(){}var Td=!1;function FE(t,e,n){if(Td)return t(e,n);Td=!0;try{return jE(t,e,n)}finally{Td=!1,(Ds!==null||Os!==null)&&(VE(),ME())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var r=rh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var bf=!1;if(dr)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{bf=!1}function _A(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ga=!1,Jc=null,Zc=!1,Pf=null,yA={onError:function(t){ga=!0,Jc=t}};function vA(t,e,n,r,i,s,o,a,c){ga=!1,Jc=null,_A.apply(yA,arguments)}function wA(t,e,n,r,i,s,o,a,c){if(vA.apply(this,arguments),ga){if(ga){var u=Jc;ga=!1,Jc=null}else throw Error(U(198));Zc||(Zc=!0,Pf=u)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(es(t)!==t)throw Error(U(188))}function EA(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===r)return Wy(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function BE(t){return t=EA(t),t!==null?zE(t):null}function zE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zE(t);if(e!==null)return e;t=t.sibling}return null}var $E=Zt.unstable_scheduleCallback,qy=Zt.unstable_cancelCallback,TA=Zt.unstable_shouldYield,IA=Zt.unstable_requestPaint,Ue=Zt.unstable_now,xA=Zt.unstable_getCurrentPriorityLevel,dm=Zt.unstable_ImmediatePriority,WE=Zt.unstable_UserBlockingPriority,eu=Zt.unstable_NormalPriority,SA=Zt.unstable_LowPriority,qE=Zt.unstable_IdlePriority,Zu=null,Fn=null;function CA(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Zu,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:NA,RA=Math.log,AA=Math.LN2;function NA(t){return t>>>=0,t===0?32:31-(RA(t)/AA|0)|0}var oc=64,ac=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function kA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=kA(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HE(){var t=oc;return oc<<=1,!(oc&4194240)&&(oc=64),t}function Id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function PA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function KE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GE,pm,QE,YE,XE,Of=!1,lc=[],qr=null,Hr=null,Kr=null,Va=new Map,Fa=new Map,Or=[],DA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hy(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OA(t,e,n,r,i){switch(e){case"focusin":return qr=qo(qr,t,e,n,r,i),!0;case"dragenter":return Hr=qo(Hr,t,e,n,r,i),!0;case"mouseover":return Kr=qo(Kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Va.set(s,qo(Va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fa.set(s,qo(Fa.get(s)||null,t,e,n,r,i)),!0}return!1}function JE(t){var e=Ri(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=UE(n),e!==null){t.blockedOn=e,XE(t.priority,function(){QE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nf=r,n.target.dispatchEvent(r),Nf=null}else return e=gl(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ky(t,e,n){kc(t)&&n.delete(e)}function LA(){Of=!1,qr!==null&&kc(qr)&&(qr=null),Hr!==null&&kc(Hr)&&(Hr=null),Kr!==null&&kc(Kr)&&(Kr=null),Va.forEach(Ky),Fa.forEach(Ky)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,LA)))}function Ua(t){function e(i){return Ho(i,t)}if(0<lc.length){Ho(lc[0],t);for(var n=1;n<lc.length;n++){var r=lc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&Ho(qr,t),Hr!==null&&Ho(Hr,t),Kr!==null&&Ho(Kr,t),Va.forEach(e),Fa.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)JE(n),n.blockedOn===null&&Or.shift()}var Ls=Tr.ReactCurrentBatchConfig,nu=!0;function MA(t,e,n,r){var i=me,s=Ls.transition;Ls.transition=null;try{me=1,mm(t,e,n,r)}finally{me=i,Ls.transition=s}}function jA(t,e,n,r){var i=me,s=Ls.transition;Ls.transition=null;try{me=4,mm(t,e,n,r)}finally{me=i,Ls.transition=s}}function mm(t,e,n,r){if(nu){var i=Lf(t,e,n,r);if(i===null)Dd(t,e,r,ru,n),Hy(t,r);else if(OA(i,t,e,n,r))r.stopPropagation();else if(Hy(t,r),e&4&&-1<DA.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&GE(s),s=Lf(t,e,n,r),s===null&&Dd(t,e,r,ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(t,e,r,null,n)}}var ru=null;function Lf(t,e,n,r){if(ru=null,t=hm(r),t=Ri(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function ZE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xA()){case dm:return 1;case WE:return 4;case eu:case SA:return 16;case qE:return 536870912;default:return 16}default:return 16}}var Br=null,gm=null,bc=null;function eT(){if(bc)return bc;var t,e=gm,n=e.length,r,i="value"in Br?Br.value:Br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bc=i.slice(t,1<r?1-r:void 0)}function Pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function Gy(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cc:Gy,this.isPropagationStopped=Gy,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_m=nn(mo),ml=Pe({},mo,{view:0,detail:0}),VA=nn(ml),xd,Sd,Ko,eh=Pe({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(xd=t.screenX-Ko.screenX,Sd=t.screenY-Ko.screenY):Sd=xd=0,Ko=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),Qy=nn(eh),FA=Pe({},eh,{dataTransfer:0}),UA=nn(FA),BA=Pe({},ml,{relatedTarget:0}),Cd=nn(BA),zA=Pe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),$A=nn(zA),WA=Pe({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qA=nn(WA),HA=Pe({},mo,{data:0}),Yy=nn(HA),KA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QA[t])?!!e[t]:!1}function ym(){return YA}var XA=Pe({},ml,{key:function(t){if(t.key){var e=KA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ym,charCode:function(t){return t.type==="keypress"?Pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JA=nn(XA),ZA=Pe({},eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xy=nn(ZA),eN=Pe({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ym}),tN=nn(eN),nN=Pe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rN=nn(nN),iN=Pe({},eh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sN=nn(iN),oN=[9,13,27,32],vm=dr&&"CompositionEvent"in window,_a=null;dr&&"documentMode"in document&&(_a=document.documentMode);var aN=dr&&"TextEvent"in window&&!_a,tT=dr&&(!vm||_a&&8<_a&&11>=_a),Jy=" ",Zy=!1;function nT(t,e){switch(t){case"keyup":return oN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function lN(t,e){switch(t){case"compositionend":return rT(e);case"keypress":return e.which!==32?null:(Zy=!0,Jy);case"textInput":return t=e.data,t===Jy&&Zy?null:t;default:return null}}function cN(t,e){if(vs)return t==="compositionend"||!vm&&nT(t,e)?(t=eT(),bc=gm=Br=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tT&&e.locale!=="ko"?null:e.data;default:return null}}var uN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uN[t.type]:e==="textarea"}function iT(t,e,n,r){LE(r),e=iu(e,"onChange"),0<e.length&&(n=new _m("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ya=null,Ba=null;function hN(t){mT(t,0)}function th(t){var e=Ts(t);if(AE(e))return t}function dN(t,e){if(t==="change")return e}var sT=!1;if(dr){var Rd;if(dr){var Ad="oninput"in document;if(!Ad){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),Ad=typeof tv.oninput=="function"}Rd=Ad}else Rd=!1;sT=Rd&&(!document.documentMode||9<document.documentMode)}function nv(){ya&&(ya.detachEvent("onpropertychange",oT),Ba=ya=null)}function oT(t){if(t.propertyName==="value"&&th(Ba)){var e=[];iT(e,Ba,t,hm(t)),FE(hN,e)}}function fN(t,e,n){t==="focusin"?(nv(),ya=e,Ba=n,ya.attachEvent("onpropertychange",oT)):t==="focusout"&&nv()}function pN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return th(Ba)}function mN(t,e){if(t==="click")return th(e)}function gN(t,e){if(t==="input"||t==="change")return th(e)}function _N(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:_N;function za(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rv(n)}}function aT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lT(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yN(t){var e=lT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aT(n.ownerDocument.documentElement,n)){if(r!==null&&wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iv(n,s);var o=iv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vN=dr&&"documentMode"in document&&11>=document.documentMode,ws=null,Mf=null,va=null,jf=!1;function sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||ws==null||ws!==Xc(r)||(r=ws,"selectionStart"in r&&wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),va&&za(va,r)||(va=r,r=iu(Mf,"onSelect"),0<r.length&&(e=new _m("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ws)))}function uc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},Nd={},cT={};dr&&(cT=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function nh(t){if(Nd[t])return Nd[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cT)return Nd[t]=e[n];return t}var uT=nh("animationend"),hT=nh("animationiteration"),dT=nh("animationstart"),fT=nh("transitionend"),pT=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(t,e){pT.set(t,e),Zi(e,[t])}for(var kd=0;kd<ov.length;kd++){var bd=ov[kd],wN=bd.toLowerCase(),EN=bd[0].toUpperCase()+bd.slice(1);hi(wN,"on"+EN)}hi(uT,"onAnimationEnd");hi(hT,"onAnimationIteration");hi(dT,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(fT,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TN=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function av(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wA(r,e,void 0,t),t.currentTarget=null}function mT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;av(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;av(i,a,u),s=c}}}if(Zc)throw t=Pf,Zc=!1,Pf=null,t}function Ie(t,e){var n=e[zf];n===void 0&&(n=e[zf]=new Set);var r=t+"__bubble";n.has(r)||(gT(e,t,2,!1),n.add(r))}function Pd(t,e,n){var r=0;e&&(r|=4),gT(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[hc]){t[hc]=!0,IE.forEach(function(n){n!=="selectionchange"&&(TN.has(n)||Pd(n,!1,t),Pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,Pd("selectionchange",!1,e))}}function gT(t,e,n,r){switch(ZE(e)){case 1:var i=MA;break;case 4:i=jA;break;default:i=mm}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}FE(function(){var u=s,f=hm(n),p=[];e:{var g=pT.get(t);if(g!==void 0){var I=_m,x=t;switch(t){case"keypress":if(Pc(n)===0)break e;case"keydown":case"keyup":I=JA;break;case"focusin":x="focus",I=Cd;break;case"focusout":x="blur",I=Cd;break;case"beforeblur":case"afterblur":I=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=UA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=tN;break;case uT:case hT:case dT:I=$A;break;case fT:I=rN;break;case"scroll":I=VA;break;case"wheel":I=sN;break;case"copy":case"cut":case"paste":I=qA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Xy}var k=(e&4)!==0,R=!k&&t==="scroll",y=k?g!==null?g+"Capture":null:g;k=[];for(var _=u,w;_!==null;){w=_;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,y!==null&&(P=ja(_,y),P!=null&&k.push(Wa(_,P,w)))),R)break;_=_.return}0<k.length&&(g=new I(g,x,null,n,f),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Nf&&(x=n.relatedTarget||n.fromElement)&&(Ri(x)||x[fr]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=u,x=x?Ri(x):null,x!==null&&(R=es(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=u),I!==x)){if(k=Qy,P="onMouseLeave",y="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Xy,P="onPointerLeave",y="onPointerEnter",_="pointer"),R=I==null?g:Ts(I),w=x==null?g:Ts(x),g=new k(P,_+"leave",I,n,f),g.target=R,g.relatedTarget=w,P=null,Ri(f)===u&&(k=new k(y,_+"enter",x,n,f),k.target=w,k.relatedTarget=R,P=k),R=P,I&&x)t:{for(k=I,y=x,_=0,w=k;w;w=ds(w))_++;for(w=0,P=y;P;P=ds(P))w++;for(;0<_-w;)k=ds(k),_--;for(;0<w-_;)y=ds(y),w--;for(;_--;){if(k===y||y!==null&&k===y.alternate)break t;k=ds(k),y=ds(y)}k=null}else k=null;I!==null&&lv(p,g,I,k,!1),x!==null&&R!==null&&lv(p,R,x,k,!0)}}e:{if(g=u?Ts(u):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=dN;else if(ev(g))if(sT)j=gN;else{j=pN;var D=fN}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=mN);if(j&&(j=j(t,u))){iT(p,j,n,f);break e}D&&D(t,g,u),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&xf(g,"number",g.value)}switch(D=u?Ts(u):window,t){case"focusin":(ev(D)||D.contentEditable==="true")&&(ws=D,Mf=u,va=null);break;case"focusout":va=Mf=ws=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,sv(p,n,f);break;case"selectionchange":if(vN)break;case"keydown":case"keyup":sv(p,n,f)}var C;if(vm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else vs?nT(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(tT&&n.locale!=="ko"&&(vs||v!=="onCompositionStart"?v==="onCompositionEnd"&&vs&&(C=eT()):(Br=f,gm="value"in Br?Br.value:Br.textContent,vs=!0)),D=iu(u,v),0<D.length&&(v=new Yy(v,t,null,n,f),p.push({event:v,listeners:D}),C?v.data=C:(C=rT(n),C!==null&&(v.data=C)))),(C=aN?lN(t,n):cN(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(f=new Yy("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}mT(p,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ja(t,n),s!=null&&r.unshift(Wa(t,s,i)),s=ja(t,e),s!=null&&r.push(Wa(t,s,i))),t=t.return}return r}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=ja(n,s),c!=null&&o.unshift(Wa(n,c,a))):i||(c=ja(n,s),c!=null&&o.push(Wa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IN=/\r\n?/g,xN=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(IN,`
`).replace(xN,"")}function dc(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error(U(425))}function su(){}var Vf=null,Ff=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,SN=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,CN=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(RN)}:Bf;function RN(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ua(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),Dn="__reactFiber$"+go,qa="__reactProps$"+go,fr="__reactContainer$"+go,zf="__reactEvents$"+go,AN="__reactListeners$"+go,NN="__reactHandles$"+go;function Ri(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[Dn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Dn]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function rh(t){return t[qa]||null}var $f=[],Is=-1;function di(t){return{current:t}}function Re(t){0>Is||(t.current=$f[Is],$f[Is]=null,Is--)}function we(t,e){Is++,$f[Is]=t.current,t.current=e}var oi={},Ct=di(oi),Ft=di(!1),ji=oi;function qs(t,e){var n=t.type.contextTypes;if(!n)return oi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function ou(){Re(Ft),Re(Ct)}function dv(t,e,n){if(Ct.current!==oi)throw Error(U(168));we(Ct,e),we(Ft,n)}function _T(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,fA(t)||"Unknown",i));return Pe({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||oi,ji=Ct.current,we(Ct,t),we(Ft,Ft.current),!0}function fv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=_T(t,e,ji),r.__reactInternalMemoizedMergedChildContext=t,Re(Ft),Re(Ct),we(Ct,t)):Re(Ft),we(Ft,n)}var tr=null,ih=!1,Ld=!1;function yT(t){tr===null?tr=[t]:tr.push(t)}function kN(t){ih=!0,yT(t)}function fi(){if(!Ld&&tr!==null){Ld=!0;var t=0,e=me;try{var n=tr;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tr=null,ih=!1}catch(i){throw tr!==null&&(tr=tr.slice(t+1)),$E(dm,fi),i}finally{me=e,Ld=!1}}return null}var xs=[],Ss=0,lu=null,cu=0,rn=[],sn=0,Vi=null,nr=1,rr="";function Ii(t,e){xs[Ss++]=cu,xs[Ss++]=lu,lu=t,cu=e}function vT(t,e,n){rn[sn++]=nr,rn[sn++]=rr,rn[sn++]=Vi,Vi=t;var r=nr;t=rr;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-In(e)+i|n<<i|r,rr=s+t}else nr=1<<s|n<<i|r,rr=t}function Em(t){t.return!==null&&(Ii(t,1),vT(t,1,0))}function Tm(t){for(;t===lu;)lu=xs[--Ss],xs[Ss]=null,cu=xs[--Ss],xs[Ss]=null;for(;t===Vi;)Vi=rn[--sn],rn[sn]=null,rr=rn[--sn],rn[sn]=null,nr=rn[--sn],rn[sn]=null}var Yt=null,Kt=null,Ne=!1,vn=null;function wT(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vi!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Kt=null,!0):!1;default:return!1}}function Wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(Ne){var e=Kt;if(e){var n=e;if(!pv(t,e)){if(Wf(t))throw Error(U(418));e=Gr(n.nextSibling);var r=Yt;e&&pv(t,e)?wT(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Yt=t)}}else{if(Wf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ne=!1,Yt=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function fc(t){if(t!==Yt)return!1;if(!Ne)return mv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=Kt)){if(Wf(t))throw ET(),Error(U(418));for(;e;)wT(t,e),e=Gr(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Yt?Gr(t.stateNode.nextSibling):null;return!0}function ET(){for(var t=Kt;t;)t=Gr(t.nextSibling)}function Hs(){Kt=Yt=null,Ne=!1}function Im(t){vn===null?vn=[t]:vn.push(t)}var bN=Tr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function pc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function TT(t){function e(y,_){if(t){var w=y.deletions;w===null?(y.deletions=[_],y.flags|=16):w.push(_)}}function n(y,_){if(!t)return null;for(;_!==null;)e(y,_),_=_.sibling;return null}function r(y,_){for(y=new Map;_!==null;)_.key!==null?y.set(_.key,_):y.set(_.index,_),_=_.sibling;return y}function i(y,_){return y=Jr(y,_),y.index=0,y.sibling=null,y}function s(y,_,w){return y.index=w,t?(w=y.alternate,w!==null?(w=w.index,w<_?(y.flags|=2,_):w):(y.flags|=2,_)):(y.flags|=1048576,_)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,_,w,P){return _===null||_.tag!==6?(_=zd(w,y.mode,P),_.return=y,_):(_=i(_,w),_.return=y,_)}function c(y,_,w,P){var j=w.type;return j===ys?f(y,_,w.props.children,P,w.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pr&&gv(j)===_.type)?(P=i(_,w.props),P.ref=Go(y,_,w),P.return=y,P):(P=Fc(w.type,w.key,w.props,null,y.mode,P),P.ref=Go(y,_,w),P.return=y,P)}function u(y,_,w,P){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=$d(w,y.mode,P),_.return=y,_):(_=i(_,w.children||[]),_.return=y,_)}function f(y,_,w,P,j){return _===null||_.tag!==7?(_=Oi(w,y.mode,P,j),_.return=y,_):(_=i(_,w),_.return=y,_)}function p(y,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=zd(""+_,y.mode,w),_.return=y,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rc:return w=Fc(_.type,_.key,_.props,null,y.mode,w),w.ref=Go(y,null,_),w.return=y,w;case _s:return _=$d(_,y.mode,w),_.return=y,_;case Pr:var P=_._init;return p(y,P(_._payload),w)}if(sa(_)||$o(_))return _=Oi(_,y.mode,w,null),_.return=y,_;pc(y,_)}return null}function g(y,_,w,P){var j=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return j!==null?null:a(y,_,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case rc:return w.key===j?c(y,_,w,P):null;case _s:return w.key===j?u(y,_,w,P):null;case Pr:return j=w._init,g(y,_,j(w._payload),P)}if(sa(w)||$o(w))return j!==null?null:f(y,_,w,P,null);pc(y,w)}return null}function I(y,_,w,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(w)||null,a(_,y,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case rc:return y=y.get(P.key===null?w:P.key)||null,c(_,y,P,j);case _s:return y=y.get(P.key===null?w:P.key)||null,u(_,y,P,j);case Pr:var D=P._init;return I(y,_,w,D(P._payload),j)}if(sa(P)||$o(P))return y=y.get(w)||null,f(_,y,P,j,null);pc(_,P)}return null}function x(y,_,w,P){for(var j=null,D=null,C=_,v=_=0,T=null;C!==null&&v<w.length;v++){C.index>v?(T=C,C=null):T=C.sibling;var S=g(y,C,w[v],P);if(S===null){C===null&&(C=T);break}t&&C&&S.alternate===null&&e(y,C),_=s(S,_,v),D===null?j=S:D.sibling=S,D=S,C=T}if(v===w.length)return n(y,C),Ne&&Ii(y,v),j;if(C===null){for(;v<w.length;v++)C=p(y,w[v],P),C!==null&&(_=s(C,_,v),D===null?j=C:D.sibling=C,D=C);return Ne&&Ii(y,v),j}for(C=r(y,C);v<w.length;v++)T=I(C,y,v,w[v],P),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?v:T.key),_=s(T,_,v),D===null?j=T:D.sibling=T,D=T);return t&&C.forEach(function(A){return e(y,A)}),Ne&&Ii(y,v),j}function k(y,_,w,P){var j=$o(w);if(typeof j!="function")throw Error(U(150));if(w=j.call(w),w==null)throw Error(U(151));for(var D=j=null,C=_,v=_=0,T=null,S=w.next();C!==null&&!S.done;v++,S=w.next()){C.index>v?(T=C,C=null):T=C.sibling;var A=g(y,C,S.value,P);if(A===null){C===null&&(C=T);break}t&&C&&A.alternate===null&&e(y,C),_=s(A,_,v),D===null?j=A:D.sibling=A,D=A,C=T}if(S.done)return n(y,C),Ne&&Ii(y,v),j;if(C===null){for(;!S.done;v++,S=w.next())S=p(y,S.value,P),S!==null&&(_=s(S,_,v),D===null?j=S:D.sibling=S,D=S);return Ne&&Ii(y,v),j}for(C=r(y,C);!S.done;v++,S=w.next())S=I(C,y,v,S.value,P),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?v:S.key),_=s(S,_,v),D===null?j=S:D.sibling=S,D=S);return t&&C.forEach(function(b){return e(y,b)}),Ne&&Ii(y,v),j}function R(y,_,w,P){if(typeof w=="object"&&w!==null&&w.type===ys&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case rc:e:{for(var j=w.key,D=_;D!==null;){if(D.key===j){if(j=w.type,j===ys){if(D.tag===7){n(y,D.sibling),_=i(D,w.props.children),_.return=y,y=_;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pr&&gv(j)===D.type){n(y,D.sibling),_=i(D,w.props),_.ref=Go(y,D,w),_.return=y,y=_;break e}n(y,D);break}else e(y,D);D=D.sibling}w.type===ys?(_=Oi(w.props.children,y.mode,P,w.key),_.return=y,y=_):(P=Fc(w.type,w.key,w.props,null,y.mode,P),P.ref=Go(y,_,w),P.return=y,y=P)}return o(y);case _s:e:{for(D=w.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(y,_.sibling),_=i(_,w.children||[]),_.return=y,y=_;break e}else{n(y,_);break}else e(y,_);_=_.sibling}_=$d(w,y.mode,P),_.return=y,y=_}return o(y);case Pr:return D=w._init,R(y,_,D(w._payload),P)}if(sa(w))return x(y,_,w,P);if($o(w))return k(y,_,w,P);pc(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(y,_.sibling),_=i(_,w),_.return=y,y=_):(n(y,_),_=zd(w,y.mode,P),_.return=y,y=_),o(y)):n(y,_)}return R}var Ks=TT(!0),IT=TT(!1),uu=di(null),hu=null,Cs=null,xm=null;function Sm(){xm=Cs=hu=null}function Cm(t){var e=uu.current;Re(uu),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){hu=t,xm=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(xm!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(hu===null)throw Error(U(308));Cs=t,hu.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ai=null;function Rm(t){Ai===null?Ai=[t]:Ai.push(t)}function xT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,pr(t,r)}function pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ST(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pr(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,pr(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}function _v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,r){var i=t.updateQueue;Dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,f=u=c=null,a=s;do{var g=a.lane,I=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,k=a;switch(g=e,I=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){p=x.call(I,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,g=typeof x=="function"?x.call(I,p,g):x,g==null)break e;p=Pe({},p,g);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else I={eventTime:I,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=I,c=p):f=f.next=I,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=p}}function yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var _l={},Un=di(_l),Ha=di(_l),Ka=di(_l);function Ni(t){if(t===_l)throw Error(U(174));return t}function Nm(t,e){switch(we(Ka,e),we(Ha,t),we(Un,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}Re(Un),we(Un,e)}function Gs(){Re(Un),Re(Ha),Re(Ka)}function CT(t){Ni(Ka.current);var e=Ni(Un.current),n=Cf(e,t.type);e!==n&&(we(Ha,t),we(Un,n))}function km(t){Ha.current===t&&(Re(Un),Re(Ha))}var ke=di(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function bm(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Oc=Tr.ReactCurrentDispatcher,jd=Tr.ReactCurrentBatchConfig,Fi=0,be=null,He=null,Xe=null,pu=!1,wa=!1,Ga=0,PN=0;function mt(){throw Error(U(321))}function Pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Dm(t,e,n,r,i,s){if(Fi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oc.current=t===null||t.memoizedState===null?MN:jN,t=n(r,i),wa){s=0;do{if(wa=!1,Ga=0,25<=s)throw Error(U(301));s+=1,Xe=He=null,e.updateQueue=null,Oc.current=VN,t=n(r,i)}while(wa)}if(Oc.current=mu,e=He!==null&&He.next!==null,Fi=0,Xe=He=be=null,pu=!1,e)throw Error(U(300));return t}function Om(){var t=Ga!==0;return Ga=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?be.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function hn(){if(He===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?be.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(U(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?be.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Qa(t,e){return typeof e=="function"?e(t):e}function Vd(t){var e=hn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var f=u.lane;if((Fi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,o=r):c=c.next=p,be.lanes|=f,Ui|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,Rn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fd(t){var e=hn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function RT(){}function AT(t,e){var n=be,r=hn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,Lm(bT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ya(9,kT.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(U(349));Fi&30||NT(n,e,i)}return i}function NT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kT(t,e,n,r){e.value=n,e.getSnapshot=r,PT(e)&&DT(t)}function bT(t,e,n){return n(function(){PT(e)&&DT(t)})}function PT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function DT(t){var e=pr(t,1);e!==null&&xn(e,t,1,-1)}function vv(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=LN.bind(null,be,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function OT(){return hn().memoizedState}function Lc(t,e,n,r){var i=Pn();be.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function sh(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Pm(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function wv(t,e){return Lc(8390656,8,t,e)}function Lm(t,e){return sh(2048,8,t,e)}function LT(t,e){return sh(4,2,t,e)}function MT(t,e){return sh(4,4,t,e)}function jT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VT(t,e,n){return n=n!=null?n.concat([t]):null,sh(4,4,jT.bind(null,e,t),n)}function Mm(){}function FT(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function UT(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function BT(t,e,n){return Fi&21?(Rn(n,e)||(n=HE(),be.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function DN(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{me=n,jd.transition=r}}function zT(){return hn().memoizedState}function ON(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$T(t))WT(e,n);else if(n=xT(t,e,n,r),n!==null){var i=Pt();xn(n,t,r,i),qT(n,e,r)}}function LN(t,e,n){var r=Xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($T(t))WT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var c=e.interleaved;c===null?(i.next=i,Rm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=xT(t,e,i,r),n!==null&&(i=Pt(),xn(n,t,r,i),qT(n,e,r))}}function $T(t){var e=t.alternate;return t===be||e!==null&&e===be}function WT(t,e){wa=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}var mu={readContext:un,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},MN={readContext:un,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,jT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ON.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:vv,useDebugValue:Mm,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=vv(!1),e=t[0];return t=DN.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Pn();if(Ne){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),tt===null)throw Error(U(349));Fi&30||NT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wv(bT.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,kT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=tt.identifierPrefix;if(Ne){var n=rr,r=nr;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jN={readContext:un,useCallback:FT,useContext:un,useEffect:Lm,useImperativeHandle:VT,useInsertionEffect:LT,useLayoutEffect:MT,useMemo:UT,useReducer:Vd,useRef:OT,useState:function(){return Vd(Qa)},useDebugValue:Mm,useDeferredValue:function(t){var e=hn();return BT(e,He.memoizedState,t)},useTransition:function(){var t=Vd(Qa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:RT,useSyncExternalStore:AT,useId:zT,unstable_isNewReconciler:!1},VN={readContext:un,useCallback:FT,useContext:un,useEffect:Lm,useImperativeHandle:VT,useInsertionEffect:LT,useLayoutEffect:MT,useMemo:UT,useReducer:Fd,useRef:OT,useState:function(){return Fd(Qa)},useDebugValue:Mm,useDeferredValue:function(t){var e=hn();return He===null?e.memoizedState=t:BT(e,He.memoizedState,t)},useTransition:function(){var t=Fd(Qa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:RT,useSyncExternalStore:AT,useId:zT,unstable_isNewReconciler:!1};function _n(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oh={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Xr(t),s=lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(xn(e,t,i,r),Dc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Xr(t),s=lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(xn(e,t,i,r),Dc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Xr(t),i=lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(xn(e,t,r,n),Dc(e,t,r))}};function Ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function HT(t,e,n){var r=!1,i=oi,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Ut(e)?ji:Ct.current,r=e.contextTypes,s=(r=r!=null)?qs(t,i):oi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oh.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Ut(e)?ji:Ct.current,i.context=qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oh.enqueueReplaceState(i,i.state,null),du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=dA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FN=typeof WeakMap=="function"?WeakMap:Map;function KT(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,sp=r),Qf(t,e)},n}function GT(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZN.bind(null,t,e,n),e.then(t,t))}function xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var UN=Tr.ReactCurrentOwner,Vt=!1;function bt(t,e,n,r){e.child=t===null?IT(e,null,n,r):Ks(e,t.child,n,r)}function Cv(t,e,n,r,i){n=n.render;var s=e.ref;return Ms(e,i),r=Dm(t,e,n,r,s,i),n=Om(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(Ne&&n&&Em(e),e.flags|=1,bt(t,e,r,i),e.child)}function Rv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,QT(t,e,s,r,i)):(t=Fc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return mr(t,e,i)}return e.flags|=1,t=Jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function QT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,mr(t,e,i)}return Yf(t,e,n,r,i)}function YT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(As,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(As,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(As,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(As,qt),qt|=r;return bt(t,e,i,n),e.child}function XT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,r,i){var s=Ut(n)?ji:Ct.current;return s=qs(e,s),Ms(e,i),n=Dm(t,e,n,r,s,i),r=Om(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(Ne&&r&&Em(e),e.flags|=1,bt(t,e,n,i),e.child)}function Av(t,e,n,r,i){if(Ut(n)){var s=!0;au(e)}else s=!1;if(Ms(e,i),e.stateNode===null)Mc(t,e),HT(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Ut(n)?ji:Ct.current,u=qs(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Tv(e,o,r,u),Dr=!1;var g=e.memoizedState;o.state=g,du(e,r,o,i),c=e.memoizedState,a!==r||g!==c||Ft.current||Dr?(typeof f=="function"&&(Kf(e,n,f,r),c=e.memoizedState),(a=Dr||Ev(e,n,a,r,g,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ST(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,p=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=un(c):(c=Ut(n)?ji:Ct.current,c=qs(e,c));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==c)&&Tv(e,o,r,c),Dr=!1,g=e.memoizedState,o.state=g,du(e,r,o,i);var x=e.memoizedState;a!==p||g!==x||Ft.current||Dr?(typeof I=="function"&&(Kf(e,n,I,r),x=e.memoizedState),(u=Dr||Ev(e,n,u,r,g,x,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Xf(t,e,n,r,s,i)}function Xf(t,e,n,r,i,s){XT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fv(e,n,!1),mr(t,e,s);r=e.stateNode,UN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):bt(t,e,a,s),e.memoizedState=r.state,i&&fv(e,n,!0),e.child}function JT(t){var e=t.stateNode;e.pendingContext?dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(t,e.context,!1),Nm(t,e.containerInfo)}function Nv(t,e,n,r,i){return Hs(),Im(i),e.flags|=256,bt(t,e,n,r),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(ke,i&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ch(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Jf,t):jm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Jr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jf,r}return s=t.child,t=s.sibling,r=Jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jm(t,e){return e=ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mc(t,e,n,r){return r!==null&&Im(r),Ks(e,t.child,null,n),t=jm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ud(Error(U(422))),mc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ch({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Jf,s);if(!(e.mode&1))return mc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Ud(s,r,void 0),mc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pr(t,i),xn(r,t,i,-1))}return $m(),r=Ud(Error(U(421))),mc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ek.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=Gr(i.nextSibling),Yt=e,Ne=!0,vn=null,t!==null&&(rn[sn++]=nr,rn[sn++]=rr,rn[sn++]=Vi,nr=t.id,rr=t.overflow,Vi=e),e=jm(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function Bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zN(t,e,n){switch(e.tag){case 3:JT(e),Hs();break;case 5:CT(e);break;case 1:Ut(e.type)&&au(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(uu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?ZT(t,e,n):(we(ke,ke.current&1),t=mr(t,e,n),t!==null?t.sibling:null);we(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,YT(t,e,n)}return mr(t,e,n)}var tI,ep,nI,rI;tI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};nI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ni(Un.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}Rf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(La.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(La.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $N(t,e,n){var r=e.pendingProps;switch(Tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Ut(e.type)&&ou(),gt(e),null;case 3:return r=e.stateNode,Gs(),Re(Ft),Re(Ct),bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(lp(vn),vn=null))),ep(t,e),gt(e),null;case 5:km(e);var i=Ni(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)nI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return gt(e),null}if(t=Ni(Un.current),fc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[qa]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)Ie(aa[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Fy(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":By(r,s),Ie("invalid",r)}Rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&dc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dc(r.textContent,a,t),i=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":ic(r),Uy(r,s,!0);break;case"textarea":ic(r),zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[qa]=r,tI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Af(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)Ie(aa[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Fy(t,r),i=Tf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":By(t,r),i=Sf(t,r),Ie("invalid",t);break;default:i=r}Rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?OE(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&PE(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ma(t,c):typeof c=="number"&&Ma(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ie("scroll",t):c!=null&&am(t,s,c,o))}switch(n){case"input":ic(t),Uy(t,r,!1);break;case"textarea":ic(t),zy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)rI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ni(Ka.current),Ni(Un.current),fc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:dc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return gt(e),null;case 13:if(Re(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Kt!==null&&e.mode&1&&!(e.flags&128))ET(),Hs(),e.flags|=98560,s=!1;else if(s=fc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Dn]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else vn!==null&&(lp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ke===0&&(Ke=3):$m())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Gs(),ep(t,e),t===null&&$a(e.stateNode.containerInfo),gt(e),null;case 10:return Cm(e.type._context),gt(e),null;case 17:return Ut(e.type)&&ou(),gt(e),null;case 19:if(Re(ke),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,Qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Ys&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return gt(e),null}else 2*Ue()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=ke.current,we(ke,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return zm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function WN(t,e){switch(Tm(e),e.tag){case 1:return Ut(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Re(Ft),Re(Ct),bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return km(e),null;case 13:if(Re(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(ke),null;case 4:return Gs(),null;case 10:return Cm(e.type._context),null;case 22:case 23:return zm(),null;case 24:return null;default:return null}}var gc=!1,vt=!1,qN=typeof WeakSet=="function"?WeakSet:Set,q=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var bv=!1;function HN(t,e){if(Vf=nu,t=lT(),wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,f=0,p=t,g=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)g=p,p=I;for(;;){if(p===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++f===r&&(c=o),(I=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=I}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},nu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,R=x.memoizedState,y=e.stateNode,_=y.getSnapshotBeforeUpdate(e.elementType===e.type?k:_n(e.type,k),R);y.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){Le(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=bv,bv=!1,x}function Ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tp(e,n,s)}i=i.next}while(i!==r)}}function ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iI(t){var e=t.alternate;e!==null&&(t.alternate=null,iI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[qa],delete e[zf],delete e[AN],delete e[NN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sI(t){return t.tag===5||t.tag===3||t.tag===4}function Pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var rt=null,yn=!1;function kr(t,e,n){for(n=n.child;n!==null;)oI(t,e,n),n=n.sibling}function oI(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Zu,n)}catch{}switch(n.tag){case 5:vt||Rs(n,e);case 6:var r=rt,i=yn;rt=null,kr(t,e,n),rt=r,yn=i,rt!==null&&(yn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(yn?(t=rt,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),Ua(t)):Od(rt,n.stateNode));break;case 4:r=rt,i=yn,rt=n.stateNode.containerInfo,yn=!0,kr(t,e,n),rt=r,yn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tp(n,e,o),i=i.next}while(i!==r)}kr(t,e,n);break;case 1:if(!vt&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,kr(t,e,n),vt=r):kr(t,e,n);break;default:kr(t,e,n)}}function Dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qN),e.forEach(function(r){var i=tk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,yn=!1;break e;case 3:rt=a.stateNode.containerInfo,yn=!0;break e;case 4:rt=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(rt===null)throw Error(U(160));oI(s,o,i),rt=null,yn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aI(e,t),e=e.sibling}function aI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),bn(t),r&4){try{Ea(3,t,t.return),ah(3,t)}catch(k){Le(t,t.return,k)}try{Ea(5,t,t.return)}catch(k){Le(t,t.return,k)}}break;case 1:gn(e,t),bn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(gn(e,t),bn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{Ma(i,"")}catch(k){Le(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NE(i,s),Af(a,o);var u=Af(a,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?OE(i,p):f==="dangerouslySetInnerHTML"?PE(i,p):f==="children"?Ma(i,p):am(i,f,p,u)}switch(a){case"input":If(i,s);break;case"textarea":kE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Ps(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[qa]=s}catch(k){Le(t,t.return,k)}}break;case 6:if(gn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Le(t,t.return,k)}}break;case 3:if(gn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(k){Le(t,t.return,k)}break;case 4:gn(e,t),bn(t);break;case 13:gn(e,t),bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Um=Ue())),r&4&&Dv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||f,gn(e,t),vt=u):gn(e,t),bn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(g=q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Ea(4,g,g.return);break;case 1:Rs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(k){Le(r,n,k)}}break;case 5:Rs(g,g.return);break;case 22:if(g.memoizedState!==null){Lv(p);continue}}I!==null?(I.return=g,q=I):Lv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=DE("display",o))}catch(k){Le(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(k){Le(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gn(e,t),bn(t),r&4&&Dv(t);break;case 21:break;default:gn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ma(i,""),r.flags&=-33);var s=Pv(t);ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pv(t);rp(t,a,o);break;default:throw Error(U(161))}}catch(c){Le(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KN(t,e,n){q=t,lI(t)}function lI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gc;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||vt;a=gc;var u=vt;if(gc=o,(vt=c)&&!u)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?Mv(i):c!==null?(c.return=o,q=c):Mv(i);for(;s!==null;)q=s,lI(s),s=s.sibling;q=i,gc=a,vt=u}Ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ov(t)}}function Ov(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ua(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}vt||e.flags&512&&np(e)}catch(g){Le(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Lv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Mv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ah(4,e)}catch(c){Le(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Le(e,i,c)}}var s=e.return;try{np(e)}catch(c){Le(e,s,c)}break;case 5:var o=e.return;try{np(e)}catch(c){Le(e,o,c)}}}catch(c){Le(e,e.return,c)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var GN=Math.ceil,gu=Tr.ReactCurrentDispatcher,Vm=Tr.ReactCurrentOwner,ln=Tr.ReactCurrentBatchConfig,le=0,tt=null,$e=null,lt=0,qt=0,As=di(0),Ke=0,Xa=null,Ui=0,lh=0,Fm=0,Ta=null,Mt=null,Um=0,Ys=1/0,er=null,_u=!1,sp=null,Yr=null,_c=!1,zr=null,yu=0,Ia=0,op=null,jc=-1,Vc=0;function Pt(){return le&6?Ue():jc!==-1?jc:jc=Ue()}function Xr(t){return t.mode&1?le&2&&lt!==0?lt&-lt:bN.transition!==null?(Vc===0&&(Vc=HE()),Vc):(t=me,t!==0||(t=window.event,t=t===void 0?16:ZE(t.type)),t):1}function xn(t,e,n,r){if(50<Ia)throw Ia=0,op=null,Error(U(185));pl(t,n,r),(!(le&2)||t!==tt)&&(t===tt&&(!(le&2)&&(lh|=n),Ke===4&&Lr(t,lt)),Bt(t,r),n===1&&le===0&&!(e.mode&1)&&(Ys=Ue()+500,ih&&fi()))}function Bt(t,e){var n=t.callbackNode;bA(t,e);var r=tu(t,t===tt?lt:0);if(r===0)n!==null&&qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qy(n),e===1)t.tag===0?kN(jv.bind(null,t)):yT(jv.bind(null,t)),CN(function(){!(le&6)&&fi()}),n=null;else{switch(KE(r)){case 1:n=dm;break;case 4:n=WE;break;case 16:n=eu;break;case 536870912:n=qE;break;default:n=eu}n=gI(n,cI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cI(t,e){if(jc=-1,Vc=0,le&6)throw Error(U(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=tu(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var i=le;le|=2;var s=hI();(tt!==t||lt!==e)&&(er=null,Ys=Ue()+500,Di(t,e));do try{XN();break}catch(a){uI(t,a)}while(!0);Sm(),gu.current=s,le=i,$e!==null?e=0:(tt=null,lt=0,e=Ke)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=Xa,Di(t,0),Lr(t,r),Bt(t,Ue()),n;if(e===6)Lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QN(i)&&(e=vu(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=ap(t,s))),e===1))throw n=Xa,Di(t,0),Lr(t,r),Bt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:xi(t,Mt,er);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=Um+500-Ue(),10<e)){if(tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bf(xi.bind(null,t,Mt,er),e);break}xi(t,Mt,er);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GN(r/1960))-r,10<r){t.timeoutHandle=Bf(xi.bind(null,t,Mt,er),r);break}xi(t,Mt,er);break;case 5:xi(t,Mt,er);break;default:throw Error(U(329))}}}return Bt(t,Ue()),t.callbackNode===n?cI.bind(null,t):null}function ap(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=vu(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&lp(e)),t}function lp(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function QN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~Fm,e&=~lh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function jv(t){if(le&6)throw Error(U(327));js();var e=tu(t,0);if(!(e&1))return Bt(t,Ue()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=Xa,Di(t,0),Lr(t,e),Bt(t,Ue()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Mt,er),Bt(t,Ue()),null}function Bm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ys=Ue()+500,ih&&fi())}}function Bi(t){zr!==null&&zr.tag===0&&!(le&6)&&js();var e=le;le|=1;var n=ln.transition,r=me;try{if(ln.transition=null,me=1,t)return t()}finally{me=r,ln.transition=n,le=e,!(le&6)&&fi()}}function zm(){qt=As.current,Re(As)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SN(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:Gs(),Re(Ft),Re(Ct),bm();break;case 5:km(r);break;case 4:Gs();break;case 13:Re(ke);break;case 19:Re(ke);break;case 10:Cm(r.type._context);break;case 22:case 23:zm()}n=n.return}if(tt=t,$e=t=Jr(t.current,null),lt=qt=e,Ke=0,Xa=null,Fm=lh=Ui=0,Mt=Ta=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function uI(t,e){do{var n=$e;try{if(Sm(),Oc.current=mu,pu){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pu=!1}if(Fi=0,Xe=He=be=null,wa=!1,Ga=0,Vm.current=null,n===null||n.return===null){Ke=1,Xa=e,$e=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=lt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=xv(o);if(I!==null){I.flags&=-257,Sv(I,o,a,s,e),I.mode&1&&Iv(s,u,e),e=I,c=u;var x=e.updateQueue;if(x===null){var k=new Set;k.add(c),e.updateQueue=k}else x.add(c);break e}else{if(!(e&1)){Iv(s,u,e),$m();break e}c=Error(U(426))}}else if(Ne&&a.mode&1){var R=xv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Sv(R,o,a,s,e),Im(Qs(c,a));break e}}s=c=Qs(c,a),Ke!==4&&(Ke=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=KT(s,c,e);_v(s,y);break e;case 1:a=c;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yr===null||!Yr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=GT(s,a,e);_v(s,P);break e}}s=s.return}while(s!==null)}fI(n)}catch(j){e=j,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function hI(){var t=gu.current;return gu.current=mu,t===null?mu:t}function $m(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(Ui&268435455)&&!(lh&268435455)||Lr(tt,lt)}function vu(t,e){var n=le;le|=2;var r=hI();(tt!==t||lt!==e)&&(er=null,Di(t,e));do try{YN();break}catch(i){uI(t,i)}while(!0);if(Sm(),le=n,gu.current=r,$e!==null)throw Error(U(261));return tt=null,lt=0,Ke}function YN(){for(;$e!==null;)dI($e)}function XN(){for(;$e!==null&&!TA();)dI($e)}function dI(t){var e=mI(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?fI(t):$e=e,Vm.current=null}function fI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WN(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=$N(n,e,qt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function xi(t,e,n){var r=me,i=ln.transition;try{ln.transition=null,me=1,JN(t,e,n,r)}finally{ln.transition=i,me=r}return null}function JN(t,e,n,r){do js();while(zr!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PA(t,s),t===tt&&($e=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,gI(eu,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=me;me=1;var a=le;le|=4,Vm.current=null,HN(t,n),aI(n,t),yN(Ff),nu=!!Vf,Ff=Vf=null,t.current=n,KN(n),IA(),le=a,me=o,ln.transition=s}else t.current=n;if(_c&&(_c=!1,zr=t,yu=i),s=t.pendingLanes,s===0&&(Yr=null),CA(n.stateNode),Bt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=sp,sp=null,t;return yu&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===op?Ia++:(Ia=0,op=t):Ia=0,fi(),null}function js(){if(zr!==null){var t=KE(yu),e=ln.transition,n=me;try{if(ln.transition=null,me=16>t?16:t,zr===null)var r=!1;else{if(t=zr,zr=null,yu=0,le&6)throw Error(U(331));var i=le;for(le|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(q=u;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Ea(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var g=f.sibling,I=f.return;if(iI(f),f===u){q=null;break}if(g!==null){g.return=I,q=g;break}q=I}}}var x=s.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,q=y;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,q=w;else e:for(o=_;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ah(9,a)}}catch(j){Le(a,a.return,j)}if(a===o){q=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,q=P;break e}q=a.return}}if(le=i,fi(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Zu,t)}catch{}r=!0}return r}finally{me=n,ln.transition=e}}return!1}function Vv(t,e,n){e=Qs(n,e),e=KT(t,e,1),t=Qr(t,e,1),e=Pt(),t!==null&&(pl(t,1,e),Bt(t,e))}function Le(t,e,n){if(t.tag===3)Vv(t,t,n);else for(;e!==null;){if(e.tag===3){Vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=Qs(n,t),t=GT(e,t,1),e=Qr(e,t,1),t=Pt(),e!==null&&(pl(e,1,t),Bt(e,t));break}}e=e.return}}function ZN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(Ke===4||Ke===3&&(lt&130023424)===lt&&500>Ue()-Um?Di(t,0):Fm|=n),Bt(t,e)}function pI(t,e){e===0&&(t.mode&1?(e=ac,ac<<=1,!(ac&130023424)&&(ac=4194304)):e=1);var n=Pt();t=pr(t,e),t!==null&&(pl(t,e,n),Bt(t,n))}function ek(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pI(t,n)}function tk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),pI(t,n)}var mI;mI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,zN(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Ne&&e.flags&1048576&&vT(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=qs(e,Ct.current);Ms(e,n),i=Dm(null,e,r,t,i,n);var s=Om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=oh,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Xf(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Em(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rk(r),t=_n(r,t),i){case 0:e=Yf(null,e,r,t,n);break e;case 1:e=Av(null,e,r,t,n);break e;case 11:e=Cv(null,e,r,t,n);break e;case 14:e=Rv(null,e,r,_n(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Av(t,e,r,i,n);case 3:e:{if(JT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ST(t,e),du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qs(Error(U(423)),e),e=Nv(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(U(424)),e),e=Nv(t,e,r,n,i);break e}else for(Kt=Gr(e.stateNode.containerInfo.firstChild),Yt=e,Ne=!0,vn=null,n=IT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===i){e=mr(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return CT(e),t===null&&qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uf(r,i)?o=null:s!==null&&Uf(r,s)&&(e.flags|=32),XT(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return ZT(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Cv(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(uu,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Ft.current){e=mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=lr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ms(e,n),i=un(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),Rv(t,e,r,i,n);case 15:return QT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Mc(t,e),e.tag=1,Ut(r)?(t=!0,au(e)):t=!1,Ms(e,n),HT(e,r,i),Gf(e,r,i,n),Xf(null,e,r,!0,t,n);case 19:return eI(t,e,n);case 22:return YT(t,e,n)}throw Error(U(156,e.tag))};function gI(t,e){return $E(t,e)}function nk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new nk(t,e,n,r)}function Wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rk(t){if(typeof t=="function")return Wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cm)return 11;if(t===um)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Oi(n.children,i,s,e);case lm:o=8,i|=8;break;case yf:return t=on(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case vf:return t=on(13,n,e,i),t.elementType=vf,t.lanes=s,t;case wf:return t=on(19,n,e,i),t.elementType=wf,t.lanes=s,t;case CE:return ch(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xE:o=10;break e;case SE:o=9;break e;case cm:o=11;break e;case um:o=14;break e;case Pr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function ch(t,e,n,r){return t=on(22,t,r,e),t.elementType=CE,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function $d(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qm(t,e,n,r,i,s,o,a,c){return t=new ik(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function sk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _I(t){if(!t)return oi;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ut(n))return _T(t,n,e)}return e}function yI(t,e,n,r,i,s,o,a,c){return t=qm(n,r,!0,t,i,s,o,a,c),t.context=_I(null),n=t.current,r=Pt(),i=Xr(n),s=lr(r,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,pl(t,i,r),Bt(t,r),t}function uh(t,e,n,r){var i=e.current,s=Pt(),o=Xr(i);return n=_I(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,o),t!==null&&(xn(t,i,o,s),Dc(t,i,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hm(t,e){Fv(t,e),(t=t.alternate)&&Fv(t,e)}function ok(){return null}var vI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Km(t){this._internalRoot=t}hh.prototype.render=Km.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));uh(t,e,null,null)};hh.prototype.unmount=Km.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){uh(null,t,null,null)}),e[fr]=null}};function hh(t){this._internalRoot=t}hh.prototype.unstable_scheduleHydration=function(t){if(t){var e=YE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&JE(t)}};function Gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function ak(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wu(o);s.call(u)}}var o=yI(e,r,t,0,null,!1,!1,"",Uv);return t._reactRootContainer=o,t[fr]=o.current,$a(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wu(c);a.call(u)}}var c=qm(t,0,!1,null,null,!1,!1,"",Uv);return t._reactRootContainer=c,t[fr]=c.current,$a(t.nodeType===8?t.parentNode:t),Bi(function(){uh(e,c,n,r)}),c}function fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=wu(o);a.call(c)}}uh(e,o,t,i)}else o=ak(n,e,t,i,r);return wu(o)}GE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(fm(e,n|1),Bt(e,Ue()),!(le&6)&&(Ys=Ue()+500,fi()))}break;case 13:Bi(function(){var r=pr(t,1);if(r!==null){var i=Pt();xn(r,t,1,i)}}),Hm(t,1)}};pm=function(t){if(t.tag===13){var e=pr(t,134217728);if(e!==null){var n=Pt();xn(e,t,134217728,n)}Hm(t,134217728)}};QE=function(t){if(t.tag===13){var e=Xr(t),n=pr(t,e);if(n!==null){var r=Pt();xn(n,t,e,r)}Hm(t,e)}};YE=function(){return me};XE=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};kf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rh(r);if(!i)throw Error(U(90));AE(r),If(r,i)}}}break;case"textarea":kE(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};jE=Bm;VE=Bi;var lk={usingClientEntryPoint:!1,Events:[gl,Ts,rh,LE,ME,Bm]},Yo={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ck={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=BE(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Zu=yc.inject(ck),Fn=yc}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gm(e))throw Error(U(200));return sk(t,e,null,n)};tn.createRoot=function(t,e){if(!Gm(t))throw Error(U(299));var n=!1,r="",i=vI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qm(t,1,!1,null,null,n,!1,r,i),t[fr]=e.current,$a(t.nodeType===8?t.parentNode:t),new Km(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=BE(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Bi(t)};tn.hydrate=function(t,e,n){if(!dh(e))throw Error(U(200));return fh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!Gm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yI(e,null,t,1,n??null,i,!1,s,o),t[fr]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hh(e)};tn.render=function(t,e,n){if(!dh(e))throw Error(U(200));return fh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!dh(t))throw Error(U(40));return t._reactRootContainer?(Bi(function(){fh(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};tn.unstable_batchedUpdates=Bm;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return fh(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function wI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wI)}catch(t){console.error(t)}}wI(),wE.exports=tn;var uk=wE.exports,Bv=uk;gf.createRoot=Bv.createRoot,gf.hydrateRoot=Bv.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ja.apply(this,arguments)}var $r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($r||($r={}));const zv="popstate";function hk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:c=""}=ts(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),cp("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof s=="string"?s:Eu(s))}function r(i,s){Qm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fk(e,n,r,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dk(){return Math.random().toString(36).substr(2,8)}function $v(t,e){return{usr:t.state,key:t.key,idx:e}}function cp(t,e,n,r){return n===void 0&&(n=null),Ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||r||dk()})}function Eu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$r.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(Ja({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function p(){a=$r.Pop;let R=f(),y=R==null?null:R-u;u=R,c&&c({action:a,location:k.location,delta:y})}function g(R,y){a=$r.Push;let _=cp(k.location,R,y);n&&n(_,R),u=f()+1;let w=$v(_,u),P=k.createHref(_);try{o.pushState(w,"",P)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(P)}s&&c&&c({action:a,location:k.location,delta:1})}function I(R,y){a=$r.Replace;let _=cp(k.location,R,y);n&&n(_,R),u=f();let w=$v(_,u),P=k.createHref(_);o.replaceState(w,"",P),s&&c&&c({action:a,location:k.location,delta:0})}function x(R){let y=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof R=="string"?R:Eu(R);return _=_.replace(/ $/,"%20"),Be(y,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,y)}let k={get action(){return a},get location(){return t(i,o)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zv,p),c=R,()=>{i.removeEventListener(zv,p),c=null}},createHref(R){return e(i,R)},createURL:x,encodeLocation(R){let y=x(R);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:I,go(R){return o.go(R)}};return k}var Wv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Wv||(Wv={}));function pk(t,e,n){return n===void 0&&(n="/"),mk(t,e,n,!1)}function mk(t,e,n,r){let i=typeof e=="string"?ts(e):e,s=Ym(i.pathname||"/",n);if(s==null)return null;let o=EI(t);gk(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=Rk(s);a=Sk(o[c],u,r)}return a}function EI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Zr([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),EI(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ik(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of TI(s.path))i(s,o,c)}),e}function TI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TI(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function gk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _k=/^:[\w-]+$/,yk=3,vk=2,wk=1,Ek=10,Tk=-2,qv=t=>t==="*";function Ik(t,e){let n=t.split("/"),r=n.length;return n.some(qv)&&(r+=Tk),e&&(r+=vk),n.filter(i=>!qv(i)).reduce((i,s)=>i+(_k.test(s)?yk:s===""?wk:Ek),r)}function xk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Sk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Hv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Hv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Zr([s,p.pathname]),pathnameBase:bk(Zr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Zr([s,p.pathnameBase]))}return o}function Hv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ck(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let k=a[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const x=a[p];return I&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ck(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Rk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ym(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ak(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ts(t):t;return{pathname:n?n.startsWith("/")?n:Nk(n,e):e,search:Pk(r),hash:Dk(i)}}function Nk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xm(t,e){let n=kk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ts(t):(i=Ja({},t),Be(!i.pathname||!i.pathname.includes("?"),Wd("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Wd("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let c=Ak(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Zr=t=>t.join("/").replace(/\/\/+/g,"/"),bk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Pk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Dk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const II=["post","put","patch","delete"];new Set(II);const Lk=["get",...II];new Set(Lk);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}const Zm=L.createContext(null),Mk=L.createContext(null),pi=L.createContext(null),ph=L.createContext(null),Ir=L.createContext({outlet:null,matches:[],isDataRoute:!1}),xI=L.createContext(null);function jk(t,e){let{relative:n}=e===void 0?{}:e;_o()||Be(!1);let{basename:r,navigator:i}=L.useContext(pi),{hash:s,pathname:o,search:a}=CI(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Zr([r,o])),i.createHref({pathname:c,search:a,hash:s})}function _o(){return L.useContext(ph)!=null}function yl(){return _o()||Be(!1),L.useContext(ph).location}function SI(t){L.useContext(pi).static||L.useLayoutEffect(t)}function yo(){let{isDataRoute:t}=L.useContext(Ir);return t?Xk():Vk()}function Vk(){_o()||Be(!1);let t=L.useContext(Zm),{basename:e,future:n,navigator:r}=L.useContext(pi),{matches:i}=L.useContext(Ir),{pathname:s}=yl(),o=JSON.stringify(Xm(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return SI(()=>{a.current=!0}),L.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=Jm(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Zr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Fk(){let{matches:t}=L.useContext(Ir),e=t[t.length-1];return e?e.params:{}}function CI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(pi),{matches:i}=L.useContext(Ir),{pathname:s}=yl(),o=JSON.stringify(Xm(i,r.v7_relativeSplatPath));return L.useMemo(()=>Jm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Uk(t,e){return Bk(t,e)}function Bk(t,e,n,r){_o()||Be(!1);let{navigator:i}=L.useContext(pi),{matches:s}=L.useContext(Ir),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=yl(),f;if(e){var p;let R=typeof e=="string"?ts(e):e;c==="/"||(p=R.pathname)!=null&&p.startsWith(c)||Be(!1),f=R}else f=u;let g=f.pathname||"/",I=g;if(c!=="/"){let R=c.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=pk(t,{pathname:I}),k=Hk(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Zr([c,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?c:Zr([c,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&k?L.createElement(ph.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:$r.Pop}},k):k}function zk(){let t=Yk(),e=Ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const $k=L.createElement(zk,null);class Wk extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Ir.Provider,{value:this.props.routeContext},L.createElement(xI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qk(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Zm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Ir.Provider,{value:e},r)}function Hk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);f>=0||Be(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:g,errors:I}=n,x=p.route.loader&&g[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let I,x=!1,k=null,R=null;n&&(I=a&&p.route.id?a[p.route.id]:void 0,k=p.route.errorElement||$k,c&&(u<0&&g===0?(x=!0,R=null):u===g&&(x=!0,R=p.route.hydrateFallbackElement||null)));let y=e.concat(o.slice(0,g+1)),_=()=>{let w;return I?w=k:x?w=R:p.route.Component?w=L.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=f,L.createElement(qk,{match:p,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?L.createElement(Wk,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):_()},null)}var RI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(RI||{}),Tu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Tu||{});function Kk(t){let e=L.useContext(Zm);return e||Be(!1),e}function Gk(t){let e=L.useContext(Mk);return e||Be(!1),e}function Qk(t){let e=L.useContext(Ir);return e||Be(!1),e}function AI(t){let e=Qk(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function Yk(){var t;let e=L.useContext(xI),n=Gk(Tu.UseRouteError),r=AI(Tu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Xk(){let{router:t}=Kk(RI.UseNavigateStable),e=AI(Tu.UseNavigateStable),n=L.useRef(!1);return SI(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Za({fromRouteId:e},s)))},[t,e])}function Xo(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||Be(!1);let{future:s,static:o}=L.useContext(pi),{matches:a}=L.useContext(Ir),{pathname:c}=yl(),u=yo(),f=Jm(e,Xm(a,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(f);return L.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Zn(t){Be(!1)}function Jk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$r.Pop,navigator:s,static:o=!1,future:a}=t;_o()&&Be(!1);let c=e.replace(/^\/*/,"/"),u=L.useMemo(()=>({basename:c,navigator:s,static:o,future:Za({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof r=="string"&&(r=ts(r));let{pathname:f="/",search:p="",hash:g="",state:I=null,key:x="default"}=r,k=L.useMemo(()=>{let R=Ym(f,c);return R==null?null:{location:{pathname:R,search:p,hash:g,state:I,key:x},navigationType:i}},[c,f,p,g,I,x,i]);return k==null?null:L.createElement(pi.Provider,{value:u},L.createElement(ph.Provider,{children:n,value:k}))}function Zk(t){let{children:e,location:n}=t;return Uk(up(e),n)}new Promise(()=>{});function up(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,up(r.props.children,s));return}r.type!==Zn&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hp(){return hp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hp.apply(this,arguments)}function eb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nb(t,e){return t.button===0&&(!e||e==="_self")&&!tb(t)}const rb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ib="6";try{window.__reactRouterVersion=ib}catch{}const sb="startTransition",Kv=ZR[sb];function ob(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=hk({window:i,v5Compat:!0}));let o=s.current,[a,c]=L.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=L.useCallback(p=>{u&&Kv?Kv(()=>c(p)):c(p)},[c,u]);return L.useLayoutEffect(()=>o.listen(f),[o,f]),L.createElement(Jk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:f,viewTransition:p}=e,g=eb(e,rb),{basename:I}=L.useContext(pi),x,k=!1;if(typeof u=="string"&&lb.test(u)&&(x=u,ab))try{let w=new URL(window.location.href),P=u.startsWith("//")?new URL(w.protocol+u):new URL(u),j=Ym(P.pathname,I);P.origin===w.origin&&j!=null?u=j+P.search+P.hash:k=!0}catch{}let R=jk(u,{relative:i}),y=cb(u,{replace:o,state:a,target:c,preventScrollReset:f,relative:i,viewTransition:p});function _(w){r&&r(w),w.defaultPrevented||y(w)}return L.createElement("a",hp({},g,{href:x||R,onClick:k||s?r:_,ref:n,target:c}))});var Gv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gv||(Gv={}));var Qv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qv||(Qv={}));function cb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,c=yo(),u=yl(),f=CI(t,{relative:o});return L.useCallback(p=>{if(nb(p,n)){p.preventDefault();let g=r!==void 0?r:Eu(u)===Eu(f);c(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,c,f,r,i,n,t,s,o,a])}var Yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw vo(e)},vo=function(t){return new Error("Firebase Database ("+NI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ub=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,I=u&63;c||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new hb;const g=s<<2|a>>4;if(r.push(g),u!==64){const I=a<<4&240|u>>2;if(r.push(I),p!==64){const x=u<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bI=function(t){const e=kI(t);return eg.encodeByteArray(e,!0)},Iu=function(t){return bI(t).replace(/\./g,"")},xu=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){return PI(void 0,t)}function PI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fb(n)||(t[n]=PI(t[n],e[n]));return t}function fb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=()=>pb().__FIREBASE_DEFAULTS__,gb=()=>{if(typeof process>"u"||typeof Yv>"u")return;const t=Yv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_b=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xu(t[1]);return e&&JSON.parse(e)},mh=()=>{try{return mb()||gb()||_b()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DI=t=>{var e,n;return(n=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tg=t=>{const e=DI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OI=()=>{var t;return(t=mh())===null||t===void 0?void 0:t.config},LI=t=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function yb(){var t;const e=(t=mh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wb(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return NI.NODE_ADMIN===!0}function Eb(){return!yb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FI(){try{return typeof indexedDB=="object"}catch{return!1}}function UI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Tb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ib,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function xb(t,e){return t.replace(Sb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=el(xu(s[0])||""),n=el(xu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Cb=function(t){const e=BI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Rb=function(t){const e=BI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Su(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xv(s)&&Xv(o)){if(!Js(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=a^s&(o^a),f=1518500249):(u=s^o^a,f=1859775393):p<60?(u=s&o|a&(s|o),f=2400959708):(u=s^o^a,f=3395469782);const g=(i<<5|i>>>27)+u+c+f+r[p]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nb(t,e){const n=new kb(t,e);return n.subscribe.bind(n)}class kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}function Pb(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=1e3,Lb=2,Mb=4*60*60*1e3,jb=.5;function Jv(t,e=Ob,n=Lb){const r=e*Math.pow(n,t),i=Math.round(jb*r*(Math.random()-.5)*2);return Math.min(Mb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ng;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ub(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fb(t){return t===Si?void 0:t}function Ub(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const zb={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},$b=te.INFO,Wb={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},qb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Wb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=$b,this._logHandler=qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Hb=(t,e)=>e.some(n=>t instanceof n);let Zv,e0;function Kb(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gb(){return e0||(e0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zI=new WeakMap,fp=new WeakMap,$I=new WeakMap,Hd=new WeakMap,sg=new WeakMap;function Qb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zI.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function Yb(t){if(fp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fp.set(t,e)}let pp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$I.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xb(t){pp=t(pp)}function Jb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return $I.set(r,e.sort?e.sort():[e]),ei(r)}:Gb().includes(t)?function(...e){return t.apply(Kd(this),e),ei(zI.get(this))}:function(...e){return ei(t.apply(Kd(this),e))}}function Zb(t){return typeof t=="function"?Jb(t):(t instanceof IDBTransaction&&Yb(t),Hb(t,Kb())?new Proxy(t,pp):t)}function ei(t){if(t instanceof IDBRequest)return Qb(t);if(Hd.has(t))return Hd.get(t);const e=Zb(t);return e!==t&&(Hd.set(t,e),sg.set(e,t)),e}const Kd=t=>sg.get(t);function WI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ei(o.result),c.oldVersion,c.newVersion,ei(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eP=["get","getKey","getAll","getAllKeys","count"],tP=["put","add","delete","clear"],Gd=new Map;function t0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eP.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Gd.set(e,s),s}Xb(t=>({...t,get:(e,n,r)=>t0(e,n)||t.get(e,n,r),has:(e,n)=>!!t0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mp="@firebase/app",n0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new vl("@firebase/app"),iP="@firebase/app-compat",sP="@firebase/analytics-compat",oP="@firebase/analytics",aP="@firebase/app-check-compat",lP="@firebase/app-check",cP="@firebase/auth",uP="@firebase/auth-compat",hP="@firebase/database",dP="@firebase/data-connect",fP="@firebase/database-compat",pP="@firebase/functions",mP="@firebase/functions-compat",gP="@firebase/installations",_P="@firebase/installations-compat",yP="@firebase/messaging",vP="@firebase/messaging-compat",wP="@firebase/performance",EP="@firebase/performance-compat",TP="@firebase/remote-config",IP="@firebase/remote-config-compat",xP="@firebase/storage",SP="@firebase/storage-compat",CP="@firebase/firestore",RP="@firebase/vertexai-preview",AP="@firebase/firestore-compat",NP="firebase",kP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="[DEFAULT]",bP={[mp]:"fire-core",[iP]:"fire-core-compat",[oP]:"fire-analytics",[sP]:"fire-analytics-compat",[lP]:"fire-app-check",[aP]:"fire-app-check-compat",[cP]:"fire-auth",[uP]:"fire-auth-compat",[hP]:"fire-rtdb",[dP]:"fire-data-connect",[fP]:"fire-rtdb-compat",[pP]:"fire-fn",[mP]:"fire-fn-compat",[gP]:"fire-iid",[_P]:"fire-iid-compat",[yP]:"fire-fcm",[vP]:"fire-fcm-compat",[wP]:"fire-perf",[EP]:"fire-perf-compat",[TP]:"fire-rc",[IP]:"fire-rc-compat",[xP]:"fire-gcs",[SP]:"fire-gcs-compat",[CP]:"fire-fst",[AP]:"fire-fst-compat",[RP]:"fire-vertex","fire-js":"fire-js",[NP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map,PP=new Map,_p=new Map;function r0(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(_p.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;_p.set(e,t);for(const n of Cu.values())r0(n,t);for(const n of PP.values())r0(n,t);return!0}function Sr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new ns("app","Firebase",DP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=kP;function qI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ti.create("bad-app-name",{appName:String(i)});if(n||(n=OI()),!n)throw ti.create("no-options");const s=Cu.get(i);if(s){if(Js(n,s.options)&&Js(r,s.config))return s;throw ti.create("duplicate-app",{appName:i})}const o=new Bb(i);for(const c of _p.values())o.addComponent(c);const a=new OP(n,r,o);return Cu.set(i,a),a}function wl(t=gp){const e=Cu.get(t);if(!e&&t===gp&&OI())return qI();if(!e)throw ti.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=bP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}dn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="firebase-heartbeat-database",MP=1,tl="firebase-heartbeat-store";let Qd=null;function HI(){return Qd||(Qd=WI(LP,MP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function jP(t){try{const n=(await HI()).transaction(tl),r=await n.objectStore(tl).get(KI(t));return await n.done,r}catch(e){if(e instanceof pn)gr.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function i0(t,e){try{const r=(await HI()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,KI(t)),await r.done}catch(n){if(n instanceof pn)gr.warn(n.message);else{const r=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function KI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=1024,FP=30*24*60*60*1e3;class UP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=s0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=FP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=s0(),{heartbeatsToSend:r,unsentEntries:i}=BP(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return gr.warn(n),""}}}function s0(){return new Date().toISOString().substring(0,10)}function BP(t,e=VP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),o0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),o0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FI()?UI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function o0(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){dn(new en("platform-logger",e=>new nP(e),"PRIVATE")),dn(new en("heartbeat",e=>new UP(e),"PRIVATE")),xt(mp,n0,t),xt(mp,n0,"esm2017"),xt("fire-js","")}$P("");function og(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function GI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WP=GI,QI=new ns("auth","Firebase",GI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new vl("@firebase/auth");function qP(t,...e){Ru.logLevel<=te.WARN&&Ru.warn(`Auth (${mi}): ${t}`,...e)}function Uc(t,...e){Ru.logLevel<=te.ERROR&&Ru.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw ag(t,...e)}function Bn(t,...e){return ag(t,...e)}function YI(t,e,n){const r=Object.assign(Object.assign({},WP()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function cr(t){return YI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ag(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QI.create(t,...e)}function Q(t,e,...n){if(!t)throw ag(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uc(e),new Error(e)}function _r(t,e){t||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HP(){return a0()==="http:"||a0()==="https:"}function a0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HP()||MI()||"connection"in navigator)?navigator.onLine:!0}function GP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=ig()||jI()}get(){return KP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new El(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cr(t,e,n,r,i={}){return JI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return vb()||(u.referrerPolicy="no-referrer"),XI.fetch()(ZI(t,t.config.apiHost,n,a),u)})}async function JI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QP),e);try{const i=new JP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vc(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YI(t,f,u);An(t,f)}}catch(i){if(i instanceof pn)throw i;An(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await Cr(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lg(t.config,i):`${t.config.apiScheme}://${i}`}function XP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bn(this.auth,"network-request-failed")),YP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bn(t,e,r);return i.customData._tokenResponse=n,i}function l0(t){return t!==void 0&&t.enterprise!==void 0}class ZP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function e2(t,e){return Cr(t,"GET","/v2/recaptchaConfig",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function e1(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n2(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=cg(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xa(Yd(i.auth_time)),issuedAtTime:xa(Yd(i.iat)),expirationTime:xa(Yd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yd(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const i=xu(n);return i?JSON.parse(i):(Uc("Failed to decode base64 JWT payload"),null)}catch(i){return Uc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function c0(t){const e=cg(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&r2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zs(t,e1(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t1(s.providerUserInfo):[],a=o2(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function s2(t){const e=ve(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t1(t){return t.map(e=>{var{providerId:n}=e,r=og(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e){const n=await JI(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ZI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",XI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l2(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=c0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await a2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vs;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=og(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n2(this,e)}reload(){return s2(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await Zs(this,t2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:P,isAnonymous:j,providerData:D,stsTokenManager:C}=n;Q(w&&C,e,"internal-error");const v=Vs.fromJSON(this.name,C);Q(typeof w=="string",e,"internal-error"),br(p,e.name),br(g,e.name),Q(typeof P=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),br(I,e.name),br(x,e.name),br(k,e.name),br(R,e.name),br(y,e.name),br(_,e.name);const T=new sr({uid:w,auth:e,email:g,emailVerified:P,displayName:p,isAnonymous:j,photoURL:x,phoneNumber:I,tenantId:k,stsTokenManager:v,createdAt:y,lastLoginAt:_});return D&&Array.isArray(D)&&(T.providerData=D.map(S=>Object.assign({},S))),R&&(T._redirectEventId=R),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vs;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Au(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?t1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vs;a.updateFromIdToken(r);const c=new sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;function or(t){_r(t instanceof Function,"Expected a class definition");let e=u0.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,u0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n1.type="NONE";const h0=n1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(or(h0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||or(h0);const o=Bc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const p=sr._fromJSON(e,f);u!==s&&(a=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l1(e))return"Blackberry";if(c1(e))return"Webos";if(i1(e))return"Safari";if((e.includes("chrome/")||s1(e))&&!e.includes("edge/"))return"Chrome";if(a1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r1(t=Rt()){return/firefox\//i.test(t)}function i1(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s1(t=Rt()){return/crios\//i.test(t)}function o1(t=Rt()){return/iemobile/i.test(t)}function a1(t=Rt()){return/android/i.test(t)}function l1(t=Rt()){return/blackberry/i.test(t)}function c1(t=Rt()){return/webos/i.test(t)}function ug(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c2(t=Rt()){var e;return ug(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u2(){return wb()&&document.documentMode===10}function u1(t=Rt()){return ug(t)||a1(t)||c1(t)||l1(t)||/windows phone/i.test(t)||o1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e=[]){let n;switch(t){case"Browser":n=d0(Rt());break;case"Worker":n=`${d0(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",gi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=6;class p2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f0(this),this.idTokenSubscription=new f0(this),this.beforeStateQueue=new h2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await e1(this,{idToken:e}),r=await sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(cr(this));const n=e?ve(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d2(this),n=new p2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(t){return ve(t)}class f0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g2(t){_h=t}function d1(t){return _h.loadJS(t)}function _2(){return _h.recaptchaEnterpriseScript}function y2(){return _h.gapiScript}function v2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w2="recaptcha-enterprise",E2="NO_RECAPTCHA";class T2{constructor(e){this.type=w2,this.auth=rs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{e2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZP(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;l0(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(E2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&l0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_2();c.length!==0&&(c+=a),d1(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function p0(t,e,n,r=!1){const i=new T2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await p0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await p0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t,e){const n=Sr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Js(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function x2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function S2(t,e,n){const r=rs(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=f1(e),{host:o,port:a}=C2(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),R2()}function f1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C2(t){const e=f1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m0(o)}}}function m0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function A2(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function b2(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends hg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wp(e,n,"signInWithPassword",N2);case"emailLink":return k2(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wp(e,r,"signUpPassword",A2);case"emailLink":return b2(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class zi extends hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=og(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O2(t){const e=la(ca(t)).link,n=e?la(ca(e)).deep_link_id:null,r=la(ca(t)).deep_link_id;return(r?la(ca(r)).link:null)||r||n||e||t}class dg{constructor(e){var n,r,i,s,o,a;const c=la(ca(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=D2((i=c.mode)!==null&&i!==void 0?i:null);Q(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=O2(e);try{return new dg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return nl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dg.parseLink(n);return Q(r,"argument-error"),nl._fromEmailAndCode(e,r.code,r.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends p1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Il{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Il{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Il{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e){return Tl(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=g0(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g0(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nu(e,n,r,i)}}function m1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nu._fromErrorAndOperation(t,s,e,r):s})}async function M2(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(cr(r));const i="reauthenticate";try{const s=await Zs(t,m1(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=cg(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(t,e,n=!1){if(Ln(t.app))return Promise.reject(cr(t));const r="signIn",i=await m1(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function V2(t,e){return g1(rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function F2(t,e,n){if(Ln(t.app))return Promise.reject(cr(t));const r=rs(t),o=await wp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L2).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_1(t),c}),a=await $i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function U2(t,e,n){return Ln(t.app)?Promise.reject(cr(t)):V2(ve(t),Eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return Cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zs(r,B2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $2(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function W2(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function q2(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=1e3,K2=10;class v1 extends y1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);u2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}v1.type="LOCAL";const G2=v1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends y1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w1.type="SESSION";const E1=w1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Q2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=fg("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function X2(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function J2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eD(){return T1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="firebaseLocalStorageDb",tD=1,bu="firebaseLocalStorage",x1="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function nD(){const t=indexedDB.deleteDatabase(I1);return new xl(t).toPromise()}function Ep(){const t=indexedDB.open(I1,tD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bu,{keyPath:x1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bu)?e(r):(r.close(),await nD(),e(await Ep()))})})}async function _0(t,e,n){const r=vh(t,!0).put({[x1]:e,value:n});return new xl(r).toPromise()}async function rD(t,e){const n=vh(t,!1).get(e),r=await new xl(n).toPromise();return r===void 0?null:r.value}function y0(t,e){const n=vh(t,!0).delete(e);return new xl(n).toPromise()}const iD=800,sD=3;class S1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(eD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J2(),!this.activeServiceWorker)return;this.sender=new Y2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ep();return await _0(e,ku,"1"),await y0(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S1.type="LOCAL";const oD=S1;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t,e){return e?or(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends hg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lD(t){return g1(t.auth,new pg(t),t.bypassAuthState)}function cD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),j2(n,new pg(t),t.bypassAuthState)}async function uD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),M2(n,new pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lD;case"linkViaPopup":case"linkViaRedirect":return uD;case"reauthViaPopup":case"reauthViaRedirect":return cD;default:An(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new El(2e3,1e4);class Ns extends C1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hD.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="pendingRedirect",zc=new Map;class fD extends C1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const r=await pD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pD(t,e){const n=_D(e),r=gD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mD(t,e){zc.set(t._key(),e)}function gD(t){return or(t._redirectPersistence)}function _D(t){return Bc(dD,t.config.apiKey,t.name)}async function yD(t,e,n=!1){if(Ln(t.app))return Promise.reject(cr(t));const r=rs(t),i=aD(r,e),o=await new fD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=10*60*1e3;class wD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ED(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!R1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vD&&this.cachedEventUids.clear(),this.cachedEventUids.has(v0(e))}saveEventToCache(e){this.cachedEventUids.add(v0(e)),this.lastProcessedEventTime=Date.now()}}function v0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function R1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ED(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xD=/^https?/;async function SD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TD(t);for(const n of e)try{if(CD(n))return}catch{}An(t,"unauthorized-domain")}function CD(t){const e=yp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xD.test(n))return!1;if(ID.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=new El(3e4,6e4);function w0(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AD(t){return new Promise((e,n)=>{var r,i,s;function o(){w0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{w0(),n(Bn(t,"network-request-failed"))},timeout:RD.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=v2("iframefcb");return zn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},d1(`${y2()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $c=null,e})}let $c=null;function ND(t){return $c=$c||AD(t),$c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new El(5e3,15e3),bD="__/auth/iframe",PD="emulator/auth/iframe",DD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lg(e,PD):`https://${t.config.authDomain}/${bD}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=OD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function MD(t){const e=await ND(t),n=zn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:LD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},kD.get());function c(){zn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VD=500,FD=600,UD="_blank",BD="http://localhost";class E0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zD(t,e,n,r=VD,i=FD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Rt().toLowerCase();n&&(a=s1(u)?UD:n),r1(u)&&(e=e||BD,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[I,x])=>`${g}${I}=${x},`,"");if(c2(u)&&a!=="_self")return $D(e||"",a),new E0(null);const p=window.open(e||"",a,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new E0(p)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="__/auth/handler",qD="emulator/auth/handler",HD=encodeURIComponent("fac");async function T0(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof p1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Il){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${HD}=${encodeURIComponent(c)}`:"";return`${KD(t)}?${wo(a).slice(1)}${u}`}function KD({config:t}){return t.emulator?lg(t,qD):`https://${t.authDomain}/${WD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class GD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E1,this._completeRedirectFn=yD,this._overrideRedirectResult=mD}async _openPopup(e,n,r,i){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await T0(e,n,r,yp(),i);return zD(e,o,fg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await T0(e,n,r,yp(),i);return X2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MD(e),r=new wD(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u1()||i1()||ug()}}const QD=GD;var I0="@firebase/auth",x0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JD(t){dn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h1(t)},u=new m2(r,i,s,c);return x2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new en("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(r=>new YD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(I0,x0,XD(t)),xt(I0,x0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=5*60,eO=LI("authIdTokenMaxAge")||ZD;let S0=null;const tO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eO)return;const i=n==null?void 0:n.token;S0!==i&&(S0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function A1(t=wl()){const e=Sr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I2(t,{popupRedirectResolver:QD,persistence:[oD,G2,E1]}),r=LI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tO(s.toString());W2(n,o,()=>o(n.currentUser)),$2(n,a=>o(a))}}const i=DI("auth");return i&&S2(n,`http://${i}`),n}function nO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JD("Browser");var rO="firebase",iO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(rO,iO,"app");const N1="@firebase/installations",mg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=1e4,b1=`w:${mg}`,P1="FIS_v2",sO="https://firebaseinstallations.googleapis.com/v1",oO=60*60*1e3,aO="installations",lO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wi=new ns(aO,lO,cO);function D1(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1({projectId:t}){return`${sO}/projects/${t}/installations`}function L1(t){return{token:t.token,requestStatus:2,expiresIn:hO(t.expiresIn),creationTime:Date.now()}}async function M1(t,e){const r=(await e.json()).error;return Wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function j1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uO(t,{refreshToken:e}){const n=j1(t);return n.append("Authorization",dO(e)),n}async function V1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hO(t){return Number(t.replace("s","000"))}function dO(t){return`${P1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=O1(t),i=j1(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:P1,appId:t.appId,sdkVersion:b1},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await V1(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:L1(u.authToken)}}else throw await M1("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=/^[cdef][\w-]{21}$/,Tp="";function gO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_O(t);return mO.test(n)?n:Tp}catch{return Tp}}function _O(t){return pO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=new Map;function B1(t,e){const n=wh(t);z1(n,e),yO(n,e)}function z1(t,e){const n=U1.get(t);if(n)for(const r of n)r(e)}function yO(t,e){const n=vO();n&&n.postMessage({key:t,fid:e}),wO()}let ki=null;function vO(){return!ki&&"BroadcastChannel"in self&&(ki=new BroadcastChannel("[Firebase] FID Change"),ki.onmessage=t=>{z1(t.data.key,t.data.fid)}),ki}function wO(){U1.size===0&&ki&&(ki.close(),ki=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="firebase-installations-database",TO=1,qi="firebase-installations-store";let Jd=null;function gg(){return Jd||(Jd=WI(EO,TO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qi)}}})),Jd}async function Pu(t,e){const n=wh(t),i=(await gg()).transaction(qi,"readwrite"),s=i.objectStore(qi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&B1(t,e.fid),e}async function $1(t){const e=wh(t),r=(await gg()).transaction(qi,"readwrite");await r.objectStore(qi).delete(e),await r.done}async function Eh(t,e){const n=wh(t),i=(await gg()).transaction(qi,"readwrite"),s=i.objectStore(qi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&B1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t){let e;const n=await Eh(t.appConfig,r=>{const i=IO(r),s=xO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IO(t){const e=t||{fid:gO(),registrationStatus:0};return W1(e)}function xO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CO(t)}:{installationEntry:e}}async function SO(t,e){try{const n=await fO(t,e);return Pu(t.appConfig,n)}catch(n){throw D1(n)&&n.customData.serverCode===409?await $1(t.appConfig):await Pu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CO(t){let e=await C0(t.appConfig);for(;e.registrationStatus===1;)await F1(100),e=await C0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _g(t);return r||n}return e}function C0(t){return Eh(t,e=>{if(!e)throw Wi.create("installation-not-found");return W1(e)})}function W1(t){return RO(t)?{fid:t.fid,registrationStatus:0}:t}function RO(t){return t.registrationStatus===1&&t.registrationTime+k1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO({appConfig:t,heartbeatServiceProvider:e},n){const r=NO(t,n),i=uO(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:b1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await V1(()=>fetch(r,a));if(c.ok){const u=await c.json();return L1(u)}else throw await M1("Generate Auth Token",c)}function NO(t,{fid:e}){return`${O1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e=!1){let n;const r=await Eh(t.appConfig,s=>{if(!q1(s))throw Wi.create("not-registered");const o=s.authToken;if(!e&&PO(o))return s;if(o.requestStatus===1)return n=kO(t,e),s;{if(!navigator.onLine)throw Wi.create("app-offline");const a=OO(s);return n=bO(t,a),a}});return n?await n:r.authToken}async function kO(t,e){let n=await R0(t.appConfig);for(;n.authToken.requestStatus===1;)await F1(100),n=await R0(t.appConfig);const r=n.authToken;return r.requestStatus===0?yg(t,e):r}function R0(t){return Eh(t,e=>{if(!q1(e))throw Wi.create("not-registered");const n=e.authToken;return LO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bO(t,e){try{const n=await AO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pu(t.appConfig,r),n}catch(n){if(D1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pu(t.appConfig,r)}throw n}}function q1(t){return t!==void 0&&t.registrationStatus===2}function PO(t){return t.requestStatus===2&&!DO(t)}function DO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+oO}function OO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function LO(t){return t.requestStatus===1&&t.requestTime+k1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t){const e=t,{installationEntry:n,registrationPromise:r}=await _g(e);return r?r.catch(console.error):yg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e=!1){const n=t;return await VO(n),(await yg(n,e)).token}async function VO(t){const{registrationPromise:e}=await _g(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){if(!t||!t.options)throw Zd("App Configuration");if(!t.name)throw Zd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zd(t){return Wi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="installations",UO="installations-internal",BO=t=>{const e=t.getProvider("app").getImmediate(),n=FO(e),r=Sr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zO=t=>{const e=t.getProvider("app").getImmediate(),n=Sr(e,H1).getImmediate();return{getId:()=>MO(n),getToken:i=>jO(n,i)}};function $O(){dn(new en(H1,BO,"PUBLIC")),dn(new en(UO,zO,"PRIVATE"))}$O();xt(N1,mg);xt(N1,mg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="analytics",WO="firebase_id",qO="origin",HO=60*1e3,KO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new ns("analytics","Analytics",GO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){if(!t.startsWith(vg)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function K1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function YO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function XO(t,e){const n=YO("firebase-js-sdk-policy",{createScriptURL:QO}),r=document.createElement("script"),i=`${vg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function JO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await K1(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){zt.error(a)}t("config",i,s)}async function eL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await K1(n);for(const c of o){const u=a.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){zt.error(s)}}function tL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await eL(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await ZO(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){zt.error(a)}}return i}function nL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=tL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function rL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=30,sL=1e3;class oL{constructor(e={},n=sL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const G1=new oL;function aL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:aL(r)},s=KO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function cL(t,e=G1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dL;return setTimeout(async()=>{a.abort()},HO),Q1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Q1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=G1){var s;const{appId:o,measurementId:a}=t;try{await uL(r,e)}catch(c){if(a)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await lL(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!hL(u)){if(i.deleteThrottleMetadata(o),a)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Jv(n,i.intervalMillis,iL):Jv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),zt.debug(`Calling attemptFetch again in ${f} millis`),Q1(t,p,r,i)}}function uL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hL(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class dL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(){if(FI())try{await UI()}catch(t){return zt.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mL(t,e,n,r,i,s,o){var a;const c=cL(t);c.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>zt.error(I)),e.push(c);const u=pL().then(I=>{if(I)return r.getId()}),[f,p]=await Promise.all([c,u]);rL(s)||XO(s,f.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[qO]="firebase",g.update=!0,p!=null&&(g[WO]=p),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.app=e}_delete(){return delete Sa[this.app.options.appId],Promise.resolve()}}let Sa={},A0=[];const N0={};let ef="dataLayer",_L="gtag",k0,Y1,b0=!1;function yL(){const t=[];if(MI()&&t.push("This is a browser extension environment."),Tb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function vL(t,e,n){yL();const r=t.options.appId;if(!r)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Sa[r]!=null)throw Xt.create("already-exists",{id:r});if(!b0){JO(ef);const{wrappedGtag:s,gtagCore:o}=nL(Sa,A0,N0,ef,_L);Y1=s,k0=o,b0=!0}return Sa[r]=mL(t,A0,N0,e,k0,ef,n),new gL(t)}function wL(t=wl()){t=ve(t);const e=Sr(t,Du);return e.isInitialized()?e.getImmediate():EL(t)}function EL(t,e={}){const n=Sr(t,Du);if(n.isInitialized()){const i=n.getImmediate();if(Js(e,n.getOptions()))return i;throw Xt.create("already-initialized")}return n.initialize({options:e})}function TL(t,e,n,r){t=ve(t),fL(Y1,Sa[t.app.options.appId],e,n,r).catch(i=>zt.error(i))}const P0="@firebase/analytics",D0="0.10.8";function IL(){dn(new en(Du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vL(r,i,n)},"PUBLIC")),dn(new en("analytics-internal",t,"PRIVATE")),xt(P0,D0),xt(P0,D0,"esm2017");function t(e){try{const n=e.getProvider(Du).getImmediate();return{logEvent:(r,i,s)=>TL(n,r,i,s)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}IL();var O0={};const L0="@firebase/database",M0="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X1="";function xL(t){X1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:el(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SL(e)}}catch{}return new CL},bi=J1("localStorage"),RL=J1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new vl("@firebase/database"),AL=function(){let t=1;return function(){return t++}}(),Z1=function(t){const e=Db(t),n=new Ab;n.update(e);const r=n.digest();return eg.encodeByteArray(r)},Sl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sl.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let Ca=null,j0=!0;const NL=function(t,e){$(!e,"Can't turn on custom loggers persistently."),Bs.logLevel=te.VERBOSE,Ca=Bs.log.bind(Bs)},wt=function(...t){if(j0===!0&&(j0=!1,Ca===null&&RL.get("logging_enabled")===!0&&NL()),Ca){const e=Sl.apply(null,t);Ca(e)}},Cl=function(t){return function(...e){wt(t,...e)}},Ip=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sl(...t);Bs.error(e)},yr=function(...t){const e=`FIREBASE FATAL ERROR: ${Sl(...t)}`;throw Bs.error(e),new Error(e)},Jt=function(...t){const e="FIREBASE WARNING: "+Sl(...t);Bs.warn(e)},kL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ex=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},eo="[MIN_NAME]",Hi="[MAX_NAME]",To=function(t,e){if(t===e)return 0;if(t===eo||e===Hi)return-1;if(e===eo||t===Hi)return 1;{const n=V0(t),r=V0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PL=function(t,e){return t===e?0:t<e?-1:1},Jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},wg=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=wg(t[e[r]]);return n+="}",n},tx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nx=function(t){$(!ex(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},DL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},LL=new RegExp("^-?(0*)\\d{1,10}$"),ML=-2147483648,jL=2147483647,V0=function(t){if(LL.test(t)){const e=Number(t);if(e>=ML&&e<=jL)return e}return null},Rl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ra=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class Wc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="5",rx="v",ix="s",sx="r",ox="f",ax=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lx="ls",cx="p",xp="ac",ux="websocket",hx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fx(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===ux)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BL(t)&&(n.ns=t.namespace);const i=[];return fn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.counters_={}}incrementCounter(e,n=1){xr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return db(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={},nf={};function Tg(t){const e=t.toString();return tf[e]||(tf[e]=new zL),tf[e]}function $L(t,e){const n=t.toString();return nf[n]||(nf[n]=e()),nf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Rl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="start",qL="close",HL="pLPCommand",KL="pRTLPCB",px="id",mx="pw",gx="ser",GL="cb",QL="seg",YL="ts",XL="d",JL="dframe",_x=1870,yx=30,ZL=_x-yx,eM=25e3,tM=3e4;class ks{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cl(e),this.stats_=Tg(n),this.urlFn=c=>(this.appCheckToken&&(c[xp]=this.appCheckToken),fx(n,hx,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tM)),bL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ig((...s)=>{const[o,a,c,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===F0)this.id=a,this.password=c;else if(o===qL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[F0]="t",r[gx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rx]=Eg,this.transportSessionId&&(r[ix]=this.transportSessionId),this.lastSessionId&&(r[lx]=this.lastSessionId),this.applicationId&&(r[cx]=this.applicationId),this.appCheckToken&&(r[xp]=this.appCheckToken),typeof location<"u"&&location.hostname&&ax.test(location.hostname)&&(r[sx]=ox);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DL()&&!OL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bI(n),i=tx(r,ZL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[JL]="t",r[px]=e,r[mx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ig{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AL(),window[HL+this.uniqueCallbackIdentifier]=e,window[KL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ig.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[px]=this.myID,e[mx]=this.myPW,e[gx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yx+r.length<=_x;){const o=this.pendingSegs.shift();r=r+"&"+QL+i+"="+o.seg+"&"+YL+i+"="+o.ts+"&"+XL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(eM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=16384,rM=45e3;let Ou=null;typeof MozWebSocket<"u"?Ou=MozWebSocket:typeof WebSocket<"u"&&(Ou=WebSocket);class wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cl(this.connId),this.stats_=Tg(n),this.connURL=wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[rx]=Eg,typeof location<"u"&&location.hostname&&ax.test(location.hostname)&&(o[sx]=ox),n&&(o[ix]=n),r&&(o[lx]=r),i&&(o[xp]=i),s&&(o[cx]=s),fx(e,ux,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let r;VI(),this.mySock=new Ou(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ou!==null&&!wn.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||bi.get("previous_websocket_failure")===!0}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=el(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tx(n,nM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(e.webSocketOnly&&(n||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const s of rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=6e4,sM=5e3,oM=10*1024,aM=100*1024,rf="t",U0="d",lM="s",B0="r",cM="e",z0="o",$0="a",W0="n",q0="p",uM="h";class hM{constructor(e,n,r,i,s,o,a,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cl("c:"+this.id+":"),this.transportManager_=new rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rf in e){const n=e[rf];n===$0?this.upgradeIfSecondaryHealthy_():n===B0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jo("t",e),r=Jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:q0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:W0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jo("t",e),r=Jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jo(rf,e);if(U0 in e){const r=e[U0];if(n===uM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===W0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lM?this.onConnectionShutdown_(r):n===B0?this.onReset_(r):n===cM?Ip("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ip("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eg!==r&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:q0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends wx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ig()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lu}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=32,K0=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ae("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ai(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ae(t.pieces_,e)}function Ex(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ix(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ae(e,0)}function Ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ae(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return an(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xx(t,e){if(ai(t)!==ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function En(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ai(t)>ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fM{constructor(e,n){this.errorPrefix_=n,this.parts_=Tx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gh(this.parts_[r]);Sx(this)}}function pM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gh(e),Sx(t)}function mM(t){const e=t.parts_.pop();t.byteLength_-=gh(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sx(t){if(t.byteLength_>K0)throw new Error(t.errorPrefix_+"has a key path longer than "+K0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+Ci(t))}function Ci(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends wx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xg}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=1e3,gM=60*5*1e3,G0=30*1e3,_M=1.3,yM=3e4,vM="server_kill",Q0=3;class ur extends vx{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ur.nextPersistentConnectionId_++,this.log_=Cl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zo,this.maxReconnectDelay_=gM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!VI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(st(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ng,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;ur.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xr(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Rb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=G0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Cb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ip("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yM&&(this.reconnectDelay_=Zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_M)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ur.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(p){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,a=new hM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,I=>{Jt(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(vM)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Jt(p),c())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dp(this.interruptReasons_)&&(this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>wg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q0&&(this.reconnectDelay_=G0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+X1.replace(/\./g,"-")]=1,ig()?e["framework.cordova"]=1:jI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lu.getInstance().currentlyOnline();return dp(this.interruptReasons_)&&e}}ur.nextPersistentConnectionId_=0;ur.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(eo,e),i=new oe(eo,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;class Cx extends Th{static get __EMPTY_NODE(){return wc}static set __EMPTY_NODE(e){wc=e}compare(e,n){return To(e.name,n.name)}isDefinedOn(e){throw vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Hi,wc)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,wc)}toString(){return".key"}}const zs=new Cx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ht=class ua{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ua.RED,this.left=i??Mn.EMPTY_NODE,this.right=s??Mn.EMPTY_NODE}copy(e,n,r,i,s){return new ua(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ua.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ua.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ht.RED=!0;Ht.BLACK=!1;class wM{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Mn=class qc{constructor(e,n=qc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new qc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ec(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ec(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ec(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ec(this.root_,null,this.comparator_,!0,e)}};Mn.EMPTY_NODE=new wM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t,e){return To(t.name,e.name)}function Sg(t,e){return To(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp;function TM(t){Sp=t}const Rx=function(t){return typeof t=="number"?"number:"+nx(t):"string:"+t},Ax=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xr(e,".sv"),"Priority must be a string or number.")}else $(t===Sp||t.isEmpty(),"priority of unexpected type.");$(t===Sp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y0;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ax(this.priorityNode_)}static set __childrenNodeConstructor(e){Y0=e}static get __childrenNodeConstructor(){return Y0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:se(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nx(this.value_):e+=this.value_,this.lazyHash_=Z1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nx,kx;function IM(t){Nx=t}function xM(t){kx=t}class SM extends Th{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?To(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Hi,new Qe("[PRIORITY-POST]",kx))}makePost(e,n){const r=Nx(e);return new oe(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const It=new SM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=Math.log(2);class RM{constructor(e){const n=s=>parseInt(Math.log(s)/CM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mu=function(t,e,n,r){t.sort(e);const i=function(c,u){const f=u-c;let p,g;if(f===0)return null;if(f===1)return p=t[c],g=n?n(p):p,new Ht(g,p.node,Ht.BLACK,null,null);{const I=parseInt(f/2,10)+c,x=i(c,I),k=i(I+1,u);return p=t[I],g=n?n(p):p,new Ht(g,p.node,Ht.BLACK,x,k)}},s=function(c){let u=null,f=null,p=t.length;const g=function(x,k){const R=p-x,y=p;p-=x;const _=i(R+1,y),w=t[R],P=n?n(w):w;I(new Ht(P,w.node,k,null,_))},I=function(x){u?(u.left=x,u=x):(f=x,u=x)};for(let x=0;x<c.count;++x){const k=c.nextBitIsOne(),R=Math.pow(2,c.count-(x+1));k?g(R,Ht.BLACK):(g(R,Ht.BLACK),g(R,Ht.RED))}return f},o=new RM(t.length),a=s(o);return new Mn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;const fs={};class ar{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(fs&&It,"ChildrenNode.ts has not been loaded"),sf=sf||new ar({".priority":fs},{".priority":It}),sf}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mn?n:null}hasIndex(e){return xr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Mu(r,e.getCompare()):a=fs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=a,new ar(f,u)}addToIndexes(e,n){const r=Su(this.indexes_,(i,s)=>{const o=Xs(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===fs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(oe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Mu(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new oe(e.name,a))),c.insert(e,e.node)}});return new ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Su(this.indexes_,i=>{if(i===fs)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new ar(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;class fe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ax(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ea||(ea=new fe(new Mn(Sg),null,ar.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ea}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ea:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ea:this.priorityNode_;return new fe(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{$(se(e)!==".priority"||ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),r++,s&&fe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rx(this.getPriority().val())+":"),this.forEachChild(It,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Z1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Al?-1:0}withIndex(e){if(e===zs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(It),i=n.getIterator(It);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zs?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AM extends fe{constructor(){super(new Mn(Sg),fe.EMPTY_NODE,ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const Al=new AM;Object.defineProperties(oe,{MIN:{value:new oe(eo,fe.EMPTY_NODE)},MAX:{value:new oe(Hi,Al)}});Cx.__EMPTY_NODE=fe.EMPTY_NODE;Qe.__childrenNodeConstructor=fe;TM(Al);xM(Al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=!0;function Et(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,Et(e))}if(!(t instanceof Array)&&NM){const n=[];let r=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Et(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new oe(o,c)))}}),n.length===0)return fe.EMPTY_NODE;const s=Mu(n,EM,o=>o.name,Sg);if(r){const o=Mu(n,It.getCompare());return new fe(s,Et(e),new ar({".priority":o},{".priority":It}))}else return new fe(s,Et(e),ar.Default)}else{let n=fe.EMPTY_NODE;return fn(t,(r,i)=>{if(xr(t,r)&&r.substring(0,1)!=="."){const s=Et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Et(e))}}IM(Et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM extends Th{constructor(e){super(),this.indexPath_=e,$(!re(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?To(e.name,n.name):s}makePost(e,n){const r=Et(e),i=fe.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,Al);return new oe(Hi,e)}toString(){return Tx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM extends Th{compare(e,n){const r=e.node.compareTo(n.node);return r===0?To(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=Et(e);return new oe(n,r)}toString(){return".value"}}const PM=new bM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){return{type:"value",snapshotNode:t}}function OM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function LM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function X0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:eo}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new Cg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===It?n="$priority":t.index_===PM?n="$value":t.index_===zs?n="$key":($(t.index_ instanceof kM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=st(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+st(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=st(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Z0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends vx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Cl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ju.getListenId_(e,r),a={};this.listens_[o]=a;const c=J0(e._queryParams);this.restRequest_(s+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(s,p,!1,r),Xs(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,n){const r=ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=J0(e._queryParams),r=e._path.toString(),i=new ng;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=el(a.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){return{value:null,children:new Map}}function bx(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Vu());const i=t.children.get(r);e=Se(e),bx(i,e,n)}}function Cp(t,e,n){t.value!==null?n(e,t.value):VM(t,(r,i)=>{const s=new Ae(e.toString()+"/"+r);Cp(i,s,n)})}function VM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=10*1e3,UM=30*1e3,BM=5*60*1e3;class zM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FM(e);const r=ew+(UM-ew)*Math.random();Ra(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;fn(e,(i,s)=>{s>0&&xr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*BM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jn||(jn={}));function Px(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dx(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ox(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=jn.ACK_USER_WRITE,this.source=Px()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new Fu(_e(),n,this.revert)}}else return $(se(this.path)===e,"operationForChild called for unrelated child."),new Fu(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=jn.OVERWRITE}operationForChild(e){return re(this.path)?new Ki(this.source,_e(),this.snap.getImmediateChild(e)):new Ki(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=jn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new Ki(this.source,_e(),n.value):new il(this.source,_e(),n)}else return $(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new il(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function $M(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(MM(o.childName,o.snapshotNode))}),ta(t,i,"child_removed",e,r,n),ta(t,i,"child_added",e,r,n),ta(t,i,"child_moved",s,r,n),ta(t,i,"child_changed",e,r,n),ta(t,i,"value",e,r,n),i}function ta(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>qM(t,a,c)),o.forEach(a=>{const c=WM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function WM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qM(t,e,n){if(e.childName==null||n.childName==null)throw vo("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t,e){return{eventCache:t,serverCache:e}}function Aa(t,e,n,r){return Lx(new Rg(e,n,r),t.serverCache)}function Mx(t,e,n,r){return Lx(t.eventCache,new Rg(e,n,r))}function Rp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const HM=()=>(of||(of=new Mn(PL)),of);class xe{constructor(e,n=HM()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return fn(e,(r,i)=>{n=n.set(new Ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(re(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:Ze(new Ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new xe(null)}}set(e,n){if(re(e))return new xe(n,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(Se(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(re(e))return n;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),Ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),Ze(n,i),r):new xe(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.writeTree_=e}static empty(){return new Sn(new xe(null))}}function Na(t,e,n){if(re(e))return new Sn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=an(i,e);return s=s.updateChild(o,n),new Sn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new Sn(s)}}}function tw(t,e,n){let r=t;return fn(n,(i,s)=>{r=Na(r,Ze(e,i),s)}),r}function nw(t,e){if(re(e))return Sn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Sn(n)}}function Ap(t,e){return is(t,e)!=null}function is(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function rw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function ni(t,e){if(re(e))return t;{const n=is(t,e);return n!=null?new Sn(new xe(n)):new Sn(t.writeTree_.subtree(e))}}function Np(t){return t.writeTree_.isEmpty()}function to(t,e){return jx(_e(),t.writeTree_,e)}function jx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=jx(Ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e){return $x(e,t)}function KM(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Na(t.visibleWrites,e,n)),t.lastWriteId=r}function GM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function QM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YM(a,r.path)?i=!1:En(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return XM(t),!0;if(r.snap)t.visibleWrites=nw(t.visibleWrites,r.path);else{const a=r.children;fn(a,c=>{t.visibleWrites=nw(t.visibleWrites,Ze(r.path,c))})}return!0}else return!1}function YM(t,e){if(t.snap)return En(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&En(Ze(t.path,n),e))return!0;return!1}function XM(t){t.visibleWrites=Fx(t.allWrites,JM,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JM(t){return t.visible}function Fx(t,e,n){let r=Sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)En(n,o)?(a=an(n,o),r=Na(r,a,s.snap)):En(o,n)&&(a=an(o,n),r=Na(r,_e(),s.snap.getChild(a)));else if(s.children){if(En(n,o))a=an(n,o),r=tw(r,a,s.children);else if(En(o,n))if(a=an(o,n),re(a))r=tw(r,_e(),s.children);else{const c=Xs(s.children,se(a));if(c){const u=c.getChild(Se(a));r=Na(r,_e(),u)}}}else throw vo("WriteRecord should have .snap or .children")}}return r}function Ux(t,e,n,r,i){if(!r&&!i){const s=is(t.visibleWrites,e);if(s!=null)return s;{const o=ni(t.visibleWrites,e);if(Np(o))return n;if(n==null&&!Ap(o,_e()))return null;{const a=n||fe.EMPTY_NODE;return to(o,a)}}}else{const s=ni(t.visibleWrites,e);if(!i&&Np(s))return n;if(!i&&n==null&&!Ap(s,_e()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(En(u.path,e)||En(e,u.path))},a=Fx(t.allWrites,o,e),c=n||fe.EMPTY_NODE;return to(a,c)}}}function ZM(t,e,n){let r=fe.EMPTY_NODE;const i=is(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(It,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ni(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const c=to(ni(s,new Ae(o)),a);r=r.updateImmediateChild(o,c)}),rw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ni(t.visibleWrites,e);return rw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function e4(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ze(e,n);if(Ap(t.visibleWrites,s))return null;{const o=ni(t.visibleWrites,s);return Np(o)?i.getChild(n):to(o,i.getChild(n))}}function t4(t,e,n,r){const i=Ze(e,n),s=is(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ni(t.visibleWrites,i);return to(o,r.getNode().getImmediateChild(n))}else return null}function n4(t,e){return is(t.visibleWrites,e)}function r4(t,e,n,r,i,s,o){let a;const c=ni(t.visibleWrites,e),u=is(c,_e());if(u!=null)a=u;else if(n!=null)a=to(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],p=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let I=g.getNext();for(;I&&f.length<i;)p(I,r)!==0&&f.push(I),I=g.getNext();return f}else return[]}function i4(){return{visibleWrites:Sn.empty(),allWrites:[],lastWriteId:-1}}function kp(t,e,n,r){return Ux(t.writeTree,t.treePath,e,n,r)}function Bx(t,e){return ZM(t.writeTree,t.treePath,e)}function iw(t,e,n,r){return e4(t.writeTree,t.treePath,e,n,r)}function Uu(t,e){return n4(t.writeTree,Ze(t.treePath,e))}function s4(t,e,n,r,i,s){return r4(t.writeTree,t.treePath,e,n,r,i,s)}function Ag(t,e,n){return t4(t.writeTree,t.treePath,e,n)}function zx(t,e){return $x(Ze(t.treePath,e),t.writeTree)}function $x(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,X0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,LM(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,OM(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,X0(r,e.snapshotNode,i.oldSnap));else throw vo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Wx=new a4;class Ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Rg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ag(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gi(this.viewCache_),s=s4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function l4(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function c4(t,e,n,r,i){const s=new o4;let o,a;if(n.type===jn.OVERWRITE){const u=n;u.source.fromUser?o=bp(t,e,u.path,u.snap,r,i,s):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=Bu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===jn.MERGE){const u=n;u.source.fromUser?o=h4(t,e,u.path,u.children,r,i,s):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Pp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===jn.ACK_USER_WRITE){const u=n;u.revert?o=p4(t,e,u.path,r,i,s):o=d4(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===jn.LISTEN_COMPLETE)o=f4(t,e,n.path,r,s);else throw vo("Unknown operation type: "+n.type);const c=s.getChanges();return u4(e,o,c),{viewCache:o,changes:c}}function u4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(DM(Rp(e)))}}function qx(t,e,n,r,i,s){const o=e.eventCache;if(Uu(r,n)!=null)return e;{let a,c;if(re(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gi(e),f=u instanceof fe?u:fe.EMPTY_NODE,p=Bx(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const u=kp(r,Gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){$(ai(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=iw(r,n,f,c);p!=null?a=t.filter.updatePriority(f,p):a=o.getNode()}else{const f=Se(n);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=iw(r,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(f,g):p=o.getNode().getImmediateChild(u)}else p=Ag(r,u,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),u,p,f,i,s):a=o.getNode()}}return Aa(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Bu(t,e,n,r,i,s,o,a){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=f.updateFullNode(c.getNode(),r,null);else if(f.filtersNodes()&&!c.isFiltered()){const I=c.getNode().updateChild(n,r);u=f.updateFullNode(c.getNode(),I,null)}else{const I=se(n);if(!c.isCompleteForPath(n)&&ai(n)>1)return e;const x=Se(n),R=c.getNode().getImmediateChild(I).updateChild(x,r);I===".priority"?u=f.updatePriority(c.getNode(),R):u=f.updateChild(c.getNode(),I,R,x,Wx,null)}const p=Mx(e,u,c.isFullyInitialized()||re(n),f.filtersNodes()),g=new Ng(i,p,s);return qx(t,p,n,i,g,a)}function bp(t,e,n,r,i,s,o){const a=e.eventCache;let c,u;const f=new Ng(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Aa(e,u,!0,t.filter.filtersNodes());else{const p=se(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Aa(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Se(n),I=a.getNode().getImmediateChild(p);let x;if(re(g))x=r;else{const k=f.getCompleteChild(p);k!=null?Ex(g)===".priority"&&k.getChild(Ix(g)).isEmpty()?x=k:x=k.updateChild(g,r):x=fe.EMPTY_NODE}if(I.equals(x))c=e;else{const k=t.filter.updateChild(a.getNode(),p,x,g,f,o);c=Aa(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function sw(t,e){return t.eventCache.isCompleteForChild(e)}function h4(t,e,n,r,i,s,o){let a=e;return r.foreach((c,u)=>{const f=Ze(n,c);sw(e,se(f))&&(a=bp(t,a,f,u,i,s,o))}),r.foreach((c,u)=>{const f=Ze(n,c);sw(e,se(f))||(a=bp(t,a,f,u,i,s,o))}),a}function ow(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;re(n)?u=r:u=new xe(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const I=e.serverCache.getNode().getImmediateChild(p),x=ow(t,I,g);c=Bu(t,c,new Ae(p),x,i,s,o,a)}}),u.children.inorderTraversal((p,g)=>{const I=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!I){const x=e.serverCache.getNode().getImmediateChild(p),k=ow(t,x,g);c=Bu(t,c,new Ae(p),k,i,s,o,a)}}),c}function d4(t,e,n,r,i,s,o){if(Uu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Bu(t,e,n,c.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new xe(null);return c.getNode().forEachChild(zs,(f,p)=>{u=u.set(new Ae(f),p)}),Pp(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((f,p)=>{const g=Ze(n,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),Pp(t,e,n,u,i,s,a,o)}}function f4(t,e,n,r,i){const s=e.serverCache,o=Mx(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return qx(t,o,n,r,Wx,i)}function p4(t,e,n,r,i,s){let o;if(Uu(r,n)!=null)return e;{const a=new Ng(r,e,i),c=e.eventCache.getNode();let u;if(re(n)||se(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=kp(r,Gi(e));else{const p=e.serverCache.getNode();$(p instanceof fe,"serverChildren would be complete if leaf node"),f=Bx(r,p)}f=f,u=t.filter.updateFullNode(c,f,s)}else{const f=se(n);let p=Ag(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=t.filter.updateChild(c,f,p,Se(n),a,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,fe.EMPTY_NODE,Se(n),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kp(r,Gi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Uu(r,_e())!=null,Aa(e,u,o,t.filter.filtersNodes())}}function m4(t,e){const n=Gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function aw(t,e,n,r){e.type===jn.MERGE&&e.source.queryId!==null&&($(Gi(t.viewCache_),"We should always have a full cache before handling merges"),$(Rp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=c4(t.processor_,i,e,n,r);return l4(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,g4(t,s.changes,s.viewCache.eventCache.getNode())}function g4(t,e,n,r){const i=t.eventRegistrations_;return $M(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lw;function _4(t){$(!lw,"__referenceConstructor has already been defined"),lw=t}function kg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),aw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(aw(o,e,n,r));return s}}function bg(t,e){let n=null;for(const r of t.views.values())n=n||m4(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cw;function y4(t){$(!cw,"__referenceConstructor has already been defined"),cw=t}class uw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=i4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function v4(t,e,n,r,i){return KM(t.pendingWriteTree_,e,n,r,i),i?xh(t,new Ki(Px(),e,n)):[]}function bs(t,e,n=!1){const r=GM(t.pendingWriteTree_,e);if(QM(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(_e(),!0):fn(r.children,o=>{s=s.set(new Ae(o),!0)}),xh(t,new Fu(r.path,s,n))}else return[]}function Ih(t,e,n){return xh(t,new Ki(Dx(),e,n))}function w4(t,e,n){const r=xe.fromObject(n);return xh(t,new il(Dx(),e,r))}function E4(t,e,n,r){const i=Qx(t,r);if(i!=null){const s=Yx(i),o=s.path,a=s.queryId,c=an(o,e),u=new Ki(Ox(a),c,n);return Xx(t,o,u)}else return[]}function T4(t,e,n,r){const i=Qx(t,r);if(i){const s=Yx(i),o=s.path,a=s.queryId,c=an(o,e),u=xe.fromObject(n),f=new il(Ox(a),c,u);return Xx(t,o,f)}else return[]}function Hx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=an(o,e),u=bg(a,c);if(u)return u});return Ux(i,e,s,n,!0)}function xh(t,e){return Kx(e,t.syncPointTree_,null,Vx(t.pendingWriteTree_,_e()))}function Kx(t,e,n,r){if(re(t.path))return Gx(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=bg(i,_e()));let s=[];const o=se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,f=zx(r,o);s=s.concat(Kx(a,c,u,f))}return i&&(s=s.concat(kg(i,t,r,n))),s}}function Gx(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=bg(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=zx(r,o),f=t.operationForChild(o);f&&(s=s.concat(Gx(f,a,c,u)))}),i&&(s=s.concat(kg(i,t,r,n))),s}function Qx(t,e){return t.tagToQueryMap.get(e)}function Yx(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ae(t.substr(0,e))}}function Xx(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=Vx(t.pendingWriteTree_,e);return kg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pg(n)}node(){return this.node_}}class Dg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new Dg(this.syncTree_,n)}node(){return Hx(this.syncTree_,this.path_)}}const I4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hw=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return S4(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},S4=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},C4=function(t,e,n,r){return Og(e,new Dg(n,t),r)},R4=function(t,e,n){return Og(t,new Pg(e),n)};function Og(t,e,n){const r=t.getPriority().val(),i=hw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=hw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(It,(a,c)=>{const u=Og(c,e.getImmediateChild(a),n);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mg(t,e){let n=e instanceof Ae?e:new Ae(e),r=t,i=se(n);for(;i!==null;){const s=Xs(r.node.children,i)||{children:{},childCount:0};r=new Lg(i,r,s),n=Se(n),i=se(n)}return r}function Io(t){return t.node.value}function Jx(t,e){t.node.value=e,Dp(t)}function Zx(t){return t.node.childCount>0}function A4(t){return Io(t)===void 0&&!Zx(t)}function Sh(t,e){fn(t.node.children,(n,r)=>{e(new Lg(n,t,r))})}function eS(t,e,n,r){n&&!r&&e(t),Sh(t,i=>{eS(i,e,!0,r)}),n&&r&&e(t)}function N4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Nl(t){return new Ae(t.parent===null?t.name:Nl(t.parent)+"/"+t.name)}function Dp(t){t.parent!==null&&k4(t.parent,t.name,t)}function k4(t,e,n){const r=A4(n),i=xr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Dp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=/[\[\].#$\/\u0000-\u001F\u007F]/,P4=/[\[\].#$\u0000-\u001F\u007F]/,af=10*1024*1024,tS=function(t){return typeof t=="string"&&t.length!==0&&!b4.test(t)},D4=function(t){return typeof t=="string"&&t.length!==0&&!P4.test(t)},O4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),D4(t)},nS=function(t,e,n){const r=n instanceof Ae?new fM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ci(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ci(r)+" with contents = "+e.toString());if(ex(e))throw new Error(t+"contains "+e.toString()+" "+Ci(r));if(typeof e=="string"&&e.length>af/3&&gh(e)>af)throw new Error(t+"contains a string greater than "+af+" utf8 bytes "+Ci(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(fn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ci(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pM(r,o),nS(t,a,r),mM(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ci(r)+" in addition to actual children.")}},L4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!O4(n))throw new Error(Pb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function j4(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!xx(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ss(t,e,n){j4(t,n),V4(t,r=>En(r,e)||En(e,r))}function V4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(F4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function F4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ca&&wt("event: "+n.toString()),Rl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="repo_interrupt",B4=25;class z4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vu(),this.transactionQueueTree_=new Lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $4(t,e,n){if(t.stats_=Tg(t.repoInfo_),t.forceRestClient_||VL())t.server_=new ju(t.repoInfo_,(r,i,s,o)=>{dw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ur(t.repoInfo_,e,(r,i,s,o)=>{dw(t,r,i,s,o)},r=>{fw(t,r)},r=>{q4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$L(t.repoInfo_,()=>new zM(t.stats_,t.server_)),t.infoData_=new jM,t.infoSyncTree_=new uw({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Ih(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jg(t,"connected",!1),t.serverSyncTree_=new uw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const u=o(a,c);ss(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function W4(t){const n=t.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rS(t){return I4({timestamp:W4(t)})}function dw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=Su(n,u=>Et(u));o=T4(t.serverSyncTree_,s,c,i)}else{const c=Et(n);o=E4(t.serverSyncTree_,s,c,i)}else if(r){const c=Su(n,u=>Et(u));o=w4(t.serverSyncTree_,s,c)}else{const c=Et(n);o=Ih(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Fg(t,s)),ss(t.eventQueue_,a,o)}function fw(t,e){jg(t,"connected",e),e===!1&&K4(t)}function q4(t,e){fn(e,(n,r)=>{jg(t,n,r)})}function jg(t,e,n){const r=new Ae("/.info/"+e),i=Et(n);t.infoData_.updateSnapshot(r,i);const s=Ih(t.infoSyncTree_,r,i);ss(t.eventQueue_,r,s)}function H4(t){return t.nextWriteId_++}function K4(t){iS(t,"onDisconnectEvents");const e=rS(t),n=Vu();Cp(t.onDisconnect_,_e(),(i,s)=>{const o=C4(i,s,t.serverSyncTree_,e);bx(n,i,o)});let r=[];Cp(n,_e(),(i,s)=>{r=r.concat(Ih(t.serverSyncTree_,i,s));const o=X4(t,i);Fg(t,o)}),t.onDisconnect_=Vu(),ss(t.eventQueue_,_e(),r)}function G4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(U4)}function iS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function sS(t,e,n){return Hx(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Vg(t,e=t.transactionQueueTree_){if(e||Ch(t,e),Io(e)){const n=aS(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Q4(t,Nl(e),n)}else Zx(e)&&Sh(e,n=>{Vg(t,n)})}function Q4(t,e,n){const r=n.map(u=>u.currentWriteId),i=sS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];$(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=an(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,u=>{iS(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(bs(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Ch(t,Mg(t.transactionQueueTree_,e)),Vg(t,t.transactionQueueTree_),ss(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)Rl(p[g])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Jt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}Fg(t,e)}},o)}function Fg(t,e){const n=oS(t,e),r=Nl(n),i=aS(t,n);return Y4(t,i,r),r}function Y4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=an(n,c.path);let f=!1,p;if($(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,i=i.concat(bs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=B4)f=!0,p="maxretry",i=i.concat(bs(t.serverSyncTree_,c.currentWriteId,!0));else{const g=sS(t,c.path,o);c.currentInputSnapshot=g;const I=e[a].update(g.val());if(I!==void 0){nS("transaction failed: Data returned ",I,c.path);let x=Et(I);typeof I=="object"&&I!=null&&xr(I,".priority")||(x=x.updatePriority(g.getPriority()));const R=c.currentWriteId,y=rS(t),_=R4(x,g,y);c.currentOutputSnapshotRaw=x,c.currentOutputSnapshotResolved=_,c.currentWriteId=H4(t),o.splice(o.indexOf(R),1),i=i.concat(v4(t.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat(bs(t.serverSyncTree_,R,!0))}else f=!0,p="nodata",i=i.concat(bs(t.serverSyncTree_,c.currentWriteId,!0))}ss(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Ch(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Rl(r[a]);Vg(t,t.transactionQueueTree_)}function oS(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&Io(r)===void 0;)r=Mg(r,n),e=Se(e),n=se(e);return r}function aS(t,e){const n=[];return lS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function lS(t,e,n){const r=Io(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sh(e,i=>{lS(t,i,n)})}function Ch(t,e){const n=Io(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Jx(e,n.length>0?n:void 0)}Sh(e,r=>{Ch(t,r)})}function X4(t,e){const n=Nl(oS(t,e)),r=Mg(t.transactionQueueTree_,e);return N4(r,i=>{lf(t,i)}),lf(t,r),eS(r,i=>{lf(t,i)}),n}function lf(t,e){const n=Io(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Jx(e,void 0):n.length=s+1,ss(t.eventQueue_,Nl(e),i);for(let o=0;o<r.length;o++)Rl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Z4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const pw=function(t,e){const n=ej(t),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ae(n.pathString)}},ej=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=J4(t.substring(f,p)));const g=Z4(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const I=e.slice(0,u);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),n=e.substring(x+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:Ex(this._path)}get ref(){return new xo(this._repo,this._path)}get _queryIdentifier(){const e=Z0(this._queryParams),n=wg(e);return n==="{}"?"default":n}get _queryObject(){return Z0(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof Ug))return!1;const n=this._repo===e._repo,r=xx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dM(this._path)}}class xo extends Ug{constructor(e,n){super(e,n,new Cg,!1)}get parent(){const e=Ix(this._path);return e===null?null:new xo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}_4(xo);y4(xo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj="FIREBASE_DATABASE_EMULATOR_HOST",Op={};let nj=!1;function rj(t,e,n,r){t.repoInfo_=new dx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ij(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pw(s,i),a=o.repoInfo,c;typeof process<"u"&&O0&&(c=O0[tj]),c?(s=`http://${c}?ns=${a.namespace}`,o=pw(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new UL(t.name,t.options,e);L4("Invalid Firebase Database URL",o),re(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=oj(a,t,u,new FL(t.name,n));return new aj(f,t)}function sj(t,e){const n=Op[e];(!n||n[t.key]!==t)&&yr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),G4(t),delete n[t.key]}function oj(t,e,n,r){let i=Op[e.name];i||(i={},Op[e.name]=i);let s=i[t.toURLString()];return s&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new z4(t,nj,n,r),i[t.toURLString()]=s,s}class aj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xo(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function lj(t=wl(),e){const n=Sr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=tg("database");r&&cj(n,...r)}return n}function cj(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wc(Wc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rg(r.mockUserToken,t.app.options.projectId);s=new Wc(o)}rj(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(t){xL(mi),dn(new en("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ij(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xt(L0,M0,t),xt(L0,M0,"esm2017")}ur.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ur.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uj();var mw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,cS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function T(){}T.prototype=v.prototype,C.D=v.prototype,C.prototype=new T,C.prototype.constructor=C,C.C=function(S,A,b){for(var N=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)N[qe-2]=arguments[qe];return v.prototype[A].apply(S,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,v,T){T||(T=0);var S=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)S[A]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(A=0;16>A;++A)S[A]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=C.g[0],T=C.g[1],A=C.g[2];var b=C.g[3],N=v+(b^T&(A^b))+S[0]+3614090360&4294967295;v=T+(N<<7&4294967295|N>>>25),N=b+(A^v&(T^A))+S[1]+3905402710&4294967295,b=v+(N<<12&4294967295|N>>>20),N=A+(T^b&(v^T))+S[2]+606105819&4294967295,A=b+(N<<17&4294967295|N>>>15),N=T+(v^A&(b^v))+S[3]+3250441966&4294967295,T=A+(N<<22&4294967295|N>>>10),N=v+(b^T&(A^b))+S[4]+4118548399&4294967295,v=T+(N<<7&4294967295|N>>>25),N=b+(A^v&(T^A))+S[5]+1200080426&4294967295,b=v+(N<<12&4294967295|N>>>20),N=A+(T^b&(v^T))+S[6]+2821735955&4294967295,A=b+(N<<17&4294967295|N>>>15),N=T+(v^A&(b^v))+S[7]+4249261313&4294967295,T=A+(N<<22&4294967295|N>>>10),N=v+(b^T&(A^b))+S[8]+1770035416&4294967295,v=T+(N<<7&4294967295|N>>>25),N=b+(A^v&(T^A))+S[9]+2336552879&4294967295,b=v+(N<<12&4294967295|N>>>20),N=A+(T^b&(v^T))+S[10]+4294925233&4294967295,A=b+(N<<17&4294967295|N>>>15),N=T+(v^A&(b^v))+S[11]+2304563134&4294967295,T=A+(N<<22&4294967295|N>>>10),N=v+(b^T&(A^b))+S[12]+1804603682&4294967295,v=T+(N<<7&4294967295|N>>>25),N=b+(A^v&(T^A))+S[13]+4254626195&4294967295,b=v+(N<<12&4294967295|N>>>20),N=A+(T^b&(v^T))+S[14]+2792965006&4294967295,A=b+(N<<17&4294967295|N>>>15),N=T+(v^A&(b^v))+S[15]+1236535329&4294967295,T=A+(N<<22&4294967295|N>>>10),N=v+(A^b&(T^A))+S[1]+4129170786&4294967295,v=T+(N<<5&4294967295|N>>>27),N=b+(T^A&(v^T))+S[6]+3225465664&4294967295,b=v+(N<<9&4294967295|N>>>23),N=A+(v^T&(b^v))+S[11]+643717713&4294967295,A=b+(N<<14&4294967295|N>>>18),N=T+(b^v&(A^b))+S[0]+3921069994&4294967295,T=A+(N<<20&4294967295|N>>>12),N=v+(A^b&(T^A))+S[5]+3593408605&4294967295,v=T+(N<<5&4294967295|N>>>27),N=b+(T^A&(v^T))+S[10]+38016083&4294967295,b=v+(N<<9&4294967295|N>>>23),N=A+(v^T&(b^v))+S[15]+3634488961&4294967295,A=b+(N<<14&4294967295|N>>>18),N=T+(b^v&(A^b))+S[4]+3889429448&4294967295,T=A+(N<<20&4294967295|N>>>12),N=v+(A^b&(T^A))+S[9]+568446438&4294967295,v=T+(N<<5&4294967295|N>>>27),N=b+(T^A&(v^T))+S[14]+3275163606&4294967295,b=v+(N<<9&4294967295|N>>>23),N=A+(v^T&(b^v))+S[3]+4107603335&4294967295,A=b+(N<<14&4294967295|N>>>18),N=T+(b^v&(A^b))+S[8]+1163531501&4294967295,T=A+(N<<20&4294967295|N>>>12),N=v+(A^b&(T^A))+S[13]+2850285829&4294967295,v=T+(N<<5&4294967295|N>>>27),N=b+(T^A&(v^T))+S[2]+4243563512&4294967295,b=v+(N<<9&4294967295|N>>>23),N=A+(v^T&(b^v))+S[7]+1735328473&4294967295,A=b+(N<<14&4294967295|N>>>18),N=T+(b^v&(A^b))+S[12]+2368359562&4294967295,T=A+(N<<20&4294967295|N>>>12),N=v+(T^A^b)+S[5]+4294588738&4294967295,v=T+(N<<4&4294967295|N>>>28),N=b+(v^T^A)+S[8]+2272392833&4294967295,b=v+(N<<11&4294967295|N>>>21),N=A+(b^v^T)+S[11]+1839030562&4294967295,A=b+(N<<16&4294967295|N>>>16),N=T+(A^b^v)+S[14]+4259657740&4294967295,T=A+(N<<23&4294967295|N>>>9),N=v+(T^A^b)+S[1]+2763975236&4294967295,v=T+(N<<4&4294967295|N>>>28),N=b+(v^T^A)+S[4]+1272893353&4294967295,b=v+(N<<11&4294967295|N>>>21),N=A+(b^v^T)+S[7]+4139469664&4294967295,A=b+(N<<16&4294967295|N>>>16),N=T+(A^b^v)+S[10]+3200236656&4294967295,T=A+(N<<23&4294967295|N>>>9),N=v+(T^A^b)+S[13]+681279174&4294967295,v=T+(N<<4&4294967295|N>>>28),N=b+(v^T^A)+S[0]+3936430074&4294967295,b=v+(N<<11&4294967295|N>>>21),N=A+(b^v^T)+S[3]+3572445317&4294967295,A=b+(N<<16&4294967295|N>>>16),N=T+(A^b^v)+S[6]+76029189&4294967295,T=A+(N<<23&4294967295|N>>>9),N=v+(T^A^b)+S[9]+3654602809&4294967295,v=T+(N<<4&4294967295|N>>>28),N=b+(v^T^A)+S[12]+3873151461&4294967295,b=v+(N<<11&4294967295|N>>>21),N=A+(b^v^T)+S[15]+530742520&4294967295,A=b+(N<<16&4294967295|N>>>16),N=T+(A^b^v)+S[2]+3299628645&4294967295,T=A+(N<<23&4294967295|N>>>9),N=v+(A^(T|~b))+S[0]+4096336452&4294967295,v=T+(N<<6&4294967295|N>>>26),N=b+(T^(v|~A))+S[7]+1126891415&4294967295,b=v+(N<<10&4294967295|N>>>22),N=A+(v^(b|~T))+S[14]+2878612391&4294967295,A=b+(N<<15&4294967295|N>>>17),N=T+(b^(A|~v))+S[5]+4237533241&4294967295,T=A+(N<<21&4294967295|N>>>11),N=v+(A^(T|~b))+S[12]+1700485571&4294967295,v=T+(N<<6&4294967295|N>>>26),N=b+(T^(v|~A))+S[3]+2399980690&4294967295,b=v+(N<<10&4294967295|N>>>22),N=A+(v^(b|~T))+S[10]+4293915773&4294967295,A=b+(N<<15&4294967295|N>>>17),N=T+(b^(A|~v))+S[1]+2240044497&4294967295,T=A+(N<<21&4294967295|N>>>11),N=v+(A^(T|~b))+S[8]+1873313359&4294967295,v=T+(N<<6&4294967295|N>>>26),N=b+(T^(v|~A))+S[15]+4264355552&4294967295,b=v+(N<<10&4294967295|N>>>22),N=A+(v^(b|~T))+S[6]+2734768916&4294967295,A=b+(N<<15&4294967295|N>>>17),N=T+(b^(A|~v))+S[13]+1309151649&4294967295,T=A+(N<<21&4294967295|N>>>11),N=v+(A^(T|~b))+S[4]+4149444226&4294967295,v=T+(N<<6&4294967295|N>>>26),N=b+(T^(v|~A))+S[11]+3174756917&4294967295,b=v+(N<<10&4294967295|N>>>22),N=A+(v^(b|~T))+S[2]+718787259&4294967295,A=b+(N<<15&4294967295|N>>>17),N=T+(b^(A|~v))+S[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(A+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+A&4294967295,C.g[3]=C.g[3]+b&4294967295}r.prototype.u=function(C,v){v===void 0&&(v=C.length);for(var T=v-this.blockSize,S=this.B,A=this.h,b=0;b<v;){if(A==0)for(;b<=T;)i(this,C,b),b+=this.blockSize;if(typeof C=="string"){for(;b<v;)if(S[A++]=C.charCodeAt(b++),A==this.blockSize){i(this,S),A=0;break}}else for(;b<v;)if(S[A++]=C[b++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;var T=8*this.o;for(v=C.length-8;v<C.length;++v)C[v]=T&255,T/=256;for(this.u(C),C=Array(16),v=T=0;4>v;++v)for(var S=0;32>S;S+=8)C[T++]=this.g[v]>>>S&255;return C};function s(C,v){var T=a;return Object.prototype.hasOwnProperty.call(T,C)?T[C]:T[C]=v(C)}function o(C,v){this.h=v;for(var T=[],S=!0,A=C.length-1;0<=A;A--){var b=C[A]|0;S&&b==v||(T[A]=b,S=!1)}this.g=T}var a={};function c(C){return-128<=C&&128>C?s(C,function(v){return new o([v|0],0>v?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return p;if(0>C)return R(u(-C));for(var v=[],T=1,S=0;C>=T;S++)v[S]=C/T|0,T*=4294967296;return new o(v,0)}function f(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return R(f(C.substring(1),v));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(v,8)),S=p,A=0;A<C.length;A+=8){var b=Math.min(8,C.length-A),N=parseInt(C.substring(A,A+b),v);8>b?(b=u(Math.pow(v,b)),S=S.j(b).add(u(N))):(S=S.j(T),S=S.add(u(N)))}return S}var p=c(0),g=c(1),I=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var C=0,v=1,T=0;T<this.g.length;T++){var S=this.i(T);C+=(0<=S?S:4294967296+S)*v,v*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x(this))return"0";if(k(this))return"-"+R(this).toString(C);for(var v=u(Math.pow(C,6)),T=this,S="";;){var A=P(T,v).g;T=y(T,A.j(v));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(C);if(T=A,x(T))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function x(C){if(C.h!=0)return!1;for(var v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function k(C){return C.h==-1}t.l=function(C){return C=y(this,C),k(C)?-1:x(C)?0:1};function R(C){for(var v=C.g.length,T=[],S=0;S<v;S++)T[S]=~C.g[S];return new o(T,~C.h).add(g)}t.abs=function(){return k(this)?R(this):this},t.add=function(C){for(var v=Math.max(this.g.length,C.g.length),T=[],S=0,A=0;A<=v;A++){var b=S+(this.i(A)&65535)+(C.i(A)&65535),N=(b>>>16)+(this.i(A)>>>16)+(C.i(A)>>>16);S=N>>>16,b&=65535,N&=65535,T[A]=N<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function y(C,v){return C.add(R(v))}t.j=function(C){if(x(this)||x(C))return p;if(k(this))return k(C)?R(this).j(R(C)):R(R(this).j(C));if(k(C))return R(this.j(R(C)));if(0>this.l(I)&&0>C.l(I))return u(this.m()*C.m());for(var v=this.g.length+C.g.length,T=[],S=0;S<2*v;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<C.g.length;A++){var b=this.i(S)>>>16,N=this.i(S)&65535,qe=C.i(A)>>>16,Lt=C.i(A)&65535;T[2*S+2*A]+=N*Lt,_(T,2*S+2*A),T[2*S+2*A+1]+=b*Lt,_(T,2*S+2*A+1),T[2*S+2*A+1]+=N*qe,_(T,2*S+2*A+1),T[2*S+2*A+2]+=b*qe,_(T,2*S+2*A+2)}for(S=0;S<v;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=v;S<2*v;S++)T[S]=0;return new o(T,0)};function _(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function w(C,v){this.g=C,this.h=v}function P(C,v){if(x(v))throw Error("division by zero");if(x(C))return new w(p,p);if(k(C))return v=P(R(C),v),new w(R(v.g),R(v.h));if(k(v))return v=P(C,R(v)),new w(R(v.g),v.h);if(30<C.g.length){if(k(C)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=v;0>=S.l(C);)T=j(T),S=j(S);var A=D(T,1),b=D(S,1);for(S=D(S,2),T=D(T,2);!x(S);){var N=b.add(S);0>=N.l(C)&&(A=A.add(T),b=N),S=D(S,1),T=D(T,1)}return v=y(C,A.j(v)),new w(A,v)}for(A=p;0<=C.l(v);){for(T=Math.max(1,Math.floor(C.m()/v.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=u(T),N=b.j(v);k(N)||0<N.l(C);)T-=S,b=u(T),N=b.j(v);x(b)&&(b=g),A=A.add(b),C=y(C,N)}return new w(A,C)}t.A=function(C){return P(this,C).h},t.and=function(C){for(var v=Math.max(this.g.length,C.g.length),T=[],S=0;S<v;S++)T[S]=this.i(S)&C.i(S);return new o(T,this.h&C.h)},t.or=function(C){for(var v=Math.max(this.g.length,C.g.length),T=[],S=0;S<v;S++)T[S]=this.i(S)|C.i(S);return new o(T,this.h|C.h)},t.xor=function(C){for(var v=Math.max(this.g.length,C.g.length),T=[],S=0;S<v;S++)T[S]=this.i(S)^C.i(S);return new o(T,this.h^C.h)};function j(C){for(var v=C.g.length+1,T=[],S=0;S<v;S++)T[S]=C.i(S)<<1|C.i(S-1)>>>31;return new o(T,C.h)}function D(C,v){var T=v>>5;v%=32;for(var S=C.g.length-T,A=[],b=0;b<S;b++)A[b]=0<v?C.i(b+T)>>>v|C.i(b+T+1)<<32-v:C.i(b+T);return new o(A,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Li=o}).apply(typeof mw<"u"?mw:typeof self<"u"?self:typeof window<"u"?window:{});var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uS,ha,hS,Hc,Lp,dS,fS,pS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tc=="object"&&Tc];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in m))break e;m=m[O]}l=l[l.length-1],E=m[l],h=h(E),h!=E&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,E=!1,O={next:function(){if(!E&&m<l.length){var M=m++;return{value:h(M,l[M]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,m){return l.call.apply(l.bind,arguments)}function p(l,h,m){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function g(l,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function I(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function x(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(E,O,M){for(var B=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)B[ye-2]=arguments[ye];return h.prototype[O].apply(E,B)}}function k(l){const h=l.length;if(0<h){const m=Array(h);for(let E=0;E<h;E++)m[E]=l[E];return m}return[]}function R(l,h){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(c(E)){const O=l.length||0,M=E.length||0;l.length=O+M;for(let B=0;B<M;B++)l[O+B]=E[B]}else l.push(E)}}class y{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var j=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function D(l,h,m){for(const E in l)h.call(m,l[E],E,l)}function C(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function v(l){const h={};for(const m in l)h[m]=l[m];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let m,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(m in E)l[m]=E[m];for(let M=0;M<T.length;M++)m=T[M],Object.prototype.hasOwnProperty.call(E,m)&&(l[m]=E[m])}}function A(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function b(l){a.setTimeout(()=>{throw l},0)}function N(){var l=G;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class qe{constructor(){this.h=this.g=null}add(h,m){const E=Lt.get();E.set(h,m),this.h?this.h.next=E:this.g=E,this.h=E}}var Lt=new y(()=>new kn,l=>l.reset());class kn{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,z=!1,G=new qe,Z=()=>{const l=a.Promise.resolve(void 0);Ee=()=>{l.then(pe)}};var pe=()=>{for(var l;l=N();){try{l.h.call(l.g)}catch(m){b(m)}var h=Lt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Gn(l,h){if(Ve.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{P(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Qn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Gn.aa.h.call(this)}}x(Gn,Ve);var Qn={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Yn="closure_listenable_"+(1e6*Math.random()|0),sR=0;function oR(l,h,m,E,O){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!E,this.ha=O,this.key=++sR,this.da=this.fa=!1}function Vl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Fl(l){this.src=l,this.g={},this.h=0}Fl.prototype.add=function(l,h,m,E,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var B=Yh(l,h,E,O);return-1<B?(h=l[B],m||(h.fa=!1)):(h=new oR(h,this.src,M,!!E,O),h.fa=m,l.push(h)),h};function Qh(l,h){var m=h.type;if(m in l.g){var E=l.g[m],O=Array.prototype.indexOf.call(E,h,void 0),M;(M=0<=O)&&Array.prototype.splice.call(E,O,1),M&&(Vl(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Yh(l,h,m,E){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==h&&M.capture==!!m&&M.ha==E)return O}return-1}var Xh="closure_lm_"+(1e6*Math.random()|0),Jh={};function O_(l,h,m,E,O){if(Array.isArray(h)){for(var M=0;M<h.length;M++)O_(l,h[M],m,E,O);return null}return m=j_(m),l&&l[Yn]?l.K(h,m,u(E)?!!E.capture:!!E,O):aR(l,h,m,!1,E,O)}function aR(l,h,m,E,O,M){if(!h)throw Error("Invalid event type");var B=u(O)?!!O.capture:!!O,ye=ed(l);if(ye||(l[Xh]=ye=new Fl(l)),m=ye.add(h,m,E,B,M),m.proxy)return m;if(E=lR(),m.proxy=E,E.src=l,E.listener=m,l.addEventListener)Kn||(O=B),O===void 0&&(O=!1),l.addEventListener(h.toString(),E,O);else if(l.attachEvent)l.attachEvent(M_(h.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function lR(){function l(m){return h.call(l.src,l.listener,m)}const h=cR;return l}function L_(l,h,m,E,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)L_(l,h[M],m,E,O);else E=u(E)?!!E.capture:!!E,m=j_(m),l&&l[Yn]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],m=Yh(M,m,E,O),-1<m&&(Vl(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=ed(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Yh(h,m,E,O)),(m=-1<l?h[l]:null)&&Zh(m))}function Zh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Yn])Qh(h.i,l);else{var m=l.type,E=l.proxy;h.removeEventListener?h.removeEventListener(m,E,l.capture):h.detachEvent?h.detachEvent(M_(m),E):h.addListener&&h.removeListener&&h.removeListener(E),(m=ed(h))?(Qh(m,l),m.h==0&&(m.src=null,h[Xh]=null)):Vl(l)}}}function M_(l){return l in Jh?Jh[l]:Jh[l]="on"+l}function cR(l,h){if(l.da)l=!0;else{h=new Gn(h,this);var m=l.listener,E=l.ha||l.src;l.fa&&Zh(l),l=m.call(E,h)}return l}function ed(l){return l=l[Xh],l instanceof Fl?l:null}var td="__closure_events_fn_"+(1e9*Math.random()>>>0);function j_(l){return typeof l=="function"?l:(l[td]||(l[td]=function(h){return l.handleEvent(h)}),l[td])}function dt(){ae.call(this),this.i=new Fl(this),this.M=this,this.F=null}x(dt,ae),dt.prototype[Yn]=!0,dt.prototype.removeEventListener=function(l,h,m,E){L_(this,l,h,m,E)};function At(l,h){var m,E=l.F;if(E)for(m=[];E;E=E.F)m.push(E);if(l=l.M,E=h.type||h,typeof h=="string")h=new Ve(h,l);else if(h instanceof Ve)h.target=h.target||l;else{var O=h;h=new Ve(E,l),S(h,O)}if(O=!0,m)for(var M=m.length-1;0<=M;M--){var B=h.g=m[M];O=Ul(B,E,!0,h)&&O}if(B=h.g=l,O=Ul(B,E,!0,h)&&O,O=Ul(B,E,!1,h)&&O,m)for(M=0;M<m.length;M++)B=h.g=m[M],O=Ul(B,E,!1,h)&&O}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],E=0;E<m.length;E++)Vl(m[E]);delete l.g[h],l.h--}}this.F=null},dt.prototype.K=function(l,h,m,E){return this.i.add(String(l),h,!1,m,E)},dt.prototype.L=function(l,h,m,E){return this.i.add(String(l),h,!0,m,E)};function Ul(l,h,m,E){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,M=0;M<h.length;++M){var B=h[M];if(B&&!B.da&&B.capture==m){var ye=B.listener,nt=B.ha||B.src;B.fa&&Qh(l.i,B),O=ye.call(nt,E)!==!1&&O}}return O&&!E.defaultPrevented}function V_(l,h,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function F_(l){l.g=V_(()=>{l.g=null,l.i&&(l.i=!1,F_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class uR extends ae{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:F_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){ae.call(this),this.h=l,this.g={}}x(ko,ae);var U_=[];function B_(l){D(l.g,function(h,m){this.g.hasOwnProperty(m)&&Zh(h)},l),l.g={}}ko.prototype.N=function(){ko.aa.N.call(this),B_(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nd=a.JSON.stringify,hR=a.JSON.parse,dR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function rd(){}rd.prototype.h=null;function z_(l){return l.h||(l.h=l.i())}function $_(){}var bo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function id(){Ve.call(this,"d")}x(id,Ve);function sd(){Ve.call(this,"c")}x(sd,Ve);var vi={},W_=null;function Bl(){return W_=W_||new dt}vi.La="serverreachability";function q_(l){Ve.call(this,vi.La,l)}x(q_,Ve);function Po(l){const h=Bl();At(h,new q_(h))}vi.STAT_EVENT="statevent";function H_(l,h){Ve.call(this,vi.STAT_EVENT,l),this.stat=h}x(H_,Ve);function Nt(l){const h=Bl();At(h,new H_(h,l))}vi.Ma="timingevent";function K_(l,h){Ve.call(this,vi.Ma,l),this.size=h}x(K_,Ve);function Do(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Oo(){this.g=!0}Oo.prototype.xa=function(){this.g=!1};function fR(l,h,m,E,O,M){l.info(function(){if(l.g)if(M)for(var B="",ye=M.split("&"),nt=0;nt<ye.length;nt++){var ce=ye[nt].split("=");if(1<ce.length){var ft=ce[0];ce=ce[1];var pt=ft.split("_");B=2<=pt.length&&pt[1]=="type"?B+(ft+"="+ce+"&"):B+(ft+"=redacted&")}}else B=null;else B=M;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+h+`
`+m+`
`+B})}function pR(l,h,m,E,O,M,B){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+h+`
`+m+`
`+M+" "+B})}function ls(l,h,m,E){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+gR(l,m)+(E?" "+E:"")})}function mR(l,h){l.info(function(){return"TIMEOUT: "+h})}Oo.prototype.info=function(){};function gR(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var E=m[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return nd(m)}catch{return h}}var zl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},G_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},od;function $l(){}x($l,rd),$l.prototype.g=function(){return new XMLHttpRequest},$l.prototype.i=function(){return{}},od=new $l;function Rr(l,h,m,E){this.j=l,this.i=h,this.l=m,this.R=E||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Q_}function Q_(){this.i=null,this.g="",this.h=!1}var Y_={},ad={};function ld(l,h,m){l.L=1,l.v=Kl(Xn(h)),l.m=m,l.P=!0,X_(l,null)}function X_(l,h){l.F=Date.now(),Wl(l),l.A=Xn(l.v);var m=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),hy(m.i,"t",E),l.C=0,m=l.j.J,l.h=new Q_,l.g=Ny(l.j,m?h:null,!l.m),0<l.O&&(l.M=new uR(g(l.Y,l,l.g),l.O)),h=l.U,m=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(U_[0]=O.toString()),O=U_);for(var M=0;M<O.length;M++){var B=O_(m,O[M],E||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Po(),fR(l.i,l.u,l.A,l.l,l.R,l.m)}Rr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Jn(l)==3?h.j():this.Y(l)},Rr.prototype.Y=function(l){try{if(l==this.g)e:{const pt=Jn(this.g);var h=this.g.Ba();const hs=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||yy(this.g)))){this.J||pt!=4||h==7||(h==8||0>=hs?Po(3):Po(2)),cd(this);var m=this.g.Z();this.X=m;t:if(J_(this)){var E=yy(this.g);l="";var O=E.length,M=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wi(this),Lo(this);var B="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(E[h],{stream:!(M&&h==O-1)});E.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,pR(this.i,this.u,this.A,this.l,this.R,pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,nt=this.g;if((ye=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ye)){var ce=ye;break t}}ce=null}if(m=ce)ls(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ud(this,m);else{this.o=!1,this.s=3,Nt(12),wi(this),Lo(this);break e}}if(this.P){m=!0;let mn;for(;!this.J&&this.C<B.length;)if(mn=_R(this,B),mn==ad){pt==4&&(this.s=4,Nt(14),m=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==Y_){this.s=4,Nt(15),ls(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else ls(this.i,this.l,mn,null),ud(this,mn);if(J_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||B.length!=0||this.h.h||(this.s=1,Nt(16),m=!1),this.o=this.o&&m,!m)ls(this.i,this.l,B,"[Invalid Chunked Response]"),wi(this),Lo(this);else if(0<B.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),gd(ft),ft.M=!0,Nt(11))}}else ls(this.i,this.l,B,null),ud(this,B);pt==4&&wi(this),this.o&&!this.J&&(pt==4?Sy(this.j,this):(this.o=!1,Wl(this)))}else OR(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),wi(this),Lo(this)}}}catch{}finally{}};function J_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function _R(l,h){var m=l.C,E=h.indexOf(`
`,m);return E==-1?ad:(m=Number(h.substring(m,E)),isNaN(m)?Y_:(E+=1,E+m>h.length?ad:(h=h.slice(E,E+m),l.C=E+m,h)))}Rr.prototype.cancel=function(){this.J=!0,wi(this)};function Wl(l){l.S=Date.now()+l.I,Z_(l,l.I)}function Z_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Do(g(l.ba,l),h)}function cd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Rr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mR(this.i,this.A),this.L!=2&&(Po(),Nt(17)),wi(this),this.s=2,Lo(this)):Z_(this,this.S-l)};function Lo(l){l.j.G==0||l.J||Sy(l.j,l)}function wi(l){cd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,B_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function ud(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||hd(m.h,l))){if(!l.K&&hd(m.h,l)&&m.G==3){try{var E=m.Da.g.parse(h)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Zl(m),Xl(m);else break e;md(m),Nt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Do(g(m.Za,m),6e3));if(1>=ny(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ti(m,11)}else if((l.K||m.g==l)&&Zl(m),!_(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let ce=O[h];if(m.T=ce[0],ce=ce[1],m.G==2)if(ce[0]=="c"){m.K=ce[1],m.ia=ce[2];const ft=ce[3];ft!=null&&(m.la=ft,m.j.info("VER="+m.la));const pt=ce[4];pt!=null&&(m.Aa=pt,m.j.info("SVER="+m.Aa));const hs=ce[5];hs!=null&&typeof hs=="number"&&0<hs&&(E=1.5*hs,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const mn=l.g;if(mn){const tc=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tc){var M=E.h;M.g||tc.indexOf("spdy")==-1&&tc.indexOf("quic")==-1&&tc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(dd(M,M.h),M.h=null))}if(E.D){const _d=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;_d&&(E.ya=_d,Te(E.I,E.D,_d))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var B=l;if(E.qa=Ay(E,E.J?E.ia:null,E.W),B.K){ry(E.h,B);var ye=B,nt=E.L;nt&&(ye.I=nt),ye.B&&(cd(ye),Wl(ye)),E.g=B}else Iy(E);0<m.i.length&&Jl(m)}else ce[0]!="stop"&&ce[0]!="close"||Ti(m,7);else m.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Ti(m,7):pd(m):ce[0]!="noop"&&m.l&&m.l.ta(ce),m.v=0)}}Po(4)}catch{}}var yR=class{constructor(l,h){this.g=l,this.map=h}};function ey(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ty(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ny(l){return l.h?1:l.g?l.g.size:0}function hd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function dd(l,h){l.g?l.g.add(h):l.h=h}function ry(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}ey.prototype.cancel=function(){if(this.i=iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function iy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return k(l.i)}function vR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],m=l.length,E=0;E<m;E++)h.push(l[E]);return h}h=[],m=0;for(E in l)h[m++]=l[E];return h}function wR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const E in l)h[m++]=E;return h}}}function sy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=wR(l),E=vR(l),O=E.length,M=0;M<O;M++)h.call(void 0,E[M],m&&m[M],l)}var oy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ER(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var E=l[m].indexOf("="),O=null;if(0<=E){var M=l[m].substring(0,E);O=l[m].substring(E+1)}else M=l[m];h(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ei(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ei){this.h=l.h,ql(this,l.j),this.o=l.o,this.g=l.g,Hl(this,l.s),this.l=l.l;var h=l.i,m=new Vo;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),ay(this,m),this.m=l.m}else l&&(h=String(l).match(oy))?(this.h=!1,ql(this,h[1]||"",!0),this.o=Mo(h[2]||""),this.g=Mo(h[3]||"",!0),Hl(this,h[4]),this.l=Mo(h[5]||"",!0),ay(this,h[6]||"",!0),this.m=Mo(h[7]||"")):(this.h=!1,this.i=new Vo(null,this.h))}Ei.prototype.toString=function(){var l=[],h=this.j;h&&l.push(jo(h,ly,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(jo(h,ly,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(jo(m,m.charAt(0)=="/"?xR:IR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",jo(m,CR)),l.join("")};function Xn(l){return new Ei(l)}function ql(l,h,m){l.j=m?Mo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Hl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function ay(l,h,m){h instanceof Vo?(l.i=h,RR(l.i,l.h)):(m||(h=jo(h,SR)),l.i=new Vo(h,l.h))}function Te(l,h,m){l.i.set(h,m)}function Kl(l){return Te(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Mo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,TR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function TR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ly=/[#\/\?@]/g,IR=/[#\?:]/g,xR=/[#\?]/g,SR=/[#\?@]/g,CR=/#/g;function Vo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Ar(l){l.g||(l.g=new Map,l.h=0,l.i&&ER(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Vo.prototype,t.add=function(l,h){Ar(this),this.i=null,l=cs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function cy(l,h){Ar(l),h=cs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function uy(l,h){return Ar(l),h=cs(l,h),l.g.has(h)}t.forEach=function(l,h){Ar(this),this.g.forEach(function(m,E){m.forEach(function(O){l.call(h,O,E,this)},this)},this)},t.na=function(){Ar(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let E=0;E<h.length;E++){const O=l[E];for(let M=0;M<O.length;M++)m.push(h[E])}return m},t.V=function(l){Ar(this);let h=[];if(typeof l=="string")uy(this,l)&&(h=h.concat(this.g.get(cs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return Ar(this),this.i=null,l=cs(this,l),uy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function hy(l,h,m){cy(l,h),0<m.length&&(l.i=null,l.g.set(cs(l,h),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var E=h[m];const M=encodeURIComponent(String(E)),B=this.V(E);for(E=0;E<B.length;E++){var O=M;B[E]!==""&&(O+="="+encodeURIComponent(String(B[E]))),l.push(O)}}return this.i=l.join("&")};function cs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function RR(l,h){h&&!l.j&&(Ar(l),l.i=null,l.g.forEach(function(m,E){var O=E.toLowerCase();E!=O&&(cy(this,E),hy(this,O,m))},l)),l.j=h}function AR(l,h){const m=new Oo;if(a.Image){const E=new Image;E.onload=I(Nr,m,"TestLoadImage: loaded",!0,h,E),E.onerror=I(Nr,m,"TestLoadImage: error",!1,h,E),E.onabort=I(Nr,m,"TestLoadImage: abort",!1,h,E),E.ontimeout=I(Nr,m,"TestLoadImage: timeout",!1,h,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else h(!1)}function NR(l,h){const m=new Oo,E=new AbortController,O=setTimeout(()=>{E.abort(),Nr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:E.signal}).then(M=>{clearTimeout(O),M.ok?Nr(m,"TestPingServer: ok",!0,h):Nr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Nr(m,"TestPingServer: error",!1,h)})}function Nr(l,h,m,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(m)}catch{}}function kR(){this.g=new dR}function bR(l,h,m){const E=m||"";try{sy(l,function(O,M){let B=O;u(O)&&(B=nd(O)),h.push(E+M+"="+encodeURIComponent(B))})}catch(O){throw h.push(E+"type="+encodeURIComponent("_badmap")),O}}function Gl(l){this.l=l.Ub||null,this.j=l.eb||!1}x(Gl,rd),Gl.prototype.g=function(){return new Ql(this.l,this.j)},Gl.prototype.i=function(l){return function(){return l}}({});function Ql(l,h){dt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ql,dt),t=Ql.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Uo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Uo(this)),this.g&&(this.readyState=3,Uo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Fo(this):Uo(this),this.readyState==3&&dy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Fo(this))},t.Qa=function(l){this.g&&(this.response=l,Fo(this))},t.ga=function(){this.g&&Fo(this)};function Fo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Uo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function Uo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fy(l){let h="";return D(l,function(m,E){h+=E,h+=":",h+=m,h+=`\r
`}),h}function fd(l,h,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=fy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Te(l,h,m))}function Oe(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Oe,dt);var PR=/^https?$/i,DR=["POST","PUT"];t=Oe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():od.g(),this.v=this.o?z_(this.o):z_(od),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){py(this,M);return}if(l=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)m.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const M of E.keys())m.set(M,E.get(M));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(DR,h,void 0))||E||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,B]of m)this.g.setRequestHeader(M,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_y(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){py(this,M)}};function py(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,my(l),Yl(l)}function my(l){l.A||(l.A=!0,At(l,"complete"),At(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,At(this,"complete"),At(this,"abort"),Yl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yl(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gy(this):this.bb())},t.bb=function(){gy(this)};function gy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Jn(l)!=4||l.Z()!=2)){if(l.u&&Jn(l)==4)V_(l.Ea,0,l);else if(At(l,"readystatechange"),Jn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var E;if(E=B===0){var O=String(l.D).match(oy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!PR.test(O?O.toLowerCase():"")}m=E}if(m)At(l,"complete"),At(l,"success");else{l.m=6;try{var M=2<Jn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",my(l)}}finally{Yl(l)}}}}function Yl(l,h){if(l.g){_y(l);const m=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||At(l,"ready");try{m.onreadystatechange=E}catch{}}}function _y(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Jn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),hR(h)}};function yy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function OR(l){const h={};l=(l.g&&2<=Jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(_(l[E]))continue;var m=A(l[E]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=h[O]||[];h[O]=M,M.push(m)}C(h,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bo(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function vy(l){this.Aa=0,this.i=[],this.j=new Oo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bo("baseRetryDelayMs",5e3,l),this.cb=Bo("retryDelaySeedMs",1e4,l),this.Wa=Bo("forwardChannelMaxRetries",2,l),this.wa=Bo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ey(l&&l.concurrentRequestLimit),this.Da=new kR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vy.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,E){Nt(0),this.W=l,this.H=h||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=Ay(this,null,this.W),Jl(this)};function pd(l){if(wy(l),l.G==3){var h=l.U++,m=Xn(l.I);if(Te(m,"SID",l.K),Te(m,"RID",h),Te(m,"TYPE","terminate"),zo(l,m),h=new Rr(l,l.j,h),h.L=2,h.v=Kl(Xn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Ny(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Wl(h)}Ry(l)}function Xl(l){l.g&&(gd(l),l.g.cancel(),l.g=null)}function wy(l){Xl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Zl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Jl(l){if(!ty(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ee||Z(),z||(Ee(),z=!0),G.add(h,l),l.B=0}}function LR(l,h){return ny(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Do(g(l.Ga,l,h),Cy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Rr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(h+=E,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Ty(this,O,h),m=Xn(this.I),Te(m,"RID",l),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),zo(this,m),M&&(this.O?h="headers="+encodeURIComponent(String(fy(M)))+"&"+h:this.m&&fd(m,this.m,M)),dd(this.h,O),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",h),Te(m,"SID","null"),O.T=!0,ld(O,m,null)):ld(O,m,h),this.G=2}}else this.G==3&&(l?Ey(this,l):this.i.length==0||ty(this.h)||Ey(this))};function Ey(l,h){var m;h?m=h.l:m=l.U++;const E=Xn(l.I);Te(E,"SID",l.K),Te(E,"RID",m),Te(E,"AID",l.T),zo(l,E),l.m&&l.o&&fd(E,l.m,l.o),m=new Rr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ty(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),dd(l.h,m),ld(m,E,h)}function zo(l,h){l.H&&D(l.H,function(m,E){Te(h,E,m)}),l.l&&sy({},function(m,E){Te(h,E,m)})}function Ty(l,h,m){m=Math.min(l.i.length,m);var E=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const B=["count="+m];M==-1?0<m?(M=O[0].g,B.push("ofs="+M)):M=0:B.push("ofs="+M);let ye=!0;for(let nt=0;nt<m;nt++){let ce=O[nt].g;const ft=O[nt].map;if(ce-=M,0>ce)M=Math.max(0,O[nt].g-100),ye=!1;else try{bR(ft,B,"req"+ce+"_")}catch{E&&E(ft)}}if(ye){E=B.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,E}function Iy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ee||Z(),z||(Ee(),z=!0),G.add(h,l),l.v=0}}function md(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Do(g(l.Fa,l),Cy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,xy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Do(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Xl(this),xy(this))};function gd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function xy(l){l.g=new Rr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Xn(l.qa);Te(h,"RID","rpc"),Te(h,"SID",l.K),Te(h,"AID",l.T),Te(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Te(h,"TO",l.ja),Te(h,"TYPE","xmlhttp"),zo(l,h),l.m&&l.o&&fd(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Kl(Xn(h)),m.m=null,m.P=!0,X_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Xl(this),md(this),Nt(19))};function Zl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Sy(l,h){var m=null;if(l.g==h){Zl(l),gd(l),l.g=null;var E=2}else if(hd(l.h,h))m=h.D,ry(l.h,h),E=1;else return;if(l.G!=0){if(h.o)if(E==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;E=Bl(),At(E,new K_(E,m)),Jl(l)}else Iy(l);else if(O=h.s,O==3||O==0&&0<h.X||!(E==1&&LR(l,h)||E==2&&md(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),O){case 1:Ti(l,5);break;case 4:Ti(l,10);break;case 3:Ti(l,6);break;default:Ti(l,2)}}}function Cy(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function Ti(l,h){if(l.j.info("Error code "+h),h==2){var m=g(l.fb,l),E=l.Xa;const O=!E;E=new Ei(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ql(E,"https"),Kl(E),O?AR(E.toString(),m):NR(E.toString(),m)}else Nt(2);l.G=0,l.l&&l.l.sa(h),Ry(l),wy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Ry(l){if(l.G=0,l.ka=[],l.l){const h=iy(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ka,h),R(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function Ay(l,h,m){var E=m instanceof Ei?Xn(m):new Ei(m);if(E.g!="")h&&(E.g=h+"."+E.g),Hl(E,E.s);else{var O=a.location;E=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var M=new Ei(null);E&&ql(M,E),h&&(M.g=h),O&&Hl(M,O),m&&(M.l=m),E=M}return m=l.D,h=l.ya,m&&h&&Te(E,m,h),Te(E,"VER",l.la),zo(l,E),E}function Ny(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Oe(new Gl({eb:m})):new Oe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ky(){}t=ky.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ec(){}ec.prototype.g=function(l,h){return new Wt(l,h)};function Wt(l,h){dt.call(this),this.g=new vy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new us(this)}x(Wt,dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){pd(this.g)},Wt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=nd(l),l=m);h.i.push(new yR(h.Ya++,l)),h.G==3&&Jl(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,pd(this.g),delete this.g,Wt.aa.N.call(this)};function by(l){id.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}x(by,id);function Py(){sd.call(this),this.status=1}x(Py,sd);function us(l){this.g=l}x(us,ky),us.prototype.ua=function(){At(this.g,"a")},us.prototype.ta=function(l){At(this.g,new by(l))},us.prototype.sa=function(l){At(this.g,new Py)},us.prototype.ra=function(){At(this.g,"b")},ec.prototype.createWebChannel=ec.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,pS=function(){return new ec},fS=function(){return Bl()},dS=vi,Lp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zl.NO_ERROR=0,zl.TIMEOUT=8,zl.HTTP_ERROR=6,Hc=zl,G_.COMPLETE="complete",hS=G_,$_.EventType=bo,bo.OPEN="a",bo.CLOSE="b",bo.ERROR="c",bo.MESSAGE="d",dt.prototype.listen=dt.prototype.K,ha=$_,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,uS=Oe}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});const gw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new vl("@firebase/firestore");function na(){return Qi.logLevel}function H(t,...e){if(Qi.logLevel<=te.DEBUG){const n=e.map(Bg);Qi.debug(`Firestore (${So}): ${t}`,...n)}}function vr(t,...e){if(Qi.logLevel<=te.ERROR){const n=e.map(Bg);Qi.error(`Firestore (${So}): ${t}`,...n)}}function no(t,...e){if(Qi.logLevel<=te.WARN){const n=e.map(Bg);Qi.warn(`Firestore (${So}): ${t}`,...n)}}function Bg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function ge(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class dj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fj{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new mS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new yt(e)}}class pj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _j{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new gj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ge(0,0))}static max(){return new X(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends sl{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const vj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends sl{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return vj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ce.fromString(e))}static fromName(e){return new K(Ce.fromString(e).popFirst(5))}static empty(){return new K(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ce(e.slice()))}}function wj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new li(i,K.empty(),e)}function Ej(t){return new li(t.readTime,t.key,-1)}class li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new li(X.min(),K.empty(),-1)}static max(){return new li(X.max(),K.empty(),-1)}}function Tj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Ij)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sj(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zg.oe=-1;function Rh(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function Cj(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yw(this.data.getIterator())}getIteratorFrom(e){return new yw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class yw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ct(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yS("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Rj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Rj.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wg(t){const e=t.mapValue.fields.__previous_value__;return $g(e)?Wg(e):e}function ol(t){const e=ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$g(t)?4:kj(t)?9007199254740991:Nj(t)?10:11:Y()}function qn(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ci(i.timestampValue),a=ci(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?zu(o)===zu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(_w(o)!==_w(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!qn(o[c],a[c])))return!1;return!0}(t,e);default:return Y()}}function ll(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),c=Fe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return vw(t.timestampValue,e.timestampValue);case 4:return vw(ol(t),ol(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Yi(s),c=Yi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=ue(a[u],c[u]);if(f!==0)return f}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Fe(s.latitude),Fe(o.latitude));return a!==0?a:ue(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ww(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,f;const p=s.fields||{},g=o.fields||{},I=(a=p.value)===null||a===void 0?void 0:a.arrayValue,x=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=ue(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ww(I,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xc.mapValue&&o===xc.mapValue)return 0;if(s===xc.mapValue)return 1;if(o===xc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=ue(c[p],f[p]);if(g!==0)return g;const I=io(a[c[p]],u[f[p]]);if(I!==0)return I}return ue(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function vw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=ci(t),r=ci(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function ww(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=io(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function so(t){return Mp(t)}function Mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ci(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Ew(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jp(t){return!!t&&"integerValue"in t}function qg(t){return!!t&&"arrayValue"in t}function Tw(t){return!!t&&"nullValue"in t}function Iw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kc(t){return!!t&&"mapValue"in t}function Nj(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ka(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){os(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(ka(this.value))}}function vS(t){const e=[];return os(t.fields,(n,r)=>{const i=new ot([n]);if(Kc(r)){const s=vS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,X.min(),X.min(),X.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,X.min(),X.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,X.min(),X.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.position=e,this.inclusive=n}}function xw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function bj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{}class We extends wS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Dj(e,n,r):n==="array-contains"?new Mj(e,r):n==="in"?new jj(e,r):n==="not-in"?new Vj(e,r):n==="array-contains-any"?new Fj(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Oj(e,r):new Lj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function TS(t){return Pj(t)&&ES(t)}function Pj(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Vp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+so(t.value);if(TS(t))return t.filters.map(e=>Vp(e)).join(",");{const e=t.filters.map(n=>Vp(n)).join(",");return`${t.op}(${e})`}}function IS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IS(o,i.filters[a]),!0):!1}(t,e):void Y()}function xS(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(xS).join(" ,")+"}"}(t):"Filter"}class Dj extends We{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Oj extends We{constructor(e,n){super(e,"in",n),this.keys=SS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lj extends We{constructor(e,n){super(e,"not-in",n),this.keys=SS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Mj extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qg(n)&&ll(n.arrayValue,this.value)}}class jj extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ll(this.value.arrayValue,n)}}class Vj extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ll(this.value.arrayValue,n)}}class Fj extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Cw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Uj(t,e,n,r,i,s,o)}function Hg(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.ue=n}return e.ue}function Kg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sw(t.startAt,e.startAt)&&Sw(t.endAt,e.endAt)}function Fp(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bj(t,e,n,r,i,s,o,a){return new Co(t,e,n,r,i,s,o,a)}function Ah(t){return new Co(t)}function Rw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CS(t){return t.collectionGroup!==null}function ba(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ct(ot.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new cl(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new cl(ot.keyField(),r))}return e.ce}function $n(t){const e=J(t);return e.le||(e.le=zj(e,ba(t))),e.le}function zj(t,e){if(t.limitType==="F")return Cw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cl(i.field,s)});const n=t.endAt?new $u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $u(t.startAt.position,t.startAt.inclusive):null;return Cw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Up(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bp(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nh(t,e){return Kg($n(t),$n(e))&&t.limitType===e.limitType}function RS(t){return`${Hg($n(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xS(i)).join(", ")}]`),Rh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>so(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>so(i)).join(",")),`Target(${r})`}($n(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=xw(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ba(r),i)||r.endAt&&!function(o,a,c){const u=xw(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ba(r),i))}(t,e)}function $j(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AS(t){return(e,n)=>{let r=!1;for(const i of ba(t)){const s=Wj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wj(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?io(c,u):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _S(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qj=new De(K.comparator);function wr(){return qj}const NS=new De(K.comparator);function da(...t){let e=NS;for(const n of t)e=e.insert(n.key,n);return e}function kS(t){let e=NS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return Pa()}function bS(){return Pa()}function Pa(){return new Ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const Hj=new De(K.comparator),Kj=new ct(K.comparator);function ne(...t){let e=Kj;for(const n of t)e=e.add(n);return e}const Gj=new ct(ue);function Qj(){return Gj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function PS(t){return{integerValue:""+t}}function Yj(t,e){return Cj(e)?PS(e):Gg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._=void 0}}function Xj(t,e,n){return t instanceof ul?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$g(s)&&(s=Wg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oo?OS(t,e):t instanceof hl?LS(t,e):function(i,s){const o=DS(i,s),a=Aw(o)+Aw(i.Pe);return jp(o)&&jp(i.Pe)?PS(a):Gg(i.serializer,a)}(t,e)}function Jj(t,e,n){return t instanceof oo?OS(t,e):t instanceof hl?LS(t,e):n}function DS(t,e){return t instanceof Wu?function(r){return jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ul extends bh{}class oo extends bh{constructor(e){super(),this.elements=e}}function OS(t,e){const n=MS(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class hl extends bh{constructor(e){super(),this.elements=e}}function LS(t,e){let n=MS(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Wu extends bh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Aw(t){return Fe(t.integerValue||t.doubleValue)}function MS(t){return qg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.field=e,this.transform=n}}function Zj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof hl&&i instanceof hl?ro(r.elements,i.elements,qn):r instanceof Wu&&i instanceof Wu?qn(r.Pe,i.Pe):r instanceof ul&&i instanceof ul}(t.transform,e.transform)}class eV{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function VS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qg(t.key,cn.none()):new Pl(t.key,t.data,cn.none());{const n=t.data,r=jt.empty();let i=new ct(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Gt(i.toArray()),cn.none())}}function tV(t,e,n){t instanceof Pl?function(i,s,o){const a=i.value.clone(),c=kw(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,o){if(!Gc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kw(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(FS(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Pl?function(s,o,a,c){if(!Gc(s.precondition,o))return a;const u=s.value.clone(),f=bw(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,o,a,c){if(!Gc(s.precondition,o))return a;const u=bw(s.fieldTransforms,c,o),f=o.data;return f.setAll(FS(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Gc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Nw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ro(r,i,(s,o)=>Zj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kw(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Jj(o,a,n[i]))}return r}function bw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Xj(s,o,e))}return r}class Qg extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rV extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=VS(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>Nw(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>Nw(n,r))}}class Yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return Hj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ie;function aV(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function US(t){if(t===void 0)return vr("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=ze||(ze={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new Li([4294967295,4294967295],0);function Pw(t){const e=lV().encode(t),n=new cS;return n.update(e),new Uint8Array(n.digest())}function Dw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Li([n,r],0),new Li([i,s],0)]}class Xg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fa(`Invalid padding: ${n}`);if(r<0)throw new fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Li.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Li.fromNumber(r)));return i.compare(cV)===1&&(i=new Li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pw(e),[r,i]=Dw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Pw(e),[r,i]=Dw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(X.min(),i,new De(ue),wr(),ne())}}class Dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Dl(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class BS{constructor(e,n){this.targetId=e,this.me=n}}class zS{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ow{constructor(){this.fe=0,this.ge=Mw(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Dl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uV{constructor(e){this.Le=e,this.Be=new Map,this.ke=wr(),this.qe=Lw(),this.Qe=new De(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Fp(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Tt.newNoDocument(o,X.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Yi(r).toUint8Array()}catch(c){if(c instanceof yS)return no("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Xg(o,i,s)}catch(c){return no(c instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Fp(a.target)){const c=new K(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Tt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Qe,this.ke,r);return this.ke=wr(),this.qe=Lw(),this.Qe=new De(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ow,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ow),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lw(){return new De(K.comparator)}function Mw(){return new De(K.comparator)}const hV={asc:"ASCENDING",desc:"DESCENDING"},dV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fV={and:"AND",or:"OR"};class pV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zp(t,e){return t.useProto3Json||Rh(e)?e:{value:e}}function qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $S(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mV(t,e){return qu(t,e.toTimestamp())}function Wn(t){return ge(!!t),X.fromTimestamp(function(n){const r=ci(n);return new Ge(r.seconds,r.nanos)}(t))}function Jg(t,e){return $p(t,e).canonicalString()}function $p(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WS(t){const e=Ce.fromString(t);return ge(QS(e)),e}function Wp(t,e){return Jg(t.databaseId,e.path)}function cf(t,e){const n=WS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(HS(n))}function qS(t,e){return Jg(t.databaseId,e)}function gV(t){const e=WS(t);return e.length===4?Ce.emptyPath():HS(e)}function qp(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HS(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jw(t,e,n){return{name:Wp(t,e),fields:n.value.mapValue.fields}}function _V(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ge(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?V.UNKNOWN:US(u.code);return new W(f,u.message||"")}(o);n=new zS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cf(t,r.document.name),s=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):X.min(),a=new jt({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(i,s,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Qc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cf(t,r.document),s=r.readTime?Wn(r.readTime):X.min(),o=Tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cf(t,r.document),s=r.removedTargetIds||[];n=new Qc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new oV(i,s),a=r.targetId;n=new BS(a,o)}}return n}function yV(t,e){let n;if(e instanceof Pl)n={update:jw(t,e.key,e.value)};else if(e instanceof Qg)n={delete:Wp(t,e.key)};else if(e instanceof _i)n={update:jw(t,e.key,e.data),updateMask:RV(e.fieldMask)};else{if(!(e instanceof rV))return Y();n={verify:Wp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ul)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:mV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function vV(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wn(i.updateTime):Wn(s);return o.isEqual(X.min())&&(o=Wn(s)),new eV(o,i.transformResults||[])}(n,e))):[]}function wV(t,e){return{documents:[qS(t,e.path)]}}function EV(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qS(t,i);const s=function(u){if(u.length!==0)return GS(Nn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:ms(g.field),direction:xV(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function TV(t){let e=gV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=KS(p);return g instanceof Nn&&TS(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new cl(gs(x.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,Rh(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,I=p.values||[];return new $u(I,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,I=p.values||[];return new $u(I,g)}(n.endAt)),Bj(e,i,o,s,a,"F",c,u)}function IV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gs(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gs(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return We.create(gs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>KS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function xV(t){return hV[t]}function SV(t){return dV[t]}function CV(t){return fV[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return ot.fromServerFormat(t.fieldPath)}function GS(t){return t instanceof We?function(n){if(n.op==="=="){if(Iw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(Tw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(Tw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:SV(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>GS(i));return r.length===1?r[0]:{compositeFilter:{op:CV(n.op),filters:r}}}(t):Y()}function RV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.ct=e}}function NV(t){const e=TV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(){this.un=new bV}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(li.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(li.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class bV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ct(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ct(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ao(0)}static kn(){return new ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(){this.changes=new Ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,Gt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=da();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wr();const o=Pa(),a=function(){return Pa()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof _i)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Da(f.mutation,u,f.mutation.getFieldMask(),Ge.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return a.set(u,new DV(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pa();let i=new De((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Gt.empty();f=a.applyToLocalView(u,f),r.set(c,f);const p=(i.get(a.batchId)||ne()).add(c);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,p=bS();f.forEach(g=>{if(!s.has(g)){const I=VS(n.get(g),r.get(g));I!==null&&p.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Pi());let a=-1,c=s;return o.next(u=>F.forEach(u,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ne())).next(f=>({batchId:a,changes:kS(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=da();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,c=>{const u=function(p,g){return new Co(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let a=da();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Da(f.mutation,u,Gt.empty(),Ge.now()),kh(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:NV(i.bundledQuery),readTime:Wn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.overlays=new De(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Pi(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Pi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sV(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.Tr=new ct(Ye.Er),this.dr=new ct(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ce([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ce([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(Ye.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ue);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new K(s),0);let a=new ct(ue);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.Mr=e,this.docs=function(){return new De(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wr();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Tj(Ej(f),r)<=0||(i.has(f.key)||kh(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UV(this)}getSize(e){return F.resolve(this.size)}}class UV extends PV{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e){this.persistence=e,this.Nr=new Ro(n=>Hg(n),Kg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zg,this.targetCount=0,this.kr=ao.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e,n){this.qr={},this.overlays={},this.Qr=new zg(0),this.Kr=!1,this.Kr=!0,this.$r=new jV,this.referenceDelegate=e(this),this.Ur=new BV(this),this.indexManager=new kV,this.remoteDocumentCache=function(i){return new FV(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new AV(n),this.Gr=new LV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VV(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new $V(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $V extends xj{constructor(e){super(),this.currentSequenceNumber=e}}class e_{constructor(e){this.persistence=e,this.Jr=new Zg,this.Yr=null}static Zr(e){return new e_(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new t_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Eb()?8:Sj(Rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WV;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(na()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(na()<=te.DEBUG&&H("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(na()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):F.resolve())}Yi(e,n){if(Rw(n))return F.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bp(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Bp(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return Rw(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(na()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ps(n)),this.rs(e,o,n,wj(i,-1)).next(a=>a))})}ts(e,n){let r=new ct(AS(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return na()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ps(n)),this.Ji.getDocumentsMatchingQuery(e,n,li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new De(ue),this._s=new Ro(s=>Hg(s),Kg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OV(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function KV(t,e,n,r){return new HV(t,e,n,r)}async function YS(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ne();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function GV(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const p=u.batch,g=p.keys();let I=F.resolve();return g.forEach(x=>{I=I.next(()=>f.getEntry(c,x)).next(k=>{const R=u.docVersions.get(x);ge(R!==null),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XS(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function QV(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(ht.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(k,R,y){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(g,I,f)&&a.push(n.Ur.updateTargetData(s,I))});let c=wr(),u=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(YV(s,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(X.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.os=i,s))}function YV(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wr();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function XV(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JV(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Vw(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=J(c),g=p._s.get(f);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(u,f)}(r,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(a=>(ZV(r,$j(e),a),{documents:a,Ts:s})))}function ZV(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Fw{constructor(){this.activeTargetIds=Qj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eF{constructor(){this.so=new Fw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc=null;function uf(){return Sc===null?Sc=function(){return 268435456+Math.round(2147483648*Math.random())}():Sc++,"0x"+Sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class iF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=uf(),c=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,c,u,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw no("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=nF[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=uf();return new Promise((o,a)=>{const c=new uS;c.setWithCredentials(!0),c.listenOnce(hS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hc.NO_ERROR:const f=c.getResponseJson();H(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Hc.TIMEOUT:H(_t,`RPC '${e}' ${s} timed out`),a(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const p=c.getStatus();if(H(_t,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const x=function(R){const y=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(y)>=0?y:V.UNKNOWN}(I.status);a(new W(x,I.message))}else a(new W(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new W(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(_t,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(_t,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=uf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pS(),a=fS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");H(_t,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,I=!1;const x=new rF({Io:R=>{I?H(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(H(_t,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(_t,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},To:()=>p.close()}),k=(R,y,_)=>{R.listen(y,w=>{try{_(w)}catch(P){setTimeout(()=>{throw P},0)}})};return k(p,ha.EventType.OPEN,()=>{I||(H(_t,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),k(p,ha.EventType.CLOSE,()=>{I||(I=!0,H(_t,`RPC '${e}' stream ${i} transport closed`),x.So())}),k(p,ha.EventType.ERROR,R=>{I||(I=!0,no(_t,`RPC '${e}' stream ${i} transport errored:`,R),x.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),k(p,ha.EventType.MESSAGE,R=>{var y;if(!I){const _=R.data[0];ge(!!_);const w=_,P=w.error||((y=w[0])===null||y===void 0?void 0:y.error);if(P){H(_t,`RPC '${e}' stream ${i} received error:`,P);const j=P.status;let D=function(T){const S=ze[T];if(S!==void 0)return US(S)}(j),C=P.message;D===void 0&&(D=V.INTERNAL,C="Unknown error status: "+j+" with message "+P.message),I=!0,x.So(new W(D,C)),p.close()}else H(_t,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),k(a,dS.STAT_EVENT,R=>{R.stat===Lp.PROXY?H(_t,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Lp.NOPROXY&&H(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function hf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){return new pV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s,o,a,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new JS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sF extends ZS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_V(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Wn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=qp(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Fp(c)?{documents:wV(s,c)}:{query:EV(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$S(s,o.resumeToken);const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=qu(s,o.snapshotVersion.toTimestamp());const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=IV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=qp(this.serializer),n.removeTarget=e,this.a_(n)}}class oF extends ZS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vV(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=qp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yV(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,$p(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,$p(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class lF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{as(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=J(c);u.L_.add(4),await Ol(u),u.q_.set("Unknown"),u.L_.delete(4),await Lh(u)}(this))})}),this.q_=new lF(r,i)}}async function Lh(t){if(as(t))for(const e of t.B_)await e(!0)}async function Ol(t){for(const e of t.B_)await e(!1)}function eC(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),s_(n)?i_(n):Ao(n).r_()&&r_(n,e))}function n_(t,e){const n=J(t),r=Ao(n);n.N_.delete(e),r.r_()&&tC(n,e),n.N_.size===0&&(r.r_()?r.o_():as(n)&&n.q_.set("Unknown"))}function r_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).A_(e)}function tC(t,e){t.Q_.xe(e),Ao(t).R_(e)}function i_(t){t.Q_=new uV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.q_.v_()}function s_(t){return as(t)&&!Ao(t).n_()&&t.N_.size>0}function as(t){return J(t).L_.size===0}function nC(t){t.Q_=void 0}async function uF(t){t.q_.set("Online")}async function hF(t){t.N_.forEach((e,n)=>{r_(t,e)})}async function dF(t,e){nC(t),s_(t)?(t.q_.M_(e),i_(t)):t.q_.set("Unknown")}async function fF(t,e,n){if(t.q_.set("Online"),e instanceof zS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof Qc?t.Q_.Ke(e):e instanceof BS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await XS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(u);f&&s.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),tC(s,c);const p=new Wr(f.target,c,u,f.sequenceNumber);r_(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!bl(e))throw e;t.L_.add(1),await Ol(t),t.q_.set("Offline"),n||(n=()=>XS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lh(t)})}function rC(t,e){return e().catch(n=>Hu(t,n,e))}async function Mh(t){const e=J(t),n=ui(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;pF(e);)try{const i=await XV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,mF(e,i)}catch(i){await Hu(e,i)}iC(e)&&sC(e)}function pF(t){return as(t)&&t.O_.length<10}function mF(t,e){t.O_.push(e);const n=ui(t);n.r_()&&n.V_&&n.m_(e.mutations)}function iC(t){return as(t)&&!ui(t).n_()&&t.O_.length>0}function sC(t){ui(t).start()}async function gF(t){ui(t).p_()}async function _F(t){const e=ui(t);for(const n of t.O_)e.m_(n.mutations)}async function yF(t,e,n){const r=t.O_.shift(),i=Yg.from(r,e,n);await rC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mh(t)}async function vF(t,e){e&&ui(t).V_&&await async function(r,i){if(function(o){return aV(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();ui(r).s_(),await rC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mh(r)}}(t,e),iC(t)&&sC(t)}async function Bw(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=as(n);n.L_.add(3),await Ol(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lh(n)}async function wF(t,e){const n=J(t);e?(n.L_.delete(2),await Lh(n)):e||(n.L_.add(2),await Ol(n),n.q_.set("Unknown"))}function Ao(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new sF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:uF.bind(null,t),Ro:hF.bind(null,t),mo:dF.bind(null,t),d_:fF.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),s_(t)?i_(t):t.q_.set("Unknown")):(await t.K_.stop(),nC(t))})),t.K_}function ui(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new oF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:gF.bind(null,t),mo:vF.bind(null,t),f_:_F.bind(null,t),g_:yF.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Mh(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new o_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a_(t,e){if(vr("AsyncQueue",`${e}: ${t}`),bl(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=da(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.W_=new De(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class TF{constructor(){this.queries=$w(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=$w(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function $w(){return new Ro(t=>RS(t),Nh)}async function l_(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new EF,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=a_(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&u_(n)}async function c_(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IF(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&u_(n)}function xF(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function u_(t){t.Y_.forEach(e=>{e.next()})}var Kp,Ww;(Ww=Kp||(Kp={})).ea="default",Ww.Cache="cache";class h_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.key=e}}class aC{constructor(e){this.key=e}}class SF{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=AS(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new zw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),I=kh(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;g&&I?g.data.isEqual(I.data)?x!==k&&(r.track({type:3,doc:I}),R=!0):this.ga(g,I)||(r.track({type:2,doc:I}),R=!0,(c&&this.Aa(I,c)>0||u&&this.Aa(I,u)<0)&&(a=!0)):!g&&I?(r.track({type:0,doc:I}),R=!0):g&&!I&&(r.track({type:1,doc:g}),R=!0,(c||u)&&(a=!0)),R&&(I?(o=o.add(I),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(I,x){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(I)-k(x)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new lo(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new aC(r))}),this.da.forEach(r=>{e.has(r)||n.push(new oC(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RF{constructor(e){this.key=e,this.va=!1}}class AF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ro(a=>RS(a),Nh),this.Ma=new Map,this.xa=new Set,this.Oa=new De(K.comparator),this.Na=new Map,this.La=new Zg,this.Ba={},this.ka=new Map,this.qa=ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function NF(t,e,n=!0){const r=fC(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await lC(r,e,n,!0),i}async function kF(t,e){const n=fC(t);await lC(n,e,!0,!1)}async function lC(t,e,n,r){const i=await JV(t.localStore,$n(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await bF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&eC(t.remoteStore,i),a}async function bF(t,e,n,r,i){t.Ka=(p,g,I)=>async function(k,R,y,_){let w=R.view.ma(y);w.ns&&(w=await Vw(k.localStore,R.query,!1).then(({documents:C})=>R.view.ma(C,w)));const P=_&&_.targetChanges.get(R.targetId),j=_&&_.targetMismatches.get(R.targetId)!=null,D=R.view.applyChanges(w,k.isPrimaryClient,P,j);return Hw(k,R.targetId,D.wa),D.snapshot}(t,p,g,I);const s=await Vw(t.localStore,e,!0),o=new SF(e,s.Ts),a=o.ma(s.documents),c=Dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Hw(t,n,u.wa);const f=new CF(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function PF(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Nh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&n_(r.remoteStore,i.targetId),Gp(r,i.targetId)}).catch(kl)):(Gp(r,i.targetId),await Hp(r.localStore,i.targetId,!0))}async function DF(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),n_(n.remoteStore,r.targetId))}async function OF(t,e,n){const r=BF(t);try{const i=await function(o,a){const c=J(o),u=Ge.now(),f=a.reduce((I,x)=>I.add(x.key),ne());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=wr(),k=ne();return c.cs.getEntries(I,f).next(R=>{x=R,x.forEach((y,_)=>{_.isValidDocument()||(k=k.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,x)).next(R=>{p=R;const y=[];for(const _ of a){const w=nV(_,p.get(_.key).overlayedDocument);w!=null&&y.push(new _i(_.key,w,vS(w.value.mapValue),cn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,y,a)}).next(R=>{g=R;const y=R.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(I,R.batchId,y)})}).then(()=>({batchId:g.batchId,changes:kS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new De(ue)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ll(r,i.changes),await Mh(r.remoteStore)}catch(i){const s=a_(i,"Failed to persist write");n.reject(s)}}async function cC(t,e){const n=J(t);try{const r=await QV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Ll(n,r,e)}catch(r){await kl(r)}}function qw(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(a)&&(u=!0)}),u&&u_(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LF(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new De(K.comparator);o=o.insert(s,Tt.newNoDocument(s,X.min()));const a=ne().add(s),c=new Dh(X.min(),new Map,new De(ue),o,a);await cC(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),d_(r)}else await Hp(r.localStore,e,!1).then(()=>Gp(r,e,n)).catch(kl)}async function MF(t,e){const n=J(t),r=e.batch.batchId;try{const i=await GV(n.localStore,e);hC(n,r,null),uC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ll(n,i)}catch(i){await kl(i)}}async function jF(t,e,n){const r=J(t);try{const i=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(p=>(ge(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);hC(r,e,n),uC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ll(r,i)}catch(i){await kl(i)}}function uC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function hC(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Gp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||dC(t,r)})}function dC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(n_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),d_(t))}function Hw(t,e,n){for(const r of n)r instanceof oC?(t.La.addReference(r.key,e),VF(t,r)):r instanceof aC?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||dC(t,r.key)):Y()}function VF(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),d_(t))}function d_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ce.fromString(e)),r=t.qa.next();t.Na.set(r,new RF(n)),t.Oa=t.Oa.insert(n,r),eC(t.remoteStore,new Wr($n(Ah(n.path)),r,"TargetPurposeLimboResolution",zg.oe))}}async function Ll(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=t_.Wi(c.targetId,u);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const f=J(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(u,g=>F.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>F.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!bl(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const I=f.os.get(g),x=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function FF(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await YS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ll(n,r.hs)}}function UF(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function fC(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LF.bind(null,e),e.Ca.d_=IF.bind(null,e.eventManager),e.Ca.$a=xF.bind(null,e.eventManager),e}function BF(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jF.bind(null,e),e}class Ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return KV(this.persistence,new qV,e.initialUser,this.serializer)}Ga(e){return new zV(e_.Zr,this.serializer)}Wa(e){return new eF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ku.provider={build:()=>new Ku};class Qp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FF.bind(null,this.syncEngine),await wF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TF}()}createDatastore(e){const n=Oh(e.databaseInfo.databaseId),r=function(s){return new iF(s)}(e.databaseInfo);return function(s,o,a,c){return new aF(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new cF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qw(this.syncEngine,n,0),function(){return Uw.D()?new Uw:new tF}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,f){const p=new AF(i,s,o,a,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ol(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qp.provider={build:()=>new Qp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=gS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=a_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function df(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $F(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bw(e.remoteStore,i)),t._onlineComponents=e}async function $F(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;no("Error using user provided cache. Falling back to memory cache: "+n),await df(t,new Ku)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await df(t,new Ku);return t._offlineComponents}async function pC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Kw(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Kw(t,new Qp))),t._onlineComponents}function WF(t){return pC(t).then(e=>e.syncEngine)}async function Gu(t){const e=await pC(t),n=e.eventManager;return n.onListen=NF.bind(null,e.syncEngine),n.onUnlisten=PF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DF.bind(null,e.syncEngine),n}function qF(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new f_({next:g=>{f.Za(),o.enqueueAndForget(()=>c_(s,p));const I=g.docs.has(a);!I&&g.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new h_(Ah(a.path),f,{includeMetadataChanges:!0,_a:!0});return l_(s,p)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function HF(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const f=new f_({next:g=>{f.Za(),o.enqueueAndForget(()=>c_(s,p)),g.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new h_(a,f,{includeMetadataChanges:!0,_a:!0});return l_(s,p)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KF(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qw(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yw(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hj;switch(r.type){case"firstParty":return new mj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gw.get(n);r&&(H("ComponentProvider","Removing Datastore"),Gw.delete(n),r.terminate())}(this),Promise.resolve()}}function GF(t,e,n,r={}){var i;const s=(t=$t(t,Vh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=yt.MOCK_USER;else{a=rg(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new yt(u)}t._authCredentials=new dj(new mS(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class ri extends yi{constructor(e,n,r){super(e,n,Ah(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new K(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function at(t,e,...n){if(t=ve(t),gC("collection","path",e),t instanceof Vh){const r=Ce.fromString(e,...n);return Yw(r),new ri(t,null,r)}{if(!(t instanceof St||t instanceof ri))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Yw(r),new ri(t.firestore,null,r)}}function et(t,e,...n){if(t=ve(t),arguments.length===1&&(e=gS.newId()),gC("doc","path",e),t instanceof Vh){const r=Ce.fromString(e,...n);return Qw(r),new St(t,null,new K(r))}{if(!(t instanceof St||t instanceof ri))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Qw(r),new St(t.firestore,t instanceof ri?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new JS(this,"async_queue_retry"),this.Vu=()=>{const r=hf();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new hr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=o_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Zw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Er extends Vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Jw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jw(e),this._firestoreClient=void 0,await e}}}function Fh(t,e){const n=typeof t=="object"?t:wl(),r=typeof t=="string"?t:"(default)",i=Sr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tg("firestore");s&&GF(i,...s)}return i}function Uh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QF(t),t._firestoreClient}function QF(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,f){return new Aj(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mC(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new zF(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(ht.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new co(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YF=/^__.*__$/;class XF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class _C{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class zh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yC(this.Cu)&&YF.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oh(e)}Qu(e,n,r,i=!1){return new zh({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $h(t){const e=t._freezeSettings(),n=Oh(t._databaseId);return new JF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vC(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);y_("Data must be an object, but it was:",o,r);const a=wC(r,o);let c,u;if(s.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Yp(e,p,n);if(!o.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);TC(f,g)||f.push(g)}c=new Gt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new XF(new jt(a),c,u)}class Wh extends Ml{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wh}}function ZF(t,e,n){return new zh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class g_ extends Ml{_toFieldTransform(e){return new jS(e.path,new ul)}isEqual(e){return e instanceof g_}}class __ extends Ml{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=ZF(this,e,!0),r=this.Ku.map(s=>No(s,n)),i=new oo(r);return new jS(e.path,i)}isEqual(e){return e instanceof __&&Js(this.Ku,e.Ku)}}function eU(t,e,n,r){const i=t.Qu(1,e,n);y_("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();os(r,(c,u)=>{const f=v_(e,c,n);u=ve(u);const p=i.Nu(f);if(u instanceof Wh)s.push(f);else{const g=No(u,p);g!=null&&(s.push(f),o.set(f,g))}});const a=new Gt(s);return new _C(o,a,i.fieldTransforms)}function tU(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Yp(e,r,n)],c=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Yp(e,s[g])),c.push(s[g+1]);const u=[],f=jt.empty();for(let g=a.length-1;g>=0;--g)if(!TC(u,a[g])){const I=a[g];let x=c[g];x=ve(x);const k=o.Nu(I);if(x instanceof Wh)u.push(I);else{const R=No(x,k);R!=null&&(u.push(I),f.set(I,R))}}const p=new Gt(u);return new _C(f,p,o.fieldTransforms)}function nU(t,e,n,r=!1){return No(n,t.Qu(r?4:3,e))}function No(t,e){if(EC(t=ve(t)))return y_("Unsupported field value:",e,t),wC(t,e);if(t instanceof Ml)return function(r,i){if(!yC(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=No(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ge.fromDate(r);return{timestampValue:qu(i.serializer,s)}}if(r instanceof Ge){const s=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qu(i.serializer,s)}}if(r instanceof p_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof co)return{bytesValue:$S(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof m_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Gg(a.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${jh(r)}`)}(t,e)}function wC(t,e){const n={};return _S(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,i)=>{const s=No(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof p_||t instanceof co||t instanceof St||t instanceof Ml||t instanceof m_)}function y_(t,e,n){if(!EC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Yp(t,e,n){if((e=ve(e))instanceof Bh)return e._internalPath;if(typeof e=="string")return v_(t,e);throw Qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const rU=new RegExp("[~\\*/\\[\\]]");function v_(t,e,n){if(e.search(rU)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bh(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(V.INVALID_ARGUMENT,a+t+c)}function TC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iU extends IC{data(){return super.data()}}function qh(t,e){return typeof e=="string"?v_(t,e):e instanceof Bh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class w_{}class SC extends w_{}function Cn(t,e,...n){let r=[];e instanceof w_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof E_).length,a=s.filter(c=>c instanceof Hh).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hh extends SC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hh(e,n,r)}_apply(e){const n=this._parse(e);return CC(e._query,n),new yi(e.firestore,e.converter,Up(e._query,n))}_parse(e){const n=$h(e.firestore);return function(s,o,a,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){tE(p,f);const I=[];for(const x of p)I.push(eE(c,s,x));g={arrayValue:{values:I}}}else g=eE(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||tE(p,f),g=nU(a,o,p,f==="in"||f==="not-in");return We.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ii(t,e,n){const r=e,i=qh("where",t);return Hh._create(i,r,n)}class E_ extends w_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new E_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)CC(o,c),o=Up(o,c)}(e._query,n),new yi(e.firestore,e.converter,Up(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class T_ extends SC{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new T_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(s,o)}(e._query,this._field,this._direction);return new yi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Co(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Yu(t,e="asc"){const n=e,r=qh("orderBy",t);return T_._create(r,n)}function eE(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CS(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ew(t,new K(r))}if(n instanceof St)return Ew(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function tE(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sU{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new m_(s)}convertGeoPoint(e){return new p_(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const n=ci(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ge(QS(r));const i=new al(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AC extends IC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yc extends AC{data(e={}){return super.data(e)}}class NC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yc(this._firestore,this._userDataWriter,r.key,r,new pa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Yc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Yc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:oU(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){t=$t(t,St);const e=$t(t.firestore,Er);return qF(Uh(e),t._key).then(n=>bC(e,t,n))}class I_ extends sU{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function ho(t){t=$t(t,yi);const e=$t(t.firestore,Er),n=Uh(e),r=new I_(e);return xC(t._query),HF(n,t._query).then(i=>new NC(e,r,t,i))}function aU(t,e,n){t=$t(t,St);const r=$t(t.firestore,Er),i=RC(t.converter,e);return Kh(r,[vC($h(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cn.none())])}function Tn(t,e,n,...r){t=$t(t,St);const i=$t(t.firestore,Er),s=$h(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof Bh?tU(s,"updateDoc",t._key,e,n,r):eU(s,"updateDoc",t._key,e),Kh(i,[o.toMutation(t._key,cn.exists(!0))])}function Xp(t){return Kh($t(t.firestore,Er),[new Qg(t._key,cn.none())])}function fo(t,e){const n=$t(t.firestore,Er),r=et(t),i=RC(t.converter,e);return Kh(n,[vC($h(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function kC(t,...e){var n,r,i;t=ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Zw(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof St)u=$t(t.firestore,Er),f=Ah(t._key.path),c={next:p=>{e[o]&&e[o](bC(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,yi);u=$t(p.firestore,Er),f=p._query;const g=new I_(u);c={next:I=>{e[o]&&e[o](new NC(u,g,p,I))},error:e[o+1],complete:e[o+2]},xC(t._query)}return function(g,I,x,k){const R=new f_(k),y=new h_(I,R,x);return g.asyncQueue.enqueueAndForget(async()=>l_(await Gu(g),y)),()=>{R.Za(),g.asyncQueue.enqueueAndForget(async()=>c_(await Gu(g),y))}}(Uh(u),f,a,c)}function Kh(t,e){return function(r,i){const s=new hr;return r.asyncQueue.enqueueAndForget(async()=>OF(await WF(r),i,s)),s.promise}(Uh(t),e)}function bC(t,e,n){const r=n.docs.get(e._key),i=new I_(t);return new AC(t,i,e._key,r,new pa(n.hasPendingWrites,n.fromCache),e.converter)}function Je(){return new g_("serverTimestamp")}function lU(...t){return new __("arrayUnion",t)}(function(e,n=!0){(function(i){So=i})(mi),dn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Er(new fj(r.getProvider("auth-internal")),new _j(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(u.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xt(gw,"4.7.3",e),xt(gw,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="firebasestorage.googleapis.com",DC="storageBucket",cU=2*60*1e3,uU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends pn{constructor(e,n,r=0){super(ff(e),`Firebase Storage: ${n} (${ff(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ff(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function ff(t){return"storage/"+t}function x_(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Me.UNKNOWN,t)}function hU(t){return new je(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dU(t){return new je(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Me.UNAUTHENTICATED,t)}function pU(){return new je(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mU(t){return new je(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gU(){return new je(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _U(){return new je(Me.CANCELED,"User canceled the upload/download.")}function yU(t){return new je(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function vU(t){return new je(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wU(){return new je(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DC+"' property when initializing the app?")}function EU(){return new je(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TU(){return new je(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IU(t){return new je(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jp(t){return new je(Me.INVALID_ARGUMENT,t)}function OC(){return new je(Me.APP_DELETED,"The Firebase app was deleted.")}function xU(t){return new je(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oa(t,e){return new je(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ra(t){throw new je(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw vU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},k=n===PC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",y=new RegExp(`^https?://${k}/${i}/${R}`,"i"),w=[{regex:a,indices:c,postModify:s},{regex:I,indices:x,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<w.length;P++){const j=w[P],D=j.regex.exec(e);if(D){const C=D[j.indices.bucket];let v=D[j.indices.path];v||(v=""),r=new Qt(C,v),j.postModify(r);break}}if(r==null)throw yU(e);return r}}class SU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...R){u||(u=!0,e.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,t(I,c())},R)}function g(){s&&clearTimeout(s)}function I(R,...y){if(u){g();return}if(R){g(),f.call(null,R,...y);return}if(c()||o){g(),f.call(null,R,...y);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,p(w)}let x=!1;function k(R){x||(x=!0,g(),!u&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function RU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(t){return t!==void 0}function NU(t){return typeof t=="object"&&!Array.isArray(t)}function S_(t){return typeof t=="string"||t instanceof String}function nE(t){return C_()&&t instanceof Blob}function C_(){return typeof Blob<"u"}function rE(t,e,n,r){if(r<e)throw Jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function LC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Mi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mi||(Mi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,n,r,i,s,o,a,c,u,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,x)=>{this.resolve_=I,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mi.NO_ERROR,c=s.getStatus();if(!a||kU(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Mi.ABORT;r(!1,new Cc(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Cc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());AU(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=x_();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?OC():_U();o(c)}else{const c=gU();o(c)}};this.canceled_?n(!1,new Cc(!1,null,!0)):this.backoffId_=CU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MU(t,e,n,r,i,s,o=!0){const a=LC(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return OU(u,e),PU(u,n),DU(u,s),LU(u,r),new bU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VU(...t){const e=jU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(C_())return new Blob(t);throw new je(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){if(typeof atob>"u")throw IU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pf{constructor(e,n){this.data=e,this.contentType=n||null}}function BU(t,e){switch(t){case Vn.RAW:return new pf(MC(e));case Vn.BASE64:case Vn.BASE64URL:return new pf(jC(t,e));case Vn.DATA_URL:return new pf($U(e),WU(e))}throw x_()}function MC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zU(t){let e;try{e=decodeURIComponent(t)}catch{throw Oa(Vn.DATA_URL,"Malformed data URL.")}return MC(e)}function jC(t,e){switch(t){case Vn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Vn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UU(e)}catch(i){throw i.message.includes("polyfill")?i:Oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class VC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oa(Vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $U(t){const e=new VC(t);return e.base64?jC(Vn.BASE64,e.rest):zU(e.rest)}function WU(t){return new VC(t).contentType}function qU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){let r=0,i="";nE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(nE(this.data_)){const r=this.data_,i=FU(r,e,n);return i===null?null:new Ur(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ur(r,!0)}}static getBlob(...e){if(C_()){const n=e.map(r=>r instanceof Ur?r.data_:r);return new Ur(VU.apply(null,n))}else{const n=e.map(o=>S_(o)?BU(Vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ur(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){let e;try{e=JSON.parse(t)}catch{return null}return NU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function KU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function UC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||GU}}let Rc=null;function QU(t){return!S_(t)||t.length<2?t:UC(t)}function BC(){if(Rc)return Rc;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return QU(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),Rc=t,Rc}function YU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function XU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return YU(r,t),r}function zC(t,e,n){const r=FC(e);return r===null?null:XU(t,r,n)}function JU(t,e,n,r){const i=FC(e);if(i===null||!S_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),I=R_(g,n,r),x=LC({alt:"media",token:u});return I+x})[0]}function ZU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class $C{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){if(!t)throw x_()}function e3(t,e){function n(r,i){const s=zC(t,i,e);return WC(s!==null),s}return n}function t3(t,e){function n(r,i){const s=zC(t,i,e);return WC(s!==null),JU(s,i,t.host,t._protocol)}return n}function qC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=pU():i=fU():n.getStatus()===402?i=dU(t.bucket):n.getStatus()===403?i=mU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function n3(t){const e=qC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=hU(t.path)),s.serverResponse=i.serverResponse,s}return n}function r3(t,e,n){const r=e.fullServerUrl(),i=R_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new $C(i,s,t3(t,n),o);return a.errorHandler=n3(e),a}function i3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function s3(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=i3(null,e)),r}function o3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let P=0;P<2;P++)w=w+Math.random().toString().slice(2);return w}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=s3(e,r,i),f=ZU(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",I=Ur.getBlob(p,r,g);if(I===null)throw EU();const x={name:u.fullPath},k=R_(s,t.host,t._protocol),R="POST",y=t.maxUploadRetryTime,_=new $C(k,R,e3(t,n),y);return _.urlParams=x,_.headers=o,_.body=I.uploadData(),_.errorHandler=qC(e),_}class a3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ra("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class l3 extends a3{initXhr(){this.xhr_.responseType="text"}}function HC(){return new l3}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ji(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UC(this._location.path)}get storage(){return this._service}get parent(){const e=HU(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Ji(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xU(e)}}function c3(t,e,n){t._throwIfRoot("uploadBytes");const r=o3(t.storage,t._location,BC(),new Ur(e,!0),n);return t.storage.makeRequestWithTokens(r,HC).then(i=>({metadata:i,ref:t}))}function u3(t){t._throwIfRoot("getDownloadURL");const e=r3(t.storage,t._location,BC());return t.storage.makeRequestWithTokens(e,HC).then(n=>{if(n===null)throw TU();return n})}function h3(t,e){const n=KU(t._location.path,e),r=new Qt(t._location.bucket,n);return new Ji(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(t){return/^[A-Za-z]+:\/\//.test(t)}function f3(t,e){return new Ji(t,e)}function KC(t,e){if(t instanceof A_){const n=t;if(n._bucket==null)throw wU();const r=new Ji(n,n._bucket);return e!=null?KC(r,e):r}else return e!==void 0?h3(t,e):t}function p3(t,e){if(e&&d3(e)){if(t instanceof A_)return f3(t,e);throw Jp("To use ref(service, url), the first argument must be a Storage instance.")}else return KC(t,e)}function iE(t,e){const n=e==null?void 0:e[DC];return n==null?null:Qt.makeFromBucketSpec(n,t)}function m3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rg(i,t.app.options.projectId))}class A_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=PC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cU,this._maxUploadRetryTime=uU,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=iE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=iE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ji(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SU(OC());{const o=MU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sE="@firebase/storage",oE="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="storage";function QC(t,e,n){return t=ve(t),c3(t,e,n)}function YC(t){return t=ve(t),u3(t)}function XC(t,e){return t=ve(t),p3(t,e)}function JC(t=wl(),e){t=ve(t);const r=Sr(t,GC).getImmediate({identifier:e}),i=tg("storage");return i&&g3(r,...i),r}function g3(t,e,n,r={}){m3(t,e,n,r)}function _3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new A_(n,r,i,e,mi)}function y3(){dn(new en(GC,_3,"PUBLIC").setMultipleInstances(!0)),xt(sE,oE,""),xt(sE,oE,"esm2017")}y3();const v3={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},jl=qI(v3);wL(jl);lj(jl);const de=Fh(jl),Xu=A1(jl),w3=JC(jl);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZC=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},c)=>L.createElement("svg",{ref:c,...T3,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ZC("lucide",i),...a},[...o.map(([u,f])=>L.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const n=L.forwardRef(({className:r,...i},s)=>L.createElement(I3,{ref:s,iconNode:e,className:ZC(`lucide-${E3(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=he("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=he("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=he("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=he("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=he("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=he("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=he("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=he("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=he("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=he("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=he("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=he("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=he("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=he("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=he("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=he("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),F3=()=>(L.useEffect(()=>{const t=()=>{document.querySelectorAll(".fade-in-section").forEach(n=>{n.getBoundingClientRect().top<window.innerHeight-100&&(n.classList.add("opacity-100"),n.classList.add("translate-y-0"))})};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[]),d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1E88E5_1px,transparent_1px)] [background-size:40px_40px] opacity-5"}),d.jsx("div",{className:"absolute inset-0 backdrop-blur-[100px]"}),d.jsx("div",{className:"container mx-auto px-4 py-6 relative z-10",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsxs("div",{className:"flex items-center space-x-3 group",children:[d.jsxs("div",{className:"relative",children:[d.jsx(Hn,{className:"h-8 w-8 text-[#1E88E5] transform group-hover:rotate-12 transition-all duration-300"}),d.jsx("div",{className:"absolute -inset-1 bg-blue-500/20 rounded-full blur group-hover:bg-blue-500/30 transition-all duration-300"})]}),d.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#1976D2] bg-clip-text text-transparent",children:"TraceIt"})]}),d.jsxs("div",{className:"space-x-6",children:[d.jsx(On,{to:"/login",className:`text-[#1565C0] hover:text-[#1E88E5] transition-all duration-300 relative inline-block
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#1E88E5] hover:after:w-full after:transition-all`,children:"Login"}),d.jsxs(On,{to:"/register",className:`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden 
                font-medium text-[#1976D2] transition duration-300 ease-out border-2 border-[#1976D2] 
                rounded-md shadow-md group hover:text-white`,children:[d.jsx("span",{className:`absolute inset-0 flex items-center justify-center w-full h-full text-white 
                duration-300 -translate-x-full bg-[#1976D2] group-hover:translate-x-0 ease`,children:d.jsx(aE,{className:"h-5 w-5"})}),d.jsx("span",{className:`absolute flex items-center justify-center w-full h-full transition-all 
                duration-300 transform group-hover:translate-x-full ease`,children:"Register"}),d.jsx("span",{className:"relative invisible",children:"Register"})]})]})]})}),d.jsxs("main",{className:"container mx-auto px-4 py-16 relative z-10",children:[d.jsxs("div",{className:"text-center mb-20 fade-in-section opacity-0 translate-y-5 transition-all duration-700",children:[d.jsx("h1",{className:`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0D47A1] to-[#1976D2] 
            bg-clip-text text-transparent leading-tight`,children:"Find What You've Lost"}),d.jsx("p",{className:"text-xl text-[#1565C0] max-w-2xl mx-auto leading-relaxed",children:"TraceIt helps you locate and recover your lost belongings quickly and efficiently. From IDs to personal items, we've got you covered."})]}),d.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",children:[{icon:d.jsx(Gh,{}),title:"Easy Search",description:"Quickly search through our database of found items using keywords or categories."},{icon:d.jsx(Hn,{}),title:"Nationwide Coverage",description:"We cover all regions of the country, ensuring a wide reach for your lost items."},{icon:d.jsx(L3,{}),title:"Secure & Reliable",description:"Your information is kept confidential, and our process is designed to be secure and trustworthy."}].map((t,e)=>d.jsxs("div",{className:`group fade-in-section opacity-0 translate-y-5 transition-all duration-700 
                backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                hover:-translate-y-2`,children:[d.jsx("div",{className:"flex justify-center mb-6",children:d.jsx("div",{className:`relative p-4 bg-gradient-to-br from-[#1E88E5] to-[#1976D2] rounded-2xl 
                  group-hover:scale-110 transition-transform duration-300`,children:im.cloneElement(t.icon,{className:"h-12 w-12 text-white"})})}),d.jsx("h3",{className:"text-2xl font-semibold text-[#1565C0] mb-4",children:t.title}),d.jsx("p",{className:"text-[#1976D2] leading-relaxed",children:t.description})]},e))}),d.jsx("div",{className:"text-center fade-in-section opacity-0 translate-y-5 transition-all duration-700",children:d.jsxs(On,{to:"/register",className:`relative inline-flex items-center justify-center px-10 py-4 overflow-hidden 
              font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r 
              from-[#1976D2] to-[#1E88E5] rounded-xl shadow-md hover:scale-105 
              hover:shadow-xl group`,children:[d.jsxs("span",{className:`absolute inset-0 flex items-center justify-center w-full h-full text-white 
              duration-300 transform -translate-x-full bg-[#1565C0] group-hover:translate-x-0 ease`,children:["Start Now ",d.jsx(aE,{className:"h-5 w-5 ml-2"})]}),d.jsx("span",{className:`absolute flex items-center justify-center w-full h-full text-white 
              transition-all duration-300 transform group-hover:translate-x-full ease`,children:"Start Finding Your Items"}),d.jsx("span",{className:"relative invisible",children:"Start Finding Your Items"})]})})]}),d.jsx("footer",{className:"bg-gradient-to-r from-[#1976D2] to-[#1E88E5] text-white py-10 relative z-10",children:d.jsx("div",{className:"container mx-auto px-4",children:d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center",children:[d.jsx("div",{className:"mb-4 sm:mb-0 font-medium",children:"© 2024 TraceIt. All rights reserved."}),d.jsxs("div",{className:"space-x-8",children:[d.jsx(On,{to:"/terms",className:`hover:text-[#E3F2FD] transition-colors duration-300 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                  after:h-0.5 after:bg-[#E3F2FD] hover:after:w-full after:transition-all`,children:"Terms of Service"}),d.jsx(On,{to:"/privacy",className:`hover:text-[#E3F2FD] transition-colors duration-300 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                  after:h-0.5 after:bg-[#E3F2FD] hover:after:w-full after:transition-all`,children:"Privacy Policy"})]})]})})})]})),U3=()=>{const[t,e]=L.useState({email:"",password:""}),[n,r]=L.useState(""),[i,s]=L.useState(!1),[o,a]=L.useState(0),[c,u]=L.useState(!1),f=yo(),p=k=>e({...t,[k.target.id]:k.target.value}),g=()=>a(k=>k===4?(s(!0),0):k+1),I=()=>u(!c),x=async k=>{k.preventDefault(),r("");try{const{user:R}=await U2(Xu,t.email,t.password),y=await R.getIdToken(),_=await fetch("http://127.0.0.1:5000/api/login",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y}`}});if(!_.ok)throw new Error((await _.json()).error||"Login failed");const{role:w}=await _.json();f(w==="admin"?"/admin":"/dashboard")}catch{r("Invalid email or password")}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 relative overflow-hidden",children:[d.jsxs("div",{className:"flex flex-col items-center",onClick:g,children:[d.jsx(Hn,{className:"h-16 w-16 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"}),d.jsx("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:i?"Admin Login":"Welcome Back"}),d.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Sign in to your account"})]}),d.jsxs("form",{onSubmit:x,className:"mt-8 space-y-6",children:[d.jsx("div",{className:"rounded-md shadow-sm space-y-4",children:["email","password"].map(k=>d.jsxs("div",{children:[d.jsx("label",{htmlFor:k,className:"block text-sm font-medium text-gray-700 capitalize",children:k}),d.jsxs("div",{className:"mt-1 relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:k==="email"?d.jsx(k_,{className:"h-5 w-5 text-gray-400"}):d.jsx(Zp,{className:"h-5 w-5 text-gray-400"})}),d.jsx("input",{id:k,type:k==="password"?c?"text":"password":k,required:!0,value:t[k],onChange:p,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:k==="email"?"you@example.com":"••••••••"}),k==="password"&&d.jsx("button",{type:"button",onClick:I,className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:c?d.jsx(tR,{className:"h-5 w-5 text-gray-400 hover:text-gray-500 transition-colors"}):d.jsx(N_,{className:"h-5 w-5 text-gray-400 hover:text-gray-500 transition-colors"})})]})]},k))}),n&&d.jsx("div",{className:"rounded-md bg-red-50 p-4",children:d.jsxs("div",{className:"flex",children:[d.jsx("svg",{className:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor",children:d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),d.jsx("h3",{className:"ml-3 text-sm font-medium text-red-800",children:n})]})}),d.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200",children:i?"Sign in as Admin":"Sign in"})]}),d.jsx("div",{className:"text-center",children:d.jsx(On,{to:"/register",className:"font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Don't have an account? Sign up"})})]})})},B3=()=>{const[t,e]=L.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phoneNumber:""}),[n,r]=L.useState(""),[i,s]=L.useState(!1),[o,a]=L.useState(0),[c,u]=L.useState({password:!1,confirmPassword:!1}),f=yo(),p=y=>e({...t,[y.target.id]:y.target.value}),g=()=>a(y=>y===4?(s(!0),0):y+1),I=y=>u(_=>({..._,[y]:!_[y]})),x=async y=>{if(y.preventDefault(),t.password!==t.confirmPassword){r("Passwords do not match");return}if(t.password.length<6){r("Password should be at least 6 characters long");return}try{const{user:_}=await F2(Xu,t.email,t.password);await z2(_,{displayName:`${t.firstName} ${t.lastName}`}),await k(_.uid,{...t,role:i?"admin":"user",fullName:`${t.firstName} ${t.lastName}`,phone:t.phoneNumber,createdAt:new Date}),f("/login")}catch(_){r(_.message)}},k=async(y,_)=>{const w=Fh();await aU(et(w,"users",y),_)},R=(y,_,w,P)=>d.jsxs("div",{children:[d.jsx("label",{htmlFor:y,className:"block text-sm font-medium text-gray-700 capitalize",children:y.replace(/([A-Z])/g," $1").trim()}),d.jsxs("div",{className:"mt-1 relative",children:[d.jsx("span",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:P}),d.jsx("input",{id:y,type:_==="password"?c[y]?"text":"password":_,required:!0,value:t[y],onChange:p,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:w}),_==="password"&&d.jsx("button",{type:"button",onClick:()=>I(y),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:c[y]?d.jsx(tR,{className:"h-5 w-5 text-gray-400"}):d.jsx(N_,{className:"h-5 w-5 text-gray-400"})})]})]});return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 relative overflow-hidden",children:[d.jsxs("div",{className:"flex flex-col items-center",onClick:g,children:[d.jsx(Hn,{className:"h-16 w-16 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"}),d.jsx("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:i?"Admin Registration":"Create Your Account"}),d.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Join our community today"})]}),d.jsxs("form",{onSubmit:x,className:"mt-8 space-y-6",children:[d.jsxs("div",{className:"rounded-md shadow-sm space-y-4",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[R("firstName","text","Hunter",d.jsx(dl,{className:"h-5 w-5 text-gray-400"})),R("lastName","text","Hunt",d.jsx(dl,{className:"h-5 w-5 text-gray-400"}))]}),R("email","email","you@example.com",d.jsx(k_,{className:"h-5 w-5 text-gray-400"})),R("phoneNumber","tel","+256 (000) 000-000",d.jsx(rR,{className:"h-5 w-5 text-gray-400"})),R("password","password","••••••••",d.jsx(Zp,{className:"h-5 w-5 text-gray-400"})),R("confirmPassword","password","••••••••",d.jsx(Zp,{className:"h-5 w-5 text-gray-400"}))]}),n&&d.jsx("div",{className:"rounded-md bg-red-50 p-4",children:d.jsxs("div",{className:"flex",children:[d.jsx("svg",{className:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor",children:d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),d.jsx("h3",{className:"ml-3 text-sm font-medium text-red-800",children:n})]})}),d.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:i?"Register as Admin":"Sign up"})]}),d.jsx("div",{className:"text-center",children:d.jsx(On,{to:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Already have an account? Sign in"})})]})})},z3=({currentUser:t,isOpen:e,onClose:n})=>{const[r,i]=L.useState(""),[s,o]=L.useState([]),[a,c]=L.useState(!1),[u,f]=L.useState(null),p=L.useRef(null),g=()=>{var R;(R=p.current)==null||R.scrollIntoView({behavior:"smooth"})};L.useEffect(()=>{let R;if(e&&(t!=null&&t.email)){const y=Cn(at(de,"messages"),Yu("timestamp","desc"));c(!0),R=kC(y,_=>{const w=_.docs.map(P=>({id:P.id,...P.data()})).filter(P=>P.recipientEmail===t.email||P.senderEmail===t.email);o(w),c(!1),g()},_=>{console.error("Error fetching messages:",_),f("Failed to load messages"),c(!1)})}return()=>R&&R()},[e,t]),L.useEffect(()=>{g()},[s]);const I=async R=>{if(R.preventDefault(),!(!r.trim()||!(t!=null&&t.email)))try{await fo(at(de,"messages"),{content:r.trim(),senderEmail:t.email,senderName:t.displayName||t.email,recipientEmail:"admin@example.com",sender:"User",recipient:"Admin",timestamp:Je()}),i("")}catch(y){console.error("Error sending message:",y),f("Failed to send message")}},x=R=>R?R.toDate().toLocaleString():"Sending...",k=R=>R.senderEmail===(t==null?void 0:t.email)||R.sender==="User";return e?d.jsxs("div",{className:"bg-white h-full flex flex-col",children:[d.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[d.jsx("h2",{className:"text-xl font-semibold",children:"Messages with Admin"}),d.jsx("button",{onClick:n,className:"text-gray-500 hover:text-gray-700 text-2xl",children:"×"})]}),u&&d.jsx("div",{className:"bg-red-100 text-red-700 p-3 m-4 rounded-md",children:u}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 flex flex-col-reverse",children:[d.jsx("div",{ref:p}),a?d.jsx("div",{className:"flex justify-center items-center h-full",children:d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"})}):s.length===0?d.jsx("div",{className:"text-center text-gray-500 mt-4",children:"No messages yet"}):s.map(R=>d.jsx("div",{className:`flex ${k(R)?"justify-end":"justify-start"}`,children:d.jsxs("div",{className:`max-w-[70%] rounded-lg p-3 ${k(R)?"bg-indigo-100":"bg-green-100"}`,children:[d.jsx("div",{className:"text-xs text-gray-600 mb-1",children:k(R)?"You":R.senderName||"Admin"}),d.jsx("p",{className:"break-words",children:R.content}),d.jsx("p",{className:"text-xs mt-1 text-gray-500",children:x(R.timestamp)})]})},R.id))]}),d.jsx("form",{onSubmit:I,className:"p-4 border-t",children:d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",value:r,onChange:R=>i(R.target.value),placeholder:"Type a message to admin...",className:"flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"}),d.jsx("button",{type:"submit",disabled:a||!r.trim(),className:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50",children:"Send"})]})})]}):null},$3=({user:t,onLogout:e})=>{const[n,r]=L.useState([]),[i,s]=L.useState("All"),[o,a]=L.useState(""),[c,u]=L.useState(!0),[f,p]=L.useState(!1),[g,I]=L.useState(!1),x=["All","National IDs","Number Plates","Driving Permits","Academic Documents","Other Items"];L.useEffect(()=>{k()},[i]);const k=async()=>{u(!0);try{let w;i==="All"?w=Cn(at(de,"items"),ii("status","!=","deleted")):w=Cn(at(de,"items"),ii("category","==",i),ii("status","!=","deleted"));const j=(await ho(w)).docs.map(D=>{var v;const C=D.data();return{id:D.id,...C,dateAdded:((v=C.dateAdded)==null?void 0:v.toDate())||new Date}});r(j)}catch(w){console.error("Error fetching items:",w)}finally{u(!1)}},R=w=>w?new Date(w).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Unknown date",y=L.useMemo(()=>n.filter(w=>{var P;return w.name.toLowerCase().includes(o.toLowerCase())||((P=w.details)==null?void 0:P.toLowerCase().includes(o.toLowerCase()))}),[n,o]),_=L.useMemo(()=>({total:n.length,unclaimed:n.filter(w=>w.status==="unclaimed").length,claimed:n.filter(w=>w.status==="claimed").length}),[n]);return d.jsxs("div",{className:"min-h-screen bg-gray-100",children:[d.jsx("nav",{className:"bg-white shadow-sm sticky top-0 z-10",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between h-16 items-center",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx(Hn,{className:"h-8 w-8 text-blue-600"}),d.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"TraceIt"})]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{className:"text-gray-600 hover:text-blue-600 transition","aria-label":"Notifications",children:d.jsx(x3,{className:"h-6 w-6"})}),d.jsx(On,{to:"/profile",className:"text-gray-600 hover:text-blue-600 transition","aria-label":"Profile",children:d.jsx(dl,{className:"h-6 w-6"})}),d.jsx("button",{onClick:()=>p(!f),className:"text-gray-600 hover:text-blue-600 transition","aria-label":f?"Close messages":"Open messages",children:d.jsx(P_,{className:"h-6 w-6"})}),d.jsx(On,{to:"/settings",className:"text-gray-600 hover:text-blue-600 transition","aria-label":"Settings",children:d.jsx(O3,{className:"h-6 w-6"})}),d.jsx("button",{onClick:e,className:"text-gray-600 hover:text-blue-600 transition","aria-label":"Logout",children:d.jsx(nR,{className:"h-6 w-6"})})]})]})})}),d.jsx("main",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex flex-col md:flex-row",children:[d.jsxs("div",{className:`flex-1 transition-all ${f?"md:mr-96":""}`,children:[d.jsxs("div",{className:"px-4 mb-6",children:[d.jsxs("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:["Welcome back, ",t.name]}),d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:"text",placeholder:"Search for items...",className:"w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-shadow duration-300 ease-in-out",value:o,onChange:w=>a(w.target.value)}),d.jsx(Gh,{className:"absolute right-3 top-2.5 h-5 w-5 text-gray-400","aria-hidden":"true"})]})]}),d.jsxs("div",{className:"px-4 mb-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Categories"}),d.jsxs("button",{onClick:()=>I(!g),className:"text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center",children:[g?"Hide Stats":"Show Stats",g?d.jsx(A3,{className:"ml-1 h-4 w-4"}):d.jsx(R3,{className:"ml-1 h-4 w-4"})]})]}),d.jsxs("div",{className:`grid grid-cols-3 gap-4 mb-4 transition-all duration-300 ease-in-out ${g?"opacity-100 max-h-40":"opacity-0 max-h-0 overflow-hidden"}`,children:[d.jsxs("div",{className:"bg-white rounded-lg shadow p-4",children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Total Items"}),d.jsx("p",{className:"text-2xl font-bold text-blue-600",children:_.total})]}),d.jsxs("div",{className:"bg-white rounded-lg shadow p-4",children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Unclaimed"}),d.jsx("p",{className:"text-2xl font-bold text-green-600",children:_.unclaimed})]}),d.jsxs("div",{className:"bg-white rounded-lg shadow p-4",children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Claimed"}),d.jsx("p",{className:"text-2xl font-bold text-yellow-600",children:_.claimed})]})]}),d.jsx("div",{className:"flex space-x-2 overflow-x-auto pb-2 scrollbar-hide",children:x.map(w=>d.jsx("button",{onClick:()=>s(w),className:`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${i===w?"bg-blue-600 text-white shadow-lg transform scale-105":"bg-white text-gray-700 hover:bg-gray-100 hover:shadow"}`,children:w},w))})]}),c?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4",children:y.map(w=>d.jsx(On,{to:`/item/${w.id}`,className:"bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500",children:d.jsxs("div",{className:"p-4",children:[w.imageUrl&&d.jsx("img",{src:w.imageUrl,alt:w.name,className:"w-full h-48 object-cover rounded-lg mb-4"}),d.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:w.name}),d.jsx("p",{className:"text-sm text-gray-600 mt-1",children:w.type}),d.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Location: ",w.location]}),d.jsxs("div",{className:"mt-2 flex justify-between items-center",children:[d.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${w.status==="unclaimed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:w.status}),d.jsxs("span",{className:"text-sm text-gray-500",children:["Added: ",R(w.dateAdded)]})]})]})},w.id))})]}),f&&d.jsx("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-50 md:bg-opacity-0 md:inset-auto md:right-0 md:top-16 md:bottom-0 md:w-96 transition-all duration-300 ease-in-out",children:d.jsxs("div",{className:"bg-white h-full shadow-lg border-l overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"p-4 border-b flex justify-between items-center bg-blue-50",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Messages"}),d.jsx("button",{onClick:()=>p(!1),className:"text-gray-500 hover:text-gray-700 transition-colors duration-300","aria-label":"Close messages panel",children:d.jsx(D_,{className:"h-6 w-6"})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto",children:d.jsx(z3,{currentUser:t,isOpen:f,onClose:()=>p(!1)})})]})})]})})]})},W3=[{id:"items",Icon:b_,label:"Items"},{id:"users",Icon:V3,label:"Users"},{id:"messages",Icon:k3,label:"Messages"}],q3=({activeTab:t,setActiveTab:e})=>d.jsxs("aside",{className:"bg-gradient-to-r from-gray-800 to-gray-900 text-white h-full w-64 flex-shrink-0 transition-all duration-300 overflow-y-auto",children:[d.jsx("div",{className:"p-6",children:d.jsx("h1",{className:"text-xl font-semibold",children:"Asset Management"})}),d.jsx("nav",{className:"mt-5 px-2 space-y-1",children:W3.map(({id:n,Icon:r,label:i})=>d.jsxs("button",{onClick:()=>e(n),className:`${t===n?"bg-gray-700 bg-opacity-50":"hover:bg-gray-700 hover:bg-opacity-30"} group flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200`,children:[d.jsx(r,{className:"mr-3 h-5 w-5"}),i]},n))})]}),H3=({claim:t,item:e,onClose:n,onClaimAction:r})=>{var k;const[i,s]=L.useState([]),[o,a]=L.useState(0),[c,u]=L.useState(!0);L.useEffect(()=>{(async()=>{try{const y=at(de,"claims"),_=Cn(y,ii("itemId","==",e.id)),w=await ho(_),P=[];w.forEach(D=>{P.push({id:D.id,...D.data()})}),s(P);const j=P.findIndex(D=>D.id===t.id);a(j!==-1?j:0),u(!1)}catch(y){console.error("Error fetching claims:",y),u(!1)}})()},[e.id,t.id]);const f=async(R,y)=>{var D;const _=at(de,"users"),w=Cn(_,ii("email","==",y)),P=await ho(w);let j;switch(R){case"approve":j=`Your claim for ${e.name} has been approved. 

Payment Details:
- Amount: UGX ${(D=t.deliveryFee)==null?void 0:D.toLocaleString()}
- Payment Methods:
  1. Mobile Money: 0777123456 (MTN)
  2. Airtel Money: 0703291529 (AIRTEL) 
  3. Bank Transfer: ACC# 1234567890 (Stanbic Bank)

Please complete the payment within 48 hours to proceed with delivery. Include your claim reference number ${t.id} in the payment description.

Location for pickup/delivery will be communicated once payment is confirmed.`;break;case"reject":j=`Your claim for ${e.name} has been reviewed and could not be approved at this time.

You can:
1. Submit additional proof or documentation
2. Update your claim details
3. Contact support for assistance

Your claim reference number is ${t.id}. You're welcome to submit a new claim with updated information.`;break;case"payment_reminder":j=`Reminder: Payment pending for ${e.name}
Please complete your payment within the next 24 hours to secure your claim.`;break;case"payment_received":j=`Payment confirmed for ${e.name}
We'll process your delivery/pickup details shortly.`;break;case"verification_needed":j=`Additional verification needed for ${e.name}
Please provide the requested documentation within 48 hours.`;break;case"delivery_scheduled":j=`Delivery scheduled for ${e.name}
Our team will contact you with specific timing details.`;break;default:j=`Update regarding your claim for ${e.name}:
Please check your dashboard for more details or contact support for assistance.`}try{if(await fo(at(de,"messages"),{content:j,senderEmail:"admin@example.com",recipientEmail:y,sender:"Admin",recipient:"User",senderName:"Admin",timestamp:Je(),messageType:R,claimId:t.id,itemId:e.id}),!P.empty){const C=P.docs[0].data()}}catch(C){console.error("Error sending automatic message:",C)}},p=async(R,y,_)=>{try{const w=i[o];if(await f(R,w.userEmail),R==="approve"){const D=et(de,"items",y);await Tn(D,{status:"claimed",claimedBy:w.userEmail,claimDate:Je()});const C=i.filter(v=>v.id!==_&&v.status==="pending").map(async v=>{const T=et(de,"claims",v.id);await Tn(T,{status:"rejected"}),await f("reject",v.userEmail)});await Promise.all(C)}const P=et(de,"claims",_);await Tn(P,{status:R==="approve"?"approved":"rejected",actionDate:Je(),canReclaim:R==="reject"}),await r(R,y,_);const j=i.map(D=>D.id===_?{...D,status:R==="approve"?"approved":"rejected",canReclaim:R==="reject"}:R==="approve"?{...D,status:"rejected"}:D);s(j)}catch(w){console.error("Error handling claim action:",w)}},g=async R=>{try{const y=i[o];await f(R,y.userEmail);const _=et(de,"claims",y.id);await Tn(_,{lastAction:R,lastActionDate:Je()})}catch(y){console.error("Error handling additional action:",y)}},I=R=>{const y=o+R;y>=0&&y<i.length&&a(y)},x=i[o]||t;return c?d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:d.jsx("div",{className:"bg-white p-6 rounded-lg",children:d.jsx("p",{children:"Loading claims..."})})}):d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h2",{className:"text-xl font-bold",children:"Claim Details"}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("div",{className:"text-sm text-gray-500",children:["Claim ",o+1," of ",i.length]}),d.jsxs("div",{className:"flex space-x-2",children:[d.jsx("button",{onClick:()=>I(-1),disabled:o===0,className:"px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50",children:"Previous"}),d.jsx("button",{onClick:()=>I(1),disabled:o===i.length-1,className:"px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50",children:"Next"})]})]})]}),d.jsxs("div",{className:"mb-6 bg-yellow-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Claims Overview"}),d.jsx("div",{className:"space-y-2",children:i.map((R,y)=>d.jsxs("div",{className:`flex justify-between items-center p-2 rounded
                  ${y===o?"bg-blue-50 border-2 border-blue-200":"bg-white"}
                  ${R.status==="approved"?"bg-green-50":""}
                  ${R.status==="rejected"?"bg-red-50":""}`,children:[d.jsx("span",{children:R.userEmail}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsxs("span",{className:"text-sm text-gray-500",children:["Status: ",R.status||"pending",R.canReclaim&&R.status==="rejected"&&" (Can Reclaim)"]}),y===o&&d.jsx("span",{className:"text-blue-500 text-sm",children:"(Current)"})]})]},R.id))})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4",children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Item Details"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Name:"})," ",e.name]}),d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Category:"})," ",e.category]}),d.jsxs("div",{className:"flex items-start",children:[d.jsx(Hn,{className:"w-4 h-4 mt-1 mr-2 text-gray-500"}),d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Location Found:"})," ",e.location]})]})]})]}),d.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Additional Actions"}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("button",{onClick:()=>g("payment_reminder"),className:"w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2",disabled:x.status!=="approved",children:"Send Payment Reminder"}),d.jsx("button",{onClick:()=>g("payment_received"),className:"w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-2",disabled:x.status!=="approved",children:"Confirm Payment Received"}),d.jsx("button",{onClick:()=>g("verification_needed"),className:"w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mb-2",disabled:x.status!=="pending",children:"Request Verification"}),d.jsx("button",{onClick:()=>g("delivery_scheduled"),className:"w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600",disabled:x.status!=="approved",children:"Send Delivery Details"})]})]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Claimant Details"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Email:"})," ",x.userEmail]}),d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Contact:"})," ",x.contactInformation]}),d.jsxs("div",{className:"flex items-start",children:[d.jsx(P_,{className:"w-4 h-4 mt-1 mr-2 text-gray-500"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:"Identification Details:"}),d.jsx("p",{className:"text-gray-600",children:x.identificationDetails})]})]})]})]}),d.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Delivery Information"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Region:"})," ",x.deliveryRegion]}),d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"District:"})," ",x.deliveryDistrict]}),d.jsxs("div",{className:"flex items-center",children:[d.jsx(iR,{className:"w-4 h-4 mr-2 text-gray-500"}),d.jsxs("p",{children:[d.jsx("span",{className:"font-medium",children:"Delivery Fee:"})," UGX ",(k=x.deliveryFee)==null?void 0:k.toLocaleString()]})]})]})]}),x.additionalNotes&&d.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[d.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Additional Notes"}),d.jsx("p",{className:"text-gray-600",children:x.additionalNotes})]})]})]}),d.jsxs("div",{className:"flex justify-end space-x-3 mt-6",children:[d.jsx("button",{onClick:n,className:"px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50",children:"Close"}),d.jsx("button",{onClick:()=>p("reject",e.id,x.id),disabled:x.status!=="pending",className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50",children:"Reject Claim"}),d.jsx("button",{onClick:()=>p("approve",e.id,x.id),disabled:x.status!=="pending"||e.status==="claimed",className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50",children:"Approve Claim"})]})]})})},K3=({onAddItem:t,onEditItem:e,currentUser:n})=>{const[r,i]=L.useState(""),[s,o]=L.useState(""),[a,c]=L.useState("available"),[u,f]=L.useState(null),[p,g]=L.useState(null),[I,x]=L.useState([]),k=["All Categories","National IDs","Number Plates","Driving Permits","Academic Documents","Other Items"],R=[{id:"available",label:"Available Items"},{id:"pending",label:"Pending Claims"},{id:"claimed",label:"Claimed Items"}];L.useEffect(()=>{const D=at(de,"items"),C=Cn(D,Yu("createdAt","desc")),v=kC(C,T=>{const S=[];T.forEach(A=>{S.push({id:A.id,...A.data()})}),x(S)},T=>{console.error("Error fetching items:",T),y("Error fetching items","error")});return()=>v()},[]);const y=(D,C)=>{g({message:D,type:C}),setTimeout(()=>g(null),3e3)},_=async D=>{try{const C=et(de,"items",D),v=await uo(C);if(!v.exists()){y("Item not found","error");return}const T=v.data();if(T.claims&&T.claims.length>0)for(const S of T.claims){const A=et(de,"claims",S);await Xp(A)}await Xp(C),y("Item deleted successfully","success")}catch(C){console.error("Error deleting item:",C),y("Error deleting item","error")}},w=async(D,C,v)=>{try{const T=et(de,"items",C),S=et(de,"claims",v);D==="approve"?(await Tn(T,{status:"claimed",approvedClaimId:v,approvedAt:Je(),lastUpdated:Je()}),await Tn(S,{status:"approved",approvedAt:Je(),lastUpdated:Je()}),y("Claim approved successfully","success")):(await Tn(T,{status:"unclaimed",claims:[],rejectedAt:Je(),lastUpdated:Je()}),await Tn(S,{status:"rejected",rejectedAt:Je(),lastUpdated:Je()}),y("Claim rejected successfully","success")),f(null)}catch(T){console.error(`Error ${D}ing claim:`,T),y(`Error ${D}ing claim`,"error")}},P=I.filter(D=>{var S,A;const C=(((S=D.name)==null?void 0:S.toLowerCase())||"").includes(r.toLowerCase())||(((A=D.details)==null?void 0:A.toLowerCase())||"").includes(r.toLowerCase()),v=s===""||s==="All Categories"||D.category===s,T=a==="available"?D.status==="unclaimed":a==="pending"?D.status==="pending_claim":D.status==="claimed";return C&&v&&T}),j=async D=>{try{if(D.claims&&D.claims.length>0){const C=et(de,"claims",D.claims[0]),v=await uo(C);v.exists()&&f({claim:{id:v.id,...v.data()},item:D})}}catch(C){console.error("Error fetching claim details:",C),y("Error fetching claim details","error")}};return d.jsxs("div",{className:"p-4",children:[p&&d.jsx("div",{className:`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${p.type==="success"?"bg-green-500":"bg-red-500"} text-white z-50`,children:p.message}),d.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4 mb-6",children:[d.jsx("button",{onClick:t,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",children:"Add New Item"}),d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx("input",{type:"text",placeholder:"Search items...",value:r,onChange:D=>i(D.target.value),className:"w-full pl-10 pr-4 py-2 border rounded-lg"}),d.jsx(Gh,{className:"absolute left-3 top-2.5 h-5 w-5 text-gray-400"})]}),d.jsx("select",{value:s,onChange:D=>o(D.target.value),className:"px-4 py-2 border rounded-lg",children:k.map(D=>d.jsx("option",{value:D,children:D},D))})]})]}),d.jsx("div",{className:"mb-6",children:d.jsx("div",{className:"flex items-center justify-between mb-4",children:d.jsx("div",{className:"flex items-center space-x-4",children:R.map(D=>d.jsx("button",{onClick:()=>c(D.id),className:`px-4 py-2 rounded-lg ${a===D.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:D.label},D.id))})})}),d.jsx("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[d.jsx("thead",{className:"bg-gray-50",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Item"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Location"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),d.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),d.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:P.map(D=>d.jsxs("tr",{children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsxs("div",{className:"flex items-center",children:[D.imageUrl&&d.jsx("img",{src:D.imageUrl,alt:D.name,className:"h-10 w-10 rounded-full mr-3"}),d.jsxs("div",{children:[d.jsx("div",{className:"text-sm font-medium text-gray-900",children:D.name}),d.jsx("div",{className:"text-sm text-gray-500",children:D.details})]})]})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("span",{className:"text-sm text-gray-900",children:D.category})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsxs("div",{className:"flex items-center text-sm text-gray-900",children:[d.jsx(Hn,{className:"h-4 w-4 mr-1"}),D.location]})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${D.status==="unclaimed"?"bg-green-100 text-green-800":D.status==="pending_claim"?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800"}`,children:D.status})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsxs("div",{className:"flex items-center space-x-2",children:[D.status==="pending_claim"&&d.jsx("button",{onClick:()=>j(D),className:"text-blue-600 hover:text-blue-800",children:d.jsx(N_,{className:"h-5 w-5"})}),d.jsx("button",{onClick:()=>e(D),className:"text-yellow-600 hover:text-yellow-800",children:d.jsx(M3,{className:"h-5 w-5"})}),d.jsx("button",{onClick:()=>_(D.id),className:"text-red-600 hover:text-red-800",children:d.jsx(j3,{className:"h-5 w-5"})})]})})]},D.id))})]})})}),u&&d.jsx(H3,{claim:u.claim,item:u.item,onClose:()=>f(null),onClaimAction:w})]})},G3=({users:t,fetchData:e,showToast:n})=>{const r=async s=>{try{const o=et(de,"users",s);await Xp(o),e(),n("User deleted successfully","success")}catch(o){console.error("Error deleting user:",o),n("Failed to delete user. Please try again.","error")}},i=s=>s||"Not provided";return d.jsx("div",{className:"space-y-4 p-4",children:d.jsxs("div",{className:"bg-white shadow overflow-x-auto rounded-lg",children:[d.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[d.jsx("thead",{className:"bg-gray-50",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"User Info"}),d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Profile Details"}),d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contact Details"}),d.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),d.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(s=>{var o,a;return d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d.jsxs("div",{className:"flex items-center",children:[d.jsx("div",{className:"flex-shrink-0 h-10 w-10",children:s.profileImageUrl?d.jsx("img",{src:s.profileImageUrl,alt:s.fullName,className:"h-10 w-10 rounded-full object-cover"}):d.jsx("div",{className:"h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold",children:(o=i(s.fullName))==null?void 0:o.charAt(0).toUpperCase()})}),d.jsxs("div",{className:"ml-4",children:[d.jsx("div",{className:"text-sm font-medium text-gray-900",children:i(s.fullName)}),d.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",(a=s.id)==null?void 0:a.slice(0,8),"..."]})]})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"text-sm text-gray-900",children:[d.jsxs("div",{children:["Address: ",i(s.address)]}),d.jsxs("div",{children:["Gender: ",i(s.gender)]})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"text-sm text-gray-900",children:[d.jsxs("div",{children:["Email: ",i(s.email)]}),d.jsxs("div",{children:["Phone: ",i(s.phone)]})]})}),d.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:[d.jsx("button",{className:"text-indigo-600 hover:text-indigo-900 mr-4 transition duration-150 ease-in-out",children:"Edit"}),d.jsx("button",{className:"text-red-600 hover:text-red-900 transition duration-150 ease-in-out",onClick:()=>r(s.id),children:"Delete"})]})]},s.id)})})]}),t.length===0&&d.jsx("div",{className:"text-center py-4 text-gray-500",children:"No users found"})]})})},Q3=({messages:t=[],users:e=[],fetchData:n,showToast:r})=>{const[i,s]=L.useState(null),[o,a]=L.useState(""),[c,u]=L.useState(t),[f,p]=L.useState(""),[g,I]=L.useState(!1),[x,k]=L.useState({}),R=L.useRef(null),y=L.useRef(null),_=L.useRef(null);L.useEffect(()=>{var T;(T=R.current)==null||T.scrollIntoView({behavior:"smooth"})},[c]),L.useEffect(()=>{var T;(T=y.current)==null||T.scrollIntoView({behavior:"smooth"})},[i]),L.useEffect(()=>{_.current&&(_.current.style.paddingBottom="80px")},[c]),L.useEffect(()=>{const T={},S={};c.forEach(A=>{var N;A.recipientEmail==="admin@example.com"&&!A.read&&(T[A.senderEmail]=(T[A.senderEmail]||0)+1);const b=A.timestamp instanceof Date?A.timestamp:(N=A.timestamp)==null?void 0:N.toDate();b&&(S[A.senderEmail]=Math.max(S[A.senderEmail]||0,b.getTime()))}),k(T)},[c]);const w=async T=>{var S;if(T.preventDefault(),!o.trim()||!i){r("Please select a user and enter a message","error");return}try{const A={content:o.trim(),senderEmail:"admin@example.com",recipientEmail:i.email,sender:"Admin",recipient:"User",timestamp:new Date,read:!1},b=await fo(at(de,"messages"),{...A,timestamp:Je()});u(N=>[...N,{...A,id:b.id}]),a(""),(S=R.current)==null||S.scrollIntoView({behavior:"smooth"})}catch(A){console.error("Error sending message:",A),r("Failed to send message. Please try again.","error")}},P=async T=>{try{const A=c.filter(b=>b.senderEmail===T&&!b.read).map(b=>Tn(et(de,"messages",b.id),{read:!0}));await Promise.all(A),u(b=>b.map(N=>N.senderEmail===T?{...N,read:!0}:N)),k(b=>({...b,[T]:0}))}catch(S){console.error("Error marking messages as read:",S)}},j=T=>T?(T instanceof Date?T:T.toDate()).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"",C=[...e].sort((T,S)=>{var Lt,kn;const A=c.filter(Ee=>Ee.senderEmail===T.email||Ee.recipientEmail===T.email).sort((Ee,z)=>{var pe,ae;const G=Ee.timestamp instanceof Date?Ee.timestamp:(pe=Ee.timestamp)==null?void 0:pe.toDate();return(z.timestamp instanceof Date?z.timestamp:(ae=z.timestamp)==null?void 0:ae.toDate())-G})[0],b=c.filter(Ee=>Ee.senderEmail===S.email||Ee.recipientEmail===S.email).sort((Ee,z)=>{var pe,ae;const G=Ee.timestamp instanceof Date?Ee.timestamp:(pe=Ee.timestamp)==null?void 0:pe.toDate();return(z.timestamp instanceof Date?z.timestamp:(ae=z.timestamp)==null?void 0:ae.toDate())-G})[0];if(!A&&!b)return 0;if(!A)return 1;if(!b)return-1;const N=A.timestamp instanceof Date?A.timestamp:(Lt=A.timestamp)==null?void 0:Lt.toDate();return(b.timestamp instanceof Date?b.timestamp:(kn=b.timestamp)==null?void 0:kn.toDate())-N}).filter(T=>{var S,A;return(((S=T.fullName)==null?void 0:S.toLowerCase())||"").includes(f.toLowerCase())||(((A=T.email)==null?void 0:A.toLowerCase())||"").includes(f.toLowerCase())}),v=[...c].sort((T,S)=>{if(!T.timestamp||!S.timestamp)return 0;const A=T.timestamp instanceof Date?T.timestamp:T.timestamp.toDate(),b=S.timestamp instanceof Date?S.timestamp:S.timestamp.toDate();return A-b}).filter(T=>i&&(T.senderEmail===i.email&&T.recipientEmail==="admin@example.com"||T.senderEmail==="admin@example.com"&&T.recipientEmail===i.email));return d.jsxs("div",{className:"flex h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden",children:[d.jsx("aside",{className:`
        fixed md:relative inset-y-0 left-0 z-50 md:z-auto
        w-[280px] lg:w-[320px]
        bg-white shadow-lg
        transition-transform duration-300
        ${g?"translate-x-0":"-translate-x-full md:translate-x-0"}
      `,children:d.jsxs("div",{className:"flex flex-col h-full",children:[d.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between",children:[d.jsx("h2",{className:"text-white text-lg font-semibold",children:"Messages"}),d.jsx("button",{onClick:()=>I(!1),className:"md:hidden text-white",children:d.jsx(D_,{className:"h-5 w-5"})})]}),d.jsx("div",{className:"p-3 border-b",children:d.jsxs("div",{className:"relative",children:[d.jsx(Gh,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),d.jsx("input",{type:"text",placeholder:"Search users...",value:f,onChange:T=>p(T.target.value),className:"w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),d.jsx("div",{className:"flex-1 overflow-y-auto",children:C.map(T=>d.jsxs("div",{onClick:()=>{s(T),I(!1),P(T.email)},className:`
                  flex items-center gap-3 p-3 cursor-pointer
                  transition-all duration-200
                  hover:bg-gray-50
                  ${(i==null?void 0:i.id)===T.id?"bg-blue-50 border-l-4 border-blue-600":"border-l-4 border-transparent"}
                `,children:[d.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0",children:d.jsx("span",{className:"text-white font-semibold",children:(T.fullName||"U")[0].toUpperCase()})}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"font-medium text-gray-900 truncate",children:T.fullName||"Unnamed User"}),x[T.email]>0&&d.jsx("span",{className:"bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center",children:x[T.email]})]}),d.jsx("p",{className:"text-sm text-gray-500 truncate",children:T.email})]})]},T.id))})]})}),d.jsxs("main",{className:"flex-1 flex flex-col min-w-0",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center gap-3",children:[d.jsx("button",{onClick:()=>I(!0),className:"md:hidden text-white hover:bg-white/10 rounded-full p-2",children:d.jsx(b_,{className:"h-5 w-5"})}),d.jsx("h3",{className:"text-white text-lg font-semibold truncate",children:i?i.fullName:"Select a conversation"})]}),d.jsxs("div",{ref:_,className:"flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50",children:[v.map((T,S)=>d.jsx("div",{ref:S===v.length-1?y:null,className:`flex ${T.sender==="Admin"?"justify-end":"justify-start"}`,children:d.jsxs("div",{className:`
                max-w-[75%] rounded-lg p-3
                ${T.sender==="Admin"?"bg-blue-600 text-white":"bg-white border shadow-sm"}
              `,children:[d.jsx("p",{className:"text-sm break-words",children:T.content}),d.jsx("p",{className:`text-xs mt-1 ${T.sender==="Admin"?"text-blue-100":"text-gray-500"}`,children:j(T.timestamp)})]})},T.id)),d.jsx("div",{ref:R})]}),d.jsx("div",{className:"p-3 bg-white border-t",children:d.jsxs("form",{onSubmit:w,className:"flex gap-2",children:[d.jsx("input",{type:"text",value:o,onChange:T=>a(T.target.value),placeholder:i?`Message ${i.fullName}...`:"Select a user to start messaging",disabled:!i,className:"flex-1 px-4 py-2 rounded-full bg-gray-50 border focus:ring-2 focus:ring-blue-500 disabled:opacity-50"}),d.jsx("button",{type:"submit",disabled:!o.trim()||!i,className:"p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50",children:d.jsx(D3,{className:"h-5 w-5"})})]})})]}),g&&d.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 md:hidden",onClick:()=>I(!1)})]})},Y3=({isOpen:t,onClose:e,onAddItem:n})=>{const r={type:"",name:"",details:"",location:"",category:"",status:"unclaimed",image:null,dateFound:"",uniqueIdentifiers:""},[i,s]=L.useState(r),[o,a]=L.useState(null),[c,u]=L.useState(!1),f=["National IDs","Number Plates","Driving Permits","Academic Documents","Other Items"],p=async x=>{x.preventDefault(),u(!0);try{let k="";if(i.image){const _=XC(w3,`items/${Date.now()}_${i.image.name}`),w=await QC(_,i.image);k=await YC(w.ref)}const R={...i,imageUrl:k,status:"unclaimed",createdAt:Je(),claims:[]};delete R.image;const y=await fo(at(de,"items"),R);n(),s(r),a(null),e()}catch(k){console.error("Error adding item:",k),alert("Error adding item. Please try again.")}finally{u(!1)}},g=x=>{const k=x.target.files[0];if(k){s({...i,image:k});const R=new FileReader;R.onloadend=()=>{a(R.result)},R.readAsDataURL(k)}},I=()=>{s(r),a(null),e()};return t?d.jsx("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm",children:d.jsxs("div",{className:"relative mx-auto p-8 border w-full max-w-md shadow-xl rounded-lg bg-white transform transition-all",style:{maxHeight:"90vh",overflowY:"auto",marginTop:"2rem",marginBottom:"2rem"},children:[d.jsx("div",{className:"absolute top-4 right-4 z-50",children:d.jsx("button",{onClick:I,className:"text-gray-400 hover:text-gray-600 transition",children:d.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Add New Item"}),d.jsxs("form",{onSubmit:p,className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Type"}),d.jsx("input",{type:"text",value:i.type,onChange:x=>s({...i,type:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),d.jsx("input",{type:"text",value:i.name,onChange:x=>s({...i,name:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Details"}),d.jsx("textarea",{value:i.details,onChange:x=>s({...i,details:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",rows:3,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Location Found"}),d.jsx("input",{type:"text",value:i.location,onChange:x=>s({...i,location:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Category"}),d.jsxs("select",{value:i.category,onChange:x=>s({...i,category:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",required:!0,children:[d.jsx("option",{value:"",children:"Select a category"}),f.map(x=>d.jsx("option",{value:x,children:x},x))]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Date Found"}),d.jsx("input",{type:"date",value:i.dateFound,onChange:x=>s({...i,dateFound:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Unique Identifiers"}),d.jsx("input",{type:"text",value:i.uniqueIdentifiers,onChange:x=>s({...i,uniqueIdentifiers:x.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",placeholder:"Serial numbers, distinguishing marks, etc."})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Item Image"}),d.jsx("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:d.jsxs("div",{className:"space-y-1 text-center",children:[o?d.jsx("div",{className:"mb-4",children:d.jsx("img",{src:o,alt:"Preview",className:"mx-auto h-32 w-auto object-cover"})}):d.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48",children:d.jsx("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),d.jsxs("div",{className:"flex text-sm text-gray-600",children:[d.jsxs("label",{className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500",children:[d.jsx("span",{children:"Upload a file"}),d.jsx("input",{type:"file",className:"sr-only",accept:"image/*",onChange:g})]}),d.jsx("p",{className:"pl-1",children:"or drag and drop"})]}),d.jsx("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]}),d.jsxs("div",{className:"flex justify-end space-x-4",children:[d.jsx("button",{type:"button",onClick:I,className:"px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cancel"}),d.jsx("button",{type:"submit",disabled:c,className:`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${c?"opacity-50 cursor-not-allowed":""}`,children:c?"Adding...":"Add Item"})]})]})]})}):null},X3=({onLogout:t})=>{const[e,n]=L.useState("items"),[r,i]=L.useState({items:[],users:[],messages:[]}),[s,o]=L.useState(!0),[a,c]=L.useState(!1),[u,f]=L.useState(null),[p,g]=L.useState(!1);L.useEffect(()=>{x()},[]);const I=y=>{n(y),g(!1)},x=async()=>{o(!0);try{const y=[Cn(at(de,"items"),Yu("dateFound","desc")),Cn(at(de,"users")),Cn(at(de,"messages"),Yu("timestamp","desc"))],[_,w,P]=await Promise.all(y.map(j=>ho(j)));i({items:_.docs.map(j=>({id:j.id,...j.data()})),users:w.docs.map(j=>({id:j.id,...j.data()})),messages:P.docs.map(j=>({id:j.id,...j.data()}))})}catch(y){console.error("Error fetching data:",y),k("Error fetching data. Please try again.","error")}finally{o(!1)}},k=(y,_)=>{f({message:y,type:_}),setTimeout(()=>f(null),3e3)},R={items:d.jsx(K3,{items:r.items,onAddItem:()=>c(!0),onRefresh:x}),users:d.jsx(G3,{users:r.users,fetchData:x,showToast:k}),messages:d.jsx(Q3,{messages:r.messages,users:r.users,fetchData:x,showToast:k})};return d.jsxs("div",{className:"flex h-screen bg-gray-100",children:[d.jsx("div",{className:`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity duration-300 lg:hidden ${p?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>g(!1)}),d.jsx("div",{className:`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${p?"translate-x-0":"-translate-x-full"} lg:relative lg:translate-x-0`,children:d.jsx(q3,{activeTab:e,setActiveTab:I})}),d.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[d.jsx("nav",{className:"bg-white shadow-sm",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between h-16",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx("button",{className:"lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:()=>g(!p),"aria-label":"Toggle menu",children:p?d.jsx(D_,{className:"h-6 w-6"}):d.jsx(b_,{className:"h-6 w-6"})}),d.jsxs("div",{className:"flex-shrink-0 flex items-center ml-4 lg:ml-0",children:[d.jsx(Hn,{className:"h-8 w-8 text-indigo-600"}),d.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-800",children:"Trace-It Admin"})]})]}),d.jsx("div",{className:"flex items-center",children:d.jsxs("button",{onClick:t,className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center text-sm",children:[d.jsx(nR,{className:"h-5 w-5 mr-2"}),d.jsx("span",{className:"hidden sm:inline",children:"Logout"})]})})]})})}),d.jsx("main",{className:"flex-1 overflow-x-hidden overflow-y-auto bg-gray-100",children:d.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[d.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold text-gray-800 mb-6",children:e.charAt(0).toUpperCase()+e.slice(1)}),s?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"})}):d.jsx("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:R[e]})]})})]}),a&&d.jsx(Y3,{isOpen:a,onClose:()=>c(!1),onAddItem:x,showToast:k}),u&&d.jsx("div",{className:`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white shadow-lg transition-opacity duration-300 ${u.type==="success"?"bg-green-500":"bg-red-500"}`,children:u.message})]})},mf={Northern:{districts:["Gulu","Kitgum","Lira","Arua"],baseFee:15e3},Eastern:{districts:["Jinja","Mbale","Soroti","Tororo"],baseFee:12e3},Southern:{districts:["Masaka","Mbarara","Kabale","Rukungiri"],baseFee:13e3},Western:{districts:["Fort Portal","Kasese","Hoima","Masindi"],baseFee:14e3},Central:{districts:["Kampala","Wakiso","Mukono","Entebbe"],baseFee:8e3}},J3=({currentUser:t})=>{const{id:e}=Fk(),n=yo(),[r,i]=L.useState(null),[s,o]=L.useState(!0),[a,c]=L.useState(!1),[u,f]=L.useState(""),[p,g]=L.useState(""),[I,x]=L.useState(0),[k,R]=L.useState(!1),[y,_]=L.useState(0),[w,P]=L.useState({identificationDetails:"",contactInformation:"",additionalNotes:"",deliveryRegion:"",deliveryDistrict:"",deliveryFee:0}),[j,D]=L.useState(null);L.useEffect(()=>{(async()=>{try{const A=et(de,"items",e),b=await uo(A);if(b.exists()){const N={id:b.id,...b.data()};i(N);const qe=Cn(at(de,"claims"),ii("itemId","==",e),ii("userId","==",t.uid)),Lt=await ho(qe);R(!Lt.empty);const kn=Cn(at(de,"claims"),ii("itemId","==",e)),Ee=await ho(kn);_(Ee.size)}}catch(A){console.error("Error:",A),C("Error loading item","error")}finally{o(!1)}})()},[e,t.uid]),L.useEffect(()=>{if(u&&p){const A=mf[u].baseFee;x(A),P(b=>({...b,deliveryRegion:u,deliveryDistrict:p,deliveryFee:A}))}},[u,p]);const C=(S,A)=>{D({message:S,type:A}),setTimeout(()=>D(null),3e3)},v=S=>{const A=S.target.value;f(A),g("")},T=async S=>{S.preventDefault(),o(!0);try{const A={userId:t.uid,userEmail:t.email,itemId:e,status:"pending",timestamp:Je(),...w},b=await fo(at(de,"claims"),A),N=et(de,"items",e);await Tn(N,{status:"pending_claim",claims:lU(b.id),claimCount:y+1,lastUpdated:Je()}),await fo(at(de,"notifications"),{type:"new_claim",itemId:e,claimId:b.id,userId:t.uid,timestamp:Je(),read:!1,message:`New claim submitted for ${r.name}`,userEmail:t.email}),C("Claim submitted successfully","success"),c(!1),R(!0),_(Lt=>Lt+1);const qe=await uo(N);qe.exists()&&i({id:qe.id,...qe.data()})}catch(A){console.error("Error:",A),C("Error submitting claim","error")}finally{o(!1)}};return s?d.jsx("div",{className:"flex justify-center items-center h-screen",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):r?d.jsxs("div",{className:"max-w-4xl mx-auto p-4",children:[j&&d.jsx("div",{className:`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${j.type==="success"?"bg-green-500":"bg-red-500"} text-white`,children:j.message}),d.jsxs("button",{onClick:()=>n("/dashboard"),className:"flex items-center mb-4",children:[d.jsx(eR,{className:"w-5 h-5 mr-2"}),"Back"]}),d.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[r.imageUrl&&d.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-64 object-cover rounded-lg mb-4"}),d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsx("h1",{className:"text-2xl font-bold",children:r.name}),d.jsxs("div",{className:"flex flex-col items-end",children:[d.jsx("span",{className:`px-2 py-1 rounded ${r.status==="unclaimed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:r.status}),y>0&&d.jsxs("span",{className:"text-sm text-gray-600 mt-1",children:[y," claim",y!==1?"s":""," submitted"]})]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-start",children:[d.jsx(Hn,{className:"w-5 h-5 mt-1 mr-2"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:"Location"}),d.jsx("p",{className:"text-gray-600",children:r.location})]})]}),d.jsxs("div",{className:"flex items-start",children:[d.jsx(P_,{className:"w-5 h-5 mt-1 mr-2"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:"Details"}),d.jsx("p",{className:"text-gray-600",children:r.details})]})]})]}),k?d.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg text-blue-700",children:"You have already submitted a claim for this item"}):d.jsx("button",{onClick:()=>c(!0),className:"w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors",children:"Submit a Claim"}),a&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md w-full",children:[d.jsx("h2",{className:"text-xl font-bold mb-4",children:"Claim Form"}),d.jsxs("form",{onSubmit:T,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium mb-1",children:"Identification Details"}),d.jsx("textarea",{required:!0,className:"w-full border rounded p-2",rows:"3",placeholder:"Provide details to prove ownership...",value:w.identificationDetails,onChange:S=>P({...w,identificationDetails:S.target.value})})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium mb-1",children:"Contact Information"}),d.jsx("input",{type:"text",required:!0,className:"w-full border rounded p-2",placeholder:"Phone number or alternative contact...",value:w.contactInformation,onChange:S=>P({...w,contactInformation:S.target.value})})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"block text-sm font-medium",children:"Delivery Location"}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("select",{required:!0,className:"border rounded p-2",value:u,onChange:v,children:[d.jsx("option",{value:"",children:"Select Region"}),Object.keys(mf).map(S=>d.jsx("option",{value:S,children:S},S))]}),d.jsxs("select",{required:!0,className:"border rounded p-2",value:p,onChange:S=>g(S.target.value),disabled:!u,children:[d.jsx("option",{value:"",children:"Select District"}),u&&mf[u].districts.map(S=>d.jsx("option",{value:S,children:S},S))]})]}),I>0&&d.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[d.jsx(iR,{className:"w-4 h-4 mr-1"}),"Delivery Fee: UGX ",I.toLocaleString()]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium mb-1",children:"Additional Notes"}),d.jsx("textarea",{className:"w-full border rounded p-2",rows:"2",placeholder:"Any additional information...",value:w.additionalNotes,onChange:S=>P({...w,additionalNotes:S.target.value})})]}),d.jsxs("div",{className:"flex justify-end space-x-3",children:[d.jsx("button",{type:"button",onClick:()=>c(!1),className:"px-4 py-2 border rounded text-gray-600 hover:bg-gray-50",children:"Cancel"}),d.jsx("button",{type:"submit",disabled:s||!u||!p,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:s?"Submitting...":"Submit Claim"})]})]})]})})]})]}):d.jsxs("div",{className:"text-center p-4",children:[d.jsx("p",{children:"Item not found"}),d.jsx("button",{onClick:()=>n("/dashboard"),children:"Back to Dashboard"})]})},Z3=()=>{const t=yo(),[e,n]=L.useState({fullName:"",email:"",phone:"",address:"",gender:"",profileImageUrl:"",bio:"",occupation:"",birthdate:"",website:""}),[r,i]=L.useState(!1),[s,o]=L.useState({loading:!0,error:null,success:""}),[a,c]=L.useState(null),[u,f]=L.useState(null),{currentUser:p}=A1(),g=Fh(),I=JC();L.useEffect(()=>{(async()=>{try{if(!p)throw new Error("No user logged in");const _=(await uo(et(g,"users",p.uid))).data()||{};n({..._,email:p.email})}catch{o(w=>({...w,error:"Failed to load profile"}))}finally{o(_=>({..._,loading:!1}))}})()},[p,g]);const x=y=>{const _=y.target.files[0];if(_){c(_);const w=new FileReader;w.onloadend=()=>{f(w.result)},w.readAsDataURL(_)}},k=async y=>{y.preventDefault(),o(_=>({..._,loading:!0,error:null}));try{let _=e.profileImageUrl;if(a){const w=XC(I,`profile-images/${p.uid}`);await QC(w,a),_=await YC(w)}await Tn(et(g,"users",p.uid),{...e,profileImageUrl:_,updatedAt:new Date}),n(w=>({...w,profileImageUrl:_})),o(w=>({...w,success:"Profile updated successfully ✨"})),i(!1),setTimeout(()=>o(w=>({...w,success:""})),3e3)}catch{o(w=>({...w,error:"Update failed"}))}finally{o(_=>({..._,loading:!1}))}};if(s.loading)return d.jsx("div",{className:"flex justify-center items-center h-screen bg-gradient-to-br from-violet-50 to-indigo-100",children:d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"}),d.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:d.jsx("div",{className:"h-8 w-8 bg-white rounded-full"})})]})});const R=[{name:"fullName",icon:dl,type:"text",placeholder:"Your Full Name"},{name:"phone",icon:rR,type:"tel",placeholder:"Your Phone Number"},{name:"address",icon:Hn,type:"text",placeholder:"Your Address"},{name:"occupation",icon:lE,type:"text",placeholder:"Your Occupation"},{name:"website",icon:N3,type:"url",placeholder:"Your Website"},{name:"birthdate",icon:S3,type:"date",placeholder:"Your Birthdate"},{name:"gender",icon:dl,type:"select",options:["male","female","other"]},{name:"bio",icon:k_,type:"textarea",placeholder:"Tell us about yourself"}];return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 py-12 px-4",children:d.jsx("div",{className:"max-w-5xl mx-auto",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",children:d.jsxs("div",{className:"md:flex",children:[d.jsxs("div",{className:"md:w-1/3 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 p-8 flex flex-col items-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 w-full h-full opacity-10",children:d.jsx("div",{className:"absolute inset-0 bg-pattern"})}),d.jsxs("div",{className:"relative z-10",children:[d.jsx("div",{className:"relative group",children:d.jsxs("div",{className:"relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 transform hover:scale-105",children:[d.jsx("img",{src:u||e.profileImageUrl||"https://via.placeholder.com/150",alt:"Profile",className:"w-full h-full object-cover"}),r&&d.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[d.jsx(C3,{className:"h-8 w-8 text-white"}),d.jsx("input",{type:"file",accept:"image/*",onChange:x,className:"hidden"})]})]})}),d.jsx("h2",{className:"mt-6 text-3xl font-bold text-white text-center",children:e.fullName}),d.jsx("p",{className:"mt-2 text-indigo-200 text-center",children:e.email}),e.occupation&&d.jsxs("p",{className:"mt-2 text-indigo-200 text-center flex items-center justify-center",children:[d.jsx(lE,{className:"h-4 w-4 mr-2"}),e.occupation]})]})]}),d.jsxs("div",{className:"flex-1 p-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-8",children:[d.jsxs("h3",{className:"text-3xl font-bold text-gray-800 flex items-center",children:["Profile Details",r&&d.jsx("span",{className:"ml-3 text-sm text-indigo-600",children:"(Editing Mode)"})]}),d.jsxs("button",{onClick:()=>t("/dashboard"),className:"flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300",children:[d.jsx(eR,{className:"h-5 w-5 mr-2"}),"Back to Dashboard"]})]}),s.error&&d.jsx("div",{className:"mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md animate-fadeIn",children:s.error}),s.success&&d.jsx("div",{className:"mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md animate-fadeIn",children:s.success}),d.jsxs("form",{onSubmit:k,className:"space-y-6",children:[d.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:R.map(({name:y,icon:_,type:w,placeholder:P,options:j})=>d.jsxs("div",{className:`${w==="textarea"?"md:col-span-2":""}`,children:[d.jsx("label",{className:"text-sm font-medium text-gray-700 mb-1 block",children:y.charAt(0).toUpperCase()+y.slice(1).replace(/([A-Z])/g," $1")}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(_,{className:"h-5 w-5 text-gray-400"})}),w==="select"?d.jsxs("select",{name:y,value:e[y],onChange:D=>n(C=>({...C,[y]:D.target.value})),disabled:!r,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200",children:[d.jsxs("option",{value:"",children:["Select ",y]}),j.map(D=>d.jsx("option",{value:D,children:D.charAt(0).toUpperCase()+D.slice(1)},D))]}):w==="textarea"?d.jsx("textarea",{name:y,value:e[y],onChange:D=>n(C=>({...C,[y]:D.target.value})),disabled:!r,placeholder:P,rows:"4",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"}):d.jsx("input",{type:w,name:y,value:e[y],onChange:D=>n(C=>({...C,[y]:D.target.value})),disabled:!r,placeholder:P,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"})]})]},y))}),d.jsx("div",{className:"flex justify-end space-x-4 pt-6",children:r?d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200",children:"Cancel"}),d.jsxs("button",{type:"submit",className:"px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center",children:[d.jsx(P3,{className:"h-5 w-5 mr-2"}),"Save Changes"]})]}):d.jsxs("button",{type:"button",onClick:()=>i(!0),className:"px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center",children:[d.jsx(b3,{className:"h-5 w-5 mr-2"}),"Edit Profile"]})})]})]})]})})})})},e6=()=>{const[t,e]=L.useState(null),[n,r]=L.useState(null),[i,s]=L.useState(!0),[o,a]=L.useState("");L.useEffect(()=>{fetch("http://127.0.0.1:5000/api/hello").then(g=>g.json()).then(g=>a(g.message)).catch(g=>console.error("Error fetching data from backend:",g));const p=q2(Xu,async g=>{if(e(g),g){const I=await c(g.uid);r(I)}else r(null);s(!1)});return()=>p()},[]);const c=async p=>{const g=Fh(),I=await uo(et(g,"users",p));return I.exists()?I.data().role:null},u=p=>{console.log("User logged in with token:",p)},f=()=>{Xu.signOut()};return i?d.jsx("div",{className:"flex items-center justify-center min-h-screen",children:d.jsx("div",{className:"text-lg",children:"Loading..."})}):d.jsx(ob,{basename:"/",children:d.jsxs("div",{className:"min-h-screen bg-gray-100",children:[d.jsx("div",{className:"text-center py-4",children:o&&d.jsx("p",{className:"text-xl font-semibold text-green-600",children:o})}),d.jsxs(Zk,{children:[d.jsx(Zn,{path:"/",element:d.jsx(F3,{})}),d.jsx(Zn,{path:"/login",element:d.jsx(U3,{onLogin:u})}),d.jsx(Zn,{path:"/register",element:d.jsx(B3,{})}),d.jsx(Zn,{path:"/dashboard",element:t&&n==="user"?d.jsx($3,{user:t,onLogout:f}):d.jsx(Xo,{to:"/login"})}),d.jsx(Zn,{path:"/profile",element:t?d.jsx(Z3,{user:t}):d.jsx(Xo,{to:"/login"})}),d.jsx(Zn,{path:"/admin",element:t&&n==="admin"?d.jsx(X3,{onLogout:f}):d.jsx(Xo,{to:"/login"})}),d.jsx(Zn,{path:"/item/:id",element:t?d.jsx(J3,{currentUser:t}):d.jsx(Xo,{to:"/login"})}),d.jsx(Zn,{path:"*",element:d.jsx(Xo,{to:"/",replace:!0})})]})]})})};try{gf.createRoot(document.getElementById("root")).render(d.jsx(im.StrictMode,{children:d.jsx(e6,{})}))}catch(t){console.error("Application failed to mount:",t)}
//# sourceMappingURL=index-DkDOmiGf.js.map
