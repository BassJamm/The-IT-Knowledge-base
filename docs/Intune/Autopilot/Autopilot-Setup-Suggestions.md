---
draft: false
id: Autopilot Setup Suggestions
title: Autopilot Setup Suggestions
hide_title: false
hide_table_of_contents: false
sidebar_label: Autopilot Setup Suggestions
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Autopilot Setup Suggestions
tags: [Autopilot, Intune]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Details some advice and things I have learnt when setting up Autopilot.
---
---
This small doc details settings that I have learnt should be considered and setup when thinking about how to setup an Autopilot solution.

## Too Long; Didn't Read

- Setup 3 Dynamic groups in Azure AD that cover the follolwing: All intune Devices (Dynamic Device), All Autopilot Devices (Dynamic Device) and All Intune Users (Dynamic User).
- For each of the three groups, setup the expresssions; review this [Microsoft documentation](https://learn.microsoft.com/en-us/autopilot/enrollment-autopilot#create-an-autopilot-device-group-using-intune) for how to do this.
- Create a Conditional Access policy, that will only allow access if the deivces is policy compliant, make sure this is applied to the all intune users dynamic group you've setup.

## Consider all of the moving parts

Autopilot is setup within Microsoft Intune yes however, as I have learnt there are other areas that should be thought about when implementing this.

- *Azure Active Directory groups and users.*
- *Application deployment and Update processes.*
- *Conditional Access policy.*

## Azure AD

Azure active directory is the main Identity solution within the Microsoft suit of products and underpins the majority of services; it's mainly used to manage users and groups.

### Users and Groups

The Autopilot profile will target a group, that group should be home to your Windows Devices. However, there's an important consideration to keep in mind. When using the Autopilot process, apps will be automatically installed if they are deployed to the same group as your Autopilot profileand are marked as "*Required*"; which will increase the time it takes to complete the setup.

A good solution to this is to create two separate groups; one for the Autopilot Profile and another for managing application installations and patches. This approach ensures that only the specific applications you've selected will be installed during the Autopilot process, streamlining the setup and preventing unnecessary app installations.

I would also suggest setting up 3rd group to include all of your Intune users, this should also be a Dynamic group.

### Dynamic Queries

Setting up the groups as Dynamic Device groups will automate the devices being added to each group respectively and remove an overhead.

:::info
Check out this [Microsoft documentation](https://learn.microsoft.com/en-us/autopilot/enrollment-autopilot#create-an-autopilot-device-group-using-intune) for referenc.
:::

These can all be found in the MS link above.

- To create a group that includes all of your Autopilot devices, enter: `(device.devicePhysicalIDs -any (_ -contains "[ZTDID]"))`.
- To create a group that includes all Autopilot devices with a specific group tag (the Azure AD device OrderID), enter: `(device.devicePhysicalIds -any (_ -eq "[OrderID]:179887111881"))`.
- To create a group that includes all your Autopilot devices with a specific Purchase Order ID, enter: `(device.devicePhysicalIds -any (_ -eq "[PurchaseOrderId]:76222342342"))`.

### Conditional Access

Conditional Access is one of your lines of defence against unauthorised access to company resources in the cloud; you'll need a policy to ensure only compliant devices are able to access the organisation.

1. Sign in to the **Microsoft Entra admin center**.
2. Browse to **Protection** > **Conditional Access**.
3. Select **+ New policy**, and then select **Create new policy**.

Create the following settings to ensure only compliant devices are allowed access:

Assignment:

- Users: *Include All Intune Users*.
- Target Resources: *All Cloud Apps*.
- Conditions: *DevicePlatforms* (*Windows*), *Locations* (*Include all, exclude Offices*).

Access Controls:

- Grant: Require Device to be compliant.

-----------------------------------------------------------------

Created: 2023-09-21, Last Updated: 2023-09-21
