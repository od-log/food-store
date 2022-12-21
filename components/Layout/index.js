import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </>
  );
}
