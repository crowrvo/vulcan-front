import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: ['class', "[theme*='dark']"],
  theme: {
    fontFamily: {
      primary: ["lexend", "system-ui", "Inter", "sans-serif"],
      secundary: ["Russo One", "sans-serif"],
      ternary: ["Kaushan Script", "script"]
    },
    colors: {
      "white": "#fff",
      "current": "currentColor",
      "transparent": "transparent",
      "neutral-white-50": "#f9f9f9",
      "neutral-dark": "#131313",


      "primary-50": "#e4f6ff",
      "primary-100": "#cfedff",
      "primary-200": "#a8dcff",
      "primary-300": "#74c2ff",
      "primary-400": "#3e95ff",
      "primary-500": "#1368ff",
      "primary-600": "#0055ff",
      "primary-700": "#0055ff",
      "primary-800": "#004ce4",
      "primary-900": "#0035b0",
      "primary-950": "#000d30",
      "primary-darken": "#00081e",


      "secundary-50": "#f6f5fd",
      "secundary-100": "#efecfb",
      "secundary-200": "#e1dcf8",
      "secundary-300": "#cac0f2",
      "secundary-400": "#b09ce9",
      "secundary-500": "#8a65db",
      "secundary-600": "#8455d2",
      "secundary-700": "#7443be",
      "secundary-800": "#61389f",
      "secundary-900": "#512f83",
      "secundary-950": "#321d58",


      "success-50": "#ebffe5",
      "success-100": "#d2ffc7",
      "success-200": "#a7ff95",
      "success-300": "#57ff3d",
      "success-400": "#3ff625",
      "success-500": "#1bdd05",
      "success-600": "#0fb100",
      "success-700": "#0e8605",
      "success-800": "#11690b",
      "success-900": "#11590e",
      "success-950": "#023201",

      "alert-50": "#fef2f2",
      "alert-100": "#fee2e2",
      "alert-200": "#fecaca",
      "alert-300": "#fba6a6",
      "alert-400": "#f77272",
      "alert-500": "#ed3b3b",
      "alert-600": "#db2727",
      "alert-700": "#b81d1d",
      "alert-800": "#981c1c",
      "alert-900": "#7e1e1e",
      "alert-950": "#450a0a",

      "neutral-g0": "#ffffff",
      "neutral-g10": "#fafafb",
      "neutral-g20": "#f5f5f6",
      "neutral-g30": "#ebebed",
      "neutral-g40": "#dedfe2",
      "neutral-g50": "#bfc1c7",
      "neutral-g60": "#b0b2b9",
      "neutral-g70": "#a3a6ae",
      "neutral-g80": "#9497a1",
      "neutral-g90": "#858893",
      "neutral-g100": "#757a86",
      "neutral-g200": "#666b78",
      "neutral-g300": "#575c6b",
      "neutral-g400": "#4a505f",
      "neutral-g500": "#3b4152",
      "neutral-g600": "#2e3447",
      "neutral-g700": "#1c2337",
      "neutral-g800": "#0d1429",
      "neutral-g900": "#00081e",
    },
    fontSize: {
      "xsm": ["10px", {
        lineHeight: "125%"
      }],
      "sm": ["13px", {
        lineHeight: "125%"
      }],
      "base": ["16px", {
        lineHeight: "125%"
      }],
      "md": ["20px", {
        lineHeight: "125%",
      }],
      "lg": ["25px", {
        lineHeight: "125%"
      }],
      "2xl": ["31px", {
        lineHeight: "125%"
      }],
      "3xl": ["39px", {
        lineHeight: "125%"
      }],
      "4xl": ["49px", {
        lineHeight: "125%"
      }],
      "5xl": ["61px", {
        lineHeight: "125%"
      }],
      "6xl": ["76px", {
        lineHeight: "125%"
      }],
      "7xl": ["77px", {
        lineHeight: "125%"
      }]
    },
    extend: {
      boxShadow: {
        "inner-shadow__light": "0 2px 4px",
        "confirm__elevation": "0px 2px 4px",
        "current-filter": "0px 0px 24px",
        "current-filter__light": "0px 0px 12px -2px",
        "modal-darken": "0px 4px 12px",
      },
      borderRadius: {
        sd: "8px",
        md: "12px",
        base: "16px"
      },
      size: {
        "logo": "60px",

        "profile-image": "60px",
        "profile-image-sm": "48px",
      },
      aspectRatio: {
        "portrait": "9/16"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config
