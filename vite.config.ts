import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  esbuild: {
    jsx: 'preserve',
    jsxImportSource: 'solid-js',
  },

})
