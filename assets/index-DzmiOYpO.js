var Im=Object.defineProperty;var Am=(e,t,n)=>t in e?Im(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ci=(e,t,n)=>Am(e,typeof t!="symbol"?t+"":t,n);function Pm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},Wo={},$d={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),Om=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),Um=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),Cu=Symbol.iterator;function Hm(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jd=Object.assign,Qd={};function hr(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Yd}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kd(){}Kd.prototype=hr.prototype;function dl(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Yd}var pl=dl.prototype=new Kd;pl.constructor=dl;Jd(pl,hr.prototype);pl.isPureReactComponent=!0;var Iu=Array.isArray,Xd=Object.prototype.hasOwnProperty,hl={current:null},Zd={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xd.call(t,r)&&!Zd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yi,type:e,key:o,ref:s,props:i,_owner:hl.current}}function Wm(e,t){return{$$typeof:yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===yi}function qm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qm(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case yi:case Om:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+fs(s,0):r,Iu(i)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),Ki(i,t,n,"",function(u){return u})):i!=null&&(fl(i)&&(i=Wm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Au,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Iu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+fs(o,a);s+=Ki(o,t,n,l,i)}else if(l=Hm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+fs(o,a++),s+=Ki(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ii(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Xi={transition:null},Gm={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Xi,ReactCurrentOwner:hl};function tp(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=hr;$.Fragment=Rm;$.Profiler=_m;$.PureComponent=dl;$.StrictMode=Lm;$.Suspense=Fm;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;$.act=tp;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=hl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xd.call(t,l)&&!Zd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yi,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:Dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mm,_context:e},e.Consumer=e};$.createElement=ep;$.createFactory=function(e){var t=ep.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:zm,render:e}};$.isValidElement=fl;$.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Vm}};$.memo=function(e,t){return{$$typeof:Um,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Xi.transition;Xi.transition={};try{e()}finally{Xi.transition=t}};$.unstable_act=tp;$.useCallback=function(e,t){return Le.current.useCallback(e,t)};$.useContext=function(e){return Le.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};$.useEffect=function(e,t){return Le.current.useEffect(e,t)};$.useId=function(){return Le.current.useId()};$.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Le.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};$.useRef=function(e){return Le.current.useRef(e)};$.useState=function(e){return Le.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Le.current.useTransition()};$.version="18.3.1";$d.exports=$;var S=$d.exports;const Qt=cl(S),$m=Pm({__proto__:null,default:Qt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=S,Jm=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),Km=Object.prototype.hasOwnProperty,Xm=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function np(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Km.call(t,r)&&!Zm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jm,type:e,key:o,ref:s,props:i,_owner:Xm.current}}Wo.Fragment=Qm;Wo.jsx=np;Wo.jsxs=np;Gd.exports=Wo;var c=Gd.exports,ta={},rp={exports:{}},Xe={},ip={exports:{}},op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var w=R.length;R.push(B);e:for(;0<w;){var F=w-1>>>1,H=R[F];if(0<i(H,B))R[F]=B,R[w]=H,w=F;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],w=R.pop();if(w!==B){R[0]=w;e:for(var F=0,H=R.length,k=H>>>1;F<k;){var oe=2*(F+1)-1,ke=R[oe],se=oe+1,gt=R[se];if(0>i(ke,w))se<H&&0>i(gt,ke)?(R[F]=gt,R[se]=w,F=se):(R[F]=ke,R[oe]=w,F=oe);else if(se<H&&0>i(gt,w))R[F]=gt,R[se]=w,F=se;else break e}}return B}function i(R,B){var w=R.sortIndex-B.sortIndex;return w!==0?w:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,f=3,h=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function E(R){if(v=!1,x(R),!y)if(n(l)!==null)y=!0,q(N);else{var B=n(u);B!==null&&X(E,B.startTime-R)}}function N(R,B){y=!1,v&&(v=!1,m(O),O=-1),h=!0;var w=f;try{for(x(B),p=n(l);p!==null&&(!(p.expirationTime>B)||R&&!M());){var F=p.callback;if(typeof F=="function"){p.callback=null,f=p.priorityLevel;var H=F(p.expirationTime<=B);B=e.unstable_now(),typeof H=="function"?p.callback=H:p===n(l)&&r(l),x(B)}else r(l);p=n(l)}if(p!==null)var k=!0;else{var oe=n(u);oe!==null&&X(E,oe.startTime-B),k=!1}return k}finally{p=null,f=w,h=!1}}var b=!1,C=null,O=-1,D=5,I=-1;function M(){return!(e.unstable_now()-I<D)}function U(){if(C!==null){var R=e.unstable_now();I=R;var B=!0;try{B=C(!0,R)}finally{B?Y():(b=!1,C=null)}}else b=!1}var Y;if(typeof g=="function")Y=function(){g(U)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,_=Z.port2;Z.port1.onmessage=U,Y=function(){_.postMessage(null)}}else Y=function(){T(U,0)};function q(R){C=R,b||(b=!0,Y())}function X(R,B){O=T(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,q(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var w=f;f=B;try{return R()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var w=f;f=R;try{return B()}finally{f=w}},e.unstable_scheduleCallback=function(R,B,w){var F=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?F+w:F):w=F,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=w+H,R={id:d++,callback:B,priorityLevel:R,startTime:w,expirationTime:H,sortIndex:-1},w>F?(R.sortIndex=w,t(u,R),n(l)===null&&R===n(u)&&(v?(m(O),O=-1):v=!0,X(E,w-F))):(R.sortIndex=H,t(l,R),y||h||(y=!0,q(N))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var B=f;return function(){var w=f;f=B;try{return R.apply(this,arguments)}finally{f=w}}}})(op);ip.exports=op;var eg=ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg=S,Ke=eg;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sp=new Set,Jr={};function In(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Jr[e]=t,e=0;e<t.length;e++)sp.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,ng=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},Ou={};function rg(e){return na.call(Ou,e)?!0:na.call(Pu,e)?!1:ng.test(e)?Ou[e]=!0:(Pu[e]=!0,!1)}function ig(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function og(e,t,n,r){if(t===null||typeof t>"u"||ig(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,gl);Ne[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,gl);Ne[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,gl);Ne[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(og(t,n,i,r)&&(n=null),r||i===null?rg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),lp=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),up=Symbol.for("react.offscreen"),Ru=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,ms;function Pr(e){if(ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ms=t&&t[1]||""}return`
`+ms+e}var gs=!1;function ys(e,t){if(!e||gs)return"";gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function sg(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=ys(e.type,!1),e;case 11:return e=ys(e.type.render,!1),e;case 1:return e=ys(e.type,!0),e;default:return""}}function sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Dn:return"Portal";case ra:return"Profiler";case xl:return"StrictMode";case ia:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lp:return(e.displayName||"Context")+".Consumer";case ap:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:sa(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return sa(e(t))}catch{}}return null}function ag(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lg(e){var t=cp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=lg(e))}function dp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function aa(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pp(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function la(e,t){pp(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Or(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function hp(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ug=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){ug.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function gp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cg=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(cg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,Xn=null,Zn=null;function zu(e){if(e=vi(e)){if(typeof ma!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Yo(t),ma(e.stateNode,e.type,t))}}function xp(e){Xn?Zn?Zn.push(e):Zn=[e]:Xn=e}function wp(){if(Xn){var e=Xn,t=Zn;if(Zn=Xn=null,zu(e),t)for(e=0;e<t.length;e++)zu(t[e])}}function vp(e,t){return e(t)}function kp(){}var xs=!1;function bp(e,t,n){if(xs)return e(t,n);xs=!0;try{return vp(e,t,n)}finally{xs=!1,(Xn!==null||Zn!==null)&&(kp(),wp())}}function Kr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var ga=!1;if(Lt)try{var br={};Object.defineProperty(br,"passive",{get:function(){ga=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{ga=!1}function dg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Dr=!1,fo=null,mo=!1,ya=null,pg={onError:function(e){Dr=!0,fo=e}};function hg(e,t,n,r,i,o,s,a,l){Dr=!1,fo=null,dg.apply(pg,arguments)}function fg(e,t,n,r,i,o,s,a,l){if(hg.apply(this,arguments),Dr){if(Dr){var u=fo;Dr=!1,fo=null}else throw Error(A(198));mo||(mo=!0,ya=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(An(e)!==e)throw Error(A(188))}function mg(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fu(i),e;if(o===r)return Fu(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Ep(e){return e=mg(e),e!==null?Tp(e):null}function Tp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tp(e);if(t!==null)return t;e=e.sibling}return null}var Np=Ke.unstable_scheduleCallback,Uu=Ke.unstable_cancelCallback,gg=Ke.unstable_shouldYield,yg=Ke.unstable_requestPaint,ge=Ke.unstable_now,xg=Ke.unstable_getCurrentPriorityLevel,bl=Ke.unstable_ImmediatePriority,jp=Ke.unstable_UserBlockingPriority,go=Ke.unstable_NormalPriority,wg=Ke.unstable_LowPriority,Cp=Ke.unstable_IdlePriority,qo=null,St=null;function vg(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Sg,kg=Math.log,bg=Math.LN2;function Sg(e){return e>>>=0,e===0?32:31-(kg(e)/bg|0)|0}var Ri=64,Li=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Rr(a):(o&=s,o!==0&&(r=Rr(o)))}else s=n&~i,s!==0?r=Rr(s):o!==0&&(r=Rr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ht(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Eg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ip(){var e=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Ng(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Ap(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pp,El,Op,Rp,Lp,wa=!1,_i=[],Kt=null,Xt=null,Zt=null,Xr=new Map,Zr=new Map,Vt=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=vi(t),t!==null&&El(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cg(e,t,n,r,i){switch(t){case"focusin":return Kt=Sr(Kt,e,t,n,r,i),!0;case"dragenter":return Xt=Sr(Xt,e,t,n,r,i),!0;case"mouseover":return Zt=Sr(Zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xr.set(o,Sr(Xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zr.set(o,Sr(Zr.get(o)||null,e,t,n,r,i)),!0}return!1}function _p(e){var t=wn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=Sp(n),t!==null){e.blockedOn=t,Lp(e.priority,function(){Op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=vi(n),t!==null&&El(t),e.blockedOn=n,!1;t.shift()}return!0}function Hu(e,t,n){Zi(e)&&n.delete(t)}function Ig(){wa=!1,Kt!==null&&Zi(Kt)&&(Kt=null),Xt!==null&&Zi(Xt)&&(Xt=null),Zt!==null&&Zi(Zt)&&(Zt=null),Xr.forEach(Hu),Zr.forEach(Hu)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Ig)))}function ei(e){function t(i){return Er(i,e)}if(0<_i.length){Er(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Er(Kt,e),Xt!==null&&Er(Xt,e),Zt!==null&&Er(Zt,e),Xr.forEach(t),Zr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)_p(n),n.blockedOn===null&&Vt.shift()}var er=zt.ReactCurrentBatchConfig,xo=!0;function Ag(e,t,n,r){var i=ee,o=er.transition;er.transition=null;try{ee=1,Tl(e,t,n,r)}finally{ee=i,er.transition=o}}function Pg(e,t,n,r){var i=ee,o=er.transition;er.transition=null;try{ee=4,Tl(e,t,n,r)}finally{ee=i,er.transition=o}}function Tl(e,t,n,r){if(xo){var i=va(e,t,n,r);if(i===null)Is(e,t,r,wo,n),Bu(e,r);else if(Cg(i,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<jg.indexOf(e)){for(;i!==null;){var o=vi(i);if(o!==null&&Pp(o),o=va(e,t,n,r),o===null&&Is(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var wo=null;function va(e,t,n,r){if(wo=null,e=kl(r),e=wn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Mp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xg()){case bl:return 1;case jp:return 4;case go:case wg:return 16;case Cp:return 536870912;default:return 16}default:return 16}}var $t=null,Nl=null,eo=null;function Dp(){if(eo)return eo;var e,t=Nl,n=t.length,r,i="value"in $t?$t.value:$t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function Wu(){return!1}function Ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mi:Wu,this.isPropagationStopped=Wu,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Ze(fr),wi=he({},fr,{view:0,detail:0}),Og=Ze(wi),vs,ks,Tr,Vo=he({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(vs=e.screenX-Tr.screenX,ks=e.screenY-Tr.screenY):ks=vs=0,Tr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),qu=Ze(Vo),Rg=he({},Vo,{dataTransfer:0}),Lg=Ze(Rg),_g=he({},wi,{relatedTarget:0}),bs=Ze(_g),Mg=he({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Ze(Mg),zg=he({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=Ze(zg),Ug=he({},fr,{data:0}),Vu=Ze(Ug),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function Cl(){return qg}var Vg=he({},wi,{key:function(e){if(e.key){var t=Bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gg=Ze(Vg),$g=he({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Ze($g),Yg=he({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),Jg=Ze(Yg),Qg=he({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=Ze(Qg),Xg=he({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Ze(Xg),ey=[9,13,27,32],Il=Lt&&"CompositionEvent"in window,zr=null;Lt&&"documentMode"in document&&(zr=document.documentMode);var ty=Lt&&"TextEvent"in window&&!zr,zp=Lt&&(!Il||zr&&8<zr&&11>=zr),$u=" ",Yu=!1;function Fp(e,t){switch(e){case"keyup":return ey.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function ny(e,t){switch(e){case"compositionend":return Up(t);case"keypress":return t.which!==32?null:(Yu=!0,$u);case"textInput":return e=t.data,e===$u&&Yu?null:e;default:return null}}function ry(e,t){if(Fn)return e==="compositionend"||!Il&&Fp(e,t)?(e=Dp(),eo=Nl=$t=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zp&&t.locale!=="ko"?null:t.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!iy[e.type]:t==="textarea"}function Bp(e,t,n,r){xp(r),t=vo(t,"onChange"),0<t.length&&(n=new jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ti=null;function oy(e){Xp(e,0)}function Go(e){var t=Hn(e);if(dp(t))return e}function sy(e,t){if(e==="change")return t}var Hp=!1;if(Lt){var Ss;if(Lt){var Es="oninput"in document;if(!Es){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Es=typeof Qu.oninput=="function"}Ss=Es}else Ss=!1;Hp=Ss&&(!document.documentMode||9<document.documentMode)}function Ku(){Fr&&(Fr.detachEvent("onpropertychange",Wp),ti=Fr=null)}function Wp(e){if(e.propertyName==="value"&&Go(ti)){var t=[];Bp(t,ti,e,kl(e)),bp(oy,t)}}function ay(e,t,n){e==="focusin"?(Ku(),Fr=t,ti=n,Fr.attachEvent("onpropertychange",Wp)):e==="focusout"&&Ku()}function ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(ti)}function uy(e,t){if(e==="click")return Go(t)}function cy(e,t){if(e==="input"||e==="change")return Go(t)}function dy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:dy;function ni(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!na.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vp(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function py(e){var t=Vp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&Al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zu(n,o);var s=Zu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hy=Lt&&"documentMode"in document&&11>=document.documentMode,Un=null,ka=null,Ur=null,ba=!1;function ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||Un==null||Un!==ho(r)||(r=Un,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ni(Ur,r)||(Ur=r,r=vo(ka,"onSelect"),0<r.length&&(t=new jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Un)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Ts={},Gp={};Lt&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function $o(e){if(Ts[e])return Ts[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gp)return Ts[e]=t[n];return e}var $p=$o("animationend"),Yp=$o("animationiteration"),Jp=$o("animationstart"),Qp=$o("transitionend"),Kp=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Kp.set(e,t),In(t,[e])}for(var Ns=0;Ns<tc.length;Ns++){var js=tc[Ns],fy=js.toLowerCase(),my=js[0].toUpperCase()+js.slice(1);cn(fy,"on"+my)}cn($p,"onAnimationEnd");cn(Yp,"onAnimationIteration");cn(Jp,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Qp,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fg(r,t,void 0,e),e.currentTarget=null}function Xp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;nc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;nc(i,a,u),o=l}}}if(mo)throw e=ya,mo=!1,ya=null,e}function ae(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var r=e+"__bubble";n.has(r)||(Zp(t,e,2,!1),n.add(r))}function Cs(e,t,n){var r=0;t&&(r|=4),Zp(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[zi]){e[zi]=!0,sp.forEach(function(n){n!=="selectionchange"&&(gy.has(n)||Cs(n,!1,e),Cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,Cs("selectionchange",!1,t))}}function Zp(e,t,n,r){switch(Mp(t)){case 1:var i=Ag;break;case 4:i=Pg;break;default:i=Tl}n=i.bind(null,t,n,e),i=void 0,!ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=wn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bp(function(){var u=o,d=kl(n),p=[];e:{var f=Kp.get(e);if(f!==void 0){var h=jl,y=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":h=Gg;break;case"focusin":y="focus",h=bs;break;case"focusout":y="blur",h=bs;break;case"beforeblur":case"afterblur":h=bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Jg;break;case $p:case Yp:case Jp:h=Dg;break;case Qp:h=Kg;break;case"scroll":h=Og;break;case"wheel":h=Zg;break;case"copy":case"cut":case"paste":h=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gu}var v=(t&4)!==0,T=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,m!==null&&(E=Kr(g,m),E!=null&&v.push(ii(g,E,x)))),T)break;g=g.return}0<v.length&&(f=new h(f,y,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==fa&&(y=n.relatedTarget||n.fromElement)&&(wn(y)||y[_t]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?wn(y):null,y!==null&&(T=An(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(v=qu,E="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gu,E="onPointerLeave",m="onPointerEnter",g="pointer"),T=h==null?f:Hn(h),x=y==null?f:Hn(y),f=new v(E,g+"leave",h,n,d),f.target=T,f.relatedTarget=x,E=null,wn(d)===u&&(v=new v(m,g+"enter",y,n,d),v.target=x,v.relatedTarget=T,E=v),T=E,h&&y)t:{for(v=h,m=y,g=0,x=v;x;x=_n(x))g++;for(x=0,E=m;E;E=_n(E))x++;for(;0<g-x;)v=_n(v),g--;for(;0<x-g;)m=_n(m),x--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=_n(v),m=_n(m)}v=null}else v=null;h!==null&&rc(p,f,h,v,!1),y!==null&&T!==null&&rc(p,T,y,v,!0)}}e:{if(f=u?Hn(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var N=sy;else if(Ju(f))if(Hp)N=cy;else{N=ly;var b=ay}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=uy);if(N&&(N=N(e,u))){Bp(p,N,n,d);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ua(f,"number",f.value)}switch(b=u?Hn(u):window,e){case"focusin":(Ju(b)||b.contentEditable==="true")&&(Un=b,ka=u,Ur=null);break;case"focusout":Ur=ka=Un=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,ec(p,n,d);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":ec(p,n,d)}var C;if(Il)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Fn?Fp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(zp&&n.locale!=="ko"&&(Fn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Fn&&(C=Dp()):($t=d,Nl="value"in $t?$t.value:$t.textContent,Fn=!0)),b=vo(u,O),0<b.length&&(O=new Vu(O,e,null,n,d),p.push({event:O,listeners:b}),C?O.data=C:(C=Up(n),C!==null&&(O.data=C)))),(C=ty?ny(e,n):ry(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(d=new Vu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Xp(p,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kr(e,n),o!=null&&r.unshift(ii(e,o,i)),o=Kr(e,t),o!=null&&r.push(ii(e,o,i))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Kr(n,o),l!=null&&s.unshift(ii(n,l,a))):i||(l=Kr(n,o),l!=null&&s.push(ii(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var yy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function ic(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(xy,"")}function Fi(e,t,n){if(t=ic(t),ic(e)!==t&&n)throw Error(A(425))}function ko(){}var Sa=null,Ea=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,oc=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof oc<"u"?function(e){return oc.resolve(null).then(e).catch(ky)}:Na;function ky(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ei(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),kt="__reactFiber$"+mr,oi="__reactProps$"+mr,_t="__reactContainer$"+mr,ja="__reactEvents$"+mr,by="__reactListeners$"+mr,Sy="__reactHandles$"+mr;function wn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sc(e);e!==null;){if(n=e[kt])return n;e=sc(e)}return t}e=n,n=e.parentNode}return null}function vi(e){return e=e[kt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Yo(e){return e[oi]||null}var Ca=[],Wn=-1;function dn(e){return{current:e}}function le(e){0>Wn||(e.current=Ca[Wn],Ca[Wn]=null,Wn--)}function re(e,t){Wn++,Ca[Wn]=e.current,e.current=t}var un={},Ae=dn(un),Fe=dn(!1),En=un;function sr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function bo(){le(Fe),le(Ae)}function ac(e,t,n){if(Ae.current!==un)throw Error(A(168));re(Ae,t),re(Fe,n)}function eh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,ag(e)||"Unknown",i));return he({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,En=Ae.current,re(Ae,e),re(Fe,Fe.current),!0}function lc(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=eh(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,le(Fe),le(Ae),re(Ae,e)):le(Fe),re(Fe,n)}var It=null,Jo=!1,Ps=!1;function th(e){It===null?It=[e]:It.push(e)}function Ey(e){Jo=!0,th(e)}function pn(){if(!Ps&&It!==null){Ps=!0;var e=0,t=ee;try{var n=It;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Jo=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Np(bl,pn),i}finally{ee=t,Ps=!1}}return null}var qn=[],Vn=0,Eo=null,To=0,tt=[],nt=0,Tn=null,At=1,Pt="";function gn(e,t){qn[Vn++]=To,qn[Vn++]=Eo,Eo=e,To=t}function nh(e,t,n){tt[nt++]=At,tt[nt++]=Pt,tt[nt++]=Tn,Tn=e;var r=At;e=Pt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var o=32-ht(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,At=1<<32-ht(t)+i|n<<i|r,Pt=o+e}else At=1<<o|n<<i|r,Pt=e}function Pl(e){e.return!==null&&(gn(e,1),nh(e,1,0))}function Ol(e){for(;e===Eo;)Eo=qn[--Vn],qn[Vn]=null,To=qn[--Vn],qn[Vn]=null;for(;e===Tn;)Tn=tt[--nt],tt[nt]=null,Pt=tt[--nt],tt[nt]=null,At=tt[--nt],tt[nt]=null}var Qe=null,Ye=null,ue=!1,pt=null;function rh(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:At,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ye=null,!0):!1;default:return!1}}function Ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(ue){var t=Ye;if(t){var n=t;if(!uc(e,t)){if(Ia(e))throw Error(A(418));t=en(n.nextSibling);var r=Qe;t&&uc(e,t)?rh(r,n):(e.flags=e.flags&-4097|2,ue=!1,Qe=e)}}else{if(Ia(e))throw Error(A(418));e.flags=e.flags&-4097|2,ue=!1,Qe=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Ui(e){if(e!==Qe)return!1;if(!ue)return cc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ia(e))throw ih(),Error(A(418));for(;t;)rh(e,t),t=en(t.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Qe?en(e.stateNode.nextSibling):null;return!0}function ih(){for(var e=Ye;e;)e=en(e.nextSibling)}function ar(){Ye=Qe=null,ue=!1}function Rl(e){pt===null?pt=[e]:pt.push(e)}var Ty=zt.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function oh(e){function t(m,g){if(e){var x=m.deletions;x===null?(m.deletions=[g],m.flags|=16):x.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=on(m,g),m.index=0,m.sibling=null,m}function o(m,g,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<g?(m.flags|=2,g):x):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,x,E){return g===null||g.tag!==6?(g=zs(x,m.mode,E),g.return=m,g):(g=i(g,x),g.return=m,g)}function l(m,g,x,E){var N=x.type;return N===zn?d(m,g,x.props.children,E,x.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wt&&dc(N)===g.type)?(E=i(g,x.props),E.ref=Nr(m,g,x),E.return=m,E):(E=lo(x.type,x.key,x.props,null,m.mode,E),E.ref=Nr(m,g,x),E.return=m,E)}function u(m,g,x,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Fs(x,m.mode,E),g.return=m,g):(g=i(g,x.children||[]),g.return=m,g)}function d(m,g,x,E,N){return g===null||g.tag!==7?(g=Sn(x,m.mode,E,N),g.return=m,g):(g=i(g,x),g.return=m,g)}function p(m,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zs(""+g,m.mode,x),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:return x=lo(g.type,g.key,g.props,null,m.mode,x),x.ref=Nr(m,null,g),x.return=m,x;case Dn:return g=Fs(g,m.mode,x),g.return=m,g;case Wt:var E=g._init;return p(m,E(g._payload),x)}if(Or(g)||kr(g))return g=Sn(g,m.mode,x,null),g.return=m,g;Bi(m,g)}return null}function f(m,g,x,E){var N=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:a(m,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ai:return x.key===N?l(m,g,x,E):null;case Dn:return x.key===N?u(m,g,x,E):null;case Wt:return N=x._init,f(m,g,N(x._payload),E)}if(Or(x)||kr(x))return N!==null?null:d(m,g,x,E,null);Bi(m,x)}return null}function h(m,g,x,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(x)||null,a(g,m,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ai:return m=m.get(E.key===null?x:E.key)||null,l(g,m,E,N);case Dn:return m=m.get(E.key===null?x:E.key)||null,u(g,m,E,N);case Wt:var b=E._init;return h(m,g,x,b(E._payload),N)}if(Or(E)||kr(E))return m=m.get(x)||null,d(g,m,E,N,null);Bi(g,E)}return null}function y(m,g,x,E){for(var N=null,b=null,C=g,O=g=0,D=null;C!==null&&O<x.length;O++){C.index>O?(D=C,C=null):D=C.sibling;var I=f(m,C,x[O],E);if(I===null){C===null&&(C=D);break}e&&C&&I.alternate===null&&t(m,C),g=o(I,g,O),b===null?N=I:b.sibling=I,b=I,C=D}if(O===x.length)return n(m,C),ue&&gn(m,O),N;if(C===null){for(;O<x.length;O++)C=p(m,x[O],E),C!==null&&(g=o(C,g,O),b===null?N=C:b.sibling=C,b=C);return ue&&gn(m,O),N}for(C=r(m,C);O<x.length;O++)D=h(C,m,O,x[O],E),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?O:D.key),g=o(D,g,O),b===null?N=D:b.sibling=D,b=D);return e&&C.forEach(function(M){return t(m,M)}),ue&&gn(m,O),N}function v(m,g,x,E){var N=kr(x);if(typeof N!="function")throw Error(A(150));if(x=N.call(x),x==null)throw Error(A(151));for(var b=N=null,C=g,O=g=0,D=null,I=x.next();C!==null&&!I.done;O++,I=x.next()){C.index>O?(D=C,C=null):D=C.sibling;var M=f(m,C,I.value,E);if(M===null){C===null&&(C=D);break}e&&C&&M.alternate===null&&t(m,C),g=o(M,g,O),b===null?N=M:b.sibling=M,b=M,C=D}if(I.done)return n(m,C),ue&&gn(m,O),N;if(C===null){for(;!I.done;O++,I=x.next())I=p(m,I.value,E),I!==null&&(g=o(I,g,O),b===null?N=I:b.sibling=I,b=I);return ue&&gn(m,O),N}for(C=r(m,C);!I.done;O++,I=x.next())I=h(C,m,O,I.value,E),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?O:I.key),g=o(I,g,O),b===null?N=I:b.sibling=I,b=I);return e&&C.forEach(function(U){return t(m,U)}),ue&&gn(m,O),N}function T(m,g,x,E){if(typeof x=="object"&&x!==null&&x.type===zn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ai:e:{for(var N=x.key,b=g;b!==null;){if(b.key===N){if(N=x.type,N===zn){if(b.tag===7){n(m,b.sibling),g=i(b,x.props.children),g.return=m,m=g;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wt&&dc(N)===b.type){n(m,b.sibling),g=i(b,x.props),g.ref=Nr(m,b,x),g.return=m,m=g;break e}n(m,b);break}else t(m,b);b=b.sibling}x.type===zn?(g=Sn(x.props.children,m.mode,E,x.key),g.return=m,m=g):(E=lo(x.type,x.key,x.props,null,m.mode,E),E.ref=Nr(m,g,x),E.return=m,m=E)}return s(m);case Dn:e:{for(b=x.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(m,g.sibling),g=i(g,x.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Fs(x,m.mode,E),g.return=m,m=g}return s(m);case Wt:return b=x._init,T(m,g,b(x._payload),E)}if(Or(x))return y(m,g,x,E);if(kr(x))return v(m,g,x,E);Bi(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,x),g.return=m,m=g):(n(m,g),g=zs(x,m.mode,E),g.return=m,m=g),s(m)):n(m,g)}return T}var lr=oh(!0),sh=oh(!1),No=dn(null),jo=null,Gn=null,Ll=null;function _l(){Ll=Gn=jo=null}function Ml(e){var t=No.current;le(No),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){jo=e,Ll=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(jo===null)throw Error(A(308));Gn=e,jo.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var vn=null;function Dl(e){vn===null?vn=[e]:vn.push(e)}function ah(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}function pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(f=t,h=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(h,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(h,p,f):y,f==null)break e;p=he({},p,f);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jn|=s,e.lanes=s,e.memoizedState=p}}function hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ki={},Et=dn(ki),si=dn(ki),ai=dn(ki);function kn(e){if(e===ki)throw Error(A(174));return e}function Fl(e,t){switch(re(ai,t),re(si,e),re(Et,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=da(t,e)}le(Et),re(Et,t)}function ur(){le(Et),le(si),le(ai)}function uh(e){kn(ai.current);var t=kn(Et.current),n=da(t,e.type);t!==n&&(re(si,e),re(Et,n))}function Ul(e){si.current===e&&(le(Et),le(si))}var ce=dn(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Os=[];function Bl(){for(var e=0;e<Os.length;e++)Os[e]._workInProgressVersionPrimary=null;Os.length=0}var ro=zt.ReactCurrentDispatcher,Rs=zt.ReactCurrentBatchConfig,Nn=0,pe=null,we=null,be=null,Ao=!1,Br=!1,li=0,Ny=0;function je(){throw Error(A(321))}function Hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Wl(e,t,n,r,i,o){if(Nn=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?Ay:Py,e=n(r,i),Br){o=0;do{if(Br=!1,li=0,25<=o)throw Error(A(301));o+=1,be=we=null,t.updateQueue=null,ro.current=Oy,e=n(r,i)}while(Br)}if(ro.current=Po,t=we!==null&&we.next!==null,Nn=0,be=we=pe=null,Ao=!1,t)throw Error(A(300));return e}function ql(){var e=li!==0;return li=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?pe.memoizedState=be=e:be=be.next=e,be}function at(){if(we===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=be===null?pe.memoizedState:be.next;if(t!==null)be=t,we=e;else{if(e===null)throw Error(A(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},be===null?pe.memoizedState=be=e:be=be.next=e}return be}function ui(e,t){return typeof t=="function"?t(e):t}function Ls(e){var t=at(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Nn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,pe.lanes|=d,jn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,mt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _s(e){var t=at(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);mt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ch(){}function dh(e,t){var n=pe,r=at(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,Vl(fh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,ci(9,hh.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(A(349));Nn&30||ph(n,t,i)}return i}function ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hh(e,t,n,r){t.value=n,t.getSnapshot=r,mh(t)&&gh(e)}function fh(e,t,n){return n(function(){mh(t)&&gh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function gh(e){var t=Mt(e,1);t!==null&&ft(t,e,1,-1)}function fc(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Iy.bind(null,pe,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yh(){return at().memoizedState}function io(e,t,n,r){var i=wt();pe.flags|=e,i.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(we!==null){var s=we.memoizedState;if(o=s.destroy,r!==null&&Hl(r,s.deps)){i.memoizedState=ci(t,n,o,r);return}}pe.flags|=e,i.memoizedState=ci(1|t,n,o,r)}function mc(e,t){return io(8390656,8,e,t)}function Vl(e,t){return Qo(2048,8,e,t)}function xh(e,t){return Qo(4,2,e,t)}function wh(e,t){return Qo(4,4,e,t)}function vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kh(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,vh.bind(null,t,e),n)}function Gl(){}function bh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eh(e,t,n){return Nn&21?(mt(n,t)||(n=Ip(),pe.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function jy(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{ee=n,Rs.transition=r}}function Th(){return at().memoizedState}function Cy(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nh(e))jh(t,n);else if(n=ah(e,t,n,r),n!==null){var i=Re();ft(n,e,r,i),Ch(n,t,r)}}function Iy(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))jh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,mt(a,s)){var l=t.interleaved;l===null?(i.next=i,Dl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ah(e,t,i,r),n!==null&&(i=Re(),ft(n,e,r,i),Ch(n,t,r))}}function Nh(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function jh(e,t){Br=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}var Po={readContext:st,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Ay={readContext:st,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cy.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:fc,useDebugValue:Gl,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=fc(!1),t=e[0];return e=jy.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=wt();if(ue){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Se===null)throw Error(A(349));Nn&30||ph(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,mc(fh.bind(null,r,o,e),[e]),r.flags|=2048,ci(9,hh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=Se.identifierPrefix;if(ue){var n=Pt,r=At;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ny++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:st,useCallback:bh,useContext:st,useEffect:Vl,useImperativeHandle:kh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:Sh,useReducer:Ls,useRef:yh,useState:function(){return Ls(ui)},useDebugValue:Gl,useDeferredValue:function(e){var t=at();return Eh(t,we.memoizedState,e)},useTransition:function(){var e=Ls(ui)[0],t=at().memoizedState;return[e,t]},useMutableSource:ch,useSyncExternalStore:dh,useId:Th,unstable_isNewReconciler:!1},Oy={readContext:st,useCallback:bh,useContext:st,useEffect:Vl,useImperativeHandle:kh,useInsertionEffect:xh,useLayoutEffect:wh,useMemo:Sh,useReducer:_s,useRef:yh,useState:function(){return _s(ui)},useDebugValue:Gl,useDeferredValue:function(e){var t=at();return we===null?t.memoizedState=e:Eh(t,we.memoizedState,e)},useTransition:function(){var e=_s(ui)[0],t=at().memoizedState;return[e,t]},useMutableSource:ch,useSyncExternalStore:dh,useId:Th,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=rn(e),o=Rt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=rn(e),o=Rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(ft(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=rn(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(ft(t,e,r,n),no(t,e,r))}};function gc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(i,o):!0}function Ih(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=Ue(t)?En:Ae.current,r=t.contextTypes,o=(r=r!=null)?sr(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function Ra(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=Ue(t)?En:Ae.current,i.context=sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),Co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=sg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function La(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ry=typeof WeakMap=="function"?WeakMap:Map;function Ah(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,qa=r),La(e,t)},n}function Ph(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){La(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){La(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ry;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$y.bind(null,e,t,n),t.then(e,e))}function wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Ly=zt.ReactCurrentOwner,ze=!1;function Oe(e,t,n,r){t.child=e===null?sh(t,null,n,r):lr(t,e.child,n,r)}function kc(e,t,n,r,i){n=n.render;var o=t.ref;return tr(t,i),r=Wl(e,t,n,r,o,i),n=ql(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&n&&Pl(t),t.flags|=1,Oe(e,t,r,i),t.child)}function bc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Oh(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(s,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function Oh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ni(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return _a(e,t,n,r,i)}function Rh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Yn,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Yn,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Yn,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Yn,Ge),Ge|=r;return Oe(e,t,i,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=Ue(n)?En:Ae.current;return o=sr(t,o),tr(t,i),n=Wl(e,t,n,r,o,i),r=ql(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&r&&Pl(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Sc(e,t,n,r,i){if(Ue(n)){var o=!0;So(t)}else o=!1;if(tr(t,i),t.stateNode===null)oo(e,t),Ih(t,n,r),Ra(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Ue(n)?En:Ae.current,u=sr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yc(t,s,r,u),qt=!1;var f=t.memoizedState;s.state=f,Co(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Fe.current||qt?(typeof d=="function"&&(Oa(t,n,d,r),l=t.memoizedState),(a=qt||gc(t,n,a,r,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),s.props=u,p=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=Ue(n)?En:Ae.current,l=sr(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==l)&&yc(t,s,r,l),qt=!1,f=t.memoizedState,s.state=f,Co(t,r,s,i);var y=t.memoizedState;a!==p||f!==y||Fe.current||qt?(typeof h=="function"&&(Oa(t,n,h,r),y=t.memoizedState),(u=qt||gc(t,n,u,r,f,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,o,i)}function Ma(e,t,n,r,i,o){Lh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&lc(t,n,!1),Dt(e,t,o);r=t.stateNode,Ly.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=lr(t,e.child,null,o),t.child=lr(t,null,a,o)):Oe(e,t,a,o),t.memoizedState=r.state,i&&lc(t,n,!0),t.child}function _h(e){var t=e.stateNode;t.pendingContext?ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ac(e,t.context,!1),Fl(e,t.containerInfo)}function Ec(e,t,n,r,i){return ar(),Rl(i),t.flags|=256,Oe(e,t,n,r),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mh(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ce,i&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=es(s,r,0,null),e=Sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=za(n),t.memoizedState=Da,e):$l(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _y(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=on(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=on(a,o):(o=Sn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?za(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Da,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $l(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,n,r){return r!==null&&Rl(r),lr(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _y(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(A(422))),Hi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=Sn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&lr(t,e.child,null,s),t.child.memoizedState=za(s),t.memoizedState=Da,o);if(!(t.mode&1))return Hi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=Ms(o,r,void 0),Hi(e,t,s,r)}if(a=(s&e.childLanes)!==0,ze||a){if(r=Se,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),ft(r,e,i,-1))}return Zl(),r=Ms(Error(A(421))),Hi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=en(i.nextSibling),Qe=t,ue=!0,pt=null,e!==null&&(tt[nt++]=At,tt[nt++]=Pt,tt[nt++]=Tn,At=e.id,Pt=e.overflow,Tn=t),t=$l(t,r.children),t.flags|=4096,t)}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function Ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,o);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function My(e,t,n){switch(t.tag){case 3:_h(t),ar();break;case 5:uh(t);break;case 1:Ue(t.type)&&So(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(No,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Mh(e,t,n):(re(ce,ce.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Rh(e,t,n)}return Dt(e,t,n)}var zh,Fa,Fh,Uh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};Fh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Et.current);var o=null;switch(n){case"input":i=aa(e,i),r=aa(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=ca(e,i),r=ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}pa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Uh=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dy(e,t,n){var r=t.pendingProps;switch(Ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ue(t.type)&&bo(),Ce(t),null;case 3:return r=t.stateNode,ur(),le(Fe),le(Ae),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&($a(pt),pt=null))),Fa(e,t),Ce(t),null;case 5:Ul(t);var i=kn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Fh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ce(t),null}if(e=kn(Et.current),Ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[oi]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)ae(Lr[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Lu(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":Mu(r,o),ae("invalid",r)}pa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",""+a]):Jr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":Pi(r),_u(r,o,!0);break;case"textarea":Pi(r),Du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kt]=t,e[oi]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ha(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)ae(Lr[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":Lu(e,r),i=aa(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Mu(e,r),i=ca(e,r),ae("invalid",e);break;default:i=r}pa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qr(e,l):typeof l=="number"&&Qr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ae("scroll",e):l!=null&&yl(e,o,l,s))}switch(n){case"input":Pi(e),_u(e,r,!1);break;case"textarea":Pi(e),Du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Uh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=kn(ai.current),kn(Et.current),Ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ce(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Ye!==null&&t.mode&1&&!(t.flags&128))ih(),ar(),t.flags|=98560,o=!1;else if(o=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[kt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else pt!==null&&($a(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ve===0&&(ve=3):Zl())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return ur(),Fa(e,t),e===null&&ri(t.stateNode.containerInfo),Ce(t),null;case 10:return Ml(t.type._context),Ce(t),null;case 17:return Ue(t.type)&&bo(),Ce(t),null;case 19:if(le(ce),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)jr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Io(e),s!==null){for(t.flags|=128,jr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>dr&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Io(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ue)return Ce(t),null}else 2*ge()-o.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Xl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function zy(e,t){switch(Ol(t),t.tag){case 1:return Ue(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),le(Fe),le(Ae),Bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return ur(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Wi=!1,Ie=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,z=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Nc=!1;function Uy(e,t){if(Sa=xo,e=Vp(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++d===r&&(l=s),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},xo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:ct(t.type,v),T);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Nc,Nc=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ua(t,n,o)}i=i.next}while(i!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bh(e){var t=e.alternate;t!==null&&(e.alternate=null,Bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[oi],delete t[ja],delete t[by],delete t[Sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hh(e){return e.tag===5||e.tag===3||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var Ee=null,dt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Wh(e,t,n),n=n.sibling}function Wh(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:Ie||$n(n,t);case 6:var r=Ee,i=dt;Ee=null,Bt(e,t,n),Ee=r,dt=i,Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),ei(e)):As(Ee,n.stateNode));break;case 4:r=Ee,i=dt,Ee=n.stateNode.containerInfo,dt=!0,Bt(e,t,n),Ee=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ua(n,t,s),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Ie&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Bt(e,t,n),Ie=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fy),t.forEach(function(r){var i=Jy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,dt=!1;break e;case 3:Ee=a.stateNode.containerInfo,dt=!0;break e;case 4:Ee=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Ee===null)throw Error(A(160));Wh(o,s,i),Ee=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qh(t,e),t=t.sibling}function qh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),yt(e),r&4){try{Hr(3,e,e.return),Xo(3,e)}catch(v){fe(e,e.return,v)}try{Hr(5,e,e.return)}catch(v){fe(e,e.return,v)}}break;case 1:ut(t,e),yt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(ut(t,e),yt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{Qr(i,"")}catch(v){fe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&pp(i,o),ha(a,s);var u=ha(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?yp(i,p):d==="dangerouslySetInnerHTML"?mp(i,p):d==="children"?Qr(i,p):yl(i,d,p,u)}switch(a){case"input":la(i,o);break;case"textarea":hp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Kn(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Kn(i,!!o.multiple,o.defaultValue,!0):Kn(i,!!o.multiple,o.multiple?[]:"",!1))}i[oi]=o}catch(v){fe(e,e.return,v)}}break;case 6:if(ut(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){fe(e,e.return,v)}}break;case 3:if(ut(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(v){fe(e,e.return,v)}break;case 4:ut(t,e),yt(e);break;case 13:ut(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ql=ge())),r&4&&Cc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||d,ut(t,e),Ie=u):ut(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(p=z=d;z!==null;){switch(f=z,h=f.child,f.tag){case 0:case 11:case 14:case 15:Hr(4,f,f.return);break;case 1:$n(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:$n(f,f.return);break;case 22:if(f.memoizedState!==null){Ac(p);continue}}h!==null?(h.return=f,z=h):Ac(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gp("display",s))}catch(v){fe(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){fe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ut(t,e),yt(e),r&4&&Cc(e);break;case 21:break;default:ut(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qr(i,""),r.flags&=-33);var o=jc(e);Wa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=jc(e);Ha(e,a,s);break;default:throw Error(A(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function By(e,t,n){z=e,Vh(e)}function Vh(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Wi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=Wi;var u=Ie;if(Wi=s,(Ie=l)&&!u)for(z=i;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?Pc(i):l!==null?(l.return=s,z=l):Pc(i);for(;o!==null;)z=o,Vh(o),o=o.sibling;z=i,Wi=a,Ie=u}Ic(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Ic(e)}}function Ic(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ei(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ie||t.flags&512&&Ba(t)}catch(f){fe(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Ac(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Pc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{Ba(t)}catch(l){fe(t,o,l)}break;case 5:var s=t.return;try{Ba(t)}catch(l){fe(t,s,l)}}}catch(l){fe(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var Hy=Math.ceil,Oo=zt.ReactCurrentDispatcher,Yl=zt.ReactCurrentOwner,ot=zt.ReactCurrentBatchConfig,Q=0,Se=null,xe=null,Te=0,Ge=0,Yn=dn(0),ve=0,di=null,jn=0,Zo=0,Jl=0,Wr=null,De=null,Ql=0,dr=1/0,Ct=null,Ro=!1,qa=null,nn=null,qi=!1,Yt=null,Lo=0,qr=0,Va=null,so=-1,ao=0;function Re(){return Q&6?ge():so!==-1?so:so=ge()}function rn(e){return e.mode&1?Q&2&&Te!==0?Te&-Te:Ty.transition!==null?(ao===0&&(ao=Ip()),ao):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Mp(e.type)),e):1}function ft(e,t,n,r){if(50<qr)throw qr=0,Va=null,Error(A(185));xi(e,n,r),(!(Q&2)||e!==Se)&&(e===Se&&(!(Q&2)&&(Zo|=n),ve===4&&Gt(e,Te)),Be(e,r),n===1&&Q===0&&!(t.mode&1)&&(dr=ge()+500,Jo&&pn()))}function Be(e,t){var n=e.callbackNode;Tg(e,t);var r=yo(e,e===Se?Te:0);if(r===0)n!==null&&Uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uu(n),t===1)e.tag===0?Ey(Oc.bind(null,e)):th(Oc.bind(null,e)),vy(function(){!(Q&6)&&pn()}),n=null;else{switch(Ap(r)){case 1:n=bl;break;case 4:n=jp;break;case 16:n=go;break;case 536870912:n=Cp;break;default:n=go}n=Zh(n,Gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gh(e,t){if(so=-1,ao=0,Q&6)throw Error(A(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=yo(e,e===Se?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var i=Q;Q|=2;var o=Yh();(Se!==e||Te!==t)&&(Ct=null,dr=ge()+500,bn(e,t));do try{Vy();break}catch(a){$h(e,a)}while(!0);_l(),Oo.current=o,Q=i,xe!==null?t=0:(Se=null,Te=0,t=ve)}if(t!==0){if(t===2&&(i=xa(e),i!==0&&(r=i,t=Ga(e,i))),t===1)throw n=di,bn(e,0),Gt(e,r),Be(e,ge()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wy(i)&&(t=_o(e,r),t===2&&(o=xa(e),o!==0&&(r=o,t=Ga(e,o))),t===1))throw n=di,bn(e,0),Gt(e,r),Be(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:yn(e,De,Ct);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Ql+500-ge(),10<t)){if(yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Na(yn.bind(null,e,De,Ct),t);break}yn(e,De,Ct);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hy(r/1960))-r,10<r){e.timeoutHandle=Na(yn.bind(null,e,De,Ct),r);break}yn(e,De,Ct);break;case 5:yn(e,De,Ct);break;default:throw Error(A(329))}}}return Be(e,ge()),e.callbackNode===n?Gh.bind(null,e):null}function Ga(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=_o(e,t),e!==2&&(t=De,De=n,t!==null&&$a(t)),e}function $a(e){De===null?De=e:De.push.apply(De,e)}function Wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Jl,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Oc(e){if(Q&6)throw Error(A(327));nr();var t=yo(e,0);if(!(t&1))return Be(e,ge()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ga(e,r))}if(n===1)throw n=di,bn(e,0),Gt(e,t),Be(e,ge()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,De,Ct),Be(e,ge()),null}function Kl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(dr=ge()+500,Jo&&pn())}}function Cn(e){Yt!==null&&Yt.tag===0&&!(Q&6)&&nr();var t=Q;Q|=1;var n=ot.transition,r=ee;try{if(ot.transition=null,ee=1,e)return e()}finally{ee=r,ot.transition=n,Q=t,!(Q&6)&&pn()}}function Xl(){Ge=Yn.current,le(Yn)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wy(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ol(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:ur(),le(Fe),le(Ae),Bl();break;case 5:Ul(r);break;case 4:ur();break;case 13:le(ce);break;case 19:le(ce);break;case 10:Ml(r.type._context);break;case 22:case 23:Xl()}n=n.return}if(Se=e,xe=e=on(e.current,null),Te=Ge=t,ve=0,di=null,Jl=Zo=jn=0,De=Wr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vn=null}return e}function $h(e,t){do{var n=xe;try{if(_l(),ro.current=Po,Ao){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ao=!1}if(Nn=0,be=we=pe=null,Br=!1,li=0,Yl.current=null,n===null||n.return===null){ve=1,di=t,xe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=wc(s);if(h!==null){h.flags&=-257,vc(h,s,a,o,t),h.mode&1&&xc(o,u,t),t=h,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){xc(o,u,t),Zl();break e}l=Error(A(426))}}else if(ue&&a.mode&1){var T=wc(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),vc(T,s,a,o,t),Rl(cr(l,a));break e}}o=l=cr(l,a),ve!==4&&(ve=2),Wr===null?Wr=[o]:Wr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Ah(o,l,t);pc(o,m);break e;case 1:a=l;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(nn===null||!nn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Ph(o,a,t);pc(o,E);break e}}o=o.return}while(o!==null)}Qh(n)}catch(N){t=N,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Yh(){var e=Oo.current;return Oo.current=Po,e===null?Po:e}function Zl(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(jn&268435455)&&!(Zo&268435455)||Gt(Se,Te)}function _o(e,t){var n=Q;Q|=2;var r=Yh();(Se!==e||Te!==t)&&(Ct=null,bn(e,t));do try{qy();break}catch(i){$h(e,i)}while(!0);if(_l(),Q=n,Oo.current=r,xe!==null)throw Error(A(261));return Se=null,Te=0,ve}function qy(){for(;xe!==null;)Jh(xe)}function Vy(){for(;xe!==null&&!gg();)Jh(xe)}function Jh(e){var t=Xh(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Qh(e):xe=t,Yl.current=null}function Qh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zy(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,xe=null;return}}else if(n=Dy(n,t,Ge),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);ve===0&&(ve=5)}function yn(e,t,n){var r=ee,i=ot.transition;try{ot.transition=null,ee=1,Gy(e,t,n,r)}finally{ot.transition=i,ee=r}return null}function Gy(e,t,n,r){do nr();while(Yt!==null);if(Q&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ng(e,o),e===Se&&(xe=Se=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,Zh(go,function(){return nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var s=ee;ee=1;var a=Q;Q|=4,Yl.current=null,Uy(e,n),qh(n,e),py(Ea),xo=!!Sa,Ea=Sa=null,e.current=n,By(n),yg(),Q=a,ee=s,ot.transition=o}else e.current=n;if(qi&&(qi=!1,Yt=e,Lo=i),o=e.pendingLanes,o===0&&(nn=null),vg(n.stateNode),Be(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=qa,qa=null,e;return Lo&1&&e.tag!==0&&nr(),o=e.pendingLanes,o&1?e===Va?qr++:(qr=0,Va=e):qr=0,pn(),null}function nr(){if(Yt!==null){var e=Ap(Lo),t=ot.transition,n=ee;try{if(ot.transition=null,ee=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Lo=0,Q&6)throw Error(A(331));var i=Q;for(Q|=4,z=e.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Hr(8,d,o)}var p=d.child;if(p!==null)p.return=d,z=p;else for(;z!==null;){d=z;var f=d.sibling,h=d.return;if(Bh(d),d===u){z=null;break}if(f!==null){f.return=h,z=f;break}z=h}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,z=m;break e}z=o.return}}var g=e.current;for(z=g;z!==null;){s=z;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,z=x;else e:for(s=g;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xo(9,a)}}catch(N){fe(a,a.return,N)}if(a===s){z=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,z=E;break e}z=a.return}}if(Q=i,pn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{ee=n,ot.transition=t}}return!1}function Rc(e,t,n){t=cr(n,t),t=Ah(e,t,1),e=tn(e,t,1),t=Re(),e!==null&&(xi(e,1,t),Be(e,t))}function fe(e,t,n){if(e.tag===3)Rc(e,e,n);else for(;t!==null;){if(t.tag===3){Rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=cr(n,e),e=Ph(t,e,1),t=tn(t,e,1),e=Re(),t!==null&&(xi(t,1,e),Be(t,e));break}}t=t.return}}function $y(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>ge()-Ql?bn(e,0):Jl|=n),Be(e,t)}function Kh(e,t){t===0&&(e.mode&1?(t=Li,Li<<=1,!(Li&130023424)&&(Li=4194304)):t=1);var n=Re();e=Mt(e,t),e!==null&&(xi(e,t,n),Be(e,n))}function Yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function Jy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Kh(e,n)}var Xh;Xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,My(e,t,n);ze=!!(e.flags&131072)}else ze=!1,ue&&t.flags&1048576&&nh(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var i=sr(t,Ae.current);tr(t,n),i=Wl(null,t,r,e,i,n);var o=ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,So(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zl(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,Ra(t,r,e,n),t=Ma(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Pl(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ky(r),e=ct(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=Sc(null,t,r,e,n);break e;case 11:t=kc(null,t,r,e,n);break e;case 14:t=bc(null,t,r,ct(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Sc(e,t,r,i,n);case 3:e:{if(_h(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lh(e,t),Co(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=cr(Error(A(423)),t),t=Ec(e,t,r,n,i);break e}else if(r!==i){i=cr(Error(A(424)),t),t=Ec(e,t,r,n,i);break e}else for(Ye=en(t.stateNode.containerInfo.firstChild),Qe=t,ue=!0,pt=null,n=sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Dt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return uh(t),e===null&&Aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ta(r,i)?s=null:o!==null&&Ta(r,o)&&(t.flags|=32),Lh(e,t),Oe(e,t,s,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return Mh(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),kc(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,re(No,r._currentValue),r._currentValue=s,o!==null)if(mt(o.value,s)){if(o.children===i.children&&!Fe.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Rt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=st(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),bc(e,t,r,i,n);case 15:return Oh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),oo(e,t),t.tag=1,Ue(r)?(e=!0,So(t)):e=!1,tr(t,n),Ih(t,r,i),Ra(t,r,i,n),Ma(null,t,r,!0,e,n);case 19:return Dh(e,t,n);case 22:return Rh(e,t,n)}throw Error(A(156,t.tag))};function Zh(e,t){return Np(e,t)}function Qy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Qy(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ky(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===vl)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return Sn(n.children,i,o,t);case xl:s=8,i|=8;break;case ra:return e=it(12,n,t,i|2),e.elementType=ra,e.lanes=o,e;case ia:return e=it(13,n,t,i),e.elementType=ia,e.lanes=o,e;case oa:return e=it(19,n,t,i),e.elementType=oa,e.lanes=o,e;case up:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ap:s=10;break e;case lp:s=9;break e;case wl:s=11;break e;case vl:s=14;break e;case Wt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=it(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Sn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=it(22,e,r,t),e.elementType=up,e.lanes=n,e.stateNode={isHidden:!1},e}function zs(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,i,o,s,a,l){return e=new Xy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(o),e}function Zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return un;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ue(n))return eh(e,n,t)}return t}function tf(e,t,n,r,i,o,s,a,l){return e=tu(n,r,!0,e,i,o,s,a,l),e.context=ef(null),n=e.current,r=Re(),i=rn(n),o=Rt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,xi(e,i,r),Be(e,r),e}function ts(e,t,n,r){var i=t.current,o=Re(),s=rn(i);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,s),e!==null&&(ft(e,i,s,o),no(e,i,s)),s}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function ex(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}ns.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ts(e,t,null,null)};ns.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){ts(null,e,null,null)}),t[_t]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&_p(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function tx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Mo(s);o.call(u)}}var s=tf(t,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=s,e[_t]=s.current,ri(e.nodeType===8?e.parentNode:e),Cn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mo(l);a.call(u)}}var l=tu(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=l,e[_t]=l.current,ri(e.nodeType===8?e.parentNode:e),Cn(function(){ts(t,l,n,r)}),l}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Mo(s);a.call(l)}}ts(t,s,e,i)}else s=tx(n,t,e,i,r);return Mo(s)}Pp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Sl(t,n|1),Be(t,ge()),!(Q&6)&&(dr=ge()+500,pn()))}break;case 13:Cn(function(){var r=Mt(e,1);if(r!==null){var i=Re();ft(r,e,1,i)}}),nu(e,1)}};El=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Re();ft(t,e,134217728,n)}nu(e,134217728)}};Op=function(e){if(e.tag===13){var t=rn(e),n=Mt(e,t);if(n!==null){var r=Re();ft(n,e,t,r)}nu(e,t)}};Rp=function(){return ee};Lp=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ma=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error(A(90));dp(r),la(r,i)}}}break;case"textarea":hp(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};vp=Kl;kp=Cn;var nx={usingClientEntryPoint:!1,Events:[vi,Hn,Yo,xp,wp,Kl]},Cr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rx={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ep(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{qo=Vi.inject(rx),St=Vi}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(A(200));return Zy(e,t,null,n)};Xe.createRoot=function(e,t){if(!iu(e))throw Error(A(299));var n=!1,r="",i=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,ri(e.nodeType===8?e.parentNode:e),new ru(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Ep(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Cn(e)};Xe.hydrate=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tf(t,null,e,1,n??null,i,!1,o,s),e[_t]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Xe.render=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!rs(e))throw Error(A(40));return e._reactRootContainer?(Cn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Xe.unstable_batchedUpdates=Kl;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return is(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),rp.exports=Xe;var ix=rp.exports,Mc=ix;ta.createRoot=Mc.createRoot,ta.hydrateRoot=Mc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const Dc="popstate";function ox(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ya("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Do(i)}return ax(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ou(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sx(){return Math.random().toString(36).substr(2,8)}function zc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ya(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||sx()})}function Do(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ax(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Jt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(pi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=Jt.Pop;let T=d(),m=T==null?null:T-u;u=T,l&&l({action:a,location:v.location,delta:m})}function f(T,m){a=Jt.Push;let g=Ya(v.location,T,m);u=d()+1;let x=zc(g,u),E=v.createHref(g);try{s.pushState(x,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(E)}o&&l&&l({action:a,location:v.location,delta:1})}function h(T,m){a=Jt.Replace;let g=Ya(v.location,T,m);u=d();let x=zc(g,u),E=v.createHref(g);s.replaceState(x,"",E),o&&l&&l({action:a,location:v.location,delta:0})}function y(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:Do(T);return g=g.replace(/ $/,"%20"),me(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let v={get action(){return a},get location(){return e(i,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dc,p),l=T,()=>{i.removeEventListener(Dc,p),l=null}},createHref(T){return t(i,T)},createURL:y,encodeLocation(T){let m=y(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(T){return s.go(T)}};return v}var Fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fc||(Fc={}));function lx(e,t,n){return n===void 0&&(n="/"),ux(e,t,n)}function ux(e,t,n,r){let i=typeof t=="string"?gr(t):t,o=pr(i.pathname||"/",n);if(o==null)return null;let s=of(e);cx(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=kx(o);a=wx(s[l],u)}return a}function of(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),of(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:yx(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sf(o.path))i(o,s,l)}),t}function sf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sf(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function cx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dx=/^:[\w-]+$/,px=3,hx=2,fx=1,mx=10,gx=-2,Uc=e=>e==="*";function yx(e,t){let n=e.split("/"),r=n.length;return n.some(Uc)&&(r+=gx),t&&(r+=hx),n.filter(i=>!Uc(i)).reduce((i,o)=>i+(dx.test(o)?px:o===""?fx:mx),r)}function xx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function wx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Ja({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:sn([o,p.pathname]),pathnameBase:Nx(sn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=sn([o,p.pathnameBase]))}return s}function Ja(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let v=a[p]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[p];return h&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function vx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ou(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ou(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sx=e=>bx.test(e);function Ex(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gr(e):e,o;if(n)if(Sx(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),ou(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Bc(n.substring(1),"/"):o=Bc(n,t)}else o=t;return{pathname:o,search:jx(r),hash:Cx(i)}}function Bc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function af(e,t){let n=Tx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gr(e):(i=pi({},e),me(!i.pathname||!i.pathname.includes("?"),Us("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Us("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Us("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}a=p>=0?t[p]:"/"}let l=Ex(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),Nx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ix(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const Ax=["get",...uf];new Set(Ax);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const os=S.createContext(null),cf=S.createContext(null),hn=S.createContext(null),ss=S.createContext(null),Ft=S.createContext({outlet:null,matches:[],isDataRoute:!1}),df=S.createContext(null);function Px(e,t){let{relative:n}=t===void 0?{}:t;bi()||me(!1);let{basename:r,navigator:i}=S.useContext(hn),{hash:o,pathname:s,search:a}=ls(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:sn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function bi(){return S.useContext(ss)!=null}function Si(){return bi()||me(!1),S.useContext(ss).location}function pf(e){S.useContext(hn).static||S.useLayoutEffect(e)}function Ox(){let{isDataRoute:e}=S.useContext(Ft);return e?$x():Rx()}function Rx(){bi()||me(!1);let e=S.useContext(os),{basename:t,future:n,navigator:r}=S.useContext(hn),{matches:i}=S.useContext(Ft),{pathname:o}=Si(),s=JSON.stringify(af(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return pf(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=lf(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:sn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,o,e])}const Lx=S.createContext(null);function _x(e){let t=S.useContext(Ft).outlet;return t&&S.createElement(Lx.Provider,{value:e},t)}function as(){let{matches:e}=S.useContext(Ft),t=e[e.length-1];return t?t.params:{}}function ls(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(hn),{matches:i}=S.useContext(Ft),{pathname:o}=Si(),s=JSON.stringify(af(i,r.v7_relativeSplatPath));return S.useMemo(()=>lf(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Mx(e,t){return Dx(e,t)}function Dx(e,t,n,r){bi()||me(!1);let{navigator:i}=S.useContext(hn),{matches:o}=S.useContext(Ft),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Si(),d;if(t){var p;let T=typeof t=="string"?gr(t):t;l==="/"||(p=T.pathname)!=null&&p.startsWith(l)||me(!1),d=T}else d=u;let f=d.pathname||"/",h=f;if(l!=="/"){let T=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(T.length).join("/")}let y=lx(e,{pathname:h}),v=Hx(y&&y.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:sn([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:sn([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return t&&v?S.createElement(ss.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Jt.Pop}},v):v}function zx(){let e=Gx(),t=Ix(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const Fx=S.createElement(zx,null);class Ux extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Ft.Provider,{value:this.props.routeContext},S.createElement(df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bx(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(os);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ft.Provider,{value:t},r)}function Hx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||me(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,f)=>{let h,y=!1,v=null,T=null;n&&(h=a&&p.route.id?a[p.route.id]:void 0,v=p.route.errorElement||Fx,l&&(u<0&&f===0?(Yx("route-fallback"),y=!0,T=null):u===f&&(y=!0,T=p.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),g=()=>{let x;return h?x=v:y?x=T:p.route.Component?x=S.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,S.createElement(Bx,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?S.createElement(Ux,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hf||{}),ff=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ff||{});function Wx(e){let t=S.useContext(os);return t||me(!1),t}function qx(e){let t=S.useContext(cf);return t||me(!1),t}function Vx(e){let t=S.useContext(Ft);return t||me(!1),t}function mf(e){let t=Vx(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Gx(){var e;let t=S.useContext(df),n=qx(),r=mf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $x(){let{router:e}=Wx(hf.UseNavigateStable),t=mf(ff.UseNavigateStable),n=S.useRef(!1);return pf(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},o)))},[e,t])}const Hc={};function Yx(e,t,n){Hc[e]||(Hc[e]=!0)}function Jx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qx(e){return _x(e.context)}function xt(e){me(!1)}function Kx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:o,static:s=!1,future:a}=e;bi()&&me(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:o,static:s,future:hi({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=gr(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:y="default"}=r,v=S.useMemo(()=>{let T=pr(d,l);return T==null?null:{location:{pathname:T,search:p,hash:f,state:h,key:y},navigationType:i}},[l,d,p,f,h,y,i]);return v==null?null:S.createElement(hn.Provider,{value:u},S.createElement(ss.Provider,{children:n,value:v}))}function Xx(e){let{children:t,location:n}=e;return Mx(Qa(t),n)}new Promise(()=>{});function Qa(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Qa(r.props.children,o));return}r.type!==xt&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Qa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}function gf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Zx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ew(e,t){return e.button===0&&(!t||t==="_self")&&!Zx(e)}const tw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],rw="6";try{window.__reactRouterVersion=rw}catch{}const iw=S.createContext({isTransitioning:!1}),ow="startTransition",Wc=$m[ow];function sw(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=ox({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&Wc?Wc(()=>l(p)):l(p)},[l,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.useEffect(()=>Jx(r),[r]),S.createElement(Kx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const aw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=gf(t,tw),{basename:h}=S.useContext(hn),y,v=!1;if(typeof u=="string"&&lw.test(u)&&(y=u,aw))try{let x=new URL(window.location.href),E=u.startsWith("//")?new URL(x.protocol+u):new URL(u),N=pr(E.pathname,h);E.origin===x.origin&&N!=null?u=N+E.search+E.hash:v=!0}catch{}let T=Px(u,{relative:i}),m=cw(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:p});function g(x){r&&r(x),x.defaultPrevented||m(x)}return S.createElement("a",zo({},f,{href:y||T,onClick:v||o?r:g,ref:n,target:l}))}),qc=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,viewTransition:u,children:d}=t,p=gf(t,nw),f=ls(l,{relative:p.relative}),h=Si(),y=S.useContext(cf),{navigator:v,basename:T}=S.useContext(hn),m=y!=null&&dw(f)&&u===!0,g=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,x=h.pathname,E=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(x=x.toLowerCase(),E=E?E.toLowerCase():null,g=g.toLowerCase()),E&&T&&(E=pr(E,T)||E);const N=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let b=x===g||!s&&x.startsWith(g)&&x.charAt(N)==="/",C=E!=null&&(E===g||!s&&E.startsWith(g)&&E.charAt(g.length)==="/"),O={isActive:b,isPending:C,isTransitioning:m},D=b?r:void 0,I;typeof o=="function"?I=o(O):I=[o,b?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(O):a;return S.createElement(de,zo({},p,{"aria-current":D,className:I,ref:n,style:M,to:l,viewTransition:u}),typeof d=="function"?d(O):d)});var Ka;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ka||(Ka={}));var Vc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vc||(Vc={}));function uw(e){let t=S.useContext(os);return t||me(!1),t}function cw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Ox(),u=Si(),d=ls(e,{relative:s});return S.useCallback(p=>{if(ew(p,n)){p.preventDefault();let f=r!==void 0?r:Do(u)===Do(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}function dw(e,t){t===void 0&&(t={});let n=S.useContext(iw);n==null&&me(!1);let{basename:r}=uw(Ka.useViewTransitionState),i=ls(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=pr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=pr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ja(i.pathname,s)!=null||Ja(i.pathname,o)!=null}const pw=6e4;function hw(){const[e,t]=S.useState(!1),[n,r]=S.useState(null);return S.useEffect(()=>{let i=!1;const o="/ship-it/index.html",s=async()=>{try{const l=await fetch(o,{method:"HEAD",cache:"no-store"});return l.headers.get("etag")??l.headers.get("last-modified")}catch{return null}};s().then(l=>{i||r(l)});const a=window.setInterval(async()=>{const l=await s();!i&&l&&n&&l!==n&&t(!0)},pw);return()=>{i=!0,window.clearInterval(a)}},[n]),e?c.jsxs("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-40 card px-4 py-3 shadow-xl flex items-center gap-3",children:[c.jsx("span",{className:"text-sm text-ink-200",children:"A new version of Ship It is available."}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>window.location.reload(),children:"Reload"})]}):null}const fw="1.0.0",mw=[{to:"/",label:"Home"},{to:"/gauntlet",label:"Gauntlet"},{to:"/settings",label:"Settings"}];function gw(){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsx("header",{className:"sticky top-0 z-30 border-b border-ink-700 bg-ink-900/80 backdrop-blur",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-6",children:[c.jsxs(qc,{to:"/",className:"flex items-center gap-2 font-semibold",children:[c.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent-strong text-ink-900 text-sm",children:"S"}),c.jsx("span",{className:"text-ink-100",children:"Ship It"}),c.jsx("span",{className:"hidden md:inline text-xs text-ink-300",children:"— drill, build, ship."})]}),c.jsx("nav",{className:"ml-auto flex items-center gap-0.5 sm:gap-1",children:mw.map(e=>c.jsx(qc,{to:e.to,end:e.to==="/",className:({isActive:t})=>`px-2.5 sm:px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${t?"bg-ink-700 text-ink-100":"text-ink-300 hover:text-ink-100 hover:bg-ink-800"}`,children:e.label},e.to))})]})}),c.jsx("main",{className:"flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-5 sm:py-8",children:c.jsx(Qx,{})}),c.jsxs("footer",{className:"border-t border-ink-700 py-4 text-center text-xs text-ink-400 px-3",children:["Ship It v",fw," · personal training tool · localStorage only"]}),c.jsx(hw,{})]})}const yf=[{id:"runtime",index:1,title:"How a computer runs your code",blurb:"The mental model — source → parser → runtime → memory. Without this nothing else clicks.",badge:"Foundations"},{id:"javascript",index:2,title:"JavaScript fundamentals",blurb:"Variables, types, functions, arrays, objects, control flow. The language you live in.",badge:"Language"},{id:"terminal",index:3,title:"The terminal and your filesystem",blurb:"cd, ls, mkdir, pipes, env vars, PATH. Stop being scared of the black window.",badge:"Tooling"},{id:"git-github",index:4,title:"Git and GitHub from zero",blurb:"init, add, commit, branch, merge, conflict, PR, remote, .gitignore — the whole spine.",badge:"Tooling"},{id:"html-css-dom",index:5,title:"HTML, CSS, and the DOM",blurb:"Semantics, layout, querySelector, events. Unlocks Build-Along #1 (Notes app).",badge:"Frontend",unlocksBuildAlong:"ba-1-notes-app"},{id:"async-fetch",index:6,title:"Async, fetch, and APIs",blurb:"Promises, await, error handling, real HTTP. Where most beginners drown.",badge:"Language"},{id:"node-express",index:7,title:"Node.js and Express",blurb:"Routes, middleware, request/response, body parsing. Your first server.",badge:"Backend"},{id:"sql-sqlite",index:8,title:"SQL and SQLite",blurb:"DDL, DML, joins, FKs, transactions. Unlocks Build-Along #2 (Todo API).",badge:"Backend",unlocksBuildAlong:"ba-2-todo-api"},{id:"react",index:9,title:"React",blurb:"Components, state, effects, props, routing. The frontend you actually ship.",badge:"Frontend"},{id:"auth-jwt",index:10,title:"Auth, JWT, and integrations",blurb:"Hashing, tokens, secrets, webhooks. Unlocks Build-Along #3 (Expense tracker).",badge:"Backend",unlocksBuildAlong:"ba-3-expense-tracker"},{id:"react-native",index:11,title:"React Native + Expo",blurb:"Same React patterns, mobile flavour, EAS. Lean on TypeAlong + ReadThis.",badge:"Mobile"},{id:"deploy-ship",index:12,title:"Deploying and shipping",blurb:"Vercel, Railway, GitHub Pages, EAS, the 6 stability fixes. Cross the finish line.",badge:"Ops"},{id:"capstone",index:13,title:"Capstone — Mini-Viszio",blurb:"BA-4: clock-in with GPS. No AI. The exit exam — when you ship this, the app has done its job.",badge:"Capstone",unlocksBuildAlong:"ba-4-mini-viszio",isCapstone:!0}];function yw(e){return yf.find(t=>t.id===e)}function xw({module:e,completionPct:t=0}){const n=e.isCapstone===!0;return c.jsxs(de,{to:`/module/${e.id}`,className:`card p-5 group hover:border-accent/40 transition-colors block ${n?"ring-1 ring-accent/30":""}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"text-xs text-ink-300 mb-1",children:["Module ",e.index]}),c.jsx("h3",{className:"text-base font-semibold text-ink-100 group-hover:text-white",children:e.title})]}),c.jsx("span",{className:`chip ${n?"bg-accent/20 text-accent-strong":"bg-ink-700 text-ink-200 border border-ink-600"}`,children:e.badge})]}),c.jsx("p",{className:"text-sm text-ink-300 mt-2 leading-relaxed",children:e.blurb}),e.unlocksBuildAlong&&c.jsxs("div",{className:"mt-3 text-xs text-ink-300",children:["🔓 Unlocks ",c.jsx("span",{className:"text-ink-100",children:e.unlocksBuildAlong})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${t}%`}})}),c.jsxs("div",{className:"mt-1 flex justify-between text-[11px] text-ink-300",children:[c.jsx("span",{children:t===0?"Not started":`${t}% complete`}),c.jsx("span",{className:"text-ink-400 group-hover:text-ink-200",children:"Open →"})]})]})]})}const su="ship-it:progress:v1";function Jn(){return{lessonsCompleted:{},blocksCompleted:{},quizScores:{},gauntletSolved:{},buildAlongsStarted:{},settings:{},schemaVersion:1}}function Gc(){if(typeof window>"u")return Jn();try{const e=window.localStorage.getItem(su);if(!e)return Jn();const t=JSON.parse(e);return t.schemaVersion!==1?vw(t):{...Jn(),...t,schemaVersion:1}}catch(e){return console.warn("[ship-it] progress read failed, resetting",e),Jn()}}function ww(e){if(!(typeof window>"u"))try{window.localStorage.setItem(su,JSON.stringify(e))}catch(t){console.warn("[ship-it] progress write failed",t)}}function vw(e){return{...Jn(),...e,schemaVersion:1}}function et(){const[e,t]=S.useState(()=>Jn());S.useEffect(()=>{t(Gc());const u=d=>{d.key===su&&t(Gc())};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)},[]);const n=S.useCallback(u=>{t(d=>{const p=u(d);return ww(p),p})},[]),r=S.useCallback(u=>{n(d=>({...d,lessonsCompleted:{...d.lessonsCompleted,[u]:{completedAt:new Date().toISOString()}}}))},[n]),i=S.useCallback((u,d)=>{n(p=>{var f;return{...p,blocksCompleted:{...p.blocksCompleted,[u]:{completedAt:new Date().toISOString(),attempts:d??((f=p.blocksCompleted[u])==null?void 0:f.attempts)}}}})},[n]),o=S.useCallback((u,d,p)=>{n(f=>({...f,quizScores:{...f.quizScores,[u]:{score:d,total:p,takenAt:new Date().toISOString()}}}))},[n]),s=S.useCallback((u,d)=>{n(p=>({...p,gauntletSolved:{...p.gauntletSolved,[u]:{solvedAt:new Date().toISOString(),attempts:d}}}))},[n]),a=S.useCallback(u=>{n(d=>({...d,settings:{...d.settings,...u}}))},[n]),l=S.useCallback(u=>{n(d=>d.buildAlongsStarted[u]?d:{...d,buildAlongsStarted:{...d.buildAlongsStarted,[u]:{startedAt:new Date().toISOString()}}})},[n]);return{progress:e,update:n,markLessonComplete:r,markBlockComplete:i,recordQuiz:o,markGauntletSolved:s,setSettings:a,startBuildAlong:l}}const kw={id:"m1-l1-what-is-a-program",moduleId:"runtime",title:"What is a program?",objective:"Be able to say in one sentence what a program is and what it isn't.",estimatedMinutes:5,blocks:[{type:"explain",id:"m1-l1-e1",listen:!0,markdown:`## A program is text the computer follows

That's it. That's the whole idea.

A program is text — saved in a file — that the computer reads top to bottom
and follows like a recipe. Each line tells the computer to do one small thing:
store a number, print a word, ask the user a question, draw a pixel.

You're not "speaking to the computer." You're writing instructions in a
language the computer already knows how to follow. The language we'll use
in this app is **JavaScript**.

### What a program isn't

It isn't magic. It isn't smart. It does exactly what you wrote — including
the things you didn't mean to write. The bugs you'll spend time on later
are almost always the gap between what you wrote and what you meant.`},{type:"explain",id:"m1-l1-e2",listen:!0,markdown:`### A tiny example

The smallest useful JavaScript program is one line:

\`\`\`js
console.log('hello');
\`\`\`

When the computer runs that line, it prints the word \`hello\` to a place
called the **console** (a kind of scratch pad for programmers).

You'll see \`console.log\` everywhere in this app. It's how we peek at
what's happening inside a program.`},{type:"readthis",id:"m1-l1-r1",language:"js",code:`console.log('one');
console.log('two');
console.log('three');`,question:"When you run this program, what does the console show?",options:["one two three (all on one line)","one\\ntwo\\nthree (three separate lines, in that order)","three\\ntwo\\none (last line first)","Nothing — console.log is just a comment"],answerIndex:1,explanation:"Programs run top to bottom. Each `console.log` prints its own line in the order it appears."}]},bw={id:"m1-l2-files-processes-memory",moduleId:"runtime",title:"Files, processes, and memory",objective:"Build the mental picture of what happens between double-click and screen.",estimatedMinutes:6,blocks:[{type:"explain",id:"m1-l2-e1",listen:!0,markdown:`## What happens when you "run" something

When you double-click an app — or run a program from the terminal —
three things happen, in this order:

1. **The file is read from disk.** Your program lives as bytes on the
   hard drive. The operating system pulls those bytes into memory so
   the CPU can read them.
2. **A process is created.** A process is just a name for "a running
   copy of a program." Your laptop has dozens running right now — the
   browser, the editor, the menu bar clock.
3. **Memory is given to the process.** The process gets a slice of
   the computer's memory (RAM) to store its variables, its open files,
   the pixels on screen.

When you close the program, the process ends and its memory is freed.
Nothing about that process survives — unless it deliberately wrote
something back to disk.`},{type:"explain",id:"m1-l2-e2",listen:!0,markdown:`### Why this matters for JavaScript

Every JS program you write runs inside one of these processes.
A browser tab is a process. A Node script is a process.

Each process has its own memory. Two browser tabs don't share variables.
Two Node scripts on the same machine don't share variables. If you want
two programs to talk to each other, you have to send data through
something they both can see — usually a file on disk, or a network message.

This is the difference between **runtime memory** (lives only while the
process is alive) and **persistent storage** (a file, a database — survives
the process ending). We'll come back to this when we hit Module 8.`},{type:"readthis",id:"m1-l2-r1",language:"js",code:`// Tab A
let counter = 0;
counter = counter + 1;
console.log(counter);`,question:"You open Tab B in the same browser and run the exact same code. Does Tab B's counter start at 0 or at the value Tab A reached?",options:["Tab B starts where Tab A left off","Tab B starts at 0 — separate processes have separate memory","Tab B sees Tab A's value but can't change it","It depends on the browser"],answerIndex:1,explanation:"Each tab is its own process with its own memory. Variables in one tab don't exist in another."}]},Sw={id:"m1-l3-browser-is-a-runtime",moduleId:"runtime",title:"The browser is a runtime",objective:'Understand what "runtime" means and why the browser is one.',estimatedMinutes:6,blocks:[{type:"explain",id:"m1-l3-e1",listen:!0,markdown:`## What's a runtime?

A **runtime** is the thing that runs your code. Without a runtime, your
JavaScript file is just text on disk. With a runtime, the text becomes
action — variables get values, functions get called, things happen on
screen.

JavaScript has two big runtimes:

- **The browser** (Chrome, Firefox, Safari, Edge — they all include one).
- **Node.js** (which we'll meet in the next lesson).

Same language. Different tools attached. The language itself can add
two numbers, but it can't "open a window" — that's the browser's job.
The language can't "read a file from disk" — that's Node's job.`},{type:"explain",id:"m1-l3-e2",listen:!0,markdown:`### What the browser gives you

When your JS runs in a browser, you get extra superpowers the language
doesn't have on its own:

- A **window** — the page the user sees.
- A **document** — the HTML structure inside that page.
- **Events** — clicks, key presses, mouse movement.
- **fetch** — the ability to talk to other computers over the network.

You write JavaScript; the browser runs it; the browser exposes these
extras so your code can do real things. We'll use all of them later.

For now: when someone says "browser JS," they mean JavaScript code that
runs inside a browser tab. Same language, runtime-specific powers.`},{type:"readthis",id:"m1-l3-r1",language:"html",code:`<!doctype html>
<html>
  <body>
    <h1>Hello</h1>
    <script>
      console.log('the page loaded');
    <\/script>
  </body>
</html>`,question:"When the browser opens this HTML file, when does the `console.log` run?",options:["Immediately, before the page renders","When the browser reaches the <script> tag — after the <h1> is parsed","Only when the user clicks somewhere","It never runs — <script> in <body> is invalid"],answerIndex:1,explanation:"The browser parses HTML top to bottom. When it hits the <script> tag, it executes the JavaScript inside, then continues."}]},Ew={id:"m1-l4-node-is-a-runtime",moduleId:"runtime",title:"Node is also a runtime",objective:"Install Node and run JavaScript from the terminal.",estimatedMinutes:8,blocks:[{type:"explain",id:"m1-l4-e1",listen:!0,markdown:`## Node.js — JavaScript outside the browser

Node.js is a program you install on your laptop. Once installed, you
can run JavaScript files directly from the terminal, without any browser
involved.

That's huge. It means you can write:

- Server-side code (the things that respond when a website's frontend
  talks to its backend).
- Command-line tools.
- Build scripts that prepare your code for shipping.

The Vite dev server you're using right now to view Ship It? That's a
Node program. Almost every modern JS tool runs on Node.

### What Node gives you (that the browser doesn't)

- Read and write files on disk (\`fs\` module).
- Listen for network connections (\`http\` module — this is how a server works).
- Run other programs from your script.

What Node *doesn't* give you: a window, a document, or anything visual.
Node is headless.`},{type:"command",id:"m1-l4-c1",label:"Check if Node is already installed",command:"node -v",expectedOutput:`Something like: v20.11.0

If you see "command not found", install Node from the next step.`},{type:"explain",id:"m1-l4-e2",listen:!0,markdown:`### If you don't have Node yet

Go to **nodejs.org** in your browser. Download the **LTS** version (Long
Term Support — the boring stable one, which is what you want).

Run the installer with default options. When it finishes, **close and
reopen your terminal** — the new \`node\` command only appears in fresh
terminal sessions.

Then try the command above again.`},{type:"command",id:"m1-l4-c2",label:"Run a one-liner with Node",command:'node -e "console.log(2 + 2)"',expectedOutput:"4"},{type:"explain",id:"m1-l4-e3",listen:!0,markdown:`### Two runtimes, one language

You've now seen JavaScript run in two places:

- Inside this Ship It app (browser runtime).
- From the terminal via Node.

Same syntax, same rules. The only difference is what extras are available.
\`console.log\` works in both because logging is part of the language itself.
\`document.querySelector\` only works in the browser. \`require('fs')\` only
works in Node.

When we get to Module 6 and 7, we'll write real Node servers.`}]},Tw={id:"m1-l5-source-to-execution",moduleId:"runtime",title:"From source code to execution",objective:"See what the runtime actually does with your text, then run your first program.",estimatedMinutes:8,blocks:[{type:"explain",id:"m1-l5-e1",listen:!0,markdown:`## Source → action

You write text. The runtime turns it into action. There are three stops
along the way:

1. **Parse.** The runtime reads your text character by character and
   checks the grammar. If you forgot a closing bracket or misspelled
   \`functoin\` instead of \`function\`, the parser yells at you with a
   **SyntaxError**. Nothing runs until the parse succeeds.

2. **Build a tree.** Once the syntax checks out, the runtime arranges
   your code into a tree of meaning — what depends on what, which
   function lives inside which, the order of operations.

3. **Execute.** The runtime walks the tree and does the work — store
   the value, call the function, print the line.

If you've ever seen \`Uncaught SyntaxError\` in a console, that's step 1
failing. If you've seen \`ReferenceError\` or \`TypeError\`, that's step 3
failing — the syntax was fine, but the program made an illegal move at
runtime.`},{type:"explain",id:"m1-l5-e2",listen:!0,markdown:`### Your first program

Time to write one. The Code Challenge below asks for the smallest
useful program: print the words \`hello, world\` to the console.

The editor is real. The Run button runs your code in a sandbox (a
locked-down iframe so it can't touch the rest of the page). The Submit
button checks your console output matches what we expect.

If you get stuck, the spec tells you exactly what to print. Single
\`console.log\` call, single string.`},{type:"codechallenge",id:"m1-l5-cc1",spec:`Write a program that prints exactly: hello, world

(One line. Lowercase. The comma and the space matter.)`,starterCode:`// Use console.log to print: hello, world
`,expectedConsoleOutput:"hello, world"},{type:"explain",id:"m1-l5-e3",listen:!0,markdown:`### You ran code

That was Module 1. You now know:

- A program is text the runtime follows.
- Files turn into processes that get their own memory.
- The browser and Node are two runtimes for the same language.
- Code becomes action by parse → tree → execute.
- And you've executed a program with your name on it.

Next module: the JavaScript language itself — variables, types,
functions, the building blocks you'll use every day.`}]},Nw=[kw,bw,Sw,Ew,Tw],jw={id:"m2-l1-variables-and-types",moduleId:"javascript",title:"Variables and types",objective:"Declare variables with let and const, and name the basic types.",estimatedMinutes:7,blocks:[{type:"explain",id:"m2-l1-e1",listen:!0,markdown:"## A variable is a labelled box\n\nYou put a value in. You read the value out by name.\n\n```js\nlet age = 27;\nconsole.log(age);\n```\n\nThat's it. `let` is the keyword that creates the box. `age` is the\nlabel. `27` is the value. From now on, `age` means `27` in this\nprogram — until you assign a new value.\n\n```js\nlet age = 27;\nage = 28;\nconsole.log(age); // 28\n```"},{type:"explain",id:"m2-l1-e2",listen:!0,markdown:"### let vs const\n\nThere are two ways to declare a variable:\n\n- `let` — you can change the value later.\n- `const` — you can't. Trying to reassign a `const` is an error.\n\nDefault to `const`. Use `let` only when you actually need to change\nthe value. Smaller surface for bugs.\n\n```js\nconst name = 'Gabs';\n// name = 'Other';  // <- TypeError: Assignment to constant variable\n```"},{type:"explain",id:"m2-l1-e3",listen:!0,markdown:"### The basic types\n\nEvery value in JS has a type. The five you'll use constantly:\n\n- **number** — `27`, `3.14`, `-5`.\n- **string** — text in quotes, `'hello'` or `\"hello\"`. Both work.\n- **boolean** — `true` or `false`. Nothing else.\n- **null** — the explicit \"nothing here.\" You set it yourself.\n- **undefined** — \"this was never set.\" The runtime sets this for you.\n\nTwo more you'll see soon: **array** (`[1, 2, 3]`) and **object**\n(`{ name: 'Gabs' }`). We'll cover those properly later in the module."},{type:"typealong",id:"m2-l1-ta1",language:"js",instructions:"Retype the snippet exactly. The point isn't cleverness — it's muscle memory for the syntax.",code:`const name = 'Gabs';
let age = 27;
const isLearning = true;

console.log(name);
console.log(age);
console.log(isLearning);`},{type:"codechallenge",id:"m2-l1-cc1",spec:"Declare a const called `city` with the value `Accra`, then log it. Output should be exactly:\n\nAccra",starterCode:`// declare a const called city with the value 'Accra'
// then console.log it
`,expectedConsoleOutput:"Accra"}],quiz:[{id:"m2-l1-q1",prompt:"Which line is illegal?",options:["let n = 5;","const PI = 3.14;",'const greeting = "hi"; greeting = "hello";',"let count = 0; count = count + 1;"],answerIndex:2,explanation:"You can't reassign a const. Use let if you need to change the value later."},{id:"m2-l1-q2",prompt:"What is the type of the value `true`?",options:["string","boolean","number","null"],answerIndex:1}]},Cw={id:"m2-l2-operators-and-control-flow",moduleId:"javascript",title:"Operators and control flow",objective:"Do arithmetic, compare values, branch with if/else.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l2-e1",listen:!0,markdown:`## Operators — symbols that do work

**Arithmetic** — what you'd expect from a calculator:

\`\`\`js
1 + 2   // 3
10 - 4  // 6
3 * 4   // 12
10 / 2  // 5
10 % 3  // 1  (remainder — read as "modulo")
\`\`\`

**Comparison** — these always return \`true\` or \`false\`:

\`\`\`js
5 === 5    // true   (equal)
5 !== 6    // true   (not equal)
5 < 10     // true
5 > 10     // false
5 <= 5     // true
\`\`\`

Notice the three equals signs. \`===\` checks **value and type** —
the safe one, always use this. \`==\` (two equals) does loose comparison
with weird type coercion rules. Skip it.`},{type:"explain",id:"m2-l2-e2",listen:!0,markdown:`### Control flow — if / else

A program runs top to bottom — unless you tell it to branch.

\`\`\`js
const score = 72;

if (score >= 60) {
  console.log('pass');
} else {
  console.log('fail');
}
\`\`\`

The parentheses hold a **condition** — anything that evaluates to
\`true\` or \`false\`. If true, the first block runs. If false, the
\`else\` block runs.

You can chain with \`else if\`:

\`\`\`js
if (score >= 80) {
  console.log('great');
} else if (score >= 60) {
  console.log('pass');
} else {
  console.log('fail');
}
\`\`\`

The first true branch wins — the rest are skipped.`},{type:"codechallenge",id:"m2-l2-cc1",spec:`Given the variable \`n\`, print "even" if it is even, "odd" if it is odd.

For n = 4 the output should be:

even`,starterCode:`const n = 4;

// hint: n % 2 === 0 is true for even numbers
`,expectedConsoleOutput:"even"},{type:"codechallenge",id:"m2-l2-cc2",spec:"Given two variables `a` and `b`, print the larger one. For a = 7 and b = 12 the output is:\n\n12",starterCode:`const a = 7;
const b = 12;

// print whichever is larger
`,expectedConsoleOutput:"12"},{type:"explain",id:"m2-l2-e3",listen:!0,markdown:`### Logical operators

When you need to combine conditions:

- \`&&\` — **and**. Both sides must be true.
- \`||\` — **or**. Either side true is enough.
- \`!\` — **not**. Flips true to false.

\`\`\`js
const age = 28;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('can drive');
}
\`\`\`

These are the same symbols you'll use in every conditional from here on.`}]},Iw={id:"m2-l3-functions",moduleId:"javascript",title:"Functions",objective:"Define and call functions. Pass arguments. Return values.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l3-e1",listen:!0,markdown:`## A function is a named set of steps

You define it once. You call it as many times as you want.

\`\`\`js
function greet(name) {
  return 'Hello, ' + name + '!';
}

const message = greet('Gabs');
console.log(message);
// → Hello, Gabs!
\`\`\`

Three parts:

1. **The signature** — \`function greet(name)\` — the name of the function
   and the names of the values it expects (its **parameters**).
2. **The body** — the lines between \`{\` and \`}\` — what runs each time
   you call it.
3. **The return** — \`return\` followed by an expression — the value
   the function hands back. Anything after \`return\` is skipped.`},{type:"explain",id:"m2-l3-e2",listen:!0,markdown:`### Functions without a return

If you don't return anything, the function still works — it just gives
back the special value \`undefined\`.

\`\`\`js
function shout(word) {
  console.log(word.toUpperCase());
  // no return here
}

const result = shout('hello'); // logs: HELLO
console.log(result);            // undefined
\`\`\`

This is the source of one of the most common beginner bugs: writing
a function that does some math but **forgets to return the answer**.
You'll see it in the Debug Gauntlet — and you'll see it again in
real code.`},{type:"typealong",id:"m2-l3-ta1",language:"js",instructions:"Retype this. Notice the curly braces, the parentheses, and the return statement.",code:`function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(10, 20));`},{type:"codechallenge",id:"m2-l3-cc1",spec:"Write a function called `square` that takes a number `n` and returns n times n. Then call square(5) and log the result.\n\nExpected output:\n\n25",starterCode:`function square(n) {
  // return n * n
}

console.log(square(5));
`,expectedConsoleOutput:"25"},{type:"codechallenge",id:"m2-l3-cc2",spec:`Write a function \`greet\` that takes a name and returns the string "Hello, <name>!". Then log greet("Gabs").

Expected output:

Hello, Gabs!`,starterCode:`function greet(name) {
  // return 'Hello, ' + name + '!'
}

console.log(greet('Gabs'));
`,expectedConsoleOutput:"Hello, Gabs!"},{type:"codechallenge",id:"m2-l3-cc3",spec:`Write a function \`isEven\` that takes a number and returns true if it is even, false otherwise. Log isEven(4) and isEven(7), one per line.

Expected output:

true
false`,starterCode:`function isEven(n) {
  // return whether n % 2 === 0
}

console.log(isEven(4));
console.log(isEven(7));
`,expectedConsoleOutput:`true
false`}]},Aw={id:"m2-l4-arrays",moduleId:"javascript",title:"Arrays",objective:"Create arrays, access by index, add and remove items, get the length.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l4-e1",listen:!0,markdown:"## An array is an ordered list\n\n```js\nconst fruits = ['apple', 'banana', 'cherry'];\n```\n\nThree values, kept in order. You read them by their **index** — a\nnumber starting at `0`, not `1`:\n\n```js\nfruits[0];  // 'apple'\nfruits[1];  // 'banana'\nfruits[2];  // 'cherry'\nfruits[3];  // undefined  (nothing at that index)\n```\n\nYou can find out how many items an array has with `.length`:\n\n```js\nfruits.length;  // 3\n```\n\nThe last index is always `length - 1`. That's why so many beginner\nbugs are off-by-one errors — you'll see them in the Gauntlet."},{type:"explain",id:"m2-l4-e2",listen:!0,markdown:`### Adding and removing items

\`\`\`js
const fruits = ['apple', 'banana'];

fruits.push('cherry');     // add to end
console.log(fruits);
// → ['apple', 'banana', 'cherry']

fruits.pop();              // remove from end
console.log(fruits);
// → ['apple', 'banana']
\`\`\`

There are more (\`unshift\`, \`shift\`, \`splice\`) but you can get
surprisingly far with just \`push\` and \`pop\`.

You can also change a value at a specific index:

\`\`\`js
fruits[0] = 'mango';
console.log(fruits);
// → ['mango', 'banana']
\`\`\``},{type:"typealong",id:"m2-l4-ta1",language:"js",instructions:"Retype. Watch the square brackets and the dots.",code:`const colors = ['red', 'green', 'blue'];

console.log(colors[0]);
console.log(colors.length);

colors.push('yellow');
console.log(colors);`},{type:"codechallenge",id:"m2-l4-cc1",spec:`Declare an array \`cities\` with three string values: "Accra", "Kumasi", "Tema". Log the middle one (index 1).

Expected output:

Kumasi`,starterCode:`// declare const cities = [...]
// then log cities[1]
`,expectedConsoleOutput:"Kumasi"},{type:"codechallenge",id:"m2-l4-cc2",spec:`Given \`const nums = [10, 20, 30]\`, push the value 40 onto it, then log the resulting array.

Expected output:

[10,20,30,40]`,starterCode:`const nums = [10, 20, 30];

// push 40 onto nums
// then console.log(nums)
`,expectedConsoleOutput:"[10,20,30,40]"},{type:"codechallenge",id:"m2-l4-cc3",spec:`Write a function \`firstAndLast\` that takes an array and returns the first element joined with the last element by a space.

For ["apple", "banana", "cherry"] the result is:

apple cherry`,starterCode:`function firstAndLast(arr) {
  // return arr[0] + ' ' + arr[arr.length - 1]
}

console.log(firstAndLast(['apple', 'banana', 'cherry']));
`,expectedConsoleOutput:"apple cherry"}]},Pw={id:"m2-l5-objects",moduleId:"javascript",title:"Objects",objective:"Create objects, read and write properties, nest them.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l5-e1",listen:!0,markdown:`## An object is a bag of named values

An **array** is an ordered list — you access items by their **position**.
An **object** is a bag of labelled values — you access them by **name**.

\`\`\`js
const person = {
  name: 'Gabs',
  age: 28,
  isLearning: true,
};
\`\`\`

Each line inside the curly braces is a **property**: a name (left of the
colon), a value (right of the colon), and a comma at the end. The names
are usually called **keys**.`},{type:"explain",id:"m2-l5-e2",listen:!0,markdown:`### Reading and writing properties

Two ways to get a value out:

\`\`\`js
person.name;      // 'Gabs'    — dot notation
person['name'];   // 'Gabs'    — bracket notation
\`\`\`

Dot notation is shorter — use it by default. Bracket notation is for
when the key is in a variable, or has special characters in it:

\`\`\`js
const field = 'age';
person[field];    // 28
\`\`\`

You can also write to properties — including ones that didn't exist:

\`\`\`js
person.age = 29;        // change
person.city = 'Accra';  // add a new property
\`\`\``},{type:"explain",id:"m2-l5-e3",listen:!0,markdown:`### Objects inside objects

Property values can be anything — including other objects, or arrays:

\`\`\`js
const user = {
  name: 'Gabs',
  address: {
    city: 'Accra',
    country: 'Ghana',
  },
  hobbies: ['code', 'football'],
};

user.address.city;    // 'Accra'
user.hobbies[0];      // 'code'
\`\`\`

You chain dots and brackets to walk into nested structures. Almost every
real-world JS data shape — an HTTP response, a config, a user record —
is a tree of objects and arrays.`},{type:"typealong",id:"m2-l5-ta1",language:"js",instructions:"Retype this. Mind the comma after each property and the curly braces.",code:`const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

console.log(car.make);
console.log(car.year);
car.color = 'silver';
console.log(car);`},{type:"codechallenge",id:"m2-l5-cc1",spec:'Create an object `book` with two properties: `title` = "Atomic Habits" and `author` = "James Clear". Log the title and then the author, each on its own line.\n\nExpected output:\n\nAtomic Habits\nJames Clear',starterCode:`const book = {
  // title and author here
};

// log book.title and book.author
`,expectedConsoleOutput:`Atomic Habits
James Clear`},{type:"codechallenge",id:"m2-l5-cc2",spec:`Given the object below, add a \`country\` property with the value "Ghana", then log the whole object.

Expected output:

{"city":"Accra","country":"Ghana"}`,starterCode:`const place = { city: 'Accra' };

// add place.country = 'Ghana'
// then console.log(place)
`,expectedConsoleOutput:'{"city":"Accra","country":"Ghana"}'},{type:"codechallenge",id:"m2-l5-cc3",spec:`Given the nested object below, log just the user's city.

Expected output:

Kumasi`,starterCode:`const user = {
  name: 'Ama',
  address: {
    city: 'Kumasi',
    country: 'Ghana',
  },
};

// log user.address.city
`,expectedConsoleOutput:"Kumasi"}]},Ow={id:"m2-l6-loops",moduleId:"javascript",title:"Loops and iteration",objective:"Repeat work without copy-paste. Walk over arrays.",estimatedMinutes:10,blocks:[{type:"explain",id:"m2-l6-e1",listen:!0,markdown:`## The for loop

A loop runs the same block of code many times. The classic one is the
**for loop**:

\`\`\`js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
\`\`\`

It has three parts in the parentheses, separated by semicolons:

1. **Start** — \`let i = 1\` — runs once, before the loop begins.
2. **Condition** — \`i <= 5\` — checked before each iteration. If true,
   the loop runs another round. If false, the loop exits.
3. **Step** — \`i++\` — runs after each iteration. Same as \`i = i + 1\`.

The above logs 1, 2, 3, 4, 5 — five lines.`},{type:"explain",id:"m2-l6-e2",listen:!0,markdown:"### Walking an array with for\n\nThe most common shape — visit each element by index:\n\n```js\nconst fruits = ['apple', 'banana', 'cherry'];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n```\n\nNote the comparison: `i < fruits.length`, **not** `<=`. Array indexes\ngo from `0` to `length - 1`. Use `<=` and you walk off the end and\nget `undefined` — the classic off-by-one bug."},{type:"explain",id:"m2-l6-e3",listen:!0,markdown:`### for...of — the cleaner array loop

If you don't need the index, there's a shorter form:

\`\`\`js
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
\`\`\`

Each loop, \`fruit\` is set to the next element. No index to manage,
no off-by-one risk. Prefer this when you can.

### while — loop until a condition becomes false

When you don't know how many times you'll need to loop:

\`\`\`js
let n = 1;
while (n < 100) {
  n = n * 2;
}
console.log(n);   // 128
\`\`\`

\`while\` checks the condition before each iteration. Forget to update
\`n\` inside the loop and you've got an infinite loop. (The sandbox will
time out after 3 seconds, but your tab can lock up in real apps.)`},{type:"typealong",id:"m2-l6-ta1",language:"js",instructions:"Retype both loops. Notice the difference in syntax.",code:`const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (const n of nums) {
  console.log(n * 2);
}`},{type:"codechallenge",id:"m2-l6-cc1",spec:`Print the numbers 1 through 5, one per line.

Expected output:

1
2
3
4
5`,starterCode:`// for loop from 1 to 5, log each number
`,expectedConsoleOutput:`1
2
3
4
5`},{type:"codechallenge",id:"m2-l6-cc2",spec:`Given an array of numbers, sum them all and log the total.

For [4, 8, 15, 16, 23, 42] the expected output is:

108`,starterCode:`const nums = [4, 8, 15, 16, 23, 42];

let total = 0;
// walk the array, add each n to total
// then log total
`,expectedConsoleOutput:"108"},{type:"codechallenge",id:"m2-l6-cc3",spec:`Given an array of numbers, find the largest one and log it.

For [3, 9, 2, 7, 14, 5] the expected output is:

14`,starterCode:`const nums = [3, 9, 2, 7, 14, 5];

let max = nums[0];
// walk the rest of the array, update max when you see a bigger value
// then log max
`,expectedConsoleOutput:"14"}]},Rw={id:"m2-l7-common-bugs",moduleId:"javascript",title:"Common bugs",objective:"See the five mistakes you'll make a thousand times — and fix them.",estimatedMinutes:12,blocks:[{type:"explain",id:"m2-l7-e1",listen:!0,markdown:`## Pattern recognition is the whole game

Every working programmer recognises the same handful of bugs by sight.
You're about to fix five of them. The next time you see them in your
own code (and you will), you should think "oh, that one" before you
finish reading the error.

Each one is in the Debug This format: broken code on the left, the
real error message at the top, expected output on the right. Submit
your fix to pass.

After two failed submissions, a Hint button appears. Try without it
first.`},{type:"debugthis",id:"m2-l7-d1",brokenCode:`const items = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i].toUpperCase());
}`,errorMessage:"TypeError: Cannot read properties of undefined (reading 'toUpperCase')",expectedConsoleOutput:`APPLE
BANANA
CHERRY`,hint:"The loop runs one step too far. items.length is 3, but the last valid index is 2. Change `<=` to `<`."},{type:"debugthis",id:"m2-l7-d2",brokenCode:`function double(n) {
  n * 2;
}

console.log(double(3));
console.log(double(7));`,errorMessage:"(no error thrown — the output is wrong: undefined, undefined)",expectedConsoleOutput:`6
14`,hint:"The function computes n * 2 but never gives it back. Add `return` before the expression."},{type:"debugthis",id:"m2-l7-d3",brokenCode:`function makeCounter() {
  for (let i = 1; i <= 3; i++) {
    let total = 0;
    total = total + i;
  }
  console.log(total);
}

makeCounter();`,errorMessage:"ReferenceError: total is not defined",expectedConsoleOutput:"6",hint:"`let` declares a variable inside the nearest curly braces. `total` is reborn (and lost) each loop iteration. Move the declaration outside the loop, and remember to accumulate, not reset."},{type:"debugthis",id:"m2-l7-d4",brokenCode:`function isAdult(age) {
  if (age == '18') {
    return 'just turned adult';
  }
  return 'something else';
}

console.log(isAdult(18));
console.log(isAdult('18'));
console.log(isAdult(19));`,errorMessage:'(no error — but the function should only return "just turned adult" when age is exactly the number 18, not the string "18". Currently both pass.)',expectedConsoleOutput:`just turned adult
something else
something else`,hint:'`==` does loose comparison and treats 18 and "18" as equal. Use `===` for strict equality (value and type both match).'},{type:"debugthis",id:"m2-l7-d5",brokenCode:`const user = {
  name: 'Gabs',
  age: 28,
};

console.log(user.name);
console.log(user.Age);`,errorMessage:"(no error — but the second log prints undefined instead of 28)",expectedConsoleOutput:`Gabs
28`,hint:"JavaScript property names are case-sensitive. `user.Age` is a different property from `user.age`."}]},Lw={id:"m2-l8-review-quiz",moduleId:"javascript",title:"Module 2 review",objective:"Self-check on everything from variables through loops.",estimatedMinutes:8,blocks:[{type:"explain",id:"m2-l8-e1",listen:!0,markdown:`## You've finished the language module

Ten questions on what you just learned. Variables, types, operators,
control flow, functions, arrays, objects, loops, common bugs.

Don't worry about the score on the first pass — if you get six or
seven right, the module did its job. The rest will land when you
write code that uses them.`}],quiz:[{id:"m2-l8-q1",prompt:"Which keyword would you use for a variable whose value will never change?",options:["var","let","const","final"],answerIndex:2,explanation:"const for values that won't be reassigned. let when you actually need to change them. var is the old keyword — skip it."},{id:"m2-l8-q2",prompt:"What is the type of the value `null`?",options:["undefined","object (a historical quirk)","null","boolean"],answerIndex:1,explanation:'`typeof null` returns `"object"` — a famous JS mistake from 1995 that\'s still around.'},{id:"m2-l8-q3",prompt:"Which operator should you almost always use to compare two values?",options:["==","===","is","eq"],answerIndex:1,explanation:"`===` checks value and type. `==` does loose comparison with surprise type coercion — skip it."},{id:"m2-l8-q4",prompt:"What does `arr.length` return for `const arr = [10, 20, 30]`?",options:["2","3","30","[10, 20, 30]"],answerIndex:1},{id:"m2-l8-q5",prompt:"What's the last valid index of an array of length N?",options:["N","N + 1","N - 1","0"],answerIndex:2,explanation:"Arrays are zero-indexed. Length 3 means indexes 0, 1, 2."},{id:"m2-l8-q6",prompt:"A function with no `return` statement returns what?",options:["null","0","undefined","It throws an error"],answerIndex:2},{id:"m2-l8-q7",prompt:"Which loop is best when you want to walk every element of an array without managing an index?",options:["for (let i = 0; i < arr.length; i++)","while","for...of","do...while"],answerIndex:2},{id:"m2-l8-q8",prompt:'Given `const user = { name: "Gabs", age: 28 }`, what does `user["name"]` return?',options:['"Gabs"',"undefined","It throws — bracket notation needs a number","Gabs (without quotes)"],answerIndex:0,explanation:'Bracket notation works with string keys, just like dot notation. The return value is the string "Gabs".'},{id:"m2-l8-q9",prompt:"Why is `for (let i = 0; i <= arr.length; i++)` almost always a bug?",options:["It's slower","The last iteration accesses arr[length], which is undefined","It only works on numbers","It runs the loop in reverse"],answerIndex:1,explanation:"The off-by-one. Use `<` not `<=`."},{id:"m2-l8-q10",prompt:"Which expression evaluates to `true`?",options:['5 === "5"',"0 === false",'"abc".length === 3',"undefined === null"],answerIndex:2,explanation:'`===` requires same type and same value. The string "abc" has length 3, and 3 === 3.'}]},_w=[jw,Cw,Iw,Aw,Pw,Ow,Rw,Lw],Mw={id:"m3-l1-why-the-terminal",moduleId:"terminal",title:"Why the terminal",objective:"Open a terminal and understand what the prompt is telling you.",estimatedMinutes:6,blocks:[{type:"explain",id:"m3-l1-e1",listen:!0,markdown:`## The terminal is a typing interface for your computer

A graphical app shows you buttons. The terminal shows you a **prompt** —
a place to type a command, hit Enter, and see what comes back.

It feels old-fashioned because it is. It also happens to be how most
serious development gets done. Why?

- It's **fast**. One command can move a hundred files. Try clicking that.
- It's **scriptable**. Anything you type can be saved to a file and run
  later, or in CI, or on a server.
- It's **honest**. Every tool — Node, Git, npm, your build scripts — runs
  in the terminal. You can read the actual error message instead of a
  loading spinner.

In Module 4 you'll use Git from the terminal. In Modules 7 and 8 you'll
run a server. None of that has a button.`},{type:"explain",id:"m3-l1-e2",listen:!0,markdown:`### How to open one

- **Windows** — open the Start menu, type "Terminal" or "PowerShell", press Enter.
  (PowerShell is fine for everything in Ship It.)
- **Mac** — Cmd+Space, type "Terminal", press Enter.
- **Linux** — you know.

You'll see a window with some text and a blinking cursor. That blinking
cursor is the **prompt** — it's waiting for you to type.

### What the prompt usually shows

\`\`\`
ntako@DESKTOP-XYZ MINGW64 ~/Desktop
$
\`\`\`

Three pieces of info in one line:

- \`ntako@DESKTOP-XYZ\` — your username and machine name.
- \`~/Desktop\` — your **current directory** (where commands will run).
- \`$\` — the actual prompt. The cursor sits after this.

The \`~\` is a shortcut for your home folder. Different shells use
different prompts, but they all show "who you are, where you are."`},{type:"command",id:"m3-l1-c1",label:"See where you are",command:"pwd",expectedOutput:`Something like:

/c/Users/ntako/Desktop

(pwd = "print working directory")`},{type:"command",id:"m3-l1-c2",label:"See who you are",command:"whoami",expectedOutput:"Your username — e.g.: ntako"}]},Dw={id:"m3-l2-navigating",moduleId:"terminal",title:"Navigating the filesystem",objective:"Move between folders with cd, list contents with ls.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l2-e1",listen:!0,markdown:`## Your computer is a tree of folders

Every file lives inside a folder. Folders live inside other folders. The
**root** is the very top — \`C:\\\` on Windows, \`/\` on Mac/Linux.

In the terminal, you're always **inside** one folder at a time — your
**current working directory**. Commands run from there. You move around
with two commands:

- \`cd <folder>\` — change directory.
- \`ls\` — list what's in the current folder.`},{type:"command",id:"m3-l2-c1",label:"List what's in the current folder",command:"ls",expectedOutput:`A list of files and folders in the current directory.

Try "ls -la" for more detail (hidden files + sizes).`},{type:"command",id:"m3-l2-c2",label:"Move into a subfolder",command:"cd Desktop",expectedOutput:`No output if it works — but pwd should now show you're inside Desktop.

If you see "No such file or directory", check the spelling and case.`},{type:"explain",id:"m3-l2-e2",listen:!0,markdown:`### Going back up

To move **up** one folder, use \`..\` (two dots):

\`\`\`
cd ..
\`\`\`

To go up two: \`cd ../..\`. To jump straight to your home folder, just
\`cd\` with no argument, or \`cd ~\`.

### Tab completion is your best friend

Start typing a folder name and press **Tab**. The shell completes it for
you. If there's more than one match, press Tab twice to see the options.

You will save hours of your life by using Tab instead of typing full paths.`},{type:"command",id:"m3-l2-c3",label:"Go back to your home folder",command:"cd ~",expectedOutput:"No output — pwd will now show your home directory."}]},zw={id:"m3-l3-creating-files",moduleId:"terminal",title:"Creating files and folders",objective:"Make a folder, create a file inside it, view its contents.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l3-e1",listen:!0,markdown:`## Four commands that do everything

\`mkdir <name>\` — make a directory (folder).

\`touch <name>\` — create an empty file. (Mac/Linux/Git Bash. On
PowerShell use \`New-Item <name>\` instead.)

\`cat <file>\` — print a file's contents to the terminal.

\`rm <file>\` — delete a file. \`rm -r <folder>\` deletes a folder and
everything in it. **No undo, no recycle bin** — the file is gone.

A good drill: make a folder, jump into it, create a file, look at it,
delete it, jump out.`},{type:"command",id:"m3-l3-c1",label:"Make a practice folder",command:"mkdir ship-it-practice",expectedOutput:"No output — but `ls` should now show ship-it-practice in the current directory."},{type:"command",id:"m3-l3-c2",label:"Move into it",command:"cd ship-it-practice",expectedOutput:"No output. pwd will confirm you're inside."},{type:"command",id:"m3-l3-c3",label:"Create an empty file",command:"touch hello.txt",expectedOutput:`No output. ls should show hello.txt.

PowerShell users: use "New-Item hello.txt" instead.`},{type:"command",id:"m3-l3-c4",label:"Write something into the file with echo",command:'echo "first line" > hello.txt',expectedOutput:`No output. The > redirects echo's output INTO the file (overwriting).

Use >> to append instead of overwrite.`},{type:"command",id:"m3-l3-c5",label:"Read the file back",command:"cat hello.txt",expectedOutput:"first line"},{type:"explain",id:"m3-l3-e2",listen:!0,markdown:`### Clean up after yourself

To remove the practice folder, first go back up:

\`\`\`
cd ..
rm -r ship-it-practice
\`\`\`

\`rm -r\` (recursive) deletes the folder and everything inside it. Be
careful — there's no recycle bin in the terminal. Always double-check
the path before you press Enter on an \`rm -r\` command. Especially
\`rm -rf /\`. Don't ever run that. (Ask a senior engineer one day what
happens. Then never run it.)`}]},Fw={id:"m3-l4-pipes-and-redirects",moduleId:"terminal",title:"Pipes and redirects",objective:"Chain commands together. Save output to files.",estimatedMinutes:6,blocks:[{type:"explain",id:"m3-l4-e1",listen:!0,markdown:`## Pipes — feeding one command's output into another

The pipe character is \`|\`. It takes the output of the command on the
left and feeds it as input to the command on the right.

\`\`\`
ls | wc -l
\`\`\`

\`ls\` lists files. \`wc -l\` counts lines. Together: "count the files
in this folder." One pipe replaces a script you'd otherwise have to
write.

You'll see real chains like:

\`\`\`
git log | grep "fix:" | head -20
\`\`\`

— "show me the last 20 commit messages that start with fix:".`},{type:"explain",id:"m3-l4-e2",listen:!0,markdown:'### Redirects — saving output to a file\n\nThree operators:\n\n- `>` — write output to a file, **overwriting** what was there.\n- `>>` — **append** output to a file.\n- `<` — feed a file\'s contents in as input.\n\n```\necho "hello" > greetings.txt        # creates greetings.txt with "hello"\necho "again" >> greetings.txt       # adds "again" as a second line\ncat greetings.txt                   # hello\\nagain\n```\n\nQuick mental model: `|` connects commands. `>` and `>>` connect\ncommands to files. That\'s the whole story.'},{type:"command",id:"m3-l4-c1",label:"Count files in the current folder",command:"ls | wc -l",expectedOutput:"A number — the count of items ls printed."},{type:"command",id:"m3-l4-c2",label:"Save the file list to a file",command:"ls > files.txt",expectedOutput:`No output — but cat files.txt now shows the listing.

Clean up after with: rm files.txt`}]},Uw={id:"m3-l5-env-vars-and-path",moduleId:"terminal",title:"Environment variables and PATH",objective:"Understand what env vars are and why PATH matters.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l5-e1",listen:!0,markdown:"## Env vars — settings the shell carries around\n\nAn **environment variable** is a named value the shell remembers. Every\nprocess you start inherits those values.\n\nYou'll meet a few specific ones constantly:\n\n- `PATH` — folders the shell searches when you type a command.\n- `HOME` — your home folder.\n- `USER` — your username.\n\nRead one with `echo $NAME`:\n\n```\necho $HOME\n```\n\nIn PowerShell the syntax is `$env:HOME` or `$env:USERPROFILE`."},{type:"command",id:"m3-l5-c1",label:"Show your HOME path",command:"echo $HOME",expectedOutput:`Something like: /c/Users/ntako

PowerShell: $env:USERPROFILE`},{type:"explain",id:"m3-l5-e2",listen:!0,markdown:`## PATH — where the shell finds programs

When you type \`node\`, the shell doesn't magically know where node lives.
It walks every folder in \`PATH\`, in order, and runs the first \`node\`
it finds.

\`\`\`
echo $PATH
\`\`\`

You'll see a long string of folders separated by \`:\` (or \`;\` on
Windows). That's why the **first** thing to check when "command not found"
shows up is whether the installer added the program's folder to PATH —
and whether you closed and reopened the terminal so the new PATH is picked up.

This is also why some installers tell you "you may need to restart your
terminal." The PATH only loads when the terminal starts.`},{type:"command",id:"m3-l5-c2",label:"Find where a command actually lives",command:"which node",expectedOutput:`A full path like: /c/Program Files/nodejs/node

PowerShell: (Get-Command node).Source`}]},Bw={id:"m3-l6-survival-cheatsheet",moduleId:"terminal",title:"Survival cheatsheet",objective:"Memorise the 20 commands that cover 95% of daily terminal work.",estimatedMinutes:5,blocks:[{type:"explain",id:"m3-l6-e1",listen:!0,markdown:'## The 20 that matter\n\nYou don\'t need to memorise hundreds of commands. These twenty get you\nthrough nearly everything.\n\n### Navigation\n- `pwd` — print current directory.\n- `ls` — list files. `ls -la` = detailed + hidden.\n- `cd <dir>` — change directory. `cd ..` = up. `cd ~` = home. `cd -` = back to previous.\n\n### Files & folders\n- `mkdir <name>` — make folder. `mkdir -p a/b/c` = make nested.\n- `touch <name>` — create empty file (Mac/Linux/Git Bash).\n- `cp <src> <dest>` — copy.\n- `mv <src> <dest>` — move or rename.\n- `rm <file>` — delete file. `rm -r <folder>` = delete folder.\n\n### Reading\n- `cat <file>` — print file.\n- `head -20 <file>` — first 20 lines.\n- `tail -20 <file>` — last 20 lines. `tail -f` = follow as it grows.\n\n### Searching\n- `grep "pattern" <file>` — find lines matching.\n- `grep -r "pattern" .` — search recursively in current folder.\n\n### Plumbing\n- `|` pipe one command into another.\n- `>` write to file. `>>` append.\n- `&&` chain — only run the next if the previous succeeds.\n- `Ctrl+C` — stop the currently running command.\n- `Ctrl+L` — clear the screen.\n- `Tab` — autocomplete.'},{type:"explain",id:"m3-l6-e2",listen:!0,markdown:`## Two patterns to drill until they're reflex

### "Where am I, what's here, who am I?"

\`\`\`
pwd
ls
whoami
\`\`\`

Run these any time you're confused. They take 2 seconds and tell you
where you are in the tree, what's around you, and what user is doing
the typing. That's enough to unstick most "wait what?" moments.

### "Show me what just happened"

If a command fails, the error is in the terminal — scroll up. If it
ran but you can't see the result, try:

\`\`\`
ls -la                    # latest changes first with -lt
cat <file you just made>  # confirm the contents
\`\`\`

That's the whole loop: run command → look at output → adjust. The
terminal isn't trying to trick you. It's the bluntest tool in the box.`},{type:"command",id:"m3-l6-c1",label:"Print Ship It's starting incantation",command:"pwd && ls && whoami",expectedOutput:"Three sections of output, one per command. && only runs the next command if the previous succeeded."}]},Hw=[Mw,Dw,zw,Fw,Uw,Bw],Ww={id:"m4-l1-what-is-git",moduleId:"git-github",title:"What Git is (and isn't)",objective:"Build a clear mental model of Git before touching the commands.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l1-e1",listen:!0,markdown:`## Git is a time machine for your code

Every time you take a snapshot ("commit"), Git remembers the exact state
of every file in your project. You can go back to any commit. You can
see what changed between any two. You can branch off in a new direction
and come back later.

That's the whole point.

### Git vs GitHub

People use the two words interchangeably. They're not the same:

- **Git** — the tool that runs on your laptop. Tracks changes. No
  internet needed.
- **GitHub** — a website that hosts Git repositories online. It's where
  you push your local Git history so you (and others, and your laptop's
  replacement) can pull it back down.

You can use Git without GitHub (just local history). You cannot use
GitHub without Git.`},{type:"explain",id:"m4-l1-e2",listen:!0,markdown:`### Three places your code lives once Git is involved

1. **Working directory** — the actual files you edit in your editor.
2. **Staging area (the "index")** — a holding pen for changes you've
   marked as ready to commit.
3. **The repository** — the saved history of commits.

A typical cycle:

\`\`\`
edit some files                    -> working directory
git add <files>                    -> staging area
git commit -m "message"            -> repository
git push                           -> GitHub
\`\`\`

The staging area trips up beginners. It exists so you can edit ten
files but commit only the three that belong together. We'll drill it.`},{type:"readthis",id:"m4-l1-r1",language:"bash",code:`# user edits A.js and B.js
git add A.js
git commit -m "update A"
# what happened to B.js?`,question:"What state is B.js in after these commands?",options:["Committed too — `git commit -m` commits everything","Still in the working directory, not staged, not committed","Staged but not committed","Deleted"],answerIndex:1,explanation:"Only files passed to `git add` get staged. The commit only includes staged changes. B.js is still sitting modified in the working directory."}]},qw={id:"m4-l2-installing-git",moduleId:"git-github",title:"Installing Git and configuring identity",objective:"Have Git installed, your name and email set, ready to commit.",estimatedMinutes:5,blocks:[{type:"explain",id:"m4-l2-e1",listen:!0,markdown:`## Install Git, then tell it who you are

Git is one download. On Windows, Git for Windows includes "Git Bash" —
a Unix-style terminal that's better than CMD for everything in this app.

- **Windows** — go to git-scm.com, download, install with default
  options. Reopen your terminal afterwards.
- **Mac** — usually pre-installed. Open Terminal and run \`git --version\`.
  If missing, you'll be prompted to install Xcode command-line tools.
- **Linux** — \`sudo apt install git\` (Debian/Ubuntu) or your package
  manager's equivalent.

Then set two values so your commits know who made them:`},{type:"command",id:"m4-l2-c1",label:"Check Git is installed",command:"git --version",expectedOutput:"Something like: git version 2.52.0"},{type:"command",id:"m4-l2-c2",label:"Set your name (used on every commit)",command:'git config --global user.name "Your Name"',expectedOutput:'No output. Replace "Your Name" with your actual name.'},{type:"command",id:"m4-l2-c3",label:"Set your email (matches your GitHub account)",command:'git config --global user.email "you@example.com"',expectedOutput:"No output. Use the same email you'll use on GitHub so commits show up linked to your profile."},{type:"command",id:"m4-l2-c4",label:"Confirm the config",command:"git config --global --list",expectedOutput:`A list including user.name=... and user.email=...

This is stored in ~/.gitconfig.`}]},Vw={id:"m4-l3-init-add-commit",moduleId:"git-github",title:"init, add, commit — the core loop",objective:"Turn any folder into a Git repo and make your first commit.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l3-e1",listen:!0,markdown:"## Three commands. Memorise them.\n\n`git init` — turn the current folder into a Git repository. Creates a\nhidden `.git` folder where all history is stored.\n\n`git add <file>` — stage a file for the next commit. `git add .`\nstages everything that changed.\n\n`git commit -m \"message\"` — take a snapshot of the staged files with\na message describing what changed.\n\nThat's the loop. You'll run `add` and `commit` hundreds of times\nper project."},{type:"command",id:"m4-l3-c1",label:"Make and enter a practice folder",command:"mkdir git-practice && cd git-practice",expectedOutput:"No output. pwd should show you're inside git-practice."},{type:"command",id:"m4-l3-c2",label:"Turn it into a Git repo",command:"git init",expectedOutput:`Initialized empty Git repository in <path>/git-practice/.git/

ls -la now shows a hidden .git folder.`},{type:"command",id:"m4-l3-c3",label:"Make a file",command:'echo "hello git" > readme.txt',expectedOutput:"No output. cat readme.txt shows: hello git"},{type:"command",id:"m4-l3-c4",label:"Stage it",command:"git add readme.txt",expectedOutput:"No output. The file is now in the staging area."},{type:"command",id:"m4-l3-c5",label:"Commit it",command:'git commit -m "first commit"',expectedOutput:`[main (root-commit) abc1234] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt`},{type:"explain",id:"m4-l3-e2",listen:!0,markdown:`### Commit messages — the rule

Write commit messages in the imperative mood, like you're giving an
order to the codebase:

✅ \`add login page\`
✅ \`fix off-by-one in invoice loop\`
✅ \`refactor payment service into modules\`

❌ \`added login page\`
❌ \`I fixed a bug\`
❌ \`stuff\`

Future-you reading the log will thank present-you. Keep it under 70
characters. If you need more detail, add a blank line and a longer
paragraph below.`}]},Gw={id:"m4-l4-status-and-log",moduleId:"git-github",title:"status and log — your two reality checks",objective:"Always know what changed and what's already saved.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l4-e1",listen:!0,markdown:`## Run \`git status\` constantly

\`git status\` shows three buckets:

1. **Untracked files** — files Git has never seen.
2. **Changes not staged for commit** — tracked files you've modified
   but haven't \`git add\`-ed yet.
3. **Changes to be committed** — files in the staging area, waiting
   for \`git commit\`.

Run this before every commit. It tells you exactly what's about to be
saved.`},{type:"command",id:"m4-l4-c1",label:"See current state of the repo",command:"git status",expectedOutput:`A report of branches, staged changes, unstaged changes, and untracked files.

Nothing changed? You'll see: "nothing to commit, working tree clean."`},{type:"explain",id:"m4-l4-e2",listen:!0,markdown:`## \`git log\` — the history

Shows the chain of commits, newest first:

\`\`\`
git log
\`\`\`

Each entry shows the commit hash (a long ID), the author, the date,
and the message. Press \`q\` to exit if it scrolls into a pager.

A more compact view that fits in one screen:

\`\`\`
git log --oneline
\`\`\`

That shows one commit per line, short hash + message. Use this 99% of
the time.`},{type:"command",id:"m4-l4-c2",label:"See your commit history compactly",command:"git log --oneline",expectedOutput:`A list of commits like:

abc1234 first commit`},{type:"command",id:"m4-l4-c3",label:"See what actually changed in your unstaged work",command:"git diff",expectedOutput:`Shows line-by-line additions (+) and removals (-) in modified files.

For staged changes use: git diff --staged`}]},$w={id:"m4-l5-branching",moduleId:"git-github",title:"Branches — parallel timelines",objective:"Create a branch, switch between branches, see what branch you're on.",estimatedMinutes:7,blocks:[{type:"explain",id:"m4-l5-e1",listen:!0,markdown:"## A branch is a moveable label\n\nA branch is just a name that points at a commit. When you commit on a\nbranch, the label moves forward to the new commit. That's it.\n\nThis sounds boring until you realise what it means: you can have **two**\nlabels — one called `main` and one called `new-feature` — and they\ncan move independently. You're now developing in two parallel timelines.\n\nThe default branch in new repos is called `main`. (Older repos use\n`master`.) Every commit you've made so far has been on `main`."},{type:"command",id:"m4-l5-c1",label:"See your branches",command:"git branch",expectedOutput:`A list of branches with a * next to the current one:

* main`},{type:"command",id:"m4-l5-c2",label:"Create a new branch and switch to it",command:"git checkout -b new-feature",expectedOutput:`Switched to a new branch 'new-feature'

The -b flag means "create the branch as well as switch to it."`},{type:"explain",id:"m4-l5-e2",listen:!0,markdown:`### Switching back and forth

\`\`\`
git checkout main             # go back to main
git checkout new-feature      # back to the feature branch
\`\`\`

Modern Git also has \`git switch <branch>\` which does the same thing
with cleaner syntax. Both work.

When you switch, **your working files change** to match the branch
you switched to. If you had uncommitted work, Git either carries it
with you or refuses to switch (if it would lose the changes). Commit
or stash first to be safe.`},{type:"command",id:"m4-l5-c3",label:"Switch back to main",command:"git checkout main",expectedOutput:"Switched to branch 'main'"}]},Yw={id:"m4-l6-merging",moduleId:"git-github",title:"Merging — pulling a branch back into main",objective:"Merge a feature branch into main and understand fast-forward vs merge commit.",estimatedMinutes:7,blocks:[{type:"explain",id:"m4-l6-e1",listen:!0,markdown:`## The merge workflow

You finished work on \`new-feature\`. Now you want those commits to be
part of \`main\`.

The pattern is always:

\`\`\`
git checkout main             # switch to the branch you want to merge INTO
git merge new-feature         # bring new-feature's commits into main
\`\`\`

Two things can happen:

1. **Fast-forward merge** — \`main\` hasn't moved since you branched off,
   so Git just slides the \`main\` label forward to match \`new-feature\`.
   Clean, no merge commit.

2. **Merge commit** — \`main\` got new commits while you were working
   on \`new-feature\`. Git creates a new "merge commit" that has both
   branches as parents.

Most workflows are fine with either. Some teams insist on no merge
commits — they rebase instead. That's a Module-12 conversation.`},{type:"readthis",id:"m4-l6-r1",language:"bash",code:`# starting on main, 1 commit ahead of new-feature
git checkout new-feature
# add 2 more commits on new-feature
# meanwhile no one touches main
git checkout main
git merge new-feature`,question:"What kind of merge happens here?",options:["A merge commit (because new-feature has more commits)","Fast-forward — main hasn't moved, so the label just slides forward","It fails — you have to rebase first","It creates a new branch"],answerIndex:1,explanation:"Fast-forward applies when the branch you're merging into hasn't diverged. main has no new commits since the branch point, so its label moves forward to match new-feature."},{type:"command",id:"m4-l6-c1",label:"Merge a feature branch into main",command:"git merge new-feature",expectedOutput:`If fast-forward:
  Updating abc1234..def5678
  Fast-forward

If merge commit: editor opens for the merge message — save and close to finish.`},{type:"command",id:"m4-l6-c2",label:"Delete the feature branch after merging",command:"git branch -d new-feature",expectedOutput:`Deleted branch new-feature (was abc1234).

Use -D (capital) to force delete if Git refuses (e.g. unmerged work).`}]},Jw={id:"m4-l7-conflicts",moduleId:"git-github",title:"Merge conflicts",objective:"Recognise a merge conflict, resolve it, finish the merge.",estimatedMinutes:9,blocks:[{type:"explain",id:"m4-l7-e1",listen:!0,markdown:`## What's a conflict?

A conflict happens when two branches both changed the same line in
the same file, and Git can't tell which version you want.

Imagine \`main\` has this line:

\`\`\`
const port = 3000;
\`\`\`

You're on \`new-feature\` and change it to:

\`\`\`
const port = 4000;
\`\`\`

Meanwhile, someone else changed \`main\` to:

\`\`\`
const port = 5000;
\`\`\`

When you merge, Git stops and says: "I don't know which one you want.
You decide."`},{type:"explain",id:"m4-l7-e2",listen:!0,markdown:`### What a conflict looks like in the file

Git rewrites the conflicting file with both versions marked:

\`\`\`
<<<<<<< HEAD
const port = 5000;
=======
const port = 4000;
>>>>>>> new-feature
\`\`\`

\`<<<<<<< HEAD\` — beginning of "what's on the current branch (main)".
\`=======\` — divider.
\`>>>>>>> new-feature\` — end of "what's on the incoming branch".

### How to fix it

1. Open the file.
2. **Delete** the \`<<<\`, \`===\`, \`>>>\` lines.
3. **Keep** the version you actually want — or write a third version that
   combines both.
4. Save the file.
5. \`git add <file>\` to mark the conflict resolved.
6. \`git commit\` (no \`-m\` needed — Git prefills a merge message).

Repeat for every conflicting file.`},{type:"explain",id:"m4-l7-e3",listen:!0,markdown:`### If you're in over your head — abort

If a merge gets messy and you want to undo and pretend you never tried:

\`\`\`
git merge --abort
\`\`\`

Back to the state you were in before \`git merge\`. No harm done.

This is good to know. The first time you hit a real merge conflict in
a project with 50 files changed, the urge to back out is healthy.`},{type:"readthis",id:"m4-l7-r1",language:"bash",code:`<<<<<<< HEAD
const greeting = 'hello';
=======
const greeting = 'hi';
>>>>>>> feature-branch`,question:'You want to keep "hello". What should the file look like after you edit it?',options:["Just the line: const greeting = 'hello';","Both lines, with the conflict markers","Both lines, without the conflict markers","You should run git merge --abort instead"],answerIndex:0,explanation:"Remove all conflict markers AND the version you don't want. The file should end up as if the conflict never existed."}]},Qw={id:"m4-l8-remotes-and-push",moduleId:"git-github",title:"Remotes, push, and pull",objective:"Connect a local repo to GitHub, push commits up, pull changes down.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l8-e1",listen:!0,markdown:`## A "remote" is a Git repo somewhere else

Usually on GitHub. Sometimes on your colleague's machine. Sometimes on
a private server. Git doesn't care — to Git, a remote is just a URL it
can talk to.

The standard remote name is \`origin\`. By convention it's the place
you originally cloned from, or the place you primarily push to.`},{type:"command",id:"m4-l8-c1",label:"Add a remote",command:"git remote add origin https://github.com/your-name/your-repo.git",expectedOutput:"No output. Use the URL of an empty GitHub repo you just created."},{type:"command",id:"m4-l8-c2",label:"List configured remotes",command:"git remote -v",expectedOutput:`origin <url> (fetch)
origin <url> (push)`},{type:"explain",id:"m4-l8-e2",listen:!0,markdown:"### Push and pull\n\n`git push` — send your local commits **up** to the remote.\n\n`git pull` — bring the remote's commits **down** to your local copy.\n(This is actually `git fetch` + `git merge` in one step.)\n\nFirst push of a new branch:\n\n```\ngit push -u origin main\n```\n\nThe `-u` sets up tracking — after that, plain `git push` and\n`git pull` know what to do."},{type:"command",id:"m4-l8-c3",label:"Push your main branch and start tracking",command:"git push -u origin main",expectedOutput:`Counting objects... Writing objects... 
To https://github.com/your-name/your-repo.git
 * [new branch]      main -> main`},{type:"command",id:"m4-l8-c4",label:"Pull any new changes from the remote",command:"git pull",expectedOutput:`If you're up to date: "Already up to date."
Otherwise: Updating <hash>..<hash> followed by a list of changed files.`}]},Kw={id:"m4-l9-cloning-and-prs",moduleId:"git-github",title:"Cloning and pull requests",objective:"Copy a GitHub repo to your machine. Submit changes via a PR.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l9-e1",listen:!0,markdown:"## Clone — getting a remote repo down to your machine\n\nIf a repo already exists on GitHub (yours or someone else's), `git clone`\ncopies it locally with full history:\n\n```\ngit clone https://github.com/some-user/some-repo.git\n```\n\nThat creates a new folder named `some-repo` containing the files and\nthe `.git` history. The `origin` remote is set up automatically."},{type:"explain",id:"m4-l9-e2",listen:!0,markdown:`## Pull requests — the GitHub workflow

A pull request (PR) is GitHub-specific. The flow:

1. Create a feature branch locally: \`git checkout -b add-tag-filter\`.
2. Commit your work on that branch.
3. Push the branch: \`git push -u origin add-tag-filter\`.
4. Go to GitHub. It shows a yellow banner: "Compare & pull request."
   Click it.
5. Write a title, write a description, click "Create pull request."
6. Reviewers comment. You push more commits to the same branch. The PR
   updates automatically.
7. When approved, click "Merge pull request."

A PR is just a UI on top of \`git merge\`. The Git stuff is the same.
GitHub adds: a review interface, discussion, status checks (CI), and
the ability to require approvals before merging.

For solo work (Ship It is solo work) you usually skip PRs and merge
directly into \`main\`. But you should know how PRs work because every
team uses them.`},{type:"command",id:"m4-l9-c1",label:"Clone a repo to your machine",command:"git clone https://github.com/some-user/some-repo.git",expectedOutput:`Cloning into 'some-repo'...
remote: Counting objects...
Receiving objects: 100%
...`}]},Xw={id:"m4-l10-gitignore",moduleId:"git-github",title:".gitignore — files you never want to commit",objective:"Write a .gitignore that excludes node_modules, build output, and secrets.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l10-e1",listen:!0,markdown:"## Some files don't belong in Git\n\n`.gitignore` is a text file at the root of your repo. Every line is\na pattern Git uses to **skip** matching files when staging.\n\nYou should ignore:\n\n- **`node_modules/`** — hundreds of MB of installed packages. Anyone\n  who clones your repo runs `npm install` to recreate them.\n- **`dist/`, `build/`** — compiled output. Regenerated from source.\n- **`.env`, `.env.local`** — environment variables, often containing\n  secrets like API keys. **Never commit these.**\n- **`*.log`** — runtime logs.\n- **Editor files** — `.vscode/`, `.idea/` (sometimes).\n- **OS files** — `.DS_Store` (Mac), `Thumbs.db` (Windows)."},{type:"readthis",id:"m4-l10-r1",language:"bash",code:`# .gitignore
node_modules
dist
.env
.env.local
*.log
.DS_Store
.vscode/*
!.vscode/extensions.json`,question:"What does the last line do?",options:["Adds .vscode/extensions.json to the ignore list","Comments out the .vscode rule above","Whitelists .vscode/extensions.json — ignore everything in .vscode EXCEPT this file","Marks the file as important"],answerIndex:2,explanation:'A `!` prefix means "do NOT ignore this." It overrides the previous pattern. Useful when you want to ignore a folder but keep one file in it.'},{type:"explain",id:"m4-l10-e2",listen:!0,markdown:`### If you already committed something you shouldn't have

\`.gitignore\` only affects untracked files. If a file is already tracked
by Git, adding it to .gitignore does nothing.

To stop tracking a file (but keep it on disk):

\`\`\`
git rm --cached <file>
\`\`\`

Then commit. The file stays in your working directory but Git stops
following changes to it.

This is what to do if you accidentally committed \`node_modules\` or
\`.env\`. (For \`.env\` specifically — if you pushed it to GitHub, also
**rotate the secrets** immediately. Git history keeps everything forever.)`},{type:"command",id:"m4-l10-c1",label:"Stop tracking a file that shouldn't be in Git",command:"git rm --cached .env",expectedOutput:`rm '.env'

Then commit the removal: git commit -m "stop tracking .env"`}]},Zw={id:"m4-l11-undoing-things",moduleId:"git-github",title:"Undoing things — the safety net",objective:"Roll back unsaved edits, undo a stage, fix the last commit, panic less.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l11-e1",listen:!0,markdown:`## The four levels of "undo"

### 1. Throw away unsaved changes in a file

You edited a file, didn't commit, want to go back to the last committed
version:

\`\`\`
git checkout -- <file>
# or in newer Git:
git restore <file>
\`\`\`

The edits are gone. This is destructive. Don't run it if you wanted
those edits.`},{type:"explain",id:"m4-l11-e2",listen:!0,markdown:`### 2. Unstage a file (but keep the changes)

You ran \`git add\` on something you didn't mean to. Take it back out
of the staging area:

\`\`\`
git restore --staged <file>
# or older syntax:
git reset HEAD <file>
\`\`\`

The file is unstaged. Your edits to it are preserved.`},{type:"explain",id:"m4-l11-e3",listen:!0,markdown:`### 3. Fix the last commit (message or contents)

You committed but the message has a typo, OR you forgot to stage a file:

\`\`\`
git add <forgotten-file>          # optional
git commit --amend
\`\`\`

This **rewrites** the most recent commit. If you haven't pushed yet,
no harm. If you've already pushed, you'll have to force-push — which
can cause problems for anyone who pulled. Be careful on shared branches.`},{type:"explain",id:"m4-l11-e4",listen:!0,markdown:`### 4. Throw away the last commit (keep the changes)

You committed but you want to redo the whole commit:

\`\`\`
git reset HEAD~1
\`\`\`

The commit is gone from history, but the changes are still in your
working directory (unstaged). Re-stage and re-commit how you want.

### Nuclear option: throw away the last commit AND the changes

\`\`\`
git reset --hard HEAD~1
\`\`\`

**Destructive.** Your last commit and all the changes in it are gone.
Use this only when you're sure.

### When you're really lost

\`git reflog\` — shows the recent history of where HEAD has been. Often
you can recover from "I just did a hard reset and want to undo that"
by finding the right commit hash in reflog and \`git reset --hard <hash>\`
back to it. Git almost never truly loses data within ~30 days.`},{type:"command",id:"m4-l11-c1",label:"Find old commits if you panic",command:"git reflog",expectedOutput:"A history of every move HEAD has made — including resets, checkouts, commits. Each line has a hash you can git reset --hard back to."}]},ev=[Ww,qw,Vw,Gw,$w,Yw,Jw,Qw,Kw,Xw,Zw],tv={id:"m5-l1-html-structure",moduleId:"html-css-dom",title:"HTML — the structure of a page",objective:"Read and write the basic HTML skeleton every page has.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l1-e1",listen:!0,markdown:`## HTML is the bones of the web

An HTML document is text written with **tags**. Tags come in pairs:
an opening tag, content, and a closing tag.

\`\`\`html
<p>This is a paragraph.</p>
\`\`\`

\`<p>\` opens. \`</p>\` closes (note the slash). The text in between is
what shows on the page.

Some tags are self-closing — no closing pair:

\`\`\`html
<img src="cat.jpg" alt="A cat" />
<br />
\`\`\``},{type:"explain",id:"m5-l1-e2",listen:!0,markdown:`### Every HTML file has the same skeleton

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is the visible content.</p>
  </body>
</html>
\`\`\`

- \`<!doctype html>\` — tells the browser "this is HTML5."
- \`<html>\` — the root of the document.
- \`<head>\` — metadata the user doesn't see directly: title, scripts,
  styles, viewport settings.
- \`<body>\` — everything visible on the page.

You'll never write this skeleton from scratch in real projects — your
framework (or a snippet) gives it to you. But you should be able to
read it.`},{type:"readthis",id:"m5-l1-r1",language:"html",code:`<!doctype html>
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <h1>About me</h1>
    <p>Hello, I'm Gabs.</p>
  </body>
</html>`,question:"What shows up in the browser tab's title?",options:["About me","About","Hello, I'm Gabs.","<title>About</title>"],answerIndex:1,explanation:"The <title> in <head> sets the tab title. <h1> shows on the page."},{type:"typealong",id:"m5-l1-ta1",language:"html",instructions:"Retype this skeleton. You'll write it dozens of times.",code:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, world</h1>
  </body>
</html>`}]},nv={id:"m5-l2-semantic-tags",moduleId:"html-css-dom",title:"Semantic tags",objective:"Pick the right tag for the job. Stop wrapping everything in <div>.",estimatedMinutes:6,blocks:[{type:"explain",id:"m5-l2-e1",listen:!0,markdown:'## Tags carry meaning\n\nBeginners reach for `<div>` for everything. Don\'t. HTML has tags\nthat describe what something **is**, not just where it sits.\n\nThe big ones:\n\n- `<header>` — top-of-page banner.\n- `<nav>` — navigation links.\n- `<main>` — the main content of the page.\n- `<section>` — a thematic grouping (with a heading inside).\n- `<article>` — a self-contained piece (a blog post, a note).\n- `<aside>` — tangential content (a sidebar).\n- `<footer>` — bottom-of-page area.\n\nFor typography:\n\n- `<h1>` through `<h6>` — headings. Use one `<h1>` per page.\n- `<p>` — a paragraph.\n- `<ul>`, `<ol>`, `<li>` — unordered/ordered list, list item.\n- `<a href="...">` — a link.\n- `<strong>` — important. (Bold is the default style but the meaning\n  is "important.")\n- `<em>` — emphasized. (Italic by default, meaning is "stressed.")\n\nWhen you use these, screen readers, search engines, and other developers\nall understand your page better. Bonus: CSS can target them directly.'},{type:"readthis",id:"m5-l2-r1",language:"html",code:`<main>
  <article>
    <h2>My note</h2>
    <p>Today I learned about HTML.</p>
  </article>
</main>`,question:"Which tag would you replace with a <div> if you had to flatten this?",options:["You'd need to replace <main> with a <div>","None — the semantic version is fine as-is","All of them are wrong, this should be all <div>s","<h2> should be a <p> with a class"],answerIndex:1,explanation:"This is already correctly structured. <main> wraps the main content, <article> wraps a self-contained piece, <h2> for the heading, <p> for prose. Don't fix what isn't broken."},{type:"typealong",id:"m5-l2-ta1",language:"html",instructions:"Retype this semantic structure.",code:`<header>
  <h1>Ship It</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/gauntlet">Gauntlet</a>
  </nav>
</header>
<main>
  <article>
    <h2>Welcome</h2>
    <p>This is your training rig.</p>
  </article>
</main>`}]},rv={id:"m5-l3-attributes-and-forms",moduleId:"html-css-dom",title:"Attributes and forms",objective:"Add attributes to tags. Build a simple input form.",estimatedMinutes:8,blocks:[{type:"explain",id:"m5-l3-e1",listen:!0,markdown:'## Attributes — extra info on a tag\n\nAttributes go inside the opening tag, name and value separated by `=`:\n\n```html\n<a href="https://example.com" target="_blank">link</a>\n<img src="photo.jpg" alt="A photo" width="200" />\n```\n\nA few you\'ll use constantly:\n\n- `id` — a unique label for one element. Use it sparingly.\n- `class` — a label for styling. Many elements can share the same\n  class.\n- `href` — the URL for a link.\n- `src` — the source for images, scripts.\n- `alt` — text shown if the image fails to load (and read out by\n  screen readers).\n- `type`, `name`, `value` — for form inputs.'},{type:"explain",id:"m5-l3-e2",listen:!0,markdown:'## Forms — the input layer\n\n```html\n<form>\n  <label for="name">Name</label>\n  <input id="name" type="text" />\n\n  <label for="age">Age</label>\n  <input id="age" type="number" />\n\n  <button type="submit">Save</button>\n</form>\n```\n\nThree core pieces:\n\n- `<form>` — the wrapper.\n- `<input>` — a single field. The `type` decides what kind:\n  `text`, `number`, `email`, `password`, `checkbox`, `radio`,\n  `date`, more.\n- `<label>` — describes a field. The `for` attribute matches the\n  input\'s `id` — clicking the label focuses the input.\n\n`<button>` ends the form. By default, clicking it submits the form\n(triggering a page reload). In Module 9 you\'ll wire JS to intercept the\nsubmit and handle it without reloading.'},{type:"typealong",id:"m5-l3-ta1",language:"html",instructions:"Retype a simple two-field form.",code:`<form>
  <label for="title">Title</label>
  <input id="title" type="text" />

  <label for="body">Body</label>
  <textarea id="body"></textarea>

  <button type="submit">Save note</button>
</form>`}]},iv={id:"m5-l4-css-basics",moduleId:"html-css-dom",title:"CSS — style for the page",objective:"Write CSS rules. Connect them to HTML by tag, class, and id.",estimatedMinutes:8,blocks:[{type:"explain",id:"m5-l4-e1",listen:!0,markdown:"## CSS — selector + declarations\n\n```css\nh1 {\n  color: red;\n  font-size: 24px;\n}\n```\n\nTwo parts:\n\n1. **Selector** — `h1` — picks which elements to style.\n2. **Declaration block** — the `{ ... }` — pairs of `property: value;`.\n\nThis rule means: every `<h1>` on the page gets red text at 24px."},{type:"explain",id:"m5-l4-e2",listen:!0,markdown:`### Three kinds of selectors you'll use 99% of the time

\`\`\`css
/* By tag — every <p> */
p {
  line-height: 1.5;
}

/* By class — every element with class="card" */
.card {
  border: 1px solid gray;
  padding: 16px;
}

/* By id — the single element with id="hero" */
#hero {
  background: black;
}
\`\`\`

Prefer **classes** for almost everything. IDs are global and exclusive
(one per page). Classes are reusable.`},{type:"explain",id:"m5-l4-e3",listen:!0,markdown:`### Loading CSS into HTML

External file (recommended):

\`\`\`html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
\`\`\`

Inline in a \`<style>\` block (fine for small things):

\`\`\`html
<head>
  <style>
    body { font-family: sans-serif; }
  </style>
</head>
\`\`\`

Avoid the \`style="..."\` attribute on individual elements. It works but
mixing styling into HTML scales badly.`},{type:"readthis",id:"m5-l4-r1",language:"html",code:`<style>
  .danger { color: red; }
  #title { font-size: 32px; }
  p { line-height: 1.5; }
</style>

<h1 id="title">Hello</h1>
<p class="danger">Oh no</p>
<p>Normal text</p>`,question:"What colour is the second <p>?",options:["Red","Black (default — no rule matches)","It inherits red from .danger","Undefined"],answerIndex:1,explanation:"The .danger class is only on the first <p>. The second <p> matches only the `p` selector (line-height) and inherits the default text colour."}]},ov={id:"m5-l5-box-model-and-layout",moduleId:"html-css-dom",title:"The box model and flex layout",objective:"Reason about spacing. Lay out a row of items with flexbox.",estimatedMinutes:9,blocks:[{type:"explain",id:"m5-l5-e1",listen:!0,markdown:`## Every element is a box

Each box has four spacing layers, from inside out:

1. **Content** — the text or child elements.
2. **Padding** — space inside the border.
3. **Border** — the line around the box.
4. **Margin** — space outside the border.

\`\`\`css
.card {
  padding: 16px;
  border: 1px solid gray;
  margin: 24px;
}
\`\`\`

You write padding/margin in shorthand: \`16px\` = all four sides.
\`16px 24px\` = top/bottom 16, left/right 24. \`8px 12px 16px 4px\` =
top right bottom left (clockwise).

Add this to your global CSS once, forever:

\`\`\`css
* { box-sizing: border-box; }
\`\`\`

That makes \`width\` mean "total width including padding and border"
instead of just the content width. Saves you from a thousand layout bugs.`},{type:"explain",id:"m5-l5-e2",listen:!0,markdown:'## Flexbox — laying out a row or column\n\nWrap children in a flex container:\n\n```css\n.row {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n```\n\n- `display: flex` — flips this element into flex mode. Its direct\n  children become flex items, arranged in a row by default.\n- `flex-direction: column` — switch to vertical stacking.\n- `gap` — space between children. Way better than margin tricks.\n- `align-items` — alignment on the cross axis (vertical for a row).\n  `center` lines them up vertically.\n- `justify-content` — alignment on the main axis. `space-between`,\n  `center`, `flex-end`, `flex-start`.\n\nFlex is the right tool for almost every "I need this row to look like\nthat" problem. Grid is for two-dimensional layouts — you\'ll meet it\nwhen you need it.'},{type:"typealong",id:"m5-l5-ta1",language:"html",instructions:"A header with a logo on the left and a button on the right.",code:`<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid #ccc;
  }
  button {
    padding: 8px 16px;
    border: 1px solid #333;
    background: white;
    cursor: pointer;
  }
</style>

<header>
  <h1>Ship It</h1>
  <button>Sign in</button>
</header>`}]},sv={id:"m5-l6-the-dom",moduleId:"html-css-dom",title:"The DOM — HTML as a JS tree",objective:"Understand that the browser turns your HTML into JS-reachable objects.",estimatedMinutes:6,blocks:[{type:"explain",id:"m5-l6-e1",listen:!0,markdown:`## DOM = Document Object Model

When the browser loads HTML, it builds a tree of objects in memory.
Each tag becomes a JS object. Each text node becomes a JS object.
This tree is the **DOM**.

Your JavaScript can read from and write to that tree. That's how a
page becomes interactive — JS doesn't manipulate the HTML text on disk,
it manipulates the live tree.

The global \`document\` is the entry point. Everything dangles off it.

\`\`\`js
console.log(document.title);     // the current <title>
console.log(document.body);      // the <body> element
\`\`\``},{type:"explain",id:"m5-l6-e2",listen:!0,markdown:"### The two queries you need\n\n`document.querySelector(selector)` — find the first element matching\na CSS selector. Returns the element, or `null`.\n\n`document.querySelectorAll(selector)` — find all elements matching.\nReturns a NodeList (array-like).\n\n```js\nconst title = document.querySelector('h1');\nconst allParagraphs = document.querySelectorAll('p');\n```\n\nThe selector syntax is the same as CSS — `'h1'`, `'.card'`, `'#hero'`,\n`'main > p:first-child'`, all of it.\n\nIf you can find it with CSS, you can find it with `querySelector`."},{type:"readthis",id:"m5-l6-r1",language:"js",code:`// page has <h1 id="hero">Hello</h1>
const el = document.querySelector('#hero');
console.log(el.textContent);`,question:"What does this log?",options:["<h1>Hello</h1>","Hello","null","undefined"],answerIndex:1,explanation:'`textContent` is the text inside the element — just "Hello", without the tags.'}]},av={id:"m5-l7-events",moduleId:"html-css-dom",title:"Events — making the page interactive",objective:"Listen for clicks. React with code.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l7-e1",listen:!0,markdown:"## addEventListener\n\n`element.addEventListener(event, handler)` — when `event` happens on\n`element`, run `handler`.\n\n```js\nconst btn = document.querySelector('button');\n\nbtn.addEventListener('click', () => {\n  console.log('button clicked');\n});\n```\n\nCommon events:\n\n- `'click'` — mouse click or tap.\n- `'input'` — every keystroke in a text field.\n- `'change'` — when an input loses focus and value changed.\n- `'submit'` — form submit.\n- `'keydown'` — keyboard key pressed.\n- `'load'` — page or resource finished loading.\n\nThe handler function gets an **event object** as its argument. You'll\nmostly care about `event.target` (the element that fired the event)\nand `event.preventDefault()` (stop the browser's default behaviour —\nneeded for forms so they don't reload the page)."},{type:"explain",id:"m5-l7-e2",listen:!0,markdown:`### The form submit pattern

\`\`\`html
<form id="add-note">
  <input id="title" />
  <button type="submit">Add</button>
</form>
\`\`\`

\`\`\`js
const form = document.querySelector('#add-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();    // stop the page reload
  const title = document.querySelector('#title').value;
  console.log('new note:', title);
});
\`\`\`

This pattern is the entire backbone of every form on the web — until
you reach React in Module 9 and learn the more declarative version.`},{type:"typealong",id:"m5-l7-ta1",language:"js",instructions:"A counter button.",code:`let count = 0;

const btn = document.querySelector('#counter');
const display = document.querySelector('#display');

btn.addEventListener('click', () => {
  count = count + 1;
  display.textContent = 'Count: ' + count;
});`}]},lv={id:"m5-l8-localstorage",moduleId:"html-css-dom",title:"localStorage — persistence without a backend",objective:"Save data that survives a page reload. Read it back. Delete it.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l8-e1",listen:!0,markdown:`## localStorage — a small key-value store in the browser

The browser gives every site a few MB of permanent storage per origin
(domain + port). Anything you write there survives reloads, restarts,
and closing the tab. It's wiped only if the user clears site data.

The API is small — four methods:

\`\`\`js
localStorage.setItem('key', 'value');    // save
const v = localStorage.getItem('key');   // read
localStorage.removeItem('key');          // delete one
localStorage.clear();                    // delete everything
\`\`\`

**Important:** localStorage only stores strings. For anything else
(arrays, objects), serialise with JSON.`},{type:"explain",id:"m5-l8-e2",listen:!0,markdown:`### The JSON dance

\`\`\`js
const notes = [
  { id: 1, title: 'first' },
  { id: 2, title: 'second' },
];

// Save
localStorage.setItem('notes', JSON.stringify(notes));

// Read
const raw = localStorage.getItem('notes');
const restored = raw ? JSON.parse(raw) : [];

console.log(restored);   // [{ id: 1, title: 'first' }, ...]
\`\`\`

\`JSON.stringify\` turns a JS value into a string. \`JSON.parse\` turns
that string back. Always check for \`null\` from \`getItem\` — that's
what you get if the key has never been set.

This is also exactly how Ship It saves your progress. Go look at
\`ship-it:progress:v1\` in DevTools → Application → Local Storage.`},{type:"codechallenge",id:"m5-l8-cc1",spec:`Write code that saves the array [1, 2, 3] under the key "nums", reads it back, and logs the parsed array.

Expected output:

[1,2,3]`,starterCode:`// localStorage isn't available in the sandbox, so we'll fake it:
const store = {};
const fakeStorage = {
  setItem: (k, v) => { store[k] = v; },
  getItem: (k) => k in store ? store[k] : null,
};

// 1. JSON.stringify [1, 2, 3] and save under 'nums'
// 2. Get it back, JSON.parse it
// 3. console.log the parsed array
`,expectedConsoleOutput:"[1,2,3]"}]},uv=[tv,nv,rv,iv,ov,sv,av,lv],cv={id:"m6-l1-callbacks-and-the-event-loop",moduleId:"async-fetch",title:"Callbacks and the event loop",objective:"Understand why JS uses callbacks for things that take time.",estimatedMinutes:7,blocks:[{type:"explain",id:"m6-l1-e1",listen:!0,markdown:`## JS runs on one thread

Your JavaScript runs on a single thread — one thing at a time, in order.
If a line of code takes 10 seconds, the whole page locks up for 10 seconds.

So JS doesn't *block* on slow things. When you ask for something that
takes time — a network request, a timer, reading a file in Node — JS
hands the work off, keeps going, and **calls you back when it's done**.

That callback is a function you pass in. The runtime stashes it and
runs it later when the result is ready.

\`\`\`js
console.log('start');

setTimeout(() => {
  console.log('after 1 second');
}, 1000);

console.log('end');
\`\`\`

Output:

\`\`\`
start
end
after 1 second
\`\`\`

The \`setTimeout\` doesn't pause execution. It registers the callback,
\`console.log('end')\` runs immediately, then a second later the callback
fires.`},{type:"explain",id:"m6-l1-e2",listen:!0,markdown:`### The event loop in one sentence

The event loop is the thing that watches the queue of "callbacks ready
to run," and runs them one by one as soon as the main thread is free.

You don't manage it. You just need to know it exists, because it
explains why:

- \`setTimeout(fn, 0)\` still doesn't run \`fn\` synchronously — it
  schedules it for "after this turn of the loop."
- A \`while (true) {}\` loop locks up the entire page — it never lets
  the loop pick up the next callback.
- You can write code that *looks* sequential but actually runs in a
  surprising order (next lesson).`},{type:"readthis",id:"m6-l1-r1",language:"js",code:`console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');`,question:"What's the output order?",options:["a, b, c","a, c, b","b, a, c","c, a, b"],answerIndex:1,explanation:"`setTimeout(..., 0)` still defers to the next event-loop tick. The synchronous lines `a` and `c` run first."}]},dv={id:"m6-l2-promises",moduleId:"async-fetch",title:"Promises",objective:"Read and chain promises. Recognise then/catch.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l2-e1",listen:!0,markdown:`## A Promise is "a value, eventually"

A Promise represents work in progress. It will eventually finish, with
one of two outcomes:

- **Resolved** with a value (the work succeeded).
- **Rejected** with an error (the work failed).

You don't wait for it directly. You attach callbacks for each outcome:

\`\`\`js
fetch('https://api.example.com/users')
  .then((response) => {
    console.log('got response', response);
  })
  .catch((error) => {
    console.log('failed', error);
  });
\`\`\`

\`.then(fn)\` — "when this promise resolves, run fn with the value."
\`.catch(fn)\` — "if it rejects, run fn with the error."`},{type:"explain",id:"m6-l2-e2",listen:!0,markdown:`### Chaining

Each \`.then\` returns a new promise. Return a value from inside
\`.then\` and the next \`.then\` receives it:

\`\`\`js
fetch('/users')
  .then((response) => response.json())   // parse body, return promise
  .then((users) => {
    console.log('first user:', users[0]);
  })
  .catch((error) => {
    console.log('something failed:', error);
  });
\`\`\`

A single \`.catch\` at the end catches errors from any earlier step in
the chain. That's why this pattern is clean.

The old callback style — passing callbacks into callbacks into
callbacks — leads to "callback hell." Promises flatten it.`},{type:"readthis",id:"m6-l2-r1",language:"js",code:`function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('a');
delay(100).then(() => console.log('b'));
console.log('c');`,question:"What's the output order?",options:["a, b, c","a, c, b","a, c, then b ~100ms later","b, a, c"],answerIndex:2,explanation:"`delay(100)` returns a Promise that resolves after 100ms. The .then callback runs then. Synchronous logs run first."}]},pv={id:"m6-l3-async-await",moduleId:"async-fetch",title:"async / await",objective:"Write async code that reads like sync code.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l3-e1",listen:!0,markdown:`## async and await — sugar for promises

\`await\` pauses an async function until a promise resolves, then gives
you the resolved value. The whole \`.then\` chain becomes ordinary-looking
lines:

\`\`\`js
async function loadUsers() {
  const response = await fetch('/users');
  const users = await response.json();
  console.log('first user:', users[0]);
}

loadUsers();
\`\`\`

Two rules:

1. \`await\` only works inside a function marked \`async\`.
2. An async function **always** returns a Promise. Even if you
   \`return 5\`, the caller gets a Promise that resolves to 5.

Internally, this code does exactly what the \`.then\` chain did. It just
reads better.`},{type:"explain",id:"m6-l3-e2",listen:!0,markdown:`### Error handling with try/catch

Use the regular \`try { } catch (err) { }\` block:

\`\`\`js
async function loadUsers() {
  try {
    const response = await fetch('/users');
    const users = await response.json();
    console.log('got', users.length, 'users');
  } catch (err) {
    console.log('failed:', err.message);
  }
}
\`\`\`

This is the pattern you'll write for every API call in Modules 7 onward.
Memorise the shape.`},{type:"codechallenge",id:"m6-l3-cc1",spec:`Write an async function \`wait\` that returns the string "done" after 50ms. Call it and log the resolved value.

Expected output:

done`,starterCode:`function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function wait() {
  // await delay(50), then return 'done'
}

wait().then((value) => console.log(value));
`,expectedConsoleOutput:"done"}]},hv={id:"m6-l4-fetch-and-http",moduleId:"async-fetch",title:"fetch and the HTTP basics",objective:"Send a GET request. Parse JSON. Recognise the four common HTTP methods.",estimatedMinutes:9,blocks:[{type:"explain",id:"m6-l4-e1",listen:!0,markdown:"## fetch — the modern HTTP client\n\n```js\nconst response = await fetch('https://api.example.com/users');\nconst users = await response.json();\n```\n\n`fetch(url)` returns a Promise that resolves to a **Response object**.\nThe response isn't the data yet — it's the response object you get to\ninspect:\n\n- `response.ok` — true if status 200-299.\n- `response.status` — the HTTP status code (200, 404, 500, ...).\n- `response.json()` — read the body as JSON. Returns a Promise.\n- `response.text()` — read the body as plain text.\n\nThe double `await` (`await fetch` then `await response.json()`) is\nnot a mistake. The network handshake and the body download are two\nseparate stages."},{type:"explain",id:"m6-l4-e2",listen:!0,markdown:`### HTTP methods you'll use

- **GET** — read. \`fetch(url)\` defaults to GET.
- **POST** — create.
- **PUT** — replace (or sometimes update).
- **PATCH** — partial update.
- **DELETE** — delete.

Sending data — POST a JSON body:

\`\`\`js
await fetch('/notes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'new note' }),
});
\`\`\`

Three things you must set:

1. \`method\` — \`'POST'\`, \`'PUT'\`, etc.
2. \`headers\` with \`Content-Type: application/json\`.
3. \`body\` — your data, **JSON.stringify-ed** (fetch doesn't do this
   for you).`},{type:"readthis",id:"m6-l4-r1",language:"js",code:`async function load() {
  const res = await fetch('/missing');
  console.log('status:', res.status);
  console.log('ok?', res.ok);
}`,question:"The /missing endpoint returns 404. Does fetch throw?",options:["Yes — fetch rejects on any non-2xx response",'No — fetch only rejects on network failure. 404 is still a "successful" response.',"Only if you forget to await it","Only in Node, not in the browser"],answerIndex:1,explanation:"A common gotcha. fetch resolves for any HTTP status. Check `res.ok` (or `res.status`) yourself and throw if the response is bad."}]},fv={id:"m6-l5-error-handling",moduleId:"async-fetch",title:"Error handling for real APIs",objective:"Handle network failures, bad statuses, and bad JSON without crashing.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l5-e1",listen:!0,markdown:`## Three ways an API call can fail

1. **Network failure** — the request never made it. WiFi off, DNS bad,
   server unreachable. fetch rejects the Promise — you catch with
   try/catch.
2. **Bad status code** — request reached the server but the server
   returned 400, 401, 403, 404, 500, etc. fetch does NOT reject. You
   have to check \`response.ok\` yourself.
3. **Bad body** — server returned 200 but the body isn't valid JSON.
   \`response.json()\` rejects. You catch it the same way.

The defensive shape:

\`\`\`js
async function loadUsers() {
  try {
    const res = await fetch('/users');
    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.error('loadUsers failed:', err.message);
    return [];
  }
}
\`\`\`

Three lines for the happy path. Three lines for the unhappy path. That's
the cost of being honest with the network.`},{type:"explain",id:"m6-l5-e2",listen:!0,markdown:`### Common status codes — quick reference

- **2xx** — success.
  - 200 OK.
  - 201 Created (used after POST).
  - 204 No Content (used after DELETE).
- **3xx** — redirect. fetch follows these automatically.
- **4xx** — client error (your request was wrong).
  - 400 Bad Request.
  - 401 Unauthorized (no auth or auth failed).
  - 403 Forbidden (authenticated but not allowed).
  - 404 Not Found.
  - 422 Unprocessable Entity (validation failed).
- **5xx** — server error (their problem).
  - 500 Internal Server Error.
  - 502 Bad Gateway.
  - 503 Service Unavailable.

Memorise the four-letter rule: **4xx is you, 5xx is them.**`}]},mv={id:"m6-l6-parallel-requests",moduleId:"async-fetch",title:"Parallel requests with Promise.all",objective:"Run multiple fetches at the same time and wait for all to finish.",estimatedMinutes:7,blocks:[{type:"explain",id:"m6-l6-e1",listen:!0,markdown:`## Sequential vs parallel

Sequential — each \`await\` waits for the previous:

\`\`\`js
const users = await fetch('/users').then(r => r.json());
const posts = await fetch('/posts').then(r => r.json());
// total time: users time + posts time
\`\`\`

If both requests take 200ms, total is 400ms. But they don't depend on
each other — they could run **in parallel**:

\`\`\`js
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json()),
]);
// total time: ~200ms — the slower of the two
\`\`\`

\`Promise.all([p1, p2, ...])\` returns a Promise that resolves when **all**
promises in the array resolve. The resolved value is an array of results
in the same order.

If any promise rejects, the whole \`Promise.all\` rejects. Use
\`Promise.allSettled\` if you want every result even when some fail.`},{type:"codechallenge",id:"m6-l6-cc1",spec:`Two delay functions return values after a short wait. Use Promise.all to start them in parallel and log the two results joined by " and ".

Expected output:

one and two`,starterCode:`function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  // use Promise.all to run delay(10, 'one') and delay(10, 'two') in parallel
  // then console.log them joined by ' and '
}

main();
`,expectedConsoleOutput:"one and two"}]},gv={id:"m6-l7-async-bugs",moduleId:"async-fetch",title:"Async bugs you'll write",objective:"Recognise three async mistakes everyone makes.",estimatedMinutes:9,blocks:[{type:"explain",id:"m6-l7-e1",listen:!0,markdown:`## Three async footguns

The next blocks are Debug This challenges for the three most common
async mistakes. You'll write each of these at least once — better to
recognise them.`},{type:"debugthis",id:"m6-l7-d1",brokenCode:`function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  const a = delay(10, 'one');
  const b = delay(10, 'two');
  console.log(a, b);
}

main();`,errorMessage:"(no error — but the logs are Promise objects, not the string values)",expectedConsoleOutput:"one two",hint:"You declared main async but never awaited the delays. Add `await` to a and b."},{type:"debugthis",id:"m6-l7-d2",brokenCode:`async function getValue() {
  return 42;
}

const v = getValue();
console.log(v);`,errorMessage:"(no error — but the log shows a Promise instead of 42)",expectedConsoleOutput:"42",hint:"Async functions always return a Promise, even when you return a plain value. Use .then(v => console.log(v)) — or wrap the call in an async function and await it."},{type:"debugthis",id:"m6-l7-d3",brokenCode:`function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  const items = ['a', 'b', 'c'];
  items.forEach(async (item) => {
    await delay(10);
    console.log(item);
  });
  console.log('done');
}

run();`,errorMessage:'(no error — but "done" prints BEFORE the items, when it should print after)',expectedConsoleOutput:`a
b
c
done`,hint:"Array.forEach does not wait for async callbacks. Replace forEach with a for..of loop — that does respect await."}]},yv=[cv,dv,pv,hv,fv,mv,gv],xv={id:"m7-l1-npm-and-package-json",moduleId:"node-express",title:"npm and package.json",objective:"Start a Node project and understand package.json.",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l1-e1",listen:!0,markdown:`## npm — Node's package manager

\`npm\` is installed alongside Node. It does three things you'll use
every day:

1. **Initialises projects** — creates a \`package.json\` file that
   records what your project is and what libraries it depends on.
2. **Installs libraries** — pulls third-party code from the npm
   registry into a \`node_modules\` folder.
3. **Runs scripts** — \`npm start\`, \`npm run dev\`, etc.

A \`package.json\` is just a JSON file that describes your project.
Every Node project has one. Open it in your editor any time you want
to see what a project depends on.`},{type:"command",id:"m7-l1-c1",label:"Start a new Node project",command:"mkdir my-api && cd my-api && npm init -y",expectedOutput:`Creates my-api/, jumps in, and runs npm init with defaults (-y means "yes to all questions").

Now ls shows package.json.`},{type:"readthis",id:"m7-l1-r1",language:"js",code:`{
  "name": "my-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}`,question:"What does `npm start` do based on this package.json?",options:["Installs all dependencies","Runs `node index.js`","Opens the package.json in your editor","Nothing — start isn't a real npm command"],answerIndex:1,explanation:"`npm start` looks for `scripts.start` and runs whatever's there. Same for `npm run <name>` — it runs `scripts.<name>`."},{type:"explain",id:"m7-l1-e2",listen:!0,markdown:`### Two kinds of dependencies

When you install a package, you can mark it as either:

- A regular **dependency** (\`npm install express\`) — needed at runtime.
- A **dev dependency** (\`npm install -D nodemon\`) — only needed during
  development (testing tools, type definitions, dev servers).

Both end up in \`node_modules/\`. The split only matters for production
deploys, which often skip dev dependencies to save space.

You'll see them in \`package.json\` as \`"dependencies"\` and
\`"devDependencies"\` blocks.`},{type:"command",id:"m7-l1-c2",label:"Install express as a regular dependency",command:"npm install express",expectedOutput:`Downloads express into node_modules/, adds it to package.json's "dependencies", and creates package-lock.json (a record of exact versions for reproducible installs).`}]},wv={id:"m7-l2-first-express-server",moduleId:"node-express",title:"Your first Express server",objective:"Write, run, and hit a tiny Express server.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l2-e1",listen:!0,markdown:`## Three lines of Express

\`\`\`js
import express from 'express';
const app = express();
app.listen(3000);
\`\`\`

That's a server. It does nothing useful — every request returns "404
Not Found" — but it's running. To actually respond, you add a **route**:

\`\`\`js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
\`\`\`

Now \`GET /\` returns "hello, world".

The handler function gets two arguments — \`req\` (the incoming request)
and \`res\` (the response you build). The most common methods on \`res\`:

- \`res.send(string)\` — send a string.
- \`res.json(object)\` — send a JSON response. Auto-sets Content-Type.
- \`res.status(code)\` — set the HTTP status. Chainable: \`res.status(404).json({...})\`.`},{type:"explain",id:"m7-l2-e2",listen:!0,markdown:`### Running it

Save the code as \`index.js\`. In your terminal:

\`\`\`
node index.js
\`\`\`

You'll see "listening on http://localhost:3000". Open that URL in your
browser. You should see "hello, world".

To stop the server: **Ctrl+C** in the terminal.

When you change the code, you have to stop and restart Node. That gets
old fast — \`nodemon\` watches your files and auto-restarts:

\`\`\`
npm install -D nodemon
npx nodemon index.js
\`\`\`

For Ship It-pace work, nodemon (or Node's built-in \`--watch\` flag)
is essential. Without it you'll waste a minute every change.`},{type:"typealong",id:"m7-l2-ta1",language:"js",instructions:"Retype the minimal Express server.",code:`import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});`},{type:"readthis",id:"m7-l2-r1",language:"js",code:`app.get('/api/health', (req, res) => {
  res.json({ ok: true, version: '1.0.0' });
});`,question:"When a client GETs /api/health, what content-type header is set automatically?",options:["text/plain","text/html","application/json","No content-type is set"],answerIndex:2,explanation:"`res.json(obj)` serializes the object to JSON and sets `Content-Type: application/json`. Use it for any JSON response."}]},vv={id:"m7-l3-routes-and-params",moduleId:"node-express",title:"Routes and URL params",objective:"Match URL patterns. Read path parameters and query strings.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l3-e1",listen:!0,markdown:`## Verb + path = route

Each route registers a handler for one HTTP method on one URL pattern:

\`\`\`js
app.get('/todos', listAll);
app.get('/todos/:id', getOne);
app.post('/todos', create);
app.put('/todos/:id', update);
app.delete('/todos/:id', remove);
\`\`\`

Express matches incoming requests against these in registration order
and runs the first match's handler. The five methods above are the
ones you'll use for CRUD APIs.`},{type:"explain",id:"m7-l3-e2",listen:!0,markdown:"### Path parameters — `:name` in the URL\n\n```js\napp.get('/todos/:id', (req, res) => {\n  const id = req.params.id;     // a string like \"42\"\n  res.json({ id });\n});\n```\n\nA colon in the path declares a parameter. Express extracts it into\n`req.params`. The name on the left of the colon (`id`) is the key.\n\nNote: `req.params.id` is always a **string**, even when the URL is\n`/todos/42`. Convert with `Number(req.params.id)` if you need a number."},{type:"explain",id:"m7-l3-e3",listen:!0,markdown:`### Query strings — \`?key=value\` after the path

\`\`\`js
// GET /todos?done=true&limit=10
app.get('/todos', (req, res) => {
  console.log(req.query.done);    // "true"
  console.log(req.query.limit);   // "10"
});
\`\`\`

Anything after \`?\` in the URL is parsed into \`req.query\`. Like params,
all values are strings — coerce them yourself if you need a number or
boolean.

Query strings are for **filtering, paginating, and sorting**. Path
parameters are for **identifying a resource**. Loose rule:

- \`GET /users/42\` — give me user 42.
- \`GET /users?role=admin\` — give me the users matching this filter.`},{type:"readthis",id:"m7-l3-r1",language:"js",code:`app.get('/products/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.json({ category, id });
});

// request: GET /products/shoes/123`,question:"What does the response JSON look like?",options:['{ "category": "shoes", "id": "123" }','{ "category": "shoes", "id": 123 }','{ "params": ["shoes", "123"] }',"An error — Express can't have two params"],answerIndex:0,explanation:'You can have as many path params as you want. All values come through as strings — `123` stays "123".'}]},kv={id:"m7-l4-request-bodies",moduleId:"node-express",title:"Request bodies and express.json()",objective:"Accept JSON payloads in POST and PUT requests.",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l4-e1",listen:!0,markdown:`## Reading the body of a request

GET requests don't have a body. POST, PUT, and PATCH usually do.

Express doesn't parse the body by default — you have to tell it how.
For JSON APIs, that's one line:

\`\`\`js
import express from 'express';

const app = express();
app.use(express.json());   // <-- this

app.post('/todos', (req, res) => {
  const { title } = req.body;
  console.log('got new todo:', title);
  res.status(201).json({ id: 1, title });
});
\`\`\`

\`express.json()\` is **middleware** — code that runs on every incoming
request before your route handlers. It reads the body as a JSON string
and puts the parsed object on \`req.body\`.

Without that line, \`req.body\` is \`undefined\`. **The single most
common Express beginner bug.**`},{type:"explain",id:"m7-l4-e2",listen:!0,markdown:`### Testing it with curl

\`\`\`bash
curl -X POST http://localhost:3000/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title":"buy milk"}'
\`\`\`

Three things:

- \`-X POST\` — use the POST method.
- \`-H "Content-Type: application/json"\` — tell the server it's JSON.
  If you omit this, \`express.json()\` doesn't run and req.body stays empty.
- \`-d '{"title":"buy milk"}'\` — the body.

The response should be a JSON object the server sent back. If it isn't,
the first thing to check is the Content-Type header and whether
\`app.use(express.json())\` is in your code.`},{type:"typealong",id:"m7-l4-ta1",language:"js",instructions:"A POST route that echoes the body back.",code:`import express from 'express';

const app = express();
app.use(express.json());

app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(3000);`},{type:"readthis",id:"m7-l4-r1",language:"js",code:`app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  res.status(201).json({ id: 1, title });
});`,question:"A client POSTs `{}` (empty body, but valid JSON). What does the response look like?",options:["500 Internal Server Error","201 Created with { id: 1, title: undefined }",'400 Bad Request with { error: "title is required" }',"404 Not Found"],answerIndex:2,explanation:"When `req.body.title` is missing, the truthy check fails and we return 400. Always validate the input you actually need."}]},bv={id:"m7-l5-status-codes",moduleId:"node-express",title:"Status codes — speak HTTP properly",objective:"Return the right HTTP status for each outcome.",estimatedMinutes:6,blocks:[{type:"explain",id:"m7-l5-e1",listen:!0,markdown:`## The eight status codes you actually need

Module 6 covered these from the client side. Here they are from the
server side — when you should send each one.

- **200 OK** — default. Use for successful GET, PUT, PATCH.
- **201 Created** — POST that created a new resource. Set this manually
  after every successful insert.
- **204 No Content** — DELETE that succeeded. Don't include a body.
- **400 Bad Request** — the client sent something invalid (missing
  field, wrong type).
- **401 Unauthorized** — no auth token, or the token is invalid.
- **403 Forbidden** — authenticated, but not allowed to do this.
- **404 Not Found** — the resource doesn't exist.
- **500 Internal Server Error** — something blew up server-side.
  (Express catches uncaught throws and sends 500 automatically.)

For Ship It's APIs, these eight cover everything.`},{type:"explain",id:"m7-l5-e2",listen:!0,markdown:`### A CRUD route, with proper statuses

\`\`\`js
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  const newTodo = { id: nextId++, title, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);            // 201 — created
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'not found' });
  }
  res.json(todo);                            // implicit 200
});

app.delete('/todos/:id', (req, res) => {
  const idx = todos.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) {
    return res.status(404).json({ error: 'not found' });
  }
  todos.splice(idx, 1);
  res.status(204).end();                     // 204 — no body
});
\`\`\`

Notice the pattern: validate → act → respond. Every route is some
variant of these three steps.`},{type:"readthis",id:"m7-l5-r1",language:"js",code:`app.put('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'not found' });
  }
  Object.assign(todo, req.body);
  res.json(todo);
});`,question:"A client PUTs to /todos/999 but no todo with that id exists. What status is returned?",options:["200","201","404","500"],answerIndex:2,explanation:"The handler explicitly returns 404 when the todo isn't found. Without that check, you'd hit `Object.assign(undefined, ...)` which throws — Express would catch it and return 500. Always check before you act."}]},Sv={id:"m7-l6-middleware",moduleId:"node-express",title:"Middleware",objective:"Understand the request pipeline. Write a logger and an error handler.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l6-e1",listen:!0,markdown:`## Middleware = "code that runs before the route"

You've already seen one: \`app.use(express.json())\`. Middleware
functions have the shape:

\`\`\`js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();    // hand off to the next middleware (or the route)
}

app.use(logger);
\`\`\`

Three arguments: \`req\`, \`res\`, \`next\`. **You must call \`next()\`**
to pass control along — otherwise the request hangs forever.

Middleware runs in the order you registered it. A typical request walks
through:

\`\`\`
incoming request
  → express.json() (parse body)
  → logger (log it)
  → auth middleware (check token)
  → your route handler
  → response goes out
\`\`\``},{type:"explain",id:"m7-l6-e2",listen:!0,markdown:`### Auth middleware — the most common real example

\`\`\`js
function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'no token' });
  }
  const token = header.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid token' });
  }
}

// apply to specific routes
app.get('/me', requireAuth, (req, res) => {
  res.json(req.user);
});

// or to ALL routes under a prefix
app.use('/api/', requireAuth);
\`\`\`

If \`next()\` is never called, the route handler never runs. The
response goes out from inside the middleware. That's how you "block"
unauthorised requests cleanly.`},{type:"explain",id:"m7-l6-e3",listen:!0,markdown:`### Error-handling middleware

Middleware with **four** arguments is treated specially — Express
recognises it as an error handler. Register it LAST:

\`\`\`js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'something went wrong' });
});
\`\`\`

Whenever a route or earlier middleware throws (synchronously) or calls
\`next(err)\`, this runs. Without it, Express's default would still
send 500, but with a less useful HTML page.

For async route handlers, throwing inside an \`async\` function needs
extra care — wrap in try/catch and call \`next(err)\`, or use the
\`express-async-errors\` package which automates it.`},{type:"readthis",id:"m7-l6-r1",language:"js",code:`function brokenLogger(req, res, next) {
  console.log(req.method, req.url);
}

app.use(brokenLogger);
app.get('/', (req, res) => res.send('hi'));`,question:"A client GETs /. What happens?",options:['The response is "hi"',"The request hangs forever — brokenLogger never calls next()","500 Internal Server Error","Express auto-detects and calls next() for you"],answerIndex:1,explanation:"Forgetting `next()` is the single most common middleware bug. The browser will spin until it times out."}]},Ev={id:"m7-l7-splitting-routes",moduleId:"node-express",title:"Splitting routes across files",objective:"Stop putting everything in index.js. Use express.Router().",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l7-e1",listen:!0,markdown:`## When index.js hits 200 lines, split it

\`express.Router()\` is a mini-app you can build separately and mount
into the main app:

\`\`\`js
// routes/todos.js
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json(allTodos));
router.get('/:id', (req, res) => res.json(getOne(req.params.id)));
router.post('/', (req, res) => res.status(201).json(create(req.body)));

export default router;
\`\`\`

\`\`\`js
// index.js
import express from 'express';
import todosRouter from './routes/todos.js';

const app = express();
app.use(express.json());

app.use('/todos', todosRouter);    // <-- mount it under /todos

app.listen(3000);
\`\`\`

Now every route inside the router automatically gets prefixed with
\`/todos\`. \`router.get('/')\` becomes \`GET /todos\`.
\`router.get('/:id')\` becomes \`GET /todos/:id\`. The router file
doesn't know or care about the prefix.`},{type:"explain",id:"m7-l7-e2",listen:!0,markdown:`### A clean small project layout

\`\`\`
my-api/
├── index.js              # boot app, mount routers, listen
├── routes/
│   ├── todos.js
│   ├── users.js
│   └── auth.js
├── db.js                 # database connection
├── middleware/
│   ├── auth.js           # requireAuth
│   └── logger.js
└── package.json
\`\`\`

This is the structure BA-2 and BA-3 will start to feel like as they
grow. The rule of thumb: when a file gets hard to navigate (you scroll
to find things), split it.`},{type:"readthis",id:"m7-l7-r1",language:"js",code:`// routes/users.js
const router = Router();
router.get('/', listUsers);
router.get('/:id', getUser);
export default router;

// index.js
app.use('/api/users', usersRouter);`,question:"What URL hits `getUser`?",options:["/getUser","/users/:id","/api/users/:id","/api/getUser"],answerIndex:2,explanation:"The mount prefix /api/users joins with the router path /:id to give /api/users/:id. Routers don't know their own prefix — the mounter decides."}]},Tv=[xv,wv,vv,kv,bv,Sv,Ev],Nv={id:"m8-l1-the-four-verbs",moduleId:"sql-sqlite",title:"The four verbs — SELECT, INSERT, UPDATE, DELETE",objective:"Read and write the core SQL operations.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l1-e1",listen:!0,markdown:`## Why SQL

A relational database stores data in **tables**. Each table has columns
(the shape) and rows (the data). You talk to it with **SQL** — a language
designed in the 1970s and still everywhere.

**SQLite** is the friendliest dialect to learn. It stores the whole
database in one file. No server. \`better-sqlite3\` is the Node library
that talks to a SQLite file.

The four verbs that cover 95% of all real code:

- \`SELECT\` — read.
- \`INSERT\` — create.
- \`UPDATE\` — change existing rows.
- \`DELETE\` — remove rows.`},{type:"explain",id:"m8-l1-e2",listen:!0,markdown:`### SELECT — read rows

\`\`\`sql
SELECT * FROM todos;
\`\`\`

\`*\` means "every column." The result is every row of the todos table.

You usually want to filter:

\`\`\`sql
SELECT id, title FROM todos WHERE done = 0;
\`\`\`

- \`SELECT id, title\` — only return those two columns.
- \`FROM todos\` — from this table.
- \`WHERE done = 0\` — only rows where the \`done\` column is 0.

You can also order and limit:

\`\`\`sql
SELECT * FROM todos
WHERE done = 0
ORDER BY created_at DESC
LIMIT 10;
\`\`\`

Most-recently-created undone todos, ten at most. This is roughly the
shape of every "list" query you'll write.`},{type:"explain",id:"m8-l1-e3",listen:!0,markdown:`### INSERT, UPDATE, DELETE

**Create a row:**

\`\`\`sql
INSERT INTO todos (title, done)
VALUES ('buy milk', 0);
\`\`\`

You list the columns, then the values to put in them.

**Change a row:**

\`\`\`sql
UPDATE todos
SET done = 1
WHERE id = 42;
\`\`\`

\`SET column = value\`. **Always include a \`WHERE\`** — without it, you
update *every* row. (The number of careers ended by \`UPDATE\` without
\`WHERE\` is uncountable.)

**Remove a row:**

\`\`\`sql
DELETE FROM todos
WHERE id = 42;
\`\`\`

Same rule. Without \`WHERE\` you delete the entire table's contents.`},{type:"readthis",id:"m8-l1-r1",language:"sql",code:"SELECT title FROM todos WHERE done = 1 ORDER BY id DESC LIMIT 3;",question:"What does this query return?",options:["All completed todos, oldest first","The titles of the 3 most recently inserted completed todos","The first 3 todos in the table","A single row with all titles concatenated"],answerIndex:1,explanation:"`WHERE done = 1` filters to completed. `ORDER BY id DESC` sorts newest first (highest id). `LIMIT 3` takes the first three. We select only the `title` column."}]},jv={id:"m8-l2-create-table-and-types",moduleId:"sql-sqlite",title:"CREATE TABLE, types, and constraints",objective:"Design a schema that prevents bad data getting in.",estimatedMinutes:9,blocks:[{type:"explain",id:"m8-l2-e1",listen:!0,markdown:"## Defining a table\n\n```sql\nCREATE TABLE todos (\n  id          INTEGER PRIMARY KEY AUTOINCREMENT,\n  title       TEXT NOT NULL,\n  done        INTEGER NOT NULL DEFAULT 0,\n  created_at  TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\n```\n\nFor each column you say:\n\n1. The name (`id`, `title`, ...).\n2. The type (`INTEGER`, `TEXT`, etc).\n3. Optional **constraints** — rules the database enforces.\n\nSQLite types:\n\n- `INTEGER` — whole numbers.\n- `TEXT` — strings.\n- `REAL` — floating-point numbers.\n- `BLOB` — raw bytes (rarely used for app code).\n\nSQLite has no boolean type. Use `INTEGER` with 0/1.\n\nThere's no native `DATETIME` either — store dates as `TEXT` in ISO\n8601 format (`'2026-05-24T12:00:00Z'`). Sortable and human-readable."},{type:"explain",id:"m8-l2-e2",listen:!0,markdown:`### Constraints — the database's first line of defence

- **\`PRIMARY KEY\`** — this column is the unique id. Most tables have one.
- **\`AUTOINCREMENT\`** — SQLite picks the next integer for you (used
  with PRIMARY KEY).
- **\`NOT NULL\`** — this column must have a value. Without it, you can
  \`INSERT\` rows that leave this column empty (\`NULL\`).
- **\`DEFAULT <value>\`** — if no value is provided on \`INSERT\`,
  use this.
- **\`UNIQUE\`** — no two rows can have the same value here. Use this
  on emails, usernames, slugs.

Validate at the database level **first**. Your Node code might forget
to check; the database won't.

\`\`\`sql
CREATE TABLE users (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  email    TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
\`\`\`

Inserting a duplicate email throws a constraint violation. That's good —
you catch the error in Node and return 400 to the client.`},{type:"readthis",id:"m8-l2-r1",language:"sql",code:`CREATE TABLE notes (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  body  TEXT
);

INSERT INTO notes (title) VALUES ('first');
INSERT INTO notes (body) VALUES ('orphan');`,question:"What happens with the two INSERT statements?",options:["Both succeed","Both fail","The first succeeds, the second fails because title is NOT NULL","The second succeeds, the first fails because body is required"],answerIndex:2,explanation:"`body` is nullable (no NOT NULL), so the first INSERT (no body) is fine. `title` is NOT NULL, so the second (no title) fails."}]},Cv={id:"m8-l3-foreign-keys-and-joins",moduleId:"sql-sqlite",title:"Foreign keys and JOINs",objective:"Connect tables by id. Query across them in one statement.",estimatedMinutes:10,blocks:[{type:"explain",id:"m8-l3-e1",listen:!0,markdown:`## Two tables that know about each other

\`\`\`sql
CREATE TABLE users (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  email    TEXT NOT NULL UNIQUE
);

CREATE TABLE expenses (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  amount    REAL NOT NULL,
  user_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
\`\`\`

\`expenses.user_id\` is a **foreign key** — it points at \`users.id\`.
That single line buys you:

- A way to find who owns an expense.
- An integrity check — you can't insert an expense for a user that
  doesn't exist.
- \`ON DELETE CASCADE\` — when a user is deleted, their expenses are
  deleted too. (Alternatives: \`ON DELETE SET NULL\`, or default
  \`ON DELETE RESTRICT\` which blocks the delete.)

> SQLite note: foreign keys are off by default. Enable them once per
> connection with \`PRAGMA foreign_keys = ON;\`. \`better-sqlite3\`
> handles this for you in most setups.`},{type:"explain",id:"m8-l3-e2",listen:!0,markdown:`## JOIN — combining tables in one query

You want every expense alongside the user's email. Without JOIN you'd
need two queries. With JOIN it's one:

\`\`\`sql
SELECT
  expenses.id,
  expenses.amount,
  users.email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id;
\`\`\`

Read it as: "for each row in expenses, find the matching row in users
where users.id = expenses.user_id, and combine them."

The result is one row per matched pair. If an expense has no matching
user (shouldn't happen with FKs, but bear with me), \`INNER JOIN\`
drops it. \`LEFT JOIN\` keeps it, with \`users.email\` as NULL.`},{type:"explain",id:"m8-l3-e3",listen:!0,markdown:`### Filtering joined data

Add a \`WHERE\` to filter the joined result:

\`\`\`sql
SELECT amount, email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id
WHERE users.email = 'gabs@example.com'
ORDER BY expenses.amount DESC;
\`\`\`

This is the same shape you'll use in BA-3 — "list this user's expenses,
biggest first." The auth middleware sets \`req.user.id\` and you plug
that into a parameterised query (we'll cover that in lesson 6).

### Aliases for readability

Long table names get ugly. Aliases shorten them:

\`\`\`sql
SELECT e.amount, u.email
FROM expenses AS e
INNER JOIN users AS u ON u.id = e.user_id;
\`\`\`

\`AS\` is optional — \`expenses e\` works the same way. Once you've
seen a 5-table JOIN, you'll always use aliases.`},{type:"readthis",id:"m8-l3-r1",language:"sql",code:`SELECT COUNT(*) AS total, users.email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id
GROUP BY users.id;`,question:"What does this query return?",options:["Every expense, alongside its user's email","One row per user, showing how many expenses they have","The total amount of all expenses","Just user emails, no counts"],answerIndex:1,explanation:'`GROUP BY users.id` collapses all expenses for the same user into one row. `COUNT(*)` then counts the rows in each group. Classic "expenses per user" report.'}]},Iv={id:"m8-l4-indexes-and-transactions",moduleId:"sql-sqlite",title:"Indexes and transactions",objective:"Make common queries fast. Wrap multi-step writes in transactions.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l4-e1",listen:!0,markdown:`## Indexes — your query's shortcut

Without an index, the database walks every row to answer a \`WHERE\`
query. With a million rows, that's slow.

An **index** is a separate sorted lookup table the database maintains
for one or more columns. Queries that filter on those columns become
near-instant.

\`\`\`sql
CREATE INDEX idx_expenses_user_id ON expenses(user_id);
\`\`\`

After that, \`WHERE user_id = ?\` queries are fast no matter how many
rows the table has.

Index every foreign key. Index every column you filter or sort by.
Don't index everything — indexes cost space and slow down writes
(every insert/update has to update the index too).

\`\`\`sql
CREATE UNIQUE INDEX idx_users_email ON users(email);
\`\`\`

\`UNIQUE INDEX\` does double duty: fast lookups AND enforces no duplicates.
Often the easiest way to express a uniqueness constraint after the table
already exists.`},{type:"explain",id:"m8-l4-e2",listen:!0,markdown:`## Transactions — all-or-nothing changes

A transaction groups multiple SQL statements into a single atomic unit.
Either all of them apply, or none of them do.

\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
\`\`\`

If the second \`UPDATE\` fails (the receiving account doesn't exist,
say), \`ROLLBACK\` undoes the first one. The first account didn't lose
its 100. The database is never in a half-finished state.

For BA-2 (Todo API), single-row writes don't need transactions. For
anything with multiple steps — transferring money, inserting a user
plus a session, creating an expense and updating a totals cache —
wrap it in a transaction.

In \`better-sqlite3\`, transactions are dead simple:

\`\`\`js
const transfer = db.transaction((from, to, amount) => {
  db.prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?').run(amount, from);
  db.prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?').run(amount, to);
});

transfer(1, 2, 100);   // either both updates run, or neither does
\`\`\``},{type:"readthis",id:"m8-l4-r1",language:"sql",code:`BEGIN;
INSERT INTO users (email) VALUES ('a@example.com');
INSERT INTO users (email) VALUES ('a@example.com');
COMMIT;`,question:"Assuming users.email has a UNIQUE constraint, what happens?",options:["Both rows are inserted","The first succeeds, the second fails, but the first stays","The first succeeds, the second fails, and the transaction rolls back the first","Neither runs because COMMIT must come before INSERT"],answerIndex:2,explanation:"The second INSERT throws a UNIQUE constraint violation. SQLite rolls back the transaction — the first INSERT is undone. Same email never gets inserted."}]},Av={id:"m8-l5-sqlite-from-node",moduleId:"sql-sqlite",title:"SQLite from Node with better-sqlite3",objective:"Open a database, run queries, read results from JavaScript.",estimatedMinutes:9,blocks:[{type:"explain",id:"m8-l5-e1",listen:!0,markdown:`## better-sqlite3 — synchronous, simple, fast

\`\`\`bash
npm install better-sqlite3
\`\`\`

\`\`\`js
import Database from 'better-sqlite3';
const db = new Database('todos.db');
\`\`\`

That opens (or creates) \`todos.db\` in the project root. From here on,
every query is one method call.

Unlike most Node libraries, \`better-sqlite3\` is **synchronous** — no
promises, no callbacks. It works because SQLite is so fast for typical
app loads that the synchronous API is faster than async overhead. Your
Express handlers don't need \`await\` for queries.

### Setting up the schema once

\`\`\`js
db.exec(\`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  );
\`);
\`\`\`

\`db.exec\` runs SQL that returns no rows — CREATE TABLE, CREATE INDEX,
PRAGMA, DROP. Wrap your whole schema in one call at startup; the
\`IF NOT EXISTS\` makes it safe to re-run.`},{type:"explain",id:"m8-l5-e2",listen:!0,markdown:`### Prepared statements — the right way to query

For every query that returns or accepts data, **prepare** the SQL once
and reuse the prepared statement:

\`\`\`js
const listAll = db.prepare('SELECT * FROM todos ORDER BY id DESC');
const getOne = db.prepare('SELECT * FROM todos WHERE id = ?');
const insert = db.prepare('INSERT INTO todos (title) VALUES (?)');
const update = db.prepare('UPDATE todos SET title = ?, done = ? WHERE id = ?');
const remove = db.prepare('DELETE FROM todos WHERE id = ?');
\`\`\`

Then run them:

\`\`\`js
const rows  = listAll.all();           // many rows
const row   = getOne.get(42);          // one row, or undefined
const info  = insert.run('buy milk');  // returns { changes, lastInsertRowid }
update.run('buy oat milk', 0, 42);
remove.run(42);
\`\`\`

Three methods to remember:

- **\`.all(...)\`** — for SELECTs that return many rows (returns an array).
- **\`.get(...)\`** — for SELECTs that return one row (or undefined).
- **\`.run(...)\`** — for INSERT/UPDATE/DELETE (returns metadata).

The \`?\` placeholders in the SQL get replaced by the arguments to
\`all/get/run\`. **Never use string concatenation to build SQL** —
next lesson.`},{type:"typealong",id:"m8-l5-ta1",language:"js",instructions:"A complete tiny Node + SQLite script.",code:`import Database from 'better-sqlite3';

const db = new Database('todos.db');

db.exec(\`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  );
\`);

const insert = db.prepare('INSERT INTO todos (title) VALUES (?)');
const list   = db.prepare('SELECT * FROM todos');

insert.run('buy milk');
insert.run('write code');

console.log(list.all());`}]},Pv={id:"m8-l6-sql-injection",moduleId:"sql-sqlite",title:"SQL injection and parameterised queries",objective:"Understand the most famous database vulnerability — and the one-line fix.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l6-e1",listen:!0,markdown:`## The mistake

\`\`\`js
// 🚨 NEVER do this
const email = req.body.email;
const sql = "SELECT * FROM users WHERE email = '" + email + "'";
const user = db.prepare(sql).get();
\`\`\`

You're concatenating user input straight into SQL. If the user submits:

\`\`\`
email = ' OR 1=1 --
\`\`\`

The string becomes:

\`\`\`sql
SELECT * FROM users WHERE email = '' OR 1=1 --'
\`\`\`

\`OR 1=1\` is always true — the query returns every user. The \`--\`
comments out the rest. You just leaked the user table.

Worse versions can DROP your tables, INSERT admin users, or extract
hashed passwords. **This is the famous SQL injection attack.** It's
been ranked one of the top web vulnerabilities for two decades.`},{type:"explain",id:"m8-l6-e2",listen:!0,markdown:`## The fix — parameterised queries

Use placeholders. Pass the value as a separate argument:

\`\`\`js
// ✅ safe
const user = db.prepare('SELECT * FROM users WHERE email = ?')
  .get(req.body.email);
\`\`\`

The \`?\` is a **bind parameter**. The database engine receives the
query and the value separately and treats the value as data, not SQL.
No amount of cleverness in the input can break out of the value slot.

This is exactly what \`.get(...)\`, \`.all(...)\`, and \`.run(...)\` in
\`better-sqlite3\` do for you. **Always use them with placeholders.**

Multiple parameters work the same way, in order:

\`\`\`js
db.prepare('UPDATE todos SET title = ?, done = ? WHERE id = ?')
  .run('buy oat milk', 1, 42);
\`\`\`

You can also use named parameters if you prefer:

\`\`\`js
db.prepare('UPDATE todos SET title = @title, done = @done WHERE id = @id')
  .run({ title: 'buy oat milk', done: 1, id: 42 });
\`\`\``},{type:"readthis",id:"m8-l6-r1",language:"js",code:`// Code A
const title = req.body.title;
db.prepare(\`INSERT INTO todos (title) VALUES ('\${title}')\`).run();

// Code B
db.prepare('INSERT INTO todos (title) VALUES (?)').run(req.body.title);`,question:"Which is safe?",options:["Both — better-sqlite3 escapes everything automatically","Only A","Only B","Neither — you should never accept user input in SQL"],answerIndex:2,explanation:"Code A interpolates user input directly into the SQL string with template literals — the engine sees it as SQL. Code B uses a placeholder; the engine sees it as a value. **B is the only safe pattern.**"},{type:"explain",id:"m8-l6-e3",listen:!0,markdown:`## You've now finished Module 8

You can write tables, query them, link them with foreign keys, join
across them, speed them up with indexes, wrap multi-step changes in
transactions, and talk to them from Node safely.

That's enough SQL to ship **BA-2 (Todo API)** and the data layer of
**BA-3 (Expense tracker)**. The advanced stuff — window functions,
CTEs, query plans — comes later when a real query gets slow.

Next: Module 9, React.`}]},Ov=[Nv,jv,Cv,Iv,Av,Pv],Rv={id:"m9-l1-jsx-and-components",moduleId:"react",title:"JSX and your first component",objective:"Write components. Pass them props.",estimatedMinutes:8,blocks:[{type:"explain",id:"m9-l1-e1",listen:!0,markdown:"## JSX — HTML in JavaScript\n\nJSX lets you write what looks like HTML inside JavaScript files:\n\n```jsx\nconst heading = <h1>Hello</h1>;\n```\n\nThat's not a string. It's a real JS expression that produces a React\nelement. A build step (Vite handles it) compiles it to:\n\n```js\nconst heading = React.createElement('h1', null, 'Hello');\n```\n\nYou'll never call `createElement` directly — just write JSX.\n\nThe basics that trip people up:\n\n- Use `className`, not `class` (because `class` is a JS keyword).\n- Use `onClick`, not `onclick` (camelCase for all events).\n- Self-close every empty tag: `<img />`, `<br />`, `<input />`.\n- Embed JavaScript inside JSX with curly braces: `<p>{user.name}</p>`."},{type:"explain",id:"m9-l1-e2",listen:!0,markdown:`## A component is a function that returns JSX

\`\`\`jsx
function Greeting() {
  return <h1>Hello</h1>;
}
\`\`\`

To use it, write it as if it were a tag:

\`\`\`jsx
<Greeting />
\`\`\`

Two rules:

1. Component names must start with a **capital letter**. \`greeting\`
   (lowercase) would be treated as the HTML tag \`<greeting>\`.
2. A component returns exactly **one root element**. If you need
   multiple, wrap them in a fragment: \`<>...</>\`.

\`\`\`jsx
function Header() {
  return (
    <>
      <h1>Ship It</h1>
      <p>Drill, build, ship.</p>
    </>
  );
}
\`\`\``},{type:"explain",id:"m9-l1-e3",listen:!0,markdown:`## Props — inputs to a component

Props are like function arguments, but passed as JSX attributes:

\`\`\`jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// usage
<Greeting name="Gabs" />
<Greeting name="Ama" />
\`\`\`

The component receives one object — \`{ name: 'Gabs' }\` — and destructures
it. Pass any number of props:

\`\`\`jsx
function ExpenseRow({ amount, category, date }) {
  return (
    <div className="row">
      <span>{date}</span>
      <span>{category}</span>
      <strong>{amount} GHS</strong>
    </div>
  );
}
\`\`\`

Components compose like Lego. You'll build small ones (a Button, a
Row, an Avatar) and combine them into bigger ones (a Form, a List,
a Page).`},{type:"typealong",id:"m9-l1-ta1",language:"js",instructions:"Retype this component pair.",code:`function ExpenseRow({ amount, category }) {
  return (
    <div>
      <span>{category}</span>
      <strong>{amount}</strong>
    </div>
  );
}

function App() {
  return (
    <main>
      <ExpenseRow amount={500} category="Groceries" />
      <ExpenseRow amount={120} category="Transport" />
    </main>
  );
}`}]},Lv={id:"m9-l2-state-with-useState",moduleId:"react",title:"State with useState",objective:"Track values that change. Make the UI re-render when they do.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l2-e1",listen:!0,markdown:`## useState — a value React watches

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
\`\`\`

\`useState(0)\` returns two things:

1. The current value (\`count\`).
2. A setter function (\`setCount\`).

When you call \`setCount\`, React **re-renders** the component with the
new value. The JSX is recomputed; the DOM updates to match.

A regular variable wouldn't work — the function would run, set the
variable, and never tell React anything changed. \`useState\` is the
bridge between "value changed" and "screen updated."`},{type:"explain",id:"m9-l2-e2",listen:!0,markdown:`### Updating from the previous value

If the new value depends on the current one, pass a function to the
setter instead of a value:

\`\`\`jsx
setCount((c) => c + 1);
\`\`\`

Why? When updates happen quickly or React batches them, \`count\` might
be stale by the time your update runs. The function form gets the
freshest value from React directly.

Habit: when the new value depends on the old, use the function form.
When you're setting a brand new value, the direct form is fine.

\`\`\`jsx
setCount(0);                      // resetting — direct is fine
setCount(c => c + 1);             // incrementing — function form
setCount(c => c * 2);             // doubling — function form
\`\`\``},{type:"explain",id:"m9-l2-e3",listen:!0,markdown:`### State with non-primitive values

You can hold arrays, objects, anything:

\`\`\`jsx
const [notes, setNotes] = useState([]);

function addNote(title) {
  setNotes((prev) => [...prev, { id: Date.now(), title }]);
}
\`\`\`

**Critical rule:** never mutate state directly. \`notes.push(...)\` won't
trigger a re-render and will eventually break in subtle ways. Always
create a new array or object:

\`\`\`jsx
// ✅
setNotes((prev) => [...prev, newNote]);             // add
setNotes((prev) => prev.filter((n) => n.id !== id)); // remove
setNotes((prev) => prev.map((n) =>                   // update one
  n.id === id ? { ...n, done: true } : n
));

// ❌
notes.push(newNote);
setNotes(notes);
\`\`\`

The \`...spread\` pattern is everywhere in React state updates. Memorise it.`},{type:"readthis",id:"m9-l2-r1",language:"js",code:`function Counter() {
  const [n, setN] = useState(0);

  function increment() {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1);
  }

  return <button onClick={increment}>{n}</button>;
}`,question:"You click the button. What does `n` become?",options:["1","3","0","It throws an error"],answerIndex:0,explanation:"`n` is captured at the moment increment runs. All three `setN(n + 1)` calls compute `0 + 1 = 1`. Use the function form — `setN(prev => prev + 1)` — to actually increment three times."}]},_v={id:"m9-l3-effects",moduleId:"react",title:"Side effects with useEffect",objective:"Run code when a component mounts. Fetch data. Clean up.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l3-e1",listen:!0,markdown:`## useEffect — code that runs after render

Rendering should be pure — given the same state and props, return the
same JSX. But sometimes you need to do something on the side: fetch
data, set a timer, subscribe to something.

That's \`useEffect\`:

\`\`\`jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.email}</li>)}
    </ul>
  );
}
\`\`\`

Two arguments:

1. **The effect function** — what to do.
2. **The dependency array** — when to do it.`},{type:"explain",id:"m9-l3-e2",listen:!0,markdown:`### Three dependency-array patterns

\`\`\`jsx
// 1. Run after every render
useEffect(() => { ... });

// 2. Run once, on mount
useEffect(() => { ... }, []);

// 3. Run when these values change
useEffect(() => { ... }, [userId, filter]);
\`\`\`

Pattern 2 is what you want for "load data once when the component
shows up." Pattern 3 is for "reload when the user picks a different
ID." Pattern 1 is rare — it usually means a bug.

The dependency array is a promise from you to React: "if any of these
change, re-run the effect." Forget to list something and you'll get
stale data. Lint rules (\`react-hooks/exhaustive-deps\`) catch this
for you.`},{type:"explain",id:"m9-l3-e3",listen:!0,markdown:`### Cleanup — for things you started

If your effect started something — a timer, a subscription, an event
listener — return a cleanup function:

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

React calls the cleanup when:

- The component unmounts.
- The effect is about to run again (because a dependency changed).

This is how you avoid memory leaks and zombie subscriptions. If you
don't return a cleanup but you should have, you'll see weird bugs
where things keep happening after you navigate away.

For a simple \`fetch\`, no cleanup is needed — it's a one-shot
operation.`},{type:"readthis",id:"m9-l3-r1",language:"js",code:`function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products/' + productId)
      .then((r) => r.json())
      .then(setProduct);
  }, []);

  return product ? <h1>{product.name}</h1> : <p>Loading...</p>;
}`,question:"What's the bug?",options:["No bug — this is the recommended pattern","productId is missing from the dependency array — changing it won't refetch","useEffect should be called inside the return","Should use useState(null) without the explicit null"],answerIndex:1,explanation:"If a parent passes a new `productId`, this effect doesn't re-run — it only runs once. Should be `[productId]`. Common React beginner bug."}]},Mv={id:"m9-l4-lists-and-keys",moduleId:"react",title:"Lists, keys, and forms",objective:"Render arrays of data. Handle form input. Submit without page reload.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l4-e1",listen:!0,markdown:`## Rendering a list

Use \`.map()\` to turn an array of data into an array of JSX:

\`\`\`jsx
const notes = [
  { id: 1, title: 'First note' },
  { id: 2, title: 'Second note' },
];

<ul>
  {notes.map((note) => (
    <li key={note.id}>{note.title}</li>
  ))}
</ul>
\`\`\`

### The \`key\` prop — required for lists

Every element in a list needs a unique \`key\`. React uses it to track
which item is which between renders. Without it, when you add or remove
items, React might re-render the wrong ones (or all of them).

**Use a real stable id.** Database ids are ideal. As a last resort, the
array index works but only if the list doesn't reorder or insert/remove
items in the middle.

\`\`\`jsx
{notes.map((n) => <li key={n.id}>{n.title}</li>)}      // ✅ ideal
{notes.map((n, i) => <li key={i}>{n.title}</li>)}      // ⚠️ only if order is fixed
{notes.map((n) => <li key={Math.random()}>...</li>)}   // ❌ new key each render = wasted work
\`\`\``},{type:"explain",id:"m9-l4-e2",listen:!0,markdown:`## Forms — controlled inputs

Tie an input's value to state so React owns the source of truth:

\`\`\`jsx
function AddNote() {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('saving:', title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
      />
      <button type="submit">Add</button>
    </form>
  );
}
\`\`\`

Two pieces:

- \`value={title}\` — the input shows whatever state says.
- \`onChange={(e) => setTitle(e.target.value)}\` — every keystroke
  updates state, which re-renders the input.

This is a "controlled component." Slightly verbose but it lets you
validate as the user types, reset the form after submit, or
programmatically set values.`},{type:"explain",id:"m9-l4-e3",listen:!0,markdown:`### Don't forget e.preventDefault()

A \`<form>\` submits by reloading the page by default. \`e.preventDefault()\`
stops that so you can handle the submit in JS.

If you forget it, the page refreshes and your state is wiped before you
notice anything happening. Classic beginner head-scratcher.`},{type:"readthis",id:"m9-l4-r1",language:"js",code:`function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
}`,question:"You add a new item at the START of the items array. What's wrong with using index as key?",options:["Nothing wrong — index keys are fine for any list","React will mismatch elements — the existing items get new indices, so their identity in React's eyes flips","It only works for arrays of strings","It throws a console error"],answerIndex:1,explanation:'When you insert at the start, the old "index 0" item is now at index 1, "index 1" is at 2, etc. React thinks "the item with key 0 has new content!" and re-renders mistakenly. Use a stable id from the data instead.'}]},Dv=[Rv,Lv,_v,Mv],zv={id:"m10-l1-hashing-passwords",moduleId:"auth-jwt",title:"Hashing passwords with bcrypt",objective:"Store passwords safely. Verify a typed password against the stored hash.",estimatedMinutes:8,blocks:[{type:"explain",id:"m10-l1-e1",listen:!0,markdown:`## Never store passwords. Store hashes.

A **hash** is a one-way scramble. \`bcrypt.hash('hunter2')\` produces
something like:

\`\`\`
$2b$10$N9qo8uLOickgx2ZMRZoMye.Qm5gKWxnZ.kQEHvxC4xL3kP6FRyy7e
\`\`\`

That's 60 characters of garbage. You can't reverse it. You can only
verify by hashing the typed password and comparing:

\`\`\`js
import bcrypt from 'bcrypt';

// REGISTER — store the hash
const hash = await bcrypt.hash(password, 10);
db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)')
  .run(email, hash);

// LOGIN — verify against the stored hash
const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
const ok = user && await bcrypt.compare(password, user.password_hash);
\`\`\`

The \`10\` in \`bcrypt.hash(password, 10)\` is the "cost factor." Higher
= slower = harder to brute-force. 10 is the modern default; 12 if you
want extra security and don't mind the ~250ms login delay.`},{type:"explain",id:"m10-l1-e2",listen:!0,markdown:`### Why not just plain text?

If your database leaks (and many do), every user's password is exposed.
And because people reuse passwords across sites, you've also compromised
their email, bank, everything. **The reputational damage is enormous.**

With bcrypt hashes:

- The attacker can't read the passwords. They'd have to brute-force
  each one — billions of guesses per password.
- The salt (the random bit bcrypt adds before hashing) means two users
  with the same password get different hashes. No rainbow tables.

### What about MD5 or SHA-256?

Fast hashes. Wrong for passwords. They're too fast — an attacker with
a GPU can try billions of guesses per second. bcrypt is deliberately
slow.

For Ship It and Viszio: bcrypt is the right answer. argon2 is also
fine if you want the newer alternative.`},{type:"readthis",id:"m10-l1-r1",language:"js",code:`async function login(req, res) {
  const { email, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ error: 'invalid credentials' });
  if (user.password_hash === password) {
    return res.json({ ok: true });
  }
  return res.status(401).json({ error: 'invalid credentials' });
}`,question:"What's wrong with this login handler?",options:["Nothing — it correctly checks the password","It compares the typed password to the stored hash with === instead of bcrypt.compare","It should use res.send instead of res.json","It should return 404 if the user is missing"],answerIndex:1,explanation:"You can't compare a plain-text password to a hash with ===. The hashes are intentionally not the same as the input. Use `await bcrypt.compare(password, user.password_hash)`."}]},Fv={id:"m10-l2-jwt-anatomy",moduleId:"auth-jwt",title:"JWT — anatomy of a token",objective:"Understand what's in a JWT and what the signature actually proves.",estimatedMinutes:7,blocks:[{type:"explain",id:"m10-l2-e1",listen:!0,markdown:`## A JWT is three base64 strings separated by dots

\`\`\`
eyJhbGciOi...  .  eyJ1c2VySWQ...  .  SflKxwRJSMe...
   header              payload              signature
\`\`\`

Decode the first two and you get JSON:

\`\`\`json
// header
{ "alg": "HS256", "typ": "JWT" }

// payload
{ "userId": 42, "email": "gabs@example.com", "iat": 1716537600 }
\`\`\`

The header says what algorithm signed the token. The payload is whatever
data you put in. **The payload is NOT encrypted** — anyone with the
token can read it. (Try it: paste a JWT into jwt.io.)

So what's the point of the signature?

The signature proves the token was issued by a server holding the
secret key. If an attacker tampers with the payload (\`"userId": 1\`
→ \`"userId": 999\`), the signature no longer matches. The server
rejects it on next request.`},{type:"explain",id:"m10-l2-e2",listen:!0,markdown:`### Signing and verifying in Node

\`\`\`bash
npm install jsonwebtoken
\`\`\`

\`\`\`js
import jwt from 'jsonwebtoken';

// SIGN — create a token
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// VERIFY — read a token (throws if signature is bad or expired)
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded.userId);   // 42
} catch (err) {
  // bad token — reject the request
}
\`\`\`

Three things to know:

1. **The secret is global.** Same secret signs and verifies every token.
   Lose it = anyone can forge tokens. Treat it like a database password.
   Store it in \`.env\`, never commit it.
2. **\`expiresIn\`** sets a deadline. After it passes, \`verify\` throws.
   Use \`'7d'\` for app sessions, \`'15m'\` for short-lived API tokens.
3. **Payload should be small.** Just enough to look up the user
   (\`userId\` is plenty). Don't stuff the whole user object in there —
   the token gets long and bloats every request.`},{type:"readthis",id:"m10-l2-r1",language:"js",code:`const token = jwt.sign({ userId: 42 }, process.env.JWT_SECRET);

// later... a malicious client base64-edits the payload
// to change userId to 999 before sending the request`,question:"What happens on the server when it gets the tampered token?",options:["Server decodes it and uses userId 999 — you've been compromised","jwt.verify throws because the signature no longer matches the payload","It returns a 200 with the wrong data","Nothing — JWTs can't be tampered with at all"],answerIndex:1,explanation:"The signature is computed over the header + payload. Changing the payload invalidates the signature. `jwt.verify` throws, you catch it, you return 401. This is exactly why JWTs work — not because the contents are hidden, but because tampering is detectable."}]},Uv={id:"m10-l3-register-and-login",moduleId:"auth-jwt",title:"Register and login routes end to end",objective:"Wire bcrypt + jwt into Express. The exact pattern you'll use in BA-3.",estimatedMinutes:9,blocks:[{type:"explain",id:"m10-l3-e1",listen:!0,markdown:`## The two routes that own auth

\`\`\`js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// POST /auth/register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const info = db.prepare(
      'INSERT INTO users (email, password_hash) VALUES (?, ?)'
    ).run(email, hash);
    const token = jwt.sign(
      { userId: info.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({ token });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'email already in use' });
    }
    throw err;
  }
});
\`\`\``},{type:"explain",id:"m10-l3-e2",listen:!0,markdown:`\`\`\`js
// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  const ok = user && await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.json({ token });
});
\`\`\`

The whole auth surface is **two routes and ~20 lines of code**.
Don't let people tell you it's harder than this. (Adding password
reset, email verification, OAuth — that's harder. Plain register/login
is straightforward.)`},{type:"explain",id:"m10-l3-e3",listen:!0,markdown:`### A few details that matter

**Same error for "user not found" and "wrong password."** Don't reveal
which one. Return \`401 invalid credentials\` for both — otherwise an
attacker can enumerate valid emails by watching error messages.

**409 for duplicate email** on register. Some folks return 400, some
422 — 409 (Conflict) is technically correct for "this resource already
exists."

**Hash the password BEFORE the INSERT.** Don't store plain-text "just
for now to test." The first leak makes you wish you'd done it right.

**Return only the token.** Not the user record (definitely not the
\`password_hash\`). The client uses the token to fetch user data via
a separate \`/me\` endpoint that uses the auth middleware (next lesson).`}]},Bv={id:"m10-l4-protecting-routes",moduleId:"auth-jwt",title:"Protecting routes with middleware",objective:"Reject unauthorised requests. Attach req.user. Enforce ownership.",estimatedMinutes:8,blocks:[{type:"explain",id:"m10-l4-e1",listen:!0,markdown:`## The middleware

\`\`\`js
import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'no token' });
  }
  const token = header.slice(7);   // strip "Bearer "
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid or expired token' });
  }
}
\`\`\`

Apply it to specific routes:

\`\`\`js
app.get('/me', requireAuth, (req, res) => {
  const user = db.prepare('SELECT id, email FROM users WHERE id = ?')
    .get(req.user.userId);
  res.json(user);
});
\`\`\`

Or to a whole router:

\`\`\`js
app.use('/api/expenses', requireAuth, expensesRouter);
\`\`\`

Every route inside \`expensesRouter\` now has \`req.user\` populated,
or never runs at all.`},{type:"explain",id:"m10-l4-e2",listen:!0,markdown:`### Ownership checks — beyond "logged in"

\`requireAuth\` proves the user is logged in. It doesn't prove they
own the thing they're trying to access. That's a separate check inside
each route:

\`\`\`js
router.get('/:id', requireAuth, (req, res) => {
  const expense = db.prepare('SELECT * FROM expenses WHERE id = ?')
    .get(req.params.id);
  if (!expense) {
    return res.status(404).json({ error: 'not found' });
  }
  if (expense.user_id !== req.user.userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  res.json(expense);
});
\`\`\`

Or fold ownership into the query — cleaner and prevents leaking
existence:

\`\`\`js
router.get('/:id', requireAuth, (req, res) => {
  const expense = db.prepare(
    'SELECT * FROM expenses WHERE id = ? AND user_id = ?'
  ).get(req.params.id, req.user.userId);
  if (!expense) {
    return res.status(404).json({ error: 'not found' });
  }
  res.json(expense);
});
\`\`\`

This returns 404 even if the expense exists but belongs to someone
else. From the client's perspective they're indistinguishable —
"doesn't exist for you."`},{type:"explain",id:"m10-l4-e3",listen:!0,markdown:`## Frontend side — sending the token

Once the user logs in, save the token (localStorage is fine for
Ship It's scope) and attach it on every subsequent request:

\`\`\`js
async function api(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
  };
  const res = await fetch(path, { ...options, headers });
  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    return;
  }
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}
\`\`\`

Wrap fetch in a helper like this and you don't have to remember the
auth header at every call site.

That's all of Module 10. Combine it with Module 9 and you have what
you need for BA-3.`},{type:"readthis",id:"m10-l4-r1",language:"js",code:`router.delete('/:id', requireAuth, (req, res) => {
  const info = db.prepare('DELETE FROM expenses WHERE id = ?')
    .run(req.params.id);
  if (info.changes === 0) {
    return res.status(404).json({ error: 'not found' });
  }
  res.status(204).end();
});`,question:"What's the security bug?",options:["No bug — requireAuth checks for a valid token","requireAuth proves login but doesn't enforce ownership. Any logged-in user can delete any expense.","It should return 200 not 204","It needs to use POST instead of DELETE"],answerIndex:1,explanation:"Logged-in is not the same as authorized. Add `AND user_id = ?` to the DELETE and pass `req.user.userId`. Otherwise any user with a valid token can delete anyone's expense by guessing IDs."}]},Hv=[zv,Fv,Uv,Bv],Wv={id:"m11-l1-expo-cli",moduleId:"react-native",title:"The Expo CLI",objective:"Scaffold an Expo app and run it on your phone.",estimatedMinutes:8,blocks:[{type:"explain",id:"m11-l1-e1",listen:!0,markdown:`## Expo's promise

Real native mobile development used to mean installing Xcode (multi-GB,
Mac-only) and Android Studio (multi-GB, finicky). Expo replaces all
that with one CLI tool and one app on your phone.

Workflow:

1. \`npx create-expo-app my-app\` — scaffold a project.
2. \`npx expo start\` — start the Expo dev server (Metro bundler).
3. Open **Expo Go** on your phone (iOS App Store / Google Play).
4. Scan the QR code from the terminal.
5. Your app loads on your phone, talking to your laptop dev server.
6. Save a file in your editor → the phone updates instantly.

Expo Go is great for prototyping. For production (and anytime you need
native libraries Expo Go doesn't bundle), you build a custom dev client
with \`eas build --profile development\`.`},{type:"command",id:"m11-l1-c1",label:"Create a new Expo app",command:"npx create-expo-app my-app --template blank-typescript",expectedOutput:"Scaffolds my-app/ with TypeScript pre-configured. Takes ~30 seconds."},{type:"command",id:"m11-l1-c2",label:"Start the dev server",command:"cd my-app && npx expo start",expectedOutput:"Prints a QR code in your terminal. Press w to open in browser, a for Android emulator, i for iOS simulator. Or scan with Expo Go on your phone."},{type:"explain",id:"m11-l1-e2",listen:!0,markdown:`### The file layout

\`\`\`
my-app/
├── App.tsx              # the root component — start here
├── app.json             # Expo config: name, slug, icon, splash, version
├── assets/              # icons, splash images
├── node_modules/
└── package.json
\`\`\`

Open \`App.tsx\`. Change a string. Save. Your phone updates in under
a second. That's the loop you'll spend Module 11 (and BA-4) in.`}]},qv={id:"m11-l2-core-components",moduleId:"react-native",title:"Core components and styling",objective:"Use View, Text, Pressable, ScrollView. Style with StyleSheet.",estimatedMinutes:8,blocks:[{type:"explain",id:"m11-l2-e1",listen:!0,markdown:"## The native tag vocabulary\n\nThere's no `<div>`, no `<p>`, no `<button>` in React Native.\nInstead, a small set of cross-platform primitives:\n\n- **`<View>`** — a box. The native equivalent of `<div>`. Use it\n  for layout and grouping.\n- **`<Text>`** — text. All strings MUST be inside a `<Text>`. Loose\n  strings inside `<View>` throw a runtime error.\n- **`<Pressable>`** — a tappable area. Replaces `<button>` and\n  click-handler patterns. Old code uses `<TouchableOpacity>`; Pressable\n  is the newer, more flexible primitive.\n- **`<ScrollView>`** — scrollable container. Use for short lists.\n- **`<FlatList>`** — virtualized scrollable list. Use for long lists\n  (>20 items) — it only renders what's visible.\n- **`<TextInput>`** — text field.\n- **`<Image>`** — image. Takes a `source` prop.\n\n```jsx\nimport { View, Text, Pressable, StyleSheet } from 'react-native';\n\nfunction HelloScreen() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Hello</Text>\n      <Pressable\n        style={styles.btn}\n        onPress={() => console.log('tapped')}\n      >\n        <Text style={styles.btnText}>Tap me</Text>\n      </Pressable>\n    </View>\n  );\n}\n```"},{type:"explain",id:"m11-l2-e2",listen:!0,markdown:`## Styling with StyleSheet

There's no CSS file. Styles are JS objects, written with the same
property names as CSS but camelCased and in numbers (no \`px\`):

\`\`\`jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d10',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: '#0b0d10',
    fontWeight: '600',
  },
});
\`\`\`

Note: \`flex: 1\` is essentially "take all available space." Every
View defaults to flexbox layout — there's no \`display: flex\` to opt in.

### Things that aren't there

- No \`hover\` — phones don't have hover.
- No \`em\`/\`rem\` — use plain numbers (logical pixels).
- No CSS cascading — every component sets its own styles.
- No fancy selectors — you pass a style object straight to the component.

It's CSS with the wild bits cut out. Less expressive, less to learn.`},{type:"readthis",id:"m11-l2-r1",language:"js",code:`<View>
  Hello world
</View>`,question:"What happens?",options:['Renders "Hello world" — same as <div>','Throws: "Text strings must be rendered within a <Text> component"',"Renders an empty View","Works on iOS, fails on Android"],answerIndex:1,explanation:"Bare strings inside non-Text components throw. Wrap text in <Text>: `<View><Text>Hello world</Text></View>`."}]},Vv={id:"m11-l3-native-apis",moduleId:"react-native",title:"Native APIs — location, permissions, storage",objective:"Talk to the phone's GPS. Persist data on-device. Ask for permission politely.",estimatedMinutes:9,blocks:[{type:"explain",id:"m11-l3-e1",listen:!0,markdown:`## Expo modules — the bridge to native APIs

Expo ships dozens of small libraries that wrap native APIs in a uniform
JS interface. Install one, import it, call it.

For BA-4 (Mini-Viszio) you'll need three:

- \`expo-location\` — GPS coordinates.
- \`@react-native-async-storage/async-storage\` — persistent local
  key/value store (the React Native equivalent of localStorage).
- \`@react-navigation/native\` + \`@react-navigation/native-stack\` —
  multi-screen navigation.

\`\`\`bash
npx expo install expo-location @react-native-async-storage/async-storage
npm install @react-navigation/native @react-navigation/native-stack
\`\`\`

Use \`npx expo install\` rather than plain \`npm install\` for Expo
packages — it picks compatible versions for your Expo SDK.`},{type:"explain",id:"m11-l3-e2",listen:!0,markdown:`## Permissions — ask, then use

The OS won't let you read GPS without the user's permission. Ask first:

\`\`\`jsx
import * as Location from 'expo-location';

async function getCoords() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission denied');
  }

  const position = await Location.getCurrentPositionAsync({});
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
}
\`\`\`

First call shows the system dialog. Subsequent calls return the saved
answer without prompting again. If denied, the only way to undo it is
from the OS settings — never spam the user with re-prompts.

You also need to declare what permissions your app uses in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        { "locationAlwaysAndWhenInUsePermission": "Used to record clock-in location." }
      ]
    ]
  }
}
\`\`\`

This text shows in the OS permission dialog. Be specific about WHY you
need it — vague reasons get denied.`},{type:"explain",id:"m11-l3-e3",listen:!0,markdown:`## AsyncStorage — like localStorage, but async

\`\`\`jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// save
await AsyncStorage.setItem('token', 'ghp_xxx');

// read
const token = await AsyncStorage.getItem('token');

// remove
await AsyncStorage.removeItem('token');
\`\`\`

Differences from web localStorage:

- Everything is async (returns Promises). \`await\` it.
- Storage is per-app, not per-origin (different model).
- You still need to JSON.stringify/parse for non-string data.

Use it for: JWTs after login, user preferences, draft content. Don't
use it for sensitive secrets — use \`expo-secure-store\` for those
(it uses the OS keychain).

That's enough to attempt BA-4. The capstone spec walks you through
fitting these pieces together with the auth backend you built in BA-3.`},{type:"readthis",id:"m11-l3-r1",language:"js",code:`function ClockInButton() {
  function onPress() {
    const position = Location.getCurrentPositionAsync({});
    console.log(position.coords);
  }
  return <Pressable onPress={onPress}><Text>Clock in</Text></Pressable>;
}`,question:"What's the bug?",options:["Pressable is deprecated — should use Touchable","getCurrentPositionAsync returns a Promise; needs to be awaited (and the function needs to be async)","You can't use Location outside useEffect","No bug"],answerIndex:1,explanation:"`getCurrentPositionAsync` is async. Without await, `position` is a Promise object — `position.coords` is undefined. Make `onPress` async and `await` the call."}]},Gv=[Wv,qv,Vv],$v={id:"m12-l1-deploy-targets",moduleId:"deploy-ship",title:"Picking a deploy target",objective:"Know which host to use for which kind of app.",estimatedMinutes:7,blocks:[{type:"explain",id:"m12-l1-e1",listen:!0,markdown:`## The map

Three categories of app, three families of host:

### Static frontend (HTML + CSS + JS, no Node server)
- **GitHub Pages** — free, dead simple, what Ship It uses. Best for
  personal projects and docs sites.
- **Vercel** — also free for personal projects. Faster CDN, better DX.
  Auto-deploys on every push.
- **Netlify** — similar to Vercel.
- **Cloudflare Pages** — also free, very fast CDN.

Pick Vercel or Cloudflare Pages by default. GitHub Pages is fine for
small things.

### Backend (Node, Express, anything running a server)
- **Railway** — easiest. Connects to GitHub, deploys on push. Generous
  free tier, then a few dollars a month.
- **Render** — similar to Railway. Slightly more configuration.
- **Fly.io** — closer to bare metal, runs your Docker image globally.
  Cheap, fast, but slightly steeper learning curve.

Pick Railway by default for Ship It-scale projects.

### Mobile (React Native + Expo)
- **EAS Build** — Expo's build service. Produces the iOS .ipa and
  Android .aab files.
- **App Store Connect** (iOS) and **Google Play Console** (Android) —
  where you upload the binaries and submit for review.

### Database
- For SQLite — just deploy alongside the backend (file on disk).
- For Postgres — **Railway**, **Supabase**, or **Neon** are popular
  free-tier options.`},{type:"explain",id:"m12-l1-e2",listen:!0,markdown:`### What does "free" actually mean?

For Ship It-scale and Viszio-scale (early users), free tiers genuinely
cover the cost. A typical stack:

- GitHub Pages or Vercel frontend: **free** forever.
- Railway backend: free tier sleeps after inactivity. ~$5/month for
  always-on.
- SQLite or Supabase Postgres: **free** for small dbs.

You'll spend more on the domain name (~$12/year) than on hosting for
months. The cost only matters once you have hundreds of paying users.`},{type:"readthis",id:"m12-l1-r1",language:"bash",code:`# You have:
# - React frontend (Vite build = static files)
# - Express + SQLite backend
# - React Native app via Expo`,question:"What's the typical deploy stack?",options:["Everything goes on GitHub Pages","Frontend → Vercel or GitHub Pages. Backend → Railway. Mobile → EAS Build + App Store / Play Store.","Backend → GitHub Pages. Frontend → Railway.","You need a single VPS to run all three"],answerIndex:1,explanation:"Each piece goes to the host that specialises in its kind. GitHub Pages can't run Node. Railway can't natively host the App Store binary. Use the right tool for each."}]},Yv={id:"m12-l2-env-vars-and-secrets",moduleId:"deploy-ship",title:"Environment variables and secrets",objective:"Keep secrets out of git. Configure dev vs production.",estimatedMinutes:6,blocks:[{type:"explain",id:"m12-l2-e1",listen:!0,markdown:`## The two rules

1. **Anything that's a secret (JWT secret, API keys, database
   passwords) must NEVER be in git.** Not in code, not in committed
   config files. Period.
2. **Anything that differs between dev and production must be a
   config value**, not hardcoded.

The standard pattern: an environment variable.

\`\`\`js
const jwtSecret = process.env.JWT_SECRET;
const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
\`\`\`

\`process.env\` is a built-in Node object. Whatever the OS or your
hosting platform passes in becomes available there.`},{type:"explain",id:"m12-l2-e2",listen:!0,markdown:"## Local dev — .env files\n\nCreate a `.env` in your project root:\n\n```bash\nJWT_SECRET=dev-secret-do-not-use-in-prod\nDATABASE_URL=./todos.db\nPORT=3000\n```\n\nAdd to `.gitignore`:\n\n```\n.env\n.env.local\n```\n\nThen load it at startup. Modern Node (v20+) supports it natively:\n\n```bash\nnode --env-file=.env index.js\n```\n\nOr use the `dotenv` package (older but ubiquitous):\n\n```js\nimport 'dotenv/config';\n// now process.env is populated\n```\n\nCommit a `.env.example` (no real values) so other developers know\nwhich vars to set:\n\n```bash\n# .env.example\nJWT_SECRET=\nDATABASE_URL=\nPORT=\n```"},{type:"explain",id:"m12-l2-e3",listen:!0,markdown:`## Production — hosting platform settings

Every hosting platform has an env vars UI:

- **Railway** — service → Variables tab.
- **Vercel** — project → Settings → Environment Variables.
- **Render** — service → Environment.
- **EAS / Expo** — \`eas secret:create NAME --value VALUE\`.

Set the same keys you used in \`.env\`, but with **production values**:

\`\`\`
JWT_SECRET=long-random-string-generated-with-openssl
DATABASE_URL=<production database connection string>
NODE_ENV=production
\`\`\`

For JWT_SECRET specifically: generate one with:

\`\`\`bash
openssl rand -base64 48
\`\`\`

48 random bytes, base64-encoded. Don't reuse it across projects.

### If you accidentally commit a secret

You will, at some point. The rules:

1. Don't just delete it in a new commit — Git history keeps it. Anyone
   who clones the repo can still see it.
2. **Rotate the secret immediately.** Generate a new JWT_SECRET / API
   key. The old one is dead.
3. Use \`git filter-repo\` or BFG Repo-Cleaner to scrub the value from
   history, force-push.
4. If it was on GitHub, GitHub's secret scanning may have already
   notified the provider — they often auto-revoke (e.g. AWS keys).`}]},Jv={id:"m12-l3-six-stability-fixes",moduleId:"deploy-ship",title:"The 6 production hardening fixes",objective:"Make your app survive contact with real users.",estimatedMinutes:12,blocks:[{type:"explain",id:"m12-l3-e1",listen:!0,markdown:`## The 6 fixes every shipped app needs

You can deploy a Hello World in 10 minutes. You can deploy a real app
that survives the first 100 users in maybe a week. These six are what
separates the two.

### 1. Sentry — error reporting

When something blows up in production, you need to know. You can't
\`console.log\` your way through it because there's no terminal to read.

\`\`\`bash
npm install @sentry/node @sentry/react
\`\`\`

\`\`\`js
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
\`\`\`

Sentry catches every unhandled exception and shows you the stack trace
in their dashboard, with context. Free tier is enough for Ship It /
Viszio scale.`},{type:"explain",id:"m12-l3-e2",listen:!0,markdown:`### 2. Uptime monitoring

Sentry tells you when something throws. **Uptime monitoring tells you
when your app is unreachable at all.**

Free tools that work: **BetterStack** (formerly Better Uptime), **Uptime
Robot**, **Pingdom**. Set up a check that hits \`/api/health\` every
minute. If it fails twice in a row, it pages you.

Pair with a health endpoint:

\`\`\`js
app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});
\`\`\`

### 3. API versioning

The day you have real users and want to change a response shape, you'll
realise you can't — every old app version still expects the old shape.

Prefix routes with a version:

\`\`\`js
app.use('/v1/users', usersV1Router);
\`\`\`

When you need to break compatibility, ship \`/v2/users\` alongside.
Cheap insurance.`},{type:"explain",id:"m12-l3-e3",listen:!0,markdown:`### 4. JWT blacklist (invalidate on logout)

JWTs are stateless. Logging out on the client deletes the token, but
the token itself is still technically valid until it expires. If
someone copies it, they can keep using it.

Store revoked tokens in a Redis or DB table. The auth middleware
checks both signature AND blacklist:

\`\`\`js
if (await isBlacklisted(token)) {
  return res.status(401).json({ error: 'token revoked' });
}
\`\`\`

For Ship It scale you can skip this until you need it. But once you
have real users — especially shared devices — you'll want it.

### 5. Database migrations

When your schema changes — adding a column, renaming a table — running
\`ALTER TABLE\` manually in production is a recipe for disaster. Use
a migration tool: **drizzle-kit**, **knex migrations**, or hand-rolled
SQL files in a \`migrations/\` folder that run in order.

Rule: every schema change is a versioned migration file, committed to
git, applied automatically on deploy. Never edit prod schema by hand.`},{type:"explain",id:"m12-l3-e4",listen:!0,markdown:`### 6. Tests — at minimum, the critical paths

You don't need 100% coverage. You need tests that prove the things
that pay your rent still work.

Minimum bar with **Jest** or **Vitest**:

- The login flow returns a valid token for valid creds.
- Protected routes 401 without a token.
- The CRUD endpoint creates, reads, and deletes correctly.
- An ownership check: user A can't see user B's data.

Five or six tests. Run them on every \`git push\` via GitHub Actions:

\`\`\`yaml
# .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test
\`\`\`

If tests fail, deploy blocks. The cost is a few extra minutes per PR.
The benefit is that someday-future-you doesn't ship a regression on a
Friday afternoon.

## You've reached the end

This is the last module. You now know enough to ship the capstone.
Read the BA-4 spec. Sleep on it. Then start.

When you ship it, send past-you the screenshot you promised. Past-you
is the one who needed to see it.`}]},Qv=[$v,Yv,Jv],Kv={id:"m13-l1-intro",moduleId:"capstone",title:"The capstone — Mini-Viszio",objective:"Read the capstone brief and accept the no-AI honor code.",estimatedMinutes:5,blocks:[{type:"explain",id:"m13-l1-e1",listen:!0,markdown:`## This is the exit exam

If you've worked through the modules, attempted BA-1, BA-2, and BA-3,
you've already done the studying. The capstone is the test.

**Mini-Viszio** is a stripped-down mobile-first version of the real
Viszio: clock in with GPS, clock out, see a history. Two screens. One
real device.

You'll do it **without any AI assistance**. No Claude, no ChatGPT, no
Copilot. The point is not the code. The point is proving to yourself
that you can build a real full-stack app alone.`},{type:"explain",id:"m13-l1-e2",listen:!0,markdown:`## When to start it

Don't rush this. Recommended order:

1. Finish Module 1 → 12 (or at least Modules 1-5 and the relevant intros).
2. Complete BA-1, BA-2, BA-3.
3. Sit with the BA-4 spec. Sleep on it.
4. Start with Day 1 = environment setup. Don't try to code on Day 1.
5. Allocate roughly 25 hours across multiple sessions. Maybe a week.

The link to the capstone build-along is in the curriculum card for this
module, and on your Home page.`},{type:"explain",id:"m13-l1-e3",listen:!0,markdown:`## The promise

When you ship this — when the clock-in cycle works on your phone, no
AI involved — Ship It has done its job.

Take a screenshot. Send it to past-you who started this app. You owed
yourself that.`}]},Xv=[Kv],Zv={id:"test-blocks",moduleId:"diagnostics",title:"Test lesson — all six block types",objective:"Exercise every Phase 1 block type end-to-end with progress persistence.",estimatedMinutes:8,blocks:[{type:"explain",id:"tb-explain-1",listen:!0,markdown:`## Welcome to Ship It

This page exists to **prove** every lesson block works.

You'll see six block types in order:

1. **Explain** — the prose you're reading (with a Listen button up top).
2. **Command** — a copyable shell command you check off when you run it.
3. **TypeAlong** — retype the snippet to advance.
4. **ReadThis** — answer a comprehension question on a code sample.
5. **CodeChallenge** — write code, run it in a sandbox, match the expected output.
6. **DebugThis** — fix broken code that throws.

If you complete all six and reload the page, the checkmarks should still be here.`},{type:"command",id:"tb-cmd-1",label:"Confirm Node is installed",command:"node -v",expectedOutput:"v20.x.x (or anything starting with v18+)"},{type:"typealong",id:"tb-typealong-1",language:"js",instructions:"Retype the function exactly into the empty editor below.",code:`function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('Gabs'));`},{type:"readthis",id:"tb-readthis-1",language:"js",code:`const xs = [1, 2, 3];
const ys = xs.map((n) => n * 2);
console.log(ys);`,question:"What does this program print?",options:["[1, 2, 3]","[2, 4, 6]","[1, 4, 9]","undefined"],answerIndex:1,explanation:"`map` builds a new array with the callback applied to every element."},{type:"codechallenge",id:"tb-cc-1",spec:`Write a program that prints the squares of 1 through 5, one per line.
Expected output:
1
4
9
16
25`,starterCode:`// Print the squares of 1..5, one per line.
for (let i = 1; i <= 5; i++) {
  // TODO: console.log the square
}`,expectedConsoleOutput:`1
4
9
16
25`},{type:"debugthis",id:"tb-debug-1",brokenCode:`const items = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i].toUpperCase());
}`,errorMessage:"TypeError: Cannot read properties of undefined (reading 'toUpperCase')",expectedConsoleOutput:`APPLE
BANANA
CHERRY`,hint:"The loop runs one step too far — check the comparison in the for-loop condition."}],quiz:[{id:"tb-quiz-1",prompt:"Which block type uses a sandboxed iframe to run JavaScript?",options:["Explain","TypeAlong","CodeChallenge","Command"],answerIndex:2},{id:"tb-quiz-2",prompt:"Where does Ship It store your progress?",options:["A backend database","sessionStorage","localStorage","A cookie"],answerIndex:2,explanation:"No backend in v1 — everything is in localStorage under `ship-it:progress:v1`."}]},Fo=[...Nw,..._w,...Hw,...ev,...uv,...yv,...Tv,...Ov,...Dv,...Hv,...Gv,...Qv,...Xv,Zv];function xf(e){return Fo.find(t=>t.id===e)}function au(e){return Fo.filter(t=>t.moduleId===e)}function ek(e){return e.type!=="explain"}function tk(e,t,n){const r=e.blocks.filter(ek),i=r.length,o=r.filter(a=>t[a.id]).length,s=!!n[e.id];return i===0?{done:s,blocksDone:0,blocksTotal:0,pct:s?100:0}:{done:s,blocksDone:o,blocksTotal:i,pct:s?100:Math.round(o/i*100)}}function wf(e,t){const n=au(e),r=n.length;if(r===0)return{total:0,completed:0,pct:0};const i=n.filter(o=>t[o.id]).length;return{total:r,completed:i,pct:Math.round(i/r*100)}}function nk(e,t){return au(e).find(n=>!t[n.id])}const rk={id:"ba-1-notes-app",title:"Build-Along #1 — Notes app",summary:"Plain HTML, CSS, JS. localStorage for persistence. Add, edit, delete notes. Filter by tag. No frameworks. No AI.",unlockedByModule:"html-css-dom",estimatedHours:4,rules:["No frameworks. Vanilla HTML, CSS, JS only.","No AI assistance — no Copilot, no ChatGPT, no Claude. Honor code.","localStorage only — no backend, no database.","If you get stuck for more than 20 minutes, write down the exact question and keep going. Don't quit."],spec:`## What you're building

A small notes app you can use in your browser. Notes survive page reloads.
Notes can be tagged, and you can filter the list by tag.

## Required features

- Add a note (title + body + optional comma-separated tags)
- Edit an existing note
- Delete a note (with a confirm prompt)
- Filter the visible list by tag
- Persist everything to \`localStorage\` under a single key

## Hard constraints

- Three files only: \`index.html\`, \`style.css\`, \`script.js\`
- No frameworks, no build step. You open \`index.html\` directly.
- All JS in \`script.js\` — no inline \`<script>\` in HTML.

## Done means

- You can add 3 notes, refresh the page, all 3 are still there
- You can tag two of them \`#work\` and one \`#home\`, click the \`#work\` tag,
  and only the two work notes show
- You can edit a note's title and the change persists
- You can delete a note and confirm dialog stops accidental deletion`,milestones:[{id:"ms-1",title:"index.html boilerplate + header + empty note list container"},{id:"ms-2",title:"style.css with a layout you don't hate"},{id:"ms-3",title:"Add-note form with title + body + tags fields"},{id:"ms-4",title:"Add-note saves to localStorage and renders into the list"},{id:"ms-5",title:"Notes survive a page refresh"},{id:"ms-6",title:"Edit-note flow (click a note → fields populate → Save updates it)"},{id:"ms-7",title:"Delete-note flow with a confirm prompt"},{id:"ms-8",title:"Tag filter: clicking a tag chip filters the list"}],starterFiles:[{path:"index.html",language:"html",content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Notes</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Notes</h1>
    </header>
    <main>
      <!-- TODO: add-note form -->
      <!-- TODO: tag filter row -->
      <!-- TODO: note list -->
    </main>
    <script src="script.js"><\/script>
  </body>
</html>
`},{path:"style.css",language:"css",content:`/* Start simple. Make it readable before you make it pretty. */

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0e1116;
  color: #e7ebf0;
}
header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #262b33;
}
main {
  padding: 1.5rem;
  max-width: 720px;
  margin: 0 auto;
}
`},{path:"script.js",language:"js",content:`// Ship It — BA-1 Notes app starter
// No frameworks. No AI. Read each line; type each line.

const STORAGE_KEY = 'notes-app:v1';

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// TODO: render notes into the list
// TODO: wire the add-note form
// TODO: wire edit / delete
// TODO: wire tag filter

console.log('notes app loaded with', loadNotes().length, 'notes');
`},{path:"README.md",language:"md",content:`# BA-1 — Notes app

Open \`index.html\` directly in your browser. No build step.

## Milestones (tick as you go)

- [ ] index.html boilerplate + header + empty note list container
- [ ] style.css with a layout you don't hate
- [ ] Add-note form with title + body + tags fields
- [ ] Add-note saves to localStorage and renders into the list
- [ ] Notes survive a page refresh
- [ ] Edit-note flow (click a note → fields populate → Save updates it)
- [ ] Delete-note flow with a confirm prompt
- [ ] Tag filter: clicking a tag chip filters the list

## Rules

- Vanilla HTML/CSS/JS only.
- No AI. No Copilot. No ChatGPT. No Claude.
- localStorage only. No backend.
- Stuck 20+ min? Write the question down, then keep going.
`}]},ik={id:"ba-2-todo-api",title:"Build-Along #2 — Todo API",summary:"Node + Express + SQLite. CRUD endpoints for /todos. Persist to a SQLite file. Test with curl or Postman. No frontend.",unlockedByModule:"sql-sqlite",estimatedHours:6,rules:["Vanilla Node + Express + better-sqlite3. No ORMs, no Prisma, no Drizzle.","No AI assistance. No Copilot. No ChatGPT. No Claude.","No frontend in this build-along. Test with curl or Postman.","When you get stuck for 20+ minutes, write the question down, keep moving."],spec:`## What you're building

A small HTTP API for managing a list of todos. Five endpoints. Data
persists to a SQLite file on disk so the server can restart without
losing data.

## The five endpoints

| Method | Path             | What it does                       |
|--------|------------------|------------------------------------|
| GET    | /todos           | List all todos                     |
| GET    | /todos/:id       | Get one todo by id                 |
| POST   | /todos           | Create a todo (body: { title })    |
| PUT    | /todos/:id       | Update title or done (body: any)   |
| DELETE | /todos/:id       | Delete a todo                      |

## Data shape

A todo is:

\`\`\`json
{ "id": 1, "title": "Buy milk", "done": false, "createdAt": "..." }
\`\`\`

## Hard constraints

- One file (\`index.js\`) is enough — split only if you want to.
- The database is a single file: \`todos.db\` in the project root.
- Status codes matter: 201 after POST, 204 after DELETE, 404 when an
  id doesn't exist.

## Done means

You can run \`node index.js\`, then in another terminal hit each endpoint
with curl and get the expected responses. Stop the server. Start it again.
The todos you created are still there.`,milestones:[{id:"ms-1",title:"npm init -y, install express and better-sqlite3"},{id:"ms-2",title:"Boot an Express server that responds to GET / with hello"},{id:"ms-3",title:"Open a SQLite file and run CREATE TABLE for todos on startup"},{id:"ms-4",title:"GET /todos returns all rows as JSON"},{id:"ms-5",title:"POST /todos inserts a row, returns 201 with the new todo"},{id:"ms-6",title:"GET /todos/:id returns one row, or 404 if not found"},{id:"ms-7",title:"PUT /todos/:id updates title and/or done"},{id:"ms-8",title:"DELETE /todos/:id removes a row, returns 204"},{id:"ms-9",title:"Validation: POST without a title returns 400 with an error message"},{id:"ms-10",title:"Test the full flow with curl: create, list, update, delete, restart server, verify persistence"}],starterFiles:[{path:"package.json",language:"json",content:`{
  "name": "todo-api",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "better-sqlite3": "^11.0.0",
    "express": "^4.19.0"
  }
}
`},{path:"index.js",language:"js",content:`import express from 'express';
import Database from 'better-sqlite3';

const app = express();
app.use(express.json());

const db = new Database('todos.db');

// TODO: CREATE TABLE IF NOT EXISTS todos (...)

// Test endpoint to confirm the server boots
app.get('/', (req, res) => {
  res.send('todo api ok');
});

// TODO: GET /todos
// TODO: GET /todos/:id
// TODO: POST /todos
// TODO: PUT /todos/:id
// TODO: DELETE /todos/:id

const port = 3000;
app.listen(port, () => {
  console.log(\`listening on http://localhost:\${port}\`);
});
`},{path:"README.md",language:"md",content:`# BA-2 — Todo API

\`\`\`bash
npm install
npm start
\`\`\`

Then in another terminal:

\`\`\`bash
curl http://localhost:3000/
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"buy milk"}'
curl http://localhost:3000/todos
\`\`\`

## Milestones

- [ ] npm init + install express, better-sqlite3
- [ ] Express boots, GET / returns hello
- [ ] SQLite open + CREATE TABLE on startup
- [ ] GET /todos
- [ ] POST /todos (201)
- [ ] GET /todos/:id (404 when missing)
- [ ] PUT /todos/:id
- [ ] DELETE /todos/:id (204)
- [ ] Validation: missing title returns 400
- [ ] Full flow with persistence test

## Rules

- Vanilla express + better-sqlite3. No ORMs.
- No AI assistance.
- One file is fine. Split only if you want.
- Stuck 20+ min: write the question down, keep moving.
`}]},ok={id:"ba-3-expense-tracker",title:"Build-Along #3 — Expense tracker",summary:"React + Express + SQLite + JWT. Register, log in, add expenses, list and filter. The integration leap — your first real full-stack app.",unlockedByModule:"auth-jwt",estimatedHours:12,rules:["React frontend (Vite) + Express/SQLite backend (reuse BA-2 as the starting backend).","JWT for auth. bcrypt for password hashing.","No AI assistance. No Copilot. No ChatGPT. No Claude.","No CSS frameworks beyond plain CSS or Tailwind — choose one.","You will be slower than at BA-1 and BA-2. That is the point."],spec:`## What you're building

A real, usable expense tracker. A user can sign up, log in, add expenses
with a date and category, see a list of their own expenses, and filter
by date range.

## Required features

### Backend (extend BA-2's setup)

- \`POST /auth/register\` — { email, password } → creates user (hashed
  password), returns JWT.
- \`POST /auth/login\` — { email, password } → returns JWT.
- Middleware that reads \`Authorization: Bearer <token>\` and attaches
  \`req.user\`.
- \`GET /expenses\` — protected. Returns the logged-in user's expenses.
  Query params: \`?from=YYYY-MM-DD&to=YYYY-MM-DD\` for date filtering.
- \`POST /expenses\` — protected. Creates an expense for the logged-in user.
- \`DELETE /expenses/:id\` — protected. Only deletes if the expense
  belongs to the logged-in user.

### Frontend

- Login + Register pages.
- After login, store the JWT in localStorage.
- Expenses page: add-form on top, list below, date-range filter at the top.
- Logout button clears the token and redirects to /login.

## Hard constraints

- React 18 + Vite. No Next.js, no CRA.
- React Router for routing.
- \`fetch\` for API calls (no axios).
- Plain CSS or Tailwind — your call.

## Done means

- You can register a brand-new user from the UI.
- After login, you stay logged in across reloads (token persists).
- Two different users see two different expense lists.
- The date filter actually filters.
- Logout works and protected routes redirect.`,milestones:[{id:"ms-1",title:"Scaffold the React frontend with Vite + React Router"},{id:"ms-2",title:"Add bcrypt + jsonwebtoken to the BA-2 backend"},{id:"ms-3",title:"POST /auth/register works (returns a token)"},{id:"ms-4",title:"POST /auth/login works (returns a token)"},{id:"ms-5",title:"Auth middleware validates Bearer tokens"},{id:"ms-6",title:"Expenses table with a user_id foreign key"},{id:"ms-7",title:"GET /expenses returns only the logged-in user's rows"},{id:"ms-8",title:"POST /expenses creates a row tied to the logged-in user"},{id:"ms-9",title:"DELETE /expenses/:id enforces ownership"},{id:"ms-10",title:"Frontend Login + Register pages, token stored in localStorage"},{id:"ms-11",title:"Expenses page: add-form, list, delete button"},{id:"ms-12",title:"Date-range filter wired to GET /expenses query params"}],starterFiles:[{path:"README.md",language:"md",content:`# BA-3 — Expense tracker

Two projects in one repo:

\`\`\`
expense-tracker/
├── server/       # extends BA-2's Express + SQLite
│   ├── index.js
│   ├── auth.js
│   └── package.json
└── web/          # new React + Vite app
    ├── src/
    └── package.json
\`\`\`

## Running

\`\`\`bash
# terminal 1
cd server && npm install && npm start

# terminal 2
cd web && npm install && npm run dev
\`\`\`

## Milestones

- [ ] Scaffold React + Vite frontend
- [ ] bcrypt + jsonwebtoken installed in server
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] Auth middleware
- [ ] Expenses table with user_id FK
- [ ] GET /expenses (filtered to logged-in user)
- [ ] POST /expenses
- [ ] DELETE /expenses/:id (ownership check)
- [ ] Frontend Login + Register pages, token in localStorage
- [ ] Expenses page: add, list, delete
- [ ] Date range filter

## Rules

- Real JWT, real bcrypt. No fake "session = user_id" shortcuts.
- No AI assistance.
- Two users must see two different lists. This is the test that owns BA-3.
`}]},sk={id:"ba-4-mini-viszio",title:"Capstone — Mini-Viszio",summary:"React Native + Expo + Express + SQLite. GPS clock-in / clock-out with a list of past entries. This is the exit exam — when you ship this, the app has done its job.",unlockedByModule:"deploy-ship",estimatedHours:25,rules:["No AI assistance. Honor code. The whole point of Ship It is to prove you can do this alone.","React Native + Expo (managed workflow) for the app.","Reuse the Express + SQLite backend pattern from BA-2/BA-3.","You may consult the Ship It lessons, MDN, the Expo docs, and Stack Overflow. You may not paste code into Claude/ChatGPT.","If you get stuck for 30+ minutes on the same problem, write the question down and keep moving. Come back after sleep."],spec:`## What you're building

A mobile app that lets a single user clock in (recording GPS + timestamp),
clock out (recording GPS + timestamp), and see a list of past clock-in/out
sessions. The backend stores everything; the app talks to it.

This is the minimum viable shape of Viszio — the real product you've
been training to build.

## Required features

### Mobile app (React Native + Expo)

- Single-user login (reuse JWT from BA-3 — one hardcoded user is fine
  for the capstone).
- "Clock in" button. When pressed:
  - Request location permission (if not granted).
  - Get the current GPS coords.
  - POST to backend with { lat, lng, type: 'in' }.
- "Clock out" button. Same flow with type: 'out'.
- "History" screen — list of past entries, newest first. Each row shows
  type, timestamp, and a short address (or just "lat,lng" — geocoding is
  out of scope).
- The button respects current state — if last entry was an "in",
  showing "Clock out" is the right choice.

### Backend

- \`POST /auth/login\` — same JWT pattern as BA-3.
- \`POST /entries\` — protected, body { lat, lng, type }, stores row.
- \`GET /entries\` — protected, returns the user's entries newest first.

## Hard constraints

- React Native + Expo (managed). No bare workflow, no Flutter, no native iOS/Android tooling.
- One screen for clock-in/out, one for history. That's it. Resist scope creep.
- Backend stays on localhost during development. Deployment is bonus.

## Done means

- You can install the Expo Go app on your phone, scan a QR code, and
  open Mini-Viszio.
- You can clock in. Stand somewhere else. Clock out. See both entries
  in the history.
- You did all this **without any AI help**.

## When you ship this

Take a screenshot. Send it to past-you who started Ship It. Past-you
needed to see it.`,milestones:[{id:"ms-1",title:"Scaffold the Expo app with create-expo-app"},{id:"ms-2",title:"App runs on your phone via Expo Go"},{id:"ms-3",title:"Two-screen navigation (Clock / History) with React Navigation"},{id:"ms-4",title:"expo-location wired — you can log your own coords from the Clock screen"},{id:"ms-5",title:"Backend boots (extend BA-3 or fresh) with /auth/login and /entries routes"},{id:"ms-6",title:"POST /auth/login works — the app stores the token"},{id:"ms-7",title:"Clock In button POSTs an entry with GPS coords"},{id:"ms-8",title:"Clock Out button POSTs an entry with GPS coords"},{id:"ms-9",title:"GET /entries returns the user's history"},{id:"ms-10",title:"History screen renders the list, newest first"},{id:"ms-11",title:'Button shows "Clock in" or "Clock out" based on last entry'},{id:"ms-12",title:"Refreshing the History screen pulls fresh data from the backend"},{id:"ms-13",title:"Empty state for History when there are no entries"},{id:"ms-14",title:"Loading + error states for the buttons (no spinner forever, no silent fail)"},{id:"ms-15",title:"You install Expo Go on your phone, open the app via QR, and complete one clock-in cycle"}],starterFiles:[{path:"README.md",language:"md",content:`# Capstone — Mini-Viszio

The exit exam. Ship this without AI and Ship It has done its job.

## Stack

- Mobile: React Native + Expo (managed)
- Backend: Express + SQLite (reuse BA-2 / BA-3 patterns)
- Auth: JWT (one hardcoded user is fine for capstone)

## Two screens

- **Clock** — single button. "Clock in" or "Clock out" based on state.
- **History** — list of past entries, newest first.

## Rules (read every time you sit down to work on this)

- No AI assistance. This is the test.
- MDN, Expo docs, Stack Overflow, Ship It lessons — all fair game.
- Stuck 30+ min on the same thing? Write the question down. Move on.
- The point isn't the code. The point is you proving to yourself you
  can do this alone.

## Milestones

- [ ] Scaffold the Expo app
- [ ] App runs on phone via Expo Go
- [ ] Two-screen navigation
- [ ] expo-location wired
- [ ] Backend boots with /auth/login + /entries
- [ ] Login works, token stored
- [ ] Clock In button POSTs entry
- [ ] Clock Out button POSTs entry
- [ ] GET /entries works
- [ ] History screen renders the list
- [ ] Button reflects last-entry state
- [ ] History refreshes pull fresh data
- [ ] Empty state
- [ ] Loading + error states
- [ ] Full clock-in cycle on a real phone

## When done

Take a screenshot. You earned it.
`}]},vf=[rk,ik,ok,sk];function kf(e){return vf.find(t=>t.id===e)}const ak="ba-milestone";function bf(e,t){return`${ak}:${e}:${t}`}const Ot=[{id:"g-1",title:"Off-by-one in a for loop",topic:"Loops",difficulty:"easy",brokenCode:`const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}`,errorMessage:"TypeError: Cannot read properties of undefined (reading 'toUpperCase')",expectedConsoleOutput:`APPLE
BANANA
CHERRY`,hint:"Check the comparison in the for-loop condition. Array indexes go up to length minus one."},{id:"g-2",title:"Forgot to return",topic:"Functions",difficulty:"easy",brokenCode:`function double(n) {
  n * 2;
}

console.log(double(3));
console.log(double(7));`,errorMessage:"(no error thrown — the output is wrong)",expectedConsoleOutput:`6
14`,hint:"A function without an explicit return statement gives back undefined."},{id:"g-3",title:"Async without await",topic:"Async",difficulty:"medium",brokenCode:`function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  const a = delay(10, 'one');
  const b = delay(10, 'two');
  console.log(a, b);
}

main();`,errorMessage:"(no error thrown — but the logs are Promises, not values)",expectedConsoleOutput:"one two",hint:"You declared the function async, but the call sites are missing the keyword that unwraps the promise."}];function lk(e){return Ot.find(t=>t.id===e)}function uk(){const{progress:e}=et(),t=Object.keys(e.lessonsCompleted).length,n=Fo.length,r=e.settings.lastLessonId,i=r?xf(r):void 0,o=Fo.find(l=>!e.lessonsCompleted[l.id]),s=i??o,a=i?"resume":o?"start":null;return c.jsxs("div",{className:"space-y-8",children:[c.jsx("section",{children:c.jsxs("div",{className:"flex items-end justify-between gap-4 flex-wrap",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold text-ink-100",children:"Ship It"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 max-w-2xl mt-1",children:"A personal training rig. Drill the syntax. Build the projects. Ship without AI."})]}),c.jsxs("div",{className:"card px-4 py-3 text-sm text-ink-200 flex gap-6 self-stretch sm:self-auto",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400",children:"Lessons done"}),c.jsx("div",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:t})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400",children:"Authored"}),c.jsx("div",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:n})]})]})]})}),s&&a&&c.jsxs("section",{className:"card p-5 flex items-center justify-between gap-4 border-accent/30",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-xs text-accent-strong",children:a==="resume"?"Continue where you left off":"Start here"}),c.jsx("div",{className:"text-base font-semibold text-ink-100 truncate",children:s.title}),c.jsx("div",{className:"text-xs text-ink-300 truncate",children:s.objective}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-1",children:["module: ",s.moduleId," · ",s.estimatedMinutes," min"]})]}),c.jsx(de,{to:`/lesson/${s.id}`,className:"btn-primary shrink-0",children:a==="resume"?"Resume":"Begin"})]}),c.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs(de,{to:"/gauntlet",className:"card p-4 group hover:border-accent/40 transition-colors flex flex-col",children:[c.jsx("div",{className:"text-xs text-ink-300",children:"Always available"}),c.jsx("div",{className:"text-base font-semibold text-ink-100 mt-0.5",children:"Debug Gauntlet"}),c.jsx("div",{className:"text-xs text-ink-300 mt-1 flex-1",children:"Broken code, real errors. Fix one snippet at a time."}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-3",children:[Object.keys(e.gauntletSolved).length," / ",Ot.length," solved"]})]}),vf.map(l=>c.jsxs(de,{to:`/build-along/${l.id}`,className:"card p-4 group hover:border-accent/40 transition-colors flex flex-col",children:[c.jsx("div",{className:"text-xs text-ink-300",children:"Build-along"}),c.jsx("div",{className:"text-base font-semibold text-ink-100 mt-0.5",children:l.title}),c.jsx("div",{className:"text-xs text-ink-300 mt-1 flex-1 line-clamp-2",children:l.summary}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-3",children:[e.buildAlongsStarted[l.id]?"Started":"Not started"," · ~",l.estimatedHours,"h"]})]},l.id)),c.jsxs(de,{to:"/lesson/test-blocks",className:"card p-4 group hover:border-accent/40 transition-colors flex flex-col",children:[c.jsx("div",{className:"text-xs text-ink-300",children:"Engine sandbox"}),c.jsx("div",{className:"text-base font-semibold text-ink-100 mt-0.5",children:"Test lesson"}),c.jsx("div",{className:"text-xs text-ink-300 mt-1 flex-1",children:"All six block types exercised in one place."}),c.jsx("div",{className:"text-[11px] text-ink-400 mt-3",children:"Diagnostic — not part of the curriculum"})]})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"flex items-baseline justify-between mb-3",children:[c.jsx("h2",{className:"text-lg font-semibold text-ink-100",children:"Curriculum"}),c.jsx("span",{className:"text-xs text-ink-400",children:"12 modules + capstone"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:yf.map(l=>{const u=wf(l.id,e.lessonsCompleted);return c.jsx(xw,{module:l,completionPct:u.pct},l.id)})})]})]})}function ck(){const{moduleId:e}=as(),t=e?yw(e):void 0,{progress:n}=et();if(!t)return c.jsxs("div",{className:"card p-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-ink-100",children:"Module not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No module with id ",c.jsx("code",{children:e}),"."]}),c.jsx(de,{to:"/",className:"btn-primary mt-4 inline-flex",children:"Back home"})]});const r=au(t.id),i=wf(t.id,n.lessonsCompleted),o=nk(t.id,n.lessonsCompleted);return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← All modules"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.badge}),c.jsxs("span",{className:"text-xs text-ink-400",children:["Module ",t.index]}),t.isCapstone&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Capstone"})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:t.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-2 max-w-2xl",children:t.blurb}),r.length>0&&c.jsxs("div",{className:"mt-4 max-w-md",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${i.pct}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400",children:[i.completed," / ",i.total," lessons · ",i.pct,"%"]})]})]}),o&&c.jsxs("div",{className:"card p-4 flex items-center justify-between gap-3 border-accent/30",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-accent-strong",children:"Recommended next"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:o.title}),c.jsx("div",{className:"text-xs text-ink-300",children:o.objective})]}),c.jsx(de,{to:`/lesson/${o.id}`,className:"btn-primary shrink-0",children:"Start"})]}),r.length===0?c.jsxs("div",{className:"card p-6",children:[c.jsx("div",{className:"text-sm text-ink-100",children:"No lessons authored yet for this module."}),c.jsx("div",{className:"text-xs text-ink-400 mt-1",children:"Lessons land in Phase 4 onward. The plumbing is ready — just waiting on content."}),t.unlocksBuildAlong&&c.jsxs(de,{to:`/build-along/${t.unlocksBuildAlong}`,className:"mt-4 text-sm text-accent-strong hover:underline inline-flex items-center gap-1",children:["🔓 Unlocks build-along ",c.jsx("code",{children:t.unlocksBuildAlong})," →"]})]}):c.jsxs("div",{className:"space-y-3",children:[c.jsx("div",{className:"text-xs uppercase tracking-wide text-ink-400",children:"Lessons"}),c.jsx("ol",{className:"space-y-2",children:r.map((s,a)=>{const l=tk(s,n.blocksCompleted,n.lessonsCompleted);return c.jsx("li",{children:c.jsxs(de,{to:`/lesson/${s.id}`,className:"card px-3 sm:px-4 py-3 flex items-center gap-3 sm:gap-4 hover:border-accent/40 transition-colors group",children:[c.jsx("div",{className:`shrink-0 h-8 w-8 rounded-full grid place-items-center text-sm font-medium ${l.done?"bg-accent-strong text-ink-900":"bg-ink-700 text-ink-200 border border-ink-600"}`,children:l.done?"✓":a+1}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"text-sm font-medium text-ink-100 group-hover:text-white truncate",children:s.title}),c.jsx("div",{className:"text-xs text-ink-300 truncate hidden sm:block",children:s.objective}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-1 flex items-center gap-2",children:[c.jsxs("span",{children:[s.estimatedMinutes," min ·"," ",l.blocksTotal>0?`${l.blocksDone}/${l.blocksTotal} blocks`:"explainer"]}),c.jsxs("span",{className:"sm:hidden text-ink-200",children:["· ",l.pct,"%"]})]})]}),c.jsxs("div",{className:"w-24 lg:w-28 shrink-0 hidden sm:block",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${l.pct}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400 text-right",children:[l.pct,"%"]})]})]})},s.id)})})]})]})}function dk(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const pk=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hk=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fk={};function $c(e,t){return(fk.jsx?hk:pk).test(e)}const mk=/[ \t\n\f\r]/g;function gk(e){return typeof e=="object"?e.type==="text"?Yc(e.value):!1:Yc(e)}function Yc(e){return e.replace(mk,"")===""}class Ei{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ei.prototype.normal={};Ei.prototype.property={};Ei.prototype.space=void 0;function Sf(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ei(n,r,t)}function Xa(e){return e.toLowerCase()}class We{constructor(t,n){this.attribute=n,this.property=t}}We.prototype.attribute="";We.prototype.booleanish=!1;We.prototype.boolean=!1;We.prototype.commaOrSpaceSeparated=!1;We.prototype.commaSeparated=!1;We.prototype.defined=!1;We.prototype.mustUseProperty=!1;We.prototype.number=!1;We.prototype.overloadedBoolean=!1;We.prototype.property="";We.prototype.spaceSeparated=!1;We.prototype.space=void 0;let yk=0;const G=Pn(),ye=Pn(),Za=Pn(),P=Pn(),ne=Pn(),rr=Pn(),Ve=Pn();function Pn(){return 2**++yk}const el=Object.freeze(Object.defineProperty({__proto__:null,boolean:G,booleanish:ye,commaOrSpaceSeparated:Ve,commaSeparated:rr,number:P,overloadedBoolean:Za,spaceSeparated:ne},Symbol.toStringTag,{value:"Module"})),Bs=Object.keys(el);class lu extends We{constructor(t,n,r,i){let o=-1;if(super(t,n),Jc(this,"space",i),typeof r=="number")for(;++o<Bs.length;){const s=Bs[o];Jc(this,Bs[o],(r&el[s])===el[s])}}}lu.prototype.defined=!0;function Jc(e,t,n){n&&(e[t]=n)}function yr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new lu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Xa(r)]=r,n[Xa(o.attribute)]=r}return new Ei(t,n,e.space)}const Ef=yr({properties:{ariaActiveDescendant:null,ariaAtomic:ye,ariaAutoComplete:null,ariaBusy:ye,ariaChecked:ye,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:ne,ariaCurrent:null,ariaDescribedBy:ne,ariaDetails:null,ariaDisabled:ye,ariaDropEffect:ne,ariaErrorMessage:null,ariaExpanded:ye,ariaFlowTo:ne,ariaGrabbed:ye,ariaHasPopup:null,ariaHidden:ye,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ne,ariaLevel:P,ariaLive:null,ariaModal:ye,ariaMultiLine:ye,ariaMultiSelectable:ye,ariaOrientation:null,ariaOwns:ne,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:ye,ariaReadOnly:ye,ariaRelevant:null,ariaRequired:ye,ariaRoleDescription:ne,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:ye,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Tf(e,t){return t in e?e[t]:t}function Nf(e,t){return Tf(e,t.toLowerCase())}const xk=yr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:rr,acceptCharset:ne,accessKey:ne,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:ne,autoFocus:G,autoPlay:G,blocking:ne,capture:null,charSet:null,checked:G,cite:null,className:ne,cols:P,colSpan:null,content:null,contentEditable:ye,controls:G,controlsList:ne,coords:P|rr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:Za,draggable:ye,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:ne,height:P,hidden:Za,high:P,href:null,hrefLang:null,htmlFor:ne,httpEquiv:ne,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:ne,itemRef:ne,itemScope:G,itemType:ne,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:P,pattern:null,ping:ne,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:ne,required:G,reversed:G,rows:P,rowSpan:P,sandbox:ne,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:ye,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:ye,width:P,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ne,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:ye,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:P,security:null,unselectable:null},space:"html",transform:Nf}),wk=yr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ve,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:ne,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:rr,g2:rr,glyphName:rr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:Ve,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ne,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ve,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ve,rev:Ve,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ve,requiredFeatures:Ve,requiredFonts:Ve,requiredFormats:Ve,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:Ve,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ve,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ve,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Tf}),jf=yr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Cf=yr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Nf}),If=yr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),vk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},kk=/[A-Z]/g,Qc=/-[a-z]/g,bk=/^data[-\w.:]+$/i;function Sk(e,t){const n=Xa(t);let r=t,i=We;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&bk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Qc,Tk);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Qc.test(o)){let s=o.replace(kk,Ek);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=lu}return new i(r,t)}function Ek(e){return"-"+e.toLowerCase()}function Tk(e){return e.charAt(1).toUpperCase()}const Nk=Sf([Ef,xk,jf,Cf,If],"html"),uu=Sf([Ef,wk,jf,Cf,If],"svg");function jk(e){return e.join(" ").trim()}var cu={},Kc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Ck=/\n/g,Ik=/^\s*/,Ak=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Pk=/^:\s*/,Ok=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Rk=/^[;\s]*/,Lk=/^\s+|\s+$/g,_k=`
`,Xc="/",Zc="*",xn="",Mk="comment",Dk="declaration";function zk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var v=y.match(Ck);v&&(n+=v.length);var T=y.lastIndexOf(_k);r=~T?y.length-T:r+y.length}function o(){var y={line:n,column:r};return function(v){return v.position=new s(y),u(),v}}function s(y){this.start=y,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(y){var v=new Error(t.source+":"+n+":"+r+": "+y);if(v.reason=y,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function l(y){var v=y.exec(e);if(v){var T=v[0];return i(T),e=e.slice(T.length),v}}function u(){l(Ik)}function d(y){var v;for(y=y||[];v=p();)v!==!1&&y.push(v);return y}function p(){var y=o();if(!(Xc!=e.charAt(0)||Zc!=e.charAt(1))){for(var v=2;xn!=e.charAt(v)&&(Zc!=e.charAt(v)||Xc!=e.charAt(v+1));)++v;if(v+=2,xn===e.charAt(v-1))return a("End of comment missing");var T=e.slice(2,v-2);return r+=2,i(T),e=e.slice(v),r+=2,y({type:Mk,comment:T})}}function f(){var y=o(),v=l(Ak);if(v){if(p(),!l(Pk))return a("property missing ':'");var T=l(Ok),m=y({type:Dk,property:ed(v[0].replace(Kc,xn)),value:T?ed(T[0].replace(Kc,xn)):xn});return l(Rk),m}}function h(){var y=[];d(y);for(var v;v=f();)v!==!1&&(y.push(v),d(y));return y}return u(),h()}function ed(e){return e?e.replace(Lk,xn):xn}var Fk=zk,Uk=po&&po.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cu,"__esModule",{value:!0});cu.default=Hk;const Bk=Uk(Fk);function Hk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Bk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var us={};Object.defineProperty(us,"__esModule",{value:!0});us.camelCase=void 0;var Wk=/^--[a-zA-Z0-9_-]+$/,qk=/-([a-z])/g,Vk=/^[^-]+$/,Gk=/^-(webkit|moz|ms|o|khtml)-/,$k=/^-(ms)-/,Yk=function(e){return!e||Vk.test(e)||Wk.test(e)},Jk=function(e,t){return t.toUpperCase()},td=function(e,t){return"".concat(t,"-")},Qk=function(e,t){return t===void 0&&(t={}),Yk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace($k,td):e=e.replace(Gk,td),e.replace(qk,Jk))};us.camelCase=Qk;var Kk=po&&po.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Xk=Kk(cu),Zk=us;function tl(e,t){var n={};return!e||typeof e!="string"||(0,Xk.default)(e,function(r,i){r&&i&&(n[(0,Zk.camelCase)(r,t)]=i)}),n}tl.default=tl;var e1=tl;const t1=cl(e1),Af=Pf("end"),du=Pf("start");function Pf(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function n1(e){const t=du(e),n=Af(e);if(t&&n)return{start:t,end:n}}function Vr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?nd(e.position):"start"in e||"end"in e?nd(e):"line"in e||"column"in e?nl(e):""}function nl(e){return rd(e&&e.line)+":"+rd(e&&e.column)}function nd(e){return nl(e&&e.start)+"-"+nl(e&&e.end)}function rd(e){return e&&typeof e=="number"?e:1}class Pe extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Vr(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Pe.prototype.file="";Pe.prototype.name="";Pe.prototype.reason="";Pe.prototype.message="";Pe.prototype.stack="";Pe.prototype.column=void 0;Pe.prototype.line=void 0;Pe.prototype.ancestors=void 0;Pe.prototype.cause=void 0;Pe.prototype.fatal=void 0;Pe.prototype.place=void 0;Pe.prototype.ruleId=void 0;Pe.prototype.source=void 0;const pu={}.hasOwnProperty,r1=new Map,i1=/[A-Z]/g,o1=new Set(["table","tbody","thead","tfoot","tr"]),s1=new Set(["td","th"]),Of="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function a1(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=m1(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=f1(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?uu:Nk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Rf(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Rf(e,t,n){if(t.type==="element")return l1(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return u1(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return d1(e,t,n);if(t.type==="mdxjsEsm")return c1(e,t);if(t.type==="root")return p1(e,t,n);if(t.type==="text")return h1(e,t)}function l1(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const o=_f(e,t.tagName,!1),s=g1(e,t);let a=fu(e,t);return o1.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!gk(l):!0})),Lf(e,s,o,t),hu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function u1(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}fi(e,t.position)}function c1(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);fi(e,t.position)}function d1(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=uu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:_f(e,t.name,!0),s=y1(e,t),a=fu(e,t);return Lf(e,s,o,t),hu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function p1(e,t,n){const r={};return hu(r,fu(e,t)),e.create(t,e.Fragment,r,n)}function h1(e,t){return t.value}function Lf(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function f1(e,t,n){return r;function r(i,o,s,a){const u=Array.isArray(s.children)?n:t;return a?u(o,s,a):u(o,s)}}function m1(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),l=du(r);return t(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function g1(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&pu.call(t.properties,i)){const o=x1(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&s1.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function y1(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else fi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else fi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function fu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:r1;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=i.get(l)||0;s=l+"-"+u,i.set(l,u+1)}}const a=Rf(e,o,s);a!==void 0&&n.push(a)}return n}function x1(e,t,n){const r=Sk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?dk(n):jk(n)),r.property==="style"){let i=typeof n=="object"?n:w1(e,String(n));return e.stylePropertyNameCase==="css"&&(i=v1(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?vk[r.property]||r.property:r.attribute,n]}}function w1(e,t){try{return t1(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Pe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Of+"#cannot-parse-style-attribute",i}}function _f(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=$c(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=$c(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return pu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);fi(e)}function fi(e,t){const n=new Pe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Of+"#cannot-handle-mdx-estrees-without-createevaluater",n}function v1(e){const t={};let n;for(n in e)pu.call(e,n)&&(t[k1(n)]=e[n]);return t}function k1(e){let t=e.replace(i1,b1);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function b1(e){return"-"+e.toLowerCase()}const Hs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},S1={};function E1(e,t){const n=S1,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Mf(e,r,i)}function Mf(e,t,n){if(T1(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return id(e.children,t,n)}return Array.isArray(e)?id(e,t,n):""}function id(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Mf(e[i],t,n);return r.join("")}function T1(e){return!!(e&&typeof e=="object")}const od=document.createElement("i");function mu(e){const t="&"+e+";";od.innerHTML=t;const n=od.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Tt(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function rt(e,t){return e.length>0?(Tt(e,e.length,0,t),e):t}const sd={}.hasOwnProperty;function N1(e){const t={};let n=-1;for(;++n<e.length;)j1(t,e[n]);return t}function j1(e,t){let n;for(n in t){const i=(sd.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){sd.call(i,s)||(i[s]=[]);const a=o[s];C1(i[s],Array.isArray(a)?a:a?[a]:[])}}}function C1(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Tt(e,0,0,r)}function Df(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ir(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const bt=fn(/[A-Za-z]/),Je=fn(/[\dA-Za-z]/),I1=fn(/[#-'*+\--9=?A-Z^-~]/);function rl(e){return e!==null&&(e<32||e===127)}const il=fn(/\d/),A1=fn(/[\dA-Fa-f]/),P1=fn(/[!-/:-@[-`{-~]/);function W(e){return e!==null&&e<-2}function He(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}const O1=fn(new RegExp("\\p{P}|\\p{S}","u")),R1=fn(/\s/);function fn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function xr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Je(e.charCodeAt(n+1))&&Je(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ie(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return K(l)?(e.enter(n),a(l)):t(l)}function a(l){return K(l)&&o++<i?(e.consume(l),a):(e.exit(n),t(l))}}const L1={tokenize:_1};function _1(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ie(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return W(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const M1={tokenize:D1},ad={tokenize:z1};function D1(e){const t=this,n=[];let r=0,i,o,s;return a;function a(x){if(r<n.length){const E=n[r];return t.containerState=E[1],e.attempt(E[0].continuation,l,u)(x)}return u(x)}function l(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const E=t.events.length;let N=E,b;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){b=t.events[N][1].end;break}m(r);let C=E;for(;C<t.events.length;)t.events[C][1].end={...b},C++;return Tt(t.events,N+1,0,t.events.slice(E)),t.events.length=C,u(x)}return a(x)}function u(x){if(r===n.length){if(!i)return f(x);if(i.currentConstruct&&i.currentConstruct.concrete)return y(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ad,d,p)(x)}function d(x){return i&&g(),m(r),f(x)}function p(x){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,y(x)}function f(x){return t.containerState={},e.attempt(ad,h,y)(x)}function h(x){return r++,n.push([t.currentConstruct,t.containerState]),f(x)}function y(x){if(x===null){i&&g(),m(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(x)}function v(x){if(x===null){T(e.exit("chunkFlow"),!0),m(0),e.consume(x);return}return W(x)?(e.consume(x),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(x),v)}function T(x,E){const N=t.sliceStream(x);if(E&&N.push(null),x.previous=o,o&&(o.next=x),o=x,i.defineSkip(x.start),i.write(N),t.parser.lazy[x.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<s&&(!i.events[b][1].end||i.events[b][1].end.offset>s))return;const C=t.events.length;let O=C,D,I;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){if(D){I=t.events[O][1].end;break}D=!0}for(m(r),b=C;b<t.events.length;)t.events[b][1].end={...I},b++;Tt(t.events,O+1,0,t.events.slice(C)),t.events.length=b}}function m(x){let E=n.length;for(;E-- >x;){const N=n[E];t.containerState=N[1],N[0].exit.call(t,e)}n.length=x}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function z1(e,t,n){return ie(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ld(e){if(e===null||He(e)||R1(e))return 1;if(O1(e))return 2}function gu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const ol={name:"attention",resolveAll:F1,tokenize:U1};function F1(e,t){let n=-1,r,i,o,s,a,l,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};ud(p,-l),ud(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=rt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=rt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=rt(u,gu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=rt(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=rt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Tt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function U1(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ld(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const u=e.exit("attentionSequence"),d=ld(l),p=!d||d===2&&i||n.includes(l),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(l)}}function ud(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const B1={name:"autolink",tokenize:H1};function H1(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return bt(h)?(e.consume(h),s):h===64?n(h):u(h)}function s(h){return h===43||h===45||h===46||Je(h)?(r=1,a(h)):u(h)}function a(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||Je(h))&&r++<32?(e.consume(h),a):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||rl(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),d):I1(h)?(e.consume(h),u):n(h)}function d(h){return Je(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Je(h))&&r++<63){const y=h===45?f:p;return e.consume(h),y}return n(h)}}const cs={partial:!0,tokenize:W1};function W1(e,t,n){return r;function r(o){return K(o)?ie(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||W(o)?t(o):n(o)}}const zf={continuation:{tokenize:V1},exit:G1,name:"blockQuote",tokenize:q1};function q1(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return K(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function V1(e,t,n){const r=this;return i;function i(s){return K(s)?ie(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(zf,t,n)(s)}}function G1(e){e.exit("blockQuote")}const Ff={name:"characterEscape",tokenize:$1};function $1(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return P1(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Uf={name:"characterReference",tokenize:Y1};function Y1(e,t,n){const r=this;let i=0,o,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),l}function l(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=Je,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=A1,d):(e.enter("characterReferenceValue"),o=7,s=il,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return s===Je&&!mu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(p)&&i++<o?(e.consume(p),d):n(p)}}const cd={partial:!0,tokenize:Q1},dd={concrete:!0,name:"codeFenced",tokenize:J1};function J1(e,t,n){const r=this,i={partial:!0,tokenize:N};let o=0,s=0,a;return l;function l(b){return u(b)}function u(b){const C=r.events[r.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,a=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===a?(s++,e.consume(b),d):s<3?n(b):(e.exit("codeFencedFenceSequence"),K(b)?ie(e,p,"whitespace")(b):p(b))}function p(b){return b===null||W(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(cd,v,E)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||W(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(b)):K(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ie(e,h,"whitespace")(b)):b===96&&b===a?n(b):(e.consume(b),f)}function h(b){return b===null||W(b)?p(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===null||W(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(b)):b===96&&b===a?n(b):(e.consume(b),y)}function v(b){return e.attempt(i,E,T)(b)}function T(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m}function m(b){return o>0&&K(b)?ie(e,g,"linePrefix",o+1)(b):g(b)}function g(b){return b===null||W(b)?e.check(cd,v,E)(b):(e.enter("codeFlowValue"),x(b))}function x(b){return b===null||W(b)?(e.exit("codeFlowValue"),g(b)):(e.consume(b),x)}function E(b){return e.exit("codeFenced"),t(b)}function N(b,C,O){let D=0;return I;function I(_){return b.enter("lineEnding"),b.consume(_),b.exit("lineEnding"),M}function M(_){return b.enter("codeFencedFence"),K(_)?ie(b,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):U(_)}function U(_){return _===a?(b.enter("codeFencedFenceSequence"),Y(_)):O(_)}function Y(_){return _===a?(D++,b.consume(_),Y):D>=s?(b.exit("codeFencedFenceSequence"),K(_)?ie(b,Z,"whitespace")(_):Z(_)):O(_)}function Z(_){return _===null||W(_)?(b.exit("codeFencedFence"),C(_)):O(_)}}}function Q1(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Ws={name:"codeIndented",tokenize:X1},K1={partial:!0,tokenize:Z1};function X1(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),ie(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):W(u)?e.attempt(K1,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||W(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function Z1(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):W(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):ie(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):W(s)?i(s):n(s)}}const e0={name:"codeText",previous:n0,resolve:t0,tokenize:r0};function t0(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function n0(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function r0(e,t,n){let r=0,i,o;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),l(p))}function l(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),l):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):W(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||W(p)?(e.exit("codeTextData"),l(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class i0{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ir(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ir(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ir(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ir(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ir(this.left,n.reverse())}}}function Ir(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Bf(e){const t={};let n=-1,r,i,o,s,a,l,u;const d=new i0(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,o0(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Tt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function o0(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let d,p,f=-1,h=n,y=0,v=0;const T=[v];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(v=f+1,T.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):T.pop(),f=T.length;f--;){const m=a.slice(T[f],T[f+1]),g=o.pop();l.push([g,g+m.length-1]),e.splice(g,2,m)}for(l.reverse(),f=-1;++f<l.length;)u[y+l[f][0]]=y+l[f][1],y+=l[f][1]-l[f][0]-1;return u}const s0={resolve:l0,tokenize:u0},a0={partial:!0,tokenize:c0};function l0(e){return Bf(e),e}function u0(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):W(a)?e.check(a0,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function c0(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ie(e,o,"linePrefix")}function o(s){if(s===null||W(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function Hf(e,t,n,r,i,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return p;function p(m){return m===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||rl(m)?n(m):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(a),f(m)):m===null||m===60||W(m)?n(m):(e.consume(m),m===92?y:h)}function y(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function v(m){return!d&&(m===null||m===41||He(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(m)):d<u&&m===40?(e.consume(m),d++,v):m===41?(e.consume(m),d--,v):m===null||m===32||m===40||rl(m)?n(m):(e.consume(m),m===92?T:v)}function T(m){return m===40||m===41||m===92?(e.consume(m),v):v(m)}}function Wf(e,t,n,r,i,o){const s=this;let a=0,l;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),d}function d(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):W(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||W(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!K(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,p):p(h)}}function qf(e,t,n,r,i,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===s?(e.exit(o),l(s)):f===null?n(f):W(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ie(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||W(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===s||f===92?(e.consume(f),d):d(f)}}function Gr(e,t){let n;return r;function r(i){return W(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):K(i)?ie(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const d0={name:"definition",tokenize:h0},p0={partial:!0,tokenize:f0};function h0(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),s(h)}function s(h){return Wf.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return He(h)?Gr(e,u)(h):u(h)}function u(h){return Hf(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(p0,p,p)(h)}function p(h){return K(h)?ie(e,f,"whitespace")(h):f(h)}function f(h){return h===null||W(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function f0(e,t,n){return r;function r(a){return He(a)?Gr(e,i)(a):n(a)}function i(a){return qf(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return K(a)?ie(e,s,"whitespace")(a):s(a)}function s(a){return a===null||W(a)?t(a):n(a)}}const m0={name:"hardBreakEscape",tokenize:g0};function g0(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return W(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const y0={name:"headingAtx",resolve:x0,tokenize:w0};function x0(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Tt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function w0(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||He(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||W(d)?(e.exit("atxHeading"),t(d)):K(d)?ie(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||He(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const v0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],pd=["pre","script","style","textarea"],k0={concrete:!0,name:"htmlFlow",resolveTo:E0,tokenize:T0},b0={partial:!0,tokenize:j0},S0={partial:!0,tokenize:N0};function E0(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function T0(e,t,n){const r=this;let i,o,s,a,l;return u;function u(k){return d(k)}function d(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),p}function p(k){return k===33?(e.consume(k),f):k===47?(e.consume(k),o=!0,v):k===63?(e.consume(k),i=3,r.interrupt?t:w):bt(k)?(e.consume(k),s=String.fromCharCode(k),T):n(k)}function f(k){return k===45?(e.consume(k),i=2,h):k===91?(e.consume(k),i=5,a=0,y):bt(k)?(e.consume(k),i=4,r.interrupt?t:w):n(k)}function h(k){return k===45?(e.consume(k),r.interrupt?t:w):n(k)}function y(k){const oe="CDATA[";return k===oe.charCodeAt(a++)?(e.consume(k),a===oe.length?r.interrupt?t:U:y):n(k)}function v(k){return bt(k)?(e.consume(k),s=String.fromCharCode(k),T):n(k)}function T(k){if(k===null||k===47||k===62||He(k)){const oe=k===47,ke=s.toLowerCase();return!oe&&!o&&pd.includes(ke)?(i=1,r.interrupt?t(k):U(k)):v0.includes(s.toLowerCase())?(i=6,oe?(e.consume(k),m):r.interrupt?t(k):U(k)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(k):o?g(k):x(k))}return k===45||Je(k)?(e.consume(k),s+=String.fromCharCode(k),T):n(k)}function m(k){return k===62?(e.consume(k),r.interrupt?t:U):n(k)}function g(k){return K(k)?(e.consume(k),g):I(k)}function x(k){return k===47?(e.consume(k),I):k===58||k===95||bt(k)?(e.consume(k),E):K(k)?(e.consume(k),x):I(k)}function E(k){return k===45||k===46||k===58||k===95||Je(k)?(e.consume(k),E):N(k)}function N(k){return k===61?(e.consume(k),b):K(k)?(e.consume(k),N):x(k)}function b(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),l=k,C):K(k)?(e.consume(k),b):O(k)}function C(k){return k===l?(e.consume(k),l=null,D):k===null||W(k)?n(k):(e.consume(k),C)}function O(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||He(k)?N(k):(e.consume(k),O)}function D(k){return k===47||k===62||K(k)?x(k):n(k)}function I(k){return k===62?(e.consume(k),M):n(k)}function M(k){return k===null||W(k)?U(k):K(k)?(e.consume(k),M):n(k)}function U(k){return k===45&&i===2?(e.consume(k),q):k===60&&i===1?(e.consume(k),X):k===62&&i===4?(e.consume(k),F):k===63&&i===3?(e.consume(k),w):k===93&&i===5?(e.consume(k),B):W(k)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(b0,H,Y)(k)):k===null||W(k)?(e.exit("htmlFlowData"),Y(k)):(e.consume(k),U)}function Y(k){return e.check(S0,Z,H)(k)}function Z(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),_}function _(k){return k===null||W(k)?Y(k):(e.enter("htmlFlowData"),U(k))}function q(k){return k===45?(e.consume(k),w):U(k)}function X(k){return k===47?(e.consume(k),s="",R):U(k)}function R(k){if(k===62){const oe=s.toLowerCase();return pd.includes(oe)?(e.consume(k),F):U(k)}return bt(k)&&s.length<8?(e.consume(k),s+=String.fromCharCode(k),R):U(k)}function B(k){return k===93?(e.consume(k),w):U(k)}function w(k){return k===62?(e.consume(k),F):k===45&&i===2?(e.consume(k),w):U(k)}function F(k){return k===null||W(k)?(e.exit("htmlFlowData"),H(k)):(e.consume(k),F)}function H(k){return e.exit("htmlFlow"),t(k)}}function N0(e,t,n){const r=this;return i;function i(s){return W(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function j0(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(cs,t,n)}}const C0={name:"htmlText",tokenize:I0};function I0(e,t,n){const r=this;let i,o,s;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),l}function l(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),N):w===63?(e.consume(w),x):bt(w)?(e.consume(w),O):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o=0,y):bt(w)?(e.consume(w),g):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):W(w)?(s=p,X(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?q(w):w===45?f(w):p(w)}function y(w){const F="CDATA[";return w===F.charCodeAt(o++)?(e.consume(w),o===F.length?v:y):n(w)}function v(w){return w===null?n(w):w===93?(e.consume(w),T):W(w)?(s=v,X(w)):(e.consume(w),v)}function T(w){return w===93?(e.consume(w),m):v(w)}function m(w){return w===62?q(w):w===93?(e.consume(w),m):v(w)}function g(w){return w===null||w===62?q(w):W(w)?(s=g,X(w)):(e.consume(w),g)}function x(w){return w===null?n(w):w===63?(e.consume(w),E):W(w)?(s=x,X(w)):(e.consume(w),x)}function E(w){return w===62?q(w):x(w)}function N(w){return bt(w)?(e.consume(w),b):n(w)}function b(w){return w===45||Je(w)?(e.consume(w),b):C(w)}function C(w){return W(w)?(s=C,X(w)):K(w)?(e.consume(w),C):q(w)}function O(w){return w===45||Je(w)?(e.consume(w),O):w===47||w===62||He(w)?D(w):n(w)}function D(w){return w===47?(e.consume(w),q):w===58||w===95||bt(w)?(e.consume(w),I):W(w)?(s=D,X(w)):K(w)?(e.consume(w),D):q(w)}function I(w){return w===45||w===46||w===58||w===95||Je(w)?(e.consume(w),I):M(w)}function M(w){return w===61?(e.consume(w),U):W(w)?(s=M,X(w)):K(w)?(e.consume(w),M):D(w)}function U(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,Y):W(w)?(s=U,X(w)):K(w)?(e.consume(w),U):(e.consume(w),Z)}function Y(w){return w===i?(e.consume(w),i=void 0,_):w===null?n(w):W(w)?(s=Y,X(w)):(e.consume(w),Y)}function Z(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||He(w)?D(w):(e.consume(w),Z)}function _(w){return w===47||w===62||He(w)?D(w):n(w)}function q(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function X(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),R}function R(w){return K(w)?ie(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):B(w)}function B(w){return e.enter("htmlTextData"),s(w)}}const yu={name:"labelEnd",resolveAll:R0,resolveTo:L0,tokenize:_0},A0={tokenize:M0},P0={tokenize:D0},O0={tokenize:z0};function R0(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Tt(e,0,e.length,n),e}function L0(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=rt(a,e.slice(o+1,o+r+3)),a=rt(a,[["enter",d,t]]),a=rt(a,gu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=rt(a,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),a=rt(a,e.slice(s+1)),a=rt(a,[["exit",l,t]]),Tt(e,o,e.length,a),e}function _0(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?p(f):(s=r.parser.defined.includes(ir(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(A0,d,s?d:p)(f):f===91?e.attempt(P0,d,s?u:p)(f):s?d(f):p(f)}function u(f){return e.attempt(O0,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function M0(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return He(p)?Gr(e,o)(p):o(p)}function o(p){return p===41?d(p):Hf(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return He(p)?Gr(e,l)(p):d(p)}function a(p){return n(p)}function l(p){return p===34||p===39||p===40?qf(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return He(p)?Gr(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function D0(e,t,n){const r=this;return i;function i(a){return Wf.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function z0(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const F0={name:"labelStartImage",resolveAll:yu.resolveAll,tokenize:U0};function U0(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const B0={name:"labelStartLink",resolveAll:yu.resolveAll,tokenize:H0};function H0(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const qs={name:"lineEnding",tokenize:W0};function W0(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ie(e,t,"linePrefix")}}const uo={name:"thematicBreak",tokenize:q0};function q0(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||W(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),K(u)?ie(e,a,"whitespace")(u):a(u))}}const Me={continuation:{tokenize:Y0},exit:Q0,name:"list",tokenize:$0},V0={partial:!0,tokenize:K0},G0={partial:!0,tokenize:J0};function $0(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(h){const y=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:il(h)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(uo,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return il(h)&&++s<10?(e.consume(h),l):(!r.interrupt||s<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(cs,r.interrupt?n:d,e.attempt(V0,f,p))}function d(h){return r.containerState.initialBlankLine=!0,o++,f(h)}function p(h){return K(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Y0(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(cs,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ie(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!K(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(G0,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ie(e,e.attempt(Me,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function J0(e,t,n){const r=this;return ie(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function Q0(e){e.exit(this.containerState.type)}function K0(e,t,n){const r=this;return ie(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!K(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const hd={name:"setextUnderline",resolveTo:X0,tokenize:Z0};function X0(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function Z0(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),K(u)?ie(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||W(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const eb={tokenize:tb};function tb(e){const t=this,n=e.attempt(cs,r,e.attempt(this.parser.constructs.flowInitial,i,ie(e,e.attempt(this.parser.constructs.flow,i,e.attempt(s0,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const nb={resolveAll:Gf()},rb=Vf("string"),ib=Vf("text");function Vf(e){return{resolveAll:Gf(e==="text"?ob:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(d){return u(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Gf(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function ob(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const sb={42:Me,43:Me,45:Me,48:Me,49:Me,50:Me,51:Me,52:Me,53:Me,54:Me,55:Me,56:Me,57:Me,62:zf},ab={91:d0},lb={[-2]:Ws,[-1]:Ws,32:Ws},ub={35:y0,42:uo,45:[hd,uo],60:k0,61:hd,95:uo,96:dd,126:dd},cb={38:Uf,92:Ff},db={[-5]:qs,[-4]:qs,[-3]:qs,33:F0,38:Uf,42:ol,60:[B1,C0],91:B0,92:[m0,Ff],93:yu,95:ol,96:e0},pb={null:[ol,nb]},hb={null:[42,95]},fb={null:[]},mb=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:hb,contentInitial:ab,disable:fb,document:sb,flow:ub,flowInitial:lb,insideSpan:pb,string:cb,text:db},Symbol.toStringTag,{value:"Module"}));function gb(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:C(N),check:C(b),consume:g,enter:x,exit:E,interrupt:C(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function p(M){return s=rt(s,M),T(),s[s.length-1]!==null?[]:(O(t,0),u.events=gu(o,u.events,u),u.events)}function f(M,U){return xb(h(M),U)}function h(M){return yb(s,M)}function y(){const{_bufferIndex:M,_index:U,line:Y,column:Z,offset:_}=r;return{_bufferIndex:M,_index:U,line:Y,column:Z,offset:_}}function v(M){i[M.line]=M.column,I()}function T(){let M;for(;r._index<s.length;){const U=s[r._index];if(typeof U=="string")for(M=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===M&&r._bufferIndex<U.length;)m(U.charCodeAt(r._bufferIndex));else m(U)}}function m(M){d=d(M)}function g(M){W(M)?(r.line++,r.column=1,r.offset+=M===-3?2:1,I()):M!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=M}function x(M,U){const Y=U||{};return Y.type=M,Y.start=y(),u.events.push(["enter",Y,u]),a.push(Y),Y}function E(M){const U=a.pop();return U.end=y(),u.events.push(["exit",U,u]),U}function N(M,U){O(M,U.from)}function b(M,U){U.restore()}function C(M,U){return Y;function Y(Z,_,q){let X,R,B,w;return Array.isArray(Z)?H(Z):"tokenize"in Z?H([Z]):F(Z);function F(se){return gt;function gt(Ut){const On=Ut!==null&&se[Ut],Rn=Ut!==null&&se.null,ji=[...Array.isArray(On)?On:On?[On]:[],...Array.isArray(Rn)?Rn:Rn?[Rn]:[]];return H(ji)(Ut)}}function H(se){return X=se,R=0,se.length===0?q:k(se[R])}function k(se){return gt;function gt(Ut){return w=D(),B=se,se.partial||(u.currentConstruct=se),se.name&&u.parser.constructs.disable.null.includes(se.name)?ke():se.tokenize.call(U?Object.assign(Object.create(u),U):u,l,oe,ke)(Ut)}}function oe(se){return M(B,w),_}function ke(se){return w.restore(),++R<X.length?k(X[R]):q}}}function O(M,U){M.resolveAll&&!o.includes(M)&&o.push(M),M.resolve&&Tt(u.events,U,u.events.length-U,M.resolve(u.events.slice(U),u)),M.resolveTo&&(u.events=M.resolveTo(u.events,u))}function D(){const M=y(),U=u.previous,Y=u.currentConstruct,Z=u.events.length,_=Array.from(a);return{from:Z,restore:q};function q(){r=M,u.previous=U,u.currentConstruct=Y,u.events.length=Z,a=_,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function yb(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function xb(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function wb(e){const r={constructs:N1([mb,...(e||{}).extensions||[]]),content:i(L1),defined:[],document:i(M1),flow:i(eb),lazy:{},string:i(rb),text:i(ib)};return r;function i(o){return s;function s(a){return gb(r,o,a)}}}function vb(e){for(;!Bf(e););return e}const fd=/[\0\t\n\r]/g;function kb(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const l=[];let u,d,p,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(fd.lastIndex=p,u=fd.exec(o),f=u&&u.index!==void 0?u.index:o.length,h=o.charCodeAt(f),!u){t=o.slice(p);break}if(h===10&&p===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),p<f&&(l.push(o.slice(p,f)),e+=f-p),h){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const bb=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Sb(e){return e.replace(bb,Eb)}function Eb(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Df(n.slice(o?2:1),o?16:10)}return mu(n)||e}const $f={}.hasOwnProperty;function Tb(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Nb(n)(vb(wb(n).document().write(kb()(e,t,!0))))}function Nb(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Nu),autolinkProtocol:D,autolinkEmail:D,atxHeading:o(Su),blockQuote:o(Rn),characterEscape:D,characterReference:D,codeFenced:o(ji),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ji,s),codeText:o(vm,s),codeTextData:D,data:D,codeFlowValue:D,definition:o(km),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(bm),hardBreakEscape:o(Eu),hardBreakTrailing:o(Eu),htmlFlow:o(Tu,s),htmlFlowData:D,htmlText:o(Tu,s),htmlTextData:D,image:o(Sm),label:s,link:o(Nu),listItem:o(Em),listItemValue:f,listOrdered:o(ju,p),listUnordered:o(ju),paragraph:o(Tm),reference:k,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Su),strong:o(Nm),thematicBreak:o(Cm)},exit:{atxHeading:l(),atxHeadingSequence:N,autolink:l(),autolinkEmail:On,autolinkProtocol:Ut,blockQuote:l(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:se,characterReference:gt,codeFenced:l(T),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:I,codeIndented:l(m),codeText:l(_),codeTextData:I,data:I,definition:l(),definitionDestinationString:E,definitionLabelString:g,definitionTitleString:x,emphasis:l(),hardBreakEscape:l(U),hardBreakTrailing:l(U),htmlFlow:l(Y),htmlFlowData:I,htmlText:l(Z),htmlTextData:I,image:l(X),label:B,labelText:R,lineEnding:M,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:oe,resourceDestinationString:w,resourceTitleString:F,resource:H,setextHeading:l(O),setextHeadingLineSequence:C,setextHeadingText:b,strong:l(),thematicBreak:l()}};Yf(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(j){let L={type:"root",children:[]};const V={stack:[L],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:d,data:n},J=[];let te=-1;for(;++te<j.length;)if(j[te][1].type==="listOrdered"||j[te][1].type==="listUnordered")if(j[te][0]==="enter")J.push(te);else{const lt=J.pop();te=i(j,lt,te)}for(te=-1;++te<j.length;){const lt=t[j[te][0]];$f.call(lt,j[te][1].type)&&lt[j[te][1].type].call(Object.assign({sliceSerialize:j[te][2].sliceSerialize},V),j[te][1])}if(V.tokenStack.length>0){const lt=V.tokenStack[V.tokenStack.length-1];(lt[1]||md).call(V,void 0,lt[0])}for(L.position={start:Ht(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Ht(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},te=-1;++te<t.transforms.length;)L=t.transforms[te](L)||L;return L}function i(j,L,V){let J=L-1,te=-1,lt=!1,mn,Nt,wr,vr;for(;++J<=V;){const qe=j[J];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?te++:te--,vr=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(mn&&!vr&&!te&&!wr&&(wr=J),vr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vr=void 0}if(!te&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||te===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(mn){let Ln=J;for(Nt=void 0;Ln--;){const jt=j[Ln];if(jt[1].type==="lineEnding"||jt[1].type==="lineEndingBlank"){if(jt[0]==="exit")continue;Nt&&(j[Nt][1].type="lineEndingBlank",lt=!0),jt[1].type="lineEnding",Nt=Ln}else if(!(jt[1].type==="linePrefix"||jt[1].type==="blockQuotePrefix"||jt[1].type==="blockQuotePrefixWhitespace"||jt[1].type==="blockQuoteMarker"||jt[1].type==="listItemIndent"))break}wr&&(!Nt||wr<Nt)&&(mn._spread=!0),mn.end=Object.assign({},Nt?j[Nt][1].start:qe[1].end),j.splice(Nt||J,0,["exit",mn,qe[2]]),J++,V++}if(qe[1].type==="listItemPrefix"){const Ln={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};mn=Ln,j.splice(J,0,["enter",Ln,qe[2]]),J++,V++,wr=void 0,vr=!0}}}return j[L][1]._spread=lt,V}function o(j,L){return V;function V(J){a.call(this,j(J),J),L&&L.call(this,J)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(j,L,V){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([L,V||void 0]),j.position={start:Ht(L.start),end:void 0}}function l(j){return L;function L(V){j&&j.call(this,V),u.call(this,V)}}function u(j,L){const V=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==j.type&&(L?L.call(this,j,J[0]):(J[1]||md).call(this,j,J[0]));else throw new Error("Cannot close `"+j.type+"` ("+Vr({start:j.start,end:j.end})+"): it’s not open");V.position.end=Ht(j.end)}function d(){return E1(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(j){if(this.data.expectingFirstListItemValue){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function h(){const j=this.resume(),L=this.stack[this.stack.length-1];L.lang=j}function y(){const j=this.resume(),L=this.stack[this.stack.length-1];L.meta=j}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const j=this.resume(),L=this.stack[this.stack.length-1];L.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const j=this.resume(),L=this.stack[this.stack.length-1];L.value=j.replace(/(\r?\n|\r)$/g,"")}function g(j){const L=this.resume(),V=this.stack[this.stack.length-1];V.label=L,V.identifier=ir(this.sliceSerialize(j)).toLowerCase()}function x(){const j=this.resume(),L=this.stack[this.stack.length-1];L.title=j}function E(){const j=this.resume(),L=this.stack[this.stack.length-1];L.url=j}function N(j){const L=this.stack[this.stack.length-1];if(!L.depth){const V=this.sliceSerialize(j).length;L.depth=V}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function C(j){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function O(){this.data.setextHeadingSlurpLineEnding=void 0}function D(j){const V=this.stack[this.stack.length-1].children;let J=V[V.length-1];(!J||J.type!=="text")&&(J=jm(),J.position={start:Ht(j.start),end:void 0},V.push(J)),this.stack.push(J)}function I(j){const L=this.stack.pop();L.value+=this.sliceSerialize(j),L.position.end=Ht(j.end)}function M(j){const L=this.stack[this.stack.length-1];if(this.data.atHardBreak){const V=L.children[L.children.length-1];V.position.end=Ht(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(L.type)&&(D.call(this,j),I.call(this,j))}function U(){this.data.atHardBreak=!0}function Y(){const j=this.resume(),L=this.stack[this.stack.length-1];L.value=j}function Z(){const j=this.resume(),L=this.stack[this.stack.length-1];L.value=j}function _(){const j=this.resume(),L=this.stack[this.stack.length-1];L.value=j}function q(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=L,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function X(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=L,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function R(j){const L=this.sliceSerialize(j),V=this.stack[this.stack.length-2];V.label=Sb(L),V.identifier=ir(L).toLowerCase()}function B(){const j=this.stack[this.stack.length-1],L=this.resume(),V=this.stack[this.stack.length-1];if(this.data.inReference=!0,V.type==="link"){const J=j.children;V.children=J}else V.alt=L}function w(){const j=this.resume(),L=this.stack[this.stack.length-1];L.url=j}function F(){const j=this.resume(),L=this.stack[this.stack.length-1];L.title=j}function H(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function oe(j){const L=this.resume(),V=this.stack[this.stack.length-1];V.label=L,V.identifier=ir(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function ke(j){this.data.characterReferenceType=j.type}function se(j){const L=this.sliceSerialize(j),V=this.data.characterReferenceType;let J;V?(J=Df(L,V==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=mu(L);const te=this.stack[this.stack.length-1];te.value+=J}function gt(j){const L=this.stack.pop();L.position.end=Ht(j.end)}function Ut(j){I.call(this,j);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(j)}function On(j){I.call(this,j);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(j)}function Rn(){return{type:"blockquote",children:[]}}function ji(){return{type:"code",lang:null,meta:null,value:""}}function vm(){return{type:"inlineCode",value:""}}function km(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bm(){return{type:"emphasis",children:[]}}function Su(){return{type:"heading",depth:0,children:[]}}function Eu(){return{type:"break"}}function Tu(){return{type:"html",value:""}}function Sm(){return{type:"image",title:null,url:"",alt:null}}function Nu(){return{type:"link",title:null,url:"",children:[]}}function ju(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function Em(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function Tm(){return{type:"paragraph",children:[]}}function Nm(){return{type:"strong",children:[]}}function jm(){return{type:"text",value:""}}function Cm(){return{type:"thematicBreak"}}}function Ht(e){return{line:e.line,column:e.column,offset:e.offset}}function Yf(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Yf(e,r):jb(e,r)}}function jb(e,t){let n;for(n in t)if($f.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function md(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Vr({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Vr({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Vr({start:t.start,end:t.end})+") is still open")}function Cb(e){const t=this;t.parser=n;function n(r){return Tb(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Ib(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Ab(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Pb(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Ob(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Rb(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lb(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=xr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function _b(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mb(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Jf(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function Db(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Jf(e,t);const i={src:xr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function zb(e,t){const n={src:xr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Fb(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ub(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Jf(e,t);const i={href:xr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Bb(e,t){const n={href:xr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Hb(e,t,n){const r=e.all(t),i=n?Wb(n):Qf(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function Wb(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Qf(n[r])}return t}function Qf(e){const t=e.spread;return t??e.children.length>1}function qb(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Vb(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gb(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function $b(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yb(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=du(t.children[1]),l=Af(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Jb(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const p=t.children[l],f={},h=s?s[l]:void 0;h&&(f.align=h);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function Qb(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const gd=9,yd=32;function Kb(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(xd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(xd(t.slice(i),i>0,!1)),o.join("")}function xd(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===gd||o===yd;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===gd||o===yd;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Xb(e,t){const n={type:"text",value:Kb(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Zb(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const eS={blockquote:Ib,break:Ab,code:Pb,delete:Ob,emphasis:Rb,footnoteReference:Lb,heading:_b,html:Mb,imageReference:Db,image:zb,inlineCode:Fb,linkReference:Ub,link:Bb,listItem:Hb,list:qb,paragraph:Vb,root:Gb,strong:$b,table:Yb,tableCell:Qb,tableRow:Jb,text:Xb,thematicBreak:Zb,toml:Gi,yaml:Gi,definition:Gi,footnoteDefinition:Gi};function Gi(){}const Kf=-1,ds=0,$r=1,Uo=2,xu=3,wu=4,vu=5,ku=6,Xf=7,Zf=8,tS=typeof self=="object"?self:globalThis,wd=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new tS[e](t)},nS=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case ds:case Kf:return n(s,i);case $r:{const a=n([],i);for(const l of s)a.push(r(l));return a}case Uo:{const a=n({},i);for(const[l,u]of s)a[r(l)]=r(u);return a}case xu:return n(new Date(s),i);case wu:{const{source:a,flags:l}=s;return n(new RegExp(a,l),i)}case vu:{const a=n(new Map,i);for(const[l,u]of s)a.set(r(l),r(u));return a}case ku:{const a=n(new Set,i);for(const l of s)a.add(r(l));return a}case Xf:{const{name:a,message:l}=s;return n(wd(a,l),i)}case Zf:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(wd(o,s),i)};return r},vd=e=>nS(new Map,e)(0),Mn="",{toString:rS}={},{keys:iS}=Object,Ar=e=>{const t=typeof e;if(t!=="object"||!e)return[ds,t];const n=rS.call(e).slice(8,-1);switch(n){case"Array":return[$r,Mn];case"Object":return[Uo,Mn];case"Date":return[xu,Mn];case"RegExp":return[wu,Mn];case"Map":return[vu,Mn];case"Set":return[ku,Mn];case"DataView":return[$r,n]}return n.includes("Array")?[$r,n]:n.includes("Error")?[Xf,n]:[Uo,n]},$i=([e,t])=>e===ds&&(t==="function"||t==="symbol"),oS=(e,t,n,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=Ar(s);switch(a){case ds:{let d=s;switch(l){case"bigint":a=Zf,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([Kf],s)}return i([a,d],s)}case $r:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),i([l,[...f]],s)}const d=[],p=i([a,d],s);for(const f of s)d.push(o(f));return p}case Uo:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],p=i([a,d],s);for(const f of iS(s))(e||!$i(Ar(s[f])))&&d.push([o(f),o(s[f])]);return p}case xu:return i([a,s.toISOString()],s);case wu:{const{source:d,flags:p}=s;return i([a,{source:d,flags:p}],s)}case vu:{const d=[],p=i([a,d],s);for(const[f,h]of s)(e||!($i(Ar(f))||$i(Ar(h))))&&d.push([o(f),o(h)]);return p}case ku:{const d=[],p=i([a,d],s);for(const f of s)(e||!$i(Ar(f)))&&d.push(o(f));return p}}const{message:u}=s;return i([a,{name:l,message:u}],s)};return o},kd=(e,{json:t,lossy:n}={})=>{const r=[];return oS(!(t||n),!!t,new Map,r)(e),r},Bo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vd(kd(e,t)):structuredClone(e):(e,t)=>vd(kd(e,t));function sS(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function aS(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function lS(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||sS,r=e.options.footnoteBackLabel||aS,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=xr(p.toLowerCase());let h=0;const y=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++h<=v;){y.length>0&&y.push({type:"text",value:" "});let g=typeof n=="string"?n:n(l,h);typeof g=="string"&&(g={type:"text",value:g}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const T=d[d.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const g=T.children[T.children.length-1];g&&g.type==="text"?g.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...y)}else d.push(...y);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Bo(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const em=function(e){if(e==null)return pS;if(typeof e=="function")return ps(e);if(typeof e=="object")return Array.isArray(e)?uS(e):cS(e);if(typeof e=="string")return dS(e);throw new Error("Expected function, string, or object as test")};function uS(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=em(e[n]);return ps(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function cS(e){const t=e;return ps(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function dS(e){return ps(t);function t(n){return n&&n.type===e}}function ps(e){return t;function t(n,r,i){return!!(hS(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function pS(){return!0}function hS(e){return e!==null&&typeof e=="object"&&"type"in e}const tm=[],fS=!0,bd=!1,mS="skip";function gS(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=em(i),s=r?-1:1;a(e,void 0,[])();function a(l,u,d){const p=l&&typeof l=="object"?l:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=tm,y,v,T;if((!t||o(l,u,d[d.length-1]||void 0))&&(h=yS(n(l,d)),h[0]===bd))return h;if("children"in l&&l.children){const m=l;if(m.children&&h[0]!==mS)for(v=(r?m.children.length:-1)+s,T=d.concat(m);v>-1&&v<m.children.length;){const g=m.children[v];if(y=a(g,v,T)(),y[0]===bd)return y;v=typeof y[1]=="number"?y[1]:v+s}}return h}}}function yS(e){return Array.isArray(e)?e:typeof e=="number"?[fS,e]:e==null?tm:[e]}function nm(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),gS(e,o,a,i);function a(l,u){const d=u[u.length-1],p=d?d.children.indexOf(l):void 0;return s(l,p,d)}}const sl={}.hasOwnProperty,xS={};function wS(e,t){const n=t||xS,r=new Map,i=new Map,o=new Map,s={...eS,...n.handlers},a={all:u,applyData:kS,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:vS,wrap:SS};return nm(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),a;function l(d,p){const f=d.type,h=a.handlers[f];if(sl.call(a.handlers,f)&&h)return h(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:v,...T}=d,m=Bo(T);return m.children=a.all(d),m}return Bo(d)}return(a.options.unknownHandler||bS)(a,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const y=a.one(f[h],d);if(y){if(h&&f[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Sd(y.value)),!Array.isArray(y)&&y.type==="element")){const v=y.children[0];v&&v.type==="text"&&(v.value=Sd(v.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function vS(e,t){e.position&&(t.position=n1(e))}function kS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,Bo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function bS(e,t){const n=t.data||{},r="value"in t&&!(sl.call(n,"hProperties")||sl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function SS(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Sd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ed(e,t){const n=wS(e,t),r=n.one(e,void 0),i=lS(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function ES(e,t){return e&&"run"in e?async function(n,r){const i=Ed(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ed(n,{file:r,...e||t})}}function Td(e){if(e)throw e}var co=Object.prototype.hasOwnProperty,rm=Object.prototype.toString,Nd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Cd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):rm.call(t)==="[object Array]"},Id=function(t){if(!t||rm.call(t)!=="[object Object]")return!1;var n=co.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&co.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||co.call(t,i)},Ad=function(t,n){Nd&&n.name==="__proto__"?Nd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Pd=function(t,n){if(n==="__proto__")if(co.call(t,n)){if(jd)return jd(t,n).value}else return;return t[n]},TS=function e(){var t,n,r,i,o,s,a=arguments[0],l=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Pd(a,n),i=Pd(t,n),a!==i&&(d&&i&&(Id(i)||(o=Cd(i)))?(o?(o=!1,s=r&&Cd(r)?r:[]):s=r&&Id(r)?r:{},Ad(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&Ad(a,{name:n,newValue:i}));return a};const Vs=cl(TS);function al(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function NS(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...u){const d=e[++o];let p=-1;if(l){s(l);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?jS(d,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function jS(e,t){let n;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const vt={basename:CS,dirname:IS,extname:AS,join:PS,sep:"/"};function CS(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ti(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function IS(e){if(Ti(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function AS(e){Ti(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function PS(...e){let t=-1,n;for(;++t<e.length;)Ti(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":OS(n)}function OS(e){Ti(e);const t=e.codePointAt(0)===47;let n=RS(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function RS(e,t){let n="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function Ti(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const LS={cwd:_S};function _S(){return"/"}function ll(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function MS(e){if(typeof e=="string")e=new URL(e);else if(!ll(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return DS(e)}function DS(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Gs=["history","path","basename","stem","extname","dirname"];class im{constructor(t){let n;t?ll(t)?n={path:t}:typeof t=="string"||zS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":LS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Gs.length;){const o=Gs[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Gs.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?vt.basename(this.path):void 0}set basename(t){Ys(t,"basename"),$s(t,"basename"),this.path=vt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?vt.dirname(this.path):void 0}set dirname(t){Od(this.basename,"dirname"),this.path=vt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?vt.extname(this.path):void 0}set extname(t){if($s(t,"extname"),Od(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=vt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ll(t)&&(t=MS(t)),Ys(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?vt.basename(this.path,this.extname):void 0}set stem(t){Ys(t,"stem"),$s(t,"stem"),this.path=vt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Pe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function $s(e,t){if(e&&e.includes(vt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+vt.sep+"`")}function Ys(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Od(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function zS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const FS=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},US={}.hasOwnProperty;class bu extends FS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=NS()}copy(){const t=new bu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Vs(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ks("data",this.frozen),this.namespace[t]=n,this):US.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ks("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Yi(t),r=this.parser||this.Parser;return Js("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Js("process",this.parser||this.Parser),Qs("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=Yi(t),l=r.parse(a);r.run(l,a,function(d,p,f){if(d||!p||!f)return u(d);const h=p,y=r.stringify(h,f);WS(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?s(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Js("processSync",this.parser||this.Parser),Qs("processSync",this.compiler||this.Compiler),this.process(t,i),Ld("processSync","process",n),r;function i(o,s){n=!0,Td(o),r=s}}run(t,n,r){Rd(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=Yi(n);i.run(t,l,u);function u(d,p,f){const h=p||t;d?a(d):s?s(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Ld("runSync","run",r),i;function o(s,a){Td(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=Yi(n),i=this.compiler||this.Compiler;return Qs("stringify",i),Rd(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ks("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;l(d,p)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Vs(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...y]=d;const v=r[f][1];al(v)&&al(h)&&(h=Vs(!0,v,h)),r[f]=[u,h,...y]}}}}const BS=new bu().freeze();function Js(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Qs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ks(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rd(e){if(!al(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ld(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Yi(e){return HS(e)?e:new im(e)}function HS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function WS(e){return typeof e=="string"||qS(e)}function qS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const VS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",_d=[],Md={allowDangerousHtml:!0},GS=/^(https?|ircs?|mailto|xmpp)$/i,$S=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function om(e){const t=YS(e),n=JS(e);return QS(t.runSync(t.parse(n),n),e)}function YS(e){const t=e.rehypePlugins||_d,n=e.remarkPlugins||_d,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Md}:Md;return BS().use(Cb).use(n).use(ES,r).use(t)}function JS(e){const t=e.children||"",n=new im;return typeof t=="string"&&(n.value=t),n}function QS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||KS;for(const d of $S)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+VS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),nm(e,u),a1(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in Hs)if(Object.hasOwn(Hs,h)&&Object.hasOwn(d.properties,h)){const y=d.properties[h],v=Hs[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=l(String(y||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return a&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function KS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||GS.test(e.slice(0,t))?e:""}const ul=[{id:"natural-en-uk",label:"Natural — UK",description:"Calm British narrator, default for lessons.",preferredVoiceNames:["Microsoft Libby Online (Natural) - English (United Kingdom)","Microsoft Sonia Online (Natural) - English (United Kingdom)","Microsoft Ryan Online (Natural) - English (United Kingdom)","Google UK English Female","Google UK English Male","Daniel","Kate"],rate:1,pitch:1,lang:"en-GB"},{id:"natural-en-us",label:"Natural — US",description:"Clear American narrator, good for code-heavy explainers.",preferredVoiceNames:["Microsoft Ava Online (Natural) - English (United States)","Microsoft Andrew Online (Natural) - English (United States)","Microsoft Jenny Online (Natural) - English (United States)","Microsoft Aria Online (Natural) - English (United States)","Google US English","Samantha","Alex"],rate:1,pitch:1,lang:"en-US"},{id:"crisp-en-us",label:"Crisp — US",description:"Slightly faster cadence for review sessions.",preferredVoiceNames:["Microsoft Aria Online (Natural) - English (United States)","Microsoft Jenny Online (Natural) - English (United States)","Google US English","Samantha"],rate:1.12,pitch:1,lang:"en-US"},{id:"warm-en-uk",label:"Warm — UK",description:"Lower pitch, slower — good for dense theory blocks.",preferredVoiceNames:["Microsoft Ryan Online (Natural) - English (United Kingdom)","Microsoft Sonia Online (Natural) - English (United Kingdom)","Daniel","Google UK English Male"],rate:.92,pitch:.95,lang:"en-GB"},{id:"system-default",label:"System default",description:"Whatever your browser/OS picks first.",preferredVoiceNames:[],rate:1,pitch:1,lang:"en-US"}],sm="natural-en-uk";function XS(e){const t=e.name.toLowerCase();return t.includes("online")||t.includes("natural")||t.includes("google")}function ZS(e,t){if(t.length===0)return;for(const i of e.preferredVoiceNames){const o=t.find(s=>s.name===i);if(o)return o}const n=t.find(i=>i.lang===e.lang);if(n)return n;const r=t.find(i=>i.lang.startsWith(e.lang.split("-")[0]??"en"));return r||t[0]}function am(e={}){const t=typeof window<"u"&&"speechSynthesis"in window,[n,r]=S.useState("idle"),[i,o]=S.useState([]),s=S.useRef(""),a=S.useRef(null),l=S.useMemo(()=>{const T=e.presetId??sm;return ul.find(m=>m.id===T)??ul[0]},[e.presetId]);S.useEffect(()=>{if(!t)return;const T=window.speechSynthesis,m=()=>o(T.getVoices());return m(),T.addEventListener("voiceschanged",m),()=>T.removeEventListener("voiceschanged",m)},[t]);const u=S.useMemo(()=>i.length?ZS(l,i):void 0,[l,i]),d=S.useCallback(T=>{const m=new SpeechSynthesisUtterance(T);return m.rate=e.rate??l.rate,m.pitch=e.pitch??l.pitch,m.lang=l.lang,u&&(m.voice=u),m.onend=()=>r("idle"),m.onerror=()=>r("idle"),m},[e.pitch,e.rate,l.lang,l.pitch,l.rate,u]),p=S.useCallback(T=>{if(!t)return;const m=window.speechSynthesis;m.cancel(),s.current=T;const g=d(T);a.current=g,m.speak(g),r("playing")},[d,t]),f=S.useCallback(()=>{t&&window.speechSynthesis.speaking&&!window.speechSynthesis.paused&&(window.speechSynthesis.pause(),r("paused"))},[t]),h=S.useCallback(()=>{if(!t)return;const T=window.speechSynthesis;if(T.paused){T.resume(),r("playing");return}if(!T.speaking&&s.current){const m=d(s.current);a.current=m,T.speak(m),r("playing")}},[d,t]),y=S.useCallback(()=>{!t||!s.current||p(s.current)},[p,t]),v=S.useCallback(()=>{t&&(window.speechSynthesis.cancel(),r("idle"))},[t]);return S.useEffect(()=>()=>{t&&window.speechSynthesis.cancel()},[t]),{status:n,voices:i,preset:l,selectedVoice:u,play:p,pause:f,resume:h,restart:y,stop:v,supported:t}}function eE({text:e,compact:t=!1}){const{progress:n}=et(),{status:r,play:i,pause:o,resume:s,restart:a,stop:l,supported:u,selectedVoice:d,preset:p}=am({presetId:n.settings.voicePresetId,rate:n.settings.rate,pitch:n.settings.pitch});if(!u)return c.jsx("div",{className:"text-xs text-ink-300",children:"Speech synthesis unavailable in this browser."});const f=r==="playing",h=r==="paused";return c.jsxs("div",{className:`flex items-center gap-2 ${t?"":"rounded-lg border border-ink-700 bg-ink-800/60 px-3 py-2"}`,children:[!f&&!h&&c.jsxs("button",{type:"button",onClick:()=>i(e),className:"btn-primary",children:[c.jsx(Dd,{})," Listen"]}),f&&c.jsxs("button",{type:"button",onClick:o,className:"btn-ghost",children:[c.jsx(tE,{})," Pause"]}),h&&c.jsxs("button",{type:"button",onClick:s,className:"btn-primary",children:[c.jsx(Dd,{})," Resume"]}),(f||h)&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:a,className:"btn-ghost min-w-[40px] px-2",title:"Restart","aria-label":"Restart",children:c.jsx(rE,{})}),c.jsx("button",{type:"button",onClick:l,className:"btn-danger min-w-[40px] px-2",title:"Stop","aria-label":"Stop",children:c.jsx(nE,{})})]}),!t&&c.jsx("span",{className:"ml-2 text-xs text-ink-300 truncate",children:d?d.name:p.label})]})}function Dd(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M8 5v14l11-7z"})})}function tE(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M6 5h4v14H6zM14 5h4v14h-4z"})})}function nE(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M6 6h12v12H6z"})})}function rE(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"})})}function iE({markdown:e,listen:t=!0}){return c.jsxs("section",{className:"space-y-3",children:[t&&c.jsx("div",{className:"flex justify-end",children:c.jsx(eE,{text:oE(e),compact:!0})}),c.jsx("div",{className:"prose-block",children:c.jsx(om,{components:{h1:n=>c.jsx("h1",{className:"text-2xl font-semibold text-ink-100 mt-4 mb-2",...n}),h2:n=>c.jsx("h2",{className:"text-xl font-semibold text-ink-100 mt-4 mb-2",...n}),h3:n=>c.jsx("h3",{className:"text-lg font-semibold text-ink-100 mt-3 mb-1",...n}),p:n=>c.jsx("p",{className:"text-ink-200 leading-relaxed mb-3",...n}),a:n=>c.jsx("a",{className:"text-accent-strong hover:underline",target:"_blank",rel:"noreferrer",...n}),ul:n=>c.jsx("ul",{className:"list-disc pl-5 space-y-1 text-ink-200 mb-3",...n}),ol:n=>c.jsx("ol",{className:"list-decimal pl-5 space-y-1 text-ink-200 mb-3",...n}),li:n=>c.jsx("li",{className:"leading-relaxed",...n}),code:({className:n,children:r,...i})=>(n??"").startsWith("language-")?c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 mb-3",children:c.jsx("code",{className:n,...i,children:r})}):c.jsx("code",{className:"bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft",...i,children:r}),blockquote:n=>c.jsx("blockquote",{className:"border-l-2 border-accent-strong pl-3 text-ink-300 italic mb-3",...n}),strong:n=>c.jsx("strong",{className:"text-ink-100 font-semibold",...n})},children:e})})]})}function oE(e){return e.replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/[#>*_~\-]+/g," ").replace(/\s+/g," ").trim()}function sE({id:e,label:t,command:n,expectedOutput:r}){const{progress:i,markBlockComplete:o,update:s}=et(),[a,l]=S.useState(!1),[u,d]=S.useState(!1),p=!!i.blocksCompleted[e];S.useEffect(()=>{if(!a)return;const y=window.setTimeout(()=>l(!1),1500);return()=>window.clearTimeout(y)},[a]);const f=async()=>{try{await navigator.clipboard.writeText(n),l(!0)}catch{l(!1)}},h=()=>{p?s(y=>{const v={...y.blocksCompleted};return delete v[e],{...y,blocksCompleted:v}}):o(e)};return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Command"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:t})]}),c.jsxs("label",{className:"flex items-center gap-2 text-xs text-ink-300 cursor-pointer",children:[c.jsx("input",{type:"checkbox",className:"accent-accent-strong",checked:p,onChange:h}),"I ran this"]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-stretch gap-2",children:[c.jsx("pre",{className:"flex-1 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-sm text-ink-100 overflow-x-auto min-w-0",children:c.jsx("code",{children:n})}),c.jsx("button",{type:"button",onClick:f,className:"btn-ghost shrink-0 w-full sm:w-auto","aria-label":"Copy command",children:a?"Copied!":"Copy"})]}),r!==void 0&&c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"text-xs text-ink-300 hover:text-ink-100",onClick:()=>d(y=>!y),children:[u?"− Hide":"+ Show"," what you should see"]}),u&&c.jsx("pre",{className:"mt-2 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-xs text-ink-200 whitespace-pre-wrap",children:r})]})]})}function zd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function aE(e){if(Array.isArray(e))return e}function lE(e,t,n){return(t=mE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return a}}function cE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ud(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fd(Object(n),!0).forEach(function(r){lE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dE(e,t){if(e==null)return{};var n,r,i=pE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function hE(e,t){return aE(e)||uE(e,t)||gE(e,t)||cE()}function fE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mE(e){var t=fE(e,"string");return typeof t=="symbol"?t:t+""}function gE(e,t){if(e){if(typeof e=="string")return zd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zd(e,t):void 0}}function yE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bd(Object(n),!0).forEach(function(r){yE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xE(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function _r(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(i,a))}}}function Ho(e){return{}.toString.call(e).includes("Object")}function wE(e){return!Object.keys(e).length}function mi(e){return typeof e=="function"}function vE(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function kE(e,t){return Ho(t)||an("changeType"),Object.keys(t).some(function(n){return!vE(e,n)})&&an("changeField"),t}function bE(e){mi(e)||an("selectorType")}function SE(e){mi(e)||Ho(e)||an("handlerType"),Ho(e)&&Object.values(e).some(function(t){return!mi(t)})&&an("handlersType")}function EE(e){e||an("initialIsRequired"),Ho(e)||an("initialType"),wE(e)&&an("initialContent")}function TE(e,t){throw new Error(e[t]||e.default)}var NE={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},an=_r(TE)(NE),Ji={changes:kE,selector:bE,handler:SE,initial:EE};function jE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ji.initial(e),Ji.handler(t);var n={current:e},r=_r(AE)(n,t),i=_r(IE)(n),o=_r(Ji.changes)(e),s=_r(CE)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ji.selector(u),u(n.current)}function l(u){xE(r,i,o,s)(u)}return[a,l]}function CE(e,t){return mi(t)?t(e.current):t}function IE(e,t){return e.current=Hd(Hd({},e.current),t),t}function AE(e,t,n){return mi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var PE={create:jE},OE={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function RE(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(i,a))}}}function LE(e){return{}.toString.call(e).includes("Object")}function _E(e){return e||Wd("configIsRequired"),LE(e)||Wd("configType"),e.urls?(ME(),{paths:{vs:e.urls.monacoBase}}):e}function ME(){console.warn(lm.deprecation)}function DE(e,t){throw new Error(e[t]||e.default)}var lm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Wd=RE(DE)(lm),zE={config:_E},FE=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,s){return s(o)},i)}};function um(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],um(e[n],t[n]))}),Ud(Ud({},e),t)}var UE={type:"cancelation",msg:"operation is manually canceled"};function Xs(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(UE):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var BE=["monaco"],HE=PE.create({config:OE,isInitialized:!1,resolve:null,reject:null,monaco:null}),cm=hE(HE,2),Ni=cm[0],hs=cm[1];function WE(e){var t=zE.config(e),n=t.monaco,r=dE(t,BE);hs(function(i){return{config:um(i.config,r),monaco:n}})}function qE(){var e=Ni(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(hs({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Xs(Zs);if(window.monaco&&window.monaco.editor)return dm(window.monaco),e.resolve(window.monaco),Xs(Zs);FE(VE,$E)(YE)}return Xs(Zs)}function VE(e){return document.body.appendChild(e)}function GE(e){var t=document.createElement("script");return e&&(t.src=e),t}function $E(e){var t=Ni(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=GE("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function YE(){var e=Ni(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;dm(r),e.resolve(r)},function(n){e.reject(n)})}function dm(e){Ni().monaco||hs({monaco:e})}function JE(){return Ni(function(e){var t=e.monaco;return t})}var Zs=new Promise(function(e,t){return hs({resolve:e,reject:t})}),pm={config:WE,init:qE,__getMonacoInstance:JE},QE={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ea=QE,KE={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},XE=KE;function ZE({children:e}){return Qt.createElement("div",{style:XE.container},e)}var eT=ZE,tT=eT;function nT({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:s}){return Qt.createElement("section",{style:{...ea.wrapper,width:e,height:t},...s},!n&&Qt.createElement(tT,null,r),Qt.createElement("div",{ref:i,style:{...ea.fullWidth,...!n&&ea.hide},className:o}))}var rT=nT,hm=S.memo(rT);function iT(e){S.useEffect(e,[])}var fm=iT;function oT(e,t,n=!0){let r=S.useRef(!0);S.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var $e=oT;function Yr(){}function Qn(e,t,n,r){return sT(e,r)||aT(e,t,n,r)}function sT(e,t){return e.editor.getModel(mm(e,t))}function aT(e,t,n,r){return e.editor.createModel(t,n,r?mm(e,r):void 0)}function mm(e,t){return e.Uri.parse(t)}function lT({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:s,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:y,wrapperProps:v={},beforeMount:T=Yr,onMount:m=Yr}){let[g,x]=S.useState(!1),[E,N]=S.useState(!0),b=S.useRef(null),C=S.useRef(null),O=S.useRef(null),D=S.useRef(m),I=S.useRef(T),M=S.useRef(!1);fm(()=>{let _=pm.init();return _.then(q=>(C.current=q)&&N(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>b.current?Z():_.cancel()}),$e(()=>{if(b.current&&C.current){let _=b.current.getOriginalEditor(),q=Qn(C.current,e||"",r||n||"text",o||"");q!==_.getModel()&&_.setModel(q)}},[o],g),$e(()=>{if(b.current&&C.current){let _=b.current.getModifiedEditor(),q=Qn(C.current,t||"",i||n||"text",s||"");q!==_.getModel()&&_.setModel(q)}},[s],g),$e(()=>{let _=b.current.getModifiedEditor();_.getOption(C.current.editor.EditorOption.readOnly)?_.setValue(t||""):t!==_.getValue()&&(_.executeEdits("",[{range:_.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),_.pushUndoStop())},[t],g),$e(()=>{var _,q;(q=(_=b.current)==null?void 0:_.getModel())==null||q.original.setValue(e||"")},[e],g),$e(()=>{let{original:_,modified:q}=b.current.getModel();C.current.editor.setModelLanguage(_,r||n||"text"),C.current.editor.setModelLanguage(q,i||n||"text")},[n,r,i],g),$e(()=>{var _;(_=C.current)==null||_.editor.setTheme(u)},[u],g),$e(()=>{var _;(_=b.current)==null||_.updateOptions(p)},[p],g);let U=S.useCallback(()=>{var X;if(!C.current)return;I.current(C.current);let _=Qn(C.current,e||"",r||n||"text",o||""),q=Qn(C.current,t||"",i||n||"text",s||"");(X=b.current)==null||X.setModel({original:_,modified:q})},[n,t,i,e,r,o,s]),Y=S.useCallback(()=>{var _;!M.current&&O.current&&(b.current=C.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...p}),U(),(_=C.current)==null||_.editor.setTheme(u),x(!0),M.current=!0)},[p,u,U]);S.useEffect(()=>{g&&D.current(b.current,C.current)},[g]),S.useEffect(()=>{!E&&!g&&Y()},[E,g,Y]);function Z(){var q,X,R,B;let _=(q=b.current)==null?void 0:q.getModel();a||((X=_==null?void 0:_.original)==null||X.dispose()),l||((R=_==null?void 0:_.modified)==null||R.dispose()),(B=b.current)==null||B.dispose()}return Qt.createElement(hm,{width:h,height:f,isEditorReady:g,loading:d,_ref:O,className:y,wrapperProps:v})}var uT=lT;S.memo(uT);function cT(e){let t=S.useRef();return S.useEffect(()=>{t.current=e},[e]),t.current}var dT=cT,Qi=new Map;function pT({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:s="light",line:a,loading:l="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:y="100%",className:v,wrapperProps:T={},beforeMount:m=Yr,onMount:g=Yr,onChange:x,onValidate:E=Yr}){let[N,b]=S.useState(!1),[C,O]=S.useState(!0),D=S.useRef(null),I=S.useRef(null),M=S.useRef(null),U=S.useRef(g),Y=S.useRef(m),Z=S.useRef(),_=S.useRef(r),q=dT(o),X=S.useRef(!1),R=S.useRef(!1);fm(()=>{let F=pm.init();return F.then(H=>(D.current=H)&&O(!1)).catch(H=>(H==null?void 0:H.type)!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>I.current?w():F.cancel()}),$e(()=>{var H,k,oe,ke;let F=Qn(D.current,e||r||"",t||i||"",o||n||"");F!==((H=I.current)==null?void 0:H.getModel())&&(p&&Qi.set(q,(k=I.current)==null?void 0:k.saveViewState()),(oe=I.current)==null||oe.setModel(F),p&&((ke=I.current)==null||ke.restoreViewState(Qi.get(o))))},[o],N),$e(()=>{var F;(F=I.current)==null||F.updateOptions(u)},[u],N),$e(()=>{!I.current||r===void 0||(I.current.getOption(D.current.editor.EditorOption.readOnly)?I.current.setValue(r):r!==I.current.getValue()&&(R.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),I.current.pushUndoStop(),R.current=!1))},[r],N),$e(()=>{var H,k;let F=(H=I.current)==null?void 0:H.getModel();F&&i&&((k=D.current)==null||k.editor.setModelLanguage(F,i))},[i],N),$e(()=>{var F;a!==void 0&&((F=I.current)==null||F.revealLine(a))},[a],N),$e(()=>{var F;(F=D.current)==null||F.editor.setTheme(s)},[s],N);let B=S.useCallback(()=>{var F;if(!(!M.current||!D.current)&&!X.current){Y.current(D.current);let H=o||n,k=Qn(D.current,r||e||"",t||i||"",H||"");I.current=(F=D.current)==null?void 0:F.editor.create(M.current,{model:k,automaticLayout:!0,...u},d),p&&I.current.restoreViewState(Qi.get(H)),D.current.editor.setTheme(s),a!==void 0&&I.current.revealLine(a),b(!0),X.current=!0}},[e,t,n,r,i,o,u,d,p,s,a]);S.useEffect(()=>{N&&U.current(I.current,D.current)},[N]),S.useEffect(()=>{!C&&!N&&B()},[C,N,B]),_.current=r,S.useEffect(()=>{var F,H;N&&x&&((F=Z.current)==null||F.dispose(),Z.current=(H=I.current)==null?void 0:H.onDidChangeModelContent(k=>{R.current||x(I.current.getValue(),k)}))},[N,x]),S.useEffect(()=>{if(N){let F=D.current.editor.onDidChangeMarkers(H=>{var oe;let k=(oe=I.current.getModel())==null?void 0:oe.uri;if(k&&H.find(ke=>ke.path===k.path)){let ke=D.current.editor.getModelMarkers({resource:k});E==null||E(ke)}});return()=>{F==null||F.dispose()}}return()=>{}},[N,E]);function w(){var F,H;(F=Z.current)==null||F.dispose(),f?p&&Qi.set(o,I.current.saveViewState()):(H=I.current.getModel())==null||H.dispose(),I.current.dispose()}return Qt.createElement(hm,{width:h,height:y,isEditorReady:N,loading:l,_ref:M,className:v,wrapperProps:T})}var hT=pT,fT=S.memo(hT),mT=fT;const gT={js:"javascript",ts:"typescript",html:"html",sql:"sql",bash:"shell"};function yT(e=640){const[t,n]=S.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return S.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia(`(max-width: ${e-1}px)`),i=o=>n(o.matches);return n(r.matches),r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[e]),t}function gi({value:e,language:t,onChange:n,onMount:r,readOnly:i=!1,height:o=200,ariaLabel:s}){const a=yT(),l=a?14:13;return c.jsx("div",{className:"rounded-lg overflow-hidden border border-ink-700 bg-[#1e1e1e]","aria-label":s,children:c.jsx(mT,{height:typeof o=="number"?`${o}px`:o,language:gT[t],value:e,theme:"vs-dark",onChange:n,onMount:r,loading:c.jsx("div",{className:"text-xs text-ink-400 p-4",children:"Loading editor…"}),options:{readOnly:i,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:l,lineNumbers:a?"off":"on",renderLineHighlight:"gutter",automaticLayout:!0,tabSize:2,padding:{top:10,bottom:10},fontFamily:"JetBrains Mono, Fira Code, Menlo, monospace",smoothScrolling:!0,cursorBlinking:"smooth",wordWrap:"on",overviewRulerLanes:a?0:3,scrollbar:a?{vertical:"auto",horizontal:"hidden",verticalScrollbarSize:6}:void 0,folding:!a,glyphMargin:!1}})})}const xT=.95;function wT(e,t){const n=Math.min(e.length,t.length);let r=0;for(;r<n&&e.charCodeAt(r)===t.charCodeAt(r);)r++;return r}function vT({id:e,language:t,code:n,instructions:r}){const{progress:i,markBlockComplete:o}=et(),[s,a]=S.useState(""),l=!!i.blocksCompleted[e],u=S.useMemo(()=>n.replace(/[ \t]+$/gm,"").replace(/\n+$/,`
`),[n]),d=S.useMemo(()=>s.replace(/[ \t]+$/gm,"").replace(/\n+$/,`
`),[s]),p=wT(d,u),f=u.length,h=f>0?p/f:1,y=d.length>p,v=d===u,T=h>=xT&&!y;(v||T)&&!l&&o(e);const m=()=>a("");return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Type along"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:r??"Retype the snippet below into the empty editor."})]}),l&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Done"})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Target"}),c.jsx(gi,{value:n,language:t,readOnly:!0,height:Math.min(280,60+n.split(`
`).length*18)})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Your turn"}),c.jsx(gi,{value:s,language:t,onChange:g=>a(g??""),height:Math.min(280,60+n.split(`
`).length*18),ariaLabel:"Type-along editor"})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs",children:[c.jsx("span",{className:y?"text-danger":"text-ink-300",children:y?"Mismatch — backspace and fix.":"Matching prefix"}),c.jsxs("span",{className:"text-ink-200",children:[p," / ",f]})]}),c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:`progress-fill ${y?"!bg-danger":""}`,style:{width:`${Math.min(100,Math.round(h*100))}%`}})})]}),c.jsx("div",{className:"flex justify-end",children:c.jsx("button",{type:"button",className:"btn-ghost",onClick:m,children:"Reset"})})]})}function kT({id:e,language:t,code:n,question:r,options:i,answerIndex:o,explanation:s}){const{progress:a,markBlockComplete:l}=et(),[u,d]=S.useState(null),[p,f]=S.useState(!1),h=!!a.blocksCompleted[e],y=()=>{u!=null&&(f(!0),u===o&&l(e))},v=()=>{d(null),f(!1)},T=p&&u===o;return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Read this"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:r})]}),h&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Done"})]}),c.jsx(gi,{value:n,language:t,readOnly:!0,height:Math.min(280,60+n.split(`
`).length*18)}),c.jsx("div",{className:"grid gap-2",children:i.map((m,g)=>{const x=u===g;let E="border-ink-600 bg-ink-800 hover:bg-ink-700";return p?g===o?E="border-accent bg-accent/10 text-ink-100":x?E="border-danger bg-danger/10 text-ink-100":E="border-ink-700 bg-ink-800 text-ink-300":x&&(E="border-accent bg-accent/10"),c.jsxs("label",{className:`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${E}`,children:[c.jsx("input",{type:"radio",className:"accent-accent-strong",name:`readthis-${e}`,checked:x,onChange:()=>!p&&d(g)}),c.jsx("span",{children:m})]},g)})}),p&&c.jsxs("div",{className:`text-sm ${T?"text-accent-strong":"text-danger"}`,children:[T?"Correct.":"Not quite.",s&&c.jsxs("span",{className:"text-ink-300",children:[" ",s]})]}),c.jsx("div",{className:"flex justify-end gap-2",children:p?c.jsx("button",{type:"button",className:"btn-ghost",onClick:v,children:"Try again"}):c.jsx("button",{type:"button",className:"btn-primary",onClick:y,disabled:u==null,children:"Submit"})})]})}function gm({output:e,expected:t,showDiff:n=!1,status:r="idle"}){const i=r==="passed",o=r==="failed";return c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[c.jsx("span",{className:"text-ink-400",children:"Output"}),r==="running"&&c.jsx("span",{className:"text-ink-200",children:"running…"}),i&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Passed"}),o&&c.jsx("span",{className:"chip bg-danger/15 text-danger border border-danger/30",children:"Failed"})]}),n&&t!==void 0?c.jsxs("div",{className:"grid sm:grid-cols-2 gap-2",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400 mb-1",children:"Your output"}),c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[6rem] overflow-x-auto",children:e||"(empty)"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400 mb-1",children:"Expected"}),c.jsx("pre",{className:"bg-ink-900 border border-accent/40 rounded-lg p-3 font-mono text-xs text-accent-soft whitespace-pre-wrap min-h-[6rem] overflow-x-auto",children:t})]})]}):c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[5rem] overflow-x-auto",children:e||"(no output yet — press Run)"})]})}const bT=3e3;function ST(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.nonce=="string"&&typeof t.kind=="string"&&typeof t.payload=="string"}function ym(e,t=bT){return new Promise(n=>{const r=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n-${Date.now()}-${Math.random().toString(36).slice(2)}`,i=performance.now();let o=[],s=!1,a=!1;const l=document.createElement("iframe");l.setAttribute("sandbox","allow-scripts"),l.setAttribute("aria-hidden","true"),l.style.position="fixed",l.style.left="-9999px",l.style.top="-9999px",l.style.width="1px",l.style.height="1px",l.style.opacity="0",l.style.pointerEvents="none";const u=h=>{a||(a=!0,window.removeEventListener("message",d),window.clearTimeout(p),l.parentNode&&l.parentNode.removeChild(l),n({output:o.join(`
`),timedOut:h,errored:s||h,durationMs:Math.round(performance.now()-i)}))},d=h=>{!ST(h.data)||h.data.nonce!==r||(h.data.kind==="log"?o.push(h.data.payload):h.data.kind==="error"?(o.push(`[error] ${h.data.payload}`),s=!0):h.data.kind==="done"&&u(!1))};window.addEventListener("message",d);const p=window.setTimeout(()=>{a||(o.push(`[timed out after ${t}ms]`),s=!0,u(!0))},t),f=`<!doctype html><html><body><script>
(function(){
  var nonce = ${JSON.stringify(r)};
  function send(kind, payload){
    try { parent.postMessage({ nonce: nonce, kind: kind, payload: String(payload) }, '*'); } catch (_) {}
  }
  function fmt(v){
    try {
      if (typeof v === 'string') return v;
      if (v instanceof Error) return v.stack || (v.name + ': ' + v.message);
      if (typeof v === 'function') return '[Function]';
      if (typeof v === 'undefined') return 'undefined';
      if (typeof v === 'object') return JSON.stringify(v);
      return String(v);
    } catch (_) { return String(v); }
  }
  ['log','info','warn','error','debug'].forEach(function(method){
    console[method] = function(){
      var parts = [];
      for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]));
      send('log', parts.join(' '));
    };
  });
  window.addEventListener('error', function(e){ send('error', e.message || String(e.error || e)); });
  window.addEventListener('unhandledrejection', function(e){ send('error', String(e.reason)); });
  try {
${e}
  } catch (e) {
    send('error', (e && (e.stack || e.message)) || String(e));
  } finally {
    send('done', '');
  }
})();
<\/script></body></html>`;l.srcdoc=f,document.body.appendChild(l)})}const qd=e=>e.replace(/\r\n/g,`
`).split(`
`).map(t=>t.replace(/\s+$/g,"")).join(`
`).replace(/\n+$/,"");function ET({id:e,spec:t,starterCode:n,expectedConsoleOutput:r,language:i="js"}){const{progress:o,markBlockComplete:s}=et(),[a,l]=S.useState(n),[u,d]=S.useState(""),[p,f]=S.useState("idle"),[h,y]=S.useState(0),v=!!o.blocksCompleted[e],T=async g=>{f("running");const x=await ym(a);if(d(x.output),g==="run"){f("ran");return}const E=h+1;y(E),qd(x.output)===qd(r)?(s(e,E),f("passed")):f("failed")},m=()=>{l(n),d(""),f("idle")};return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Code challenge"}),c.jsx("div",{className:"text-sm font-medium text-ink-100 whitespace-pre-wrap",children:t})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[h>0&&c.jsxs("span",{className:"text-[11px] text-ink-400",children:["attempts: ",h]}),v&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Passed"})]})]}),c.jsx(gi,{value:a,language:i==="ts"?"ts":"js",onChange:g=>l(g??""),height:Math.max(160,Math.min(360,60+n.split(`
`).length*18)),ariaLabel:"Code challenge editor"}),c.jsxs("div",{className:"flex items-center justify-end gap-2 flex-wrap",children:[c.jsx("button",{type:"button",className:"btn-ghost",onClick:m,disabled:p==="running",children:"Reset"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>T("run"),disabled:p==="running",children:"Run"}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>T("submit"),disabled:p==="running",children:"Submit"})]}),c.jsx(gm,{output:u,expected:r,showDiff:p==="failed",status:p})]})}const TT=2,Vd=e=>e.replace(/\r\n/g,`
`).split(`
`).map(t=>t.replace(/\s+$/g,"")).join(`
`).replace(/\n+$/,"");function xm({id:e,brokenCode:t,errorMessage:n,expectedConsoleOutput:r,hint:i,language:o="js",persistAs:s="block",title:a}){const{progress:l,markBlockComplete:u,markGauntletSolved:d}=et(),[p,f]=S.useState(t),[h,y]=S.useState(""),[v,T]=S.useState("idle"),[m,g]=S.useState(0),[x,E]=S.useState(!1),N=s==="gauntlet"?!!l.gauntletSolved[e]:!!l.blocksCompleted[e],b=async D=>{T("running");const I=await ym(p);if(y(I.output),D==="run"){T("ran");return}const M=m+1;g(M),Vd(I.output)===Vd(r)?(s==="gauntlet"?d(e,M):u(e,M),T("passed")):T("failed")},C=()=>{f(t),y(""),T("idle"),E(!1)},O=m>=TT&&!!i;return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:s==="gauntlet"?"Gauntlet snippet":"Debug this"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:a??"Fix the code so it produces the expected output."})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[m>0&&c.jsxs("span",{className:"text-[11px] text-ink-400",children:["attempts: ",m]}),N&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:s==="gauntlet"?"Solved":"Fixed"})]})]}),c.jsxs("div",{className:"rounded-lg border border-danger/30 bg-danger/10 p-3",children:[c.jsx("div",{className:"text-[11px] uppercase tracking-wide text-danger",children:"Error"}),c.jsx("pre",{className:"mt-1 text-xs font-mono text-ink-100 whitespace-pre-wrap",children:n})]}),c.jsx(gi,{value:p,language:o==="ts"?"ts":"js",onChange:D=>f(D??""),height:Math.max(160,Math.min(360,60+t.split(`
`).length*18)),ariaLabel:"Debug editor"}),c.jsxs("div",{className:"flex items-center justify-end gap-2 flex-wrap",children:[O&&!x&&c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>E(!0),children:"Hint"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:C,disabled:v==="running",children:"Reset"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>b("run"),disabled:v==="running",children:"Run"}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>b("submit"),disabled:v==="running",children:"Submit fix"})]}),x&&i&&c.jsxs("div",{className:"rounded-lg border border-warn/30 bg-warn/10 p-3 text-sm text-ink-100",children:[c.jsx("span",{className:"text-warn font-medium",children:"Hint: "}),i]}),c.jsx(gm,{output:h,expected:r,showDiff:v==="failed",status:v})]})}function NT({block:e}){switch(e.type){case"explain":return c.jsx(iE,{markdown:e.markdown,listen:e.listen??!0});case"command":return c.jsx(sE,{id:e.id,label:e.label,command:e.command,expectedOutput:e.expectedOutput});case"typealong":return c.jsx(vT,{id:e.id,language:e.language,code:e.code,instructions:e.instructions});case"readthis":return c.jsx(kT,{id:e.id,language:e.language,code:e.code,question:e.question,options:e.options,answerIndex:e.answerIndex,explanation:e.explanation});case"codechallenge":return c.jsx(ET,{id:e.id,spec:e.spec,starterCode:e.starterCode,expectedConsoleOutput:e.expectedConsoleOutput,language:e.language??"js"});case"debugthis":return c.jsx(xm,{id:e.id,brokenCode:e.brokenCode,errorMessage:e.errorMessage,expectedConsoleOutput:e.expectedConsoleOutput,hint:e.hint,language:e.language??"js"})}}function jT({quizId:e,questions:t,onComplete:n}){const{recordQuiz:r}=et(),[i,o]=S.useState({}),[s,a]=S.useState(!1),l=S.useMemo(()=>t.reduce((h,y)=>h+(i[y.id]===y.answerIndex?1:0),0),[i,t]),u=t.length,d=t.every(h=>typeof i[h.id]=="number"),p=()=>{a(!0),r(e,l,u),n==null||n(l,u)},f=()=>{o({}),a(!1)};return c.jsxs("div",{className:"card p-5 space-y-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h3",{className:"text-lg font-semibold text-ink-100",children:"Quiz"}),s&&c.jsxs("span",{className:"chip bg-accent/20 text-accent-strong",children:[l," / ",u]})]}),c.jsx("ol",{className:"space-y-5 list-decimal pl-5",children:t.map(h=>{const y=i[h.id],v=y===h.answerIndex;return c.jsxs("li",{className:"space-y-2",children:[c.jsx("div",{className:"text-sm text-ink-100",children:h.prompt}),c.jsx("div",{className:"grid gap-2",children:h.options.map((T,m)=>{const g=y===m;let x="border-ink-600 bg-ink-800 hover:bg-ink-700";return s?m===h.answerIndex?x="border-accent bg-accent/10 text-ink-100":g?x="border-danger bg-danger/10 text-ink-100":x="border-ink-700 bg-ink-800 text-ink-300":g&&(x="border-accent bg-accent/10"),c.jsxs("label",{className:`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${x}`,children:[c.jsx("input",{type:"radio",className:"accent-accent-strong",name:h.id,checked:g,onChange:()=>!s&&o(E=>({...E,[h.id]:m}))}),c.jsx("span",{children:T})]},m)})}),s&&h.explanation&&c.jsx("div",{className:`text-xs ${v?"text-accent-strong":"text-ink-300"}`,children:h.explanation})]},h.id)})}),c.jsx("div",{className:"flex items-center justify-end gap-2",children:s?c.jsx("button",{type:"button",className:"btn-ghost",onClick:f,children:"Retake"}):c.jsx("button",{type:"button",className:"btn-primary",onClick:p,disabled:!d,children:"Submit"})})]})}function CT(){const{lessonId:e}=as(),t=e?xf(e):void 0,{progress:n,markLessonComplete:r,setSettings:i}=et();if(S.useEffect(()=>{t&&i({lastLessonId:t.id})},[t,i]),!t)return c.jsxs("div",{className:"space-y-4",children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Lesson not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No lesson with id ",c.jsx("code",{children:e}),". Try"," ",c.jsx(de,{to:"/lesson/test-blocks",className:"text-accent-strong hover:underline",children:"/lesson/test-blocks"})," ","to see all six block types."]})]})]});const o=!!n.lessonsCompleted[t.id],s=t.blocks.filter(u=>u.type!=="explain"&&n.blocksCompleted[u.id]).length,a=t.blocks.filter(u=>u.type!=="explain").length,l=a===0?0:Math.round(s/a*100);return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2 text-xs text-ink-400",children:[c.jsx("span",{children:"Lesson"}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[t.estimatedMinutes," min"]}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:["module: ",t.moduleId]})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:t.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-1",children:t.objective}),c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${l}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400",children:[s," / ",a," interactive blocks complete · ",l,"%"]})]})]}),c.jsx("div",{className:"space-y-5",children:t.blocks.map((u,d)=>c.jsx(NT,{block:u},`${u.type}-${d}`))}),t.quiz&&t.quiz.length>0&&c.jsx(jT,{quizId:`${t.id}-quiz`,questions:t.quiz}),c.jsxs("div",{className:"card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-ink-100",children:"Mark lesson complete"}),c.jsx("div",{className:"text-xs text-ink-300",children:"Not every block auto-completes (Explain blocks don't, for example). Toggle this when you're done."})]}),c.jsx("button",{type:"button",className:o?"btn-ghost w-full sm:w-auto":"btn-primary w-full sm:w-auto",onClick:()=>r(t.id),disabled:o,children:o?"Completed":"Mark complete"})]})]})}function IT(e,t){const n=`# Ship It — starter bundle for ${e}
#
# Split this file back into separate files by copying each section
# (between the === markers) into its own file at the given path.
#
`,r=t.map(a=>`# === FILE: ${a.path} ===

${a.content}${a.content.endsWith(`
`)?"":`
`}
`).join(`
`),i=new Blob([n+r],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download=`${e}-starter.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(o),1e3)}async function AT(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function PT(){const{id:e}=as(),t=e?kf(e):void 0,{progress:n,startBuildAlong:r,markBlockComplete:i,update:o}=et();return S.useEffect(()=>{t&&r(t.id)},[t,r]),t?c.jsx(OT,{id:t.id,progress:n,onTickMilestone:(s,a)=>{const l=bf(t.id,s);a?o(u=>{const d={...u.blocksCompleted};return delete d[l],{...u,blocksCompleted:d}}):i(l)}}):c.jsxs("div",{className:"space-y-4",children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Build-along not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No build-along with id ",c.jsx("code",{children:e}),"."]})]})]})}function OT({id:e,progress:t,onTickMilestone:n}){const r=kf(e),[i,o]=S.useState(0),[s,a]=S.useState(null),l=S.useMemo(()=>r?r.milestones.map(y=>({...y,done:!!t.blocksCompleted[bf(r.id,y.id)]})):[],[r,t.blocksCompleted]);if(!r)return null;const u=l.filter(y=>y.done).length,d=l.length,p=d===0?0:Math.round(u/d*100),f=r.starterFiles[i]??r.starterFiles[0],h=async(y,v)=>{await AT(v)&&(a(y),window.setTimeout(()=>a(null),1500))};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Build-Along"}),c.jsxs("span",{className:"text-xs text-ink-400",children:["unlocks after module: ",c.jsx("code",{children:r.unlockedByModule})]}),c.jsxs("span",{className:"text-xs text-ink-400",children:["· ~",r.estimatedHours,"h"]})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:r.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-2 max-w-2xl",children:r.summary}),c.jsxs("div",{className:"mt-4 max-w-md",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400",children:[u," / ",d," milestones · ",p,"%"]})]})]}),c.jsxs("div",{className:"card p-5 space-y-3",children:[c.jsx("div",{className:"text-sm font-medium text-ink-100",children:"Rules"}),c.jsx("ul",{className:"list-disc pl-5 space-y-1 text-sm text-ink-200",children:r.rules.map((y,v)=>c.jsx("li",{children:y},v))})]}),c.jsx("div",{className:"card p-5",children:c.jsx("div",{className:"prose-block",children:c.jsx(om,{components:{h2:y=>c.jsx("h2",{className:"text-xl font-semibold text-ink-100 mt-2 mb-2",...y}),h3:y=>c.jsx("h3",{className:"text-lg font-semibold text-ink-100 mt-3 mb-1",...y}),p:y=>c.jsx("p",{className:"text-ink-200 leading-relaxed mb-3",...y}),ul:y=>c.jsx("ul",{className:"list-disc pl-5 space-y-1 text-ink-200 mb-3",...y}),li:y=>c.jsx("li",{className:"leading-relaxed",...y}),code:({className:y,children:v,...T})=>(y??"").startsWith("language-")?c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 mb-3",children:c.jsx("code",{...T,children:v})}):c.jsx("code",{className:"bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft",...T,children:v})},children:r.spec})})}),c.jsxs("div",{className:"card p-5 space-y-4",children:[c.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Milestones"}),c.jsxs("span",{className:"text-xs text-ink-400",children:[u," / ",d]})]}),c.jsx("ol",{className:"space-y-2",children:l.map((y,v)=>c.jsx("li",{children:c.jsxs("label",{className:`flex items-start gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-colors ${y.done?"border-accent/30 bg-accent/5":"border-ink-600 bg-ink-800 hover:bg-ink-700"}`,children:[c.jsx("input",{type:"checkbox",className:"accent-accent-strong mt-1",checked:y.done,onChange:()=>n(y.id,y.done)}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:`text-sm ${y.done?"text-ink-300 line-through":"text-ink-100"}`,children:[c.jsxs("span",{className:"text-ink-400 mr-1",children:[v+1,"."]}),y.title]}),y.description&&c.jsx("div",{className:"text-xs text-ink-300 mt-0.5",children:y.description})]})]})},y.id))})]}),c.jsxs("div",{className:"card p-4 sm:p-5 space-y-4",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Starter files"}),c.jsx("div",{className:"text-xs text-ink-400",children:"Copy each one into your project, or download a bundled text version."})]}),c.jsx("button",{type:"button",className:"btn-primary w-full sm:w-auto",onClick:()=>IT(r.id,r.starterFiles),children:"Download starter (.txt)"})]}),c.jsx("div",{className:"flex gap-1 overflow-x-auto sm:flex-wrap border-b border-ink-700 -mx-1 px-1",children:r.starterFiles.map((y,v)=>c.jsx("button",{type:"button",onClick:()=>o(v),className:`px-3 py-1.5 text-xs font-mono transition-colors ${v===i?"text-ink-100 border-b-2 border-accent-strong -mb-px":"text-ink-300 hover:text-ink-100"}`,children:y.path},y.path))}),f&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs",children:[c.jsx("span",{className:"text-ink-400 font-mono",children:f.path}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>h(f.path,f.content),children:s===f.path?"Copied!":"Copy file"})]}),c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 max-h-[28rem] overflow-y-auto whitespace-pre",children:f.content})]})]})]})}const RT={easy:"bg-accent/15 text-accent-strong",medium:"bg-warn/15 text-warn",hard:"bg-danger/15 text-danger"};function LT(){const{progress:e}=et(),t=Ot.filter(n=>e.gauntletSolved[n.id]).length;return c.jsxs("div",{className:"space-y-6",children:[c.jsx(de,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:"Debug Gauntlet"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-2 max-w-2xl",children:"Broken code. Real error messages. Fix one snippet at a time. Officially unlocks after Module 4, but you can warm up whenever."}),c.jsxs("div",{className:"mt-3 text-xs text-ink-400",children:[t," / ",Ot.length," solved"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Ot.map(n=>{var o;const r=!!e.gauntletSolved[n.id],i=((o=e.gauntletSolved[n.id])==null?void 0:o.attempts)??0;return c.jsxs(de,{to:`/gauntlet/${n.id}`,className:`card p-4 group transition-colors hover:border-accent/40 block ${r?"ring-1 ring-accent/30":""}`,children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("span",{className:`chip ${RT[n.difficulty]}`,children:n.difficulty}),r&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Solved"})]}),c.jsx("div",{className:"text-xs text-ink-400 mt-3",children:n.topic}),c.jsx("div",{className:"text-base font-semibold text-ink-100 group-hover:text-white mt-1",children:n.title}),c.jsx("div",{className:"text-xs text-ink-300 mt-2 truncate font-mono",children:n.errorMessage}),r&&i>0&&c.jsxs("div",{className:"text-[11px] text-ink-400 mt-2",children:["solved in ",i," ",i===1?"attempt":"attempts"]})]},n.id)})})]})}function _T(){const{snippetId:e}=as(),t=e?lk(e):void 0;if(!t)return c.jsxs("div",{className:"space-y-4",children:[c.jsx(de,{to:"/gauntlet",className:"text-xs text-ink-300 hover:text-ink-100",children:"← All snippets"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Snippet not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No gauntlet snippet with id ",c.jsx("code",{children:e}),"."]})]})]});const n=Ot.findIndex(o=>o.id===t.id),r=n>0?Ot[n-1]:void 0,i=n<Ot.length-1?Ot[n+1]:void 0;return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(de,{to:"/gauntlet",className:"text-xs text-ink-300 hover:text-ink-100",children:"← All snippets"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.topic}),c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.difficulty})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:t.title})]}),c.jsx(xm,{id:t.id,brokenCode:t.brokenCode,errorMessage:t.errorMessage,expectedConsoleOutput:t.expectedConsoleOutput,hint:t.hint,persistAs:"gauntlet",title:"Fix the snippet so its output matches Expected."}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2",children:[r?c.jsxs(de,{to:`/gauntlet/${r.id}`,className:"btn-ghost text-left",children:["← ",r.title]}):c.jsx("span",{}),i?c.jsxs(de,{to:`/gauntlet/${i.id}`,className:"btn-ghost text-right",children:[i.title," →"]}):c.jsx("span",{})]})]})}const MT="Hello — this is Ship It. Your training rig for building real apps without AI assistance.";function DT(){const{progress:e,setSettings:t}=et(),n=e.settings.voicePresetId??sm,r=e.settings.rate??1,i=e.settings.pitch??1,{voices:o,selectedVoice:s,play:a,stop:l,status:u,supported:d}=am({presetId:n,rate:r,pitch:i}),[p]=S.useState(MT),f=S.useMemo(()=>o.map(h=>({voice:h,online:XS(h)})),[o]);return c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:"Settings"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-1",children:"Voice presets, rate, pitch. All stored locally."})]}),c.jsxs("section",{className:"card p-5 space-y-5",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Voice preset"}),c.jsx("p",{className:"text-xs text-ink-400",children:"Used by every Listen button across the app."})]}),c.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:ul.map(h=>{const y=h.id===n;return c.jsxs("button",{type:"button",onClick:()=>t({voicePresetId:h.id}),className:`text-left rounded-lg border p-3 transition-colors ${y?"border-accent bg-accent/10":"border-ink-600 bg-ink-800 hover:bg-ink-700"}`,children:[c.jsx("div",{className:"text-sm font-medium text-ink-100",children:h.label}),c.jsx("div",{className:"text-xs text-ink-300 mt-0.5",children:h.description}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-1",children:["rate ",h.rate," · pitch ",h.pitch," · ",h.lang]})]},h.id)})})]}),c.jsxs("section",{className:"card p-5 space-y-4",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Fine tune"}),c.jsxs("div",{children:[c.jsxs("label",{className:"text-xs text-ink-300 flex justify-between",children:[c.jsx("span",{children:"Rate"}),c.jsx("span",{className:"text-ink-100",children:r.toFixed(2)})]}),c.jsx("input",{type:"range",min:.6,max:1.4,step:.02,value:r,onChange:h=>t({rate:Number(h.target.value)}),className:"w-full accent-accent-strong"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"text-xs text-ink-300 flex justify-between",children:[c.jsx("span",{children:"Pitch"}),c.jsx("span",{className:"text-ink-100",children:i.toFixed(2)})]}),c.jsx("input",{type:"range",min:.6,max:1.4,step:.02,value:i,onChange:h=>t({pitch:Number(h.target.value)}),className:"w-full accent-accent-strong"})]}),c.jsxs("div",{className:"flex gap-2 pt-2",children:[c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>a(p),children:"Listen test"}),u!=="idle"&&c.jsx("button",{type:"button",className:"btn-ghost",onClick:l,children:"Stop"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>t({rate:1,pitch:1}),children:"Reset"})]}),!d&&c.jsx("p",{className:"text-xs text-danger",children:"Web Speech API isn't available in this browser."}),d&&s&&c.jsxs("p",{className:"text-xs text-ink-300",children:["Active voice: ",c.jsx("span",{className:"text-ink-100",children:s.name})," (",s.lang,")"]})]}),c.jsxs("section",{className:"card p-5",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100 mb-3",children:"Available voices"}),f.length===0?c.jsx("p",{className:"text-sm text-ink-300",children:"Voices load asynchronously — give the browser a moment, then reload."}):c.jsx("ul",{className:"text-sm space-y-1 max-h-72 overflow-auto pr-2",children:f.map(({voice:h,online:y})=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("span",{className:`chip ${y?"bg-accent/15 text-accent-strong":"bg-ink-700 text-ink-200 border border-ink-600"}`,children:y?"[online]":"[local]"}),c.jsx("span",{className:"text-ink-100",children:h.name}),c.jsx("span",{className:"text-ink-400 text-xs ml-auto",children:h.lang})]},`${h.name}-${h.lang}`))})]})]})}function zT(){return c.jsxs("div",{className:"card p-6 text-center",children:[c.jsx("h1",{className:"text-2xl font-semibold text-ink-100",children:"404"}),c.jsx("p",{className:"text-ink-300 mt-1",children:"That route doesn't exist yet."}),c.jsx(de,{to:"/",className:"btn-primary mt-4 inline-flex",children:"Back home"})]})}function FT(){return c.jsx(Xx,{children:c.jsxs(xt,{element:c.jsx(gw,{}),children:[c.jsx(xt,{index:!0,element:c.jsx(uk,{})}),c.jsx(xt,{path:"module/:moduleId",element:c.jsx(ck,{})}),c.jsx(xt,{path:"lesson/:lessonId",element:c.jsx(CT,{})}),c.jsx(xt,{path:"build-along/:id",element:c.jsx(PT,{})}),c.jsx(xt,{path:"gauntlet",element:c.jsx(LT,{})}),c.jsx(xt,{path:"gauntlet/:snippetId",element:c.jsx(_T,{})}),c.jsx(xt,{path:"settings",element:c.jsx(DT,{})}),c.jsx(xt,{path:"*",element:c.jsx(zT,{})})]})})}class UT extends S.Component{constructor(){super(...arguments);Ci(this,"state",{error:null,info:null});Ci(this,"reset",()=>{this.setState({error:null,info:null})});Ci(this,"clearProgress",()=>{try{window.localStorage.removeItem("ship-it:progress:v1"),window.localStorage.removeItem("ship-it:whats-new:lastSeen")}catch{}window.location.reload()})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("[ship-it] ErrorBoundary caught",n,r),this.setState({error:n,info:r})}render(){if(!this.state.error)return this.props.children;const{error:n,info:r}=this.state;return c.jsx("div",{className:"min-h-screen p-6 text-ink-100",children:c.jsxs("div",{className:"max-w-3xl mx-auto card p-6 space-y-4 border-danger/40",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl font-semibold text-danger",children:"Something broke"}),c.jsx("p",{className:"text-sm text-ink-300 mt-1",children:"The app caught an error during render. Details below."})]}),c.jsxs("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 text-xs font-mono text-ink-100 whitespace-pre-wrap overflow-x-auto",children:[n.name,": ",n.message,n.stack?`

${n.stack}`:""]}),(r==null?void 0:r.componentStack)&&c.jsxs("details",{className:"text-xs text-ink-300",children:[c.jsx("summary",{className:"cursor-pointer text-ink-200",children:"Component stack"}),c.jsx("pre",{className:"mt-2 bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono whitespace-pre-wrap overflow-x-auto",children:r.componentStack})]}),c.jsxs("div",{className:"flex gap-2 flex-wrap",children:[c.jsx("button",{type:"button",className:"btn-primary",onClick:this.reset,children:"Try again"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>window.location.reload(),children:"Reload page"}),c.jsx("button",{type:"button",className:"btn-danger",onClick:this.clearProgress,children:"Reset progress + reload"})]})]})})}}const wm=document.getElementById("root");if(!wm)throw new Error("Root element #root not found");ta.createRoot(wm).render(c.jsx(Qt.StrictMode,{children:c.jsx(UT,{children:c.jsx(sw,{basename:"/ship-it",children:c.jsx(FT,{})})})}));
