'use client';

import { useAuthStore } from '@/entities';
import { Button, routes } from '@/shared';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './styles.module.scss';

export function Auth() {
  const router = useRouter();

  const { isAuth, user, setIsAuth } = useAuthStore((state) => state);

  React.useEffect(() => {
    const localStorageUser = localStorage.getItem('user');

    if (localStorageUser) {
      setIsAuth(true);
    }
  }, []);

  const saveUser = () => {
    setIsAuth(true);
    localStorage.setItem('user', user);
  };

  return (
    <div className={styles.authButtons}>
      <Button onClick={saveUser} disabled={user ? false : true}>
        Сохранить имя
      </Button>
      <Button onClick={() => router.push(routes.calculator)} disabled={isAuth ? false : true}>
        Открыть калькулятор
      </Button>
      <Button onClick={() => router.push(routes.passwordGenerator)} disabled={isAuth ? false : true}>
        Открыть генератор
      </Button>
    </div>
  );
}
