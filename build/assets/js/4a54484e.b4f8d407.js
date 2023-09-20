"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9149],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(h,l(l({ref:t},u),{},{components:o})):n.createElement(h,l({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3126:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=o(7462),i=(o(7294),o(3905));const r={draft:!1,id:"Diagnose Autopilot Errors",title:"Diagnose Autopilot Errors",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Diagnose Autopilot Errors",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Diagnose Autopilot Errors",tags:["Autopilot","Intune"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Details how to review the Autopilot logs on a device."},l=void 0,a={unversionedId:"Intune/Autopilot/Diagnose Autopilot Errors",id:"Intune/Autopilot/Diagnose Autopilot Errors",title:"Diagnose Autopilot Errors",description:"Details how to review the Autopilot logs on a device.",source:"@site/docs/Intune/Autopilot/Autopilot-Diagnostics.md",sourceDirName:"Intune/Autopilot",slug:"/Intune/Autopilot/Diagnose Autopilot Errors",permalink:"/docs/Intune/Autopilot/Diagnose Autopilot Errors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Autopilot",permalink:"/docs/tags/autopilot"},{label:"Intune",permalink:"/docs/tags/intune"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Diagnose Autopilot Errors",title:"Diagnose Autopilot Errors",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Diagnose Autopilot Errors",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Diagnose Autopilot Errors",tags:["Autopilot","Intune"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Details how to review the Autopilot logs on a device."},sidebar:"tutorialSidebar",previous:{title:"Autopilot",permalink:"/docs/category/autopilot"},next:{title:"PowerShell",permalink:"/docs/category/powershell"}},s={},p=[{value:"Document Control",id:"document-control",level:2},{value:"Collecting the log files",id:"collecting-the-log-files",level:2},{value:"Read the log files",id:"read-the-log-files",level:2},{value:"Known problems (And solutions)",id:"known-problems-and-solutions",level:2},{value:"Application install errors",id:"application-install-errors",level:3},{value:"Terms and Conditions Error",id:"terms-and-conditions-error",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This short document details how to review the logs from Autopilot when there's an error to diagnose during the build process."),(0,i.kt)("h2",{id:"document-control"},"Document Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created: 2023-09-20"),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2023-09-20")),(0,i.kt)("h2",{id:"collecting-the-log-files"},"Collecting the log files"),(0,i.kt)("p",null,"Initiate the build of a machine firstly and wait for this to fail."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Load Command Prompt as an Administrator: This can be done with one of the following key combinations, ",(0,i.kt)("inlineCode",{parentName:"li"},"Shift + F10"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Alt + Shift + F10")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Fn + Shift + F10"),", it differs for each model of machine."),(0,i.kt)("li",{parentName:"ol"},"Load Powershell: Type the command ",(0,i.kt)("inlineCode",{parentName:"li"},"Powershell")," into the Command Prompt window."),(0,i.kt)("li",{parentName:"ol"},"Create a new Folder to store the logs: Type, ",(0,i.kt)("inlineCode",{parentName:"li"},"New-Item -Path C:\\ -Name Temp -ItemType Directory")," into the Powershell window to create a new Temp folder a the root of ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\"),"."),(0,i.kt)("li",{parentName:"ol"},"Collect the Autopilot logs: Type, ",(0,i.kt)("inlineCode",{parentName:"li"},"MdmDiagnosticsTool.exe -area Autopilot -zip C:\\$env:USERPROFILE\\Desktop\\mdmDiag.zip"),", this will give you a status once completed.")),(0,i.kt)("h2",{id:"read-the-log-files"},"Read the log files"),(0,i.kt)("p",null,'Once you have the logs, you\'ll need to downlad a script that will then print out only the necessary errors and filter out the "noise" (the log files are horrible to sift through)!'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the script to parse the logs: Type, ",(0,i.kt)("inlineCode",{parentName:"li"},"Install-Script -Name Get-AutopilotDiagnostics -Scope CurrentUser"),", this should prompt for a Y\\N to proceed."),(0,i.kt)("li",{parentName:"ol"},"Run the script against the zipped logs files: Type,",(0,i.kt)("inlineCode",{parentName:"li"},"Get-AutopilotDiagnostics.ps1 -ZIPFile C:\\Temp\\mdmDiag.zip"),", this will then spit out the relevant information to inform you what has caused the error.")),(0,i.kt)("h2",{id:"known-problems-and-solutions"},"Known problems (And solutions)"),(0,i.kt)("p",null,"These are issues I have encountered before."),(0,i.kt)("h3",{id:"application-install-errors"},"Application install errors"),(0,i.kt)("p",null,"This has been the most common cause for the Autopilot builds to fail in my experience."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Applications in Intune that have a "Required" installation for users, devices or to a group, will be installed during the AutoPilot process.')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Perform the steps from the sections above."),(0,i.kt)("li",{parentName:"ol"},"Review the errors in the output, make not of the application IDs."),(0,i.kt)("li",{parentName:"ol"},"Export a report of the Apps from the Intune\\Endpoint Manager portal, this includes the App IDs."),(0,i.kt)("li",{parentName:"ol"},'Check the Application IDs match and remove the "Required" assignment.')),(0,i.kt)("h3",{id:"terms-and-conditions-error"},"Terms and Conditions Error"),(0,i.kt)("p",null,"I have seen recently an error appear explaining that something has gone wrong due to the terms and conditions not having been accepted. This problem does not seem to break\\stop the build from completing but, does appear to the end user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check if you have blocked the Ts & Cs window from showing via the Autopilot profile."),(0,i.kt)("li",{parentName:"ol"},"Allow it for a breif time to remove the error showing for end users.")),(0,i.kt)("p",null,"So far we've not been able to fix this problem."))}c.isMDXComponent=!0}}]);