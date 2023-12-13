// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  typescript: {
    // Enable type-checking at build time
    typeCheck: true,
    // Enable strict type checking
    strict: true
  }
})
