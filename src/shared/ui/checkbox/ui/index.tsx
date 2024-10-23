import React from 'react';
import styles from './styles.module.scss';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

export function Checkbox(props: CheckboxProps) {
  const { label, ...rest } = props;

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...rest} />
      {label}
    </label>
  );
}
