import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression"; // Enable gzip/Brotli compression

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: "brotliCompress", // Use Brotli for better compression
      ext: ".br",
    }),
    splitVendorChunkPlugin(), // Optimize chunk splitting
  ],
  build: {
    target: "esnext",
    outDir: "dist",
    minify: "terser", // Better minification
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react"; // Separate React
            }
            if (id.includes("gsap")) {
              return "gsap"; // Separate GSAP
            }
            return "vendor"; // All other node_modules in "vendor"
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true, // Auto open browser
  },
});
