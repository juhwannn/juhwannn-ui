'use client';

import React from 'react';
import styles from './BaseCard.module.css';

/**
 * Props:
 * - title: string
 * - description: string or ReactNode
 * - footer: ReactNode
 * - actionButton: ReactNode (e.g., a button)
 * - children: ReactNode (body content)
 * - interactive: boolean (hover elevation)
 * - headerSize: 1 | 2 | 3 (controls title size)
 */
export default function BaseCard({
  title,
  description,
  footer,
  actionButton,
  children,
  interactive = false,
  headerSize = 1,
  className = '',
  ...rest
}) {
  const cls = [
    styles.card,
    interactive && styles.interactive,
    styles[`headerSize${headerSize}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine heading tag based on headerSize
  const HeadingTag = headerSize === 1 ? 'h3' : headerSize === 2 ? 'h4' : 'h5';

  return (
    <div className={cls} {...rest}>
      {(title || actionButton) && (
        <div className={styles.cardHeader}>
          {title && <HeadingTag className={styles.title}>{title}</HeadingTag>}
          {actionButton && (
            <div className={styles.headerActions}>{actionButton}</div>
          )}
        </div>
      )}

      {description && <div className={styles.description}>{description}</div>}

      <div className={styles.cardBody}>{children}</div>

      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
}
