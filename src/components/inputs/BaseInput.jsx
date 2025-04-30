import React from 'react';
import styles from './BaseInput.module.css';

const VARIANTS = ['primary', 'danger', 'success', 'warning'];
const SIZES = ['small', 'medium', 'large'];

export default function BaseInput({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  className = '',
  ...rest
}) {
  const wrapperCls = [styles['base-input-wrapper'], className]
    .filter(Boolean)
    .join(' ');

  const inputCls = [
    styles['base-input'],
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    disabled && styles.disabled,
    loading && styles.loading,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperCls} aria-disabled={disabled || loading}>
      {!loading && icon && <span className={styles['input-icon']}>{icon}</span>}
      <input className={inputCls} disabled={disabled || loading} {...rest} />
      {loading && (
        <span className={styles['input-spinner']} aria-hidden="true">
          ⏳
        </span>
      )}
    </div>
  );
}
