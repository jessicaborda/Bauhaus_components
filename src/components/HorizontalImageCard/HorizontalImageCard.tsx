import type { CSSProperties, HTMLAttributes } from "react";
import type { ButtonVariant, Color } from "@/types";
import { Button } from "../Button/Button";
import styles from "./HorizontalImageCard.module.css";

/**
 * HorizontalImageCard component props
 */
export interface HorizontalImageCardProps
	extends HTMLAttributes<HTMLDivElement> {
	/** Image source URL (required) */
	imageSrc: string;
	/** Card title (required) */
	title: string;
	/** Image alt text */
	imageAlt?: string;
	/** Card subtitle */
	subtitle?: string;
	/** Whether to show the tail accent section */
	tail?: boolean;
	/** Minimum height of the card */
	minHeight?: string | number;
	/** Minimum width of the card */
	minWidth?: string | number;
	/** Button variant (use 'none' or null to hide) */
	buttonVariant?: ButtonVariant | "none" | null;
	/** Button text */
	buttonText?: string;
	/** Button color */
	buttonColor?: Color;
	/** Button click handler */
	onButtonClick?: () => void;
	/** Whether button fills the full width */
	buttonFill?: boolean;
	/** Custom CSS class name */
	className?: string;
	/** Custom inline styles */
	style?: CSSProperties;
}

/**
 * HorizontalImageCard Component
 *
 * A card with horizontal layout featuring:
 * - Image section (left)
 * - Content section (center)
 * - Yellow tail accent (right, 70% height, bottom-aligned)
 *
 * Structure:
 * ┌──────────┬─────────────────────┬────┐
 * │          │                     │    │
 * │  IMAGE   │     Content         │    │
 * │          │                     │ Y  │
 * │          │                     │ E  │
 * │          │                     │ L  │
 * └──────────┴─────────────────────┴────┘
 */
export const HorizontalImageCard = ({
	imageSrc,
	title,
	imageAlt = "",
	subtitle,
	tail = true,
	minHeight = "300px",
	minWidth = "500px",
	buttonVariant = "solid",
	buttonText = "Action",
	buttonColor = "blue",
	onButtonClick,
	buttonFill = false,
	className = "",
	style,
	...props
}: HorizontalImageCardProps) => {
	const classNames = [styles["bh-horizontal-image-card"], className]
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
			<div className={styles["bh-horizontal-image-card__image"]}>
				<img src={imageSrc} alt={imageAlt} />
			</div>
			<div className={styles["bh-horizontal-image-card__content"]}>
				<div className={styles["bh-horizontal-image-card__content-title"]}>
					{title}
				</div>
				<div className={styles["bh-horizontal-image-card__content-divider"]} />
				<div className={styles["bh-horizontal-image-card__content-cta"]}>
					{subtitle && (
						<div
							className={
								styles["bh-horizontal-image-card__content-cta-subtitle"]
							}
						>
							{subtitle}
						</div>
					)}
					{showButton && (
						<div
							className={styles["bh-horizontal-image-card__content-cta-button"]}
						>
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
			</div>
			{tail && <div className={styles["bh-horizontal-image-card__tail"]} />}
		</div>
	);
};
