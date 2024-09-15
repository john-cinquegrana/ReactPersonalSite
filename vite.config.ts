// @ts-expect-error path is 100% installed I don't know why it complains
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		}
	},
	resolve: {
		alias: {
			// @ts-expect-error __dirname isn't caught by typescript
			'@root': path.resolve(__dirname, './src'),
			// @ts-expect-error __dirname isn't caught by typescript
			'@components': path.resolve(__dirname, './src/components'),
			// @ts-expect-error __dirname isn't caught by typescript
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},
});
