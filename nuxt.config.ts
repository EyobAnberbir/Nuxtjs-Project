// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  
  // Add static generation configuration
  app: {
    baseURL: '/Nuxtjs-Project/' 
  },

  // Build configuration for static deployment
  nitro: {
    output: {
      dir: 'dist' // Output directory for the generated static site
    }
  }
});
