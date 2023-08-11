"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[865],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?t.createElement(g,o(o({ref:n},d),{},{components:a})):t.createElement(g,o({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8815:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const i={draft:!1,id:"Exchange Online",title:"Exchange Online",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Exchange Online",sidebar_position:2,toc_max_heading_level:4,pagination_label:"Exchange Online",tags:["Command Line","Exchange Online"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Exchange Online command ref doc."},o=void 0,l={unversionedId:"Command Line References/Exchange Online",id:"Command Line References/Exchange Online",title:"Exchange Online",description:"Exchange Online command ref doc.",source:"@site/docs/Command Line References/Exchange Online.md",sourceDirName:"Command Line References",slug:"/Command Line References/Exchange Online",permalink:"/docs/Command Line References/Exchange Online",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Command Line",permalink:"/docs/tags/command-line"},{label:"Exchange Online",permalink:"/docs/tags/exchange-online"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,id:"Exchange Online",title:"Exchange Online",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Exchange Online",sidebar_position:2,toc_max_heading_level:4,pagination_label:"Exchange Online",tags:["Command Line","Exchange Online"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Exchange Online command ref doc."},sidebar:"tutorialSidebar",previous:{title:"AzCLi",permalink:"/docs/Command Line References/AzCLi"},next:{title:"Git CMDLine Ref",permalink:"/docs/Command Line References/Git CMDLine Ref"}},s={},c=[{value:"Document Control",id:"document-control",level:2},{value:"Module Install and Management",id:"module-install-and-management",level:2},{value:"Manage Calendar Permissions",id:"manage-calendar-permissions",level:2},{value:"Get Calendar Permissions",id:"get-calendar-permissions",level:3},{value:"Set Calendar Permissions",id:"set-calendar-permissions",level:3}],d={toc:c},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"document-control"},"Document Control"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created: 23/04/22"),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 23/04/22")),(0,r.kt)("h2",{id:"module-install-and-management"},"Module Install and Management"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Install-module -Name ExchangeOnline\n\nUpdate-Module - Name ExchagneOnline\n")),(0,r.kt)("h2",{id:"manage-calendar-permissions"},"Manage Calendar Permissions"),(0,r.kt)("h3",{id:"get-calendar-permissions"},"Get Calendar Permissions"),(0,r.kt)("p",null,"Get-MailboxFolderPermission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName\n \n# Single mailbox command.\n# Get-MailboxFolderPermission -Identity Ryan.Wilson@traderemedies.gov.uk:\\Calendar -User Default | ft\n \n# Loop through each user and get calendar permissions of the default user.\nforeach($user in $userObject){\n    $calendar = $user.UserPrincipalName+":\\Calendar"\n    Get-MailboxFolderPermission -Identity $calendar | Export-csv -Append $env:USERPROFILE\\Downloads\\calendar-perms.csv\n}\n')),(0,r.kt)("h3",{id:"set-calendar-permissions"},"Set Calendar Permissions"),(0,r.kt)("p",null,"Set-MailboxFolderPermission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName\n \n# Single mailbox command.\n# Set-MailboxFolderPermission -Identity firstname.Lastname@fordway.com:\\Calendar -User Default -AccessRights LimitedDetails\n \n# Loop through each user and set calendar permissions of the default user.\nforeach($user in $userObject){\n    $calendar = $user.UserPrincipalName+":\\Calendar"\n    Set-MailboxFolderPermission -Identity $calendar -User Default -AccessRights LimitedDetails\n')))}u.isMDXComponent=!0}}]);