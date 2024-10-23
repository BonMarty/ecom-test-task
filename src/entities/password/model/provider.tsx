'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';

import { createPasswordStore, initPasswordStore, type PasswordStore } from './store';

export type PasswordStoreApi = ReturnType<typeof createPasswordStore>;

export const PasswordStoreContext = createContext<PasswordStoreApi | undefined>(undefined);

export interface PasswordStoreProviderProps {
  children: ReactNode;
}

export const PasswordStoreProvider = ({ children }: PasswordStoreProviderProps) => {
  const storeRef = useRef<PasswordStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPasswordStore(initPasswordStore());
  }

  return <PasswordStoreContext.Provider value={storeRef.current}>{children}</PasswordStoreContext.Provider>;
};

export const usePasswordStore = <T,>(selector: (store: PasswordStore) => T): T => {
  const passwordStoreContext = useContext(PasswordStoreContext);

  if (!passwordStoreContext) {
    throw new Error(`usePasswordStore must be used within PasswordStoreProvider`);
  }

  return useStore(passwordStoreContext, selector);
};
