# CLAUDE.md - AI Operating Directives

This document provides instructions, behavioral guidelines, and operational procedures for Claude and any LLM agent interacting with the `re.khandal.cc` workspace.

---

## 🧭 Core Principles

1. **Check State First**: Always read [now.md](file:///e:/khandal/re.khandal.cc/now.md) before starting any task to understand current context, active goals, and immediate blockers.
2. **Context-Driven Execution**: Reference the 5 context files under [`context/`](file:///e:/khandal/re.khandal.cc/context) to understand architectural patterns, standards, and domain rules.
3. **Persistent Cognition**:
   - Record active thoughts, rough notes, and transient hypotheses in [`brain/scratchpad.md`](file:///e:/khandal/re.khandal.cc/brain/scratchpad.md).
   - Document immutable design decisions in [`brain/decisions.md`](file:///e:/khandal/re.khandal.cc/brain/decisions.md).
   - Save persistent takeaways in [`memory/`](file:///e:/khandal/re.khandal.cc/memory).
4. **Automate Repetitive Tasks**: Use [`scripts/workspace_tools.py`](file:///e:/khandal/re.khandal.cc/scripts/workspace_tools.py) instead of manually maintaining indexes or running tedious boilerplate checks.
5. **Hyperlink Standards**: Always provide clickable markdown links with `file://` scheme to files and functions referenced in responses.

---

## 🛠️ Common Commands

```bash
# Check workspace health & ensure essential files exist
python scripts/workspace_tools.py status

# Re-index all markdown files into INDEX.md
python scripts/workspace_tools.py build-index

# Update active focus in now.md
python scripts/workspace_tools.py update-now --focus "Refactoring data loader"

# Append change to CHANGELOG.md
python scripts/workspace_tools.py add-changelog --section Added --entry "Description of feature"
```

---

## 📐 Coding & Modification Workflow

1. **Verify Environment**: Ensure dependencies and virtualenv are active (via direnv or manual activation).
2. **Read Rules**: Adhere strictly to the guidelines defined in [rules.md](file:///e:/khandal/re.khandal.cc/rules.md).
3. **Atomic Changes**: Keep edits focused and concise. Update documentation alongside code.
4. **Model Selection**: Review [model-routing.md](file:///e:/khandal/re.khandal.cc/model-routing.md) if assigning or deferring tasks across subagents or LLMs.
