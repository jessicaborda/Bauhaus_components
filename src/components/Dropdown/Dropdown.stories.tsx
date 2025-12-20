import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

/**
 * Dropdown - Bauhaus-style dropdown menu with keyboard navigation.
 */
const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		size: {
			control: "select",
			options: ["small", "medium", "large"],
		},
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultItems = [
	{ label: "Edit", onClick: () => alert("Edit clicked") },
	{ label: "Duplicate", onClick: () => alert("Duplicate clicked") },
	{ label: "Archive", onClick: () => alert("Archive clicked") },
	{ label: "Delete", onClick: () => alert("Delete clicked") },
];

/**
 * Default - Dropdown with action items
 */
export const Default: Story = {
	args: {
		label: "Actions",
		items: defaultItems,
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
				flexWrap: "wrap",
				gap: "24px",
				padding: "24px",
			}}
		>
			<Dropdown label="Normal" items={defaultItems} />
			<Dropdown label="Disabled" items={defaultItems} disabled />
			<Dropdown
				label="With Disabled Item"
				items={[
					{ label: "Active", onClick: () => alert("Active") },
					{ label: "Disabled", onClick: () => {}, disabled: true },
					{ label: "Another", onClick: () => alert("Another") },
				]}
			/>
			<Dropdown label="Empty" items={[]} />
		</div>
	),
};

/**
 * AllSizes - Small, medium, and large dropdowns
 */
export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				gap: "24px",
				padding: "24px",
			}}
		>
			<Dropdown label="Small" size="small" items={defaultItems} />
			<Dropdown label="Medium" size="medium" items={defaultItems} />
			<Dropdown label="Large" size="large" items={defaultItems} />
		</div>
	),
};

/**
 * States - Different dropdown states
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
				<Dropdown label="Click me" items={defaultItems} />
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>Disabled</p>
				<Dropdown label="Disabled" items={defaultItems} disabled />
			</div>

			<div>
				<p style={{ marginBottom: "12px", fontWeight: "bold" }}>
					With Disabled Items
				</p>
				<Dropdown
					label="Options"
					items={[
						{ label: "Can click", onClick: () => alert("Clicked!") },
						{ label: "Cannot click", onClick: () => {}, disabled: true },
						{ label: "Can click too", onClick: () => alert("Clicked!") },
					]}
				/>
			</div>
		</div>
	),
};

/**
 * RealWorldExample - File menu example
 */
export const RealWorldExample: Story = {
	render: () => (
		<div
			style={{
				padding: "24px",
				display: "flex",
				gap: "8px",
				borderBottom: "2px solid #1A1A1A",
			}}
		>
			<Dropdown
				label="File"
				size="small"
				items={[
					{ label: "New", onClick: () => alert("New") },
					{ label: "Open", onClick: () => alert("Open") },
					{ label: "Save", onClick: () => alert("Save") },
					{ label: "Export", onClick: () => alert("Export") },
				]}
			/>
			<Dropdown
				label="Edit"
				size="small"
				items={[
					{ label: "Undo", onClick: () => alert("Undo") },
					{ label: "Redo", onClick: () => alert("Redo") },
					{ label: "Cut", onClick: () => alert("Cut") },
					{ label: "Copy", onClick: () => alert("Copy") },
					{ label: "Paste", onClick: () => alert("Paste") },
				]}
			/>
			<Dropdown
				label="View"
				size="small"
				items={[
					{ label: "Zoom In", onClick: () => alert("Zoom In") },
					{ label: "Zoom Out", onClick: () => alert("Zoom Out") },
					{ label: "Full Screen", onClick: () => alert("Full Screen") },
				]}
			/>
		</div>
	),
};

/**
 * Playground - Interactive dropdown with all controls
 */
export const Playground: Story = {
	args: {
		label: "Playground",
		size: "medium",
		disabled: false,
		items: [
			{ label: "Option 1", onClick: () => alert("Option 1 clicked!") },
			{ label: "Option 2", onClick: () => alert("Option 2 clicked!") },
			{ label: "Option 3", onClick: () => alert("Option 3 clicked!") },
		],
	},
	argTypes: {
		label: { control: "text" },
		size: {
			control: "select",
			options: ["small", "medium", "large"],
		},
		disabled: { control: "boolean" },
		items: { control: "object" },
	},
};
