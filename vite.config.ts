import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    // Desative HMR em ambientes que não suportam watch (ex.: alguns sandboxes): DISABLE_HMR=true
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    target: 'es2022',
    cssMinify: true,
    chunkSizeWarningLimit: 700,
  },
});
