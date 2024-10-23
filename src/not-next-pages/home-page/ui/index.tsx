import { AuthForm } from '@/widgets';
import styles from './styles.module.scss';

export function HomePage() {
  return (
    <div className={styles.home}>
      <AuthForm />
    </div>
  );
}
