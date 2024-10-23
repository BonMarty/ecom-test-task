'use client';

import { routes } from '@/shared';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './styles.module.scss';

export function NameAndAvatar() {
  const [user, setUser] = React.useState('');

  const router = useRouter();

  React.useEffect(() => {
    const localStorageUser = localStorage.getItem('user')!;

    if (!localStorageUser) {
      router.replace(routes.home);
    } else {
      setUser(localStorageUser);
    }
  }, []);

  if (user) {
    return (
      <div className={styles.nameAndAvatar}>
        <p className={styles.name}>{user}</p>
        <div className={styles.avatar}>{user[0].toUpperCase()}</div>
      </div>
    );
  }
}
