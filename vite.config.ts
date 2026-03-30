import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const port = process.env.PORT ? Number(process.env.PORT) : 5173;
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  // Force Vite to recognize the current directory as root
  root: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    // 1. Increases the limit to stop the warning from cluttering logs
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 2. Splits vendor libraries (like React/Lucide) into separate files
        // This makes the initial load faster and prevents "massive chunk" errors
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
