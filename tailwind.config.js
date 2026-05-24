/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b0d10',
          800: '#13161b',
          700: '#1c2026',
          600: '#262b33',
          500: '#3a414c',
          400: '#5b6573',
          300: '#8b95a3',
          200: '#c3cad4',
          100: '#e7ebf0',
        },
        accent: {
          DEFAULT: '#6ee7b7',
          strong: '#10b981',
          soft: '#a7f3d0',
        },
        danger: '#ef4444',
        warn: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
