# Ransomware Incident Response — A Student Analyst Playbook

**Tag:** Incident Response · **Date:** Apr 2026 · **Read time:** 9 min

---

During a live ransomware outbreak, the first sixty minutes dictate whether an organization loses a single workstation or an entire domain. Having structured, phase-by-phase incident response playbooks prevents panic and ensures forensic artifact integrity.

This playbook documents practical containment, eradication, and recovery procedures modeled after NIST SP 800-61 and tested in blue team lab simulations.

## The IR Lifecycle Stages

```
Preparation ──► Detection & Triage ──► Containment ──► Eradication ──► Recovery ──► Lessons Learned
```

## Phase 1: Detection & Rapid Triage

**Immediate Indicators:**
- High volume of `4663` event IDs (rapid file write/delete operations on shared network drives)
- Renamed file extensions (`.locked`, `.enc`) and newly dropped ransom notes
- Sudden spike in CPU utilization and encrypted outbound network traffic on atypical ports

**Analyst Checklist:**
1. Document the initial alerting system, source IP, hostname, and timestamp in UTC.
2. Verify alert fidelity: Is the process actively modifying file headers?
3. Declare severity level: SEV-1 (Critical Enterprise Impact).

## Phase 2: Containment (Stop the Spread)

**Action 1: Network Isolation (Do NOT power down)**
- Isolate the host from the network immediately via EDR agent isolation or physical network disconnect.
- **Do not reboot or power off:** Powering off flushes volatile RAM, destroying encryption keys and active process handles essential for decryption recovery.

**Action 2: Domain Account Revocation**
- Disable compromised user accounts and revoke all active Kerberos TGT tickets:

```powershell
# Disable compromised user account in Active Directory
Disable-ADAccount -Identity "j.doe"

# Invalidate Kerberos tickets across domain
klist purge
```

**Action 3: Block External C2 Communication**
- Push temporary perimeter firewall egress blocks on discovered C2 IP addresses and domains.

## Phase 3: Eradication & Forensic Preservation

1. **Capture RAM & Triage Artifacts:** Run KAPE or CyLR to collect event logs, MFT, and registry hives.
2. **Identify Entry Vector:** Correlate phishing logs, exposed RDP sessions, or public exploit telemetry to locate Patient Zero.
3. **Terminate Persistence:** Remove unauthorized Scheduled Tasks, WMI event subscriptions, and registry run keys (`HKLM\Software\Microsoft\Windows\CurrentVersion\Run`).

## Phase 4: Recovery & Verification

- Rebuild affected endpoints from verified golden images rather than attempting manual file decryption.
- Restore critical databases and file shares strictly from offline, immutable backups.
- Implement enhanced monitoring (Sysmon canary rules) for 14 days post-incident.
