import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        "aerosols-car-care": resolve(__dirname, "aerosols-car-care.html"),
        "agricultural-automation": resolve(__dirname, "agricultural-automation.html"),
        "automotive-diesel-oils": resolve(__dirname, "automotive-diesel-oils.html"),
        "bike-engine-oils": resolve(__dirname, "bike-engine-oils.html"),
        "blog-detail": resolve(__dirname, "blog-detail.html"),
        blog: resolve(__dirname, "blog.html"),
        "brake-clutch-fluid": resolve(__dirname, "brake-clutch-fluid.html"),
        "car-engine-oils": resolve(__dirname, "car-engine-oils.html"),
        "chemical-research": resolve(__dirname, "chemical-research.html"),
        "civil-engineering": resolve(__dirname, "civil-engineering.html"),
        "cng-engine-oil": resolve(__dirname, "cng-engine-oil.html"),
        "construction-services": resolve(__dirname, "construction-services.html"),
        contact: resolve(__dirname, "contact.html"),
        coolants: resolve(__dirname, "coolants.html"),
        faq: resolve(__dirname, "faq.html"),
        "fork-oil": resolve(__dirname, "fork-oil.html"),
        "gear-oils": resolve(__dirname, "gear-oils.html"),
        "global-presence": resolve(__dirname, "global-presence.html"),
        grease: resolve(__dirname, "grease.html"),
        "industrial-lubricants": resolve(__dirname, "industrial-lubricants.html"),
        "industrial-specialty-fluids": resolve(__dirname, "industrial-specialty-fluids.html"),
        "mechanical-engineering": resolve(__dirname, "mechanical-engineering.html"),
        "motorcycle-lubricants": resolve(__dirname, "motorcycle-lubricants.html"),
        "not-found": resolve(__dirname, "not-found.html"),
        "oil-gas": resolve(__dirname, "oil-gas.html"),
        "products-categories": resolve(__dirname, "products-categories.html"),
        "project-detail": resolve(__dirname, "project-detail.html"),
        project: resolve(__dirname, "project.html"),
        services: resolve(__dirname, "services.html"),
        "team-detail": resolve(__dirname, "team-detail.html"),
        team: resolve(__dirname, "team.html"),
        "tractor-engine-oils": resolve(__dirname, "tractor-engine-oils.html"),
        "truck-engine-oils": resolve(__dirname, "truck-engine-oils.html"),
        "welding-laser": resolve(__dirname, "welding-laser.html"),
      },
    },
  },
});
