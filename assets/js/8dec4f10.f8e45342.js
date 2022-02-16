"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[9660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),a=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},p=function(e){var t=a(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=a(r),h=n,u=s["".concat(c,".").concat(h)]||s[h]||f[h]||i;return r?o.createElement(u,g(g({ref:t},p),{},{components:r})):o.createElement(u,g({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,g=new Array(i);g[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,g[1]=l;for(var a=2;a<i;a++)g[a]=r[a];return o.createElement.apply(null,g)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5172:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>g,metadata:()=>l,toc:()=>c,default:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={id:"log-right.logrightconfig",title:"LogRightConfig type",hide_title:!0},g=void 0,l={unversionedId:"log-right.logrightconfig",id:"log-right.logrightconfig",title:"LogRightConfig type",description:"log-right &gt; LogRightConfig",source:"@site/docs/log-right.logrightconfig.md",sourceDirName:".",slug:"/log-right.logrightconfig",permalink:"/log-right/docs/log-right.logrightconfig",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.logrightconfig.md",tags:[],version:"current",frontMatter:{id:"log-right.logrightconfig",title:"LogRightConfig type",hide_title:!0}},c=[{value:"LogRightConfig type",id:"logrightconfig-type",children:[],level:2}],a={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/log-right/docs/log-right"},"log-right")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.logrightconfig"},"LogRightConfig")),(0,n.kt)("h2",{id:"logrightconfig-type"},"LogRightConfig type"),(0,n.kt)("p",null,"Specifications for the base level of configuration parameters log-right accepts"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type LogRightConfig<TLogEventConfig extends LogEventConfig = LogEventConfig, TUserConfig extends UserConfig = UserConfig> = LogRightConfigBase<TLogEventConfig, TUserConfig>;\n")),(0,n.kt)("b",null,"References:")," [LogEventConfig](/log-right/docs/log-right.logeventconfig)")}p.isMDXComponent=!0}}]);