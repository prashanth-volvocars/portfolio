import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/prashanth-portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public'
})