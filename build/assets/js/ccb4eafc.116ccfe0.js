"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,u=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(u,o(o({ref:t},m),{},{components:n})):i.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:9,id:"SharePoint Admin Tasks",title:"SharePoint Admin Tasks",tags:["SharePoint Online","Admin Tasks"]},o=void 0,s={unversionedId:"How-to Guides/SharePoint Online/SharePoint Admin Tasks",id:"How-to Guides/SharePoint Online/SharePoint Admin Tasks",title:"SharePoint Admin Tasks",description:"Site Permissions",source:"@site/docs/How-to Guides/SharePoint Online/SharePoint Admin Tasks.md",sourceDirName:"How-to Guides/SharePoint Online",slug:"/How-to Guides/SharePoint Online/SharePoint Admin Tasks",permalink:"/How-to Guides/SharePoint Online/SharePoint Admin Tasks",draft:!1,tags:[{label:"SharePoint Online",permalink:"/tags/share-point-online"},{label:"Admin Tasks",permalink:"/tags/admin-tasks"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"SharePoint Admin Tasks",title:"SharePoint Admin Tasks",tags:["SharePoint Online","Admin Tasks"]},sidebar:"tutorialSidebar",previous:{title:"SharePoint Online",permalink:"/category/sharepoint-online"},next:{title:"Windows",permalink:"/category/windows"}},l={},d=[{value:"Site Permissions",id:"site-permissions",level:2},{value:"Adding and Removing users",id:"adding-and-removing-users",level:3},{value:"Change a site address",id:"change-a-site-address",level:2},{value:"Removing a previously used URL",id:"removing-a-previously-used-url",level:3},{value:"Get a list of redirects",id:"get-a-list-of-redirects",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"site-permissions"},"Site Permissions"),(0,a.kt)("h3",{id:"adding-and-removing-users"},"Adding and Removing users"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Active sites")," in the new SharePoint admin center, and sign in with an account that has admin permissions for your organization."),(0,a.kt)("li",{parentName:"ol"},"To ",(0,a.kt)("strong",{parentName:"li"},"open")," the ",(0,a.kt)("strong",{parentName:"li"},"details")," pane, ",(0,a.kt)("strong",{parentName:"li"},"select the site")," name."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Permissions tab"),".")),(0,a.kt)("p",null,"From here you can manage your site admins and owners."),(0,a.kt)("admonition",{title:"Members and Visitor rights",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These permissions must be managed from either the group linked to the SharePoint site or within the site itself once you're an owner or admin.")),(0,a.kt)("h2",{id:"change-a-site-address"},"Change a site address"),(0,a.kt)("admonition",{title:"Before you do anything",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Notify your users that you're making this change along with the following suggestions if they're relevant."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"When the change will happen."),(0,a.kt)("li",{parentName:"ul"},"What the new URL will be."),(0,a.kt)("li",{parentName:"ul"},"Users should close their files and not make edits during the address change."),(0,a.kt)("li",{parentName:"ul"},"Users should check the site recycle bin to make sure it contains no files they want to keep."),(0,a.kt)("li",{parentName:"ul"},"File permissions and sharing won't change."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Active sites")," in the new SharePoint admin center, and sign in with an account that has admin permissions for your organization."),(0,a.kt)("li",{parentName:"ol"},"To ",(0,a.kt)("strong",{parentName:"li"},"open")," the ",(0,a.kt)("strong",{parentName:"li"},"details")," pane, ",(0,a.kt)("strong",{parentName:"li"},"select the site")," name."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"General tab"),", under URL, ",(0,a.kt)("strong",{parentName:"li"},"select Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"new site address"),".",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("img",{alt:"Edit the URL",src:n(4955).Z,width:"520",height:"310"})))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("admonition",{title:"Re-using the old address",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When you change a site address, we create a redirect at the previous address. If you want to reuse the previous address, you need to delete the redirect.")),(0,a.kt)("h3",{id:"removing-a-previously-used-url"},"Removing a previously used URL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/sharepoint/manage-site-redirects"},"Microsoft docs link - Manage site redirects"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest SharePoint Online module for PowerShell from ",(0,a.kt)("a",{parentName:"li",href:"https://go.microsoft.com/fwlink/p/?LinkId=255251"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Connect to SharePoint with an accoutn that is a Global Admin or SharePoint Admin."),(0,a.kt)("li",{parentName:"ol"},"Run the following command ",(0,a.kt)("inlineCode",{parentName:"li"},"Remove-SPOSite -Identity https://domainname.sharepoint.com/sites/OldSiteName")),(0,a.kt)("li",{parentName:"ol"},"Confirm the action when you're prompted to do so.")),(0,a.kt)("p",null,"To confirm that the redirect has been deleted, browse to the URL. It should return a 404 error. You can also run ",(0,a.kt)("inlineCode",{parentName:"p"},"Get-SPOSite -Identity https://domainname.sharepoint.com/sites/OldSiteName"),". It will return that we cannot get the site."),(0,a.kt)("h3",{id:"get-a-list-of-redirects"},"Get a list of redirects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-SPOSite -Template REDIRECTSITE#0\n")))}p.isMDXComponent=!0},4955:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/change-site-address-001-5f2456f23339cd1402269afdb2e1cef5.png"}}]);