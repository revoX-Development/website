import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		SvelteKitPWA(),
	],
	server: {
		proxy: {
			'/cdn-cgi': {
				target: 'https://christmascountdown.live',
				changeOrigin: true
			},
		},
	},
};

export default config;
