import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./stories/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "black-nav-menu-1": "var(--color-black-nav-menu-1)",
      },
      fontFamily: {
        Mulish: ["var(--font-mulish)", "sans-serif"],
        Rokkitt: ["var(--font-rokkitt)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
