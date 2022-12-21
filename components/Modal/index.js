import { useCallback, useRef } from 'react';
import Detail from '../Detail';
import styles from './styles.module.css';
import { Typography, Button } from '@mui/material';

export default function Modal({ info, onDismiss }) {
  const overlay = useRef();
  const wrapper = useRef();

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  return (
    <div ref={overlay} className={styles.overlay} onClick={onClick}>
      <div ref={wrapper} className={styles.wrapper}>
        <section className={styles.topBotton}>
          <Button onClick={() => onDismiss()}>
            <Typography variant='h4'>X</Typography>
          </Button>
        </section>
        <Detail info={info} />
      </div>
    </div>
  );
}
