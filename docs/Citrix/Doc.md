---
draft: false
id: Updating a Citrix Cloud Image
title: Updating a Citrix Cloud Image
hide_title: false
hide_table_of_contents: false
sidebar_label: Updating a Citrix Cloud Image
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Updating a Citrix Cloud Image
tags: [Citrix]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Reinstate admin privileges for a customer's Azure CSP subscriptions.
---

## Document Control

- Created: x
- Last Updated: x (date in reverse format.)

## Before you begin

Gather up the updates that are needed to be applied to the Citrix image including: -

- Required Windows Security and Feature updates.
- Application Updates and changes.
- OS changes (That are not deploying via policy)

Once you have your updates, liaise with your team or IT contact to arrange a change window with them, as the customer will want to test the update themselves first before they're rolled out to production.

:::tip
Change Window A good rule of thumb that's done me well, is to complete an image update over a 2 week period. The 1st week for rolling it out the test environment & the 2nd week would be to deploy to the production environment.
:::

## Deploy changes to the test environment

Locate the production template VM.

### Snapshot the VM

1. **Locate the VM resource**; search for it or follow the image below.
2. Click **Disks**.
3. Select the **OS disk**.
4. Create **Snapshot**.
5. Name the Snapshot appropriately, "VMName-Before-"insert update description here"-dd-mm-yyyy-hh-hh".

### Make any changes to the VM

1. You should now **remote into the VM** and make any changes that you need to.
2. Follow steps from the above section to **take another Snapshot**.
3. Name it appropriately, "VMName-prod-After-"insert update description here"-dd-mm-yyyy-hh-hh".
4. **Power off the template VM**, you no longer need it running.

### Update the test Citrix Image

1. Access **Citrix Cloud**, https://citrix.cloud.com/.
2. Click **Manage** under "*DaaS Standard for Azure*".
3. **Select Manage** in the top left and **click Full Configuration**.
4. Select **Machine Catalogs**.
5. **Select the testing Catalogue**, named "*Your Catalogue Name*".
6. Above the list of Catalogues,**select Change Master Image**.
7. **Click Next** on the wizard to step 2.
8. **Select an image** from the options available. (It points to the resource group where the template VM resides).
9. **Add a note** under this to describe the updates that have been made. Make the note descriptive to explain what has been changed.
10. Select the `minimum functional level` as required.
11. Press **Next**.
12. Leave the roll out strategy as `On next shutdown` unless you need to change this.
13. **Complete the wizard** to complete this process.

## Deploy changes to the production environment

### Update the master Image

Access Citrix Cloud, https://citrix.cloud.com/ and then follow the steps from the section above this, to update the master image of your production Machine Catalog.
