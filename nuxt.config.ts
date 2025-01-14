// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxt/image',
		'@nuxt/icon'
	],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			htmlAttrs: {
				lang: 'en',
				class: 'h-full'
			},
			bodyAttrs: {
				class: 'antialiased bg-white-50 dark:bg-slate-800 min-h-screen'
			}
		}
	},
	googleFonts: {
		display: 'swap',
		families: {
			Inter: [400, 500, 600, 700, 800, 900],
		},
	},
	devServer: {
		port: 8082
	},
})