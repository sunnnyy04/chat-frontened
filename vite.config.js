// vite.config.js
import dotenv from "dotenv";

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT||3000 // Specify the port here
  },
});
