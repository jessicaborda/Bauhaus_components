import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, Color } from "@/types";
import { Button } from "../Button/Button";
import styles from "./VerticalTitleCard.module.css";

/**
 * VerticalTitleCard component props
 */
export interface VerticalTitleCardProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
	/** Card title - displayed vertically rotated 90deg (required) */
	title: string;
	/** Optional icon displayed below the accent */
	icon?: ReactNode;
	/** Whether to show the tail accent section */
	tail?: boolean;
	/** Button variant - 'none' or null to hide button */
	buttonVariant?: ButtonVariant | "none" | null;
	/** Button text */
	buttonText?: string;
	/** Button color */
	buttonColor?: Color;
	/** Button click handler */
	onButtonClick?: () => void;
	/** Whether button fills the full width */
	buttonFill?: boolean;
	/** Minimum height of the card */
	minHeight?: string | number;
	/** Minimum width of the card */
	minWidth?: string | number;
	/** Card content */
	children?: ReactNode;
	/** Custom CSS class name */
	className?: string;
	/** Custom inline styles */
	style?: CSSProperties;
}

/**
 * VerticalTitleCard Component
 *
 * A card container with Bauhaus-style design featuring:
 * - Vertical rotated title with optional icon
 * - Red divider accent (90% height, top-aligned)
 * - Content area with optional action button
 * - Yellow tail accent (70% height, bottom-aligned)
 *
 * Structure:
 * ┌─────────┬───┬─────────────────────┬────┐
 * │  Title  │ R │                     │    │
 * │  (rot)  │ E │     Content         │    │
 * │         │ D │                     │ Y  │
 * │ [accent]│   │                     │ E  │
 * │ [icon]  │   │     [Button]        │ L  │
 * └─────────┴───┴─────────────────────┴────┘
 */
export const VerticalTitleCard = ({
	title,
	icon,
	tail = true,
	buttonVariant = "solid",
	buttonText = "Action",
	buttonColor = "blue",
	onButtonClick,
	buttonFill = false,
	minHeight = "300px",
	minWidth = "400px",
	children,
	className = "",
	style,
	...props
}: VerticalTitleCardProps) => {
	const classNames = [styles["bh-vertical-title-card"], className]
		.filter(Boolean)
		.join(" ");
	const showButton = buttonVariant && buttonVariant !== "none";

	const cardStyle: CSSProperties = {
		minHeight,
		minWidth,
		...style,
	};

	return (
		<div className={classNames} style={cardStyle} {...props}>
			<div className={styles["bh-vertical-title-card__title"]}>
				<div className={styles["bh-vertical-title-card__title-text"]}>
					<span
						className={styles["bh-vertical-title-card__title-text-content"]}
					>
						{title}
					</span>
				</div>
				{!icon && (
					<div className={styles["bh-vertical-title-card__title-accent"]} />
				)}
				<div className={styles["bh-vertical-title-card__title-icon"]}>
					{icon}
				</div>
			</div>
			<div className={styles["bh-vertical-title-card__divider"]} />
			<div className={styles["bh-vertical-title-card__content"]}>
				<div className={styles["bh-vertical-title-card__content-body"]}>
					{children}
				</div>
				{showButton && (
					<div className={styles["bh-vertical-title-card__content-action"]}>
						<Button
							variant={buttonVariant}
							color={buttonColor}
							fullWidth={buttonFill}
							onClick={onButtonClick}
						>
							{buttonText}
						</Button>
					</div>
				)}
			</div>
			{tail && <div className={styles["bh-vertical-title-card__tail"]} />}
		</div>
	);
};
