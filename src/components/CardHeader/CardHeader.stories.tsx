import type { Meta, StoryObj } from "@storybook/react";
import { CardHeader } from "./CardHeader";

/**
 * CardHeader Component Stories
 */

const meta: Meta<typeof CardHeader> = {
	title: "Components/CardHeader",
	component: CardHeader,
	tags: ["autodocs"],
	argTypes: {
		header: {
			control: "text",
			description: "Header text",
		},
		children: {
			control: "text",
			description: "Main content",
		},
		media: {
			control: "text",
			description:
				"Media to display in header: URL string or React element (e.g., inline SVG)",
		},
		mediaType: {
			control: "select",
			options: ["icon", "banner", "lateral"],
			description:
				'Type of media: "icon" (48x48 top-right), "banner" (full-width), or "lateral" (left side)',
		},
		button: {
			control: "object",
			description: "Button configuration",
		},
	},
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

// Basic example
export const Basic: Story = {
	args: {
		header: "Card Title",
		children: (
			<p style={{ color: "#757575" }}>
				This is a basic card component. You can put any content inside.
			</p>
		),
		button: {
			text: "Action",
			variant: "solid",
			color: "blue",
			onClick: () => alert("Button clicked!"),
		},
	},
};

// Different button variants
export const WithOutlineButton: Story = {
	args: {
		header: "Card with Outline Button",
		children: (
			<p style={{ color: "#757575" }}>Card with outline button style.</p>
		),
		button: {
			text: "Learn More",
			variant: "outline",
			color: "red",
		},
	},
};

// Without button
export const WithoutButton: Story = {
	args: {
		header: "Card without Button",
		children: (
			<p style={{ color: "#757575" }}>
				This card doesn't have an action button.
			</p>
		),
	},
};

// Rich content
export const RichContent: Story = {
	args: {
		header: "Product Card",
		children: (
			<div>
				<p style={{ color: "#757575", marginBottom: "8px" }}>
					Premium Bauhaus Design Kit
				</p>
				<p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
					$49.99
				</p>
			</div>
		),
		button: {
			text: "Add to Cart",
			variant: "solid",
			color: "green",
		},
	},
};

// With banner
export const WithBanner: Story = {
	args: {
		header: "Card with Banner",
		media:
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
		mediaType: "banner",
		children: (
			<p style={{ color: "#757575" }}>
				Banner media displays as a full-width image without padding. The blue
				accent is not displayed.
			</p>
		),
		button: {
			text: "View Details",
			variant: "solid",
			color: "blue",
		},
	},
};

// With icon (URL)
export const WithIcon: Story = {
	args: {
		header: "Card with Icon",
		media:
			"https://api.iconify.design/mdi/account-circle.svg?color=%23000000&width=48&height=48",
		mediaType: "icon",
		children: (
			<p style={{ color: "#757575" }}>
				Icon media displays as a 48x48 icon in the top-right corner. The blue
				accent is not displayed.
			</p>
		),
		button: {
			text: "View Profile",
			variant: "outline",
			color: "blue",
		},
	},
};

// With inline SVG icon
export const WithInlineSVG: Story = {
	args: {
		header: "Card with Inline SVG",
		media: (
			<svg
				width="48"
				height="48"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-labelledby="clockIconTitle"
				role="img"
			>
				<title id="clockIconTitle">Clock icon</title>
				<circle cx="12" cy="12" r="10" fill="#005CAA" />
				<path
					d="M12 8V12L15 15"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		mediaType: "icon",
		children: (
			<p style={{ color: "#757575" }}>
				You can pass inline SVG code as a React element instead of a URL.
			</p>
		),
		button: {
			text: "Learn More",
			variant: "solid",
			color: "blue",
		},
	},
};

// With lateral image
export const WithLateralImage: Story = {
	args: {
		header: "Card with Lateral Image",
		media:
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=300&fit=crop",
		mediaType: "lateral",
		children: (
			<p style={{ color: "#757575" }}>
				Lateral media displays the image on the left side of the card with the
				content on the right.
			</p>
		),
		button: {
			text: "Explore",
			variant: "solid",
			color: "red",
		},
	},
};
