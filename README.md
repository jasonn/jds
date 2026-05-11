# Jason's Personal Design System

A token-first design system for personal projects. Dark-by-default with a warm-cream light theme, optimized for technical interfaces.

> 📖 **If you're an AI coding agent reading this**: start at [`CLAUDE.md`](./CLAUDE.md), not here.

## What's in the box

- **CSS tokens** — every color, space, radius, font, and motion value as a CSS custom property
- **CSS components** — buttons, inputs, badges, callouts, code blocks, tables, modals, calendar pickers, diff viewer, markdown viewer, app shell, and more
- **Tailwind v4 plugin** — all tokens exposed as native Tailwind utilities (`bg-brand-500`, `text-text-primary`, etc.)
- **Tailwind v3 plugin** — JS-based fallback for older projects
- **React wrappers** — typed components for the most-used patterns
- **Reference page** — `reference/design-system.html`, the full visual showcase

## Quick start

### Vanilla HTML

```html
<!DOCTYPE html>
<html data-theme="dark">
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="./node_modules/jasons-design-system/src/css/tokens.css">
  <link rel="stylesheet" href="./node_modules/jasons-design-system/src/css/index.css">
</head>
<body>
  <button class="btn btn-primary">Get started</button>
</body>
</html>
```

A full starter is in [`examples/vanilla/starter.html`](./examples/vanilla/starter.html).

### Tailwind v4

```css
/* src/styles.css */
@import "tailwindcss";
@import "jasons-design-system/src/css/tokens.css";
@import "jasons-design-system/src/tailwind/theme.css";
@import "jasons-design-system/src/css/index.css";
```

Now every JDS token is a Tailwind utility:

```html
<button class="bg-brand-500 hover:bg-brand-600 text-text-inverse rounded-md px-4 py-2">
  Tailwind, JDS-flavored
</button>
```

### React

```tsx
import 'jasons-design-system/src/css/tokens.css';
import 'jasons-design-system/src/css/index.css';
import { Button, Callout, Badge } from 'jasons-design-system/react';

export default function App() {
  return (
    <>
      <Badge variant="success" dot live>Active</Badge>
      <Button variant="primary">Save changes</Button>
      <Callout variant="tip">Use callouts sparingly.</Callout>
    </>
  );
}
```

A React example with all common components is in [`examples/react/`](./examples/react/).

## Using with Claude Code

This repo is designed to be consumed by AI coding agents.

**For a new project**, paste the contents of [`prompts/new-project.md`](./prompts/new-project.md) into Claude Code as your first message.

**For an existing project**, paste [`prompts/apply-to-existing.md`](./prompts/apply-to-existing.md).

Both prompts tell Claude Code to read [`CLAUDE.md`](./CLAUDE.md), which is the system's rulebook.

## Repo structure

```
jasons-design-system/
├── CLAUDE.md                     ← rules for AI agents (read this first)
├── README.md                     ← this file
├── reference/
│   └── design-system.html        ← visual showcase / source of truth
├── src/
│   ├── css/
│   │   ├── tokens.css            ← all design tokens (variables)
│   │   ├── index.css             ← components, patterns, light overrides
│   │   └── jds.css               ← entry point (imports both)
│   ├── tailwind/
│   │   ├── theme.css             ← Tailwind v4 @theme block
│   │   └── plugin.js             ← Tailwind v3 plugin
│   └── react/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       ├── Callout.tsx
│       ├── Primitives.tsx        ← Kbd, Code, Panel
│       └── index.ts
├── examples/
│   ├── vanilla/
│   │   ├── starter.html
│   │   └── markdown-page.html
│   └── react/
│       ├── App.tsx
│       └── index.html
└── prompts/
    ├── new-project.md            ← paste into Claude Code for greenfield
    └── apply-to-existing.md      ← paste for retrofits
```

## Tweaking the system

The whole palette is in `src/css/tokens.css`. The two most-touched knobs are at the top:

```css
--brand-500: #EC4899;       /* the pink */
--secondary-500: #6366F1;   /* the indigo */
```

Change those and the system rebrands itself.

## License

MIT — see [LICENSE](./LICENSE).

## Credits

Built with [Geist](https://vercel.com/font), [Lucide icons](https://lucide.dev), and a lot of tweaking.
