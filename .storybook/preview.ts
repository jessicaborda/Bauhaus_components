import type { Preview } from "@storybook/react";
import "../src/styles/variables.css";
import "../src/styles/global.css";

/**
 * Storybook preview configuration
 *
 * Imports global styles to apply to all stories
 * and defines global parameters.
 */
const preview: Preview = {
	parameters: {
		// Center components in the canvas
		layout: "centered",

		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			options: {
				light: {
					name: "light",
					value: "#ffffff",
				},
				dark: {
					name: "dark",
					value: "#1a1a1a",
				},
				gray: {
					name: "gray",
					value: "#f5f5f5",
				},
			},
		},
	},

	initialGlobals: {
		backgrounds: {
			value: "light",
		},
	},
};

export default preview;
