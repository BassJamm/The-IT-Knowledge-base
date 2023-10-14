---
draft: true
id: 
title: 
hide_title: false
hide_table_of_contents: false
sidebar_label: 
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: 
tags: []
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: 
---
---

## Too Long; Didn't Read

- Summarise the main points.
- Keep it short and snappy.
- Add any reference URLS.

## Layout examples

### PowerShell Example

```powershell showLineNumbers
# With numbers.
```

### Table Example

|  |  |  |
|--|--|--|
|  |  |  |
|  |  |  |

### Section referencing

[section](#document-control)

---
Created: (date in reverse format.), Last Updated: (date in reverse format.)

| Priority | Name | Port | protocol | Source | Destination | Action | Notes | | |:--------------: |:-------------------------------------: |:-----------------------: |:--------: |:----------------------: |:---------------------------------------: |:------------------: |:----------------------------------------------------------------------------: | | 100 to 109 | 100 to 109 | available for overrides | - | - | - | - | 100 to 109 available for overrides | | | 110 to 199 | Allow any inbound internet services. | - | - | - | - | - | Allow any inbound internet services. | | | 111 | Allow http | 80 | TCP | 0.0.0.0/24 | Internet (Service Tag) | Allow | Allow http services to internet. | | | 112 | All https | 443 | TCP | 0.0.0.0/24 | Internet (Service Tag) | Allow | Allow https services to internet. | | | 114 | Allow-DNS-to-MicrosoftAzure | 53 | Any | 0.0.0.0/24 | 168.63.129.16 | Allow | Allow DNS to Azure IP | | | 115 | Allow-AADConnect-to-AzureAD | 443,80 | TCP | 10.125.8.13 | AzureAzureActiveDirectory (Service Tag) | Allow | Allow Allow AAD Connect services. | | | 116 | Allow-Azuresiterecovery | 443,80 | TCP | 0.0.0.0/24 | AzureSiteRecovery | Allow | Allow Azure Site Recovery services. | | | 117 | Allow-AzureKeyVault | 443,80 | TCP | 0.0.0.0/24 | AzureKeyVault | Allow | Allow Azure Key Vault services. (Dependency for ASR). | | | 118 | Allow-GuestAndHybridManagement | 443,80 | TCP | 0.0.0.0/24 | GuestAndHybridManagement | Allow | Allow Guest and Hybrid Management services. (Dependency for ASR, AzMonitor). | | | 119 | Allow-Storage | 443,80 | TCP | 0.0.0.0/24 | Storage | Allow | Allow Storage services. (Dependency for ASR, AzMonitor). | | | 120 | Allow-EventHub | 443,80 | TCP | 0.0.0.0/24 | EventHub | Allow | Allow Event Hub services. (Dependency for ASR). | | | 121 | Allow-AzureMonitor | 443,80 | TCP | 0.0.0.0/24 | AzureMonitor | Allow | Allow Event Hub services. (Dependency for ASR). | | | 122 | Allow-WindowsUpdate-AzUpdateDeliver | 443,80 | TCP | 0.0.0.0/24 | AzureUpdateDelivery (Service Tag) | Allow | Allow Az update delivery services | | | 123 | Allow-WindowsUpdate-AzFrontDoorFP | 443,80 | TCP | 0.0.0.0/24 | AzureFrontDoor.FirstParty (Service Tag) | Allow | Allow Az update delivery services | | | 200 | Deny-Internet-to-Any | Any | Any | Internet (Service tag) | Any | Deny | Deny All inbound Internet access. | | | 200 to 299 | Allow any internal vNet services | - | - | - | - | - | Allow any internal vNet services | | | 300 | Deny-From-VNET-to-VNET | Any | Any | Any | Any | Deny | - | | | 301 to 64999 | For non-vnet or internet facing rules | - | - | - | - | - | For non-vnet or internet facing rules | | | 65000 | AllowVnetInBound | Any | Any | VirtualNetwork | VirtualNetwork | Allow Built in Rule | | | | 65000 to 65500 | Are built in rules | - | - | - | - | - | Are built in rules | |