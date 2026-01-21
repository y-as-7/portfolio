import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
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
