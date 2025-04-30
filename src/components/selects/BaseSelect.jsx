import React from 'react';
import styles from './BaseSelect.module.css';

const VARIANTS = ['primary', 'danger', 'success', 'warning'];
const SIZES = ['small', 'medium', 'large'];

export default function BaseSelect({
  children,
  placeholder,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  value,
  onChange,
  className = '',
  ...rest
}) {
  const wrapperCls = [styles['base-select-wrapper'], className]
    .filter(Boolean)
    .join(' ');

  const selectCls = [
    styles['base-select'],
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperCls}>
      <select
        className={selectCls}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <span className={styles['select-icon']} aria-hidden="true">
        ▾
      </span>
    </div>
  );
}
