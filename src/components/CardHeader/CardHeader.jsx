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
 * @param {string|React.ReactNode} props.media - Media to display: URL string or React element (e.g., inline SVG)
 * @param {string} props.mediaType - Type of media: 'icon' (48x48 top-right), 'banner' (full-width), or 'lateral' (left side)
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
  // Check if media is a string (URL) or a React element
  const isMediaUrl = typeof media === 'string';

  // Lateral layout: image on the left, content on the right
  if (mediaType === 'lateral') {
    return (
      <div className={styles.container} {...props}>
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
        </div>
      </div>
    );
  }

  // Default layout: banner or icon
  return (
    <div className={styles.container} {...props}>
      {/* Header section with optional blue accent, icon, or banner */}
      <div className={styles.header}>
        {!media && <div className={styles.blueAccent}></div>}
        {media && mediaType === 'banner' && (
          <div className={styles.imageWrapper}>
            {isMediaUrl ? (
              <img src={media} alt={header} className={styles.headerImage} />
            ) : (
              <div className={styles.headerImage}>{media}</div>
            )}
          </div>
        )}
        {media && mediaType === 'icon' && (
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

