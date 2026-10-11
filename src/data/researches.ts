export interface Research {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  /** GitBook URL - used as external link on the research page */
  gitbookUrl: string;
}

export const researches: Research[] = [
  {
    slug: 'siem-triage',
    tag: 'SOC / Blue Team',
    tagColor: '#6cabe6',
    title: 'SIEM Alert Triage at Scale — Cutting False Positives by 60%',
    excerpt: 'Lessons from building correlation rules, tuning Sigma detections, and using Python to auto-enrich alerts with threat intel feeds.',
    date: 'Dec 2025',
    readTime: '7 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/siem-triage',
  },
  {
    slug: 'volatility3-malware-triage',
    tag: 'Memory Forensics',
    tagColor: '#DEC08B',
    title: 'Process Hollowing Detection with Volatility 3',
    excerpt: 'Step-by-step walkthrough of using Volatility 3 malfind and pslist plugins to identify reflective DLL injection and hollowed processes in live memory dumps.',
    date: 'Feb 2026',
    readTime: '10 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/volatility3-malware-triage',
  },
  {
    slug: 'sigma-detection-engineering',
    tag: 'Detection Engineering',
    tagColor: '#9BB7D4',
    title: 'Writing Production Sigma Rules — From TTP Mapping to Deployment',
    excerpt: 'How I map MITRE ATT&CK techniques to Sigma rule logic, validate against SigmaHQ schemas, and compile to Splunk SPL for enterprise deployment.',
    date: 'Mar 2026',
    readTime: '8 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/sigma-detection-engineering',
  },
  {
    slug: 'wazuh-soc-homelab',
    tag: 'SOC Lab',
    tagColor: '#94B49F',
    title: 'Building a Production-Grade SOC Home Lab with Wazuh',
    excerpt: 'Complete architecture guide for deploying Wazuh Manager, agents, and Sysmon log pipelines on a virtualized enterprise environment for blue team training.',
    date: 'July 2026',
    readTime: '12 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/wazuh-soc-homelab',
  },
  {
    slug: 'incident-response-playbook',
    tag: 'Incident Response',
    tagColor: '#DE8F8F',
    title: 'Ransomware Incident Response — A Student Analyst Playbook',
    excerpt: 'Tabletop scenario documenting containment, eradication, and recovery procedures for a simulated ransomware attack across a multi-host Windows domain.',
    date: 'Apr 2026',
    readTime: '9 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/incident-response-playbook',
  },
  {
    slug: 'the-android-hardening',
    tag: 'OPSEC',
    tagColor: '#b3bdc5',
    title: 'The Hardening Guide for Android',
    excerpt: 'For anyone running pentesting, bug bounty, or security workflows off a daily-driver Android phone — no custom ROM, no root, no bootloader unlock. Just discipline.',
    date: 'June 2026',
    readTime: '10 min',
    gitbookUrl: 'https://rootwithkhandal.gitbook.io/the-android-hardening',
  },
];
