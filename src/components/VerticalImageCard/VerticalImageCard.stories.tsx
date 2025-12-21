import type { Meta, StoryObj } from "@storybook/react";
import { VerticalImageCard } from "./VerticalImageCard";

/**
 * VerticalImageCard - Card with image at the top and content below.
 *
 * A media-focused vertical card featuring:
 * - Image section (top, full width)
 * - Title with bold typography
 * - Red divider (90% width)
 * - Subtitle area
 * - Action button (left-aligned by default)
 * - Yellow tail accent (optional, only in content area)
 */
const meta: Meta<typeof VerticalImageCard> = {
	title: "Cards/VerticalImageCard",
	component: VerticalImageCard,
	tags: ["autodocs"],
	argTypes: {
		imageSrc: {
			control: "text",
			description: "Image source URL",
		},
		imageAlt: {
			control: "text",
			description: "Image alt text",
		},
		imageHeight: {
			control: "text",
			description: "Image height (e.g., '150px', '40%', '200px')",
		},
		title: {
			control: "text",
			description: "Card title",
		},
		subtitle: {
			control: "text",
			description: "Card subtitle",
		},
		tail: {
			control: "boolean",
			description: "Whether to show the tail accent section",
		},
		buttonVariant: {
			control: "select",
			options: ["solid", "outline", "text", "none"],
			description: "Button variant",
		},
		buttonText: {
			control: "text",
			description: "Button text",
		},
		buttonColor: {
			control: "select",
			options: ["blue", "red", "yellow", "green", "orange", "purple"],
			description: "Button color",
		},
		buttonFill: {
			control: "boolean",
			description: "Whether button fills the full width",
		},
		minHeight: {
			control: "text",
			description: "Minimum height of the card",
		},
		minWidth: {
			control: "text",
			description: "Minimum width of the card",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default - Card with all default values
 */
export const Default: Story = {
	args: {
		imageSrc: "assets/img_default.jpg",
		imageAlt: "Card image",
		title: "Card Title",
		subtitle: "This is the card subtitle with additional information",
		buttonText: "Action",
		onButtonClick: () => alert("Action clicked!"),
	},
};

/**
 * Variants - Grid showing main variations
 */
export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "24px",
				padding: "24px",
				backgroundColor: "#f0f0f0",
			}}
		>
			<VerticalImageCard
				imageSrc="assets/img_default.jpg"
				title="Button Fill"
				subtitle="Full width button variant"
				buttonFill
				buttonText="Full Width"
				onButtonClick={() => alert("Clicked!")}
			/>

			<VerticalImageCard
				imageSrc="assets/img_default.jpg"
				title="Outline Button"
				subtitle="With outline style"
				buttonVariant="outline"
				buttonColor="red"
				buttonText="Learn More"
			/>

			<VerticalImageCard
				imageSrc="assets/img_default.jpg"
				title="No Tail"
				subtitle="Without yellow accent"
				tail={false}
				buttonVariant="text"
				buttonColor="green"
				buttonText="View"
			/>

			<VerticalImageCard
				imageSrc="assets/img_default.jpg"
				title="No Button"
				subtitle="Information only card"
				buttonVariant="none"
			/>
		</div>
	),
};

/**
 * ButtonColors - All button color options
 */
export const ButtonColors: Story = {
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "16px",
				padding: "24px",
			}}
		>
			{(["blue", "red", "yellow", "green", "orange", "purple"] as const).map(
				(color) => (
					<VerticalImageCard
						key={color}
						imageSrc="assets/img_default.jpg"
						title={color.charAt(0).toUpperCase() + color.slice(1)}
						subtitle={`${color} button color`}
						buttonColor={color}
						buttonText={color}
						minHeight="320px"
						minWidth="200px"
					/>
				),
			)}
		</div>
	),
};

/**
 * Responsive - Cards adapting to different container sizes
 */
export const Responsive: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
			}}
		>
			{/* Small container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Small (250x350)
				</p>
				<div style={{ width: "250px", height: "350px" }}>
					<VerticalImageCard
						imageSrc="assets/img_default.jpg"
						title="Compact"
						subtitle="Small card"
						buttonText="Go"
						minHeight="100%"
						minWidth="100%"
					/>
				</div>
			</div>

			{/* Medium container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Medium (300x400)
				</p>
				<div style={{ width: "300px", height: "400px" }}>
					<VerticalImageCard
						imageSrc="assets/img_default.jpg"
						title="Standard Size"
						subtitle="Default dimensions work well"
						buttonText="Action"
						minHeight="100%"
						minWidth="100%"
					/>
				</div>
			</div>

			{/* Large container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Large (400x500)
				</p>
				<div style={{ width: "400px", height: "500px" }}>
					<VerticalImageCard
						imageSrc="assets/img_default.jpg"
						title="Large Card"
						subtitle="More space for content and longer descriptions"
						buttonText="Explore"
						buttonColor="red"
						minHeight="100%"
						minWidth="100%"
					/>
				</div>
			</div>
		</div>
	),
};

/**
 * Playground - Interactive card with all controls
 */
export const Playground: Story = {
	args: {
		imageSrc: "assets/img_default.jpg",
		imageAlt: "Playground image",
		imageHeight: "40%",
		title: "Playground",
		subtitle: "Use the controls panel to customize this card",
		tail: true,
		buttonVariant: "solid",
		buttonText: "Click Me",
		buttonColor: "blue",
		buttonFill: false,
		onButtonClick: () => alert("Button clicked!"),
		minHeight: "400px",
		minWidth: "300px",
	},
};

