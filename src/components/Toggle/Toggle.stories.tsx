import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

/**
 * Toggle - Bauhaus-style switch with sliding knob indicator.
 */
const meta: Meta<typeof Toggle> = {
	title: "Components/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		size: {
			control: "select",
			options: ["small", "medium", "large"],
		},
		disabled: { control: "boolean" },
		checked: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * Default - Unchecked toggle with label
 */
export const Default: Story = {
	args: {
		label: "Enable notifications",
	},
};

/**
 * Variants - Grid showing main variations
 */
export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
			}}
		>
			<Toggle label="Off" />
			<Toggle label="On" defaultChecked />
			<Toggle label="Disabled off" disabled />
			<Toggle label="Disabled on" defaultChecked disabled />
		</div>
	),
};

/**
 * AllSizes - Small, medium, and large toggles
 */
export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
				<Toggle label="Small" size="small" />
				<Toggle label="Small on" size="small" defaultChecked />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
				<Toggle label="Medium (default)" size="medium" />
				<Toggle label="Medium on" size="medium" defaultChecked />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
				<Toggle label="Large" size="large" />
				<Toggle label="Large on" size="large" defaultChecked />
			</div>
		</div>
	),
};

/**
 * States - Different toggle states
 */
export const States: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
			}}
		>
			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Normal</p>
				<div style={{ display: "flex", gap: "24px" }}>
					<Toggle label="Off" />
					<Toggle label="On" defaultChecked />
				</div>
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Disabled</p>
				<div style={{ display: "flex", gap: "24px" }}>
					<Toggle label="Disabled" disabled />
					<Toggle label="Disabled on" defaultChecked disabled />
				</div>
			</div>
		</div>
	),
};

/**
 * WithoutLabel - Toggle without visible label
 */
export const WithoutLabel: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "24px", padding: "24px" }}>
			<Toggle ariaLabel="Option 1" />
			<Toggle ariaLabel="Option 2" defaultChecked />
			<Toggle ariaLabel="Option 3" />
		</div>
	),
};

/**
 * FormExample - Real-world settings usage
 */
export const FormExample: Story = {
	render: () => (
		<div
			style={{
				padding: "32px",
				maxWidth: "400px",
				border: "3px solid #1A1A1A",
				backgroundColor: "#fff",
			}}
		>
			<h3 style={{ margin: "0 0 24px 0", fontSize: "20px" }}>Settings</h3>
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<Toggle
					name="notifications"
					label="Push notifications"
					defaultChecked
				/>
				<Toggle name="emails" label="Email updates" />
				<Toggle name="darkMode" label="Dark mode" />
				<Toggle name="analytics" label="Share analytics" disabled />
			</div>
		</div>
	),
};

/**
 * Playground - Interactive toggle with all controls
 */
export const Playground: Story = {
	args: {
		label: "Playground toggle",
		size: "medium",
		disabled: false,
	},
};
