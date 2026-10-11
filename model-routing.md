# Multi-Model Routing & Heuristics

This document defines the strategy and decision matrix for selecting the most appropriate AI model for tasks across the workspace.

---

## 🧭 Routing Matrix

| Task Category | Optimal Model Family | Example Models | Key Strengths |
| :--- | :--- | :--- | :--- |
| **Fast Reasoning / Scratchpad** | Ultra-Fast & Flash | Gemini 2.5 Flash, Claude 3.5 Haiku | Low latency, high throughput, quick summaries, link checking. |
| **Deep Reasoning & Architecture** | High-Reasoning Flagship | Claude 3.7 Sonnet (Thinking), o3-mini | Complex architectural planning, refactoring tradeoffs, debugging tricky bugs. |
| **Long Context Ingestion** | High-Context Large Models | Gemini 2.5 Pro (2M+ tokens) | Ingesting large repositories, multi-document analysis, cross-file refactoring. |
| **Agentic Coding & Tool Use** | Advanced Coding Models | Claude 3.7 Sonnet, Gemini 2.5 Pro | Multi-step tool execution, precise code edits, terminal coordination. |
| **Multimodal (Images / UI / Video)** | Native Multimodal | Gemini 2.5 Flash/Pro, Claude 3.7 Sonnet | UI screenshot auditing, diagram parsing, visual QA. |

---

## 🚦 Decision Flowchart

```text
Incoming Task
   │
   ├─► Is it quick status, formatting, or index update?
   │     └─► Route to: Flash / Haiku (Speed & low cost)
   │
   ├─► Does it require analyzing entire large codebase (>100k tokens)?
   │     └─► Route to: Gemini 2.5 Pro (Massive context window)
   │
   ├─► Does it involve complex system architecture, difficult algorithms, or subtle logic?
   │     └─► Route to: Claude 3.7 Sonnet / Reasoning Model (Extended thinking)
   │
   └─► Standard coding / refactoring / test writing?
         └─► Route to: Primary Agentic Coding Model
```

---

## ⚙️ Environment Variables

Defined in [.env](file:///e:/khandal/re.khandal.cc/.env):
- `DEFAULT_FAST_MODEL` (e.g., `gemini-2.5-flash`)
- `DEFAULT_REASONING_MODEL` (e.g., `claude-3-7-sonnet`)
- `DEFAULT_CODING_MODEL` (e.g., `gemini-2.5-pro`)
