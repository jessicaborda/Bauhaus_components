import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalImageCard } from "./HorizontalImageCard";

/**
 * HorizontalImageCard - Card with image on the left and content on the right.
 */
const meta: Meta<typeof HorizontalImageCard> = {
	title: "Components/HorizontalImageCard",
	component: HorizontalImageCard,
	tags: ["autodocs"],
	argTypes: {
		imageSrc: { control: "text" },
		title: { control: "text" },
		subtitle: { control: "text" },
		tail: { control: "boolean" },
		buttonVariant: {
			control: "select",
			options: ["solid", "outline", "text", "none"],
		},
		buttonText: { control: "text" },
		buttonColor: {
			control: "select",
			options: ["blue", "red", "yellow", "green", "orange", "purple"],
		},
		minHeight: { control: "text" },
		minWidth: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof HorizontalImageCard>;

/**
 * Default - Card with all default values
 */
export const Default: Story = {
	args: {
		imageSrc: "assets/img_default.jpg",
		imageAlt: "Card image",
		title: "Card Title",
		subtitle: "Subtitle text here",
		buttonText: "Learn More",
		onButtonClick: () => alert("Learn More clicked!"),
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
			<HorizontalImageCard
				imageSrc="assets/img_default.jpg"
				title="Outline Button"
				subtitle="With outline style"
				buttonVariant="outline"
				buttonText="Action"
				onButtonClick={() => alert("Clicked!")}
			/>

			<HorizontalImageCard
				imageSrc="assets/img_default.jpg"
				title="No Subtitle"
				buttonText="Details"
			/>

			<HorizontalImageCard
				imageSrc="assets/img_default.jpg"
				title="No Tail"
				subtitle="Without yellow accent"
				tail={false}
				buttonVariant="text"
				buttonColor="green"
				buttonText="View"
			/>

			<HorizontalImageCard
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
					<HorizontalImageCard
						key={color}
						imageSrc="assets/img_default.jpg"
						title={color.charAt(0).toUpperCase() + color.slice(1)}
						subtitle={`${color} button`}
						buttonColor={color}
						buttonText={color}
						minHeight="200px"
						minWidth="300px"
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
					Small (400x180)
				</p>
				<div style={{ width: "400px", height: "180px" }}>
					<HorizontalImageCard
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
					Medium (500x250)
				</p>
				<div style={{ width: "500px", height: "250px" }}>
					<HorizontalImageCard
						imageSrc="assets/img_default.jpg"
						title="Standard Size"
						subtitle="Default dimensions"
						buttonText="Action"
						minHeight="100%"
						minWidth="100%"
					/>
				</div>
			</div>

			{/* Large container */}
			<div>
				<p style={{ marginBottom: "8px", fontWeight: "bold" }}>
					Large (700x350)
				</p>
				<div style={{ width: "700px", height: "350px" }}>
					<HorizontalImageCard
						imageSrc="assets/img_default.jpg"
						title="Large Card"
						subtitle="More space for content"
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
					Full Width (100% x 280px)
				</p>
				<div style={{ width: "100%", height: "280px" }}>
					<HorizontalImageCard
						imageSrc="assets/img_default.jpg"
						title="Full Width"
						subtitle="Stretches to container"
						buttonText="View All"
						buttonColor="green"
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
		title: "Playground",
		subtitle: "Use the controls panel to customize",
		tail: true,
		buttonVariant: "solid",
		buttonText: "Click Me",
		buttonColor: "blue",
		onButtonClick: () => alert("Button clicked!"),
		minHeight: "300px",
		minWidth: "500px",
	},
};
