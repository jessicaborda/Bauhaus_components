import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

/**
 * Card - Bauhaus-style card with accent, title, divider, subtitle and button sections.
 *
 * A versatile card component featuring:
 * - Blue accent bar (top-left)
 * - Bold title
 * - Red divider (90% width)
 * - Subtitle area
 * - Action button (left-aligned by default)
 * - Yellow tail accent (optional)
 */
const meta: Meta<typeof Card> = {
	title: "Cards/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
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
			<Card
				title="Button Fill"
				subtitle="Full width button variant"
				buttonFill
				buttonText="Full Width"
				onButtonClick={() => alert("Clicked!")}
			/>

			<Card
				title="Outline Button"
				subtitle="With outline style"
				buttonVariant="outline"
				buttonColor="red"
				buttonText="Learn More"
			/>

			<Card
				title="No Tail"
				subtitle="Without yellow accent"
				tail={false}
				buttonVariant="text"
				buttonColor="green"
				buttonText="View"
			/>

			<Card
				title="No Button"
				subtitle="Information only card without action button"
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
					<Card
						key={color}
						title={color.charAt(0).toUpperCase() + color.slice(1)}
						subtitle={`${color} button color`}
						buttonColor={color}
						buttonText={color}
						minHeight="220px"
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
					Small (300x200)
				</p>
				<div style={{ width: "300px", height: "200px" }}>
					<Card
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
					Medium (400x280)
				</p>
				<div style={{ width: "400px", height: "280px" }}>
					<Card
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
					Large (600x400)
				</p>
				<div style={{ width: "600px", height: "400px" }}>
					<Card
						title="Large Card"
						subtitle="More space for content and longer descriptions"
						buttonText="Explore"
						buttonColor="red"
						minHeight="100%"
						minWidth="100%"
					/>
				</div>
			</div>

			{/* Full width */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Full Width (100% x 250px)
				</p>
				<div style={{ width: "100%", height: "250px" }}>
					<Card
						title="Full Width"
						subtitle="Stretches to container width"
						buttonText="View All"
						buttonColor="green"
						buttonFill
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
		title: "Playground",
		subtitle: "Use the controls panel to customize this card",
		tail: true,
		buttonVariant: "solid",
		buttonText: "Click Me",
		buttonColor: "blue",
		buttonFill: false,
		onButtonClick: () => alert("Button clicked!"),
		minHeight: "300px",
		minWidth: "400px",
	},
};
