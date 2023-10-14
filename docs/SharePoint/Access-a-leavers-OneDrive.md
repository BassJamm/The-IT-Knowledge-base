---
draft: false
id: Grant access to a User’s OneDrive
title: Grant access to a User’s OneDrive
hide_title: false
hide_table_of_contents: false
sidebar_label: Grant access to a User’s OneDrive
sidebar_position: 1
toc_max_heading_level: 4
pagination_label: Grant access to a User’s OneDrive
tags: []
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Docuemnt describes how to give access to a user's OneDrive using the Admin centre.
---
---

:::info Credit for the below information
I cannot take any credit for this informatino below, most if regurgitate from the Microsoft article.
:::

## Too Long; Didn't Read

To create a temporary link into the user's OneDrive for quick access for the Admin:

- In the admin center, go to the **Users** > [Active users](https://go.microsoft.com/fwlink/p/?linkid=834822) page.
- Select a user.
- On the user properties page, select **OneDrive**. Under **Get access to files**, select **Create link to files**.
- Select the link to open the file location. Download the files to your computer, or select **Move to** or **Copy to** to move or copy them to your own OneDrive or to a shared library.

To permenantly grant access to another user's OneDrive data:

- Sign in to the admin center as a global admin or SharePoint admin.
- Select **Admin centers** > **SharePoint** > **More features**.
- Under **User profiles**, select **Open**.
- Under **People**, select **Manage User Profiles**.
- Search for the Employee's name, Select **Find**.
- Right-click the user, and then choose **Manage site collection owners**.
- Add the user to **Site collection administrators** and select **OK**.

## Access a former user's OneDrive documents

---

If you remove a user's license but don't delete the account, you can give yourself access to the content in the user's OneDrive. If you delete the user's account, you have 30 days by default to access the former user's OneDrive data. [Learn how to set the OneDrive retention for deleted users](https://learn.microsoft.com/en-us/onedrive/set-retention). If you don't [restore a user account](https://learn.microsoft.com/en-us/office365/admin/add-users/restore-user) within this time, their OneDrive content is deleted.

To preserve a former user's OneDrive files, first give yourself access to their OneDrive, and then move the files you want to keep.

1. In the admin center, go to the **Users** > [Active users](https://go.microsoft.com/fwlink/p/?linkid=834822) page.
2. Select a user.
3. On the user properties page, select **OneDrive**. Under **Get access to files**, select **Create link to files**.
4. Select the link to open the file location. Download the files to your computer, or select **Move to** or **Copy to** to move or copy them to your own OneDrive or to a shared library.

:::info

- You can move or copy up to 500 MB of files and folders at a time.
- When you move or copy documents that have version history, only the latest version is moved.
- Administrative options for an active user under the OneDrive tab in the Microsoft 365 admin center are currently not supported for multi-geo tenants.

:::

## You can also grant access to another user to access a former employee's OneDrive

---

:::info Permissions Error
If you get a message that you don't have permission to access the admin center, then you don't have administrator permissions in your organization.
:::

1. Sign in to the [admin center](https://admin.microsoft.com) as a global admin or SharePoint admin.
2. In the left pane, select **Admin centers** > **SharePoint**. (You might need to select **Show all** to see the list of admin centers.)
3. If the classic SharePoint admin center appears, select **Open it now** at the top of the page to open the SharePoint admin center.
4. In the left pane, select **More features**.
5. Under **User profiles**, select **Open**.
6. Under **People**, select **Manage User Profiles**.
7. Enter the former employee's name and select **Find**.
8. Right-click the user, and then choose **Manage site collection owners**.
9. Add the user to **Site collection administrators** and select **OK**.
10. The user will now be able to access the former employee's OneDrive using the OneDrive URL.

## Revoke admin access to a user's OneDrive

---

You can give yourself access to the content in a user's OneDrive, but you may want to remove your access when you no longer need it.

:::info Permissions Error
If you get a message that you don't have permission to access the admin center, then you don't have administrator permissions in your organization.
:::

1. Sign in to the [admin center](https://go.microsoft.com/fwlink/p/?linkid=2024339) as a global admin or SharePoint admin.
2. In the left pane, select **Admin centers** > **SharePoint**. (You might need to select **Show all** to see the list of admin centers.)
3. If the classic SharePoint admin center appears, select **Open it now** at the top of the page to open the SharePoint admin center.
4. In the left pane, select **More features**.
5. Under **User profiles**, select **Open**.
6. Under **People**, select **Manage User Profiles**.
7. Enter the user's name and select **Find**.
8. Right-click the user, and then choose **Manage site collection owners**.
9. Remove the person who no longer needs access to the user's data, and then select **OK**.

Created: 2023-20-14, Last Updated: 2023-20-14
