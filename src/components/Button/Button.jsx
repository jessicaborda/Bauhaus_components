import styles from './Button.module.css';

/**
 * Componente Button
 * 
 * Un botón versátil con múltiples variantes y tamaños.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.variant - Variante del botón: 'default', 'warning', 'danger', 'success'
 * @param {string} props.type - Tipo de botón: 'button', 'submit', 'reset'
 * @param {string} props.size - Tamaño del botón: 'small', 'medium', 'large'
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {boolean} props.fullWidth - Si el botón ocupa todo el ancho disponible
 * @param {Function} props.onClick - Función a ejecutar al hacer click
 * @param {React.ReactNode} props.children - Contenido del botón
 */
export const Button = ({
  children,
  variant = 'default',
  type = 'button',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[type],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

