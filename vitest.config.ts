import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    // Enable the Nuxt environment for all tests
    environment: 'nuxt'

    // you can optionally set Nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     overrides: {
    //       // other Nuxt config you want to pass
    //     }
    //   }
    // }
  }
})
