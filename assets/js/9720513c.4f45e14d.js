"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[8821],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3117),a=t(7294),l=t(2389),i=t(9443);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(9521),s=t(6010),c="tabItem_1uMI";function p(e){var n,t,r,l=e.lazy,i=e.block,p=e.defaultValue,d=e.values,g=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),k=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,a.useState)(b),j=T[0],N=T[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=k[g];null!=x&&x!==j&&v.some((function(e){return e.value===x}))&&N(x)}var P=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==j&&(E(n),N(r),null!=g&&w(g,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":j===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=t?t:n)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},8998:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),i=t(6396),u=t(8215),o=["components"],s={id:"plugins",title:"Authoring Plugins"},c=void 0,p={unversionedId:"guides/plugins",id:"guides/plugins",isDocsHomePage:!1,title:"Authoring Plugins",description:"Plugins provide a way to combine Tasks together in logical groupings. They can be configured to run in @checkup/cli as a whole plugin, or individually.",source:"@site/docs/guides/plugins.mdx",sourceDirName:"guides",slug:"/guides/plugins",permalink:"/docs/guides/plugins",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/guides/plugins.mdx",tags:[],version:"current",frontMatter:{id:"plugins",title:"Authoring Plugins"},sidebar:"guidesSidebar",previous:{title:"Configuration",permalink:"/docs/introduction/config"},next:{title:"Writing a Task",permalink:"/docs/guides/writing-tasks"}},d=[{value:"Generate a plugin",id:"generate-a-plugin",children:[],level:2},{value:"Plugin commands",id:"plugin-commands",children:[{value:"Build a plugin (TypeScript only)",id:"build-a-plugin-typescript-only",children:[],level:3},{value:"Run tests",id:"run-tests",children:[],level:3},{value:"Run linting",id:"run-linting",children:[],level:3},{value:"Generate plugin documentation",id:"generate-plugin-documentation",children:[],level:3}],level:2}],g={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Plugins provide a way to combine Tasks together in logical groupings. They can be configured to run in ",(0,l.kt)("inlineCode",{parentName:"p"},"@checkup/cli")," as a whole plugin, or individually."),(0,l.kt)("h2",{id:"generate-a-plugin"},"Generate a plugin"),(0,l.kt)("p",null,"Plugins can be generated using the CLI's ",(0,l.kt)("inlineCode",{parentName:"p"},"generate")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn checkup generate plugin my-plugin\n")),(0,l.kt)("p",null,"This will generate the following structure:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .eslintignore\n\u251c\u2500\u2500 .eslintrc\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .prettierrc.js\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u251c\u2500\u2500 jest.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 results\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u2502\xa0\xa0 \u2514\u2500\u2500 types\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 yarn.lock\n"))),(0,l.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .eslintignore\n\u251c\u2500\u2500 .eslintrc\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .prettierrc.js\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 **tests**\n\u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u251c\u2500\u2500 jest.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 results\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u2514\u2500\u2500 yarn.lock\n")))),(0,l.kt)("h2",{id:"plugin-commands"},"Plugin commands"),(0,l.kt)("h3",{id:"build-a-plugin-typescript-only"},"Build a plugin (TypeScript only)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,l.kt)("p",null,"Or in watch mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build:watch\n")),(0,l.kt)("h3",{id:"run-tests"},"Run tests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")),(0,l.kt)("h3",{id:"run-linting"},"Run linting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\n")),(0,l.kt)("h3",{id:"generate-plugin-documentation"},"Generate plugin documentation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docs:generate\n")))}m.isMDXComponent=!0}}]);