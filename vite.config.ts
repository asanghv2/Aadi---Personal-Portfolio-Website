import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // REQUIRED for GitHub Pages
  base: "/Aadi---Personal-Portfolio-Website/",

  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
