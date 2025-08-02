/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  safelist: [
    {
      pattern: /aos-/,
    },
  ],

  theme: {
    extend: {
      // PALETA DE COLORES (asegúrate de que sea la correcta, dejo la oscura)
      colors: {
        'background': '#000000',
        'surface': '#111827',
        'text-primary': '#f9fafb',
        'text-secondary': '#9ca3af',
        'accent': '#0ea5e9',
        'accent-hover': '#0284c7',
        'border-color': '#374151',
      },

      // TIPOGRAFÍA
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },

      // SOMBRA DE TEXTO
      textShadow: {
        'glow': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
      },

      // KEYFRAMES COMPLETOS
      keyframes: {
        'aurora': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'sparkle-bg': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'soft-glow': {
          '0%, 100%': { opacity: 0.9, textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' },
          '50%': { opacity: 1, textShadow: '0 0 16px rgba(255, 255, 255, 0.8)' },
        },
        // ✨ ANIMACIÓN AÑADIDA PARA LOS ENLACES DEL FOOTER ✨
        'link-sweep': {
          '0%': { backgroundSize: '0% 2px' },
          '100%': { backgroundSize: '100% 2px' },
        },
      },

      // ANIMACIONES COMPLETAS
      animation: {
        'aurora': 'aurora 10s ease-in-out infinite',
        'sparkle-bg': 'sparkle-bg 15s linear infinite',
        'soft-glow': 'soft-glow 2.5s ease-in-out infinite',
        // ✨ ANIMACIÓN AÑADIDA PARA LOS ENLACES DEL FOOTER ✨
        'link-sweep': 'link-sweep 0.3s ease-out forwards',
      },
    },
  },

  // PLUGINS
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}