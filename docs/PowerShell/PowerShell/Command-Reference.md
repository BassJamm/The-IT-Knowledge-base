---
draft: false
id: Command Reference
title: Command Reference
hide_title: false
hide_table_of_contents: false
sidebar_label: Command Reference
sidebar_position: 4
toc_max_heading_level: 4 
pagination_label: Command Reference
tags: [Command Line, PowerShell]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: All things PowerShell.
---

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

## Test multiple item paths

Test-Path

Test multiple paths for files or folders.

```powershell showLineNumbers
Test-Path "$Variable1", "$Variable2", "$Variable3"
```

## Import and filter CSV Files

ImportFrom-CSV

```powershell showLineNumbers
$csvFile = Import-Csv 'C:\Temp\File.csv' # Edited export with devices status notes.
  
# Filter Examples
$csvFile | group osVersion 
$csvFile | group osVersion | select -ExpandProperty property Name| ft -AutoSize
```

## Get active SMB Connections

```powershell showLineNumbers
Get-SMBSession
```