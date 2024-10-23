import { Container } from '@/shared';
import { Header, PasswordGenerator } from '@/widgets';
import styles from './styles.module.scss';

export function PasswordGeneratorPage() {
  return (
    <Container className={styles.passwordGeneratorContainer}>
      <Header />
      <main>
        <PasswordGenerator />
      </main>
    </Container>
  );
}
