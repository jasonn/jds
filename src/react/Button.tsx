import * as React from 'react';

type Variant = 'primary' | 'secondary' | 'indigo' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Show a loading spinner and disable interaction. */
  loading?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary:   'btn btn-primary',
  secondary: 'btn btn-secondary',
  indigo:    'btn btn-indigo',
  danger:    'btn btn-danger',
  ghost:     'btn btn-ghost',
};

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',          // md is default
  lg: 'btn-lg',
};

/**
 * Button — the system's primary action element.
 *
 * Variants:
 *   - primary: brand pink, the default for primary CTAs
 *   - secondary: neutral, for tertiary actions
 *   - indigo: secondary brand color, for parallel CTAs
 *   - danger: destructive actions only
 *   - ghost: minimal, for low-emphasis actions
 *
 * Use one primary per surface. If you need two, the second should be
 * secondary or indigo — never two primaries side by side.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', loading, className, children, disabled, ...rest },
    ref
  ) {
    const classes = [variantClass[variant], sizeClass[size], className]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? (
          <>
            <span className="btn-spinner" aria-hidden="true" />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
