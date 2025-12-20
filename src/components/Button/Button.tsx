import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { ButtonType, ButtonVariant, Color, Size } from "@/types";
import styles from "./Button.module.css";

/**
 * Button component props
 */
export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
	/** Button content */
	children: ReactNode;
	/** Button style variant */
	variant?: ButtonVariant;
	/** Button color */
	color?: Color;
	/** HTML button type */
	type?: ButtonType;
	/** Button size */
	size?: Size;
	/** Whether button is disabled */
	disabled?: boolean;
	/** Whether button takes full width */
	fullWidth?: boolean;
	/** Custom CSS class name */
	className?: string;
	/** Click handler function */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button Component
 *
 * Versatile button with multiple variants, colors, and sizes.
 * Inspired by Bauhaus design with solid borders and clean geometry.
 */
export const Button = ({
	children,
	variant = "solid",
	color = "blue",
	type = "button",
	size = "medium",
	disabled = false,
	fullWidth = false,
	className = "",
	onClick,
	...props
}: ButtonProps) => {
	// Build CSS classes
	const classNames = [
		styles.button,
		styles[variant],
		styles[`color-${color}`],
		styles[size],
		fullWidth ? styles.fullWidth : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			className={classNames}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};
