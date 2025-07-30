// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // ... content y safelist
  theme: {
    extend: {
      colors: { /*... tu paleta oscura ...*/ },
      fontFamily: { /*... tu fuente ...*/ },
      keyframes: {
        'soft-glow': {
          '0%, 100%': { opacity: 0.9, textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' },
          '50%': { opacity: 1, textShadow: '0 0 16px rgba(255, 255, 255, 0.8)' },
        },
        'aurora-border': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'soft-glow': 'soft-glow 2.5s ease-in-out infinite',
        'aurora-border': 'aurora-border 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}