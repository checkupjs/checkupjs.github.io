"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[9813],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),s=n(2389),l=n(9443);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(9521),u=n(6010),c="tabItem_1uMI";function p(e){var t,n,r,s=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),y=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,a.useState)(k),N=w[0],x=w[1],O=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&g.some((function(e){return e.value===E}))&&x(E)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==N&&(j(t),x(r),null!=m&&T(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1161:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),l=n(6396),o=n(8215),i=["components"],u={id:"generating-results",title:"Generating Results"},c=void 0,p={unversionedId:"guides/generating-results",id:"guides/generating-results",isDocsHomePage:!1,title:"Generating Results",description:"Results are generated by the Task. The Task is responsible for populating the results array with the results of the analysis.",source:"@site/docs/guides/generating-results.mdx",sourceDirName:"guides",slug:"/guides/generating-results",permalink:"/docs/guides/generating-results",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/guides/generating-results.mdx",tags:[],version:"current",frontMatter:{id:"generating-results",title:"Generating Results"},sidebar:"guidesSidebar",previous:{title:"Using Analyzers",permalink:"/docs/guides/analyzers"},next:{title:"Analyzing Results",permalink:"/docs/guides/analyzing-results"}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Results are generated by the Task. The Task is responsible for populating the results array with the results of the analysis."),(0,s.kt)("p",null,"The Task base class provides some convenience methods for generating results. The ",(0,s.kt)("inlineCode",{parentName:"p"},"addResult")," method attempts to simplify the process of adding\nresults such that you don't have to know the specifics of SARIF in order to successfully generate meaningful output."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For more details about SARIF, see the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html"},"SARIF Specification"),"."))),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/tasks/demo-task.ts"',title:'"/tasks/demo-task.ts"'},"import { BaseTask, Task } from '@checkup/core';\nimport { Result } from 'sarif';\n\nexport default class DemoTask extends BaseTask implements Task {\n  taskName = 'demo-task';\n  taskDisplayName = 'Deme Task';\n  description = 'A task for demonstration purposes';\n  category = 'best practices';\n\n  async run(): Promise<Result[]> {\n    let results = await this.getData();\n\n    for (let result of results) {\n      this.addResult({\n        messageText: result.message,\n        level: 'fail',\n        kind: 'error',\n        {\n          location: {\n            uri: result.uri,\n            startLine: result.line,\n            startColumn: result.column,\n            endLine: result.line,\n            endColumn: result.column\n          }\n        }\n      });\n    }\n\n    return this.results;\n  }\n}\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/tasks/demo-task.js"',title:'"/tasks/demo-task.js"'},"const { BaseTask } = require('@checkup/core');\n\nmodule.exports = class <%- taskClass %> extends BaseTask {\n  taskName = 'demo-task';\n  taskDisplayName = 'Demo Task';\n  description = 'A task for demonstration purposes';\n  category = 'best practices';\n\n  async run() {\n    let results = await this.getData();\n\n    for (let result of results) {\n      this.addResult({\n        messageText: result.message,\n        level: 'fail',\n        kind: 'error',\n        {\n          location: {\n            uri: result.uri,\n            startLine: result.line,\n            startColumn: result.column,\n            endLine: result.line,\n            endColumn: result.column\n          }\n        }\n      });\n    }\n\n    return this.results;\n  }\n}\n")))))}f.isMDXComponent=!0}}]);