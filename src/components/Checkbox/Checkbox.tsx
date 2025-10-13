import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";
import styles from "./Checkbox.module.css";

/**
 * Checkbox component props
 */
export interface CheckboxProps
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
	/** Whether checkbox is disabled */
	disabled?: boolean;
	/** Label text displayed beside the checkbox */
	label?: ReactNode;
	/** Checkbox size */
	size?: Size;
	/** Custom CSS class name */
	className?: string;
	/** Accessible label for screen readers */
	ariaLabel?: string;
}

/**
 * Checkbox component
 *
 * Bauhaus-style checkbox with diamond indicator when checked.
 */
export const Checkbox = ({
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
}: CheckboxProps) => {
	const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event);
		onCheckedChange?.(event.target.checked);
	};

	const wrapperClass = [
		styles["bh-checkbox"],
		styles[`bh-checkbox--${size}`],
		disabled ? styles["bh-checkbox--disabled"] : "",
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
				className={styles["bh-checkbox__input"]}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={handleChange}
				disabled={disabled}
				aria-label={
					ariaLabel || (typeof label === "string" ? label : undefined)
				}
				{...props}
			/>

			<span className={styles["bh-checkbox__box"]} aria-hidden="true" />

			{label && <span className={styles["bh-checkbox__label"]}>{label}</span>}
		</label>
	);
};
