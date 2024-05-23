'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Button } from '@ui';

export type EmptyComponentProps = {
  title: string;
  description?: string;
  image?: string;
  size?: 'base' | 'sm';
};

export default function EmptyComponent({
  title = 'No forecast to display!',
  description = 'Please change your city search query, or allow access to your browser navigator geolocation to get your current position.',
  image = '/images/svg/empty.svg',
  size = 'base'
}: EmptyComponentProps) {
  const router = useRouter();

  const width = size === 'sm' ? 220 : 360;
  const height = size === 'sm' ? 220 : 360;

  return (
    <div className='flex flex-col gap-2 items-center justify-center py-40 text-center leading-snug w-full'>
      <Image src={image} alt='Empty Image' width={width} height={height} className='mt-20' />
      <h2 className='text-lg font-semibold mt-6'>{title}</h2>
      <p className='w-[40ch]'>{description}</p>

      <Button className='mt-4 py-4 px-12' onClick={() => router.back()}>Go Back</Button>
    </div>
  );
}
