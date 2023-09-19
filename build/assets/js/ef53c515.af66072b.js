"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3075],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},907:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={draft:!1,id:"Microsoft Graph Cheatsheet",title:"Microsoft Graph Cheatsheet",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Microsoft Graph Cheatsheet",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Microsoft Graph Cheatsheet",tags:["Command Line","Microsoft Graph"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Microsoft Graph command ref doc."},o=void 0,s={unversionedId:"PowerShell/MS-Graph/Microsoft Graph Cheatsheet",id:"PowerShell/MS-Graph/Microsoft Graph Cheatsheet",title:"Microsoft Graph Cheatsheet",description:"Microsoft Graph command ref doc.",source:"@site/docs/PowerShell/MS-Graph/MG-Graph-Cheatsheet.md",sourceDirName:"PowerShell/MS-Graph",slug:"/PowerShell/MS-Graph/Microsoft Graph Cheatsheet",permalink:"/docs/PowerShell/MS-Graph/Microsoft Graph Cheatsheet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Command Line",permalink:"/docs/tags/command-line"},{label:"Microsoft Graph",permalink:"/docs/tags/microsoft-graph"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,id:"Microsoft Graph Cheatsheet",title:"Microsoft Graph Cheatsheet",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Microsoft Graph Cheatsheet",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Microsoft Graph Cheatsheet",tags:["Command Line","Microsoft Graph"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Microsoft Graph command ref doc."},sidebar:"tutorialSidebar",previous:{title:"Microsoft Graph",permalink:"/docs/category/microsoft-graph"},next:{title:"PowerShell",permalink:"/docs/category/powershell-1"}},l={},c=[{value:"Document Control",id:"document-control",level:2},{value:"Module Management",id:"module-management",level:2},{value:"Permissions Scopes",id:"permissions-scopes",level:3},{value:"Connect &amp; Update",id:"connect--update",level:3},{value:"Connect to MG Graph with Read-only permissions",id:"connect-to-mg-graph-with-read-only-permissions",level:3},{value:"Getting properties from commands",id:"getting-properties-from-commands",level:2},{value:"User Management",id:"user-management",level:2},{value:"Grab basic user information to work with",id:"grab-basic-user-information-to-work-with",level:3},{value:"Grab a password report of all users.",id:"grab-a-password-report-of-all-users",level:3},{value:"Device management",id:"device-management",level:2},{value:"Get devices from Intune with their Primary User",id:"get-devices-from-intune-with-their-primary-user",level:3},{value:"Get Generic Device Report from intune",id:"get-generic-device-report-from-intune",level:3},{value:"Get a list of Configuration Profiles from Intune",id:"get-a-list-of-configuration-profiles-from-intune",level:3},{value:"Get a list of Compliance policies from Intune",id:"get-a-list-of-compliance-policies-from-intune",level:3},{value:"Get a compliancy report for a compliance policy",id:"get-a-compliancy-report-for-a-compliance-policy",level:4},{value:"Get a compliance policy report for a single device",id:"get-a-compliance-policy-report-for-a-single-device",level:4}],m={toc:c},p="wrapper";function d(e){let{components:a,...i}=e;return(0,r.kt)(p,(0,n.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"document-control"},"Document Control"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created: 2023/04/22"),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2023/04/22")),(0,r.kt)("h2",{id:"module-management"},"Module Management"),(0,r.kt)("h3",{id:"permissions-scopes"},"Permissions Scopes"),(0,r.kt)("p",null,"MG Graph uses permissions scopes that you assign at logon, use the command below to locate what permissions scopes you need for your logged in session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Find-MgGraphCommand -command Get-MgUser | Select -First 1 -ExpandProperty Permissions\n")),(0,r.kt)("h3",{id:"connect--update"},"Connect & Update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Connect-MGGraph\nUpdate-Module -Name Microsoft.Graph\n")),(0,r.kt)("h3",{id:"connect-to-mg-graph-with-read-only-permissions"},"Connect to MG Graph with Read-only permissions"),(0,r.kt)("p",null,"Connect-MGGraph"),(0,r.kt)("p",null,"This will connect with read only permissions to manage Users and Devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'Connect-MgGraph "User.Read.All", "Calendars.Read.Shared", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All" \n')),(0,r.kt)("h2",{id:"getting-properties-from-commands"},"Getting properties from commands"),(0,r.kt)("p",null,'Getting properties using MGGraph requires "declaring" them as part of the original command, if you don\'t so this they will be blank in the following commands or pipe. For example, ',(0,r.kt)("inlineCode",{parentName:"p"},"get-mguser -userid username@domain.com | select UserPrincipalName, DisplayName, LastPasswordChangeDateTime")," will return the UPn & display name but, ",(0,r.kt)("inlineCode",{parentName:"p"},"LastPasswordChangeDateTime")," will be blank. "),(0,r.kt)("p",null,"You would need to type the command in this format, ",(0,r.kt)("inlineCode",{parentName:"p"},"get-mguser -userid username@domain.com -property -Property UserPrincipalName, DisplayName, LastPasswordChangeDateTime | select UserPrincipalName, DisplayName, LastPasswordChangeDateTime"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gettingobjectproperties",src:t(784).Z,width:"1229",height:"264"})),(0,r.kt)("h2",{id:"user-management"},"User Management"),(0,r.kt)("h3",{id:"grab-basic-user-information-to-work-with"},"Grab basic user information to work with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"$userReport = Get-MgUser -All -property DisplayName, UserPrincipalName, AssignedLicenses, businessphones, CompanyName, CreatedDateTime, Id, jobTitle, LastPasswordChangeDateTime, MobilePhone, Manager, Usertype | `\nSelect DisplayName, UserPrincipalName, AssignedLicenses, businessphones, CompanyName, CreatedDateTime, Id, jobTitle, LastPasswordChangeDateTime, MobilePhone, Manager, Usertype\n")),(0,r.kt)("h3",{id:"grab-a-password-report-of-all-users"},"Grab a password report of all users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"Get-MgUser -All -Property UserPrincipalName, DisplayName, Id, LastPasswordChangeDateTime,PasswordPolicies | `\nSelect-Object UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) )TotalDays -as [int] }} | ` \nSort-Object PasswordAgeDays \n")),(0,r.kt)("h2",{id:"device-management"},"Device management"),(0,r.kt)("h3",{id:"get-devices-from-intune-with-their-primary-user"},"Get devices from Intune with their Primary User"),(0,r.kt)("p",null,"Get-MgDeviceManagementManagedDevice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Connect with the relevant permission to read all user and device data.\nConnect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"\n \n$getAllDevices = Get-MgDeviceManagementManagedDevice -All | `\nSelect DeviceName, UserPrincipalName, EnrolledDateTime, ComplianceState, IsEncrypted, LastSyncDateTime, Id , Manufacturer, Model, OperatingSystem, OSVersion, SerialNumber,@{l=\'PrimaryUser\';e={  $device = $_ ; Get-MgDeviceManagementManagedDeviceUser -ManagedDeviceId $device.id | select -expandproperty UserPrincipalName  }} | `\nSort OperatingSystem\n')),(0,r.kt)("h3",{id:"get-generic-device-report-from-intune"},"Get Generic Device Report from intune"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Connect with the relevant permission to read all user and device data.\nConnect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"\n \n# Get all intune "Managed" devices.\nGet-MgDeviceManagementManagedDevice -All | select DeviceName, AzureAdDeviceId, UserPrincipalName, Id, ComplianceState, EnrolledDateTime, LastSyncDateTime, Manufacturer, Model, OSVersion, SerialNumber | sort UserPrincipalName |  ft -AutoSize\n')),(0,r.kt)("h3",{id:"get-a-list-of-configuration-profiles-from-intune"},"Get a list of Configuration Profiles from Intune"),(0,r.kt)("p",null,"Get-MgDeviceManagementDeviceConfiguration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Get Configuration Profiles for an Org.\nGet-MgDeviceManagementDeviceConfiguration -All | select Id, DisplayName\n")),(0,r.kt)("h3",{id:"get-a-list-of-compliance-policies-from-intune"},"Get a list of Compliance policies from Intune"),(0,r.kt)("p",null,"Get-MgDeviceManagementDeviceCompliancePolicy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Get Compliance policies for an Org.\nGet-MgDeviceManagementDeviceCompliancePolicy -All | Select Displayname,LastModifiedDateTime, Id\n")),(0,r.kt)("h4",{id:"get-a-compliancy-report-for-a-compliance-policy"},"Get a compliancy report for a compliance policy"),(0,r.kt)("p",null,"Get-MgDeviceManagementDeviceCompliancePolicyDeviceStatuses"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Get Compliancy report for a policy\nGet-MgDeviceManagementDeviceCompliancePolicyDeviceStatuses -DeviceCompliancePolicyId 6ac10074-0704-46d1-8fe2-04fa03d413d4 | Select DeviceDisplayName, Status, UserName\n")),(0,r.kt)("h4",{id:"get-a-compliance-policy-report-for-a-single-device"},"Get a compliance policy report for a single device"),(0,r.kt)("p",null,"Get-MgDeviceManagementManagedDeviceCompliancePolicyState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"# Device Compliancy for a single device.\nGet-MgDeviceManagementManagedDeviceCompliancePolicyState -ManagedDeviceId f2c1e6c3-9330-41c9-9a91-50302c20655d\n")))}d.isMDXComponent=!0},784:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Getting-object-properties-8288e0ad50342bf42aba326996262388.png"}}]);