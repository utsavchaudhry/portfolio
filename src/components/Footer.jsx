import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>Designed &amp; built by Utsav Chaudhary · © {year}</p>
        <p className={styles.subnote}>
          Built with React + Vite + Framer Motion · Source on{' '}
          <a
            href="https://github.com/utsavchaudhry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
