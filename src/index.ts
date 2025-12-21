/**
 * Bauhaus UI - Minimalist UI Kit
 *
 * Main entry point for the library.
 * Exports all available components and their types.
 *
 * Usage:
 * import { Button, Input, VerticalTitleCard } from '@ars-design/bauhaus-ui';
 * import '@ars-design/bauhaus-ui/styles';
 */

// Export component prop types
export type { ButtonProps } from "./components/Button";
// Export components
export { Button } from "./components/Button";
export type { CardProps } from "./components/Card";
export { Card } from "./components/Card";
export type { CheckboxProps } from "./components/Checkbox";
export { Checkbox } from "./components/Checkbox";
export type { DropdownProps } from "./components/Dropdown";
export { Dropdown } from "./components/Dropdown";
export type { HorizontalImageCardProps } from "./components/HorizontalImageCard";
export { HorizontalImageCard } from "./components/HorizontalImageCard";
export type { InputProps } from "./components/Input";
export { Input } from "./components/Input";
export type { ToggleProps } from "./components/Toggle";
export { Toggle } from "./components/Toggle";
export type { VerticalImageCardProps } from "./components/VerticalImageCard";
export { VerticalImageCard } from "./components/VerticalImageCard";
export type { VerticalTitleCardProps } from "./components/VerticalTitleCard";
export { VerticalTitleCard } from "./components/VerticalTitleCard";

// Export shared types
export type {
	ButtonType,
	ButtonVariant,
	Color,
	DropdownItem,
	Size,
} from "./types";

// Import global styles
import "./styles/variables.css";
import "./styles/global.css";
