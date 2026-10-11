# System Rules & Guardrails

These immutable guidelines govern all automated and manual workflows within the `re.khandal.cc` workspace.

---

## 🔒 1. Security & Secrets

- **Never commit credentials**: Never hardcode API keys, passwords, or tokens in source code or markdown. All credentials must live exclusively in `.env` (which is ignored by Git).
- **Environment Parity**: Always update `.env.example` when adding a new configuration key.
- **Data Protection**: Do not execute destructive commands (`rm -rf`, `DROP TABLE`, destructive git force pushes) without explicit confirmation.

---

## 📝 2. Documentation & State Integrity

- **Active Tracking**: Keep [now.md](file:///e:/khandal/re.khandal.cc/now.md) up-to-date with the current operational state at the start and end of work blocks.
- **Link Integrity**: All file links in documentation and responses must use valid GitHub/IDE clickable markdown syntax: `[filename](file:///path/to/file)`.
- **Changelog Maintenance**: Update [CHANGELOG.md](file:///e:/khandal/re.khandal.cc/CHANGELOG.md) for every user-facing change or structural addition.

---

## 💻 3. Code Standards & Practices

- **Python Automation**: Scripts placed in `scripts/` must run with zero or minimal external dependencies, have clean CLI `--help` flags, and handle errors gracefully.
- **Preserve Comments & Docstrings**: When editing existing code, never strip comments, type hints, or docstrings unless explicitly requested.
- **Modular Design**: Put reusable capabilities into `skills/` and standard procedures into `workflow/`.

---

## 🤖 4. Agent Operational Directives

- **Check Context First**: Always review [`context/`](file:///e:/khandal/re.khandal.cc/context) and [`memory/`](file:///e:/khandal/re.khandal.cc/memory) before designing new features or proposing architecture changes.
- **Scratchpad Discipline**: Complex reasoning, intermediate math, or multi-step analysis should be logged in [`brain/scratchpad.md`](file:///e:/khandal/re.khandal.cc/brain/scratchpad.md).
- **Decisions Log**: Significant choices with trade-offs must be memorialized in [`brain/decisions.md`](file:///e:/khandal/re.khandal.cc/brain/decisions.md).


