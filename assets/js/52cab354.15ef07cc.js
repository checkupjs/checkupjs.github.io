"use strict";(self.webpackChunkcheckup_website=self.webpackChunkcheckup_website||[]).push([[3913],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),i=n(2389),s=n(9443);var o=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(9521),l=n(6010),c="tabItem_1uMI";function m(e){var t,n,a,i=e.lazy,s=e.block,m=e.defaultValue,d=e.values,p=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),y=v.tabGroupChoices,w=v.setTabGroupChoices,T=(0,r.useState)(b),N=T[0],x=T[1],M=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=y[p];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&x(C)}var E=function(e){var t=e.currentTarget,n=M.indexOf(t),a=h[n].value;a!==N&&(O(t),x(a),null!=p&&w(p,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=M.indexOf(e.currentTarget)+1;n=M[a]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;n=M[r]||M[M.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return M.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=n(6396),o=n(8215),u=["components"],l={id:"writing-migration-tasks",title:"Writing a Migration Task"},c=void 0,m={unversionedId:"guides/writing-migration-tasks",id:"guides/writing-migration-tasks",isDocsHomePage:!1,title:"Writing a Migration Task",description:"Writing a migration task",source:"@site/docs/guides/writing-migration-tasks.mdx",sourceDirName:"guides",slug:"/guides/writing-migration-tasks",permalink:"/docs/guides/writing-migration-tasks",editUrl:"https://github.com/checkupjs/checkup/edit/master/website/docs/guides/writing-migration-tasks.mdx",tags:[],version:"current",frontMatter:{id:"writing-migration-tasks",title:"Writing a Migration Task"},sidebar:"guidesSidebar",previous:{title:"Writing a Task",permalink:"/docs/guides/writing-tasks"},next:{title:"Writing a Validation Task",permalink:"/docs/guides/writing-validation-tasks"}},d=[{value:"Writing a migration task",id:"writing-a-migration-task",children:[],level:2},{value:"A simple migration task",id:"a-simple-migration-task",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"writing-a-migration-task"},"Writing a migration task"),(0,i.kt)("p",null,"Migration tasks are a specialized type of task that are used to help identify features within a project that need to be migrated from one structure to another. This is usually accomplished through groupings of lint rules, which together comprise the definition of the migration."),(0,i.kt)("p",null,"A good example of this is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/checkupjs/checkup/blob/cf589b9d511a686d780c8fba77381095df7df11a/packages/checkup-plugin-ember/src/tasks/ember-octane-migration-status-task.ts"},"Ember Octane migration task"),". The task is responsible for identifying all of the Ember Classic features that need to be migrated, and then running the appropriate lint rules to identify the changes that need to be made."),(0,i.kt)("p",null,"Migration tasks are a subclass of the ",(0,i.kt)("a",{parentName:"p",href:"docs/api/@checkup/core/BaseTask"},"BaseTask")," class, and have migration-specific methods and properties that make writing them easier. More details on what's included in this class can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/@checkup/core/BaseMigrationTask"},"BaseMigrationTask")," documentation."),(0,i.kt)("h2",{id:"a-simple-migration-task"},"A simple migration task"),(0,i.kt)("p",null,"Below is a simple example of a migration task."),(0,i.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/tasks/my-migration-task.ts"',title:'"/tasks/my-migration-task.ts"'},"import { BaseMigrationTask, Task, TaskContext } from '@checkup/core';\nimport { Result } from 'sarif';\n\nexport default class MyMigrationTask extends BaseMigrationTask implements Task {\n  taskName = 'my-migration';\n  taskDisplayName = 'My Migration';\n  description = 'Tracks the migration status of my stuff';\n  category = 'migrations';\n\n  constructor(pluginName: string, context: TaskContext) {\n    super('My Migration', pluginName, context);\n\n    this.addRuleComponentMetadata();\n\n    // featureIds are typically the same as the lint ruleIds, but can be different\n    this.addFeature('some-feature-id', {\n      featureName: 'Some Feature Name',\n      message: \"Use this feature instead, it's better\",\n      helpUri: 'https://feature-docs/somewhere.com',\n    });\n  }\n\n  async run(): Promise<Result[]> {\n    let rawData = getResults();\n\n    rawData.forEach((result) => {\n      let id = result.featureId;\n      let feature = this.features.get(id);\n\n      if (feature) {\n        this.addFeatureResult(feature, {\n          location: {\n            uri: lintResult.filePath,\n            startColumn: lintResult.column,\n            startLine: lintResult.line,\n            endColumn: lintResult.endColumn,\n            endLine: lintResult.endLine,\n          },\n        });\n      }\n    });\n\n    return this.results;\n  }\n\n  getResults() {\n    // Get results from one or more of the analyzers\n  }\n}\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/tasks/my-migration-task.js"',title:'"/tasks/my-migration-task.js"'},"const { BaseMigrationTask, Task, TaskContext } = require('@checkup/core');\n\nmodule.exports = class MyMigrationTask extends BaseMigrationTask {\n  taskName = 'my-migration';\n  taskDisplayName = 'My Migration';\n  description = 'Tracks the migration status of my stuff';\n  category = 'migrations';\n\n  constructor(pluginName, context) {\n    super('My Migration', pluginName, context);\n\n    this.addRuleComponentMetadata();\n\n    // featureIds are typically the same as the lint ruleIds, but can be different\n    this.addFeature('some-feature-id', {\n      featureName: 'Some Feature Name',\n      message: \"Use this feature instead, it's better\",\n      helpUri: 'https://feature-docs/somewhere.com',\n    });\n\n    this.addFeature('another-feature-id', {\n      featureName: 'Another Feature Name',\n      message: \"Use this other feature instead, it's better\",\n      helpUri: 'https://feature-docs/anywhere.com',\n    });\n  }\n\n  async run() {\n    let rawData = getResults();\n\n    rawData.forEach((result) => {\n      let id = result.featureId;\n      let feature = this.features.get(id);\n\n      if (feature) {\n        this.addFeatureResult(feature, {\n          location: {\n            uri: lintResult.filePath,\n            startColumn: lintResult.column,\n            startLine: lintResult.line,\n            endColumn: lintResult.endColumn,\n            endLine: lintResult.endLine,\n          },\n        });\n      }\n    });\n\n    return this.results;\n  }\n\n  getResults() {\n    // Get results from one or more of the analyzers\n  }\n};\n")))),(0,i.kt)("p",null,"Coupling this with the pretty formatter, we can get a full picture of the scope of our migration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ checkup run . --task my-migration --format pretty\n\nCheckup report generated for checkup-app v1.3.0 (46 files analyzed)\n\nThis project is 100 days old, with 90 days active days, 375 commits and 46 files.\n\nCheckup ran the following task(s) successfully:\n\nMy Migration\n=============================\nOutstanding features to be migrated: 4\n  Some Feature Name 3\n  Another Feature Name 1\n\ncheckup v1.3.0\nconfig dd17cda1fc2eb2bc6bb5206b41fc1a84\n")))}f.isMDXComponent=!0}}]);