import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
	content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
	theme: {
		extend: {
			colors: {
				purple: {
          50: '#f5f6f9',
          100: '#e8e9f1',
          200: '#d6d8e7',
          300: '#babed6',
          400: '#999dc1',
          500: '#8082b1',
          600: '#706ea2',
          700: '#666293',
          800: '#57537a',
          900: '#3f3d56',
          950: '#2f2d3e'
        }
			},
			fontFamily: {
				sans: [
					'Inter', 
					...defaultTheme.fontFamily.sans
				],
			},
		},
	}
}