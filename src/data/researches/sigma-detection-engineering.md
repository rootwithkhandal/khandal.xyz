# Writing Production Sigma Rules — From TTP Mapping to Deployment

**Tag:** Detection Engineering · **Date:** Mar 2026 · **Read time:** 8 min

---

Detection engineering is software engineering applied to threat defense. Too many detection rules in enterprise environments are fragile strings or IP blacklists that break upon minimal adversary variation.

This field guide details how to develop vendor-agnostic Sigma rules by mapping adversary techniques from MITRE ATT&CK, validating them against telemetry datasets, and compiling them into production SIEM pipelines.

## The Rule Engineering Lifecycle

```
1. Threat Modeling (MITRE ATT&CK TTP & Red Team Emulation)
   │
2. Telemetry Verification (Identify required EVTX / Sysmon / auditd fields)
   │
3. Logic Authoring (Craft modular selection and filter blocks in YAML)
   │
4. Schema & F/P Testing (Run sigma check and test against baseline log suites)
   │
5. CI/CD Compilation (Compile to Splunk SPL, Elastic DSL, Sentinel KQL)
```

## Anatomy of a Robust Sigma Rule

Here is an example rule targeting encoded PowerShell download cradles (`T1059.001`):

```yaml
title: Suspicious Encoded PowerShell Web Cradle Execution
id: 8f9b421a-293e-4b71-b203-d2508192a7e1
status: production
description: Detects encoded PowerShell command lines invoking download string cradles commonly used in malware stagers.
references:
    - https://attack.mitre.org/techniques/T1059/001/
author: Priyansh Khandal
date: 2026-03-12
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith:
            - '\powershell.exe'
            - '\pwsh.exe'
        CommandLine|contains:
            - ' -e '
            - ' -enc '
            - ' -encodedcommand '
    filter_admin_tools:
        CommandLine|contains:
            - 'C:\Program Files\AdminSuite\'
    condition: selection and not filter_admin_tools
falsepositives:
    - Legitimate enterprise deployment scripts using encoded parameters (should be filtered by path)
level: high
tags:
    - attack.execution
    - attack.t1059.001
```

## Validation & Automated Compilation

Using `pySigma`, we test the rule locally and convert it to Splunk SPL:

```bash
# Verify schema compliance
sigma check rules/powershell_cradle.yml

# Convert to Splunk SPL with Sysmon mapping
sigma convert -t splunk -p sysmon rules/powershell_cradle.yml
```

Generated SPL query:

```splunk
index=wineventlog EventCode=1 (Image="*\\powershell.exe" OR Image="*\\pwsh.exe") (CommandLine="* -e *" OR CommandLine="* -enc *" OR CommandLine="* -encodedcommand *") NOT (CommandLine="*C:\\Program Files\\AdminSuite\\*")
```

## Testing Against Emulated Telemetry

Never merge a detection rule without executing atomic tests. Using Atomic Red Team:

```powershell
Invoke-AtomicTest T1059.001 -TestNumbers 1,2
```

We verify that the event triggers an alert in Splunk within 30 seconds and generates zero noise from standard background operating system activity.
