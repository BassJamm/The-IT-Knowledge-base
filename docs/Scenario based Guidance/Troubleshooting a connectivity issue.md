---
sidebar_position:  1
id: Troubleshooting a connectivity issue
title: Troubleshooting a connectivity issue
tags: [Tutorial, Networking, Issue]
---

Case study to aid in troubleshooting a networking issue scenario (from a infrastructure perspective) that has happened recently.

## Scenario for example

We've got a server hosting an application that is managing license assignment to a client installed application.

- **Server name**: lichost01.fakedomain.local
- **Server IP**: 192.168.1.15
- **Client device name**: clientdev01
- **Client device IP**: 192.168.1.35
- **Application name**: AmazingLicenseApplication

Server Ports:

- **Discovery port**: 6015
- **Licese retreival port**: 5985

Client Ports:

- **None specified**

We've got the application installed on the client machine and the license management application installed on the server however, the client application is unable to retreive licesnse from the server hosted application.

The Vendor has said that the application configuration looks correct and asked for the network connection between the two devices to be tested.

## What needs to be confirmed

1. Can the client device reach the server at all?
2. Can the client device initiate a connection to the ports required?

## Can the client device reach the server at all?

Good command to use is `test-netconnection`, it can be abbreviated to `tnc`. This is the PowerShell equivalent (or close to) of `telnet` in CMD .

1. Open **PowerShell** on the client device.
2. Enter the command `tnc -ComputerName lichost01 -Port 6015`.

We are getting a failure, both for the TCP connection and the Ping; both of these failures would suggest the machine is not reachable from the client device.

:::tip
Worth noting that ICMP or Ping is often blocked on networks, this is a wide spread practice, so do not rely on it.
:::

```powershell
WARNING: PING\ICMP connect to (lichost01) failed
WARNING: TCP connect to (lichost01 : 6015) failed

ComputerName           : lichost01.fakedomain.local
RemoteAddress          : 192.168.1.15
RemotePort             : 6015
InterfaceAlias         : Wi-Fi
SourceAddress          : 192.168.1.35
PingSucceeded          : False
PingReplyDetails (RTT) : 11 ms
TcpTestSucceeded       : False
```

### Next step

1. Consult a network diagram of the infrastructure, **note any devices or hops** that are between the client device and the server.
2. Check with a **network engineer** as to what is between the client device and the server.

In this case, there's a VPN between the client device and the license application host server.

After chatting with the network engineer, we've confirmed that  both ports (6015 and 5985) were blocked by the VPN gateway device, being non-standard ports, that is always a possible issue.

Now we want to re-run the network test.

1. Open **PowerShell** on the client device.
2. Enter the command `tnc -ComputerName lichost01 -Port 6015`.

This time we see a successful ping communication to the server but, TCP is still failing.

```powershell
WARNING: TCP connect to (lichost01 : 6015) failed

ComputerName           : lichost01.fakedomain.local
RemoteAddress          : 192.168.1.15
RemotePort             : 6015
InterfaceAlias         : Wi-Fi
SourceAddress          : 192.168.1.35
PingSucceeded          : True
PingReplyDetails (RTT) : 11 ms
TcpTestSucceeded       : False
```

## Check what is blocking the TCP connection

Now we've ruled out the VPN being the issue and the ping test is successful, we know the client device can reach the server but, now the client hosted application is unable to connect to port `5985` to retreive a license.

### Check if the port is listening

1. Connect to the server application.
2. Open **PowerShell**.
3. Type the command `Get-NetTCPConnection -LocalPort 5985`.

You should get something like the below, if not then the port's not active at all.

```powershell
PS C:\Users\username> Get-NetTCPConnection -LocalPort 5985

LocalAddress                        LocalPort RemoteAddress                       RemotePort State       AppliedSetting
------------                        --------- -------------                       ---------- -----       --------------
::                                  5985      ::                                  0          Listen

```

So from the above we can see the port is listening and waiting on connections but, the client app is still not able to retrieve a license.

### Check Windows Firewall

1. Open **Resource Monitor** from the start menu.
2. Select the **Network tab**.
3. Expand the **Listening Ports** section via the down arrow on the right.

It should look something like this.

![Resource Monitor - Listening ports.jpg](../../static/img/Troubleshooting%20a%20network%20issue/Resource-monitor-001.jpeg)

4. Scroll through the ports until you find the relevant port and confirm the Firewall Status.

In our case, it's displaying the Firewall status as `Not allowed, not restricted`, which isn't that helpful but, does give us a hint that the Windows Firewall on the server maybe blocking the connection. 

:::tip
Something to note, Windows firewall is filtering on the way in but, unless specified, outbound will match the rules that are inbound. So if something comes in on such and such a port, the firewall will presume it's allowed outbound (not necessarily on the same port though).
:::

### Adding a Windows Firewall rule

1. Search in start for `Windows Firewall with Advanced Security`.
2. Click **Inbound Rules** to load and view the other rules.
3. **Right-Click** on Inbound Rules, click **New Rule**...
4. Select **Port**.
5. Select **TCP** & **add the port** number (in this case 5985).
6. Select **Allow the connection** and press next.
7. Leave it as **all 3 profiles** selected.
8. Enter a **description name** and **description** (more for the next person coming along than anything else).
9. Press **Finish**.

## Testing the connection again

1. Open **PowerShell** on the client device.
2. Type the command `tnc -ComputerName lichost01 -Port 5985`.

This time we see a successful TCP connection.

> Notice the information for the ping\icmp test is ignored in a successful connection attempt.

```powershell
ComputerName           : lichost01.fakedomain.local
RemoteAddress          : 192.168.1.15
RemotePort             : 5985
InterfaceAlias         : Wi-Fi
SourceAddress          : 192.168.1.35
TcpTestSucceeded       : True
```
