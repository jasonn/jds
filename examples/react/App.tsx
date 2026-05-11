/**
 * Minimal React example using JDS components.
 *
 * This file assumes a Vite + React + TypeScript scaffold. To run:
 *
 *   npm create vite@latest my-app -- --template react-ts
 *   cd my-app
 *   npm install
 *   # Then copy this file to src/App.tsx and update the imports below
 *   # to match how you've installed JDS in your project.
 */

import { useState } from 'react';
import { Button, Input, Badge, Callout, Code, Kbd, Panel, PanelHeader } from '../../src/react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [name, setName] = useState('');

  // Sync theme to <html> attribute. In a real app, persist to localStorage.
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme;
  }

  return (
    <div className="shell">
      <header className="hero">
        <div className="hero-tag">
          <span className="hero-tag-pill">REACT EXAMPLE</span>
          <span>JDS components in a typed component tree</span>
        </div>
        <h1 className="hero-title">
          A starter for<br />
          <em>typed components.</em>
        </h1>
        <p className="hero-lead">
          The CSS tokens drive the visual language. React wrappers bake the variants and a11y in.
          Mix and match freely — every React component is a thin layer over the same CSS classes.
        </p>
        <Button variant="secondary" onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}>
          Toggle theme · currently {theme}
        </Button>
      </header>

      <section className="section">
        <p className="section-eyebrow">Forms</p>
        <h2 className="section-title">Components in action</h2>

        <Panel style={{ marginBottom: 'var(--s-4)' }}>
          <PanelHeader title="Quick form" sub="Inputs · buttons · keys" />
          <div className="form">
            <div className="field">
              <label className="label" htmlFor="hello-name">Your name</label>
              <Input
                id="hello-name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Type something…"
                kbdHint={<><Kbd>⌘</Kbd><Kbd>K</Kbd></>}
              />
              {name && (
                <span className="field-help">Hello, {name}.</span>
              )}
            </div>
            <div className="row" style={{ justifyContent: 'flex-end', gap: 'var(--s-2)' }}>
              <Button variant="secondary" onClick={() => setName('')}>Cancel</Button>
              <Button variant="primary">Save</Button>
            </div>
          </div>
        </Panel>

        <Panel style={{ marginBottom: 'var(--s-4)' }}>
          <PanelHeader title="Status" sub="Badges and callouts" />
          <div className="row" style={{ gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
            <Badge variant="success" dot live>Active</Badge>
            <Badge variant="info" dot>Building</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="danger" dot>Failed</Badge>
            <Badge variant="neutral">v0.1.0</Badge>
          </div>

          <Callout variant="tip">
            <p>
              You can run <Code>npm run dev</Code> to see live changes. Edit{' '}
              <Code>src/App.tsx</Code> and the page reloads.
            </p>
          </Callout>
        </Panel>
      </section>
    </div>
  );
}
