import type { Meta, StoryObj } from "@storybook/react";
import { VerticalTitleCard } from "./VerticalTitleCard";

/**
 * VerticalTitleCard - Bauhaus-style card with vertical title and colored accents.
 *
 * A distinctive card component featuring:
 * - Vertical rotated title (90deg)
 * - Blue accent bar
 * - Red vertical divider (90% height)
 * - Content area with children
 * - Action button (right-aligned by default)
 * - Yellow tail accent (optional)
 */
const meta: Meta<typeof VerticalTitleCard> = {
	title: "Cards/VerticalTitleCard",
	component: VerticalTitleCard,
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "Card title (displayed vertically)",
		},
		icon: {
			control: false,
			description: "Optional icon displayed below the accent",
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
type Story = StoryObj<typeof VerticalTitleCard>;

/**
 * Default - Card with all default values
 */
export const Default: Story = {
	args: {
		title: "Card Title",
		children: <p>Default card content</p>,
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
			<VerticalTitleCard
				title="Default"
				buttonFill
				onButtonClick={() => alert("Clicked!")}
			>
				<p>With button fill</p>
			</VerticalTitleCard>

			<VerticalTitleCard
				title="With Icon"
				icon={<img src="assets/icon_default.svg" alt="" />}
				buttonVariant="outline"
				buttonColor="red"
			>
				<p>Icon replaces accent</p>
			</VerticalTitleCard>

			<VerticalTitleCard
				title="No Tail"
				tail={false}
				buttonVariant="text"
				buttonColor="green"
			>
				<p>Without yellow tail</p>
			</VerticalTitleCard>

			<VerticalTitleCard
				title="No Button"
				buttonVariant="none"
				icon={<img src="assets/icon_default.svg" alt="" />}
			>
				<p>Info only card</p>
			</VerticalTitleCard>
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
					<VerticalTitleCard
						key={color}
						title={color}
						buttonColor={color}
						buttonText={color}
						minHeight="200px"
						minWidth="180px"
					>
						<span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
							{color}
						</span>
					</VerticalTitleCard>
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
					Small (280x200)
				</p>
				<div style={{ width: "280px", height: "200px" }}>
					<VerticalTitleCard
						title="Small"
						buttonText="Go"
						minHeight="100%"
						minWidth="100%"
					>
						<span>Compact</span>
					</VerticalTitleCard>
				</div>
			</div>

			{/* Medium container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Medium (400x300)
				</p>
				<div style={{ width: "400px", height: "300px" }}>
					<VerticalTitleCard
						title="Medium"
						buttonText="Action"
						minHeight="100%"
						minWidth="100%"
					>
						<span>Standard size</span>
					</VerticalTitleCard>
				</div>
			</div>

			{/* Large container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Large (600x400)
				</p>
				<div style={{ width: "600px", height: "400px" }}>
					<VerticalTitleCard
						title="Large Card"
						buttonText="Explore"
						minHeight="100%"
						minWidth="100%"
					>
						<div>
							<h3 style={{ margin: "0 0 8px 0" }}>Welcome</h3>
							<p style={{ color: "#757575", margin: 0 }}>
								More space for rich content
							</p>
						</div>
					</VerticalTitleCard>
				</div>
			</div>

			{/* Full width */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Full Width (100% x 250px)
				</p>
				<div style={{ width: "100%", height: "250px" }}>
					<VerticalTitleCard
						title="Full Width"
						buttonText="View All"
						buttonColor="red"
						minHeight="100%"
						minWidth="100%"
					>
						<span>Stretches to container width</span>
					</VerticalTitleCard>
				</div>
			</div>
		</div>
	),
};

/**
 * CustomContent - Shows that children accepts any React component.
 * Use buttonVariant="none" and pass your own interactive elements.
 */
export const CustomContent: Story = {
	args: {
		title: "Custom",
		buttonVariant: "none",
		children: (
			<div style={{ textAlign: "center" }}>
				<p style={{ marginBottom: "16px" }}>You can put anything here:</p>
				<button
					type="button"
					onClick={() => alert("Custom button clicked!")}
					style={{
						padding: "12px 24px",
						backgroundColor: "#06A77D",
						color: "white",
						border: "none",
						cursor: "pointer",
						fontWeight: "bold",
					}}
				>
					My Custom Button
				</button>
			</div>
		),
	},
};

/**
 * Playground - Interactive card with all controls
 */
export const Playground: Story = {
	args: {
		title: "Playground",
		tail: true,
		buttonVariant: "solid",
		buttonText: "Click Me",
		buttonColor: "blue",
		buttonFill: false,
		onButtonClick: () => alert("Button clicked!"),
		minHeight: "300px",
		minWidth: "400px",
		children: <p>Use the controls panel to customize</p>,
	},
};
