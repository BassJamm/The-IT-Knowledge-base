---
draft: false
id: Microsoft Graph
title: Microsoft Graph
hide_title: false
hide_table_of_contents: false
sidebar_label: Microsoft Graph
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Microsoft Graph
tags: [Command Line, Microsoft Graph]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Microsoft Graph command ref doc.
---

## 1. Document Control

- Created: 2023/04/22
- Last Updated: 2023/04/22

## 2. User Management

### 2.1. Get Last Password reset time from Azure AD

Get-MgUser

```powershell showLineNumbers
connect-mggraph -scopes "User.ReadWrite.All"
 
$mgUser = Get-MgUser -All -Property UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies | `
Select UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) ).TotalDays -as [int] }} | `
Where UserPrincipalName -notmatch 'A-|-ADM|ad00|.onmicrosoft|Candidate' | `
Sort PasswordAgeDays | `
Ft -Autosize
```

### 2.2. Grab basic user information to work with

```powershell showLineNumbers
Get-MGUser -All -Property Id, DisplayName, UserPrincipalName, AssignedLicenses | Select Id, DisplayName, UserPrincipalName, AssignedLicenses
```

### 2.3. Grab a password report of all users.

```powershell showLineNumbers
Get-MgUser -All -Property UserPrincipalName, DisplayName, Id, LastPasswordChangeDateTime,PasswordPolicies | `
Select-Object UserPrincipalName, DisplayName, LastPasswordChangeDateTime,PasswordPolicies, @{l='PasswordAgeDays';e={ (New-TimeSpan -Start $_.LastPasswordChangeDateTime -End (get-date) )TotalDays -as [int] }} | ` 
Sort-Object PasswordAgeDays 
 ```

## 3. Device management

### 3.1. Get devices from Intune with their Primary User

Get-MgDeviceManagementManagedDevice

```powershell showLineNumbers
# Connect with the relevant permission to read all user and device data.
Connect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"
 
$getAllDevices = Get-MgDeviceManagementManagedDevice -All | `
Select DeviceName, UserPrincipalName, EnrolledDateTime, ComplianceState, IsEncrypted, LastSyncDateTime, Id , Manufacturer, Model, OperatingSystem, OSVersion, SerialNumber,@{l='PrimaryUser';e={  $device = $_ ; Get-MgDeviceManagementManagedDeviceUser -ManagedDeviceId $device.id | select -expandproperty UserPrincipalName  }} | `
Sort OperatingSystem
```

### 3.2. Get Generic Device Report from intune

```powershell showLineNumbers
# Connect with the relevant permission to read all user and device data.
Connect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All"
 
# Get all intune "Managed" devices.
Get-MgDeviceManagementManagedDevice -All | select DeviceName, AzureAdDeviceId, UserPrincipalName, Id, ComplianceState, EnrolledDateTime, LastSyncDateTime, Manufacturer, Model, OSVersion, SerialNumber | sort UserPrincipalName |  ft -AutoSize
```

### 3.3. Get a list of Configuration Profiles from Intune

Get-MgDeviceManagementDeviceConfiguration

```powershell showLineNumbers
# Get Configuration Profiles for an Org.
Get-MgDeviceManagementDeviceConfiguration -All | select Id, DisplayName
```

## 4. Module Management

### 4.1. Connect & Update

```powershell showLineNumbers
Connect-MGGraph

Update-Module -Name Microsoft.Graph
```
 
### 4.2. Connect to MG Graph with Read-only permissions

Connect-MGGraph

This will connect with read only permissions to manage Users and Devices.

```powershell showLineNumbers
Connect-MgGraph "User.Read.All", "DeviceManagementRBAC.Read.All", "DeviceManagementServiceConfig.Read.All", "DeviceManagementConfiguration.Read.All", "DeviceManagementManagedDevices.Read.All" 
```
