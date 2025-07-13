// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ['hexangel93.com']
  }
})
