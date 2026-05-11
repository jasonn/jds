import * as React from 'react';

type Variant = 'note' | 'tip' | 'important' | 'warning' | 'caution';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  /** Override the default title (auto-derived from variant). */
  title?: React.ReactNode;
}

const variantClass: Record<Variant, string> = {
  note:      'callout callout-note',
  tip:       'callout callout-tip',
  important: 'callout callout-important',
  warning:   'callout callout-warning',
  caution:   'callout callout-caution',
};

const defaultTitle: Record<Variant, string> = {
  note:      'Note',
  tip:       'Tip',
  important: 'Important',
  warning:   'Warning',
  caution:   'Caution',
};

const Icon = ({ variant }: { variant: Variant }) => {
  const props = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (variant) {
    case 'note':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    case 'tip':
      return (
        <svg {...props}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case 'important':
      return (
        <svg {...props}>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...props}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      );
    case 'caution':
      return (
        <svg {...props}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
};

/**
 * Callout — admonition box for emphasizing prose content.
 *
 * Use sparingly. Three callouts in a row become wallpaper; each one
 * after that is less impactful than the last. One per section is plenty.
 *
 * Variants map to status colors:
 *   - note: info blue, neutral context
 *   - tip: success green, helpful advice
 *   - important: brand pink, requires reader attention
 *   - warning: amber, behavior changes or gotchas
 *   - caution: red, risk of data loss or security
 */
export function Callout({
  variant = 'note',
  title,
  className,
  children,
  ...rest
}: CalloutProps) {
  const classes = [variantClass[variant], className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      <div className="callout-title">
        <Icon variant={variant} />
        {title ?? defaultTitle[variant]}
      </div>
      {children}
    </div>
  );
}
