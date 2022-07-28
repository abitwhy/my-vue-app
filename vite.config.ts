/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': '/src/',
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['**/{*,?}.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reportsDirectory: 'temp/coverage',
    },
  },
})
