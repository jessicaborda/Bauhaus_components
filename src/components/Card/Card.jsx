import styles from './Card.module.css';

/**
 * Card Component
 * 
 * Container card with optional border and shadow.
 * Ideal for grouping related content.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.shadow - Whether card has shadow
 * @param {boolean} props.bordered - Whether card has border
 * @param {boolean} props.hoverable - Whether card has hover effect
 * @param {string} props.padding - Padding size: 'small', 'medium', 'large'
 * @param {Function} props.onClick - Click handler function (optional)
 */
export const Card = ({
  children,
  shadow = false,
  bordered = true,
  hoverable = false,
  padding = 'small',
  onClick,
  ...props
}) => {
  const classNames = [
    styles.card,
    shadow ? styles.shadow : '',
    bordered ? styles.bordered : '',
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

