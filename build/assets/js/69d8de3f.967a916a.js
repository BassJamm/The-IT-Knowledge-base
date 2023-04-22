"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,g=s["".concat(c,".").concat(k)]||s[k]||m[k]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,id:"Setup Azure Backup",title:"Setup Azure Backup",tags:["Azure","Resource Creation","Azure Backup"]},i=void 0,l={unversionedId:"Azure/Backup and Disaster Recovery/Setup Azure Backup",id:"Azure/Backup and Disaster Recovery/Setup Azure Backup",title:"Setup Azure Backup",description:"Document Control",source:"@site/docs/Azure/Backup and Disaster Recovery/Setup Azure Backup.md",sourceDirName:"Azure/Backup and Disaster Recovery",slug:"/Azure/Backup and Disaster Recovery/Setup Azure Backup",permalink:"/Azure/Backup and Disaster Recovery/Setup Azure Backup",draft:!1,tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Resource Creation",permalink:"/tags/resource-creation"},{label:"Azure Backup",permalink:"/tags/azure-backup"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Setup Azure Backup",title:"Setup Azure Backup",tags:["Azure","Resource Creation","Azure Backup"]},sidebar:"tutorialSidebar",previous:{title:"Backup and Disaster Recovery",permalink:"/category/backup-and-disaster-recovery"},next:{title:"Setup Azure Site Recovery",permalink:"/Azure/Backup and Disaster Recovery/Setup Azure Site Recovery"}},c={},p=[{value:"Document Control",id:"document-control",level:2},{value:"Create the below resources",id:"create-the-below-resources",level:2},{value:"Configure Backup Policy",id:"configure-backup-policy",level:2},{value:"Configure Alerting",id:"configure-alerting",level:2},{value:"Configure Diagnostic log collection",id:"configure-diagnostic-log-collection",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"document-control"},"Document Control"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Created: x"),(0,n.kt)("li",{parentName:"ul"},"Last Updated: 23/04/22")),(0,n.kt)("p",null,"This document will run through a very basic Azure Backup setup scenario."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This document is for setting backup policeis for Virutal Machines only. If you need to backup other resources, got to section 1.2, step 4 and select a differnet resource.")),(0,n.kt)("h2",{id:"create-the-below-resources"},"Create the below resources"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Use whatever naming conention fits in with what's being used already, I am just suggesting something here.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create the resource group"),", for example, ",(0,n.kt)("inlineCode",{parentName:"li"},"rg-<customername>-<region>-<prod/dev>-backups-01"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create a recovery services vault")," to store the backups (GRS is the preferred option, LRS for lowest cost), for example, ",(0,n.kt)("inlineCode",{parentName:"li"},"rsv-<customername>-<region>-<prod/dev>-backup-01"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create a log analytics workspace")," or reuse another one, for example, ",(0,n.kt)("inlineCode",{parentName:"li"},"la-<customername>-<region>-<prod/dev>-backup-01"),".")),(0,n.kt)("h2",{id:"configure-backup-policy"},"Configure Backup Policy"),(0,n.kt)("p",null,"Configure the backup policy in-line with whatever standard is being used already, my suggestions are below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Azure portal, select a Recovery Services vault to back up the VM."),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Backup"),", select ",(0,n.kt)("strong",{parentName:"li"},"Backup Policies"),"."),(0,n.kt)("li",{parentName:"ol"},"Click +",(0,n.kt)("strong",{parentName:"li"},"Add"),"."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("strong",{parentName:"li"},"Select policy type"),", select ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine"),"."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("strong",{parentName:"li"},"Create policy"),", perform the following actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Policy sub type"),": Standard"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Suggested Name")," format: ",(0,n.kt)("inlineCode",{parentName:"li"},"Bkup-policy-<time of day>-<policy type>")," (example name: ",(0,n.kt)("inlineCode",{parentName:"li"},"bkup-policy-nightly-std"),").")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backup Policy Example",src:r(8318).Z,width:"872",height:"1024"})),(0,n.kt)("h2",{id:"configure-alerting"},"Configure Alerting"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note that this method is using the old backup alerting method, this is being replaced by Azure Monitor.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/backup/backup-azure-monitoring-built-in-monitor?tabs=recovery-services-vaults#turning-on-azure-monitor-alerts-for-job-failure-scenarios"},"Microsoft Link for more information")),(0,n.kt)("p",null,"Configure diagnostic logs to be sent from Azure Backup to the Log Anlytics workspace above."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Recovery services vault")," just setup. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click on Backup Alerts"),", under the Monitoring section."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click")," Configure Notifications.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Enable Notifications"),": Yes"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Recipients(Email)"),": ",(0,n.kt)("a",{parentName:"li",href:"mailto:monitoring@DomainName.com"},"monitoring@DomainName.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Notify"),": Hourly digest"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Severity"),": Critical & Warning"))),(0,n.kt)("li",{parentName:"ol"},"Example of this below."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("img",{alt:"Example notification config",src:r(1818).Z,width:"604",height:"646"}))),(0,n.kt)("h2",{id:"configure-diagnostic-log-collection"},"Configure Diagnostic log collection"),(0,n.kt)("p",null,"Configure diagnostic logs to be sent from Azure Backup to the Log Anlytics workspace above."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Navigate")," to Diagnostic settings under Monitoring."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Click")," Add Diagnostic Settings."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Name your diagnostic setting"),', something informational, for example, "AzBkup-Diagnostics", suggestion, ',(0,n.kt)("inlineCode",{parentName:"li"},"Backup Report Data"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Select")," Send to Log Analytics Workspace."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Add a workspace")," and don't touch any other settings."),(0,n.kt)("li",{parentName:"ol"},"Hit ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to run the initial backup job from the Azure Backup Dashboard.")))}m.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/AZ-Bkup-Policy-Create-01-573564d007987e2acee2ee797fcdec42.png"},1818:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/AZ-Bkup-exmpl-Notification-policy-01-5fbb19bcb18c94ca47a00adfddbc6965.png"}}]);