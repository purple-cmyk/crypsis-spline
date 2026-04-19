import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('@splinetool/react-spline') || id.includes('@splinetool/runtime')) {
            return 'spline'
          }

          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})