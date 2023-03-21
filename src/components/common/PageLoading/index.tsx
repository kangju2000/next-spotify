import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageLoading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.asPath && setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return <LoadingOverlay visible={loading} style={{ position: 'fixed', top: 0, left: 0 }} />;
};

export default PageLoading;
