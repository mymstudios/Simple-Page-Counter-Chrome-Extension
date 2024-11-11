import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        content: 'content.js'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});