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
  css: ["~/assets/css/tailwind.css"],
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-headlessui", "shadcn-nuxt"],

  shadcn: {
    prefix: 'cn'
  },
  image: {
    format: ["avif", "webp", "png", "jpg"],
    presets: {
      avatar: {
        modifiers: {
          width: 50,
          height: 50
        }
      },
    }
  },
  googleFonts: {
    families: {
      Lexend: [200,300,400,500,600,700,800,900],
      "Russo One": true,
      "Kaushan Script": 400
    }
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    }
  },
  headlessui: {
    prefix: "Hl"
  }
});
