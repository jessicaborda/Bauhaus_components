import type {
	ChangeEvent,
	FocusEvent,
	InputHTMLAttributes,
	ReactNode,
} from "react";
import type { Size } from "@/types";
import styles from "./Input.module.css";

/**
 * Input component props
 */
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	/** Unique identifier */
	id?: string;
	/** Input name attribute */
	name?: string;
	/** Label text displayed above the input */
	label?: ReactNode;
	/** Input value (controlled) */
	value?: string;
	/** Default input value (uncontrolled) */
	defaultValue?: string;
	/** Change handler */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	/** Placeholder text */
	placeholder?: string;
	/** Input type */
	type?: string;
	/** Input size */
	size?: Size;
	/** Whether input is disabled */
	disabled?: boolean;
	/** Whether input takes full width */
	fullWidth?: boolean;
	/** Error message to display */
	error?: ReactNode;
	/** Custom CSS class name */
	className?: string;
	/** Blur handler */
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	/** Focus handler */
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input component
 *
 * A small, accessible input wrapper following the project's Card structure.
 */
export const Input = ({
	id,
	name,
	label,
	value,
	defaultValue,
	onChange,
	placeholder = "",
	type = "text",
	size = "medium",
	disabled = false,
	fullWidth = false,
	error,
	className = "",
	onBlur,
	onFocus,
	...props
}: InputProps) => {
	const inputClass = [
		styles["bh-input__field"],
		styles[`bh-input__field--${size}`] || "",
		fullWidth ? styles["bh-input--full-width"] : "",
		disabled ? styles["bh-input__field--disabled"] : "",
		error ? styles["bh-input__field--error"] : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const wrapperClass = [
		styles["bh-input"],
		fullWidth ? styles["bh-input--full-width"] : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={wrapperClass}>
			{label && (
				<label htmlFor={id} className={styles["bh-input__label"]}>
					{label}
				</label>
			)}

			<input
				id={id}
				name={name}
				className={inputClass}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				disabled={disabled}
				onBlur={onBlur}
				onFocus={onFocus}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : undefined}
				{...props}
			/>

			{error && (
				<div
					id={`${id}-error`}
					className={styles["bh-input__error"]}
					role="alert"
				>
					{error}
				</div>
			)}
		</div>
	);
};
