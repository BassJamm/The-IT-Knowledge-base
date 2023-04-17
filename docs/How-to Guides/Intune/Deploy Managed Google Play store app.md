---
sidebar_position: 3
id: Deploy Google Play store app
title: Deploy Google Play store app
tags: [KB, Intune, Google Play, App Deployment]
---

**Definition of a Managed Google Play store app**: Public apps that are generally available in the Play Store. Manage these apps in Intune by browsing for the apps you want to manage, approving them, and then synchronizing them into Intune.

[Read more in this Microsoft Article](https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-android-for-work#managed-google-play-app-types).

## Add the App into Intune

1. Login to https://endpoint.microsoft.com/
2. Navigate to **Apps** >** Android** >** Add App** (Click the plus icon).
3. Select the **Managed Google Play app** from the list.
4. **Search** the app store.
5. Find and **select the app**.
6. Click **Approve**.
7. **Accept the agreement** for what the application will have access to on the deice.
8. For the next screen **select one of the two options** presented to you. For quality of life for your users, I'd select the top option "Keep approved when app requests new permissions."

![App Deployment Ts&Cs](../../../static/img/Google%20play%20log%20app%20deploy/Google-App-Deploy-001.png)

9. **Click Sync** in the top left corner of the screen.

Go back the list of Android apps and you should see the new app appear shortly.

## Creating a dynamic group to include only company owned android devices.

1. Login to, https://aad.portal.azure.com.
2. **Click** on **Azure Active Directory**.
3. Click **Groups**.
4. Click **New Group**.
5. Fill in the information, make sure to select **Dynamic Device** option under membership type.
   1. ![App Deployment Ts&Cs](../../../static/img/Google%20play%20log%20app%20deploy/AAD-Dynamic-group-set-001.png)
6. Click **Add dynamic query** at the bottom.
7. Add the two queries below to check the OS device type and the device ownership properties.
   1. `deviceOSType Equals AndroidEnterprise`.
   2. `deviceOwnership Equals Company`.
8. 

![App Deployment Ts&Cs](../../../static/img/Google%20play%20log%20app%20deploy/Google-App-Deploy-002.png)