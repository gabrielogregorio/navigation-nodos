import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { envs } from './src/env';

// https://vite.dev/config/
export default defineConfig({
  base: envs.VITE_BASE_URL,
  plugins: [react()],
});
