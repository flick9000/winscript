// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    locales: ["en", "ru", "tr", "it", "ko", "es", "pt", "fr"],
    defaultLocale: "en",
  },
});
