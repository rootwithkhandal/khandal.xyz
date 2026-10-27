# Building a Production-Grade SOC Home Lab with Wazuh

**Tag:** SOC Lab · **Date:** July 2026 · **Read time:** 12 min

---

Theoretical cybersecurity knowledge only translates to real-world capability when tested against genuine enterprise telemetry. This guide outlines how I built a multi-host, virtualized Security Operations Center (SOC) home lab utilizing Wazuh, Elastic Stack, and active endpoint telemetry pipelines.

## Lab Architecture

```
[ Active Directory DC (Windows Server 2022) ]
        │ Sysmon + Wazuh Agent (Port 1514)
        ▼
[ Corporate Workstation (Windows 11) ]
        │ Sysmon + Wazuh Agent (Port 1514)
        ▼
[ Linux Gateway / Web Server (Debian 12) ]
        │ Auditd + Wazuh Agent (Port 1514)
        ▼
┌─────────────────────────────────────────────────────────┐
│               Wazuh SOC Central Server                  │
│                                                         │
│  ├─► Wazuh Manager (Rule evaluation & alerting engine)  │
│  ├─► Wazuh Indexer (Distributed OpenSearch engine)      │
│  └─► Wazuh Dashboard (Analyst visual triage interface)  │
└─────────────────────────────────────────────────────────┘
```

## Infrastructure Setup on Proxmox VE

The lab is hosted on a bare-metal Proxmox VE hypervisor segmented into isolated VLANs:
- **VLAN 10 (Management):** Wazuh Manager & Dashboard (Static IP: 10.10.10.5)
- **VLAN 20 (Internal Domain):** Domain Controller, File Server, and Workstations
- **VLAN 30 (DMZ):** Public-facing honeypots and decoy services

## Step 1: Deploying Sysmon with SwiftOnSecurity Configuration

Default Windows Event Logs lack granular process ancestry and network correlation. We deploy Sysmon across all Windows endpoints:

```powershell
# Download Sysmon and modular configuration
Invoke-WebRequest -Uri "https://live.sysinternals.com/Sysmon64.exe" -OutFile "Sysmon64.exe"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/SwiftOnSecurity/sysmon-config/master/sysmonconfig-export.xml" -OutFile "sysmonconfig.xml"

# Install Sysmon service
.\Sysmon64.exe -accepteula -i sysmonconfig.xml
```

## Step 2: Configuring Wazuh Agent Log Collectors

Edit `ossec.conf` on endpoints to forward Sysmon and PowerShell script block logging to the central manager:

```xml
<localfile>
  <location>Microsoft-Windows-Sysmon/Operational</location>
  <log_format>eventchannel</log_format>
</localfile>
<localfile>
  <location>Microsoft-Windows-PowerShell/Operational</location>
  <log_format>eventchannel</log_format>
</localfile>
```

## Simulating Real Attacks & Evaluating Rules

With telemetry flowing, we execute controlled attack simulations:
1. **Pass-the-Hash / Mimikatz:** Verified that alert rule 100021 fired upon `lsass.exe` handle requests.
2. **Persistence via Scheduled Tasks:** Validated `schtasks /create` detection with parent process verification.
3. **Decoy Web Scanning:** Logged automated Nikto/Nmap probes from the DMZ and tested automated firewall drop actions via Wazuh Active Response.
