import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";
import styles from "./Toggle.module.css";

/**
 * Toggle component props
 */
export interface ToggleProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
	/** Unique identifier */
	id?: string;
	/** Input name attribute */
	name?: string;
	/** Controlled checked state */
	checked?: boolean;
	/** Default checked state (uncontrolled) */
	defaultChecked?: boolean;
	/** Change handler (full event) */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	/** Simple change handler (just the boolean value) */
	onCheckedChange?: (checked: boolean) => void;
	/** Whether toggle is disabled */
	disabled?: boolean;
	/** Label text displayed beside the toggle */
	label?: ReactNode;
	/** Toggle size */
	size?: Size;
	/** Custom CSS class name */
	className?: string;
	/** Accessible label for screen readers */
	ariaLabel?: string;
}

/**
 * Toggle (switch) component
 *
 * Bauhaus-style toggle switch with sliding knob indicator.
 */
export const Toggle = ({
	id,
	name,
	checked,
	defaultChecked,
	onChange,
	onCheckedChange,
	disabled = false,
	label,
	size = "medium",
	className = "",
	ariaLabel,
	...props
}: ToggleProps) => {
	const inputId = id || `toggle-${Math.random().toString(36).slice(2, 9)}`;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event);
		onCheckedChange?.(event.target.checked);
	};

	const wrapperClass = [
		styles["bh-toggle"],
		styles[`bh-toggle--${size}`],
		disabled ? styles["bh-toggle--disabled"] : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<label className={wrapperClass} htmlFor={inputId}>
			<input
				id={inputId}
				name={name}
				type="checkbox"
				className={styles["bh-toggle__input"]}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={handleChange}
				disabled={disabled}
				aria-label={
					ariaLabel || (typeof label === "string" ? label : undefined)
				}
				{...props}
			/>

			<span className={styles["bh-toggle__switch"]} aria-hidden="true">
				<span className={styles["bh-toggle__knob"]} />
			</span>

			{label && <span className={styles["bh-toggle__label"]}>{label}</span>}
		</label>
	);
};
