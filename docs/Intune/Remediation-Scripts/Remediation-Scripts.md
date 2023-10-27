---
draft: false
id: Remediation Scripts
title: Remediation Scripts
hide_title: false
hide_table_of_contents: false
sidebar_label: Remediation Scripts
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Remediation Scripts
tags: [Intune, Remediation, Scripts]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Document contains remediation scripts for use.
---
---

## Map Drives

### Detaion Script

- Detects if a Schedlued task has been created on the endpoint to determine if the remediation script should run.

```powershell showLineNumbers
##################################################################################
# Detect Scheduled task for drive re-creation
##################################################################################

########## Create log file. ##########
$logFileLocation = "C:\ProgramData\Outputs\DriveMapping\Multiple-Drives"
$logFileName = "Detect-MultiDrive-Scheduled-Task.log"

# Remove log file if found.
if (Test-Path -path $logFileLocation\$logfileName) {
    Remove-Item -Path $logFileLocation\$logfileName 
}

New-Item -Path $logFileLocation -Name $logFileName -ItemType File -Force
function WriteToLogFile($message) {
    Add-Content "$logFileLocation\$logFileName" -Value "$(Get-Date) - $($message)"
}
WriteToLogFile "Log Created\Updated."
WriteToLogFile "Script begins now."

$task = Get-scheduledTask -TaskName "Map-Multiple-Drive" -ErrorAction SilentlyContinue

if ( ($task).Count -gt 0 ) {
    WriteToLogFile "$($task.TaskName) task already exists."
    WriteToLogFile "Exiting with Code 0, nothing to remediate."
    Exit 0
}else {
    WriteToLogFile "Task does not exist."
    WriteToLogFile "Exiting with Code 1, remediation script should run."
    Exit 1
}
```

### Remediation Script

```powershell showLineNumbers
##################################################################################
# Register a scheduled task to run for all users and execute the script on logon #
##################################################################################

########## Create log file. ##########
$logFileLocation = "C:\ProgramData\Output\DriveMapping\Multiple-Drives"
$logfileName = "Create-MultiDriveMapping-ScheduledTask.log"

# Remove log file if found.
if (Test-Path -path $logFileLocation\$logfileName) {
    Remove-Item -Path $logFileLocation\$logfileName 
}
New-Item -Path "C:\ProgramData\Output\" -Name "DriveMapping" -ItemType Directory -Force
function WriteToLogFile($message) {
    Add-Content "$logFileLocation\$logfileName" -Value "$(Get-Date) - $($message)"
}
WriteToLogFile "Log Created."
WriteToLogFile "Script Begins here."

########## Create the script on the local deivce. ##########

$scriptLocation = "C:\ProgramData\Output\DriveMapping\Multiple-Drives\Map-multiple-Drives.ps1"
$scriptContent = @'
##################################################################################
#                             Create Multiple Drives                             #
##################################################################################

######################### Function to Create log file. ##################################################

########## Create log file. ##########
$logFileLocation = "C:\ProgramData\Output\DriveMapping\Multiple-Drives"
$logFileName = "Create-Multiple-Drive-RegKeys.log"

# Remove log file if found.
if (Test-Path -path $logFileLocation\$logfileName) {
Remove-Item -Path $logFileLocation\$logfileName 
}

New-Item -Path $logFileLocation -Name $logFileName -ItemType File -Force
function WriteToLogFile($message) {
Add-Content "$logFileLocation\$logFileName" -Value "$(Get-Date) - $($message)"
}
WriteToLogFile "Log Created\Updated."
WriteToLogFile "Script begins now."

######################### Function to set Registry Keys ###################################
function setRegKeys {

# Add the relevant information to Key.
$ConnectionType = "00000001"
$DeferFlags = "00000004"
$ProviderFlags = "00000000"
$ProviderName = "Microsoft Windows Network"
$ProviderType = "00000001"
$UseOptions = ([byte[]](0x44, 0x65, 0x66, 0x43, 0x7c, 0x00, 0x00, 0x00, 0x04, 0x00, 0x74, 0x00, 0x00, 0x00, 0x02, 0x00, 0x03, 0x00, 0x01, 0x00, 01, 0x00, 0x00, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 00, 0x00, 0x80, 0x00))
$UserName = "00000000"
$lastWriteTime = Get-Date -UFormat "%A %m/%d/%Y %R %Z"

try {
New-ItemProperty -Path $registryPath\$keyName -Name "ConnectionType" -Value $ConnectionType -PropertyType DWORD -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "DeferFlags" -Value $DeferFlags -PropertyType DWORD -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "ProviderFlags" -Value $ProviderFlags -PropertyType DWORD -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "ProviderName" -Value $ProviderName -PropertyType STRING -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "ProviderType" -Value $ProviderType -PropertyType DWORD -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "RemotePath" -Value $RemotePath -PropertyType ExpandString -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "UseOptions" -Value $UseOptions -PropertyType Binary -Force
New-ItemProperty -Path $registryPath\$keyName -Name "UserName" -Value $UserName -PropertyType DWORD -Force | Out-Null
New-ItemProperty -Path $registryPath\$keyName -Name "lastWriteTime" -Value $lastWriteTime -PropertyType ExpandString -Force | Out-Null

}
catch {
WriteToLogFile "Error, script failed."
WriteToLogFile $_
}


}

######################### Set the Drive Mappings. #########################

# CSV Data to be converted.
$csv = @"
Name,Path
x,\\servername\sharename
"@

# Convert from CSV to objects.
$drives = $csv | ConvertFrom-Csv
WriteToLogFile "Ingesting CSV Data."

# Loop through each entry in the CSV.
WriteToLogFile "Creating new registry keys at, $($registryPath)."

try {

foreach ($Drive in $Drives) {

# Set variables.
$keyName = $drive.Name
$RemotePath = $drive.Path
$registryPath = "Registry::HKEY_CURRENT_USER\Network"

# Check for current drive mapping and remove it if it exists.
WriteToLogFile "Checking if drive mapping already exists."
if ((Get-SmbMapping -LocalPath ($keyName + ':') -ErrorAction SilentlyContinue).Count -gt 0) {
Remove-SmbMapping -LocalPath ($keyName + ':') -Force -ErrorAction SilentlyContinue
}
WriteToLogFile "Drive $(($keyName + ':')) has been found and removed."

# Create the new Registry Keys
New-Item -Path $registryPath -Name $keyName -Force
WriteToLogFile "New mapping being created. Local Name: $($keyName), Remote Path: $($RemotePath)."
setRegKeys # Runs the function to create the keys.
}
WriteToLogFile "All Drives mapped successfully."
Exit 0 # Returns success code back to Intune for reporting.
}
catch {
WriteToLogFile "Error mapping the drives."
WriteToLogFile $_
Exit 1 # Returns failure code back to Intune for reporting.
}
'@

WriteToLogFile "Checking for multi-Drive Mapping Script here, $($scriptLocation)"

if (Test-Path -Path $scriptLocation) {
    Remove-Item -path $scriptLocation
    WriteToLogFile "Script found and removed."
}

try {
    $scriptContent | Add-Content $scriptLocation
    WriteToLogFile "Script at location, $($scriptLocation) updated."
    
}
catch {
    WriteToLogFile "Unable to copy the script file to $($scriptLocation)."
    WriteToLogFile $_
    Exit 1 # Returns failure code back to Intune for reporting.
}

########## Create logon task. ##########

$schtaskName = "Map-Multiple-Drives"
$schtaskPath = "MyTasks"
WriteToLogFile "Creating new Scheduled task called, $($schtaskName)."
$action = New-ScheduledTaskAction -Execute 'Powershell.exe' -Argument '-WindowStyle hidden -command "& C:\Programdata\Output\DriveMapping\Map-multiple-Drives.ps1"'
$trigger = New-ScheduledTaskTrigger -AtLogon
$principal = New-ScheduledTaskPrincipal -GroupId "Users"
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 10) -Hidden 
$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger -Settings $settings

try {
    Register-ScheduledTask -TaskName $schtaskName -InputObject $task -TaskPath $schtaskPath
    WriteToLogFile "Task Registered successfully."
    Exit 0 # Returns succes code back to Intune for reporting.
}
catch {
    WriteToLogFile "Unable to register task."
    WriteToLogFile $_
    Exit 1 # Returns failure code back to Intune for reporting.
}
```