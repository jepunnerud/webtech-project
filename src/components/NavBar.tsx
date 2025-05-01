import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Museum of Football
        </Link>

        <nav className={styles.links}>
          <Link href="/museum">Museum</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/about-us">About&nbsp;Us</Link>
        </nav>
      </div>
    </header>
  );
}
