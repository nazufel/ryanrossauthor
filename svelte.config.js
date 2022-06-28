import adapter from 'svelte-adapter-static-digitalocean';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            spec: '.do/spec.yaml',
            name: ''
        })
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
};

export default config;
