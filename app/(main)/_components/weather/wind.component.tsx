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
    <div className='flex items-center justify-between p-8 '>
      <div className='grid grid-cols-4 gap-1 w-full'>
        <Image src='/images/icon_svg/cloud-gust.svg' width={55} height={55} alt='Sunrise Image' className='drop-shadow col-span-1' />

        <div className='col-span-3 flex justify-between items-center w-full md:-ml-4'>
          <div className='grid gap-1'>
            <p className='text-xs md:text-sm'>Wind Speed</p>
            <h3 className='text-sm md:text-xl font-semibold leading-none tracking-tighter select-none'>
              {weatherData?.wind?.speed}
              {getWindSymbol(unit)}
            </h3>
          </div>

          <div className='grid gap-1 md:ml-6'>
            <p className='text-xs md:text-sm'>Direction</p>
            <h3 className='text-sm md:text-xl font-semibold leading-none tracking-tighter select-none'>
              {weatherData?.wind?.deg}
              {getWindDirectionSymbol()}
            </h3>
          </div>

          <div className='grid gap-1'>
            <p className='text-xs md:text-sm'>Wind Gust</p>
            <h3 className='text-sm md:text-xl font-semibold leading-none tracking-tighter select-none'>
              {weatherData?.wind?.gust || '--'}
              {getWindSymbol(unit)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
