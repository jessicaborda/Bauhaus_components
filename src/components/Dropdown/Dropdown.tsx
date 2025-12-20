import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { DropdownItem, Size } from "@/types";
import styles from "./Dropdown.module.css";

/**
 * Dropdown component props
 */
export interface DropdownProps {
	/** Text or node displayed on the trigger button */
	label?: ReactNode;
	/** List of dropdown items */
	items?: DropdownItem[];
	/** Dropdown size */
	size?: Size;
	/** Whether dropdown is disabled */
	disabled?: boolean;
	/** Custom CSS class name */
	className?: string;
}

/**
 * Dropdown Component
 *
 * Bauhaus-style dropdown menu with keyboard navigation support.
 */
export const Dropdown = ({
	label = "Options",
	items = [],
	size = "medium",
	disabled = false,
	className = "",
}: DropdownProps) => {
	const [open, setOpen] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onDocumentClick = (e: MouseEvent) => {
			if (
				open &&
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				setOpen(false);
				setHighlightIndex(-1);
			}
		};

		const onDocumentKey = (e: KeyboardEvent) => {
			if (!open) return;
			const count = items ? items.length : 0;

			if (e.key === "Escape") {
				setOpen(false);
				buttonRef.current?.focus();
			} else if (e.key === "ArrowDown") {
				e.preventDefault();
				setHighlightIndex((i) => Math.min(count - 1, i + 1));
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setHighlightIndex((i) => Math.max(0, i - 1));
			} else if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				const item = items?.[highlightIndex];
				if (item && !item.disabled) {
					item.onClick?.();
					setOpen(false);
				}
			}
		};

		document.addEventListener("mousedown", onDocumentClick);
		document.addEventListener("keydown", onDocumentKey);
		return () => {
			document.removeEventListener("mousedown", onDocumentClick);
			document.removeEventListener("keydown", onDocumentKey);
		};
	}, [open, items, highlightIndex]);

	const toggle = () => {
		if (disabled) return;
		setOpen((o) => !o);
		setHighlightIndex(-1);
	};

	const handleItemClick = (item: DropdownItem) => {
		if (!item || item.disabled) return;
		item.onClick?.();
		setOpen(false);
		buttonRef.current?.focus();
	};

	const containerClass = [
		styles["bh-dropdown"],
		styles[`bh-dropdown--${size}`],
		disabled ? styles["bh-dropdown--disabled"] : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const getItemClass = (idx: number, item: DropdownItem) =>
		[
			styles["bh-dropdown__item"],
			highlightIndex === idx ? styles["bh-dropdown__item--highlight"] : "",
			item.disabled ? styles["bh-dropdown__item--disabled"] : "",
		]
			.filter(Boolean)
			.join(" ");

	return (
		<div className={containerClass}>
			<button
				type="button"
				ref={buttonRef}
				className={styles["bh-dropdown__trigger"]}
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={toggle}
				disabled={disabled}
			>
				{label}
				<span className={styles["bh-dropdown__caret"]} aria-hidden="true" />
			</button>

			{open && (
				<div className={styles["bh-dropdown__menu"]} role="menu" ref={menuRef}>
					{items && items.length > 0 ? (
						items.map((item, idx) => (
							<div key={String(item.label)} role="none">
								<button
									type="button"
									role="menuitem"
									className={getItemClass(idx, item)}
									onClick={() => handleItemClick(item)}
									onMouseEnter={() => setHighlightIndex(idx)}
									disabled={item.disabled}
								>
									{item.label}
								</button>
							</div>
						))
					) : (
						<div className={styles["bh-dropdown__empty"]} role="none">
							No items
						</div>
					)}
				</div>
			)}
		</div>
	);
};
