import styles from './CardHeader.module.css';
import { Button } from '../Button/Button';

/**
 * CardHeader Component
 * 
 * Structured card content with header, body, and action button.
 * Includes Bauhaus-style decorative elements.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.header - Header text
 * @param {React.ReactNode} props.children - Main content
 * @param {string} props.media - Media URL (image/icon) to display in header
 * @param {string} props.mediaType - Type of media: 'icon' (48x48 top-right) or 'banner' (full-width)
 * @param {Object} props.button - Button configuration
 * @param {string} props.button.text - Button text
 * @param {string} props.button.variant - Button variant: 'solid', 'outline', 'text'
 * @param {string} props.button.color - Button color
 * @param {Function} props.button.onClick - Button click handler
 */
export const CardHeader = ({
  header,
  children,
  media,
  mediaType,
  button,
  ...props
}) => {
  return (
    <div className={styles.container} {...props}>
      {/* Header section with optional blue accent, icon, or banner */}
      <div className={styles.header}>
        {!media && <div className={styles.blueAccent}></div>}
        {media && mediaType === 'banner' && (
          <div className={styles.imageWrapper}>
            <img src={media} alt={header} className={styles.headerImage} />
          </div>
        )}
        {media && mediaType === 'icon' && (
          <div className={styles.iconWrapper}>
            <img src={media} alt="" className={styles.headerIcon} />
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
                variant={button.variant || 'solid'}
                color={button.color || 'blue'}
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

