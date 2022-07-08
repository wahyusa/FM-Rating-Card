/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: 'hsl(25, 97%, 53%)',
				'brand-white': 'hsl(0, 0%, 100%)',
				'brand-light-grey': 'hsl(217, 12%, 63%)',
				'brand-medium-grey': 'hsl(216, 12%, 54%)',
				'brand-dark-blue': 'hsl(213, 19%, 18%)',
				'brand-very-dark-blue': 'hsl(216, 12%, 8%)'
			},
			fontFamily: {
				overpass: ['Overpass', 'sans-serif']
			},
			plugins: []
		}
	}
};
