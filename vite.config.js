// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Cargamos las variables de entorno de forma segura en el servidor de Vite
  const env = loadEnv(mode, process.cwd(), '')

  const proxyConfig = {
    '/api/chat': {
      target: 'https://api.groq.com/openai/v1',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/chat/, '/chat/completions'),
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
      },
    },
  }

  return {
    base: './',
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
    // Proxy tanto para "npm run dev" como para "npm run preview"
    server: {
      proxy: proxyConfig,
    },
    preview: {
      proxy: proxyConfig,
    },
  }
})