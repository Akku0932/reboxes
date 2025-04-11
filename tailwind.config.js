/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dark-green': 'var(--color-dark-green)',
        green: 'var(--color-green)',
        'light-green': 'var(--color-light-green)',
        brown: 'var(--color-brown)',
        sand: 'var(--color-sand)',
        clay: 'var(--color-clay)',
        white: 'var(--color-white)',
        'off-white': 'var(--color-off-white)',
        'light-gray': 'var(--color-light-gray)',
        gray: 'var(--color-gray)',
        'dark-gray': 'var(--color-dark-gray)',
        black: 'var(--color-black)',
        coral: 'var(--color-coral)',
        aqua: 'var(--color-aqua)',
        yellow: 'var(--color-yellow)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} 