import rupture from "rupture";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["tslib"],
  },
  modules: ["@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          use: [rupture()],
        },
      },
    },
  },
});
