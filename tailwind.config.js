/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-teal': '#2dd4bf',
        'neon-cyan': '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 211, 238, 0.25)',
        card: '0 12px 30px rgba(15, 23, 42, 0.6)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

