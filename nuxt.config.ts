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
  pinia: {
    storesDirs: ["./stores/**"],
  },
  css: ["assets/scss/styles.scss"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  image: {
    dir: "assets/img",
  },
  ssr: false,
});
