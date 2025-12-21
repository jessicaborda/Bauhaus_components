import type { CSSProperties, HTMLAttributes } from "react";
import type { ButtonVariant, Color } from "@/types";
import { Button } from "../Button/Button";
import styles from "./VerticalImageCard.module.css";

/**
 * VerticalImageCard component props
 */
export interface VerticalImageCardProps extends HTMLAttributes<HTMLDivElement> {
	/** Image source URL (required) */
	imageSrc: string;
	/** Image alt text */
	imageAlt?: string;
	/** Image height (e.g., "150px", "40%", "200px") */
	imageHeight?: string | number;
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
	/** Custom CSS class name */
	className?: string;
	/** Custom inline styles */
	style?: CSSProperties;
}

/**
 * VerticalImageCard Component
 *
 * A card container with Bauhaus-style design featuring:
 * - Image section at the top (full width, above tail)
 * - Main section with:
 *   - Title
 *   - Divider (6px red, 90% width)
 *   - Subtitle
 *   - Button
 * - Yellow tail accent (70% height, bottom-aligned, only in main)
 *
 * Structure:
 * ┌─────────────────────────────────────┐
 * │              IMAGE                  │
 * ├─────────────────────────────┬───────┤
 * │         TITLE               │       │
 * │  ─────────────────────────  │  Y    │
 * │         SUBTITLE            │  E    │
 * │         BUTTON              │  L    │
 * └─────────────────────────────┴───────┘
 */
export const VerticalImageCard = ({
	imageSrc,
	imageAlt = "",
	imageHeight = "40%",
	title,
	subtitle,
	tail = true,
	buttonVariant = "solid",
	buttonText = "Action",
	buttonColor = "blue",
	onButtonClick,
	buttonFill = false,
	minHeight = "400px",
	minWidth = "300px",
	className = "",
	style,
	...props
}: VerticalImageCardProps) => {
	const classNames = [styles["bh-vertical-image-card"], className]
		.filter(Boolean)
		.join(" ");
	const showButton = buttonVariant && buttonVariant !== "none";

	const cardStyle: CSSProperties = {
		minHeight,
		minWidth,
		...style,
	};

	const imageStyle: CSSProperties = {
		height: imageHeight,
	};

	return (
		<div className={classNames} style={cardStyle} {...props}>
			<div
				className={styles["bh-vertical-image-card__image"]}
				style={imageStyle}
			>
				<img src={imageSrc} alt={imageAlt} />
			</div>
			<div className={styles["bh-vertical-image-card__body"]}>
				<div className={styles["bh-vertical-image-card__main"]}>
					<div className={styles["bh-vertical-image-card__main-title"]}>
						{title}
					</div>
					<div className={styles["bh-vertical-image-card__main-divider"]} />
					<div className={styles["bh-vertical-image-card__main-subtitle"]}>
						{subtitle}
					</div>
					{showButton && (
						<div className={styles["bh-vertical-image-card__main-button"]}>
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
				{tail && <div className={styles["bh-vertical-image-card__tail"]} />}
			</div>
		</div>
	);
};
