# New project prompt

Copy everything below the line and paste it as your first message to Claude Code in an empty (or freshly-scaffolded) project directory.

Before pasting, make sure `jasons-design-system/` is either:
- Cloned as a sibling directory to your project, OR
- Installed via `npm install file:../jasons-design-system` (or from a real npm registry), OR
- The `src/`, `reference/`, and `CLAUDE.md` files have been copied directly into your project under `design-system/`

---

I'm starting a new project that will use Jason's Personal Design System (JDS). Please follow these instructions exactly.

**Step 1 — Read the rules.**
Open and read `CLAUDE.md` (it should be at the project root or under `design-system/CLAUDE.md`). This file contains the design system's contract — tokens, components, naming conventions, anti-patterns. Internalize it before writing any UI code. If you can't find `CLAUDE.md`, stop and ask me where JDS lives.

**Step 2 — Confirm the stack.**
Tell me what you understood from `CLAUDE.md` in 2-3 sentences, then ask me:
- What framework I'm using (vanilla HTML, Vite + React, Next.js, etc.)
- Whether I want Tailwind v4 integration (default: yes)
- What this project actually does (so you can scaffold useful first pages)

**Step 3 — Set up the project.**
Once I've answered:
1. Install JDS as a dependency (npm/pnpm/etc.) OR symlink the design system into the project, as appropriate for the stack.
2. Set up the CSS entry: import `tokens.css` first, then `index.css`. If Tailwind v4, also import `theme.css` after Tailwind's base.
3. Set `data-theme="dark"` on the `<html>` element. Add a theme toggle button using the snippet from `examples/vanilla/starter.html`.
4. Load the Geist font family from Google Fonts.
5. Build a minimal home page that demonstrates the system is wired up — use `.btn-primary`, `.input`, and a `.callout` so the visual feedback is obvious.

**Step 4 — Build features the JDS way.**
For every UI element after that:
- Use existing JDS classes / React components when one fits.
- Use Tailwind utilities (which are JDS tokens) when composing layouts not covered by a component.
- Never reach for shadcn, MUI, Mantine, Radix, or any other component library — JDS is the only component library this project uses.
- Never hardcode colors, spacings, radii, or font sizes. Always use tokens.
- When something doesn't have a JDS equivalent, open `reference/design-system.html` and look. The catalog is broader than first appears.

**Step 5 — When in doubt.**
Open `reference/design-system.html` and find the closest existing pattern. Copy its HTML structure. Don't improvise visual language; the system has opinions for a reason.

Confirm you understand. Then ask me the questions from Step 2.
