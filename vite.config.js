import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-store-app-demo/",
  plugins: [react()],
  server: {
    host: true
  }
})
