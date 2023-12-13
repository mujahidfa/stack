// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    // Enable Timeline tracking
    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  typescript: {
    // Enable type-checking at build time
    typeCheck: true,
    // Enable strict type checking
    strict: true
  }
})
