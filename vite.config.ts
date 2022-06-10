/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
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
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components/index.d.ts',
    }),
    Pages({
      extensions: ['vue'],
      exclude: ['**/-/**'],
    }),
  ],
  test: {
    coverage: {
      reportsDirectory: 'temp/coverage',
    },
  },
})
