"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5555],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5692:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={draft:!1,id:"Microsoft Graph",title:"Microsoft Graph",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Microsoft Graph",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Microsoft Graph",tags:["Command Line","Microsoft Graph"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Microsoft Graph command ref doc."},o=void 0,s={unversionedId:"Command Line References/Microsoft Graph",id:"Command Line References/Microsoft Graph",title:"Microsoft Graph",description:"Microsoft Graph command ref doc.",source:"@site/docs/Command Line References/MS Graph.md",sourceDirName:"Command Line References",slug:"/Command Line References/Microsoft Graph",permalink:"/Command Line References/Microsoft Graph",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Command Line",permalink:"/tags/command-line"},{label:"Microsoft Graph",permalink:"/tags/microsoft-graph"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Microsoft Graph",title:"Microsoft Graph",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Microsoft Graph",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Microsoft Graph",tags:["Command Line","Microsoft Graph"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Microsoft Graph command ref doc."},sidebar:"tutorialSidebar",previous:{title:"Exchange Online",permalink:"/Command Line References/Exchange Online"},next:{title:"PowerShell",permalink:"/Command Line References/PowerShell"}},l={},c=[{value:"1. Document Control",id:"1-document-control",level:2},{value:"2. User Management",id:"2-user-management",level:2},{value:"2.1. Get Last Password reset time from Azure AD",id:"21-get-last-password-reset-time-from-azure-ad",level:3},{value:"2.2. Grab basic user information to work with",id:"22-grab-basic-user-information-to-work-with",level:3},{value:"2.3. Grab a password report of all users.",id:"23-grab-a-password-report-of-all-users",level:3},{value:"3. Device management",id:"3-device-management",level:2},{value:"3.1. Get devices from Intune with their Primary User",id:"31-get-devices-from-intune-with-their-primary-user",level:3},{value:"3.2. Get Generic Device Report from intune",id:"32-get-generic-device-report-from-intune",level:3},{value:"3.3. Get a list of Configuration Profiles from Intune",id:"33-get-a-list-of-configuration-profiles-from-intune",level:3},{value:"4. Module Management",id:"4-module-management",level:2},{value:"4.1. Connect &amp; Update",id:"41-connect--update",level:3},{value:"4.2. Connect to MG Graph with Read-only permissions",id:"42-connect-to-mg-graph-with-read-only-permissions",level:3}],m={toc:c},d="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-document-control"},"1. Document Control"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created: 2023/04/22"),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2023/04/22")),(0,r.kt)("h2",{id:"2-user-management"},"2. User Management"),(0,r.kt)("h3",{id:"21-get-last-password-reset-time-from-azure-ad"},"2.1. Get Last Password reset time from Azure AD"),(0,r.kt)("p",null,"Get-MgUser"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"connect-mggraph -scopes \"User.ReadWrite.All\"\n \n$mgUser = Get-MgUser -All -Property UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies | `\nSelect UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) ).TotalDays -as [int] }} | `\nWhere UserPrincipalName -notmatch 'A-|-ADM|ad00|.onmicrosoft|Candidate' | `\nSort PasswordAgeDays | `\nFt -Autosize\n")),(0,r.kt)("h3",{id:"22-grab-basic-user-information-to-work-with"},"2.2. Grab basic user information to work with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Get-MGUser -All -Property Id, DisplayName, UserPrincipalName, AssignedLicenses | Select Id, DisplayName, UserPrincipalName, AssignedLicenses\n")),(0,r.kt)("h3",{id:"23-grab-a-password-report-of-all-users"},"2.3. Grab a password report of all users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Get-MgUser -All -Property UserPrincipalName, DisplayName, Id, LastPasswordChangeDateTime,PasswordPolicies | `\nSelect-Object UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) )TotalDays -as [int] }} | ` \nSort-Object PasswordAgeDays \n")),(0,r.kt)("h2",{id:"3-device-management"},"3. Device management"),(0,r.kt)("h3",{id:"31-get-devices-from-intune-with-their-primary-user"},"3.1. Get devices from Intune with their Primary User"),(0,r.kt)("p",null,"Get-MgDeviceManagementManagedDevice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Connect with the relevant permission to read all user and device data.\nConnect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"\n \n$getAllDevices = Get-MgDeviceManagementManagedDevice -All | `\nSelect DeviceName, UserPrincipalName, EnrolledDateTime, ComplianceState, IsEncrypted, LastSyncDateTime, Id , Manufacturer, Model, OperatingSystem, OSVersion, SerialNumber,@{l=\'PrimaryUser\';e={  $device = $_ ; Get-MgDeviceManagementManagedDeviceUser -ManagedDeviceId $device.id | select -expandproperty UserPrincipalName  }} | `\nSort OperatingSystem\n')),(0,r.kt)("h3",{id:"32-get-generic-device-report-from-intune"},"3.2. Get Generic Device Report from intune"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Connect with the relevant permission to read all user and device data.\nConnect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"\n \n# Get all intune "Managed" devices.\nGet-MgDeviceManagementManagedDevice -All | select DeviceName, AzureAdDeviceId, UserPrincipalName, Id, ComplianceState, EnrolledDateTime, LastSyncDateTime, Manufacturer, Model, OSVersion, SerialNumber | sort UserPrincipalName |  ft -AutoSize\n')),(0,r.kt)("h3",{id:"33-get-a-list-of-configuration-profiles-from-intune"},"3.3. Get a list of Configuration Profiles from Intune"),(0,r.kt)("p",null,"Get-MgDeviceManagementDeviceConfiguration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Get Configuration Profiles for an Org.\nGet-MgDeviceManagementDeviceConfiguration -All | select Id, DisplayName\n")),(0,r.kt)("h2",{id:"4-module-management"},"4. Module Management"),(0,r.kt)("h3",{id:"41-connect--update"},"4.1. Connect & Update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Connect-MGGraph\n\nUpdate-Module -Name Microsoft.Graph\n")),(0,r.kt)("h3",{id:"42-connect-to-mg-graph-with-read-only-permissions"},"4.2. Connect to MG Graph with Read-only permissions"),(0,r.kt)("p",null,"Connect-MGGraph"),(0,r.kt)("p",null,"This will connect with read only permissions to manage Users and Devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'Connect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All" \n')))}p.isMDXComponent=!0}}]);