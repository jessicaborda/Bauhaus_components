import styles from './Badge.module.css';

/**
 * Componente Badge
 * 
 * Una etiqueta pequeña para mostrar estados, categorías o información destacada.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido del badge (texto)
 * @param {string} props.variant - Variante de color: 'success', 'error', 'warning', 'info', 'neutral'
 * @param {string} props.size - Tamaño: 'small', 'medium'
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

