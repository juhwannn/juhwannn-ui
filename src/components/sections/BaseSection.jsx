import React from 'react';
import styles from './BaseSection.module.css';
import { H2 } from '../typography/Heading';

export default function BaseSection({
  title,
  icon,
  children,
  className = '',
  ...rest
}) {
  const classes = [styles['base-section'], className].filter(Boolean).join(' ');

  return (
    <section className={classes} {...rest}>
      {title && (
        <header className={styles['section-header']}>
          {icon && <span className={styles['section-icon']}>{icon}</span>}
          <H2 className={styles['section-title']}>{title}</H2>
        </header>
      )}
      <div className={styles['section-content']}>{children}</div>
    </section>
  );
}
