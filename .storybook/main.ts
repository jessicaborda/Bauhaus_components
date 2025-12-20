import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook main configuration
 *
 * Defines:
 * - Where to find stories (*.stories.tsx files)
 * - Which addons to use
 * - The framework (React with Vite)
 */
const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-docs"],

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
