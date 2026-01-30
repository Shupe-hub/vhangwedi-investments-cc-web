import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vhagwedi-investments-cc-web/',  // ← Add this! Matches your repo name exactly (case-sensitive, trailing slash)
})