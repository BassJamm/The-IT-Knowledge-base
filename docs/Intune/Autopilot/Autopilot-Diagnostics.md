---
draft: false
id: Diagnose Autopilot Errors
title: Diagnose Autopilot Errors
hide_title: false
hide_table_of_contents: false
sidebar_label: Diagnose Autopilot Errors
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Diagnose Autopilot Errors
tags: [Autopilot, Intune]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Details how to review the Autopilot logs on a device.
---

This short document details how to review the logs from Autopilot when there's an error to diagnose during the build process.

## Document Control

- Created: 2023-09-20
- Last Updated: 2023-09-20

## Collecting the log files

Initiate the build of a machine firstly and wait for this to fail.

1. Load Command Prompt as an Administrator: This can be done with one of the following key combinations, `Shift + F10`, `Alt + Shift + F10` or `Fn + Shift + F10`, it differs for each model of machine.
2. Load Powershell: Type the command `Powershell` into the Command Prompt window.
3. Create a new Folder to store the logs: Type, `New-Item -Path C:\ -Name Temp -ItemType Directory` into the Powershell window to create a new Temp folder a the root of `C:\`.
4. Collect the Autopilot logs: Type, `MdmDiagnosticsTool.exe -area Autopilot -zip C:\$env:USERPROFILE\Desktop\mdmDiag.zip`, this will give you a status once completed.

## Read the log files

Once you have the logs, you'll need to downlad a script that will then print out only the necessary errors and filter out the "noise" (the log files are horrible to sift through)!

1. Install the script to parse the logs: Type, `Install-Script -Name Get-AutopilotDiagnostics -Scope CurrentUser`, this should prompt for a Y\N to proceed.
2. Run the script against the zipped logs files: Type,`Get-AutopilotDiagnostics.ps1 -ZIPFile C:\Temp\mdmDiag.zip`, this will then spit out the relevant information to inform you what has caused the error.

## Known problems (And solutions)

These are issues I have encountered before.

### Application install errors

This has been the most common cause for the Autopilot builds to fail in my experience.

:::info
Applications in Intune that have a "Required" installation for users, devices or to a group, will be installed during the AutoPilot process.
:::

1. Perform the steps from the sections above.
2. Review the errors in the output, make not of the application IDs.
3. Export a report of the Apps from the Intune\Endpoint Manager portal, this includes the App IDs.
4. Check the Application IDs match and remove the "Required" assignment.

### Terms and Conditions Error

I have seen recently an error appear explaining that something has gone wrong due to the terms and conditions not having been accepted. This problem does not seem to break\stop the build from completing but, does appear to the end user.

1. Check if you have blocked the Ts & Cs window from showing via the Autopilot profile.
2. Allow it for a breif time to remove the error showing for end users.

So far we've not been able to fix this problem.