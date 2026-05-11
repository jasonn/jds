# Jason's Personal Design System (JDS) — agent guide

This file is for AI coding agents (Claude Code, Cursor, etc.) working in a project that uses JDS. Read it before writing UI code in this repo.

## What JDS is

JDS is a token-first design system for personal projects. It's dark-by-default with a warm-cream light theme, optimized for technical interfaces — dashboards, consoles, docs, command bars. Keyboard-first, prose-friendly, calm at 2am.

**Philosophy in one line:** use the tokens, compose the components, never hardcode colors.

The full visual reference lives at `reference/design-system.html` — open it in a browser whenever you need to see what a component looks like or find one you don't know about. It is the source of truth.

## Three ways to consume JDS

Projects can use JDS in any combination of:

1. **Plain CSS** — `<link rel="stylesheet" href=".../jds.css">`. All components work as classes (`.btn`, `.input`, `.callout`, etc.).
2. **Tailwind v4** — import `tailwind/theme.css` after Tailwind's base. Every token becomes a utility class (`bg-brand-500`, `text-text-primary`, `border-border-subtle`, `font-mono`, etc.).
3. **React** — `import { Button, Callout, Badge } from 'jasons-design-system/react'`. Wrappers that bake the variants and a11y in.

When you're unsure which to reach for, prefer the path of least resistance: use the **React component** if one exists; otherwise use the **plain CSS class**; only use raw Tailwind utilities when composing a layout that no component covers.

## Core rules — always

These are not stylistic preferences. They are the system's contract. Breaking them produces output that doesn't feel like JDS.

1. **Use tokens, not hex values.** Every color comes from `--brand-500`, `--text-primary`, `--bg-surface`, etc. If you write `#FF00FF` anywhere in a component, something is wrong — either the token exists and you missed it, or you should propose adding a new token to the system rather than hardcoding.
2. **Sentence case for all UI copy.** Never Title Case, never ALL CAPS — except where the system explicitly does (mono-uppercase eyebrows, badge labels, table headers). Buttons read "Save changes", not "Save Changes". Section titles read "Color", not "COLOR".
3. **Font weights stop at 600.** The system uses 400 (body), 500 (medium emphasis, button text, headings ≤ h4), and 600 (h1-h3, strong emphasis). Never 700/800/900 — it looks heavy and breaks the tone.
4. **Spacing comes from the `--s-*` scale.** Don't write `margin: 13px` — use `var(--s-3)` (which is 12px) or `var(--s-4)` (16px). The scale is calibrated; ad-hoc values break vertical rhythm.
5. **Radius is one of the named values.** `--radius-xs` (3px), `--radius-sm` (5px), `--radius-md` (8px, the default), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-pill` (9999px). No `border-radius: 7px`.
6. **Pink leads, indigo supports.** Brand pink (`--brand-500`) is for primary actions and brand surfaces. Indigo (`--secondary-500`) is for secondary actions, charts, and dual-color moments. Don't use indigo where pink belongs.
7. **One primary action per surface.** If you need two CTAs, the second is `secondary` or `indigo`, never another `primary`.

## Token reference

Tokens live in `src/css/tokens.css`. Grouped by purpose:

### Brand
| Token | Use |
|---|---|
| `--brand-500` | Primary actions, links, focus rings |
| `--brand-600` | Hover state for primary actions |
| `--brand-glow` | RGB tuple for `rgba()` glows around brand elements |
| `--secondary-500` | Secondary actions, charts, parallel CTAs |
| `--secondary-600` | Hover state for secondary actions |

### Surfaces
| Token | Use |
|---|---|
| `--bg-base` | Page background |
| `--bg-surface` | Card surfaces, panels |
| `--bg-raised` | Modals, dropdowns, max lift |
| `--bg-overlay` | Hover states, selected rows, chips |
| `--bg-inset` | Console / terminal |
| `--bg-input` | Form fields (lighter than overlay in light mode) |
| `--bg-code` | Code blocks, diffs |
| `--bg-mute` | Subtle hover, very low-emphasis fills |

### Text
| Token | Use |
|---|---|
| `--text-primary` | Body copy, headings |
| `--text-secondary` | Subdued prose, secondary metadata |
| `--text-tertiary` | Hints, placeholders, captions |
| `--text-disabled` | Disabled state |
| `--text-inverse` | Text on solid brand backgrounds |

### Borders
| Token | Use |
|---|---|
| `--border-subtle` | Default panel borders, dividers |
| `--border-default` | Inputs, prominent borders |
| `--border-strong` | Emphasized borders, focus outlines |

### Status (semantic)
| Token | Use |
|---|---|
| `--success-500` | Confirmation, "running", "active" |
| `--warning-500` | Pending review, attention needed |
| `--danger-500` | Errors, destructive actions |
| `--info-500` | Informational, "in progress" |

Each status color has a matching `*-bg` token for tinted backgrounds (`--success-bg`, etc.).

### Chart palette (categorical)
`--chart-1` … `--chart-5` — purpose-neutral colors for data visualization where status colors don't apply. Define semantic aliases in your project (e.g. `--chart-revenue: var(--chart-1)`) rather than referencing the numbered tokens directly in components.

### Type scale
`--text-xs` (12) · `--text-sm` (13) · `--text-base` (14) · `--text-md` (15) · `--text-lg` (17) · `--text-xl` (20) · `--text-2xl` (24) · `--text-3xl` (30) · `--text-4xl` (40) · `--text-display` (56)

### Spacing
`--s-1` (4) · `--s-2` (8) · `--s-3` (12) · `--s-4` (16) · `--s-5` (20) · `--s-6` (24) · `--s-7` (32) · `--s-8` (40) · `--s-9` (56) · `--s-10` (72) · `--s-11` (96) · `--s-12` (128)

### Fonts
`--font-sans` is Geist; `--font-mono` is Geist Mono. Mono is reserved for code, command keys, metadata labels (uppercase eyebrows, table headers), and version strings. Don't use mono for body prose.

## Component inventory

When you need a component, check this catalog first. If something close exists, use it. If nothing covers the use case, compose from primitives — don't reach for an outside UI library.

| Class | Purpose | Where in reference |
|---|---|---|
| `.btn` + `.btn-{primary,secondary,indigo,danger,ghost}` | Buttons | Section 05 |
| `.input` / `.select` / `.textarea` | Form fields | Section 06, 11 |
| `.label` / `.field` / `.field-help` | Form structure | Section 11 |
| `.checkbox` / `.radio` / `.switch` | Toggles | Section 11 |
| `.kbd` / `.kbd-lg` | Keyboard keys | Section 07 |
| `.badge` + `.badge-{neutral,success,info,warning,danger}` | Status badges | Section 08 |
| `.modal` / `.toast` / `.menu` | Overlays | Section 09 |
| `.tab` / `.segmented` | Wayfinding | Section 10 |
| `.avatar` / `.avatar-group` | User chips | Section 12 |
| `.banner` / `.empty-state` | System feedback | Section 13, 19 |
| `.calendar` / `.date-trigger` / `.time-input` | Date & time | Section 15 |
| `.uploader` | File upload | Section 16 |
| `.spinner` (+ `.spinner-sm` / `.spinner-lg` / `.indigo` / `.muted`) | Loading spinner | Section "Loading states" |
| `.progress` + `.progress-bar` (+ `.indigo` / `.success` / `.indeterminate`) | Determinate / indeterminate progress | Section "Loading states" |
| `.app-bar` + `.app-bar-inner` / `-brand` / `-nav` / `-link` / `-actions` | Horizontal top nav (alternative to `.nav-rail` for few-route apps) | Section "App shell" |
| `.code-block` / `.code-inline` / `.code-cmd` / `.code-secret` | Code surfaces | Section 17 |
| `.diff` / `.diff-split` | Diff viewer | Section 18 |
| `.markdown` + `.callout-{note,tip,important,warning,caution}` | Markdown content | Section 25 |
| `.nav-rail` + `.rail-*` | App shell | Section 24 |
| `.panel` / `.panel-header` | Card surface | Throughout |

For any of these, the canonical example is in `reference/design-system.html` — open it and copy the structure rather than improvising.

## Patterns — composition rules

Higher-level patterns that combine multiple components:

- **App shell** — `.nav-rail` on the left, content area on the right. Active state uses brand pink. Use this as the chrome for every full-page application.
- **Markdown viewer** — wrap parsed HTML in `<article class="markdown">`. Add a sticky TOC with `.markdown-toc` if the doc is long enough to need one. The whole pattern is in section 25 of the reference.
- **Project cards** — `.site-card-grid` of `.site-card` for at-a-glance project dashboards. Three vital stats max — more than that and use the table pattern instead.
- **Projects table** — `.table-wrap` with hover rows when density matters more than scannability.
- **Console / log output** — `.console` for any terminal-style streaming output. Uses `--bg-inset` (the deepest surface).

## What to do when something is missing

If the design needs a component that doesn't exist in JDS:

1. **First** — check the reference again. The system has 25 sections; you may have missed one.
2. **Then** — compose from existing primitives. Most "new" needs are panels + buttons + badges arranged differently.
3. **Only if neither works** — extend the system. Add a new component file under `src/css/` (or extend `index.css`) using existing tokens. Document the new class in this file. Do not reach for `shadcn`, `headlessui`, `radix`, or any other component library — they will fight the visual language.

If the design needs a new color: propose adding a token, don't hardcode. New token names follow the same convention (`--purpose-shade`).

## Anti-patterns — never do these

- ❌ `style="color: #fafafa"` — use `text-text-primary` or `var(--text-primary)`.
- ❌ Title Case button labels (`"Save Changes"`) — use sentence case (`"Save changes"`).
- ❌ `font-weight: 700` — stop at 600.
- ❌ `border-radius: 6px` — use `--radius-sm` (5) or `--radius-md` (8).
- ❌ Adding another component library (shadcn, MUI, Mantine) — JDS is the library.
- ❌ Two primary buttons side by side — one primary, the other secondary or indigo.
- ❌ Emoji in UI chrome — use Lucide icons (the system uses Lucide everywhere).
- ❌ Animation longer than 240ms for UI transitions — use `--dur-fast` (120ms) or `--dur-base` (180ms).
- ❌ Mono font for body prose — mono is for code, keys, and metadata labels only.

## Project setup checklist

When applying JDS to a new project, in order:

1. Install: `npm install jasons-design-system` (or copy `src/` into the project).
2. Import tokens first, then components: `@import "jasons-design-system/css/tokens.css"; @import "jasons-design-system/css/index.css";`.
3. If using Tailwind v4: also `@import "jasons-design-system/tailwind/theme.css"` after Tailwind's own import.
4. Add `data-theme="dark"` (or `light`) to the `<html>` element. Default is dark.
5. Add a theme toggle if relevant — see `examples/vanilla/starter.html` for the 8-line script.
6. Build features using the catalog above. When in doubt, open `reference/design-system.html` and copy.

## When converting an existing project

In order:
1. Inventory the project's existing CSS — find every color, every spacing value, every component pattern.
2. Map each to the closest JDS token. Most colors will collapse to 8-10 tokens.
3. Replace surfaces incrementally: page background → cards → buttons → inputs → typography → everything else. Don't try to do everything in one pass.
4. Flag anything that has no JDS equivalent in a comment (`/* JDS-GAP: rotating callout */`) so it can be reviewed.
5. Delete the old design tokens once nothing references them.

The goal is **not** pixel-perfect parity with the old design. The goal is to bring the project under the JDS umbrella, which means accepting JDS's opinions (sentence case, weight ceiling, radius scale) even where the old design did things differently.
