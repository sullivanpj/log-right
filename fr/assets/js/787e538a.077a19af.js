"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[6966],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},g=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,l(l({ref:e},g),{},{components:n})):r.createElement(f,l({ref:e},g))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1947:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,toc:()=>s,default:()=>g});var r=n(7462),a=(n(7294),n(3905));const i={id:"installation",title:"Installation",hide_title:!1,tags:["learning","installation"]},l="Installation",o={unversionedId:"learning/installation",id:"learning/installation",title:"Installation",description:"The purpose of this document is to outline the installation process for the log-right package.",source:"@site/docs/learning/installation.md",sourceDirName:"learning",slug:"/learning/installation",permalink:"/log-right/fr/docs/learning/installation",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/learning/installation.md",tags:[{label:"learning",permalink:"/log-right/fr/docs/tags/learning"},{label:"installation",permalink:"/log-right/fr/docs/tags/installation"}],version:"current",frontMatter:{id:"installation",title:"Installation",hide_title:!1,tags:["learning","installation"]},sidebar:"learningSidebar",previous:{title:"Introduction",permalink:"/log-right/fr/docs/learning/introduction"},next:{title:"Getting Started",permalink:"/log-right/fr/docs/learning/getting-started"}},s=[{value:"Installing the Log-Right Package",id:"installing-the-log-right-package",children:[],level:2}],c={toc:s};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The purpose of this document is to outline the installation process for the ",(0,a.kt)("inlineCode",{parentName:"p"},"log-right")," package."),(0,a.kt)("h2",{id:"installing-the-log-right-package"},"Installing the Log-Right Package"),(0,a.kt)("p",null,"Open a command prompt inside of your current project's directory and run the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i log-right --save\n# or\n$ yarn add -D log-right\n")),(0,a.kt)("p",null,"If the above command was executed successfully, the package should be installed correctly. ",(0,a.kt)("strong",{parentName:"p"},"Congrats!")," You are now ready to ",(0,a.kt)("a",{parentName:"p",href:"/log-right/fr/docs/learning/getting-started"},"get started")," using log-right."))}g.isMDXComponent=!0}}]);