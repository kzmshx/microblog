import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./stories/**/*.{ts,tsx,mdx}",
    "!./app/login-modal/**/*.{ts,tsx,mdx}",
    "!./stories/login-modal/*.{ts,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
export default config;
