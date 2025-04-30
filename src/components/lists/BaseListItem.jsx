'use client';

import React, { useState } from 'react';
import BaseList from './BaseList';
import styles from './BaseListItem.module.css';

export default function BaseListItem({
  children,
  icon,
  submenu,
  disabled = false,
  className = '',
  ...rest
}) {
  const [open, setOpen] = useState(false);

  const classNames = [
    styles['base-list-item'],
    disabled && styles.disabled,
    submenu && styles.hasSubmenu,
    open && styles.open,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classNames} aria-disabled={disabled} {...rest}>
      <div
        className={styles['item-header']}
        onClick={() => submenu && !disabled && setOpen((o) => !o)}
      >
        {icon && <span className={styles['list-icon']}>{icon}</span>}
        <span className={styles['list-label']}>{children}</span>
        {submenu && (
          <span className={styles['submenu-toggle']} aria-hidden="true">
            {open ? '▾' : '▸'}
          </span>
        )}
      </div>

      {submenu && open && (
        <BaseList className={styles.submenu}>
          {submenu.map((item, i) => (
            <BaseListItem
              key={i}
              icon={item.icon}
              disabled={item.disabled}
              submenu={item.submenu}
              className={styles['submenu-item']}
              {...(item.href ? { as: 'a', href: item.href } : {})}
            >
              {item.label}
            </BaseListItem>
          ))}
        </BaseList>
      )}
    </li>
  );
}
