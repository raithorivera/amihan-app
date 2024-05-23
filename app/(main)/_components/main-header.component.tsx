'use client';

import Image from 'next/image';
import { Input, Button } from '@ui';

import { formatDate } from '@/util/date.util';

import { useWeatherCity } from '../_hooks/use-weather-city.hook';

export default function MainHeaderComponent() {
  const dateToday = new Date()?.toString();
  const weatherCityQueryData = useWeatherCity('London');
  const weatherData = weatherCityQueryData?.data ? weatherCityQueryData?.data : {};
  console.log('weatherData', weatherData);

  return (
    <div className='mt-10 px-8 py-4'>
      <div className='flex items-center justify-between px-3'>
        <div className=''>
          <h2 className='text-lg leading-tight'>
            <strong className='font-medium'>Today</strong>, {formatDate(dateToday)}
          </h2>
          <h1 className='text-4xl font-bold leading-tight tracking-tighter'>{`${weatherData?.name || ''}, ${weatherData?.sys?.country || ''}`}</h1>
          <p className='text-sm'>{`${weatherData?.coord?.lat || ''}, ${weatherData?.coord?.lon || ''}`}</p>
        </div>

        <Image src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@4x.png`} width={100} height={100} alt='Weather Icon' className='' />
      </div>

      <div className='px-3 mt-6 relative'>
        <Input placeholder='Search' className='py-6 pl-4 pr-[90px]' />
        <Button size='sm' className='absolute top-[10px] right-[24px]'>
          Search
        </Button>
      </div>

      <div className='mt-6 relative'>
        <Image src='/images/bg_svg/cloudy.svg' width={1540} height={160} alt='Weather Image' className='shadow-lg rounded-[46px] lg:rounded-[20px]' />

        <div className='absolute bottom-5 left-6'>
          <h2 className='text-5xl text-white font-light leading-none tracking-tighter select-none'>
            26.9<sup className='text-xl -top-8'>&deg;C</sup>
          </h2>

          <p className='capitalize text-white text-sm leading-tight ml-1 font-semibold'>overcast clouds</p>
        </div>
      </div>
    </div>
  );
}
