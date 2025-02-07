import { heroui } from '@heroui/react';

const config = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			ss: '0',
			// => @media (min-width: 0px) { ... }

			xs: '480px',
			// => @media (min-width: 480px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
};

/** @type {import('tailwindcss').Config} */
export default config;
