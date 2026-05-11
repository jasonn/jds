import * as React from 'react';

type State = 'default' | 'error' | 'success';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visual state for validation. */
  state?: State;
  /** Optional left-side icon. Pass an SVG element or component. */
  icon?: React.ReactNode;
  /** Optional right-side keyboard hint, e.g. <Kbd>⌘</Kbd><Kbd>K</Kbd>. */
  kbdHint?: React.ReactNode;
}

const stateClass: Record<State, string> = {
  default: '',
  error:   'error',
  success: 'success',
};

/**
 * Input — the system's standard text input.
 *
 * Wraps in `.input-wrap` so optional icon and kbd-hint slots are positioned
 * correctly. Background is `--bg-input`, focus ring uses `--brand-glow`.
 *
 * For multi-line use <Textarea>. For selecting from a list use <Select>.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ state = 'default', icon, kbdHint, className, ...rest }, ref) {
    const inputClasses = ['input', icon ? 'input-with-icon' : '', stateClass[state], className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="input-wrap">
        {icon && <span className="input-icon" aria-hidden="true">{icon}</span>}
        <input ref={ref} className={inputClasses} {...rest} />
        {kbdHint && <span className="input-kbd-hint">{kbdHint}</span>}
      </div>
    );
  }
);
