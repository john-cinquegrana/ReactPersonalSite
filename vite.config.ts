import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
// import { heroui } from '@heroui/react';

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 5174,
	},
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react',
		}),
		tailwindcss(),
	],
});
