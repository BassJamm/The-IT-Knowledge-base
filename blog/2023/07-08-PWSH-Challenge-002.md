---
draft: false
title: Challenge 2 - Folder Size Report with PowerShell
description: Create a script that can download any file by the URL given by a user.
slug: pwsh-challenge-002
date: 2023-08-07T11:00
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [PowerShell, Script, Challenge]
image: https://cdn.hashnode.com/res/hashnode/image/upload/v1690624765820/c7da8f32-0c1e-4ca0-a807-bb4efe449c18.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
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
Write-Host "Collecting the diretory information." -ForegroundColor Yellow
$ChildDirectories = (Get-ChildItem $sourceDirectory -Directory).FullName
Start-Sleep 1
Write-Host "Directories found successfully." -ForegroundColor Green

###### Foreach directory get all items recursively. ######
Write-Host "Processing items." -ForegroundColor Yellow
$childDirectorySizes = foreach ($folder in $ChildDirectories) {
    [PSCustomObject]@{
        "Location"  = $folder
        "FileItems" = (Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object | Select-Object Count).Count
        "Size(MB)"  = [Math]::Round((Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object -Property Length -Sum | Select-Object Sum).Sum / 1MB, 3)
    }

}
Write-Host "All subdirectories processed successfully." -ForegroundColor Green

###### Provide a size report of the directory and child directories. ######
$childDirectorySizes | Format-Table * -AutoSize

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

```powershell showlineNumbers
###### Prompt user for flder input. ######
$sourceDirectory = Read-Host -Prompt "Please enter the directory you wish to scan"
```

We then get all of hte directories in the folder location promtped for using the lin above.

```powershell showLineNumbers
###### Get all Directories in that location. ######
$ChildDirectories = (Get-ChildItem $sourceDirectory -Directory).FullName
Start-Sleep 1 # Add this for slightly better pacing when using the script.

```

### Getting the Folder Sizes

Thirdly, we need to get the folder sizes and convert them into a nicer format to read, quite a bit to unpack on this one, so please bear with my explanation; you may also want to blow this image up, it's a little small, sorry!

```powershell showLineNumbers
###### Foreach directory get all items recursively. ######
Write-Host "Processing items." -ForegroundColor Yellow
$childDirectorySizes = foreach ($folder in $ChildDirectories) {
    [PSCustomObject]@{
        "Location"  = $folder
        "FileItems" = (Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object | Select-Object Count).Count
        "Size(MB)"  = [Math]::Round((Get-ChildItem $folder -Recurse -Force | Where-Object { $_.PSIsContainer -eq $false } | Measure-Object -Property Length -Sum | Select-Object Sum).Sum / 1MB, 3)
    }
}
```

I've created a new variable called, `$childDirectorySizes` in this variable, we are going to store the output of the foreach loop.

The foreach the argument takes each folder entry found within the `$ChildDirectories` & then loops through the script inside the squiggly brackets.

```powershell showLineNumbers
foreach ($folder in $ChildDirectories)
```

The foreach loop does the following: -

1. Grabs the full file paths for each file recursively using `Get-ChildItem $folder.FullName -recurse -force`.
2. Then it searches for any objects that are not a Folder using `Where-Object {$_.PSIsContainer -eq $false}`.
3. It then measures the object using `Measure-Object -property Length -sum`.
4. We then select only the one property that we want, `Select-Object Sum`.
5. It then stores results inside the variable `$subFolderItems`.
6. We then create a new PowerShell object using the command, `[PSCustomObject]`, as this is going to be a new Hash table, we add the `@{}` after it, all properties go inside the squiggly brackets.
7. We then create 2 new properties, `Location` and `Size(MB)`. For each of these properties, we need to tell it where the information comes from and how to format it.

For `Location`, we are going to use the Items Full name, which is equal to its full UNC path. `$folder.FullName`.

For `Size(MB)`, we are going to use the Output of steps 1 to 5. The output from this should be the SUM of all the files under the folder item that's stored in the variable `$folder` which is in the foreach loop argument.

We also want to round this to MBs with 2 Decimal places; we can do this with the command, `[Math]::Round($subFolderItems.sum /1MB, 2)`.

### Creating a console Ouput

For this point, I have taken the variable that is holding the output from the Foreach loop noted above and piped this into a Format-Table command with the order of the properties to show.

```powershell showLineNumbers
###### Provide a size report of the directory and child directories. ######
$childDirectorySizes | Format-Table * -AutoSize
```

Which gives you this.

```powershell showLineNumbers
Location                           FileItems Size(MB)
--------                           --------- --------
C:\GitRepos\100-days-of-javascript       287   59.772
C:\GitRepos\PowerShellChallenge          106    0.072
C:\GitRepos\Private-Code-Dump            253   14.089
C:\GitRepos\python-app                    97    0.067
C:\GitRepos\The-IT-Knowledge-base      36396  414.871
```
