import { defineConfig } from "vite";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  root: "src",
  resolve: { alias: { "~": "" } },
  server: {
    strictPort: true,
    host: host || false,
    port: 4321,
  },
  build: {
    target: "esnext",
    outDir: "../dist",
    emptyOutDir: true,

    minify: !process.env.TAURI_ENV_DEBUG ? "esbuild" : false,
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
  },
}));
