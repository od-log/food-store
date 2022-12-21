import styles from './styles.module.css';
import Navbar from '../Navbar';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>AWESOME FOOD STORE</h1>
      <Navbar />
    </header>
  );
}
