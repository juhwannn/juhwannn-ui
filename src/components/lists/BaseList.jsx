import React from 'react';
import styles from './BaseList.module.css';

export default function BaseList({ children, className = '', ...rest }) {
  const cls = [styles['base-list'], className].filter(Boolean).join(' ');

  return (
    <ul className={cls} {...rest}>
      {children}
    </ul>
  );
}
