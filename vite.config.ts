import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/pokedex/",
  plugins: [
    react(),
      VitePWA({
        registerType: "autoUpdate",
        strategies: "generateSW",
        injectRegister: "auto",

        manifest: {
          name: "Pokedex",
          short_name: "Pokedex",
          description: "Aplicación web donde puedes consultar la información de todos los Pókemons de todas las generaciones.",
          start_url: "/pokedex/",
          scope: "/pokedex/",
          display: "standalone",
          background_color: "#DC0A2D",
          theme_color: "#DC0A2D",
          orientation: "portrait",
          icons: [
            {
              src: "/pokedex/icons/icon-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pokedex/icons/icon-512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },

        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          navigateFallback: "/pokedex/#/index.html",
        },
      }),
  ],
})
