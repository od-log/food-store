import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Detail({info}) { 
  const { id, name, url, description, image, thumb } = info;
  return (
    <section className={styles.infoBox}>
      <Typography variant='h3' component='h2'>
        {name}
      </Typography>
      <Typography variant='body'>{description}</Typography>
      <div className={styles.flex}>
        <Image src={image} alt='store image' width={200} height={200} priority />
        {url && (
          <Link href={url} shallow scroll={false}>
            {name} 홈페이지 바로 가기
          </Link>
        )}
      </div>
    </section>
  );
}