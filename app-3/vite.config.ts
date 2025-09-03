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
      name: 'engine3',
      filename: 'module.js',
      exposes: {
        './Route': './src/Route.tsx',
        './manifest': './src/manifest.ts',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^7.7.0' },
      },
    })
  ],
  server:{
    port: 3002
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
