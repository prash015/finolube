import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        aboutus: resolve(__dirname, "aboutus.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html")
      }
    }
  }
});
