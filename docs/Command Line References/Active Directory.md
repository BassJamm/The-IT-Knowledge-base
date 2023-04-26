---
draft: true
id: Active Directory
title: Active Directory 
hide_title: false
hide_table_of_contents: false
sidebar_label: Active Directory
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: ActiveDirectory
tags: [AzureAD]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: All things related to Active Directory cmdlet.
---

## Document Control

- Created: x
- Last Updated: x (date in reverse format.)

## User Management

### Get Basic User information

Get-ADUser

```powershell showLineNumbers
Get-ADUser -Filter * -Properties * | Select Name, Enabled, Modified, LastLogonDate, UserPrincipalName, whenCreated, whenChanged, DistinguishedName, ObjectGUID, Description | sort Name,DistinguishedName |  Export-csv -Path C:\Temp\UserReport.csv -NoTypeInformation
```

## Computer Management

Get-ADComputer

```powershell showLineNumbers
get-adcomputer -filter * -Properties * | Select Name, Created, Modified, CanonicalName, PasswordLastSet | sort passwordlastset -Descending |  Export-csv -Path C:\Temp\ComputerReport.csv -NoTypeInformation
```
