import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ["@emotion/styled"],
	},
	server: {
		host: "0.0.0.0",
		port: 5000,
	},
});
