---
draft: false
id: NSG Flow log Formatter
title: NSG Flow log Formatter
hide_title: false
hide_table_of_contents: false
sidebar_label: NSG Flow log Formatter
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: NSG Flow log Formatter
tags: [PartnerCentre]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Script will help with readability of NSG flow logs.
---

## Document Control

- Created: 23/04/22
- Last Updated: 23/04/22

## Script

:::info
I didn't write this script, I cannot take any credit for it!
:::

Takes a input json format Azure NSG Flow Log file using -$NsgFlowLogFileName command line option

```powershell showLineNumbers
cd C:\Temp\
.\Parse-NSG-FlowLog_json.ps1 -NsgFlowLogFileName .\PT1H.json | ft -AutoSize
```

```powershell showLineNumbers
param(
    [string]$NsgFlowLogFileName = "C:\Temp\filename.json"
)
 
# Import the logs from the file convert it from json into a powershell object
$logs = gc $NsgFlowLogFileName  -ErrorAction SilentlyContinue | ConvertFrom-Json | select -ExpandProperty records
 
# Loop through each entry in the json file
foreach ($Log in $Logs)
    {
    #Get a list of flows
    $Flows = $log.properties.flows
 
    # Loop through each flow of each json entry and output the details
    foreach ($Flow in $Flows)
        {
        # Split the flow information to a variable for easier and quicker referencing
        $FlowInfo = $Flow.flows.flowtuples[0] -split(',')
 
        # Output details as a powershell object
        [pscustomobject]@{
            DateTime      = (Get-Date 01.01.1970)+([System.TimeSpan]::fromseconds($FlowInfo[0]))    # Converts time format.
            NSGName       = $Log.resourceId.split('/')[-1]
            RuleName      = $Flow.rule
            Decision      = switch ($FlowInfo[7]) { 'a' { "Allowed" } ; "d" {"Denied"} }
            FlowState     = switch ($FlowInfo[8]) { 'B' { "Begin" } ; "C" {"Continue"} ; "e" {"End"} }
            SourceIP      = $FlowInfo[1]
            SourcePort    = $FlowInfo[3]
            DestIP        = $FlowInfo[2]
            DestPort      = $FlowInfo[4]
            Protocol      = switch ($FlowInfo[5]) { 't' { "TCP" } ; "u" {"UDP"} }
            Direction     = switch ($FlowInfo[6]) { 'i' { "InBound" } ; "o" {"OutBound"} }
            SourcePackets = $FlowInfo[9]
            SourceBytes   = $FlowInfo[10]
            DestPackets   = $FlowInfo[11]
            DestBytes     = $FlowInfo[12]
 
            # Below line ends the flow loop, then filters out the empty entries.
            } | where SourceIP -ne $null
      }
    }
```
