import { defineConfig } from 'vite'
import { defineConfig as defineSanityConfig } from 'sanity/vite'

export default defineConfig({
  ...defineSanityConfig({
    // Sanity configuration
  }),
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
