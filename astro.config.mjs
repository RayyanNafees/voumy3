import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	integrations: [
		markdoc(),
		keystatic(),
		tailwind(),
		preact({ compat: true, devtools: true }),
		alpinejs(),
	],

	output: "server",
	adapter: vercel(),
	prefetch: true
});
