"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[6942],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(7294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=l(t),h=c,s=k["".concat(a,".").concat(h)]||k[h]||d[h]||o;return t?n.createElement(s,u(u({ref:r},p),{},{components:t})):n.createElement(s,u({ref:r},p))}));function h(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,u=new Array(o);u[0]=k;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:c,u[1]=i;for(var l=2;l<o;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2032:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return k}});var n=t(3117),c=t(102),o=(t(7294),t(3905)),u=["components"],i={id:"CheckupLogBuilder",title:"CheckupLogBuilder"},a=void 0,l={unversionedId:"api/@checkup/core/CheckupLogBuilder",id:"api/@checkup/core/CheckupLogBuilder",isDocsHomePage:!1,title:"CheckupLogBuilder",description:"CheckupLogBuilder \u21d0 SarifLogBuilder",source:"@site/docs/api/@checkup/core/CheckupLogBuilder.md",sourceDirName:"api/@checkup/core",slug:"/api/@checkup/core/CheckupLogBuilder",permalink:"/docs/api/@checkup/core/CheckupLogBuilder",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/api/@checkup/core/CheckupLogBuilder.md",tags:[],version:"current",frontMatter:{id:"CheckupLogBuilder",title:"CheckupLogBuilder"},sidebar:"apiSidebar",previous:{title:"CheckupError",permalink:"/docs/api/@checkup/core/CheckupError"},next:{title:"CheckupLogParser",permalink:"/docs/api/@checkup/core/CheckupLogParser"}},p=[{value:"CheckupLogBuilder \u21d0 <code>SarifLogBuilder</code>",id:"checkuplogbuilder--sariflogbuilder",children:[{value:"new CheckupLogBuilder()",id:"new-checkuplogbuilder",children:[],level:3},{value:"checkupLogBuilder.annotate()",id:"checkuplogbuilderannotate",children:[],level:3}],level:2}],d={toc:p};function k(e){var r=e.components,t=(0,c.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"CheckupLogBuilder"}),(0,o.kt)("h2",{id:"checkuplogbuilder--sariflogbuilder"},"CheckupLogBuilder \u21d0 ",(0,o.kt)("code",null,"SarifLogBuilder")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"SarifLogBuilder")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#CheckupLogBuilder"},"CheckupLogBuilder")," \u21d0 ",(0,o.kt)("code",null,"SarifLogBuilder"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new_CheckupLogBuilder_new"},"new CheckupLogBuilder()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#CheckupLogBuilder+annotate"},".annotate()"))))),(0,o.kt)("a",{name:"new_CheckupLogBuilder_new"}),(0,o.kt)("h3",{id:"new-checkuplogbuilder"},"new CheckupLogBuilder()"),(0,o.kt)("p",null,"A class that simplifies the building of a checkup SARIF log."),(0,o.kt)("a",{name:"CheckupLogBuilder+annotate"}),(0,o.kt)("h3",{id:"checkuplogbuilderannotate"},"checkupLogBuilder.annotate()"),(0,o.kt)("p",null,"Annotates the log with any data that is acquired via dynamic invocations.\nThis supplements the data acquired statically, and populated in the constructor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#CheckupLogBuilder"},(0,o.kt)("code",null,"CheckupLogBuilder"))))}k.isMDXComponent=!0}}]);