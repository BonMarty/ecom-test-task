import styles from './styles.module.scss';

import { PasswordStoreProvider } from '@/entities';
import { Roboto } from 'next/font/google';
import { PasswordGeneratorForm } from './password-generator-form';
import { PasswordGeneratorResults } from './password-generator-results';

const roboto = Roboto({ weight: ['500'], subsets: ['latin'] });

export function PasswordGenerator() {
  return (
    <div className={styles.passwordGenerator}>
      <h1 className={styles.passwordGeneratorTitle}>
        <span className={roboto.className}>Генератор</span> паролей
      </h1>
      <PasswordStoreProvider>
        <div className={styles.passwordGeneratorFormAndResults}>
          <PasswordGeneratorForm />
          <PasswordGeneratorResults />
        </div>
      </PasswordStoreProvider>
    </div>
  );
}
