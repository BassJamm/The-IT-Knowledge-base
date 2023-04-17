---
id: Windows Troubleshooting
title: Windows Troubleshooting 
hide_title: false
hide_table_of_contents: false
sidebar_label: Windows Troubleshooting 
sidebar_position: 3
toc_max_heading_level: 4 
pagination_label: Windows Troubleshooting 
tags: [Refernce Doc, CMDLet]
description: Windows Troubleshooting in PowerShell.
---

## Document Control

- Created: 2023/03/30
- Last Updated: 2023/04/01

## Collect System information (systeminfo)

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.


systeminfo | Out-File -FilePath C:\SystemDiagnosticCollection\SystemInfo.txt # Command collects the systeminfo data and dumps it to text file.
Write-host 'System Info Collected' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collect IP address info (Ipconfig)

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

ipconfig /all | Out-File -FilePath C:\SystemDiagnosticCollection\IpAddressingInfo.txt # Collects the IP info and dumps it to text file.
Write-host 'ipconfig ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Test Connection (Test-NetConnection)

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Test Connection to Google
Test-NetConnection www.google.com -InformationLevel "Detailed" | Out-File -FilePath C:\SystemDiagnosticCollection\pingtoGoogle-FQDN.txt
```

### Time stamped ping (Test-NetConnection)

```powershell showlineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Time Stamped Ping test
Test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\SystemDiagnosticCollection\PingtoGoogle-IP.txt
Write-host 'Network Tests ran successfully' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collecting Event Logs (Get-EventLog)

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

## Collect Printer information (Get-printer)

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
Get-printer | Out-File -FilePath C:\SystemDiagnosticCollection\Printer-Info.txt
Write-host 'Gathered Printer info' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collect Group Policy Information (gpresult /v)

```powershell showLineNumbers
<#The Command below relies on there being a folder created before running the command, use the command below to do this if needed.#>
New-Item "C:\SystemDiagnosticCollection" -itemType Directory # Creates the folder and the desired path.
Write-host 'Folder created at C:\SystemDiagnosticCollection' # Add this if you're writing a script where you need to update the PowerShell prompt.

# Collect printer information
gpresult /v | Out-file -FilePath C:\SystemDiagnosticCollection\GpResult.txt
Write-host 'Gathered GPO status' # Add this if you're writing a script where you need to update the PowerShell prompt.
```

## Collect Azure Active Directory (AzureAD, AAD) (dsregcmd)

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

### Collect the 'key' info from dsregcmd command

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
