import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook main configuration
 *
 * Defines:
 * - Where to find stories (*.stories.tsx files)
 * - Which addons to use
 * - The framework (React with Vite)
 * - Static directories to copy to the build output
 */
const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-docs"],

	// Static directories to include in the build
	staticDirs: ["../assets"],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},

	// GitHub Pages configuration
	viteFinal: async (config) => {
		// Set base path for GitHub Pages deployment
		if (process.env.NODE_ENV === "production") {
			config.base = "/Bauhaus_components/";
		}
		return config;
	},
};

export default config;
