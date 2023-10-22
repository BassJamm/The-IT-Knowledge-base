"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Setup-Azure-Lighthouse","metadata":{"permalink":"/blog/Setup-Azure-Lighthouse","source":"@site/blog/2023-10-21-Setup-Lighthouse/Setup-AzureLighthouse.md","title":"Azure ligthhouse Setup","description":"The lesssons I have learned setting up Azure Ligthouse.","date":"2023-10-21T13:00:00.000Z","formattedDate":"October 21, 2023","tags":[{"label":"Azure","permalink":"/blog/tags/azure"},{"label":"Lighthouse","permalink":"/blog/tags/lighthouse"}],"readingTime":4.836666666666667,"hasTruncateMarker":true,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"frontMatter":{"draft":false,"title":"Azure ligthhouse Setup","description":"The lesssons I have learned setting up Azure Ligthouse.","slug":"Setup-Azure-Lighthouse","date":"2023-10-21T13:00","toc_max_heading_level":5,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"tags":["Azure","Lighthouse"],"image":"https://i.imgur.com/mErPwqL.png","hide_table_of_contents":false},"nextItem":{"title":"Challenge 2 - Folder Size Report with PowerShell","permalink":"/blog/pwsh-challenge-002"}},"content":"In this post, are the lessons learned when I first setup Azure Lighthouse as well as things I have picked up over the course of my year of using/supporting it within the company I work for.\\n\\n\x3c!--truncate--\x3e\\n\\nAzure Lighthouse serves as a central command hub for businesses and service providers in the Azure cloud. It simplifies the management of various Azure accounts, making it a breeze to oversee resources and services while boosting security and efficiency. Think of it as your go-to control center for all things Azure.\\n\\n## Online Reading\\n\\nBelow are some links that are good reading before you dig into setting up the application.\\n\\n- [Microsoft doc - What is Azure Lighthouse?](https://learn.microsoft.com/en-us/azure/lighthouse/overview).\\n- [Microsoft doc - Onboard a customer to Azure Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/onboard-customer).\\n\\n## Setup Guidance\\n\\nYou\'ve got some key areas to think about here before you get started, Azure AD and your Azure Lighthouse offering/delegation. Before you get cracking think about the following:\\n\\n> These are all explained further down!\\n\\nAzure Active Directory:\\n\\n- Are you going to create seperate groups per department.\\n- What is your naming convention going to be.\\n\\nAzure Lighthouse offering/delegation:\\n\\n- Offering Naming Convention (Client will see this).\\n- Offering Description (Client will see this).\\n- Authorisations.\\n- Delegation Scopes (Subscription level or Resource Group Leve.)\\n\\n:::caution My Opinions\\nI\'d highly recommend reviewing the links mentioned in the Online Reading section for up to date information. The information following this point are from my notes.\\n:::\\n\\n### Azure AD\\n\\nTo set things up, start by creating some groups within Azure AD. These groups will include the satff members who need access to the customer/client through Azure lighthouse. You have the flexibility to make these groups as detailed and numerous as needed.\\n\\nI recommend considering two key roles, these roles can be fine-tuned to meet your specific requirements:\\n\\n- *Azure Lighthouse Contributor*\\n- *Azure Lighthouse Reader*\\n\\n:::tip Role Assignment to staff business roles.\\nInitially, I attempted to set up separate groups for each department, such as Operations, Service Desk, and Finance. While this approach worked well for the technical teams, it didn\'t meet my expectations when it came to granting access to billing information for the Finance team. After extensive testing, I discovered that using direct or named accounts, or leveraging the Microsoft Partner Center, provided a more effective solution.\\n:::\\n\\n### Azure Lighthouse Offering\\n\\n#### ARM Template\\n\\nBelow is an outline and suggestion for each relevant configurable options for the ARM template.\\n\\n:::info On-boarding multiple Subscriptions or Resource Groups for one client\\\\customer.\\nYou have the option to delegate multiple resource groups and subscriptions all at once from the Service Providers dashboard within the customer\'s tenant. While the documentation might imply otherwise, it is indeed possible and functional.\\n:::\\n\\n##### Offering Name\\n\\nWhen naming your offering, remember that it will be visible in your customer\'s tenant, so it\'s important that it looks good. I recommend using a format like this:\\n\\n- `Managing Company Name` Lighthouse Offering for `Customer Name` - `Subscription or Resource Group Name`.\\n\\nBe sure to replace the placeholders with the relevant details based on your naming convention.\\n\\n##### Description(s)\\n\\nThe description is customer-facing, so it should be clear and informative. Here\'s a suggested format:\\n\\n- `Managing Company Name` managed services offer for overseeing supported resources.\\n- `Managing Company Name` offer for managing and overseeing project resources for `project or PO number`.\\n\\n##### Delegation Scope(s)\\n\\nYou have two options: `Subscription` and `Resource Group`. These choices are quite self-explanatory. However, it\'s important to note that you cannot change these after deployment, so be sure to select the one that suits your specific needs.\\n\\n##### Authorisations\\n\\nAuthorisations represent the roles you intend to assign to your pre-configured Azure AD groups. You have the flexibility to define these roles as either broad or specific, although I recommend a broader approach to minimize the need for creating or updating new delegations in the future.\\n\\n:::caution Broader Authorisations\\nWhile this approach may sound appealing in theory, it\'s crucial to think about security. It may not be advisable if you are responsible for managing a small portion or a specific resource within your customer\'s environment. Additionally, consider the nature of your customer in this context.\\n:::\\n\\n- **Principal type**: Group\\n- **Name**: Choose one of the mentioned groups in the section above.\\n- **Display Name**: Please do not edit. (This is the friendly name displayed in the customer\'s tenant, and it will default to the group name.)\\n- **Role**: Assign the roles as indicated for the groups listed above.\\n- **Access Type**: Permanent.\\n\\n### ARM template Example\\n\\nYou can skip the initial lines until you locate `mspOfferName`. In the vicinity of this, you\'ll find the description field. To make changes, modify the `defaultValue:` data, not the `description:` information.\\n\\n:::tip Confirming your scope\\nLocate the line `\\"$schema\\": \\"https://schema.management.azure.com/schemas/2019-08-01/subscriptionDeploymentTemplate.json#\\",` and modify it to reflect either a subscription or resource deployment template, depending on your initial selection.\\n:::\\n\\n\\nSimilar situation with the `mspOfferDescription:` as well.\\n\\n```json showLineNumbers\\n\\"mspOfferName\\": {\\n   \\"type\\": \\"string\\",\\n   \\"metadata\\": {\\n    \\"description\\": \\"Specify a unique name for your offer\\"\\n   },\\n   \\"defaultValue\\": \\"My Company Lighthouse Contributor Offer for Customer Name - Subscription Name \\"\\n  },\\n\\n  \\"mspOfferDescription\\": {\\n   \\"type\\": \\"string\\",\\n   \\"metadata\\": {\\n    \\"description\\": \\"Name of the Managed Service Provider offering\\"\\n   },\\n   \\"defaultValue\\": \\"My Company managed services offer to administer support resources.\\"\\n  }\\n```\\n\\n\\nLocate the `variables:` section to define your group and the Azure role assignments.\\n\\n- `managedByTenantId\\"` - is your tenant or partner tenant ID.\\n- `\\"authorizations\\":` - Are you Azure Roles assignments.\\n- `\\"principalId\\"` - Is your object in the managing tenant.\\n- `\\"roleDefinitionId\\"` - Is the Azure AD role you\'ve assigned. In the case below, it\'s `Contributor` and the `Managed Services Registration assignment Delete` roles.\\n- `\\"principalIdDisplayName\\"` - Is your friendly Group name, this will show in your customer tenant, it does not need to match the group name in the managing tenant.\\n\\nYou\'ll see some of the information repeated for each role you assign to the same object in the managing tenant.\\n\\n```json showLineNumbers\\n\\"variables\\": {\\n  \\"mspRegistrationName\\": \\"[guid(parameters(\'mspOfferName\'))]\\",\\n  \\"mspAssignmentName\\": \\"[guid(parameters(\'mspOfferName\'))]\\",\\n  \\"managedByTenantId\\": \\"Your tenant ID\\",\\n  \\"authorizations\\": [\\n   {\\n    \\"principalId\\": \\"Your object in the managing tenant\\",\\n    \\"roleDefinitionId\\": \\"Id-number-here\\",\\n    \\"principalIdDisplayName\\": \\"Lighthouse Contributor\\"\\n   },\\n   {\\n    \\"principalId\\": \\"Your object in the managing tenant\\",\\n    \\"roleDefinitionId\\": \\"Id-number-here\\",\\n    \\"principalIdDisplayName\\": \\"Lighthouse Contributor\\"\\n   }\\n  ]\\n },\\n ```\\n\\n:::tip You can edit the JSON template directly!\\nYou don\'t need to always duck back into Azure Lighthouse to create the templates, you can just edit the JSON files if you\'re comfortable doing so.\\n:::\\n\\n## Using Lighthouse\\n\\nAfter setting up and assigning your Lighthouse delegations to your staff, there\'s no specific action required to access Azure Lighthouse. It\'s consistently available. Below, we provide two methods to verify the status of your delegations.\\n\\n### Via the Lighthouse blade\\n\\n1. Open the **Azure Management Portal**.\\n2. Search for **Azure Lighthouse**.\\n3. Click on the **Delegations** option on the left-hand side, you may need to click manage my customers if you\u2019ve no connections.\\n4. You will then see your list of your customer\u2019s subscriptions that you have access to.\\n\\n### Via the subscriptions blade\\n\\n> You\'ll need to show the customer in the subscription filter first though.\\n\\n1. Open the **Azure Management Portal**.\\n2. Navigate to the **Subscriptions blade**.\\n3. The list of subscriptions will also list the customer subscriptions you have access too.\\n4. In the **Azure portal**, Select the **Directory + subscriptions** or **Settings icon** in the top right of the page.\\n5. In the Directories + subscriptions settings page, ensure that the **Advanced filters toggle is turned off**.\\n6. In the Default subscription filter section, **select the appropriate directory** and subscription.\\n\\n:::info\\nIf you have been granted access to one or more resource groups, rather than to an entire subscription, select the subscription to which that resource group belongs. You\'ll then work in the context of that subscription, but will only be able to access the designated resource group(s).\\n:::\\n\\n## Partner Earned Credit (PEC) using PAL\\n\\nPAL (Partner Admin Link) is how a partner can be recognized by Microsoft for their work in Azure on-behalf-of their customer.\\n\\n- [Microsoft doc - Associate your partner ID when you onboard new customers vai Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/partner-earned-credit#associate-your-partner-id-when-you-onboard-new-customers).\\n- [Microsoft doc - Link a PartnerID with PAL or DPOR for PAL](https://learn.microsoft.com/en-us/partner-center/link-partner-id-for-azure-performance-pal-dpor#link-to-a-partnerid-with-pal)\\n\\nTo do this via Lighthouse, in a nutshell.\\n\\n1. [**Create a service principal**](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-authenticate-service-principal-powershell) user account in your managing tenant.\\n2. Using that service principal account, [**link to your Associated Partner ID**](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/link-partner-id#link-to-a-partner-id) in your managing tenant.\\n3. Include at least one authorization which includes the service principal Account as a user with an Azure built-in role that is eligible for PEC.\\n\\n:::caution\\nThis role must be granted as a permanent assignment, not as a just-in-time eligible authorization, in order for PEC to apply.\\n:::"},{"id":"pwsh-challenge-002","metadata":{"permalink":"/blog/pwsh-challenge-002","source":"@site/blog/2023-08-02-pwsh-challenge002/PWSH-Challenge-002.md","title":"Challenge 2 - Folder Size Report with PowerShell","description":"Create a script that can download any file by the URL given by a user.","date":"2023-08-07T11:00:00.000Z","formattedDate":"August 7, 2023","tags":[{"label":"PowerShell","permalink":"/blog/tags/power-shell"},{"label":"Script","permalink":"/blog/tags/script"},{"label":"Challenge","permalink":"/blog/tags/challenge"}],"readingTime":3.3766666666666665,"hasTruncateMarker":true,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"frontMatter":{"draft":false,"title":"Challenge 2 - Folder Size Report with PowerShell","description":"Create a script that can download any file by the URL given by a user.","slug":"pwsh-challenge-002","date":"2023-08-07T11:00","authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"tags":["PowerShell","Script","Challenge"],"image":"https://cdn.hashnode.com/res/hashnode/image/upload/v1690624765820/c7da8f32-0c1e-4ca0-a807-bb4efe449c18.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp","hide_table_of_contents":false},"prevItem":{"title":"Azure ligthhouse Setup","permalink":"/blog/Setup-Azure-Lighthouse"},"nextItem":{"title":"Challenge 1 - File Download Script with PowerShell","permalink":"/blog/pwsh-challenge-001"}},"content":"Create a script that calculates the total size of a given folder and all its subfolders (recursively). The script should display the size in a human-readable format (e.g., KB, MB, GB).\\n\\n\x3c!--truncate--\x3e\\n:::info Quick Social Plug\\n\\nCheck out my other post locations: -\\n\\n- [HashNode Link](https://willh.hashnode.dev/)\\n- [Patreon Link](https://patreon.com/BassJamm?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link)\\n\\n:::\\n\\n## End Result\\n\\nThought I would put the result first, and save people from scrolling, those who wish to see the process can read the rest of this!\\n\\nI decided not to add any error handling into this, as it\'s quite hard to break this one!\\n\\n:::note\\n\\nSorry for the backticks, it makes it a bit easier to read on the page as it\'s quite slim!\\n\\n:::\\n\\n[Link to script in GitHub!](https://github.com/BassJamm/PowerShellChallenge/blob/51799e1b087f846285f15bff9df9f019caa12fdc/Folder-Report/TOOL-Folder-Report.ps1)\\n\\n```powershell showLineNumbers\\n###### Prompt user for flder input. ######\\n$sourceDirectory = Read-Host -Prompt \\"Please enter the directory you wish to scan\\"\\n\\n###### Get all Directories in that location. ######\\nWrite-Host \\"Collecting the diretory information.\\" -ForegroundColor Yellow\\n$ChildDirectories = (Get-ChildItem $sourceDirectory -Directory).FullName\\nStart-Sleep 1\\nWrite-Host \\"Directories found successfully.\\" -ForegroundColor Green\\n\\n###### Foreach directory get all items recursively. ######\\nWrite-Host \\"Processing items.\\" -ForegroundColor Yellow\\n$childDirectorySizes = foreach ($folder in $ChildDirectories) {\\n    [PSCustomObject]@{\\n        \\"Location\\"  = $folder\\n        \\"FileItems\\" = (Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object | Select-Object Count).Count\\n        \\"Size(MB)\\"  = [Math]::Round((Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object -Property Length -Sum | Select-Object Sum).Sum / 1MB, 3)\\n    }\\n\\n}\\nWrite-Host \\"All subdirectories processed successfully.\\" -ForegroundColor Green\\n\\n###### Provide a size report of the directory and child directories. ######\\n$childDirectorySizes | Format-Table * -AutoSize\\n\\n```\\n\\n## Building the script\\n\\nI would like to start by saying I am not an expert at this but, these challenges prompt learning and thus I aim to be better for the next challenge and so on.\\n\\n### Prompting for user input\\n\\nFirstly, we need to get the folder location from the end user. I\'ve done this using the Read-Host command with the `-prompt` parameter. This is a staple command I have found in almost every script requiring user input.\\n\\n```powershell showLineNumbers\\n$sourceDirectory = Read-Host -Prompt \\"Please enter the directory you wish to scan\\"\\n```\\n\\nThe `Read-Host -prompt` input is then stored in the `$sourceDirectory`` variable for later use.\\n\\n### Getting the Folders\\n\\nSecondly, we need to identify the folders that are within the directory the user gave us. We are doing this with the `Get-ChildItem` command, which gets everything in that location, Folders, or Files.\\n\\nI\'m then piping this `|` into a `Where-Object` command which then identifies the Folders or containers.\\n\\n:::info\\nI\'ve added a sort by \\"name\\" at the end, as I want to display the first 10 items in the console, to indicate that the script has found items to the end user. It is completely unnecessary!\\n:::\\n\\n```powershell showlineNumbers\\n###### Prompt user for flder input. ######\\n$sourceDirectory = Read-Host -Prompt \\"Please enter the directory you wish to scan\\"\\n```\\n\\nWe then get all of hte directories in the folder location promtped for using the lin above.\\n\\n```powershell showLineNumbers\\n###### Get all Directories in that location. ######\\n$ChildDirectories = (Get-ChildItem $sourceDirectory -Directory).FullName\\nStart-Sleep 1 # Add this for slightly better pacing when using the script.\\n\\n```\\n\\n### Getting the Folder Sizes\\n\\nThirdly, we need to get the folder sizes and convert them into a nicer format to read, quite a bit to unpack on this one, so please bear with my explanation; you may also want to blow this image up, it\'s a little small, sorry!\\n\\n```powershell showLineNumbers\\n###### Foreach directory get all items recursively. ######\\nWrite-Host \\"Processing items.\\" -ForegroundColor Yellow\\n$childDirectorySizes = foreach ($folder in $ChildDirectories) {\\n    [PSCustomObject]@{\\n        \\"Location\\"  = $folder\\n        \\"FileItems\\" = (Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object | Select-Object Count).Count\\n        \\"Size(MB)\\"  = [Math]::Round((Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object -Property Length -Sum | Select-Object Sum).Sum / 1MB, 3)\\n    }\\n}\\n```\\n\\nI\'ve created a new variable called, `$childDirectorySizes` in this variable, we are going to store the output of the foreach loop.\\n\\nThe foreach the argument takes each folder entry found within the `$ChildDirectories` & then loops through the script inside the squiggly brackets.\\n\\n```powershell showLineNumbers\\nforeach ($folder in $ChildDirectories)\\n```\\n\\nThe foreach loop does the following: -\\n\\n1. Grabs the full file paths for each file recursively using `Get-ChildItem $folder.FullName -recurse -force`.\\n2. Then it searches for any objects that are not a Folder using `Where-Object {$_.PSIsContainer -eq $false}`.\\n3. It then measures the object using `Measure-Object -property Length -sum`.\\n4. We then select only the one property that we want, `Select-Object Sum`.\\n5. It then stores results inside the variable `$subFolderItems`.\\n6. We then create a new PowerShell object using the command, `[PSCustomObject]`, as this is going to be a new Hash table, we add the `@{}` after it, all properties go inside the squiggly brackets.\\n7. We then create 2 new properties, `Location` and `Size(MB)`. For each of these properties, we need to tell it where the information comes from and how to format it.\\n\\nFor `Location`, we are going to use the Items Full name, which is equal to its full UNC path. `$folder.FullName`.\\n\\nFor `Size(MB)`, we are going to use the Output of steps 1 to 5. The output from this should be the SUM of all the files under the folder item that\'s stored in the variable `$folder` which is in the foreach loop argument.\\n\\nWe also want to round this to MBs with 2 Decimal places; we can do this with the command, `[Math]::Round($subFolderItems.sum /1MB, 2)`.\\n\\n### Creating a console Ouput\\n\\nFor this point, I have taken the variable that is holding the output from the Foreach loop noted above and piped this into a Format-Table command with the order of the properties to show.\\n\\n```powershell showLineNumbers\\n###### Provide a size report of the directory and child directories. ######\\n$childDirectorySizes | Format-Table * -AutoSize\\n```\\n\\nWhich gives you this.\\n\\n```powershell showLineNumbers\\nLocation                           FileItems Size(MB)\\n--------                           --------- --------\\nC:\\\\GitRepos\\\\100-days-of-javascript       287   59.772\\nC:\\\\GitRepos\\\\PowerShellChallenge          106    0.072\\nC:\\\\GitRepos\\\\Private-Code-Dump            253   14.089\\nC:\\\\GitRepos\\\\python-app                    97    0.067\\nC:\\\\GitRepos\\\\The-IT-Knowledge-base      36396  414.871\\n```"},{"id":"pwsh-challenge-001","metadata":{"permalink":"/blog/pwsh-challenge-001","source":"@site/blog/2023-08-05-pwsh-challenge001/PWSH-challenge-001.md","title":"Challenge 1 - File Download Script with PowerShell","description":"Create a script that can download any file by the URL given by a user.","date":"2023-08-05T11:00:00.000Z","formattedDate":"August 5, 2023","tags":[{"label":"PowerShell","permalink":"/blog/tags/power-shell"},{"label":"Script","permalink":"/blog/tags/script"},{"label":"Challenge","permalink":"/blog/tags/challenge"}],"readingTime":3.4366666666666665,"hasTruncateMarker":true,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"frontMatter":{"title":"Challenge 1 - File Download Script with PowerShell","description":"Create a script that can download any file by the URL given by a user.","slug":"pwsh-challenge-001","date":"2023-08-05T11:00","authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"tags":["PowerShell","Script","Challenge"],"image":"https://i.imgur.com/mErPwqL.png","hide_table_of_contents":false},"prevItem":{"title":"Challenge 2 - Folder Size Report with PowerShell","permalink":"/blog/pwsh-challenge-002"},"nextItem":{"title":"Microsoft Defender for Endpoint Woes","permalink":"/blog/Defender-for-Endpoint-Woes"}},"content":"Create a script that can download any file by the URL given by a user. Add in the ability to download multiple items at once.\\n\\n\x3c!--truncate--\x3e\\n:::info Quick Social Plug\\n\\nCheck out my other post locations: -\\n\\n- [HashNode Link](https://willh.hashnode.dev/)\\n- [Patreon Link](https://patreon.com/BassJamm?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link)\\n\\n:::\\n\\n## Creating the script\\n\\n### Basic functionality\\n\\nFirstly, we\'ll create the logic outline, by that I mean, create the bare bones of the script without any error handling or console output.\\n\\n:::note\\n\\nI\'ve seen parameter blocks written in multiple ways, I write them this way as I think they\'re more easily understood by those who are not familiar with them.\\n\\n:::\\n\\n```powershell showLineNumbers\\n<# Parameter List #>\\n[CmdletBinding()]\\nparam (\\n    [Parameter(Mandatory=$true)]\\n    [string] $Source,\\n    [Parameter(Mandatory=$true)]\\n    [string] $Destination\\n)\\n<# Bare bones of the command to download an item. #>\\nStart-BitsTransfer -Source $Source -Destination $Destination -TransferType Download\\n```\\n\\nRunning the above script file by type `.\\\\TOOL-File-download.ps1 -Source \\"`[`https://go.microsoft.com/fwlink/p/?LinkID=2195167&clcid=0x409&culture=en-us&country=US`](https://go.microsoft.com/fwlink/p/?LinkID=2195167&clcid=0x409&culture=en-us&country=US)`\\" -Destination C:\\\\Temp\\\\Server2019.iso` does the job; the output is below.\\n\\nNow to add the ability to see running jobs and historic jobs.\\n\\n## Adding running and historic job reports\\n\\nAs you can see below, this is becoming a bit longer but, I would not say it is getting any more complex.\\n\\n```powershell showLineNumbers\\n\\n<# Parameter List #>\\n[CmdletBinding()]\\nparam (\\n    [Parameter()]\\n    [switch] $JobReport,\\n    [Parameter()]\\n    [switch] $JobHistory\\n)\\n###### Add the ability to review in-progress download job(s). ######\\nif ($JobReport) {\\n    <# Action to perform if the condition is true #>\\n    Write-Host \\"Getting running downloads.\\"\\n    Get-BitsTransfer | Where-Object JobState -EQ \'transferring\' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n}\\n###### Add the ability to review historic job(s). ######\\nif ($JobHistory) {\\n    <# Action to perform if the condition is true #>\\n    Write-Host \\"Getting historic downloads.\\"\\n    Get-BitsTransfer | Sort-Object CreationTime -Descending | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n}\\n```\\n\\nNow to add a way to cancel running jobs.\\n\\n## Canceling jobs\\n\\nBelow I have added the code to cancel a running job, although a bit basic and rough it does work.\\n\\n```powershell showLineNumbers\\n\\n<# Parameter List #>\\n[CmdletBinding()]\\nparam (\\n    [Parameter()]\\n    [String] $CancelJob\\n)\\n\\n###### Add the ability to cancel job(s). ######\\nif ($CancelJob) {\\n    <# Action to perform if the condition is true #>\\n    Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer\\n    Get-BitsTransfer | Where-Object JobState -EQ \'transferring\' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n    \\n}\\n```\\n\\n## Adding in some error handling and console output\\n\\nBelow I have added in some \'fluff\', some try\\\\\\\\catch blocks and some write-host functionality to make using this a bit easier.\\n\\nTry\\\\\\\\Catch blocks are a godsend when it comes to error handling, essentially it means try what is in the try area and catch anything that comes out of it.\\n\\n### Downloading the file section\\n\\n```powershell showLineNumbers\\n###### Download a file. ######\\nif ($Source) {\\n    <# Action to perform if the condition is true #>\\n    try {\\n        Start-BitsTransfer -Source $Source -Destination $Destination -TransferType Download -Asynchronous -DisplayName $JobName\\n        Write-Host \\"Beginning download from $($Source).\\"\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        \\n    }\\n    catch {\\n        <#Do this if a terminating exception happens#>\\n        Write-Host \\"Error when starting the job.\\"\\n        $_\\n    }\\n}\\n```\\n\\n### Canceling the download section\\n\\n```powershell showLineNumbers\\n\\n###### Add the ability to cancel job(s). ######\\nif ($CancelJob) {\\n    <# Action to perform if the condition is true #>\\n    try {\\n        Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer\\n        Write-Host \\"Job cancelled successfully.\\" -ForegroundColor Green\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        Start-sleep 2\\n        Write-Host \\"Remaining jobs listed below.\\" -ForegroundColor Yellow\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        Start-sleep 1\\n        Get-BitsTransfer | Where-Object JobState -EQ \'transferring\' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize    \\n    }\\n    catch {\\n        <#Do this if a terminating exception happens#>\\n        Write-Host \\"Error when cancelling job.\\"\\n        $_\\n    }\\n}\\n```\\n\\n## Full Script\\n\\n```powershell\\n\\n<# Parameter List #>\\n[CmdletBinding()]\\nparam (\\n    [Parameter()]\\n    [string] $Source,\\n    [Parameter()]\\n    [string] $Destination,\\n    [Parameter()]\\n    [string] $JobName,\\n    [Parameter()]\\n    [switch] $RunningJobs,\\n    [Parameter()]\\n    [switch] $JobHistory,\\n    [Parameter()]\\n    [String] $CancelJob\\n)\\n###### Download a file. ######\\nif ($Source) {\\n    <# Action to perform if the condition is true #>\\n    try {\\n        Start-BitsTransfer -Source $Source -Destination $Destination -TransferType Download -Asynchronous -DisplayName $JobName\\n        Write-Host \\"Beginning download from $($Source).\\"\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        \\n    }\\n    catch {\\n        <#Do this if a terminating exception happens#>\\n        Write-Host \\"Error when starting the job.\\"\\n        $_\\n    }\\n}\\n\\n###### Add the ability to review in-progress download job(s). ######\\nif ($RunningJobs) {\\n    <# Action to perform if the condition is true #>\\n    Write-Host \\"Getting running downloads.\\"\\n    Write-Host \\"\\" # This just adds some more space in the console.\\n    Get-BitsTransfer | Where-Object JobState -EQ \'transferring\' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n}\\n\\n###### Add the ability to review historic job(s). ######\\nif ($JobHistory) {\\n    <# Action to perform if the condition is true #>\\n    Write-Host \\"Getting historic downloads.\\"\\n    Get-BitsTransfer | Sort-Object CreationTime -Descending | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n}\\n\\n###### Add the ability to cancel job(s). ######\\nif ($CancelJob) {\\n    <# Action to perform if the condition is true #>\\n\\n    try {\\n        Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer\\n        Write-Host \\"Job cancelled successfully.\\" -ForegroundColor Green\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        Start-sleep 2\\n        Write-Host \\"Remaining jobs listed below.\\" -ForegroundColor Yellow\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        Start-sleep 1\\n        Get-BitsTransfer | Where-Object JobState -EQ \'transferring\' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize\\n        \\n    }\\n    catch {\\n        <#Do this if a terminating exception happens#>\\n        Write-Host \\"Error when cancelling job.\\"\\n        $_\\n    }\\n\\n}\\n```\\n\\n## Bonus: Multiple downloads\\n\\nThe `Start-BitsTransfer` command supports pipeline input, so you can add multiple download links using a text file.\\n\\nCreate a text file in the format below, this is a typical csv format.\\n\\n![](<https://cdn.hashnode.com/res/hashnode/image/upload/v1690560380176/0d5d0ab7-5b77-4010-9ed7-e30d780a510a.png> align=\\"center\\")\\n\\nAdditional Code was added to the script.\\n\\n```powershell\\n\\n<# Parameter List #>\\n[CmdletBinding()]\\nparam (\\n    [Parameter()]\\n    [string] $MultiJobDownload\\n)\\n###### Download multiple files. ######\\nif ($MultiJobDownload) {\\n    <# Action to perform if the condition is true #>\\n    try {\\n        Import-csv -Path $MultiJobDownload | Start-BitsTransfer -Asynchronous\\n        Write-Host \\"Beginning download from listed sources.\\"\\n        Write-Host \\"\\" # This just adds some more space in the console.\\n        Start-Sleep 1\\n        Write-Host \\" Sources and destinations below: -\\"\\n        Get-Content -Path $MultiJobDownload\\n        \\n    }\\n    catch {\\n        <#Do this if a terminating exception happens#>\\n        Write-Host \\"Error when starting the job.\\"\\n        $_\\n    }\\n}\\n```"},{"id":"Defender-for-Endpoint-Woes","metadata":{"permalink":"/blog/Defender-for-Endpoint-Woes","source":"@site/blog/2023-09-12-Defender-Woes/Microsoft-Defender-for-Endpoint-Woes.md","title":"Microsoft Defender for Endpoint Woes","description":"Windows services hating each other on Server 2012 R2.","date":"2023-08-05T11:00:00.000Z","formattedDate":"August 5, 2023","tags":[{"label":"Defender","permalink":"/blog/tags/defender"},{"label":"Azure","permalink":"/blog/tags/azure"}],"readingTime":1.3333333333333333,"hasTruncateMarker":true,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"frontMatter":{"title":"Microsoft Defender for Endpoint Woes","description":"Windows services hating each other on Server 2012 R2.","slug":"Defender-for-Endpoint-Woes","date":"2023-08-05T11:00","authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"tags":["Defender","Azure"],"image":"https://i.imgur.com/mErPwqL.png","hide_table_of_contents":false},"prevItem":{"title":"Challenge 1 - File Download Script with PowerShell","permalink":"/blog/pwsh-challenge-001"},"nextItem":{"title":"Welcome!","permalink":"/blog/welcome"}},"content":"For the last 3 months our monitoring team at my workplace has been spammed with alerts about the Windows Defender Advanced Threat Protection Service has entered the \\"stopped\\" state for one 2012 R2 server.\\n\\nQuickly followed about 6 minutes later with another alert saying, the service is okay.\\n\x3c!--truncate--\x3e\\n:::info Quick Social Plug\\n\\nCheck out my other post locations: -\\n\\n- [HashNode Link](https://willh.hashnode.dev/)\\n\\n:::\\n\\n## The Investigation\\n\\nFrom checking the alert, I could see the service was stopping and starting but, no real reason as to why it was doing this. This is when I turned to PowerShell (*still unsure of why I did this over trusty Event Viewer, just seems to be my default now*).\\n\\nQuickly smashed out the below command to see what I could find.\\n\\nThis promptly spat out these errors.\\n\\nAfter googling this (as any techy would), there are a lot of mentions of this error message all over the place with suggestions to do the following:-\\n\\n1. Disable or uninstall any other AV products on the device.\\n\\n2. Run a Full system scan for viruses.\\n\\n3. Run a System File Checker scan from the command line, `sfc /scannow`.\\n\\n4. Re-install the Defender for Endpoint on that device.\\n\\n5. Update the OS to a new version (*A bit extreme mind you however, new OS versions have much better support for Defender, you don\'t need this service on Server 2016 and above, so it\'s still valid!*)\\n\\n## What Solved It\\n\\nThe short answer is, I\'m not 100% certain.\\n\\nOur first port of call was to remove the *System Center Endpoint Protection* application, which we probably should have done before installing the *Defender for Endpoint* application to be honest.\\n\\nSecondly, we off-boarded the appliance from Defedner and then on-boarded it again by doing the following: -\\n\\n- Download the off-boarding script from your Defender portal.\\n\\n  - In the navigation pane, select Settings &gt; Endpoints &gt; Device management &gt; Offboarding.\\n\\n- Off-Board the Server using the script provided by Microsoft below.\\n\\n  - `C:\\\\Packages\\\\Plugins\\\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\\\versionNo\\\\Install.ps1.`\\n\\n  - The command is, `Install.ps1 -OffboardingScript .\\\\WindowsDefenderATPOffboardingScript_valid_until_*.cmd`\\n\\n- Reboot the server.\\n\\n- Check the Defender application is gone from Programs and Features and that the Services are gone. If not, manually uninstall using Programs and Features.\\n\\n- On-Board the server again using the script provided by Microsoft. Command below.\\n\\n  - `C:\\\\Packages\\\\Plugins\\\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\\\versionNo\\\\Install.ps1.`\\n\\n  - The command is, `.\\\\Install.ps1 -OnboardingScript .\\\\WindowsDefenderATPOnboardingScript_valid_until_*.cmd`\\n\\n- Reboot the server.\\n\\nHopefully this helps somone!"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2023-05-20-welcome/index.md","title":"Welcome!","description":"First blog post.","date":"2023-05-20T10:00:00.000Z","formattedDate":"May 20, 2023","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus-v2","permalink":"/blog/tags/docusaurus-v-2"}],"readingTime":0.09,"hasTruncateMarker":true,"authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"frontMatter":{"title":"Welcome!","description":"First blog post.","slug":"welcome","date":"2023-05-20T10:00","authors":[{"name":"Will","title":"Creator of the IT KB.","url":"https://github.com/BassJamm?tab=repositories"}],"tags":["hello","docusaurus-v2"],"image":"https://i.imgur.com/mErPwqL.png","hide_table_of_contents":false},"prevItem":{"title":"Microsoft Defender for Endpoint Woes","permalink":"/blog/Defender-for-Endpoint-Woes"}},"content":"Welcome to the blog.\\n\\nThis blog is created with [**Docusaurus 2**](https://docusaurus.io/).\\n\\n\x3c!--truncate--\x3e\\n:::info Quick Social Plug\\n\\nCheck out my other post locations: -\\n\\n- [HashNode Link](https://willh.hashnode.dev/)\\n\\n:::"}]}')}}]);