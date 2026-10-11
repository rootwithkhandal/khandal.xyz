# Workspace Tools & Capabilities Registry

This document catalogues all available commands, scripts, CLI tools, and agent execution facilities available within the workspace.

---

## 🐍 1. Internal Workspace Scripts (`scripts/`)

Located in [`scripts/`](file:///e:/khandal/re.khandal.cc/scripts), these self-contained Python utilities prevent manual overhead:

### `workspace_tools.py`
A zero-dependency CLI utility for automated repository maintenance:

- **Check Workspace Health**:
  ```bash
  python scripts/workspace_tools.py status
  ```
  Validates directory existence, checks for required files, verifies `.env` presence, and reports git status.

- **Rebuild Master Index ([INDEX.md](file:///e:/khandal/re.khandal.cc/INDEX.md))**:
  ```bash
  python scripts/workspace_tools.py build-index
  ```
  Scans all markdown files in the workspace and rebuilds a categorized master index table with descriptions.

- **Update [now.md](file:///e:/khandal/re.khandal.cc/now.md)**:
  ```bash
  python scripts/workspace_tools.py update-now --focus "Developing auth API"
  ```
  Quickly updates the primary focus and timestamp in `now.md`.

- **Append to [CHANGELOG.md](file:///e:/khandal/re.khandal.cc/CHANGELOG.md)**:
  ```bash
  python scripts/workspace_tools.py add-changelog --section Added --entry "New user profile module"
  ```
  Appends an entry under `[Unreleased]` in the changelog without manual editing.

---

## 💻 2. Command Line & Environment Tools

| Tool | Purpose | Usage Example |
| :--- | :--- | :--- |
| **direnv** | Automatic environment loading | `direnv allow`, `direnv status` |
| **git** | Version control & repository tracking | `git status`, `git add .`, `git commit` |
| **python** | Execution engine for workspace scripts | `python scripts/workspace_tools.py --help` |

---

## 🔌 3. Model & Agent Capabilities

- **Model Routing**: See [model-routing.md](file:///e:/khandal/re.khandal.cc/model-routing.md) for matching tasks to LLM specializations.
- **Agent Skills**: Modular reusable routines stored in [`skills/`](file:///e:/khandal/re.khandal.cc/skills).
- **Execution Workflows**: Step-by-step lifecycles stored in [`workflow/`](file:///e:/khandal/re.khandal.cc/workflow).
