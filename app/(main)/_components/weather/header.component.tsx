'use client';

import Image from 'next/image';

import { formatDate } from '@/util/date.util';
import { getWeatherBanner, getWeatherIcon } from '@/util/image.util';
import { getTemperatureSymbol } from '@/util/symbol.util';

import type { TWeatherData } from '@/types/index';

import SearchFormComponent from './search-form.component';

interface HeaderComponentProps {
  weatherData: TWeatherData;
  unit: string;
}

export default function HeaderComponent({ weatherData, unit }: HeaderComponentProps) {
  const dateToday = new Date();

  return (
    <div className='mt-10 px-8 py-4'>
      <div className='flex items-center justify-between px-3'>
        <div className=''>
          <h2 className='text-sm md:text-lg leading-tight'>
            <strong className='font-medium'>Today</strong>, {formatDate(dateToday)}
          </h2>
          <h1 className='text-xl md:text-4xl font-bold leading-tight tracking-tighter'>{`${weatherData?.name || ''}, ${weatherData?.sys?.country || ''}`}</h1>
          <p className='text-xs md:text-sm'>{`${weatherData?.coord?.lat || ''}, ${weatherData?.coord?.lon || ''}`}</p>
        </div>

        <Image src={getWeatherIcon(weatherData?.weather?.[0]?.icon)} width={100} height={100} alt='Weather Icon' className='drop-shadow-md' />
      </div>

      <SearchFormComponent />

      <div className='mt-4 md:mt-6 relative'>
        <Image src={getWeatherBanner(weatherData?.weather?.[0]?.description, weatherData?.weather?.[0]?.icon)} width={1540} height={160} alt='Weather Image' className='shadow-lg rounded-[46px] lg:rounded-[20px]' />

        <div className='absolute bottom-3 md:bottom-5 left-6'>
          <h2 className='text-2xl md:text-5xl text-white font-light leading-none tracking-tighter select-none'>
            {weatherData?.main?.temp}
            <sup className='text-xs md:text-xl -top-4 md:-top-8'>{getTemperatureSymbol(unit)}</sup>
          </h2>

          <p className='text-xs md:text-sm capitalize text-white leading-tight ml-1 font-semibold'>{weatherData?.weather?.[0]?.description}</p>
        </div>
      </div>
    </div>
  );
}
