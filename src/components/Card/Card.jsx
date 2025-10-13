import styles from './Card.module.css';

/**
 * Componente Card
 * 
 * Una tarjeta contenedora con borde y sombra opcional.
 * Ideal para agrupar contenido relacionado.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {boolean} props.shadow - Si la tarjeta tiene sombra
 * @param {boolean} props.bordered - Si la tarjeta tiene borde
 * @param {boolean} props.hoverable - Si la tarjeta tiene efecto hover
 * @param {string} props.padding - Tamaño del padding: 'small', 'medium', 'large'
 * @param {Function} props.onClick - Función a ejecutar al hacer click (opcional)
 */
export const Card = ({
  children,
  shadow = false,
  bordered = true,
  hoverable = false,
  padding = 'medium',
  onClick,
  ...props
}) => {
  const classNames = [
    styles.card,
    shadow ? styles.shadow : '',
    bordered ? styles.bordered : '',
    hoverable ? styles.hoverable : '',
    styles[`padding-${padding}`],
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

