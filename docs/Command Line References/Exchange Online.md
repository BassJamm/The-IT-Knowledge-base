---
draft: False
id: Exchange Online
title: Exchange Online
hide_title: false
hide_table_of_contents: false
sidebar_label: Exchange Online
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Exchange Online
tags: [Command Line, Exchange Online]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Exchange Online command ref doc.
---

## Document Control

- Created: 23/04/22
- Last Updated: 23/04/22

## Module Install and Management

```powershell showLineNumbers
Install-module -Name ExchangeOnline

Update-Module - Name ExchagneOnline
```

## Manage Calendar Permissions
 
### Get Calendar Permissions

Get-MailboxFolderPermission

```powershell showLineNumbers
$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName
 
# Single mailbox command.
# Get-MailboxFolderPermission -Identity Ryan.Wilson@traderemedies.gov.uk:\Calendar -User Default | ft
 
# Loop through each user and get calendar permissions of the default user.
foreach($user in $userObject){
    $calendar = $user.UserPrincipalName+":\Calendar"
    Get-MailboxFolderPermission -Identity $calendar | Export-csv -Append $env:USERPROFILE\Downloads\calendar-perms.csv
}
```

### Set Calendar Permissions

Set-MailboxFolderPermission

```powershell showLineNumbers
$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName
 
# Single mailbox command.
# Set-MailboxFolderPermission -Identity firstname.Lastname@fordway.com:\Calendar -User Default -AccessRights LimitedDetails
 
# Loop through each user and set calendar permissions of the default user.
foreach($user in $userObject){
    $calendar = $user.UserPrincipalName+":\Calendar"
    Set-MailboxFolderPermission -Identity $calendar -User Default -AccessRights LimitedDetails
```