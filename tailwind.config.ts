import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f1a',
        'bg-elevated': '#111827',
        fg: '#f1f5f9',
        'fg-muted': '#94a3b8',
        accent: '#22d3ee',
        'accent-dim': 'rgba(34, 211, 238, 0.15)',
        'card-bg': 'rgba(17, 24, 39, 0.7)',
        'card-border': 'rgba(148, 163, 184, 0.1)',
        'glass-bg': 'rgba(15, 23, 42, 0.55)',
        'glass-border': 'rgba(148, 163, 184, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
        'glow-sm': '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
        'accent': '0 4px 24px -4px rgb(34 211 238)',
        'accent-lg': '0 8px 32px -4px rgb(34 211 238)',
      },
      borderRadius: {
        'xl': '16px',
        'lg': '10px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'spring': '300ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139, 92, 246, 0.1), transparent), linear-gradient(180deg, #0a0f1a 0%, #050810 100%)',
        'grid-pattern': 'linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
};

export default config;