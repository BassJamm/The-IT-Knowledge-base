---
id: Partner access to Az Sub
title: Grant Partner Access to Azure Sub
hide_title: false
hide_table_of_contents: false
sidebar_label: Grant Partner Access to Azure Sub
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Grant Partner Access to Azure Sub
tags: [PartnerCentre]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Reinstate admin privileges for a customer's Azure CSP subscriptions.
---

## Document Control

- Created: x
- Last Updated: 2023/03/30

Microsoft Article: [Reinstate admin privileges for a customer's Azure CSP subscriptions](https://learn.microsoft.com/en-us/partner-center/reinstate-csp).

```powershell
# Connect to Sub.
Connect-AzAccount -TenantID "<Customer TenantID>"

# Set the subscription context you want to add partner permissions too.
Set-AzContext -SubscriptionID "<Customer Subscription ID>"

# Assign the "adminagents" group in Partner tenant to the customer subscription
New-AzRoleAssignment -ObjectID "<Object ID of the AdminAgents group from step 7 of your actions section>" -RoleDefinitionName "Owner" -Scope "/subscriptions/<CSP subscription ID>" -ObjectType "ForeignGroup"
```
