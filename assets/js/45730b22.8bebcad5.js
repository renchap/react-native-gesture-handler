"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6970],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>v});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,v=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(9668),a=(r(6540),r(5680));const i={id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()",sidebar_position:13},o=void 0,s={unversionedId:"gesture-handlers/create-native-wrapper",id:"gesture-handlers/create-native-wrapper",title:"createNativeWrapper",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/docs/gesture-handlers/create-native-wrapper.md",sourceDirName:"gesture-handlers",slug:"/gesture-handlers/create-native-wrapper",permalink:"/react-native-gesture-handler/docs/gesture-handlers/create-native-wrapper",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gesture-handlers/create-native-wrapper.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"NativeView",permalink:"/react-native-gesture-handler/docs/gesture-handlers/nativeview-gh"},next:{title:"Guides",permalink:"/react-native-gesture-handler/docs/category/guides"}},c={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Component",id:"component",level:3},{value:"config",id:"config",level:3},{value:"Returns",id:"returns",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Consider using the new ",(0,a.yg)("a",{parentName:"p",href:"/docs/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,a.yg)("a",{parentName:"p",href:"/docs/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,a.yg)("p",null,"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH's\ngesture system."),(0,a.yg)("h2",{id:"arguments"},"Arguments"),(0,a.yg)("h3",{id:"component"},"Component"),(0,a.yg)("p",null,"The component we want to wrap."),(0,a.yg)("h3",{id:"config"},"config"),(0,a.yg)("p",null,"Config is an object with properties that can be used on ",(0,a.yg)("a",{parentName:"p",href:"/docs/gesture-handlers/nativeview-gh"},(0,a.yg)("inlineCode",{parentName:"a"},"NativeViewGestureHandler"))),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,"Wrapped component."))}d.isMDXComponent=!0}}]);