'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@ui';

export default function NotFound() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className='bg-gradient-to-t from-slate-50 via-emerald-50/50 to-slate-50  flex min-h-screen flex-col'>
      <main className='mx-auto container flex-1'>
        <div className='mx-auto flex flex-col items-center justify-center pt-40'>
          <Image src='/images/logo/amihan.png' width={180} height={120} alt='Amihan Logo' />
        </div>

        <div className='mx-auto mt-40 max-w-2xl text-center flex flex-col items-center justify-center'>
          <Image src='/images/svg/404.svg' width={300} height={300} alt='404 Image' />

          <h1 className='mt-14 text-4xl font-bold tracking-tight leading-2 text-gray-900 items-center flex'>
            <strong className='text-4xl mr-4 font-bold text-primary'>404</strong>
            This page does not exist
          </h1>

          <p className='text-xl font-semibold text-gray-900'>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        </div>

        <div className='mt-10 flex justify-center'>
          <Button variant='default' size='lg' onClick={goHome}>
            Back to home
          </Button>
        </div>
      </main>
    </div>
  );
}
