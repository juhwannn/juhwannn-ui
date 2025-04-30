'use client';

import React from 'react';
import styles from './Heading.module.css';

export function H1({ children, className = '', ...rest }) {
  return (
    <h1 className={`${styles.h1} ${className}`.trim()} {...rest}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '', ...rest }) {
  return (
    <h2 className={`${styles.h2} ${className}`.trim()} {...rest}>
      {children}
    </h2>
  );
}
