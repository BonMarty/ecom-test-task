'use client';

import { PasswordItem, usePasswordStore } from '@/entities';
import styles from '../styles.module.scss';

export function PasswordGeneratorResults() {
  const passwords = usePasswordStore((state) => state.passwords);

  return (
    <ul className={styles.passwordGeneratorResults}>
      {passwords
        ? passwords.map((password) => (
            <li key={password}>
              <PasswordItem>{password}</PasswordItem>
            </li>
          ))
        : null}
    </ul>
  );
}
