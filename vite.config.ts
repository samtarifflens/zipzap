import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // GitHub Pages serves this repo at https://samtarifflens.github.io/zipzap/
  // so the build needs that base path when running in CI. Local dev stays at /.
  base: process.env.GITHUB_ACTIONS ? '/zipzap/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5181,
  },
})
