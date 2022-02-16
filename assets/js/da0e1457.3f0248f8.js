"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[3263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=p(r),s=n,d=f["".concat(c,".").concat(s)]||f[s]||u[s]||a;return r?o.createElement(d,l(l({ref:t},m),{},{components:r})):o.createElement(d,l({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5256:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>m});var o=r(7462),n=(r(7294),r(3905));const a={id:"log-more.format",title:"format variable",hide_title:!0},l=void 0,i={unversionedId:"log-more.format",id:"log-more.format",title:"format variable",description:"log-more &gt; format",source:"@site/docs/log-more.format.md",sourceDirName:".",slug:"/log-more.format",permalink:"/log-right/docs/log-more.format",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-more.format.md",tags:[],version:"current",frontMatter:{id:"log-more.format",title:"format variable",hide_title:!0}},c=[{value:"format variable",id:"format-variable",children:[],level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/log-right/docs/log-more"},"log-more")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/log-right/docs/log-more.format"},"format")),(0,n.kt)("h2",{id:"format-variable"},"format variable"),(0,n.kt)("p",null,"A helper function that will handle converting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Result")," objects returned from a failed process into a ",(0,n.kt)("inlineCode",{parentName:"p"},"Report")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"format: <TFormatted extends FormattedData = FormattedData>(result: Result) => Result<Report<TFormatted>>\n")))}m.isMDXComponent=!0}}]);