---
sidebar_position: 9
id: SharePoint Admin Tasks
title: SharePoint Admin Tasks
tags: [SharePoint Online, Admin Tasks]
---

## Site Permissions

### Adding and Removing users

1. Go to **Active sites** in the new SharePoint admin center, and sign in with an account that has admin permissions for your organization.
2. To **open** the **details** pane, **select the site** name.
3. Select the **Permissions tab**.

From here you can manage your site admins and owners.

:::note Members and Visitor rights

These permissions must be managed from either the group linked to the SharePoint site or within the site itself once you're an owner or admin.

:::

## Change a site address

:::caution Before you do anything

Notify your users that you're making this change along with the following suggestions if they're relevant.

- When the change will happen.
- What the new URL will be.
- Users should close their files and not make edits during the address change.
- Users should check the site recycle bin to make sure it contains no files they want to keep.
- File permissions and sharing won't change.

::: 

1. Go to **Active sites** in the new SharePoint admin center, and sign in with an account that has admin permissions for your organization.
2. To **open** the **details** pane, **select the site** name.
3. On the **General tab**, under URL, **select Edit**.
4. Enter the **new site address**.
   1. ![Edit the URL](../../../static/img/SharePoint%20Admin%20Tasks/change-site-address-001.png)
5. Click **Save**.

:::tip Re-using the old address

When you change a site address, we create a redirect at the previous address. If you want to reuse the previous address, you need to delete the redirect.

:::

### Removing a previously used URL

[Microsoft docs link - Manage site redirects](https://learn.microsoft.com/en-us/sharepoint/manage-site-redirects).

1. Download the latest SharePoint Online module for PowerShell from [here](https://go.microsoft.com/fwlink/p/?LinkId=255251).
2. Connect to SharePoint with an accoutn that is a Global Admin or SharePoint Admin.
3. Run the following command `Remove-SPOSite -Identity https://domainname.sharepoint.com/sites/OldSiteName`
4. Confirm the action when you're prompted to do so.

To confirm that the redirect has been deleted, browse to the URL. It should return a 404 error. You can also run `Get-SPOSite -Identity https://domainname.sharepoint.com/sites/OldSiteName`. It will return that we cannot get the site.

### Get a list of redirects

```powershell
Get-SPOSite -Template REDIRECTSITE#0
```