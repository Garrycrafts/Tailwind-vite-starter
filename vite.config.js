import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isDebug = mode === "debug";

  return {
    css: {
      devSourcemap: isDebug,
    },
    build: {
      sourcemap: isDebug,
      minify: isDebug ? false : "esbuild",
      rollupOptions: {
        output: {
          // stable names for debug (easy to open dist/assets/index.css)
          assetFileNames: isDebug
            ? "assets/[name][extname]"
            : "assets/[name].[hash][extname]",
          chunkFileNames: isDebug
            ? "assets/[name].js"
            : "assets/[name].[hash].js",
          entryFileNames: isDebug
            ? "assets/[name].js"
            : "assets/[name].[hash].js",
        },
      },
    },
  };
});
