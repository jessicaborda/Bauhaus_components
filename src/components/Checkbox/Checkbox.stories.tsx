import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

/**
 * Checkbox - Bauhaus-style checkbox with diamond indicator.
 */
const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

/**
 * Default - Unchecked checkbox with label
 */
export const Default: Story = {
	args: {
		label: "Accept terms and conditions",
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
			<Checkbox label="Unchecked" />
			<Checkbox label="Checked" defaultChecked />
			<Checkbox label="Disabled unchecked" disabled />
			<Checkbox label="Disabled checked" defaultChecked disabled />
		</div>
	),
};

/**
 * AllSizes - Small, medium, and large checkboxes
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
				<Checkbox label="Small" size="small" />
				<Checkbox label="Small checked" size="small" defaultChecked />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
				<Checkbox label="Medium (default)" size="medium" />
				<Checkbox label="Medium checked" size="medium" defaultChecked />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
				<Checkbox label="Large" size="large" />
				<Checkbox label="Large checked" size="large" defaultChecked />
			</div>
		</div>
	),
};

/**
 * States - Different checkbox states
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
					<Checkbox label="Unchecked" />
					<Checkbox label="Checked" defaultChecked />
				</div>
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Disabled</p>
				<div style={{ display: "flex", gap: "24px" }}>
					<Checkbox label="Disabled" disabled />
					<Checkbox label="Disabled checked" defaultChecked disabled />
				</div>
			</div>
		</div>
	),
};

/**
 * WithoutLabel - Checkbox without visible label
 */
export const WithoutLabel: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "24px", padding: "24px" }}>
			<Checkbox ariaLabel="Option 1" />
			<Checkbox ariaLabel="Option 2" defaultChecked />
			<Checkbox ariaLabel="Option 3" />
		</div>
	),
};

/**
 * FormExample - Real-world form usage
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
			<h3 style={{ margin: "0 0 24px 0", fontSize: "20px" }}>Preferences</h3>
			<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
				<Checkbox
					name="newsletter"
					label="Subscribe to newsletter"
					defaultChecked
				/>
				<Checkbox name="updates" label="Receive product updates" />
				<Checkbox name="marketing" label="Allow marketing emails" />
				<Checkbox name="terms" label="I agree to the terms of service" />
			</div>
		</div>
	),
};

/**
 * Playground - Interactive checkbox with all controls
 */
export const Playground: Story = {
	args: {
		label: "Playground checkbox",
		size: "medium",
		disabled: false,
	},
};
