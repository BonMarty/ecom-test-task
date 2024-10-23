'use client';

import { Work_Sans } from 'next/font/google';
import { CalculatorStoreProvider } from '../model';
import { CalculatorButtons } from './calculator-buttons';
import { CalculatorOutput } from './calculator-output';
import styles from './styles.module.scss';

const workSans = Work_Sans({ weight: ['300', '400'], subsets: ['latin'] });

export function Calculator() {
  return (
    <CalculatorStoreProvider>
      <main className={`${styles.calculator} ${workSans.className}`}>
        <CalculatorOutput />
        <CalculatorButtons />
      </main>
    </CalculatorStoreProvider>
  );
}
