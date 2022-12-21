import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Modal from '../../components/modal';

export default function StorePage({ data }) {
  const router = useRouter();
  const onDismiss = useCallback(() => {
      router.push('/');
  }, [router]);
  
  return <Modal info={data} onDismiss={onDismiss} />;
}

export async function getServerSideProps({ params: { id } }) {
  const data = await (await fetch(`http://localhost:9000/stores/${id}`)).json();
  return {
    props: {
      data,
    },
  };
}