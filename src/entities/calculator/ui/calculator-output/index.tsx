'use client';

import React from 'react';
import { useCalculatorStore } from '../../model';
import { isKeyboardInputAllowed } from '../../utils';
import styles from '../styles.module.scss';

export function CalculatorOutput() {
  const { previousOperand, currentOperand, operation, addDigit, removeDigit, chooseOperation, evalutate, percent } = useCalculatorStore((state) => state);

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key, code } = event;

    if (!isKeyboardInputAllowed(code)) {
      return;
    }

    switch (key) {
      case 'Backspace':
        removeDigit();
        break;

      case '*':
        chooseOperation('×');
        break;

      case '/':
        chooseOperation('÷');
        break;

      case '-':
        chooseOperation('–');
        break;

      case '+':
        chooseOperation('+');
        break;

      case '%':
        percent();
        break;

      case 'Enter':
        evalutate();
        break;

      default:
        addDigit(key);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.calculatorOutput}>
      <h2 className={styles.calculatorOutputPrevious}>
        {previousOperand}
        {operation}
      </h2>
      <h3 className={styles.calculatorOutputCurrent}>{currentOperand}</h3>
    </div>
  );
}
