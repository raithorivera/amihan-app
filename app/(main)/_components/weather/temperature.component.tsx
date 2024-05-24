'use client';

import { getTemperatureSymbol, getHumiditySymbol, getPressureSymbol, getVisibilitySymbol } from '@/util/symbol.util';
import { formatNumber } from '@/util/number.util';

import type { TWeatherData } from '@/types/index';

interface TemperatureComponentProps {
  weatherData: TWeatherData;
  unit: string;
}

export default function TemperatureComponent({ weatherData, unit }: TemperatureComponentProps) {
  return (
    <div className='mt-2 relative grid grid-cols-3 gap-x-4 gap-y-8 py-8 pl-8 pr-4 bg-gradient-to-l from-lime-50 to-sky-50 drop-shadow-sm'>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Minimum</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.temp_min}
          <sup className='text-xs md:text-lg -top-2 md:-top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Maximum</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.temp_max}
          <sup className='text-xs md:text-lg -top-2 md:-top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Feels Like</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {weatherData?.main?.feels_like}
          <sup className='text-xs md:text-lg -top-2 md:-top-4'>{getTemperatureSymbol(unit)}</sup>
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Humidity</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {formatNumber(weatherData?.main?.humidity)}
          {getHumiditySymbol()}
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Pressure</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {formatNumber(weatherData?.main?.pressure)}
          {getPressureSymbol()}
        </h3>
      </div>
      <div className='flex flex-col justify-between gap-2'>
        <p className='text-xs md:text-sm font-medium text-slate-700 border-l-2 border-sky-500 pl-2'>Visibility</p>
        <h3 className='bottom-4 left-6 text-lg md:text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
          {formatNumber(weatherData?.visibility)}
          {getVisibilitySymbol()}
        </h3>
      </div>
    </div>
  );
}
