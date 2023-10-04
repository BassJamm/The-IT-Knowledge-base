---
draft: false
id: Code Snippet
title: Code Snippet
hide_title: false
hide_table_of_contents: false
sidebar_label: Code Snippet
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Code Snippet
tags: [Command Line, PowerShell]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: All things PowerShell.
---

## Copy Azure Disk to Blob

```powershell showLineNumbers
# Source VM and Disk Informaiton.
$sourcesubscriptionId = "Blah Blah Blah"
$sourceResourceGroup = "rg-Blah-Blah-Blah-Blah"
$sourceDisk = "server_name-Disk-001"
$sourceDiskSASExpiryDuration = "3600"

# Destination Storage Account Information.
$destinationStorageAccount = "Blobcontainername"
$destinationStorageContainer = "BlahFolder"
$destinationStorageAccountKey = "Blah Blah Blah" 
$destinationVHDFileName = "server_name-Disk-001.vhd"

# Select the source Subscription
Write-Host "Selecting the $($sourcesubscriptionId) subscription." -ForegroundColor Yellow
Select-AzSubscription -SubscriptionId $sourcesubscriptionId

# Generate the Shared Access Signature (SAS) expiry duration in seconds.
Write-Host "Generating Shared Access Signature for source disk, $($sourceDisk)." -ForegroundColor Yellow
$diskSASInfo = Grant-AzDiskAccess -ResourceGroupName $sourceResourceGroup -DiskName $sourceDisk -DurationInSecond $sourceDiskSASExpiryDuration -Access Read

# Create the context of the storage account where the underlying VHD of the managed disk will be copied
Write-Host "Setting the Storage Account, $($destinationStorageAccount) as the destination." -ForegroundColor Yellow
$destinationStorageAccountContext = New-AzStorageContext -StorageAccountName $destinationStorageAccount -StorageAccountKey $destinationStorageAccountKey
```
