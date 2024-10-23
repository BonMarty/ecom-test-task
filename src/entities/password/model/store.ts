import { createStore } from 'zustand/vanilla';

export type PasswordState = {
  password: string;
  passwordLength: number;
  passwords: string[];
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSpecialSymbols: boolean;
};

export type PasswordActions = {
  setPassword: (password: string) => void;
  setPasswordLength: (passwordLength: number) => void;
  setPasswords: (password: string) => void;
  setIncludeUpperCase: (includeUpperCase: boolean) => void;
  setIncludeLowerCase: (includeLowerCase: boolean) => void;
  setIncludeNumbers: (includeNumbers: boolean) => void;
  setIncludeSpecialSymbols: (includeSpecialSymbols: boolean) => void;
};

export type PasswordStore = PasswordState & PasswordActions;

export const initPasswordStore = (): PasswordState => {
  return {
    password: '',
    passwordLength: 8,
    passwords: [],
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: false,
    includeSpecialSymbols: false,
  };
};

export const defaultInitState: PasswordState = {
  password: '',
  passwordLength: 8,
  passwords: [],
  includeUpperCase: true,
  includeLowerCase: true,
  includeNumbers: false,
  includeSpecialSymbols: false,
};

export const createPasswordStore = (initState: PasswordState = defaultInitState) => {
  return createStore<PasswordStore>()((set) => ({
    ...initState,
    setPassword: (password) => set(() => ({ password })),
    setPasswordLength: (passwordLength) => set(() => ({ passwordLength })),
    setPasswords: (password) => set((state) => ({ passwords: [...state.passwords, password] })),
    setIncludeUpperCase: (includeUpperCase) => set(() => ({ includeUpperCase })),
    setIncludeLowerCase: (includeLowerCase) => set(() => ({ includeLowerCase })),
    setIncludeNumbers: (includeNumbers) => set(() => ({ includeNumbers })),
    setIncludeSpecialSymbols: (includeSpecialSymbols) => set(() => ({ includeSpecialSymbols })),
  }));
};
