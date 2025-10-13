import styles from './Toggle.module.css';

/**
 * Toggle (switch) component
 *
 * Small, accessible toggle/switch following the project's component conventions.
 */
export const Toggle = ({
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
  const inputId = id || `toggle-${Math.random().toString(36).slice(2, 9)}`;

  const wrapperClass = [styles.wrapper, styles[size], disabled ? styles.disabled : '']
    .filter(Boolean)
    .join(' ');

  const switchClass = [styles.switch, disabled ? styles.disabledSwitch : '']
    .filter(Boolean)
    .join(' ');

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

      <span className={switchClass} aria-hidden="true">
        <span className={styles.knob} />
      </span>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Toggle;
