import React from 'react';
import styles from './BaseButton.module.css';

const VARIANTS = ['primary', 'danger', 'success', 'warning'];
const SIZES = ['small', 'medium', 'large'];

export default function BaseButton({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  href,
  outline = false,
  ghost = false,
  onClick,
  icon,
  className = '',
  ...rest
}) {
  const isLink = !!href;
  const Component = isLink ? 'a' : 'button';

  const classes = [
    styles['base-button'],
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    outline && styles.outline,
    ghost && styles.ghost,
    loading && styles.loading,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = loading ? (
    <span className="button-spinner" aria-hidden="true">
      ⏳
    </span>
  ) : (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      {children && <span className="button-label">{children}</span>}
    </>
  );

  return (
    <Component
      className={classes}
      href={isLink ? href : undefined}
      type={!isLink ? type : undefined}
      disabled={!isLink ? disabled : undefined}
      aria-disabled={isLink ? disabled : undefined}
      onClick={(e) => {
        if (disabled || loading) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {content}
    </Component>
  );
}
