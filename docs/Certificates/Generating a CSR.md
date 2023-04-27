---
draft: false
id: Generating a CSR
title: Generating a CSR
hide_title: false
hide_table_of_contents: false
sidebar_label: Generating a CSR
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Generating a CSR
tags: [Certificates]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Generating a CSR.
---

## Document Control

- Created: 27/04/23
- Last Updated: 27/04/23

## What is a CSR?

:::tip what does it stand for?
CSR stands for Certificate signing request.
:::

The CSR contains information (e.g. common name, organization, country) the Certificate Authority (CA) will use to create your certificate. It also contains the public key that will be included in your certificate and is signed with the corresponding private key. 

## Creatine one (Windows IIS)

The most common method of generating or creating a CSR is via Internet Information Services (IIS), which is a microsoft product that runs on the Windows OS as part of a server installation.

:::tip What other methods are there?
There are lots of different methods to generate a CSR file, it depends on what operation system you're running. [Try this link for more information](https://support.globalsign.com/ssl/ssl-certificates-installation/certificate-signing-request-csr-overview).
:::

1. RDP or Login to a **machine running IIS**.
2. Search for IIS in the start menu to find the app and open it.
3. Click the **Server Name**.
4. From the center menu **double-click Server Certificates** in the Security section.
5. Select the Actions menu from the right. **Click Create Certificate Request**.
6. The Request Certificate Wizard will appear. In the Distinguished Name Properties window enter information as prompted. 
7. Click **Next**.

:::caution Mandatory information
You must fill the Common Name in with the domain that you wish to cover with the certificate. If you wanted to create a certificate for "www.finepies.com", that is what must be in the Common Name field.
:::

7. In the Cryptographic Service Provider Properties window leave the top field as Microsoft RSA SChannel Cryptographic Provider. 
8. Make sure the **minimum Bit length is set ot 2048** or higher.
9. Click **Next**.
10. **Save the text file** someone easy to find and you're done.

Take the CSR file to your certificate authority, internal or externally hosted and upload your CSR, you'll get a certificate back again.

## Final steps

Depending on what you want to use the certificate for, you may need to "complete" the certificate.

1. Access **IIS** again.
2. From the center menu **double-click Server Certificates** in the Security section.
3. Click **Complete Certificate Request**.
4. **Complete the Wizard** and it will have imported the certificate into the store you selected.

You'll now be able to export the certificate and the private key should you need to.