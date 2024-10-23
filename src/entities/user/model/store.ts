import { createStore } from 'zustand/vanilla';

export type AuthState = {
  isAuth: boolean;
  user: string;
};

export type AuthActions = {
  setUser: (user: string) => void;
  setIsAuth: (isAuth: boolean) => void;
};

export type AuthStore = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return { isAuth: false, user: '' };
};

export const defaultInitState: AuthState = {
  isAuth: false,
  user: '',
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    setUser: (user) => set(() => ({ user })),
    setIsAuth: (isAuth) => set(() => ({ isAuth })),
  }));
};
