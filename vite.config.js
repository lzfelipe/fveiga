import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served by GitHub Pages under https://lzfelipe.github.io/fveiga/
export default defineConfig({
  base: '/fveiga/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
