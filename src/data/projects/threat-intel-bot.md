# IOC Enrichment Bot

Automated threat intelligence enrichment bot querying MISP, VirusTotal, and AbuseIPDB feeds to output structured telemetry for SOC analyst triage queues.

## Overview

When suspicious IP addresses, file hashes, or domains trigger SIEM alerts, manual lookups across disparate threat feeds waste critical analyst response minutes. This bot correlates IOCs against multiple intelligence platforms simultaneously, normalizes confidence ratings, and formats actionable summaries.

## Supported Intel Providers

- **VirusTotal v3 API:** Multi-engine AV detection ratios and sandbox behavior
- **AbuseIPDB:** Crowdsourced IP abuse confidence scores and ISP metadata
- **Shodan API:** Open port mapping, banners, and vulnerability exposures
- **MISP:** Internal organizational threat sharing indicators and tags

## Architecture

```
Incoming IOC (Hash / IP / FQDN)
  ├─► Redis Cache Layer (Prevents rate-limit quota exhaustion)
  ├─► Parallel Async Collectors
  │     ├─► VirusTotal Collector
  │     ├─► AbuseIPDB Collector
  │     └─► Shodan Port Scanner
  └─► Scoring Aggregator
        └─► Standardized Triage Card (Slack / Discord / Webhook)
```

## Quickstart

```bash
# Clone the repository
git clone https://github.com/rootwithkhandal/threat-intel-bot
cd threat-intel-bot

# Setup virtual environment
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# Configure API secrets
cp config.example.yaml config.yaml

# Query an IOC directly via CLI
python bot.py --enrich 198.51.100.24 --format json
```

## Impact

- Sub-500ms response time for cached indicators
- Prevents redundant external API calls with local TTL caching
- Delivers enriched context directly into SIEM alert tickets
