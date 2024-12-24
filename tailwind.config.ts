import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        jetbrains: ["var(--font-jetbrains)"],
      },
      colors: {
        colors: {
          "primary-color": "#33E092",
          "secondary-color": "#0CCE6B",
          "tertiary-color": "#16a34a",
          "primary-bg": "rgba(39, 39, 43, 0.4)",
          "secondary-bg": "rgba(250, 250, 250, 0.4)",
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
