import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, Color } from "@/types";
import { Button } from "../Button/Button";
import styles from "./Card.module.css";

/**
 * Card component props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	/** Card title */
	title?: string;
	/** Card subtitle */
	subtitle?: string;
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
	/** Card content for the main section */
	children?: ReactNode;
	/** Custom CSS class name */
	className?: string;
	/** Custom inline styles */
	style?: CSSProperties;
}

/**
 * Card Component
 *
 * A card container with Bauhaus-style design featuring:
 * - Main section with 5 vertical subsections:
 *   - Accent
 *   - Title
 *   - Divider (6px red, 90% width)
 *   - Subtitle
 *   - Button
 * - Yellow tail accent (70% height, bottom-aligned)
 *
 * Structure:
 * ┌─────────────────────────────┬────┐
 * │         ACCENT              │    │
 * │         TITLE               │    │
 * │  ─────────────────────────  │ Y  │
 * │         SUBTITLE            │ E  │
 * │         BUTTON              │ L  │
 * └─────────────────────────────┴────┘
 */
export const Card = ({
	title,
	subtitle,
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
}: CardProps) => {
	const classNames = [styles["bh-card"], className].filter(Boolean).join(" ");
	const showButton = buttonVariant && buttonVariant !== "none";

	const cardStyle: CSSProperties = {
		minHeight,
		minWidth,
		...style,
	};

	return (
		<div className={classNames} style={cardStyle} {...props}>
			<div className={styles["bh-card__main"]}>
				<div className={styles["bh-card__main-accent"]} />
				<div className={styles["bh-card__main-title"]}>{title}</div>
				<div className={styles["bh-card__main-divider"]} />
				<div className={styles["bh-card__main-subtitle"]}>
					{subtitle && <div>{subtitle}</div>}
					{children}
				</div>
				{showButton && (
					<div className={styles["bh-card__main-button"]}>
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
			{tail && <div className={styles["bh-card__tail"]} />}
		</div>
	);
};
