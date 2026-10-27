# CLAUDE.md - AI Operating Directives

This document provides instructions, behavioral guidelines, and operational procedures for interacting with the `khandal.xyz` workspace.

---

## 🧭 Core Principles

1. **Verify State First**: Check active routes, component layouts, and data schemas before making changes.
2. **Context-Driven Execution**: Reference [src/styles/tokens.css](file:///d:/khandal/khandal.xyz/src/styles/tokens.css) and component structures to preserve design consistency.
3. **Atomic Changes**: Keep edits focused, clean, and tested. Always run `npm run check` and `npm run build`.
4. **Hyperlink Standards**: Always provide clickable markdown links with `file://` scheme to referenced files.

---

## 🛠️ Common Commands

```bash
# Start local development server
npm run dev

# Run static production build (compiles to dist/)
npm run build

# Run TypeScript and Astro template type-checking
npm run check

# Preview local production build
npm run preview
```

---

## 📐 Coding & Modification Workflow

1. **Build Discipline**: Keep bundle lean; avoid bloated assets or unbacked memory/timer leaks.
2. **Type Safety**: Maintain schema alignment across `src/data/*.ts` and Markdown files in `src/data/*/`.
3. **Responsive Verification**: Ensure all UI elements support standard mobile breakpoints (`<640px` and `<960px`).
