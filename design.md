# Design Specification: Warp-Inspired Agentic Developer Interface & Platform

> **Purpose:** Implementation-ready visual and UX design specification for the `re.khandal.cc` platform (Priyansh Khandal: Reverse Engineer & Malware Analyst) and its agentic developer workspace.
>
> **Core Inspiration:** Interaction patterns, dense technical typography, and visual discipline of modern developer instruments like Warp, adapted into an original identity for reverse engineering and security research without copying proprietary trademarks or branding.
>
> **Live Implementation Sources:** [src/styles/tokens.css](file:///e:/khandal/re.khandal.cc/src/styles/tokens.css), [src/styles/global.css](file:///e:/khandal/re.khandal.cc/src/styles/global.css), [src/styles/dot-grid.css](file:///e:/khandal/re.khandal.cc/src/styles/dot-grid.css), and the component tree under [src/components/](file:///e:/khandal/re.khandal.cc/src/components).

------------------------------------------------------------------------

## 1. Design Direction

### Core Idea

Build a **terminal-first developer workspace and security research platform** that feels like a precision instrument rather than a generic SaaS dashboard.

The interface communicates:

- Fast: Sub-120ms interaction responses and instant visual feedback
- Technical: Raw disassembly, terminal output, and security telemetry presented with typography discipline
- Focused: Zero decorative clutter, zero intrusive marketing widgets, and minimal visual noise
- AI-Native: Deterministic execution engines and autonomous agents embedded directly into the terminal stream
- Dense but Readable: High information density paired with clean whitespace and crisp separators
- Keyboard-First: Global shortcut coverage across sessions, blocks, filters, and actions
- Trustworthy: Concrete artifacts, verifiable PGP keys, reproducible triage benchmarks, and transparent guarantees
- Highly Customizable: Modular layout, configurable prompt metadata, and fine-grained agent steering

The product gives the user the sensation that their local terminal and reverse engineering toolkit have expanded into a unified **agentic security development environment**.

### Core Principle

> **Terminal surface first. Product chrome second.**

Never transform the platform into an administrative dashboard or a generic marketing funnel. The terminal, command blocks, disassembly snippets, agent activity, and code diffs remain the primary content. Navigation, toolbars, and metadata remain visually subordinate.

------------------------------------------------------------------------

# 2. Strict Design Directives: Mandatory Rules and Anti-Patterns

Every component, view, layout, style token, and copy pattern must adhere strictly to the following 29 non-negotiable directives (20 forbidden anti-patterns and 9 mandatory patterns).

## 2.1 Forbidden Patterns (What NOT to Use)

1. **dont use harsh gradients**: Never use aggressive multi-stop gradients, heavy color shifts, or high-contrast chromatic backdrops. Keep surfaces solid or use subtle, low-opacity radial orbs.
2. **dont use lucide icons**: Do not use the generic Lucide icon family. Use custom technical SVG glyphs, Phosphor, or dedicated monospace characters.
3. **dont use pure white background**: Never use pure white (`#FFFFFF`) backgrounds. For light surfaces, use subtle off-white, warm sand, or slate tints. For dark canvases, use balanced slate neutrals (`#121316`).
4. **dont use rainbow coloring**: Forbid multi-color spectrum highlights, multi-colored text gradients, or rainbow accents. Restrain palettes to single-tone state signaling.
5. **dont use 3 feature cards in a row**: Strictly avoid the overused 3-card feature row layout. Use alternating split layouts, horizontal feature timelines, stacked technical modules, or 2-column asymmetric grids.
6. **dont use emojis**: Never use emojis in UI, documentation, status indicators, commit logs, or copy. Use precise technical text labels, typographic chips, or geometric status dots (`●`, `◌`).
7. **dont use liquid glass theme**: Forbid frosted glassmorphism, heavy backdrop-filter blur, glossy reflections, or liquid glass themes. Use opaque, crisp matte surfaces with clean borders.
8. **dont use em dashes**: Never use em dashes (neither unicode em dashes nor double or triple hyphens representing em dashes). Use standard colons, commas, or single hyphens for ranges and parentheticals.
9. **dont use colored left stripe**: Never use colored vertical left borders or stripes on cards, callouts, alerts, or list items. Use subtle full-card border contrast or tinted text chips.
10. **dont use fake testimonials**: Never include fabricated user quotes, fictional executive portraits, or placeholder star ratings. Ground all proof in verifiable GitHub metrics, real research disclosures, and technical benchmarks.
11. **dont use bento grids**: Never use generic modern bento box grid layouts. Use structured, intentional technical interfaces aligned to developer mental models.
12. **dont use terminal windows**: Never use decorative faux macOS terminal chrome windows (with fake red, yellow, and green traffic-light window buttons) in marketing or hero sections. Present real, interactive developer surfaces and live product interfaces.
13. **dont use its not x its y**: Strictly forbid cliché marketing copywriting formulas such as "It is not just a terminal, it is the future of coding" or "It is not a tool, it is your teammate". Use direct, declarative technical statements.
14. **dont use checkmark bullets**: Do not use green checkmarks or checkmark bullet icons for feature lists. Use technical dashes, structured parameter tables, or typographic hierarchies.
15. **dont use 3 pricing tiers**: Avoid the cliché three-column SaaS pricing grid (Free, Pro, Enterprise). Use transparent usage metrics, single-tier developer pricing, or a responsive 2-tier horizontal engagement stack.
16. **dont use soft corner radius**: Never use puffy, pillowy, or large rounded corners (such as 12px to 24px corner radii or pill buttons). Use crisp, sharp, disciplined corner radii (0px to 4px maximum).
17. **dont use purple and black**: Never use the cliché dark mode aesthetic of saturated purple glows on pitch black (`#000000`). Maintain a balanced dark slate or charcoal foundation with calm, technical accents.
18. **dont use sparkle icons**: Never use AI sparkle, starburst, or glitter icons. Present AI as a deterministic, reliable execution engine rather than magic.
19. **dont use animated arrows**: Never use bouncing, floating, or pulsing animated arrows pointing at buttons, inputs, or sections.
20. **dont use neon colors**: Strictly avoid blinding, over-saturated neon greens, electric cyans, or hot magentas.

## 2.2 Mandatory Patterns (What to USE)

1. **use drop shadow**: Implement multi-layered, disciplined drop shadows on elevated panels, dropdown menus, and command palettes to provide clear spatial depth and elevation hierarchy.
2. **use real product demos**: Use interactive, real working product demos, live reproducible terminal sessions, and recorded workflows rather than mock illustrations.
3. **use skeleton loaders**: Implement crisp, rectangular skeleton loaders with subtle pulse animations for all asynchronous loading states.
4. **use radial orbs**: Use soft, low-intensity background radial orbs with low opacity (3% to 6%) to provide gentle atmospheric depth behind technical content without harsh contrast.
5. **use dot grids**: Implement subtle technical dot grid patterns on canvas surfaces to evoke developer workspaces and precision engineering. Ensure a single hardware-accelerated fixed canvas layer to prevent scrolling artifacts.
6. **use tos**: Maintain clear, dedicated Terms of Service documentation with visible navigation and footer links.
7. **use privacy policy**: Maintain a comprehensive, accessible Privacy Policy covering data handling, agent telemetry, zero-tracking commitments, and credential isolation.
8. **use hover animations**: Implement subtle micro-interaction hover animations (such as 120ms border contrast shifts and subtle 1px elevation translations) on interactive buttons, cards, and list rows.
9. **use basic pastel colors**: Utilize calm, basic pastel colors (pastel sky, pastel sage, pastel sand, pastel amber, pastel coral, pastel slate) for status indicators, syntax highlights, and restrained accents. Avoid harsh, neon, or rainbow palettes.

------------------------------------------------------------------------

# 3. Visual Language and Surface System

## 3.1 Overall Aesthetic

Use a balanced dark slate foundation with restrained contrast. Do not use pure pitch black or saturated purple.

Recommended palette foundation implemented in [src/styles/tokens.css](file:///e:/khandal/re.khandal.cc/src/styles/tokens.css):

| Token | Hex Value | Semantic Purpose |
|---|---|---|
| `--bg-canvas` | `#121316` | Application background (balanced slate, never pure black) |
| `--bg-surface` | `#181A1F` | Panels, sidebars, and container baselines |
| `--bg-elevated` | `#20232A` | Cards, popovers, and elevated modal panels |
| `--bg-input` | `#15171C` | Command input fields and form elements |
| `--bg-hover` | `#262A33` | Hover background fill for rows and interactive items |
| `--border-subtle` | `#2B2F38` | Crisp, low-contrast separators and element borders |
| `--border-active` | `#434957` | Active, focused, or selected element borders |
| `--border-focus` | `#9BB7D4` | High-visibility keyboard focus indicators |
| `--text-primary` | `#ECEEF2` | Primary headings and text (never pure `#FFFFFF`) |
| `--text-secondary` | `#A4ABB8` | Body text, descriptions, and secondary metadata |
| `--text-muted` | `#6D7482` | Timestamps, technical footnotes, and subtle chips |
| `--accent-sky` | `#9BB7D4` | Primary interactive accent and informative tags |
| `--accent-sage` | `#94B49F` | Secondary accent, confirmed status, and triage tags |
| `--status-success` | `#8FB996` | Completed task status, verified signatures |
| `--status-warning` | `#DEC08B` | Pending review, advisory flags, and warnings |
| `--status-error` | `#DE8F8F` | Execution failure, vulnerability alert, critical flaw |
| `--status-info` | `#9BB7D4` | Informational status, telemetry notification |

## 3.2 Color Balance Heuristic

**80% Neutral / 15% Secondary UI / 5% Accent.**

Never use multiple saturated accents simultaneously. Over 95% of the visual surface consists of dark slate surfaces, crisp dividers, and high-readability text. Accent pastels exist exclusively to signal state changes, interaction targets, or severity ratings.

------------------------------------------------------------------------

# 4. Typography System and Fluid Scaling

## 4.1 Primary UI Font

Use clean, neutral modern sans-serif typography:

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

## 4.2 Terminal and Code Font

Use an industry-standard monospace font with crisp ligature rendering and unambiguous character distinctions:

```css
font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace;
```

## 4.3 Type Scale and Fluid Responsiveness

Implemented in [src/styles/global.css](file:///e:/khandal/re.khandal.cc/src/styles/global.css) using CSS `clamp()` to guarantee seamless rendering across mobile screens (320px) to wide monitors (1920px):

```css
h1 { font-size: clamp(1.75rem, 1.25rem + 2vw, 2.5rem); }
h2 { font-size: clamp(1.3rem, 1.05rem + 1vw, 1.65rem); margin-bottom: 0.75rem; }
h3 { font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem); margin-bottom: 0.5rem; }
```

| Scale Target | Font Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display / Hero | 32px to 48px | 600 | 1.15 to 1.2 | Page title and terminal hero statements |
| Section Header | 21px to 26px | 600 | 1.25 | Major content and technical section headings |
| Subsection | 17px to 20px | 600 | 1.3 | Module headers and card titles |
| Body Text | 15px | 400 | 1.65 | Research writing, case study narratives, documentation |
| UI Control | 13px to 14px | 500 | 1.4 | Buttons, input fields, navigation items |
| Monospace Code | 13px to 14px | 400 | 1.5 | Terminal command lines, disassembly, code blocks |
| Micro-Label | 11px to 12px | 500 | 1.2 | Status pips, git hashes, tags, and OPSEC codenames |

To protect responsive layouts from horizontal blowout, all headings, paragraphs, list items, and table cells enforce:

```css
overflow-wrap: break-word;
```

------------------------------------------------------------------------

# 5. Layout System and Three-Zone Shell

## 5.1 Application Shell

The desktop workspace follows a structured three-zone mental model:

```text
┌───────────────────────────────────────────────────────────┐
│ Top Chrome / Global Navigation / Status Bar               │
├────────────┬──────────────────────────────┬───────────────┤
│            │                              │               │
│ Session    │                              │ Agent /       │
│ Sidebar    │       Primary Workspace      │ Inspector     │
│ (240px)    │       (Fluid Terminal)       │ (360px opt.)  │
│            │                              │               │
├────────────┴──────────────────────────────┴───────────────┤
│ Command / Agent Input Bar (64px to 80px)                  │
└───────────────────────────────────────────────────────────┘
```

The right-hand inspector panel is collapsible and toggled on demand for tool execution traces, memory graphs, or code diffs.

## 5.2 Desktop Proportions

- Left Session Sidebar: `220px to 260px`
- Main Workspace: Fluid (`min-width: 600px`)
- Right Inspector: `320px to 400px` (collapsible)
- Bottom Command Input: `64px to 80px`
- Max Width Container: `1080px` centered for content and landing pages
- Horizontal Padding: `1.5rem` desktop (`--container-padding`), `1rem` on screens `<= 640px`

------------------------------------------------------------------------

# 6. Navigation Architecture and Mobile Drawer System

## 6.1 Desktop Navigation

The desktop header ([src/components/common/Header.astro](file:///e:/khandal/re.khandal.cc/src/components/common/Header.astro)) remains disciplined and compact:

- Brand Mark: Monospace prompt symbol `>` and platform identifier `priyansh@khandal:~$`
- Live System Pip: Pulsing green status dot with label `available for engagement`
- Primary Navigation Links: `/about`, `/services`, `/work`, `/writing`, `/pricing`, `/security`, `/contact`
- Active State: Subtle border contrast with pastel sky text highlight (`--accent-sky`)
- Primary Action: High-contrast compact button `[ Hire ]` linking to `/hire`

## 6.2 Mobile Navigation Drawer

On mobile viewports (`< 768px`), horizontal links collapse into an accessible slide-out navigation drawer:

- Accessible Hamburger Toggle: Three crisp 2px lines with `aria-label="Toggle navigation menu"` and `aria-expanded="false"`
- Slide-out Panel: Off-canvas navigation sliding from right with 200ms ease curve
- Backdrop Dismiss: Semi-transparent backdrop dismissing drawer on click
- Focus and Keyboard Trap: Pressing Escape closes drawer immediately and restores focus to toggle button
- Integrated Mobile Hire CTA: Prominent direct action button at bottom of mobile menu

------------------------------------------------------------------------

# 7. Top Bar and Header Controls

The top bar serves operational orientation:

```text
[priyansh@khandal:~$]    [re.khandal.cc]    [● online]    [nav links]    [Hire]
```

Avoid:
- Mega menus and dense dropdown trees
- Competing marketing badges or announcement banners
- Decorative brand graphics or illustrative logos
- Unnecessary breadcrumb chains

------------------------------------------------------------------------

# 8. Terminal Workspace and Block Architecture

The terminal surface is organized into discrete, searchable **Blocks**:

```text
┌──────────────────────────────────────────────────────────┐
│ ~/targets/firmware  ·  ghidra-decompile           1.4s   │
├──────────────────────────────────────────────────────────┤
│ $ r2 -A -q -c "pdf @ sym.decrypt_payload" firmware.bin   │
│                                                          │
│ 0x000104a0  push {r4, lr}                                │
│ 0x000104a2  ldr  r3, [0x000104c8] ; [0x20000100]         │
│ 0x000104a4  ldrb r2, [r3]                                │
│ 0x000104a6  eors r2, r1                                  │
│ 0x000104a8  strb r2, [r0]                                │
│                                                          │
│ ● execution completed (0 flaws detected)                 │
└──────────────────────────────────────────────────────────┘
```

Block Properties:
- Visually demarcated by 1px `--border-subtle` and `--bg-surface`
- Individually selectable, copyable, and searchable
- Monospace output formatted without horizontal truncation
- Execution duration and exit status chips in header meta row
- Subtle hover boundary contrast enhancement (`--border-active`)

------------------------------------------------------------------------

# 9. Command Input and Prompt Surface

The command input is the primary driver of the workspace:

```text
┌──────────────────────────────────────────────────────────┐
│ › unpack --format=vmp3 --target=sample.exe --dump-iat    │
│                                                          │
│ [↵ Execute] [⌘K Commands]              x86_64 · ~/samples│
└──────────────────────────────────────────────────────────┘
```

Requirements:
- Syntax highlighting for arguments, flags, and file paths
- Multiline command support with standard shell keybindings (`Ctrl+A`, `Ctrl+E`, `Ctrl+K`)
- Autocomplete completion popup anchored directly below cursor
- Clear running versus completed visual states
- Context chips indicating architecture, target architecture, and working directory

------------------------------------------------------------------------

# 10. AI Agent Surface and Autonomy States

AI integration must feel like an execution coprocessor rather than an anthropomorphic chatbot:

```text
┌──────────────────────────────────────────────────────────┐
│ Agent · Binary Analysis Coprocessor                      │
│                                                          │
│ Discovered custom RC4 keystream derivation in sub_4012A0.│
│                                                          │
│ Execution Plan:                                          │
│  [x] extract S-box initialization array                  │
│  [x] compute cycle period entropy                        │
│  → generate Python decrypter script                      │
│  [ ] test decrypter against encrypted payload            │
│                                                          │
│ [Approve Plan] [Modify Steps] [Abort Execution]          │
└──────────────────────────────────────────────────────────┘
```

## Agent State Model

Every autonomous agent cycle reports one of 7 deterministic states:

```text
queued          Waiting in execution pool
running         Executing tool call or command block
waiting         Awaiting remote edge completion or telemetry
needs approval  Paused awaiting human security sign-off
completed       Task successfully verified with artifacts
failed          Task threw an unrecoverable exception
cancelled       Aborted by operator command
```

------------------------------------------------------------------------

# 11. Agent Approval UX and Guardrails

Actions with potential operational risk or system modifications demand explicit operator confirmation:

```text
Security Boundary Notice:
Agent requests permission to execute:

flashrom -p ch341a_spi -w /tmp/patched_bios.bin

[Allow Once] [Reject Operation] [Inspect Binary Diff]
```

Destructive Commands:
- Commands matching `rm -rf`, raw firmware writes, or cloud resource destruction enforce modal review
- The command string is rendered in high-contrast monospace code with highlighted parameters
- Operator must explicitly press an action button or keyboard shortcut (`Y` / `N`)

------------------------------------------------------------------------

# 12. Integrated Code Review and Inline Diffs

Diffs are presented with clean, split or unified monospace rendering:

```text
┌──────────────────────────────────────────────────────────┐
│ Changes · src/crypto/aes_ni.c · +14 −3                   │
├──────────────────────────────────────────────────────────┤
│ - static void decrypt_block(uint8_t *in, uint8_t *out) { │
│ + static void decrypt_block_aesni(const __m128i *in) {   │
│ +     __m128i block = _mm_loadu_si128(in);               │
│                                                          │
│        [Add Comment] [Accept Diff] [Ask Agent]           │
└──────────────────────────────────────────────────────────┘
```

Review Capabilities:
- Single-click line range selection
- Inline agent steering for security refactoring
- Jump to disassembly or corresponding IDA/Ghidra address
- Direct git commit generation

------------------------------------------------------------------------

# 13. Agent and Session Tabs

Multi-tasking across multiple engagements or triage runs uses **vertical session tabs** in the left sidebar:

```text
ENGAGEMENTS
  ● ransomware-triage
    lockbit-v3 · sandbox-01 · active 3m

  ● firmware-extraction
    iot-gateway · SPI-flash · active 12m

  ◌ rootkit-reversal
    win11-driver · Ghidra · paused
```

Vertical tabs maximize vertical label length without truncating long project names, branch IDs, or target binaries.

------------------------------------------------------------------------

# 14. Cards, Panels, and Geometric Surfaces

## 14.1 Disciplined Corner Radius

**dont use soft corner radius**: Never use puffy, rounded corners (8px to 24px) or circular pill containers. Every geometric element enforces sharp, disciplined radii:

- Micro-chips and status dots: `0px` or `2px` (`--radius-xs`)
- Form inputs and textareas: `3px` (`--radius-sm`)
- Content cards, modals, and code panels: `4px` (`--radius-md`)
- Sharp geometric surfaces: `0px` (`--radius-none`)

## 14.2 Multi-Layered Drop Shadows

**use drop shadow**: Provide spatial elevation without glossy glassmorphism:

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.35);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35);
```

## 14.3 Canvas Atmosphere: Hardware-Accelerated Dot Grid and Radial Orbs

**use dot grids** & **use radial orbs**:
Implemented in [src/components/common/DotGrid.astro](file:///e:/khandal/re.khandal.cc/src/components/common/DotGrid.astro) and [src/styles/dot-grid.css](file:///e:/khandal/re.khandal.cc/src/styles/dot-grid.css):

```css
.dot-grid-canvas-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(
    rgba(164, 171, 184, 0.08) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
  transform: translateZ(0);
}

.ambient-orb {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(760px, 100vw);
  height: 380px;
  background: radial-gradient(
    circle,
    rgba(155, 183, 212, 0.05) 0%,
    rgba(148, 180, 159, 0.03) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}
```

Performance and Scroll Guarantee:
- The dot grid layer uses `position: fixed` and `transform: translateZ(0)` to promote the texture to a dedicated GPU compositing layer.
- Body background gradient is strictly avoided to eliminate double dot grid moiré patterns during scrolling.

------------------------------------------------------------------------

# 15. Buttons and Interactive Controls

## 15.1 Primary Button

High-contrast, compact, sharp corners:

```css
.btn-primary {
  background-color: var(--accent-sky);
  color: #0F1115;
  font-weight: 500;
  border-radius: var(--radius-xs);
  padding: 0.5rem 1rem;
  min-height: 36px;
  border: 1px solid transparent;
  transition: all 120ms ease;
}
.btn-primary:hover {
  background-color: #B4CCDF;
  transform: translateY(-1px);
}
```

## 15.2 Secondary and Ghost Buttons

- Secondary: Background `--bg-elevated`, border `1px solid var(--border-subtle)`, text `--text-primary`
- Ghost: Transparent background, text `--text-secondary`, border `1px solid transparent`. On hover: border `--border-subtle`, background `--bg-hover`
- Destructive: Background `rgba(222, 143, 143, 0.1)`, border `1px solid var(--status-error)`, text `--status-error`

Touch Target Protection:
On mobile devices (`<= 640px`), buttons enforce `min-height: var(--touch-target-min)` (44px).

------------------------------------------------------------------------

# 16. Marketing and Platform Web Direction

The landing page ([src/pages/index.astro](file:///e:/khandal/re.khandal.cc/src/pages/index.astro)) presents technical competence directly through interactive terminal demonstrations:

```text
                        SECURITY CONSULTING & REVERSE ENGINEERING

          Precision Binary Analysis & Malware Triage
          for High-Stakes Systems

          Reverse engineering complex firmware, disassembling advanced malware,
          and conducting deep binary audits from first principles.

          [ Initiate Engagement ]     [ Review Case Studies ]

                  ┌─────────────────────────────────────────┐
                  │ live interactive terminal               │
                  │ sample disassembly trace                │
                  │ authentic security telemetry            │
                  └─────────────────────────────────────────┘
```

Landing Page Directives:
- **use real product demos**: Interactive terminal component with functional command blocks
- **dont use terminal windows**: No decorative macOS faux traffic light buttons (red, yellow, green)
- **dont use animated arrows**: No pulsing or bouncing arrows
- **dont use stock photography**: Technical code snippets, disassembly traces, and geometric diagrams only

------------------------------------------------------------------------

# 17. Product Demonstration and Content Sections

Content sections adhere to structured, linear technical sequences:

## Layout Directives

- **dont use 3 feature cards in a row**: Replaced with horizontal technical stacks or 2-column asymmetric modules
- **dont use bento grids**: Replaced with linear, functional modules
- **dont use fake testimonials**: Replace with real CVE advisories, client engagements, and open-source contributions
- **use tos** and **use privacy policy**: Visible and dedicated links in header, footer, and intake forms

## Technical Content Sequences

1. **Disassembly and Triage**: Static and dynamic binary analysis under IDA Pro, Ghidra, and radare2
2. **Kernel Rootkit Analysis**: Ring 0 driver inspection, SSDT hooking detection, hypervisor-level introspection
3. **Firmware Security**: SPI flash extraction, UART teardown, secure boot validation
4. **Cryptographic Validation**: Custom cipher discovery, ransomware entropy analysis, PRNG flaw exploitation

------------------------------------------------------------------------

# 18. Motion and Micro-Interactions

Motion communicates state transitions and spatial hierarchy, never decoration:

- Micro-interactions (hover, focus): `100ms to 120ms ease`
- Panel slide-ins and drawers: `200ms cubic-bezier(0.16, 1, 0.3, 1)`
- Tab and view transitions: `150ms ease`

## Hover Interactions

**use hover animations**:
- Buttons: 120ms border contrast shift and 1px upward translation
- Cards: Background shift to `--bg-hover` and border illumination to `--border-active`
- Interactive rows: Background tint shift and left border contrast change

## Strictly Avoid

- Bouncing, floating, or looping animations
- Particle canvas backgrounds or starfield simulations
- Parallax scrolling delays
- Transitions that block keyboard navigation or focus acquisition

------------------------------------------------------------------------

# 19. Responsive Architecture and Mobile Optimization

The interface supports three distinct breakpoint categories:

## 19.1 Breakpoint Scale

| Breakpoint | Viewport Width | Layout Behavior |
|---|---|---|
| Desktop | `>= 1024px` | Full three-zone layout, sidebars expanded, multi-column tables |
| Tablet | `768px to 1023px` | Collapsible sidebar, 2-column technical stacks, responsive diffs |
| Mobile | `< 768px` | Slide-out mobile navigation drawer, stacked cards, full-width touch targets |

## 19.2 Mobile Specific Safeguards

1. **Horizontal Overflow Prevention**:
   ```css
   body { overflow-x: hidden; width: 100%; }
   pre { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
   .table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
   ```
2. **iOS Safari Form Zoom Prevention**:
   ```css
   @media (max-width: 768px) {
     input, select, textarea { font-size: 16px !important; }
   }
   ```
3. **Touch Targets**:
   All clickable buttons, navigation anchors, and interactive badges maintain a minimum hit area of `44px x 44px` on mobile (`--touch-target-min: 44px`).

------------------------------------------------------------------------

# 20. Accessibility Standards

The platform enforces WCAG 2.1 AA compliance across all views:

- Contrast Ratios: Minimum `4.5:1` for normal text and `3:1` for large text and UI borders
- Focus Visibility: High-contrast `--border-focus` ring (`#9BB7D4`) with `2px outline-offset`
- Screen Reader Accessibility: All icon-only triggers include `aria-label` or `.sr-only` descriptions
- Semantic Structure: Strictly one `<h1>` per document followed by logical `<h2>`, `<h3>` hierarchy
- Reduced Motion: Respect `prefers-reduced-motion: reduce` by disabling transitions and animations

------------------------------------------------------------------------

# 21. Technical Iconography and Visual Glyphs

- **dont use lucide icons**: Strictly forbid generic Lucide icon packages
- **dont use sparkle icons**: Forbid AI glitter and magic starburst glyphs
- **dont use emojis**: Forbid emoji characters across UI, documentation, and metadata
- Recommended Sources: Phosphor icons, custom technical SVGs, and monospace ASCII/Unicode glyphs (`>`, `●`, `◌`, `[x]`, `→`)

------------------------------------------------------------------------

# 22. Empty States

Empty states provide actionable technical guidance rather than generic illustrations:

```text
[ No active triage sessions ]

Select a binary target or initialize a new sandbox container.

[ ↵ Load Binary ]    [ Launch Sandbox ]
```

------------------------------------------------------------------------

# 23. Loading States and Rectangular Skeletons

**use skeleton loaders**:
Asynchronous data loading displays crisp rectangular skeleton blocks with a subtle 1.5-second opacity pulse:

```css
.skeleton {
  background-color: var(--bg-hover);
  border-radius: var(--radius-xs);
  animation: pulse-skeleton 1.5s ease-in-out infinite;
}
@keyframes pulse-skeleton {
  0% { opacity: 0.6; }
  50% { opacity: 0.3; }
  100% { opacity: 0.6; }
}
```

Avoid circular spinners for structured layout and tabular data.

------------------------------------------------------------------------

# 24. Error States and Actionable Diagnostic Feedback

Errors provide exact execution context, error codes, and recovery steps:

```text
Disassembly Pipeline Error:
radare2 failed to identify function boundaries in target section '.text'.

Exit Code: 127
Diagnostic: Symbol table stripped. Relocations missing.

[ Apply Heuristic Scan ] [ View Raw Dump ] [ Retry ]
```

------------------------------------------------------------------------

# 25. Design Tokens (Direct CSS Mapping)

Implemented in [src/styles/tokens.css](file:///e:/khandal/re.khandal.cc/src/styles/tokens.css):

```css
:root {
  /* Surface and Background Foundations (balanced slate, never pure black) */
  --bg-canvas: #121316;
  --bg-surface: #181A1F;
  --bg-elevated: #20232A;
  --bg-input: #15171C;
  --bg-hover: #262A33;

  /* Borders & Dividers */
  --border-subtle: #2B2F38;
  --border-active: #434957;
  --border-focus: #9BB7D4;

  /* Typography Colors */
  --text-primary: #ECEEF2;
  --text-secondary: #A4ABB8;
  --text-muted: #6D7482;

  /* Restrained Pastel Accents (Single-tone state signaling) */
  --accent-sky: #9BB7D4;
  --accent-sage: #94B49F;
  --status-success: #8FB996;
  --status-warning: #DEC08B;
  --status-error: #DE8F8F;
  --status-info: #9BB7D4;

  /* Sharp Geometric Radii (0px to 4px maximum per design directives) */
  --radius-xs: 2px;
  --radius-sm: 3px;
  --radius-md: 4px;
  --radius-none: 0px;

  /* Disciplined Elevation & Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35);

  /* Typography Stacks */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace;

  /* Layout Spacing & Touch Targets */
  --max-width: 1080px;
  --container-padding: 1.5rem;
  --touch-target-min: 44px;
  --transition-fast: 120ms ease;
}
```

------------------------------------------------------------------------

# 26. Complete Component Inventory

The platform is constructed with modular Astro components adhering strictly to design directives:

## 26.1 Common and Layout Components

- [src/components/common/Header.astro](file:///e:/khandal/re.khandal.cc/src/components/common/Header.astro): Main responsive header with brand mark, status dot, navigation links, and slide-out mobile drawer.
- [src/components/common/Footer.astro](file:///e:/khandal/re.khandal.cc/src/components/common/Footer.astro): Clean 3-column footer with brand statement, navigation lanes, legal links, and security contact desk.
- [src/components/common/DotGrid.astro](file:///e:/khandal/re.khandal.cc/src/components/common/DotGrid.astro): Hardware-accelerated fixed canvas dot matrix layer and centered ambient radial orb.
- [src/components/common/StatusDot.astro](file:///e:/khandal/re.khandal.cc/src/components/common/StatusDot.astro): Geometric status indicator with optional pulse animation.
- [src/components/common/TechBadge.astro](file:///e:/khandal/re.khandal.cc/src/components/common/TechBadge.astro): Monospace technical taxonomy tag.
- [src/layouts/BaseLayout.astro](file:///e:/khandal/re.khandal.cc/src/layouts/BaseLayout.astro): Foundational HTML5 shell with OpenGraph tags, JSON-LD metadata, and font definitions.
- [src/layouts/PageLayout.astro](file:///e:/khandal/re.khandal.cc/src/layouts/PageLayout.astro): Standard content layout with header, dot grid canvas, container, and footer.
- [src/layouts/ProjectLayout.astro](file:///e:/khandal/re.khandal.cc/src/layouts/ProjectLayout.astro): Technical case study layout with executive summary, metadata sidebar, and lead conversion card.
- [src/layouts/LegalLayout.astro](file:///e:/khandal/re.khandal.cc/src/layouts/LegalLayout.astro): Specialized layout for Privacy Policy, Terms of Service, and Cookie Policy featuring revision logs and plain-language summaries.

## 26.2 Home and Presentation Components

- [src/components/home/HeroTerminal.astro](file:///e:/khandal/re.khandal.cc/src/components/home/HeroTerminal.astro): Real interactive terminal simulator showing live command execution, disassembly traces, and engagement CTAs.
- [src/components/home/ServicesStack.astro](file:///e:/khandal/re.khandal.cc/src/components/home/ServicesStack.astro): Stacked technical breakdown of core consulting offerings.
- [src/components/home/EngineeringPrinciples.astro](file:///e:/khandal/re.khandal.cc/src/components/home/EngineeringPrinciples.astro): 4 fundamental operating rules (Memory Safety, First Principles, Determinism, Defense in Depth).
- [src/components/home/SelectedWorks.astro](file:///e:/khandal/re.khandal.cc/src/components/home/SelectedWorks.astro): Selected high-impact reverse engineering projects.
- [src/components/home/ContactSection.astro](file:///e:/khandal/re.khandal.cc/src/components/home/ContactSection.astro): Direct engagement CTA with PGP fingerprint.

## 26.3 Research and Blog Architecture

- [src/components/blog/CommentsSection.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/CommentsSection.astro): Two-tier peer review discussion system with OPSEC anonymity badges, operational codenames, and signed author responses.
- [src/components/blog/SocialShareRail.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/SocialShareRail.astro): Sticky vertical sharing rail with direct copy link, X, LinkedIn, and email triggers.
- [src/components/blog/BlogThumbnail.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/BlogThumbnail.astro): Clean vector thematic thumbnail for research articles.
- [src/components/blog/AuthorCard.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/AuthorCard.astro): Detailed author biography with PGP key and credentials.
- [src/components/blog/LeadConversionCard.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/LeadConversionCard.astro): Contextual engagement card embedded in research posts.
- [src/components/blog/NewsletterSubscribe.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/NewsletterSubscribe.astro): Edge-connected research advisory subscription input.
- [src/components/blog/RelatedPosts.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/RelatedPosts.astro): Tag-scored related research articles.

------------------------------------------------------------------------

# 27. Page-Specific Design Patterns

## 27.1 Pricing Architecture ([src/pages/pricing.astro](file:///e:/khandal/re.khandal.cc/src/pages/pricing.astro))

- **Anti-Pattern Defense**: Strictly adheres to **"dont use 3 pricing tiers"** and **"dont use 3 feature cards in a row"**.
- **Layout Format**: Responsive horizontal stack layout where each engagement tier occupies a structured horizontal row.
- **Engagement Tiers**:
  1. Advisory & Incident Triage Retainer: On-call emergency response, malware triage, and architecture reviews.
  2. Deep-Dive Reverse Engineering Engagement: Milestone-based binary decompilation, firmware auditing, and exploit analysis.
- **Visual Discipline**:
  - Removed nested rate boxes and eliminated redundant target labels.
  - Deliverable guarantees signaled by subtle geometric status pips (`●`).
  - Transparent pricing ranges with clear scope boundaries.

## 27.2 About Page & Solo Identity ([src/pages/about.astro](file:///e:/khandal/re.khandal.cc/src/pages/about.astro))

- **Solo Freelance Identity**: Restructured to showcase Priyansh Khandal as the sole freelance reverse engineer and security consultant.
- **Core RE Disciplines**: All 4 core reverse engineering skill disciplines unified under solo profile:
  1. Binary Disassembly & Decompilation (x86/x64, ARM, MIPS)
  2. Kernel & Hypervisor Rootkit Analysis (Windows Ring 0 / Linux eBPF / Hyper-V)
  3. Cryptographic Primitives & Key Extraction (Custom cipher reversal, ransomware PRNG entropy)
  4. Hardware Firmware & Embedded Extraction (SPI flash dumps, UART/JTAG sniffing, bootloader bypasses)
- **Six Pillars**: Origin Story, Engineering Principles, Solo Profile with vector portrait, Milestones Timeline, Trust/Backers, and Direct Action CTAs.

## 27.3 Peer Review Comments Architecture ([src/components/blog/CommentsSection.astro](file:///e:/khandal/re.khandal.cc/src/components/blog/CommentsSection.astro))

- **Two-Tier Header Layout**: Minimal header row separating peer reviewer metadata and comment timestamp.
- **OPSEC Anonymity**: Replaced public reviewer identities with operational codenames (e.g., `0xVORTEX`, `CIPHER_TRACE`) accompanied by verified peer review badges.
- **Author Response Meta Row**: Cleaned up bracket noise and removed redundant author handles, creating an understated technical response thread.
- **OPSEC Notice**: Explicit callout explaining that discussion participants utilize cryptographic handles to safeguard independent security research.

## 27.4 Client Intake Portal ([src/pages/hire.astro](file:///e:/khandal/re.khandal.cc/src/pages/hire.astro))

- **Unified Intake Design**: Streamlined minimal layout pairing edge form submission with direct encrypted communication channels.
- **PGP and OPSEC Card**: Prominent PGP fingerprint display with direct key download link for clients transmitting sensitive binary artifacts or breach samples.
- **Validation and Resilience**: Edge API route (`/api/hire`) backed by schema validation and rate limiting.

## 27.5 Research & Writing Hub ([src/pages/writing/index.astro](file:///e:/khandal/re.khandal.cc/src/pages/writing/index.astro))

- **12 Pillars of Research Architecture**:
  1. Article Title: Concise and technical
  2. Subheading: Abstract summary of findings
  3. Thematic Vector Thumbnails: Custom SVG graphics
  4. Author Profile: Direct credential attribution
  5. Responsive Content: Fluid typography and protected code blocks
  6. Sticky Social Rail: Direct sharing without intrusive popups
  7. Lead Conversion Cards: Contextual consulting hooks
  8. Tag-Scored Related Posts: Relevant research recommendations
  9. Newsletter Edge Subscription: Instant zero-refresh signup
  10. Date and Reading Time: Technical publication metadata
  11. Topic Tags Explorer: Monospace taxonomy filtering
  12. Interactive Comments: Anonymous peer review discussion
- **Clean Article Listing**: Removed author pills from card previews to maintain focus on technical topics.

## 27.6 Legal and Trust Suite ([src/content/legal/](file:///e:/khandal/re.khandal.cc/src/content/legal))

- **Cookie Policy (`/cookies`)**: Dedicated disclosure documenting zero marketing, third-party, or tracking cookies.
- **Privacy Policy (`/privacy`)**: Plain-language summaries, telemetry disclosure, and credential isolation guarantees.
- **Terms of Service (`/tos`)**: Engagement boundaries, intellectual property protections, and liability limitations.
- **Structured Legal Layout**: Reusable [src/layouts/LegalLayout.astro](file:///e:/khandal/re.khandal.cc/src/layouts/LegalLayout.astro) featuring version history, effective dates, and direct security contact links.

------------------------------------------------------------------------

# 28. Interaction Priorities and Keyboard Hierarchy

Workflows prioritize keyboard efficiency:

```text
1. Keyboard Shortcuts (⌘K palette, Esc dismiss, Enter execute)
2. Command Input and Filter Bars
3. Agent Steering and Plan Approval
4. Session Switching and Tab Navigation
5. Pointer / Mouse Interaction
6. Secondary Settings and Metadata Inspection
```

Every interactive modal, drawer, or dropdown supports Escape dismissal and keyboard focus restoration.

------------------------------------------------------------------------

# 29. UX Invariants and System State Rules

1. **Preserve Operational Context**: Opening a slide-out drawer, inspector panel, or command palette must never wipe terminal buffer history or clear active form inputs.
2. **Explicit State Signaling**: Every background task or worker reports clear status: `queued`, `running`, `completed`, or `failed`.
3. **Inspectable Automation**: Every agent tool execution displays intended command, modified files, and exit code.
4. **Quiet Product Chrome**: Decorative borders and chrome elements never visually outshine code diffs or telemetry data.
5. **Sub-Two-Second Scannability**: A security engineer must understand project status and triage health within two seconds of view entry.

------------------------------------------------------------------------

# 30. Brand Personality and Copywriting Guidelines

The platform voice is:

- Direct: State technical facts without embellishment
- Technical: Use correct domain terminology (e.g., disassembly, PE header, entropy, eBPF)
- Confident: Assert capabilities grounded in concrete project artifacts
- Precise: Avoid ambiguous generalizations
- Honest: No fabricated claims, inflated guarantees, or fake badges

## Strict Copywriting Directives

- **dont use its not x its y**: Strictly forbid formulas such as "It is not just consulting, it is elite defense". State the service directly: "Reverse engineering complex firmware and conducting deep binary audits."
- **dont use em dashes**: Never use em dashes anywhere in marketing, UX microcopy, or technical documentation. Use colons or standard commas.
- **dont use checkmark bullets**: Do not use checkmark bullet points for feature lists. Use technical dashes `-` or geometric symbols.

------------------------------------------------------------------------

# 31. What to Borrow from Warp vs What NOT to Copy

## Strong Interaction Patterns Adopted

1. **Terminal as the Primary Surface**: The terminal block remains the central focus of developer interaction.
2. **Block-Based Input and Output**: Commands and their outputs are bounded into discrete, selectable units.
3. **Vertical Session Navigation**: Multi-tasking organized in clean vertical session stacks.
4. **Agentic Coprocessor Integration**: Agents embedded directly into execution pipelines.
5. **Explicit Approval Gateways**: Security boundaries around high-risk commands.
6. **Integrated Code and Diff Review**: In-line diffing without leaving the workspace context.
7. **Restrained Technical Visuals**: Balanced dark slate neutrals, crisp dividers, and geometric status dots.

## What NOT to Copy

- Warp logos, wordmarks, or proprietary icons
- Warp marketing artwork or proprietary brand illustrations
- Exact page layouts or marketing sales copy
- Proprietary animations or sound effects
- Exact proprietary color palettes creating brand confusion

The objective is to master the **design discipline and interaction efficiency** of modern developer instruments, applied to the distinct domain of reverse engineering and security consulting.

------------------------------------------------------------------------

# 32. Implementation Order and Verification Roadmap

```text
Phase 1: Foundation & Tokens (Complete)
├── tokens.css (surface, borders, typography, pastels)
├── global.css (fluid typography, table wrappers, mobile zoom defense)
├── dot-grid.css & DotGrid.astro (hardware-accelerated canvas)
└── BaseLayout.astro & PageLayout.astro

Phase 2: Common Components & Shell (Complete)
├── Header.astro (desktop navigation + slide-out mobile drawer)
├── Footer.astro (3-column layout + legal links)
├── StatusDot.astro & TechBadge.astro
└── HeroTerminal.astro (interactive terminal blocks)

Phase 3: Page Architecture & Presentation (Complete)
├── /about (solo identity, 4 core RE disciplines, timeline)
├── /pricing (horizontal stack cards, 2 engagement models)
├── /hire (minimal client intake, PGP/OPSEC card, edge API)
├── /services & /work (case studies, project layouts)
└── /security, /privacy, /tos, /cookies (trust suite)

Phase 4: Research Hub & Discussion System (Complete)
├── /writing (12-pillar blog architecture)
├── CommentsSection.astro (two-tier OPSEC codename comments)
├── SocialShareRail.astro & NewsletterSubscribe.astro
└── BlogThumbnail.astro & RelatedPosts.astro

Phase 5: Performance & Mobile Hardening (Complete)
├── Fluid typography via CSS clamp()
├── Mobile touch targets (min 44px)
├── iOS Safari auto-zoom defense (16px inputs)
├── Horizontal overflow prevention
└── Multi-device favicon & PWA icon suite
```

------------------------------------------------------------------------

# 33. Final Design Goal

The finished `re.khandal.cc` platform feels like:

> **An uncompromising, high-precision security workstation where reverse engineering, binary telemetry, and agentic development form a single cohesive surface.**

It does not feel like:
- A generic SaaS marketing template
- An administrative dashboard bloated with metric charts
- A chatbot with an attached command box
- A flashy consumer portfolio relying on novelty animations

The hallmark of the design is **dense technical utility, disciplined visual restraint, and immediate operational credibility**.

------------------------------------------------------------------------

## Reference Sources

- Warp Terminal Architecture: https://www.warp.dev/terminal
- Warp Agentic Systems: https://www.warp.dev/agents
- Warp Appearance & Customization: https://docs.warp.dev/terminal/appearance
- Web Content Accessibility Guidelines (WCAG) 2.1: https://www.w3.org/TR/WCAG21/
- Platform Security Specification: [security.md](file:///e:/khandal/re.khandal.cc/security.md)
- Platform Changelog: [CHANGELOG.md](file:///e:/khandal/re.khandal.cc/CHANGELOG.md)
