---
title: Code Challenge - 001 - File Backup Utility
description: Build a basic script that will copy data from source to destination.
slug: Code-Challenge-001
date: 2023-07-05T12:00
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [Code-Challenge]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

The first of many code challenges that I'll be tackling, these will be as much a learning experience for me as they may help you.

<!--truncate-->
In the world of software development, coding challenges have emerged as an effective way to sharpen programming skills, test problem-solving abilities, and demonstrate expertise. I however, am not in the software development world, I am in the realm of Infrastructure design and maintenance; where I am hoping to apply the same type of challenges to further my knowledge of PowerShell, Bicep & perhaps one or two more along the way.

## The challenge

Create a PowerShell script that backs up a specified directory to another location. The script should recursively copy all files and subdirectories while preserving the directory structure. It can include options for excluding certain file types or directories from the backup.

This seems rather arbitray to script this but, I got an AI to generate these challenges so, I'll dig in none the less.

## My solution

:::note Before anyone rolls their eyes at the below.
This is just a learning expereince, I am aware of the other commands\applications that can do this (RoboCopy for examepl).
:::

## Using the `Copy-Item` command

This is the very basic first attempt at solving this challenge. Using `Read-Host` we take in a user input stored as a string, we then substitute the variables `$backupdirectory` and `$destinationDirectory` in place of the file paths.

```powershell showLineNumbers
# Takes user input for source directory.
$sourceDirectory = Read-Host -Prompt "Enter source directory"

# Takes user input for the destination directory.        
$destinationdirectory = Read-Host -Prompt "Enter destination directory"

# Copy-Item command does the copying.
Copy-Item -Path $sourceDirectory -Destination $destinationdirectory -Recurse
```

This would do the job but, there’s a few issues to note with this: -

1. It’ll error if you run it more than once, since the directory will already exist in the destination location.
2. There’s no output to the console to comfort a nervy user that something is happening.
3. There’s no checks going on to confirm what exists already & no log file to help a techy see what is going on.

We’ll deal with them in order.

### Solving the “this already exists” error

There’s two options that can be easily done to solve this, either use the `-force` switch, which’ll just overwrite the destination location, or you can differentiate the destination data from the source by changing the name of the top level folder for example, adding the date and time to the folder or re-naming it to something else; this is what we’ll do this time.

In the below snippet we now have the `$dateNow` variable, which fetches the date and time of when the script runs. The `.ToString('dd-MM-yyyy_hh-mm-ss')` part converts the object to a string, so that we can add it to the new folder we’ll create as part of the `Copy-Item` command.

The `(Get-Date)` command is in brackets so PowerShell knows to run this part first before the section just after it.

```powershell showLineNumbers
# Copy-Item command does the copying.
# The destination location is set using the $destinationdirectory variable, then appending the text DataBackup.
# It then appends the date using the $dateNow variable. It's encased in brackets so that he variable is substitued into the string.
# The recurse switch includes all subdirectories of the specified source location.
Copy-Item -Path $sourceDirectory -Destination $destinationdirectory\DataBackup-$($dateNow) -Recurse
```

### Outputting something to console

This option can be up for debate, some would say that you don’t need an output just a comprehensive log file but, I like a bit of an info dump to the console as long as it is relevant.

:::caution
Be careful when using Write-Host it’s not processed as part of the Pipeline within PowerShell, so it can be printed to console before the previous command has finished running\computing. Use it sparingly.
:::

To dump out some simple updates to the console, I have added some Write-Host commands, this literally writes whatever text you put after it in quotes to console and you can change it’s colour using the -foregroundcolor swtich.

```powershell showLineNumbers
Write-Host "Copy $($sourceDirectory) data to $($destinationdirectory), into the folder named DataBackup-$($dateNow)." -ForegroundColor Yellow
Start-Sleep 1

Write-Host "Beginning Copy job." -ForegroundColor Yellow
Start-Sleep 1 # This is here to add some "nice" timings to the script.

Copy-Item -Path $sourceDirectory -Destination $destinationdirectory\DataBackup-$($dateNow) -Recurse

Start-Sleep 1 # This one is here to make sure the comamnd above has finished before the write-host command executes.
Write-Host "Copy Job Completed." -ForegroundColor Green
```

### Error logging

This can be tricky for larger scripts and there’s multiple ways of handling errors in scripts, I have gone for the simplest option (I think!). Whilst I really don’t think this is best practice or going to win any favor with a PowerShell Guru (myself not included, I am still learning), it is simple to get your head around.

`Try {} Catch{}` blocks are great for trying something and then catching the error relating to that command, by default though, I would suggest doing only one thing in in the whole try\catch segment, trying to do too much in one block negates the benefit of using it!

:::note
If you should want to test the Try Catch block, simple add "NonsenseString" to your try segment, it'll always produce an error.
:::

```powershell showLineNumbers
# Try Catch blocks are great for trying a thing and catching an error.
try {
    # Copy-Item -Path $sourceDirectory -Destination $destinationdirectory\DataBackup-$($dateNow) -Recurse
    
}
catch {
    # Write-Warning $Error[0] - This will write only the error message to console if you don't want the whole error.
    $_ # This wil dump the whole error to consol for you.
}
```

### Bonus: Creating a log file

As a bit extra, here’s a function that creates a log file and how you can write to it.

```powershell showLineNumbers
$date = Get-Date -Format dd-mm-yyyy
$logFileLocation = "C:\Temp\"

<# Create the log file. #>

try {
    <# Try the following. #>
    function WriteToLogFile ($message) {
        Add-Content $logFileLocation\LogFile_$date.log -Value $message
    }
    if (Test-Path $logFileLocation\LogFile_$date.log) {
        Write-Host 'Log file already exists, deleting and re-creating.'
        Start-Sleep 2
        Remove-Item $logFileLocation\LogFile_$date.log
    }
    WriteToLogFile "$(Get-Date) - Log File created."
}
catch {
    <# Collect and report any errors. #>
    Write-Host "Failed to create log file at the following location:"$logFileLocation -ForegroundColor Red", continuing without logging."
    Write-Host $_ -ForegroundColor Red
    WriteToLogFile "$(Get-Date) - $($_)"
    throw  'Script terminated.' 
}
```

To use this function, change the `$logFileLocation` variable to the desired location, maybe use the destination location variable.

You can then use the command `WriteToLogFile -Message "Add text here"` anything in-between the quotes will appended to the log file, check out the full solution below to see what I mean.

## Full script

As I mentioned at the top, the best method for doing large copy jobs is `RoboCopy`, you can find more on that [here](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy). Otherwise for this learning exercise, you review, steal and re-use whatever it below for your own needs.

```powershell showLineNumbers
$date = Get-Date -Format dd-mm-yyyy
$logFileLocation = "C:\Temp\"

<# Create the log file. #>

try {
    <# Try the following. #>
    function WriteToLogFile ($message) {
        Add-Content $logFileLocation\LogFile_$date.log -Value $message
    }
    if (Test-Path $logFileLocation\LogFile_$date.log) {
        Write-Host 'Log file already exists, deleting and re-creating.'
        Start-Sleep 2
        Remove-Item $logFileLocation\LogFile_$date.log
    }
    WriteToLogFile "$(Get-Date) - Log File created."
}
catch {
    <# Collect and report any errors. #>
    Write-Host "Failed to create log file at the following location:"$logFileLocation -ForegroundColor Red", continuing without logging."
    Write-Host $_ -ForegroundColor Red
    WriteToLogFile "$(Get-Date) - $($_)"
    throw  'Script terminated.' 
}

# Takes user input for source directory.
$sourceDirectory = Read-Host -Prompt "Enter source directory"
WriteToLogFile -message "User inputed $($sourceDirectory) as the source."

# Takes user input for the destination directory.        
$destinationdirectory = Read-Host -Prompt "Enter destination directory"
WriteToLogFile -message "User entered ($destinationdirectory) as the destination."

# Gets the date and time in seconds when the script is ran.
$dateNow = (Get-Date).ToString('dd-MM-yyyy_hh-mm-ss')

Write-Host "Copy $($sourceDirectory) data to $($destinationdirectory), into the folder named DataBackup-$($dateNow)." -ForegroundColor Yellow
Start-Sleep 1


Write-Host "Beginning Copy job." -ForegroundColor Yellow
WriteToLogFile -message "Copy job starting."
Start-Sleep 1 # This is here to add some "nice" timings to the script.

# Copy-Item command does the copying.
# The destination location is set using the $destinationdirectory variable, then appending the text DataBackup.
# It then appends the date using the $dateNow variable. It's encased in brackets so that he variable is substitued into the string.
# The recurse switch includes all subdirectories of the specified source location.
try {
    Copy-Item -Path $sourceDirectory -Destination $destinationdirectory\DataBackup-$($dateNow) -Recurse
    WriteToLogFile -message "Copy job running."
}
catch {
    Write-Warning $Error[0]
    WriteToLogFile -message "$($Error[0])"
}

Start-Sleep 1 # This one is here to make sure the comamnd above has finished before the write-host command executes.
Write-Host "Copy Job Completed." -ForegroundColor Green
WriteToLogFile -message "Copy Job Completed."
```