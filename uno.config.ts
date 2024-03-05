import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        uil: () => import("@iconify-json/uil/icons.json").then(i => i.default)
      }
    }),
  ],
  safelist: [
    "i-uil:google",
    "i-uil:facebook",
    "i-uil:book",
    "i-uil:user",
    "i-uil:users-alt",
    "i-uil:money-bill",
    "i-uil:money-withdraw",
    "i-uil:eye",
    "i-uil:eye-slash",
    "i-mdi:home",
    "i-material-symbols:dashboard",
    "i-mdi:weather-night",
    "i-mdi:weather-sunny",
    "i-uil:angle-down",
    "i-mdi:close"
  ]
})