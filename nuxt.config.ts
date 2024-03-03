export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  components: [
    "~/components",
    {
      path: "~/components/global",
      prefix: "g",
      pathPrefix: false,
    },
    {
      path: "~/pages",
      pattern: "*/components/**",
      pathPrefix: false,
    },
  ],
  hooks: {
    "pages:extend"(pages) {
      for (const page of pages) {
        if (page.path.includes("component"))
          pages.splice(pages.indexOf(page), 1);
      }
    },
  },
  
  modules: ["@unocss/nuxt"],
});
