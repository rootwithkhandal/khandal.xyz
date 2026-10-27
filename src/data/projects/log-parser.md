# Windows Event Log Parser

High-performance Python and PowerShell engine for parsing Sysmon and Windows Security EVTX logs into structured threat timelines and anomalous event clusters.

## Overview

Enterprise incident response requires parsing gigabytes of raw binary `.evtx` files during dead-disk analysis. This tool converts binary EVTX records into normalized JSON/CSV streams and maps events to MITRE ATT&CK kill-chain phases automatically.

## Supported Event IDs

- **Sysmon EID 1:** Process Creation (Parent-child hierarchy, hash, CLI)
- **Sysmon EID 3:** Network Connection (Outbound IP/domain correlation)
- **Sysmon EID 10:** ProcessAccess (LSASS and sensitive token tampering)
- **Security 4624 / 4625:** Logon Success / Failure (Type 3 network, Type 10 RDP)
- **Security 4720:** User Account Created (Rogue account persistence)

## Installation & Usage

```bash
# Clone the repository
git clone https://github.com/rootwithkhandal/log-parser
cd log-parser

# Install python-evtx and dependencies
pip install -r requirements.txt

# Parse EVTX directory into chronological JSONL timeline
python parser.py --input /path/to/logs/ --output timeline.jsonl

# Filter for lateral movement indicators (EID 4624 Type 3 + Sysmon EID 1)
python parser.py --input Security.evtx --filter lateral_movement
```

## Performance

- Processes over 25,000 events/second using multi-threaded chunk parsing
- Zero loss on corrupted EVTX record chunks with resilient fallback markers
- Integrates directly with Timesketch for collaborative timeline investigations
