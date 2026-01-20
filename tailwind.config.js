/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom Typography
      fontFamily: {
        // 'Outfit' for Headlines (Clean, Geometric, Premium)
        heading: ['Outfit', 'sans-serif'],
        // 'Space Grotesk' for Code/Tech terms
        tech: ['Space Grotesk', 'monospace'],
        // Standard sans for body text
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // 2. Custom Spacing (If you need specific layout tweaks)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // 3. Custom Animations (Native Tailwind support)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'shine': 'shine 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '100%': { backgroundPosition: '200% center' }
        }
      }
    },
  },
  plugins: [],
}