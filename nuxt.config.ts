import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/global.css'],
  googleFonts: {
    families: {
      'Montserrat': [400, 500, 600, 700],
    }
  },
  experimental: {
    reactivityTransform: true
  }
})
