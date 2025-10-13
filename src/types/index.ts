/**
 * Bauhaus UI - Shared Type Definitions
 *
 * Common types used across multiple components.
 */

import type {
	ChangeEventHandler,
	FocusEventHandler,
	MouseEventHandler,
	ReactNode,
} from "react";

/**
 * Available component sizes
 */
export type Size = "small" | "medium" | "large";

/**
 * Available color variants
 */
export type Color = "blue" | "red" | "yellow" | "green" | "orange" | "purple";

/**
 * Button variants
 */
export type ButtonVariant = "solid" | "outline" | "text";

/**
 * HTML button types
 */
export type ButtonType = "button" | "submit" | "reset";

/**
 * Common props shared across form components
 */
export interface BaseFormProps {
	/** Unique identifier */
	id?: string;
	/** Input name attribute */
	name?: string;
	/** Whether the component is disabled */
	disabled?: boolean;
}

/**
 * Common props for components with labels
 */
export interface LabeledProps {
	/** Label text displayed above/beside the component */
	label?: ReactNode;
}

/**
 * Common props for full-width components
 */
export interface FullWidthProps {
	/** Whether the component takes full width of its container */
	fullWidth?: boolean;
}

/**
 * Dropdown menu item
 */
export interface DropdownItem {
	/** Display label for the item */
	label: ReactNode;
	/** Click handler for the item */
	onClick?: () => void;
	/** Whether the item is disabled */
	disabled?: boolean;
}

/**
 * Re-export common React types for convenience
 */
export type {
	ReactNode,
	MouseEventHandler,
	FocusEventHandler,
	ChangeEventHandler,
};
