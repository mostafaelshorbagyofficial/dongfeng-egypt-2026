/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dongfeng: {
          red: '#E60012',
          'red-dark': '#B8000E',
          'red-glow': 'rgba(230, 0, 18, 0.15)',
          black: '#08090A',
          dark: '#0E1013',
          'dark-card': '#14171C',
          'dark-border': '#222730',
          'dark-muted': '#1A1E24',
          gray: '#8E95A2',
          silver: '#C5CAD3',
          light: '#F4F6F9',
        },
        promedia: {
          primary: '#E60012',
          dark: '#222B38',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Sans Arabic"', '"Cairo"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
