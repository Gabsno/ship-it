var hg=Object.defineProperty;var fg=(e,t,n)=>t in e?hg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Po=(e,t,n)=>fg(e,typeof t!="symbol"?t+"":t,n);function mg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Al(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yp={exports:{}},Xi={},xp={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),gg=Symbol.for("react.portal"),yg=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),wg=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),Sg=Symbol.for("react.suspense"),Eg=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),Ju=Symbol.iterator;function Ng(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vp=Object.assign,bp={};function yr(e,t,n){this.props=e,this.context=t,this.refs=bp,this.updater=n||wp}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kp(){}kp.prototype=yr.prototype;function _l(e,t,n){this.props=e,this.context=t,this.refs=bp,this.updater=n||wp}var Rl=_l.prototype=new kp;Rl.constructor=_l;vp(Rl,yr.prototype);Rl.isPureReactComponent=!0;var Qu=Array.isArray,Sp=Object.prototype.hasOwnProperty,Ll={current:null},Ep={key:!0,ref:!0,__self:!0,__source:!0};function Tp(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Sp.call(t,r)&&!Ep.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:To,type:e,key:i,ref:s,props:o,_owner:Ll.current}}function jg(e,t){return{$$typeof:To,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===To}function Cg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ku=/\/+/g;function Ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cg(""+e.key):t.toString(36)}function ii(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case To:case gg:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Ns(s,0):r,Qu(o)?(n="",e!=null&&(n=e.replace(Ku,"$&/")+"/"),ii(o,t,n,"",function(u){return u})):o!=null&&(Ol(o)&&(o=jg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ku,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Qu(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Ns(i,a);s+=ii(i,t,n,l,o)}else if(l=Ng(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Ns(i,a++),s+=ii(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Mo(e,t,n){if(e==null)return e;var r=[],o=0;return ii(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},si={transition:null},Ag={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:si,ReactCurrentOwner:Ll};function Np(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Mo,forEach:function(e,t,n){Mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mo(e,function(){t++}),t},toArray:function(e){return Mo(e,function(t){return t})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=yr;Q.Fragment=yg;Q.Profiler=wg;Q.PureComponent=_l;Q.StrictMode=xg;Q.Suspense=Sg;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;Q.act=Np;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vp({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Sp.call(t,l)&&!Ep.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:To,type:e.type,key:o,ref:i,props:r,_owner:s}};Q.createContext=function(e){return e={$$typeof:bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vg,_context:e},e.Consumer=e};Q.createElement=Tp;Q.createFactory=function(e){var t=Tp.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:kg,render:e}};Q.isValidElement=Ol;Q.lazy=function(e){return{$$typeof:Tg,_payload:{_status:-1,_result:e},_init:Ig}};Q.memo=function(e,t){return{$$typeof:Eg,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=si.transition;si.transition={};try{e()}finally{si.transition=t}};Q.unstable_act=Np;Q.useCallback=function(e,t){return De.current.useCallback(e,t)};Q.useContext=function(e){return De.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Q.useEffect=function(e,t){return De.current.useEffect(e,t)};Q.useId=function(){return De.current.useId()};Q.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return De.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};Q.useRef=function(e){return De.current.useRef(e)};Q.useState=function(e){return De.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return De.current.useTransition()};Q.version="18.3.1";xp.exports=Q;var T=xp.exports;const tn=Al(T),_g=mg({__proto__:null,default:tn},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg=T,Lg=Symbol.for("react.element"),Og=Symbol.for("react.fragment"),Pg=Object.prototype.hasOwnProperty,Mg=Rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dg={key:!0,ref:!0,__self:!0,__source:!0};function jp(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Pg.call(t,r)&&!Dg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Lg,type:e,key:i,ref:s,props:o,_owner:Mg.current}}Xi.Fragment=Og;Xi.jsx=jp;Xi.jsxs=jp;yp.exports=Xi;var c=yp.exports,ma={},Cp={exports:{}},rt={},Ip={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,$){var b=R.length;R.push($);e:for(;0<b;){var z=b-1>>>1,H=R[z];if(0<o(H,$))R[z]=$,R[b]=H,b=z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var $=R[0],b=R.pop();if(b!==$){R[0]=b;e:for(var z=0,H=R.length,k=H>>>1;z<k;){var te=2*(z+1)-1,ye=R[te],ne=te+1,Oe=R[ne];if(0>o(ye,b))ne<H&&0>o(Oe,ye)?(R[z]=Oe,R[ne]=b,z=ne):(R[z]=ye,R[te]=b,z=te);else if(ne<H&&0>o(Oe,b))R[z]=Oe,R[ne]=b,z=ne;else break e}}return $}function o(R,$){var b=R.sortIndex-$.sortIndex;return b!==0?b:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,f=3,h=!1,m=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=R)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(R){if(x=!1,w(R),!m)if(n(l)!==null)m=!0,W(N);else{var $=n(u);$!==null&&K(S,$.startTime-R)}}function N(R,$){m=!1,x&&(x=!1,g(_),_=-1),h=!0;var b=f;try{for(w($),p=n(l);p!==null&&(!(p.expirationTime>$)||R&&!D());){var z=p.callback;if(typeof z=="function"){p.callback=null,f=p.priorityLevel;var H=z(p.expirationTime<=$);$=e.unstable_now(),typeof H=="function"?p.callback=H:p===n(l)&&r(l),w($)}else r(l);p=n(l)}if(p!==null)var k=!0;else{var te=n(u);te!==null&&K(S,te.startTime-$),k=!1}return k}finally{p=null,f=b,h=!1}}var E=!1,j=null,_=-1,M=5,A=-1;function D(){return!(e.unstable_now()-A<M)}function B(){if(j!==null){var R=e.unstable_now();A=R;var $=!0;try{$=j(!0,R)}finally{$?J():(E=!1,j=null)}}else E=!1}var J;if(typeof y=="function")J=function(){y(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,P=G.port2;G.port1.onmessage=B,J=function(){P.postMessage(null)}}else J=function(){v(B,0)};function W(R){j=R,E||(E=!0,J())}function K(R,$){_=v(function(){R(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,W(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var b=f;f=$;try{return R()}finally{f=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var b=f;f=R;try{return $()}finally{f=b}},e.unstable_scheduleCallback=function(R,$,b){var z=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?z+b:z):b=z,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=b+H,R={id:d++,callback:$,priorityLevel:R,startTime:b,expirationTime:H,sortIndex:-1},b>z?(R.sortIndex=b,t(u,R),n(l)===null&&R===n(u)&&(x?(g(_),_=-1):x=!0,K(S,b-z))):(R.sortIndex=H,t(l,R),m||h||(m=!0,W(N))),R},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(R){var $=f;return function(){var b=f;f=$;try{return R.apply(this,arguments)}finally{f=b}}}})(Ap);Ip.exports=Ap;var Fg=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=T,nt=Fg;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _p=new Set,to={};function On(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(to[e]=t,e=0;e<t.length;e++)_p.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Zu={};function Ug(e){return ga.call(Zu,e)?!0:ga.call(Xu,e)?!1:zg.test(e)?Zu[e]=!0:(Xu[e]=!0,!1)}function $g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,t,n,r){if(t===null||typeof t>"u"||$g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pl=/[\-:]([a-z])/g;function Ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pl,Ml);Ce[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pl,Ml);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pl,Ml);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,t,n,r){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hg(t,n,o,r)&&(n=null),r||o===null?Ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Un=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),Fl=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Op=Symbol.for("react.offscreen"),ec=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,js;function Mr(e){if(js===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);js=t&&t[1]||""}return`
`+js+e}var Cs=!1;function Is(e,t){if(!e||Cs)return"";Cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function Wg(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=Is(e.type,!1),e;case 11:return e=Is(e.type.render,!1),e;case 1:return e=Is(e.type,!0),e;default:return""}}function va(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Un:return"Portal";case ya:return"Profiler";case Fl:return"StrictMode";case xa:return"Suspense";case wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lp:return(e.displayName||"Context")+".Consumer";case Rp:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:va(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return va(e(t))}catch{}}return null}function qg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(t);case 8:return t===Fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gg(e){var t=Pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){e._valueTracker||(e._valueTracker=Gg(e))}function Mp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dp(e,t){t=t.checked,t!=null&&Dl(e,"checked",t,!1)}function ka(e,t){Dp(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sa(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sa(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Dr(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Fp(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vg=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){Vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function Up(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function $p(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Up(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Yg=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(e,t){if(t){if(Yg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,nr=null,rr=null;function ic(e){if(e=Co(e)){if(typeof Ia!="function")throw Error(L(280));var t=e.stateNode;t&&(t=rs(t),Ia(e.stateNode,e.type,t))}}function Hp(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Wp(){if(nr){var e=nr,t=rr;if(rr=nr=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function qp(e,t){return e(t)}function Gp(){}var As=!1;function Vp(e,t,n){if(As)return e(t,n);As=!0;try{return qp(e,t,n)}finally{As=!1,(nr!==null||rr!==null)&&(Gp(),Wp())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=rs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Aa=!1;if(zt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Aa=!1}function Jg(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Hr=!1,bi=null,ki=!1,_a=null,Qg={onError:function(e){Hr=!0,bi=e}};function Kg(e,t,n,r,o,i,s,a,l){Hr=!1,bi=null,Jg.apply(Qg,arguments)}function Xg(e,t,n,r,o,i,s,a,l){if(Kg.apply(this,arguments),Hr){if(Hr){var u=bi;Hr=!1,bi=null}else throw Error(L(198));ki||(ki=!0,_a=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sc(e){if(Pn(e)!==e)throw Error(L(188))}function Zg(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return sc(o),e;if(i===r)return sc(o),t;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Jp(e){return e=Zg(e),e!==null?Qp(e):null}function Qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qp(e);if(t!==null)return t;e=e.sibling}return null}var Kp=nt.unstable_scheduleCallback,ac=nt.unstable_cancelCallback,ey=nt.unstable_shouldYield,ty=nt.unstable_requestPaint,xe=nt.unstable_now,ny=nt.unstable_getCurrentPriorityLevel,$l=nt.unstable_ImmediatePriority,Xp=nt.unstable_UserBlockingPriority,Si=nt.unstable_NormalPriority,ry=nt.unstable_LowPriority,Zp=nt.unstable_IdlePriority,Zi=null,Ct=null;function oy(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:ay,iy=Math.log,sy=Math.LN2;function ay(e){return e>>>=0,e===0?32:31-(iy(e)/sy|0)|0}var zo=64,Uo=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Fr(a):(i&=s,i!==0&&(r=Fr(i)))}else s=n&~o,s!==0?r=Fr(s):i!==0&&(r=Fr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-xt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=ly(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eh(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function cy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Hl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function th(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nh,Wl,rh,oh,ih,La=!1,$o=[],nn=null,rn=null,on=null,oo=new Map,io=new Map,Qt=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Co(t),t!==null&&Wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function py(e,t,n,r,o){switch(t){case"focusin":return nn=Cr(nn,e,t,n,r,o),!0;case"dragenter":return rn=Cr(rn,e,t,n,r,o),!0;case"mouseover":return on=Cr(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oo.set(i,Cr(oo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,io.set(i,Cr(io.get(i)||null,e,t,n,r,o)),!0}return!1}function sh(e){var t=En(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yp(n),t!==null){e.blockedOn=t,ih(e.priority,function(){rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return t=Co(n),t!==null&&Wl(t),e.blockedOn=n,!1;t.shift()}return!0}function uc(e,t,n){ai(e)&&n.delete(t)}function hy(){La=!1,nn!==null&&ai(nn)&&(nn=null),rn!==null&&ai(rn)&&(rn=null),on!==null&&ai(on)&&(on=null),oo.forEach(uc),io.forEach(uc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,La||(La=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,hy)))}function so(e){function t(o){return Ir(o,e)}if(0<$o.length){Ir($o[0],e);for(var n=1;n<$o.length;n++){var r=$o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Ir(nn,e),rn!==null&&Ir(rn,e),on!==null&&Ir(on,e),oo.forEach(t),io.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Qt.shift()}var or=Wt.ReactCurrentBatchConfig,Ti=!0;function fy(e,t,n,r){var o=oe,i=or.transition;or.transition=null;try{oe=1,ql(e,t,n,r)}finally{oe=o,or.transition=i}}function my(e,t,n,r){var o=oe,i=or.transition;or.transition=null;try{oe=4,ql(e,t,n,r)}finally{oe=o,or.transition=i}}function ql(e,t,n,r){if(Ti){var o=Oa(e,t,n,r);if(o===null)Us(e,t,r,Ni,n),lc(e,r);else if(py(o,e,t,n,r))r.stopPropagation();else if(lc(e,r),t&4&&-1<dy.indexOf(e)){for(;o!==null;){var i=Co(o);if(i!==null&&nh(i),i=Oa(e,t,n,r),i===null&&Us(e,t,r,Ni,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Us(e,t,r,null,n)}}var Ni=null;function Oa(e,t,n,r){if(Ni=null,e=Ul(r),e=En(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function ah(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case $l:return 1;case Xp:return 4;case Si:case ry:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var Xt=null,Gl=null,li=null;function lh(){if(li)return li;var e,t=Gl,n=t.length,r,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return li=o.slice(e,1<r?1-r:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function cc(){return!1}function ot(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ho:cc,this.isPropagationStopped=cc,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=ot(xr),jo=fe({},xr,{view:0,detail:0}),gy=ot(jo),Rs,Ls,Ar,es=fe({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Rs=e.screenX-Ar.screenX,Ls=e.screenY-Ar.screenY):Ls=Rs=0,Ar=e),Rs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),dc=ot(es),yy=fe({},es,{dataTransfer:0}),xy=ot(yy),wy=fe({},jo,{relatedTarget:0}),Os=ot(wy),vy=fe({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),by=ot(vy),ky=fe({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=ot(ky),Ey=fe({},xr,{data:0}),pc=ot(Ey),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jy[e])?!!t[e]:!1}function Yl(){return Cy}var Iy=fe({},jo,{key:function(e){if(e.key){var t=Ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ay=ot(Iy),_y=fe({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=ot(_y),Ry=fe({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Ly=ot(Ry),Oy=fe({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=ot(Oy),My=fe({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=ot(My),Fy=[9,13,27,32],Jl=zt&&"CompositionEvent"in window,Wr=null;zt&&"documentMode"in document&&(Wr=document.documentMode);var By=zt&&"TextEvent"in window&&!Wr,uh=zt&&(!Jl||Wr&&8<Wr&&11>=Wr),fc=" ",mc=!1;function ch(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function zy(e,t){switch(e){case"compositionend":return dh(t);case"keypress":return t.which!==32?null:(mc=!0,fc);case"textInput":return e=t.data,e===fc&&mc?null:e;default:return null}}function Uy(e,t){if(Hn)return e==="compositionend"||!Jl&&ch(e,t)?(e=lh(),li=Gl=Xt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uh&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function ph(e,t,n,r){Hp(r),t=ji(t,"onChange"),0<t.length&&(n=new Vl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,ao=null;function Hy(e){Sh(e,0)}function ts(e){var t=Gn(e);if(Mp(t))return e}function Wy(e,t){if(e==="change")return t}var hh=!1;if(zt){var Ps;if(zt){var Ms="oninput"in document;if(!Ms){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),Ms=typeof yc.oninput=="function"}Ps=Ms}else Ps=!1;hh=Ps&&(!document.documentMode||9<document.documentMode)}function xc(){qr&&(qr.detachEvent("onpropertychange",fh),ao=qr=null)}function fh(e){if(e.propertyName==="value"&&ts(ao)){var t=[];ph(t,ao,e,Ul(e)),Vp(Hy,t)}}function qy(e,t,n){e==="focusin"?(xc(),qr=t,ao=n,qr.attachEvent("onpropertychange",fh)):e==="focusout"&&xc()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(ao)}function Vy(e,t){if(e==="click")return ts(t)}function Yy(e,t){if(e==="input"||e==="change")return ts(t)}function Jy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Jy;function lo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ga.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function mh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gh(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qy(e){var t=gh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mh(n.ownerDocument.documentElement,n)){if(r!==null&&Ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vc(n,i);var s=vc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ky=zt&&"documentMode"in document&&11>=document.documentMode,Wn=null,Pa=null,Gr=null,Ma=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Wn==null||Wn!==vi(r)||(r=Wn,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&lo(Gr,r)||(Gr=r,r=ji(Pa,"onSelect"),0<r.length&&(t=new Vl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Ds={},yh={};zt&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function ns(e){if(Ds[e])return Ds[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yh)return Ds[e]=t[n];return e}var xh=ns("animationend"),wh=ns("animationiteration"),vh=ns("animationstart"),bh=ns("transitionend"),kh=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){kh.set(e,t),On(t,[e])}for(var Fs=0;Fs<kc.length;Fs++){var Bs=kc[Fs],Xy=Bs.toLowerCase(),Zy=Bs[0].toUpperCase()+Bs.slice(1);mn(Xy,"on"+Zy)}mn(xh,"onAnimationEnd");mn(wh,"onAnimationIteration");mn(vh,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(bh,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Sc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xg(r,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Sc(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Sc(o,a,u),i=l}}}if(ki)throw e=_a,ki=!1,_a=null,e}function ue(e,t){var n=t[Ua];n===void 0&&(n=t[Ua]=new Set);var r=e+"__bubble";n.has(r)||(Eh(t,e,2,!1),n.add(r))}function zs(e,t,n){var r=0;t&&(r|=4),Eh(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[qo]){e[qo]=!0,_p.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||zs(n,!1,e),zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,zs("selectionchange",!1,t))}}function Eh(e,t,n,r){switch(ah(t)){case 1:var o=fy;break;case 4:o=my;break;default:o=ql}n=o.bind(null,t,n,e),o=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Us(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=En(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Vp(function(){var u=i,d=Ul(n),p=[];e:{var f=kh.get(e);if(f!==void 0){var h=Vl,m=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":h=Ay;break;case"focusin":m="focus",h=Os;break;case"focusout":m="blur",h=Os;break;case"beforeblur":case"afterblur":h=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ly;break;case xh:case wh:case vh:h=by;break;case bh:h=Py;break;case"scroll":h=gy;break;case"wheel":h=Dy;break;case"copy":case"cut":case"paste":h=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=hc}var x=(t&4)!==0,v=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var y=u,w;y!==null;){w=y;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,g!==null&&(S=ro(y,g),S!=null&&x.push(co(y,S,w)))),v)break;y=y.return}0<x.length&&(f=new h(f,m,null,n,d),p.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Ca&&(m=n.relatedTarget||n.fromElement)&&(En(m)||m[Ut]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?En(m):null,m!==null&&(v=Pn(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(x=dc,S="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=hc,S="onPointerLeave",g="onPointerEnter",y="pointer"),v=h==null?f:Gn(h),w=m==null?f:Gn(m),f=new x(S,y+"leave",h,n,d),f.target=v,f.relatedTarget=w,S=null,En(d)===u&&(x=new x(g,y+"enter",m,n,d),x.target=w,x.relatedTarget=v,S=x),v=S,h&&m)t:{for(x=h,g=m,y=0,w=x;w;w=Bn(w))y++;for(w=0,S=g;S;S=Bn(S))w++;for(;0<y-w;)x=Bn(x),y--;for(;0<w-y;)g=Bn(g),w--;for(;y--;){if(x===g||g!==null&&x===g.alternate)break t;x=Bn(x),g=Bn(g)}x=null}else x=null;h!==null&&Ec(p,f,h,x,!1),m!==null&&v!==null&&Ec(p,v,m,x,!0)}}e:{if(f=u?Gn(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var N=Wy;else if(gc(f))if(hh)N=Yy;else{N=Gy;var E=qy}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Vy);if(N&&(N=N(e,u))){ph(p,N,n,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Sa(f,"number",f.value)}switch(E=u?Gn(u):window,e){case"focusin":(gc(E)||E.contentEditable==="true")&&(Wn=E,Pa=u,Gr=null);break;case"focusout":Gr=Pa=Wn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,bc(p,n,d);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":bc(p,n,d)}var j;if(Jl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Hn?ch(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(uh&&n.locale!=="ko"&&(Hn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Hn&&(j=lh()):(Xt=d,Gl="value"in Xt?Xt.value:Xt.textContent,Hn=!0)),E=ji(u,_),0<E.length&&(_=new pc(_,e,null,n,d),p.push({event:_,listeners:E}),j?_.data=j:(j=dh(n),j!==null&&(_.data=j)))),(j=By?zy(e,n):Uy(e,n))&&(u=ji(u,"onBeforeInput"),0<u.length&&(d=new pc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=j))}Sh(p,t)})}function co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ro(e,n),i!=null&&r.unshift(co(e,i,o)),i=ro(e,t),i!=null&&r.push(co(e,i,o))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=ro(n,i),l!=null&&s.unshift(co(n,l,a))):o||(l=ro(n,i),l!=null&&s.push(co(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(nx,"")}function Go(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(L(425))}function Ci(){}var Da=null,Fa=null;function Ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(ix)}:za;function ix(e){setTimeout(function(){throw e})}function $s(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+wr,po="__reactProps$"+wr,Ut="__reactContainer$"+wr,Ua="__reactEvents$"+wr,sx="__reactListeners$"+wr,ax="__reactHandles$"+wr;function En(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jc(e);e!==null;){if(n=e[Nt])return n;e=jc(e)}return t}e=n,n=e.parentNode}return null}function Co(e){return e=e[Nt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function rs(e){return e[po]||null}var $a=[],Vn=-1;function gn(e){return{current:e}}function ce(e){0>Vn||(e.current=$a[Vn],$a[Vn]=null,Vn--)}function ae(e,t){Vn++,$a[Vn]=e.current,e.current=t}var fn={},Re=gn(fn),$e=gn(!1),In=fn;function cr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function Ii(){ce($e),ce(Re)}function Cc(e,t,n){if(Re.current!==fn)throw Error(L(168));ae(Re,t),ae($e,n)}function Th(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,qg(e)||"Unknown",o));return fe({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,In=Re.current,ae(Re,e),ae($e,$e.current),!0}function Ic(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Th(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,ce($e),ce(Re),ae(Re,e)):ce($e),ae($e,n)}var Pt=null,os=!1,Hs=!1;function Nh(e){Pt===null?Pt=[e]:Pt.push(e)}function lx(e){os=!0,Nh(e)}function yn(){if(!Hs&&Pt!==null){Hs=!0;var e=0,t=oe;try{var n=Pt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,os=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),Kp($l,yn),o}finally{oe=t,Hs=!1}}return null}var Yn=[],Jn=0,_i=null,Ri=0,it=[],st=0,An=null,Mt=1,Dt="";function bn(e,t){Yn[Jn++]=Ri,Yn[Jn++]=_i,_i=e,Ri=t}function jh(e,t,n){it[st++]=Mt,it[st++]=Dt,it[st++]=An,An=e;var r=Mt;e=Dt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Mt=1<<32-xt(t)+o|n<<o|r,Dt=i+e}else Mt=1<<i|n<<o|r,Dt=e}function Kl(e){e.return!==null&&(bn(e,1),jh(e,1,0))}function Xl(e){for(;e===_i;)_i=Yn[--Jn],Yn[Jn]=null,Ri=Yn[--Jn],Yn[Jn]=null;for(;e===An;)An=it[--st],it[st]=null,Dt=it[--st],it[st]=null,Mt=it[--st],it[st]=null}var tt=null,Ze=null,de=!1,yt=null;function Ch(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,Ze=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Mt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,Ze=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wa(e){if(de){var t=Ze;if(t){var n=t;if(!Ac(e,t)){if(Ha(e))throw Error(L(418));t=sn(n.nextSibling);var r=tt;t&&Ac(e,t)?Ch(r,n):(e.flags=e.flags&-4097|2,de=!1,tt=e)}}else{if(Ha(e))throw Error(L(418));e.flags=e.flags&-4097|2,de=!1,tt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Vo(e){if(e!==tt)return!1;if(!de)return _c(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ba(e.type,e.memoizedProps)),t&&(t=Ze)){if(Ha(e))throw Ih(),Error(L(418));for(;t;)Ch(e,t),t=sn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=tt?sn(e.stateNode.nextSibling):null;return!0}function Ih(){for(var e=Ze;e;)e=sn(e.nextSibling)}function dr(){Ze=tt=null,de=!1}function Zl(e){yt===null?yt=[e]:yt.push(e)}var ux=Wt.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rc(e){var t=e._init;return t(e._payload)}function Ah(e){function t(g,y){if(e){var w=g.deletions;w===null?(g.deletions=[y],g.flags|=16):w.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function o(g,y){return g=cn(g,y),g.index=0,g.sibling=null,g}function i(g,y,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<y?(g.flags|=2,y):w):(g.flags|=2,y)):(g.flags|=1048576,y)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,y,w,S){return y===null||y.tag!==6?(y=Qs(w,g.mode,S),y.return=g,y):(y=o(y,w),y.return=g,y)}function l(g,y,w,S){var N=w.type;return N===$n?d(g,y,w.props.children,S,w.key):y!==null&&(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yt&&Rc(N)===y.type)?(S=o(y,w.props),S.ref=_r(g,y,w),S.return=g,S):(S=gi(w.type,w.key,w.props,null,g.mode,S),S.ref=_r(g,y,w),S.return=g,S)}function u(g,y,w,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Ks(w,g.mode,S),y.return=g,y):(y=o(y,w.children||[]),y.return=g,y)}function d(g,y,w,S,N){return y===null||y.tag!==7?(y=Cn(w,g.mode,S,N),y.return=g,y):(y=o(y,w),y.return=g,y)}function p(g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Qs(""+y,g.mode,w),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Do:return w=gi(y.type,y.key,y.props,null,g.mode,w),w.ref=_r(g,null,y),w.return=g,w;case Un:return y=Ks(y,g.mode,w),y.return=g,y;case Yt:var S=y._init;return p(g,S(y._payload),w)}if(Dr(y)||Nr(y))return y=Cn(y,g.mode,w,null),y.return=g,y;Yo(g,y)}return null}function f(g,y,w,S){var N=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return N!==null?null:a(g,y,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return w.key===N?l(g,y,w,S):null;case Un:return w.key===N?u(g,y,w,S):null;case Yt:return N=w._init,f(g,y,N(w._payload),S)}if(Dr(w)||Nr(w))return N!==null?null:d(g,y,w,S,null);Yo(g,w)}return null}function h(g,y,w,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(w)||null,a(y,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Do:return g=g.get(S.key===null?w:S.key)||null,l(y,g,S,N);case Un:return g=g.get(S.key===null?w:S.key)||null,u(y,g,S,N);case Yt:var E=S._init;return h(g,y,w,E(S._payload),N)}if(Dr(S)||Nr(S))return g=g.get(w)||null,d(y,g,S,N,null);Yo(y,S)}return null}function m(g,y,w,S){for(var N=null,E=null,j=y,_=y=0,M=null;j!==null&&_<w.length;_++){j.index>_?(M=j,j=null):M=j.sibling;var A=f(g,j,w[_],S);if(A===null){j===null&&(j=M);break}e&&j&&A.alternate===null&&t(g,j),y=i(A,y,_),E===null?N=A:E.sibling=A,E=A,j=M}if(_===w.length)return n(g,j),de&&bn(g,_),N;if(j===null){for(;_<w.length;_++)j=p(g,w[_],S),j!==null&&(y=i(j,y,_),E===null?N=j:E.sibling=j,E=j);return de&&bn(g,_),N}for(j=r(g,j);_<w.length;_++)M=h(j,g,_,w[_],S),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?_:M.key),y=i(M,y,_),E===null?N=M:E.sibling=M,E=M);return e&&j.forEach(function(D){return t(g,D)}),de&&bn(g,_),N}function x(g,y,w,S){var N=Nr(w);if(typeof N!="function")throw Error(L(150));if(w=N.call(w),w==null)throw Error(L(151));for(var E=N=null,j=y,_=y=0,M=null,A=w.next();j!==null&&!A.done;_++,A=w.next()){j.index>_?(M=j,j=null):M=j.sibling;var D=f(g,j,A.value,S);if(D===null){j===null&&(j=M);break}e&&j&&D.alternate===null&&t(g,j),y=i(D,y,_),E===null?N=D:E.sibling=D,E=D,j=M}if(A.done)return n(g,j),de&&bn(g,_),N;if(j===null){for(;!A.done;_++,A=w.next())A=p(g,A.value,S),A!==null&&(y=i(A,y,_),E===null?N=A:E.sibling=A,E=A);return de&&bn(g,_),N}for(j=r(g,j);!A.done;_++,A=w.next())A=h(j,g,_,A.value,S),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?_:A.key),y=i(A,y,_),E===null?N=A:E.sibling=A,E=A);return e&&j.forEach(function(B){return t(g,B)}),de&&bn(g,_),N}function v(g,y,w,S){if(typeof w=="object"&&w!==null&&w.type===$n&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:e:{for(var N=w.key,E=y;E!==null;){if(E.key===N){if(N=w.type,N===$n){if(E.tag===7){n(g,E.sibling),y=o(E,w.props.children),y.return=g,g=y;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yt&&Rc(N)===E.type){n(g,E.sibling),y=o(E,w.props),y.ref=_r(g,E,w),y.return=g,g=y;break e}n(g,E);break}else t(g,E);E=E.sibling}w.type===$n?(y=Cn(w.props.children,g.mode,S,w.key),y.return=g,g=y):(S=gi(w.type,w.key,w.props,null,g.mode,S),S.ref=_r(g,y,w),S.return=g,g=S)}return s(g);case Un:e:{for(E=w.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(g,y.sibling),y=o(y,w.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Ks(w,g.mode,S),y.return=g,g=y}return s(g);case Yt:return E=w._init,v(g,y,E(w._payload),S)}if(Dr(w))return m(g,y,w,S);if(Nr(w))return x(g,y,w,S);Yo(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(g,y.sibling),y=o(y,w),y.return=g,g=y):(n(g,y),y=Qs(w,g.mode,S),y.return=g,g=y),s(g)):n(g,y)}return v}var pr=Ah(!0),_h=Ah(!1),Li=gn(null),Oi=null,Qn=null,eu=null;function tu(){eu=Qn=Oi=null}function nu(e){var t=Li.current;ce(Li),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Oi=e,eu=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(eu!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(Oi===null)throw Error(L(308));Qn=e,Oi.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var Tn=null;function ru(e){Tn===null?Tn=[e]:Tn.push(e)}function Rh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ru(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,ru(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hl(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pi(e,t,n,r){var o=e.updateQueue;Jt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;s=0,d=u=l=null,a=i;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,x=a;switch(f=t,h=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=fe({},p,f);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(l=p),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rn|=s,e.lanes=s,e.memoizedState=p}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var Io={},It=gn(Io),ho=gn(Io),fo=gn(Io);function Nn(e){if(e===Io)throw Error(L(174));return e}function iu(e,t){switch(ae(fo,t),ae(ho,e),ae(It,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}ce(It),ae(It,t)}function hr(){ce(It),ce(ho),ce(fo)}function Oh(e){Nn(fo.current);var t=Nn(It.current),n=Ta(t,e.type);t!==n&&(ae(ho,e),ae(It,n))}function su(e){ho.current===e&&(ce(It),ce(ho))}var pe=gn(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ws=[];function au(){for(var e=0;e<Ws.length;e++)Ws[e]._workInProgressVersionPrimary=null;Ws.length=0}var di=Wt.ReactCurrentDispatcher,qs=Wt.ReactCurrentBatchConfig,_n=0,he=null,be=null,Se=null,Di=!1,Vr=!1,mo=0,cx=0;function Ie(){throw Error(L(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function uu(e,t,n,r,o,i){if(_n=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?fx:mx,e=n(r,o),Vr){i=0;do{if(Vr=!1,mo=0,25<=i)throw Error(L(301));i+=1,Se=be=null,t.updateQueue=null,di.current=gx,e=n(r,o)}while(Vr)}if(di.current=Fi,t=be!==null&&be.next!==null,_n=0,Se=be=he=null,Di=!1,t)throw Error(L(300));return e}function cu(){var e=mo!==0;return mo=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function dt(){if(be===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,be=e;else{if(e===null)throw Error(L(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function go(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var d=u.lane;if((_n&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,he.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,vt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,he.lanes|=i,Rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vs(e){var t=dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);vt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ph(){}function Mh(e,t){var n=he,r=dt(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,du(Bh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,yo(9,Fh.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(L(349));_n&30||Dh(n,t,o)}return o}function Dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fh(e,t,n,r){t.value=n,t.getSnapshot=r,zh(t)&&Uh(e)}function Bh(e,t,n){return n(function(){zh(t)&&Uh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Uh(e){var t=$t(e,1);t!==null&&wt(t,e,1,-1)}function Pc(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=hx.bind(null,he,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $h(){return dt().memoizedState}function pi(e,t,n,r){var o=Et();he.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function is(e,t,n,r){var o=dt();r=r===void 0?null:r;var i=void 0;if(be!==null){var s=be.memoizedState;if(i=s.destroy,r!==null&&lu(r,s.deps)){o.memoizedState=yo(t,n,i,r);return}}he.flags|=e,o.memoizedState=yo(1|t,n,i,r)}function Mc(e,t){return pi(8390656,8,e,t)}function du(e,t){return is(2048,8,e,t)}function Hh(e,t){return is(4,2,e,t)}function Wh(e,t){return is(4,4,e,t)}function qh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gh(e,t,n){return n=n!=null?n.concat([e]):null,is(4,4,qh.bind(null,t,e),n)}function pu(){}function Vh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jh(e,t,n){return _n&21?(vt(n,t)||(n=eh(),he.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function dx(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{oe=n,qs.transition=r}}function Qh(){return dt().memoizedState}function px(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kh(e))Xh(t,n);else if(n=Rh(e,t,n,r),n!==null){var o=Me();wt(n,e,r,o),Zh(n,t,r)}}function hx(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kh(e))Xh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,s)){var l=t.interleaved;l===null?(o.next=o,ru(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Rh(e,t,o,r),n!==null&&(o=Me(),wt(n,e,r,o),Zh(n,t,r))}}function Kh(e){var t=e.alternate;return e===he||t!==null&&t===he}function Xh(e,t){Vr=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hl(e,n)}}var Fi={readContext:ct,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},fx={readContext:ct,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pi(4194308,4,qh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return pi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=px.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:pu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=dx.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Et();if(de){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ee===null)throw Error(L(349));_n&30||Dh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Mc(Bh.bind(null,r,i,e),[e]),r.flags|=2048,yo(9,Fh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ee.identifierPrefix;if(de){var n=Dt,r=Mt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mx={readContext:ct,useCallback:Vh,useContext:ct,useEffect:du,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Gs,useRef:$h,useState:function(){return Gs(go)},useDebugValue:pu,useDeferredValue:function(e){var t=dt();return Jh(t,be.memoizedState,e)},useTransition:function(){var e=Gs(go)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1},gx={readContext:ct,useCallback:Vh,useContext:ct,useEffect:du,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Vs,useRef:$h,useState:function(){return Vs(go)},useDebugValue:pu,useDeferredValue:function(e){var t=dt();return be===null?t.memoizedState=e:Jh(t,be.memoizedState,e)},useTransition:function(){var e=Vs(go)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ga(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=un(e),i=Bt(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(wt(t,e,o,r),ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=un(e),i=Bt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(wt(t,e,o,r),ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(wt(t,e,r,n),ci(t,e,r))}};function Dc(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,i):!0}function ef(e,t,n){var r=!1,o=fn,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(o=He(t)?In:Re.current,r=t.contextTypes,i=(r=r!=null)?cr(e,o):fn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ou(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ct(i):(i=He(t)?In:Re.current,o.context=cr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ga(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ss.enqueueReplaceState(o,o.state,null),Pi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=Wg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,ol=r),Ya(e,t)},n}function nf(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ya(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ya(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_x.bind(null,e,t,n),t.then(e,e))}function zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var xx=Wt.ReactCurrentOwner,Ue=!1;function Pe(e,t,n,r){t.child=e===null?_h(t,null,n,r):pr(t,e.child,n,r)}function $c(e,t,n,r,o){n=n.render;var i=t.ref;return ir(t,o),r=uu(e,t,n,r,i,o),n=cu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(de&&n&&Kl(t),t.flags|=1,Pe(e,t,r,o),t.child)}function Hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rf(e,t,i,r,o)):(e=gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(s,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lo(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return Ja(e,t,n,r,o)}function of(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Xn,Ke),Ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Xn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(Xn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(Xn,Ke),Ke|=r;return Pe(e,t,o,n),t.child}function sf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,n,r,o){var i=He(n)?In:Re.current;return i=cr(t,i),ir(t,o),n=uu(e,t,n,r,i,o),r=cu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(de&&r&&Kl(t),t.flags|=1,Pe(e,t,n,o),t.child)}function Wc(e,t,n,r,o){if(He(n)){var i=!0;Ai(t)}else i=!1;if(ir(t,o),t.stateNode===null)hi(e,t),ef(t,n,r),Va(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=He(n)?In:Re.current,u=cr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fc(t,s,r,u),Jt=!1;var f=t.memoizedState;s.state=f,Pi(t,r,s,o),l=t.memoizedState,a!==r||f!==l||$e.current||Jt?(typeof d=="function"&&(Ga(t,n,d,r),l=t.memoizedState),(a=Jt||Dc(t,n,a,r,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Lh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mt(t.type,a),s.props=u,p=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=He(n)?In:Re.current,l=cr(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==l)&&Fc(t,s,r,l),Jt=!1,f=t.memoizedState,s.state=f,Pi(t,r,s,o);var m=t.memoizedState;a!==p||f!==m||$e.current||Jt?(typeof h=="function"&&(Ga(t,n,h,r),m=t.memoizedState),(u=Jt||Dc(t,n,u,r,f,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,i,o)}function Qa(e,t,n,r,o,i){sf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ic(t,n,!1),Ht(e,t,i);r=t.stateNode,xx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pr(t,e.child,null,i),t.child=pr(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=r.state,o&&Ic(t,n,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),iu(e,t.containerInfo)}function qc(e,t,n,r,o){return dr(),Zl(o),t.flags|=256,Pe(e,t,n,r),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,n){var r=t.pendingProps,o=pe.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(pe,o&1),e===null)return Wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=us(s,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xa(n),t.memoizedState=Ka,e):hu(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return wx(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=cn(a,i):(i=Cn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Xa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ka,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hu(e,t){return t=us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&Zl(r),pr(t,e.child,null,n),e=hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wx(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ys(Error(L(422))),Jo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=us({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&pr(t,e.child,null,s),t.child.memoizedState=Xa(s),t.memoizedState=Ka,i);if(!(t.mode&1))return Jo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(L(419)),r=Ys(i,r,void 0),Jo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ue||a){if(r=Ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),wt(r,e,o,-1))}return wu(),r=Ys(Error(L(421))),Jo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=sn(o.nextSibling),tt=t,de=!0,yt=null,e!==null&&(it[st++]=Mt,it[st++]=Dt,it[st++]=An,Mt=e.id,Dt=e.overflow,An=t),t=hu(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function Js(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function uf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(pe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Js(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Js(t,!0,n,null,i);break;case"together":Js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vx(e,t,n){switch(t.tag){case 3:af(t),dr();break;case 5:Oh(t);break;case 1:He(t.type)&&Ai(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(Li,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?lf(e,t,n):(ae(pe,pe.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,of(e,t,n)}return Ht(e,t,n)}var cf,Za,df,pf;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};df=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(It.current);var i=null;switch(n){case"input":o=ba(e,o),r=ba(e,r),i=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":o=Ea(e,o),r=Ea(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ci)}Na(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bx(e,t,n){var r=t.pendingProps;switch(Xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return He(t.type)&&Ii(),Ae(t),null;case 3:return r=t.stateNode,hr(),ce($e),ce(Re),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(al(yt),yt=null))),Za(e,t),Ae(t),null;case 5:su(t);var o=Nn(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Ae(t),null}if(e=Nn(It.current),Vo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Nt]=t,r[po]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<Br.length;o++)ue(Br[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":tc(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":rc(r,i),ue("invalid",r)}Na(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",""+a]):to.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Fo(r),nc(r,i,!0);break;case"textarea":Fo(r),oc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ci)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Nt]=t,e[po]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(s=ja(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<Br.length;o++)ue(Br[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":tc(e,r),o=ba(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),ue("invalid",e);break;case"textarea":rc(e,r),o=Ea(e,r),ue("invalid",e);break;default:o=r}Na(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?$p(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zp(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&no(e,l):typeof l=="number"&&no(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ue("scroll",e):l!=null&&Dl(e,i,l,s))}switch(n){case"input":Fo(e),nc(e,r,!1);break;case"textarea":Fo(e),oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Nn(fo.current),Nn(It.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(i=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Ze!==null&&t.mode&1&&!(t.flags&128))Ih(),dr(),t.flags|=98560,i=!1;else if(i=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Nt]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else yt!==null&&(al(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?ke===0&&(ke=3):wu())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return hr(),Za(e,t),e===null&&uo(t.stateNode.containerInfo),Ae(t),null;case 10:return nu(t.type._context),Ae(t),null;case 17:return He(t.type)&&Ii(),Ae(t),null;case 19:if(ce(pe),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Rr(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Mi(e),s!==null){for(t.flags|=128,Rr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>mr&&(t.flags|=128,r=!0,Rr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!de)return Ae(t),null}else 2*xe()-i.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function kx(e,t){switch(Xl(t),t.tag){case 1:return He(t.type)&&Ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),ce($e),ce(Re),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return su(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return hr(),null;case 10:return nu(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Qo=!1,_e=!1,Sx=typeof WeakSet=="function"?WeakSet:Set,U=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){me(e,t,r)}}var Vc=!1;function Ex(e,t){if(Da=Ti,e=gh(),Ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||o!==0&&p.nodeType!==3||(a=s+o),p!==i||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++d===r&&(l=s),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},Ti=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,v=m.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:mt(t.type,x),v);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){me(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return m=Vc,Vc=!1,m}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&el(t,n,i)}o=o.next}while(o!==r)}}function as(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[po],delete t[Ua],delete t[sx],delete t[ax])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}var Ne=null,gt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 5:_e||Kn(n,t);case 6:var r=Ne,o=gt;Ne=null,Gt(e,t,n),Ne=r,gt=o,Ne!==null&&(gt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(gt?(e=Ne,n=n.stateNode,e.nodeType===8?$s(e.parentNode,n):e.nodeType===1&&$s(e,n),so(e)):$s(Ne,n.stateNode));break;case 4:r=Ne,o=gt,Ne=n.stateNode.containerInfo,gt=!0,Gt(e,t,n),Ne=r,gt=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&el(n,t,s),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!_e&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Gt(e,t,n),_e=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sx),t.forEach(function(r){var o=Lx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,gt=!1;break e;case 3:Ne=a.stateNode.containerInfo,gt=!0;break e;case 4:Ne=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Ne===null)throw Error(L(160));mf(i,s,o),Ne=null,gt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){me(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),St(e),r&4){try{Yr(3,e,e.return),as(3,e)}catch(x){me(e,e.return,x)}try{Yr(5,e,e.return)}catch(x){me(e,e.return,x)}}break;case 1:ht(t,e),St(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(ht(t,e),St(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(x){me(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Dp(o,i),ja(a,s);var u=ja(a,i);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?$p(o,p):d==="dangerouslySetInnerHTML"?zp(o,p):d==="children"?no(o,p):Dl(o,d,p,u)}switch(a){case"input":ka(o,i);break;case"textarea":Fp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?tr(o,!!i.multiple,h,!1):f!==!!i.multiple&&(i.defaultValue!=null?tr(o,!!i.multiple,i.defaultValue,!0):tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[po]=i}catch(x){me(e,e.return,x)}}break;case 6:if(ht(t,e),St(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){me(e,e.return,x)}}break;case 3:if(ht(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(x){me(e,e.return,x)}break;case 4:ht(t,e),St(e);break;case 13:ht(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gu=xe())),r&4&&Jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||d,ht(t,e),_e=u):ht(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(U=e,d=e.child;d!==null;){for(p=U=d;U!==null;){switch(f=U,h=f.child,f.tag){case 0:case 11:case 14:case 15:Yr(4,f,f.return);break;case 1:Kn(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(x){me(r,n,x)}}break;case 5:Kn(f,f.return);break;case 22:if(f.memoizedState!==null){Kc(p);continue}}h!==null?(h.return=f,U=h):Kc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Up("display",s))}catch(x){me(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){me(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ht(t,e),St(e),r&4&&Jc(e);break;case 21:break;default:ht(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var i=Yc(e);rl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Yc(e);nl(e,a,s);break;default:throw Error(L(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tx(e,t,n){U=e,yf(e)}function yf(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Qo;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Qo;var u=_e;if(Qo=s,(_e=l)&&!u)for(U=o;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?Xc(o):l!==null?(l.return=s,U=l):Xc(o);for(;i!==null;)U=i,yf(i),i=i.sibling;U=o,Qo=a,_e=u}Qc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,U=i):Qc(e)}}function Qc(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||as(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}_e||t.flags&512&&tl(t)}catch(f){me(t,t.return,f)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Kc(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Xc(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{as(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){me(t,o,l)}}var i=t.return;try{tl(t)}catch(l){me(t,i,l)}break;case 5:var s=t.return;try{tl(t)}catch(l){me(t,s,l)}}}catch(l){me(t,t.return,l)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var Nx=Math.ceil,Bi=Wt.ReactCurrentDispatcher,fu=Wt.ReactCurrentOwner,ut=Wt.ReactCurrentBatchConfig,Z=0,Ee=null,ve=null,je=0,Ke=0,Xn=gn(0),ke=0,xo=null,Rn=0,ls=0,mu=0,Jr=null,ze=null,gu=0,mr=1/0,Ot=null,zi=!1,ol=null,ln=null,Ko=!1,Zt=null,Ui=0,Qr=0,il=null,fi=-1,mi=0;function Me(){return Z&6?xe():fi!==-1?fi:fi=xe()}function un(e){return e.mode&1?Z&2&&je!==0?je&-je:ux.transition!==null?(mi===0&&(mi=eh()),mi):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ah(e.type)),e):1}function wt(e,t,n,r){if(50<Qr)throw Qr=0,il=null,Error(L(185));No(e,n,r),(!(Z&2)||e!==Ee)&&(e===Ee&&(!(Z&2)&&(ls|=n),ke===4&&Kt(e,je)),We(e,r),n===1&&Z===0&&!(t.mode&1)&&(mr=xe()+500,os&&yn()))}function We(e,t){var n=e.callbackNode;uy(e,t);var r=Ei(e,e===Ee?je:0);if(r===0)n!==null&&ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ac(n),t===1)e.tag===0?lx(Zc.bind(null,e)):Nh(Zc.bind(null,e)),ox(function(){!(Z&6)&&yn()}),n=null;else{switch(th(r)){case 1:n=$l;break;case 4:n=Xp;break;case 16:n=Si;break;case 536870912:n=Zp;break;default:n=Si}n=Tf(n,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xf(e,t){if(fi=-1,mi=0,Z&6)throw Error(L(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Ei(e,e===Ee?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$i(e,r);else{t=r;var o=Z;Z|=2;var i=vf();(Ee!==e||je!==t)&&(Ot=null,mr=xe()+500,jn(e,t));do try{Ix();break}catch(a){wf(e,a)}while(!0);tu(),Bi.current=i,Z=o,ve!==null?t=0:(Ee=null,je=0,t=ke)}if(t!==0){if(t===2&&(o=Ra(e),o!==0&&(r=o,t=sl(e,o))),t===1)throw n=xo,jn(e,0),Kt(e,r),We(e,xe()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jx(o)&&(t=$i(e,r),t===2&&(i=Ra(e),i!==0&&(r=i,t=sl(e,i))),t===1))throw n=xo,jn(e,0),Kt(e,r),We(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:kn(e,ze,Ot);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=gu+500-xe(),10<t)){if(Ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=za(kn.bind(null,e,ze,Ot),t);break}kn(e,ze,Ot);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-xt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nx(r/1960))-r,10<r){e.timeoutHandle=za(kn.bind(null,e,ze,Ot),r);break}kn(e,ze,Ot);break;case 5:kn(e,ze,Ot);break;default:throw Error(L(329))}}}return We(e,xe()),e.callbackNode===n?xf.bind(null,e):null}function sl(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=$i(e,t),e!==2&&(t=ze,ze=n,t!==null&&al(t)),e}function al(e){ze===null?ze=e:ze.push.apply(ze,e)}function jx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~mu,t&=~ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Zc(e){if(Z&6)throw Error(L(327));sr();var t=Ei(e,0);if(!(t&1))return We(e,xe()),null;var n=$i(e,t);if(e.tag!==0&&n===2){var r=Ra(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=xo,jn(e,0),Kt(e,t),We(e,xe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,ze,Ot),We(e,xe()),null}function yu(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(mr=xe()+500,os&&yn())}}function Ln(e){Zt!==null&&Zt.tag===0&&!(Z&6)&&sr();var t=Z;Z|=1;var n=ut.transition,r=oe;try{if(ut.transition=null,oe=1,e)return e()}finally{oe=r,ut.transition=n,Z=t,!(Z&6)&&yn()}}function xu(){Ke=Xn.current,ce(Xn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rx(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ii();break;case 3:hr(),ce($e),ce(Re),au();break;case 5:su(r);break;case 4:hr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:nu(r.type._context);break;case 22:case 23:xu()}n=n.return}if(Ee=e,ve=e=cn(e.current,null),je=Ke=t,ke=0,xo=null,mu=ls=Rn=0,ze=Jr=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Tn=null}return e}function wf(e,t){do{var n=ve;try{if(tu(),di.current=Fi,Di){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Di=!1}if(_n=0,Se=be=he=null,Vr=!1,mo=0,fu.current=null,n===null||n.return===null){ke=1,xo=t,ve=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=zc(s);if(h!==null){h.flags&=-257,Uc(h,s,a,i,t),h.mode&1&&Bc(i,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var x=new Set;x.add(l),t.updateQueue=x}else m.add(l);break e}else{if(!(t&1)){Bc(i,u,t),wu();break e}l=Error(L(426))}}else if(de&&a.mode&1){var v=zc(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Uc(v,s,a,i,t),Zl(fr(l,a));break e}}i=l=fr(l,a),ke!==4&&(ke=2),Jr===null?Jr=[i]:Jr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=tf(i,l,t);Lc(i,g);break e;case 1:a=l;var y=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ln===null||!ln.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=nf(i,a,t);Lc(i,S);break e}}i=i.return}while(i!==null)}kf(n)}catch(N){t=N,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function vf(){var e=Bi.current;return Bi.current=Fi,e===null?Fi:e}function wu(){(ke===0||ke===3||ke===2)&&(ke=4),Ee===null||!(Rn&268435455)&&!(ls&268435455)||Kt(Ee,je)}function $i(e,t){var n=Z;Z|=2;var r=vf();(Ee!==e||je!==t)&&(Ot=null,jn(e,t));do try{Cx();break}catch(o){wf(e,o)}while(!0);if(tu(),Z=n,Bi.current=r,ve!==null)throw Error(L(261));return Ee=null,je=0,ke}function Cx(){for(;ve!==null;)bf(ve)}function Ix(){for(;ve!==null&&!ey();)bf(ve)}function bf(e){var t=Ef(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?kf(e):ve=t,fu.current=null}function kf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kx(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,ve=null;return}}else if(n=bx(n,t,Ke),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);ke===0&&(ke=5)}function kn(e,t,n){var r=oe,o=ut.transition;try{ut.transition=null,oe=1,Ax(e,t,n,r)}finally{ut.transition=o,oe=r}return null}function Ax(e,t,n,r){do sr();while(Zt!==null);if(Z&6)throw Error(L(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cy(e,i),e===Ee&&(ve=Ee=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,Tf(Si,function(){return sr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var s=oe;oe=1;var a=Z;Z|=4,fu.current=null,Ex(e,n),gf(n,e),Qy(Fa),Ti=!!Da,Fa=Da=null,e.current=n,Tx(n),ty(),Z=a,oe=s,ut.transition=i}else e.current=n;if(Ko&&(Ko=!1,Zt=e,Ui=o),i=e.pendingLanes,i===0&&(ln=null),oy(n.stateNode),We(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=ol,ol=null,e;return Ui&1&&e.tag!==0&&sr(),i=e.pendingLanes,i&1?e===il?Qr++:(Qr=0,il=e):Qr=0,yn(),null}function sr(){if(Zt!==null){var e=th(Ui),t=ut.transition,n=oe;try{if(ut.transition=null,oe=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Ui=0,Z&6)throw Error(L(331));var o=Z;for(Z|=4,U=e.current;U!==null;){var i=U,s=i.child;if(U.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var d=U;switch(d.tag){case 0:case 11:case 15:Yr(8,d,i)}var p=d.child;if(p!==null)p.return=d,U=p;else for(;U!==null;){d=U;var f=d.sibling,h=d.return;if(hf(d),d===u){U=null;break}if(f!==null){f.return=h,U=f;break}U=h}}}var m=i.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}U=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,U=s;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,U=g;break e}U=i.return}}var y=e.current;for(U=y;U!==null;){s=U;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,U=w;else e:for(s=y;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:as(9,a)}}catch(N){me(a,a.return,N)}if(a===s){U=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,U=S;break e}U=a.return}}if(Z=o,yn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Zi,e)}catch{}r=!0}return r}finally{oe=n,ut.transition=t}}return!1}function ed(e,t,n){t=fr(n,t),t=tf(e,t,1),e=an(e,t,1),t=Me(),e!==null&&(No(e,1,t),We(e,t))}function me(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=fr(n,e),e=nf(t,e,1),t=an(t,e,1),e=Me(),t!==null&&(No(t,1,e),We(t,e));break}}t=t.return}}function _x(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(je&n)===n&&(ke===4||ke===3&&(je&130023424)===je&&500>xe()-gu?jn(e,0):mu|=n),We(e,t)}function Sf(e,t){t===0&&(e.mode&1?(t=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):t=1);var n=Me();e=$t(e,t),e!==null&&(No(e,t,n),We(e,n))}function Rx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sf(e,n)}function Lx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Sf(e,n)}var Ef;Ef=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,vx(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,de&&t.flags&1048576&&jh(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hi(e,t),e=t.pendingProps;var o=cr(t,Re.current);ir(t,n),o=uu(null,t,r,e,o,n);var i=cu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,Ai(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ou(t),o.updater=ss,t.stateNode=o,o._reactInternals=t,Va(t,r,e,n),t=Qa(null,t,r,!0,i,n)):(t.tag=0,de&&i&&Kl(t),Pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Px(r),e=mt(r,e),o){case 0:t=Ja(null,t,r,e,n);break e;case 1:t=Wc(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=Hc(null,t,r,mt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Ja(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Wc(e,t,r,o,n);case 3:e:{if(af(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Lh(e,t),Pi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error(L(423)),t),t=qc(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(L(424)),t),t=qc(e,t,r,n,o);break e}else for(Ze=sn(t.stateNode.containerInfo.firstChild),tt=t,de=!0,yt=null,n=_h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===o){t=Ht(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Oh(t),e===null&&Wa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ba(r,o)?s=null:i!==null&&Ba(r,i)&&(t.flags|=32),sf(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&Wa(t),null;case 13:return lf(e,t,n);case 4:return iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),$c(e,t,r,o,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ae(Li,r._currentValue),r._currentValue=s,i!==null)if(vt(i.value,s)){if(i.children===o.children&&!$e.current){t=Ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),qa(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),qa(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=ct(o),r=r(o),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),Hc(e,t,r,o,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),hi(e,t),t.tag=1,He(r)?(e=!0,Ai(t)):e=!1,ir(t,n),ef(t,r,o),Va(t,r,o,n),Qa(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return of(e,t,n)}throw Error(L(156,t.tag))};function Tf(e,t){return Kp(e,t)}function Ox(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Ox(e,t,n,r)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Px(e){if(typeof e=="function")return vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===zl)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")vu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $n:return Cn(n.children,o,i,t);case Fl:s=8,o|=8;break;case ya:return e=lt(12,n,t,o|2),e.elementType=ya,e.lanes=i,e;case xa:return e=lt(13,n,t,o),e.elementType=xa,e.lanes=i,e;case wa:return e=lt(19,n,t,o),e.elementType=wa,e.lanes=i,e;case Op:return us(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rp:s=10;break e;case Lp:s=9;break e;case Bl:s=11;break e;case zl:s=14;break e;case Yt:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=lt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function us(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Op,e.lanes=n,e.stateNode={isHidden:!1},e}function Qs(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Ks(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bu(e,t,n,r,o,i,s,a,l){return e=new Mx(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(i),e}function Dx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nf(e){if(!e)return fn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(He(n))return Th(e,n,t)}return t}function jf(e,t,n,r,o,i,s,a,l){return e=bu(n,r,!0,e,o,i,s,a,l),e.context=Nf(null),n=e.current,r=Me(),o=un(n),i=Bt(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,No(e,o,r),We(e,r),e}function cs(e,t,n,r){var o=t.current,i=Me(),s=un(o);return n=Nf(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,s),e!==null&&(wt(e,o,s,i),ci(e,o,s)),s}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function Fx(){return null}var Cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Su(e){this._internalRoot=e}ds.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));cs(e,t,null,null)};ds.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){cs(null,e,null,null)}),t[Ut]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&sh(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function Bx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Hi(s);i.call(u)}}var s=jf(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=s,e[Ut]=s.current,uo(e.nodeType===8?e.parentNode:e),Ln(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Hi(l);a.call(u)}}var l=bu(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=l,e[Ut]=l.current,uo(e.nodeType===8?e.parentNode:e),Ln(function(){cs(t,l,n,r)}),l}function hs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Hi(s);a.call(l)}}cs(t,s,e,o)}else s=Bx(n,t,e,o,r);return Hi(s)}nh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Hl(t,n|1),We(t,xe()),!(Z&6)&&(mr=xe()+500,yn()))}break;case 13:Ln(function(){var r=$t(e,1);if(r!==null){var o=Me();wt(r,e,1,o)}}),ku(e,1)}};Wl=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Me();wt(t,e,134217728,n)}ku(e,134217728)}};rh=function(e){if(e.tag===13){var t=un(e),n=$t(e,t);if(n!==null){var r=Me();wt(n,e,t,r)}ku(e,t)}};oh=function(){return oe};ih=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ia=function(e,t,n){switch(t){case"input":if(ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rs(r);if(!o)throw Error(L(90));Mp(r),ka(r,o)}}}break;case"textarea":Fp(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};qp=yu;Gp=Ln;var zx={usingClientEntryPoint:!1,Events:[Co,Gn,rs,Hp,Wp,yu]},Lr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ux={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jp(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Fx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Zi=Xo.inject(Ux),Ct=Xo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(t))throw Error(L(200));return Dx(e,t,null,n)};rt.createRoot=function(e,t){if(!Eu(e))throw Error(L(299));var n=!1,r="",o=Cf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bu(e,1,!1,null,null,n,!1,r,o),e[Ut]=t.current,uo(e.nodeType===8?e.parentNode:e),new Su(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Jp(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Ln(e)};rt.hydrate=function(e,t,n){if(!ps(t))throw Error(L(200));return hs(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Eu(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Cf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jf(t,null,e,1,n??null,o,!1,i,s),e[Ut]=t.current,uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ds(t)};rt.render=function(e,t,n){if(!ps(t))throw Error(L(200));return hs(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!ps(e))throw Error(L(40));return e._reactRootContainer?(Ln(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};rt.unstable_batchedUpdates=yu;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ps(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return hs(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(e){console.error(e)}}If(),Cp.exports=rt;var $x=Cp.exports,rd=$x;ma.createRoot=rd.createRoot,ma.hydrateRoot=rd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const od="popstate";function Hx(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return ll("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Wi(o)}return qx(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wx(){return Math.random().toString(36).substr(2,8)}function id(e,t){return{usr:e.state,key:e.key,idx:t}}function ll(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vr(t):t,{state:n,key:t&&t.key||r||Wx()})}function Wi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=en.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(wo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=en.Pop;let v=d(),g=v==null?null:v-u;u=v,l&&l({action:a,location:x.location,delta:g})}function f(v,g){a=en.Push;let y=ll(x.location,v,g);u=d()+1;let w=id(y,u),S=x.createHref(y);try{s.pushState(w,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(S)}i&&l&&l({action:a,location:x.location,delta:1})}function h(v,g){a=en.Replace;let y=ll(x.location,v,g);u=d();let w=id(y,u),S=x.createHref(y);s.replaceState(w,"",S),i&&l&&l({action:a,location:x.location,delta:0})}function m(v){let g=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof v=="string"?v:Wi(v);return y=y.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let x={get action(){return a},get location(){return e(o,s)},listen(v){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(od,p),l=v,()=>{o.removeEventListener(od,p),l=null}},createHref(v){return t(o,v)},createURL:m,encodeLocation(v){let g=m(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:h,go(v){return s.go(v)}};return x}var sd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sd||(sd={}));function Gx(e,t,n){return n===void 0&&(n="/"),Vx(e,t,n)}function Vx(e,t,n,r){let o=typeof t=="string"?vr(t):t,i=gr(o.pathname||"/",n);if(i==null)return null;let s=Af(e);Yx(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=iw(i);a=rw(s[l],u)}return a}function Af(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Af(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:tw(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of _f(i.path))o(i,s,l)}),t}function _f(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=_f(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Yx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jx=/^:[\w-]+$/,Qx=3,Kx=2,Xx=1,Zx=10,ew=-2,ad=e=>e==="*";function tw(e,t){let n=e.split("/"),r=n.length;return n.some(ad)&&(r+=ew),t&&(r+=Kx),n.filter(o=>!ad(o)).reduce((o,i)=>o+(Jx.test(i)?Qx:i===""?Xx:Zx),r)}function nw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function rw(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=ul({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:dn([i,p.pathname]),pathnameBase:cw(dn([i,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(i=dn([i,p.pathnameBase]))}return s}function ul(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ow(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let x=a[p]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const m=a[p];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function ow(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function iw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aw=e=>sw.test(e);function lw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?vr(e):e,i;if(n)if(aw(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Tu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=ld(n.substring(1),"/"):i=ld(n,t)}else i=t;return{pathname:i,search:dw(r),hash:pw(o)}}function ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rf(e,t){let n=uw(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=vr(e):(o=wo({},e),ge(!o.pathname||!o.pathname.includes("?"),Xs("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),Xs("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),Xs("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;o.pathname=f.join("/")}a=p>=0?t[p]:"/"}let l=lw(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),cw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Of=["post","put","patch","delete"];new Set(Of);const fw=["get",...Of];new Set(fw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}const fs=T.createContext(null),Pf=T.createContext(null),xn=T.createContext(null),ms=T.createContext(null),qt=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Mf=T.createContext(null);function mw(e,t){let{relative:n}=t===void 0?{}:t;Ao()||ge(!1);let{basename:r,navigator:o}=T.useContext(xn),{hash:i,pathname:s,search:a}=ys(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:dn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function Ao(){return T.useContext(ms)!=null}function br(){return Ao()||ge(!1),T.useContext(ms).location}function Df(e){T.useContext(xn).static||T.useLayoutEffect(e)}function Ff(){let{isDataRoute:e}=T.useContext(qt);return e?Aw():gw()}function gw(){Ao()||ge(!1);let e=T.useContext(fs),{basename:t,future:n,navigator:r}=T.useContext(xn),{matches:o}=T.useContext(qt),{pathname:i}=br(),s=JSON.stringify(Rf(o,n.v7_relativeSplatPath)),a=T.useRef(!1);return Df(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=Lf(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:dn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,i,e])}const yw=T.createContext(null);function xw(e){let t=T.useContext(qt).outlet;return t&&T.createElement(yw.Provider,{value:e},t)}function gs(){let{matches:e}=T.useContext(qt),t=e[e.length-1];return t?t.params:{}}function ys(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(xn),{matches:o}=T.useContext(qt),{pathname:i}=br(),s=JSON.stringify(Rf(o,r.v7_relativeSplatPath));return T.useMemo(()=>Lf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function ww(e,t){return vw(e,t)}function vw(e,t,n,r){Ao()||ge(!1);let{navigator:o}=T.useContext(xn),{matches:i}=T.useContext(qt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=br(),d;if(t){var p;let v=typeof t=="string"?vr(t):t;l==="/"||(p=v.pathname)!=null&&p.startsWith(l)||ge(!1),d=v}else d=u;let f=d.pathname||"/",h=f;if(l!=="/"){let v=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let m=Gx(e,{pathname:h}),x=Tw(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:dn([l,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:dn([l,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n,r);return t&&x?T.createElement(ms.Provider,{value:{location:vo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:en.Pop}},x):x}function bw(){let e=Iw(),t=hw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:o},n):null,null)}const kw=T.createElement(bw,null);class Sw extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(qt.Provider,{value:this.props.routeContext},T.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ew(e){let{routeContext:t,match:n,children:r}=e,o=T.useContext(fs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(qt.Provider,{value:t},r)}function Tw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||ge(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,m=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,f)=>{let h,m=!1,x=null,v=null;n&&(h=a&&p.route.id?a[p.route.id]:void 0,x=p.route.errorElement||kw,l&&(u<0&&f===0?(_w("route-fallback"),m=!0,v=null):u===f&&(m=!0,v=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),y=()=>{let w;return h?w=x:m?w=v:p.route.Component?w=T.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=d,T.createElement(Ew,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(Sw,{location:n.location,revalidation:n.revalidation,component:x,error:h,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Bf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bf||{}),zf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zf||{});function Nw(e){let t=T.useContext(fs);return t||ge(!1),t}function jw(e){let t=T.useContext(Pf);return t||ge(!1),t}function Cw(e){let t=T.useContext(qt);return t||ge(!1),t}function Uf(e){let t=Cw(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function Iw(){var e;let t=T.useContext(Mf),n=jw(),r=Uf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Aw(){let{router:e}=Nw(Bf.UseNavigateStable),t=Uf(zf.UseNavigateStable),n=T.useRef(!1);return Df(()=>{n.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,vo({fromRouteId:t},i)))},[e,t])}const ud={};function _w(e,t,n){ud[e]||(ud[e]=!0)}function Rw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Lw(e){return xw(e.context)}function ft(e){ge(!1)}function Ow(e){let{basename:t="/",children:n=null,location:r,navigationType:o=en.Pop,navigator:i,static:s=!1,future:a}=e;Ao()&&ge(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:i,static:s,future:vo({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=vr(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,x=T.useMemo(()=>{let v=gr(d,l);return v==null?null:{location:{pathname:v,search:p,hash:f,state:h,key:m},navigationType:o}},[l,d,p,f,h,m,o]);return x==null?null:T.createElement(xn.Provider,{value:u},T.createElement(ms.Provider,{children:n,value:x}))}function Pw(e){let{children:t,location:n}=e;return ww(cl(t),n)}new Promise(()=>{});function cl(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,o)=>{if(!T.isValidElement(r))return;let i=[...t,o];if(r.type===T.Fragment){n.push.apply(n,cl(r.props.children,i));return}r.type!==ft&&ge(!1),!r.props.index||!r.props.children||ge(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=cl(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}function $f(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Mw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dw(e,t){return e.button===0&&(!t||t==="_self")&&!Mw(e)}const Fw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zw="6";try{window.__reactRouterVersion=zw}catch{}const Uw=T.createContext({isTransitioning:!1}),$w="startTransition",cd=_g[$w];function Hw(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=Hx({window:o,v5Compat:!0}));let s=i.current,[a,l]=T.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=T.useCallback(p=>{u&&cd?cd(()=>l(p)):l(p)},[l,u]);return T.useLayoutEffect(()=>s.listen(d),[s,d]),T.useEffect(()=>Rw(r),[r]),T.createElement(Ow,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ww=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=T.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=$f(t,Fw),{basename:h}=T.useContext(xn),m,x=!1;if(typeof u=="string"&&qw.test(u)&&(m=u,Ww))try{let w=new URL(window.location.href),S=u.startsWith("//")?new URL(w.protocol+u):new URL(u),N=gr(S.pathname,h);S.origin===w.origin&&N!=null?u=N+S.search+S.hash:x=!0}catch{}let v=mw(u,{relative:o}),g=Vw(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,viewTransition:p});function y(w){r&&r(w),w.defaultPrevented||g(w)}return T.createElement("a",qi({},f,{href:m||v,onClick:x||i?r:y,ref:n,target:l}))}),dl=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,viewTransition:u,children:d}=t,p=$f(t,Bw),f=ys(l,{relative:p.relative}),h=br(),m=T.useContext(Pf),{navigator:x,basename:v}=T.useContext(xn),g=m!=null&&Yw(f)&&u===!0,y=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,w=h.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(w=w.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&v&&(S=gr(S,v)||S);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let E=w===y||!s&&w.startsWith(y)&&w.charAt(N)==="/",j=S!=null&&(S===y||!s&&S.startsWith(y)&&S.charAt(y.length)==="/"),_={isActive:E,isPending:j,isTransitioning:g},M=E?r:void 0,A;typeof i=="function"?A=i(_):A=[i,E?"active":null,j?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(_):a;return T.createElement(re,qi({},p,{"aria-current":M,className:A,ref:n,style:D,to:l,viewTransition:u}),typeof d=="function"?d(_):d)});var pl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pl||(pl={}));var dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dd||(dd={}));function Gw(e){let t=T.useContext(fs);return t||ge(!1),t}function Vw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=Ff(),u=br(),d=ys(e,{relative:s});return T.useCallback(p=>{if(Dw(p,n)){p.preventDefault();let f=r!==void 0?r:Wi(u)===Wi(d);l(e,{replace:f,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,d,r,o,n,e,i,s,a])}function Yw(e,t){t===void 0&&(t={});let n=T.useContext(Uw);n==null&&ge(!1);let{basename:r}=Gw(pl.useViewTransitionState),o=ys(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ul(o.pathname,s)!=null||ul(o.pathname,i)!=null}const Jw=6e4;function Qw(){const[e,t]=T.useState(!1),[n,r]=T.useState(null);return T.useEffect(()=>{let o=!1;const i="/ship-it/index.html",s=async()=>{try{const l=await fetch(i,{method:"HEAD",cache:"no-store"});return l.headers.get("etag")??l.headers.get("last-modified")}catch{return null}};s().then(l=>{o||r(l)});const a=window.setInterval(async()=>{const l=await s();!o&&l&&n&&l!==n&&t(!0)},Jw);return()=>{o=!0,window.clearInterval(a)}},[n]),e?c.jsxs("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-40 card px-4 py-3 shadow-xl flex items-center gap-3",children:[c.jsx("span",{className:"text-sm text-ink-200",children:"A new version of Ship It is available."}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>window.location.reload(),children:"Reload"})]}):null}/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=e=>{const t=Xw(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},ev=T.createContext({}),tv=()=>T.useContext(ev),nv=T.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},l)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:h=""}=tv()??{},m=r??p?Number(n??d)*24/Number(t??u):n??d;return T.createElement("svg",{ref:l,...Zs,width:t??u??Zs.width,height:t??u??Zs.height,stroke:e??f,strokeWidth:m,className:Hf("lucide",h,o),...!i&&!Zw(a)&&{"aria-hidden":"true"},...a},[...s.map(([x,v])=>T.createElement(x,v)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=(e,t)=>{const n=T.forwardRef(({className:r,...o},i)=>T.createElement(nv,{ref:i,iconNode:t,className:Hf(`lucide-${Kw(pd(e))}`,`lucide-${e}`,r),...o}));return n.displayName=pd(e),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ov=Te("arrow-left",rv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ea=Te("arrow-right",iv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],av=Te("book-open",sv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],uv=Te("check",lv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dv=Te("circle-check",cv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],hl=Te("clock",pv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gi=Te("download",hv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],fl=Te("graduation-cap",fv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],Vi=Te("hammer",mv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],yv=Te("history",gv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],wv=Te("house",xv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bv=Te("lock",vv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ml=Te("play",kv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ev=Te("plus",Sv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Nv=Te("settings",Tv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],Cv=Te("share",jv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wf=Te("x",Iv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],gl=Te("zap",Av),_v=[{to:"/",label:"Home",icon:c.jsx(wv,{size:20}),end:!0},{to:"/curriculum",label:"Learn",icon:c.jsx(fl,{size:20}),match:e=>e.startsWith("/curriculum")||e.startsWith("/module")||e.startsWith("/lesson")},{to:"/gauntlet",label:"Gauntlet",icon:c.jsx(gl,{size:20})},{to:"/settings",label:"Settings",icon:c.jsx(Nv,{size:20})}];function Rv(){return c.jsx("nav",{"aria-label":"Primary navigation",className:"sm:hidden fixed inset-x-0 bottom-0 z-40 flex border-t border-ink-700 bg-ink-900/95 backdrop-blur supports-[backdrop-filter]:bg-ink-900/80 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_12px_rgba(0,0,0,0.3)]",children:_v.map(e=>c.jsxs(dl,{to:e.to,end:e.end,className:({isActive:t})=>{const n=window.location.hash.replace(/^#/,"")||window.location.pathname,r=e.match?e.match(n):!1;return`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition-colors ${t||r?"text-accent-strong":"text-ink-400 hover:text-ink-200"}`},children:[e.icon,c.jsx("span",{children:e.label})]},e.to))})}const qf="ship-it:install-dismissed-at",Lv=7;function Gf(){return typeof window>"u"?!1:window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function Vf(){if(typeof navigator>"u")return!1;const e=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(e)&&!/crios|fxios|edgios/.test(e)}function Ov(){try{const e=window.localStorage.getItem(qf);if(!e)return!1;const t=Number(e);return Number.isNaN(t)?!1:Date.now()-t<Lv*24*60*60*1e3}catch{return!1}}function Yf({variant:e="banner"}){const[t,n]=T.useState(()=>!!window.deferredInstallPrompt),[r,o]=T.useState(!1),[i,s]=T.useState(!1),[a,l]=T.useState(!1);T.useEffect(()=>{o(Gf()),s(Ov());const h=()=>n(!0),m=()=>{o(!0),n(!1)};return window.addEventListener("pwa-installable",h),window.addEventListener("pwa-installed",m),()=>{window.removeEventListener("pwa-installable",h),window.removeEventListener("pwa-installed",m)}},[]);const u=Vf(),d=t||u,p=async()=>{if(t){const h=window.deferredInstallPrompt;if(!h)return;try{await h.prompt(),(await h.userChoice).outcome==="accepted"?o(!0):f()}finally{window.deferredInstallPrompt=void 0,n(!1)}return}u&&l(!0)},f=()=>{try{window.localStorage.setItem(qf,String(Date.now()))}catch{}s(!0)};return r?null:e==="inline"?d?c.jsxs("div",{className:"card p-4 sm:p-5 space-y-3",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"text-base font-semibold text-ink-100 flex items-center gap-2",children:[c.jsx(Gi,{size:16,className:"text-accent-strong"})," Install Ship It as an app"]}),c.jsx("div",{className:"text-sm text-ink-300 mt-1",children:"Add Ship It to your home screen so it opens in its own window — no Chrome chrome, no tab."})]}),c.jsx("button",{type:"button",className:"btn-primary",onClick:p,children:u&&!t?"How to install on iOS":"Install Ship It"}),c.jsx(yl,{open:a&&u,onClose:()=>l(!1)})]}):c.jsxs("div",{className:"card p-4 sm:p-5 space-y-2",children:[c.jsx("div",{className:"text-base font-semibold text-ink-100",children:"Install Ship It"}),c.jsx("div",{className:"text-sm text-ink-300",children:"Install isn't available on this browser yet. Try Chrome on Android, Edge on desktop, or Safari on iOS."})]}):i||!d?null:c.jsxs("div",{className:"fixed bottom-[72px] sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-40 sm:max-w-sm card border-accent/40 bg-ink-800/95 backdrop-blur p-3 sm:p-4 shadow-2xl animate-slide-up",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-strong text-ink-900 text-base font-bold",children:"S"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"text-sm font-semibold text-ink-100",children:"Install Ship It"}),c.jsx("div",{className:"text-xs text-ink-300",children:"Add it to your home screen — opens like a real app."})]}),c.jsx("button",{type:"button",onClick:f,className:"shrink-0 text-ink-400 hover:text-ink-100 p-1 -m-1","aria-label":"Dismiss install prompt",children:c.jsx(Wf,{size:16})})]}),c.jsx("div",{className:"mt-3 flex gap-2",children:c.jsxs("button",{type:"button",className:"btn-primary flex-1",onClick:p,children:[c.jsx(Gi,{size:14})," ",u&&!t?"How to install":"Install"]})}),c.jsx(yl,{open:a&&u,onClose:()=>l(!1)})]})}function Pv(){const[e,t]=T.useState(()=>!!window.deferredInstallPrompt),[n,r]=T.useState(!1),[o,i]=T.useState(!1);if(T.useEffect(()=>{r(Gf());const l=()=>t(!0),u=()=>{r(!0),t(!1)};return window.addEventListener("pwa-installable",l),window.addEventListener("pwa-installed",u),()=>{window.removeEventListener("pwa-installable",l),window.removeEventListener("pwa-installed",u)}},[]),n)return null;const s=Vf();if(!e&&!s)return null;const a=async()=>{if(e){const l=window.deferredInstallPrompt;if(!l)return;try{await l.prompt(),await l.userChoice}finally{window.deferredInstallPrompt=void 0,t(!1)}return}s&&i(!0)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 rounded-lg bg-accent-strong px-2.5 py-1.5 text-xs font-bold text-ink-900 hover:bg-accent transition-colors","aria-label":"Install Ship It",children:[c.jsx(Gi,{size:14}),c.jsx("span",{className:"hidden sm:inline",children:"Install"})]}),c.jsx(yl,{open:o&&s,onClose:()=>i(!1)})]})}function yl({open:e,onClose:t}){return e?c.jsx("div",{className:"fixed inset-0 z-[80] flex items-end justify-center bg-ink-900/70 p-4 sm:items-center animate-fade-in",children:c.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-ink-800 border border-ink-600 p-5 shadow-2xl animate-slide-up",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-accent-strong text-ink-900",children:c.jsx(Gi,{size:18})}),c.jsx("h2",{className:"flex-1 text-sm font-bold text-ink-100",children:"Install on iPhone or iPad"}),c.jsx("button",{onClick:t,className:"rounded-lg p-1.5 text-ink-400 hover:bg-ink-700","aria-label":"Close",children:c.jsx(Wf,{size:18})})]}),c.jsxs("ol",{className:"mt-3 space-y-2.5 text-sm text-ink-300",children:[c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200",children:"1"}),"Tap ",c.jsx(Cv,{size:15,className:"inline text-accent-strong"})," ",c.jsx("b",{className:"text-ink-100",children:"Share"})," in Safari's toolbar."]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200",children:"2"}),"Scroll down → ",c.jsx(Ev,{size:15,className:"inline text-accent-strong"})," ",c.jsx("b",{className:"text-ink-100",children:"Add to Home Screen"}),"."]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200",children:"3"}),"Tap ",c.jsx("b",{className:"text-ink-100",children:"Add"})," — Ship It appears on your home screen."]})]}),c.jsx("div",{className:"text-[11px] text-ink-400 mt-3",children:"Doesn't appear? Make sure you're in Safari, not Chrome — Apple restricts install on third-party iOS browsers."})]})}):null}function Mv({children:e}){const t=br(),n=T.useRef(null);return T.useEffect(()=>{const r=n.current;r&&(r.classList.remove("page-enter"),r.offsetWidth,r.classList.add("page-enter"))},[t.pathname]),c.jsx("div",{ref:n,className:"page-enter",children:e})}const Dv="1.3.0",Fv=[{to:"/",label:"Home"},{to:"/curriculum",label:"Learn"},{to:"/gauntlet",label:"Gauntlet"},{to:"/settings",label:"Settings"}];function Bv(){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsx("header",{className:"sticky top-0 z-30 border-b border-ink-700 bg-ink-900/85 backdrop-blur supports-[backdrop-filter]:bg-ink-900/70",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-6 h-14 flex items-center gap-3 sm:gap-6",children:[c.jsxs(dl,{to:"/",className:"flex items-center gap-2 font-semibold",children:[c.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent-strong text-ink-900 text-sm",children:"S"}),c.jsx("span",{className:"text-ink-100",children:"Ship It"}),c.jsx("span",{className:"hidden md:inline text-xs text-ink-300",children:"— drill, build, ship."})]}),c.jsx("nav",{className:"ml-auto hidden sm:flex items-center gap-1",children:Fv.map(e=>c.jsx(dl,{to:e.to,end:e.to==="/",className:({isActive:t})=>`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${t?"bg-ink-700 text-ink-100":"text-ink-300 hover:text-ink-100 hover:bg-ink-800"}`,children:e.label},e.to))}),c.jsx("div",{className:"ml-auto sm:ml-2 flex items-center gap-2",children:c.jsx(Pv,{})})]})}),c.jsx("main",{className:"flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-5 sm:py-8 pb-24 sm:pb-8",children:c.jsx(Mv,{children:c.jsx(Lw,{})})}),c.jsxs("footer",{className:"hidden sm:block border-t border-ink-700 py-4 text-center text-xs text-ink-400 px-3",children:["Ship It v",Dv," · personal training tool · localStorage only"]}),c.jsx(Rv,{}),c.jsx(Qw,{}),c.jsx(Yf,{variant:"banner"})]})}const Nu="ship-it:progress:v1";function Zn(){return{lessonsCompleted:{},blocksCompleted:{},quizScores:{},gauntletSolved:{},buildAlongsStarted:{},settings:{},schemaVersion:1}}function hd(){if(typeof window>"u")return Zn();try{const e=window.localStorage.getItem(Nu);if(!e)return Zn();const t=JSON.parse(e);return t.schemaVersion!==1?Uv(t):{...Zn(),...t,schemaVersion:1}}catch(e){return console.warn("[ship-it] progress read failed, resetting",e),Zn()}}function zv(e){if(!(typeof window>"u"))try{window.localStorage.setItem(Nu,JSON.stringify(e))}catch(t){console.warn("[ship-it] progress write failed",t)}}function Uv(e){return{...Zn(),...e,schemaVersion:1}}function Ge(){const[e,t]=T.useState(()=>Zn());T.useEffect(()=>{t(hd());const u=d=>{d.key===Nu&&t(hd())};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)},[]);const n=T.useCallback(u=>{t(d=>{const p=u(d);return zv(p),p})},[]),r=T.useCallback(u=>{n(d=>({...d,lessonsCompleted:{...d.lessonsCompleted,[u]:{completedAt:new Date().toISOString()}}}))},[n]),o=T.useCallback((u,d)=>{n(p=>{var f;return{...p,blocksCompleted:{...p.blocksCompleted,[u]:{completedAt:new Date().toISOString(),attempts:d??((f=p.blocksCompleted[u])==null?void 0:f.attempts)}}}})},[n]),i=T.useCallback((u,d,p)=>{n(f=>({...f,quizScores:{...f.quizScores,[u]:{score:d,total:p,takenAt:new Date().toISOString()}}}))},[n]),s=T.useCallback((u,d)=>{n(p=>({...p,gauntletSolved:{...p.gauntletSolved,[u]:{solvedAt:new Date().toISOString(),attempts:d}}}))},[n]),a=T.useCallback(u=>{n(d=>({...d,settings:{...d.settings,...u}}))},[n]),l=T.useCallback(u=>{n(d=>d.buildAlongsStarted[u]?d:{...d,buildAlongsStarted:{...d.buildAlongsStarted,[u]:{startedAt:new Date().toISOString()}}})},[n]);return{progress:e,update:n,markLessonComplete:r,markBlockComplete:o,recordQuiz:i,markGauntletSolved:s,setSettings:a,startBuildAlong:l}}const $v={id:"m1-l1-what-is-a-program",moduleId:"runtime",title:"What is a program?",objective:"Be able to say in one sentence what a program is and what it isn't.",estimatedMinutes:5,blocks:[{type:"explain",id:"m1-l1-e1",listen:!0,markdown:`## A program is text the computer follows

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
console.log('three');`,question:"When you run this program, what does the console show?",options:["one two three (all on one line)","one\\ntwo\\nthree (three separate lines, in that order)","three\\ntwo\\none (last line first)","Nothing — console.log is just a comment"],answerIndex:1,explanation:"Programs run top to bottom. Each `console.log` prints its own line in the order it appears."}]},Hv={id:"m1-l2-files-processes-memory",moduleId:"runtime",title:"Files, processes, and memory",objective:"Build the mental picture of what happens between double-click and screen.",estimatedMinutes:6,blocks:[{type:"explain",id:"m1-l2-e1",listen:!0,markdown:`## What happens when you "run" something

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
console.log(counter);`,question:"You open Tab B in the same browser and run the exact same code. Does Tab B's counter start at 0 or at the value Tab A reached?",options:["Tab B starts where Tab A left off","Tab B starts at 0 — separate processes have separate memory","Tab B sees Tab A's value but can't change it","It depends on the browser"],answerIndex:1,explanation:"Each tab is its own process with its own memory. Variables in one tab don't exist in another."}]},Wv={id:"m1-l3-browser-is-a-runtime",moduleId:"runtime",title:"The browser is a runtime",objective:'Understand what "runtime" means and why the browser is one.',estimatedMinutes:6,blocks:[{type:"explain",id:"m1-l3-e1",listen:!0,markdown:`## What's a runtime?

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
</html>`,question:"When the browser opens this HTML file, when does the `console.log` run?",options:["Immediately, before the page renders","When the browser reaches the <script> tag — after the <h1> is parsed","Only when the user clicks somewhere","It never runs — <script> in <body> is invalid"],answerIndex:1,explanation:"The browser parses HTML top to bottom. When it hits the <script> tag, it executes the JavaScript inside, then continues."}]},qv={id:"m1-l4-node-is-a-runtime",moduleId:"runtime",title:"Node is also a runtime",objective:"Install Node and run JavaScript from the terminal.",estimatedMinutes:8,blocks:[{type:"explain",id:"m1-l4-e1",listen:!0,markdown:`## Node.js — JavaScript outside the browser

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

When we get to Module 6 and 7, we'll write real Node servers.`}]},Gv={id:"m1-l5-source-to-execution",moduleId:"runtime",title:"From source code to execution",objective:"See what the runtime actually does with your text, then run your first program.",estimatedMinutes:8,blocks:[{type:"explain",id:"m1-l5-e1",listen:!0,markdown:`## Source → action

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
functions, the building blocks you'll use every day.`}]},Vv=[$v,Hv,Wv,qv,Gv],Yv={id:"m2-l1-variables-and-types",moduleId:"javascript",title:"Variables and types",objective:"Declare variables with let and const, and name the basic types.",estimatedMinutes:7,blocks:[{type:"explain",id:"m2-l1-e1",listen:!0,markdown:"## A variable is a labelled box\n\nYou put a value in. You read the value out by name.\n\n```js\nlet age = 27;\nconsole.log(age);\n```\n\nThat's it. `let` is the keyword that creates the box. `age` is the\nlabel. `27` is the value. From now on, `age` means `27` in this\nprogram — until you assign a new value.\n\n```js\nlet age = 27;\nage = 28;\nconsole.log(age); // 28\n```"},{type:"explain",id:"m2-l1-e2",listen:!0,markdown:"### let vs const\n\nThere are two ways to declare a variable:\n\n- `let` — you can change the value later.\n- `const` — you can't. Trying to reassign a `const` is an error.\n\nDefault to `const`. Use `let` only when you actually need to change\nthe value. Smaller surface for bugs.\n\n```js\nconst name = 'Gabs';\n// name = 'Other';  // <- TypeError: Assignment to constant variable\n```"},{type:"explain",id:"m2-l1-e3",listen:!0,markdown:"### The basic types\n\nEvery value in JS has a type. The five you'll use constantly:\n\n- **number** — `27`, `3.14`, `-5`.\n- **string** — text in quotes, `'hello'` or `\"hello\"`. Both work.\n- **boolean** — `true` or `false`. Nothing else.\n- **null** — the explicit \"nothing here.\" You set it yourself.\n- **undefined** — \"this was never set.\" The runtime sets this for you.\n\nTwo more you'll see soon: **array** (`[1, 2, 3]`) and **object**\n(`{ name: 'Gabs' }`). We'll cover those properly later in the module."},{type:"typealong",id:"m2-l1-ta1",language:"js",instructions:"Retype the snippet exactly. The point isn't cleverness — it's muscle memory for the syntax.",code:`const name = 'Gabs';
let age = 27;
const isLearning = true;

console.log(name);
console.log(age);
console.log(isLearning);`},{type:"codechallenge",id:"m2-l1-cc1",spec:"Declare a const called `city` with the value `Accra`, then log it. Output should be exactly:\n\nAccra",starterCode:`// declare a const called city with the value 'Accra'
// then console.log it
`,expectedConsoleOutput:"Accra"}],quiz:[{id:"m2-l1-q1",prompt:"Which line is illegal?",options:["let n = 5;","const PI = 3.14;",'const greeting = "hi"; greeting = "hello";',"let count = 0; count = count + 1;"],answerIndex:2,explanation:"You can't reassign a const. Use let if you need to change the value later."},{id:"m2-l1-q2",prompt:"What is the type of the value `true`?",options:["string","boolean","number","null"],answerIndex:1}]},Jv={id:"m2-l2-operators-and-control-flow",moduleId:"javascript",title:"Operators and control flow",objective:"Do arithmetic, compare values, branch with if/else.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l2-e1",listen:!0,markdown:`## Operators — symbols that do work

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

These are the same symbols you'll use in every conditional from here on.`}]},Qv={id:"m2-l3-functions",moduleId:"javascript",title:"Functions",objective:"Define and call functions. Pass arguments. Return values.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l3-e1",listen:!0,markdown:`## A function is a named set of steps

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
false`}]},Kv={id:"m2-l4-arrays",moduleId:"javascript",title:"Arrays",objective:"Create arrays, access by index, add and remove items, get the length.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l4-e1",listen:!0,markdown:"## An array is an ordered list\n\n```js\nconst fruits = ['apple', 'banana', 'cherry'];\n```\n\nThree values, kept in order. You read them by their **index** — a\nnumber starting at `0`, not `1`:\n\n```js\nfruits[0];  // 'apple'\nfruits[1];  // 'banana'\nfruits[2];  // 'cherry'\nfruits[3];  // undefined  (nothing at that index)\n```\n\nYou can find out how many items an array has with `.length`:\n\n```js\nfruits.length;  // 3\n```\n\nThe last index is always `length - 1`. That's why so many beginner\nbugs are off-by-one errors — you'll see them in the Gauntlet."},{type:"explain",id:"m2-l4-e2",listen:!0,markdown:`### Adding and removing items

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
`,expectedConsoleOutput:"apple cherry"}]},Xv={id:"m2-l5-objects",moduleId:"javascript",title:"Objects",objective:"Create objects, read and write properties, nest them.",estimatedMinutes:9,blocks:[{type:"explain",id:"m2-l5-e1",listen:!0,markdown:`## An object is a bag of named values

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
`,expectedConsoleOutput:"Kumasi"}]},Zv={id:"m2-l6-loops",moduleId:"javascript",title:"Loops and iteration",objective:"Repeat work without copy-paste. Walk over arrays.",estimatedMinutes:10,blocks:[{type:"explain",id:"m2-l6-e1",listen:!0,markdown:`## The for loop

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
`,expectedConsoleOutput:"14"}]},eb={id:"m2-l7-common-bugs",moduleId:"javascript",title:"Common bugs",objective:"See the five mistakes you'll make a thousand times — and fix them.",estimatedMinutes:12,blocks:[{type:"explain",id:"m2-l7-e1",listen:!0,markdown:`## Pattern recognition is the whole game

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
28`,hint:"JavaScript property names are case-sensitive. `user.Age` is a different property from `user.age`."}]},tb={id:"m2-l8-review-quiz",moduleId:"javascript",title:"Module 2 review",objective:"Self-check on everything from variables through loops.",estimatedMinutes:8,blocks:[{type:"explain",id:"m2-l8-e1",listen:!0,markdown:`## You've finished the language module

Ten questions on what you just learned. Variables, types, operators,
control flow, functions, arrays, objects, loops, common bugs.

Don't worry about the score on the first pass — if you get six or
seven right, the module did its job. The rest will land when you
write code that uses them.`}],quiz:[{id:"m2-l8-q1",prompt:"Which keyword would you use for a variable whose value will never change?",options:["var","let","const","final"],answerIndex:2,explanation:"const for values that won't be reassigned. let when you actually need to change them. var is the old keyword — skip it."},{id:"m2-l8-q2",prompt:"What is the type of the value `null`?",options:["undefined","object (a historical quirk)","null","boolean"],answerIndex:1,explanation:'`typeof null` returns `"object"` — a famous JS mistake from 1995 that\'s still around.'},{id:"m2-l8-q3",prompt:"Which operator should you almost always use to compare two values?",options:["==","===","is","eq"],answerIndex:1,explanation:"`===` checks value and type. `==` does loose comparison with surprise type coercion — skip it."},{id:"m2-l8-q4",prompt:"What does `arr.length` return for `const arr = [10, 20, 30]`?",options:["2","3","30","[10, 20, 30]"],answerIndex:1},{id:"m2-l8-q5",prompt:"What's the last valid index of an array of length N?",options:["N","N + 1","N - 1","0"],answerIndex:2,explanation:"Arrays are zero-indexed. Length 3 means indexes 0, 1, 2."},{id:"m2-l8-q6",prompt:"A function with no `return` statement returns what?",options:["null","0","undefined","It throws an error"],answerIndex:2},{id:"m2-l8-q7",prompt:"Which loop is best when you want to walk every element of an array without managing an index?",options:["for (let i = 0; i < arr.length; i++)","while","for...of","do...while"],answerIndex:2},{id:"m2-l8-q8",prompt:'Given `const user = { name: "Gabs", age: 28 }`, what does `user["name"]` return?',options:['"Gabs"',"undefined","It throws — bracket notation needs a number","Gabs (without quotes)"],answerIndex:0,explanation:'Bracket notation works with string keys, just like dot notation. The return value is the string "Gabs".'},{id:"m2-l8-q9",prompt:"Why is `for (let i = 0; i <= arr.length; i++)` almost always a bug?",options:["It's slower","The last iteration accesses arr[length], which is undefined","It only works on numbers","It runs the loop in reverse"],answerIndex:1,explanation:"The off-by-one. Use `<` not `<=`."},{id:"m2-l8-q10",prompt:"Which expression evaluates to `true`?",options:['5 === "5"',"0 === false",'"abc".length === 3',"undefined === null"],answerIndex:2,explanation:'`===` requires same type and same value. The string "abc" has length 3, and 3 === 3.'}]},nb=[Yv,Jv,Qv,Kv,Xv,Zv,eb,tb],rb={id:"m3-l1-why-the-terminal",moduleId:"terminal",title:"Why the terminal",objective:"Open a terminal and understand what the prompt is telling you.",estimatedMinutes:6,blocks:[{type:"explain",id:"m3-l1-e1",listen:!0,markdown:`## The terminal is a typing interface for your computer

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

(pwd = "print working directory")`},{type:"command",id:"m3-l1-c2",label:"See who you are",command:"whoami",expectedOutput:"Your username — e.g.: ntako"}]},ob={id:"m3-l2-navigating",moduleId:"terminal",title:"Navigating the filesystem",objective:"Move between folders with cd, list contents with ls.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l2-e1",listen:!0,markdown:`## Your computer is a tree of folders

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

You will save hours of your life by using Tab instead of typing full paths.`},{type:"command",id:"m3-l2-c3",label:"Go back to your home folder",command:"cd ~",expectedOutput:"No output — pwd will now show your home directory."}]},ib={id:"m3-l3-creating-files",moduleId:"terminal",title:"Creating files and folders",objective:"Make a folder, create a file inside it, view its contents.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l3-e1",listen:!0,markdown:`## Four commands that do everything

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
happens. Then never run it.)`}]},sb={id:"m3-l4-pipes-and-redirects",moduleId:"terminal",title:"Pipes and redirects",objective:"Chain commands together. Save output to files.",estimatedMinutes:6,blocks:[{type:"explain",id:"m3-l4-e1",listen:!0,markdown:`## Pipes — feeding one command's output into another

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

Clean up after with: rm files.txt`}]},ab={id:"m3-l5-env-vars-and-path",moduleId:"terminal",title:"Environment variables and PATH",objective:"Understand what env vars are and why PATH matters.",estimatedMinutes:7,blocks:[{type:"explain",id:"m3-l5-e1",listen:!0,markdown:"## Env vars — settings the shell carries around\n\nAn **environment variable** is a named value the shell remembers. Every\nprocess you start inherits those values.\n\nYou'll meet a few specific ones constantly:\n\n- `PATH` — folders the shell searches when you type a command.\n- `HOME` — your home folder.\n- `USER` — your username.\n\nRead one with `echo $NAME`:\n\n```\necho $HOME\n```\n\nIn PowerShell the syntax is `$env:HOME` or `$env:USERPROFILE`."},{type:"command",id:"m3-l5-c1",label:"Show your HOME path",command:"echo $HOME",expectedOutput:`Something like: /c/Users/ntako

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

PowerShell: (Get-Command node).Source`}]},lb={id:"m3-l6-survival-cheatsheet",moduleId:"terminal",title:"Survival cheatsheet",objective:"Memorise the 20 commands that cover 95% of daily terminal work.",estimatedMinutes:5,blocks:[{type:"explain",id:"m3-l6-e1",listen:!0,markdown:'## The 20 that matter\n\nYou don\'t need to memorise hundreds of commands. These twenty get you\nthrough nearly everything.\n\n### Navigation\n- `pwd` — print current directory.\n- `ls` — list files. `ls -la` = detailed + hidden.\n- `cd <dir>` — change directory. `cd ..` = up. `cd ~` = home. `cd -` = back to previous.\n\n### Files & folders\n- `mkdir <name>` — make folder. `mkdir -p a/b/c` = make nested.\n- `touch <name>` — create empty file (Mac/Linux/Git Bash).\n- `cp <src> <dest>` — copy.\n- `mv <src> <dest>` — move or rename.\n- `rm <file>` — delete file. `rm -r <folder>` = delete folder.\n\n### Reading\n- `cat <file>` — print file.\n- `head -20 <file>` — first 20 lines.\n- `tail -20 <file>` — last 20 lines. `tail -f` = follow as it grows.\n\n### Searching\n- `grep "pattern" <file>` — find lines matching.\n- `grep -r "pattern" .` — search recursively in current folder.\n\n### Plumbing\n- `|` pipe one command into another.\n- `>` write to file. `>>` append.\n- `&&` chain — only run the next if the previous succeeds.\n- `Ctrl+C` — stop the currently running command.\n- `Ctrl+L` — clear the screen.\n- `Tab` — autocomplete.'},{type:"explain",id:"m3-l6-e2",listen:!0,markdown:`## Two patterns to drill until they're reflex

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
terminal isn't trying to trick you. It's the bluntest tool in the box.`},{type:"command",id:"m3-l6-c1",label:"Print Ship It's starting incantation",command:"pwd && ls && whoami",expectedOutput:"Three sections of output, one per command. && only runs the next command if the previous succeeded."}]},ub=[rb,ob,ib,sb,ab,lb],cb={id:"m4-l1-what-is-git",moduleId:"git-github",title:"What Git is (and isn't)",objective:"Build a clear mental model of Git before touching the commands.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l1-e1",listen:!0,markdown:`## Git is a time machine for your code

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
# what happened to B.js?`,question:"What state is B.js in after these commands?",options:["Committed too — `git commit -m` commits everything","Still in the working directory, not staged, not committed","Staged but not committed","Deleted"],answerIndex:1,explanation:"Only files passed to `git add` get staged. The commit only includes staged changes. B.js is still sitting modified in the working directory."}]},db={id:"m4-l2-installing-git",moduleId:"git-github",title:"Installing Git and configuring identity",objective:"Have Git installed, your name and email set, ready to commit.",estimatedMinutes:5,blocks:[{type:"explain",id:"m4-l2-e1",listen:!0,markdown:`## Install Git, then tell it who you are

Git is one download. On Windows, Git for Windows includes "Git Bash" —
a Unix-style terminal that's better than CMD for everything in this app.

- **Windows** — go to git-scm.com, download, install with default
  options. Reopen your terminal afterwards.
- **Mac** — usually pre-installed. Open Terminal and run \`git --version\`.
  If missing, you'll be prompted to install Xcode command-line tools.
- **Linux** — \`sudo apt install git\` (Debian/Ubuntu) or your package
  manager's equivalent.

Then set two values so your commits know who made them:`},{type:"command",id:"m4-l2-c1",label:"Check Git is installed",command:"git --version",expectedOutput:"Something like: git version 2.52.0"},{type:"command",id:"m4-l2-c2",label:"Set your name (used on every commit)",command:'git config --global user.name "Your Name"',expectedOutput:'No output. Replace "Your Name" with your actual name.'},{type:"command",id:"m4-l2-c3",label:"Set your email (matches your GitHub account)",command:'git config --global user.email "you@example.com"',expectedOutput:"No output. Use the same email you'll use on GitHub so commits show up linked to your profile."},{type:"command",id:"m4-l2-c4",label:"Confirm the config",command:"git config --global --list",expectedOutput:`A list including user.name=... and user.email=...

This is stored in ~/.gitconfig.`}]},pb={id:"m4-l3-init-add-commit",moduleId:"git-github",title:"init, add, commit — the core loop",objective:"Turn any folder into a Git repo and make your first commit.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l3-e1",listen:!0,markdown:"## Three commands. Memorise them.\n\n`git init` — turn the current folder into a Git repository. Creates a\nhidden `.git` folder where all history is stored.\n\n`git add <file>` — stage a file for the next commit. `git add .`\nstages everything that changed.\n\n`git commit -m \"message\"` — take a snapshot of the staged files with\na message describing what changed.\n\nThat's the loop. You'll run `add` and `commit` hundreds of times\nper project."},{type:"command",id:"m4-l3-c1",label:"Make and enter a practice folder",command:"mkdir git-practice && cd git-practice",expectedOutput:"No output. pwd should show you're inside git-practice."},{type:"command",id:"m4-l3-c2",label:"Turn it into a Git repo",command:"git init",expectedOutput:`Initialized empty Git repository in <path>/git-practice/.git/

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
paragraph below.`}]},hb={id:"m4-l4-status-and-log",moduleId:"git-github",title:"status and log — your two reality checks",objective:"Always know what changed and what's already saved.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l4-e1",listen:!0,markdown:`## Run \`git status\` constantly

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

For staged changes use: git diff --staged`}]},fb={id:"m4-l5-branching",moduleId:"git-github",title:"Branches — parallel timelines",objective:"Create a branch, switch between branches, see what branch you're on.",estimatedMinutes:7,blocks:[{type:"explain",id:"m4-l5-e1",listen:!0,markdown:"## A branch is a moveable label\n\nA branch is just a name that points at a commit. When you commit on a\nbranch, the label moves forward to the new commit. That's it.\n\nThis sounds boring until you realise what it means: you can have **two**\nlabels — one called `main` and one called `new-feature` — and they\ncan move independently. You're now developing in two parallel timelines.\n\nThe default branch in new repos is called `main`. (Older repos use\n`master`.) Every commit you've made so far has been on `main`."},{type:"command",id:"m4-l5-c1",label:"See your branches",command:"git branch",expectedOutput:`A list of branches with a * next to the current one:

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
or stash first to be safe.`},{type:"command",id:"m4-l5-c3",label:"Switch back to main",command:"git checkout main",expectedOutput:"Switched to branch 'main'"}]},mb={id:"m4-l6-merging",moduleId:"git-github",title:"Merging — pulling a branch back into main",objective:"Merge a feature branch into main and understand fast-forward vs merge commit.",estimatedMinutes:7,blocks:[{type:"explain",id:"m4-l6-e1",listen:!0,markdown:`## The merge workflow

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

Use -D (capital) to force delete if Git refuses (e.g. unmerged work).`}]},gb={id:"m4-l7-conflicts",moduleId:"git-github",title:"Merge conflicts",objective:"Recognise a merge conflict, resolve it, finish the merge.",estimatedMinutes:9,blocks:[{type:"explain",id:"m4-l7-e1",listen:!0,markdown:`## What's a conflict?

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
>>>>>>> feature-branch`,question:'You want to keep "hello". What should the file look like after you edit it?',options:["Just the line: const greeting = 'hello';","Both lines, with the conflict markers","Both lines, without the conflict markers","You should run git merge --abort instead"],answerIndex:0,explanation:"Remove all conflict markers AND the version you don't want. The file should end up as if the conflict never existed."}]},yb={id:"m4-l8-remotes-and-push",moduleId:"git-github",title:"Remotes, push, and pull",objective:"Connect a local repo to GitHub, push commits up, pull changes down.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l8-e1",listen:!0,markdown:`## A "remote" is a Git repo somewhere else

Usually on GitHub. Sometimes on your colleague's machine. Sometimes on
a private server. Git doesn't care — to Git, a remote is just a URL it
can talk to.

The standard remote name is \`origin\`. By convention it's the place
you originally cloned from, or the place you primarily push to.`},{type:"command",id:"m4-l8-c1",label:"Add a remote",command:"git remote add origin https://github.com/your-name/your-repo.git",expectedOutput:"No output. Use the URL of an empty GitHub repo you just created."},{type:"command",id:"m4-l8-c2",label:"List configured remotes",command:"git remote -v",expectedOutput:`origin <url> (fetch)
origin <url> (push)`},{type:"explain",id:"m4-l8-e2",listen:!0,markdown:"### Push and pull\n\n`git push` — send your local commits **up** to the remote.\n\n`git pull` — bring the remote's commits **down** to your local copy.\n(This is actually `git fetch` + `git merge` in one step.)\n\nFirst push of a new branch:\n\n```\ngit push -u origin main\n```\n\nThe `-u` sets up tracking — after that, plain `git push` and\n`git pull` know what to do."},{type:"command",id:"m4-l8-c3",label:"Push your main branch and start tracking",command:"git push -u origin main",expectedOutput:`Counting objects... Writing objects... 
To https://github.com/your-name/your-repo.git
 * [new branch]      main -> main`},{type:"command",id:"m4-l8-c4",label:"Pull any new changes from the remote",command:"git pull",expectedOutput:`If you're up to date: "Already up to date."
Otherwise: Updating <hash>..<hash> followed by a list of changed files.`}]},xb={id:"m4-l9-cloning-and-prs",moduleId:"git-github",title:"Cloning and pull requests",objective:"Copy a GitHub repo to your machine. Submit changes via a PR.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l9-e1",listen:!0,markdown:"## Clone — getting a remote repo down to your machine\n\nIf a repo already exists on GitHub (yours or someone else's), `git clone`\ncopies it locally with full history:\n\n```\ngit clone https://github.com/some-user/some-repo.git\n```\n\nThat creates a new folder named `some-repo` containing the files and\nthe `.git` history. The `origin` remote is set up automatically."},{type:"explain",id:"m4-l9-e2",listen:!0,markdown:`## Pull requests — the GitHub workflow

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
...`}]},wb={id:"m4-l10-gitignore",moduleId:"git-github",title:".gitignore — files you never want to commit",objective:"Write a .gitignore that excludes node_modules, build output, and secrets.",estimatedMinutes:6,blocks:[{type:"explain",id:"m4-l10-e1",listen:!0,markdown:"## Some files don't belong in Git\n\n`.gitignore` is a text file at the root of your repo. Every line is\na pattern Git uses to **skip** matching files when staging.\n\nYou should ignore:\n\n- **`node_modules/`** — hundreds of MB of installed packages. Anyone\n  who clones your repo runs `npm install` to recreate them.\n- **`dist/`, `build/`** — compiled output. Regenerated from source.\n- **`.env`, `.env.local`** — environment variables, often containing\n  secrets like API keys. **Never commit these.**\n- **`*.log`** — runtime logs.\n- **Editor files** — `.vscode/`, `.idea/` (sometimes).\n- **OS files** — `.DS_Store` (Mac), `Thumbs.db` (Windows)."},{type:"readthis",id:"m4-l10-r1",language:"bash",code:`# .gitignore
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

Then commit the removal: git commit -m "stop tracking .env"`}]},vb={id:"m4-l11-undoing-things",moduleId:"git-github",title:"Undoing things — the safety net",objective:"Roll back unsaved edits, undo a stage, fix the last commit, panic less.",estimatedMinutes:8,blocks:[{type:"explain",id:"m4-l11-e1",listen:!0,markdown:`## The four levels of "undo"

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
back to it. Git almost never truly loses data within ~30 days.`},{type:"command",id:"m4-l11-c1",label:"Find old commits if you panic",command:"git reflog",expectedOutput:"A history of every move HEAD has made — including resets, checkouts, commits. Each line has a hash you can git reset --hard back to."}]},bb=[cb,db,pb,hb,fb,mb,gb,yb,xb,wb,vb],kb={id:"m5-l1-html-structure",moduleId:"html-css-dom",title:"HTML — the structure of a page",objective:"Read and write the basic HTML skeleton every page has.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l1-e1",listen:!0,markdown:`## HTML is the bones of the web

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
</html>`}]},Sb={id:"m5-l2-semantic-tags",moduleId:"html-css-dom",title:"Semantic tags",objective:"Pick the right tag for the job. Stop wrapping everything in <div>.",estimatedMinutes:6,blocks:[{type:"explain",id:"m5-l2-e1",listen:!0,markdown:'## Tags carry meaning\n\nBeginners reach for `<div>` for everything. Don\'t. HTML has tags\nthat describe what something **is**, not just where it sits.\n\nThe big ones:\n\n- `<header>` — top-of-page banner.\n- `<nav>` — navigation links.\n- `<main>` — the main content of the page.\n- `<section>` — a thematic grouping (with a heading inside).\n- `<article>` — a self-contained piece (a blog post, a note).\n- `<aside>` — tangential content (a sidebar).\n- `<footer>` — bottom-of-page area.\n\nFor typography:\n\n- `<h1>` through `<h6>` — headings. Use one `<h1>` per page.\n- `<p>` — a paragraph.\n- `<ul>`, `<ol>`, `<li>` — unordered/ordered list, list item.\n- `<a href="...">` — a link.\n- `<strong>` — important. (Bold is the default style but the meaning\n  is "important.")\n- `<em>` — emphasized. (Italic by default, meaning is "stressed.")\n\nWhen you use these, screen readers, search engines, and other developers\nall understand your page better. Bonus: CSS can target them directly.'},{type:"readthis",id:"m5-l2-r1",language:"html",code:`<main>
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
</main>`}]},Eb={id:"m5-l3-attributes-and-forms",moduleId:"html-css-dom",title:"Attributes and forms",objective:"Add attributes to tags. Build a simple input form.",estimatedMinutes:8,blocks:[{type:"explain",id:"m5-l3-e1",listen:!0,markdown:'## Attributes — extra info on a tag\n\nAttributes go inside the opening tag, name and value separated by `=`:\n\n```html\n<a href="https://example.com" target="_blank">link</a>\n<img src="photo.jpg" alt="A photo" width="200" />\n```\n\nA few you\'ll use constantly:\n\n- `id` — a unique label for one element. Use it sparingly.\n- `class` — a label for styling. Many elements can share the same\n  class.\n- `href` — the URL for a link.\n- `src` — the source for images, scripts.\n- `alt` — text shown if the image fails to load (and read out by\n  screen readers).\n- `type`, `name`, `value` — for form inputs.'},{type:"explain",id:"m5-l3-e2",listen:!0,markdown:'## Forms — the input layer\n\n```html\n<form>\n  <label for="name">Name</label>\n  <input id="name" type="text" />\n\n  <label for="age">Age</label>\n  <input id="age" type="number" />\n\n  <button type="submit">Save</button>\n</form>\n```\n\nThree core pieces:\n\n- `<form>` — the wrapper.\n- `<input>` — a single field. The `type` decides what kind:\n  `text`, `number`, `email`, `password`, `checkbox`, `radio`,\n  `date`, more.\n- `<label>` — describes a field. The `for` attribute matches the\n  input\'s `id` — clicking the label focuses the input.\n\n`<button>` ends the form. By default, clicking it submits the form\n(triggering a page reload). In Module 9 you\'ll wire JS to intercept the\nsubmit and handle it without reloading.'},{type:"typealong",id:"m5-l3-ta1",language:"html",instructions:"Retype a simple two-field form.",code:`<form>
  <label for="title">Title</label>
  <input id="title" type="text" />

  <label for="body">Body</label>
  <textarea id="body"></textarea>

  <button type="submit">Save note</button>
</form>`}]},Tb={id:"m5-l4-css-basics",moduleId:"html-css-dom",title:"CSS — style for the page",objective:"Write CSS rules. Connect them to HTML by tag, class, and id.",estimatedMinutes:8,blocks:[{type:"explain",id:"m5-l4-e1",listen:!0,markdown:"## CSS — selector + declarations\n\n```css\nh1 {\n  color: red;\n  font-size: 24px;\n}\n```\n\nTwo parts:\n\n1. **Selector** — `h1` — picks which elements to style.\n2. **Declaration block** — the `{ ... }` — pairs of `property: value;`.\n\nThis rule means: every `<h1>` on the page gets red text at 24px."},{type:"explain",id:"m5-l4-e2",listen:!0,markdown:`### Three kinds of selectors you'll use 99% of the time

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
<p>Normal text</p>`,question:"What colour is the second <p>?",options:["Red","Black (default — no rule matches)","It inherits red from .danger","Undefined"],answerIndex:1,explanation:"The .danger class is only on the first <p>. The second <p> matches only the `p` selector (line-height) and inherits the default text colour."}]},Nb={id:"m5-l5-box-model-and-layout",moduleId:"html-css-dom",title:"The box model and flex layout",objective:"Reason about spacing. Lay out a row of items with flexbox.",estimatedMinutes:9,blocks:[{type:"explain",id:"m5-l5-e1",listen:!0,markdown:`## Every element is a box

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
</header>`}]},jb={id:"m5-l6-the-dom",moduleId:"html-css-dom",title:"The DOM — HTML as a JS tree",objective:"Understand that the browser turns your HTML into JS-reachable objects.",estimatedMinutes:6,blocks:[{type:"explain",id:"m5-l6-e1",listen:!0,markdown:`## DOM = Document Object Model

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
console.log(el.textContent);`,question:"What does this log?",options:["<h1>Hello</h1>","Hello","null","undefined"],answerIndex:1,explanation:'`textContent` is the text inside the element — just "Hello", without the tags.'}]},Cb={id:"m5-l7-events",moduleId:"html-css-dom",title:"Events — making the page interactive",objective:"Listen for clicks. React with code.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l7-e1",listen:!0,markdown:"## addEventListener\n\n`element.addEventListener(event, handler)` — when `event` happens on\n`element`, run `handler`.\n\n```js\nconst btn = document.querySelector('button');\n\nbtn.addEventListener('click', () => {\n  console.log('button clicked');\n});\n```\n\nCommon events:\n\n- `'click'` — mouse click or tap.\n- `'input'` — every keystroke in a text field.\n- `'change'` — when an input loses focus and value changed.\n- `'submit'` — form submit.\n- `'keydown'` — keyboard key pressed.\n- `'load'` — page or resource finished loading.\n\nThe handler function gets an **event object** as its argument. You'll\nmostly care about `event.target` (the element that fired the event)\nand `event.preventDefault()` (stop the browser's default behaviour —\nneeded for forms so they don't reload the page)."},{type:"explain",id:"m5-l7-e2",listen:!0,markdown:`### The form submit pattern

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
});`}]},Ib={id:"m5-l8-localstorage",moduleId:"html-css-dom",title:"localStorage — persistence without a backend",objective:"Save data that survives a page reload. Read it back. Delete it.",estimatedMinutes:7,blocks:[{type:"explain",id:"m5-l8-e1",listen:!0,markdown:`## localStorage — a small key-value store in the browser

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
`,expectedConsoleOutput:"[1,2,3]"}]},Ab=[kb,Sb,Eb,Tb,Nb,jb,Cb,Ib],_b={id:"m6-l1-callbacks-and-the-event-loop",moduleId:"async-fetch",title:"Callbacks and the event loop",objective:"Understand why JS uses callbacks for things that take time.",estimatedMinutes:7,blocks:[{type:"explain",id:"m6-l1-e1",listen:!0,markdown:`## JS runs on one thread

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
console.log('c');`,question:"What's the output order?",options:["a, b, c","a, c, b","b, a, c","c, a, b"],answerIndex:1,explanation:"`setTimeout(..., 0)` still defers to the next event-loop tick. The synchronous lines `a` and `c` run first."}]},Rb={id:"m6-l2-promises",moduleId:"async-fetch",title:"Promises",objective:"Read and chain promises. Recognise then/catch.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l2-e1",listen:!0,markdown:`## A Promise is "a value, eventually"

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
console.log('c');`,question:"What's the output order?",options:["a, b, c","a, c, b","a, c, then b ~100ms later","b, a, c"],answerIndex:2,explanation:"`delay(100)` returns a Promise that resolves after 100ms. The .then callback runs then. Synchronous logs run first."}]},Lb={id:"m6-l3-async-await",moduleId:"async-fetch",title:"async / await",objective:"Write async code that reads like sync code.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l3-e1",listen:!0,markdown:`## async and await — sugar for promises

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
`,expectedConsoleOutput:"done"}]},Ob={id:"m6-l4-fetch-and-http",moduleId:"async-fetch",title:"fetch and the HTTP basics",objective:"Send a GET request. Parse JSON. Recognise the four common HTTP methods.",estimatedMinutes:9,blocks:[{type:"explain",id:"m6-l4-e1",listen:!0,markdown:"## fetch — the modern HTTP client\n\n```js\nconst response = await fetch('https://api.example.com/users');\nconst users = await response.json();\n```\n\n`fetch(url)` returns a Promise that resolves to a **Response object**.\nThe response isn't the data yet — it's the response object you get to\ninspect:\n\n- `response.ok` — true if status 200-299.\n- `response.status` — the HTTP status code (200, 404, 500, ...).\n- `response.json()` — read the body as JSON. Returns a Promise.\n- `response.text()` — read the body as plain text.\n\nThe double `await` (`await fetch` then `await response.json()`) is\nnot a mistake. The network handshake and the body download are two\nseparate stages."},{type:"explain",id:"m6-l4-e2",listen:!0,markdown:`### HTTP methods you'll use

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
}`,question:"The /missing endpoint returns 404. Does fetch throw?",options:["Yes — fetch rejects on any non-2xx response",'No — fetch only rejects on network failure. 404 is still a "successful" response.',"Only if you forget to await it","Only in Node, not in the browser"],answerIndex:1,explanation:"A common gotcha. fetch resolves for any HTTP status. Check `res.ok` (or `res.status`) yourself and throw if the response is bad."}]},Pb={id:"m6-l5-error-handling",moduleId:"async-fetch",title:"Error handling for real APIs",objective:"Handle network failures, bad statuses, and bad JSON without crashing.",estimatedMinutes:8,blocks:[{type:"explain",id:"m6-l5-e1",listen:!0,markdown:`## Three ways an API call can fail

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

Memorise the four-letter rule: **4xx is you, 5xx is them.**`}]},Mb={id:"m6-l6-parallel-requests",moduleId:"async-fetch",title:"Parallel requests with Promise.all",objective:"Run multiple fetches at the same time and wait for all to finish.",estimatedMinutes:7,blocks:[{type:"explain",id:"m6-l6-e1",listen:!0,markdown:`## Sequential vs parallel

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
`,expectedConsoleOutput:"one and two"}]},Db={id:"m6-l7-async-bugs",moduleId:"async-fetch",title:"Async bugs you'll write",objective:"Recognise three async mistakes everyone makes.",estimatedMinutes:9,blocks:[{type:"explain",id:"m6-l7-e1",listen:!0,markdown:`## Three async footguns

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
done`,hint:"Array.forEach does not wait for async callbacks. Replace forEach with a for..of loop — that does respect await."}]},Fb=[_b,Rb,Lb,Ob,Pb,Mb,Db],Bb={id:"m7-l1-npm-and-package-json",moduleId:"node-express",title:"npm and package.json",objective:"Start a Node project and understand package.json.",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l1-e1",listen:!0,markdown:`## npm — Node's package manager

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
\`"devDependencies"\` blocks.`},{type:"command",id:"m7-l1-c2",label:"Install express as a regular dependency",command:"npm install express",expectedOutput:`Downloads express into node_modules/, adds it to package.json's "dependencies", and creates package-lock.json (a record of exact versions for reproducible installs).`}]},zb={id:"m7-l2-first-express-server",moduleId:"node-express",title:"Your first Express server",objective:"Write, run, and hit a tiny Express server.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l2-e1",listen:!0,markdown:`## Three lines of Express

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
});`,question:"When a client GETs /api/health, what content-type header is set automatically?",options:["text/plain","text/html","application/json","No content-type is set"],answerIndex:2,explanation:"`res.json(obj)` serializes the object to JSON and sets `Content-Type: application/json`. Use it for any JSON response."}]},Ub={id:"m7-l3-routes-and-params",moduleId:"node-express",title:"Routes and URL params",objective:"Match URL patterns. Read path parameters and query strings.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l3-e1",listen:!0,markdown:`## Verb + path = route

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

// request: GET /products/shoes/123`,question:"What does the response JSON look like?",options:['{ "category": "shoes", "id": "123" }','{ "category": "shoes", "id": 123 }','{ "params": ["shoes", "123"] }',"An error — Express can't have two params"],answerIndex:0,explanation:'You can have as many path params as you want. All values come through as strings — `123` stays "123".'}]},$b={id:"m7-l4-request-bodies",moduleId:"node-express",title:"Request bodies and express.json()",objective:"Accept JSON payloads in POST and PUT requests.",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l4-e1",listen:!0,markdown:`## Reading the body of a request

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
});`,question:"A client POSTs `{}` (empty body, but valid JSON). What does the response look like?",options:["500 Internal Server Error","201 Created with { id: 1, title: undefined }",'400 Bad Request with { error: "title is required" }',"404 Not Found"],answerIndex:2,explanation:"When `req.body.title` is missing, the truthy check fails and we return 400. Always validate the input you actually need."}]},Hb={id:"m7-l5-status-codes",moduleId:"node-express",title:"Status codes — speak HTTP properly",objective:"Return the right HTTP status for each outcome.",estimatedMinutes:6,blocks:[{type:"explain",id:"m7-l5-e1",listen:!0,markdown:`## The eight status codes you actually need

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
});`,question:"A client PUTs to /todos/999 but no todo with that id exists. What status is returned?",options:["200","201","404","500"],answerIndex:2,explanation:"The handler explicitly returns 404 when the todo isn't found. Without that check, you'd hit `Object.assign(undefined, ...)` which throws — Express would catch it and return 500. Always check before you act."}]},Wb={id:"m7-l6-middleware",moduleId:"node-express",title:"Middleware",objective:"Understand the request pipeline. Write a logger and an error handler.",estimatedMinutes:8,blocks:[{type:"explain",id:"m7-l6-e1",listen:!0,markdown:`## Middleware = "code that runs before the route"

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
app.get('/', (req, res) => res.send('hi'));`,question:"A client GETs /. What happens?",options:['The response is "hi"',"The request hangs forever — brokenLogger never calls next()","500 Internal Server Error","Express auto-detects and calls next() for you"],answerIndex:1,explanation:"Forgetting `next()` is the single most common middleware bug. The browser will spin until it times out."}]},qb={id:"m7-l7-splitting-routes",moduleId:"node-express",title:"Splitting routes across files",objective:"Stop putting everything in index.js. Use express.Router().",estimatedMinutes:7,blocks:[{type:"explain",id:"m7-l7-e1",listen:!0,markdown:`## When index.js hits 200 lines, split it

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
app.use('/api/users', usersRouter);`,question:"What URL hits `getUser`?",options:["/getUser","/users/:id","/api/users/:id","/api/getUser"],answerIndex:2,explanation:"The mount prefix /api/users joins with the router path /:id to give /api/users/:id. Routers don't know their own prefix — the mounter decides."}]},Gb=[Bb,zb,Ub,$b,Hb,Wb,qb],Vb={id:"m8-l1-the-four-verbs",moduleId:"sql-sqlite",title:"The four verbs — SELECT, INSERT, UPDATE, DELETE",objective:"Read and write the core SQL operations.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l1-e1",listen:!0,markdown:`## Why SQL

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

Same rule. Without \`WHERE\` you delete the entire table's contents.`},{type:"readthis",id:"m8-l1-r1",language:"sql",code:"SELECT title FROM todos WHERE done = 1 ORDER BY id DESC LIMIT 3;",question:"What does this query return?",options:["All completed todos, oldest first","The titles of the 3 most recently inserted completed todos","The first 3 todos in the table","A single row with all titles concatenated"],answerIndex:1,explanation:"`WHERE done = 1` filters to completed. `ORDER BY id DESC` sorts newest first (highest id). `LIMIT 3` takes the first three. We select only the `title` column."}]},Yb={id:"m8-l2-create-table-and-types",moduleId:"sql-sqlite",title:"CREATE TABLE, types, and constraints",objective:"Design a schema that prevents bad data getting in.",estimatedMinutes:9,blocks:[{type:"explain",id:"m8-l2-e1",listen:!0,markdown:"## Defining a table\n\n```sql\nCREATE TABLE todos (\n  id          INTEGER PRIMARY KEY AUTOINCREMENT,\n  title       TEXT NOT NULL,\n  done        INTEGER NOT NULL DEFAULT 0,\n  created_at  TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\n```\n\nFor each column you say:\n\n1. The name (`id`, `title`, ...).\n2. The type (`INTEGER`, `TEXT`, etc).\n3. Optional **constraints** — rules the database enforces.\n\nSQLite types:\n\n- `INTEGER` — whole numbers.\n- `TEXT` — strings.\n- `REAL` — floating-point numbers.\n- `BLOB` — raw bytes (rarely used for app code).\n\nSQLite has no boolean type. Use `INTEGER` with 0/1.\n\nThere's no native `DATETIME` either — store dates as `TEXT` in ISO\n8601 format (`'2026-05-24T12:00:00Z'`). Sortable and human-readable."},{type:"explain",id:"m8-l2-e2",listen:!0,markdown:`### Constraints — the database's first line of defence

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
INSERT INTO notes (body) VALUES ('orphan');`,question:"What happens with the two INSERT statements?",options:["Both succeed","Both fail","The first succeeds, the second fails because title is NOT NULL","The second succeeds, the first fails because body is required"],answerIndex:2,explanation:"`body` is nullable (no NOT NULL), so the first INSERT (no body) is fine. `title` is NOT NULL, so the second (no title) fails."}]},Jb={id:"m8-l3-foreign-keys-and-joins",moduleId:"sql-sqlite",title:"Foreign keys and JOINs",objective:"Connect tables by id. Query across them in one statement.",estimatedMinutes:10,blocks:[{type:"explain",id:"m8-l3-e1",listen:!0,markdown:`## Two tables that know about each other

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
GROUP BY users.id;`,question:"What does this query return?",options:["Every expense, alongside its user's email","One row per user, showing how many expenses they have","The total amount of all expenses","Just user emails, no counts"],answerIndex:1,explanation:'`GROUP BY users.id` collapses all expenses for the same user into one row. `COUNT(*)` then counts the rows in each group. Classic "expenses per user" report.'}]},Qb={id:"m8-l4-indexes-and-transactions",moduleId:"sql-sqlite",title:"Indexes and transactions",objective:"Make common queries fast. Wrap multi-step writes in transactions.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l4-e1",listen:!0,markdown:`## Indexes — your query's shortcut

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
COMMIT;`,question:"Assuming users.email has a UNIQUE constraint, what happens?",options:["Both rows are inserted","The first succeeds, the second fails, but the first stays","The first succeeds, the second fails, and the transaction rolls back the first","Neither runs because COMMIT must come before INSERT"],answerIndex:2,explanation:"The second INSERT throws a UNIQUE constraint violation. SQLite rolls back the transaction — the first INSERT is undone. Same email never gets inserted."}]},Kb={id:"m8-l5-sqlite-from-node",moduleId:"sql-sqlite",title:"SQLite from Node with better-sqlite3",objective:"Open a database, run queries, read results from JavaScript.",estimatedMinutes:9,blocks:[{type:"explain",id:"m8-l5-e1",listen:!0,markdown:`## better-sqlite3 — synchronous, simple, fast

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

console.log(list.all());`}]},Xb={id:"m8-l6-sql-injection",moduleId:"sql-sqlite",title:"SQL injection and parameterised queries",objective:"Understand the most famous database vulnerability — and the one-line fix.",estimatedMinutes:8,blocks:[{type:"explain",id:"m8-l6-e1",listen:!0,markdown:`## The mistake

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

Next: Module 9, React.`}]},Zb=[Vb,Yb,Jb,Qb,Kb,Xb],e0={id:"m9-l1-jsx-and-components",moduleId:"react",title:"JSX and your first component",objective:"Write components. Pass them props.",estimatedMinutes:8,blocks:[{type:"explain",id:"m9-l1-e1",listen:!0,markdown:"## JSX — HTML in JavaScript\n\nJSX lets you write what looks like HTML inside JavaScript files:\n\n```jsx\nconst heading = <h1>Hello</h1>;\n```\n\nThat's not a string. It's a real JS expression that produces a React\nelement. A build step (Vite handles it) compiles it to:\n\n```js\nconst heading = React.createElement('h1', null, 'Hello');\n```\n\nYou'll never call `createElement` directly — just write JSX.\n\nThe basics that trip people up:\n\n- Use `className`, not `class` (because `class` is a JS keyword).\n- Use `onClick`, not `onclick` (camelCase for all events).\n- Self-close every empty tag: `<img />`, `<br />`, `<input />`.\n- Embed JavaScript inside JSX with curly braces: `<p>{user.name}</p>`."},{type:"explain",id:"m9-l1-e2",listen:!0,markdown:`## A component is a function that returns JSX

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
}`}]},t0={id:"m9-l2-state-with-useState",moduleId:"react",title:"State with useState",objective:"Track values that change. Make the UI re-render when they do.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l2-e1",listen:!0,markdown:`## useState — a value React watches

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
}`,question:"You click the button. What does `n` become?",options:["1","3","0","It throws an error"],answerIndex:0,explanation:"`n` is captured at the moment increment runs. All three `setN(n + 1)` calls compute `0 + 1 = 1`. Use the function form — `setN(prev => prev + 1)` — to actually increment three times."}]},n0={id:"m9-l3-effects",moduleId:"react",title:"Side effects with useEffect",objective:"Run code when a component mounts. Fetch data. Clean up.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l3-e1",listen:!0,markdown:`## useEffect — code that runs after render

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
}`,question:"What's the bug?",options:["No bug — this is the recommended pattern","productId is missing from the dependency array — changing it won't refetch","useEffect should be called inside the return","Should use useState(null) without the explicit null"],answerIndex:1,explanation:"If a parent passes a new `productId`, this effect doesn't re-run — it only runs once. Should be `[productId]`. Common React beginner bug."}]},r0={id:"m9-l4-lists-and-keys",moduleId:"react",title:"Lists, keys, and forms",objective:"Render arrays of data. Handle form input. Submit without page reload.",estimatedMinutes:9,blocks:[{type:"explain",id:"m9-l4-e1",listen:!0,markdown:`## Rendering a list

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
}`,question:"You add a new item at the START of the items array. What's wrong with using index as key?",options:["Nothing wrong — index keys are fine for any list","React will mismatch elements — the existing items get new indices, so their identity in React's eyes flips","It only works for arrays of strings","It throws a console error"],answerIndex:1,explanation:'When you insert at the start, the old "index 0" item is now at index 1, "index 1" is at 2, etc. React thinks "the item with key 0 has new content!" and re-renders mistakenly. Use a stable id from the data instead.'}]},o0=[e0,t0,n0,r0],i0={id:"m10-l1-hashing-passwords",moduleId:"auth-jwt",title:"Hashing passwords with bcrypt",objective:"Store passwords safely. Verify a typed password against the stored hash.",estimatedMinutes:8,blocks:[{type:"explain",id:"m10-l1-e1",listen:!0,markdown:`## Never store passwords. Store hashes.

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
}`,question:"What's wrong with this login handler?",options:["Nothing — it correctly checks the password","It compares the typed password to the stored hash with === instead of bcrypt.compare","It should use res.send instead of res.json","It should return 404 if the user is missing"],answerIndex:1,explanation:"You can't compare a plain-text password to a hash with ===. The hashes are intentionally not the same as the input. Use `await bcrypt.compare(password, user.password_hash)`."}]},s0={id:"m10-l2-jwt-anatomy",moduleId:"auth-jwt",title:"JWT — anatomy of a token",objective:"Understand what's in a JWT and what the signature actually proves.",estimatedMinutes:7,blocks:[{type:"explain",id:"m10-l2-e1",listen:!0,markdown:`## A JWT is three base64 strings separated by dots

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
// to change userId to 999 before sending the request`,question:"What happens on the server when it gets the tampered token?",options:["Server decodes it and uses userId 999 — you've been compromised","jwt.verify throws because the signature no longer matches the payload","It returns a 200 with the wrong data","Nothing — JWTs can't be tampered with at all"],answerIndex:1,explanation:"The signature is computed over the header + payload. Changing the payload invalidates the signature. `jwt.verify` throws, you catch it, you return 401. This is exactly why JWTs work — not because the contents are hidden, but because tampering is detectable."}]},a0={id:"m10-l3-register-and-login",moduleId:"auth-jwt",title:"Register and login routes end to end",objective:"Wire bcrypt + jwt into Express. The exact pattern you'll use in BA-3.",estimatedMinutes:9,blocks:[{type:"explain",id:"m10-l3-e1",listen:!0,markdown:`## The two routes that own auth

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
a separate \`/me\` endpoint that uses the auth middleware (next lesson).`}]},l0={id:"m10-l4-protecting-routes",moduleId:"auth-jwt",title:"Protecting routes with middleware",objective:"Reject unauthorised requests. Attach req.user. Enforce ownership.",estimatedMinutes:8,blocks:[{type:"explain",id:"m10-l4-e1",listen:!0,markdown:`## The middleware

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
});`,question:"What's the security bug?",options:["No bug — requireAuth checks for a valid token","requireAuth proves login but doesn't enforce ownership. Any logged-in user can delete any expense.","It should return 200 not 204","It needs to use POST instead of DELETE"],answerIndex:1,explanation:"Logged-in is not the same as authorized. Add `AND user_id = ?` to the DELETE and pass `req.user.userId`. Otherwise any user with a valid token can delete anyone's expense by guessing IDs."}]},u0=[i0,s0,a0,l0],c0={id:"m11-l1-expo-cli",moduleId:"react-native",title:"The Expo CLI",objective:"Scaffold an Expo app and run it on your phone.",estimatedMinutes:8,blocks:[{type:"explain",id:"m11-l1-e1",listen:!0,markdown:`## Expo's promise

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
a second. That's the loop you'll spend Module 11 (and BA-4) in.`}]},d0={id:"m11-l2-core-components",moduleId:"react-native",title:"Core components and styling",objective:"Use View, Text, Pressable, ScrollView. Style with StyleSheet.",estimatedMinutes:8,blocks:[{type:"explain",id:"m11-l2-e1",listen:!0,markdown:"## The native tag vocabulary\n\nThere's no `<div>`, no `<p>`, no `<button>` in React Native.\nInstead, a small set of cross-platform primitives:\n\n- **`<View>`** — a box. The native equivalent of `<div>`. Use it\n  for layout and grouping.\n- **`<Text>`** — text. All strings MUST be inside a `<Text>`. Loose\n  strings inside `<View>` throw a runtime error.\n- **`<Pressable>`** — a tappable area. Replaces `<button>` and\n  click-handler patterns. Old code uses `<TouchableOpacity>`; Pressable\n  is the newer, more flexible primitive.\n- **`<ScrollView>`** — scrollable container. Use for short lists.\n- **`<FlatList>`** — virtualized scrollable list. Use for long lists\n  (>20 items) — it only renders what's visible.\n- **`<TextInput>`** — text field.\n- **`<Image>`** — image. Takes a `source` prop.\n\n```jsx\nimport { View, Text, Pressable, StyleSheet } from 'react-native';\n\nfunction HelloScreen() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Hello</Text>\n      <Pressable\n        style={styles.btn}\n        onPress={() => console.log('tapped')}\n      >\n        <Text style={styles.btnText}>Tap me</Text>\n      </Pressable>\n    </View>\n  );\n}\n```"},{type:"explain",id:"m11-l2-e2",listen:!0,markdown:`## Styling with StyleSheet

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
</View>`,question:"What happens?",options:['Renders "Hello world" — same as <div>','Throws: "Text strings must be rendered within a <Text> component"',"Renders an empty View","Works on iOS, fails on Android"],answerIndex:1,explanation:"Bare strings inside non-Text components throw. Wrap text in <Text>: `<View><Text>Hello world</Text></View>`."}]},p0={id:"m11-l3-native-apis",moduleId:"react-native",title:"Native APIs — location, permissions, storage",objective:"Talk to the phone's GPS. Persist data on-device. Ask for permission politely.",estimatedMinutes:9,blocks:[{type:"explain",id:"m11-l3-e1",listen:!0,markdown:`## Expo modules — the bridge to native APIs

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
}`,question:"What's the bug?",options:["Pressable is deprecated — should use Touchable","getCurrentPositionAsync returns a Promise; needs to be awaited (and the function needs to be async)","You can't use Location outside useEffect","No bug"],answerIndex:1,explanation:"`getCurrentPositionAsync` is async. Without await, `position` is a Promise object — `position.coords` is undefined. Make `onPress` async and `await` the call."}]},h0=[c0,d0,p0],f0={id:"m12-l1-deploy-targets",moduleId:"deploy-ship",title:"Picking a deploy target",objective:"Know which host to use for which kind of app.",estimatedMinutes:7,blocks:[{type:"explain",id:"m12-l1-e1",listen:!0,markdown:`## The map

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
# - React Native app via Expo`,question:"What's the typical deploy stack?",options:["Everything goes on GitHub Pages","Frontend → Vercel or GitHub Pages. Backend → Railway. Mobile → EAS Build + App Store / Play Store.","Backend → GitHub Pages. Frontend → Railway.","You need a single VPS to run all three"],answerIndex:1,explanation:"Each piece goes to the host that specialises in its kind. GitHub Pages can't run Node. Railway can't natively host the App Store binary. Use the right tool for each."}]},m0={id:"m12-l2-env-vars-and-secrets",moduleId:"deploy-ship",title:"Environment variables and secrets",objective:"Keep secrets out of git. Configure dev vs production.",estimatedMinutes:6,blocks:[{type:"explain",id:"m12-l2-e1",listen:!0,markdown:`## The two rules

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
   notified the provider — they often auto-revoke (e.g. AWS keys).`}]},g0={id:"m12-l3-six-stability-fixes",moduleId:"deploy-ship",title:"The 6 production hardening fixes",objective:"Make your app survive contact with real users.",estimatedMinutes:12,blocks:[{type:"explain",id:"m12-l3-e1",listen:!0,markdown:`## The 6 fixes every shipped app needs

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
is the one who needed to see it.`}]},y0=[f0,m0,g0],x0={id:"m13-l1-intro",moduleId:"capstone",title:"The capstone — Mini-Viszio",objective:"Read the capstone brief and accept the no-AI honor code.",estimatedMinutes:5,blocks:[{type:"explain",id:"m13-l1-e1",listen:!0,markdown:`## This is the exit exam

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
yourself that.`}]},w0=[x0],v0={id:"test-blocks",moduleId:"diagnostics",title:"Test lesson — all six block types",objective:"Exercise every Phase 1 block type end-to-end with progress persistence.",estimatedMinutes:8,blocks:[{type:"explain",id:"tb-explain-1",listen:!0,markdown:`## Welcome to Ship It

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
CHERRY`,hint:"The loop runs one step too far — check the comparison in the for-loop condition."}],quiz:[{id:"tb-quiz-1",prompt:"Which block type uses a sandboxed iframe to run JavaScript?",options:["Explain","TypeAlong","CodeChallenge","Command"],answerIndex:2},{id:"tb-quiz-2",prompt:"Where does Ship It store your progress?",options:["A backend database","sessionStorage","localStorage","A cookie"],answerIndex:2,explanation:"No backend in v1 — everything is in localStorage under `ship-it:progress:v1`."}]},bo=[...Vv,...nb,...ub,...bb,...Ab,...Fb,...Gb,...Zb,...o0,...u0,...h0,...y0,...w0,v0];function Jf(e){return bo.find(t=>t.id===e)}function ju(e){return bo.filter(t=>t.moduleId===e)}function b0(e){return e.type!=="explain"}function k0(e,t,n){const r=e.blocks.filter(b0),o=r.length,i=r.filter(a=>t[a.id]).length,s=!!n[e.id];return o===0?{done:s,blocksDone:0,blocksTotal:0,pct:s?100:0}:{done:s,blocksDone:i,blocksTotal:o,pct:s?100:Math.round(i/o*100)}}function Qf(e,t){const n=ju(e),r=n.length;if(r===0)return{total:0,completed:0,pct:0};const o=n.filter(i=>t[i.id]).length;return{total:r,completed:o,pct:Math.round(o/r*100)}}function S0(e,t){return ju(e).find(n=>!t[n.id])}const E0={id:"ba-1-notes-app",title:"Build-Along #1 — Notes app",summary:"Plain HTML, CSS, JS. localStorage for persistence. Add, edit, delete notes. Filter by tag. No frameworks. No AI.",unlockedByModule:"html-css-dom",estimatedHours:4,rules:["No frameworks. Vanilla HTML, CSS, JS only.","No AI assistance — no Copilot, no ChatGPT, no Claude. Honor code.","localStorage only — no backend, no database.","If you get stuck for more than 20 minutes, write down the exact question and keep going. Don't quit."],spec:`## What you're building

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
`}]},T0={id:"ba-2-todo-api",title:"Build-Along #2 — Todo API",summary:"Node + Express + SQLite. CRUD endpoints for /todos. Persist to a SQLite file. Test with curl or Postman. No frontend.",unlockedByModule:"sql-sqlite",estimatedHours:6,rules:["Vanilla Node + Express + better-sqlite3. No ORMs, no Prisma, no Drizzle.","No AI assistance. No Copilot. No ChatGPT. No Claude.","No frontend in this build-along. Test with curl or Postman.","When you get stuck for 20+ minutes, write the question down, keep moving."],spec:`## What you're building

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
`}]},N0={id:"ba-3-expense-tracker",title:"Build-Along #3 — Expense tracker",summary:"React + Express + SQLite + JWT. Register, log in, add expenses, list and filter. The integration leap — your first real full-stack app.",unlockedByModule:"auth-jwt",estimatedHours:12,rules:["React frontend (Vite) + Express/SQLite backend (reuse BA-2 as the starting backend).","JWT for auth. bcrypt for password hashing.","No AI assistance. No Copilot. No ChatGPT. No Claude.","No CSS frameworks beyond plain CSS or Tailwind — choose one.","You will be slower than at BA-1 and BA-2. That is the point."],spec:`## What you're building

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
`}]},j0={id:"ba-4-mini-viszio",title:"Capstone — Mini-Viszio",summary:"React Native + Expo + Express + SQLite. GPS clock-in / clock-out with a list of past entries. This is the exit exam — when you ship this, the app has done its job.",unlockedByModule:"deploy-ship",estimatedHours:25,rules:["No AI assistance. Honor code. The whole point of Ship It is to prove you can do this alone.","React Native + Expo (managed workflow) for the app.","Reuse the Express + SQLite backend pattern from BA-2/BA-3.","You may consult the Ship It lessons, MDN, the Expo docs, and Stack Overflow. You may not paste code into Claude/ChatGPT.","If you get stuck for 30+ minutes on the same problem, write the question down and keep moving. Come back after sleep."],spec:`## What you're building

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
`}]},zr=[E0,T0,N0,j0];function Kf(e){return zr.find(t=>t.id===e)}const C0="ba-milestone";function Xf(e,t){return`${C0}:${e}:${t}`}const Ft=[{id:"g-1",title:"Off-by-one in a for loop",topic:"Loops",difficulty:"easy",brokenCode:`const fruits = ['apple', 'banana', 'cherry'];
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

main();`,errorMessage:"(no error thrown — but the logs are Promises, not values)",expectedConsoleOutput:"one two",hint:"You declared the function async, but the call sites are missing the keyword that unwraps the promise."}];function I0(e){return Ft.find(t=>t.id===e)}const xs=[{id:"runtime",index:1,title:"How a computer runs your code",blurb:"The mental model — source → parser → runtime → memory. Without this nothing else clicks.",badge:"Foundations"},{id:"javascript",index:2,title:"JavaScript fundamentals",blurb:"Variables, types, functions, arrays, objects, control flow. The language you live in.",badge:"Language"},{id:"terminal",index:3,title:"The terminal and your filesystem",blurb:"cd, ls, mkdir, pipes, env vars, PATH. Stop being scared of the black window.",badge:"Tooling"},{id:"git-github",index:4,title:"Git and GitHub from zero",blurb:"init, add, commit, branch, merge, conflict, PR, remote, .gitignore — the whole spine.",badge:"Tooling"},{id:"html-css-dom",index:5,title:"HTML, CSS, and the DOM",blurb:"Semantics, layout, querySelector, events. Unlocks Build-Along #1 (Notes app).",badge:"Frontend",unlocksBuildAlong:"ba-1-notes-app"},{id:"async-fetch",index:6,title:"Async, fetch, and APIs",blurb:"Promises, await, error handling, real HTTP. Where most beginners drown.",badge:"Language"},{id:"node-express",index:7,title:"Node.js and Express",blurb:"Routes, middleware, request/response, body parsing. Your first server.",badge:"Backend"},{id:"sql-sqlite",index:8,title:"SQL and SQLite",blurb:"DDL, DML, joins, FKs, transactions. Unlocks Build-Along #2 (Todo API).",badge:"Backend",unlocksBuildAlong:"ba-2-todo-api"},{id:"react",index:9,title:"React",blurb:"Components, state, effects, props, routing. The frontend you actually ship.",badge:"Frontend"},{id:"auth-jwt",index:10,title:"Auth, JWT, and integrations",blurb:"Hashing, tokens, secrets, webhooks. Unlocks Build-Along #3 (Expense tracker).",badge:"Backend",unlocksBuildAlong:"ba-3-expense-tracker"},{id:"react-native",index:11,title:"React Native + Expo",blurb:"Same React patterns, mobile flavour, EAS. Lean on TypeAlong + ReadThis.",badge:"Mobile"},{id:"deploy-ship",index:12,title:"Deploying and shipping",blurb:"Vercel, Railway, GitHub Pages, EAS, the 6 stability fixes. Cross the finish line.",badge:"Ops"},{id:"capstone",index:13,title:"Capstone — Mini-Viszio",blurb:"BA-4: clock-in with GPS. No AI. The exit exam — when you ship this, the app has done its job.",badge:"Capstone",unlocksBuildAlong:"ba-4-mini-viszio",isCapstone:!0}];function A0(e){return xs.find(t=>t.id===e)}function _0(){const e=new Date().getHours();return e<12?"Good morning":e<17?"Good afternoon":"Good evening"}function R0(){const{progress:e}=Ge(),t=Object.keys(e.lessonsCompleted).length,n=bo.length,r=n>0?Math.round(t/n*100):0,o=Object.keys(e.gauntletSolved).length,i=Object.keys(e.buildAlongsStarted).length,s=e.settings.lastLessonId,a=s?Jf(s):void 0,l=bo.find(x=>!e.lessonsCompleted[x.id]),u=a&&!e.lessonsCompleted[a.id]?a:l,d=u?xs.find(x=>x.id===u.moduleId):void 0,p=t>0,f=s?[a].filter(Boolean):[],h=Object.keys(e.buildAlongsStarted).map(x=>zr.find(v=>v.id===x)).filter(Boolean),m=f.length>0||h.length>0;return c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{className:"flex items-center justify-between gap-3",children:c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-accent-strong",children:_0()}),c.jsx("h1",{className:"truncate text-xl sm:text-2xl font-extrabold tracking-tight text-ink-100",children:"Ready to ship?"})]})}),u&&c.jsxs(re,{to:`/lesson/${u.id}`,className:"block overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-600 hover:to-emerald-800",children:[c.jsxs("p",{className:"text-[11px] font-bold uppercase tracking-wide text-emerald-100",children:[p?"Continue learning":"Start learning",d&&` · ${d.title}`]}),c.jsx("h2",{className:"mt-1 text-xl sm:text-2xl font-extrabold leading-tight",children:u.title}),c.jsxs("p",{className:"mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-100",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(hl,{size:12})," ",u.estimatedMinutes," min"]}),c.jsxs("span",{children:[u.blocks.length," ",u.blocks.length===1?"block":"blocks"]}),u.quiz&&u.quiz.length>0&&c.jsxs("span",{children:[u.quiz.length," quiz Qs"]})]}),c.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[c.jsx("span",{className:"hidden sm:inline text-xs font-medium text-emerald-100",children:u.objective}),c.jsxs("span",{className:"ml-auto flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-emerald-800",children:[c.jsx(ml,{size:13,fill:"currentColor"})," ",p?"Resume":"Begin"]})]})]}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3",children:[c.jsx(Zo,{icon:c.jsx(dv,{size:16}),value:String(t),label:`of ${n} done`}),c.jsx(Zo,{icon:c.jsx(fl,{size:16}),value:`${r}%`,label:"curriculum"}),c.jsx(Zo,{icon:c.jsx(gl,{size:16}),value:String(o),label:`of ${Ft.length} solved`}),c.jsx(Zo,{icon:c.jsx(Vi,{size:16}),value:String(i),label:`of ${zr.length} builds`})]}),m&&c.jsxs("section",{children:[c.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[c.jsx(yv,{size:17,className:"text-accent-strong"}),c.jsx("h2",{className:"text-base sm:text-lg font-bold text-ink-100",children:"Pick up where you left off"})]}),c.jsxs("div",{className:"grid gap-2.5 sm:grid-cols-2",children:[f.map(x=>x?c.jsxs(re,{to:`/lesson/${x.id}`,className:"flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 p-3 transition hover:border-accent/40",children:[c.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong",children:c.jsx(av,{size:16})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-ink-400",children:"Lesson"}),c.jsx("p",{className:"truncate text-sm font-semibold text-ink-100",children:x.title})]}),c.jsx(ea,{size:14,className:"shrink-0 text-ink-400"})]},`l-${x.id}`):null),h.map(x=>c.jsxs(re,{to:`/build-along/${x.id}`,className:"flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 p-3 transition hover:border-accent/40",children:[c.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warn/15 text-warn",children:c.jsx(Vi,{size:16})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-ink-400",children:"Build-along"}),c.jsx("p",{className:"truncate text-sm font-semibold text-ink-100",children:x.title})]}),c.jsx(ea,{size:14,className:"shrink-0 text-ink-400"})]},`b-${x.id}`))]})]}),c.jsxs("section",{children:[c.jsx("h2",{className:"mb-3 text-base sm:text-lg font-bold text-ink-100",children:"Jump to"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs(re,{to:"/curriculum",className:"card p-4 hover:border-accent/40 transition-colors group",children:[c.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-strong",children:c.jsx(fl,{size:18})}),c.jsx("h3",{className:"mt-2.5 text-sm font-bold text-ink-100",children:"Curriculum"}),c.jsx("p",{className:"mt-0.5 text-[11px] text-ink-400",children:"All 13 modules"})]}),c.jsxs(re,{to:"/gauntlet",className:"card p-4 hover:border-accent/40 transition-colors group",children:[c.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-warn/15 text-warn",children:c.jsx(gl,{size:18})}),c.jsx("h3",{className:"mt-2.5 text-sm font-bold text-ink-100",children:"Debug Gauntlet"}),c.jsx("p",{className:"mt-0.5 text-[11px] text-ink-400",children:"Fix broken code"})]})]})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between gap-2",children:[c.jsx("h2",{className:"text-base sm:text-lg font-bold text-ink-100",children:"Build-alongs"}),c.jsxs("span",{className:"text-xs text-ink-400",children:[zr.length," total"]})]}),c.jsx("div",{className:"grid gap-2.5 sm:grid-cols-2",children:zr.map(x=>c.jsxs(re,{to:`/build-along/${x.id}`,className:"card p-3.5 hover:border-accent/40 transition-colors group",children:[c.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-wide text-ink-400",children:["Build-along · ",x.estimatedHours,"h"]}),c.jsx("p",{className:"mt-1 text-sm font-bold text-ink-100 line-clamp-2",children:x.title.replace("Build-Along #","BA-").replace(" — ",": ")}),c.jsx("p",{className:"mt-1 text-[11px] text-ink-400 line-clamp-2",children:x.summary}),c.jsxs("div",{className:"mt-2 text-[11px] text-ink-400",children:[e.buildAlongsStarted[x.id]?"🟢 Started":"Not started"," ·"," ",x.milestones.length," milestones"]})]},x.id))})]}),c.jsx("section",{className:"pt-2",children:c.jsxs(re,{to:"/lesson/test-blocks",className:"text-xs text-ink-400 hover:text-ink-200 inline-flex items-center gap-1",children:["Engine sandbox · exercise all 6 block types",c.jsx(ea,{size:12})]})})]})}function Zo({icon:e,value:t,label:n}){return c.jsxs("div",{className:"card p-3 sm:p-4",children:[c.jsx("div",{className:"flex items-center gap-1 text-accent-strong",children:e}),c.jsx("p",{className:"mt-1 text-lg sm:text-2xl font-extrabold text-ink-100",children:t}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-ink-400",children:n})]})}const L0=[{name:"Foundations",blurb:"How code runs, the language, the terminal, Git.",moduleIds:["runtime","javascript","terminal","git-github"]},{name:"Frontend",blurb:"HTML/CSS/DOM and React.",moduleIds:["html-css-dom","react"]},{name:"Backend",blurb:"Async, Node + Express, SQL, Auth.",moduleIds:["async-fetch","node-express","sql-sqlite","auth-jwt"]},{name:"Mobile + Ship",blurb:"React Native + Expo and shipping to production.",moduleIds:["react-native","deploy-ship"]},{name:"Capstone",blurb:"The exit exam — Mini-Viszio.",moduleIds:["capstone"]}];function O0(){const{progress:e}=Ge();return c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold text-ink-100",children:"Curriculum"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-1",children:"13 modules grouped into tracks. Walk them top-to-bottom or jump."})]}),L0.map(t=>c.jsxs("section",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg sm:text-xl font-semibold text-ink-100",children:t.name}),c.jsx("p",{className:"text-xs sm:text-sm text-ink-400",children:t.blurb})]}),c.jsx("ul",{className:"space-y-2",children:t.moduleIds.map(n=>{const r=xs.find(i=>i.id===n);if(!r)return null;const o=Qf(r.id,e.lessonsCompleted);return c.jsx("li",{children:c.jsxs(re,{to:`/module/${r.id}`,className:"card px-4 py-3.5 flex items-center gap-3 hover:border-accent/40 transition-colors group",children:[c.jsx("span",{className:`shrink-0 h-9 w-9 rounded-full grid place-items-center text-sm font-semibold ${o.pct===100?"bg-accent-strong text-ink-900":o.pct>0?"bg-accent/15 text-accent-strong border border-accent/30":"bg-ink-700 text-ink-200 border border-ink-600"}`,children:o.pct===100?"✓":r.index}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"text-sm sm:text-base font-medium text-ink-100 group-hover:text-white truncate",children:r.title}),c.jsxs("div",{className:"text-xs text-ink-300 truncate",children:[o.total>0?`${o.completed}/${o.total} lessons`:"Coming soon",o.pct>0&&` · ${o.pct}%`]})]}),c.jsx("span",{className:"text-ink-400 group-hover:text-ink-200 text-lg shrink-0",children:"›"})]})},r.id)})})]},t.name))]})}function P0(){const{moduleId:e}=gs(),t=e?A0(e):void 0,{progress:n}=Ge();if(!t)return c.jsxs("div",{className:"card p-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-ink-100",children:"Module not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No module with id ",c.jsx("code",{children:e}),"."]}),c.jsx(re,{to:"/",className:"btn-primary mt-4 inline-flex",children:"Back home"})]});const r=ju(t.id),o=Qf(t.id,n.lessonsCompleted),i=S0(t.id,n.lessonsCompleted),s=a=>{const l=r.findIndex(d=>d.id===a);if(l<=0)return!0;const u=r[l-1];return!!n.lessonsCompleted[u.id]};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"space-y-2.5",children:[c.jsxs(re,{to:"/curriculum",className:"text-xs text-ink-300 hover:text-ink-100 inline-flex items-center gap-1",children:[c.jsx(ov,{size:12})," Curriculum"]}),c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.badge}),c.jsxs("span",{className:"text-xs text-ink-400",children:["Module ",t.index]}),t.isCapstone&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Capstone"})]}),c.jsx("h1",{className:"text-xl sm:text-3xl font-extrabold tracking-tight text-ink-100 leading-tight",children:t.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 max-w-2xl",children:t.blurb}),r.length>0&&c.jsxs("div",{className:"pt-2 flex items-center gap-3",children:[c.jsx("div",{className:"h-2 flex-1 overflow-hidden rounded-full bg-ink-700",children:c.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-accent to-accent-strong transition-all",style:{width:`${o.pct}%`}})}),c.jsxs("span",{className:"text-xs font-bold text-ink-200 shrink-0",children:[o.completed,"/",o.total," · ",o.pct,"%"]})]})]}),i&&c.jsxs(re,{to:`/lesson/${i.id}`,className:"block overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-600 hover:to-emerald-800",children:[c.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wide text-emerald-100",children:o.completed===0?"Start here":"Continue"}),c.jsx("h2",{className:"mt-1 text-lg sm:text-xl font-extrabold leading-tight",children:i.title}),c.jsxs("p",{className:"mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-100",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(hl,{size:12})," ",i.estimatedMinutes," min"]}),c.jsxs("span",{children:[i.blocks.length," ",i.blocks.length===1?"block":"blocks"]}),i.quiz&&i.quiz.length>0&&c.jsxs("span",{children:[i.quiz.length," quiz Qs"]})]}),c.jsx("div",{className:"mt-3 flex justify-end",children:c.jsxs("span",{className:"flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-emerald-800",children:[c.jsx(ml,{size:13,fill:"currentColor"}),o.completed===0?"Begin":"Resume"]})})]}),r.length===0?c.jsxs("div",{className:"card p-6",children:[c.jsx("div",{className:"text-sm text-ink-100",children:"No lessons authored yet for this module."}),c.jsx("div",{className:"text-xs text-ink-400 mt-1",children:"Plumbing is ready — waiting on content."}),t.unlocksBuildAlong&&c.jsxs(re,{to:`/build-along/${t.unlocksBuildAlong}`,className:"mt-4 text-sm text-accent-strong hover:underline inline-flex items-center gap-1",children:[c.jsx(Vi,{size:14})," Unlocks build-along ",c.jsx("code",{children:t.unlocksBuildAlong})," →"]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mb-1 text-[11px] font-bold uppercase tracking-wide text-ink-400",children:"Lesson path"}),c.jsx("div",{className:"relative",children:r.map((a,l)=>{const u=k0(a,n.blocksCompleted,n.lessonsCompleted),d=u.done,p=s(a.id),f=(i==null?void 0:i.id)===a.id,h=l%2===0,m=d?"bg-accent-strong text-ink-900 ring-accent-strong/30":f?"bg-emerald-600 text-white ring-emerald-500/40 animate-pulse-soft":p?"bg-accent/20 text-accent-strong ring-accent/10":"bg-ink-700 text-ink-500 ring-ink-700/50",x=p?"border-ink-700 bg-ink-800/70 hover:border-accent/40":"border-ink-700 bg-ink-800/30 opacity-60",v=c.jsx("div",{className:`flex flex-1 items-center gap-3 rounded-2xl border p-3 sm:p-3.5 transition-colors ${x} ${h?"":"flex-row-reverse"}`,children:c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:`truncate text-sm sm:text-base font-semibold text-ink-100 ${h?"text-left":"text-right"}`,children:a.title}),c.jsxs("p",{className:`flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-ink-400 mt-0.5 ${h?"":"justify-end"}`,children:[c.jsxs("span",{className:"flex items-center gap-0.5",children:[c.jsx(hl,{size:10}),a.estimatedMinutes,"m"]}),u.blocksTotal>0&&c.jsxs("span",{children:[u.blocksDone,"/",u.blocksTotal," blocks"]}),d&&c.jsx("span",{className:"font-semibold text-accent-strong",children:"Complete"}),f&&!d&&c.jsx("span",{className:"font-semibold text-accent-strong",children:"Up next"})]}),t.isCapstone&&c.jsx("span",{className:"mt-1 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-strong",children:"Capstone"})]})}),g=c.jsx("span",{className:`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full ring-8 ${m}`,"aria-hidden":"true",children:d?c.jsx(uv,{size:20,strokeWidth:3}):p?c.jsx(ml,{size:18,fill:"currentColor",className:"ml-0.5"}):c.jsx(bv,{size:16})}),y=c.jsxs("div",{className:`my-3 flex items-center gap-2 sm:gap-3 ${h?"":"flex-row-reverse"}`,children:[g,v]});return p?c.jsx(re,{to:`/lesson/${a.id}`,className:"block","aria-label":`${a.title}, ${a.estimatedMinutes} minutes`,children:y},a.id):c.jsx("div",{"aria-label":`${a.title} (locked)`,className:"cursor-not-allowed",children:y},a.id)})}),t.unlocksBuildAlong&&c.jsxs(re,{to:`/build-along/${t.unlocksBuildAlong}`,className:"card p-4 mt-2 flex items-center gap-3 hover:border-accent/40 transition-colors block",children:[c.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-warn/15 text-warn shrink-0",children:c.jsx(Vi,{size:18})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wide text-warn",children:"Build-along unlock"}),c.jsx("div",{className:"text-sm font-semibold text-ink-100 truncate",children:t.unlocksBuildAlong})]}),c.jsx("span",{className:"text-ink-400 text-lg shrink-0",children:"›"})]})]})]})}function M0(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const D0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,F0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,B0={};function fd(e,t){return(B0.jsx?F0:D0).test(e)}const z0=/[ \t\n\f\r]/g;function U0(e){return typeof e=="object"?e.type==="text"?md(e.value):!1:md(e)}function md(e){return e.replace(z0,"")===""}class _o{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}_o.prototype.normal={};_o.prototype.property={};_o.prototype.space=void 0;function Zf(e,t){const n={},r={};for(const o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new _o(n,r,t)}function xl(e){return e.toLowerCase()}class Ve{constructor(t,n){this.attribute=n,this.property=t}}Ve.prototype.attribute="";Ve.prototype.booleanish=!1;Ve.prototype.boolean=!1;Ve.prototype.commaOrSpaceSeparated=!1;Ve.prototype.commaSeparated=!1;Ve.prototype.defined=!1;Ve.prototype.mustUseProperty=!1;Ve.prototype.number=!1;Ve.prototype.overloadedBoolean=!1;Ve.prototype.property="";Ve.prototype.spaceSeparated=!1;Ve.prototype.space=void 0;let $0=0;const Y=Mn(),we=Mn(),wl=Mn(),O=Mn(),se=Mn(),ar=Mn(),Qe=Mn();function Mn(){return 2**++$0}const vl=Object.freeze(Object.defineProperty({__proto__:null,boolean:Y,booleanish:we,commaOrSpaceSeparated:Qe,commaSeparated:ar,number:O,overloadedBoolean:wl,spaceSeparated:se},Symbol.toStringTag,{value:"Module"})),ta=Object.keys(vl);class Cu extends Ve{constructor(t,n,r,o){let i=-1;if(super(t,n),gd(this,"space",o),typeof r=="number")for(;++i<ta.length;){const s=ta[i];gd(this,ta[i],(r&vl[s])===vl[s])}}}Cu.prototype.defined=!0;function gd(e,t,n){n&&(e[t]=n)}function kr(e){const t={},n={};for(const[r,o]of Object.entries(e.properties)){const i=new Cu(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[xl(r)]=r,n[xl(i.attribute)]=r}return new _o(t,n,e.space)}const em=kr({properties:{ariaActiveDescendant:null,ariaAtomic:we,ariaAutoComplete:null,ariaBusy:we,ariaChecked:we,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:se,ariaCurrent:null,ariaDescribedBy:se,ariaDetails:null,ariaDisabled:we,ariaDropEffect:se,ariaErrorMessage:null,ariaExpanded:we,ariaFlowTo:se,ariaGrabbed:we,ariaHasPopup:null,ariaHidden:we,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:se,ariaLevel:O,ariaLive:null,ariaModal:we,ariaMultiLine:we,ariaMultiSelectable:we,ariaOrientation:null,ariaOwns:se,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:we,ariaReadOnly:we,ariaRelevant:null,ariaRequired:we,ariaRoleDescription:se,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:we,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function tm(e,t){return t in e?e[t]:t}function nm(e,t){return tm(e,t.toLowerCase())}const H0=kr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ar,acceptCharset:se,accessKey:se,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:se,autoFocus:Y,autoPlay:Y,blocking:se,capture:null,charSet:null,checked:Y,cite:null,className:se,cols:O,colSpan:null,content:null,contentEditable:we,controls:Y,controlsList:se,coords:O|ar,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:wl,draggable:we,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:se,height:O,hidden:wl,high:O,href:null,hrefLang:null,htmlFor:se,httpEquiv:se,id:null,imageSizes:null,imageSrcSet:null,inert:Y,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:se,itemRef:se,itemScope:Y,itemType:se,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:O,pattern:null,ping:se,placeholder:null,playsInline:Y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:se,required:Y,reversed:Y,rows:O,rowSpan:O,sandbox:se,scope:null,scoped:Y,seamless:Y,selected:Y,shadowRootClonable:Y,shadowRootDelegatesFocus:Y,shadowRootMode:null,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:we,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:we,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:se,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:we,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:nm}),W0=kr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Qe,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:se,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:Y,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ar,g2:ar,glyphName:ar,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Qe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:se,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Qe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Qe,rev:Qe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Qe,requiredFeatures:Qe,requiredFonts:Qe,requiredFormats:Qe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Qe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Qe,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Qe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:tm}),rm=kr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),om=kr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:nm}),im=kr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),q0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},G0=/[A-Z]/g,yd=/-[a-z]/g,V0=/^data[-\w.:]+$/i;function Y0(e,t){const n=xl(t);let r=t,o=Ve;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&V0.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(yd,Q0);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!yd.test(i)){let s=i.replace(G0,J0);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}o=Cu}return new o(r,t)}function J0(e){return"-"+e.toLowerCase()}function Q0(e){return e.charAt(1).toUpperCase()}const K0=Zf([em,H0,rm,om,im],"html"),Iu=Zf([em,W0,rm,om,im],"svg");function X0(e){return e.join(" ").trim()}var Au={},xd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Z0=/\n/g,ek=/^\s*/,tk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,nk=/^:\s*/,rk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,ok=/^[;\s]*/,ik=/^\s+|\s+$/g,sk=`
`,wd="/",vd="*",Sn="",ak="comment",lk="declaration";function uk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function o(m){var x=m.match(Z0);x&&(n+=x.length);var v=m.lastIndexOf(sk);r=~v?m.length-v:r+m.length}function i(){var m={line:n,column:r};return function(x){return x.position=new s(m),u(),x}}function s(m){this.start=m,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(m){var x=new Error(t.source+":"+n+":"+r+": "+m);if(x.reason=m,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function l(m){var x=m.exec(e);if(x){var v=x[0];return o(v),e=e.slice(v.length),x}}function u(){l(ek)}function d(m){var x;for(m=m||[];x=p();)x!==!1&&m.push(x);return m}function p(){var m=i();if(!(wd!=e.charAt(0)||vd!=e.charAt(1))){for(var x=2;Sn!=e.charAt(x)&&(vd!=e.charAt(x)||wd!=e.charAt(x+1));)++x;if(x+=2,Sn===e.charAt(x-1))return a("End of comment missing");var v=e.slice(2,x-2);return r+=2,o(v),e=e.slice(x),r+=2,m({type:ak,comment:v})}}function f(){var m=i(),x=l(tk);if(x){if(p(),!l(nk))return a("property missing ':'");var v=l(rk),g=m({type:lk,property:bd(x[0].replace(xd,Sn)),value:v?bd(v[0].replace(xd,Sn)):Sn});return l(ok),g}}function h(){var m=[];d(m);for(var x;x=f();)x!==!1&&(m.push(x),d(m));return m}return u(),h()}function bd(e){return e?e.replace(ik,Sn):Sn}var ck=uk,dk=wi&&wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.default=hk;const pk=dk(ck);function hk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,pk.default)(e),o=typeof t=="function";return r.forEach(i=>{if(i.type!=="declaration")return;const{property:s,value:a}=i;o?t(s,a,i):a&&(n=n||{},n[s]=a)}),n}var ws={};Object.defineProperty(ws,"__esModule",{value:!0});ws.camelCase=void 0;var fk=/^--[a-zA-Z0-9_-]+$/,mk=/-([a-z])/g,gk=/^[^-]+$/,yk=/^-(webkit|moz|ms|o|khtml)-/,xk=/^-(ms)-/,wk=function(e){return!e||gk.test(e)||fk.test(e)},vk=function(e,t){return t.toUpperCase()},kd=function(e,t){return"".concat(t,"-")},bk=function(e,t){return t===void 0&&(t={}),wk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(xk,kd):e=e.replace(yk,kd),e.replace(mk,vk))};ws.camelCase=bk;var kk=wi&&wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Sk=kk(Au),Ek=ws;function bl(e,t){var n={};return!e||typeof e!="string"||(0,Sk.default)(e,function(r,o){r&&o&&(n[(0,Ek.camelCase)(r,t)]=o)}),n}bl.default=bl;var Tk=bl;const Nk=Al(Tk),sm=am("end"),_u=am("start");function am(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function jk(e){const t=_u(e),n=sm(e);if(t&&n)return{start:t,end:n}}function Kr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Sd(e.position):"start"in e||"end"in e?Sd(e):"line"in e||"column"in e?kl(e):""}function kl(e){return Ed(e&&e.line)+":"+Ed(e&&e.column)}function Sd(e){return kl(e&&e.start)+"-"+kl(e&&e.end)}function Ed(e){return e&&typeof e=="number"?e:1}class Le extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",i={},s=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?o=t:!i.cause&&t&&(s=!0,o=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?i.ruleId=r:(i.source=r.slice(0,l),i.ruleId=r.slice(l+1))}if(!i.place&&i.ancestors&&i.ancestors){const l=i.ancestors[i.ancestors.length-1];l&&(i.place=l.position)}const a=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=a?a.line:void 0,this.name=Kr(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=s&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Le.prototype.file="";Le.prototype.name="";Le.prototype.reason="";Le.prototype.message="";Le.prototype.stack="";Le.prototype.column=void 0;Le.prototype.line=void 0;Le.prototype.ancestors=void 0;Le.prototype.cause=void 0;Le.prototype.fatal=void 0;Le.prototype.place=void 0;Le.prototype.ruleId=void 0;Le.prototype.source=void 0;const Ru={}.hasOwnProperty,Ck=new Map,Ik=/[A-Z]/g,Ak=new Set(["table","tbody","thead","tfoot","tr"]),_k=new Set(["td","th"]),lm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Rk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=zk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Bk(n,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Iu:K0,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=um(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function um(e,t,n){if(t.type==="element")return Lk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ok(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Mk(e,t,n);if(t.type==="mdxjsEsm")return Pk(e,t);if(t.type==="root")return Dk(e,t,n);if(t.type==="text")return Fk(e,t)}function Lk(e,t,n){const r=e.schema;let o=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=Iu,e.schema=o),e.ancestors.push(t);const i=dm(e,t.tagName,!1),s=Uk(e,t);let a=Ou(e,t);return Ak.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!U0(l):!0})),cm(e,s,i,t),Lu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,i,s,n)}function Ok(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ko(e,t.position)}function Pk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ko(e,t.position)}function Mk(e,t,n){const r=e.schema;let o=r;t.name==="svg"&&r.space==="html"&&(o=Iu,e.schema=o),e.ancestors.push(t);const i=t.name===null?e.Fragment:dm(e,t.name,!0),s=$k(e,t),a=Ou(e,t);return cm(e,s,i,t),Lu(s,a),e.ancestors.pop(),e.schema=r,e.create(t,i,s,n)}function Dk(e,t,n){const r={};return Lu(r,Ou(e,t)),e.create(t,e.Fragment,r,n)}function Fk(e,t){return t.value}function cm(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Lu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Bk(e,t,n){return r;function r(o,i,s,a){const u=Array.isArray(s.children)?n:t;return a?u(i,s,a):u(i,s)}}function zk(e,t){return n;function n(r,o,i,s){const a=Array.isArray(i.children),l=_u(r);return t(o,i,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function Uk(e,t){const n={};let r,o;for(o in t.properties)if(o!=="children"&&Ru.call(t.properties,o)){const i=Hk(e,o,t.properties[o]);if(i){const[s,a]=i;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&_k.has(t.tagName)?r=a:n[s]=a}}if(r){const i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function $k(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const s=i.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ko(e,t.position);else{const o=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,i=e.evaluater.evaluateExpression(a.expression)}else ko(e,t.position);else i=r.value===null?!0:r.value;n[o]=i}return n}function Ou(e,t){const n=[];let r=-1;const o=e.passKeys?new Map:Ck;for(;++r<t.children.length;){const i=t.children[r];let s;if(e.passKeys){const l=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(l){const u=o.get(l)||0;s=l+"-"+u,o.set(l,u+1)}}const a=um(e,i,s);a!==void 0&&n.push(a)}return n}function Hk(e,t,n){const r=Y0(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?M0(n):X0(n)),r.property==="style"){let o=typeof n=="object"?n:Wk(e,String(n));return e.stylePropertyNameCase==="css"&&(o=qk(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?q0[r.property]||r.property:r.attribute,n]}}function Wk(e,t){try{return Nk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,o=new Le("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=lm+"#cannot-parse-style-attribute",o}}function dm(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const o=t.split(".");let i=-1,s;for(;++i<o.length;){const a=fd(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(i&&a.type==="Literal"),optional:!1}:a}r=s}else r=fd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const o=r.value;return Ru.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);ko(e)}function ko(e,t){const n=new Le("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=lm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function qk(e){const t={};let n;for(n in e)Ru.call(e,n)&&(t[Gk(n)]=e[n]);return t}function Gk(e){let t=e.replace(Ik,Vk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Vk(e){return"-"+e.toLowerCase()}const na={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Yk={};function Jk(e,t){const n=Yk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return pm(e,r,o)}function pm(e,t,n){if(Qk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Td(e.children,t,n)}return Array.isArray(e)?Td(e,t,n):""}function Td(e,t,n){const r=[];let o=-1;for(;++o<e.length;)r[o]=pm(e[o],t,n);return r.join("")}function Qk(e){return!!(e&&typeof e=="object")}const Nd=document.createElement("i");function Pu(e){const t="&"+e+";";Nd.innerHTML=t;const n=Nd.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function _t(e,t,n,r){const o=e.length;let i=0,s;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);i<r.length;)s=r.slice(i,i+1e4),s.unshift(t,0),e.splice(...s),i+=1e4,t+=1e4}function at(e,t){return e.length>0?(_t(e,e.length,0,t),e):t}const jd={}.hasOwnProperty;function Kk(e){const t={};let n=-1;for(;++n<e.length;)Xk(t,e[n]);return t}function Xk(e,t){let n;for(n in t){const o=(jd.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let s;if(i)for(s in i){jd.call(o,s)||(o[s]=[]);const a=i[s];Zk(o[s],Array.isArray(a)?a:a?[a]:[])}}}function Zk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);_t(e,0,0,r)}function hm(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function lr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const jt=wn(/[A-Za-z]/),et=wn(/[\dA-Za-z]/),e1=wn(/[#-'*+\--9=?A-Z^-~]/);function Sl(e){return e!==null&&(e<32||e===127)}const El=wn(/\d/),t1=wn(/[\dA-Fa-f]/),n1=wn(/[!-/:-@[-`{-~]/);function q(e){return e!==null&&e<-2}function qe(e){return e!==null&&(e<0||e===32)}function ee(e){return e===-2||e===-1||e===32}const r1=wn(new RegExp("\\p{P}|\\p{S}","u")),o1=wn(/\s/);function wn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Sr(e){const t=[];let n=-1,r=0,o=0;for(;++n<e.length;){const i=e.charCodeAt(n);let s="";if(i===37&&et(e.charCodeAt(n+1))&&et(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(s=String.fromCharCode(i));else if(i>55295&&i<57344){const a=e.charCodeAt(n+1);i<56320&&a>56319&&a<57344?(s=String.fromCharCode(i,a),o=1):s="�"}else s=String.fromCharCode(i);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+o+1,s=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function le(e,t,n,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return s;function s(l){return ee(l)?(e.enter(n),a(l)):t(l)}function a(l){return ee(l)&&i++<o?(e.consume(l),a):(e.exit(n),t(l))}}const i1={tokenize:s1};function s1(e){const t=e.attempt(this.parser.constructs.contentInitial,r,o);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),le(e,t,"linePrefix")}function o(a){return e.enter("paragraph"),i(a)}function i(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return q(a)?(e.consume(a),e.exit("chunkText"),i):(e.consume(a),s)}}const a1={tokenize:l1},Cd={tokenize:u1};function l1(e){const t=this,n=[];let r=0,o,i,s;return a;function a(w){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,l,u)(w)}return u(w)}function l(w){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&y();const S=t.events.length;let N=S,E;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){E=t.events[N][1].end;break}g(r);let j=S;for(;j<t.events.length;)t.events[j][1].end={...E},j++;return _t(t.events,N+1,0,t.events.slice(S)),t.events.length=j,u(w)}return a(w)}function u(w){if(r===n.length){if(!o)return f(w);if(o.currentConstruct&&o.currentConstruct.concrete)return m(w);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Cd,d,p)(w)}function d(w){return o&&y(),g(r),f(w)}function p(w){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,m(w)}function f(w){return t.containerState={},e.attempt(Cd,h,m)(w)}function h(w){return r++,n.push([t.currentConstruct,t.containerState]),f(w)}function m(w){if(w===null){o&&y(),g(0),e.consume(w);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:i}),x(w)}function x(w){if(w===null){v(e.exit("chunkFlow"),!0),g(0),e.consume(w);return}return q(w)?(e.consume(w),v(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(w),x)}function v(w,S){const N=t.sliceStream(w);if(S&&N.push(null),w.previous=i,i&&(i.next=w),i=w,o.defineSkip(w.start),o.write(N),t.parser.lazy[w.start.line]){let E=o.events.length;for(;E--;)if(o.events[E][1].start.offset<s&&(!o.events[E][1].end||o.events[E][1].end.offset>s))return;const j=t.events.length;let _=j,M,A;for(;_--;)if(t.events[_][0]==="exit"&&t.events[_][1].type==="chunkFlow"){if(M){A=t.events[_][1].end;break}M=!0}for(g(r),E=j;E<t.events.length;)t.events[E][1].end={...A},E++;_t(t.events,_+1,0,t.events.slice(j)),t.events.length=E}}function g(w){let S=n.length;for(;S-- >w;){const N=n[S];t.containerState=N[1],N[0].exit.call(t,e)}n.length=w}function y(){o.write([null]),i=void 0,o=void 0,t.containerState._closeFlow=void 0}}function u1(e,t,n){return le(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Id(e){if(e===null||qe(e)||o1(e))return 1;if(r1(e))return 2}function Mu(e,t,n){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}const Tl={name:"attention",resolveAll:c1,tokenize:d1};function c1(e,t){let n=-1,r,o,i,s,a,l,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};Ad(p,-l),Ad(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},i={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},o={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=at(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=at(u,[["enter",o,t],["enter",s,t],["exit",s,t],["enter",i,t]]),u=at(u,Mu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=at(u,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=at(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,_t(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function d1(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Id(r);let i;return s;function s(l){return i=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===i)return e.consume(l),a;const u=e.exit("attentionSequence"),d=Id(l),p=!d||d===2&&o||n.includes(l),f=!o||o===2&&d||n.includes(r);return u._open=!!(i===42?p:p&&(o||!f)),u._close=!!(i===42?f:f&&(d||!p)),t(l)}}function Ad(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const p1={name:"autolink",tokenize:h1};function h1(e,t,n){let r=0;return o;function o(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(h){return jt(h)?(e.consume(h),s):h===64?n(h):u(h)}function s(h){return h===43||h===45||h===46||et(h)?(r=1,a(h)):u(h)}function a(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||et(h))&&r++<32?(e.consume(h),a):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Sl(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),d):e1(h)?(e.consume(h),u):n(h)}function d(h){return et(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||et(h))&&r++<63){const m=h===45?f:p;return e.consume(h),m}return n(h)}}const vs={partial:!0,tokenize:f1};function f1(e,t,n){return r;function r(i){return ee(i)?le(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||q(i)?t(i):n(i)}}const fm={continuation:{tokenize:g1},exit:y1,name:"blockQuote",tokenize:m1};function m1(e,t,n){const r=this;return o;function o(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),i}return n(s)}function i(s){return ee(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function g1(e,t,n){const r=this;return o;function o(s){return ee(s)?le(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):i(s)}function i(s){return e.attempt(fm,t,n)(s)}}function y1(e){e.exit("blockQuote")}const mm={name:"characterEscape",tokenize:x1};function x1(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return n1(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}const gm={name:"characterReference",tokenize:w1};function w1(e,t,n){const r=this;let o=0,i,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),l}function l(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,s=et,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,s=t1,d):(e.enter("characterReferenceValue"),i=7,s=El,d(p))}function d(p){if(p===59&&o){const f=e.exit("characterReferenceValue");return s===et&&!Pu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(p)&&o++<i?(e.consume(p),d):n(p)}}const _d={partial:!0,tokenize:b1},Rd={concrete:!0,name:"codeFenced",tokenize:v1};function v1(e,t,n){const r=this,o={partial:!0,tokenize:N};let i=0,s=0,a;return l;function l(E){return u(E)}function u(E){const j=r.events[r.events.length-1];return i=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,a=E,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(E)}function d(E){return E===a?(s++,e.consume(E),d):s<3?n(E):(e.exit("codeFencedFenceSequence"),ee(E)?le(e,p,"whitespace")(E):p(E))}function p(E){return E===null||q(E)?(e.exit("codeFencedFence"),r.interrupt?t(E):e.check(_d,x,S)(E)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(E))}function f(E){return E===null||q(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(E)):ee(E)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),le(e,h,"whitespace")(E)):E===96&&E===a?n(E):(e.consume(E),f)}function h(E){return E===null||q(E)?p(E):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(E))}function m(E){return E===null||q(E)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(E)):E===96&&E===a?n(E):(e.consume(E),m)}function x(E){return e.attempt(o,S,v)(E)}function v(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),g}function g(E){return i>0&&ee(E)?le(e,y,"linePrefix",i+1)(E):y(E)}function y(E){return E===null||q(E)?e.check(_d,x,S)(E):(e.enter("codeFlowValue"),w(E))}function w(E){return E===null||q(E)?(e.exit("codeFlowValue"),y(E)):(e.consume(E),w)}function S(E){return e.exit("codeFenced"),t(E)}function N(E,j,_){let M=0;return A;function A(P){return E.enter("lineEnding"),E.consume(P),E.exit("lineEnding"),D}function D(P){return E.enter("codeFencedFence"),ee(P)?le(E,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):B(P)}function B(P){return P===a?(E.enter("codeFencedFenceSequence"),J(P)):_(P)}function J(P){return P===a?(M++,E.consume(P),J):M>=s?(E.exit("codeFencedFenceSequence"),ee(P)?le(E,G,"whitespace")(P):G(P)):_(P)}function G(P){return P===null||q(P)?(E.exit("codeFencedFence"),j(P)):_(P)}}}function b1(e,t,n){const r=this;return o;function o(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i)}function i(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const ra={name:"codeIndented",tokenize:S1},k1={partial:!0,tokenize:E1};function S1(e,t,n){const r=this;return o;function o(u){return e.enter("codeIndented"),le(e,i,"linePrefix",5)(u)}function i(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):q(u)?e.attempt(k1,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||q(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function E1(e,t,n){const r=this;return o;function o(s){return r.parser.lazy[r.now().line]?n(s):q(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):le(e,i,"linePrefix",5)(s)}function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):q(s)?o(s):n(s)}}const T1={name:"codeText",previous:j1,resolve:N1,tokenize:C1};function N1(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function j1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function C1(e,t,n){let r=0,o,i;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),l(p))}function l(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),l):p===96?(i=e.enter("codeTextSequence"),o=0,d(p)):q(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||q(p)?(e.exit("codeTextData"),l(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),o++,d):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(i.type="codeTextData",u(p))}}class I1{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const o=n||0;this.setCursor(Math.trunc(t));const i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Or(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Or(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Or(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Or(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Or(this.left,n.reverse())}}}function Or(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function ym(e){const t={};let n=-1,r,o,i,s,a,l,u;const d=new I1(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,i=0,i<l.length&&l[i][1].type==="lineEndingBlank"&&(i+=2),i<l.length&&l[i][1].type==="content"))for(;++i<l.length&&l[i][1].type!=="content";)l[i][1].type==="chunkText"&&(l[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,A1(d,n)),n=t[n],u=!0);else if(r[1]._container){for(i=n,o=void 0;i--;)if(s=d.get(i),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(o&&(d.get(o)[1].type="lineEndingBlank"),s[1].type="lineEnding",o=i);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;o&&(r[1].end={...d.get(o)[1].start},a=d.slice(o,n),a.unshift(r),d.splice(o,n-o+1,a))}}return _t(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function A1(e,t){const n=e.get(t)[1],r=e.get(t)[2];let o=t-1;const i=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let d,p,f=-1,h=n,m=0,x=0;const v=[x];for(;h;){for(;e.get(++o)[1]!==h;);i.push(o),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(x=f+1,v.push(x),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):v.pop(),f=v.length;f--;){const g=a.slice(v[f],v[f+1]),y=i.pop();l.push([y,y+g.length-1]),e.splice(y,2,g)}for(l.reverse(),f=-1;++f<l.length;)u[m+l[f][0]]=m+l[f][1],m+=l[f][1]-l[f][0]-1;return u}const _1={resolve:L1,tokenize:O1},R1={partial:!0,tokenize:P1};function L1(e){return ym(e),e}function O1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(a)}function o(a){return a===null?i(a):q(a)?e.check(R1,s,i)(a):(e.consume(a),o)}function i(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function P1(e,t,n){const r=this;return o;function o(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),le(e,i,"linePrefix")}function i(s){if(s===null||q(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function xm(e,t,n,r,o,i,s,a,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(g),e.exit(i),f):g===null||g===32||g===41||Sl(g)?n(g):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(g))}function f(g){return g===62?(e.enter(i),e.consume(g),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(a),f(g)):g===null||g===60||q(g)?n(g):(e.consume(g),g===92?m:h)}function m(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function x(g){return!d&&(g===null||g===41||qe(g))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,x):g===41?(e.consume(g),d--,x):g===null||g===32||g===40||Sl(g)?n(g):(e.consume(g),g===92?v:x)}function v(g){return g===40||g===41||g===92?(e.consume(g),x):x(g)}}function wm(e,t,n,r,o,i){const s=this;let a=0,l;return u;function u(h){return e.enter(r),e.enter(o),e.consume(h),e.exit(o),e.enter(i),d}function d(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):h===93?(e.exit(i),e.enter(o),e.consume(h),e.exit(o),e.exit(r),t):q(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||q(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!ee(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,p):p(h)}}function vm(e,t,n,r,o,i){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(o),e.consume(f),e.exit(o),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),t):(e.enter(i),u(f))}function u(f){return f===s?(e.exit(i),l(s)):f===null?n(f):q(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),le(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||q(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===s||f===92?(e.consume(f),d):d(f)}}function Xr(e,t){let n;return r;function r(o){return q(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):ee(o)?le(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}const M1={name:"definition",tokenize:F1},D1={partial:!0,tokenize:B1};function F1(e,t,n){const r=this;let o;return i;function i(h){return e.enter("definition"),s(h)}function s(h){return wm.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return o=lr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return qe(h)?Xr(e,u)(h):u(h)}function u(h){return xm(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(D1,p,p)(h)}function p(h){return ee(h)?le(e,f,"whitespace")(h):f(h)}function f(h){return h===null||q(h)?(e.exit("definition"),r.parser.defined.push(o),t(h)):n(h)}}function B1(e,t,n){return r;function r(a){return qe(a)?Xr(e,o)(a):n(a)}function o(a){return vm(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function i(a){return ee(a)?le(e,s,"whitespace")(a):s(a)}function s(a){return a===null||q(a)?t(a):n(a)}}const z1={name:"hardBreakEscape",tokenize:U1};function U1(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return q(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}const $1={name:"headingAtx",resolve:H1,tokenize:W1};function H1(e,t){let n=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},_t(e,r,n-r+1,[["enter",o,t],["enter",i,t],["exit",i,t],["exit",o,t]])),e}function W1(e,t,n){let r=0;return o;function o(d){return e.enter("atxHeading"),i(d)}function i(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||qe(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||q(d)?(e.exit("atxHeading"),t(d)):ee(d)?le(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||qe(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const q1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ld=["pre","script","style","textarea"],G1={concrete:!0,name:"htmlFlow",resolveTo:J1,tokenize:Q1},V1={partial:!0,tokenize:X1},Y1={partial:!0,tokenize:K1};function J1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Q1(e,t,n){const r=this;let o,i,s,a,l;return u;function u(k){return d(k)}function d(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),p}function p(k){return k===33?(e.consume(k),f):k===47?(e.consume(k),i=!0,x):k===63?(e.consume(k),o=3,r.interrupt?t:b):jt(k)?(e.consume(k),s=String.fromCharCode(k),v):n(k)}function f(k){return k===45?(e.consume(k),o=2,h):k===91?(e.consume(k),o=5,a=0,m):jt(k)?(e.consume(k),o=4,r.interrupt?t:b):n(k)}function h(k){return k===45?(e.consume(k),r.interrupt?t:b):n(k)}function m(k){const te="CDATA[";return k===te.charCodeAt(a++)?(e.consume(k),a===te.length?r.interrupt?t:B:m):n(k)}function x(k){return jt(k)?(e.consume(k),s=String.fromCharCode(k),v):n(k)}function v(k){if(k===null||k===47||k===62||qe(k)){const te=k===47,ye=s.toLowerCase();return!te&&!i&&Ld.includes(ye)?(o=1,r.interrupt?t(k):B(k)):q1.includes(s.toLowerCase())?(o=6,te?(e.consume(k),g):r.interrupt?t(k):B(k)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(k):i?y(k):w(k))}return k===45||et(k)?(e.consume(k),s+=String.fromCharCode(k),v):n(k)}function g(k){return k===62?(e.consume(k),r.interrupt?t:B):n(k)}function y(k){return ee(k)?(e.consume(k),y):A(k)}function w(k){return k===47?(e.consume(k),A):k===58||k===95||jt(k)?(e.consume(k),S):ee(k)?(e.consume(k),w):A(k)}function S(k){return k===45||k===46||k===58||k===95||et(k)?(e.consume(k),S):N(k)}function N(k){return k===61?(e.consume(k),E):ee(k)?(e.consume(k),N):w(k)}function E(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),l=k,j):ee(k)?(e.consume(k),E):_(k)}function j(k){return k===l?(e.consume(k),l=null,M):k===null||q(k)?n(k):(e.consume(k),j)}function _(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||qe(k)?N(k):(e.consume(k),_)}function M(k){return k===47||k===62||ee(k)?w(k):n(k)}function A(k){return k===62?(e.consume(k),D):n(k)}function D(k){return k===null||q(k)?B(k):ee(k)?(e.consume(k),D):n(k)}function B(k){return k===45&&o===2?(e.consume(k),W):k===60&&o===1?(e.consume(k),K):k===62&&o===4?(e.consume(k),z):k===63&&o===3?(e.consume(k),b):k===93&&o===5?(e.consume(k),$):q(k)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(V1,H,J)(k)):k===null||q(k)?(e.exit("htmlFlowData"),J(k)):(e.consume(k),B)}function J(k){return e.check(Y1,G,H)(k)}function G(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),P}function P(k){return k===null||q(k)?J(k):(e.enter("htmlFlowData"),B(k))}function W(k){return k===45?(e.consume(k),b):B(k)}function K(k){return k===47?(e.consume(k),s="",R):B(k)}function R(k){if(k===62){const te=s.toLowerCase();return Ld.includes(te)?(e.consume(k),z):B(k)}return jt(k)&&s.length<8?(e.consume(k),s+=String.fromCharCode(k),R):B(k)}function $(k){return k===93?(e.consume(k),b):B(k)}function b(k){return k===62?(e.consume(k),z):k===45&&o===2?(e.consume(k),b):B(k)}function z(k){return k===null||q(k)?(e.exit("htmlFlowData"),H(k)):(e.consume(k),z)}function H(k){return e.exit("htmlFlow"),t(k)}}function K1(e,t,n){const r=this;return o;function o(s){return q(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):n(s)}function i(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function X1(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(vs,t,n)}}const Z1={name:"htmlText",tokenize:eS};function eS(e,t,n){const r=this;let o,i,s;return a;function a(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),l}function l(b){return b===33?(e.consume(b),u):b===47?(e.consume(b),N):b===63?(e.consume(b),w):jt(b)?(e.consume(b),_):n(b)}function u(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),i=0,m):jt(b)?(e.consume(b),y):n(b)}function d(b){return b===45?(e.consume(b),h):n(b)}function p(b){return b===null?n(b):b===45?(e.consume(b),f):q(b)?(s=p,K(b)):(e.consume(b),p)}function f(b){return b===45?(e.consume(b),h):p(b)}function h(b){return b===62?W(b):b===45?f(b):p(b)}function m(b){const z="CDATA[";return b===z.charCodeAt(i++)?(e.consume(b),i===z.length?x:m):n(b)}function x(b){return b===null?n(b):b===93?(e.consume(b),v):q(b)?(s=x,K(b)):(e.consume(b),x)}function v(b){return b===93?(e.consume(b),g):x(b)}function g(b){return b===62?W(b):b===93?(e.consume(b),g):x(b)}function y(b){return b===null||b===62?W(b):q(b)?(s=y,K(b)):(e.consume(b),y)}function w(b){return b===null?n(b):b===63?(e.consume(b),S):q(b)?(s=w,K(b)):(e.consume(b),w)}function S(b){return b===62?W(b):w(b)}function N(b){return jt(b)?(e.consume(b),E):n(b)}function E(b){return b===45||et(b)?(e.consume(b),E):j(b)}function j(b){return q(b)?(s=j,K(b)):ee(b)?(e.consume(b),j):W(b)}function _(b){return b===45||et(b)?(e.consume(b),_):b===47||b===62||qe(b)?M(b):n(b)}function M(b){return b===47?(e.consume(b),W):b===58||b===95||jt(b)?(e.consume(b),A):q(b)?(s=M,K(b)):ee(b)?(e.consume(b),M):W(b)}function A(b){return b===45||b===46||b===58||b===95||et(b)?(e.consume(b),A):D(b)}function D(b){return b===61?(e.consume(b),B):q(b)?(s=D,K(b)):ee(b)?(e.consume(b),D):M(b)}function B(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),o=b,J):q(b)?(s=B,K(b)):ee(b)?(e.consume(b),B):(e.consume(b),G)}function J(b){return b===o?(e.consume(b),o=void 0,P):b===null?n(b):q(b)?(s=J,K(b)):(e.consume(b),J)}function G(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||qe(b)?M(b):(e.consume(b),G)}function P(b){return b===47||b===62||qe(b)?M(b):n(b)}function W(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function K(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),R}function R(b){return ee(b)?le(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):$(b)}function $(b){return e.enter("htmlTextData"),s(b)}}const Du={name:"labelEnd",resolveAll:oS,resolveTo:iS,tokenize:sS},tS={tokenize:aS},nS={tokenize:lS},rS={tokenize:uS};function oS(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const o=r.type==="labelImage"?4:2;r.type="data",t+=o}}return e.length!==n.length&&_t(e,0,e.length,n),e}function iS(e,t){let n=e.length,r=0,o,i,s,a;for(;n--;)if(o=e[n][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(s=n);const l={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=at(a,e.slice(i+1,i+r+3)),a=at(a,[["enter",d,t]]),a=at(a,Mu(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=at(a,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),a=at(a,e.slice(s+1)),a=at(a,[["exit",l,t]]),_t(e,i,e.length,a),e}function sS(e,t,n){const r=this;let o=r.events.length,i,s;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return a;function a(f){return i?i._inactive?p(f):(s=r.parser.defined.includes(lr(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(tS,d,s?d:p)(f):f===91?e.attempt(nS,d,s?u:p)(f):s?d(f):p(f)}function u(f){return e.attempt(rS,d,p)(f)}function d(f){return t(f)}function p(f){return i._balanced=!0,n(f)}}function aS(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),o}function o(p){return qe(p)?Xr(e,i)(p):i(p)}function i(p){return p===41?d(p):xm(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return qe(p)?Xr(e,l)(p):d(p)}function a(p){return n(p)}function l(p){return p===34||p===39||p===40?vm(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return qe(p)?Xr(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function lS(e,t,n){const r=this;return o;function o(a){return wm.call(r,e,i,s,"reference","referenceMarker","referenceString")(a)}function i(a){return r.parser.defined.includes(lr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function uS(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}const cS={name:"labelStartImage",resolveAll:Du.resolveAll,tokenize:dS};function dS(e,t,n){const r=this;return o;function o(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),i}function i(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const pS={name:"labelStartLink",resolveAll:Du.resolveAll,tokenize:hS};function hS(e,t,n){const r=this;return o;function o(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),i}function i(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const oa={name:"lineEnding",tokenize:fS};function fS(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),le(e,t,"linePrefix")}}const yi={name:"thematicBreak",tokenize:mS};function mS(e,t,n){let r=0,o;return i;function i(u){return e.enter("thematicBreak"),s(u)}function s(u){return o=u,a(u)}function a(u){return u===o?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||q(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===o?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),ee(u)?le(e,a,"whitespace")(u):a(u))}}const Be={continuation:{tokenize:wS},exit:bS,name:"list",tokenize:xS},gS={partial:!0,tokenize:kS},yS={partial:!0,tokenize:vS};function xS(e,t,n){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,s=0;return a;function a(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:El(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(yi,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return El(h)&&++s<10?(e.consume(h),l):(!r.interrupt||s<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(vs,r.interrupt?n:d,e.attempt(gS,f,p))}function d(h){return r.containerState.initialBlankLine=!0,i++,f(h)}function p(h){return ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function wS(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(vs,o,i);function o(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,le(e,t,"listItemIndent",r.containerState.size+1)(a)}function i(a){return r.containerState.furtherBlankLines||!ee(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(yS,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,le(e,e.attempt(Be,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function vS(e,t,n){const r=this;return le(e,o,"listItemIndent",r.containerState.size+1);function o(i){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(i):n(i)}}function bS(e){e.exit(this.containerState.type)}function kS(e,t,n){const r=this;return le(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){const s=r.events[r.events.length-1];return!ee(i)&&s&&s[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}const Od={name:"setextUnderline",resolveTo:SS,tokenize:ES};function SS(e,t){let n=e.length,r,o,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",s,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end={...e[i][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function ES(e,t,n){const r=this;let o;return i;function i(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),o=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===o?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ee(u)?le(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||q(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const TS={tokenize:NS};function NS(e){const t=this,n=e.attempt(vs,r,e.attempt(this.parser.constructs.flowInitial,o,le(e,e.attempt(this.parser.constructs.flow,o,e.attempt(_1,o)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const jS={resolveAll:km()},CS=bm("string"),IS=bm("text");function bm(e){return{resolveAll:km(e==="text"?AS:void 0),tokenize:t};function t(n){const r=this,o=this.parser.constructs[e],i=n.attempt(o,s,a);return s;function s(d){return u(d)?i(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),i(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const p=o[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function km(e){return t;function t(n,r){let o=-1,i;for(;++o<=n.length;)i===void 0?n[o]&&n[o][1].type==="data"&&(i=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==i+2&&(n[i][1].end=n[o-1][1].end,n.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(n,r):n}}function AS(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],o=t.sliceStream(r);let i=o.length,s=-1,a=0,l;for(;i--;){const u=o[i];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){i++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?s:r.start._bufferIndex+s,_index:r.start._index+i,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const _S={42:Be,43:Be,45:Be,48:Be,49:Be,50:Be,51:Be,52:Be,53:Be,54:Be,55:Be,56:Be,57:Be,62:fm},RS={91:M1},LS={[-2]:ra,[-1]:ra,32:ra},OS={35:$1,42:yi,45:[Od,yi],60:G1,61:Od,95:yi,96:Rd,126:Rd},PS={38:gm,92:mm},MS={[-5]:oa,[-4]:oa,[-3]:oa,33:cS,38:gm,42:Tl,60:[p1,Z1],91:pS,92:[z1,mm],93:Du,95:Tl,96:T1},DS={null:[Tl,jS]},FS={null:[42,95]},BS={null:[]},zS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:FS,contentInitial:RS,disable:BS,document:_S,flow:OS,flowInitial:LS,insideSpan:DS,string:PS,text:MS},Symbol.toStringTag,{value:"Module"}));function US(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const o={},i=[];let s=[],a=[];const l={attempt:j(N),check:j(E),consume:y,enter:w,exit:S,interrupt:j(E,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,l);return t.resolveAll&&i.push(t),u;function p(D){return s=at(s,D),v(),s[s.length-1]!==null?[]:(_(t,0),u.events=Mu(i,u.events,u),u.events)}function f(D,B){return HS(h(D),B)}function h(D){return $S(s,D)}function m(){const{_bufferIndex:D,_index:B,line:J,column:G,offset:P}=r;return{_bufferIndex:D,_index:B,line:J,column:G,offset:P}}function x(D){o[D.line]=D.column,A()}function v(){let D;for(;r._index<s.length;){const B=s[r._index];if(typeof B=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<B.length;)g(B.charCodeAt(r._bufferIndex));else g(B)}}function g(D){d=d(D)}function y(D){q(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,A()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=D}function w(D,B){const J=B||{};return J.type=D,J.start=m(),u.events.push(["enter",J,u]),a.push(J),J}function S(D){const B=a.pop();return B.end=m(),u.events.push(["exit",B,u]),B}function N(D,B){_(D,B.from)}function E(D,B){B.restore()}function j(D,B){return J;function J(G,P,W){let K,R,$,b;return Array.isArray(G)?H(G):"tokenize"in G?H([G]):z(G);function z(ne){return Oe;function Oe(bt){const kt=bt!==null&&ne[bt],Dn=bt!==null&&ne.null,Oo=[...Array.isArray(kt)?kt:kt?[kt]:[],...Array.isArray(Dn)?Dn:Dn?[Dn]:[]];return H(Oo)(bt)}}function H(ne){return K=ne,R=0,ne.length===0?W:k(ne[R])}function k(ne){return Oe;function Oe(bt){return b=M(),$=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?ye():ne.tokenize.call(B?Object.assign(Object.create(u),B):u,l,te,ye)(bt)}}function te(ne){return D($,b),P}function ye(ne){return b.restore(),++R<K.length?k(K[R]):W}}}function _(D,B){D.resolveAll&&!i.includes(D)&&i.push(D),D.resolve&&_t(u.events,B,u.events.length-B,D.resolve(u.events.slice(B),u)),D.resolveTo&&(u.events=D.resolveTo(u.events,u))}function M(){const D=m(),B=u.previous,J=u.currentConstruct,G=u.events.length,P=Array.from(a);return{from:G,restore:W};function W(){r=D,u.previous=B,u.currentConstruct=J,u.events.length=G,a=P,A()}}function A(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function $S(e,t){const n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex;let s;if(n===o)s=[e[n].slice(r,i)];else{if(s=e.slice(n,o),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}i>0&&s.push(e[o].slice(0,i))}return s}function HS(e,t){let n=-1;const r=[];let o;for(;++n<e.length;){const i=e[n];let s;if(typeof i=="string")s=i;else switch(i){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&o)continue;s=" ";break}default:s=String.fromCharCode(i)}o=i===-2,r.push(s)}return r.join("")}function WS(e){const r={constructs:Kk([zS,...(e||{}).extensions||[]]),content:o(i1),defined:[],document:o(a1),flow:o(TS),lazy:{},string:o(CS),text:o(IS)};return r;function o(i){return s;function s(a){return US(r,i,a)}}}function qS(e){for(;!ym(e););return e}const Pd=/[\0\t\n\r]/g;function GS(){let e=1,t="",n=!0,r;return o;function o(i,s,a){const l=[];let u,d,p,f,h;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(s||void 0).decode(i)),p=0,t="",n&&(i.charCodeAt(0)===65279&&p++,n=void 0);p<i.length;){if(Pd.lastIndex=p,u=Pd.exec(i),f=u&&u.index!==void 0?u.index:i.length,h=i.charCodeAt(f),!u){t=i.slice(p);break}if(h===10&&p===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),p<f&&(l.push(i.slice(p,f)),e+=f-p),h){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const VS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function YS(e){return e.replace(VS,JS)}function JS(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const o=n.charCodeAt(1),i=o===120||o===88;return hm(n.slice(i?2:1),i?16:10)}return Pu(n)||e}const Sm={}.hasOwnProperty;function QS(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),KS(n)(qS(WS(n).document().write(GS()(e,t,!0))))}function KS(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Vu),autolinkProtocol:M,autolinkEmail:M,atxHeading:i(Wu),blockQuote:i(Dn),characterEscape:M,characterReference:M,codeFenced:i(Oo),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:i(Oo,s),codeText:i(og,s),codeTextData:M,data:M,codeFlowValue:M,definition:i(ig),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:i(sg),hardBreakEscape:i(qu),hardBreakTrailing:i(qu),htmlFlow:i(Gu,s),htmlFlowData:M,htmlText:i(Gu,s),htmlTextData:M,image:i(ag),label:s,link:i(Vu),listItem:i(lg),listItemValue:f,listOrdered:i(Yu,p),listUnordered:i(Yu),paragraph:i(ug),reference:k,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:i(Wu),strong:i(cg),thematicBreak:i(pg)},exit:{atxHeading:l(),atxHeadingSequence:N,autolink:l(),autolinkEmail:kt,autolinkProtocol:bt,blockQuote:l(),characterEscapeValue:A,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:ne,characterReference:Oe,codeFenced:l(v),codeFencedFence:x,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:A,codeIndented:l(g),codeText:l(P),codeTextData:A,data:A,definition:l(),definitionDestinationString:S,definitionLabelString:y,definitionTitleString:w,emphasis:l(),hardBreakEscape:l(B),hardBreakTrailing:l(B),htmlFlow:l(J),htmlFlowData:A,htmlText:l(G),htmlTextData:A,image:l(K),label:$,labelText:R,lineEnding:D,link:l(W),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:te,resourceDestinationString:b,resourceTitleString:z,resource:H,setextHeading:l(_),setextHeadingLineSequence:j,setextHeadingText:E,strong:l(),thematicBreak:l()}};Em(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(C){let F={type:"root",children:[]};const V={stack:[F],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:d,data:n},X=[];let ie=-1;for(;++ie<C.length;)if(C[ie][1].type==="listOrdered"||C[ie][1].type==="listUnordered")if(C[ie][0]==="enter")X.push(ie);else{const pt=X.pop();ie=o(C,pt,ie)}for(ie=-1;++ie<C.length;){const pt=t[C[ie][0]];Sm.call(pt,C[ie][1].type)&&pt[C[ie][1].type].call(Object.assign({sliceSerialize:C[ie][2].sliceSerialize},V),C[ie][1])}if(V.tokenStack.length>0){const pt=V.tokenStack[V.tokenStack.length-1];(pt[1]||Md).call(V,void 0,pt[0])}for(F.position={start:Vt(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Vt(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},ie=-1;++ie<t.transforms.length;)F=t.transforms[ie](F)||F;return F}function o(C,F,V){let X=F-1,ie=-1,pt=!1,vn,Rt,Er,Tr;for(;++X<=V;){const Ye=C[X];switch(Ye[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ye[0]==="enter"?ie++:ie--,Tr=void 0;break}case"lineEndingBlank":{Ye[0]==="enter"&&(vn&&!Tr&&!ie&&!Er&&(Er=X),Tr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tr=void 0}if(!ie&&Ye[0]==="enter"&&Ye[1].type==="listItemPrefix"||ie===-1&&Ye[0]==="exit"&&(Ye[1].type==="listUnordered"||Ye[1].type==="listOrdered")){if(vn){let Fn=X;for(Rt=void 0;Fn--;){const Lt=C[Fn];if(Lt[1].type==="lineEnding"||Lt[1].type==="lineEndingBlank"){if(Lt[0]==="exit")continue;Rt&&(C[Rt][1].type="lineEndingBlank",pt=!0),Lt[1].type="lineEnding",Rt=Fn}else if(!(Lt[1].type==="linePrefix"||Lt[1].type==="blockQuotePrefix"||Lt[1].type==="blockQuotePrefixWhitespace"||Lt[1].type==="blockQuoteMarker"||Lt[1].type==="listItemIndent"))break}Er&&(!Rt||Er<Rt)&&(vn._spread=!0),vn.end=Object.assign({},Rt?C[Rt][1].start:Ye[1].end),C.splice(Rt||X,0,["exit",vn,Ye[2]]),X++,V++}if(Ye[1].type==="listItemPrefix"){const Fn={type:"listItem",_spread:!1,start:Object.assign({},Ye[1].start),end:void 0};vn=Fn,C.splice(X,0,["enter",Fn,Ye[2]]),X++,V++,Er=void 0,Tr=!0}}}return C[F][1]._spread=pt,V}function i(C,F){return V;function V(X){a.call(this,C(X),X),F&&F.call(this,X)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(C,F,V){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([F,V||void 0]),C.position={start:Vt(F.start),end:void 0}}function l(C){return F;function F(V){C&&C.call(this,V),u.call(this,V)}}function u(C,F){const V=this.stack.pop(),X=this.tokenStack.pop();if(X)X[0].type!==C.type&&(F?F.call(this,C,X[0]):(X[1]||Md).call(this,C,X[0]));else throw new Error("Cannot close `"+C.type+"` ("+Kr({start:C.start,end:C.end})+"): it’s not open");V.position.end=Vt(C.end)}function d(){return Jk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(C){if(this.data.expectingFirstListItemValue){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function h(){const C=this.resume(),F=this.stack[this.stack.length-1];F.lang=C}function m(){const C=this.resume(),F=this.stack[this.stack.length-1];F.meta=C}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function v(){const C=this.resume(),F=this.stack[this.stack.length-1];F.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const C=this.resume(),F=this.stack[this.stack.length-1];F.value=C.replace(/(\r?\n|\r)$/g,"")}function y(C){const F=this.resume(),V=this.stack[this.stack.length-1];V.label=F,V.identifier=lr(this.sliceSerialize(C)).toLowerCase()}function w(){const C=this.resume(),F=this.stack[this.stack.length-1];F.title=C}function S(){const C=this.resume(),F=this.stack[this.stack.length-1];F.url=C}function N(C){const F=this.stack[this.stack.length-1];if(!F.depth){const V=this.sliceSerialize(C).length;F.depth=V}}function E(){this.data.setextHeadingSlurpLineEnding=!0}function j(C){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function _(){this.data.setextHeadingSlurpLineEnding=void 0}function M(C){const V=this.stack[this.stack.length-1].children;let X=V[V.length-1];(!X||X.type!=="text")&&(X=dg(),X.position={start:Vt(C.start),end:void 0},V.push(X)),this.stack.push(X)}function A(C){const F=this.stack.pop();F.value+=this.sliceSerialize(C),F.position.end=Vt(C.end)}function D(C){const F=this.stack[this.stack.length-1];if(this.data.atHardBreak){const V=F.children[F.children.length-1];V.position.end=Vt(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(F.type)&&(M.call(this,C),A.call(this,C))}function B(){this.data.atHardBreak=!0}function J(){const C=this.resume(),F=this.stack[this.stack.length-1];F.value=C}function G(){const C=this.resume(),F=this.stack[this.stack.length-1];F.value=C}function P(){const C=this.resume(),F=this.stack[this.stack.length-1];F.value=C}function W(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=F,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function K(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=F,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function R(C){const F=this.sliceSerialize(C),V=this.stack[this.stack.length-2];V.label=YS(F),V.identifier=lr(F).toLowerCase()}function $(){const C=this.stack[this.stack.length-1],F=this.resume(),V=this.stack[this.stack.length-1];if(this.data.inReference=!0,V.type==="link"){const X=C.children;V.children=X}else V.alt=F}function b(){const C=this.resume(),F=this.stack[this.stack.length-1];F.url=C}function z(){const C=this.resume(),F=this.stack[this.stack.length-1];F.title=C}function H(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function te(C){const F=this.resume(),V=this.stack[this.stack.length-1];V.label=F,V.identifier=lr(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function ye(C){this.data.characterReferenceType=C.type}function ne(C){const F=this.sliceSerialize(C),V=this.data.characterReferenceType;let X;V?(X=hm(F,V==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):X=Pu(F);const ie=this.stack[this.stack.length-1];ie.value+=X}function Oe(C){const F=this.stack.pop();F.position.end=Vt(C.end)}function bt(C){A.call(this,C);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(C)}function kt(C){A.call(this,C);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(C)}function Dn(){return{type:"blockquote",children:[]}}function Oo(){return{type:"code",lang:null,meta:null,value:""}}function og(){return{type:"inlineCode",value:""}}function ig(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function sg(){return{type:"emphasis",children:[]}}function Wu(){return{type:"heading",depth:0,children:[]}}function qu(){return{type:"break"}}function Gu(){return{type:"html",value:""}}function ag(){return{type:"image",title:null,url:"",alt:null}}function Vu(){return{type:"link",title:null,url:"",children:[]}}function Yu(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function lg(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function ug(){return{type:"paragraph",children:[]}}function cg(){return{type:"strong",children:[]}}function dg(){return{type:"text",value:""}}function pg(){return{type:"thematicBreak"}}}function Vt(e){return{line:e.line,column:e.column,offset:e.offset}}function Em(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Em(e,r):XS(e,r)}}function XS(e,t){let n;for(n in t)if(Sm.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Md(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Kr({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Kr({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Kr({start:t.start,end:t.end})+") is still open")}function ZS(e){const t=this;t.parser=n;function n(r){return QS(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function eE(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function tE(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function nE(e,t){const n=t.value?t.value+`
`:"",r={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function rE(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oE(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iE(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Sr(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=i+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function sE(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aE(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Tm(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const o=e.all(t),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const s=o[o.length-1];return s&&s.type==="text"?s.value+=r:o.push({type:"text",value:r}),o}function lE(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tm(e,t);const o={src:Sr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)}function uE(e,t){const n={src:Sr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function cE(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function dE(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Tm(e,t);const o={href:Sr(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function pE(e,t){const n={href:Sr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function hE(e,t,n){const r=e.all(t),o=n?fE(n):Nm(t),i={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(o||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!o?s.push(...d.children):s.push(d)}const l=r[r.length-1];l&&(o||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:i,children:s};return e.patch(t,u),e.applyData(t,u)}function fE(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Nm(n[r])}return t}function Nm(e){const t=e.spread;return t??e.children.length>1}function mE(e,t){const n={},r=e.all(t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){const s=r[o];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function gE(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yE(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function xE(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wE(e,t){const n=e.all(t),r=n.shift(),o=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),o.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=_u(t.children[1]),l=sm(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),o.push(s)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)}function vE(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const p=t.children[l],f={},h=s?s[l]:void 0;h&&(f.align=h);let m={type:"element",tagName:i,properties:f,children:[]};p&&(m.children=e.all(p),e.patch(p,m),m=e.applyData(p,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function bE(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Dd=9,Fd=32;function kE(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),o=0;const i=[];for(;r;)i.push(Bd(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(Bd(t.slice(o),o>0,!1)),i.join("")}function Bd(e,t,n){let r=0,o=e.length;if(t){let i=e.codePointAt(r);for(;i===Dd||i===Fd;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(o-1);for(;i===Dd||i===Fd;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function SE(e,t){const n={type:"text",value:kE(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function EE(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const TE={blockquote:eE,break:tE,code:nE,delete:rE,emphasis:oE,footnoteReference:iE,heading:sE,html:aE,imageReference:lE,image:uE,inlineCode:cE,linkReference:dE,link:pE,listItem:hE,list:mE,paragraph:gE,root:yE,strong:xE,table:wE,tableCell:bE,tableRow:vE,text:SE,thematicBreak:EE,toml:ei,yaml:ei,definition:ei,footnoteDefinition:ei};function ei(){}const jm=-1,bs=0,Zr=1,Yi=2,Fu=3,Bu=4,zu=5,Uu=6,Cm=7,Im=8,NE=typeof self=="object"?self:globalThis,zd=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new NE[e](t)},jE=(e,t)=>{const n=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,s]=t[o];switch(i){case bs:case jm:return n(s,o);case Zr:{const a=n([],o);for(const l of s)a.push(r(l));return a}case Yi:{const a=n({},o);for(const[l,u]of s)a[r(l)]=r(u);return a}case Fu:return n(new Date(s),o);case Bu:{const{source:a,flags:l}=s;return n(new RegExp(a,l),o)}case zu:{const a=n(new Map,o);for(const[l,u]of s)a.set(r(l),r(u));return a}case Uu:{const a=n(new Set,o);for(const l of s)a.add(r(l));return a}case Cm:{const{name:a,message:l}=s;return n(zd(a,l),o)}case Im:return n(BigInt(s),o);case"BigInt":return n(Object(BigInt(s)),o);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(zd(i,s),o)};return r},Ud=e=>jE(new Map,e)(0),zn="",{toString:CE}={},{keys:IE}=Object,Pr=e=>{const t=typeof e;if(t!=="object"||!e)return[bs,t];const n=CE.call(e).slice(8,-1);switch(n){case"Array":return[Zr,zn];case"Object":return[Yi,zn];case"Date":return[Fu,zn];case"RegExp":return[Bu,zn];case"Map":return[zu,zn];case"Set":return[Uu,zn];case"DataView":return[Zr,n]}return n.includes("Array")?[Zr,n]:n.includes("Error")?[Cm,n]:[Yi,n]},ti=([e,t])=>e===bs&&(t==="function"||t==="symbol"),AE=(e,t,n,r)=>{const o=(s,a)=>{const l=r.push(s)-1;return n.set(a,l),l},i=s=>{if(n.has(s))return n.get(s);let[a,l]=Pr(s);switch(a){case bs:{let d=s;switch(l){case"bigint":a=Im,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return o([jm],s)}return o([a,d],s)}case Zr:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),o([l,[...f]],s)}const d=[],p=o([a,d],s);for(const f of s)d.push(i(f));return p}case Yi:{if(l)switch(l){case"BigInt":return o([l,s.toString()],s);case"Boolean":case"Number":case"String":return o([l,s.valueOf()],s)}if(t&&"toJSON"in s)return i(s.toJSON());const d=[],p=o([a,d],s);for(const f of IE(s))(e||!ti(Pr(s[f])))&&d.push([i(f),i(s[f])]);return p}case Fu:return o([a,s.toISOString()],s);case Bu:{const{source:d,flags:p}=s;return o([a,{source:d,flags:p}],s)}case zu:{const d=[],p=o([a,d],s);for(const[f,h]of s)(e||!(ti(Pr(f))||ti(Pr(h))))&&d.push([i(f),i(h)]);return p}case Uu:{const d=[],p=o([a,d],s);for(const f of s)(e||!ti(Pr(f)))&&d.push(i(f));return p}}const{message:u}=s;return o([a,{name:l,message:u}],s)};return i},$d=(e,{json:t,lossy:n}={})=>{const r=[];return AE(!(t||n),!!t,new Map,r)(e),r},Ji=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ud($d(e,t)):structuredClone(e):(e,t)=>Ud($d(e,t));function _E(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function RE(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function LE(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||_E,r=e.options.footnoteBackLabel||RE,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Sr(p.toLowerCase());let h=0;const m=[],x=e.footnoteCounts.get(p);for(;x!==void 0&&++h<=x;){m.length>0&&m.push({type:"text",value:" "});let y=typeof n=="string"?n:n(l,h);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const v=d[d.length-1];if(v&&v.type==="element"&&v.tagName==="p"){const y=v.children[v.children.length-1];y&&y.type==="text"?y.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...Ji(s),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Am=function(e){if(e==null)return DE;if(typeof e=="function")return ks(e);if(typeof e=="object")return Array.isArray(e)?OE(e):PE(e);if(typeof e=="string")return ME(e);throw new Error("Expected function, string, or object as test")};function OE(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Am(e[n]);return ks(r);function r(...o){let i=-1;for(;++i<t.length;)if(t[i].apply(this,o))return!0;return!1}}function PE(e){const t=e;return ks(n);function n(r){const o=r;let i;for(i in e)if(o[i]!==t[i])return!1;return!0}}function ME(e){return ks(t);function t(n){return n&&n.type===e}}function ks(e){return t;function t(n,r,o){return!!(FE(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function DE(){return!0}function FE(e){return e!==null&&typeof e=="object"&&"type"in e}const _m=[],BE=!0,Hd=!1,zE="skip";function UE(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;const i=Am(o),s=r?-1:1;a(e,void 0,[])();function a(l,u,d){const p=l&&typeof l=="object"?l:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=_m,m,x,v;if((!t||i(l,u,d[d.length-1]||void 0))&&(h=$E(n(l,d)),h[0]===Hd))return h;if("children"in l&&l.children){const g=l;if(g.children&&h[0]!==zE)for(x=(r?g.children.length:-1)+s,v=d.concat(g);x>-1&&x<g.children.length;){const y=g.children[x];if(m=a(y,x,v)(),m[0]===Hd)return m;x=typeof m[1]=="number"?m[1]:x+s}}return h}}}function $E(e){return Array.isArray(e)?e:typeof e=="number"?[BE,e]:e==null?_m:[e]}function Rm(e,t,n,r){let o,i,s;typeof t=="function"&&typeof n!="function"?(i=void 0,s=t,o=n):(i=t,s=n,o=r),UE(e,i,a,o);function a(l,u){const d=u[u.length-1],p=d?d.children.indexOf(l):void 0;return s(l,p,d)}}const Nl={}.hasOwnProperty,HE={};function WE(e,t){const n=t||HE,r=new Map,o=new Map,i=new Map,s={...TE,...n.handlers},a={all:u,applyData:GE,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:s,one:l,options:n,patch:qE,wrap:YE};return Rm(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:o,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),a;function l(d,p){const f=d.type,h=a.handlers[f];if(Nl.call(a.handlers,f)&&h)return h(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:x,...v}=d,g=Ji(v);return g.children=a.all(d),g}return Ji(d)}return(a.options.unknownHandler||VE)(a,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=a.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=Wd(m.value)),!Array.isArray(m)&&m.type==="element")){const x=m.children[0];x&&x.type==="text"&&(x.value=Wd(x.value))}Array.isArray(m)?p.push(...m):p.push(m)}}}return p}}function qE(e,t){e.position&&(t.position=jk(e))}function GE(e,t){let n=t;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&i&&Object.assign(n.properties,Ji(i)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function VE(e,t){const n=t.data||{},r="value"in t&&!(Nl.call(n,"hProperties")||Nl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function YE(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Wd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function qd(e,t){const n=WE(e,t),r=n.one(e,void 0),o=LE(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function JE(e,t){return e&&"run"in e?async function(n,r){const o=qd(n,{file:r,...t});await e.run(o,r)}:function(n,r){return qd(n,{file:r,...e||t})}}function Gd(e){if(e)throw e}var xi=Object.prototype.hasOwnProperty,Lm=Object.prototype.toString,Vd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Jd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Lm.call(t)==="[object Array]"},Qd=function(t){if(!t||Lm.call(t)!=="[object Object]")return!1;var n=xi.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&xi.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var o;for(o in t);return typeof o>"u"||xi.call(t,o)},Kd=function(t,n){Vd&&n.name==="__proto__"?Vd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Xd=function(t,n){if(n==="__proto__")if(xi.call(t,n)){if(Yd)return Yd(t,n).value}else return;return t[n]},QE=function e(){var t,n,r,o,i,s,a=arguments[0],l=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Xd(a,n),o=Xd(t,n),a!==o&&(d&&o&&(Qd(o)||(i=Jd(o)))?(i?(i=!1,s=r&&Jd(r)?r:[]):s=r&&Qd(r)?r:{},Kd(a,{name:n,newValue:e(d,s,o)})):typeof o<"u"&&Kd(a,{name:n,newValue:o}));return a};const ia=Al(QE);function jl(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function KE(){const e=[],t={run:n,use:r};return t;function n(...o){let i=-1;const s=o.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...o);function a(l,...u){const d=e[++i];let p=-1;if(l){s(l);return}for(;++p<o.length;)(u[p]===null||u[p]===void 0)&&(u[p]=o[p]);o=u,d?XE(d,a)(...u):s(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function XE(e,t){let n;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(o);try{l=e.apply(this,s)}catch(u){const d=u;if(a&&n)throw d;return o(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(i,o):l instanceof Error?o(l):i(l))}function o(s,...a){n||(n=!0,t(s,...a))}function i(s){o(null,s)}}const Tt={basename:ZE,dirname:eT,extname:tT,join:nT,sep:"/"};function ZE(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ro(e);let n=0,r=-1,o=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else s<0&&(i=!0,s=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function eT(e){if(Ro(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function tT(e){Ro(e);let t=e.length,n=-1,r=0,o=-1,i=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?o<0?o=t:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||n<0||i===0||i===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function nT(...e){let t=-1,n;for(;++t<e.length;)Ro(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":rT(n)}function rT(e){Ro(e);const t=e.codePointAt(0)===47;let n=oT(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function oT(e,t){let n="",r=0,o=-1,i=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length>0){n="",r=0,o=s,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,s):n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i>-1?i++:i=-1}return n}function Ro(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const iT={cwd:sT};function sT(){return"/"}function Cl(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function aT(e){if(typeof e=="string")e=new URL(e);else if(!Cl(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return lT(e)}function lT(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const sa=["history","path","basename","stem","extname","dirname"];class Om{constructor(t){let n;t?Cl(t)?n={path:t}:typeof t=="string"||uT(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":iT.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<sa.length;){const i=sa[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let o;for(o in n)sa.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?Tt.basename(this.path):void 0}set basename(t){la(t,"basename"),aa(t,"basename"),this.path=Tt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Tt.dirname(this.path):void 0}set dirname(t){Zd(this.basename,"dirname"),this.path=Tt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Tt.extname(this.path):void 0}set extname(t){if(aa(t,"extname"),Zd(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Tt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Cl(t)&&(t=aT(t)),la(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Tt.basename(this.path,this.extname):void 0}set stem(t){la(t,"stem"),aa(t,"stem"),this.path=Tt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){const o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){const o=new Le(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function aa(e,t){if(e&&e.includes(Tt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Tt.sep+"`")}function la(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Zd(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function uT(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const cT=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},dT={}.hasOwnProperty;class $u extends cT{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=KE()}copy(){const t=new $u;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ia(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(da("data",this.frozen),this.namespace[t]=n,this):dT.call(this.namespace,t)&&this.namespace[t]||void 0:t?(da("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ni(t),r=this.parser||this.Parser;return ua("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),ua("process",this.parser||this.Parser),ca("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(i,s){const a=ni(t),l=r.parse(a);r.run(l,a,function(d,p,f){if(d||!p||!f)return u(d);const h=p,m=r.stringify(h,f);fT(m)?f.value=m:f.result=m,u(d,f)});function u(d,p){d||!p?s(d):i?i(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),ua("processSync",this.parser||this.Parser),ca("processSync",this.compiler||this.Compiler),this.process(t,o),tp("processSync","process",n),r;function o(i,s){n=!0,Gd(i),r=s}}run(t,n,r){ep(t),this.freeze();const o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(s,a){const l=ni(n);o.run(t,l,u);function u(d,p,f){const h=p||t;d?a(d):s?s(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,o;return this.run(t,n,i),tp("runSync","run",r),o;function i(s,a){Gd(s),o=a,r=!0}}stringify(t,n){this.freeze();const r=ni(n),o=this.compiler||this.Compiler;return ca("stringify",o),ep(t),o(t,r)}use(t,...n){const r=this.attachers,o=this.namespace;if(da("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;l(d,p)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(o.settings=ia(!0,o.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];i(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const x=r[f][1];jl(x)&&jl(h)&&(h=ia(!0,x,h)),r[f]=[u,h,...m]}}}}const pT=new $u().freeze();function ua(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function ca(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function da(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ep(e){if(!jl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function tp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ni(e){return hT(e)?e:new Om(e)}function hT(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function fT(e){return typeof e=="string"||mT(e)}function mT(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const gT="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",np=[],rp={allowDangerousHtml:!0},yT=/^(https?|ircs?|mailto|xmpp)$/i,xT=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Pm(e){const t=wT(e),n=vT(e);return bT(t.runSync(t.parse(n),n),e)}function wT(e){const t=e.rehypePlugins||np,n=e.remarkPlugins||np,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...rp}:rp;return pT().use(ZS).use(n).use(JE,r).use(t)}function vT(e){const t=e.children||"",n=new Om;return typeof t=="string"&&(n.value=t),n}function bT(e,t){const n=t.allowedElements,r=t.allowElement,o=t.components,i=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||kT;for(const d of xT)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+gT+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Rm(e,u),Rk(e,{Fragment:c.Fragment,components:o,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in na)if(Object.hasOwn(na,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],x=na[h];(x===null||x.includes(d.tagName))&&(d.properties[h]=l(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):i?i.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return a&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function kT(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t===-1||o!==-1&&t>o||n!==-1&&t>n||r!==-1&&t>r||yT.test(e.slice(0,t))?e:""}const Il=[{id:"natural-en-uk",label:"Natural — UK",description:"Calm British narrator, default for lessons.",preferredVoiceNames:["Microsoft Libby Online (Natural) - English (United Kingdom)","Microsoft Sonia Online (Natural) - English (United Kingdom)","Microsoft Ryan Online (Natural) - English (United Kingdom)","Google UK English Female","Google UK English Male","Daniel","Kate"],rate:1,pitch:1,lang:"en-GB"},{id:"natural-en-us",label:"Natural — US",description:"Clear American narrator, good for code-heavy explainers.",preferredVoiceNames:["Microsoft Ava Online (Natural) - English (United States)","Microsoft Andrew Online (Natural) - English (United States)","Microsoft Jenny Online (Natural) - English (United States)","Microsoft Aria Online (Natural) - English (United States)","Google US English","Samantha","Alex"],rate:1,pitch:1,lang:"en-US"},{id:"crisp-en-us",label:"Crisp — US",description:"Slightly faster cadence for review sessions.",preferredVoiceNames:["Microsoft Aria Online (Natural) - English (United States)","Microsoft Jenny Online (Natural) - English (United States)","Google US English","Samantha"],rate:1.12,pitch:1,lang:"en-US"},{id:"warm-en-uk",label:"Warm — UK",description:"Lower pitch, slower — good for dense theory blocks.",preferredVoiceNames:["Microsoft Ryan Online (Natural) - English (United Kingdom)","Microsoft Sonia Online (Natural) - English (United Kingdom)","Daniel","Google UK English Male"],rate:.92,pitch:.95,lang:"en-GB"},{id:"system-default",label:"System default",description:"Whatever your browser/OS picks first.",preferredVoiceNames:[],rate:1,pitch:1,lang:"en-US"}],Mm="natural-en-uk";function ST(e){const t=e.name.toLowerCase();return t.includes("online")||t.includes("natural")||t.includes("google")}function ET(e,t){if(t.length===0)return;for(const o of e.preferredVoiceNames){const i=t.find(s=>s.name===o);if(i)return i}const n=t.find(o=>o.lang===e.lang);if(n)return n;const r=t.find(o=>o.lang.startsWith(e.lang.split("-")[0]??"en"));return r||t[0]}function Dm(e={}){const t=typeof window<"u"&&"speechSynthesis"in window,[n,r]=T.useState("idle"),[o,i]=T.useState([]),s=T.useRef(""),a=T.useRef(null),l=T.useMemo(()=>{const v=e.presetId??Mm;return Il.find(g=>g.id===v)??Il[0]},[e.presetId]);T.useEffect(()=>{if(!t)return;const v=window.speechSynthesis,g=()=>i(v.getVoices());return g(),v.addEventListener("voiceschanged",g),()=>v.removeEventListener("voiceschanged",g)},[t]);const u=T.useMemo(()=>o.length?ET(l,o):void 0,[l,o]),d=T.useCallback(v=>{const g=new SpeechSynthesisUtterance(v);return g.rate=e.rate??l.rate,g.pitch=e.pitch??l.pitch,g.lang=l.lang,u&&(g.voice=u),g.onend=()=>r("idle"),g.onerror=()=>r("idle"),g},[e.pitch,e.rate,l.lang,l.pitch,l.rate,u]),p=T.useCallback(v=>{if(!t)return;const g=window.speechSynthesis;g.cancel(),s.current=v;const y=d(v);a.current=y,g.speak(y),r("playing")},[d,t]),f=T.useCallback(()=>{t&&window.speechSynthesis.speaking&&!window.speechSynthesis.paused&&(window.speechSynthesis.pause(),r("paused"))},[t]),h=T.useCallback(()=>{if(!t)return;const v=window.speechSynthesis;if(v.paused){v.resume(),r("playing");return}if(!v.speaking&&s.current){const g=d(s.current);a.current=g,v.speak(g),r("playing")}},[d,t]),m=T.useCallback(()=>{!t||!s.current||p(s.current)},[p,t]),x=T.useCallback(()=>{t&&(window.speechSynthesis.cancel(),r("idle"))},[t]);return T.useEffect(()=>()=>{t&&window.speechSynthesis.cancel()},[t]),{status:n,voices:o,preset:l,selectedVoice:u,play:p,pause:f,resume:h,restart:m,stop:x,supported:t}}function TT({text:e,compact:t=!1}){const{progress:n}=Ge(),{status:r,play:o,pause:i,resume:s,restart:a,stop:l,supported:u,selectedVoice:d,preset:p}=Dm({presetId:n.settings.voicePresetId,rate:n.settings.rate,pitch:n.settings.pitch});if(!u)return c.jsx("div",{className:"text-xs text-ink-300",children:"Speech synthesis unavailable in this browser."});const f=r==="playing",h=r==="paused";return c.jsxs("div",{className:`flex items-center gap-2 ${t?"":"rounded-lg border border-ink-700 bg-ink-800/60 px-3 py-2"}`,children:[!f&&!h&&c.jsxs("button",{type:"button",onClick:()=>o(e),className:"btn-primary",children:[c.jsx(op,{})," Listen"]}),f&&c.jsxs("button",{type:"button",onClick:i,className:"btn-ghost",children:[c.jsx(NT,{})," Pause"]}),h&&c.jsxs("button",{type:"button",onClick:s,className:"btn-primary",children:[c.jsx(op,{})," Resume"]}),(f||h)&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:a,className:"btn-ghost min-w-[40px] px-2",title:"Restart","aria-label":"Restart",children:c.jsx(CT,{})}),c.jsx("button",{type:"button",onClick:l,className:"btn-danger min-w-[40px] px-2",title:"Stop","aria-label":"Stop",children:c.jsx(jT,{})})]}),!t&&c.jsx("span",{className:"ml-2 text-xs text-ink-300 truncate",children:d?d.name:p.label})]})}function op(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M8 5v14l11-7z"})})}function NT(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M6 5h4v14H6zM14 5h4v14h-4z"})})}function jT(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M6 6h12v12H6z"})})}function CT(){return c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:c.jsx("path",{d:"M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"})})}function Fm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Fm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Bm(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Fm(e))&&(r&&(r+=" "),r+=t);return r}var IT=Object.create,Ss=Object.defineProperty,AT=Object.defineProperties,_T=Object.getOwnPropertyDescriptor,RT=Object.getOwnPropertyDescriptors,zm=Object.getOwnPropertyNames,Qi=Object.getOwnPropertySymbols,LT=Object.getPrototypeOf,Hu=Object.prototype.hasOwnProperty,Um=Object.prototype.propertyIsEnumerable,ip=(e,t,n)=>t in e?Ss(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,At=(e,t)=>{for(var n in t||(t={}))Hu.call(t,n)&&ip(e,n,t[n]);if(Qi)for(var n of Qi(t))Um.call(t,n)&&ip(e,n,t[n]);return e},Es=(e,t)=>AT(e,RT(t)),$m=(e,t)=>{var n={};for(var r in e)Hu.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Qi)for(var r of Qi(e))t.indexOf(r)<0&&Um.call(e,r)&&(n[r]=e[r]);return n},OT=(e,t)=>function(){return t||(0,e[zm(e)[0]])((t={exports:{}}).exports,t),t.exports},PT=(e,t)=>{for(var n in t)Ss(e,n,{get:t[n],enumerable:!0})},MT=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of zm(t))!Hu.call(e,o)&&o!==n&&Ss(e,o,{get:()=>t[o],enumerable:!(r=_T(t,o))||r.enumerable});return e},DT=(e,t,n)=>(n=e!=null?IT(LT(e)):{},MT(!e||!e.__esModule?Ss(n,"default",{value:e,enumerable:!0}):n,e)),FT=OT({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,t){var n=function(){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={util:{encode:function m(x){return x instanceof a?new a(x.type,m(x.content),x.alias):Array.isArray(x)?x.map(m):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(x,v){v=v||{};var g,y;switch(s.util.type(x)){case"Object":if(y=s.util.objId(x),v[y])return v[y];g={},v[y]=g;for(var w in x)x.hasOwnProperty(w)&&(g[w]=m(x[w],v));return g;case"Array":return y=s.util.objId(x),v[y]?v[y]:(g=[],v[y]=g,x.forEach(function(S,N){g[N]=m(S,v)}),g);default:return x}},getLanguage:function(m){for(;m;){var x=r.exec(m.className);if(x)return x[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,x){m.className=m.className.replace(RegExp(r,"gi"),""),m.classList.add("language-"+x)},isActive:function(m,x,v){for(var g="no-"+x;m;){var y=m.classList;if(y.contains(x))return!0;if(y.contains(g))return!1;m=m.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,x){var v=s.util.clone(s.languages[m]);for(var g in x)v[g]=x[g];return v},insertBefore:function(m,x,v,g){g=g||s.languages;var y=g[m],w={};for(var S in y)if(y.hasOwnProperty(S)){if(S==x)for(var N in v)v.hasOwnProperty(N)&&(w[N]=v[N]);v.hasOwnProperty(S)||(w[S]=y[S])}var E=g[m];return g[m]=w,s.languages.DFS(s.languages,function(j,_){_===E&&j!=m&&(this[j]=w)}),w},DFS:function m(x,v,g,y){y=y||{};var w=s.util.objId;for(var S in x)if(x.hasOwnProperty(S)){v.call(x,S,x[S],g||S);var N=x[S],E=s.util.type(N);E==="Object"&&!y[w(N)]?(y[w(N)]=!0,m(N,v,null,y)):E==="Array"&&!y[w(N)]&&(y[w(N)]=!0,m(N,v,S,y))}}},plugins:{},highlight:function(m,x,v){var g={code:m,grammar:x,language:v};if(s.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=s.tokenize(g.code,g.grammar),s.hooks.run("after-tokenize",g),a.stringify(s.util.encode(g.tokens),g.language)},tokenize:function(m,x){var v=x.rest;if(v){for(var g in v)x[g]=v[g];delete x.rest}var y=new d;return p(y,y.head,m),u(m,y,x,y.head,0),h(y)},hooks:{all:{},add:function(m,x){var v=s.hooks.all;v[m]=v[m]||[],v[m].push(x)},run:function(m,x){var v=s.hooks.all[m];if(!(!v||!v.length))for(var g=0,y;y=v[g++];)y(x)}},Token:a};function a(m,x,v,g){this.type=m,this.content=x,this.alias=v,this.length=(g||"").length|0}a.stringify=function m(x,v){if(typeof x=="string")return x;if(Array.isArray(x)){var g="";return x.forEach(function(E){g+=m(E,v)}),g}var y={type:x.type,content:m(x.content,v),tag:"span",classes:["token",x.type],attributes:{},language:v},w=x.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(y.classes,w):y.classes.push(w)),s.hooks.run("wrap",y);var S="";for(var N in y.attributes)S+=" "+N+'="'+(y.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+y.tag+' class="'+y.classes.join(" ")+'"'+S+">"+y.content+"</"+y.tag+">"};function l(m,x,v,g){m.lastIndex=x;var y=m.exec(v);if(y&&g&&y[1]){var w=y[1].length;y.index+=w,y[0]=y[0].slice(w)}return y}function u(m,x,v,g,y,w){for(var S in v)if(!(!v.hasOwnProperty(S)||!v[S])){var N=v[S];N=Array.isArray(N)?N:[N];for(var E=0;E<N.length;++E){if(w&&w.cause==S+","+E)return;var j=N[E],_=j.inside,M=!!j.lookbehind,A=!!j.greedy,D=j.alias;if(A&&!j.pattern.global){var B=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,B+"g")}for(var J=j.pattern||j,G=g.next,P=y;G!==x.tail&&!(w&&P>=w.reach);P+=G.value.length,G=G.next){var W=G.value;if(x.length>m.length)return;if(!(W instanceof a)){var K=1,R;if(A){if(R=l(J,P,m,M),!R||R.index>=m.length)break;var H=R.index,$=R.index+R[0].length,b=P;for(b+=G.value.length;H>=b;)G=G.next,b+=G.value.length;if(b-=G.value.length,P=b,G.value instanceof a)continue;for(var z=G;z!==x.tail&&(b<$||typeof z.value=="string");z=z.next)K++,b+=z.value.length;K--,W=m.slice(P,b),R.index-=P}else if(R=l(J,0,W,M),!R)continue;var H=R.index,k=R[0],te=W.slice(0,H),ye=W.slice(H+k.length),ne=P+W.length;w&&ne>w.reach&&(w.reach=ne);var Oe=G.prev;te&&(Oe=p(x,Oe,te),P+=te.length),f(x,Oe,K);var bt=new a(S,_?s.tokenize(k,_):k,D,k);if(G=p(x,Oe,bt),ye&&p(x,G,ye),K>1){var kt={cause:S+","+E,reach:ne};u(m,x,v,G.prev,P,kt),w&&kt.reach>w.reach&&(w.reach=kt.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},x={value:null,prev:m,next:null};m.next=x,this.head=m,this.tail=x,this.length=0}function p(m,x,v){var g=x.next,y={value:v,prev:x,next:g};return x.next=y,g.prev=y,m.length++,y}function f(m,x,v){for(var g=x.next,y=0;y<v&&g!==m.tail;y++)g=g.next;x.next=g,g.prev=x,m.length-=y}function h(m){for(var x=[],v=m.head.next;v!==m.tail;)x.push(v.value),v=v.next;return x}return s}();t.exports=n,n.default=n}}),I=DT(FT());I.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},I.languages.markup.tag.inside["attr-value"].inside.entity=I.languages.markup.entity,I.languages.markup.doctype.inside["internal-subset"].inside=I.languages.markup,I.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(I.languages.markup.tag,"addInlined",{value:function(e,r){var n={},n=(n["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:I.languages[r]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),r=(n["language-"+r]={pattern:/[\s\S]+/,inside:I.languages[r]},{});r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},I.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(I.languages.markup.tag,"addAttribute",{value:function(e,t){I.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:I.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),I.languages.html=I.languages.markup,I.languages.mathml=I.languages.markup,I.languages.svg=I.languages.markup,I.languages.xml=I.languages.extend("markup",{}),I.languages.ssml=I.languages.xml,I.languages.atom=I.languages.xml,I.languages.rss=I.languages.xml,function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,r="(?:[^\\\\-]|"+n.source+")",r=RegExp(r+"-"+r),o={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:r,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:n}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":o}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":o}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(I),I.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},I.languages.javascript=I.languages.extend("clike",{"class-name":[I.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),I.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,I.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:I.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:I.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:I.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:I.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:I.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),I.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:I.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),I.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),I.languages.markup&&(I.languages.markup.tag.addInlined("script","javascript"),I.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),I.languages.js=I.languages.javascript,I.languages.actionscript=I.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),I.languages.actionscript["class-name"].alias="function",delete I.languages.actionscript.parameter,delete I.languages.actionscript["literal-property"],I.languages.markup&&I.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:I.languages.markup}}),function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"],e.languages.coffee=e.languages.coffeescript}(I),function(e){var t=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(t,"addSupport",{value:function(n,r){(n=typeof n=="string"?[n]:n).forEach(function(o){var i=function(p){p.inside||(p.inside={}),p.inside.rest=r},s="doc-comment";if(a=e.languages[o]){var a,l=a[s];if((l=l||(a=e.languages.insertBefore(o,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[s])instanceof RegExp&&(l=a[s]={pattern:l}),Array.isArray(l))for(var u=0,d=l.length;u<d;u++)l[u]instanceof RegExp&&(l[u]={pattern:l[u]}),i(l[u]);else i(l)}})}}),t.addSupport(["java","javascript","php"],t)}(I),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(I),function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,number:n})}(I),function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(a,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return a});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(I),function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(u){return u=u.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,o=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),i=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,s=(e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+o+i+"(?:"+o+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+o+i+")(?:"+o+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+o+")"+i+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+o+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(d){u!==d&&(e.languages.markdown[u].inside.content.inside[d]=e.languages.markdown[d])})}),e.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function d(p){if(p&&typeof p!="string")for(var f=0,h=p.length;f<h;f++){var m,x=p[f];x.type!=="code"?d(x.content):(m=x.content[1],x=x.content[3],m&&x&&m.type==="code-language"&&x.type==="code-block"&&typeof m.content=="string"&&(m=m.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),m="language-"+(m=(/[a-z][\w-]*/i.exec(m)||[""])[0].toLowerCase()),x.alias?typeof x.alias=="string"?x.alias=[x.alias,m]:x.alias.push(m):x.alias=[m]))}}(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var d="",p=0,f=u.classes.length;p<f;p++){var h=u.classes[p],h=/language-(.+)/.exec(h);if(h){d=h[1];break}}var m,x=e.languages[d];x?u.content=e.highlight(function(v){return v=v.replace(s,""),v=v.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(g,y){var w;return(y=y.toLowerCase())[0]==="#"?(w=y[1]==="x"?parseInt(y.slice(2),16):Number(y.slice(1)),l(w)):a[y]||g})}(u.content),x,d):d&&d!=="none"&&e.plugins.autoloader&&(m="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=m,e.plugins.autoloader.loadLanguages(d,function(){var v=document.getElementById(m);v&&(v.innerHTML=e.highlight(v.textContent,e.languages[d],d))}))}}),RegExp(e.languages.markup.tag.pattern.source,"gi")),a={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(I),I.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:I.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},I.hooks.add("after-tokenize",function(e){if(e.language==="graphql")for(var t=e.tokens.filter(function(m){return typeof m!="string"&&m.type!=="comment"&&m.type!=="scalar"}),n=0;n<t.length;){var r=t[n++];if(r.type==="keyword"&&r.content==="mutation"){var o=[];if(p(["definition-mutation","punctuation"])&&d(1).content==="("){n+=2;var i=f(/^\($/,/^\)$/);if(i===-1)continue;for(;n<i;n++){var s=d(0);s.type==="variable"&&(h(s,"variable-input"),o.push(s.content))}n=i+1}if(p(["punctuation","property-query"])&&d(0).content==="{"&&(n++,h(d(0),"property-mutation"),0<o.length)){var a=f(/^\{$/,/^\}$/);if(a!==-1)for(var l=n;l<a;l++){var u=t[l];u.type==="variable"&&0<=o.indexOf(u.content)&&h(u,"variable-input")}}}}function d(m){return t[n+m]}function p(m,x){x=x||0;for(var v=0;v<m.length;v++){var g=d(v+x);if(!g||g.type!==m[v])return}return 1}function f(m,x){for(var v=1,g=n;g<t.length;g++){var y=t[g],w=y.content;if(y.type==="punctuation"&&typeof w=="string"){if(m.test(w))v++;else if(x.test(w)&&--v===0)return g}}return-1}function h(m,x){var v=m.alias;v?Array.isArray(v)||(m.alias=v=[v]):m.alias=v=[],v.push(x)}}),I.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,o=r.inside["interpolation-punctuation"],i=r.pattern.source;function s(p,f){if(e.languages[p])return{pattern:RegExp("((?:"+f+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:p}}}}function a(p,f,h){return p={code:p,grammar:f,language:h},e.hooks.run("before-tokenize",p),p.tokens=e.tokenize(p.code,p.grammar),e.hooks.run("after-tokenize",p),p.tokens}function l(p,f,h){var v=e.tokenize(p,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),m=0,x={},v=a(v.map(function(y){if(typeof y=="string")return y;for(var w,S,y=y.content;p.indexOf((S=m++,w="___"+h.toUpperCase()+"_"+S+"___"))!==-1;);return x[w]=y,w}).join(""),f,h),g=Object.keys(x);return m=0,function y(w){for(var S=0;S<w.length;S++){if(m>=g.length)return;var N,E,j,_,M,A,D,B=w[S];typeof B=="string"||typeof B.content=="string"?(N=g[m],(D=(A=typeof B=="string"?B:B.content).indexOf(N))!==-1&&(++m,E=A.substring(0,D),M=x[N],j=void 0,(_={})["interpolation-punctuation"]=o,(_=e.tokenize(M,_)).length===3&&((j=[1,1]).push.apply(j,a(_[1],e.languages.javascript,"javascript")),_.splice.apply(_,j)),j=new e.Token("interpolation",_,r.alias,M),_=A.substring(D+N.length),M=[],E&&M.push(E),M.push(j),_&&(y(A=[_]),M.push.apply(M,A)),typeof B=="string"?(w.splice.apply(w,[S,1].concat(M)),S+=M.length-1):B.content=M)):(D=B.content,Array.isArray(D)?y(D):y([D]))}}(v),new e.Token(h,v,"language-"+h,p)}e.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),t].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function d(p){return typeof p=="string"?p:Array.isArray(p)?p.map(d).join(""):d(p.content)}e.hooks.add("after-tokenize",function(p){p.language in u&&function f(h){for(var m=0,x=h.length;m<x;m++){var v,g,y,w=h[m];typeof w!="string"&&(v=w.content,Array.isArray(v)?w.type==="template-string"?(w=v[1],v.length===3&&typeof w!="string"&&w.type==="embedded-code"&&(g=d(w),w=w.alias,w=Array.isArray(w)?w[0]:w,y=e.languages[w])&&(v[1]=l(g,y,w))):f(v):typeof v!="string"&&f([v]))}}(p.tokens)})}(I),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(I),function(e){var t=e.languages.javascript,n=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,r="(@(?:arg|argument|param|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(r+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(r+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:t,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{string:t.string,number:t.number,boolean:t.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:t,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(I),function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),e.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(I),I.languages.n4js=I.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),I.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),I.languages.n4jsd=I.languages.n4js,function(e){function t(s,a){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),a)}e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),e.languages.insertBefore("javascript","keyword",{imports:{pattern:t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:t(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],r=0;r<n.length;r++){var i=n[r],o=e.languages.javascript[i],i=(o=e.util.type(o)==="RegExp"?e.languages.javascript[i]={pattern:o}:o).inside||{};(o.inside=i)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(I),function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(l,u)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);function s(l){for(var u=[],d=0;d<l.length;d++){var p=l[d],f=!1;typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===a(p.content[0].content[1])&&u.pop():p.content[p.content.length-1].content!=="/>"&&u.push({tagName:a(p.content[0].content[1]),openedBraces:0}):0<u.length&&p.type==="punctuation"&&p.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&p.type==="punctuation"&&p.content==="}"?u[u.length-1].openedBraces--:f=!0),(f||typeof p=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(f=a(p),d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(f+=a(l[d+1]),l.splice(d+1,1)),0<d&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(f=a(l[d-1])+f,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",f,null,f)),p.content&&typeof p.content!="string"&&s(p.content)}}var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||s(l.tokens)})}(I),function(e){var t=e.util.clone(e.languages.typescript),t=(e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"],e.languages.tsx.tag);t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0}(I),I.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},I.languages.swift["string-literal"].forEach(function(e){e.inside.interpolation.inside=I.languages.swift}),function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"];var t={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:t},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:t},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(I),I.languages.c=I.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),I.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),I.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},I.languages.c.string],char:I.languages.c.char,comment:I.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:I.languages.c}}}}),I.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete I.languages.c.boolean,I.languages.objectivec=I.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete I.languages.objectivec["class-name"],I.languages.objc=I.languages.objectivec,I.languages.reason=I.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),I.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete I.languages.reason.function,function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(I),I.languages.go=I.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),I.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete I.languages.go["class-name"],function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(I),I.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},I.languages.python["string-interpolation"].inside.interpolation.inside.rest=I.languages.python,I.languages.py=I.languages.python,I.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},I.languages.webmanifest=I.languages.json;var Hm={};PT(Hm,{dracula:()=>zT,duotoneDark:()=>$T,duotoneLight:()=>WT,github:()=>GT,gruvboxMaterialDark:()=>bN,gruvboxMaterialLight:()=>SN,jettwaveDark:()=>hN,jettwaveLight:()=>mN,nightOwl:()=>YT,nightOwlLight:()=>QT,oceanicNext:()=>XT,okaidia:()=>eN,oneDark:()=>yN,oneLight:()=>wN,palenight:()=>nN,shadesOfPurple:()=>oN,synthwave84:()=>sN,ultramin:()=>lN,vsDark:()=>Wm,vsLight:()=>dN});var BT={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},zT=BT,UT={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$T=UT,HT={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},WT=HT,qT={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},GT=qT,VT={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},YT=VT,JT={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},QT=JT,Je={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},KT={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:Je.keyword}},{types:["attr-value"],style:{color:Je.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:Je.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:Je.primitive}},{types:["boolean"],style:{color:Je.boolean}},{types:["tag"],style:{color:Je.tag}},{types:["string"],style:{color:Je.string}},{types:["punctuation"],style:{color:Je.string}},{types:["selector","char","builtin","inserted"],style:{color:Je.char}},{types:["function"],style:{color:Je.function}},{types:["operator","entity","url","variable"],style:{color:Je.variable}},{types:["keyword"],style:{color:Je.keyword}},{types:["atrule","class-name"],style:{color:Je.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},XT=KT,ZT={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},eN=ZT,tN={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},nN=tN,rN={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},oN=rN,iN={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},sN=iN,aN={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},lN=aN,uN={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Wm=uN,cN={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},dN=cN,pN={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},hN=pN,fN={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},mN=fN,gN={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},yN=gN,xN={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},wN=xN,vN={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},bN=vN,kN={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},SN=kN,EN=e=>T.useCallback(t=>{var n=t,{className:r,style:o,line:i}=n,s=$m(n,["className","style","line"]);const a=Es(At({},s),{className:Bm("token-line",r)});return typeof e=="object"&&"plain"in e&&(a.style=e.plain),typeof o=="object"&&(a.style=At(At({},a.style||{}),o)),a},[e]),TN=e=>{const t=T.useCallback(({types:n,empty:r})=>{if(e!=null){{if(n.length===1&&n[0]==="plain")return r!=null?{display:"inline-block"}:void 0;if(n.length===1&&r!=null)return e[n[0]]}return Object.assign(r!=null?{display:"inline-block"}:{},...n.map(o=>e[o]))}},[e]);return T.useCallback(n=>{var r=n,{token:o,className:i,style:s}=r,a=$m(r,["token","className","style"]);const l=Es(At({},a),{className:Bm("token",...o.types,i),children:o.content,style:t(o)});return s!=null&&(l.style=At(At({},l.style||{}),s)),l},[t])},NN=/\r\n|\r|\n/,sp=e=>{e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},ap=(e,t)=>{const n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},jN=e=>{const t=[[]],n=[e],r=[0],o=[e.length];let i=0,s=0,a=[];const l=[a];for(;s>-1;){for(;(i=r[s]++)<o[s];){let u,d=t[s];const f=n[s][i];if(typeof f=="string"?(d=s>0?d:["plain"],u=f):(d=ap(d,f.type),f.alias&&(d=ap(d,f.alias)),u=f.content),typeof u!="string"){s++,t.push(d),n.push(u),r.push(0),o.push(u.length);continue}const h=u.split(NN),m=h.length;a.push({types:d,content:h[0]});for(let x=1;x<m;x++)sp(a),l.push(a=[]),a.push({types:d,content:h[x]})}s--,t.pop(),n.pop(),r.pop(),o.pop()}return sp(a),l},lp=jN,CN=({prism:e,code:t,grammar:n,language:r})=>T.useMemo(()=>{if(n==null)return lp([t]);const o={code:t,grammar:n,language:r,tokens:[]};return e.hooks.run("before-tokenize",o),o.tokens=e.tokenize(t,n),e.hooks.run("after-tokenize",o),lp(o.tokens)},[t,n,r,e]),IN=(e,t)=>{const{plain:n}=e,r=e.styles.reduce((o,i)=>{const{languages:s,style:a}=i;return s&&!s.includes(t)||i.types.forEach(l=>{const u=At(At({},o[l]),a);o[l]=u}),o},{});return r.root=n,r.plain=Es(At({},n),{backgroundColor:void 0}),r},AN=IN,_N=({children:e,language:t,code:n,theme:r,prism:o})=>{const i=t.toLowerCase(),s=AN(r,i),a=EN(s),l=TN(s),u=o.languages[i],d=CN({prism:o,language:i,code:n,grammar:u});return e({tokens:d,className:`prism-code language-${i}`,style:s!=null?s.root:{},getLineProps:a,getTokenProps:l})},RN=e=>T.createElement(_N,Es(At({},e),{prism:e.prism||I,theme:e.theme||Wm,code:e.code,language:e.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const LN={js:"jsx",ts:"tsx",html:"markup",sql:"sql",bash:"bash"};function qm({code:e,language:t,showLineNumbers:n=!1,maxHeight:r,ariaLabel:o}){return c.jsx(RN,{code:e.replace(/\n$/,""),language:LN[t],theme:Hm.vsDark,children:({className:i,style:s,tokens:a,getLineProps:l,getTokenProps:u})=>c.jsx("pre",{"aria-label":o,className:`${i} rounded-lg border border-ink-700 px-3 py-3 text-[13px] sm:text-sm font-mono overflow-x-auto leading-relaxed`,style:{...s,background:"#0f1115",maxHeight:r?`${r}px`:void 0,overflowY:r?"auto":void 0},children:a.map((d,p)=>{const{key:f,...h}=l({line:d});return c.jsxs("div",{...h,style:{...h.style,display:"flex"},children:[n&&c.jsx("span",{className:"select-none pr-3 text-ink-500 text-right shrink-0",style:{minWidth:"2ch"},"aria-hidden":!0,children:p+1}),c.jsx("span",{className:"flex-1 min-w-0",children:d.map((m,x)=>{const{key:v,...g}=u({token:m});return c.jsx("span",{...g},x)})})]},p)})})})}const ON={js:"js",javascript:"js",jsx:"js",ts:"ts",typescript:"ts",tsx:"ts",html:"html",markup:"html",sql:"sql",bash:"bash",shell:"bash",sh:"bash"};function PN({markdown:e,listen:t=!0}){return c.jsxs("section",{className:"space-y-3",children:[t&&c.jsx("div",{className:"flex justify-end",children:c.jsx(TT,{text:MN(e),compact:!0})}),c.jsx("div",{className:"prose-block",children:c.jsx(Pm,{components:{h1:n=>c.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold text-ink-100 mt-5 mb-3",...n}),h2:n=>c.jsx("h2",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-5 mb-3",...n}),h3:n=>c.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-ink-100 mt-4 mb-2",...n}),p:n=>c.jsx("p",{className:"text-[15px] sm:text-base text-ink-200 leading-[1.65] mb-4",...n}),a:n=>c.jsx("a",{className:"text-accent-strong hover:underline",target:"_blank",rel:"noreferrer",...n}),ul:n=>c.jsx("ul",{className:"list-disc pl-5 space-y-1.5 text-[15px] sm:text-base text-ink-200 mb-4 leading-[1.6]",...n}),ol:n=>c.jsx("ol",{className:"list-decimal pl-5 space-y-1.5 text-[15px] sm:text-base text-ink-200 mb-4 leading-[1.6]",...n}),li:n=>c.jsx("li",{...n}),code:({className:n,children:r,...o})=>{const i=(n??"").replace(/^language-/,"").toLowerCase();if((n??"").startsWith("language-")){const a=ON[i]??"js",l=String(r).replace(/\n$/,"");return c.jsx("div",{className:"mb-3",children:c.jsx(qm,{code:l,language:a})})}return c.jsx("code",{className:"bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft",...o,children:r})},blockquote:n=>c.jsx("blockquote",{className:"border-l-2 border-accent-strong pl-3 text-ink-300 italic mb-3",...n}),strong:n=>c.jsx("strong",{className:"text-ink-100 font-semibold",...n})},children:e})})]})}function MN(e){return e.replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/[#>*_~\-]+/g," ").replace(/\s+/g," ").trim()}function DN({id:e,label:t,command:n,expectedOutput:r}){const{progress:o,markBlockComplete:i,update:s}=Ge(),[a,l]=T.useState(!1),[u,d]=T.useState(!1),p=!!o.blocksCompleted[e];T.useEffect(()=>{if(!a)return;const m=window.setTimeout(()=>l(!1),1500);return()=>window.clearTimeout(m)},[a]);const f=async()=>{try{await navigator.clipboard.writeText(n),l(!0)}catch{l(!1)}},h=()=>{p?s(m=>{const x={...m.blocksCompleted};return delete x[e],{...m,blocksCompleted:x}}):i(e)};return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Command"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:t})]}),c.jsxs("label",{className:"flex items-center gap-2 text-xs text-ink-300 cursor-pointer",children:[c.jsx("input",{type:"checkbox",className:"accent-accent-strong",checked:p,onChange:h}),"I ran this"]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-stretch gap-2",children:[c.jsx("pre",{className:"flex-1 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-sm text-ink-100 overflow-x-auto min-w-0",children:c.jsx("code",{children:n})}),c.jsx("button",{type:"button",onClick:f,className:"btn-ghost shrink-0 w-full sm:w-auto","aria-label":"Copy command",children:a?"Copied!":"Copy"})]}),r!==void 0&&c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"text-xs text-ink-300 hover:text-ink-100",onClick:()=>d(m=>!m),children:[u?"− Hide":"+ Show"," what you should see"]}),u&&c.jsx("pre",{className:"mt-2 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-xs text-ink-200 whitespace-pre-wrap",children:r})]})]})}function up(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function FN(e){if(Array.isArray(e))return e}function BN(e,t,n){return(t=GN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zN(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function UN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function dp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cp(Object(n),!0).forEach(function(r){BN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $N(e,t){if(e==null)return{};var n,r,o=HN(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function HN(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function WN(e,t){return FN(e)||zN(e,t)||VN(e,t)||UN()}function qN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function GN(e){var t=qN(e,"string");return typeof t=="symbol"?t:t+""}function VN(e,t){if(e){if(typeof e=="string")return up(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?up(e,t):void 0}}function YN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function hp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(r){YN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JN(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,i){return i(o)},r)}}function Ur(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(o,a))}}}function Ki(e){return{}.toString.call(e).includes("Object")}function QN(e){return!Object.keys(e).length}function So(e){return typeof e=="function"}function KN(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function XN(e,t){return Ki(t)||pn("changeType"),Object.keys(t).some(function(n){return!KN(e,n)})&&pn("changeField"),t}function ZN(e){So(e)||pn("selectorType")}function ej(e){So(e)||Ki(e)||pn("handlerType"),Ki(e)&&Object.values(e).some(function(t){return!So(t)})&&pn("handlersType")}function tj(e){e||pn("initialIsRequired"),Ki(e)||pn("initialType"),QN(e)&&pn("initialContent")}function nj(e,t){throw new Error(e[t]||e.default)}var rj={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},pn=Ur(nj)(rj),ri={changes:XN,selector:ZN,handler:ej,initial:tj};function oj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ri.initial(e),ri.handler(t);var n={current:e},r=Ur(aj)(n,t),o=Ur(sj)(n),i=Ur(ri.changes)(e),s=Ur(ij)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return ri.selector(u),u(n.current)}function l(u){JN(r,o,i,s)(u)}return[a,l]}function ij(e,t){return So(t)?t(e.current):t}function sj(e,t){return e.current=hp(hp({},e.current),t),t}function aj(e,t,n){return So(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var lj={create:oj},uj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function cj(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return t.apply(n,[].concat(o,a))}}}function dj(e){return{}.toString.call(e).includes("Object")}function pj(e){return e||fp("configIsRequired"),dj(e)||fp("configType"),e.urls?(hj(),{paths:{vs:e.urls.monacoBase}}):e}function hj(){console.warn(Gm.deprecation)}function fj(e,t){throw new Error(e[t]||e.default)}var Gm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fp=cj(fj)(Gm),mj={config:pj},gj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(i,s){return s(i)},o)}};function Vm(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Vm(e[n],t[n]))}),dp(dp({},e),t)}var yj={type:"cancelation",msg:"operation is manually canceled"};function pa(e){var t=!1,n=new Promise(function(r,o){e.then(function(i){return t?o(yj):r(i)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var xj=["monaco"],wj=lj.create({config:uj,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ym=WN(wj,2),Lo=Ym[0],Ts=Ym[1];function vj(e){var t=mj.config(e),n=t.monaco,r=$N(t,xj);Ts(function(o){return{config:Vm(o.config,r),monaco:n}})}function bj(){var e=Lo(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(Ts({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),pa(ha);if(window.monaco&&window.monaco.editor)return Jm(window.monaco),e.resolve(window.monaco),pa(ha);gj(kj,Ej)(Tj)}return pa(ha)}function kj(e){return document.body.appendChild(e)}function Sj(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ej(e){var t=Lo(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),n=Sj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Tj(){var e=Lo(function(n){var r=n.config,o=n.resolve,i=n.reject;return{config:r,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Jm(r),e.resolve(r)},function(n){e.reject(n)})}function Jm(e){Lo().monaco||Ts({monaco:e})}function Nj(){return Lo(function(e){var t=e.monaco;return t})}var ha=new Promise(function(e,t){return Ts({resolve:e,reject:t})}),Qm={config:vj,init:bj,__getMonacoInstance:Nj},jj={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},fa=jj,Cj={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ij=Cj;function Aj({children:e}){return tn.createElement("div",{style:Ij.container},e)}var _j=Aj,Rj=_j;function Lj({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:s}){return tn.createElement("section",{style:{...fa.wrapper,width:e,height:t},...s},!n&&tn.createElement(Rj,null,r),tn.createElement("div",{ref:o,style:{...fa.fullWidth,...!n&&fa.hide},className:i}))}var Oj=Lj,Km=T.memo(Oj);function Pj(e){T.useEffect(e,[])}var Xm=Pj;function Mj(e,t,n=!0){let r=T.useRef(!0);T.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Xe=Mj;function eo(){}function er(e,t,n,r){return Dj(e,r)||Fj(e,t,n,r)}function Dj(e,t){return e.editor.getModel(Zm(e,t))}function Fj(e,t,n,r){return e.editor.createModel(t,n,r?Zm(e,r):void 0)}function Zm(e,t){return e.Uri.parse(t)}function Bj({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:s,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:m,wrapperProps:x={},beforeMount:v=eo,onMount:g=eo}){let[y,w]=T.useState(!1),[S,N]=T.useState(!0),E=T.useRef(null),j=T.useRef(null),_=T.useRef(null),M=T.useRef(g),A=T.useRef(v),D=T.useRef(!1);Xm(()=>{let P=Qm.init();return P.then(W=>(j.current=W)&&N(!1)).catch(W=>(W==null?void 0:W.type)!=="cancelation"&&console.error("Monaco initialization: error:",W)),()=>E.current?G():P.cancel()}),Xe(()=>{if(E.current&&j.current){let P=E.current.getOriginalEditor(),W=er(j.current,e||"",r||n||"text",i||"");W!==P.getModel()&&P.setModel(W)}},[i],y),Xe(()=>{if(E.current&&j.current){let P=E.current.getModifiedEditor(),W=er(j.current,t||"",o||n||"text",s||"");W!==P.getModel()&&P.setModel(W)}},[s],y),Xe(()=>{let P=E.current.getModifiedEditor();P.getOption(j.current.editor.EditorOption.readOnly)?P.setValue(t||""):t!==P.getValue()&&(P.executeEdits("",[{range:P.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),P.pushUndoStop())},[t],y),Xe(()=>{var P,W;(W=(P=E.current)==null?void 0:P.getModel())==null||W.original.setValue(e||"")},[e],y),Xe(()=>{let{original:P,modified:W}=E.current.getModel();j.current.editor.setModelLanguage(P,r||n||"text"),j.current.editor.setModelLanguage(W,o||n||"text")},[n,r,o],y),Xe(()=>{var P;(P=j.current)==null||P.editor.setTheme(u)},[u],y),Xe(()=>{var P;(P=E.current)==null||P.updateOptions(p)},[p],y);let B=T.useCallback(()=>{var K;if(!j.current)return;A.current(j.current);let P=er(j.current,e||"",r||n||"text",i||""),W=er(j.current,t||"",o||n||"text",s||"");(K=E.current)==null||K.setModel({original:P,modified:W})},[n,t,o,e,r,i,s]),J=T.useCallback(()=>{var P;!D.current&&_.current&&(E.current=j.current.editor.createDiffEditor(_.current,{automaticLayout:!0,...p}),B(),(P=j.current)==null||P.editor.setTheme(u),w(!0),D.current=!0)},[p,u,B]);T.useEffect(()=>{y&&M.current(E.current,j.current)},[y]),T.useEffect(()=>{!S&&!y&&J()},[S,y,J]);function G(){var W,K,R,$;let P=(W=E.current)==null?void 0:W.getModel();a||((K=P==null?void 0:P.original)==null||K.dispose()),l||((R=P==null?void 0:P.modified)==null||R.dispose()),($=E.current)==null||$.dispose()}return tn.createElement(Km,{width:h,height:f,isEditorReady:y,loading:d,_ref:_,className:m,wrapperProps:x})}var zj=Bj;T.memo(zj);function Uj(e){let t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}var $j=Uj,oi=new Map;function Hj({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:s="light",line:a,loading:l="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:m="100%",className:x,wrapperProps:v={},beforeMount:g=eo,onMount:y=eo,onChange:w,onValidate:S=eo}){let[N,E]=T.useState(!1),[j,_]=T.useState(!0),M=T.useRef(null),A=T.useRef(null),D=T.useRef(null),B=T.useRef(y),J=T.useRef(g),G=T.useRef(),P=T.useRef(r),W=$j(i),K=T.useRef(!1),R=T.useRef(!1);Xm(()=>{let z=Qm.init();return z.then(H=>(M.current=H)&&_(!1)).catch(H=>(H==null?void 0:H.type)!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>A.current?b():z.cancel()}),Xe(()=>{var H,k,te,ye;let z=er(M.current,e||r||"",t||o||"",i||n||"");z!==((H=A.current)==null?void 0:H.getModel())&&(p&&oi.set(W,(k=A.current)==null?void 0:k.saveViewState()),(te=A.current)==null||te.setModel(z),p&&((ye=A.current)==null||ye.restoreViewState(oi.get(i))))},[i],N),Xe(()=>{var z;(z=A.current)==null||z.updateOptions(u)},[u],N),Xe(()=>{!A.current||r===void 0||(A.current.getOption(M.current.editor.EditorOption.readOnly)?A.current.setValue(r):r!==A.current.getValue()&&(R.current=!0,A.current.executeEdits("",[{range:A.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),A.current.pushUndoStop(),R.current=!1))},[r],N),Xe(()=>{var H,k;let z=(H=A.current)==null?void 0:H.getModel();z&&o&&((k=M.current)==null||k.editor.setModelLanguage(z,o))},[o],N),Xe(()=>{var z;a!==void 0&&((z=A.current)==null||z.revealLine(a))},[a],N),Xe(()=>{var z;(z=M.current)==null||z.editor.setTheme(s)},[s],N);let $=T.useCallback(()=>{var z;if(!(!D.current||!M.current)&&!K.current){J.current(M.current);let H=i||n,k=er(M.current,r||e||"",t||o||"",H||"");A.current=(z=M.current)==null?void 0:z.editor.create(D.current,{model:k,automaticLayout:!0,...u},d),p&&A.current.restoreViewState(oi.get(H)),M.current.editor.setTheme(s),a!==void 0&&A.current.revealLine(a),E(!0),K.current=!0}},[e,t,n,r,o,i,u,d,p,s,a]);T.useEffect(()=>{N&&B.current(A.current,M.current)},[N]),T.useEffect(()=>{!j&&!N&&$()},[j,N,$]),P.current=r,T.useEffect(()=>{var z,H;N&&w&&((z=G.current)==null||z.dispose(),G.current=(H=A.current)==null?void 0:H.onDidChangeModelContent(k=>{R.current||w(A.current.getValue(),k)}))},[N,w]),T.useEffect(()=>{if(N){let z=M.current.editor.onDidChangeMarkers(H=>{var te;let k=(te=A.current.getModel())==null?void 0:te.uri;if(k&&H.find(ye=>ye.path===k.path)){let ye=M.current.editor.getModelMarkers({resource:k});S==null||S(ye)}});return()=>{z==null||z.dispose()}}return()=>{}},[N,S]);function b(){var z,H;(z=G.current)==null||z.dispose(),f?p&&oi.set(i,A.current.saveViewState()):(H=A.current.getModel())==null||H.dispose(),A.current.dispose()}return tn.createElement(Km,{width:h,height:m,isEditorReady:N,loading:l,_ref:D,className:x,wrapperProps:v})}var Wj=Hj,qj=T.memo(Wj),Gj=qj;const Vj={js:"javascript",ts:"typescript",html:"html",sql:"sql",bash:"shell"};function Yj(e=640){const[t,n]=T.useState(()=>typeof window>"u"?!1:window.innerWidth<e);return T.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia(`(max-width: ${e-1}px)`),o=i=>n(i.matches);return n(r.matches),r.addEventListener("change",o),()=>r.removeEventListener("change",o)},[e]),t}function Eo({value:e,language:t,onChange:n,onMount:r,readOnly:o=!1,height:i=200,ariaLabel:s}){const a=Yj(),l=a?14:13;if(o){const u=typeof i=="number"?i:void 0;return c.jsx(qm,{code:e,language:t,ariaLabel:s,showLineNumbers:!a,maxHeight:u})}return c.jsx("div",{className:"rounded-lg overflow-hidden border border-ink-700 bg-[#1e1e1e]","aria-label":s,children:c.jsx(Gj,{height:typeof i=="number"?`${i}px`:i,language:Vj[t],value:e,theme:"vs-dark",onChange:n,onMount:r,loading:c.jsx("div",{className:"text-xs text-ink-400 p-4",children:"Loading editor…"}),options:{readOnly:o,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:l,lineNumbers:a?"off":"on",renderLineHighlight:"gutter",automaticLayout:!0,tabSize:2,padding:{top:10,bottom:10},fontFamily:"JetBrains Mono, Fira Code, Menlo, monospace",smoothScrolling:!0,cursorBlinking:"smooth",wordWrap:"on",overviewRulerLanes:a?0:3,scrollbar:a?{vertical:"auto",horizontal:"hidden",verticalScrollbarSize:6}:void 0,folding:!a,glyphMargin:!1}})})}const Jj=.95;function Qj(e,t){const n=Math.min(e.length,t.length);let r=0;for(;r<n&&e.charCodeAt(r)===t.charCodeAt(r);)r++;return r}function Kj({id:e,language:t,code:n,instructions:r}){const{progress:o,markBlockComplete:i}=Ge(),[s,a]=T.useState(""),l=!!o.blocksCompleted[e],u=T.useMemo(()=>n.replace(/[ \t]+$/gm,"").replace(/\n+$/,`
`),[n]),d=T.useMemo(()=>s.replace(/[ \t]+$/gm,"").replace(/\n+$/,`
`),[s]),p=Qj(d,u),f=u.length,h=f>0?p/f:1,m=d.length>p,x=d===u,v=h>=Jj&&!m;(x||v)&&!l&&i(e);const g=()=>a("");return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Type along"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:r??"Retype the snippet below into the empty editor."})]}),l&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Done"})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Target"}),c.jsx(Eo,{value:n,language:t,readOnly:!0,height:Math.min(280,60+n.split(`
`).length*18)})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Your turn"}),c.jsx(Eo,{value:s,language:t,onChange:y=>a(y??""),height:Math.min(280,60+n.split(`
`).length*18),ariaLabel:"Type-along editor"})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs",children:[c.jsx("span",{className:m?"text-danger":"text-ink-300",children:m?"Mismatch — backspace and fix.":"Matching prefix"}),c.jsxs("span",{className:"text-ink-200",children:[p," / ",f]})]}),c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:`progress-fill ${m?"!bg-danger":""}`,style:{width:`${Math.min(100,Math.round(h*100))}%`}})})]}),c.jsx("div",{className:"flex justify-end",children:c.jsx("button",{type:"button",className:"btn-ghost",onClick:g,children:"Reset"})})]})}function Xj({id:e,language:t,code:n,question:r,options:o,answerIndex:i,explanation:s}){const{progress:a,markBlockComplete:l}=Ge(),[u,d]=T.useState(null),[p,f]=T.useState(!1),h=!!a.blocksCompleted[e],m=()=>{u!=null&&(f(!0),u===i&&l(e))},x=()=>{d(null),f(!1)},v=p&&u===i;return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Read this"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:r})]}),h&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Done"})]}),c.jsx(Eo,{value:n,language:t,readOnly:!0,height:Math.min(280,60+n.split(`
`).length*18)}),c.jsx("div",{className:"grid gap-2",children:o.map((g,y)=>{const w=u===y;let S="border-ink-600 bg-ink-800 hover:bg-ink-700";return p?y===i?S="border-accent bg-accent/10 text-ink-100":w?S="border-danger bg-danger/10 text-ink-100":S="border-ink-700 bg-ink-800 text-ink-300":w&&(S="border-accent bg-accent/10"),c.jsxs("label",{className:`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${S}`,children:[c.jsx("input",{type:"radio",className:"accent-accent-strong",name:`readthis-${e}`,checked:w,onChange:()=>!p&&d(y)}),c.jsx("span",{children:g})]},y)})}),p&&c.jsxs("div",{className:`text-sm ${v?"text-accent-strong":"text-danger"}`,children:[v?"Correct.":"Not quite.",s&&c.jsxs("span",{className:"text-ink-300",children:[" ",s]})]}),c.jsx("div",{className:"flex justify-end gap-2",children:p?c.jsx("button",{type:"button",className:"btn-ghost",onClick:x,children:"Try again"}):c.jsx("button",{type:"button",className:"btn-primary",onClick:m,disabled:u==null,children:"Submit"})})]})}function eg({output:e,expected:t,showDiff:n=!1,status:r="idle"}){const o=r==="passed",i=r==="failed";return c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[c.jsx("span",{className:"text-ink-400",children:"Output"}),r==="running"&&c.jsx("span",{className:"text-ink-200",children:"running…"}),o&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Passed"}),i&&c.jsx("span",{className:"chip bg-danger/15 text-danger border border-danger/30",children:"Failed"})]}),n&&t!==void 0?c.jsxs("div",{className:"grid sm:grid-cols-2 gap-2",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400 mb-1",children:"Your output"}),c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[6rem] overflow-x-auto",children:e||"(empty)"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-ink-400 mb-1",children:"Expected"}),c.jsx("pre",{className:"bg-ink-900 border border-accent/40 rounded-lg p-3 font-mono text-xs text-accent-soft whitespace-pre-wrap min-h-[6rem] overflow-x-auto",children:t})]})]}):c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[5rem] overflow-x-auto",children:e||"(no output yet — press Run)"})]})}const Zj=3e3;function e2(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.nonce=="string"&&typeof t.kind=="string"&&typeof t.payload=="string"}function tg(e,t=Zj){return new Promise(n=>{const r=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n-${Date.now()}-${Math.random().toString(36).slice(2)}`,o=performance.now();let i=[],s=!1,a=!1;const l=document.createElement("iframe");l.setAttribute("sandbox","allow-scripts"),l.setAttribute("aria-hidden","true"),l.style.position="fixed",l.style.left="-9999px",l.style.top="-9999px",l.style.width="1px",l.style.height="1px",l.style.opacity="0",l.style.pointerEvents="none";const u=h=>{a||(a=!0,window.removeEventListener("message",d),window.clearTimeout(p),l.parentNode&&l.parentNode.removeChild(l),n({output:i.join(`
`),timedOut:h,errored:s||h,durationMs:Math.round(performance.now()-o)}))},d=h=>{!e2(h.data)||h.data.nonce!==r||(h.data.kind==="log"?i.push(h.data.payload):h.data.kind==="error"?(i.push(`[error] ${h.data.payload}`),s=!0):h.data.kind==="done"&&u(!1))};window.addEventListener("message",d);const p=window.setTimeout(()=>{a||(i.push(`[timed out after ${t}ms]`),s=!0,u(!0))},t),f=`<!doctype html><html><body><script>
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
<\/script></body></html>`;l.srcdoc=f,document.body.appendChild(l)})}const mp=e=>e.replace(/\r\n/g,`
`).split(`
`).map(t=>t.replace(/\s+$/g,"")).join(`
`).replace(/\n+$/,"");function t2({id:e,spec:t,starterCode:n,expectedConsoleOutput:r,language:o="js"}){const{progress:i,markBlockComplete:s}=Ge(),[a,l]=T.useState(n),[u,d]=T.useState(""),[p,f]=T.useState("idle"),[h,m]=T.useState(0),x=!!i.blocksCompleted[e],v=async y=>{f("running");const w=await tg(a);if(d(w.output),y==="run"){f("ran");return}const S=h+1;m(S),mp(w.output)===mp(r)?(s(e,S),f("passed")):f("failed")},g=()=>{l(n),d(""),f("idle")};return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:"Code challenge"}),c.jsx("div",{className:"text-sm font-medium text-ink-100 whitespace-pre-wrap",children:t})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[h>0&&c.jsxs("span",{className:"text-[11px] text-ink-400",children:["attempts: ",h]}),x&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Passed"})]})]}),c.jsx(Eo,{value:a,language:o==="ts"?"ts":"js",onChange:y=>l(y??""),height:Math.max(160,Math.min(360,60+n.split(`
`).length*18)),ariaLabel:"Code challenge editor"}),c.jsxs("div",{className:"flex items-center justify-end gap-2 flex-wrap",children:[c.jsx("button",{type:"button",className:"btn-ghost",onClick:g,disabled:p==="running",children:"Reset"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>v("run"),disabled:p==="running",children:"Run"}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>v("submit"),disabled:p==="running",children:"Submit"})]}),c.jsx(eg,{output:u,expected:r,showDiff:p==="failed",status:p})]})}const n2=2,gp=e=>e.replace(/\r\n/g,`
`).split(`
`).map(t=>t.replace(/\s+$/g,"")).join(`
`).replace(/\n+$/,"");function ng({id:e,brokenCode:t,errorMessage:n,expectedConsoleOutput:r,hint:o,language:i="js",persistAs:s="block",title:a}){const{progress:l,markBlockComplete:u,markGauntletSolved:d}=Ge(),[p,f]=T.useState(t),[h,m]=T.useState(""),[x,v]=T.useState("idle"),[g,y]=T.useState(0),[w,S]=T.useState(!1),N=s==="gauntlet"?!!l.gauntletSolved[e]:!!l.blocksCompleted[e],E=async M=>{v("running");const A=await tg(p);if(m(A.output),M==="run"){v("ran");return}const D=g+1;y(D),gp(A.output)===gp(r)?(s==="gauntlet"?d(e,D):u(e,D),v("passed")):v("failed")},j=()=>{f(t),m(""),v("idle"),S(!1)},_=g>=n2&&!!o;return c.jsxs("section",{className:"card p-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-ink-400",children:s==="gauntlet"?"Gauntlet snippet":"Debug this"}),c.jsx("div",{className:"text-sm font-medium text-ink-100",children:a??"Fix the code so it produces the expected output."})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[g>0&&c.jsxs("span",{className:"text-[11px] text-ink-400",children:["attempts: ",g]}),N&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:s==="gauntlet"?"Solved":"Fixed"})]})]}),c.jsxs("div",{className:"rounded-lg border border-danger/30 bg-danger/10 p-3",children:[c.jsx("div",{className:"text-[11px] uppercase tracking-wide text-danger",children:"Error"}),c.jsx("pre",{className:"mt-1 text-xs font-mono text-ink-100 whitespace-pre-wrap",children:n})]}),c.jsx(Eo,{value:p,language:i==="ts"?"ts":"js",onChange:M=>f(M??""),height:Math.max(160,Math.min(360,60+t.split(`
`).length*18)),ariaLabel:"Debug editor"}),c.jsxs("div",{className:"flex items-center justify-end gap-2 flex-wrap",children:[_&&!w&&c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>S(!0),children:"Hint"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:j,disabled:x==="running",children:"Reset"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>E("run"),disabled:x==="running",children:"Run"}),c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>E("submit"),disabled:x==="running",children:"Submit fix"})]}),w&&o&&c.jsxs("div",{className:"rounded-lg border border-warn/30 bg-warn/10 p-3 text-sm text-ink-100",children:[c.jsx("span",{className:"text-warn font-medium",children:"Hint: "}),o]}),c.jsx(eg,{output:h,expected:r,showDiff:x==="failed",status:x})]})}function r2({block:e}){switch(e.type){case"explain":return c.jsx(PN,{markdown:e.markdown,listen:e.listen??!0});case"command":return c.jsx(DN,{id:e.id,label:e.label,command:e.command,expectedOutput:e.expectedOutput});case"typealong":return c.jsx(Kj,{id:e.id,language:e.language,code:e.code,instructions:e.instructions});case"readthis":return c.jsx(Xj,{id:e.id,language:e.language,code:e.code,question:e.question,options:e.options,answerIndex:e.answerIndex,explanation:e.explanation});case"codechallenge":return c.jsx(t2,{id:e.id,spec:e.spec,starterCode:e.starterCode,expectedConsoleOutput:e.expectedConsoleOutput,language:e.language??"js"});case"debugthis":return c.jsx(ng,{id:e.id,brokenCode:e.brokenCode,errorMessage:e.errorMessage,expectedConsoleOutput:e.expectedConsoleOutput,hint:e.hint,language:e.language??"js"})}}function o2({quizId:e,questions:t,onComplete:n}){const{recordQuiz:r}=Ge(),[o,i]=T.useState({}),[s,a]=T.useState(!1),l=T.useMemo(()=>t.reduce((h,m)=>h+(o[m.id]===m.answerIndex?1:0),0),[o,t]),u=t.length,d=t.every(h=>typeof o[h.id]=="number"),p=()=>{a(!0),r(e,l,u),n==null||n(l,u)},f=()=>{i({}),a(!1)};return c.jsxs("div",{className:"card p-5 space-y-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h3",{className:"text-lg font-semibold text-ink-100",children:"Quiz"}),s&&c.jsxs("span",{className:"chip bg-accent/20 text-accent-strong",children:[l," / ",u]})]}),c.jsx("ol",{className:"space-y-5 list-decimal pl-5",children:t.map(h=>{const m=o[h.id],x=m===h.answerIndex;return c.jsxs("li",{className:"space-y-2",children:[c.jsx("div",{className:"text-sm text-ink-100",children:h.prompt}),c.jsx("div",{className:"grid gap-2",children:h.options.map((v,g)=>{const y=m===g;let w="border-ink-600 bg-ink-800 hover:bg-ink-700";return s?g===h.answerIndex?w="border-accent bg-accent/10 text-ink-100":y?w="border-danger bg-danger/10 text-ink-100":w="border-ink-700 bg-ink-800 text-ink-300":y&&(w="border-accent bg-accent/10"),c.jsxs("label",{className:`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${w}`,children:[c.jsx("input",{type:"radio",className:"accent-accent-strong",name:h.id,checked:y,onChange:()=>!s&&i(S=>({...S,[h.id]:g}))}),c.jsx("span",{children:v})]},g)})}),s&&h.explanation&&c.jsx("div",{className:`text-xs ${x?"text-accent-strong":"text-ink-300"}`,children:h.explanation})]},h.id)})}),c.jsx("div",{className:"flex items-center justify-end gap-2",children:s?c.jsx("button",{type:"button",className:"btn-ghost",onClick:f,children:"Retake"}):c.jsx("button",{type:"button",className:"btn-primary",onClick:p,disabled:!d,children:"Submit"})})]})}function i2(){const{lessonId:e}=gs(),t=Ff(),n=e?Jf(e):void 0,{progress:r,markLessonComplete:o,setSettings:i}=Ge();T.useEffect(()=>{n&&i({lastLessonId:n.id})},[n,i]);const s=T.useMemo(()=>n?xs.find(m=>m.id===n.moduleId):void 0,[n]),{prevLesson:a,nextLesson:l}=T.useMemo(()=>{if(!n)return{prevLesson:void 0,nextLesson:void 0};const m=bo.filter(v=>v.moduleId===n.moduleId),x=m.findIndex(v=>v.id===n.id);return{prevLesson:x>0?m[x-1]:void 0,nextLesson:x<m.length-1?m[x+1]:void 0}},[n]);if(!n)return c.jsxs("div",{className:"space-y-4",children:[c.jsx(re,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Lesson not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No lesson with id ",c.jsx("code",{children:e}),". Try"," ",c.jsx(re,{to:"/lesson/test-blocks",className:"text-accent-strong hover:underline",children:"/lesson/test-blocks"})," ","to see all six block types."]})]})]});const u=!!r.lessonsCompleted[n.id],d=n.blocks.filter(m=>m.type!=="explain"&&r.blocksCompleted[m.id]).length,p=n.blocks.filter(m=>m.type!=="explain").length,f=p===0?0:Math.round(d/p*100),h=()=>{o(n.id),l?t(`/lesson/${l.id}`):s&&t(`/module/${s.id}`)};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"space-y-2",children:[c.jsxs(re,{to:s?`/module/${s.id}`:"/curriculum",className:"text-xs text-ink-300 hover:text-ink-100 inline-flex items-center gap-1",children:["← ",s?s.title:"Curriculum"]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs text-ink-400 flex-wrap",children:[c.jsxs("span",{children:[n.estimatedMinutes," min"]}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:["module: ",n.moduleId]})]}),c.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold text-ink-100 leading-tight",children:n.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300",children:n.objective}),p>0&&c.jsxs("div",{className:"pt-2",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${f}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400",children:[d," / ",p," interactive blocks · ",f,"%"]})]})]}),c.jsx("div",{className:"space-y-6",children:n.blocks.map((m,x)=>c.jsx(r2,{block:m},`${m.type}-${x}`))}),n.quiz&&n.quiz.length>0&&c.jsx(o2,{quizId:`${n.id}-quiz`,questions:n.quiz}),c.jsxs("div",{className:"hidden sm:flex items-center justify-between gap-3 pt-4",children:[a?c.jsxs(re,{to:`/lesson/${a.id}`,className:"btn-ghost",children:["← ",a.title]}):c.jsx("span",{}),c.jsx("button",{type:"button",className:u?"btn-ghost":"btn-primary",onClick:h,children:u?l?`Next: ${l.title} →`:"Back to module":l?"Mark complete + next →":"Mark complete"})]}),c.jsxs("div",{className:"sm:hidden fixed bottom-[60px] inset-x-0 z-30 border-t border-ink-700 bg-ink-900/95 backdrop-blur supports-[backdrop-filter]:bg-ink-900/85",children:[c.jsxs("div",{className:"px-3 py-2.5 flex items-center gap-2",children:[a&&c.jsx(re,{to:`/lesson/${a.id}`,className:"btn-ghost shrink-0 min-w-[40px] px-2","aria-label":"Previous lesson",children:"←"}),c.jsx("button",{type:"button",className:`${u?"btn-ghost":"btn-primary"} flex-1`,onClick:h,children:u?l?"Next lesson →":"Back to module":l?"Done · next →":"Mark complete"})]}),c.jsx("div",{className:"h-[env(safe-area-inset-bottom)]","aria-hidden":!0})]}),c.jsx("div",{className:"sm:hidden h-20","aria-hidden":!0})]})}function s2(e,t){const n=`# Ship It — starter bundle for ${e}
#
# Split this file back into separate files by copying each section
# (between the === markers) into its own file at the given path.
#
`,r=t.map(a=>`# === FILE: ${a.path} ===

${a.content}${a.content.endsWith(`
`)?"":`
`}
`).join(`
`),o=new Blob([n+r],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(o),s=document.createElement("a");s.href=i,s.download=`${e}-starter.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(i),1e3)}async function a2(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function l2(){const{id:e}=gs(),t=e?Kf(e):void 0,{progress:n,startBuildAlong:r,markBlockComplete:o,update:i}=Ge();return T.useEffect(()=>{t&&r(t.id)},[t,r]),t?c.jsx(u2,{id:t.id,progress:n,onTickMilestone:(s,a)=>{const l=Xf(t.id,s);a?i(u=>{const d={...u.blocksCompleted};return delete d[l],{...u,blocksCompleted:d}}):o(l)}}):c.jsxs("div",{className:"space-y-4",children:[c.jsx(re,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Build-along not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No build-along with id ",c.jsx("code",{children:e}),"."]})]})]})}function u2({id:e,progress:t,onTickMilestone:n}){const r=Kf(e),[o,i]=T.useState(0),[s,a]=T.useState(null),l=T.useMemo(()=>r?r.milestones.map(m=>({...m,done:!!t.blocksCompleted[Xf(r.id,m.id)]})):[],[r,t.blocksCompleted]);if(!r)return null;const u=l.filter(m=>m.done).length,d=l.length,p=d===0?0:Math.round(u/d*100),f=r.starterFiles[o]??r.starterFiles[0],h=async(m,x)=>{await a2(x)&&(a(m),window.setTimeout(()=>a(null),1500))};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(re,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Build-Along"}),c.jsxs("span",{className:"text-xs text-ink-400",children:["unlocks after module: ",c.jsx("code",{children:r.unlockedByModule})]}),c.jsxs("span",{className:"text-xs text-ink-400",children:["· ~",r.estimatedHours,"h"]})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:r.title}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-2 max-w-2xl",children:r.summary}),c.jsxs("div",{className:"mt-4 max-w-md",children:[c.jsx("div",{className:"progress-track",children:c.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})}),c.jsxs("div",{className:"mt-1 text-[11px] text-ink-400",children:[u," / ",d," milestones · ",p,"%"]})]})]}),c.jsxs("div",{className:"card p-5 space-y-3",children:[c.jsx("div",{className:"text-sm font-medium text-ink-100",children:"Rules"}),c.jsx("ul",{className:"list-disc pl-5 space-y-1 text-sm text-ink-200",children:r.rules.map((m,x)=>c.jsx("li",{children:m},x))})]}),c.jsx("div",{className:"card p-5",children:c.jsx("div",{className:"prose-block",children:c.jsx(Pm,{components:{h2:m=>c.jsx("h2",{className:"text-xl font-semibold text-ink-100 mt-2 mb-2",...m}),h3:m=>c.jsx("h3",{className:"text-lg font-semibold text-ink-100 mt-3 mb-1",...m}),p:m=>c.jsx("p",{className:"text-ink-200 leading-relaxed mb-3",...m}),ul:m=>c.jsx("ul",{className:"list-disc pl-5 space-y-1 text-ink-200 mb-3",...m}),li:m=>c.jsx("li",{className:"leading-relaxed",...m}),code:({className:m,children:x,...v})=>(m??"").startsWith("language-")?c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 mb-3",children:c.jsx("code",{...v,children:x})}):c.jsx("code",{className:"bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft",...v,children:x})},children:r.spec})})}),c.jsxs("div",{className:"card p-5 space-y-4",children:[c.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Milestones"}),c.jsxs("span",{className:"text-xs text-ink-400",children:[u," / ",d]})]}),c.jsx("ol",{className:"space-y-2",children:l.map((m,x)=>c.jsx("li",{children:c.jsxs("label",{className:`flex items-start gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-colors ${m.done?"border-accent/30 bg-accent/5":"border-ink-600 bg-ink-800 hover:bg-ink-700"}`,children:[c.jsx("input",{type:"checkbox",className:"accent-accent-strong mt-1",checked:m.done,onChange:()=>n(m.id,m.done)}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:`text-sm ${m.done?"text-ink-300 line-through":"text-ink-100"}`,children:[c.jsxs("span",{className:"text-ink-400 mr-1",children:[x+1,"."]}),m.title]}),m.description&&c.jsx("div",{className:"text-xs text-ink-300 mt-0.5",children:m.description})]})]})},m.id))})]}),c.jsxs("div",{className:"card p-4 sm:p-5 space-y-4",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Starter files"}),c.jsx("div",{className:"text-xs text-ink-400",children:"Copy each one into your project, or download a bundled text version."})]}),c.jsx("button",{type:"button",className:"btn-primary w-full sm:w-auto",onClick:()=>s2(r.id,r.starterFiles),children:"Download starter (.txt)"})]}),c.jsx("div",{className:"flex gap-1 overflow-x-auto sm:flex-wrap border-b border-ink-700 -mx-1 px-1",children:r.starterFiles.map((m,x)=>c.jsx("button",{type:"button",onClick:()=>i(x),className:`px-3 py-1.5 text-xs font-mono transition-colors ${x===o?"text-ink-100 border-b-2 border-accent-strong -mb-px":"text-ink-300 hover:text-ink-100"}`,children:m.path},m.path))}),f&&c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs",children:[c.jsx("span",{className:"text-ink-400 font-mono",children:f.path}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>h(f.path,f.content),children:s===f.path?"Copied!":"Copy file"})]}),c.jsx("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 max-h-[28rem] overflow-y-auto whitespace-pre",children:f.content})]})]})]})}const c2={easy:"bg-accent/15 text-accent-strong",medium:"bg-warn/15 text-warn",hard:"bg-danger/15 text-danger"};function d2(){const{progress:e}=Ge(),t=Ft.filter(n=>e.gauntletSolved[n.id]).length;return c.jsxs("div",{className:"space-y-6",children:[c.jsx(re,{to:"/",className:"text-xs text-ink-300 hover:text-ink-100",children:"← Home"}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:"Debug Gauntlet"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-2 max-w-2xl",children:"Broken code. Real error messages. Fix one snippet at a time. Officially unlocks after Module 4, but you can warm up whenever."}),c.jsxs("div",{className:"mt-3 text-xs text-ink-400",children:[t," / ",Ft.length," solved"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Ft.map(n=>{var i;const r=!!e.gauntletSolved[n.id],o=((i=e.gauntletSolved[n.id])==null?void 0:i.attempts)??0;return c.jsxs(re,{to:`/gauntlet/${n.id}`,className:`card p-4 group transition-colors hover:border-accent/40 block ${r?"ring-1 ring-accent/30":""}`,children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("span",{className:`chip ${c2[n.difficulty]}`,children:n.difficulty}),r&&c.jsx("span",{className:"chip bg-accent/20 text-accent-strong",children:"Solved"})]}),c.jsx("div",{className:"text-xs text-ink-400 mt-3",children:n.topic}),c.jsx("div",{className:"text-base font-semibold text-ink-100 group-hover:text-white mt-1",children:n.title}),c.jsx("div",{className:"text-xs text-ink-300 mt-2 truncate font-mono",children:n.errorMessage}),r&&o>0&&c.jsxs("div",{className:"text-[11px] text-ink-400 mt-2",children:["solved in ",o," ",o===1?"attempt":"attempts"]})]},n.id)})})]})}function p2(){const{snippetId:e}=gs(),t=e?I0(e):void 0;if(!t)return c.jsxs("div",{className:"space-y-4",children:[c.jsx(re,{to:"/gauntlet",className:"text-xs text-ink-300 hover:text-ink-100",children:"← All snippets"}),c.jsxs("div",{className:"card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-ink-100",children:"Snippet not found"}),c.jsxs("p",{className:"text-sm text-ink-300 mt-1",children:["No gauntlet snippet with id ",c.jsx("code",{children:e}),"."]})]})]});const n=Ft.findIndex(i=>i.id===t.id),r=n>0?Ft[n-1]:void 0,o=n<Ft.length-1?Ft[n+1]:void 0;return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx(re,{to:"/gauntlet",className:"text-xs text-ink-300 hover:text-ink-100",children:"← All snippets"}),c.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.topic}),c.jsx("span",{className:"chip bg-ink-700 text-ink-200 border border-ink-600",children:t.difficulty})]}),c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100 mt-1",children:t.title})]}),c.jsx(ng,{id:t.id,brokenCode:t.brokenCode,errorMessage:t.errorMessage,expectedConsoleOutput:t.expectedConsoleOutput,hint:t.hint,persistAs:"gauntlet",title:"Fix the snippet so its output matches Expected."}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2",children:[r?c.jsxs(re,{to:`/gauntlet/${r.id}`,className:"btn-ghost text-left",children:["← ",r.title]}):c.jsx("span",{}),o?c.jsxs(re,{to:`/gauntlet/${o.id}`,className:"btn-ghost text-right",children:[o.title," →"]}):c.jsx("span",{})]})]})}const h2="Hello — this is Ship It. Your training rig for building real apps without AI assistance.";function f2(){const{progress:e,setSettings:t}=Ge(),n=e.settings.voicePresetId??Mm,r=e.settings.rate??1,o=e.settings.pitch??1,{voices:i,selectedVoice:s,play:a,stop:l,status:u,supported:d}=Dm({presetId:n,rate:r,pitch:o}),[p]=T.useState(h2),f=T.useMemo(()=>i.map(h=>({voice:h,online:ST(h)})),[i]);return c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-ink-100",children:"Settings"}),c.jsx("p",{className:"text-sm sm:text-base text-ink-300 mt-1",children:"Voice presets, rate, pitch. All stored locally."})]}),c.jsx(Yf,{variant:"inline"}),c.jsxs("section",{className:"card p-5 space-y-5",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Voice preset"}),c.jsx("p",{className:"text-xs text-ink-400",children:"Used by every Listen button across the app."})]}),c.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:Il.map(h=>{const m=h.id===n;return c.jsxs("button",{type:"button",onClick:()=>t({voicePresetId:h.id}),className:`text-left rounded-lg border p-3 transition-colors ${m?"border-accent bg-accent/10":"border-ink-600 bg-ink-800 hover:bg-ink-700"}`,children:[c.jsx("div",{className:"text-sm font-medium text-ink-100",children:h.label}),c.jsx("div",{className:"text-xs text-ink-300 mt-0.5",children:h.description}),c.jsxs("div",{className:"text-[11px] text-ink-400 mt-1",children:["rate ",h.rate," · pitch ",h.pitch," · ",h.lang]})]},h.id)})})]}),c.jsxs("section",{className:"card p-5 space-y-4",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100",children:"Fine tune"}),c.jsxs("div",{children:[c.jsxs("label",{className:"text-xs text-ink-300 flex justify-between",children:[c.jsx("span",{children:"Rate"}),c.jsx("span",{className:"text-ink-100",children:r.toFixed(2)})]}),c.jsx("input",{type:"range",min:.6,max:1.4,step:.02,value:r,onChange:h=>t({rate:Number(h.target.value)}),className:"w-full accent-accent-strong"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"text-xs text-ink-300 flex justify-between",children:[c.jsx("span",{children:"Pitch"}),c.jsx("span",{className:"text-ink-100",children:o.toFixed(2)})]}),c.jsx("input",{type:"range",min:.6,max:1.4,step:.02,value:o,onChange:h=>t({pitch:Number(h.target.value)}),className:"w-full accent-accent-strong"})]}),c.jsxs("div",{className:"flex gap-2 pt-2",children:[c.jsx("button",{type:"button",className:"btn-primary",onClick:()=>a(p),children:"Listen test"}),u!=="idle"&&c.jsx("button",{type:"button",className:"btn-ghost",onClick:l,children:"Stop"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>t({rate:1,pitch:1}),children:"Reset"})]}),!d&&c.jsx("p",{className:"text-xs text-danger",children:"Web Speech API isn't available in this browser."}),d&&s&&c.jsxs("p",{className:"text-xs text-ink-300",children:["Active voice: ",c.jsx("span",{className:"text-ink-100",children:s.name})," (",s.lang,")"]})]}),c.jsxs("section",{className:"card p-5",children:[c.jsx("h2",{className:"text-base font-semibold text-ink-100 mb-3",children:"Available voices"}),f.length===0?c.jsx("p",{className:"text-sm text-ink-300",children:"Voices load asynchronously — give the browser a moment, then reload."}):c.jsx("ul",{className:"text-sm space-y-1 max-h-72 overflow-auto pr-2",children:f.map(({voice:h,online:m})=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("span",{className:`chip ${m?"bg-accent/15 text-accent-strong":"bg-ink-700 text-ink-200 border border-ink-600"}`,children:m?"[online]":"[local]"}),c.jsx("span",{className:"text-ink-100",children:h.name}),c.jsx("span",{className:"text-ink-400 text-xs ml-auto",children:h.lang})]},`${h.name}-${h.lang}`))})]})]})}function m2(){return c.jsxs("div",{className:"card p-6 text-center",children:[c.jsx("h1",{className:"text-2xl font-semibold text-ink-100",children:"404"}),c.jsx("p",{className:"text-ink-300 mt-1",children:"That route doesn't exist yet."}),c.jsx(re,{to:"/",className:"btn-primary mt-4 inline-flex",children:"Back home"})]})}function g2(){return c.jsx(Pw,{children:c.jsxs(ft,{element:c.jsx(Bv,{}),children:[c.jsx(ft,{index:!0,element:c.jsx(R0,{})}),c.jsx(ft,{path:"curriculum",element:c.jsx(O0,{})}),c.jsx(ft,{path:"module/:moduleId",element:c.jsx(P0,{})}),c.jsx(ft,{path:"lesson/:lessonId",element:c.jsx(i2,{})}),c.jsx(ft,{path:"build-along/:id",element:c.jsx(l2,{})}),c.jsx(ft,{path:"gauntlet",element:c.jsx(d2,{})}),c.jsx(ft,{path:"gauntlet/:snippetId",element:c.jsx(p2,{})}),c.jsx(ft,{path:"settings",element:c.jsx(f2,{})}),c.jsx(ft,{path:"*",element:c.jsx(m2,{})})]})})}class y2 extends T.Component{constructor(){super(...arguments);Po(this,"state",{error:null,info:null});Po(this,"reset",()=>{this.setState({error:null,info:null})});Po(this,"clearProgress",()=>{try{window.localStorage.removeItem("ship-it:progress:v1"),window.localStorage.removeItem("ship-it:whats-new:lastSeen")}catch{}window.location.reload()})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("[ship-it] ErrorBoundary caught",n,r),this.setState({error:n,info:r})}render(){if(!this.state.error)return this.props.children;const{error:n,info:r}=this.state;return c.jsx("div",{className:"min-h-screen p-6 text-ink-100",children:c.jsxs("div",{className:"max-w-3xl mx-auto card p-6 space-y-4 border-danger/40",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl font-semibold text-danger",children:"Something broke"}),c.jsx("p",{className:"text-sm text-ink-300 mt-1",children:"The app caught an error during render. Details below."})]}),c.jsxs("pre",{className:"bg-ink-900 border border-ink-700 rounded-lg p-3 text-xs font-mono text-ink-100 whitespace-pre-wrap overflow-x-auto",children:[n.name,": ",n.message,n.stack?`

${n.stack}`:""]}),(r==null?void 0:r.componentStack)&&c.jsxs("details",{className:"text-xs text-ink-300",children:[c.jsx("summary",{className:"cursor-pointer text-ink-200",children:"Component stack"}),c.jsx("pre",{className:"mt-2 bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono whitespace-pre-wrap overflow-x-auto",children:r.componentStack})]}),c.jsxs("div",{className:"flex gap-2 flex-wrap",children:[c.jsx("button",{type:"button",className:"btn-primary",onClick:this.reset,children:"Try again"}),c.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>window.location.reload(),children:"Reload page"}),c.jsx("button",{type:"button",className:"btn-danger",onClick:this.clearProgress,children:"Reset progress + reload"})]})]})})}}window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.deferredInstallPrompt=e,window.dispatchEvent(new Event("pwa-installable"))});window.addEventListener("appinstalled",()=>{window.deferredInstallPrompt=void 0,window.dispatchEvent(new Event("pwa-installed"))});const rg=document.getElementById("root");if(!rg)throw new Error("Root element #root not found");ma.createRoot(rg).render(c.jsx(tn.StrictMode,{children:c.jsx(y2,{children:c.jsx(Hw,{basename:"/ship-it",children:c.jsx(g2,{})})})}));
