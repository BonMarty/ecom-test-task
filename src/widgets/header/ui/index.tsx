import { Container, routes } from '@/shared';
import Link from 'next/link';
import { NameAndAvatar } from './name-and-avatar';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link href={routes.home}>Главная</Link>
          <Link href={routes.calculator}>Калькулятор</Link>
          <Link href={routes.passwordGenerator}>Генератор паролей</Link>
        </nav>
        <NameAndAvatar />
      </Container>
    </header>
  );
}
