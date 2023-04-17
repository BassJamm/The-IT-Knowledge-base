---
sidebar_position: 4
id: Renew Apple Tokens and Certs
title: Renew Apple Tokens and Certs
tags: [KB, Intune, Apple, Certificate, VPP, MDM, APNS]
---

Read more on this top here, https://learn.microsoft.com/en-us/intune-education/renew-ios-certificate-token.

You need to renew possibly 3 items here:

- Apple MDM (Mobile Device Management) certificate or Push Certificate.
- Enrollment Program Token or APNS.
- Apple Volume Purchase Program (VPP) token.

## Apple MDM (Mobile Device Management) certificate

### What is it?

The MDM push certificate is associated with the Apple ID you used to create it. The Certificate is used to enrol and manage your IOS devices in your tenant.

### Replacement steps

:::caution
Do not let this expire, if it does expire you may have to re-enrol deviecs again.
:::

1.	Login to https://admin.microsoft.com, navigate to the Intune portal.
2.	Go to **Devices** > **Enroll Devices** > **Apple enrollment** > **Apple MDM Push Certificates**.
3. Fill out the information in the window that pops out from the right.
   1. 1. ![APB Cert upload](../../../static/img/Renew%20Apple%20tokens%20and%20certs/Configure-MDM%20Push-Certificate-001.jpg)
4.	**Follow the onscreen instructions**. Remember to sign into the Apple Push Certificates Portal with the **Apple ID you used to create your original certificate**.
5. Within the Apple Push Certificates Portal, click Renew on the old certificate. You can create a new Certificate; however, this requires further steps outlined in the following [Microsoft link.](https://docs.microsoft.com/en-us/mem/intune/enrollment/apple-mdm-push-certificate-get)
   1. ![APB Cert upload](../../../static/img/Renew%20Apple%20tokens%20and%20certs/Configure-MDM%20Push-Certificate-002.jpg)
6.	**Upload** the new CSR you just created.
7.	After you renew and download the certificate, return to Intune to complete the remaining steps on this screen.
8.	Select **Upload**.

## Enrollment program token

1.	Login to Office 365, navigate to the Intune portal.
2.	Go to **Devices** > **Enroll Device**s > **Apple enrollment** >**Enrollment program tokens**.
3.	**Select the token** that you want to renew.
4.	Select **Renew token** at the top.
5.	**Sign-into Apple Business Manager** with the account shown on the token.
6. **Click your name** in the bottom left of the screen.
7. Under "Your MDM Servers" **select the relevant server**.
8. **Click download** at the top in the right-hand half of the page.
   1. ![ABM example](../../../static/img/Renew%20Apple%20tokens%20and%20certs/Apple-Business-Manager-01.jpg)
9.  Return to Intune portal.
10.	**Upload the VPP token** using the provided option.
11. Select, Next then **Review + Save**.


## VPP (Volume Purchase Program) token(s)

1.	Login to Office 365, navigate to the Intune portal.
2.	Go to **Tenant settings** > **Connectors and tokens** > **Apple VPP Tokens**.
3. **Click on the token** you want to renew.
4. **Click the Edit** button next to the basics section.
5. **Sign into Apple Business Manager** with the account you used to set this up originally.
6. **Click your name** in the bottom left > **Payments and Billing**.
7. Scroll down to the Server Tokens section.
8. **Click download** next to your token name, it should match the organisation in your Intune tenant.
9. Back in Intune, **upload the VPP token** using the provided option.
10. Select **Save**.

## Testing

Notify the customer that the above has been updated successfully. The customer should confirm they can enroll new devices into Intune, download and assign apps to the devices.