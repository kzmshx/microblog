import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./stories/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ["var(--font-mulish)", "sans-serif"],
        Rokkitt: ["var(--font-rokkitt)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
