"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[4007],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(o,".").concat(d)]||f[d]||s[d]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(3117),i=r(102),l=(r(7294),r(3905)),a=["components"],u={id:"file-writer",title:"file-writer"},o=void 0,c={unversionedId:"api/@checkup/cli/file-writer",id:"api/@checkup/cli/file-writer",isDocsHomePage:!1,title:"file-writer",description:"writeResultsToFile(result, cwd, [outputFile]) \u21d2 \\*",source:"@site/docs/api/@checkup/cli/file-writer.md",sourceDirName:"api/@checkup/cli",slug:"/api/@checkup/cli/file-writer",permalink:"/docs/api/@checkup/cli/file-writer",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/api/@checkup/cli/file-writer.md",tags:[],version:"current",frontMatter:{id:"file-writer",title:"file-writer"},sidebar:"apiSidebar",previous:{title:"CheckupTaskRunner",permalink:"/docs/api/@checkup/cli/CheckupTaskRunner"},next:{title:"get-formatter",permalink:"/docs/api/@checkup/cli/get-formatter"}},p=[{value:"writeResultsToFile(result, cwd, outputFile) \u21d2 <code>*</code>",id:"writeresultstofileresult-cwd-outputfile--",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"writeResultsToFile"}),(0,l.kt)("h2",{id:"writeresultstofileresult-cwd-outputfile--"},"writeResultsToFile(result, cwd, ","[outputFile]",") \u21d2 ",(0,l.kt)("code",null,"*")),(0,l.kt)("p",null,"A utility function to write results to an output file. If no ",(0,l.kt)("inlineCode",{parentName:"p"},"outputFile"),' is given,\nit uses a default output file name in the format "checkup-report-YYYY-MM-DD-HH_mm_ss".\nIf result is a string the extension is .txt, otherwise .sarif is used.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"*")," - {string}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Log")," ","|"," ",(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The result to be output, either a SARIF log or a string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cwd"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The current working directory to write to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[outputFile]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"DEFAULT_OUTPUT_FILENAME",'"')),(0,l.kt)("td",{parentName:"tr",align:null},"The output filename format.")))))}f.isMDXComponent=!0}}]);