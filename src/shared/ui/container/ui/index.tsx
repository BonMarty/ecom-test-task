import React from 'react';
import styles from './styles.module.scss';

export function Container(props: React.ComponentPropsWithoutRef<'div'>) {
  const { children, className, ...rest } = props;

  return (
    <div className={`${className ? className : ''} ${styles.container}`} {...rest}>
      {children}
    </div>
  );
}
