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
      // PALETA DE COLORES "MODO MIXTO" (Página Oscura, Navbar Claro)
      colors: {
        'background': '#000000',     // Fondo principal de la página: Negro
        'surface': '#ffffff',        // Fondo para superficies claras (Navbar, Tarjetas): Blanco
        'text-primary': '#1e293b',   // Texto principal: Gris muy oscuro (casi negro)
        'text-secondary': '#475569', // Texto secundario: Gris medio
        'accent': '#0ea5e9',         // Acento de color principal: Azul Cielo
        'accent-hover': '#0284c7',   // Acento de color para hovers
        'border-color': '#e2e8f0',   // Borde para elementos claros (como tarjetas blancas)
        
        // Colores extra para el tema oscuro si los necesitas en otras partes
        'dark-surface': '#111827',
        'dark-text-primary': '#f9fafb',
        'dark-text-secondary': '#9ca3af',
        'dark-border-color': '#374151',
      },
      fontFamily: {
        // Establece "Inter" como la fuente principal
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Aquí puedes añadir plugins como @tailwindcss/typography si lo necesitas en el futuro
    // require('@tailwindcss/typography'),
  ],
}