import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react-shop-app/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        dir: 'dist',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
