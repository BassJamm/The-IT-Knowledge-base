"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8580],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8478:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={draft:!1,id:"Code Snippet",title:"Code Snippet",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Code Snippet",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Code Snippet",tags:["Command Line","PowerShell"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"All things PowerShell."},a=void 0,c={unversionedId:"PowerShell/Az/Code Snippet",id:"PowerShell/Az/Code Snippet",title:"Code Snippet",description:"All things PowerShell.",source:"@site/docs/PowerShell/Az/Code-Snippet.md",sourceDirName:"PowerShell/Az",slug:"/PowerShell/Az/Code Snippet",permalink:"/docs/PowerShell/Az/Code Snippet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Command Line",permalink:"/docs/tags/command-line"},{label:"PowerShell",permalink:"/docs/tags/power-shell"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Code Snippet",title:"Code Snippet",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Code Snippet",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Code Snippet",tags:["Command Line","PowerShell"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"All things PowerShell."},sidebar:"tutorialSidebar",previous:{title:"Az",permalink:"/docs/category/az"},next:{title:"Command Reference",permalink:"/docs/PowerShell/Az/Command Reference"}},s={},l=[{value:"Copy Azure Disk to Blob",id:"copy-azure-disk-to-blob",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"copy-azure-disk-to-blob"},"Copy Azure Disk to Blob"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Source VM and Disk Informaiton.\n$sourcesubscriptionId = "Blah Blah Blah"\n$sourceResourceGroup = "rg-Blah-Blah-Blah-Blah"\n$sourceDisk = "server_name-Disk-001"\n$sourceDiskSASExpiryDuration = "3600"\n\n# Destination Storage Account Information.\n$destinationStorageAccount = "Blobcontainername"\n$destinationStorageContainer = "BlahFolder"\n$destinationStorageAccountKey = "Blah Blah Blah" \n$destinationVHDFileName = "server_name-Disk-001.vhd"\n\n# Select the source Subscription\nWrite-Host "Selecting the $($sourcesubscriptionId) subscription." -ForegroundColor Yellow\nSelect-AzSubscription -SubscriptionId $sourcesubscriptionId\n\n# Generate the Shared Access Signature (SAS) expiry duration in seconds.\nWrite-Host "Generating Shared Access Signature for source disk, $($sourceDisk)." -ForegroundColor Yellow\n$diskSASInfo = Grant-AzDiskAccess -ResourceGroupName $sourceResourceGroup -DiskName $sourceDisk -DurationInSecond $sourceDiskSASExpiryDuration -Access Read\n\n# Create the context of the storage account where the underlying VHD of the managed disk will be copied\nWrite-Host "Setting the Storage Account, $($destinationStorageAccount) as the destination." -ForegroundColor Yellow\n$destinationStorageAccountContext = New-AzStorageContext -StorageAccountName $destinationStorageAccount -StorageAccountKey $destinationStorageAccountKey\n')))}p.isMDXComponent=!0}}]);