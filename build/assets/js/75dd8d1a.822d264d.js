"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={draft:!1,id:"Git CMDLine Ref",title:"Git CMDLine Ref",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Git CMDLine Ref",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Git CMDLine Ref",tags:["Git","Command Line Ref"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Git command line refernce."},o=void 0,s={unversionedId:"Command Line References/Git CMDLine Ref",id:"Command Line References/Git CMDLine Ref",title:"Git CMDLine Ref",description:"Git command line refernce.",source:"@site/docs/Command Line References/Git Commands.md",sourceDirName:"Command Line References",slug:"/Command Line References/Git CMDLine Ref",permalink:"/docs/Command Line References/Git CMDLine Ref",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Git",permalink:"/docs/tags/git"},{label:"Command Line Ref",permalink:"/docs/tags/command-line-ref"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,id:"Git CMDLine Ref",title:"Git CMDLine Ref",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Git CMDLine Ref",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Git CMDLine Ref",tags:["Git","Command Line Ref"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Git command line refernce."},sidebar:"tutorialSidebar",previous:{title:"Exchange Online",permalink:"/docs/Command Line References/Exchange Online"},next:{title:"Microsoft Graph",permalink:"/docs/Command Line References/Microsoft Graph"}},l={},m=[{value:"Document Control",id:"document-control",level:2},{value:"Repo Status",id:"repo-status",level:2},{value:"Stage files",id:"stage-files",level:2},{value:"Un-stage files",id:"un-stage-files",level:2},{value:"Commit staged files",id:"commit-staged-files",level:2},{value:"Push changes to remote Repo",id:"push-changes-to-remote-repo",level:2},{value:"Un-do recent commit",id:"un-do-recent-commit",level:2},{value:"Merge branch into mainmaster",id:"merge-branch-into-mainmaster",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"document-control"},"Document Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Created: 23/05/06"),(0,a.kt)("li",{parentName:"ul"},"Last Updated: 23/05/06")),(0,a.kt)("h2",{id:"repo-status"},"Repo Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# make sure to change location to the local git repo folder.\n# Get git status update, this will tell you the status of commits, if you need to add un-tracked files, or push\\pull updates.\ngit status\n")),(0,a.kt)("h2",{id:"stage-files"},"Stage files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Add untracked file to git for commit (stage the file).\ngit add 'file name'\n")),(0,a.kt)("h2",{id:"un-stage-files"},"Un-stage files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# To unstage (remove) all files that have not been committed, -f = Force, -d = Directory\ngit reset -f -d\n")),(0,a.kt)("h2",{id:"commit-staged-files"},"Commit staged files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Commit staged changes to repo.\ngit commit -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"\n\n# Stage all changes and commit with comment, -a = all changes, -m = main branch.\ngit commit -a -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"\n')),(0,a.kt)("h2",{id:"push-changes-to-remote-repo"},"Push changes to remote Repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"\n# Push your commited changes to remote repo.\nGit push\n")),(0,a.kt)("h2",{id:"un-do-recent-commit"},"Un-do recent commit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# To undo the most recent commit - A Git commit should not be reversed if you already pushed it to the remote repository.\ngit reset HEAD~1\n")),(0,a.kt)("h2",{id:"merge-branch-into-mainmaster"},"Merge branch into main\\master"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# When you are ready to add your changes to the default branch, you merge the feature branch into it\ngit checkout 'default-branch'\ngit merge 'feature-branch'\n")))}d.isMDXComponent=!0}}]);