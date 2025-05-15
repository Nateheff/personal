import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        posts: resolve(__dirname, "posts.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
});
