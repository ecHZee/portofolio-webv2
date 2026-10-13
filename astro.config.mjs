import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.PORTFOLIO_SITE_URL || "https://hanzha-portfolio.vercel.app",
  output: "static",
  compressHTML: true,
  image: {
    responsiveStyles: false,
    dangerouslyDisableAspectRatio: false,
    service: {
      // Use local services for better quality control
      formatOptions: {
        jpeg: { quality: 95 },
        png: { quality: 100 },
        webp: { quality: 95 },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
