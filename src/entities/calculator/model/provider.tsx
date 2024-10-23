'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';

import { createCalculatorStore, initCalculatorStore, type CalculatorStore } from './store';

export type CalculatorStoreApi = ReturnType<typeof createCalculatorStore>;

export const CalculatorStoreContext = createContext<CalculatorStoreApi | undefined>(undefined);

export interface CalculatorStoreProviderProps {
  children: ReactNode;
}

export const CalculatorStoreProvider = ({ children }: CalculatorStoreProviderProps) => {
  const storeRef = useRef<CalculatorStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCalculatorStore(initCalculatorStore());
  }

  return <CalculatorStoreContext.Provider value={storeRef.current}>{children}</CalculatorStoreContext.Provider>;
};

export const useCalculatorStore = <T,>(selector: (store: CalculatorStore) => T): T => {
  const calculatorStoreContext = useContext(CalculatorStoreContext);

  if (!calculatorStoreContext) {
    throw new Error(`useCalculatorStore must be used within CalculatorStoreProvider`);
  }

  return useStore(calculatorStoreContext, selector);
};
