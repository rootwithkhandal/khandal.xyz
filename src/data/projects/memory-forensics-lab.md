# Memory Forensics Toolkit

Volatility 3 automated triage scripts and investigation workflows for rapid host artifact extraction — identifying process hollowing, reflective DLL injection, and unbacked executable memory.

## Overview

When malware executes purely in volatile memory, disk forensics yields zero traces. This toolkit automates memory acquisition analysis using Volatility 3, parsing raw dumps to flag anomalies, dump malicious code blocks, and reconstruct process ancestor trees.

## Stack

- **Volatility 3** — Next-gen memory analysis framework
- **Python 3.11** — Pipeline automation and report generation
- **YARA** — In-memory malware signature matching
- **FLOSS & Ghidra** — Extracted PE string and opcode analysis

## Automated Analysis Pipeline

```
Memory Dump (.raw / .dmp / .vmem)
  └─► Volatility 3 Engine
        ├─► windows.pslist & windows.pstree (Unlinked & hidden processes)
        ├─► windows.malfind (RWX unmapped memory & injected PEs)
        ├─► windows.netscan (Active and closed C2 socket connections)
        └─► windows.handles (Mutants, named pipes, and token handles)
              └─► Automated Triage Report (JSON & Markdown)
```

## Setup & Execution

```bash
# Clone the repository
git clone https://github.com/rootwithkhandal/memory-forensics-lab
cd memory-forensics-lab

# Install Volatility 3 dependencies
pip install -r requirements.txt

# Run automated triage against raw memory dump
python triage.py --dump /path/to/memory.raw --output ./triage_results/

# Search for in-memory Cobalt Strike beacons
python triage.py --dump /path/to/memory.raw --yara rules/c2_beacons.yar
```

## Lab Key Findings

- Detected reflective DLL injection in svchost.exe with MZ header in unbacked memory
- Recovered unencrypted Cobalt Strike Malleable C2 configuration from process heaps
- Reduced manual memory analysis time from 45 minutes to under 8 minutes per incident
