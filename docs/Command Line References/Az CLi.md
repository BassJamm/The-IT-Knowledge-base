---
draft: False
id: AzCLi
title: Az Cli
hide_title: false
hide_table_of_contents: false
sidebar_label: Az Cli
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: AzCLi
tags: [Command Line, AzCLi]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: AzCLi command ref doc.
---

## Document Control

- Created: 23/04/22
- Last Updated: 23/04/22

## Querying (Filtering)

Single item search from an output
`az vm show --resource-group RG-WHDOMAIN-EUS-CORE --name vm-whdom-eus-dc-01 --query "hardwareProfile" -o table`

Multiple Item search from an output, formatted to a table.

```powershell showLineNumbers
# You're passing the array to the filters to the right of the '.',.
# The format Name:config item, names he heading for the values collected.
az vm list --query "[].{Name:name, Location:location, RG:resourceGroup, Size:hardwareProfile.vmSize}" -o table
```

## List VMs

az vm list

```powershell showLineNumbers
az vm list --output table
az vm list -o table
```
