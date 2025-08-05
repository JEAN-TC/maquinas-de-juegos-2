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
      // --- PALETA DE COLORES (MODO OSCURO) ---
      colors: {
        'background': '#000000',
        'surface': '#111827',
        'text-primary': '#f9fafb',
        'text-secondary': '#9ca3af',
        'accent': '#0ea5e9',
        'accent-hover': '#0284c7',
        'border-color': '#374151',
      },

      // --- TIPOGRAFÍA ---
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },

      // --- SOMBRA DE TEXTO (para el plugin tailwindcss-textshadow) ---
      textShadow: {
        'glow': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
      },

      // --- DEFINICIONES DE ANIMACIONES (KEYFRAMES) ---
      keyframes: {
        // Para el borde animado del Navbar y otros elementos
        'aurora': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Para el brillo pulsante del texto
        'soft-glow': {
          '0%, 100%': { opacity: 0.9, textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' },
          '50%': { opacity: 1, textShadow: '0 0 16px rgba(255, 255, 255, 0.8)' },
        },
        // Para el fondo de estrellas del título
        'sparkle-bg': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        // Para la línea animada debajo de enlaces
        'link-sweep': {
          '0%': { backgroundSize: '0% 2px' },
          '100%': { backgroundSize: '100% 2px' },
        },
        // Para las esquinas del título "HUD" (si lo usas)
        'corner-flicker': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.5' }
        },
        // Para el borde giratorio de la foto de perfil
        'neon-border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },

      // --- CLASES DE UTILIDAD PARA LAS ANIMACIONES ---
      animation: {
        'aurora-border': 'aurora 8s ease-in-out infinite',
        'soft-glow': 'soft-glow 2.5s ease-in-out infinite',
        'sparkle-bg': 'sparkle-bg 15s linear infinite',
        'link-sweep': 'link-sweep 0.3s ease-out forwards',
        'corner-flicker': 'corner-flicker 3s ease-in-out infinite',
        'neon-border-spin': 'neon-border-spin 8s linear infinite',
      },
    },
  },

  // --- PLUGINS DE TAILWIND ---
  plugins: [
    // Activa el plugin para poder usar clases como "text-shadow-glow"
    require('tailwindcss-textshadow'),
  ],
}