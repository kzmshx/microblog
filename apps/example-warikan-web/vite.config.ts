import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "@repo/example-warikan-config";

export default defineConfig({
  plugins: [react()],
  server: {
    port: config.webPort,
  },
});
