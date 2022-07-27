/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Pages({
      extensions: ['vue'],
      exclude: ['**/-/**'],
    }),
  ],
  test: {
    environment: 'jsdom',
    include: ['**/{*,?}.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reportsDirectory: 'temp/coverage',
    },
  },
})
