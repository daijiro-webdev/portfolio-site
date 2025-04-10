import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // ← これを追加！

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // ← これを追加！
        },
    },
});
