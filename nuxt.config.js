import rupture from "rupture";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  build: {
    transpile: ["tslib"],
  },
  modules: ["@pinia/nuxt", "vue3-perfect-scrollbar/nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", href: "/favicons/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicons/favicon-android-chrome-192x192.png",
        },
        { rel: "manifest", href: "/favicons/site.webmanifest" },
        { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#00141f" },
      ],
      meta: [],
    },
  },
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
