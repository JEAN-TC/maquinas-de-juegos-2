/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  // Asegúrate de que tu `content` está correcto
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  // AÑADIMOS LA 'SAFELIST'
  safelist: [
    {
      pattern: /aos-/, // Expresión regular que coincide con todo lo que empiece por "aos-"
    },
  ],

  theme: {
    extend: {
      colors: {
        'background': '#f5f7fa',
        'surface': '#ffffff',
        'text-primary': '#1e293b',
        'text-secondary': '#475569',
        'accent': '#0ea5e9',
        'accent-hover': '#0284c7',
        'border-color': '#e2e8f0',
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}