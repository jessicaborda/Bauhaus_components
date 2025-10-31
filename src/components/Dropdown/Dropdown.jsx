import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

function Dropdown({ label, items, className }) {
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocumentClick(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
        setHighlightIndex(-1);
      }
    }

    function onDocumentKey(e) {
      if (!open) return;
      const count = items ? items.length : 0;

      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current && buttonRef.current.focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((i) => Math.min(count - 1, i + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((i) => Math.max(0, i - 1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const item = items && items[highlightIndex];
        if (item && !item.disabled) {
          if (item.onClick) item.onClick();
          setOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('keydown', onDocumentKey);
    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('keydown', onDocumentKey);
    };
  }, [open, items, highlightIndex]);

  const toggle = () => {
    setOpen((o) => !o);
    setHighlightIndex(-1);
  };

  const handleItemClick = (item) => {
    if (!item || item.disabled) return;
    if (item.onClick) item.onClick();
    setOpen(false);
    buttonRef.current && buttonRef.current.focus();
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <button
        type="button"
        ref={buttonRef}
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
      >
        {label}
        <span className={styles.caret} aria-hidden="true" />
      </button>

      {open && (
        <ul className={styles.menu} role="menu" ref={menuRef}>
          {items && items.length > 0 ? (
            items.map((item, idx) => (
              <li key={idx} role="none">
                <button
                  type="button"
                  role="menuitem"
                  className={`${styles.item} ${highlightIndex === idx ? styles.highlight : ''} ${item.disabled ? styles.disabled : ''}`}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHighlightIndex(idx)}
                  disabled={item.disabled}
                >
                  {item.label}
                </button>
              </li>
            ))
          ) : (
            <li className={styles.empty} role="none">No items</li>
          )}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  /** Texto o nodo mostrado en el botón trigger */
  label: PropTypes.node,
  /** Lista de items: { label, onClick, disabled } */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  label: 'Options',
  items: [],
  className: '',
};

export default Dropdown;
