import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    let timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };

  }, [router]);

  return (
    <section>
      <p>404 잘못된 경로입니다.</p>
      <p>5초 후 홈페이지로 이동합니다.</p>
    </section>
  );
}

