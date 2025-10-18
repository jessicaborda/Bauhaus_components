import styles from './Button.module.css';

/**
 * Button Component
 * 
 * Versatile button with multiple variants, colors, and sizes.
 * Inspired by Bauhaus design with solid borders and clean geometry.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.variant - Button style: 'solid', 'outline', 'text'
 * @param {string} props.color - Button color: 'blue', 'red', 'yellow', 'green', 'orange', 'purple'
 * @param {string} props.type - HTML button type: 'button', 'submit', 'reset'
 * @param {string} props.size - Button size: 'small', 'medium', 'large'
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.fullWidth - Whether button takes full width
 * @param {Function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 */
export const Button = ({
  children,
  variant = 'solid',
  color = 'blue',
  type = 'button',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  // Build CSS classes
  const classNames = [
    styles.button,
    styles[variant],
    styles[`color-${color}`],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

