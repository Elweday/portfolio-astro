import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE, RESUME } from "./src/config";
import compress from "astro-compress";
import preload from "astro-preload";
// @ts-expect-error
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    preload(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    compress(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "Contents",
          tight: true,
          maxDepth: 3,
        },
      ],
      [
        remarkCollapse,
        {
          test: "Contents",
          content: "show contents",
        },
      ],
      //[stripMarkdown, {}]
    ],
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  output: "hybrid",
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
