---
sidebar_position: 7
id: Restore VM from Snapshot
title: Restore VM from Snapshot
tags: [Azure, Restore, SnapShot]
---

We're assuming there is already a valid Snapshot taken of the machine you're trying to restore.

## Step 1: Create a new Managed Disk

Firstly we need to create a new managed disk from the snapshot taken, this is to then replace the disk on the VM we need to restore.

1. In the search box, enter Disks, and then select Disks from the list.
2. On the Disks page, select Create.
3. Create the new disk based off of the current disk of the VM (In Source type, ensure the Snapshot is selected).

## Step 2: Attach the new disk

:::caution
Confirm there's no public IP attached to this VM, this process will stop & De-Allocate the VM in question.
:::

1. Find your VM in the Azure Portal.
2. Select Disks.
3. Click Swap OS Disk.

## Step 3: Test the VM

Once you've attached the new disk.

1. Check it boots correctly.
2. Confirm apps are installed and run
