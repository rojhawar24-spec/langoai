import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import compression from "vite-plugin-compression2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
    compression({
      algorithm: "gzip",
      threshold: 1024,
      gzipOptions: { level: 9 },
    }),
    compression({
      algorithm: "brotliCompress",
      threshold: 1024,
      deleteOriginal: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
