"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"Create an Automation Account",title:"Create an Automation Account",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Create an Automation Account",sidebar_position:2,toc_max_heading_level:4,pagination_label:"Create an Automation Account",tags:["Azure","Automation","Scripting"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Create an Automation Account for script automation in Azure."},i=void 0,l={unversionedId:"Azure/Infrastructure/Create an Automation Account",id:"Azure/Infrastructure/Create an Automation Account",title:"Create an Automation Account",description:"Create an Automation Account for script automation in Azure.",source:"@site/docs/Azure/Infrastructure/Create an Automation Account.md",sourceDirName:"Azure/Infrastructure",slug:"/Azure/Infrastructure/Create an Automation Account",permalink:"/Azure/Infrastructure/Create an Automation Account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Automation",permalink:"/tags/automation"},{label:"Scripting",permalink:"/tags/scripting"}],version:"current",sidebarPosition:2,frontMatter:{id:"Create an Automation Account",title:"Create an Automation Account",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Create an Automation Account",sidebar_position:2,toc_max_heading_level:4,pagination_label:"Create an Automation Account",tags:["Azure","Automation","Scripting"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Create an Automation Account for script automation in Azure."},sidebar:"tutorialSidebar",previous:{title:"Setup Azure Lighthouse",permalink:"/Azure/Infrastructure/Setup Azure Lighthouse"},next:{title:"Re-size a Virtual Machine",permalink:"/Azure/Infrastructure/Re-size a Virtual Machine"}},s={},u=[{value:"Document Control",id:"document-control",level:2},{value:"Outline",id:"outline",level:2},{value:"Setup the Resource Group and Automation Account.",id:"setup-the-resource-group-and-automation-account",level:2},{value:"Apply permissions to Managed(System assigned) Identity",id:"apply-permissions-to-managedsystem-assigned-identity",level:2},{value:"The command",id:"the-command",level:2},{value:"Setup Automation Runbook",id:"setup-automation-runbook",level:2},{value:"Install any Modules",id:"install-any-modules",level:2},{value:"Test Script",id:"test-script",level:2},{value:"Create the Script",id:"create-the-script",level:3},{value:"Test Script",id:"test-script-1",level:3},{value:"Setup the Schedule",id:"setup-the-schedule",level:2},{value:"Testing",id:"testing",level:2},{value:"Testing the script",id:"testing-the-script",level:3},{value:"Error handling",id:"error-handling",level:4},{value:"Confirm the data export",id:"confirm-the-data-export",level:3},{value:"Further notes",id:"further-notes",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"document-control"},"Document Control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Created: x"),(0,o.kt)("li",{parentName:"ul"},"Last Updated: 23/04/22")),(0,o.kt)("h2",{id:"outline"},"Outline"),(0,o.kt)("admonition",{title:"Run As accounts deprecation",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Run As accounts are being deprecated, managed identities are replacing this.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup the Resource Group and Automation Account."),(0,o.kt)("li",{parentName:"ol"},"Setup the Identity for the Automation Account, this is key to running scripts gainst Azure Active Directoy and Office 365 resources. "),(0,o.kt)("li",{parentName:"ol"},"Create ourselves a Runbook, that sits inside the Automation Account. "),(0,o.kt)("li",{parentName:"ol"},"Install the relevant modules for the code we want to run."),(0,o.kt)("li",{parentName:"ol"},"Write ourselves a little script. "),(0,o.kt)("li",{parentName:"ol"},"Setup a schedule for the Runbook.")),(0,o.kt)("h2",{id:"setup-the-resource-group-and-automation-account"},"Setup the Resource Group and Automation Account."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Azure portal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Search")," for Automation Account in the search bar."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Automation Account")," option, ",(0,o.kt)("strong",{parentName:"li"},"Click create")," in the middle of the screen ",(0,o.kt)("strong",{parentName:"li"},"or Click +Add")," in the top left."),(0,o.kt)("li",{parentName:"ol"},"Fill in the necessary information.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Resource Group Name (Create one if needs be)."),(0,o.kt)("li",{parentName:"ol"},"Name."),(0,o.kt)("li",{parentName:"ol"},"Region"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{alt:"Basic info",src:n(2878).Z,width:"904",height:"570"}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you Select the same region as the resources you want to query, if the account is to query something else, like Azure AD or Office 365, the region is not so important.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Advanced tab")," and Select the best option for you.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"System assigned"),", is attached to the automation account it lives and dies with the automation account resource."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"User assigned"),", is one you setup yourself in Azure AD and can be used by multiple resources and is completely seperate to your automation account."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{alt:"Basic info",src:n(6846).Z,width:"792",height:"429"})))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Review + Create")," to setup the resource.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You'll need to assign Azure ADroles and App Permissions to the System or User managed Identity, Microsoft have decided not to make this easy and it needs to be done via command line.")),(0,o.kt)("h2",{id:"apply-permissions-to-managedsystem-assigned-identity"},"Apply permissions to Managed(System assigned) Identity"),(0,o.kt)("p",null,"You'll need to apply the permissions to the Managed Identity using PowerShell unfortunatly, a Microsoft seem to have decided to make this difficult for us!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aztoso.com/security/microsoft-graph-permissions-managed-identity/."},"Reference for where this came from")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceapproleassignment?view=azureadps-2.0"},"Microsoft reference for command"),".")),(0,o.kt)("admonition",{title:"Role names",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You'll need to find the correct role\\permission name that you want to assign using the script below. ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0"},"Try this Microsoft doc for the Microosft Graph API permissions"),".")),(0,o.kt)("h2",{id:"the-command"},"The command"),(0,o.kt)("p",null,"The below is a script you can run but, you can run it line by line to see what is going on if that's more comfortable. The general gist is that you are applying the permissions from the Microsoft Graph App to your Managed Identity."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This same idea works for any of the Microsoft applications, each serivce has an application that is registered in your tenant. You can apply roles from any of them in theory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'\n# Your tenant id.\n$TenantID="Add your tenant ID"\n# Microsoft Graph App ID (DON\'T CHANGE).\n$GraphAppId = "00000003-0000-0000-c000-000000000000"\n# Name of the manage identity (same as the Logic App name).\n$DisplayNameOfMSI="Add display name of Enterprise App" \n# Check the Microsoft Graph documentation for the permission you need for the operation.\n$PermissionName = "Add your permission here" \n\n# Install the module (You need admin on the machine)\nInstall-Module AzureAD \n\n# Connect to Azure AD via tenant ID, you\'ll need an admin account to login with though.\nConnect-AzureAD -TenantId $TenantID\n# Collects the Target System Managed Identities information into the MSI variable.\n$MSI = (Get-AzureADServicePrincipal -Filter "displayName eq \'$DisplayNameOfMSI\'")\nStart-Sleep -Seconds 10\n# Store the Microsoft Graph API informaiton into the GraphServicePrincipal variable.\n$GraphServicePrincipal = Get-AzureADServicePrincipal -Filter "appId eq \'$GraphAppId\'"\n# Searches Microsoft Graph API for the value matching the PermissionName variable populated above and stores this in the AppRole Variable.\n$AppRole = $GraphServicePrincipal.AppRoles |  Where-Object {$_.Value -eq $PermissionName -and $_.AllowedMemberTypes -contains "Application"}\n# Assigned the permission from the Microsoft Graph API to the target Managed Identity.\nNew-AzureADServiceAppRoleAssignment -ObjectId $MSI.ObjectId -ResourceId $GraphServicePrincipal.ObjectId -Id $appRole.Id -PrincipalId $MSI.ObjectId\n')),(0,o.kt)("p",null,"Annotated the hell out of it as the command really confused me."),(0,o.kt)("admonition",{title:"Heads up!",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"It takes a few minutes for this change to show in the GUI."),(0,o.kt)("li",{parentName:"ul"},"If the permission already exists the prompt will error on the final command."))),(0,o.kt)("h2",{id:"setup-automation-runbook"},"Setup Automation Runbook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to the Azure portal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Search for")," and Select ",(0,o.kt)("strong",{parentName:"li"},"Automation Accounts"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Automation Accounts page, ",(0,o.kt)("strong",{parentName:"li"},"Select your Automation account")," from the list."),(0,o.kt)("li",{parentName:"ol"},"From the Automation account, ",(0,o.kt)("strong",{parentName:"li"},"Select Runbooks")," under Process Automation to open the list of runbooks."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click Create")," a runbook and fill in the information below.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Name ."),(0,o.kt)("li",{parentName:"ol"},"Select its type."),(0,o.kt)("li",{parentName:"ol"},"Select the Runtime version"),(0,o.kt)("li",{parentName:"ol"},"Enter applicable Description"))),(0,o.kt)("li",{parentName:"ol"},"Click Create to create the runbook.")),(0,o.kt)("h2",{id:"install-any-modules"},"Install any Modules"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to the Azure portal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Search for")," and Select ",(0,o.kt)("strong",{parentName:"li"},"Automation Accounts"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Automation Accounts page, ",(0,o.kt)("strong",{parentName:"li"},"Select your Automation account")," from the list."),(0,o.kt)("li",{parentName:"ol"},"From the Automation account, ",(0,o.kt)("strong",{parentName:"li"},"Select Modules")," under Shared Resources.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{alt:"Modules blade location",src:n(6019).Z,width:"1824",height:"977"})))),(0,o.kt)("li",{parentName:"ol"},"In here you can see a list of currently installed modules and you can add more by Clicking on the +Add a module button.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may find that you have to search around a bit for the module that you do actually want and when you do find the module you want, search for the command that you want to use, sometimes the module name is right but the command is missing!"),(0,o.kt)("p",{parentName:"admonition"},"Microsoft Graph is probably the most well rounded module but, it's quite finicky to use, otherwise stick with the Az Command line.")),(0,o.kt)("h2",{id:"test-script"},"Test Script"),(0,o.kt)("h3",{id:"create-the-script"},"Create the Script"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to your runbook."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click Edit")," at the top."),(0,o.kt)("li",{parentName:"ol"},"Here you can ",(0,o.kt)("strong",{parentName:"li"},"enter your script"),".")),(0,o.kt)("p",null,"Useful options on the left hand side to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CMDLETS"),", which you can use to find commands from the installed modules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ASSETS"),", which will show you the various resources available to your runbooks which are saved within your automation account resource.")),(0,o.kt)("h3",{id:"test-script-1"},"Test Script"),(0,o.kt)("p",null,"Once your done and ready to test."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click on Test pane")," at the top."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click Start")," in the top left to being running the scrpt.")),(0,o.kt)("p",null,"I found it really hard to get my head around how this works for some reason. So expect that this may take quite a few tries to get right."),(0,o.kt)("admonition",{title:"Storage Account Key",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before you can use the script as a base, you'll need to store the storage account key as a variable in your Automation account."),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Open your ",(0,o.kt)("strong",{parentName:"li"},"Automation Account"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Variables")," under Shared Resources."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add a variable"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a new ",(0,o.kt)("strong",{parentName:"li"},"string variable"),".")),(0,o.kt)("p",{parentName:"admonition"},"See the script for how to reference these in your runbooks.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Ensures you do not inherit an AzContext in your runbook\nDisable-AzContextAutosave -Scope Process | Out-Null\n\n#Storage Account Information \n$StorageACCKey = Get-AutomationVariable -Name \'stgacckey01\' \n$ContainerName = "Enter the blob container name"\n\n# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n\n$Users = Get-AzADUser | Select-Object DisplayName, Id, Mail, UserPrincipalName\n\nWrite-Output $Users\n\n# Exports the data in the $Users variable into a local environmental variable that will store the information whilst running in the Automation account. \n$Users | Export-Csv "$Env:temp\\Users.csv" -notypeinformation\n\n# Creates a new context to enable connection to the storage account. \n$Context = New-AzureStorageContext -StorageAccountName "whautomationfiledump" -StorageAccountKey $StorageACCKey\n\n# This copes the csv file in the $Env:temp/MFAState.csv variable and copies it to the blob. \nSet-AzureStorageBlobContent -Context $Context -Container $ContainerName -File "$Env:temp\\Users.csv" -Blob "Users.csv" -force\n')),(0,o.kt)("admonition",{title:"In my experience",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The test window is not like a command promtp and will not output the commands running or anything at all apart from really confusing errors. Try to build error catching into your script, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"try, catch")," commands to write the errors to the promtp for debugging. More in this in the testing section at the bottom.")),(0,o.kt)("h2",{id:"setup-the-schedule"},"Setup the Schedule"),(0,o.kt)("p",null,"This has been mostly regurgitated from ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/automation/shared-resources/schedules#create-a-new-schedule-in-the-azure-portal"},"this Microsoft link here.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From your Automation account, on the left-hand pane ",(0,o.kt)("strong",{parentName:"li"},"Select Schedules")," under Shared Resources."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add a schedule"),"."),(0,o.kt)("li",{parentName:"ol"},"Select whether the schedule runs once or on a reoccurring schedule by Selecting Once or Recurring.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If you Select Once, ",(0,o.kt)("strong",{parentName:"li"},"specify a start time")," and then ",(0,o.kt)("strong",{parentName:"li"},"Select Create"),"."),(0,o.kt)("li",{parentName:"ol"},"If you Select Recurring, ",(0,o.kt)("strong",{parentName:"li"},"specify a start time"),". For Recur every, ",(0,o.kt)("strong",{parentName:"li"},"Select how often")," you want the runbook to repeat. Select by hour, day, week, or month."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Press Create")," to complete.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You must publish the runbook before you can assign the schedule to it.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Head back to your Runbook."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Link to schedule "),"at the top."),(0,o.kt)("li",{parentName:"ol"},"Click the option to ",(0,o.kt)("strong",{parentName:"li"},"Link a schedule to your runbook"),",  ",(0,o.kt)("strong",{parentName:"li"},"Select the schedule")," you created from the list."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click OK")," to complete.")),(0,o.kt)("p",null,"Example schedule below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modules blade location",src:n(2222).Z,width:"371",height:"1117"})),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("h3",{id:"testing-the-script"},"Testing the script"),(0,o.kt)("h4",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"The test pane window for the most part will not output useful errors or show you how the script is running. I'd suggest building error handling and status updates into your script if you wish during debugging, it will help immensely."),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"try, catch")," command sytax is below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n')),(0,o.kt)("p",null,"I'd also suggest using ",(0,o.kt)("inlineCode",{parentName:"p"},"write-output")," all over the place to confirm progress and variables etc."),(0,o.kt)("admonition",{title:"Shout out",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Shout out to the VS code module for Automation Accounts, it'll let you pull down the runbook contents and edit in VsCode and upload it again. Highly recommend using this.")),(0,o.kt)("h3",{id:"confirm-the-data-export"},"Confirm the data export"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to your ",(0,o.kt)("strong",{parentName:"li"},"storage account"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"File shares or Containers option"),", wherever you saved your data to."),(0,o.kt)("li",{parentName:"ol"},"Click into the share\\container, ",(0,o.kt)("strong",{parentName:"li"},"find your file")," and Click on the ",(0,o.kt)("strong",{parentName:"li"},"3 dots")," to the right of it.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{alt:"Modules blade location",src:n(7313).Z,width:"512",height:"483"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click View\\edit"),", it should display a basic output of the file.")),(0,o.kt)("h2",{id:"further-notes"},"Further notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run As accounts are being deprecated, this method is by far the easiest to use when trying to pull info from AzureAD and Office 365.")))}p.isMDXComponent=!0},6019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autoacc-Module-install-000001-a747f8a1ea412b60a0fdcbd5c3045d6b.jpg"},2222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autoacc-Schedule-setup-001-cf4ff8d825f16c3129385f605c463dbc.jpg"},2878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autoacc-Setup-install-001-883816d3a91a9d1888fa1f5603876148.jpg"},6846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autoacc-Setup-install-002-5654d2460fa681b3c2f4a443ae875bb3.jpg"},7313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autoacc-testing-exporteddata-002-6b4454af095c3c05211ba1dedd81be21.jpg"}}]);