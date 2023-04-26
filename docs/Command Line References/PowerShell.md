---
draft: false
id: PowerShell
title: PowerShell
hide_title: false
hide_table_of_contents: false
sidebar_label: PowerShell
sidebar_position: 4
toc_max_heading_level: 4 
pagination_label: PowerShell
tags: [Command Line, PowerShell]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: All things PowerShell.
---

## Document Control

- Created: 23/04/22
- Last Updated: 23/04/22

## Credential Management

### Collect and encrypt credentials

```powershell showLineNumbers
$credential = Get-Credential
$credential.Password | ConvertFrom-SecureString | Set-Content "C:\temp\Reporting\encrypted_password_for_reporting.txt"

<# Decrypting it and using it in a script#>

# Get the credential
$emailusername = "email.address@domain.com"
$encrypted = Get-Content "C:\temp\encrypted_password_for_reporting.txt" | ConvertTo-SecureString
$credential = New-Object System.Management.Automation.PsCredential($emailusername, $encrypted)
```

### User confirmation statement

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

## Error Management

### Try and Catch example for error debugging

```powershell showLineNumbers
try {
    Connect-AzAccount -Identity
}
catch{
    Write-Output "Unable to login. Aborting."; 
    exit
}
```

### Create a log file

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

### Test multiple item paths

Test-Path

Test multiple paths for files or folders.

```powershell showLineNumbers
Test-Path "$Variable1", "$Variable2", "$Variable3"
```

## Importing, Formatting & Searching

### Folder Size Report

```powershell showLineNumbers
$directory = C:\Users\whornsby
 
# Retrieve the files and the total size of them combines. Note that Folders do not hold file sizes.
$getFileSizes | Get-ChildItem -Recurse | Measure-Object -Sum Length | Select-Object @{Name=”Path”; Expression={$directory.FullName}}, @{Name=”Files”; Expression={$_.Count}}, @{Name=”Size(GB)”; Expression={$_.Sum/1GB}}
 
# Converts output to GB
$_.Sum/1GB
 
# Converts output to MB
$_.Sum/1MB
```

### Import and filter CSV Files

ImportFrom-CSV

```powershell showLineNumbers
$csvFile = Import-Csv 'C:\Temp\File.csv' # Edited export with devices status notes.
  
# Filter Examples
$csvFile | group osVersion 
$csvFile | group osVersion | select -ExpandProperty property Name| ft -AutoSize
```

## Windows OS

### Collect System information

systeminfo

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.


systeminfo | Out-File -FilePath C:\SystemDiagnosticCollection\SystemInfo.txt # Command collects the systeminfo data and dumps it to text file.
Write-host 'System Info Collected' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

### Collect IP address info 

Ipconfig

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

ipconfig /all | Out-File -FilePath C:\SystemDiagnosticCollection\IpAddressingInfo.txt # Collects the IP info and dumps it to text file.
Write-host 'ipconfig ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

### Test Connection

Test-NetConnection

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Test Connection to Google
Test-NetConnection www.google.com -InformationLevel "Detailed" | Out-File -FilePath C:\SystemDiagnosticCollection\pingtoGoogle-FQDN.txt
```

#### Time stamped ping

Test-NetConnection

```powershell showlineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Time Stamped Ping test
Test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\SystemDiagnosticCollection\PingtoGoogle-IP.txt
Write-host 'Network Tests ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

### Collecting Event Logs

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

### Collect Printer information

Get-printer

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
Get-printer | Out-File -FilePath C:\SystemDiagnosticCollection\Printer-Info.txt
Write-host 'Gathered Printer info' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

### Collect Group Policy Information 

gpresult /v

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
gpresult /v | Out-file -FilePath C:\SystemDiagnosticCollection\GpResult.txt
Write-host 'Gathered GPO status' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

### Collect Azure Active Directory

dsregcmd

:::info dsregcmd
This command is a command prompt command only.
:::

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
dsregcmd /status | Out-File -FilePath C:\SystemDiagnosticCollection\Hybrid-Joined-status.txt
Write-host 'Successfully checked for Hybrid-Joined status' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

#### Collect the 'key' info from dsregcmd command

:::info
This script could use a little tidying up but, it should give you an idea of what is needed.
:::

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
