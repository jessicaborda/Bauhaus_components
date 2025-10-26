import styles from './Input.module.css';

/**
 * Input component
 * 
 * A small, accessible input wrapper following the project's Card structure.
 */
export const Input = ({
  id,
  name,
  label,
  value,
  defaultValue,
  onChange,
  placeholder = '',
  type = 'text',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  error,
  onBlur,
  onFocus,
  ...props
}) => {
  const inputClass = [
    styles.input,
    styles[size] || '',
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    error ? styles.errorInput : '',
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClass = [styles.wrapper, fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        className={inputClass}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {error && (
        <div id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
