---
draft: false
id: Calendar Sharing Error
title: Calendar Sharing Error
hide_title: false
hide_table_of_contents: false
sidebar_label: Calendar Sharing Error
sidebar_position: 1
toc_max_heading_level: 4 
pagination_label: Calendar Sharing Error
tags: []
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: This document outlines a possible solution to a specific calendar sharing error for an org.
---
---

## The Error

There was a problem connecting you to the shared calendar. Please ask the person who invited you to send another sharing invitation.

![ErrorMessage](../../../static/img/docs/WindowsOS/Office-Apps/OutlookInviteError//Cal-sharing-invite-Error_2jpeg)

## Too Long; Didn't Read

- Check in Exchange Online configuration for a confidentiality footer being appended onto every outbound message via a mail flow rule. The rule was using a fallback method of wrapping the messages if it couldn't modify the original message. Consequently, the shared calendar invitations were showing up in the recipient mailboxes as attachments.
- Change the rule to "Ignore" instead of "Wrap" when the rule couldn't alter the original message.
