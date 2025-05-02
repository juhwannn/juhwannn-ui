import React from 'react';
import styles from './BaseCard.module.css';

export default function Card({
  header,
  children,
  footerContent,
  className = '',
  ...rest
}) {
  return (
    <div className={`${styles.card} ${className}`.trim()} {...rest}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles['main-content']}>{children}</div>
      {footerContent && <div className={styles.footer}>{footerContent}</div>}
    </div>
  );
}
