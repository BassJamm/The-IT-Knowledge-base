---
id: Credential Management
title: Credential Management
hide_title: false
hide_table_of_contents: false
sidebar_label: Credential Management
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Credential Management
tags: [Refernce Doc, CMDLet]
description: Managing Credentials in PowerShell.
---

## Document Control

- Created: 2023/03/31
- Last Updated: 2023/03/31

## Collect and encrypt credentials to file using default method

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

```powershell showLineNumbers
<# Disclaimer to confirm user is happy to begin the process. #>

Write-Host "Write your warning text here." -ForegroundColor Yellow
Start-Sleep 2
$decisionConfirmation = Read-Host "Are you sure you wish to proceed. Type Y to begin or N to stop here [y/n]."

if ($decisionConfirmation -ne 'y') {
    <# Action if  statement is true. #>
    Write-Host "The script will not proceed any further." -ForegroundColor Red
    WriteToLogFile "$(Get-Date) - User selected to not proceed with the script, terminating."
    throw  'Script terminated.' 
}
```
