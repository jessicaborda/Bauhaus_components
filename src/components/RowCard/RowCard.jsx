import styles from './RowCard.module.css';

/**
 * RowCard Component
 * 
 * Horizontal card container with optional shadow and hover effect.
 * Ideal for list items and horizontal layouts.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.shadow - Whether card has shadow
 * @param {boolean} props.hoverable - Whether card has hover effect
 * @param {Function} props.onClick - Click handler function (optional)
 * @param {string} props.className - Custom CSS class name (optional)
 * @param {Object} props.style - Custom inline styles (optional)
 */
export const RowCard = ({
  children,
  shadow = false,
  hoverable = false,
  onClick,
  className = '',
  style,
  ...props
}) => {
  const classNames = [
    styles.rowcard,
    shadow ? styles.shadow : '',
    hoverable ? styles.hoverable : '',
    className, // Allow custom className
  ]
    .filter(Boolean)
    .join(' ');

  const isClickable = Boolean(onClick);

  return (
    <div
      className={classNames}
      style={style} // Allow custom inline styles
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};