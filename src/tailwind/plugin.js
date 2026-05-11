/**
 * Tailwind v3 plugin for Jason's Personal Design System.
 *
 * For Tailwind v4, prefer the CSS-first @theme block in ../tailwind/theme.css.
 * This file exists for projects still on Tailwind v3.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *     plugins: [require('jasons-design-system/tailwind')],
 *   };
 */

const plugin = require('tailwindcss/plugin');

const colors = {
  brand: {
    50: 'var(--brand-50)',
    100: 'var(--brand-100)',
    200: 'var(--brand-200)',
    300: 'var(--brand-300)',
    400: 'var(--brand-400)',
    500: 'var(--brand-500)',
    600: 'var(--brand-600)',
    700: 'var(--brand-700)',
  },
  secondary: {
    50: 'var(--secondary-50)',
    100: 'var(--secondary-100)',
    200: 'var(--secondary-200)',
    300: 'var(--secondary-300)',
    400: 'var(--secondary-400)',
    500: 'var(--secondary-500)',
    600: 'var(--secondary-600)',
    700: 'var(--secondary-700)',
  },
  bg: {
    base:    'var(--bg-base)',
    surface: 'var(--bg-surface)',
    raised:  'var(--bg-raised)',
    overlay: 'var(--bg-overlay)',
    inset:   'var(--bg-inset)',
    input:   'var(--bg-input)',
    code:    'var(--bg-code)',
  },
  border: {
    subtle:  'var(--border-subtle)',
    default: 'var(--border-default)',
    strong:  'var(--border-strong)',
  },
  text: {
    primary:   'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    tertiary:  'var(--text-tertiary)',
    disabled:  'var(--text-disabled)',
    inverse:   'var(--text-inverse)',
  },
  success: 'var(--success-500)',
  warning: 'var(--warning-500)',
  danger:  'var(--danger-500)',
  info:    'var(--info-500)',
};

module.exports = plugin(
  function ({ addBase }) {
    // Base styles can be added here if needed; tokens live in
    // tokens.css and are loaded separately via a <link> or @import.
    addBase({});
  },
  {
    theme: {
      extend: {
        colors,
        fontFamily: {
          sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        },
        borderRadius: {
          xs:   '3px',
          sm:   '5px',
          md:   '8px',
          lg:   '12px',
          xl:   '16px',
          pill: '9999px',
        },
        boxShadow: {
          xs:   'var(--shadow-xs)',
          sm:   'var(--shadow-sm)',
          md:   'var(--shadow-md)',
          lg:   'var(--shadow-lg)',
          glow: 'var(--shadow-glow)',
        },
      },
    },
  }
);
