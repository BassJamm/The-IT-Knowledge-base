---
id: Setup Azure Site Recovery
title: Setup Azure Site Recovery
hide_title: false
hide_table_of_contents: false
sidebar_label: Setup Azure Site Recovery
sidebar_position: 2
toc_max_heading_level: 4
pagination_label: Setup Azure Site Recovery
tags: [Guide, Azure, Setup Azure Site Recovery]
description: Reinstate admin privileges for a customer's Azure CSP subscriptions.
---

## Document Control

- Created: x
- Last Updated: 23/04/22

## Overview of tasks

1. Create Recovery Vault and Resource Group.
2. Setup replication for the resources needing it.
3. Confirm Network information of each VM.
4. Allow the initial Synchronization to run.
5. Setup a Recovery Plan.
6. Run a Test Failover.

## Decisions to make before beginning

These are expanded upon throughout the guide, click the options below to jump to that section.

1. [Naming Conventions.](#naming-conventions)
2. [Regions to be used.](#regions)
3. [Networking (Create them manually or let ASR do this for you.)](#networking)
4. [Regional vCPU and VM Series Quotas.](#regional-vcpu-and-vm-series-quotas)

### Naming Conventions

The resources cannot be renamed after they've been created, decide ahead of time what your naming convention will be, examples are below.

- Recover Services Vault – Customer or Domain Name – region – abbreviation of resource ( rsv-cuss-eus-asr )
- Resource Group – Customer or Domain Name – region – abbreviation of resource ( rg-cust-eus-asr )

### Regions

Some Azure services rely upon regional pairs by default, such as Azure redundant storage; review this [Microsoft document for the pairs for consideration](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure#azure-cross-region-replication-pairings-for-all-geographies).

For example, the primary region for you maybe UK South(London), this region is paired with UK West(Cardiff).

### Networking

#### VNETs

When you initially setup a VM replica, the ASR wizard can create the VNETs and all subnets within that vnet automatically. You don't have to use the wizard though, and you can pre-create the replica vnets and subnets via the Azure Portal or PowerShell.

:::info Creating your own VNETs
The added bonus of doing this yourself means you can create your own naming convention, by default, ASR will setup the VNET with the same name but with the `-asr` appended to the end of it.
:::

#### Network Security Groups

NSGs (Network Security Groups) are not automatically replicated over through ASR, you'll have to recreate these yourself. You can use a script to export the rules from them, you can them "import" the rules back into your newly created ones.

#### Public IPs

These also have to be pre-configured and possibly re-assigned after the VMs have been failed over.

### Regional vCPU and VM Series Quotas

A common issue with replication can be restricted quota limits for VM sizes in other Azure regions.

The VM family vCPU quotas often need to be increased prior to replication. The replication process will start but will give an error regarding vCPU quotas and eventually fail.

:::info Request a quota increase
To request a CPU quota increase - Quotas -> Compute -> Filter to the region UK West -> Select VM family size and click the pencil edit button on the right. Then request increase.
:::

## Setup Guidance

### Create Recovery Vault and Resource Group

:::caution Resource Regions
Make sure to setup the Resource Group and the Recovery Service Vault in the region you want to replicate the resources too or your secondary region.
:::

1. Login to the **Azure Portal**, [https://portal.azure.com](https://portal.azure.com).
2. Search for **Recovery Service Vaults**.
3. Create the new resources.
   1. Create a new **Resource Group**, using the naming convention mentioned in this [section](#naming-conventions).
   2. Create a new **Recovery Service Vault**, using the naming convention mentioned in this [section](#naming-conventions).
   3. Select the Region that matches the pairings in this [Microsoft document](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure#azure-cross-region-replication-pairings-for-all-geographies).

That's the resources setup.

### Add Resources for ASR

:::info Step 5, Selecting your Source Information
If this option does not populate with anything or, you don't see what you think you should, you may have to back out and start over. It seems to be a bit 'buggy' in my experience.

Also make sure your source region is correct otherwise you'll see nothing.
:::

1. Navigate to your new Recovery Services Vault.
2. Find and select **Replicated Items** from the list on the left.
3. Click **+ Replicate**.
4. Select **Azure virtual machines**.
   1. ![Setup ASR](../../../static/img/Setup%20ASR/Add-resources-to-asr-001.png)
5. **Select the source information** for where the resource is sitting already.
   1. *Region*: This should be your original or source region
   2. *Subscription*: Select the Subscription where your resources are currently.
   3. *Resource Group*:  Select the Resource Group where your resources are currently.
   4. *Virtual machine deployment model*: Resource Manager.
   5. *Disaster recovery between availability zones?*: It's greyed out for me, I'm assuming you're not using that!
6. Press **Next**.
7. **Select your VMs** from the list.
8. Press **Next**.
9. Select the Target location information. (The term new and `-asr`, is appended to any resource created here.)
10. Make sure to **select the correct subnet**, Azure will default to the first subnet in the VNET.
    1. Check the dropdown menu to ensure the vnet hasn’t been created previously, sometimes this option does not populate correctly.
11. **Click View/edit storage configuration** to check the destination disk type is Standard HDD.
    1. Click Replica Managed Disk and select Standard HDD to reduce ASR costs.
12. **Save and Press Next** to get to the Manage tab.
13. For Extension Settings, **select Allow ASR to manage**.
    1. The wizard will attempt to create an automation account which automatically updates the ASR agents. If it should fail, it will not stop this from succeeding, [check here for more info](#automation-accounts-error).
14. Click **Enable Replication**.

This process can take 10 - 15 minutes to complete however, the initial synchronization of the VMs over to the secondary region will take considerably longer, perhaps to run over night.

### Check Failover Health

1. Navigate to your new Recovery Services Vault.
2. Find and select **Replicated Items** from the list on the left.

Within this window you'll see the replicated resources and the Failover Health.

### Set the Network info for replicated items

:::info
You can only complete this step once the initial sync has completed. To confirm this, you can check the status of the items using the instructions in the section above [here](#set-the-network-info-for-replicated-items).
:::

Each VM you're replicating needs to have the networking information confirmed on them for the replicated region.

1. **Navigate to a VM** that's been setup for ASR.
2. Find **Disaster Recovery** on the left hand side and select this.
3. Click **Network** on the left hand side.
4. Select **Edit**.
5. Find the section labelled, **Primary IP Configuration**.

Make sure to set the make sure to confirm Private IP address and the Public IP address if needed.

### Setup Recovery Plan

The recovery plan allows you to perform a failover or failover test with multiple machines.

1. Navigate to your Recovery Services vault.
2. Select **Recovery Plans (Site Recovery)**.
3. Click **+Recovery Plan**.
4. In Create recovery plan, **specify a name** for the plan.
5. Choose a source and target based on the machines in the plan, and select Resource Manager for the deployment model.

The source location must have machines that are enabled for failover and recovery.

## Running a Test Failover

Test Failover will create the VM resources in the secondary region without shutting down or impacting the production resources in your primary region. You'll see duplicate VMs with `-test` appended to the end of them.

### Start the test

1. Navigate to your Recovery Services vault.
2. Select **Recovery Plans (Site Recovery)**.
3. Click on the relevant Recovery Plan.
4. Click **Test Failover**.
5. Choose the **recovery point** and the **VNET target**.
6. Click **OK**.

Whilst the test is running, you can select the running job in the Notifications menu, it will show you the progress within the Recovery Plan.

Once the plan completes you'll see the duplicate resources in your Azure Portal, they'll have the `-test` at the end of their names.

![Failover Test](../../../static/img/Setup%20ASR/asr-test-failover-001.png)

### End the Test & Cleanup Resources

:::info Step 4 below
You can click on the Recovery Plan name and go into it to end the test, you can do this if you wish to view more information about the test.
:::

1. Navigate to your Recovery Services vault.
2. Select **Recovery Plans (Site Recovery)**.
3. Find the Recovery Plan you just initiated.
4. Select the **3 dots** on the right hand side.
5. Click **Cleanup test failover**.
6. **Add any Notes** for the test.
7. **Tick** the box for **Testing is complete. Delete test failover virtual machine(s)**.
8. Click **OK**.

:::info
Once you click OK you will be stuck on the page until the task completes, I would suggest not exiting the page until it is finished.
:::

Again you can watch the operation complete from the Notifications menu.

## Issues

### Automation Accounts error

If the ASR automation account fails to create, which is often the case, you can fix this by forcing creation within the Recovery Service Vault page.

1. From the Recovery Services vault.
2. Click **Site Recovery Infrastructure**.
3. Click **Extension Update Settings**.
4. Select **Allow Site Recovery to manage**.
5. Select **On**.
6. Click **Save**.

This will attempt to fix the automation account.

### Stale resource links on the VM

Full Error: -

```text showlinenumbers
The cleanup of the stale ASR resource links on the VM failed due to one of the below reasons.

The resource or the resource group has 'Delete' locks or 'ReadOnly' locks and deletion of resource links failed.
Azure error messages: Azure status code: Conflict. Arm error code: ScopeLocked.
Replication not enabled on VM with stale resources (error code 150226) | Microsoft doc link 
```

Make sure to remove any delete locks on resources before you remove the resource from replication protection, otherwise you'll end up with issues noted in the above link.
