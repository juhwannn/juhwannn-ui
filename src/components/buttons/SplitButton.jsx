'use client';

import React, { useState } from 'react';
import BaseButton from '@/app/components/buttons/BaseButton';

export default function SplitButton({
  label,
  options = [],
  onSelect,
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="split-button-wrapper">
      <BaseButton {...props} onClick={() => onSelect?.(label)}>
        {label}
      </BaseButton>
      <BaseButton
        variant={props.variant}
        size={props.size}
        ghost
        onClick={() => setOpen(!open)}
      >
        ▼
      </BaseButton>
      {open && (
        <div className="split-dropdown">
          {options.map((option) => (
            <div
              key={option}
              className="split-option"
              onClick={() => {
                setOpen(false);
                onSelect?.(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
