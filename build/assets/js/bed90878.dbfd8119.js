"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[315],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(o),h=i,u=m["".concat(a,".").concat(h)]||m[h]||p[h]||r;return o?n.createElement(u,l(l({ref:t},d),{},{components:o})):n.createElement(u,l({ref:t},d))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=h;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4989:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={id:"Windows Troubleshooting",title:"Windows Troubleshooting",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Windows Troubleshooting",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Windows Troubleshooting",tags:["Refernce Doc","CMDLet"],description:"Windows Troubleshooting in PowerShell."},l=void 0,s={unversionedId:"PowerShell/Windows Troubleshooting",id:"PowerShell/Windows Troubleshooting",title:"Windows Troubleshooting",description:"Windows Troubleshooting in PowerShell.",source:"@site/docs/PowerShell/Windows Troubleshooting.md",sourceDirName:"PowerShell",slug:"/PowerShell/Windows Troubleshooting",permalink:"/PowerShell/Windows Troubleshooting",draft:!1,tags:[{label:"Refernce Doc",permalink:"/tags/refernce-doc"},{label:"CMDLet",permalink:"/tags/cmd-let"}],version:"current",sidebarPosition:3,frontMatter:{id:"Windows Troubleshooting",title:"Windows Troubleshooting",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Windows Troubleshooting",sidebar_position:3,toc_max_heading_level:4,pagination_label:"Windows Troubleshooting",tags:["Refernce Doc","CMDLet"],description:"Windows Troubleshooting in PowerShell."},sidebar:"tutorialSidebar",previous:{title:"Error Management",permalink:"/PowerShell/Error Management"}},a={},c=[{value:"Document Control",id:"document-control",level:2},{value:"Collect System information (systeminfo)",id:"collect-system-information-systeminfo",level:2},{value:"Collect IP address info (Ipconfig)",id:"collect-ip-address-info-ipconfig",level:2},{value:"Test Connection (Test-NetConnection)",id:"test-connection-test-netconnection",level:2},{value:"Time stamped ping (Test-NetConnection)",id:"time-stamped-ping-test-netconnection",level:3},{value:"Collecting Event Logs (Get-EventLog)",id:"collecting-event-logs-get-eventlog",level:2},{value:"Collect Printer information (Get-printer)",id:"collect-printer-information-get-printer",level:2},{value:"Collect Group Policy Information (gpresult /v)",id:"collect-group-policy-information-gpresult-v",level:2},{value:"Collect Azure Active Directory (AzureAD, AAD) (dsregcmd)",id:"collect-azure-active-directory-azuread-aad-dsregcmd",level:2},{value:"Collect the &#39;key&#39; info from dsregcmd command",id:"collect-the-key-info-from-dsregcmd-command",level:3}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"document-control"},"Document Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created: 2023/03/30"),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2023/04/01")),(0,i.kt)("h2",{id:"collect-system-information-systeminfo"},"Collect System information (systeminfo)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n\nsysteminfo | Out-File -FilePath C:\\SystemDiagnosticCollection\\SystemInfo.txt # Command collects the systeminfo data and dumps it to text file.\nWrite-host 'System Info Collected' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h2",{id:"collect-ip-address-info-ipconfig"},"Collect IP address info (Ipconfig)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\nipconfig /all | Out-File -FilePath C:\\SystemDiagnosticCollection\\IpAddressingInfo.txt # Collects the IP info and dumps it to text file.\nWrite-host 'ipconfig ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h2",{id:"test-connection-test-netconnection"},"Test Connection (Test-NetConnection)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item "C:\\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.\nWrite-host \'Folder created at C:\\SystemDiagnosticCollection\' # Add this if you\'re writing a script where you need to update the PowerShell prompt.\n\n# Test Connection to Google\nTest-NetConnection www.google.com -InformationLevel "Detailed" | Out-File -FilePath C:\\SystemDiagnosticCollection\\pingtoGoogle-FQDN.txt\n')),(0,i.kt)("h3",{id:"time-stamped-ping-test-netconnection"},"Time stamped ping (Test-NetConnection)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showlineNumbers",showlineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n# Time Stamped Ping test\nTest-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\\SystemDiagnosticCollection\\PingtoGoogle-IP.txt\nWrite-host 'Network Tests ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h2",{id:"collecting-event-logs-get-eventlog"},"Collecting Event Logs (Get-EventLog)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n# Collect System Logs\nGet-Eventlog -LogName System -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\\SystemDiagnosticCollection\\System_Logs.csv -notype\n# Collect Application Logs\nGet-Eventlog -LogName Application -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\\SystemDiagnosticCollection\\Application_Logs.csv -notype\nWrite-host 'Successfully gathered Event Logs'\n")),(0,i.kt)("h2",{id:"collect-printer-information-get-printer"},"Collect Printer information (Get-printer)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n# Collect printer information\nGet-printer | Out-File -FilePath C:\\SystemDiagnosticCollection\\Printer-Info.txt\nWrite-host 'Gathered Printer info' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h2",{id:"collect-group-policy-information-gpresult-v"},"Collect Group Policy Information (gpresult /v)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n# Collect printer information\ngpresult /v | Out-file -FilePath C:\\SystemDiagnosticCollection\\GpResult.txt\nWrite-host 'Gathered GPO status' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h2",{id:"collect-azure-active-directory-azuread-aad-dsregcmd"},"Collect Azure Active Directory (AzureAD, AAD) (dsregcmd)"),(0,i.kt)("admonition",{title:"dsregcmd",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This command is a command prompt command only.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory # Creates the folder and the desired path.\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.\n\n# Collect printer information\ndsregcmd /status | Out-File -FilePath C:\\SystemDiagnosticCollection\\Hybrid-Joined-status.txt\nWrite-host 'Successfully checked for Hybrid-Joined status' # Add this if you're writing a script where you need to update the PowerShell prompt.\n")),(0,i.kt)("h3",{id:"collect-the-key-info-from-dsregcmd-command"},"Collect the 'key' info from dsregcmd command"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This script could use a little tidying up but, it should give you an idea of what is needed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},"\nNew-Item \"C:\\SystemDiagnosticCollection\" -itemType Directory\nWrite-host 'Folder created at C:\\SystemDiagnosticCollection' #not finished yet, it'll print out only.\n\nWrite-host 'Basic AAD Info'\ndsregcmd /status | select-string -Pattern 'Device Name'  | Out-File -FilePath C:\\SystemDiagnosticCollection\\Basic-AAD-Info.txt\ndsregcmd /status | select-string -Pattern 'AzureADJoined' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\Basic-AAD-Info.txt\ndsregcmd /status | select-string -Pattern 'DeviceId' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\Basic-AAD-Info.txt\ndsregcmd /status | select-string -Pattern 'TenantName' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\Basic-AAD-Info.txt\n\nwrite-host 'Single Sign on Info'\ndsregcmd /status | select-string -Pattern 'AzureAdPrt' | Out-File -FilePath C:\\SystemDiagnosticCollection\\Single-Sign-on-Info.txt\ndsregcmd /status | select-string -Pattern 'AzureAdPrtUpdateTime' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\Single-Sign-on-Info.txt\ndsregcmd /status | select-string -Pattern 'RefreshPrtDiagnostics' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\Single-Sign-on-Info.txt\n\nWrite-host 'System Information'\nsysteminfo | Select-String -Pattern 'OS Name' | Out-File -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\nsysteminfo | Select-String -Pattern 'OS Version' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\nsysteminfo | Select-String -Pattern 'Original Install Date' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\nsysteminfo | Select-String -Pattern 'System Boot Time' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\nsysteminfo | Select-String -Pattern 'Time Zone' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\nsysteminfo | Select-String -Pattern 'Total Physical Memory' | Out-File -Append -FilePath C:\\SystemDiagnosticCollection\\System-Information.txt\n")))}m.isMDXComponent=!0}}]);