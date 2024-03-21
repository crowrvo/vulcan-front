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


      "accent-50": "#E6FBFF",
      "accent-100": "#B0F4FF",
      "accent-200": "#BAEEFF",
      "accent-300": "#54E7FF",
      "accent-400": "#33E2FF",
      "accent-500": "#00DBFF",
      "accent-600": "#00C7E8",
      "accent-700": "#009BB5",
      "accent-800": "#00788C",
      "accent-900": "#005C6B",

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


      "secundary-50": "#EDE6FF",
      "secundary-100": "#F8B0FF",
      "secundary-200": "#AE8AFF",
      "secundary-300": "#8954FF",
      "secundary-400": "#7233FF",
      "secundary-500": "#4F00FF",
      "secundary-600": "#4800E8",
      "secundary-700": "#3800B5",
      "secundary-800": "#2B008C",
      "secundary-900": "#21006C",


      "success-50": "#F7FFE6",
      "success-100": "#E5FFB0",
      "success-200": "#D9FF8A",
      "success-300": "#C7FF5A",
      "success-400": "#BDFF33",
      "success-500": "#ACFF00",
      "success-600": "#9DE800",
      "success-700": "#7AB500",
      "success-800": "#5F8C00",
      "success-900": "#496B00",


      "warn-50": "#FFEAE6",
      "warn-100": "#FFBCB0",
      "warn-200": "#FF9C8A",
      "warn-300": "#FF6F54",
      "warn-400": "#FF5333",
      "warn-500": "#FF2800",
      "warn-600": "#E82400",
      "warn-700": "#B51C00",
      "warn-800": "#8C1600",
      "warn-900": "#6B1100",

      "alert-50": "#FFF7E6",
      "alert-100": "#FFE7B0",
      "alert-200": "#FFDB8A",
      "alert-300": "#FFCA5A",
      "alert-400": "#FFC033",
      "alert-500": "#FFB000",
      "alert-600": "#E8A000",
      "alert-700": "#B57D00",
      "alert-800": "#8C6100",
      "alert-900": "#6B4A00",

      "n0": "#ffffff",
      "n10": "#fafafb",
      "n20": "#f5f5f6",
      "n30": "#ebebed",
      "n40": "#dedfe2",
      "n50": "#bfc1c7",
      "n60": "#b0b2b9",
      "n70": "#a3a6ae",
      "n80": "#9497a1",
      "n90": "#858893",
      "n100": "#757a86",
      "n200": "#666b78",
      "n300": "#575c6b",
      "n400": "#4a505f",
      "n500": "#3b4152",
      "n600": "#2e3447",
      "n700": "#1c2337",
      "n800": "#0d1429",
      "n900": "#00081e",
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
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config