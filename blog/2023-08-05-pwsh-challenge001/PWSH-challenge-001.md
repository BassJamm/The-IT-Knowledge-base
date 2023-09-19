---
title: Challenge 1 - File Download Script with PowerShell
description: Create a script that can download any file by the URL given by a user.
slug: pwsh-challenge-001
date: 2023-08-05T11:00
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [PowerShell, Script, Challenge]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Create a script that can download any file by the URL given by a user. Add in the ability to download multiple items at once.

<!--truncate-->
:::info Quick Social Plug

Check out my other post locations: -

- [HashNode Link](https://willh.hashnode.dev/)
- [Patreon Link](https://patreon.com/BassJamm?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link)

:::

## Creating the script

### Basic functionality

Firstly, we'll create the logic outline, by that I mean, create the bare bones of the script without any error handling or console output.

:::note

I've seen parameter blocks written in multiple ways, I write them this way as I think they're more easily understood by those who are not familiar with them.

:::

```powershell showLineNumbers
<# Parameter List #>
[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string] $Source,
    [Parameter(Mandatory=$true)]
    [string] $Destination
)
<# Bare bones of the command to download an item. #>
Start-BitsTransfer -Source $Source -Destination $Destination -TransferType Download
```

Running the above script file by type `.\TOOL-File-download.ps1 -Source "`[`https://go.microsoft.com/fwlink/p/?LinkID=2195167&clcid=0x409&culture=en-us&country=US`](https://go.microsoft.com/fwlink/p/?LinkID=2195167&clcid=0x409&culture=en-us&country=US)`" -Destination C:\Temp\Server2019.iso` does the job; the output is below.

Now to add the ability to see running jobs and historic jobs.

## Adding running and historic job reports

As you can see below, this is becoming a bit longer but, I would not say it is getting any more complex.

```powershell showLineNumbers

<# Parameter List #>
[CmdletBinding()]
param (
    [Parameter()]
    [switch] $JobReport,
    [Parameter()]
    [switch] $JobHistory
)
###### Add the ability to review in-progress download job(s). ######
if ($JobReport) {
    <# Action to perform if the condition is true #>
    Write-Host "Getting running downloads."
    Get-BitsTransfer | Where-Object JobState -EQ 'transferring' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
}
###### Add the ability to review historic job(s). ######
if ($JobHistory) {
    <# Action to perform if the condition is true #>
    Write-Host "Getting historic downloads."
    Get-BitsTransfer | Sort-Object CreationTime -Descending | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
}
```

Now to add a way to cancel running jobs.

## Canceling jobs

Below I have added the code to cancel a running job, although a bit basic and rough it does work.

```powershell showLineNumbers

<# Parameter List #>
[CmdletBinding()]
param (
    [Parameter()]
    [String] $CancelJob
)

###### Add the ability to cancel job(s). ######
if ($CancelJob) {
    <# Action to perform if the condition is true #>
    Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer
    Get-BitsTransfer | Where-Object JobState -EQ 'transferring' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
    
}
```

## Adding in some error handling and console output

Below I have added in some 'fluff', some try\\catch blocks and some write-host functionality to make using this a bit easier.

Try\\Catch blocks are a godsend when it comes to error handling, essentially it means try what is in the try area and catch anything that comes out of it.

### Downloading the file section

```powershell showLineNumbers
###### Download a file. ######
if ($Source) {
    <# Action to perform if the condition is true #>
    try {
        Start-BitsTransfer -Source $Source -Destination $Destination -TransferType Download -Asynchronous -DisplayName $JobName
        Write-Host "Beginning download from $($Source)."
        Write-Host "" # This just adds some more space in the console.
        
    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "Error when starting the job."
        $_
    }
}
```

### Canceling the download section

```powershell showLineNumbers

###### Add the ability to cancel job(s). ######
if ($CancelJob) {
    <# Action to perform if the condition is true #>
    try {
        Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer
        Write-Host "Job cancelled successfully." -ForegroundColor Green
        Write-Host "" # This just adds some more space in the console.
        Start-sleep 2
        Write-Host "Remaining jobs listed below." -ForegroundColor Yellow
        Write-Host "" # This just adds some more space in the console.
        Start-sleep 1
        Get-BitsTransfer | Where-Object JobState -EQ 'transferring' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize    
    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "Error when cancelling job."
        $_
    }
}
```

## Full Script

```powershell

<# Parameter List #>
[CmdletBinding()]
param (
    [Parameter()]
    [string] $Source,
    [Parameter()]
    [string] $Destination,
    [Parameter()]
    [string] $JobName,
    [Parameter()]
    [switch] $RunningJobs,
    [Parameter()]
    [switch] $JobHistory,
    [Parameter()]
    [String] $CancelJob
)
###### Download a file. ######
if ($Source) {
    <# Action to perform if the condition is true #>
    try {
        Start-BitsTransfer -Source $Source -Destination $Destination -TransferType Download -Asynchronous -DisplayName $JobName
        Write-Host "Beginning download from $($Source)."
        Write-Host "" # This just adds some more space in the console.
        
    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "Error when starting the job."
        $_
    }
}

###### Add the ability to review in-progress download job(s). ######
if ($RunningJobs) {
    <# Action to perform if the condition is true #>
    Write-Host "Getting running downloads."
    Write-Host "" # This just adds some more space in the console.
    Get-BitsTransfer | Where-Object JobState -EQ 'transferring' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
}

###### Add the ability to review historic job(s). ######
if ($JobHistory) {
    <# Action to perform if the condition is true #>
    Write-Host "Getting historic downloads."
    Get-BitsTransfer | Sort-Object CreationTime -Descending | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
}

###### Add the ability to cancel job(s). ######
if ($CancelJob) {
    <# Action to perform if the condition is true #>

    try {
        Get-BitsTransfer -Name $CancelJob | Remove-BitsTransfer
        Write-Host "Job cancelled successfully." -ForegroundColor Green
        Write-Host "" # This just adds some more space in the console.
        Start-sleep 2
        Write-Host "Remaining jobs listed below." -ForegroundColor Yellow
        Write-Host "" # This just adds some more space in the console.
        Start-sleep 1
        Get-BitsTransfer | Where-Object JobState -EQ 'transferring' | Format-Table JobId, CreationTime,DisplayName,TransferType,JobState,BytesTransferred,BytesTotal -AutoSize
        
    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "Error when cancelling job."
        $_
    }

}
```

## Bonus: Multiple downloads

The `Start-BitsTransfer` command supports pipeline input, so you can add multiple download links using a text file.

Create a text file in the format below, this is a typical csv format.

![](<https://cdn.hashnode.com/res/hashnode/image/upload/v1690560380176/0d5d0ab7-5b77-4010-9ed7-e30d780a510a.png> align="center")

Additional Code was added to the script.

```powershell

<# Parameter List #>
[CmdletBinding()]
param (
    [Parameter()]
    [string] $MultiJobDownload
)
###### Download multiple files. ######
if ($MultiJobDownload) {
    <# Action to perform if the condition is true #>
    try {
        Import-csv -Path $MultiJobDownload | Start-BitsTransfer -Asynchronous
        Write-Host "Beginning download from listed sources."
        Write-Host "" # This just adds some more space in the console.
        Start-Sleep 1
        Write-Host " Sources and destinations below: -"
        Get-Content -Path $MultiJobDownload
        
    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "Error when starting the job."
        $_
    }
}
```
