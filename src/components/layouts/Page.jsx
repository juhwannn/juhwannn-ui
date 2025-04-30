'use client';

import React from 'react';
import styles from './Page.module.css';

export default function Page({ children, className = '', ...rest }) {
  const classes = [styles.page, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
