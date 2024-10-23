'use client';

import { useAuthStore } from '@/entities';
import { Auth } from '@/features';
import { Input } from '@/shared';
import React from 'react';
import styles from './styles.module.scss';

function AuthFormInput() {
  const { user, setUser } = useAuthStore((state) => state);
  const localStorageUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

  React.useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);

  return <Input label="Напишите ваше имя" placeholder="Ваше имя" value={user} onChange={(e) => setUser(e.target.value)} />;
}

export function AuthForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <legend className={styles.formLegend}>Начать</legend>
      <AuthFormInput />
      <Auth />
      <svg className={styles.formClose} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.587158" width="24" height="24" rx="12" fill="#E5E5E5" />
        <path d="M12.5872 10.8891L16.4762 7L17.5872 8.11094L13.6981 12L17.5872 15.8891L16.4762 17L12.5872 13.1109L8.69809 17L7.58716 15.8891L11.4762 12L7.58716 8.11094L8.69809 7L12.5872 10.8891Z" fill="#4F4F4F" />
      </svg>
    </form>
  );
}
