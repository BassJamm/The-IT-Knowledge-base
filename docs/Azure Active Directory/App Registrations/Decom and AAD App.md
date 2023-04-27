---
draft: false
id: Decom and AAD App
title: Decommission and AAD App
hide_title: false
hide_table_of_contents: false
sidebar_label: Decommission and AAD App
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Decommission and AAD App
tags: [AzureAD, EntApp]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Decommission and Azure AD App registration.
---

## Document Control

- Created: 27/04/23
- Last Updated: 27/04/23

## Prerequisites

- Must be  an owner of the application or have admin privileges.

## Locate the App

1. Sign in to the **Azure portal**.
2. Search and **select** the Azure Active Directory app.
3. Under **Manage**, select **App registrations** and select the application(Desktop Portal) that you want to configure.

## Confirm the App is not longer used

Prevent access via the app to determine it is not being used, change the following Application settings using the Azure AD portal.

Overview Page

**Enabled for users to sign-in?** - Set this setting to NO. With this off, the application cannot be used.

Users and Groups Page

**Remove all groups\users** (Screenshot them incase they need to be re-added).

Permissions Page

**Remove all Admin and User consented permissions** (Screenshot them incase they need to be re-added).

## Delete the App from Azure AD

1. From the **Overview page**, select **Delete.**
2. Read the deletion consequences. Check the box if one appears at the bottom of the pane.
3. **Select Delete** to confirm that you want to delete the app.
