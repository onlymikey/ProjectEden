import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/absproxy/5173/', // <- Añade esto
  plugins: [react(),
  ],
  server: {
    port: 5173,
    allowedHosts: ['.onlymikey.dev'],
  }
})
