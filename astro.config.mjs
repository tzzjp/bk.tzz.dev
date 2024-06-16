import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://tzz.dev',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()],
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"]
  }
});