import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vite.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  }
}));

