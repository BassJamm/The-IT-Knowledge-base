---
id: Windows OS Scripts
title: Windows OS Scripts
hide_title: false
hide_table_of_contents: false
sidebar_label: Windows OS Scripts
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Windows OS Scripts
tags: [Scripts, Re-usable Code]
description: Windows OS Scripts and re-usable code.
---

## Document Control

- Created: 2023/03/30
- Last Updated: 2023/04/01

## Folder size report (Get-childitem)

```powershell showLineNumbers
$startFolder = "C:\FolderName"

$colItems = Get-ChildItem $startFolder | Where-Object {$_.PSIsContainer -eq $true} | Sort-Object
foreach ($i in $colItems) {
$subFolderItems = Get-ChildItem $i.FullName -recurse -force | Where-Object {$_.PSIsContainer -eq $false} | Measure-Object -property Length -sum | Select-Object Sum
$i.FullName + ” — ” + “{0:N2}” -f ($subFolderItems.sum / 1GB) + ” GB”
}
```

## Service Management (Stop-Service, Start-Service)

```powershell showLineNumbers

$serviceName = Get-Service -Name "*ServiceName*"

if ($serviceName.Status -ne 'Stopped') {
    <# Action to perform if the service is running still. #>
    Write-Host  "The script has detected that the ' $serviceName.Name ' is still running." -ForegroundColor Yellow
    WriteToLogFile "$(Get-Date) -  The $($serviceName.Name), is still running."
    Start-Sleep 3
    try {
        Write-Progress -Activity "Attempting to stop the service"   -Status 'Stopping' 
        WriteToLogFile "$(Get-Date) -  Attempting to stop the service."
        Stop-Service -Name $serviceName.Name
        Start-Sleep 5
    }
    catch {
        Write-Host "An error occurred, see below error and the log for more information."
    }

    $serviceName = Get-Service -Name "*ServiceName*" # Stores the new service status in the variable.
    Start-Sleep 2
```
