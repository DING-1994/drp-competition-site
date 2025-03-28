import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist",
  },
  // base: "/drp-competition-site/",
  plugins: [react()],
  // node_modeules 内の KaTeX フォントを読み込むための設定
  server: {
    fs: {
      allow: [resolve(__dirname, "..")],
    },
  },
});
