'use client';

import Image from 'next/image';

import { formatTime } from '@/util/date.util';

import type { TWeatherData } from '@/types/index';

interface TwilightComponentProps {
  weatherData: TWeatherData;
}

export default function TwilightComponent({ weatherData }: TwilightComponentProps) {
  const sunrise = (weatherData?.sys?.sunrise > 0 ? parseInt(weatherData?.sys?.sunrise) * 1000 : '') as string;
  const sunset = (weatherData?.sys?.sunset > 0 ? parseInt(weatherData?.sys?.sunset) * 1000 : '') as string;

  return (
    <div className='mt-4 grid grid-cols-2 justify-between p-8'>
      <div className='flex items-center gap-6'>
        <Image src='/images/icon_svg/sunrise.svg' width={65} height={65} alt='Sunrise Image' className='drop-shadow' />
        <div className='grid gap-1'>
          <p className='text-sm'>Sunrise</p>
          <h3 className='text-xl font-semibold leading-none tracking-tighter select-none uppercase'>{formatTime(sunrise)}</h3>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <Image src='/images/icon_svg/sunset.svg' width={65} height={65} alt='Sunset Image' className='drop-shadow' />

        <div className='grid gap-1'>
          <p className='text-sm'>Sunset</p>
          <h3 className='text-xl font-semibold leading-none tracking-tighter select-none uppercase'>{formatTime(sunset)}</h3>
        </div>
      </div>
    </div>
  );
}
