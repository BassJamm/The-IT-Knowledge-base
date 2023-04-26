---
draft: true
id: Get User info using MGGraph
title: Get User info using MGGraph
hide_title: false
hide_table_of_contents: false
sidebar_label: Get User info using MGGraph
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Get User info using MGGraph
tags: [MGGraph, Script]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Get user information using MGGraph.
---

## Document Control

- Created: 26/04/22
- Last Updated: 26/04/22

## Script

:::info
I didn't write this script, I cannot take any credit for it!
:::

Takes a User UPN input, you can place the usernames in to a text file and pipe it into this script, it will loop through them.

```powershell showLineNumbers
cd C:\Temp\
 .\textfile.txt | .\MGGraph-script.ps1 | ft -a *
```

```powershell showLineNumbers
<#
  Gets the users password settings, using Get-MSOLUser.
  NOTE: connect-msolservice first to connect to the tenant.


  Pipe username(s) into the script or specify them into the command line.

  By Chris Ryan, March 2023.

#>
param(
[Parameter(Mandatory = $true, ValueFromPipeline = $true)]
	[string[]]$UserUPNs

)

BEGIN {}

PROCESS {
        foreach ($UserUPN in $UserUPNs)
            {
            Write-Progress "Querying MGGraph for user: $UserUPN"
            Get-mguser -UserId  $UserUPN -Property UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies | Select UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) ).TotalDays -as [int] }}
            }
        }

END {}
```