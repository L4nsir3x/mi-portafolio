import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 👈 IMPORTANTE: usar 'class' en lugar de selector
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'brand-dark': '#0f172a',
        'brand-light': '#f8fafc',
      },
    },
  },
  plugins: [],
}
export default config