import styles from './styles.module.scss';

export function Button(props: React.ComponentPropsWithoutRef<'button'>) {
  const { children, ...rest } = props;

  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
