import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, Color } from "@/types";
import { Button } from "../Button/Button";
import styles from "./CardHeader.module.css";

/**
 * Button configuration for CardHeader
 */
export interface CardHeaderButtonConfig {
	/** Button text */
	text: string;
	/** Button variant */
	variant?: ButtonVariant;
	/** Button color */
	color?: Color;
	/** Click handler */
	onClick?: () => void;
}

/**
 * Media type options for CardHeader
 */
export type CardHeaderMediaType = "icon" | "banner" | "lateral";

/**
 * CardHeader component props
 */
export interface CardHeaderProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/** Header text */
	header: string;
	/** Main content */
	children?: ReactNode;
	/** Media to display: URL string or React element (e.g., inline SVG) */
	media?: string | ReactNode;
	/** Type of media: 'icon' (48x48 top-right), 'banner' (full-width), or 'lateral' (left side) */
	mediaType?: CardHeaderMediaType;
	/** Button configuration */
	button?: CardHeaderButtonConfig;
	/** Additional CSS class names */
	className?: string;
	/** Inline styles */
	style?: CSSProperties;
}

/**
 * CardHeader Component
 *
 * Structured card content with header, body, and action button.
 * Includes Bauhaus-style decorative elements.
 */
export const CardHeader = ({
	header,
	children,
	media,
	mediaType,
	button,
	className = "",
	style,
	...props
}: CardHeaderProps) => {
	// Check if media is a string (URL) or a React element
	const isMediaUrl = typeof media === "string";

	// Lateral layout: image on the left, content on the right
	if (mediaType === "lateral") {
		return (
			<div
				className={`${styles.container} ${className}`}
				style={style}
				{...props}
			>
				<div className={styles.lateralLayout}>
					{/* Lateral image */}
					{media && (
						<div className={styles.lateralImageWrapper}>
							{isMediaUrl ? (
								<img src={media} alt={header} className={styles.lateralImage} />
							) : (
								<div className={styles.lateralImage}>{media}</div>
							)}
						</div>
					)}

					{/* Content side */}
					<div className={styles.lateralContent}>
						{/* Header section */}
						<div className={styles.header}>
							<div className={styles.blueAccent}></div>
							<h3 className={styles.title}>{header}</h3>
						</div>

						{/* Red divider */}
						<div className={styles.redDivider}></div>

						{/* Content and button section */}
						<div className={styles.content}>
							<div className={styles.body}>
								{children}
								{button && (
									<div className={styles.buttonWrapper}>
										<Button
											variant={button.variant || "solid"}
											color={button.color || "blue"}
											onClick={button.onClick}
										>
											{button.text}
										</Button>
									</div>
								)}
							</div>
							{/* Yellow accent */}
							<div className={styles.yellowAccent}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Default layout: banner or icon
	return (
		<div
			className={`${styles.container} ${className}`}
			style={style}
			{...props}
		>
			{/* Header section with optional blue accent, icon, or banner */}
			<div className={styles.header}>
				{!media && <div className={styles.blueAccent}></div>}
				{media && mediaType === "banner" && (
					<div className={styles.imageWrapper}>
						{isMediaUrl ? (
							<img src={media} alt={header} className={styles.headerImage} />
						) : (
							<div className={styles.headerImage}>{media}</div>
						)}
					</div>
				)}
				{media && mediaType === "icon" && (
					<div className={styles.iconWrapper}>
						{isMediaUrl ? (
							<img src={media} alt="" className={styles.headerIcon} />
						) : (
							<div className={styles.headerIcon}>{media}</div>
						)}
					</div>
				)}
				<h3 className={styles.title}>{header}</h3>
			</div>

			{/* Red divider */}
			<div className={styles.redDivider}></div>

			{/* Content and button section */}
			<div className={styles.content}>
				<div className={styles.body}>
					{children}
					{button && (
						<div className={styles.buttonWrapper}>
							<Button
								variant={button.variant || "solid"}
								color={button.color || "blue"}
								onClick={button.onClick}
							>
								{button.text}
							</Button>
						</div>
					)}
				</div>
				{/* Yellow accent */}
				<div className={styles.yellowAccent}></div>
			</div>
		</div>
	);
};
