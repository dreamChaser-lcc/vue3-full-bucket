import { defineConfig } from "vite";
import path from 'path'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src"),
      'vue': 'vue/dist/vue.esm-bundler.js' 
    }
  }
});
