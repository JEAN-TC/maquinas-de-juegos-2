import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// ¡Ya no importamos nada de Tailwind aquí!

export default defineConfig({
  plugins: [
    vue(),
    // ¡Ya no añadimos tailwindcss() aquí!
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})