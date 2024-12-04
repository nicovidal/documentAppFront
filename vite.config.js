import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Asegúrate de importar 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Ahora 'path' está definido
    }
  }
})
