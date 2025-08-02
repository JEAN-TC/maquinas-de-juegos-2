/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [{ pattern: /aos-/ }],
  theme: {
    extend: {
      colors: { /* Tu paleta oscura no cambia */ },
      fontFamily: { 'sans': ['Inter', ...defaultTheme.fontFamily.sans] },
      textShadow: { // Nueva sección para el plugin
        'glow': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
      },
      keyframes: {
        'aurora': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'sparkle-bg': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {
        'aurora': 'aurora 10s ease-in-out infinite', // Nueva
        'sparkle-bg': 'sparkle-bg 15s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Plugin añadido
  ],
}