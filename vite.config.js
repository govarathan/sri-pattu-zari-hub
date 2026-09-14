import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.VERCEL || process.env.VERCEL_ENV ? "/" : "/sri-pattu-zari-hub/",
});
