import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// ES Modules don't have __dirname, so we create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Vite configuration for building Bauhaus UI library
 *
 * - Builds library in ESM and UMD formats
 * - Externalizes React as peer dependency
 * - Generates CSS in separate file
 * - Generates TypeScript declaration files
 */
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ["src/**/*.ts", "src/**/*.tsx"],
			exclude: ["src/**/*.stories.tsx"],
			rollupTypes: true,
			outDir: "dist",
		}),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "BauhausUI",
			formats: ["es", "umd"],
			fileName: (format) => `bauhaus-ui.${format === "es" ? "js" : "umd.cjs"}`,
		},
		rollupOptions: {
			// Ensure React is not bundled
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
