import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'], // Ensure SVG files are included in the build
  server: {
    hmr: {
      overlay: false,
    },
  },
});
