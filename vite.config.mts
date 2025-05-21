import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const viteTsconfigPaths = await import("vite-tsconfig-paths");

  return {
    plugins: [
      react(),
      viteTsconfigPaths.default(),
      svgr({
        include: "**/*.svg?react",
      }),
    ],
  };
});
