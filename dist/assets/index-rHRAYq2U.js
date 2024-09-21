function VS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function FS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ew={exports:{}},xc={},tw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),US=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),zS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),qS=Symbol.for("react.forward_ref"),WS=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),GS=Symbol.for("react.lazy"),by=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rw=Object.assign,iw={};function so(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sw(){}sw.prototype=so.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}var zp=Bp.prototype=new sw;zp.constructor=Bp;rw(zp,so.prototype);zp.isPureReactComponent=!0;var My=Array.isArray,ow=Object.prototype.hasOwnProperty,Hp={current:null},aw={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ow.call(e,r)&&!aw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tl,type:t,key:s,ref:o,props:i,_owner:Hp.current}}function YS(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vy=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function cu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case US:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,My(i)?(n="",t!=null&&(n=t.replace(Vy,"$&/")+"/"),cu(i,e,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=YS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",My(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wh(s,a);o+=cu(s,e,n,l,i)}else if(l=QS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wh(s,a++),o+=cu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return cu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},hu={transition:null},ZS={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:hu,ReactCurrentOwner:Hp};function uw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=so;re.Fragment=$S;re.Profiler=BS;re.PureComponent=Bp;re.StrictMode=jS;re.Suspense=WS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;re.act=uw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ow.call(e,l)&&!aw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:tl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zS,_context:t},t.Consumer=t};re.createElement=lw;re.createFactory=function(t){var e=lw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:qS,render:t}};re.isValidElement=qp;re.lazy=function(t){return{$$typeof:GS,_payload:{_status:-1,_result:t},_init:JS}};re.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=hu.transition;hu.transition={};try{t()}finally{hu.transition=e}};re.unstable_act=uw;re.useCallback=function(t,e){return Dt.current.useCallback(t,e)};re.useContext=function(t){return Dt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Dt.current.useEffect(t,e)};re.useId=function(){return Dt.current.useId()};re.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Dt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};re.useRef=function(t){return Dt.current.useRef(t)};re.useState=function(t){return Dt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Dt.current.useTransition()};re.version="18.3.1";tw.exports=re;var P=tw.exports;const wn=FS(P),eA=VS({__proto__:null,default:wn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=P,nA=Symbol.for("react.element"),rA=Symbol.for("react.fragment"),iA=Object.prototype.hasOwnProperty,sA=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oA={key:!0,ref:!0,__self:!0,__source:!0};function cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iA.call(e,r)&&!oA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nA,type:t,key:s,ref:o,props:i,_owner:sA.current}}xc.Fragment=rA;xc.jsx=cw;xc.jsxs=cw;ew.exports=xc;var C=ew.exports,Yd={},hw={exports:{}},Xt={},dw={exports:{}},fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var z=O.length;O.push($);e:for(;0<z;){var ge=z-1>>>1,Se=O[ge];if(0<i(Se,$))O[ge]=$,O[z]=Se,z=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],z=O.pop();if(z!==$){O[0]=z;e:for(var ge=0,Se=O.length,fn=Se>>>1;ge<fn;){var ae=2*(ge+1)-1,Lt=O[ae],dt=ae+1,bt=O[dt];if(0>i(Lt,z))dt<Se&&0>i(bt,Lt)?(O[ge]=bt,O[dt]=z,ge=dt):(O[ge]=Lt,O[ae]=z,ge=ae);else if(dt<Se&&0>i(bt,z))O[ge]=bt,O[dt]=z,ge=dt;else break e}}return $}function i(O,$){var z=O.sortIndex-$.sortIndex;return z!==0?z:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function m(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,st(E);else{var $=n(u);$!==null&&qe(m,$.startTime-O)}}function E(O,$){v=!1,_&&(_=!1,g(D),D=-1),p=!0;var z=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||O&&!Ue());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Se=ge(h.expirationTime<=$);$=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var fn=!0;else{var ae=n(u);ae!==null&&qe(m,ae.startTime-$),fn=!1}return fn}finally{h=null,d=z,p=!1}}var R=!1,S=null,D=-1,Y=5,B=-1;function Ue(){return!(t.unstable_now()-B<Y)}function fe(){if(S!==null){var O=t.unstable_now();B=O;var $=!0;try{$=S(!0,O)}finally{$?en():(R=!1,S=null)}}else R=!1}var en;if(typeof f=="function")en=function(){f(fe)};else if(typeof MessageChannel<"u"){var kn=new MessageChannel,xn=kn.port2;kn.port1.onmessage=fe,en=function(){xn.postMessage(null)}}else en=function(){w(fe,0)};function st(O){S=O,R||(R=!0,en())}function qe(O,$){D=w(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,st(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var z=d;d=$;try{return O()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=d;d=O;try{return $()}finally{d=z}},t.unstable_scheduleCallback=function(O,$,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,O={id:c++,callback:$,priorityLevel:O,startTime:z,expirationTime:Se,sortIndex:-1},z>ge?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(_?(g(D),D=-1):_=!0,qe(m,z-ge))):(O.sortIndex=Se,e(l,O),v||p||(v=!0,st(E))),O},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(O){var $=d;return function(){var z=d;d=$;try{return O.apply(this,arguments)}finally{d=z}}}})(fw);dw.exports=fw;var aA=dw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lA=P,Qt=aA;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pw=new Set,fa={};function qi(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(fa[t]=e,t=0;t<e.length;t++)pw.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,uA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fy={},Uy={};function cA(t){return Xd.call(Uy,t)?!0:Xd.call(Fy,t)?!1:uA.test(t)?Uy[t]=!0:(Fy[t]=!0,!1)}function hA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dA(t,e,n,r){if(e===null||typeof e>"u"||hA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wp,Kp);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wp,Kp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wp,Kp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dA(e,n,i,r)&&(n=null),r||i===null?cA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yr=lA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),Yp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Xp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),yw=Symbol.for("react.offscreen"),$y=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=$y&&t[$y]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Kh;function Fo(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Qh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function fA(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Jd:return"Profiler";case Qp:return"StrictMode";case Zd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gw:return(t.displayName||"Context")+".Consumer";case mw:return(t._context.displayName||"Context")+".Provider";case Yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xp:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function pA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Qp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mA(t){var e=vw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=mA(t))}function _w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ww(t,e){e=e.checked,e!=null&&Gp(t,"checked",e,!1)}function rf(t,e){ww(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function By(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Uo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Ew(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gA=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){gA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function Rw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yA=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(yA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Jp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,Is=null,Rs=null;function qy(t){if(t=il(t)){if(typeof hf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=bc(e),hf(t.stateNode,t.type,e))}}function Aw(t){Is?Rs?Rs.push(t):Rs=[t]:Is=t}function Cw(){if(Is){var t=Is,e=Rs;if(Rs=Is=null,qy(t),e)for(t=0;t<e.length;t++)qy(e[t])}}function Pw(t,e){return t(e)}function kw(){}var Yh=!1;function xw(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return Pw(t,e,n)}finally{Yh=!1,(Is!==null||Rs!==null)&&(kw(),Cw())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var df=!1;if(lr)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){df=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{df=!1}function vA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xo=!1,bu=null,Mu=!1,ff=null,_A={onError:function(t){Xo=!0,bu=t}};function wA(t,e,n,r,i,s,o,a,l){Xo=!1,bu=null,vA.apply(_A,arguments)}function EA(t,e,n,r,i,s,o,a,l){if(wA.apply(this,arguments),Xo){if(Xo){var u=bu;Xo=!1,bu=null}else throw Error(x(198));Mu||(Mu=!0,ff=u)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(Wi(t)!==t)throw Error(x(188))}function TA(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===r)return Wy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Dw(t){return t=TA(t),t!==null?Ow(t):null}function Ow(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ow(t);if(e!==null)return e;t=t.sibling}return null}var Lw=Qt.unstable_scheduleCallback,Ky=Qt.unstable_cancelCallback,IA=Qt.unstable_shouldYield,RA=Qt.unstable_requestPaint,Fe=Qt.unstable_now,SA=Qt.unstable_getCurrentPriorityLevel,Zp=Qt.unstable_ImmediatePriority,bw=Qt.unstable_UserBlockingPriority,Vu=Qt.unstable_NormalPriority,AA=Qt.unstable_LowPriority,Mw=Qt.unstable_IdlePriority,Nc=null,$n=null;function CA(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Nc,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:xA,PA=Math.log,kA=Math.LN2;function xA(t){return t>>>=0,t===0?32:31-(PA(t)/kA|0)|0}var Vl=64,Fl=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$o(a):(s&=o,s!==0&&(r=$o(s)))}else o=n&~i,o!==0?r=$o(o):s!==0&&(r=$o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function NA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=NA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vw(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function OA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function em(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Fw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uw,tm,$w,jw,Bw,mf=!1,Ul=[],Mr=null,Vr=null,Fr=null,ga=new Map,ya=new Map,Cr=[],LA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gy(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=il(e),e!==null&&tm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bA(t,e,n,r,i){switch(e){case"focusin":return Mr=So(Mr,t,e,n,r,i),!0;case"dragenter":return Vr=So(Vr,t,e,n,r,i),!0;case"mouseover":return Fr=So(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,So(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,So(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function zw(t){var e=mi(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=Nw(n),e!==null){t.blockedOn=e,Bw(t.priority,function(){$w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=il(n),e!==null&&tm(e),t.blockedOn=n,!1;e.shift()}return!0}function Qy(t,e,n){du(t)&&n.delete(e)}function MA(){mf=!1,Mr!==null&&du(Mr)&&(Mr=null),Vr!==null&&du(Vr)&&(Vr=null),Fr!==null&&du(Fr)&&(Fr=null),ga.forEach(Qy),ya.forEach(Qy)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,MA)))}function va(t){function e(i){return Ao(i,t)}if(0<Ul.length){Ao(Ul[0],t);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&Ao(Mr,t),Vr!==null&&Ao(Vr,t),Fr!==null&&Ao(Fr,t),ga.forEach(e),ya.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)zw(n),n.blockedOn===null&&Cr.shift()}var Ss=yr.ReactCurrentBatchConfig,Uu=!0;function VA(t,e,n,r){var i=he,s=Ss.transition;Ss.transition=null;try{he=1,nm(t,e,n,r)}finally{he=i,Ss.transition=s}}function FA(t,e,n,r){var i=he,s=Ss.transition;Ss.transition=null;try{he=4,nm(t,e,n,r)}finally{he=i,Ss.transition=s}}function nm(t,e,n,r){if(Uu){var i=gf(t,e,n,r);if(i===null)ad(t,e,r,$u,n),Gy(t,r);else if(bA(i,t,e,n,r))r.stopPropagation();else if(Gy(t,r),e&4&&-1<LA.indexOf(t)){for(;i!==null;){var s=il(i);if(s!==null&&Uw(s),s=gf(t,e,n,r),s===null&&ad(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var $u=null;function gf(t,e,n,r){if($u=null,t=Jp(r),t=mi(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function Hw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SA()){case Zp:return 1;case bw:return 4;case Vu:case AA:return 16;case Mw:return 536870912;default:return 16}default:return 16}}var Or=null,rm=null,fu=null;function qw(){if(fu)return fu;var t,e=rm,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fu=i.slice(t,1<r?1-r:void 0)}function pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Yy(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:Yy,this.isPropagationStopped=Yy,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},im=Jt(oo),rl=Ne({},oo,{view:0,detail:0}),UA=Jt(rl),Jh,Zh,Co,Dc=Ne({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(Jh=t.screenX-Co.screenX,Zh=t.screenY-Co.screenY):Zh=Jh=0,Co=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),Xy=Jt(Dc),$A=Ne({},Dc,{dataTransfer:0}),jA=Jt($A),BA=Ne({},rl,{relatedTarget:0}),ed=Jt(BA),zA=Ne({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),HA=Jt(zA),qA=Ne({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WA=Jt(qA),KA=Ne({},oo,{data:0}),Jy=Jt(KA),GA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YA[t])?!!e[t]:!1}function sm(){return XA}var JA=Ne({},rl,{key:function(t){if(t.key){var e=GA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sm,charCode:function(t){return t.type==="keypress"?pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZA=Jt(JA),eC=Ne({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=Jt(eC),tC=Ne({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sm}),nC=Jt(tC),rC=Ne({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),iC=Jt(rC),sC=Ne({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oC=Jt(sC),aC=[9,13,27,32],om=lr&&"CompositionEvent"in window,Jo=null;lr&&"documentMode"in document&&(Jo=document.documentMode);var lC=lr&&"TextEvent"in window&&!Jo,Ww=lr&&(!om||Jo&&8<Jo&&11>=Jo),ev=" ",tv=!1;function Kw(t,e){switch(t){case"keyup":return aC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function uC(t,e){switch(t){case"compositionend":return Gw(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function cC(t,e){if(ls)return t==="compositionend"||!om&&Kw(t,e)?(t=qw(),fu=rm=Or=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ww&&e.locale!=="ko"?null:e.data;default:return null}}var hC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hC[t.type]:e==="textarea"}function Qw(t,e,n,r){Aw(r),e=ju(e,"onChange"),0<e.length&&(n=new im("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zo=null,_a=null;function dC(t){oE(t,0)}function Oc(t){var e=hs(t);if(_w(e))return t}function fC(t,e){if(t==="change")return e}var Yw=!1;if(lr){var td;if(lr){var nd="oninput"in document;if(!nd){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),nd=typeof rv.oninput=="function"}td=nd}else td=!1;Yw=td&&(!document.documentMode||9<document.documentMode)}function iv(){Zo&&(Zo.detachEvent("onpropertychange",Xw),_a=Zo=null)}function Xw(t){if(t.propertyName==="value"&&Oc(_a)){var e=[];Qw(e,_a,t,Jp(t)),xw(dC,e)}}function pC(t,e,n){t==="focusin"?(iv(),Zo=e,_a=n,Zo.attachEvent("onpropertychange",Xw)):t==="focusout"&&iv()}function mC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(_a)}function gC(t,e){if(t==="click")return Oc(e)}function yC(t,e){if(t==="input"||t==="change")return Oc(e)}function vC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:vC;function wa(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function Jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zw(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _C(t){var e=Zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jw(n.ownerDocument.documentElement,n)){if(r!==null&&am(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ov(n,s);var o=ov(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wC=lr&&"documentMode"in document&&11>=document.documentMode,us=null,yf=null,ea=null,vf=!1;function av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||us==null||us!==Lu(r)||(r=us,"selectionStart"in r&&am(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&wa(ea,r)||(ea=r,r=ju(yf,"onSelect"),0<r.length&&(e=new im("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},rd={},eE={};lr&&(eE=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Lc(t){if(rd[t])return rd[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eE)return rd[t]=e[n];return t}var tE=Lc("animationend"),nE=Lc("animationiteration"),rE=Lc("animationstart"),iE=Lc("transitionend"),sE=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){sE.set(t,e),qi(e,[t])}for(var id=0;id<lv.length;id++){var sd=lv[id],EC=sd.toLowerCase(),TC=sd[0].toUpperCase()+sd.slice(1);ti(EC,"on"+TC)}ti(tE,"onAnimationEnd");ti(nE,"onAnimationIteration");ti(rE,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(iE,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IC=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EA(r,e,void 0,t),t.currentTarget=null}function oE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}}}if(Mu)throw t=ff,Mu=!1,ff=null,t}function _e(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(aE(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),aE(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Bl]){t[Bl]=!0,pw.forEach(function(n){n!=="selectionchange"&&(IC.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,od("selectionchange",!1,e))}}function aE(t,e,n,r){switch(Hw(e)){case 1:var i=VA;break;case 4:i=FA;break;default:i=nm}n=i.bind(null,e,n,t),i=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xw(function(){var u=s,c=Jp(n),h=[];e:{var d=sE.get(t);if(d!==void 0){var p=im,v=t;switch(t){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":p=ZA;break;case"focusin":v="focus",p=ed;break;case"focusout":v="blur",p=ed;break;case"beforeblur":case"afterblur":p=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nC;break;case tE:case nE:case rE:p=HA;break;case iE:p=iC;break;case"scroll":p=UA;break;case"wheel":p=oC;break;case"copy":case"cut":case"paste":p=WA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zy}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,g!==null&&(m=ma(f,g),m!=null&&_.push(Ta(f,m,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==cf&&(v=n.relatedTarget||n.fromElement)&&(mi(v)||v[ur]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?mi(v):null,v!==null&&(w=Wi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=Xy,m="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Zy,m="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?d:hs(p),y=v==null?d:hs(v),d=new _(m,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,m=null,mi(c)===u&&(_=new _(g,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,m=_),w=m,p&&v)t:{for(_=p,g=v,f=0,y=_;y;y=es(y))f++;for(y=0,m=g;m;m=es(m))y++;for(;0<f-y;)_=es(_),f--;for(;0<y-f;)g=es(g),y--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=es(_),g=es(g)}_=null}else _=null;p!==null&&cv(h,d,p,_,!1),v!==null&&w!==null&&cv(h,w,v,_,!0)}}e:{if(d=u?hs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=fC;else if(nv(d))if(Yw)E=yC;else{E=mC;var R=pC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=gC);if(E&&(E=E(t,u))){Qw(h,E,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&sf(d,"number",d.value)}switch(R=u?hs(u):window,t){case"focusin":(nv(R)||R.contentEditable==="true")&&(us=R,yf=u,ea=null);break;case"focusout":ea=yf=us=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,av(h,n,c);break;case"selectionchange":if(wC)break;case"keydown":case"keyup":av(h,n,c)}var S;if(om)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ls?Kw(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Ww&&n.locale!=="ko"&&(ls||D!=="onCompositionStart"?D==="onCompositionEnd"&&ls&&(S=qw()):(Or=c,rm="value"in Or?Or.value:Or.textContent,ls=!0)),R=ju(u,D),0<R.length&&(D=new Jy(D,t,null,n,c),h.push({event:D,listeners:R}),S?D.data=S:(S=Gw(n),S!==null&&(D.data=S)))),(S=lC?uC(t,n):cC(t,n))&&(u=ju(u,"onBeforeInput"),0<u.length&&(c=new Jy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}oE(h,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ju(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ma(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ma(n,s),l!=null&&o.unshift(Ta(n,l,a))):i||(l=ma(n,s),l!=null&&o.push(Ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RC=/\r\n?/g,SC=/\u0000|\uFFFD/g;function hv(t){return(typeof t=="string"?t:""+t).replace(RC,`
`).replace(SC,"")}function zl(t,e,n){if(e=hv(e),hv(t)!==e&&n)throw Error(x(425))}function Bu(){}var _f=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,AC=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,CC=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(t){return dv.resolve(null).then(t).catch(PC)}:Tf;function PC(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),bn="__reactFiber$"+ao,Ia="__reactProps$"+ao,ur="__reactContainer$"+ao,If="__reactEvents$"+ao,kC="__reactListeners$"+ao,xC="__reactHandles$"+ao;function mi(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fv(t);t!==null;){if(n=t[bn])return n;t=fv(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[bn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function bc(t){return t[Ia]||null}var Rf=[],ds=-1;function ni(t){return{current:t}}function Ie(t){0>ds||(t.current=Rf[ds],Rf[ds]=null,ds--)}function ve(t,e){ds++,Rf[ds]=t.current,t.current=e}var Yr={},St=ni(Yr),Ut=ni(!1),xi=Yr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function zu(){Ie(Ut),Ie(St)}function pv(t,e,n){if(St.current!==Yr)throw Error(x(168));ve(St,e),ve(Ut,n)}function lE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,pA(t)||"Unknown",i));return Ne({},n,r)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,xi=St.current,ve(St,t),ve(Ut,Ut.current),!0}function mv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=lE(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ut),Ie(St),ve(St,t)):Ie(Ut),ve(Ut,n)}var Jn=null,Mc=!1,ud=!1;function uE(t){Jn===null?Jn=[t]:Jn.push(t)}function NC(t){Mc=!0,uE(t)}function ri(){if(!ud&&Jn!==null){ud=!0;var t=0,e=he;try{var n=Jn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Mc=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),Lw(Zp,ri),i}finally{he=e,ud=!1}}return null}var fs=[],ps=0,qu=null,Wu=0,rn=[],sn=0,Ni=null,er=1,tr="";function di(t,e){fs[ps++]=Wu,fs[ps++]=qu,qu=t,Wu=e}function cE(t,e,n){rn[sn++]=er,rn[sn++]=tr,rn[sn++]=Ni,Ni=t;var r=er;t=tr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-En(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function lm(t){t.return!==null&&(di(t,1),cE(t,1,0))}function um(t){for(;t===qu;)qu=fs[--ps],fs[ps]=null,Wu=fs[--ps],fs[ps]=null;for(;t===Ni;)Ni=rn[--sn],rn[sn]=null,tr=rn[--sn],rn[sn]=null,er=rn[--sn],rn[sn]=null}var Gt=null,qt=null,Ce=!1,_n=null;function hE(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,qt=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,qt=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(Ce){var e=qt;if(e){var n=e;if(!gv(t,e)){if(Sf(t))throw Error(x(418));e=Ur(n.nextSibling);var r=Gt;e&&gv(t,e)?hE(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Gt=t)}}else{if(Sf(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Gt=t}}}function yv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Hl(t){if(t!==Gt)return!1;if(!Ce)return yv(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=qt)){if(Sf(t))throw dE(),Error(x(418));for(;e;)hE(t,e),e=Ur(e.nextSibling)}if(yv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Gt?Ur(t.stateNode.nextSibling):null;return!0}function dE(){for(var t=qt;t;)t=Ur(t.nextSibling)}function Fs(){qt=Gt=null,Ce=!1}function cm(t){_n===null?_n=[t]:_n.push(t)}var DC=yr.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vv(t){var e=t._init;return e(t._payload)}function fE(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=zr(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,m){return f===null||f.tag!==6?(f=gd(y,g.mode,m),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,m){var E=y.type;return E===as?c(g,f,y.props.children,m,y.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Sr&&vv(E)===f.type)?(m=i(f,y.props),m.ref=Po(g,f,y),m.return=g,m):(m=Eu(y.type,y.key,y.props,null,g.mode,m),m.ref=Po(g,f,y),m.return=g,m)}function u(g,f,y,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=yd(y,g.mode,m),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,m,E){return f===null||f.tag!==7?(f=Si(y,g.mode,m,E),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=gd(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ll:return y=Eu(f.type,f.key,f.props,null,g.mode,y),y.ref=Po(g,null,f),y.return=g,y;case os:return f=yd(f,g.mode,y),f.return=g,f;case Sr:var m=f._init;return h(g,m(f._payload),y)}if(Uo(f)||Io(f))return f=Si(f,g.mode,y,null),f.return=g,f;ql(g,f)}return null}function d(g,f,y,m){var E=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(g,f,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:return y.key===E?l(g,f,y,m):null;case os:return y.key===E?u(g,f,y,m):null;case Sr:return E=y._init,d(g,f,E(y._payload),m)}if(Uo(y)||Io(y))return E!==null?null:c(g,f,y,m,null);ql(g,y)}return null}function p(g,f,y,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(y)||null,a(f,g,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ll:return g=g.get(m.key===null?y:m.key)||null,l(f,g,m,E);case os:return g=g.get(m.key===null?y:m.key)||null,u(f,g,m,E);case Sr:var R=m._init;return p(g,f,y,R(m._payload),E)}if(Uo(m)||Io(m))return g=g.get(y)||null,c(f,g,m,E,null);ql(f,m)}return null}function v(g,f,y,m){for(var E=null,R=null,S=f,D=f=0,Y=null;S!==null&&D<y.length;D++){S.index>D?(Y=S,S=null):Y=S.sibling;var B=d(g,S,y[D],m);if(B===null){S===null&&(S=Y);break}t&&S&&B.alternate===null&&e(g,S),f=s(B,f,D),R===null?E=B:R.sibling=B,R=B,S=Y}if(D===y.length)return n(g,S),Ce&&di(g,D),E;if(S===null){for(;D<y.length;D++)S=h(g,y[D],m),S!==null&&(f=s(S,f,D),R===null?E=S:R.sibling=S,R=S);return Ce&&di(g,D),E}for(S=r(g,S);D<y.length;D++)Y=p(S,g,D,y[D],m),Y!==null&&(t&&Y.alternate!==null&&S.delete(Y.key===null?D:Y.key),f=s(Y,f,D),R===null?E=Y:R.sibling=Y,R=Y);return t&&S.forEach(function(Ue){return e(g,Ue)}),Ce&&di(g,D),E}function _(g,f,y,m){var E=Io(y);if(typeof E!="function")throw Error(x(150));if(y=E.call(y),y==null)throw Error(x(151));for(var R=E=null,S=f,D=f=0,Y=null,B=y.next();S!==null&&!B.done;D++,B=y.next()){S.index>D?(Y=S,S=null):Y=S.sibling;var Ue=d(g,S,B.value,m);if(Ue===null){S===null&&(S=Y);break}t&&S&&Ue.alternate===null&&e(g,S),f=s(Ue,f,D),R===null?E=Ue:R.sibling=Ue,R=Ue,S=Y}if(B.done)return n(g,S),Ce&&di(g,D),E;if(S===null){for(;!B.done;D++,B=y.next())B=h(g,B.value,m),B!==null&&(f=s(B,f,D),R===null?E=B:R.sibling=B,R=B);return Ce&&di(g,D),E}for(S=r(g,S);!B.done;D++,B=y.next())B=p(S,g,D,B.value,m),B!==null&&(t&&B.alternate!==null&&S.delete(B.key===null?D:B.key),f=s(B,f,D),R===null?E=B:R.sibling=B,R=B);return t&&S.forEach(function(fe){return e(g,fe)}),Ce&&di(g,D),E}function w(g,f,y,m){if(typeof y=="object"&&y!==null&&y.type===as&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:e:{for(var E=y.key,R=f;R!==null;){if(R.key===E){if(E=y.type,E===as){if(R.tag===7){n(g,R.sibling),f=i(R,y.props.children),f.return=g,g=f;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Sr&&vv(E)===R.type){n(g,R.sibling),f=i(R,y.props),f.ref=Po(g,R,y),f.return=g,g=f;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===as?(f=Si(y.props.children,g.mode,m,y.key),f.return=g,g=f):(m=Eu(y.type,y.key,y.props,null,g.mode,m),m.ref=Po(g,f,y),m.return=g,g=m)}return o(g);case os:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=yd(y,g.mode,m),f.return=g,g=f}return o(g);case Sr:return R=y._init,w(g,f,R(y._payload),m)}if(Uo(y))return v(g,f,y,m);if(Io(y))return _(g,f,y,m);ql(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=gd(y,g.mode,m),f.return=g,g=f),o(g)):n(g,f)}return w}var Us=fE(!0),pE=fE(!1),Ku=ni(null),Gu=null,ms=null,hm=null;function dm(){hm=ms=Gu=null}function fm(t){var e=Ku.current;Ie(Ku),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Gu=t,hm=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(hm!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Gu===null)throw Error(x(308));ms=t,Gu.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var gi=null;function pm(t){gi===null?gi=[t]:gi.push(t)}function mE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pm(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,pm(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,em(t,n)}}function _v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Ne({},h,d);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Oi|=o,t.lanes=o,t.memoizedState=h}}function wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var sl={},jn=ni(sl),Ra=ni(sl),Sa=ni(sl);function yi(t){if(t===sl)throw Error(x(174));return t}function gm(t,e){switch(ve(Sa,e),ve(Ra,t),ve(jn,sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}Ie(jn),ve(jn,e)}function $s(){Ie(jn),Ie(Ra),Ie(Sa)}function yE(t){yi(Sa.current);var e=yi(jn.current),n=af(e,t.type);e!==n&&(ve(Ra,t),ve(jn,n))}function ym(t){Ra.current===t&&(Ie(jn),Ie(Ra))}var ke=ni(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function vm(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var gu=yr.ReactCurrentDispatcher,hd=yr.ReactCurrentBatchConfig,Di=0,xe=null,Qe=null,et=null,Xu=!1,ta=!1,Aa=0,OC=0;function pt(){throw Error(x(321))}function _m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function wm(t,e,n,r,i,s){if(Di=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?VC:FC,t=n(r,i),ta){s=0;do{if(ta=!1,Aa=0,25<=s)throw Error(x(301));s+=1,et=Qe=null,e.updateQueue=null,gu.current=UC,t=n(r,i)}while(ta)}if(gu.current=Ju,e=Qe!==null&&Qe.next!==null,Di=0,et=Qe=xe=null,Xu=!1,e)throw Error(x(300));return t}function Em(){var t=Aa!==0;return Aa=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?xe.memoizedState=et=t:et=et.next=t,et}function cn(){if(Qe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?xe.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(x(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?xe.memoizedState=et=t:et=et.next=t}return et}function Ca(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=cn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Di&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,xe.lanes|=c,Oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Sn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fd(t){var e=cn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vE(){}function _E(t,e){var n=xe,r=cn(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,Tm(TE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Pa(9,EE.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(x(349));Di&30||wE(n,e,i)}return i}function wE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function EE(t,e,n,r){e.value=n,e.getSnapshot=r,IE(e)&&RE(t)}function TE(t,e,n){return n(function(){IE(e)&&RE(t)})}function IE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function RE(t){var e=cr(t,1);e!==null&&Tn(e,t,1,-1)}function Ev(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=MC.bind(null,xe,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function SE(){return cn().memoizedState}function yu(t,e,n,r){var i=On();xe.flags|=t,i.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&_m(r,o.deps)){i.memoizedState=Pa(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Pa(1|e,n,s,r)}function Tv(t,e){return yu(8390656,8,t,e)}function Tm(t,e){return Vc(2048,8,t,e)}function AE(t,e){return Vc(4,2,t,e)}function CE(t,e){return Vc(4,4,t,e)}function PE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kE(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,PE.bind(null,e,t),n)}function Im(){}function xE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function NE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function DE(t,e,n){return Di&21?(Sn(n,e)||(n=Vw(),xe.lanes|=n,Oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function LC(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=hd.transition;hd.transition={};try{t(!1),e()}finally{he=n,hd.transition=r}}function OE(){return cn().memoizedState}function bC(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LE(t))bE(e,n);else if(n=mE(t,e,n,r),n!==null){var i=Nt();Tn(n,t,r,i),ME(n,e,r)}}function MC(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LE(t))bE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var l=e.interleaved;l===null?(i.next=i,pm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=mE(t,e,i,r),n!==null&&(i=Nt(),Tn(n,t,r,i),ME(n,e,r))}}function LE(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function bE(t,e){ta=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ME(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,em(t,n)}}var Ju={readContext:un,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},VC={readContext:un,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yu(4194308,4,PE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yu(4194308,4,t,e)},useInsertionEffect:function(t,e){return yu(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bC.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Ev,useDebugValue:Im,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Ev(!1),e=t[0];return t=LC.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=On();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),nt===null)throw Error(x(349));Di&30||wE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tv(TE.bind(null,r,s,t),[t]),r.flags|=2048,Pa(9,EE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=nt.identifierPrefix;if(Ce){var n=tr,r=er;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FC={readContext:un,useCallback:xE,useContext:un,useEffect:Tm,useImperativeHandle:kE,useInsertionEffect:AE,useLayoutEffect:CE,useMemo:NE,useReducer:dd,useRef:SE,useState:function(){return dd(Ca)},useDebugValue:Im,useDeferredValue:function(t){var e=cn();return DE(e,Qe.memoizedState,t)},useTransition:function(){var t=dd(Ca)[0],e=cn().memoizedState;return[t,e]},useMutableSource:vE,useSyncExternalStore:_E,useId:OE,unstable_isNewReconciler:!1},UC={readContext:un,useCallback:xE,useContext:un,useEffect:Tm,useImperativeHandle:kE,useInsertionEffect:AE,useLayoutEffect:CE,useMemo:NE,useReducer:fd,useRef:SE,useState:function(){return fd(Ca)},useDebugValue:Im,useDeferredValue:function(t){var e=cn();return Qe===null?e.memoizedState=t:DE(e,Qe.memoizedState,t)},useTransition:function(){var t=fd(Ca)[0],e=cn().memoizedState;return[t,e]},useMutableSource:vE,useSyncExternalStore:_E,useId:OE,unstable_isNewReconciler:!1};function gn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Br(t),s=or(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(Tn(e,t,i,r),mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Br(t),s=or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(Tn(e,t,i,r),mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Br(t),i=or(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(Tn(e,t,r,n),mu(e,t,r))}};function Iv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function VE(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=$t(e)?xi:St.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=$t(e)?xi:St.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fc.enqueueReplaceState(i,i.state,null),Qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=fA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $C=typeof WeakMap=="function"?WeakMap:Map;function FE(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,$f=r),xf(t,e)},n}function UE(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $C;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eP.bind(null,t,e,n),e.then(t,t))}function Av(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var jC=yr.ReactCurrentOwner,Ft=!1;function kt(t,e,n,r){e.child=t===null?pE(e,null,n,r):Us(e,t.child,n,r)}function Pv(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=wm(t,e,n,r,s,i),n=Em(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Ce&&n&&lm(e),e.flags|=1,kt(t,e,r,i),e.child)}function kv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$E(t,e,s,r,i)):(t=Eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return hr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function $E(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,hr(t,e,i)}return Nf(t,e,n,r,i)}function jE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ys,Ht),Ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ys,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ys,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ys,Ht),Ht|=r;return kt(t,e,i,n),e.child}function BE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,i){var s=$t(n)?xi:St.current;return s=Vs(e,s),As(e,i),n=wm(t,e,n,r,s,i),r=Em(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Ce&&r&&lm(e),e.flags|=1,kt(t,e,n,i),e.child)}function xv(t,e,n,r,i){if($t(n)){var s=!0;Hu(e)}else s=!1;if(As(e,i),e.stateNode===null)vu(t,e),VE(e,n,r),kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=$t(n)?xi:St.current,u=Vs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rv(e,o,r,u),Ar=!1;var d=e.memoizedState;o.state=d,Qu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||Ar?(typeof c=="function"&&(Pf(e,n,c,r),l=e.memoizedState),(a=Ar||Iv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=$t(n)?xi:St.current,l=Vs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Rv(e,o,r,l),Ar=!1,d=e.memoizedState,o.state=d,Qu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ut.current||Ar?(typeof p=="function"&&(Pf(e,n,p,r),v=e.memoizedState),(u=Ar||Iv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){BE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mv(e,n,!1),hr(t,e,s);r=e.stateNode,jC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&mv(e,n,!0),e.child}function zE(t){var e=t.stateNode;e.pendingContext?pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(t,e.context,!1),gm(t,e.containerInfo)}function Nv(t,e,n,r,i){return Fs(),cm(i),e.flags|=256,kt(t,e,n,r),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function HE(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(ke,i&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,r,0,null),t=Si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lf(n),e.memoizedState=Of,t):Rm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=Si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Of,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rm(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,r){return r!==null&&cm(r),Us(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(x(422))),Wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jc({mode:"visible",children:r.children},i,0,null),s=Si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=Lf(o),e.memoizedState=Of,s);if(!(e.mode&1))return Wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=pd(s,r,void 0),Wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),Tn(r,t,i,-1))}return xm(),r=pd(Error(x(421))),Wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Ur(i.nextSibling),Gt=e,Ce=!0,_n=null,t!==null&&(rn[sn++]=er,rn[sn++]=tr,rn[sn++]=Ni,er=t.id,tr=t.overflow,Ni=e),e=Rm(e,r.children),e.flags|=4096,e)}function Dv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dv(t,n,e);else if(t.tag===19)Dv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zC(t,e,n){switch(e.tag){case 3:zE(e),Fs();break;case 5:yE(e);break;case 1:$t(e.type)&&Hu(e);break;case 4:gm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?HE(t,e,n):(ve(ke,ke.current&1),t=hr(t,e,n),t!==null?t.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,jE(t,e,n)}return hr(t,e,n)}var WE,bf,KE,GE;WE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bf=function(){};KE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(jn.current);var s=null;switch(n){case"input":i=nf(t,i),r=nf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=of(t,i),r=of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};GE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ko(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HC(t,e,n){var r=e.pendingProps;switch(um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return $t(e.type)&&zu(),mt(e),null;case 3:return r=e.stateNode,$s(),Ie(Ut),Ie(St),vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(zf(_n),_n=null))),bf(t,e),mt(e),null;case 5:ym(e);var i=yi(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)KE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return mt(e),null}if(t=yi(jn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bn]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<jo.length;i++)_e(jo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":jy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":zy(r,s),_e("invalid",r)}lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":bl(r),By(r,s,!0);break;case"textarea":bl(r),Hy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[Ia]=r,WE(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<jo.length;i++)_e(jo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":jy(t,r),i=nf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),_e("invalid",t);break;case"textarea":zy(t,r),i=of(t,r),_e("invalid",t);break;default:i=r}lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Iw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Gp(t,s,l,o))}switch(n){case"input":bl(t),By(t,r,!1);break;case"textarea":bl(t),Hy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)GE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=yi(Sa.current),yi(jn.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(s=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&qt!==null&&e.mode&1&&!(e.flags&128))dE(),Fs(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[bn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else _n!==null&&(zf(_n),_n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ye===0&&(Ye=3):xm())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return $s(),bf(t,e),t===null&&Ea(e.stateNode.containerInfo),mt(e),null;case 10:return fm(e.type._context),mt(e),null;case 17:return $t(e.type)&&zu(),mt(e),null;case 19:if(Ie(ke),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ko(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,ko(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Bs&&(e.flags|=128,r=!0,ko(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*Fe()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function qC(t,e){switch(um(e),e.tag){case 1:return $t(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Ie(Ut),Ie(St),vm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ym(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return $s(),null;case 10:return fm(e.type._context),null;case 22:case 23:return km(),null;case 24:return null;default:return null}}var Kl=!1,vt=!1,WC=typeof WeakSet=="function"?WeakSet:Set,M=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Ov=!1;function KC(t,e){if(_f=Uu,t=Zw(),am(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Uu=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:gn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(m){Oe(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Ov,Ov=!1,v}function na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mf(e,n,s)}i=i.next}while(i!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function QE(t){var e=t.alternate;e!==null&&(t.alternate=null,QE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[Ia],delete e[If],delete e[kC],delete e[xC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function YE(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||YE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}var ot=null,yn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)XE(t,e,n),n=n.sibling}function XE(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:vt||gs(n,e);case 6:var r=ot,i=yn;ot=null,Tr(t,e,n),ot=r,yn=i,ot!==null&&(yn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(yn?(t=ot,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),va(t)):ld(ot,n.stateNode));break;case 4:r=ot,i=yn,ot=n.stateNode.containerInfo,yn=!0,Tr(t,e,n),ot=r,yn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!vt&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Tr(t,e,n),vt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WC),e.forEach(function(r){var i=nP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,yn=!1;break e;case 3:ot=a.stateNode.containerInfo,yn=!0;break e;case 4:ot=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(ot===null)throw Error(x(160));XE(s,o,i),ot=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)JE(e,t),e=e.sibling}function JE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),Dn(t),r&4){try{na(3,t,t.return),Uc(3,t)}catch(_){Oe(t,t.return,_)}try{na(5,t,t.return)}catch(_){Oe(t,t.return,_)}}break;case 1:mn(e,t),Dn(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(mn(e,t),Dn(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(_){Oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ww(i,s),uf(a,o);var u=uf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Sw(i,h):c==="dangerouslySetInnerHTML"?Iw(i,h):c==="children"?pa(i,h):Gp(i,c,h,u)}switch(a){case"input":rf(i,s);break;case"textarea":Ew(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(_){Oe(t,t.return,_)}}break;case 6:if(mn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Oe(t,t.return,_)}}break;case 3:if(mn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(_){Oe(t,t.return,_)}break;case 4:mn(e,t),Dn(t);break;case 13:mn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cm=Fe())),r&4&&bv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,mn(e,t),vt=u):mn(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:na(4,d,d.return);break;case 1:gs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Oe(r,n,_)}}break;case 5:gs(d,d.return);break;case 22:if(d.memoizedState!==null){Vv(h);continue}}p!==null?(p.return=d,M=p):Vv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rw("display",o))}catch(_){Oe(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Oe(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mn(e,t),Dn(t),r&4&&bv(t);break;case 21:break;default:mn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(YE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=Lv(t);Uf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(t);Ff(t,a,o);break;default:throw Error(x(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GC(t,e,n){M=t,ZE(t)}function ZE(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Kl;var u=vt;if(Kl=o,(vt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Fv(i):l!==null?(l.return=o,M=l):Fv(i);for(;s!==null;)M=s,ZE(s),s=s.sibling;M=i,Kl=a,vt=u}Mv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Mv(t)}}function Mv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}vt||e.flags&512&&Vf(e)}catch(d){Oe(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Vv(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Fv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Vf(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var QC=Math.ceil,Zu=yr.ReactCurrentDispatcher,Sm=yr.ReactCurrentOwner,ln=yr.ReactCurrentBatchConfig,oe=0,nt=null,ze=null,ut=0,Ht=0,ys=ni(0),Ye=0,ka=null,Oi=0,$c=0,Am=0,ra=null,Mt=null,Cm=0,Bs=1/0,Yn=null,ec=!1,$f=null,jr=null,Gl=!1,Lr=null,tc=0,ia=0,jf=null,_u=-1,wu=0;function Nt(){return oe&6?Fe():_u!==-1?_u:_u=Fe()}function Br(t){return t.mode&1?oe&2&&ut!==0?ut&-ut:DC.transition!==null?(wu===0&&(wu=Vw()),wu):(t=he,t!==0||(t=window.event,t=t===void 0?16:Hw(t.type)),t):1}function Tn(t,e,n,r){if(50<ia)throw ia=0,jf=null,Error(x(185));nl(t,n,r),(!(oe&2)||t!==nt)&&(t===nt&&(!(oe&2)&&($c|=n),Ye===4&&Pr(t,ut)),jt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Bs=Fe()+500,Mc&&ri()))}function jt(t,e){var n=t.callbackNode;DA(t,e);var r=Fu(t,t===nt?ut:0);if(r===0)n!==null&&Ky(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ky(n),e===1)t.tag===0?NC(Uv.bind(null,t)):uE(Uv.bind(null,t)),CC(function(){!(oe&6)&&ri()}),n=null;else{switch(Fw(r)){case 1:n=Zp;break;case 4:n=bw;break;case 16:n=Vu;break;case 536870912:n=Mw;break;default:n=Vu}n=a1(n,e1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e1(t,e){if(_u=-1,wu=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Fu(t,t===nt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=oe;oe|=2;var s=n1();(nt!==t||ut!==e)&&(Yn=null,Bs=Fe()+500,Ri(t,e));do try{JC();break}catch(a){t1(t,a)}while(!0);dm(),Zu.current=s,oe=i,ze!==null?e=0:(nt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=pf(t),i!==0&&(r=i,e=Bf(t,i))),e===1)throw n=ka,Ri(t,0),Pr(t,r),jt(t,Fe()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!YC(i)&&(e=nc(t,r),e===2&&(s=pf(t),s!==0&&(r=s,e=Bf(t,s))),e===1))throw n=ka,Ri(t,0),Pr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:fi(t,Mt,Yn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Cm+500-Fe(),10<e)){if(Fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tf(fi.bind(null,t,Mt,Yn),e);break}fi(t,Mt,Yn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QC(r/1960))-r,10<r){t.timeoutHandle=Tf(fi.bind(null,t,Mt,Yn),r);break}fi(t,Mt,Yn);break;case 5:fi(t,Mt,Yn);break;default:throw Error(x(329))}}}return jt(t,Fe()),t.callbackNode===n?e1.bind(null,t):null}function Bf(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=nc(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&zf(e)),t}function zf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function YC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~Am,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function Uv(t){if(oe&6)throw Error(x(327));Cs();var e=Fu(t,0);if(!(e&1))return jt(t,Fe()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=ka,Ri(t,0),Pr(t,e),jt(t,Fe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,Mt,Yn),jt(t,Fe()),null}function Pm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Bs=Fe()+500,Mc&&ri())}}function Li(t){Lr!==null&&Lr.tag===0&&!(oe&6)&&Cs();var e=oe;oe|=1;var n=ln.transition,r=he;try{if(ln.transition=null,he=1,t)return t()}finally{he=r,ln.transition=n,oe=e,!(oe&6)&&ri()}}function km(){Ht=ys.current,Ie(ys)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AC(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(um(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:$s(),Ie(Ut),Ie(St),vm();break;case 5:ym(r);break;case 4:$s();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:fm(r.type._context);break;case 22:case 23:km()}n=n.return}if(nt=t,ze=t=zr(t.current,null),ut=Ht=e,Ye=0,ka=null,Am=$c=Oi=0,Mt=ra=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function t1(t,e){do{var n=ze;try{if(dm(),gu.current=Ju,Xu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(Di=0,et=Qe=xe=null,ta=!1,Aa=0,Sm.current=null,n===null||n.return===null){Ye=1,ka=e,ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Av(o);if(p!==null){p.flags&=-257,Cv(p,o,a,s,e),p.mode&1&&Sv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Sv(s,u,e),xm();break e}l=Error(x(426))}}else if(Ce&&a.mode&1){var w=Av(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Cv(w,o,a,s,e),cm(js(l,a));break e}}s=l=js(l,a),Ye!==4&&(Ye=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=FE(s,l,e);_v(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jr===null||!jr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=UE(s,a,e);_v(s,m);break e}}s=s.return}while(s!==null)}i1(n)}catch(E){e=E,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function n1(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function xm(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(Oi&268435455)&&!($c&268435455)||Pr(nt,ut)}function nc(t,e){var n=oe;oe|=2;var r=n1();(nt!==t||ut!==e)&&(Yn=null,Ri(t,e));do try{XC();break}catch(i){t1(t,i)}while(!0);if(dm(),oe=n,Zu.current=r,ze!==null)throw Error(x(261));return nt=null,ut=0,Ye}function XC(){for(;ze!==null;)r1(ze)}function JC(){for(;ze!==null&&!IA();)r1(ze)}function r1(t){var e=o1(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?i1(t):ze=e,Sm.current=null}function i1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qC(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,ze=null;return}}else if(n=HC(n,e,Ht),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Ye===0&&(Ye=5)}function fi(t,e,n){var r=he,i=ln.transition;try{ln.transition=null,he=1,ZC(t,e,n,r)}finally{ln.transition=i,he=r}return null}function ZC(t,e,n,r){do Cs();while(Lr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OA(t,s),t===nt&&(ze=nt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,a1(Vu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=he;he=1;var a=oe;oe|=4,Sm.current=null,KC(t,n),JE(n,t),_C(wf),Uu=!!_f,wf=_f=null,t.current=n,GC(n),RA(),oe=a,he=o,ln.transition=s}else t.current=n;if(Gl&&(Gl=!1,Lr=t,tc=i),s=t.pendingLanes,s===0&&(jr=null),CA(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=$f,$f=null,t;return tc&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===jf?ia++:(ia=0,jf=t):ia=0,ri(),null}function Cs(){if(Lr!==null){var t=Fw(tc),e=ln.transition,n=he;try{if(ln.transition=null,he=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,tc=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:na(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(QE(c),c===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(E){Oe(a,a.return,E)}if(a===o){M=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}if(oe=i,ri(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Nc,t)}catch{}r=!0}return r}finally{he=n,ln.transition=e}}return!1}function $v(t,e,n){e=js(n,e),e=FE(t,e,1),t=$r(t,e,1),e=Nt(),t!==null&&(nl(t,1,e),jt(t,e))}function Oe(t,e,n){if(t.tag===3)$v(t,t,n);else for(;e!==null;){if(e.tag===3){$v(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=js(n,t),t=UE(e,t,1),e=$r(e,t,1),t=Nt(),e!==null&&(nl(e,1,t),jt(e,t));break}}e=e.return}}function eP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>Fe()-Cm?Ri(t,0):Am|=n),jt(t,e)}function s1(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=Nt();t=cr(t,e),t!==null&&(nl(t,e,n),jt(t,n))}function tP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s1(t,n)}function nP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),s1(t,n)}var o1;o1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,zC(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Ce&&e.flags&1048576&&cE(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vu(t,e),t=e.pendingProps;var i=Vs(e,St.current);As(e,n),i=wm(null,e,r,t,i,n);var s=Em();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Hu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mm(e),i.updater=Fc,e.stateNode=i,i._reactInternals=e,kf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&lm(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iP(r),t=gn(r,t),i){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=xv(null,e,r,t,n);break e;case 11:e=Pv(null,e,r,t,n);break e;case 14:e=kv(null,e,r,gn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),xv(t,e,r,i,n);case 3:e:{if(zE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gE(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=js(Error(x(423)),e),e=Nv(t,e,r,n,i);break e}else if(r!==i){i=js(Error(x(424)),e),e=Nv(t,e,r,n,i);break e}else for(qt=Ur(e.stateNode.containerInfo.firstChild),Gt=e,Ce=!0,_n=null,n=pE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=hr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return yE(e),t===null&&Af(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ef(r,i)?o=null:s!==null&&Ef(r,s)&&(e.flags|=32),BE(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return HE(t,e,n);case 4:return gm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Pv(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Ku,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!Ut.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=un(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),kv(t,e,r,i,n);case 15:return $E(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),vu(t,e),e.tag=1,$t(r)?(t=!0,Hu(e)):t=!1,As(e,n),VE(e,r,i),kf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return qE(t,e,n);case 22:return jE(t,e,n)}throw Error(x(156,e.tag))};function a1(t,e){return Lw(t,e)}function rP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new rP(t,e,n,r)}function Nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iP(t){if(typeof t=="function")return Nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yp)return 11;if(t===Xp)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Si(n.children,i,s,e);case Qp:o=8,i|=8;break;case Jd:return t=an(12,n,e,i|2),t.elementType=Jd,t.lanes=s,t;case Zd:return t=an(13,n,e,i),t.elementType=Zd,t.lanes=s,t;case ef:return t=an(19,n,e,i),t.elementType=ef,t.lanes=s,t;case yw:return jc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mw:o=10;break e;case gw:o=9;break e;case Yp:o=11;break e;case Xp:o=14;break e;case Sr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Si(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=an(22,t,r,e),t.elementType=yw,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dm(t,e,n,r,i,s,o,a,l){return t=new sP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mm(s),t}function oP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l1(t){if(!t)return Yr;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if($t(n))return lE(t,n,e)}return e}function u1(t,e,n,r,i,s,o,a,l){return t=Dm(n,r,!0,t,i,s,o,a,l),t.context=l1(null),n=t.current,r=Nt(),i=Br(n),s=or(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,nl(t,i,r),jt(t,r),t}function Bc(t,e,n,r){var i=e.current,s=Nt(),o=Br(i);return n=l1(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(Tn(t,i,o,s),mu(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Om(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function aP(){return null}var c1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}zc.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Bc(t,e,null,null)};zc.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Li(function(){Bc(null,t,null,null)}),e[ur]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&zw(t)}};function bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function lP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rc(o);s.call(u)}}var o=u1(e,r,t,0,null,!1,!1,"",Bv);return t._reactRootContainer=o,t[ur]=o.current,Ea(t.nodeType===8?t.parentNode:t),Li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rc(l);a.call(u)}}var l=Dm(t,0,!1,null,null,!1,!1,"",Bv);return t._reactRootContainer=l,t[ur]=l.current,Ea(t.nodeType===8?t.parentNode:t),Li(function(){Bc(e,l,n,r)}),l}function qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=rc(o);a.call(l)}}Bc(e,o,t,i)}else o=lP(n,e,t,i,r);return rc(o)}Uw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(em(e,n|1),jt(e,Fe()),!(oe&6)&&(Bs=Fe()+500,ri()))}break;case 13:Li(function(){var r=cr(t,1);if(r!==null){var i=Nt();Tn(r,t,1,i)}}),Om(t,1)}};tm=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Nt();Tn(e,t,134217728,n)}Om(t,134217728)}};$w=function(t){if(t.tag===13){var e=Br(t),n=cr(t,e);if(n!==null){var r=Nt();Tn(n,t,e,r)}Om(t,e)}};jw=function(){return he};Bw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bc(r);if(!i)throw Error(x(90));_w(r),rf(r,i)}}}break;case"textarea":Ew(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Pw=Pm;kw=Li;var uP={usingClientEntryPoint:!1,Events:[il,hs,bc,Aw,Cw,Pm]},xo={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cP={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dw(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||aP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Nc=Ql.inject(cP),$n=Ql}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uP;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(e))throw Error(x(200));return oP(t,e,null,n)};Xt.createRoot=function(t,e){if(!bm(t))throw Error(x(299));var n=!1,r="",i=c1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dm(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Lm(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Dw(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Li(t)};Xt.hydrate=function(t,e,n){if(!Hc(e))throw Error(x(200));return qc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!bm(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=c1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u1(e,null,t,1,n??null,i,!1,s,o),t[ur]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Xt.render=function(t,e,n){if(!Hc(e))throw Error(x(200));return qc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(x(40));return t._reactRootContainer?(Li(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Xt.unstable_batchedUpdates=Pm;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return qc(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function h1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h1)}catch(t){console.error(t)}}h1(),hw.exports=Xt;var hP=hw.exports,zv=hP;Yd.createRoot=zv.createRoot,Yd.hydrateRoot=zv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}var Ke;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ke||(Ke={}));const Hv="popstate";function dP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return xa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bi(i)}return pP(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fP(){return Math.random().toString(36).substr(2,8)}function qv(t,e){return{usr:t.state,key:t.key,idx:e}}function xa(t,e,n,r){return n===void 0&&(n=null),Ae({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ii(e):e,{state:n,key:e&&e.key||r||fP()})}function bi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ii(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ke.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ae({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ke.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function d(w,g){a=Ke.Push;let f=xa(_.location,w,g);u=c()+1;let y=qv(f,u),m=_.createHref(f);try{o.pushState(y,"",m)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=Ke.Replace;let f=xa(_.location,w,g);u=c();let y=qv(f,u),m=_.createHref(f);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:bi(w);return ne(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hv,h),l=w,()=>{i.removeEventListener(Hv,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var Ge;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ge||(Ge={}));const mP=new Set(["lazy","caseSensitive","path","id","index","children"]);function gP(t){return t.index===!0}function Hf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),gP(i)){let l=Ae({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ae({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Hf(i.children,e,o,r)),l}})}function vs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ii(e):e,i=lo(r.pathname||"/",n);if(i==null)return null;let s=d1(t);yP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=AP(s[a],kP(i));return o}function d1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),d1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:RP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of f1(s.path))i(s,o,l)}),e}function f1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=f1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vP=/^:\w+$/,_P=3,wP=2,EP=1,TP=10,IP=-2,Wv=t=>t==="*";function RP(t,e){let n=t.split("/"),r=n.length;return n.some(Wv)&&(r+=IP),e&&(r+=wP),n.filter(i=>!Wv(i)).reduce((i,s)=>i+(vP.test(s)?_P:s===""?EP:TP),r)}function SP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=CP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ar([i,c.pathname]),pathnameBase:OP(ar([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ar([i,c.pathnameBase]))}return s}function CP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=PP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=xP(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function PP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kP(t){try{return decodeURI(t)}catch(e){return zs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xP(t,e){try{return decodeURIComponent(t)}catch(n){return zs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ii(t):t;return{pathname:n?n.startsWith("/")?n:DP(n,e):e,search:LP(r),hash:bP(i)}}function DP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ol(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ii(t):(i=Ae({},t),ne(!i.pathname||!i.pathname.includes("?"),vd("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),vd("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),vd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=NP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),OP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Mm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function p1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const m1=["post","put","patch","delete"],MP=new Set(m1),VP=["get",...m1],FP=new Set(VP),UP=new Set([301,302,303,307,308]),$P=new Set([307,308]),_d={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},jP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},No={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BP=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function zP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=I=>({hasErrorBoundary:T(I)})}else i=BP;let s={},o=Hf(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,v=null,_=t.hydrationData!=null,w=vs(o,t.history.location,l),g=null;if(w==null){let T=nn(404,{pathname:t.history.location.pathname}),{matches:I,route:k}=e_(o);w=I,g={[k.id]:T}}let f=!w.some(T=>T.route.lazy)&&(!w.some(T=>T.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:w,initialized:f,navigation:_d,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},E=Ke.Pop,R=!1,S,D=!1,Y=!1,B=[],Ue=[],fe=new Map,en=0,kn=-1,xn=new Map,st=new Set,qe=new Map,O=new Map,$=new Map,z=!1;function ge(){return c=t.history.listen(T=>{let{action:I,location:k,delta:V}=T;if(z){z=!1;return}zs($.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Z=Ny({currentLocation:m.location,nextLocation:k,historyAction:I});if(Z&&V!=null){z=!0,t.history.go(V*-1),Nl(Z,{state:"blocked",location:k,proceed(){Nl(Z,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(V)},reset(){let G=new Map(m.blockers);G.set(Z,No),ae({blockers:G})}});return}return tn(I,k)}),m.initialized||tn(Ke.Pop,m.location),y}function Se(){c&&c(),h.clear(),S&&S.abort(),m.fetchers.forEach((T,I)=>Uh(I)),m.blockers.forEach((T,I)=>xy(I))}function fn(T){return h.add(T),()=>h.delete(T)}function ae(T){m=Ae({},m,T),h.forEach(I=>I(m))}function Lt(T,I){var k,V;let Z=m.actionData!=null&&m.navigation.formMethod!=null&&vn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((k=T.state)==null?void 0:k._isRedirect)!==!0,G;I.actionData?Object.keys(I.actionData).length>0?G=I.actionData:G=null:Z?G=m.actionData:G=null;let X=I.loaderData?Zv(m.loaderData,I.loaderData,I.matches||[],I.errors):m.loaderData,H=m.blockers;H.size>0&&(H=new Map(H),H.forEach((ye,ft)=>H.set(ft,No)));let U=R===!0||m.navigation.formMethod!=null&&vn(m.navigation.formMethod)&&((V=T.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),D||E===Ke.Pop||(E===Ke.Push?t.history.push(T,T.state):E===Ke.Replace&&t.history.replace(T,T.state)),ae(Ae({},I,{actionData:G,loaderData:X,historyAction:E,location:T,initialized:!0,navigation:_d,revalidation:"idle",restoreScrollPosition:Oy(T,I.matches||m.matches),preventScrollReset:U,blockers:H})),E=Ke.Pop,R=!1,D=!1,Y=!1,B=[],Ue=[]}async function dt(T,I){if(typeof T=="number"){t.history.go(T);return}let k=qf(m.location,m.matches,l,u.v7_prependBasename,T,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:Z,error:G}=Kv(u.v7_normalizeFormMethod,!1,k,I),X=m.location,H=xa(m.location,V,I&&I.state);H=Ae({},H,t.history.encodeLocation(H));let U=I&&I.replace!=null?I.replace:void 0,ye=Ke.Push;U===!0?ye=Ke.Replace:U===!1||Z!=null&&vn(Z.formMethod)&&Z.formAction===m.location.pathname+m.location.search&&(ye=Ke.Replace);let ft=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,pe=Ny({currentLocation:X,nextLocation:H,historyAction:ye});if(pe){Nl(pe,{state:"blocked",location:H,proceed(){Nl(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),dt(T,I)},reset(){let Ve=new Map(m.blockers);Ve.set(pe,No),ae({blockers:Ve})}});return}return await tn(ye,H,{submission:Z,pendingError:G,preventScrollReset:ft,replace:I&&I.replace})}function bt(){if(Fh(),ae({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){tn(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}tn(E||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function tn(T,I,k){S&&S.abort(),S=null,E=T,D=(k&&k.startUninterruptedRevalidation)===!0,LS(m.location,m.matches),R=(k&&k.preventScrollReset)===!0;let V=a||o,Z=k&&k.overrideNavigation,G=vs(V,I,l);if(!G){let Ve=nn(404,{pathname:I.pathname}),{matches:Je,route:ci}=e_(V);$h(),Lt(I,{matches:Je,loaderData:{},errors:{[ci.id]:Ve}});return}if(m.initialized&&!Y&&GP(m.location,I)&&!(k&&k.submission&&vn(k.submission.formMethod))){Lt(I,{matches:G});return}S=new AbortController;let X=Oo(t.history,I,S.signal,k&&k.submission),H,U;if(k&&k.pendingError)U={[_s(G).route.id]:k.pendingError};else if(k&&k.submission&&vn(k.submission.formMethod)){let Ve=await Zi(X,I,k.submission,G,{replace:k.replace});if(Ve.shortCircuited)return;H=Ve.pendingActionData,U=Ve.pendingActionError,Z=Yl(I,k.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:ye,loaderData:ft,errors:pe}=await Nn(X,I,G,Z,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,H,U);ye||(S=null,Lt(I,Ae({matches:G},H?{actionData:H}:{},{loaderData:ft,errors:pe})))}async function Zi(T,I,k,V,Z){Z===void 0&&(Z={}),Fh();let G=ZP(I,k);ae({navigation:G});let X,H=Kf(V,I);if(!H.route.action&&!H.route.lazy)X={type:Ge.error,error:nn(405,{method:T.method,pathname:I.pathname,routeId:H.route.id})};else if(X=await Do("action",T,H,V,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(Ps(X)){let U;return Z&&Z.replace!=null?U=Z.replace:U=X.location===m.location.pathname+m.location.search,await wo(m,X,{submission:k,replace:U}),{shortCircuited:!0}}if(sa(X)){let U=_s(V,H.route.id);return(Z&&Z.replace)!==!0&&(E=Ke.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:X.error}}}if(vi(X))throw nn(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:X.data}}}async function Nn(T,I,k,V,Z,G,X,H,U){let ye=V||Yl(I,Z),ft=Z||G||r_(ye),pe=a||o,[Ve,Je]=Gv(t.history,m,k,ft,I,Y,B,Ue,qe,st,pe,l,H,U);if($h(me=>!(k&&k.some(pn=>pn.route.id===me))||Ve&&Ve.some(pn=>pn.route.id===me)),kn=++en,Ve.length===0&&Je.length===0){let me=Py();return Lt(I,Ae({matches:k,loaderData:{},errors:U||null},H?{actionData:H}:{},me?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!D){Je.forEach(pn=>{let Er=m.fetchers.get(pn.key),qh=Lo(void 0,Er?Er.data:void 0);m.fetchers.set(pn.key,qh)});let me=H||m.actionData;ae(Ae({navigation:ye},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},Je.length>0?{fetchers:new Map(m.fetchers)}:{}))}Je.forEach(me=>{fe.has(me.key)&&wr(me.key),me.controller&&fe.set(me.key,me.controller)});let ci=()=>Je.forEach(me=>wr(me.key));S&&S.signal.addEventListener("abort",ci);let{results:hi,loaderResults:Eo,fetcherResults:jh}=await Ay(m.matches,k,Ve,Je,T);if(T.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",ci),Je.forEach(me=>fe.delete(me.key));let Gn=t_(hi);if(Gn){if(Gn.idx>=Ve.length){let me=Je[Gn.idx-Ve.length].key;st.add(me)}return await wo(m,Gn.result,{replace:X}),{shortCircuited:!0}}let{loaderData:Qn,errors:Dl}=Jv(m,k,Ve,Eo,U,Je,jh,O);O.forEach((me,pn)=>{me.subscribe(Er=>{(Er||me.done)&&O.delete(pn)})});let Bh=Py(),zh=ky(kn),Hh=Bh||zh||Je.length>0;return Ae({loaderData:Qn,errors:Dl},Hh?{fetchers:new Map(m.fetchers)}:{})}function Sy(T){return m.fetchers.get(T)||jP}function kS(T,I,k,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");fe.has(T)&&wr(T);let Z=a||o,G=qf(m.location,m.matches,l,u.v7_prependBasename,k,I,V==null?void 0:V.relative),X=vs(Z,G,l);if(!X){xl(T,I,nn(404,{pathname:G}));return}let{path:H,submission:U,error:ye}=Kv(u.v7_normalizeFormMethod,!0,G,V);if(ye){xl(T,I,ye);return}let ft=Kf(X,H);if(R=(V&&V.preventScrollReset)===!0,U&&vn(U.formMethod)){xS(T,I,H,ft,X,U);return}qe.set(T,{routeId:I,path:H}),NS(T,I,H,ft,X,U)}async function xS(T,I,k,V,Z,G){if(Fh(),qe.delete(T),!V.route.action&&!V.route.lazy){let We=nn(405,{method:G.formMethod,pathname:k,routeId:I});xl(T,I,We);return}let X=m.fetchers.get(T),H=ek(G,X);m.fetchers.set(T,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Oo(t.history,k,U.signal,G);fe.set(T,U);let ft=en,pe=await Do("action",ye,V,Z,s,i,l);if(ye.signal.aborted){fe.get(T)===U&&fe.delete(T);return}if(Ps(pe))if(fe.delete(T),kn>ft){let We=rs(void 0);m.fetchers.set(T,We),ae({fetchers:new Map(m.fetchers)});return}else{st.add(T);let We=Lo(G);return m.fetchers.set(T,We),ae({fetchers:new Map(m.fetchers)}),wo(m,pe,{submission:G,isFetchActionRedirect:!0})}if(sa(pe)){xl(T,I,pe.error);return}if(vi(pe))throw nn(400,{type:"defer-action"});let Ve=m.navigation.location||m.location,Je=Oo(t.history,Ve,U.signal),ci=a||o,hi=m.navigation.state!=="idle"?vs(ci,m.navigation.location,l):m.matches;ne(hi,"Didn't find any matches after fetcher action");let Eo=++en;xn.set(T,Eo);let jh=Lo(G,pe.data);m.fetchers.set(T,jh);let[Gn,Qn]=Gv(t.history,m,hi,G,Ve,Y,B,Ue,qe,st,ci,l,{[V.route.id]:pe.data},void 0);Qn.filter(We=>We.key!==T).forEach(We=>{let To=We.key,Ly=m.fetchers.get(To),MS=Lo(void 0,Ly?Ly.data:void 0);m.fetchers.set(To,MS),fe.has(To)&&wr(To),We.controller&&fe.set(To,We.controller)}),ae({fetchers:new Map(m.fetchers)});let Dl=()=>Qn.forEach(We=>wr(We.key));U.signal.addEventListener("abort",Dl);let{results:Bh,loaderResults:zh,fetcherResults:Hh}=await Ay(m.matches,hi,Gn,Qn,Je);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Dl),xn.delete(T),fe.delete(T),Qn.forEach(We=>fe.delete(We.key));let me=t_(Bh);if(me){if(me.idx>=Gn.length){let We=Qn[me.idx-Gn.length].key;st.add(We)}return wo(m,me.result)}let{loaderData:pn,errors:Er}=Jv(m,m.matches,Gn,zh,void 0,Qn,Hh,O);if(m.fetchers.has(T)){let We=rs(pe.data);m.fetchers.set(T,We)}let qh=ky(Eo);m.navigation.state==="loading"&&Eo>kn?(ne(E,"Expected pending action"),S&&S.abort(),Lt(m.navigation.location,{matches:hi,loaderData:pn,errors:Er,fetchers:new Map(m.fetchers)})):(ae(Ae({errors:Er,loaderData:Zv(m.loaderData,pn,hi,Er)},qh||Qn.length>0?{fetchers:new Map(m.fetchers)}:{})),Y=!1)}async function NS(T,I,k,V,Z,G){let X=m.fetchers.get(T),H=Lo(G,X?X.data:void 0);m.fetchers.set(T,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Oo(t.history,k,U.signal);fe.set(T,U);let ft=en,pe=await Do("loader",ye,V,Z,s,i,l);if(vi(pe)&&(pe=await _1(pe,ye.signal,!0)||pe),fe.get(T)===U&&fe.delete(T),ye.signal.aborted)return;if(Ps(pe))if(kn>ft){let Je=rs(void 0);m.fetchers.set(T,Je),ae({fetchers:new Map(m.fetchers)});return}else{st.add(T),await wo(m,pe);return}if(sa(pe)){let Je=_s(m.matches,I);m.fetchers.delete(T),ae({fetchers:new Map(m.fetchers),errors:{[Je.route.id]:pe.error}});return}ne(!vi(pe),"Unhandled fetcher deferred data");let Ve=rs(pe.data);m.fetchers.set(T,Ve),ae({fetchers:new Map(m.fetchers)})}async function wo(T,I,k){let{submission:V,replace:Z,isFetchActionRedirect:G}=k===void 0?{}:k;I.revalidate&&(Y=!0);let X=xa(T.location,I.location,Ae({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(ne(X,"Expected a location on the redirect navigation"),g1.test(I.location)&&n){let ye=t.history.createURL(I.location),ft=lo(ye.pathname,l)==null;if(e.location.origin!==ye.origin||ft){Z?e.location.replace(I.location):e.location.assign(I.location);return}}S=null;let H=Z===!0?Ke.Replace:Ke.Push,U=V||r_(T.navigation);if($P.has(I.status)&&U&&vn(U.formMethod))await tn(H,X,{submission:Ae({},U,{formAction:I.location}),preventScrollReset:R});else if(G)await tn(H,X,{overrideNavigation:Yl(X),fetcherSubmission:U,preventScrollReset:R});else{let ye=Yl(X,U);await tn(H,X,{overrideNavigation:ye,preventScrollReset:R})}}async function Ay(T,I,k,V,Z){let G=await Promise.all([...k.map(U=>Do("loader",Z,U,I,s,i,l)),...V.map(U=>U.matches&&U.match&&U.controller?Do("loader",Oo(t.history,U.path,U.controller.signal),U.match,U.matches,s,i,l):{type:Ge.error,error:nn(404,{pathname:U.path})})]),X=G.slice(0,k.length),H=G.slice(k.length);return await Promise.all([n_(T,k,X,X.map(()=>Z.signal),!1,m.loaderData),n_(T,V.map(U=>U.match),H,V.map(U=>U.controller?U.controller.signal:null),!0)]),{results:G,loaderResults:X,fetcherResults:H}}function Fh(){Y=!0,B.push(...$h()),qe.forEach((T,I)=>{fe.has(I)&&(Ue.push(I),wr(I))})}function xl(T,I,k){let V=_s(m.matches,I);Uh(T),ae({errors:{[V.route.id]:k},fetchers:new Map(m.fetchers)})}function Uh(T){let I=m.fetchers.get(T);fe.has(T)&&!(I&&I.state==="loading"&&xn.has(T))&&wr(T),qe.delete(T),xn.delete(T),st.delete(T),m.fetchers.delete(T)}function wr(T){let I=fe.get(T);ne(I,"Expected fetch controller: "+T),I.abort(),fe.delete(T)}function Cy(T){for(let I of T){let k=Sy(I),V=rs(k.data);m.fetchers.set(I,V)}}function Py(){let T=[],I=!1;for(let k of st){let V=m.fetchers.get(k);ne(V,"Expected fetcher: "+k),V.state==="loading"&&(st.delete(k),T.push(k),I=!0)}return Cy(T),I}function ky(T){let I=[];for(let[k,V]of xn)if(V<T){let Z=m.fetchers.get(k);ne(Z,"Expected fetcher: "+k),Z.state==="loading"&&(wr(k),xn.delete(k),I.push(k))}return Cy(I),I.length>0}function DS(T,I){let k=m.blockers.get(T)||No;return $.get(T)!==I&&$.set(T,I),k}function xy(T){m.blockers.delete(T),$.delete(T)}function Nl(T,I){let k=m.blockers.get(T)||No;ne(k.state==="unblocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="proceeding"||k.state==="blocked"&&I.state==="unblocked"||k.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+I.state);let V=new Map(m.blockers);V.set(T,I),ae({blockers:V})}function Ny(T){let{currentLocation:I,nextLocation:k,historyAction:V}=T;if($.size===0)return;$.size>1&&zs(!1,"A router only supports one blocker at a time");let Z=Array.from($.entries()),[G,X]=Z[Z.length-1],H=m.blockers.get(G);if(!(H&&H.state==="proceeding")&&X({currentLocation:I,nextLocation:k,historyAction:V}))return G}function $h(T){let I=[];return O.forEach((k,V)=>{(!T||T(V))&&(k.cancel(),I.push(V),O.delete(V))}),I}function OS(T,I,k){if(d=T,v=I,p=k||null,!_&&m.navigation===_d){_=!0;let V=Oy(m.location,m.matches);V!=null&&ae({restoreScrollPosition:V})}return()=>{d=null,v=null,p=null}}function Dy(T,I){return p&&p(T,I.map(V=>JP(V,m.loaderData)))||T.key}function LS(T,I){if(d&&v){let k=Dy(T,I);d[k]=v()}}function Oy(T,I){if(d){let k=Dy(T,I),V=d[k];if(typeof V=="number")return V}return null}function bS(T){s={},a=Hf(T,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:ge,subscribe:fn,enableScrollRestoration:OS,navigate:dt,fetch:kS,revalidate:bt,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:Sy,deleteFetcher:Uh,dispose:Se,getBlocker:DS,deleteBlocker:xy,_internalFetchControllers:fe,_internalActiveDeferreds:O,_internalSetRoutes:bS},y}function HP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function qf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Wc(i||".",ol(a).map(c=>c.pathnameBase),lo(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Vm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ar([n,u.pathname])),bi(u)}function Kv(t,e,n,r){if(!r||!HP(r))return{path:n};if(r.formMethod&&!XP(r.formMethod))return{path:n,error:nn(405,{method:r.formMethod})};let i=()=>({path:n,error:nn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=v1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[_,w]=v;return""+p+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!vn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Wf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Wf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Xv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Xv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vn(c.formMethod))return{path:n,submission:c};let h=ii(n);return e&&h.search&&Vm(h.search)&&l.append("index",""),h.search="?"+l,{path:bi(h),submission:c}}function qP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Gv(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let v=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),g=p?Object.keys(p)[0]:void 0,y=qP(n,g).filter((E,R)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(WP(e.loaderData,e.matches[R],E)||o.some(Y=>Y===E.route.id))return!0;let S=e.matches[R],D=E;return Qv(E,Ae({currentUrl:_,currentParams:S.params,nextUrl:w,nextParams:D.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||y1(S,D)}))}),m=[];return l.forEach((E,R)=>{if(!n.some(Ue=>Ue.route.id===E.routeId))return;let S=vs(c,E.path,h);if(!S){m.push({key:R,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(R),Y=Kf(S,E.path),B=!1;u.has(R)?B=!1:a.includes(R)?B=!0:D&&D.state!=="idle"&&D.data===void 0?B=s:B=Qv(Y,Ae({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),B&&m.push({key:R,routeId:E.routeId,path:E.path,matches:S,match:Y,controller:new AbortController})}),[y,m]}function WP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function y1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Qv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Yv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";zs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!mP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ae({},e(i),{lazy:void 0}))}async function Do(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,w=new Promise((g,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),w])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),Yv(n.route,s,i)]))[0];else if(await Yv(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw nn(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),w=_.pathname+_.search;throw nn(404,{pathname:w})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ge.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(YP(u)){let v=u.status;if(UP.has(v)){let g=u.headers.get("Location");if(ne(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!g1.test(g))g=qf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let f=new URL(e.url),y=g.startsWith("//")?new URL(f.protocol+g):new URL(g),m=lo(y.pathname,o)!=null;y.origin===f.origin&&m&&(g=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ge.redirect,status:v,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Ge.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Ge.error?{type:l,error:new Mm(v,u.statusText,_),headers:u.headers}:{type:Ge.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ge.error)return{type:l,error:u};if(QP(u)){var d,p;return{type:Ge.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:Ge.data,data:u}}function Oo(t,e,n,r){let i=t.createURL(v1(e)).toString(),s={signal:n};if(r&&vn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Wf(r.formData):s.body=r.formData}return new Request(i,s)}function Wf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Xv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function KP(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ne(!Ps(c),"Cannot handle redirect results in processLoaderData"),sa(c)){let p=_s(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=p1(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else vi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Jv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=KP(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(p&&p.signal.aborted))if(sa(v)){let _=_s(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Ae({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(Ps(v))ne(!1,"Unhandled fetcher revalidation redirect");else if(vi(v))ne(!1,"Unhandled fetcher deferred data");else{let _=rs(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function Zv(t,e,n,r){let i=Ae({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function _s(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function e_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function nn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Mm(t||500,o,new Error(a),!0)}function t_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ps(n))return{result:n,idx:e}}}function v1(t){let e=typeof t=="string"?ii(t):t;return bi(Ae({},e,{hash:""}))}function GP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function vi(t){return t.type===Ge.deferred}function sa(t){return t.type===Ge.error}function Ps(t){return(t&&t.type)===Ge.redirect}function QP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function YP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function XP(t){return FP.has(t.toLowerCase())}function vn(t){return MP.has(t.toLowerCase())}async function n_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!y1(u,l)&&(s&&s[l.route.id])!==void 0;if(vi(a)&&(i||c)){let h=r[o];ne(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await _1(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function _1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ge.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ge.error,error:i}}return{type:Ge.data,data:t.deferredData.data}}}function Vm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function JP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Kf(t,e){let n=typeof e=="string"?ii(e).search:e.search;if(t[t.length-1].route.index&&Vm(n||""))return t[t.length-1];let r=ol(t);return r[r.length-1]}function r_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Yl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ZP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Lo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function ek(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function rs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gf(){return Gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gf.apply(this,arguments)}const Kc=P.createContext(null),w1=P.createContext(null),uo=P.createContext(null),Fm=P.createContext(null),vr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),E1=P.createContext(null);function tk(t,e){let{relative:n}=e===void 0?{}:e;co()||ne(!1);let{basename:r,navigator:i}=P.useContext(uo),{hash:s,pathname:o,search:a}=I1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function co(){return P.useContext(Fm)!=null}function al(){return co()||ne(!1),P.useContext(Fm).location}function T1(t){P.useContext(uo).static||P.useLayoutEffect(t)}function Ki(){let{isDataRoute:t}=P.useContext(vr);return t?mk():nk()}function nk(){co()||ne(!1);let t=P.useContext(Kc),{basename:e,navigator:n}=P.useContext(uo),{matches:r}=P.useContext(vr),{pathname:i}=al(),s=JSON.stringify(ol(r).map(l=>l.pathnameBase)),o=P.useRef(!1);return T1(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Wc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ar([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const rk=P.createContext(null);function ik(t){let e=P.useContext(vr).outlet;return e&&P.createElement(rk.Provider,{value:t},e)}function I1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(vr),{pathname:i}=al(),s=JSON.stringify(ol(r).map(o=>o.pathnameBase));return P.useMemo(()=>Wc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function sk(t,e,n){co()||ne(!1);let{navigator:r}=P.useContext(uo),{matches:i}=P.useContext(vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=al(),u;u=l;let c=u.pathname||"/",h=a==="/"?c:c.slice(a.length)||"/",d=vs(t,{pathname:h});return ck(d&&d.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ar([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ar([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n)}function ok(){let t=pk(),e=p1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const ak=P.createElement(ok,null);class lk extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(vr.Provider,{value:this.props.routeContext},P.createElement(E1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uk(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(vr.Provider,{value:e},r)}function ck(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||ak);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=P.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,P.createElement(uk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(lk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Qf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Qf||(Qf={}));var Na;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Na||(Na={}));function hk(t){let e=P.useContext(Kc);return e||ne(!1),e}function dk(t){let e=P.useContext(w1);return e||ne(!1),e}function fk(t){let e=P.useContext(vr);return e||ne(!1),e}function R1(t){let e=fk(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function pk(){var t;let e=P.useContext(E1),n=dk(Na.UseRouteError),r=R1(Na.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mk(){let{router:t}=hk(Qf.UseNavigateStable),e=R1(Na.UseNavigateStable),n=P.useRef(!1);return T1(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Gf({fromRouteId:e},s)))},[t,e])}const gk="startTransition",i_=eA[gk];function yk(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=P.useState(n.state),{v7_startTransition:o}=r||{},a=P.useCallback(h=>{o&&i_?i_(()=>s(h)):s(h)},[s,o]);P.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=P.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return P.createElement(P.Fragment,null,P.createElement(Kc.Provider,{value:c},P.createElement(w1.Provider,{value:i},P.createElement(Ek,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?P.createElement(vk,{routes:n.routes,state:i}):e))),null)}function vk(t){let{routes:e,state:n}=t;return sk(e,void 0,n)}function _k(t){let{to:e,replace:n,state:r,relative:i}=t;co()||ne(!1);let{matches:s}=P.useContext(vr),{pathname:o}=al(),a=Ki(),l=Wc(e,ol(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function wk(t){return ik(t.context)}function Ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ke.Pop,navigator:s,static:o=!1}=t;co()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ii(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=P.useMemo(()=>{let _=lo(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:P.createElement(uo.Provider,{value:l},P.createElement(Fm.Provider,{children:n,value:v}))}var s_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(s_||(s_={}));new Promise(()=>{});function Tk(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:P.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:P.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(this,arguments)}function Ik(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Rk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sk(t,e){return t.button===0&&(!e||e==="_self")&&!Rk(t)}const Ak=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ck(t,e){return zP({basename:void 0,future:Da({},void 0,{v7_prependBasename:!0}),history:dP({window:void 0}),hydrationData:Pk(),routes:t,mapRouteProperties:Tk}).initialize()}function Pk(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Da({},e,{errors:kk(e.errors)})),e}function kk(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oa=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Ik(e,Ak),{basename:d}=P.useContext(uo),p,v=!1;if(typeof u=="string"&&Nk.test(u)&&(p=u,xk))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),m=lo(y.pathname,d);y.origin===f.origin&&m!=null?u=m+y.search+y.hash:v=!0}catch{}let _=tk(u,{relative:i}),w=Dk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||w(f)}return P.createElement("a",Da({},h,{href:p||_,onClick:v||s?r:g,ref:n,target:l}))});var o_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(o_||(o_={}));var a_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a_||(a_={}));function Dk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ki(),l=al(),u=I1(t,{relative:o});return P.useCallback(c=>{if(Sk(c,n)){c.preventDefault();let h=r!==void 0?r:bi(l)===bi(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Et.apply(this,arguments)};function Um(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function La(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",oa="-moz-",ce="-webkit-",S1="comm",Gc="rule",$m="decl",Ok="@import",A1="@keyframes",Lk="@layer",C1=Math.abs,jm=String.fromCharCode,Yf=Object.assign;function bk(t,e){return tt(t,0)^45?(((e<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function P1(t){return t.trim()}function Xn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function Tu(t,e,n){return t.indexOf(e,n)}function tt(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function Ln(t){return t.length}function k1(t){return t.length}function Bo(t,e){return e.push(t),t}function Mk(t,e){return t.map(e).join("")}function l_(t,e){return t.filter(function(n){return!Xn(n,e)})}var Qc=1,qs=1,x1=0,hn=0,Be=0,ho="";function Yc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Qc,column:qs,length:o,return:"",siblings:a}}function Rr(t,e){return Yf(Yc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ts(t){for(;t.root;)t=Rr(t.root,{children:[t]});Bo(t,t.siblings)}function Vk(){return Be}function Fk(){return Be=hn>0?tt(ho,--hn):0,qs--,Be===10&&(qs=1,Qc--),Be}function In(){return Be=hn<x1?tt(ho,hn++):0,qs++,Be===10&&(qs=1,Qc++),Be}function Ai(){return tt(ho,hn)}function Iu(){return hn}function Xc(t,e){return Hs(ho,t,e)}function Xf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(t){return Qc=qs=1,x1=Ln(ho=t),hn=0,[]}function $k(t){return ho="",t}function wd(t){return P1(Xc(hn-1,Jf(t===91?t+2:t===40?t+1:t)))}function jk(t){for(;(Be=Ai())&&Be<33;)In();return Xf(t)>2||Xf(Be)>3?"":" "}function Bk(t,e){for(;--e&&In()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Xc(t,Iu()+(e<6&&Ai()==32&&In()==32))}function Jf(t){for(;In();)switch(Be){case t:return hn;case 34:case 39:t!==34&&t!==39&&Jf(Be);break;case 40:t===41&&Jf(t);break;case 92:In();break}return hn}function zk(t,e){for(;In()&&t+Be!==57;)if(t+Be===84&&Ai()===47)break;return"/*"+Xc(e,hn-1)+"*"+jm(t===47?t:In())}function Hk(t){for(;!Xf(Ai());)In();return Xc(t,hn)}function qk(t){return $k(Ru("",null,null,null,[""],t=Uk(t),0,[0],t))}function Ru(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,w=1,g=1,f=0,y="",m=i,E=s,R=r,S=y;w;)switch(v=f,f=In()){case 40:if(v!=108&&tt(S,h-1)==58){Tu(S+=te(wd(f),"&","&\f"),"&\f",C1(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:S+=wd(f);break;case 9:case 10:case 13:case 32:S+=jk(v);break;case 92:S+=Bk(Iu()-1,7);continue;case 47:switch(Ai()){case 42:case 47:Bo(Wk(zk(In(),Iu()),e,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=Ln(S)*g;case 125*_:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:g==-1&&(S=te(S,/\f/g,"")),p>0&&Ln(S)-h&&Bo(p>32?c_(S+";",r,n,h-1,l):c_(te(S," ","")+";",r,n,h-2,l),l);break;case 59:S+=";";default:if(Bo(R=u_(S,e,n,u,c,i,a,y,m=[],E=[],h,s),s),f===123)if(c===0)Ru(S,e,R,R,m,s,h,a,E);else switch(d===99&&tt(S,3)===110?100:d){case 100:case 108:case 109:case 115:Ru(t,R,R,r&&Bo(u_(t,R,R,0,0,i,a,y,i,m=[],h,E),E),i,E,h,a,r?m:E);break;default:Ru(S,R,R,R,[""],E,0,a,E)}}u=c=p=0,_=g=1,y=S="",h=o;break;case 58:h=1+Ln(S),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&Fk()==125)continue}switch(S+=jm(f),f*_){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Ln(S)-1)*g,g=1;break;case 64:Ai()===45&&(S+=wd(In())),d=Ai(),c=h=Ln(y=S+=Hk(Iu())),f++;break;case 45:v===45&&Ln(S)==2&&(_=0)}}return s}function u_(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,p=i===0?s:[""],v=k1(p),_=0,w=0,g=0;_<r;++_)for(var f=0,y=Hs(t,d+1,d=C1(w=o[_])),m=t;f<v;++f)(m=P1(w>0?p[f]+" "+y:te(y,/&\f/g,p[f])))&&(l[g++]=m);return Yc(t,e,n,i===0?Gc:a,l,u,c,h)}function Wk(t,e,n,r){return Yc(t,e,n,S1,jm(Vk()),Hs(t,2,-2),0,r)}function c_(t,e,n,r,i){return Yc(t,e,n,$m,Hs(t,0,r),Hs(t,r+1,-1),r,i)}function N1(t,e,n){switch(bk(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return oa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+oa+t+we+t+t;case 5936:switch(tt(t,e+11)){case 114:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+te(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+te(t,/flex-|-self/g,"")+(Xn(t,/flex-|baseline/)?"":we+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+te(t,"shrink","negative")+t;case 5292:return ce+t+we+te(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+te(t,"-grow","")+ce+t+we+te(t,"grow","positive")+t;case 4554:return ce+te(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Xn(t,/flex-|baseline/))return we+"grid-column-align"+Hs(t,e)+t;break;case 2592:case 3360:return we+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Xn(r.props,/grid-\w+-end/)})?~Tu(t+(n=n[e].value),"span",0)?t:we+te(t,"-start","")+t+we+"grid-row-span:"+(~Tu(n,"span",0)?Xn(n,/\d+/):+Xn(n,/\d+/)-+Xn(t,/\d+/))+";":we+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Xn(r.props,/grid-\w+-start/)})?t:we+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(tt(t,e+1)){case 109:if(tt(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+oa+(tt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Tu(t,"stretch",0)?N1(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(tt(t,e+6)===121)return te(t,":",":"+ce)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(tt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return te(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function ic(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Kk(t,e,n,r){switch(t.type){case Lk:if(t.children.length)break;case Ok:case $m:return t.return=t.return||t.value;case S1:return"";case A1:return t.return=t.value+"{"+ic(t.children,r)+"}";case Gc:if(!Ln(t.value=t.props.join(",")))return""}return Ln(n=ic(t.children,r))?t.return=t.value+"{"+n+"}":""}function Gk(t){var e=k1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Qk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Yk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case $m:t.return=N1(t.value,t.length,n);return;case A1:return ic([Rr(t,{value:te(t.value,"@","@"+ce)})],r);case Gc:if(t.length)return Mk(n=t.props,function(i){switch(Xn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ts(Rr(t,{props:[te(i,/:(read-\w+)/,":"+oa+"$1")]})),ts(Rr(t,{props:[i]})),Yf(t,{props:l_(n,r)});break;case"::placeholder":ts(Rr(t,{props:[te(i,/:(plac\w+)/,":"+ce+"input-$1")]})),ts(Rr(t,{props:[te(i,/:(plac\w+)/,":"+oa+"$1")]})),ts(Rr(t,{props:[te(i,/:(plac\w+)/,we+"input-$1")]})),ts(Rr(t,{props:[i]})),Yf(t,{props:l_(n,r)});break}return""})}}var Xk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zt={},Ws=typeof process<"u"&&zt!==void 0&&(zt.REACT_APP_SC_ATTR||zt.SC_ATTR)||"data-styled",Bm=typeof window<"u"&&"HTMLElement"in window,Jk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==""?zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.SC_DISABLE_SPEEDY!==void 0&&zt.SC_DISABLE_SPEEDY!==""&&zt.SC_DISABLE_SPEEDY!=="false"&&zt.SC_DISABLE_SPEEDY),Zk={},Jc=Object.freeze([]),Ks=Object.freeze({});function D1(t,e,n){return n===void 0&&(n=Ks),t.theme!==n.theme&&t.theme||e||n.theme}var O1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tx=/(^-|-$)/g;function h_(t){return t.replace(ex,"-").replace(tx,"")}var nx=/(a)(d)/gi,d_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Zf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=d_(e%52)+n;return(d_(e%52)+n).replace(nx,"$1-$2")}var Ed,ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},L1=function(t){return ws(5381,t)};function b1(t){return Zf(L1(t)>>>0)}function rx(t){return t.displayName||t.name||"Component"}function Td(t){return typeof t=="string"&&!0}var M1=typeof Symbol=="function"&&Symbol.for,V1=M1?Symbol.for("react.memo"):60115,ix=M1?Symbol.for("react.forward_ref"):60112,sx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ax=((Ed={})[ix]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ed[V1]=F1,Ed);function f_(t){return("type"in(e=t)&&e.type.$$typeof)===V1?F1:"$$typeof"in t?ax[t.$$typeof]:sx;var e}var lx=Object.defineProperty,ux=Object.getOwnPropertyNames,p_=Object.getOwnPropertySymbols,cx=Object.getOwnPropertyDescriptor,hx=Object.getPrototypeOf,m_=Object.prototype;function U1(t,e,n){if(typeof e!="string"){if(m_){var r=hx(e);r&&r!==m_&&U1(t,r,n)}var i=ux(e);p_&&(i=i.concat(p_(e)));for(var s=f_(t),o=f_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in ox||n&&n[l]||o&&l in o||s&&l in s)){var u=cx(e,l);try{lx(t,l,u)}catch{}}}}return t}function Gs(t){return typeof t=="function"}function zm(t){return typeof t=="object"&&"styledComponentId"in t}function _i(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ep(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ba(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function tp(t,e,n){if(n===void 0&&(n=!1),!n&&!ba(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=tp(t[r],e[r]);else if(ba(e))for(var r in e)t[r]=tp(t[r],e[r]);return t}function Hm(t,e){Object.defineProperty(t,"toString",{value:e})}function ll(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ll(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Su=new Map,sc=new Map,Id=1,Xl=function(t){if(Su.has(t))return Su.get(t);for(;sc.has(Id);)Id++;var e=Id++;return Su.set(t,e),sc.set(e,t),e},fx=function(t,e){Su.set(t,e),sc.set(e,t)},px="style[".concat(Ws,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),mx=new RegExp("^".concat(Ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},yx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(mx);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(fx(c,u),gx(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function vx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ws,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ws,"active"),r.setAttribute("data-styled-version","6.0.7");var o=vx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},_x=function(){function t(e){this.element=$1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ll(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),wx=function(){function t(e){this.element=$1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Ex=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),g_=Bm,Tx={isServer:!Bm,useCSSOMInjection:!Jk},oc=function(){function t(e,n,r){e===void 0&&(e=Ks),n===void 0&&(n={});var i=this;this.options=Et(Et({},Tx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Bm&&g_&&(g_=!1,function(s){for(var o=document.querySelectorAll(px),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ws)!=="active"&&(yx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Hm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return sc.get(g)}(h);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(h);if(p===void 0||v.length===0)return"continue";var _="".concat(Ws,".g").concat(h,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Xl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ex(i):r?new _x(i):new wx(i)}(this.options),new dx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Xl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Xl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Ix=/&/g,Rx=/^\s*\/\/.*$/gm;function j1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=j1(n.children,e)),n})}function Sx(t){var e,n,r,i=Ks,s=i.options,o=s===void 0?Ks:s,a=i.plugins,l=a===void 0?Jc:a,u=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Gc&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Ix,n).replace(r,u))}),o.prefix&&c.push(Yk),c.push(Kk);var h=function(d,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(Rx,""),g=qk(v||p?"".concat(v," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=j1(g,o.namespace));var f=[];return ic(g,Gk(c.concat(Qk(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,p){return p.name||ll(15),ws(d,p.name)},5381).toString():"",h}var Ax=new oc,np=Sx(),B1=wn.createContext({shouldForwardProp:void 0,styleSheet:Ax,stylis:np});B1.Consumer;wn.createContext(void 0);function rp(){return P.useContext(B1)}var Cx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=np);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hm(this,function(){throw ll(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=np),this.name+e.hash},t}(),Px=function(t){return t>="A"&&t<="Z"};function y_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Px(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var z1=function(t){return t==null||t===!1||t===""},H1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!z1(s)&&(Array.isArray(s)&&s.isCss||Gs(s)?r.push("".concat(y_(i),":"),s,";"):ba(s)?r.push.apply(r,La(La(["".concat(i," {")],H1(s),!1),["}"],!1)):r.push("".concat(y_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Xk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hr(t,e,n,r){if(z1(t))return[];if(zm(t))return[".".concat(t.styledComponentId)];if(Gs(t)){if(!Gs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Hr(i,e,n,r)}var s;return t instanceof Cx?n?(t.inject(n,r),[t.getName(r)]):[t]:ba(t)?H1(t):Array.isArray(t)?Array.prototype.concat.apply(Jc,t.map(function(o){return Hr(o,e,n,r)})):[t.toString()]}function q1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Gs(n)&&!zm(n))return!1}return!0}var kx=L1("6.0.7"),xx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&q1(e),this.componentId=n,this.baseHash=ws(kx,n),this.baseStyle=r,oc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_i(i,this.staticRulesId);else{var s=ep(Hr(this.rules,e,n,r)),o=Zf(ws(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=_i(i,o),this.staticRulesId=o}else{for(var l=ws(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=ep(Hr(h,e,n,r));l=ws(l,d),u+=d}}if(u){var p=Zf(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=_i(i,p)}}return i},t}(),qm=wn.createContext(void 0);qm.Consumer;var Rd={};function Nx(t,e,n){var r=zm(t),i=t,s=!Td(t),o=e.attrs,a=o===void 0?Jc:o,l=e.componentId,u=l===void 0?function(y,m){var E=typeof y!="string"?"sc":h_(y);Rd[E]=(Rd[E]||0)+1;var R="".concat(E,"-").concat(b1("6.0.7"+E+Rd[E]));return m?"".concat(m,"-").concat(R):R}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return Td(y)?"styled.".concat(y):"Styled(".concat(rx(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(h_(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;p=function(y,m){return v(y,m)&&_(y,m)}}else p=v}var w=new xx(n,h,r?i.componentStyle:void 0);function g(y,m){return function(E,R,S){var D=E.attrs,Y=E.componentStyle,B=E.defaultProps,Ue=E.foldedComponentIds,fe=E.styledComponentId,en=E.target,kn=wn.useContext(qm),xn=rp(),st=E.shouldForwardProp||xn.shouldForwardProp,qe=function(fn,ae,Lt){for(var dt,bt=Et(Et({},ae),{className:void 0,theme:Lt}),tn=0;tn<fn.length;tn+=1){var Zi=Gs(dt=fn[tn])?dt(bt):dt;for(var Nn in Zi)bt[Nn]=Nn==="className"?_i(bt[Nn],Zi[Nn]):Nn==="style"?Et(Et({},bt[Nn]),Zi[Nn]):Zi[Nn]}return ae.className&&(bt.className=_i(bt.className,ae.className)),bt}(D,R,D1(R,kn,B)||Ks),O=qe.as||en,$={};for(var z in qe)qe[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?$.as=qe.forwardedAs:st&&!st(z,O)||($[z]=qe[z]));var ge=function(fn,ae){var Lt=rp(),dt=fn.generateAndInjectStyles(ae,Lt.styleSheet,Lt.stylis);return dt}(Y,qe),Se=_i(Ue,fe);return ge&&(Se+=" "+ge),qe.className&&(Se+=" "+qe.className),$[Td(O)&&!O1.has(O)?"class":"className"]=Se,$.ref=S,P.createElement(O,$)}(f,y,m)}var f=wn.forwardRef(g);return f.attrs=d,f.componentStyle=w,f.shouldForwardProp=p,f.foldedComponentIds=r?_i(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(m){for(var E=[],R=1;R<arguments.length;R++)E[R-1]=arguments[R];for(var S=0,D=E;S<D.length;S++)tp(m,D[S],!0);return m}({},i.defaultProps,y):y}}),Hm(f,function(){return".".concat(f.styledComponentId)}),s&&U1(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function v_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var __=function(t){return Object.assign(t,{isCss:!0})};function Wm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Gs(t)||ba(t)){var r=t;return __(Hr(v_(Jc,La([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Hr(i):__(Hr(v_(i,e)))}function ip(t,e,n){if(n===void 0&&(n=Ks),!e)throw ll(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Wm.apply(void 0,La([i],s,!1)))};return r.attrs=function(i){return ip(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ip(t,e,Et(Et({},n),i))},r}var W1=function(t){return ip(Nx,t)},K=W1;O1.forEach(function(t){K[t]=W1(t)});var Dx=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=q1(e),oc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(ep(Hr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&oc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function K1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Wm.apply(void 0,La([t],e,!1)),i="sc-global-".concat(b1(JSON.stringify(r))),s=new Dx(r,i),o=function(l){var u=rp(),c=wn.useContext(qm),h=wn.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),wn.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,Zk,c,d);else{var p=Et(Et({},u),{theme:D1(u,h,o.defaultProps)});s.renderStyles(l,p,c,d)}}return wn.memo(o)}var w_={};/**
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
 */const G1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ox=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ox(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Lx;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bx=function(t){const e=G1(t);return Q1.encodeByteArray(e,!0)},ac=function(t){return bx(t).replace(/\./g,"")},Y1=function(t){try{return Q1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vx=()=>Mx().__FIREBASE_DEFAULTS__,Fx=()=>{if(typeof process>"u"||typeof w_>"u")return;const t=w_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ux=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y1(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return Vx()||Fx()||Ux()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X1=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},J1=t=>{const e=X1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Z1=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},eT=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function tT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ac(JSON.stringify(n)),ac(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Bx(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qx(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wx(){try{return typeof indexedDB=="object"}catch{return!1}}function Kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Gx="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gx,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,r)}}function Qx(t,e){return t.replace(Yx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yx=/\{\$([^}]+)}/g;function Xx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(E_(s)&&E_(o)){if(!lc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function E_(t){return t!==null&&typeof t=="object"}/**
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
 */function cl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jx(t,e){const n=new Zx(t,e);return n.subscribe.bind(n)}class Zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class tN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $x;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rN(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nN(t){return t===pi?void 0:t}function rN(t){return t.instantiationMode==="EAGER"}/**
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
 */class iN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const sN={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},oN=le.INFO,aN={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},lN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Km{constructor(e){this.name=e,this._logLevel=oN,this._logHandler=lN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const uN=(t,e)=>e.some(n=>t instanceof n);let T_,I_;function cN(){return T_||(T_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hN(){return I_||(I_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nT=new WeakMap,sp=new WeakMap,rT=new WeakMap,Ad=new WeakMap,Gm=new WeakMap;function dN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nT.set(n,t)}).catch(()=>{}),Gm.set(e,t),e}function fN(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pN(t){op=t(op)}function mN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cd(this),e,...n);return rT.set(r,e.sort?e.sort():[e]),qr(r)}:hN().includes(t)?function(...e){return t.apply(Cd(this),e),qr(nT.get(this))}:function(...e){return qr(t.apply(Cd(this),e))}}function gN(t){return typeof t=="function"?mN(t):(t instanceof IDBTransaction&&fN(t),uN(t,cN())?new Proxy(t,op):t)}function qr(t){if(t instanceof IDBRequest)return dN(t);if(Ad.has(t))return Ad.get(t);const e=gN(t);return e!==t&&(Ad.set(t,e),Gm.set(e,t)),e}const Cd=t=>Gm.get(t);function yN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qr(o.result),l.oldVersion,l.newVersion,qr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vN=["get","getKey","getAll","getAllKeys","count"],_N=["put","add","delete","clear"],Pd=new Map;function R_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_N.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pd.set(e,s),s}pN(t=>({...t,get:(e,n,r)=>R_(e,n)||t.get(e,n,r),has:(e,n)=>!!R_(e,n)||t.has(e,n)}));/**
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
 */class wN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",S_="0.9.15";/**
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
 */const Mi=new Km("@firebase/app"),TN="@firebase/app-compat",IN="@firebase/analytics-compat",RN="@firebase/analytics",SN="@firebase/app-check-compat",AN="@firebase/app-check",CN="@firebase/auth",PN="@firebase/auth-compat",kN="@firebase/database",xN="@firebase/database-compat",NN="@firebase/functions",DN="@firebase/functions-compat",ON="@firebase/installations",LN="@firebase/installations-compat",bN="@firebase/messaging",MN="@firebase/messaging-compat",VN="@firebase/performance",FN="@firebase/performance-compat",UN="@firebase/remote-config",$N="@firebase/remote-config-compat",jN="@firebase/storage",BN="@firebase/storage-compat",zN="@firebase/firestore",HN="@firebase/firestore-compat",qN="firebase",WN="10.1.0";/**
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
 */const lp="[DEFAULT]",KN={[ap]:"fire-core",[TN]:"fire-core-compat",[RN]:"fire-analytics",[IN]:"fire-analytics-compat",[AN]:"fire-app-check",[SN]:"fire-app-check-compat",[CN]:"fire-auth",[PN]:"fire-auth-compat",[kN]:"fire-rtdb",[xN]:"fire-rtdb-compat",[NN]:"fire-fn",[DN]:"fire-fn-compat",[ON]:"fire-iid",[LN]:"fire-iid-compat",[bN]:"fire-fcm",[MN]:"fire-fcm-compat",[VN]:"fire-perf",[FN]:"fire-perf-compat",[UN]:"fire-rc",[$N]:"fire-rc-compat",[jN]:"fire-gcs",[BN]:"fire-gcs-compat",[zN]:"fire-fst",[HN]:"fire-fst-compat","fire-js":"fire-js",[qN]:"fire-js-all"};/**
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
 */const uc=new Map,up=new Map;function GN(t,e){try{t.container.addComponent(e)}catch(n){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vi(t){const e=t.name;if(up.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;up.set(e,t);for(const n of uc.values())GN(n,t);return!0}function eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new ul("app","Firebase",QN);/**
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
 */class YN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=WN;function iT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=Z1()),!n)throw Wr.create("no-options");const s=uc.get(i);if(s){if(lc(n,s.options)&&lc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new iN(i);for(const l of up.values())o.addComponent(l);const a=new YN(n,r,o);return uc.set(i,a),a}function Qm(t=lp){const e=uc.get(t);if(!e&&t===lp&&Z1())return iT();if(!e)throw Wr.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let i=(r=KN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(a.join(" "));return}Vi(new Xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XN="firebase-heartbeat-database",JN=1,Ma="firebase-heartbeat-store";let kd=null;function sT(){return kd||(kd=yN(XN,JN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ma)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function ZN(t){try{return await(await sT()).transaction(Ma).objectStore(Ma).get(oT(t))}catch(e){if(e instanceof Zt)Mi.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mi.warn(n.message)}}}async function A_(t,e){try{const r=(await sT()).transaction(Ma,"readwrite");await r.objectStore(Ma).put(e,oT(t)),await r.done}catch(n){if(n instanceof Zt)Mi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mi.warn(r.message)}}}function oT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eD=1024,tD=30*24*60*60*1e3;class nD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=C_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=C_(),{heartbeatsToSend:n,unsentEntries:r}=rD(this._heartbeatsCache.heartbeats),i=ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function C_(){return new Date().toISOString().substring(0,10)}function rD(t,e=eD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),P_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wx()?Kx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function P_(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sD(t){Vi(new Xr("platform-logger",e=>new wN(e),"PRIVATE")),Vi(new Xr("heartbeat",e=>new nD(e),"PRIVATE")),Bn(ap,S_,t),Bn(ap,S_,"esm2017"),Bn("fire-js","")}sD("");var oD="firebase",aD="10.1.0";/**
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
 */Bn(oD,aD,"app");function aT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lD=aT,lT=new ul("auth","Firebase",aT());/**
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
 */const cc=new Km("@firebase/auth");function uD(t,...e){cc.logLevel<=le.WARN&&cc.warn(`Auth (${Gi}): ${t}`,...e)}function Au(t,...e){cc.logLevel<=le.ERROR&&cc.error(`Auth (${Gi}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw Ym(t,...e)}function zn(t,...e){return Ym(t,...e)}function uT(t,e,n){const r=Object.assign(Object.assign({},lD()),{[e]:n});return new ul("auth","Firebase",r).create(e,{appName:t.name})}function cD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dn(t,"argument-error"),uT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lT.create(t,...e)}function q(t,e,...n){if(!t)throw Ym(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Au(e),new Error(e)}function dr(t,e){t||nr(e)}/**
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
 */function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hD(){return k_()==="http:"||k_()==="https:"}function k_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hD()||zx()||"connection"in navigator)?navigator.onLine:!0}function fD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=jx()||Hx()}get(){return dD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xm(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mD=new hl(3e4,6e4);function Qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,i={}){return hT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cT.fetch()(dT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function hT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pD),e);try{const i=new gD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uT(t,c,u);dn(t,c)}}catch(i){if(i instanceof Zt)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function dl(t,e,n,r,i={}){const s=await si(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xm(t.config,i):`${t.config.apiScheme}://${i}`}class gD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zn(this.auth,"network-request-failed")),mD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function yD(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function vD(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _D(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Jm(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:aa(xd(i.auth_time)),issuedAtTime:aa(xd(i.iat)),expirationTime:aa(xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xd(t){return Number(t)*1e3}function Jm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y1(n);return i?JSON.parse(i):(Au("Failed to decode base64 JWT payload"),null)}catch(i){return Au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wD(t){const e=Jm(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&ED(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ED({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qs(t,vD(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SD(s.providerUserInfo):[],a=RD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ID(t){const e=Pe(t);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SD(t){return t.map(e=>{var{providerId:n}=e,r=Um(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AD(t,e){const n=await hT(t,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Va;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Ir(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _D(this,e)}reload(){return ID(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qs(this,yD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:E,providerData:R,stsTokenManager:S}=n;q(y&&S,e,"internal-error");const D=Va.fromJSON(this.name,S);q(typeof y=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),q(typeof m=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),Ir(p,e.name),Ir(v,e.name),Ir(_,e.name),Ir(w,e.name),Ir(g,e.name),Ir(f,e.name);const Y=new Ci({uid:y,auth:e,email:d,emailVerified:m,displayName:h,isAnonymous:E,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:D,createdAt:g,lastLoginAt:f});return R&&Array.isArray(R)&&(Y.providerData=R.map(B=>Object.assign({},B))),w&&(Y._redirectEventId=w),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Va;i.updateFromServerResponse(n);const s=new Ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hc(s),s}}/**
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
 */const x_=new Map;function rr(t){dr(t instanceof Function,"Expected a class definition");let e=x_.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x_.set(t,e),e)}/**
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
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pT.type="NONE";const N_=pT;/**
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
 */function Cu(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(rr(N_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(N_);const o=Cu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ci._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ks(s,e,r))}}/**
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
 */function D_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_T(e))return"Blackberry";if(wT(e))return"Webos";if(Zm(e))return"Safari";if((e.includes("chrome/")||gT(e))&&!e.includes("edge/"))return"Chrome";if(vT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mT(t=At()){return/firefox\//i.test(t)}function Zm(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gT(t=At()){return/crios\//i.test(t)}function yT(t=At()){return/iemobile/i.test(t)}function vT(t=At()){return/android/i.test(t)}function _T(t=At()){return/blackberry/i.test(t)}function wT(t=At()){return/webos/i.test(t)}function th(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CD(t=At()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PD(){return qx()&&document.documentMode===10}function ET(t=At()){return th(t)||vT(t)||wT(t)||_T(t)||/windows phone/i.test(t)||yT(t)}function kD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function TT(t,e=[]){let n;switch(t){case"Browser":n=D_(At());break;case"Worker":n=`${D_(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}async function IT(t,e){return si(t,"GET","/v2/recaptchaConfig",Qi(t,e))}function O_(t){return t!==void 0&&t.enterprise!==void 0}class RT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function xD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ST(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xD().appendChild(r)})}function ND(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DD="https://www.google.com/recaptcha/enterprise.js?render=",OD="recaptcha-enterprise",LD="NO_RECAPTCHA";class AT{constructor(e){this.type=OD,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;O_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(LD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&O_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ST(DD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ys(t,e,n,r=!1){const i=new AT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class bD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class MD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new L_(this),this.idTokenSubscription=new L_(this),this.beforeStateQueue=new bD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}async initializeRecaptchaConfig(){const e=await IT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new AT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ul("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oi(t){return Pe(t)}class L_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jx(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function VD(t,e){const n=eh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lc(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function FD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UD(t,e,n){const r=oi(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=CT(e),{host:o,port:a}=$D(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),jD()}function CT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $D(t){const e=CT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:b_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:b_(o)}}}function b_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function BD(t,e){return si(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Nd(t,e){return dl(t,"POST","/v1/accounts:signInWithPassword",Qi(t,e))}async function PT(t,e){return si(t,"POST","/v1/accounts:sendOobCode",Qi(t,e))}async function zD(t,e){return PT(t,e)}async function Dd(t,e){return PT(t,e)}/**
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
 */async function HD(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}async function qD(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}/**
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
 */class Fa extends eg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ys(e,r,"signInWithPassword");return Nd(e,i)}else return Nd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ys(e,r,"signInWithPassword");return Nd(e,s)}else return Promise.reject(i)});case"emailLink":return HD(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qD(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return dl(t,"POST","/v1/accounts:signInWithIdp",Qi(t,e))}/**
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
 */const WD="http://localhost";class Fi extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Um(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cl(n)}return e}}/**
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
 */function KD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=zo(Ho(t)).link,n=e?zo(Ho(e)).deep_link_id:null,r=zo(Ho(t)).deep_link_id;return(r?zo(Ho(r)).link:null)||r||n||e||t}class tg{constructor(e){var n,r,i,s,o,a;const l=zo(Ho(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=KD((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GD(e);try{return new tg(n)}catch{return null}}}/**
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
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Fa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tg.parseLink(n);return q(r,"argument-error"),Fa._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fl extends ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kr extends fl{constructor(){super("facebook.com")}static credential(e){return Fi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
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
 */class xr extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
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
 */class Zn extends fl{constructor(){super("github.com")}static credential(e){return Fi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class Nr extends fl{constructor(){super("twitter.com")}static credential(e,n){return Fi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function Od(t,e){return dl(t,"POST","/v1/accounts:signUp",Qi(t,e))}/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ci._fromIdTokenResponse(e,r,i),o=M_(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=M_(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function M_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dc extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dc(e,n,r,i)}}function kT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,s,e,r):s})}async function QD(t,e,n=!1){const r=await Qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function YD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Qs(t,kT(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Jm(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function xT(t,e,n=!1){const r="signIn",i=await kT(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XD(t,e){return xT(oi(t),e)}/**
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
 */async function JD(t,e,n){var r;const i=oi(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Ys(i,s,"getOobCode",!0);await Dd(i,o)}else await Dd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Ys(i,s,"getOobCode",!0);await Dd(i,a)}else return Promise.reject(o)})}async function ZD(t,e,n){var r;const i=oi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ys(i,s,"signUpPassword");o=Od(i,u)}else o=Od(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ys(i,s,"signUpPassword");return Od(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ui._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function eO(t,e,n){return XD(Pe(t),fo.credential(e,n))}async function tO(t,e){const n=Pe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await zD(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function nO(t,e){return si(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Qs(r,nO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rO(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function iO(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}const fc="__sak";/**
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
 */class NT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sO(){const t=At();return Zm(t)||th(t)}const oO=1e3,aO=10;class DT extends NT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sO()&&kD(),this.fallbackToPolling=ET(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const lO=DT;/**
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
 */class OT extends NT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const LT=OT;/**
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
 */function uO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await uO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
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
 */function rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function hO(t){Hn().location.href=t}/**
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
 */function bT(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return bT()?self:null}/**
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
 */const MT="firebaseLocalStorageDb",mO=1,pc="firebaseLocalStorage",VT="fbase_key";class pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function gO(){const t=indexedDB.deleteDatabase(MT);return new pl(t).toPromise()}function dp(){const t=indexedDB.open(MT,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pc,{keyPath:VT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),await gO(),e(await dp()))})})}async function V_(t,e,n){const r=rh(t,!0).put({[VT]:e,value:n});return new pl(r).toPromise()}async function yO(t,e){const n=rh(t,!1).get(e),r=await new pl(n).toPromise();return r===void 0?null:r.value}function F_(t,e){const n=rh(t,!0).delete(e);return new pl(n).toPromise()}const vO=800,_O=3;class FT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_O)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new cO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await V_(e,fc,"1"),await F_(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>F_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rh(i,!1).getAll();return new pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FT.type="LOCAL";const wO=FT;new hl(3e4,6e4);/**
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
 */function UT(t,e){return e?rr(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ig extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EO(t){return xT(t.auth,new ig(t),t.bypassAuthState)}function TO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),YD(n,new ig(t),t.bypassAuthState)}async function IO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),QD(n,new ig(t),t.bypassAuthState)}/**
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
 */class $T{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EO;case"linkViaPopup":case"linkViaRedirect":return IO;case"reauthViaPopup":case"reauthViaRedirect":return TO;default:dn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RO=new hl(2e3,1e4);async function SO(t,e,n){const r=oi(t);cD(t,e,ng);const i=UT(r,n);return new wi(r,"signInViaPopup",e,i).executeNotNull()}class wi extends $T{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RO.get())};e()}}wi.currentPopupAction=null;/**
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
 */const AO="pendingRedirect",Pu=new Map;class CO extends $T{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await PO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PO(t,e){const n=NO(e),r=xO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kO(t,e){Pu.set(t._key(),e)}function xO(t){return rr(t._redirectPersistence)}function NO(t){return Cu(AO,t.config.apiKey,t.name)}async function DO(t,e,n=!1){const r=oi(t),i=UT(r,e),o=await new CO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OO=10*60*1e3;class LO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OO&&this.cachedEventUids.clear(),this.cachedEventUids.has(U_(e))}saveEventToCache(e){this.cachedEventUids.add(U_(e)),this.lastProcessedEventTime=Date.now()}}function U_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(t);default:return!1}}/**
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
 */async function MO(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FO=/^https?/;async function UO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MO(t);for(const n of e)try{if($O(n))return}catch{}dn(t,"unauthorized-domain")}function $O(t){const e=cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FO.test(n))return!1;if(VO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jO=new hl(3e4,6e4);function $_(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BO(t){return new Promise((e,n)=>{var r,i,s;function o(){$_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$_(),n(zn(t,"network-request-failed"))},timeout:jO.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Hn().gapi)===null||s===void 0)&&s.load)o();else{const a=ND("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(zn(t,"network-request-failed"))},ST(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ku=null,e})}let ku=null;function zO(t){return ku=ku||BO(t),ku}/**
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
 */const HO=new hl(5e3,15e3),qO="__/auth/iframe",WO="emulator/auth/iframe",KO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QO(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xm(e,WO):`https://${t.config.authDomain}/${qO}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=GO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${cl(r).slice(1)}`}async function YO(t){const e=await zO(t),n=Hn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:QO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},HO.get());function l(){Hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const XO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JO=500,ZO=600,eL="_blank",tL="http://localhost";class j_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nL(t,e,n,r=JO,i=ZO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=gT(u)?eL:n),mT(u)&&(e=e||tL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(CD(u)&&a!=="_self")return rL(e||"",a),new j_(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new j_(h)}function rL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iL="__/auth/handler",sL="emulator/auth/handler",oL=encodeURIComponent("fac");async function B_(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof ng){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof fl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${oL}=${encodeURIComponent(l)}`:"";return`${aL(t)}?${cl(a).slice(1)}${u}`}function aL({config:t}){return t.emulator?Xm(t,sL):`https://${t.authDomain}/${iL}`}/**
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
 */const Ld="webStorageSupport";class lL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=DO,this._overrideRedirectResult=kO}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await B_(e,n,r,cp(),i);return nL(e,o,rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await B_(e,n,r,cp(),i);return hO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YO(e),r=new LO(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ld,{type:Ld},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ld];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ET()||Zm()||th()}}const uL=lL;var z_="@firebase/auth",H_="1.1.0";/**
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
 */class cL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dL(t){Vi(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TT(t)},u=new MD(r,i,s,l);return FD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vi(new Xr("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new cL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(z_,H_,hL(t)),Bn(z_,H_,"esm2017")}/**
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
 */const fL=5*60,pL=eT("authIdTokenMaxAge")||fL;let q_=null;const mL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pL)return;const i=n==null?void 0:n.token;q_!==i&&(q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gL(t=Qm()){const e=eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VD(t,{popupRedirectResolver:uL,persistence:[wO,lO,LT]}),r=eT("authTokenSyncURL");if(r){const s=mL(r);iO(n,s,()=>s(n.currentUser)),rO(n,o=>s(o))}const i=X1("auth");return i&&UD(n,`http://${i}`),n}dL("Browser");var yL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,sg=sg||{},Q=yL||self;function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function sh(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vL(t){return Object.prototype.hasOwnProperty.call(t,bd)&&t[bd]||(t[bd]=++_L)}var bd="closure_uid_"+(1e9*Math.random()>>>0),_L=0;function wL(t,e,n){return t.call.apply(t.bind,arguments)}function EL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=wL:Tt=EL,Tt.apply(null,arguments)}function Zl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ai(){this.s=this.s,this.o=this.o}var TL=0;ai.prototype.s=!1;ai.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),TL!=0)&&vL(this)};ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const BT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function og(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function W_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var IL=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Ua(t){return/^[\s\xa0]*$/.test(t)}function oh(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return oh().indexOf(t)!=-1}function ag(t){return ag[" "](t),t}ag[" "]=function(){};function RL(t,e){var n=yb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var SL=Mn("Opera"),Xs=Mn("Trident")||Mn("MSIE"),zT=Mn("Edge"),fp=zT||Xs,HT=Mn("Gecko")&&!(oh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),AL=oh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge");function qT(){var t=Q.document;return t?t.documentMode:void 0}var pp;e:{var Md="",Vd=function(){var t=oh();if(HT)return/rv:([^\);]+)(\)|;)/.exec(t);if(zT)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AL)return/WebKit\/(\S+)/.exec(t);if(SL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vd&&(Md=Vd?Vd[1]:""),Xs){var Fd=qT();if(Fd!=null&&Fd>parseFloat(Md)){pp=String(Fd);break e}}pp=Md}var mp;if(Q.document&&Xs){var K_=qT();mp=K_||parseInt(pp,10)||void 0}else mp=void 0;var CL=mp;function $a(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(HT){e:{try{ag(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$a.$.h.call(this)}}it($a,It);var PL={2:"touch",3:"pen",4:"mouse"};$a.prototype.h=function(){$a.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ah="closure_listenable_"+(1e6*Math.random()|0),kL=0;function xL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kL,this.fa=this.ia=!1}function lh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function WT(t){const e={};for(const n in t)e[n]=t[n];return e}const G_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function KT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<G_.length;s++)n=G_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function uh(t){this.src=t,this.g={},this.h=0}uh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function gp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=BT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ug="closure_lm_"+(1e6*Math.random()|0),Ud={};function GT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)GT(t,e[s],n,r,i);return null}return n=XT(n),t&&t[ah]?t.O(e,n,sh(r)?!!r.capture:!!r,i):DL(t,e,n,!1,r,i)}function DL(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=sh(i)?!!i.capture:!!i,a=hg(t);if(a||(t[ug]=a=new uh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=OL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(YT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OL(){function t(n){return e.call(t.src,t.listener,n)}const e=LL;return t}function QT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)QT(t,e[s],n,r,i);else r=sh(r)?!!r.capture:!!r,n=XT(n),t&&t[ah]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yp(s,n,r,i),-1<n&&(lh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=hg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yp(e,n,r,i)),(n=-1<t?e[t]:null)&&cg(n))}function cg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ah])gp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(YT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=hg(e))?(gp(n,t),n.h==0&&(n.src=null,e[ug]=null)):lh(t)}}}function YT(t){return t in Ud?Ud[t]:Ud[t]="on"+t}function LL(t,e){if(t.fa)t=!0;else{e=new $a(e,this);var n=t.listener,r=t.la||t.src;t.ia&&cg(t),t=n.call(r,e)}return t}function hg(t){return t=t[ug],t instanceof uh?t:null}var $d="__closure_events_fn_"+(1e9*Math.random()>>>0);function XT(t){return typeof t=="function"?t:(t[$d]||(t[$d]=function(e){return t.handleEvent(e)}),t[$d])}function rt(){ai.call(this),this.i=new uh(this),this.S=this,this.J=null}it(rt,ai);rt.prototype[ah]=!0;rt.prototype.removeEventListener=function(t,e,n,r){QT(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),KT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=eu(o,r,!0,e)&&i}if(o=e.g=t,i=eu(o,r,!0,e)&&i,i=eu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=eu(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lh(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var dg=Q.JSON.stringify;class bL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ML(){var t=fg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VL{constructor(){this.h=this.g=null}add(e,n){const r=JT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var JT=new bL(()=>new FL,t=>t.reset());class FL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $L(t){Q.setTimeout(()=>{throw t},0)}let ja,Ba=!1,fg=new VL,ZT=()=>{const t=Q.Promise.resolve(void 0);ja=()=>{t.then(jL)}};var jL=()=>{for(var t;t=ML();){try{t.h.call(t.g)}catch(n){$L(n)}var e=JT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ba=!1};function ch(t,e){rt.call(this),this.h=t||1,this.g=e||Q,this.j=Tt(this.qb,this),this.l=Date.now()}it(ch,rt);L=ch.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(pg(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){ch.$.N.call(this),pg(this),delete this.g};function mg(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function eI(t){t.g=mg(()=>{t.g=null,t.i&&(t.i=!1,eI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BL extends ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eI(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){ai.call(this),this.h=t,this.g={}}it(za,ai);var Q_=[];function tI(t,e,n,r){Array.isArray(n)||(n&&(Q_[0]=n.toString()),n=Q_);for(var i=0;i<n.length;i++){var s=GT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function nI(t){lg(t.g,function(e,n){this.g.hasOwnProperty(n)&&cg(e)},t),t.g={}}za.prototype.N=function(){za.$.N.call(this),nI(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hh(){this.g=!0}hh.prototype.Ea=function(){this.g=!1};function zL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function HL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WL(t,n)+(r?" "+r:"")})}function qL(t,e){t.info(function(){return"TIMEOUT: "+e})}hh.prototype.info=function(){};function WL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dg(n)}catch{return e}}var Yi={},Y_=null;function dh(){return Y_=Y_||new rt}Yi.Ta="serverreachability";function rI(t){It.call(this,Yi.Ta,t)}it(rI,It);function Ha(t){const e=dh();ct(e,new rI(e))}Yi.STAT_EVENT="statevent";function iI(t,e){It.call(this,Yi.STAT_EVENT,t),this.stat=e}it(iI,It);function xt(t){const e=dh();ct(e,new iI(e,t))}Yi.Ua="timingevent";function sI(t,e){It.call(this,Yi.Ua,t),this.size=e}it(sI,It);function ml(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var fh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gg(){}gg.prototype.h=null;function X_(t){return t.h||(t.h=t.i())}function aI(){}var gl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yg(){It.call(this,"d")}it(yg,It);function vg(){It.call(this,"c")}it(vg,It);var vp;function ph(){}it(ph,gg);ph.prototype.g=function(){return new XMLHttpRequest};ph.prototype.i=function(){return{}};vp=new ph;function yl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new za(this),this.P=KL,t=fp?125:void 0,this.V=new ch(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lI}function lI(){this.i=null,this.g="",this.h=!1}var KL=45e3,_p={},mc={};L=yl.prototype;L.setTimeout=function(t){this.P=t};function wp(t,e,n){t.L=1,t.v=gh(fr(e)),t.s=n,t.S=!0,uI(t,null)}function uI(t,e){t.G=Date.now(),vl(t),t.A=fr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),yI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new lI,t.g=FI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new BL(Tt(t.Pa,t,t.g),t.O)),tI(t.U,t.g,"readystatechange",t.nb),e=t.I?WT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ha(),zL(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||fp||this.g&&(this.h.h||this.g.ja()||t0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ha(3):Ha(2)),mh(this);var n=this.g.da();this.ca=n;t:if(cI(this)){var r=t0(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),la(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,HL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ua(a)){var u=a;break t}}u=null}if(n=u)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ep(this,n);else{this.i=!1,this.o=3,xt(12),Ei(this),la(this);break e}}this.S?(hI(this,c,o),fp&&this.i&&c==3&&(tI(this.U,this.V,"tick",this.mb),this.V.start())):(Es(this.j,this.m,o,null),Ep(this,o)),c==4&&Ei(this),this.i&&!this.J&&(c==4?LI(this.l,this):(this.i=!1,vl(this)))}else pb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Ei(this),la(this)}}}catch{}finally{}};function cI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function hI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=GL(t,n),i==mc){e==4&&(t.o=4,xt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_p){t.o=4,xt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,i,null),Ep(t,i);cI(t)&&i!=mc&&i!=_p&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rg(e),e.M=!0,xt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Ei(t),la(t))}L.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(mh(this),hI(this,t,e),this.i&&t!=4&&vl(this))}};function GL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?mc:(n=Number(e.substring(n,r)),isNaN(n)?_p:(r+=1,r+n>e.length?mc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Ei(this)};function vl(t){t.Y=Date.now()+t.P,dI(t,t.P)}function dI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ml(Tt(t.lb,t),e)}function mh(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qL(this.j,this.A),this.L!=2&&(Ha(),xt(17)),Ei(this),this.o=2,la(this)):dI(this,this.Y-t)};function la(t){t.l.H==0||t.J||LI(t.l,t)}function Ei(t){mh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,pg(t.V),nI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ep(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Tp(n.i,t))){if(!t.K&&Tp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)vc(n),_h(n);else break e;Ig(n),xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ml(Tt(n.ib,n),6e3));if(1>=wI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ti(n,11)}else if((t.K||n.g==t)&&vc(n),!Ua(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_g(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=VI(r,r.J?r.pa:null,r.Y),o.K){EI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(mh(a),vl(a)),r.g=o}else DI(r);0<n.j.length&&wh(n)}else u[0]!="stop"&&u[0]!="close"||Ti(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ti(n,7):Tg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ha(4)}catch{}}function QL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function fI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YL(t),r=QL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var pI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pi){this.h=t.h,gc(this,t.j),this.s=t.s,this.g=t.g,yc(this,t.m),this.l=t.l;var e=t.i,n=new qa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),J_(this,n),this.o=t.o}else t&&(e=String(t).match(pI))?(this.h=!1,gc(this,e[1]||"",!0),this.s=qo(e[2]||""),this.g=qo(e[3]||"",!0),yc(this,e[4]),this.l=qo(e[5]||"",!0),J_(this,e[6]||"",!0),this.o=qo(e[7]||"")):(this.h=!1,this.i=new qa(null,this.h))}Pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wo(e,Z_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wo(e,Z_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wo(n,n.charAt(0)=="/"?eb:ZL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wo(n,nb)),t.join("")};function fr(t){return new Pi(t)}function gc(t,e,n){t.j=n?qo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function J_(t,e,n){e instanceof qa?(t.i=e,rb(t.i,t.h)):(n||(e=Wo(e,tb)),t.i=new qa(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function gh(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Z_=/[#\/\?@]/g,ZL=/[#\?:]/g,eb=/[#\?]/g,tb=/[#\?@]/g,nb=/#/g;function qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function li(t){t.g||(t.g=new Map,t.h=0,t.i&&XL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=qa.prototype;L.add=function(t,e){li(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mI(t,e){li(t),e=po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gI(t,e){return li(t),e=po(t,e),t.g.has(e)}L.forEach=function(t,e){li(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){li(this);let e=[];if(typeof t=="string")gI(this,t)&&(e=e.concat(this.g.get(po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return li(this),this.i=null,t=po(this,t),gI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yI(t,e,n){mI(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),og(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rb(t,e){e&&!t.j&&(li(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(mI(this,r),yI(this,i,n))},t)),t.j=e}var ib=class{constructor(t,e){this.g=t,this.map=e}};function vI(t){this.l=t||sb,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sb=10;function _I(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wI(t){return t.h?1:t.g?t.g.size:0}function Tp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _g(t,e){t.g?t.g.add(e):t.h=e}function EI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vI.prototype.cancel=function(){if(this.i=TI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function TI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return og(t.i)}var ob=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function ab(){this.g=new ob}function lb(t,e,n){const r=n||"";try{fI(t,function(i,s){let o=i;sh(i)&&(o=dg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ub(t,e){const n=new hh;if(Q.Image){const r=new Image;r.onload=Zl(tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zl(tu,n,r,"TestLoadImage: error",!1,e),r.onabort=Zl(tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zl(tu,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function tu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function _l(t){this.l=t.fc||null,this.j=t.ob||!1}it(_l,gg);_l.prototype.g=function(){return new yh(this.l,this.j)};_l.prototype.i=function(t){return function(){return t}}({});function yh(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(yh,rt);var wg=0;L=yh.prototype;L.open=function(t,e){if(this.readyState!=wg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wl(this)),this.readyState=wg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wa(this)),this.g&&(this.readyState=3,Wa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;II(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function II(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wl(this):Wa(this),this.readyState==3&&II(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,wl(this))};L.Ya=function(t){this.g&&(this.response=t,wl(this))};L.ka=function(){this.g&&wl(this)};function wl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cb=Q.JSON.parse;function Le(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=RI,this.L=this.M=!1}it(Le,rt);var RI="",hb=/^https?$/i,db=["POST","PUT"];L=Le.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vp.g(),this.C=this.u?X_(this.u):X_(vp),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){e0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=BT(db,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{CI(this),0<this.B&&((this.L=fb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=mg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){e0(this,s)}};function fb(t){return Xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof sg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function e0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,SI(t),vh(t)}function SI(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),vh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vh(this,!0)),Le.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?AI(this):this.kb())};L.kb=function(){AI(this)};function AI(t){if(t.h&&typeof sg<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)mg(t.La,0,t);else if(ct(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(pI)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!hb.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",SI(t)}}finally{vh(t)}}}}function vh(t,e){if(t.g){CI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function CI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Vn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cb(e)}};function t0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case RI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function pb(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ua(t[r]))continue;var n=UL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}NL(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function PI(t){let e="";return lg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Eg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=PI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kI(t){this.Ga=0,this.j=[],this.l=new hh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vI(t&&t.concurrentRequestLimit),this.Ja=new ab,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=kI.prototype;L.ra=8;L.H=1;function Tg(t){if(xI(t),t.H==3){var e=t.W++,n=fr(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),El(t,n),e=new yl(t,t.l,e),e.L=2,e.v=gh(fr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=FI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vl(e)}MI(t)}function _h(t){t.g&&(Rg(t),t.g.cancel(),t.g=null)}function xI(t){_h(t),t.u&&(Q.clearTimeout(t.u),t.u=null),vc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function wh(t){if(!_I(t.i)&&!t.m){t.m=!0;var e=t.Na;ja||ZT(),Ba||(ja(),Ba=!0),fg.add(e,t),t.C=0}}function mb(t,e){return wI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ml(Tt(t.Na,t,e),bI(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new yl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=WT(s),KT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=NI(this,i,e),n=fr(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),El(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(PI(s)))+"&"+e:this.o&&Eg(n,this.o,s)),_g(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,wp(i,n,null)):wp(i,n,e),this.H=2}}else this.H==3&&(t?n0(this,t):this.j.length==0||_I(this.i)||n0(this))};function n0(t,e){var n;e?n=e.m:n=t.W++;const r=fr(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),El(t,r),t.o&&t.s&&Eg(r,t.o,t.s),n=new yl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=NI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_g(t.i,n),wp(n,r,e)}function El(t,e){t.na&&lg(t.na,function(n,r){Ee(e,r,n)}),t.h&&fI({},function(n,r){Ee(e,r,n)})}function NI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{lb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function DI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ja||ZT(),Ba||(ja(),Ba=!0),fg.add(e,t),t.A=0}}function Ig(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ml(Tt(t.Ma,t),bI(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,OI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ml(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),_h(this),OI(this))};function Rg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function OI(t){t.g=new yl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=fr(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),El(t,e),t.o&&t.s&&Eg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=gh(fr(e)),n.s=null,n.S=!0,uI(n,t)}L.ib=function(){this.v!=null&&(this.v=null,_h(this),Ig(this),xt(19))};function vc(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function LI(t,e){var n=null;if(t.g==e){vc(t),Rg(t),t.g=null;var r=2}else if(Tp(t.i,e))n=e.F,EI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=dh(),ct(r,new sI(r,n)),wh(t)}else DI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&mb(t,e)||r==2&&Ig(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}}function bI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ti(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Pi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||gc(n,"https"),gh(n)),ub(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),MI(t),xI(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function MI(t){if(t.H=0,t.ma=[],t.h){const e=TI(t.i);(e.length!=0||t.j.length!=0)&&(W_(t.ma,e),W_(t.ma,t.j),t.i.i.length=0,og(t.j),t.j.length=0),t.h.ya()}}function VI(t,e,n){var r=n instanceof Pi?fr(n):new Pi(n);if(r.g!="")e&&(r.g=e+"."+r.g),yc(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pi(null);r&&gc(s,r),e&&(s.g=e),i&&yc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),El(t,r),r}function FI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new _l({ob:!0})):new Le(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function UI(){}L=UI.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function _c(){if(Xs&&!(10<=Number(CL)))throw Error("Environmental error: no available transport.")}_c.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){rt.call(this),this.g=new kI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ua(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ua(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}it(Yt,rt);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=VI(t,null,t.Y),wh(t)};Yt.prototype.close=function(){Tg(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dg(t),t=n);e.j.push(new ib(e.fb++,t)),e.H==3&&wh(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,Tg(this.g),delete this.g,Yt.$.N.call(this)};function $I(t){yg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it($I,yg);function jI(){vg.call(this),this.status=1}it(jI,vg);function mo(t){this.g=t}it(mo,UI);mo.prototype.Ba=function(){ct(this.g,"a")};mo.prototype.Aa=function(t){ct(this.g,new $I(t))};mo.prototype.za=function(t){ct(this.g,new jI)};mo.prototype.ya=function(){ct(this.g,"b")};function gb(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(An,gb);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jd(this,r),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var yb={};function Sg(t){return-128<=t&&128>t?RL(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Fn(t){if(isNaN(t)||!isFinite(t))return Ns;if(0>t)return lt(Fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ip;return new de(e,0)}function BI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(BI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fn(Math.pow(e,8)),r=Ns,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Fn(Math.pow(e,s)),r=r.R(s).add(Fn(o))):(r=r.R(n),r=r.add(Fn(o)))}return r}var Ip=4294967296,Ns=Sg(0),Rp=Sg(1),r0=Sg(16777216);L=de.prototype;L.ea=function(){if(on(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ip+r)*e,e*=Ip}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(on(this))return"-"+lt(this).toString(t);for(var e=Fn(Math.pow(t,6)),n=this,r="";;){var i=Ec(n,e).g;n=wc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}L.X=function(t){return t=wc(this,t),on(t)?-1:ir(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(Rp)}L.abs=function(){return on(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function wc(t,e){return t.add(lt(e))}L.R=function(t){if(ir(this)||ir(t))return Ns;if(on(this))return on(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(on(t))return lt(this.R(lt(t)));if(0>this.X(r0)&&0>t.X(r0))return Fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,nu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function nu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mo(t,e){this.g=t,this.h=e}function Ec(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new Mo(Ns,Ns);if(on(t))return e=Ec(lt(t),e),new Mo(lt(e.g),lt(e.h));if(on(e))return e=Ec(t,lt(e)),new Mo(lt(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Rp,r=e;0>=r.X(t);)n=i0(n),r=i0(r);var i=ns(n,1),s=ns(r,1);for(r=ns(r,2),n=ns(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ns(r,1),n=ns(n,1)}return e=wc(t,i.R(e)),new Mo(i,e)}for(i=Ns;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fn(n),o=s.R(e);on(o)||0<o.X(t);)n-=r,s=Fn(n),o=s.R(e);ir(s)&&(s=Rp),i=i.add(s),t=wc(t,o)}return new Mo(i,t)}L.gb=function(t){return Ec(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function i0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function ns(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(i,t.h)}_c.prototype.createWebChannel=_c.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;fh.NO_ERROR=0;fh.TIMEOUT=8;fh.HTTP_ERROR=6;oI.COMPLETE="complete";aI.EventType=gl;gl.OPEN="a";gl.CLOSE="b";gl.ERROR="c";gl.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Fn;de.fromString=BI;var vb=function(){return new _c},_b=function(){return dh()},Bd=fh,wb=oI,Eb=Yi,s0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tb=_l,ru=aI,Ib=Le,Rb=An,Ds=de;const o0="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let go="10.1.0";/**
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
 */const $i=new Km("@firebase/firestore");function a0(){return $i.logLevel}function F(t,...e){if($i.logLevel<=le.DEBUG){const n=e.map(Ag);$i.debug(`Firestore (${go}): ${t}`,...n)}}function pr(t,...e){if($i.logLevel<=le.ERROR){const n=e.map(Ag);$i.error(`Firestore (${go}): ${t}`,...n)}}function Js(t,...e){if($i.logLevel<=le.WARN){const n=e.map(Ag);$i.warn(`Firestore (${go}): ${t}`,...n)}}function Ag(t){if(typeof t=="string")return t;try{/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function Re(t,e){t||W()}function ee(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new zI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new yt(e)}}class Pb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Pb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new xb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class HI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Db(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Xe(0,0))}static max(){return new J(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ka{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ka{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return Ob.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function Lb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Jr(i,j.empty(),e)}function bb(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(J.min(),j.empty(),-1)}static max(){return new Jr(J.max(),j.empty(),-1)}}function Mb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Vb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Il(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Cg.ae=-1;function Eh(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function Ub(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function l0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u0(this.data.getIterator())}getIteratorFrom(e){return new u0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class u0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Rt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class WI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new WI("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(Re(!!t),typeof t=="string"){let e=0;const n=$b.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ji(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function Pg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Pg(e)?kg(e):e}function Ga(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class jb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pg(t)?4:Bb(t)?9007199254740991:10:W()}function Kn(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zr(i.timestampValue),a=Zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ji(i.bytesValue).isEqual(ji(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),a=je(s.doubleValue);return o===a?Tc(o)===Tc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(l0(o)!==l0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Kn(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function Ya(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=je(s.integerValue||s.doubleValue),l=je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return c0(t.timestampValue,e.timestampValue);case 4:return c0(Ga(t),Ga(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ji(s),l=ji(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ue(a[u],l[u]);if(c!==0)return c}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(je(s.latitude),je(o.latitude));return a!==0?a:ue(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=eo(a[u],l[u]);if(c)return c}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===su.mapValue&&o===su.mapValue)return 0;if(s===su.mapValue)return 1;if(o===su.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ue(l[h],c[h]);if(d!==0)return d;const p=eo(a[l[h]],u[c[h]]);if(p!==0)return p}return ue(l.length,c.length)}(t.mapValue,e.mapValue);default:throw W()}}function c0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Zr(t),r=Zr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function to(t){return Sp(t)}function Sp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ji(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sp(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function h0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ap(t){return!!t&&"integerValue"in t}function xg(t){return!!t&&"arrayValue"in t}function d0(t){return!!t&&"nullValue"in t}function f0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(ua(this.value))}}function KI(t){const e=[];return Xi(t.fields,(n,r)=>{const i=new wt([n]);if(xu(r)){const s=KI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,J.min(),J.min(),J.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,J.min(),J.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,J.min(),J.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function p0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function m0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function zb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class GI{}class He extends GI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qb(e,n,r):n==="array-contains"?new Gb(e,r):n==="in"?new Qb(e,r):n==="not-in"?new Yb(e,r):n==="array-contains-any"?new Xb(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wb(e,r):new Kb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&Bi(this.value)===Bi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Cn extends GI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Cn(e,n)}matches(e){return QI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function QI(t){return t.op==="and"}function YI(t){return Hb(t)&&QI(t)}function Hb(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function Cp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+to(t.value);if(YI(t))return t.filters.map(e=>Cp(e)).join(",");{const e=t.filters.map(n=>Cp(n)).join(",");return`${t.op}(${e})`}}function XI(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof Cn?function(r,i){return i instanceof Cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&XI(o,i.filters[a]),!0):!1}(t,e):void W()}function JI(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof Cn?function(n){return n.op.toString()+" {"+n.getFilters().map(JI).join(" ,")+"}"}(t):"Filter"}class qb extends He{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wb extends He{constructor(e,n){super(e,"in",n),this.keys=ZI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kb extends He{constructor(e,n){super(e,"not-in",n),this.keys=ZI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ZI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class Gb extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xg(n)&&Ya(n.arrayValue,this.value)}}class Qb extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class Yb extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ya(this.value.arrayValue,n)}}class Xb extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}/**
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
 */class Jb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function g0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Jb(t,e,n,r,i,s,o)}function Ng(t){const e=ee(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.he=n}return e.he}function Dg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!XI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m0(t.startAt,e.startAt)&&m0(t.endAt,e.endAt)}function Pp(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Zb(t,e,n,r,i,s,o,a){return new yo(t,e,n,r,i,s,o,a)}function Og(t){return new yo(t)}function y0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Th(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function eR(t){return t.collectionGroup!==null}function Ls(t){const e=ee(t);if(e.Pe===null){e.Pe=[];const n=Th(e),r=Lg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Os(n)),e.Pe.push(new Os(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Os(wt.keyField(),s))}}}return e.Pe}function mr(t){const e=ee(t);if(!e.Ie)if(e.limitType==="F")e.Ie=g0(e.path,e.collectionGroup,Ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ls(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new Ic(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ic(e.startAt.position,e.startAt.inclusive):null;e.Ie=g0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function kp(t,e){e.getFirstInequalityField(),Th(t);const n=t.filters.concat([e]);return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rc(t,e,n){return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ih(t,e){return Dg(mr(t),mr(e))&&t.limitType===e.limitType}function tR(t){return`${Ng(mr(t))}|lt:${t.limitType}`}function xp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>JI(i)).join(", ")}]`),Eh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(mr(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=p0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,a,l){const u=p0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ls(r),i))}(t,e)}function eM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nR(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=tM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tM(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?eo(l,u):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qI(this.inner)}size(){return this.innerSize}}/**
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
 */const nM=new De(j.comparator);function gr(){return nM}const rR=new De(j.comparator);function Ko(...t){let e=rR;for(const n of t)e=e.insert(n.key,n);return e}function iR(t){let e=rR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ii(){return ca()}function sR(){return ca()}function ca(){return new vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const rM=new De(j.comparator),iM=new Rt(j.comparator);function ie(...t){let e=iM;for(const n of t)e=e.add(n);return e}const sM=new Rt(ue);function oM(){return sM}/**
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
 */function oR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function aR(t){return{integerValue:""+t}}function aM(t,e){return Ub(e)?aR(e):oR(t,e)}/**
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
 */class Sh{constructor(){this._=void 0}}function lM(t,e,n){return t instanceof Sc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pg(s)&&(s=kg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Xa?uR(t,e):t instanceof Ja?cR(t,e):function(i,s){const o=lR(i,s),a=v0(o)+v0(i.Te);return Ap(o)&&Ap(i.Te)?aR(a):oR(i.serializer,a)}(t,e)}function uM(t,e,n){return t instanceof Xa?uR(t,e):t instanceof Ja?cR(t,e):n}function lR(t,e){return t instanceof Ac?function(r){return Ap(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sc extends Sh{}class Xa extends Sh{constructor(e){super(),this.elements=e}}function uR(t,e){const n=hR(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ja extends Sh{constructor(e){super(),this.elements=e}}function cR(t,e){let n=hR(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class Ac extends Sh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function v0(t){return je(t.integerValue||t.doubleValue)}function hR(t){return xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xa&&i instanceof Xa||r instanceof Ja&&i instanceof Ja?Zs(r.elements,i.elements,Kn):r instanceof Ac&&i instanceof Ac?Kn(r.Te,i.Te):r instanceof Sc&&i instanceof Sc}(t.transform,e.transform)}class hM{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ah{}function dR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,Rn.none()):new Rl(t.key,t.data,Rn.none());{const n=t.data,r=Vt.empty();let i=new Rt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Wt(i.toArray()),Rn.none())}}function dM(t,e,n){t instanceof Rl?function(i,s,o){const a=i.value.clone(),l=w0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!Nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=w0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(fR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ha(t,e,n,r){return t instanceof Rl?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const u=s.value.clone(),c=E0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const u=E0(s.fieldTransforms,l,o),c=o.data;return c.setAll(fR(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function fM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lR(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function _0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>cM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rl extends Ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends Ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function w0(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uM(o,a,n[i]))}return r}function E0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lM(s,o,e))}return r}class bg extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pM extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&dM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=dR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>_0(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>_0(n,r))}}class Mg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return rM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mg(e,n,r,i)}}/**
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
 */class gM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,se;function vM(t){switch(t){default:return W();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function pR(t){if(t===void 0)return pr("GRPC error has no .code"),A.UNKNOWN;switch(t){case $e.OK:return A.OK;case $e.CANCELLED:return A.CANCELLED;case $e.UNKNOWN:return A.UNKNOWN;case $e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case $e.INTERNAL:return A.INTERNAL;case $e.UNAVAILABLE:return A.UNAVAILABLE;case $e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case $e.NOT_FOUND:return A.NOT_FOUND;case $e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case $e.ABORTED:return A.ABORTED;case $e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case $e.DATA_LOSS:return A.DATA_LOSS;default:return W()}}(se=$e||($e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ou}static getOrCreateInstance(){return ou===null&&(ou=new Vg),ou}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ou=null;/**
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
 */function _M(){return new TextEncoder}/**
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
 */const wM=new Ds([4294967295,4294967295],0);function T0(t){const e=_M().encode(t),n=new Rb;return n.update(e),new Uint8Array(n.digest())}function I0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ds([n,r],0),new Ds([i,s],0)]}class Fg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Go(`Invalid padding: ${n}`);if(r<0)throw new Go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Go(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ds.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ds.fromNumber(r)));return i.compare(wM)===1&&(i=new Ds([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=T0(e),[r,i]=I0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=T0(e),[r,i]=I0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(J.min(),i,new De(ue),gr(),ie())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sl(r,n,ie(),ie(),ie())}}/**
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
 */class Du{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class mR{constructor(e,n){this.targetId=e,this.pe=n}}class gR{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class R0{constructor(){this.ye=0,this.we=A0(),this.Se=Ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Sl(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=A0()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class EM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=gr(),this.$e=S0(),this.Ue=new De(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Pp(a))if(s===0){const l=new j(a.path);this.ze(i,l,_t.newNoDocument(l,J.min()))}else Re(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Vg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,g,f,y,m;const E={localCacheCount:p,existenceFilterCount:v.count},R=v.unchangedNames;return R&&(E.bloomFilter={applied:h===0,hashCount:(_=R==null?void 0:R.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(g=(w=R==null?void 0:R.bits)===null||w===void 0?void 0:w.bitmap)===null||g===void 0?void 0:g.length)!==null&&f!==void 0?f:0,padding:(m=(y=R==null?void 0:R.bits)===null||y===void 0?void 0:y.padding)!==null&&m!==void 0?m:0},d&&(E.bloomFilter.mightContain=d)),E}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ji(s).toUint8Array()}catch(h){if(h instanceof WI)return Js("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Fg(l,o,a)}catch(h){return Js(h instanceof Go?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Pp(a.target)){const l=new j(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,_t.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ie();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.Ue,this.Ke,r);return this.Ke=gr(),this.$e=S0(),this.Ue=new De(ue),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new R0,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Rt(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new R0),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function S0(){return new De(j.comparator)}function A0(){return new De(j.comparator)}const TM={asc:"ASCENDING",desc:"DESCENDING"},IM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RM={and:"AND",or:"OR"};class SM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Np(t,e){return t.useProto3Json||Eh(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AM(t,e){return Cc(t,e.toTimestamp())}function qn(t){return Re(!!t),J.fromTimestamp(function(n){const r=Zr(n);return new Xe(r.seconds,r.nanos)}(t))}function Ug(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function vR(t){const e=Te.fromString(t);return Re(TR(e)),e}function Dp(t,e){return Ug(t.databaseId,e.path)}function zd(t,e){const n=vR(e);if(n.get(1)!==t.databaseId.projectId)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(_R(n))}function Op(t,e){return Ug(t.databaseId,e)}function CM(t){const e=vR(t);return e.length===4?Te.emptyPath():_R(e)}function Lp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _R(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C0(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function PM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),Ct.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),Ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:pR(u.code);return new b(c,u.message||"")}(o);n=new gR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zd(t,r.document.name),s=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):J.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Du(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zd(t,r.document),s=r.readTime?qn(r.readTime):J.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zd(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yM(i,s),a=r.targetId;n=new mR(a,o)}}return n}function kM(t,e){let n;if(e instanceof Rl)n={update:C0(t,e.key,e.value)};else if(e instanceof bg)n={delete:Dp(t,e.key)};else if(e instanceof ui)n={update:C0(t,e.key,e.data),updateMask:FM(e.fieldMask)};else{if(!(e instanceof pM))return W();n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function xM(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qn(i.updateTime):qn(s);return o.isEqual(J.min())&&(o=qn(s)),new hM(o,i.transformResults||[])}(n,e))):[]}function NM(t,e){return{documents:[Op(t,e.path)]}}function DM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Op(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Op(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ER(Cn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:is(h.field),direction:bM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Np(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function OM(t){let e=CM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=wR(h);return d instanceof Cn&&YI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Os(ss(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Eh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Ic(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Ic(p,d)}(n.endAt)),Zb(e,i,o,s,a,"F",l,u)}function LM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return He.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cn.create(n.compositeFilter.filters.map(r=>wR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function bM(t){return TM[t]}function MM(t){return IM[t]}function VM(t){return RM[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return wt.fromServerFormat(t.fieldPath)}function ER(t){return t instanceof He?function(n){if(n.op==="=="){if(f0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(d0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(f0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(d0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:MM(n.op),value:n.value}}}(t):t instanceof Cn?function(n){const r=n.getFilters().map(i=>ER(i));return r.length===1?r[0]:{compositeFilter:{op:VM(n.op),filters:r}}}(t):W()}function FM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class br{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class UM{constructor(e){this.ct=e}}function $M(t){const e=OM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rc(e,e.limit,"L"):e}/**
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
 */class jM{constructor(){this.sn=new BM}addToCollectionParentIndex(e,n){return this.sn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Jr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class BM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Rt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Rt(Te.comparator)).toArray()}}/**
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
 */class no{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new no(0)}static On(){return new no(-1)}}/**
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
 */class zM{constructor(){this.changes=new vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ha(r.mutation,i,Wt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ko();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gr();const o=ca(),a=function(){return ca()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ui)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ha(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new HM(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ca();let i=new De((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=sR();c.forEach(d=>{if(!s.has(d)){const p=dR(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(Ii());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?N.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:iR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ko();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(c,h){return new yo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=Ko();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ha(u.mutation,l,Wt.empty(),Xe.now()),Rh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class WM{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return N.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:$M(i.bundledQuery),readTime:qn(i.readTime)}}(n)),N.resolve()}}/**
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
 */class KM{constructor(){this.overlays=new De(j.comparator),this.cr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ii();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=Ii(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ii(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ii(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gM(n,r));let s=this.cr.get(n);s===void 0&&(s=ie(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class $g{constructor(){this.lr=new Rt(Ze.hr),this.Pr=new Rt(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ie();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return j.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||j.comparator(e.key,n.key)}}/**
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
 */class GM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Rt(Ze.hr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(ue);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),N.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new j(s),0);let a=new Rt(ue);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),N.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return N.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.pr.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QM{constructor(e){this.Dr=e,this.docs=function(){return new De(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=gr();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Mb(bb(c),r)<=0||(i.has(c.key)||Rh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}vr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YM(this)}getSize(e){return N.resolve(this.size)}}class YM extends zM{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class XM{constructor(e){this.persistence=e,this.Cr=new vo(n=>Ng(n),Dg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new $g,this.targetCount=0,this.Or=no.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),N.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new no(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Ln(n),N.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Mr.containsKey(n))}}/**
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
 */class JM{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Cg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new XM(this),this.indexManager=new jM,this.remoteDocumentCache=function(i){return new QM(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new UM(n),this.Qr=new WM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new GM(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new ZM(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return N.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class ZM extends Fb{constructor(e){super(),this.currentSequenceNumber=e}}class jg{constructor(e){this.persistence=e,this.Wr=new $g,this.Gr=null}static zr(e){return new jg(e)}get jr(){if(this.Gr)return this.Gr;throw W()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.jr,r=>{const i=j.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return N.or([()=>N.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bg(e,n.fromCache,r,i)}}/**
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
 */class eV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(y0(n))return N.resolve(null);let r=mr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rc(n,null,"F"),r=mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Rc(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return y0(n)||i.isEqual(J.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(a0()<=le.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xp(n)),this.ji(e,o,n,Lb(i,-1)))})}Gi(e,n){let r=new Rt(nR(e));return n.forEach((i,s)=>{Rh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return a0()<=le.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",xp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Jr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new De(ue),this.Yi=new vo(s=>Ng(s),Dg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qM(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function nV(t,e,n,r){return new tV(t,e,n,r)}async function IR(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function rV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=N.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Re(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RR(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function iV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=gr(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(J.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function sV(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function oV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function bp(t,e,n){const r=ee(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Il(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function P0(t,e,n){const r=ee(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=ee(l),d=h.Yi.get(c);return d!==void 0?N.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,mr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(a=>(lV(r,eM(e),a),{documents:a,ss:s})))}function lV(t,e,n){let r=t.Zi.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class k0{constructor(){this.activeTargetIds=oM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uV{constructor(){this.Hs=new k0,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new k0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cV{Ys(e){}shutdown(){}}/**
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
 */class x0{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let au=null;function Hd(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
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
 */const hV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const gt="WebChannelConnection";class fV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Hd(),l=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=hV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Hd();return new Promise((o,a)=>{const l=new Ib;l.setWithCredentials(!0),l.listenOnce(wb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bd.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Bd.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new b(A.DEADLINE_EXCEEDED,"Request time out"));break;case Bd.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new b(v,p.message))}else a(new b(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(A.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Hd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vb(),a=_b(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Tb({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new dV({so:w=>{p?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,g,f)=>{w.listen(g,y=>{try{f(y)}catch(m){setTimeout(()=>{throw m},0)}})};return _(h,ru.EventType.OPEN,()=>{p||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ru.EventType.CLOSE,()=>{p||(p=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,ru.EventType.ERROR,w=>{p||(p=!0,Js(gt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new b(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,ru.EventType.MESSAGE,w=>{var g;if(!p){const f=w.data[0];Re(!!f);const y=f,m=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(m){F(gt,`RPC '${e}' stream ${i} received error:`,m);const E=m.status;let R=function(Y){const B=$e[Y];if(B!==void 0)return pR(B)}(E),S=m.message;R===void 0&&(R=A.INTERNAL,S="Unknown error status: "+E+" with message "+m.message),p=!0,v.Po(new b(R,S)),h.close()}else F(gt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,Eb.STAT_EVENT,w=>{w.stat===s0.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===s0.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function qd(){return typeof document<"u"?document:null}/**
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
 */function Ph(t){return new SM(t,!0)}/**
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
 */class SR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class AR{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new SR(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new b(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pV extends AR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=PM(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?qn(o.readTime):J.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Lp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Pp(l)?{documents:NM(s,l)}:{query:DM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yR(s,o.resumeToken);const u=Np(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Cc(s,o.snapshotVersion.toTimestamp());const u=Np(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=LM(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Lp(this.serializer),n.removeTarget=e,this.Ho(n)}}class mV extends AR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=xM(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.u_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Lp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kM(this.serializer,r))};this.Ho(n)}}/**
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
 */class gV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(A.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class yV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(pr(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class vV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ee(l);u.y_.add(4),await Al(u),u.b_.set("Unknown"),u.y_.delete(4),await kh(u)}(this))})}),this.b_=new yV(r,i)}}async function kh(t){if(Ji(t))for(const e of t.w_)await e(!0)}async function Al(t){for(const e of t.w_)await e(!1)}function CR(t,e){const n=ee(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),qg(n)?Hg(n):_o(n).Uo()&&zg(n,e))}function PR(t,e){const n=ee(t),r=_o(n);n.p_.delete(e),r.Uo()&&kR(n,e),n.p_.size===0&&(r.Uo()?r.zo():Ji(n)&&n.b_.set("Unknown"))}function zg(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_o(t).i_(e)}function kR(t,e){t.D_.Be(e),_o(t).s_(e)}function Hg(t){t.D_=new EM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),_o(t).start(),t.b_.A_()}function qg(t){return Ji(t)&&!_o(t).$o()&&t.p_.size>0}function Ji(t){return ee(t).y_.size===0}function xR(t){t.D_=void 0}async function _V(t){t.p_.forEach((e,n)=>{zg(t,e)})}async function wV(t,e){xR(t),qg(t)?(t.b_.m_(e),Hg(t)):t.b_.set("Unknown")}async function EV(t,e,n){if(t.b_.set("Online"),e instanceof gR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pc(t,r)}else if(e instanceof Du?t.D_.We(e):e instanceof mR?t.D_.Ze(e):t.D_.je(e),!n.isEqual(J.min()))try{const r=await RR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Ct.EMPTY_BYTE_STRING,c.snapshotVersion)),kR(s,l);const h=new br(c.target,l,u,c.sequenceNumber);zg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Pc(t,r)}}async function Pc(t,e,n){if(!Il(e))throw e;t.y_.add(1),await Al(t),t.b_.set("Offline"),n||(n=()=>RR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await kh(t)})}function NR(t,e){return e().catch(n=>Pc(t,n,e))}async function xh(t){const e=ee(t),n=ei(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;TV(e);)try{const i=await oV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,IV(e,i)}catch(i){await Pc(e,i)}DR(e)&&OR(e)}function TV(t){return Ji(t)&&t.g_.length<10}function IV(t,e){t.g_.push(e);const n=ei(t);n.Uo()&&n.__&&n.a_(e.mutations)}function DR(t){return Ji(t)&&!ei(t).$o()&&t.g_.length>0}function OR(t){ei(t).start()}async function RV(t){ei(t).l_()}async function SV(t){const e=ei(t);for(const n of t.g_)e.a_(n.mutations)}async function AV(t,e,n){const r=t.g_.shift(),i=Mg.from(r,e,n);await NR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xh(t)}async function CV(t,e){e&&ei(t).__&&await async function(r,i){if(function(o){return vM(o)&&o!==A.ABORTED}(i.code)){const s=r.g_.shift();ei(r).Go(),await NR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xh(r)}}(t,e),DR(t)&&OR(t)}async function N0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.y_.add(3),await Al(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await kh(n)}async function PV(t,e){const n=ee(t);e?(n.y_.delete(2),await kh(n)):e||(n.y_.add(2),await Al(n),n.b_.set("Unknown"))}function _o(t){return t.v_||(t.v_=function(n,r,i){const s=ee(n);return s.P_(),new pV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:_V.bind(null,t),uo:wV.bind(null,t),r_:EV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),qg(t)?Hg(t):t.b_.set("Unknown")):(await t.v_.stop(),xR(t))})),t.v_}function ei(t){return t.C_||(t.C_=function(n,r,i){const s=ee(n);return s.P_(),new mV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:RV.bind(null,t),uo:CV.bind(null,t),c_:SV.bind(null,t),u_:AV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await xh(t)):(await t.C_.stop(),t.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class Wg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Wg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kg(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Il(t))return new b(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Ko(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class D0{constructor(){this.F_=new De(j.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):W():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ro(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kV{constructor(){this.x_=void 0,this.listeners=[]}}class xV{constructor(){this.queries=new vo(e=>tR(e),Ih),this.onlineState="Unknown",this.O_=new Set}}async function LR(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new kV),i)try{s.x_=await n.onListen(r)}catch(o){const a=Kg(o,`Initialization of query '${xp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Gg(n)}async function bR(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NV(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Gg(n)}function DV(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Gg(t){t.O_.forEach(e=>{e.next()})}class MR{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class VR{constructor(e){this.key=e}}class FR{constructor(e){this.key=e}}class OV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=nR(e),this.ra=new bs(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new D0,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Rh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new ro(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new D0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new FR(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new VR(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return ro.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class LV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bV{constructor(e){this.key=e,this.Ia=!1}}class MV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new vo(a=>tR(a),Ih),this.da=new Map,this.Aa=new Set,this.Ra=new De(j.comparator),this.Va=new Map,this.ma=new $g,this.fa={},this.ga=new Map,this.pa=no.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function VV(t,e){const n=KV(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await aV(n.localStore,mr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await FV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&CR(n.remoteStore,o)}return i}async function FV(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,g,f){let y=w.view.sa(g);y.zi&&(y=await P0(_.localStore,w.query,!1).then(({documents:R})=>w.view.sa(R,y)));const m=f&&f.targetChanges.get(w.targetId),E=w.view.applyChanges(y,_.isPrimaryClient,m);return L0(_,w.targetId,E.ca),E.snapshot}(t,h,d,p);const s=await P0(t.localStore,e,!0),o=new OV(e,s.ss),a=o.sa(s.documents),l=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);L0(t,n,u.ca);const c=new LV(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function UV(t,e){const n=ee(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Ih(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),PR(n.remoteStore,r.targetId),Mp(n,r.targetId)}).catch(Tl)):(Mp(n,r.targetId),await bp(n.localStore,r.targetId,!0))}async function $V(t,e,n){const r=GV(t);try{const i=await function(o,a){const l=ee(o),u=Xe.now(),c=a.reduce((p,v)=>p.add(v.key),ie());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=gr(),_=ie();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((g,f)=>{f.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const g=[];for(const f of a){const y=fM(f,h.get(f.key).overlayedDocument);y!=null&&g.push(new ui(f.key,y,KI(y.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:iR(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new De(ue)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Cl(r,i.changes),await xh(r.remoteStore)}catch(i){const s=Kg(i,"Failed to persist write");n.reject(s)}}async function UR(t,e){const n=ee(t);try{const r=await iV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Re(o.Ia):i.removedDocuments.size>0&&(Re(o.Ia),o.Ia=!1))}),await Cl(n,r,e)}catch(r){await Tl(r)}}function O0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Gg(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jV(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new De(j.comparator);o=o.insert(s,_t.newNoDocument(s,J.min()));const a=ie().add(s),l=new Ch(J.min(),new Map,new De(ue),o,a);await UR(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),Qg(r)}else await bp(r.localStore,e,!1).then(()=>Mp(r,e,n)).catch(Tl)}async function BV(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await rV(n.localStore,e);jR(n,r,null),$R(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,i)}catch(i){await Tl(i)}}async function zV(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);jR(r,e,n),$R(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,i)}catch(i){await Tl(i)}}function $R(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function jR(t,e,n){const r=ee(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Mp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||BR(t,r)})}function BR(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(PR(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Qg(t))}function L0(t,e,n){for(const r of n)r instanceof VR?(t.ma.addReference(r.key,e),HV(t,r)):r instanceof FR?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||BR(t,r.key)):W()}function HV(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Qg(t))}function Qg(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new j(Te.fromString(e)),r=t.pa.next();t.Va.set(r,new bV(n)),t.Ra=t.Ra.insert(n,r),CR(t.remoteStore,new br(mr(Og(n.path)),r,"TargetPurposeLimboResolution",Cg.ae))}}async function Cl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=ee(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(u,d=>N.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>N.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Il(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function qV(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await IR(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new b(A.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cl(n,r.ts)}}function WV(t,e){const n=ee(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let i=ie();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function KV(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jV.bind(null,e),e.Ta.r_=NV.bind(null,e.eventManager),e.Ta.Sa=DV.bind(null,e.eventManager),e}function GV(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zV.bind(null,e),e}class b0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ph(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nV(this.persistence,new eV,e.initialUser,this.serializer)}createPersistence(e){return new JM(jg.zr,this.serializer)}createSharedClientState(e){return new uV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>O0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qV.bind(null,this.syncEngine),await PV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xV}()}createDatastore(e){const n=Ph(e.databaseInfo.databaseId),r=function(s){return new fV(s)}(e.databaseInfo);return function(s,o,a,l){return new gV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new vV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>O0(this.syncEngine,n,0),function(){return x0.v()?new x0:new cV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new MV(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Al(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class zR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=HI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await IR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function M0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JV(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>N0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>N0(e.remoteStore,s)),t._onlineComponents=e}function XV(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XV(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await Wd(t,new b0)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Wd(t,new b0);return t._offlineComponents}async function HR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await M0(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await M0(t,new QV))),t._onlineComponents}function ZV(t){return HR(t).then(e=>e.syncEngine)}async function Vp(t){const e=await HR(t),n=e.eventManager;return n.onListen=VV.bind(null,e.syncEngine),n.onUnlisten=UV.bind(null,e.syncEngine),n}function e4(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new zR({next:d=>{o.enqueueAndForget(()=>bR(s,h)),d.fromCache&&l.source==="server"?u.reject(new b(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new MR(a,c,{includeMetadataChanges:!0,W_:!0});return LR(s,h)}(await Vp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function qR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const V0=new Map;/**
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
 */function WR(t,e,n){if(!n)throw new b(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function t4(t,e,n,r){if(e===!0&&r===!0)throw new b(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function F0(t){if(!j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U0(t){if(j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new b(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class $0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}t4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sb;switch(r.type){case"firstParty":return new kb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=V0.get(n);r&&(F("ComponentProvider","Removing Datastore"),V0.delete(n),r.terminate())}(this),Promise.resolve()}}function n4(t,e,n,r={}){var i;const s=(t=Wn(t,Dh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=tT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new Ab(new zI(a,l))}}/**
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
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Gr extends _r{constructor(e,n,r){super(e,n,Og(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new j(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Yg(t,e,...n){if(t=Pe(t),WR("collection","path",e),t instanceof Dh){const r=Te.fromString(e,...n);return U0(r),new Gr(t,null,r)}{if(!(t instanceof Bt||t instanceof Gr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return U0(r),new Gr(t.firestore,null,r)}}function Xg(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=HI.V()),WR("doc","path",e),t instanceof Dh){const r=Te.fromString(e,...n);return F0(r),new Bt(t,null,new j(r))}{if(!(t instanceof Bt||t instanceof Gr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return F0(r),new Bt(t.firestore,t instanceof Gr?t.converter:null,new j(r))}}/**
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
 */class r4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new SR(this,"async_queue_retry"),this.Xa=()=>{const n=qd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Kr;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Il(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Wg.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&W()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function j0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends Dh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new r4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||KR(this),this._firestoreClient.terminate()}}function i4(t,e){const n=typeof t=="object"?t:Qm(),r=typeof t=="string"?t:"(default)",i=eh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=J1("firestore");s&&n4(i,...s)}return i}function Jg(t){return t._firestoreClient||KR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function KR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new jb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,qR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new io(Ct.fromBase64String(e))}catch(n){throw new b(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new io(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zg{constructor(e){this._methodName=e}}/**
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
 */class ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const s4=/^__.*__$/;class o4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rl(e,this.data,n,this.fieldTransforms)}}class GR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class ty{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new ty(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return kc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(QR(this.uu)&&s4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class a4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ph(e)}Ru(e,n,r,i=!1){return new ty({uu:e,methodName:n,Au:r,path:wt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ny(t){const e=t._freezeSettings(),n=Ph(t._databaseId);return new a4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l4(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);ry("Data must be an object, but it was:",o,r);const a=YR(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Fp(e,h,n);if(!o.contains(d))throw new b(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JR(c,d)||c.push(d)}l=new Wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new o4(new Vt(a),l,u)}class Lh extends Zg{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lh}}function u4(t,e,n,r){const i=t.Ru(1,e,n);ry("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();Xi(r,(l,u)=>{const c=iy(e,l,n);u=Pe(u);const h=i.Iu(c);if(u instanceof Lh)s.push(c);else{const d=Pl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wt(s);return new GR(o,a,i.fieldTransforms)}function c4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Fp(e,r,n)],l=[i];if(s.length%2!=0)throw new b(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Fp(e,s[d])),l.push(s[d+1]);const u=[],c=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!JR(u,a[d])){const p=a[d];let v=l[d];v=Pe(v);const _=o.Iu(p);if(v instanceof Lh)u.push(p);else{const w=Pl(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new Wt(u);return new GR(c,h,o.fieldTransforms)}function h4(t,e,n,r=!1){return Pl(n,t.Ru(r?4:3,e))}function Pl(t,e){if(XR(t=Pe(t)))return ry("Unsupported field value:",e,t),YR(t,e);if(t instanceof Zg)return function(r,i){if(!QR(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Pl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Cc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(i.serializer,s)}}if(r instanceof ey)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof io)return{bytesValue:yR(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ug(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Nh(r)}`)}(t,e)}function YR(t,e){const n={};return qI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=Pl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof ey||t instanceof io||t instanceof Bt||t instanceof Zg)}function ry(t,e,n){if(!XR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Fp(t,e,n){if((e=Pe(e))instanceof Oh)return e._internalPath;if(typeof e=="string")return iy(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const d4=new RegExp("[~\\*/\\[\\]]");function iy(t,e,n){if(e.search(d4)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(A.INVALID_ARGUMENT,a+t+l)}function JR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ZR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class f4 extends ZR{data(){return super.data()}}function bh(t,e){return typeof e=="string"?iy(t,e):e instanceof Oh?e._internalPath:e._delegate._internalPath}/**
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
 */function eS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sy{}class oy extends sy{}function tS(t,e,...n){let r=[];e instanceof sy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ay).length,a=s.filter(l=>l instanceof Mh).length;if(o>1||o>0&&a>0)throw new b(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mh extends oy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mh(e,n,r)}_apply(e){const n=this._parse(e);return iS(e._query,n),new _r(e.firestore,e.converter,kp(e._query,n))}_parse(e){const n=ny(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){z0(h,c);const p=[];for(const v of h)p.push(B0(l,s,v));d={arrayValue:{values:p}}}else d=B0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||z0(h,c),d=h4(a,o,h,c==="in"||c==="not-in");return He.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function p4(t,e,n){const r=e,i=bh("where",t);return Mh._create(i,r,n)}class ay extends sy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ay(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)iS(o,l),o=kp(o,l)}(e._query,n),new _r(e.firestore,e.converter,kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ly extends oy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ly(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Os(s,o);return function(u,c){if(Lg(u)===null){const h=Th(u);h!==null&&sS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new yo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function nS(t,e="asc"){const n=e,r=bh("orderBy",t);return ly._create(r,n)}class uy extends oy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new uy(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,Rc(e._query,this._limit,this._limitType))}}function rS(t){return uy._create("limit",t,"F")}function B0(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new b(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eR(e)&&n.indexOf("/")!==-1)throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!j.isDocumentKey(r))throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return h0(t,new j(r))}if(n instanceof Bt)return h0(t,n._key);throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nh(n)}.`)}function z0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iS(t,e){if(e.isInequality()){const r=Th(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new b(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Lg(t);s!==null&&sS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sS(t,e,n){if(!n.isEqual(e))throw new b(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class m4{convertValue(e,n="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ey(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Re(TR(r));const i=new Qa(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function g4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oS extends ZR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ou extends oS{data(e={}){return super.data(e)}}class aS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ou(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:y4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function y4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class cy extends m4{constructor(e){super(),this.firestore=e}convertBytes(e){return new io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function v4(t){t=Wn(t,_r);const e=Wn(t.firestore,zi),n=Jg(e),r=new cy(e);return eS(t._query),e4(n,t._query).then(i=>new aS(e,r,t,i))}function Up(t,e,n,...r){t=Wn(t,Bt);const i=Wn(t.firestore,zi),s=ny(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Oh?c4(s,"updateDoc",t._key,e,n,r):u4(s,"updateDoc",t._key,e),hy(i,[o.toMutation(t._key,Rn.exists(!0))])}function _4(t){return hy(Wn(t.firestore,zi),[new bg(t._key,Rn.none())])}function w4(t,e){const n=Wn(t.firestore,zi),r=Xg(t),i=g4(t.converter,e);return hy(n,[l4(ny(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function E4(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||j0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(j0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=Wn(t.firestore,zi),c=Og(t._key.path),l={next:h=>{e[o]&&e[o](T4(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wn(t,_r);u=Wn(h.firestore,zi),c=h._query;const d=new cy(u);l={next:p=>{e[o]&&e[o](new aS(u,d,h,p))},error:e[o+1],complete:e[o+2]},eS(t._query)}return function(d,p,v,_){const w=new zR(_),g=new MR(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>LR(await Vp(d),g)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>bR(await Vp(d),g))}}(Jg(u),c,a,l)}function hy(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>$V(await ZV(r),i,s)),s.promise}(Jg(t),e)}function T4(t,e,n){const r=n.docs.get(e._key),i=new cy(t);return new oS(t,i,e._key,r,new Qo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){go=i})(Gi),Vi(new Xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zi(new Cb(r.getProvider("auth-internal")),new Nb(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Bn(o0,"4.1.0",e),Bn(o0,"4.1.0","esm2017")})();/**
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
 */const lS="firebasestorage.googleapis.com",uS="storageBucket",I4=2*60*1e3,R4=10*60*1e3;/**
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
 */class Me extends Zt{constructor(e,n,r=0){super(Kd(e),`Firebase Storage: ${n} (${Kd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Kd(t){return"storage/"+t}function dy(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(be.UNKNOWN,t)}function S4(t){return new Me(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function A4(t){return new Me(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function C4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(be.UNAUTHENTICATED,t)}function P4(){return new Me(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function k4(t){return new Me(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function x4(){return new Me(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N4(){return new Me(be.CANCELED,"User canceled the upload/download.")}function D4(t){return new Me(be.INVALID_URL,"Invalid URL '"+t+"'.")}function O4(t){return new Me(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function L4(){return new Me(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uS+"' property when initializing the app?")}function b4(){return new Me(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function M4(){return new Me(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function V4(t){return new Me(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $p(t){return new Me(be.INVALID_ARGUMENT,t)}function cS(){return new Me(be.APP_DELETED,"The Firebase app was deleted.")}function F4(t){return new Me(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function da(t,e){return new Me(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Vo(t){throw new Me(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw O4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(m){m.path_=decodeURIComponent(m.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===lS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let m=0;m<y.length;m++){const E=y[m],R=E.regex.exec(e);if(R){const S=R[E.indices.bucket];let D=R[E.indices.path];D||(D=""),r=new Kt(S,D),E.postModify(r);break}}if(r==null)throw D4(e);return r}}class U4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function j4(t){t(!1)}/**
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
 */function B4(t){return t!==void 0}function z4(t){return typeof t=="object"&&!Array.isArray(t)}function fy(t){return typeof t=="string"||t instanceof String}function H0(t){return py()&&t instanceof Blob}function py(){return typeof Blob<"u"&&!Bx()}function q0(t,e,n,r){if(r<e)throw $p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $p(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Vh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function hS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ki||(ki={}));/**
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
 */function H4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class q4{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new lu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ki.NO_ERROR,l=s.getStatus();if(!a||H4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ki.ABORT;r(!1,new lu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new lu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?cS():N4();o(l)}else{const l=x4();o(l)}};this.canceled_?n(!1,new lu(!1,null,!0)):this.backoffId_=$4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&j4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function W4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function K4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function G4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Y4(t,e,n,r,i,s,o=!0){const a=hS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return G4(u,e),W4(u,n),K4(u,s),Q4(u,r),new q4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function X4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function J4(...t){const e=X4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(py())return new Blob(t);throw new Me(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Z4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eF(t){if(typeof atob>"u")throw V4("base-64");return atob(t)}/**
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
 */const Un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gd{constructor(e,n){this.data=e,this.contentType=n||null}}function tF(t,e){switch(t){case Un.RAW:return new Gd(dS(e));case Un.BASE64:case Un.BASE64URL:return new Gd(fS(t,e));case Un.DATA_URL:return new Gd(rF(e),iF(e))}throw dy()}function dS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nF(t){let e;try{e=decodeURIComponent(t)}catch{throw da(Un.DATA_URL,"Malformed data URL.")}return dS(e)}function fS(t,e){switch(t){case Un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw da(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw da(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eF(e)}catch(i){throw i.message.includes("polyfill")?i:da(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class pS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw da(Un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rF(t){const e=new pS(t);return e.base64?fS(Un.BASE64,e.rest):nF(e.rest)}function iF(t){return new pS(t).contentType}function sF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dr{constructor(e,n){let r=0,i="";H0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(H0(this.data_)){const r=this.data_,i=Z4(r,e,n);return i===null?null:new Dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(py()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(J4.apply(null,n))}else{const n=e.map(o=>fy(o)?tF(Un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function mS(t){let e;try{e=JSON.parse(t)}catch{return null}return z4(e)?e:null}/**
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
 */function oF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function gS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function lF(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||lF}}let uu=null;function uF(t){return!fy(t)||t.length<2?t:gS(t)}function yS(){if(uu)return uu;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return uF(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),uu=t,uu}function cF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function hF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cF(r,t),r}function vS(t,e,n){const r=mS(e);return r===null?null:hF(t,r,n)}function dF(t,e,n,r){const i=mS(e);if(i===null||!fy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=Vh(d,n,r),v=hS({alt:"media",token:u});return p+v})[0]}function fF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class my{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _S(t){if(!t)throw dy()}function pF(t,e){function n(r,i){const s=vS(t,i,e);return _S(s!==null),s}return n}function mF(t,e){function n(r,i){const s=vS(t,i,e);return _S(s!==null),dF(s,i,t.host,t._protocol)}return n}function wS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=P4():i=C4():n.getStatus()===402?i=A4(t.bucket):n.getStatus()===403?i=k4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ES(t){const e=wS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=S4(t.path)),s.serverResponse=i.serverResponse,s}return n}function gF(t,e,n){const r=e.fullServerUrl(),i=Vh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new my(i,s,mF(t,n),o);return a.errorHandler=ES(e),a}function yF(t,e){const n=e.fullServerUrl(),r=Vh(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new my(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ES(e),a}function vF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _F(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vF(null,e)),r}function wF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let m=0;m<2;m++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=_F(e,r,i),c=fF(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Dr.getBlob(h,r,d);if(p===null)throw b4();const v={name:u.fullPath},_=Vh(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,f=new my(_,w,pF(t,n),g);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=wS(e),f}class EF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Vo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TF extends EF{initXhr(){this.xhr_.responseType="text"}}function gy(){return new TF}/**
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
 */class Hi{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hi(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gS(this._location.path)}get storage(){return this._service}get parent(){const e=oF(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw F4(e)}}function IF(t,e,n){t._throwIfRoot("uploadBytes");const r=wF(t.storage,t._location,yS(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,gy).then(i=>({metadata:i,ref:t}))}function RF(t){t._throwIfRoot("getDownloadURL");const e=gF(t.storage,t._location,yS());return t.storage.makeRequestWithTokens(e,gy).then(n=>{if(n===null)throw M4();return n})}function SF(t){t._throwIfRoot("deleteObject");const e=yF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,gy)}function AF(t,e){const n=aF(t._location.path,e),r=new Kt(t._location.bucket,n);return new Hi(t.storage,r)}/**
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
 */function CF(t){return/^[A-Za-z]+:\/\//.test(t)}function PF(t,e){return new Hi(t,e)}function TS(t,e){if(t instanceof yy){const n=t;if(n._bucket==null)throw L4();const r=new Hi(n,n._bucket);return e!=null?TS(r,e):r}else return e!==void 0?AF(t,e):t}function kF(t,e){if(e&&CF(e)){if(t instanceof yy)return PF(t,e);throw $p("To use ref(service, url), the first argument must be a Storage instance.")}else return TS(t,e)}function W0(t,e){const n=e==null?void 0:e[uS];return n==null?null:Kt.makeFromBucketSpec(n,t)}function xF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:tT(i,t.app.options.projectId))}class yy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=lS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I4,this._maxUploadRetryTime=R4,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=W0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=W0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new U4(cS());{const o=Y4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const K0="@firebase/storage",G0="0.11.2";/**
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
 */const IS="storage";function vy(t,e,n){return t=Pe(t),IF(t,e,n)}function _y(t){return t=Pe(t),RF(t)}function RS(t){return t=Pe(t),SF(t)}function Za(t,e){return t=Pe(t),kF(t,e)}function NF(t=Qm(),e){t=Pe(t);const r=eh(t,IS).getImmediate({identifier:e}),i=J1("storage");return i&&DF(r,...i),r}function DF(t,e,n,r={}){xF(t,e,n,r)}function OF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yy(n,r,i,e,Gi)}function LF(){Vi(new Xr(IS,OF,"PUBLIC").setMultipleInstances(!0)),Bn(K0,G0,""),Bn(K0,G0,"esm2017")}LF();const bF={apiKey:"AIzaSyAlEAzDRBlV20NbqITxMNvDGhz3M9UmVS8",authDomain:"nwitter-clone-fed87.firebaseapp.com",projectId:"nwitter-clone-fed87",storageBucket:"nwitter-clone-fed87.appspot.com",messagingSenderId:"647337629269",appId:"1:647337629269:web:7c183c5c9974f06e65e6dc"},wy=iT(bF),Pn=gL(wy),el=NF(wy),kl=i4(wy),MF=K.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,VF=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Qd=K.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;function FF(){const t=Ki(),e=async()=>{confirm("Are you sure you want to log out?")&&(await Pn.signOut(),t("/login"))};return C.jsxs(MF,{children:[C.jsxs(VF,{children:[C.jsx(Oa,{to:"/",children:C.jsx(Qd,{children:C.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:C.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),C.jsx(Oa,{to:"/profile",children:C.jsx(Qd,{children:C.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:C.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),C.jsx(Qd,{onClick:e,className:"log-out",children:C.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[C.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),C.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),C.jsx(wk,{})]})}const UF=K.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$F=K.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`,jF=K.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,BF=K.input`
  display: none;
`,zF=K.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;function HF(){const[t,e]=P.useState(!1),[n,r]=P.useState(""),[i,s]=P.useState(null),o=u=>{r(u.target.value)},a=u=>{const{files:c}=u.target;c&&c.length===1&&s(c[0])},l=async u=>{u.preventDefault();const c=Pn.currentUser;if(!(!c||t||n===""||n.length>180))try{e(!0);const h=await w4(Yg(kl,"tweets"),{tweet:n,createdAt:Date.now(),username:c.displayName||"Anonymous",userId:c.uid});if(i){const d=Za(el,`tweets/${c.uid}/${h.id}`),p=await vy(d,i),v=await _y(p.ref);await Up(h,{photo:v})}r(""),s(null)}catch(h){console.log(h)}finally{e(!1)}};return C.jsxs(UF,{onSubmit:l,children:[C.jsx($F,{required:!0,rows:5,maxLength:180,onChange:o,value:n,placeholder:"What is happening?!"}),C.jsx(jF,{htmlFor:"file",children:i?"Photo added ✅":"Add photo"}),C.jsx(BF,{onChange:a,type:"file",id:"file",accept:"image/*"}),C.jsx(zF,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const qF=K.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,WF=K.textarea`
  width: 100%;
  padding: 20px;
  background-color: black;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  resize: none;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`,KF=K.label`
  padding: 10px 0px;
  border: 1px solid currentColor;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #1d9bf0;
  text-align: center;
  cursor: pointer;
`,GF=K.input`
  display: none;
`,QF=K.input`
  padding: 10px 0px;
  background-color: #1d9bf0;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;function YF({photo:t,tweet:e,id:n,setIsEditing:r}){const[i,s]=P.useState(!1),[o,a]=P.useState(e),[l,u]=P.useState(null),c=p=>{a(p.target.value)},h=p=>{const{files:v}=p.target;if(v&&v.length===1){if(v[0].size>1024*1024){alert("oooops! too much size!!");return}u(v[0])}},d=async p=>{p.preventDefault();const v=Pn.currentUser;if(!(!v||i||o===""||o.length>180))try{s(!0);const _=Xg(kl,"tweets",n);if(await Up(_,{tweet:o}),l){if(t){const y=Za(el,`tweets/${v.uid}/${n}`);await RS(y)}const w=Za(el,`tweets/${v.uid}/${n}`),g=await vy(w,l),f=await _y(g.ref);await Up(_,{photo:f})}a(""),u(null),r(!1)}catch(_){console.log(_)}finally{s(!1)}};return C.jsxs(qF,{onSubmit:d,children:[C.jsx(WF,{required:!0,rows:5,maxLength:180,onChange:c,value:o}),C.jsx(KF,{htmlFor:`editFile${n}`,children:l?"Photo added ✅":t?"Change photo":"Add photo"}),C.jsx(GF,{onChange:h,id:`editFile${n}`,type:"file",accept:"image/*"}),C.jsx(QF,{type:"submit",value:i?"Editing...":"Edit Tweet"})]})}const XF=K.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgb(255 255 255 / 0.5);
  border-radius: 15px;
`,Q0=K.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:last-child:not(:first-child) {
    align-items: center;
  }
`,JF=K.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`,ZF=K.span`
  font-weight: 600;
  font-size: 15px;
`,e2=K.p`
  margin: 10px 0px;
  font-size: 18px;
  line-height: 1.4;
`,t2=K.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,n2=K.button`
  padding: 5px 10px;
  background-color: #666;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`,r2=K.button`
  padding: 5px 10px;
  background-color: #1d9bf0;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;function SS({userId:t,username:e,photo:n,tweet:r,id:i}){const[s,o]=P.useState(!1),a=Pn.currentUser,l=async()=>{if(!(!confirm("Are you sure you want to delete this tweet?")||(a==null?void 0:a.uid)!==t))try{if(await _4(Xg(kl,"tweets",i)),n){const h=Za(el,`tweets/${a.uid}/${i}`);await RS(h)}}catch(h){console.log(h)}finally{}},u=()=>o(c=>!c);return C.jsxs(XF,{children:[C.jsxs(Q0,{children:[C.jsx(ZF,{children:e}),s?C.jsx(YF,{tweet:r,photo:n,id:i,setIsEditing:u}):C.jsx(e2,{children:r}),(a==null?void 0:a.uid)===t?C.jsxs(t2,{children:[C.jsx(n2,{onClick:l,children:"Delete"}),C.jsx(r2,{onClick:u,children:s?"Cancel":"Edit"})]}):null]}),n?C.jsx(Q0,{children:C.jsx(JF,{src:n})}):null]})}const i2=K.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;function s2(){const[t,e]=P.useState([]);return P.useEffect(()=>{let n=null;return(()=>{const i=tS(Yg(kl,"tweets"),nS("createdAt","desc"),rS(25));n=E4(i,s=>{const o=s.docs.map(a=>{const{tweet:l,createdAt:u,userId:c,username:h,photo:d}=a.data();return{tweet:l,createdAt:u,userId:c,username:h,photo:d,id:a.id}});e(o)})})(),()=>{n&&n()}},[]),C.jsx(i2,{children:t.map(n=>C.jsx(SS,{...n},n.id))})}const o2=K.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;function a2(){return C.jsxs(o2,{children:[C.jsx(HF,{}),C.jsx(s2,{})]})}const l2=K.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,u2=K.label`
  width: 80px;
  overflow: hidden;
  height: 80px;
  border-radius: 50%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`,c2=K.img`
  width: 100%;
`,h2=K.input`
  display: none;
`,Y0=K.span`
  font-size: 22px;
`,d2=K.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,f2=K.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,X0=K.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,p2=K.label`
  color: white;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #1d9bf0;
  }
`,m2=K.button`
  display: none;
`,g2=K.input`
  background-color: transparent;
  text-align: center;
  color: #1d9bf0;
  font-size: 22px;
  border: none;
  caret-color: #1d9bf0;
  &:focus {
    outline: none;
  }
`;function y2(){const t=Pn.currentUser,[e,n]=P.useState(!1),[r,i]=P.useState((t==null?void 0:t.displayName)??""),[s,o]=P.useState((t==null?void 0:t.photoURL)??""),[a,l]=P.useState([]),u=P.useRef(null),c=()=>{i((t==null?void 0:t.displayName)??""),n(!1)},h=async()=>{t&&await hp(t,{displayName:r!=null&&r.trim()?r:t.displayName}),n(!1)},d=async g=>{g.key==="Enter"?await h():g.key==="Escape"&&c()},p=g=>{i(g.target.value)},v=()=>{n(!0)},_=async g=>{const{files:f}=g.target;if(!t||!f||f.length!==1)return;const y=f[0],m=Za(el,`avatars/${t==null?void 0:t.uid}`),E=await vy(m,y),R=await _y(E.ref);o(R),await hp(t,{photoURL:R})},w=async()=>{const g=tS(Yg(kl,"tweets"),p4("userId","==",t==null?void 0:t.uid),nS("createdAt","desc"),rS(25)),y=(await v4(g)).docs.map(m=>{const{tweet:E,createdAt:R,userId:S,username:D,photo:Y}=m.data();return{id:m.id,tweet:E,createdAt:R,userId:S,username:D,photo:Y}});l(y)};return P.useEffect(()=>{w()},[]),P.useLayoutEffect(()=>{e&&u.current!==null&&u.current.focus()},[e]),C.jsxs(l2,{children:[C.jsx(u2,{htmlFor:"avatar",children:s?C.jsx(c2,{src:s}):C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:C.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})}),C.jsx(h2,{onChange:_,id:"avatar",type:"file",accept:"image/*"}),C.jsxs(f2,{children:[C.jsx(X0,{children:e?C.jsx(Y0,{children:C.jsx(g2,{placeholder:`${(t==null?void 0:t.displayName)??""} (Cancel: esc)`,onChange:p,onKeyDown:d,ref:u,id:"name"})}):C.jsx(Y0,{children:t==null?void 0:t.displayName})}),C.jsx(X0,{children:e?null:C.jsxs(p2,{htmlFor:"edit-button",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:C.jsx("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"})}),C.jsx(m2,{id:"edit-button",onClick:v})]})})]}),C.jsx(d2,{children:a.map(g=>C.jsx(SS,{...g},g.id))})]})}const Ey=K.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,Ty=K.h1`
  font-size: 42px;
`,Iy=K.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,sr=K.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`,Ry=K.span`
  font-weight: 600;
  color: tomato;
`,jp=K.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`,v2=K.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,_2=K.img`
  height: 25px;
`;function AS(){const t=Ki(),e=async()=>{try{const n=new Zn;await SO(Pn,n),t("/")}catch(n){console.error(n)}};return C.jsxs(v2,{onClick:e,children:[C.jsx(_2,{src:"/github-logo.svg"}),"Continue with Github"]})}function w2(){const t=Ki(),[e,n]=P.useState(!1),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(""),u=h=>{const{target:{name:d,value:p}}=h;d==="email"?i(p):d==="password"&&o(p)},c=async h=>{if(h.preventDefault(),l(""),!(e||r===""||s===""))try{n(!0),await eO(Pn,r,s),t("/")}catch(d){d instanceof Zt&&l(d.message)}finally{n(!1)}};return C.jsxs(Ey,{children:[C.jsx(Ty,{children:"Log into 𝕏"}),C.jsxs(Iy,{onSubmit:c,children:[C.jsx(sr,{onChange:u,name:"email",value:r,placeholder:"Email",type:"email",required:!0}),C.jsx(sr,{onChange:u,value:s,name:"password",placeholder:"Password",type:"password",required:!0}),C.jsx(sr,{type:"submit",value:e?"Loading...":"Log in"})]}),a!==""?C.jsx(Ry,{children:a}):null,C.jsxs(jp,{children:["Forgot password? ",C.jsx(Oa,{to:"/reset-password",children:"Reset password →"})]}),C.jsxs(jp,{children:["Don't have an account?"," ",C.jsx(Oa,{to:"/create-account",children:"Create one →"})]}),C.jsx(AS,{})]})}function E2(){const t=Ki(),[e,n]=P.useState(!1),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(""),[u,c]=P.useState(""),h=p=>{const{target:{name:v,value:_}}=p;v==="name"?i(_):v==="email"?o(_):v==="password"&&l(_)},d=async p=>{if(p.preventDefault(),c(""),!(e||r===""||s===""||a===""))try{n(!0);const v=await ZD(Pn,s,a);await tO(v.user),await hp(v.user,{displayName:r}),t("/")}catch(v){v instanceof Zt&&c(v.message)}finally{n(!1)}};return C.jsxs(Ey,{children:[C.jsx(Ty,{children:"Join 𝕏"}),C.jsxs(Iy,{onSubmit:d,children:[C.jsx(sr,{onChange:h,name:"name",value:r,placeholder:"Name",type:"text",required:!0}),C.jsx(sr,{onChange:h,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),C.jsx(sr,{onChange:h,value:a,name:"password",placeholder:"Password",type:"password",required:!0}),C.jsx(sr,{type:"submit",value:e?"Loading...":"Create Account"})]}),u!==""?C.jsx(Ry,{children:u}):null,C.jsxs(jp,{children:["Already have an account? ",C.jsx(Oa,{to:"/login",children:"Log in →"})]}),C.jsx(AS,{})]})}var CS=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},PS=Wm(J0||(J0=CS([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));K1(Z0||(Z0=CS(["",""],["",""])),PS);var J0,Z0;const T2=K.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,I2=K.span`
  font-size: 24px;
`;function R2(){return C.jsx(T2,{children:C.jsx(I2,{children:"Loading..."})})}function S2({children:t}){return Pn.currentUser===null?C.jsx(_k,{to:"/login"}):t}function A2(){const[t,e]=P.useState({email:""}),[n,r]=P.useState(""),[i,s]=P.useState(!1),o=Ki(),{email:a}=t,l=c=>{const{target:{name:h,value:d}}=c;e({...t,[h]:d})},u=async c=>{if(c.preventDefault(),r(""),!(i||a===""))try{s(!0),await JD(Pn,a),o("/login")}catch(h){h instanceof Zt&&r(h.message)}finally{s(!1)}};return C.jsxs(Ey,{children:[C.jsx(Ty,{children:"Reset Your Password"}),C.jsxs(Iy,{onSubmit:u,children:[C.jsx(sr,{onChange:l,name:"email",value:a,placeholder:"Enter Your Email",type:"email",required:!0}),C.jsx(sr,{type:"submit",value:i?"Loading...":"Send Reset Email"})]}),n!==""?C.jsx(Ry,{children:n}):null]})}const C2=Ck([{path:"/",element:C.jsx(S2,{children:C.jsx(FF,{})}),children:[{path:"",element:C.jsx(a2,{})},{path:"profile",element:C.jsx(y2,{})}]},{path:"/login",element:C.jsx(w2,{})},{path:"/create-account",element:C.jsx(E2,{})},{path:"/reset-password",element:C.jsx(A2,{})}]),P2=K1`
  ${PS};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,k2=K.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function x2(){const[t,e]=P.useState(!0),n=async()=>{await Pn.authStateReady(),e(!1)};return P.useEffect(()=>{n()},[]),C.jsxs(k2,{children:[C.jsx(P2,{}),t?C.jsx(R2,{}):C.jsx(yk,{router:C2})]})}Yd.createRoot(document.getElementById("root")).render(C.jsx(wn.StrictMode,{children:C.jsx(x2,{})}));
