---
sidebar_position: 1
id: AVD Image Update Guidance
title: AVD Image Update Guidance
toc_max_heading_level: 4
tags: [Guide, Azure, Azure Virtual Desktop]
---

## Terms

- **Session Host**, these are the Virtual Machines that are assigned as the Session Hosts in the Azure Virtual Desktop solution.
- **Image**, simply put, this is a stateful or point-in-time capture of a Virtual machine that will be used as a base for the new Session Hosts.

## High level Overview

:::caution This document covers a Shared Image Gallary deployment approach.
There are other options for the deployment of VMs as Session Hosts, you can find out more information here, [Operating systems and licenses | Microsoft doc](https://learn.microsoft.com/en-us/azure/virtual-desktop/prerequisites#operating-systems-and-licenses).
:::

1. Snapshot a current Session Host.
2. Create a new Virtual Machine from that Snapshot.
3. Make any changes to that new Virtual Machine.
4. Capture an image from the new Virtual Machine just created.
5. Add the new image to the Shared image Gallery in Azure.
6. Create a new session host using the new image.
7. Test.
8. Replace the currently deployed Session Hosts with new Hosts generated from that new image.
9. Decom the old Session Hosts.

## Considerations

- **New Session hosts conflicing with current session hosts**, if you're domain joining the Session Hosts, the new Virtual Machine you create as the template will need to be offline save conflicting with the current session host.
- **Consider your networking options** based off of the point above, do you need a new V-Net or, an NSG to allow RDP into the Virtual Machine.
- **Backups & Disaster Recovery plan**, if you're backing up the session hosts (which isn't necessary if you're deploying an image that is region redundant) will you need to factor this into the new session hosts you're going to create.
- **Patching and Log Anaylytics collection**, when creating the new host, you'll need to validate that it's being patched, as well as check the Log Analytics workspace is collecting logs.

## Long Version

:::info
This is my suggested process based off of the Microsoft documentation linked above, there are small variations on this guidance all over the place.
:::

### Creating a new Image

Arrange for some downtime of one of the session hosts, during the downtime do the following: -

:::tip
I'd suggest enabling drain mode before the downtime, just to ensure no-one logs in just before you shut it down. You can do that by selecting the session host and clicking "Turn on Drain mode" at the top or you can click the 3 dots on the right and click the same option.
![AVD-DrainMode-001.jpg](../../../static/img/Update%20AVD%20Image/AVD-Drainmode-001.jpeg)
:::

1. **Shutdown** a session host.
2. Take a **SnapShot** of the OS disk.
3. **Power it** back **up** again.

Make sure that the session host is offering it's services as normal.

#### Creating a new Virtual Machine from the Snapshot

:::caution
This process with stop & De-Allocate the Virtual Machine in question
:::

1. In the search box, enter **Disks**, and then select Disks from the list.
2. On the Disks page, **select Create**.
3. Create the new disk based off of the information configuration of the current disk of the session host Virtual Machine.
   1. In Source type, ensure the Snapshot is selected.
4. **Attach the disks** to the Virtual Machine through the portal ().
5. Go to the Virtual Machine on the portal, **Select Disks**.
6. Click **Swap OS Disk**.
7. Boot the Virtual Machine.

:::tip
Check the new Virtual Machine boots Windows correctly, then you need to confirm the installed applications are present and will load.
:::

8. **RDP into your new Virtual Machine** and make your changes.
9. Take another **SnapShot** of the Virtual Machine post making your changes.
10. Run **Sysprep**. (C:\Windows\System32\Sysprep\sysprep.exe).
    1. Make sure to **select Generalize** and to set the **Shutdown Option** to Shutdown).
11. Make sure the Virtual Machine is **de-allocated** and **select Capture** in the Azure portal.
12. **Upload** the image **to the shared image gallery**.

### Add a new Session Host

1. In the **Azure Portal**, locate the Azure Virtual Desktop Portal\Blade.
2. Click on **Host Pools**.
3. Select your **Host Pool**.
4. Click on **Session Hosts**.
![AVD-Addhost-001.jpg](../../../static/img/Update%20AVD%20Image/AVD-Addhost-001.jpeg)
1. Click **+ Add**.

:::info
It may ask you to generate a key, click on the banner that appears and follow this through and download the new key. This will not affect the other session hosts that are already setup.
:::

6. Leave the Basics tab as is, the settings will be greyed out.
7. On the **Virtual Machines tab**, fill in the various bits of information required.
8. **Add any Tags** required.
9. Click **Review + Create** to review the settings.
10. Put the **new Session Host** into **Drain mode**, to stop users logging into it if you want to test the server\image and Apps.

:::tip
I would suggest putting your new Session Host into Drain mode, save users logging into this server. See the next section regarding testing out the new Session Host and Image.
:::

A new Session Host should now appear in the list of servers.

### Testing the deployment

:::tip
I'd suggest doing the below out of business hours.
:::

1. Depending on whether or not you are using RDP sessions of Apps deployed from the RDSH servers. Confirm your session host is in the correct Host Pool and is service apps.
2. Place **the other Session Hosts into Drain mode** to stop new connections.
3. **Turn off Drain** mode on your new host.
4. **Test** accessing resources.
5. Get someone else to confirm it's all working, application owners for example.

### Tidying up the old Hosts

- The AVD image update process requires that you decommission your previous Session Hosts and replace them completely with new Virtual Machines.
- Provided testing has been successful, you want to replace your hosts with the old image with the new ones by creating Session Hosts from the new image and then removing the hold hosts from the host pool.
- The old servers will need to be decommissioned but, can remain in Azure if you stop and de-allocate them at a minimal cost.

:::tip Retain the old hosts
Retaining the old Session Hosts could be your backup option as part of your change.
:::
