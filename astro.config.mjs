import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  integrations: [solidJs(), mdx()],
  output: "server",
  adapter: netlify()
});

// tailwind({
//     config: {
//       applyBaseStyles: false
//     }
//   })