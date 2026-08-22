import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://www.mn.edu.kg",
  trailingSlash: "always",
  prefetch: true,

  devToolbar: {
    enabled: false,
  },

  integrations: [icon(), pagefind()],

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],

          test(element) {
            const href = element.properties?.href;

            return typeof href === "string" && /^https?:\/\//.test(href);
          },

          properties: {
            className: ["external-link"],
          },
        },
      ],
    ],
  },
});
