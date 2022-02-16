"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[1502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=a(r),s=o,d=u["".concat(c,".").concat(s)]||u[s]||f[s]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var g={};for(var c in t)hasOwnProperty.call(t,c)&&(g[c]=t[c]);g.originalType=e,g.mdxType="string"==typeof e?e:o,l[1]=g;for(var a=2;a<i;a++)l[a]=r[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1364:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>g,toc:()=>c,default:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"log-right.logeventconfig",title:"LogEventConfig type",hide_title:!0},l=void 0,g={unversionedId:"log-right.logeventconfig",id:"log-right.logeventconfig",title:"LogEventConfig type",description:"log-right &gt; LogEventConfig",source:"@site/docs/log-right.logeventconfig.md",sourceDirName:".",slug:"/log-right.logeventconfig",permalink:"/log-right/fr/docs/log-right.logeventconfig",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.logeventconfig.md",tags:[],version:"current",frontMatter:{id:"log-right.logeventconfig",title:"LogEventConfig type",hide_title:!0}},c=[{value:"LogEventConfig type",id:"logeventconfig-type",children:[],level:2}],a={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right"},"log-right")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right.logeventconfig"},"LogEventConfig")),(0,o.kt)("h2",{id:"logeventconfig-type"},"LogEventConfig type"),(0,o.kt)("p",null,"A type to represent a full log event sequence: - 1. A Result is returned from a function or process - 2. The Result is used to create (or format) a Report - 3. The Report is captured to help identify an issue or a more general event"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type LogEventConfig<TResultConfig extends ResultConfig = ResultConfig, TReportConfig extends ReportConfig = ReportConfig> = LogEventConfigBase<TResultConfig, TReportConfig>;\n")),(0,o.kt)("b",null,"References:")," [ResultConfig](/log-right/fr/docs/log-right.resultconfig), [ReportConfig](/log-right/fr/docs/log-right.reportconfig)")}p.isMDXComponent=!0}}]);