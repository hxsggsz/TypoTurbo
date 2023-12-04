// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  test: {
    environment: 'jsdom',
    globals: true,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        '/': resolve(__dirname, 'src/home/index.html'),
        game: resolve(__dirname, 'src/game/index.html'),
      },
    },
  },
});
