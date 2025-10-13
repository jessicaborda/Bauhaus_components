import React from 'react';
import styles from './Checkbox.module.css';

/**
 * Checkbox component
 *
 * Basic accessible checkbox scaffold modeled after Toggle component conventions.
 */
export const Checkbox = ({
  id,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  size = 'medium',
  ariaLabel,
  ...props
}) => {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  const wrapperClass = [styles.wrapper, styles[size], disabled ? styles.disabled : '']
    .filter(Boolean)
    .join(' ');

  const boxClass = [styles.box, disabled ? styles.disabledBox : ''].filter(Boolean).join(' ');

  return (
    <label className={wrapperClass} htmlFor={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        aria-label={ariaLabel || label}
        {...props}
      />

      <span className={boxClass} aria-hidden="true" />

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
