import React from 'react';
import styles from './styles.module.scss';

export interface CalculatorButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor: 'gray' | 'blue' | 'white';
}

export function CalculatorButton(props: CalculatorButtonProps) {
  const { backgroundColor, children, ...rest } = props;

  return (
    <button className={`${styles.calculatorButton} ${styles[backgroundColor]}`} {...rest}>
      {children}
    </button>
  );
}
