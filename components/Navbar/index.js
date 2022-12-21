import styles from './styles.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

const MENU = [
  {id: 1, menu: 'Store', path: '/'},
  {id: 2, menu: 'About', path: '/about'}
];

export default function Navbar() {
  const router = useRouter();
  
  return (
    <nav>
      <ul className={styles.flex}>
        {Array.isArray(MENU) &&
          MENU.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <Typography
                  sx={
                    router.pathname === item.path
                      ? { fontWeight: 'bold' }
                      : { fontWeight: '400' }
                  }
                >
                  {item.menu}
                </Typography>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
