'use client';

import React from 'react';
import styles from './BaseLabel.module.css';

export default function BaseLabel({
  htmlFor,
  children,
  required = false,
  description,
  error,
  visuallyHidden = false,
  tooltip,
  variant = 'stacked', // 'stacked' | 'inline'
  size = 'medium', // 'small' | 'medium' | 'large'
  className = '',
  ...rest
}) {
  const wrapperClassNames = [styles['base-label-wrapper'], className]
    .filter(Boolean)
    .join(' ');

  const labelCls = [
    styles['base-label'],
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    error ? styles['state-error'] : styles['state-default'],
    visuallyHidden && styles['visually-hidden'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      <label htmlFor={htmlFor} className={labelCls} {...rest}>
        <span className={styles['label-text']}>{children}</span>
        {required && (
          <span className={styles['required-indicator']} aria-hidden="true">
            *
          </span>
        )}
        {tooltip && (
          <span
            className={styles['tooltip-icon']}
            role="tooltip"
            aria-label={tooltip}
          >
            ℹ️
          </span>
        )}
      </label>

      {/* description은 error가 없을 때만, error는 항상 표시 */}
      {error ? (
        <p className={styles['error-text']}>{error}</p>
      ) : (
        description && <p className={styles['helper-text']}>{description}</p>
      )}
    </div>
  );
}
