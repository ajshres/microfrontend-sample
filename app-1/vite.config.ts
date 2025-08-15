import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'app-1',
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'esm', // <-- required for federation runtime to work in browser
      },
    },
  }
})
