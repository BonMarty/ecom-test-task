import React from 'react';
import styles from './styles.module.scss';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  labelSize?: 12 | 15;
}

export function Input(props: InputProps) {
  const { label, labelSize, ...rest } = props;

  return (
    <label className={`${styles.label} ${labelSize === 15 ? styles.label15 : styles.label12}`}>
      {label}
      <input className={styles.input} {...rest} />
    </label>
  );
}
