import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-recovery',
  },
  server: {
    port: 3001,
    open: '/index.html',
  },
});
