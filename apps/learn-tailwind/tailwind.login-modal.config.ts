import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/login-modal/**/*.{ts,tsx,mdx}", "./stories/login-modal/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mulish)", "sans-serif"],
        mono: ["var(--font-rokkitt)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
