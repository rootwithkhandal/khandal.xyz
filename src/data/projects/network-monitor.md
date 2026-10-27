# Zeek & Wireshark Lab

Home lab environment capturing and analyzing east-west network traffic using custom Zeek event scripts and Wireshark display filters for C2 beacon detection.

## Overview

Perimeter defenses often miss compromised internal hosts communicating laterally or beaconing out over encrypted channels. This lab documents full-packet network capture and behavioral analysis using Zeek network security monitoring and Wireshark protocol analysis.

## Core Capabilities

- **C2 Beacon Detection:** Calculating jitter and interval regularity on HTTPS connections
- **DNS Tunneling Inspection:** High entropy subdomains and abnormal query frequency detection
- **SMB & RPC Monitoring:** Auditing lateral movement tools (PsExec, WMI) across internal subnets
- **JA3/JA3S Fingerprinting:** Identifying malicious TLS clients regardless of domain masquerading

## Lab Architecture

- **Proxmox VE:** Virtualized blue-team testbed
- **pfSense Router:** TAP/SPAN port mirroring east-west traffic
- **Zeek (Bro):** Protocol parsing and automated event extraction
- **Wireshark:** Deep packet inspection and stream reassembly

## Sample Zeek C2 Beacon Detection Script

```zeek
@load base/protocols/conn
@load base/protocols/ssl

module C2Detection;

export {
    redef enum Notice::Type += {
        C2_Regular_Beaconing_Observed
    };
}

event ssl_established(c: connection) {
    if ( c$ssl?$server_name && /.*\.xyz/ in c$ssl$server_name ) {
        NOTICE([$note=C2_Regular_Beaconing_Observed,
                $msg=fmt("Suspicious TLS connection to %s", c$ssl$server_name),
                $conn=c]);
    }
}
```

## Investigation Results

- Identified simulated Cobalt Strike HTTP beaconing with 20% jitter
- Extracted and decrypted Kerberos AS-REQ pre-authentication hashes from PCAPs
- Established reusable Wireshark filter cheat-sheets for SOC triage
