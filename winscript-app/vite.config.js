import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
    root: 'src', // Change root to src
    resolve: { alias: { '~': '' } }, // Remove /src from resolved paths
    server: {
        // Tauri expects a fixed port, fail if that port is not available
        strictPort: true,
        // if the host Tauri is expecting is set, use it
        host: host || false,
        port: 5174,
      },
    build: {
        outDir: '../dist', // Change outDir to dist
        emptyOutDir: true, // Empty outDir before building
        
        minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
        sourcemap: !!process.env.TAURI_ENV_DEBUG,
    }
}));
