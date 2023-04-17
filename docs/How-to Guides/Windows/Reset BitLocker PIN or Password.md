---
sidebar_position: 1
id: Reset BitLocker PIN or Password
title: Reset BitLocker PIN or Password
tags: [Windows, Bitlocker]
---

## Change/Reset  in File Explorer

1. Open **File Explorer**.
2. Find **This PC** on teh left hdn side of the window.
3. **Right-click** on the drive encrypted with BitLocker.
4. Select **Change BitLocker PIN**.
5. Enter the old password, then enter the new password twice, click **Change PIN**.

:::tip
If you have forgotten your startup PIN, just click the "Reset a Forgotten PIN" link below. It allows you to set a new password without asking for the current PIN.
:::

## Change/Reset in Control Panel

1. Click on the **Start Menu**.
2. In the search box, type **Manage BitLocker** and open this..
3. Click **Change password** for the desired drive.
4. Enter the old password, then enter the new password twice. When done, click **Change password**.

:::tip
If you have forgotten your BitLocker Password, just click the "Reset Forgot Password" link below. It allows you to set a new password without asking for the current password.
:::

## Change/Reset in Command Prompt

1. From the start menu, search for cmd.
2. Open **Command Prompt** as an Administrator.
   1. To change the BitLocker PIN, enter the following command `Manage-bde -changepin C:`.
   2. To change the BitLocker password, use the following command `manage-bde -changepassword <drive letter>`.

:::tip
If your Windows partition is not `C:\`, use the drive letter that is appropriate for your system. If you don't know what this is, look in File Explorer.
:::

3. Type the new PIN when prompted, and press Enter. 
4. Confirm the new PIN by typing it again when prompted, and press Enter. 

:::caution You won't see the password as you type it
For security reasons, the new PIN you type will become invisible.
:::