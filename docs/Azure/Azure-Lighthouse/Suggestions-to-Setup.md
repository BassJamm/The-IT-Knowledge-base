---
sidebar_position: 1
id: Setup Azure Lighthouse
title: Setup Azure Lighthouse
toc_max_heading_level: 4 
tags: [Azure, Lighthouse]
---

## Document Control

- Created: x
- Last Updated: 23/04/22

## Prerequisites and Notes

:::caution
This document covers creating a template manually and uploading to a customer directly. Not an Azure Marketplace offering.
:::

### Online Reading

- [Microsoft doc - What is Azure Lighthouse?](https://learn.microsoft.com/en-us/azure/lighthouse/overview).
- [Microsoft doc - Onboard a customer to Azure Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/onboard-customer).

### Training

- From testing I found that many staff are over-whelmed or confused initially by the customer resources showing in their own managing tenant, consider setting up Lighthouse for your more technical staff first who can train the others.
- Consider keeping the permissions as simple as possible and only giving access to Lighthouse those who really need it.

:::tip Subscription Filter.
When you add a new customer via Lighthouse, you'll need to amend their subscription filter to show them. I'd highly recommend training staff to use the filter to work with one subscription or customer at a time, save making changes to the wrong client\customer.
:::

### Permissions and Roles

:::tip Azure Roles.
There are over 170 roles in Azure, that's a silly amount of trawl through to find the perfect combination to work with. Consider what you look after for your client\customer and simplify it as much as possible, limiting access to the staff who really need it may be enough of a security control for you.
:::

- If you're an MSP there are too many roles to consider, I'd suggest using at the minimum or two groups that assign the `Contributor` role and the `Reader` role separately. You can use this segregation to separate those who should `look but not touch` and those who need to `administer and change`.
- PIM elevation works to provide just-in-time access, you can setup an approval process for work.
- The `Managed Services Registration assignment Delete` Role, should be assigned so the managing tenant can remove their own Lighthouse delegation without asking the customer to do it.
- Contributor is the **highest** role you can assign through Lighthouse.

### Azure Lighthouse Deployment

- Despite what the documentation says, you can deploy one lighthouse offering to manage multiple subscriptions and resource groups.
- To have a valid ARM template\offering you must have one permanently assigned role, such as Reader.
- Contributor is the **highest** role you can assign through Lighthouse. (Duplicated I know but, this is important!)

## Setup Guidance and Information

### Azure AD

Create your groups in Azure AD, these groups will contain the staff members that will access to the customer\client via Azure Lighthouse.

I'd Suggest something like the below, the groups can be as granular as you like and as numerous as you like.

- Azure Lighthouse Contributor.
- Azure Lighthouse Reader.

:::tip Role Assignment to staff business roles.
I tried initially to setup groups for our finance team, so they'd be able to manage billing however, this didn't seem to work as I expected and required them to have access to the Azure tenant. We found that Partner Centre solved this issue.
:::

### Azure Lighthouse Offering

#### ARM Template

Below is an outline and suggestion for each relevant configurable options for the ARM template.

:::info On-boarding multiple Subscriptions or Resource Groups for one client\customer.
You can delegate multiple resource groups and subscriptions to the same delegation from the Service Providers dashboard\blade in the customer tenant. The documentation for this may suggest otherwise but, it does work.
:::

##### Offering Name

This will show in your customer tenant so make sure if reads "nicely", I'd suggest something like the following.

- `Managing Company Name` Lighthouse Offering for `Customer Name` - `Subscription or Resource Group Name`.

Swap out the relevant information above if you use this naming convention.

##### Description(s)

This is also customer facing, my suggestion is below.

- `Managing Company Name`  managed services offer to administer support resources.
- `Managing Company Name`  offer to work on and administer project resources for `project or PO number`.

##### Delegation Scope(s)

You've got two options, `Subscription` and `Resource Group`, fairly self explanatory however, you cannot change these after deployment so make sure you select the right one for your needs.

##### Authorizations

- **Principal type**: Group
- **Name**: Select one of the noted groups in section above.
- **Display Name**: Do not edit. (Friendly name that shows in customer tenant, will default to the group name)
- **Role**: Assign the roles noted against the groups above.
- **Access Type**: Permanent.

### ARM template Example

You can ignore the top few lines until you find `mspOfferName`, close to this you'll find your description field. Change the `defaultValue:` information, not the `description:` information.

:::tip Confirming your scope.
`"$schema": "https://schema.management.azure.com/schemas/2019-08-01/subscriptionDeploymentTemplate.json#",`, this line should say subscription or resource deployment template, depending on what you selected.
:::

Similar situation with the `mspOfferDescription:` as well.

```json showLineNumbers

"mspOfferName": {
   "type": "string",
   "metadata": {
    "description": "Specify a unique name for your offer"
   },
   "defaultValue": "My Company Lighthouse Contributor Offer for Customer Name - Subscription Name "
  },

  "mspOfferDescription": {
   "type": "string",
   "metadata": {
    "description": "Name of the Managed Service Provider offering"
   },
   "defaultValue": "My Company managed services offer to administer support resources."
  }

```

Locate the `variables:` section to define your group and the Azure role assignments.

- `managedByTenantId"` - is your tenant or partner tenant ID.
- `"authorizations":` - Are you Azure Roles assignments.
- `"principalId"` - Is your object in the managing tenant.
- `"roleDefinitionId"` - Is the Azure AD role you've assigned. In the case below, it's `Contributor` and the `Managed Services Registration assignment Delete` roles.
- `"principalIdDisplayName"` - Is your friendly Group name, this will show in your customer tenant, it does not need to match the group name in the managing tenant.

You'll see some of the information repeated for each role you assign to the same object in the managing tenant.

```json showLineNumbers
"variables": {
  "mspRegistrationName": "[guid(parameters('mspOfferName'))]",
  "mspAssignmentName": "[guid(parameters('mspOfferName'))]",
  "managedByTenantId": "Your tenant ID",
  "authorizations": [
   {
    "principalId": "Your object in the managing tenant",
    "roleDefinitionId": "b24988ac-6180-42a0-ab88-20f7382dd24c",
    "principalIdDisplayName": "Lighthouse Contributor"
   },
   {
    "principalId": "Your object in the managing tenant",
    "roleDefinitionId": "91c1777a-f3dc-4fae-b103-61d183457e46",
    "principalIdDisplayName": "Lighthouse Contributor"
   }
  ]
 },
 ````

:::tip You can edit the JSON template directly!
You don't need to always duck back into Azure Lighthouse to create the templates, you can just edit the JSON files if you're comfortable doing so.
:::

## Using Lighthouse

:::tip
The methods below are 2 direct methods for accessing customers, you'll be able to see their resources in the portal as if they were your own without having to use the two methods below.
:::

### Via the Lighthouse blade

1. Open the **Azure Management Portal**.
2. Search for **Azure Lighthouse**.
3. Click on the **Delegations** option on the left-hand side, you may need to click manage my customers if you’ve no connections.
4. You will then see your list of your customer’s subscriptions that you have access to.

### Via the subscriptions blade

> You'll need to show the customer in the subscription filter first though.

1. Open the **Azure Management Portal**.
2. Navigate to the **Subscriptions blade**.
3. The list of subscriptions will also list the customer subscriptions you have access too.

:::caution You won't see the the customer subscriptions straight away!
You need to first enable this in the Subscription filter.
:::

1. In the **Azure portal**, Select the **Directory + subscriptions** or **Settings icon** in the top right of the page.
2. In the Directories + subscriptions settings page, ensure that the **Advanced filters toggle is turned off**.
3. In the Default subscription filter section, **select the appropriate directory** and subscription.

:::info
If you have been granted access to one or more resource groups, rather than to an entire subscription, select the subscription to which that resource group belongs. You'll then work in the context of that subscription, but will only be able to access the designated resource group(s).
:::

## Partner Earned Credit (PEC) using PAL

PAL - Partner Admin link

PAL is how a partner can be recognized by Microsoft for their work in Azure on-behalf-of their customer.

- [Microsoft doc - Associate your partner ID when you onboard new customers vai Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/partner-earned-credit#associate-your-partner-id-when-you-onboard-new-customers).
- [Microsoft doc - Link a PartnerID with PAL or DPOR for PAL](https://learn.microsoft.com/en-us/partner-center/link-partner-id-for-azure-performance-pal-dpor#link-to-a-partnerid-with-pal)

To do this via Lighthouse, in a nutshell.

1. [**Create a service principal**](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-authenticate-service-principal-powershell) user account in your managing tenant.
2. Using that service principal account, [**link to your Associated Partner ID**](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/link-partner-id#link-to-a-partner-id) in your managing tenant.
3. Include at least one authorization which includes the service principal Account as a user with an Azure built-in role that is eligible for PEC.

:::caution
This role must be granted as a permanent assignment, not as a just-in-time eligible authorization, in order for PEC to apply.
:::