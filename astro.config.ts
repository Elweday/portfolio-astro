import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import compress from "astro-compress";
import preload from "astro-preload";
import alpinejs from "@astrojs/alpinejs";
import cloudflare from '@astrojs/cloudflare';


type UserConfig = Parameters<typeof defineConfig>[0];
const markdownConfig: UserConfig["markdown"] = {
  remarkPlugins: [[remarkToc, {
    heading: "Contents",
    tight: true,
    maxDepth: 3
  }], [remarkCollapse, {
    test: "Contents",
    content: "show contents"
  }]
  //[stripMarkdown, {}]
  ],
  shikiConfig: {
    theme: 'dracula',
    wrap: true
  }
};
const integrations: UserConfig["integrations"] = [preload(), tailwind({
  applyBaseStyles: false
}), react(), sitemap(), compress(), alpinejs()];


// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: integrations,
  markdown: markdownConfig,
  output: "hybrid",
  adapter: cloudflare({
    
  }),
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where"
});