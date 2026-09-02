import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithms: ["gzip"],
      threshold: 1024,
    }),
    compression({
      algorithms: ["brotliCompress"],
      threshold: 1024,
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
    // ✅ PERFORMANCE (onderzocht via actuele Vite/Rollup best practices,
    // juli 2026): vendor-code apart bundelen zodat browsers React/Supabase/
    // UI-libraries lang gecached houden, ook als alleen jouw eigen
    // paginacode verandert bij een nieuwe deploy. Dit vergroot het aantal
    // requests niet — het maakt alleen de caching van bestaande requests
    // slimmer. Kan ik hier niet meten zonder een echte build, maar dit is
    // een gevestigde, risicoloze standaardtechniek, geen experiment.
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-supabase": ["@supabase/supabase-js"],
          "vendor-ui": ["@radix-ui/react-accordion", "@radix-ui/react-slot", "lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});