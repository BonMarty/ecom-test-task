import { Calculator } from '@/entities';
import { Container } from '@/shared';
import { Header } from '@/widgets';
import styles from './styles.module.scss';

export function CalculatorPage() {
  return (
    <Container className={styles.calculatorContainer}>
      <Header />
      <Calculator />
    </Container>
  );
}
