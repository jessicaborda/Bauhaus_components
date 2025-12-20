import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

/**
 * Input - Bauhaus-style input with underline focus effect.
 */
const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		placeholder: { control: "text" },
		size: {
			control: "select",
			options: ["small", "medium", "large"],
		},
		type: {
			control: "select",
			options: ["text", "email", "password", "number", "tel", "url"],
		},
		disabled: { control: "boolean" },
		fullWidth: { control: "boolean" },
		error: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Default - Input with label
 */
export const Default: Story = {
	args: {
		id: "default",
		label: "Name",
		placeholder: "Enter your name",
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
				maxWidth: "600px",
			}}
		>
			<Input id="basic" label="Basic" placeholder="Standard input" />

			<Input id="no-label" placeholder="Without label" />

			<Input
				id="with-error"
				label="With Error"
				placeholder="Invalid value"
				error="This field is required"
			/>

			<Input
				id="disabled-input"
				label="Disabled"
				placeholder="Cannot edit"
				disabled
			/>
		</div>
	),
};

/**
 * AllSizes - Small, medium, and large inputs
 */
export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
				maxWidth: "400px",
			}}
		>
			<div>
				<p
					style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}
				>
					Small
				</p>
				<Input id="small" size="small" placeholder="Small input" />
			</div>

			<div>
				<p
					style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}
				>
					Medium (default)
				</p>
				<Input id="medium" size="medium" placeholder="Medium input" />
			</div>

			<div>
				<p
					style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}
				>
					Large
				</p>
				<Input id="large" size="large" placeholder="Large input" />
			</div>
		</div>
	),
};

/**
 * InputTypes - Different input types
 */
export const InputTypes: Story = {
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "24px",
				padding: "24px",
				maxWidth: "600px",
			}}
		>
			<Input id="text" label="Text" type="text" placeholder="Enter text" />

			<Input
				id="email"
				label="Email"
				type="email"
				placeholder="email@example.com"
			/>

			<Input
				id="password"
				label="Password"
				type="password"
				placeholder="••••••••"
			/>

			<Input id="number" label="Number" type="number" placeholder="0" />

			<Input
				id="tel"
				label="Phone"
				type="tel"
				placeholder="+1 (555) 000-0000"
			/>

			<Input
				id="url"
				label="URL"
				type="url"
				placeholder="https://example.com"
			/>
		</div>
	),
};

/**
 * States - Error and disabled states
 */
export const States: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
				maxWidth: "400px",
			}}
		>
			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Normal</p>
				<Input id="normal" label="Email" placeholder="your@email.com" />
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>With Error</p>
				<Input
					id="error"
					label="Email"
					placeholder="your@email.com"
					defaultValue="invalid-email"
					error="Please enter a valid email address"
				/>
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Disabled</p>
				<Input
					id="disabled"
					label="Email"
					placeholder="Cannot edit"
					defaultValue="disabled@email.com"
					disabled
				/>
			</div>
		</div>
	),
};

/**
 * FullWidth - Input that spans container width
 */
export const FullWidth: Story = {
	render: () => (
		<div style={{ padding: "24px", width: "100%" }}>
			<Input
				id="full-width"
				label="Full Width Input"
				placeholder="This input spans the entire container width"
				fullWidth
			/>
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
			<h3 style={{ margin: "0 0 24px 0", fontSize: "20px" }}>Contact Form</h3>
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<Input
					id="form-name"
					label="Full Name"
					placeholder="John Doe"
					fullWidth
				/>
				<Input
					id="form-email"
					label="Email Address"
					type="email"
					placeholder="john@example.com"
					fullWidth
				/>
				<Input
					id="form-phone"
					label="Phone (optional)"
					type="tel"
					placeholder="+1 (555) 000-0000"
					fullWidth
				/>
			</div>
		</div>
	),
};

/**
 * Playground - Interactive input with all controls
 */
export const Playground: Story = {
	args: {
		id: "playground",
		label: "Playground",
		placeholder: "Use the controls panel to customize",
		size: "medium",
		type: "text",
		disabled: false,
		fullWidth: false,
	},
};
