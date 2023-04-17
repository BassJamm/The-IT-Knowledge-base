---
sidebar_position: 1
id: Citrix Image Update Guidance
title: Citrix Image Update Guidance
tags: [Citrix Cloud, Azure]
---

## Before you begin

Gather up the updates that are needed to be applied to the Citrix image including: -

- Required Windows Security and Feature updates.
- Application Updates and changes.
- OS changes (That are not deploying via policy)

Once you have your updates, liaise with your team or IT contact to arrange a change window with them, as the customer will want to test the update themselves first before they're rolled out to production.

:::tip Change Window
A good rule of thumb that's done me well, is to complete an image update over a 2 week period. The 1st week for rolling it out the test environment & the 2nd week would be to deploy to the production environment.
:::

## Deploy changes to the test environment

Locate the production template VM.

### Snapshot the VM

1. **Locate the VM resource**; search for it or follow the image below.
   1. ![Snapshot the VM 1](../../../static/img/Citrix%20Image%20Update%20Guidance/Snapshot-vm-001.png)
2. Click **Disks**.
3. Select the **OS disk**.
   1. ![Snapshot the VM 2](../../../static/img/Citrix%20Image%20Update%20Guidance/Snapshot-vm-002.png)
4. Create **Snapshot**.
   1. ![Snapshot the VM 3](../../../static/img/Citrix%20Image%20Update%20Guidance/Snapshot-vm-003.png)
5. Name the Snapshot appropriately, "VMName-Before-"insert update description here"-dd-mm-yyyy-hh-hh".

### Make any changes to the VM

1. You should now **remote into the VM** and make any changes that you need to.
2. Follow steps from the above section to **take another Snapshot**.
3. Name it appropriately, "VMName-prod-After-"insert update description here"-dd-mm-yyyy-hh-hh".
4. **Power off the template VM**, you no longer need it running.

### Update the test Citrix Image

1. Access **Citrix Cloud**, https://citrix.cloud.com/.
2. Click **Manage** under "*DaaS Standard for Azure*".
   1. ![Update the Image 1](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-001.png)
3. **Select Manage** in the top left and **click Full Configuration**.
   1. ![Snapshot the Image 2](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-002.png)
4. Select **Machine Catalogs**.
   1. ![Snapshot the Image 3](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-003.png)
5. **Select the testing Catalogue**, named "*Your Catalogue Name*".
   1. ![Snapshot the Image 4](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-004.png)
6. Above the list of Catalogues,**select Change Master Image**.
   1. ![Snapshot the Image 5](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-005.png)
7. **Click Next** on the wizard to step 2.
8. **Select an image** from the options available. (It points to the resource group where the template VM resides).
   1. ![Snapshot the Image 6](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-006.png) 
9. **Add a note** under this to describe the updates that have been made. Make the note descriptive to explain what has been changed.
10. Select the `minimum functional level` as required.

:::tip Example of the Master Image page
![Snapshot the Image 7](../../../static/img/Citrix%20Image%20Update%20Guidance/Update-the-image-007.png) 
:::

11. Press **Next**.
12. Leave the roll out strategy as `On next shutdown` unless you need to change this.
13. **Complete the wizard** to complete this process.

## Deploy changes to the production environment

### Update the master Image

Access Citrix Cloud, https://citrix.cloud.com/ and then follow the steps from the section above this, to update the master image of your production Machine Catalog.