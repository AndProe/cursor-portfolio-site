import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.container}>
      <h1 className={styles.header}>Hi, I’m Andreas 👋</h1>
      <p className={styles.about}>
        I build AI things. I code in Cursor. And I'm documenting it in public.
      </p>
      <ul className={styles.links}>
        <li><a href="https://x.com" target="_blank">X / Twitter</a></li>
        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com" target="_blank">GitHub</a></li>
      </ul>
    </main>
  );
}
