"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[7468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,s=m["".concat(c,".").concat(g)]||m[g]||f[g]||a;return r?n.createElement(s,i(i({ref:t},u),{},{components:r})):n.createElement(s,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1941:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"log-right.format",title:"format variable",hide_title:!0},i=void 0,l={unversionedId:"log-right.format",id:"log-right.format",title:"format variable",description:"log-right &gt; format",source:"@site/docs/log-right.format.md",sourceDirName:".",slug:"/log-right.format",permalink:"/log-right/docs/log-right.format",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.format.md",tags:[],version:"current",frontMatter:{id:"log-right.format",title:"format variable",hide_title:!0}},c=[{value:"format variable",id:"format-variable",children:[],level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-right"},"log-right")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.format"},"format")),(0,o.kt)("h2",{id:"format-variable"},"format variable"),(0,o.kt)("p",null,"A helper function that will handle converting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," objects returned from a failed process into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Report")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"format: <TFormatted extends FormattedData = FormattedData>(result: Result) => Result<Report<TFormatted>>\n")))}u.isMDXComponent=!0}}]);