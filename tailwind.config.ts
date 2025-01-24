import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#E6B8D4",
        background: "#440080",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Asap: ["Asap", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
