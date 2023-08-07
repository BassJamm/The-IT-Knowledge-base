---
draft: true
title: Challenge 2 - Folder Size Report with PowerShell
description: Create a script that can download any file by the URL given by a user.
slug: pwsh-challenge-002
date: 2023-08-07T11:00
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [PowerShell, Script, Challenge]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Create a script that calculates the total size of a given folder and all its subfolders (recursively). The script should display the size in a human-readable format (e.g., KB, MB, GB).

<!--truncate-->
:::info Quick Social Plug

Check out my other post locations: -

- [HashNode Link](https://willh.hashnode.dev/)
- [Patreon Link](https://patreon.com/BassJamm?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link)

:::

## End Result

Thought I would put the result first, and save people from scrolling, those who wish to see the process can read the rest of this!

I decided not to add any error handling into this, as it's quite hard to break this one!

:::note

Sorry for the backticks, it makes it a bit easier to read on the page as it's quite slim!

:::

[Link to script in GitHub!](https://github.com/BassJamm/PowerShellChallenge/blob/51799e1b087f846285f15bff9df9f019caa12fdc/Folder-Report/TOOL-Folder-Report.ps1)

```powershell showLineNumbers

###### Prompt user for flder input. ######
$sourceDirectory = Read-Host -Prompt "Please enter the directory you wish to scan"

###### Get all Directories in that location. ######
$ChildDirectories = Get-ChildItem $sourceDirectory | `
                        Where-Object {$_.PSIsContainer -eq $true} | `
                        Sort-Object Name

###### Foreach directory get all items recursively. ######
$childDirectorySizes = foreach ($folder in $ChildDirectories) {

    $subFolderItems = Get-ChildItem $folder.FullName -recurse -force | `
    Where-Object {$_.PSIsContainer -eq $false} | `
    Measure-Object -property Length -sum | `
    Select-Object Sum  

    New-Object psobject -property @{
        "Location" = $folder.FullName
        "Size(MB)" = [Math]::Round($subFolderItems.sum /1MB, 2)
    }
}

###### Provide a size report of the directory and child directories. ######
$childDirectorySizes | Format-Table 'Location','Size(MB)' -AutoSize

```

## Building the script

I would like to start by saying I am not an expert at this but, these challenges prompt learning and thus I aim to be better for the next challenge and so on.

### Prompting for user input

Firstly, we need to get the folder location from the end user. I've done this using the Read-Host command with the `-prompt` parameter. This is a staple command I have found in almost every script requiring user input.

```powershell showLineNumbers
$sourceDirectory = Read-Host -Prompt "Please enter the directory you wish to scan"
```

The `Read-Host -prompt` input is then stored in the `$sourceDirectory`` variable for later use.

### Getting the Folders

Secondly, we need to identify the folders that are within the directory the user gave us. We are doing this with the `Get-ChildItem` command, which gets everything in that location, Folders, or Files.

I'm then piping this `|` into a `Where-Object` command which then identifies the Folders or containers.

:::info
I've added a sort by "name" at the end, as I want to display the first 10 items in the console, to indicate that the script has found items to the end user. It is completely unnecessary!
:::
