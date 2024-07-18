import WindiCSS from "vite-plugin-windicss";
import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [sveltekit(), WindiCSS()],
});
