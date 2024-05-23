'use client';

import Image from 'next/image';

import { getWindSymbol, getWindDirectionSymbol } from '@/util/symbol.util';

import type { TWeatherData } from '@/types/index';

interface WindComponentProps {
  weatherData: TWeatherData;
  unit?: string;
}

export default function WindComponent({ weatherData, unit }: WindComponentProps) {
  return (
    <div className='flex items-center justify-between p-8'>
      <div className='grid grid-cols-4 gap-6'>
        <Image src='/images/icon_svg/cloud-gust.svg' width={65} height={65} alt='Sunrise Image' className='' />

        <div className='grid gap-1'>
          <p className='text-sm'>Wind Speed</p>
          <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>
            {weatherData?.wind?.speed}
            {getWindSymbol(unit)}
          </h3>
        </div>

        <div className='grid gap-1'>
          <p className='text-sm'>Direction</p>
          <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>
            {weatherData?.wind?.deg}
            {getWindDirectionSymbol()}
          </h3>
        </div>

        <div className='grid gap-1'>
          <p className='text-sm'>Wind Gust</p>
          <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>
            {weatherData?.wind?.gust || '--'}
            {getWindSymbol(unit)}
          </h3>
        </div>
      </div>
    </div>
  );
}
