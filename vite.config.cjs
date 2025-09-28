
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ใส่ชื่อรีโปคุณแทน task-flow
  base: "/task-flow/",
});
