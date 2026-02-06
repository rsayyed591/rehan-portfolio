/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'Fira Code', 'SF Mono', 'Consolas', 'monospace'],
        heading: ['Satoshi', 'system-ui', 'sans-serif'],
      },

      colors: {
        // Theme-aware colors using CSS variables
        theme: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        'text-theme': {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        border: 'var(--border)',
      },

      boxShadow: {
        theme: '0 4px 6px -1px var(--shadow), 0 2px 4px -2px var(--shadow)',
        'theme-lg': '0 10px 15px -3px var(--shadow), 0 4px 6px -4px var(--shadow)',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'shine': 'shine 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '100%': { backgroundPosition: '200% center' }
        }
      },

      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },

      backdropBlur: {
        xs: '2px',
      },

      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}