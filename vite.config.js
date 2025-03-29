import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Указываем корневую папку для index.html (если она не в корне проекта)
  root: './',
  // Алиасы для удобных импортов (опционально)
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@data': path.resolve(__dirname, './src/data'),
      '@components': path.resolve(__dirname, './src/components'),
      '@popups': path.resolve(__dirname, './src/components/popups'),
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
