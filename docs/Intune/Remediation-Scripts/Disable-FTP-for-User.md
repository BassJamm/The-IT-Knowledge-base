---
draft: false
id: Display-FTP-executable-for-users
title: Disable FTP Executable
hide_title: false
hide_table_of_contents: false
sidebar_label: Disable FTP Executable
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Disable FTP Executable
tags: []
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Disable FTP Executable for end users.
---
---

The script below can be used to disable FTP Executable for end users and leave it working for systema and admins. This came up in a pen test that one of my colleagues was working on.

## Detection Script

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

## Remediation Script

```powershell showLineNUmbers
# The Script gathers the existing acl's on the .exe and then defines a new object matching the acl without touching inheritance
$acl = Get-Acl C:\Windows\System32\ftp.exe
$inherit =[system.security.accesscontrol.InheritanceFlags]"ContainerInherit,ObjectInherit"
$propagation =[system.security.accesscontrol.PropagationFlags]"None"
$accessrule = New-Object System.Security.AccessControl.FileSystemAccessRule("BUILTIN\Users","ReadAndExecute", $inherit, $Propagation ,,,"Allow")

#The access rule is removed from the acl and the acl is then written to the .exe
$acl.RemoveAccessRuleAll($accessrule)
Set-Acl -AclObject $acl C:\Windows\System32\ftp.exe
```

---
Created: 2023-10-28, Last Updated: 2023-10-28