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
      name: 'app-2',
      filename: 'module.js',
      exposes: {
        './Route': './src/Route.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.1' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.1' },
        'react-router-dom': { singleton: true, requiredVersion: '^7.8.0' },
        'tailwindcss': { 
          singleton: true,
          requiredVersion: '^4.1.11' // specify your Tailwind version
        },
      },
    }),
  ],
  server:{
    port: 3001
  },
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
