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
  },
  experimental: {
    // Define route rules at the page level using defineRouteRules.
    inlineRouteRules: true,
    // Enables the experimental <NuxtClientFallback> component for rendering content on the client if there's an error in SSR.
    clientFallback: true,
    // Enables experimental component islands support with <NuxtIsland> and .island.vue files.
    componentIslands: true,
    // Enable the new experimental typed router using unplugin-vue-router.
    typedPages: true
  }
})
