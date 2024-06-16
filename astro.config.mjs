import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tzz.dev',
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    })],
    i18n: {
      defaultLocale: "ja",
      locales: ["ja"]
    },
});