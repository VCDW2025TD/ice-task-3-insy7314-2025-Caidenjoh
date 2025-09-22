import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const sslKeyPath = path.resolve(__dirname, 'ssl/privatekey.pem')
const sslCertPath = path.resolve(__dirname, 'ssl/certificate.pem')

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(sslKeyPath),
      cert: fs.readFileSync(sslCertPath)
    },
    port: 5173,
    host: true
  },
  optimizeDeps: {
    force: true
  }
})
