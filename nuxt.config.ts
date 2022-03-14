import { defineNuxtConfig } from "@nuxt/bridge"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  bridge: {
    postcss8: true,
    nitro: process.env.NODE_ENV !== "production",
  },
  typescript: {
    strict: true,
    shim: false,
  },
  ssr: false,
  target: "static",
  srcDir: "src/",
  buildModules: ["@nuxtjs/tailwindcss"],
})
