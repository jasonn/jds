import * as React from 'react';

type Variant = 'neutral' | 'success' | 'info' | 'warning' | 'danger';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  /** Show a status dot. Set `live` for a pulsing animation. */
  dot?: boolean;
  live?: boolean;
}

const variantClass: Record<Variant, string> = {
  neutral: 'badge badge-neutral',
  success: 'badge badge-success',
  info:    'badge badge-info',
  warning: 'badge badge-warning',
  danger:  'badge badge-danger',
};

/**
 * Badge — small inline label for status, tags, and counts.
 *
 * Use `dot` for status indicators. `live` adds a pulse animation,
 * useful for "Active" / "Running" states. Combine with text:
 *
 *   <Badge variant="success" dot live>Active</Badge>
 */
export function Badge({
  variant = 'neutral',
  dot,
  live,
  className,
  children,
  ...rest
}: BadgeProps) {
  const classes = [variantClass[variant], live ? 'live' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {dot && <span className="badge-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
