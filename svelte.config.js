import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter()
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
  experimental: {
    useVitePreprocess: true
  }
};

export default config;
