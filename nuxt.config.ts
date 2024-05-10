// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "assets",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  css: ["assets/scss/styles.scss"],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 900],
    },
  },
  image: {
    dir: "assets/img",
  },
});
