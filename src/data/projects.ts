export interface Project {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  /** GitHub owner/repo - README is fetched from this at build time */
  githubRepo: string;
}

export const projects: Project[] = [
  {
    slug: 'siem-triage',
    tag: 'SOC / SIEM',
    tagColor: '#6cabe6',
    title: 'SIEM Alert Triage Engine',
    excerpt: 'Python-based alert enrichment pipeline integrating VirusTotal, AbuseIPDB, and Shodan APIs to auto-classify and reduce false positives by 60%.',
    githubRepo: 'rootwithkhandal/siem-triage',
  },
  {
    slug: 'sigma-rules',
    tag: 'Detection',
    tagColor: '#9BB7D4',
    title: 'Custom Sigma Detection Rules',
    excerpt: 'Vendor-agnostic Sigma rules mapped to MITRE ATT&CK TTPs targeting encoded PowerShell, process injection, and credential dumping techniques.',
    githubRepo: 'rootwithkhandal/sigma-rules',
  },
  {
    slug: 'memory-forensics-lab',
    tag: 'Forensics',
    tagColor: '#DEC08B',
    title: 'Memory Forensics Toolkit',
    excerpt: 'Volatility 3 automation scripts for rapid malware triage — detects process hollowing, reflective DLL injection, and hidden rootkit artifacts.',
    githubRepo: 'rootwithkhandal/memory-forensics-lab',
  },
  {
    slug: 'log-parser',
    tag: 'Automation',
    tagColor: '#94B49F',
    title: 'Windows Event Log Parser',
    excerpt: 'Python & PowerShell toolkit for parsing Sysmon EID 1/3/10 and Windows Security 4624/4625 events into structured threat timelines.',
    githubRepo: 'rootwithkhandal/log-parser',
  },
  {
    slug: 'threat-intel-bot',
    tag: 'Threat Intel',
    tagColor: '#DE8F8F',
    title: 'IOC Enrichment Bot',
    excerpt: 'Automated IOC enrichment pipeline querying MISP, VirusTotal, and AbuseIPDB feeds — outputs structured JSON reports for analyst triage queues.',
    githubRepo: 'rootwithkhandal/threat-intel-bot',
  },
  {
    slug: 'network-monitor',
    tag: 'Packet Analysis',
    tagColor: '#b3bdc5',
    title: 'Zeek & Wireshark Lab',
    excerpt: 'Home lab setup capturing and analyzing east-west network traffic with Zeek scripts and Wireshark display filters for C2 beacon detection.',
    githubRepo: 'rootwithkhandal/network-monitor',
  },
];
