import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Match GitHub repo name for https://<user>.github.io/<repo>/ */
const REPO = 'image_gallery.io'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  /** `vite build` uses production mode → correct asset paths for GitHub Pages. */
  base: mode === 'production' ? `/${REPO}/` : '/',
  plugins: [react(), tailwindcss()],
}))
