---
draft: False
id: Uninstall McAfee
title: Uninstall McAfee
hide_title: false
hide_table_of_contents: false
sidebar_label: Destroy McAfee
sidebar_position: 1
toc_max_heading_level: 4
pagination_label: Uninstall McAfee
tags: [Intune, Application, Script]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Documents how to deploy McAfee.
---
---

## Deployment Guidance

:::tip Local Folder Structure

I would suggest setting up the following folder struture on your local machine first.

1. Create `C:\Software\Intune-Apps\McAfee`.
2. Inside McAfee, place your exe and install script.
3. Create an output folder here like so, `C:\Software\Intune-Apps\Output`

:::

### Download the MCPR Tool

1. Download Link here, [MCPRTool](https://download.mcafee.com/molbin/iss-loc/SupportTools/MCPR/MCPR.exe).
2. Run the Tool on your endpoint.
3. Find the Temp Folder located here: `C:\Users\$env:UserName\Appdata\Local\Temp`.
4. In here will be a folder containing an exe file called `MCCleanup.exe`.
5. Find this and copy the whole folder it is in and all contents into `C:\Software\Intune-Apps\McAfee\MCPR-Tool`

### Script Creation

1. Navigate to `C:\Software\Intune-Apps\McAfee`.
2. Create a new script called, `Destroy-McAfee.ps1`.
3. In the file place the script noted in the section below.

In the location, `C:\Software\Intune-Apps\McAfee`, you should have the below:

- `MCPR-Tool` folder, containing the MCPR Tool (`MCCleanup.exe`) and all other files\folders.
- `Destroy-McAfee.ps1` Script.

### Create your IntuneWin File

Package the exe and the script into an IntuneWin File using the Microsoft Win32 Content Prep Tool; command refernce below.

1. Open PowerShell as an Admin.
2. Navigate to the location of the Win32 Content Prep Tool.
3. Run this command, `Content-prep-tool-name -c C:\Software\Intune-Apps\McAfee -s C:\Software\Intune-Apps\McAfee\Destroy-McAfee.ps1 -o C:\Software\Intune-Apps\Output`

## Intune Settings: Win32 App Deployment

1. Select a Win32 App Deployment.
2. Make sure to set the detection option to `File` and point it at the text file outpt in the script, `C:\ProgramData\Output\McAfee\McAfee-Script-Ran-Successfully-McAfee-Not-Found.txt`.

### Deployment Script

```powershell showLineNumbers
# Create a log file.
$logFileLocation = "C:\ProgramData\Output\McAfee"
$dateOfRun = (Get-Date).ToString("yyyy-MM-dd_hh-ss")
New-Item -Path $logFileLocation -ItemType Directory -ErrorAction SilentlyContinue

function WriteToLogFile($message) {
    Add-Content "$logFileLocation\McAfee_Removal_LogFile_$($dateOfRun).log" -Value "$(Get-Date) - $($message)"
}

WriteToLogFile "Log File Created."
WriteToLogFile "Script begins now."

# Check for McAfee registry keys
WriteToLogFile "Checking for McAfee Registry Keys."
$registryPaths = "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall", "HKLM:\Software\WOW6432NODE\Microsoft\Windows\CurrentVersion\Uninstall"
$searchInstalledSoftware = Get-ChildItem $registryPaths | ForEach-Object { $_.GetValue('DisplayName') } | Where-Object { $_ -like '*McAfee*' }

# If McAfee registry keys are found, remove McAfee
if ($searchInstalledSoftware.Count -ne 0) {

    WriteToLogFile "McAfee Keys found: $($searchInstalledSoftware)"

    # Run the McAfee Cleanup Tool
    WriteToLogFile "Running the removal tool."
    $killMcafee = Start-Process .\MCPR-Tool\mccleanup.exe -ArgumentList "-p StopServices,MFSY,PEF,MXD,CSP,Sustainability,MOCP,MFP,APPSTATS,Auth,EMproxy,FWdiver,HW,MAS,MAT,MBK,MCPR,McProxy,McSvcHost,VUL,MHN,MNA,MOBK,MPFP,MPFPCU,MPS,SHRED,MPSCU,MQC,MQCCU,MSAD,MSHR,MSK,MSKCU,MWL,NMC,RedirSvc,VS,REMEDIATION,MSC,YAP,TRUEKEY,LAM,PCB,Symlink,SafeConnect,MGS,WMIRemover,RESIDUE -v -s"
    WriteToLogFile "Cleanup tool has been launched. Machine will require reboot to complete."

    # Delete McAfee shortcut icon.
    try {
        if(Test-Path 'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\McAfee'){
            WriteToLogFile "Deleting Start Menu item"
            Remove-Item 'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\McAfee'
        }
    }
    catch{
        WriteToLogFile "Error deleting Start Menu Items."
        WriteToLogFile $_
    }
    
    # Place text file at a location for Intune to detect.
    WriteToLogFile "Creating detection text file here, C:\ProgramData\Output\McAfee\McAfee-Script-Ran-Successfully.txt"
    New-Item -Path  "C:\ProgramData\Output\McAfee" -Name "McAfee-Script-Ran-Successfully.txt"  -ItemType File 
}
else {

    WriteToLogFile "No reference to McAfee Found."
    WriteToLogFile "Terminating script."

    # Place text file at a location for Intune to detect this result (add detection rule on win32 app for this).
    WriteToLogFile "Creating detection text file here, C:\ProgramData\Output\McAfee\McAfee-Script-Ran-Successfully-McAfee-Not-Found.txt"
    New-Item -Path  "C:\ProgramData\Output\McAfee" -Name "McAfee-Script-Ran-Successfully-McAfee-Not-Found.txt"  -ItemType File
}
```
