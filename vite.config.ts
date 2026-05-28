import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';

export default defineConfig({
  base: '/ship-it/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'icon.svg',
        'maskable-icon.svg',
        'icon-192.png',
        'icon-512.png',
        'maskable-icon-512.png',
        'apple-touch-icon-180.png',
      ],
      manifest: {
        name: 'Ship It — drill, build, ship.',
        short_name: 'Ship It',
        description:
          'Personal training rig. Drill the syntax. Build the projects. Ship without AI.',
        start_url: '/ship-it/',
        scope: '/ship-it/',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui'],
        orientation: 'portrait',
        background_color: '#0b0d10',
        theme_color: '#0b0d10',
        prefer_related_applications: false,
        categories: ['education', 'productivity', 'developer'],
        icons: [
          // PNGs first — these are what Chrome's installability check looks at
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          // Maskable variant for Android adaptive icons
          { src: 'maskable-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          // SVG as a fallback for any-size requests
          { src: 'icon.svg', sizes: '512x512 256x256 192x192 128x128 96x96 64x64 48x48 32x32 24x24 16x16', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // Don't precache Monaco's massive worker bundles — runtime-cache instead.
        globIgnores: ['**/monaco-editor/**'],
        navigateFallback: '/ship-it/index.html',
        navigateFallbackDenylist: [/^\/_/],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://cdn.jsdelivr.net',
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-jsdelivr',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
      devOptions: {
        enabled: false, // SW only in prod builds
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: '/ship-it/',
  },
});
