"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[8407],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,d=e.groupId,p=e.className,f=r.Children.toArray(e.children),m=null!=c?c:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),g=b.tabGroupChoices,y=b.setTabGroupChoices,h=(0,r.useState)(v),w=h[0],k=h[1],O=[];if(null!=d){var x=g[d];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&k(x)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),r=m[n].value;k(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:S,onClick:S},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},6132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),u=["components"],s={id:"analyzing-results",title:"Analyzing Results"},c=void 0,d={unversionedId:"guides/analyzing-results",id:"guides/analyzing-results",isDocsHomePage:!1,title:"Analyzing Results",description:"Results are generated in SARIF format. SARIF is based on JSON and can be viewed in any text editor. For a richer experience the following open-source viewers are provided.",source:"@site/docs/guides/analyzing-results.mdx",sourceDirName:"guides",slug:"/guides/analyzing-results",permalink:"/docs/guides/analyzing-results",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/guides/analyzing-results.mdx",tags:[],version:"current",frontMatter:{id:"analyzing-results",title:"Analyzing Results"},sidebar:"guidesSidebar",previous:{title:"Generating Results",permalink:"/docs/guides/generating-results"}},p=[{value:"Viewers",id:"viewers",children:[]}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Results are generated in SARIF format. SARIF is based on JSON and can be viewed in any text editor. For a richer experience the following open-source viewers are provided."),(0,i.kt)("h2",{id:"viewers"},"Viewers"),(0,i.kt)(o.Z,{groupId:"viewers",defaultValue:"vs",values:[{label:"Visual Studio",value:"vs"},{label:"Visual Studio Code",value:"vscode"},{label:"React Component",value:"react"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vs",mdxType:"TabItem"},(0,i.kt)("div",{style:{"padding-bottom":"20px"}},(0,i.kt)("img",{src:"/img/VSViewer.thumbnail.png"})),(0,i.kt)("a",{class:"button button--primary button--lg",href:"https://marketplace.visualstudio.com/items?itemName=WDGIS.MicrosoftSarifViewer"},"Install")),(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("div",{style:{"padding-bottom":"20px"}},(0,i.kt)("img",{src:"/img/VSCodeViewer.thumbnail.png"})),(0,i.kt)("a",{class:"button button--primary button--lg",href:"https://marketplace.visualstudio.com/items?itemName=MS-SarifVSCode.sarif-viewer"},"Install")),(0,i.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("div",{style:{"padding-bottom":"20px"}},(0,i.kt)("img",{src:"/img/WebViewer.thumbnail.jpeg",style:{width:"360px"}})),(0,i.kt)("a",{class:"button button--primary button--lg",href:"https://microsoft.github.io/sarif-web-component/"},"Try"))))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);