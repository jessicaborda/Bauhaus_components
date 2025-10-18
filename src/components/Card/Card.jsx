import styles from './Card.module.css';

/**
 * Card Component
 * 
 * Container card with optional shadow and hover effect.
 * Ideal for grouping related content.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.shadow - Whether card has shadow
 * @param {boolean} props.hoverable - Whether card has hover effect
 * @param {Function} props.onClick - Click handler function (optional)
 */
export const Card = ({
  children,
  shadow = false,
  hoverable = false,
  onClick,
  ...props
}) => {
  const classNames = [
    styles.card,
    shadow ? styles.shadow : '',
    hoverable ? styles.hoverable : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isClickable = Boolean(onClick);

  return (
    <div
      className={classNames}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

