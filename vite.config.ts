import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    dedupe: ['react', 'react-dom'],
  },
  server: {
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
  },
  plugins: [
    devtools(),
    // Vercel's web entry format breaks SSR at runtime (srvx reads an undefined
    // `runtime.node`), so build the Node entry instead.
    nitro({
      rollupConfig: { external: [/^@sentry\//] },
      vercel: { entryFormat: 'node' },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
