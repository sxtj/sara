import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F2', // soft cream
        foreground: '#1E1E1E', // charcoal
        muted: {
          DEFAULT: '#EDE9E3',
          foreground: '#6B6B6B',
        },
        accent: {
          DEFAULT: '#B8A99A', // muted taupe
          foreground: '#1E1E1E',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1E1E1E',
        },
        border: '#E8E2DA',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)'],
        display: ['var(--font-playfair)'],
      },
      borderRadius: {
        lg: '14px',
        md: '10px',
        sm: '8px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 600ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config

