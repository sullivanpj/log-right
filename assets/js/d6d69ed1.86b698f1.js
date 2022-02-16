"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[4579],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(g,a(a({ref:e},p),{},{components:r})):n.createElement(g,a({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4217:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>l,toc:()=>c,default:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"log-right.formatfunction",title:"FormatFunction type",hide_title:!0},a=void 0,l={unversionedId:"log-right.formatfunction",id:"log-right.formatfunction",title:"FormatFunction type",description:"log-right &gt; FormatFunction",source:"@site/docs/log-right.formatfunction.md",sourceDirName:".",slug:"/log-right.formatfunction",permalink:"/log-right/docs/log-right.formatfunction",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.formatfunction.md",tags:[],version:"current",frontMatter:{id:"log-right.formatfunction",title:"FormatFunction type",hide_title:!0}},c=[{value:"FormatFunction type",id:"formatfunction-type",children:[],level:2}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-right"},"log-right")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.formatfunction"},"FormatFunction")),(0,o.kt)("h2",{id:"formatfunction-type"},"FormatFunction type"),(0,o.kt)("p",null,"The function definition for any implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),". Custom user-defined methods should be sure to align with this."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type FormatFunction<TReturned = unknown, TResult extends Result<TReturned> = Result<TReturned>, TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TResultFormat extends Result<TReport> = Result<TReport>> = FormatFunctionBase<TReturned, TResult, TFormatted, TReport, TResultFormat>;\n")),(0,o.kt)("b",null,"References:")," [Result](/log-right/docs/log-right.result)")}p.isMDXComponent=!0}}]);