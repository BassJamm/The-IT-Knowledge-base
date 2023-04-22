---
id: Error Management
title: Error Management
hide_title: false
hide_table_of_contents: false
sidebar_label: Error Management
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Error Management
tags: [Refernce Doc, CMDLet]
description: Error Management in PowerShell.
---

## Document Control

- Created: x
- Last Updated: 2023/04/22

## Try and Catch example for error debugging

```powershell showLineNumbers
try {
    Connect-AzAccount -Identity
}
catch{
    Write-Output "Unable to login. Aborting."; 
    exit
}
```

## Create a log file

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
