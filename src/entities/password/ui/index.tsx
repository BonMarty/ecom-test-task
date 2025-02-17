import styles from './styles.module.scss';

export interface PasswordItemProps {
  children: React.ReactNode;
}

export function PasswordItem({ children }: PasswordItemProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children as string);
    alert('Copied to clipboard');
  };

  return (
    <div className={styles.passwordItem}>
      {children}
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={copyToClipboard}>
        <path d="M21.9219 0.390015C23.1406 0.390015 24.1719 1.42126 24.1719 2.64001V16.14C24.1719 17.4056 23.1406 18.39 21.9219 18.39H8.42188C7.15625 18.39 6.17188 17.4056 6.17188 16.14V2.64001C6.17188 1.42126 7.15625 0.390015 8.42188 0.390015H21.9219ZM8.42188 19.89H18.1719V22.14C18.1719 23.4056 17.1406 24.39 15.9219 24.39H2.42188C1.15625 24.39 0.171875 23.4056 0.171875 22.14V8.64001C0.171875 7.42126 1.15625 6.39001 2.42188 6.39001H4.67188V16.14C4.67188 18.2494 6.3125 19.89 8.42188 19.89Z" fill="#3B75A2" />
      </svg>
    </div>
  );
}
