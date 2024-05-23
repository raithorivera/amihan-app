'use client';

import Image from 'next/image';

import type { TWeatherData } from '@/types/index';

import { formatDate, formatForecastTime } from '@/util/date.util';
import { getWeatherIcon, getWeatherBanner } from '@/util/image.util';
import { getTemperatureSymbol, getHumiditySymbol, getPressureSymbol, getVisibilitySymbol } from '@/util/symbol.util';
import { formatNumber } from '@/util/number.util';

interface ForecastCardComponentProps {
  item?: TWeatherData;
  unit: string;
}

export default function ForecastCardComponent({ item, unit }: ForecastCardComponentProps) {
  const dateTime = (item?.dt > 0 ? parseInt(item?.dt) * 1000 : '') as string;

  return (
    <div className='p-4 bg-slate-50 shadow-sm rounded-md odd:bg-gradient-to-r odd:from-lime-50 odd:to-blue-50 even:bg-gradient-to-r even:from-cyan-50 even:to-lime-50 xl:p-8'>
      <div className='flex items-center justify-between'>
        <div className='leading-tight tracking-tighter'>
          <h4 className='font-light text-sm'>{formatDate(dateTime)}</h4>
          <h3 className='font-bold text-lg'>{formatForecastTime(dateTime)}</h3>
        </div>

        <Image src={getWeatherIcon(item?.weather?.[0]?.icon)} width={60} height={60} alt='Weather Icon' className='drop-shadow-md' />
      </div>

      <div className='mt-2 relative xl:mt-4'>
        <Image src={getWeatherBanner(item?.weather?.[0]?.description, item?.weather?.[0]?.icon)} width={540} height={160} alt='Weather Image' />

        <div className='absolute bottom-3 left-4'>
          <h2 className='text-xl text-white font-light leading-none tracking-tighter select-none'>
            {item?.main?.temp}
            <sup className='text-sm -top-2 left-1'>{getTemperatureSymbol(unit)}</sup>
          </h2>

          <p className='capitalize text-white text-xs leading-tight font-semibold'>{item?.weather?.[0]?.description}</p>
        </div>
      </div>

      {/* Temperature */}
      <div className='mt-3 relative grid grid-cols-2 gap-x-2 gap-y-2 text-center xl:mt-6'>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Minimum</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {item?.main?.temp_min}
            <sup className='text-sm -top-2'>{getTemperatureSymbol(unit)}</sup>
          </h3>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Maximum</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {item?.main?.temp_max}
            <sup className='text-sm -top-2'>{getTemperatureSymbol(unit)}</sup>
          </h3>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Feels Like</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {item?.main?.feels_like}
            <sup className='text-sm -top-2'>{getTemperatureSymbol(unit)}</sup>
          </h3>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Humidity</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {formatNumber(item?.main?.humidity)}
            {getHumiditySymbol()}
          </h3>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Pressure</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {formatNumber(item?.main?.pressure)}
            {getPressureSymbol()}
          </h3>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='text-sm font-light'>Visibility</p>
          <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
            {formatNumber(item?.visibility)}
            {getVisibilitySymbol()}
          </h3>
        </div>
      </div>
    </div>
  );
}
