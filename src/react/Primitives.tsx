import * as React from 'react';

/**
 * Kbd — keyboard key indicator. Use for shortcuts in tooltips, empty
 * states, and command-bar hints.
 *
 *   <Kbd>⌘</Kbd><Kbd>K</Kbd>
 */
export function Kbd({
  size = 'md',
  className,
  children,
  ...rest
}: { size?: 'sm' | 'md' | 'lg' } & React.HTMLAttributes<HTMLSpanElement>) {
  const classes = ['kbd', size === 'lg' ? 'kbd-lg' : size === 'sm' ? 'kbd-sm' : '', className]
    .filter(Boolean)
    .join(' ');
  return <span className={classes} {...rest}>{children}</span>;
}

/**
 * Code — inline code in prose.
 *
 *   To rotate your token, run <Code>jds auth rotate</Code>.
 */
export function Code({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  const classes = ['code-inline', className].filter(Boolean).join(' ');
  return <span className={classes} {...rest}>{children}</span>;
}

/**
 * Panel — surface card. The basic container for grouping related content.
 *
 *   <Panel>
 *     <PanelHeader title="Recent activity" sub="Last 7 days" />
 *     ...content...
 *   </Panel>
 */
export function Panel({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const classes = ['panel', className].filter(Boolean).join(' ');
  return <div className={classes} {...rest}>{children}</div>;
}

export function PanelHeader({
  title,
  sub,
  className,
  children,
  ...rest
}: {
  title: React.ReactNode;
  sub?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const classes = ['panel-header', className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      <span className="panel-title">{title}</span>
      {sub && <span className="panel-sub">{sub}</span>}
      {children}
    </div>
  );
}
