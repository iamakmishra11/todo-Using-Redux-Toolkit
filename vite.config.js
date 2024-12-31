import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/todo-Using-Redux-Toolkit/', // Update this to your repository name
});
