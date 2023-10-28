"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={draft:!1,id:"Re-Mapping-Drives",title:"Re-Map Drives",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Remediation Scripts",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Remediation Scripts",tags:["Intune","Remediation","Scripts"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Document contains remediation script for removing and re-adding Drives before a VPN connection."},a=void 0,l={unversionedId:"Intune/Remediation-Scripts/Re-Mapping-Drives",id:"Intune/Remediation-Scripts/Re-Mapping-Drives",title:"Re-Map Drives",description:"Document contains remediation script for removing and re-adding Drives before a VPN connection.",source:"@site/docs/Intune/Remediation-Scripts/Re-MapDrives.md",sourceDirName:"Intune/Remediation-Scripts",slug:"/Intune/Remediation-Scripts/Re-Mapping-Drives",permalink:"/docs/Intune/Remediation-Scripts/Re-Mapping-Drives",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Intune",permalink:"/docs/tags/intune"},{label:"Remediation",permalink:"/docs/tags/remediation"},{label:"Scripts",permalink:"/docs/tags/scripts"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Re-Mapping-Drives",title:"Re-Map Drives",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Remediation Scripts",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Remediation Scripts",tags:["Intune","Remediation","Scripts"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Document contains remediation script for removing and re-adding Drives before a VPN connection."},sidebar:"tutorialSidebar",previous:{title:"Disable FTP Executable",permalink:"/docs/Intune/Remediation-Scripts/Display-FTP-executable-for-users"},next:{title:"PowerShell",permalink:"/docs/category/powershell"}},s={},c=[{value:"Detaion Script",id:"detaion-script",level:2},{value:"Remediation Script",id:"remediation-script",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The script below can be used to map a drive before a VPN connects and also can be used to create a scheduled task to remove\\re-add a drive mapping to refresh the connection."),(0,r.kt)("h2",{id:"detaion-script"},"Detaion Script"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Detects if a Schedlued task has been created on the endpoint to determine if the remediation script should run.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'##################################################################################\n# Detect Scheduled task for drive re-creation\n##################################################################################\n\n########## Create log file. ##########\n$logFileLocation = "C:\\ProgramData\\Outputs\\DriveMapping\\Multiple-Drives"\n$logFileName = "Detect-MultiDrive-Scheduled-Task.log"\n\n# Remove log file if found.\nif (Test-Path -path $logFileLocation\\$logfileName) {\n    Remove-Item -Path $logFileLocation\\$logfileName \n}\n\nNew-Item -Path $logFileLocation -Name $logFileName -ItemType File -Force\nfunction WriteToLogFile($message) {\n    Add-Content "$logFileLocation\\$logFileName" -Value "$(Get-Date) - $($message)"\n}\nWriteToLogFile "Log Created\\Updated."\nWriteToLogFile "Script begins now."\n\n$task = Get-scheduledTask -TaskName "Map-Multiple-Drive" -ErrorAction SilentlyContinue\n\nif ( ($task).Count -gt 0 ) {\n    WriteToLogFile "$($task.TaskName) task already exists."\n    WriteToLogFile "Exiting with Code 0, nothing to remediate."\n    Exit 0\n}else {\n    WriteToLogFile "Task does not exist."\n    WriteToLogFile "Exiting with Code 1, remediation script should run."\n    Exit 1\n}\n')),(0,r.kt)("h2",{id:"remediation-script"},"Remediation Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'##################################################################################\n# Register a scheduled task to run for all users and execute the script on logon #\n##################################################################################\n\n########## Create log file. ##########\n$logFileLocation = "C:\\ProgramData\\Output\\DriveMapping\\Multiple-Drives"\n$logfileName = "Create-MultiDriveMapping-ScheduledTask.log"\n\n# Remove log file if found.\nif (Test-Path -path $logFileLocation\\$logfileName) {\n    Remove-Item -Path $logFileLocation\\$logfileName \n}\nNew-Item -Path "C:\\ProgramData\\Output\\" -Name "DriveMapping" -ItemType Directory -Force\nfunction WriteToLogFile($message) {\n    Add-Content "$logFileLocation\\$logfileName" -Value "$(Get-Date) - $($message)"\n}\nWriteToLogFile "Log Created."\nWriteToLogFile "Script Begins here."\n\n########## Create the script on the local deivce. ##########\n\n$scriptLocation = "C:\\ProgramData\\Output\\DriveMapping\\Multiple-Drives\\Map-multiple-Drives.ps1"\n$scriptContent = @\'\n##################################################################################\n#                             Create Multiple Drives                             #\n##################################################################################\n\n######################### Function to Create log file. ##################################################\n\n########## Create log file. ##########\n$logFileLocation = "C:\\ProgramData\\Output\\DriveMapping\\Multiple-Drives"\n$logFileName = "Create-Multiple-Drive-RegKeys.log"\n\n# Remove log file if found.\nif (Test-Path -path $logFileLocation\\$logfileName) {\nRemove-Item -Path $logFileLocation\\$logfileName \n}\n\nNew-Item -Path $logFileLocation -Name $logFileName -ItemType File -Force\nfunction WriteToLogFile($message) {\nAdd-Content "$logFileLocation\\$logFileName" -Value "$(Get-Date) - $($message)"\n}\nWriteToLogFile "Log Created\\Updated."\nWriteToLogFile "Script begins now."\n\n######################### Function to set Registry Keys ###################################\nfunction setRegKeys {\n\n# Add the relevant information to Key.\n$ConnectionType = "00000001"\n$DeferFlags = "00000004"\n$ProviderFlags = "00000000"\n$ProviderName = "Microsoft Windows Network"\n$ProviderType = "00000001"\n$UseOptions = ([byte[]](0x44, 0x65, 0x66, 0x43, 0x7c, 0x00, 0x00, 0x00, 0x04, 0x00, 0x74, 0x00, 0x00, 0x00, 0x02, 0x00, 0x03, 0x00, 0x01, 0x00, 01, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x80, 0x00))\n$UserName = "00000000"\n$lastWriteTime = Get-Date -UFormat "%A %m/%d/%Y %R %Z"\n\ntry {\nNew-ItemProperty -Path $registryPath\\$keyName -Name "ConnectionType" -Value $ConnectionType -PropertyType DWORD -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "DeferFlags" -Value $DeferFlags -PropertyType DWORD -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "ProviderFlags" -Value $ProviderFlags -PropertyType DWORD -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "ProviderName" -Value $ProviderName -PropertyType STRING -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "ProviderType" -Value $ProviderType -PropertyType DWORD -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "RemotePath" -Value $RemotePath -PropertyType ExpandString -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "UseOptions" -Value $UseOptions -PropertyType Binary -Force\nNew-ItemProperty -Path $registryPath\\$keyName -Name "UserName" -Value $UserName -PropertyType DWORD -Force | Out-Null\nNew-ItemProperty -Path $registryPath\\$keyName -Name "lastWriteTime" -Value $lastWriteTime -PropertyType ExpandString -Force | Out-Null\n\n}\ncatch {\nWriteToLogFile "Error, script failed."\nWriteToLogFile $_\n}\n\n\n}\n\n######################### Set the Drive Mappings. #########################\n\n# CSV Data to be converted.\n$csv = @"\nName,Path\nx,\\\\servername\\sharename\n"@\n\n# Convert from CSV to objects.\n$drives = $csv | ConvertFrom-Csv\nWriteToLogFile "Ingesting CSV Data."\n\n# Loop through each entry in the CSV.\nWriteToLogFile "Creating new registry keys at, $($registryPath)."\n\ntry {\n\nforeach ($Drive in $Drives) {\n\n# Set variables.\n$keyName = $drive.Name\n$RemotePath = $drive.Path\n$registryPath = "Registry::HKEY_CURRENT_USER\\Network"\n\n# Check for current drive mapping and remove it if it exists.\nWriteToLogFile "Checking if drive mapping already exists."\nif ((Get-SmbMapping -LocalPath ($keyName + \':\') -ErrorAction SilentlyContinue).Count -gt 0) {\nRemove-SmbMapping -LocalPath ($keyName + \':\') -Force -ErrorAction SilentlyContinue\n}\nWriteToLogFile "Drive $(($keyName + \':\')) has been found and removed."\n\n# Create the new Registry Keys\nNew-Item -Path $registryPath -Name $keyName -Force\nWriteToLogFile "New mapping being created. Local Name: $($keyName), Remote Path: $($RemotePath)."\nsetRegKeys # Runs the function to create the keys.\n}\nWriteToLogFile "All Drives mapped successfully."\nExit 0 # Returns success code back to Intune for reporting.\n}\ncatch {\nWriteToLogFile "Error mapping the drives."\nWriteToLogFile $_\nExit 1 # Returns failure code back to Intune for reporting.\n}\n\'@\n\nWriteToLogFile "Checking for multi-Drive Mapping Script here, $($scriptLocation)"\n\nif (Test-Path -Path $scriptLocation) {\n    Remove-Item -path $scriptLocation\n    WriteToLogFile "Script found and removed."\n}\n\ntry {\n    $scriptContent | Add-Content $scriptLocation\n    WriteToLogFile "Script at location, $($scriptLocation) updated."\n    \n}\ncatch {\n    WriteToLogFile "Unable to copy the script file to $($scriptLocation)."\n    WriteToLogFile $_\n    Exit 1 # Returns failure code back to Intune for reporting.\n}\n\n########## Create logon task. ##########\n\n$schtaskName = "Map-Multiple-Drives"\n$schtaskPath = "MyTasks"\nWriteToLogFile "Creating new Scheduled task called, $($schtaskName)."\n$action = New-ScheduledTaskAction -Execute \'Powershell.exe\' -Argument \'-WindowStyle hidden -command "& C:\\Programdata\\Output\\DriveMapping\\Map-multiple-Drives.ps1"\'\n$trigger = New-ScheduledTaskTrigger -AtLogon\n$principal = New-ScheduledTaskPrincipal -GroupId "Users"\n$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 10) -Hidden \n$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger -Settings $settings\n\ntry {\n    Register-ScheduledTask -TaskName $schtaskName -InputObject $task -TaskPath $schtaskPath\n    WriteToLogFile "Task Registered successfully."\n    Exit 0 # Returns succes code back to Intune for reporting.\n}\ncatch {\n    WriteToLogFile "Unable to register task."\n    WriteToLogFile $_\n    Exit 1 # Returns failure code back to Intune for reporting.\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Created: 2023-10-27, Last Updated: 2023-10-28"))}m.isMDXComponent=!0}}]);