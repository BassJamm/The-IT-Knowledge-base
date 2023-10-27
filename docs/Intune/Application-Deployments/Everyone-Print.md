---
draft: false
id: EveryOne Print
title: Deploy EveryOne Print
hide_title: false
hide_table_of_contents: false
sidebar_label: EveryOne Print
sidebar_position: 1
toc_max_heading_level: 4
pagination_label: EveryOne Print
tags: [Intune, Application, Script]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Documents how to deploy EveryOne Print.
---
---

## Deployment Guidance

:::tip Local Folder Structure

I would suggest setting up the following folder struture on your local machine first.

1. Create `C:\Software\Intune-Apps\EveryOnePrint`.
2. Inside EveryOnePrint, place your exe and install script.
3. Create an output folder here like so, `C:\Software\Intune-Apps\Output`

:::

1. Find your exe file, it should come from your supplier (there's no EveryOne Print website so far as I could fine.)
2. Create a new script, name it `Install-EveryOnePrint.ps1`.
3. Place the script below in your new script file.
4. Change the syntax with your company information.

Package the exe and the script into an IntuneWin File using the Microsoft Win32 Content Prep Tool; command refernce below.

1. Open PowerShell as an Admin.
2. Navigate to the location of the Win32 Content Prep Tool.
3. Run this command, `Content-prep-tool-name -c C:\Software\Intune-Apps\EveryOnePrint -s C:\Software\Intune-Apps\EveryOnePrint\Install-EveryOnePrint.ps1 -o C:\Software\Intune-Apps\Output`

### Deployment Script

```powershell showLineNumbers
<# Install PC Client
    Available command parameters:
        /S – Run the installer in unattended mode
        /GATEWAYADDRESS=xxx – chooses HCP gateway address
        /ACCOUNTDOMAIN=yyy – chooses account domain name
        /SYNCPERIOD=nn – automatic synchronization period, in minutes. The default period is 60 minutes
        /IGNORESSLERRORS=true|false – option indicating whether to ignore any errors related to SSL handshake (for example wrong certificate or host name). The default value is false
        /SYNCDRIVER=true|false – enable or disable automatic driver installation. Disabling assumes the user is responsible for the driver install. The default value is true
        /IPPOVERSSL=true|false – enable or disable printing over secure SSL connection. The default value is false
        /AUTHTYPE=0|1|2 – User authentication type: 0=username from session (default), 1=user name from session + domain name, 2=manual login, 3=UserPrincipalName
        /ALLOWCONFIGURATION=true|false – enable or disable the ability for the end-user to configure the PC client after installation. The default value is true
#>

<#  2) Amend below command with values and parameters for your installation:
        GATEWAYADDRESS=
        /ACCOUNTDOMAIN=
        /AUTHTYPE=0
        /SYNCDRIVER=true
        /IPPOVERSSL=true
        /ALLOWCONFIGURATION=false
#>
Start-Process .\hcpclient-3.26.0-release-setup.exe -ArgumentList "/S /GATEWAYADDRESS="<# Look in notes above#>" /ACCOUNTDOMAIN="<# Look in notes above#>" /AUTHTYPE=0 /SYNCDRIVER=true /IPPOVERSSL=true /ALLOWCONFIGURATION=false" -Verb RunAs
```
