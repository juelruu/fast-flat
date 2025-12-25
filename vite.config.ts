import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { url } from './tmp/user';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1/': {
        target: url ?? '', // Здесь урл впс
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
