import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import compress from "astro-compress";
import preload from "astro-preload";


// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [preload(), tailwind({
    applyBaseStyles: false
  }), react(), sitemap(), compress(), ],
  markdown: {
    remarkPlugins: [[remarkToc, {}], [remarkCollapse, {
      test: "Table of contents",
      summary: "show table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where"
});