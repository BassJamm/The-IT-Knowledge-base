---
draft: false
id: Code-Snippets
title: Code-Snippets
hide_title: false
hide_table_of_contents: false
sidebar_label: Code-Snippets
sidebar_position: 4
toc_max_heading_level: 4 
pagination_label: Code-Snippets
tags: [Command Line, PowerShell]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: All things PowerShell.
---

## Script Template

---

Script Template.

```powershell showLineNumbers
<# Internal documentation fields.
    Script Title: [Title of your script]
    Description: [Brief description of the script's purpose]
    Author: [Your name or organization]
    Date: [Date of script creation or last modification]
#>
<# Parameters that show up in command line using `-help`.
    .SYNOPSIS
        Retrieves user information from Active Directory.
    .PARAMETER Username
        Specifies the username of the user to retrieve.
    .OUTPUTS
        System.Management.Automation.PSObject
    .EXAMPLE
        Get-User -Username "jdoe"
    #>

# Script Parameters
param (
    # [Parameter 1 Description]
    [Parameter(Mandatory = $true)]
    [string]$Parameter1,

    # [Parameter 2 Description]
    [Parameter(Mandatory = $false)]
    [int]$Parameter2 = 10
)

# Script Initialization
Write-Host "Initializing the script..."

try {
    # Main Script Logic
    Write-Host "Executing the main logic of the script..."

    # Your code goes here...

    # Example: Outputting parameter values
    Write-Host "Parameter 1: $Parameter1"
    Write-Host "Parameter 2: $Parameter2"

    # End of Script
    Write-Host "Script execution completed."

} catch {
    # Error Handling
    Write-Host "An error occurred: $($_.Exception.Message)"
    # Additional error handling and reporting can be added as needed
}
```

## Collect and Encrypt Credentials

---

Get-Credential

```powershell showLineNumbers
$credential = Get-Credential
$credential.Password | ConvertFrom-SecureString | Set-Content "C:\temp\Reporting\encrypted_password_for_reporting.txt"

<# Decrypting it and using it in a script#>

# Get the credential
$emailusername = "email.address@domain.com"
$encrypted = Get-Content "C:\temp\encrypted_password_for_reporting.txt" | ConvertTo-SecureString
$credential = New-Object System.Management.Automation.PsCredential($emailusername, $encrypted)
```

## User confirmation statement

---

Read-Host

```powershell showLineNumbers
<# Disclaimer to confirm user is happy to begin the process. #>

Write-Host "Write your warning text here." -ForegroundColor Yellow
Start-Sleep 2
$decisionConfirmation = Read-Host "Are you sure you wish to proceed. Type Y to begin or N to stop here [y/n]."

if ($decisionConfirmation -ne 'y') {
    <# Action if  statement is true. #>
    Write-Host "The script will not proceed any further." -ForegroundColor Red
    WriteToLogFile "$(Get-Date) - User selected to not proceed with the script, terminating."
    # 'Script terminated.' 
}
```

## Log file function

---

The below is a small function that creates the log file and a new command `WriteToLogFile`, which will add the content to the log file.

```powershell showLineNumbers
$date = Get-Date -Format dd-mm-yyyy
$logFileLocation = "C:\Temp\"

<# Create the log file. #>

try {
    <# Try the following. #>
    function WriteToLogFile ($message) {
        Add-Content $logFileLocation\LogFile_$date.log -Value $message
    }
    if (Test-Path $logFileLocation\LogFile_$date.log) {
        Write-Host 'Log file already exists, deleting and re-creating.'
        Start-Sleep 2
        Remove-Item $logFileLocation\LogFile_$date.log
    }
    WriteToLogFile "$(Get-Date) - Log File created."
}
catch {
    <# Collect and report any errors. #>
    Write-Host "Failed to create log file at the following location:"$logFileLocation -ForegroundColor Red", continuing without logging."
    Write-Host $_ -ForegroundColor Red
    WriteToLogFile "$(Get-Date) - $($_)"
    throw  'Script terminated.' 
}
```

## Folder Size Report

---

```powershell showLineNumbers
########################## Basic File report for the directory you're currently in. ##########################
Get-ChildItem | Select FullName,@{l='Size(GB)';e={ [math]::round($_.length/1024,2) } }, CreationTime, LastAccessTime, LastWriteTime

########################## Folder size. ##########################
# /1MB - Convert to MB.
# /1GB - Convert to GB
(gci -path "Folder Path" -Recurse | measure -Property Length -Sum).sum /1MB

# Round to 2 decimal places.
[Math]::round((gci .\Networking\ -Recurse | measure -Property Length -Sum).sum /1MB,2)
```

## Time stamped ping

---

Test-NetConnection

```powershell showlineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Time Stamped Ping test
Test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\SystemDiagnosticCollection\PingtoGoogle-IP.txt
Write-host 'Network Tests ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collecting Event Logs

---

Get-EventLog

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect System Logs
Get-Eventlog -LogName System -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\SystemDiagnosticCollection\System_Logs.csv -notype
# Collect Application Logs
Get-Eventlog -LogName Application -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\SystemDiagnosticCollection\Application_Logs.csv -notype
Write-host 'Successfully gathered Event Logs'
```

## Collect Printer information

---

Get-printer

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
Get-printer | Out-File -FilePath C:\SystemDiagnosticCollection\Printer-Info.txt
Write-host 'Gathered Printer info' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collect the 'key' info from dsregcmd command

---

dsregcmd /status

```powershell showLineNumbers

New-Item "C:\SystemDiagnosticCollection" -itemType Directory
Write-host 'Folder created at C:\SystemDiagnosticCollection' #not finished yet, it'll print out only.

Write-host 'Basic AAD Info'
dsregcmd /status | select-string -Pattern 'Device Name'  | Out-File -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'AzureADJoined' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'DeviceId' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'TenantName' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt

write-host 'Single Sign on Info'
dsregcmd /status | select-string -Pattern 'AzureAdPrt' | Out-File -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt
dsregcmd /status | select-string -Pattern 'AzureAdPrtUpdateTime' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt
dsregcmd /status | select-string -Pattern 'RefreshPrtDiagnostics' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt

Write-host 'System Information'
systeminfo | Select-String -Pattern 'OS Name' | Out-File -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'OS Version' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Original Install Date' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'System Boot Time' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Time Zone' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Total Physical Memory' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
```

## Get Open files

---

Get-SMBopenFile

```powershell showLineNumbers
Get-SMBopenFile # All sessions listed.
Get-SmbOpenFile -FileId "file ID" | select -Property * # Lists all properties for a particular file ID, for file ID run the command above.

# Example of querying live.
Get-SmbOpenFile | Select clientcomputername, sessionid, clientusername, path | sort clientusername, path | ft -a # Retrieve active open files.
Get-SmbOpenFile | where clientusername -like '*Name*' | Select clientcomputername, sessionid, clientusername,path | sort clientusername, path | ft -a # Search and sort example.

# Example usage with variable.
$smbOpenFiles = Get-SmbOpenFile | select -Property * # Get all open files information and store in variable.
$smbOpenFiles | Select clientcomputername, sessionid,clientusername,path | sort clientusername,path | ft -a # Example of sorting the input.
```

## Uninstall App using Uninstall String

---

Get-ItemProperty

```powershell showLineNumbers
$regKeyPaths = @(
  'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall'
  'HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall'
)

$regItems = Get-ChildItem -Path $regKeyPaths | Get-ItemProperty | where displayname -Like '*searchterm*' | Select-Object DisplayName, Uninstallstring
foreach ($string in $regitems) {
    $uninstallString = $string.Uninstallstring.replace('MsiExec.exe','').replace('/I','/x ').replace('{','').replace('}','')
    Start-Process C:\Windows\System32\msiexec.exe -ArgumentList $uninstallString -wait -Verbose
}

Start-Process C:\Windows\System32\msiexec.exe -ArgumentList $uninstallStrings[0] -wait
Start-Process C:\Windows\System32\msiexec.exe -ArgumentList $uninstallStrings[1] -wait
```

## PSSendGrid Module Example

---

Send-PSSendGridMail

```powershell showLineNumbers
$sendGridToken = "SG.apikey"
$attachmentPath = $reportFile # File path to the attachment\data.
$attachmentDisposition = "attachment" # Value can either be "attachment" or "inline", inlines is for images, check the command help examples for info. 
$emailBody = @(
  "Ener text here, the '`n' adds a carrige return `n"
) -join " "

try {
    
    # Basic email with just content.
    $Parameters = @{
        FromAddress             = "fromaddress@domain.com"
        ToAddress               = "AddressOne@domain.com", "AddressTwo@domain.com"
        Subject                 = "Subject text"
        Body                    = $emailBody
        AttachmentPath          = $attachmentPath
        AttachmentDisposition   = $attachmentDisposition
        Token                   = $sendGridToken
        FromName                = "Name to show who from."
        ToName                  = "test"
    }
} catch {
    $_
}
Send-PSSendGridMail @Parameters
```

## Assign Permissions to Managed Identity

---

```powershell showLineNumbers
# Your tenant id.
$TenantID=""
# Microsoft Graph App ID (DON'T CHANGE).
$GraphAppId = "00000003-0000-0000-c000-000000000000"
# Name of the manage identity (same as the Logic App name).
$DisplayNameOfMSI="" 
# Check the Microsoft Graph documentation for the permission you need for the operation.
$PermissionName = "User.Read.All" 

# Install the module (You need admin on the machine)
Install-Module AzureAD -Scope CurrentUser 

# Connect to Azure AD via tenant ID, you'll need an admin account to login with though.
Connect-AzureAD -TenantId $TenantID
# Collects the Target System Managed Identities information into the MSI variable.
$MSI = (Get-AzureADServicePrincipal -Filter "displayName eq '$DisplayNameOfMSI'")
Start-Sleep -Seconds 10
# Store the Microsoft Graph API informaiton into the GraphServicePrincipal variable.
$GraphServicePrincipal = Get-AzureADServicePrincipal -Filter "appId eq '$GraphAppId'"
# Searches Microsoft Graph API for the value matching the PermissionName variable populated above and stores this in the AppRole Variable.
$AppRole = $GraphServicePrincipal.AppRoles |  Where-Object {$_.Value -eq $PermissionName -and $_.AllowedMemberTypes -contains "Application"}
# Assigned the permission from the Microsoft Graph API to the target Managed Identity.
New-AzureADServiceAppRoleAssignment -ObjectId $MSI.ObjectId -ResourceId $GraphServicePrincipal.ObjectId -Id $appRole.Id -PrincipalId $MSI.ObjectId
```

## Get FISMO roles

---

Get-ADForest

```powershell showLineNumbers
$properties = @(
    'SchemaMaster',
    'DomainNamingMaster',
    @{ n='pdcemulator';e={ Get-ADDomain | Select -ExpandProperty pdcemulator} },
    @{ n='ridmaster';e={ Get-ADDomain | Select -ExpandProperty ridmaster} },
    @{ n='infrastructuremaster';e={ Get-ADDomain | Select -ExpandProperty infrastructuremaster} }
)

Get-ADForest | Select $properties | Format-List
```

## Adding output from two sources in the PipeLine

---

```powershell showLineNumbers
$source1 = # Some sort of input source.
$source2 = # Secondary input source.

# Take source1 variable & add a property to the output from source2.
# You may need to include 'Select -ExpandProperty attributeName' if you get brackets or other special characters in your final output.
$source1 | Select *, @{ l='itemName';e={$source2 | where mostrecentuser -Match $_.attributeName}}, * -ExcludeProperty attributeName
```

## Direct Send

---

Send-MailMessage

```powershell showLineNumbers
# Get the credential
$credential = Get-Credential

## Define the Send-MailMessage parameters
$mailParams = @{
    SmtpServer                 = 'smtp.office365.com'
    Port                       = '587' # or '25' if not using TLS
    UseSSL                     = $true ## or not if using non-TLS
    Credential                 = $credential
    From                       = 'Email.Address@domain.com'
    To                         = 'Email.Address@domain.com'# , 'recipient@NotYourDomain.com'
    Subject                    = "SMTP Client Submission - $(Get-Date -Format g)"
    Body                       = 'This is a test email using SMTP Client Submission'
    Attachment                 = "$env:USERPROFILE\Desktop\File.csv"
    DeliveryNotificationOption = 'OnFailure', 'OnSuccess'
}

## Send the message
Send-MailMessage @mailParams
```

## Find Microsoft Graph Permissions Scopes

---

Find-MgGraphCommand

```powershell showLineNumbers
Find-MgGraphCommand -command Get-MgUser | Select -First 1 -ExpandProperty Permissions
```

## Microsoft Graph Connection Scopes

---

Connect-MGGraph

```powershell showLineNumbers
$mggraphScopes = @(
    "User.Read.All",
    "Group.Read.All",
    "DeviceManagementRBAC.Read.All",
    "DeviceManagementServiceConfig.Read.All",
    "DeviceManagementConfiguration.Read.All",
    "DeviceManagementManagedDevices.Read.All",
    "DeviceManagementApps.Read.All",
    "Policy.Read.All"
)

Connect-MgGraph -Scopes $mggraphScopes -TenantId $tenantID
```

## Azure AD User Password Reset Report

---

Get-MGUser

```powershell showLineNumbers
$properties = @(
    'UserPrincipalName',
    'DisplayName',
    'LastPasswordChangeDateTime',
    'PasswordPolicies',
     @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) )TotalDays -as [int] }}
)
Get-MgUser -All -Property UserPrincipalName, DisplayName, Id, LastPasswordChangeDateTime,PasswordPolicies | Select-Object $properties  | Sort-Object PasswordAgeDays 
```

## Get Intune Device Report with Primary User

---

Get-MGDeviceManagementManagedDevice

```powershell showLineNumbers
$mggraphScopes = @(
    "User.Read.All",
    "Group.Read.All",
    "DeviceManagementRBAC.Read.All",
    "DeviceManagementServiceConfig.Read.All",
    "DeviceManagementConfiguration.Read.All",
    "DeviceManagementManagedDevices.Read.All",
    "DeviceManagementApps.Read.All",
    "Policy.Read.All"
)

Connect-MgGraph -Scopes $mggraphScopes -TenantId $tenantID

$properties = @(
    'DeviceName', 
    'UserPrincipalName', 
    'EnrolledDateTime', 
    'ComplianceState', 
    'IsEncrypted', 
    'LastSyncDateTime', 
    'Id', 
    'Manufacturer', 
    'Model', 
    'OperatingSystem', 
    'OSVersion', 
    'SerialNumber',
    @{l='PrimaryUser';e={$device = $_;Get-MgDeviceManagementManagedDeviceUser -ManagedDeviceId $device.id | select -expandproperty UserPrincipalName}} 
)
 
$getAllDevices = Get-MgDeviceManagementManagedDevice -All | Select-Object $properties | Sort OperatingSystem
```

## List Intune Configuration Profiles

---

Get-MgDeviceManagementDeviceConfiguration

```powershell showLineNumbers
$mggraphScopes = @(
    "User.Read.All",
    "Group.Read.All",
    "DeviceManagementRBAC.Read.All",
    "DeviceManagementServiceConfig.Read.All",
    "DeviceManagementConfiguration.Read.All",
    "DeviceManagementManagedDevices.Read.All",
    "DeviceManagementApps.Read.All",
    "Policy.Read.All"
)

Connect-MgGraph -Scopes $mggraphScopes -TenantId $tenantID

# Get Configuration Profiles for an Org.
Get-MgDeviceManagementDeviceConfiguration -All | select Id, DisplayName
```

## List Intune Compliance Policies

---

Get-MgDeviceManagementDeviceCompliancePolicy

```powershell showLineNumbers
$mggraphScopes = @(
    "User.Read.All",
    "Group.Read.All",
    "DeviceManagementRBAC.Read.All",
    "DeviceManagementServiceConfig.Read.All",
    "DeviceManagementConfiguration.Read.All",
    "DeviceManagementManagedDevices.Read.All",
    "DeviceManagementApps.Read.All",
    "Policy.Read.All"
)

Connect-MgGraph -Scopes $mggraphScopes -TenantId $tenantID
# Get Compliance policies for an Org.
Get-MgDeviceManagementDeviceCompliancePolicy -All | Select Displayname,LastModifiedDateTime, Id
```

### List Compliance Policies for a single device

Get-MgDeviceManagementManagedDeviceCompliancePolicyState

```powershell showLineNumbers
# Device Compliancy for a single device.
Get-MgDeviceManagementManagedDeviceCompliancePolicyState -ManagedDeviceId 
```

## Grant Partner Access to Azure Sub

```powershell showLineNumbers
# Connect to Sub.
Connect-AzAccount -TenantID "<Customer TenantID>"

# Set the subscription context you want to add partner permissions too.
Set-AzContext -SubscriptionID "<Customer Subscription ID>"

# Assign the "adminagents" group in Partner tenant to the customer subscription
New-AzRoleAssignment -ObjectID "<Object ID of the AdminAgents group from step 7 of your actions section>" -RoleDefinitionName "Owner" -Scope "/subscriptions/<CSP subscription ID>" -ObjectType "ForeignGroup"
```
