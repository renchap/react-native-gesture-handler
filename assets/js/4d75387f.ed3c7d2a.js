"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[8289],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),g=a,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(9668),a=(r(6540),r(5680));const i={id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView",sidebar_position:12},o=void 0,s={unversionedId:"gesture-handlers/nativeview-gh",id:"gesture-handlers/nativeview-gh",title:"NativeViewGestureHandler",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/docs/gesture-handlers/nativeview-gh.md",sourceDirName:"gesture-handlers",slug:"/gesture-handlers/nativeview-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/nativeview-gh",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gesture-handlers/nativeview-gh.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Force touch",permalink:"/react-native-gesture-handler/docs/gesture-handlers/force-gh"},next:{title:"createNativeWrapper()",permalink:"/react-native-gesture-handler/docs/gesture-handlers/create-native-wrapper"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>shouldActivateOnStart</code> (<strong>Android only</strong>)",id:"shouldactivateonstart-android-only",level:3},{value:"<code>disallowInterruption</code>",id:"disallowinterruption",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Consider using the new ",(0,a.yg)("a",{parentName:"p",href:"/docs/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,a.yg)("a",{parentName:"p",href:"/docs/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,a.yg)("p",null,"A gesture handler that allows other touch handling components to participate in\nRNGH's gesture system."),(0,a.yg)("p",null,"Used by ",(0,a.yg)("a",{parentName:"p",href:"/docs/gesture-handlers/create-native-wrapper"},(0,a.yg)("inlineCode",{parentName:"a"},"createNativeWrapper()")),"."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to ",(0,a.yg)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," component:"),(0,a.yg)("h3",{id:"shouldactivateonstart-android-only"},(0,a.yg)("inlineCode",{parentName:"h3"},"shouldActivateOnStart")," (",(0,a.yg)("strong",{parentName:"h3"},"Android only"),")"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", underlying handler will activate unconditionally when in ",(0,a.yg)("inlineCode",{parentName:"p"},"BEGAN")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"UNDETERMINED")," state."),(0,a.yg)("h3",{id:"disallowinterruption"},(0,a.yg)("inlineCode",{parentName:"h3"},"disallowInterruption")),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", cancels all other gesture handlers when this ",(0,a.yg)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," receives an ",(0,a.yg)("inlineCode",{parentName:"p"},"ACTIVE")," state event."))}u.isMDXComponent=!0}}]);