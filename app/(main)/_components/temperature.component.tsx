'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { DEFAULT_CITY } from '@/constant/main';

import { getTemperatureSymbol } from '@/util/temperature.util';
import { formatNumber } from '@/util/number.util';

import { useWeatherCachedData } from '../_hooks/use-weather.hook';

export default function TemperatureComponent() {
  const searchParams = useSearchParams();
  const params = useMemo(() => Object.fromEntries(searchParams), [searchParams]);

  const unit = params?.unit || '';
  const city = params?.city || DEFAULT_CITY;

  const weatherQueryData = useWeatherCachedData({ city, ...params });
  const weatherData: any = weatherQueryData?.data ? weatherQueryData?.data : {};

  return (
    <div className='mt-2 relative grid grid-cols-3 gap-x-4 gap-y-8 py-8 pl-8 pr-4 bg-gradient-to-l from-lime-50 to-sky-50 drop-shadow-sm'>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Minimum</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.temp_min}
          <sup className='text-lg -top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Maximum</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.temp_max}
          <sup className='text-lg -top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Feels Like</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.feels_like}
          <sup className='text-lg -top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Humidity</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>{formatNumber(weatherData?.main?.humidity)}</h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Pressure</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>{formatNumber(weatherData?.main?.pressure)}</h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Visibility</p>
        <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>{formatNumber(weatherData?.visibility)}</h3>
      </div>
    </div>
  );
}
