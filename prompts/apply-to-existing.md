# Apply-to-existing-project prompt

Copy everything below the line and paste it as your first message to Claude Code in the root of an existing project that you want to convert to use Jason's Personal Design System (JDS).

Before pasting, make sure JDS is accessible — either installed via npm, cloned as a sibling directory, or copied into the project under `design-system/`.

This is a multi-step process. Do not try to do it all at once. Working incrementally is part of the instructions.

---

I want to apply Jason's Personal Design System (JDS) to this existing project. Do not try to do everything at once. Follow this process in order, pausing at each checkpoint for me to review.

**Step 1 — Read the rules.**
Open and read `CLAUDE.md`. This is the design system's contract. If you can't find it, stop and ask me where JDS lives.

**Step 2 — Inventory the existing project.**
Without changing anything yet, scan the project and produce a short report:
- What framework is in use (Next.js, Vite, Remix, plain HTML, etc.)
- What CSS approach is in use (Tailwind, CSS Modules, styled-components, plain CSS, etc.)
- Every unique color value referenced in the codebase (search for `#`, `rgb(`, `hsl(`, color names)
- Every unique spacing value (margin / padding)
- Every unique font-size and font-weight
- What component library is currently in use, if any (shadcn, MUI, Mantine, Radix, etc.)
- A list of distinct UI patterns you can identify (buttons, forms, cards, modals, navigation, etc.)

Present this as a single report. Don't write any code yet.

**Step 3 — Propose a mapping.**
Based on the inventory, propose a token-by-token mapping from the existing styles to JDS tokens:
- "The existing `#1a1d2b` is the page background → maps to `--bg-base`"
- "The existing `#22c55e` is success state → maps to `--success-500`"
- "The existing 18px button text → maps to `--text-md`"
- etc.

Where the existing project has values that don't map cleanly to a JDS token, flag them as **gaps** — list them separately and ask me whether to (a) snap to the nearest JDS token, (b) add a new token to JDS, or (c) keep the value as a project-local exception.

For component libraries currently in use, list each component that will need to be replaced and propose its JDS equivalent. If no JDS equivalent exists, flag it.

Pause for my review.

**Step 4 — Install JDS.**
Once I've approved the mapping:
1. Install JDS as a dependency (or copy it in, as appropriate).
2. Add the CSS imports: `tokens.css` first, then `index.css`. If Tailwind v4 is in use, also add `theme.css`.
3. Set `data-theme` on the `<html>` element (default `dark` unless I say otherwise).
4. Load Geist + Geist Mono from Google Fonts if not already loaded.

Don't remove anything from the existing project yet. JDS should be loaded alongside the existing styles.

**Step 5 — Migrate incrementally, in this order:**
1. **Page-level surfaces** — body background, default text color. The page should feel different after this single change.
2. **Cards / panels** — replace existing card backgrounds and borders with `.panel` or JDS surface tokens.
3. **Buttons** — replace every button with `.btn` variants. Match each existing button to the closest JDS variant (primary, secondary, indigo, danger, ghost).
4. **Inputs and forms** — `.input`, `.select`, `.textarea`, `.label`, `.field`.
5. **Typography** — apply heading scale, body line-height, mono usage.
6. **Status indicators** — badges, callouts, alerts.
7. **Everything else** — navigation, modals, tables, etc.

After each step, pause and let me see the result before moving on.

**Step 6 — Remove the old.**
Once the entire project is using JDS, identify and delete:
- Old design tokens / variables that nothing references
- Old component-library imports
- Project-local utility classes that JDS now covers

Show me the diff before deleting.

**Important constraints throughout:**
- Never hardcode a color, spacing, radius, or font-size that JDS has a token for.
- Never reach for shadcn/MUI/Mantine/Radix during this migration — the goal is to *remove* those, not augment them.
- Sentence case for all UI text (rewrite "Save Changes" → "Save changes").
- Stop at font-weight 600 (rewrite any 700/800/900 down to 600).
- Flag JDS gaps as comments: `/* JDS-GAP: tooltip arrow caret */` rather than reaching outside the system.

Confirm you understand. Then start Step 2 (the inventory).
