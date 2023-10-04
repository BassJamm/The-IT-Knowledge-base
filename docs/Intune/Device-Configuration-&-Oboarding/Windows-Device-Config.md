---
draft: false
id: Windows Device Config
title: Useful Windows Device Configuration
hide_title: false
hide_table_of_contents: false
sidebar_label: Windows Device Config
sidebar_position: 1
toc_max_heading_level: 4
pagination_label: Windows Device Config
tags: []
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: This doc lists out the basic configurations for Windows in intune.
---
---
This doc lists out some useful Configuration Profiles for Windows devices. Specifically ones that I have come across and setup before as part of migrations.

## Minimum Steps to build via Autopilot

---
Autopilot settings to get a Windows build working in a basic sense.

:::info Autopilot Build Guidance
[Autopilot Setup Suggestions](https://www.theitkb.co.uk/docs/Intune/Autopilot/Autopilot%20Setup%20Suggestions)
:::

### Deployment Methods

| Scenario  | More Information |
|--|:--:|
| Deploy and configure devices so that an end user can set it up for themselves | [Windows Autopilot user-driven mode](https://learn.microsoft.com/en-us/autopilot/user-driven) |
| Deploy devices to be automatically configured for shared use, as a kiosk, or as a digital signage device. | [Windows Autopilot self-deploying mode](https://learn.microsoft.com/en-us/autopilot/self-deploying) |
| Pre-provision a device with up-to-date applications, policies, and settings. | [Pre-provisioning](https://learn.microsoft.com/en-us/autopilot/pre-provision) |
| Deploy Windows 10/11 on an existing Windows device  | [Windows Autopilot for existing devices](https://learn.microsoft.com/en-us/autopilot/existing-devices) |

### Deployment Steps

Step 1: Import Devices into Autopilot

1. The OEM can handle this upon purchase, just request it.
2. Alternatively, you can manually obtain the hash information and upload it to Autopilot using this Microsoft link.

Step 2: Set Up Dynamic Groups in Azure AD

1. *Intune - All Autopilot Devices* - Use this query to target Autopilot profile.
2. *Intune - 3rd Party Patching* - Use this query to target devices selected after Autopilot (to prevent app installations during Autopilot).

Step 3: Create a Static Group for Users

1. Name it *Intune - All Intune Users*.

Step 4: Configure Automatic Enrollment for Windows Devices

1. Sign in to the Azure portal, then go to Azure Active Directory > Mobility (MDM and MAM) > Microsoft Intune.
2. Configure MDM User scope with *Intune - All Intune Users* selected.

Step 5: Set Up a Test Account (Intune.Tester@)

1. Add this account to *Intune - All Intune Users* group.

Step 6: Configure Device Platform Restrictions

1. Sign in to the Intune Admin Centre, then navigate to Devices > Enroll devices > Enrollment device platform restrictions.
2. Modify Windows Restrictions to allow Corporate Enrollment and block personal.

Step 7: Configure Device Categories

1. Sign in to the Intune Admin Centre, then go to Devices > Device categories.
2. Add at least one category.

Step 8: Configure Autopilot Enrollment Profile

1. Sign in to the Intune Admin Centre, then navigate to Devices > Enroll devices > Windows Enrollment > deployment profiles.
2. Create a profile and configure settings.
3. Assign it to the *Intune - All Autopilot Devices* group.

Step 9: Configure Enrollment Status Page

1. Sign in to the Intune Admin Centre, then go to Devices > Enroll devices > Windows Enrollment > Enrollment Status Page.
2. Edit the Default option already set up.
3. Assign it to All Devices.

Step 10: Additional Configuration

1. Assign the Config profile & Compliance Profile to the All Autopilot Devices group.
2. Assign the Application deployment to your *Intune - 3rd Party Patching* group.
3. Create a Device Encryption endpoint security policy.
4. Enable Defender for Endpoint Antimalware protection as needed.

## Device Configuration Profiles

---

These are some standardised Config profiles that could be considered for deployment. Below is a quick look, select from the list to the right for the settings.

:::info
The format below is as follows:

- Profile name (Type of Policy)
  - Policy Group\Confgurable setting.

:::

- ***Windows – Custom Branding***
  - This one requires a Storage Account in Azure, google how to do this.
- ***Windows – Device Restrictions*** (Device Restriction Policy)
  - AppStore\Use Private Store Only: Allow
  - Cloud and Storage\Microsoft Account: Block
  - Cloud and Storage\Non-Microsofft Account: Block
- ***Windows – Disable Microsoft Store*** (Admin Template)
  - Windows Components\Store\Turn Off the offer to update to the latest version of Windows (User): Enabled
  - Windows Components\Store\Turn off the store application (User): Enabled
- ***Windows – Enable Location Services*** (Settings Catalog)
  - Privacy\Let Apps Access Location: Force Allow.
- ***Windows – Enable Memory Integrity*** (Settings Catalog)
  - Virtualization Based technology\Hypervisor Enforced Code Integrity: (Enabeld with UEFI lock) Turns on Hypervisor-Protected Code Integrity with UEFI Lock.
- ***Windows – Hybrid Cloud Trust Configuration*** (Necessary for a hybrid-on-prem WHfB solution.)
- ***Windows – Lock Screen Password Reset*** (Setting Catalgo)
  - Authentication\Allow Aad password Reset: Allow
- ***Windows – Mapped Drives*** (ADMX Import)
- ***Windows – Microsoft Edge Settings***
- ***Windows – OneDrive Configuration*** (Admin Template)
  - Silently sign in users to the OneDrive sync app with their Windows credentials: Enabled
  - Set the default location for the OneDrive folder: Enabled
  - Prevent users from syncing personal OneDrive accounts: Enabled
  - Allow syncing OneDrive accounts for only specific organizations: Enabled
  - Prevent users from changing the location of their OneDrive folder: Enabled
- ***Wndows – Remove Teams Chat Icon***
  - Experience\Configure chat icon: Disabled
- ***Windows – Trusted Locations***
  - Set office apps trusted locations.
- ***Windows – Offline Root CA Certificate***
- ***Windows – Windows Update for Business Reporting*** (Requires Azure resources.)
  - System\Allow commercial data pipeline: Enabled
  - System\Allow device name to be sent in Windows diagnostic data: Allowed.
  - System\Allow Telemetry: Full
  - System\Allow update compliance Processing: Enabled
  - System\Configure Telemetry opt-in change notification: Disable telemetry change notifications
  - System\Configure telemetry opt-in settings UX
- **Windows - Windows Hello for Business** (This can be done from the enrolment area for all users)
  - Windows Hello for Business\Configure Windows hello for business: Enable
  - Windows Hello for Business\Minimum PIN length: 6
  - Windows Hello for Business\Maximum PIN length: 127
  - Windows Hello for Business\Lowercase letters in PIN: Allowed
  - Windows Hello for Business\Uppdatecase letters in PIN: Allowed
  - Windows Hello for Business\Special Characters in PIN: Allowed
  - Windows Hello for Business\Pin Expiry: Never
  - Windows Hello for Business\Enable PIN recovery: Enable
  - Windows Hello for Business\Use TPM: Enable
  - Windows Hello for Business\Allow biometric Auth: Enable

## Compliance Policies

---

Policy Name Suggestion: Windows - Default Compliance Policy

Settings to Configure:

- **Device Health**:
  - Bitlocker: Required
  - Secure Boot: Required
  - Code Integrity: Required
- **System Security**:
  - Require Password type: Device Default
  - Require Encryption of data storage on device: Required
  - Firewall: Required
  - Trusted Platform Moduel (TPM): Required
  - Microsoft Defender AntiMalware: Required
  - Real-Time protection: Enabled
**- Microsoft Defender for Endpoint**:
  Require the device to be ad or under the machine risk score: Medium

## Update Rings

---

### Pilot Policy

Policy Name Suggestion: Windows - Pilot

Settings to Configure:

- **Update Ring settings**:
  - Microsoft Product Updates: Allow
  - Windows Drivers: Allow
  - Quality update deferral period (days): 3
  - Feature update deferral period (days): 60
  - Update Windows 10 devices to the latest Win 11 release: No
  - Set feature update uninstall period: 10
  - Servicing Channel: General Availability

- **User Experience Settings**
  - Automatic Update behavior: Auto install at maintenance time
  - Active hours start: 1 PM
  - Active hours end: 4 PM
  - Restart checks: Allowed
  - Option to pause Windows updates: Disabled
  - Option to check for Windows updates: Enabled
  - Change notification update level: Use the default
  - Use deadline settings: Allowed
  - Deadline for feature updates: 1
  - Deadline for quality updates: 2
  - Grace period: 1
  - Auto reboot before deadline: No

### Production policy

Policy Name Suggestion: Windows - Production

Settings to Configure:

- **Update Ring settings**:
  - Microsoft Product Updates: Allow
  - Windows Drivers: Allow
  - Quality update deferral period (days): 5
  - Feature update deferral period (days): 90
  - Update Windows 10 devices to the latest Win 11 release: No
  - Set feature update uninstall period: 10
  - Servicing Channel: General Availability

- **User Experience Settings**
  - Automatic Update behavior: Auto install at maintenance time
  - Active hours start: 1 PM
  - Active hours end: 4 PM
  - Restart checks: Allowed
  - Option to pause Windows updates: Disabled
  - Option to check for Windows updates: Enabled
  - Change notification update level: Use the default
  - Use deadline settings: Allowed
  - Deadline for feature updates: 1
  - Deadline for quality updates: 2
  - Grace period: 1
  - Auto reboot before deadline: No

## Endpoint Security

---

The settings below are some basics when setting up Endpoint Security, there are more to be considered.

### Security Baselines

Baselines are provided for and maintained by Microsoft to make deployment of remediations easier and standard. Updates to policies are provided through updated version of the policies.

[Microsoft document link explaining baselines.](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

:::caution

You must update the version of the baselines yourself, Microsoft will deploy new versions of the policy but, they will not update in your environment themselves.

[Example of changing baselines](https://techcommunity.microsoft.com/t5/intune-customer-success/new-microsoft-365-apps-security-baseline-profile-and-updates-to/ba-p/3830745)

:::

#### Windows 10/11 baseline

[Microsoft doc link to the baseline](https://learn.microsoft.com/en-us/mem/intune/protect/security-baseline-settings-mdm-all?pivots=mdm-november-2021)

### Disk Encryption (Bitlocker)

Setting below are for silently encrypting device without user input or the user adding a Pin.

:::danger Needs filling out!
Section needs some meat adding.
:::

### Antivirus

Policy Name Suggestion: Windows - Default AV Policy

Settings to Configure:

- **Defender**:
  - Allow Archive Scanning: Allowed.
  - Allow Behavior Monitoring: Allowed
  - Allow Cloud Protection: Allowed
  - Allow full scan on mapped network drives: Not allowed
  - Allow Full scan removable disk scanning: Allowed
  - [Deprecation] Allow Intrusion Prevention System: Allowed
  - Allow scanning of all downloaded files and attachments: Allowed
  - Allow real-time scanning: Allowed
  - Allow scanning network files: Not allowed
  - Allow user UI Access: Allowed
  - Check for signatures before running scan: Enabled
  - Days to retain clean malware: 3
  - Disable catch-up full scan: Enabled
  - Disable catch-up quick scan: Enabled
  - Enable network protection: Enabled (Audit mode)
  - Excluded Paths: Your discretion, include Intune management extension content folder.
  - PUA protection: Audit mode
  - Signature update interval: 24
  - Submit samples consent: Send safe samples automatically.

## Scripts and Remediations

---

Below are some examples of applying scripts and remediations to deploy from Intune.

### Set the Default Windows Language (Script)

This can be done via policy now however, this is a tried & tested method for doing this:

```powershell showLineNumbers
# sets system locale
Set-WinSystemLocale en-GB
Set-Culture en-GB

# Sets GeoID to UK region
Set-WinHomeLocation -GeoId 242

# Sets current user language
Set-WinUserLanguageList en-GB -Force
```

### Disable access to FTP.exe (Remedition)

This remediation script will detect if the *BUILTIN\Users* group has access to launch the ftp.exe application.

#### Detection Script

```powershell showLineNumbers
try {

    $acl = Get-Acl C:\Windows\System32\ftp.exe
    if($acl.Access.identityReference.value -eq 'BUILTIN\Users') {
        Write-Warning "Not Compliant"
        Exit 1
    } else {
        Write-Output "Compliant"
        Exit 0
    }
    
}
catch {
    Write-Warning "Not Compliant"
    Exit 1
}
```

#### Remediation Script

This will remove all of the permissions from the object & then set the permissions that are needed.

```powershell showLineNumbers
# The Script gathers the existing acl's on the .exe and then defines a new object matching the acl without touching inheritance
$acl = Get-Acl C:\Windows\System32\ftp.exe
$inherit =[system.security.accesscontrol.InheritanceFlags]"ContainerInherit,ObjectInherit"
$propagation =[system.security.accesscontrol.PropagationFlags]"None"
$accessrule = New-Object System.Security.AccessControl.FileSystemAccessRule("BUILTIN\Users","ReadAndExecute", $inherit, $Propagation ,,,"Allow")

#The access rule is removed from the acl and the acl is then written to the .exe
$acl.RemoveAccessRuleAll($accessrule)
Set-Acl -AclObject $acl C:\Windows\System32\ftp.exe
```

### Disable Fast Startup

This stops Windows loading apps into Storage when shutting down.

#### Detection Script

```powershell showLineNumbers
$Path = "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Power"
$Name = "HiberbootEnabled"
$Type = "DWORD"
$Value = 0
 
Try {
    $Registry = Get-ItemProperty -Path $Path -Name $Name -ErrorAction Stop | Select-Object -ExpandProperty $Name
    If ($Registry -eq $Value){
        Write-Output "Compliant"
        Exit 0
    } 
    Write-Warning "Not Compliant"
    Exit 1
} 
Catch {
    Write-Warning "Not Compliant"
    Exit 1
}

```

#### Remediation Script

```powershell showLineNumbers
New-ItemProperty -LiteralPath 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Power' -Name 'HiberbootEnabled' -Value 0 -PropertyType DWord -Force -ea SilentlyContinue;
```

### Uninstall Apps

Specifically a section on removing stubborn apps or bloatware.

#### Lenovo AI Meeting App

Detection Script: 

```powershell showLineNumbers
Try {
    
    If (Test-path -Path "C:\Program Files\WindowsApps\E046963F.AIMeetingManager_3.1.18.0_×64__k1h2ywk1493x8"){
        Write-Output "Not Compliant"
        Exit 1
    } 
    Write-Warning "Compliant"
    Exit 0
} 
Catch {
    Write-Warning "Not Compliant"
    Exit 1
}

```

Remediation Script:

```powershell showLineNumbers
Remove-AppxPackage -AllUsers E046963F.AIMeetingManager_3.1.18.0_×64__k1h2ywk1493x8
```

## Applications

---

Section on adding\removing applications from Windows build.

### Removing Windows Bloatware

1. Create a new application for deployment.
2. Select Microsoft store (new).
3. Search for the apps that need removing.
4. Set install behaviour to System.
5. Assignment group should be added to uninstall.

If you cannot find the apps in the list, browser to the [microsoft store](https://apps.microsoft.com/store/apps) via browser.

Take the app ID from the url.

---
Created: 2023-09-23, Last Updated: 2023-10-01
