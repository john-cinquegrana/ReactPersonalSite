import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      // useFsEvents: true,
      // interval: 100,
    },
  },
  plugins: [react()],
})
