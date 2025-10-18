import styles from './Badge.module.css';

/**
 * Badge Component
 * 
 * Small label for displaying status, categories, or highlighted information.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Badge content (text)
 * @param {string} props.variant - Color variant: 'success', 'error', 'warning', 'info', 'neutral'
 * @param {string} props.size - Size: 'small', 'medium'
 */
export const Badge = ({
  children,
  variant = 'neutral',
  size = 'medium',
  ...props
}) => {
  const classNames = [
    styles.badge,
    styles[variant],
    styles[size],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

