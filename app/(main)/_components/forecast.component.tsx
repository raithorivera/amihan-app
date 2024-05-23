'use client';

import Image from 'next/image';
import React from 'react';

import type { TForecastData, TWeatherData } from '@/types/index';
import { formatDate, formatForecastTime } from '@/util/date.util';
import { getWeatherIcon } from '@/util/image.util';
import { getTemperatureSymbol, getHumiditySymbol, getPressureSymbol, getVisibilitySymbol } from '@/util/symbol.util';
import { formatNumber } from '@/util/number.util';

import { useForecast } from '../_hooks/use-forecast.hook';
import { useWeatherParams } from '../_hooks/use-weather-params.hook';

interface ForecastComponentProps {
  children?: React.ReactNode;
}

export default function ForecastComponent({ children }: ForecastComponentProps) {
  const weatherParams = useWeatherParams();
  const unit = weatherParams?.unit;

  const forecastQueryData = useForecast(weatherParams?.location ? { lat: weatherParams?.location?.lat, lon: weatherParams?.location?.lon, ...weatherParams } : { ...weatherParams });
  const forecastData: TForecastData = forecastQueryData?.data ? forecastQueryData?.data : {};
  const forecastList: TWeatherData[] = forecastData?.list ? forecastData?.list : [];

  console.log('forecastList', forecastList);

  return (
    <div className='relative xl:p-20 lg:p-10 p-4 pb-10 xl:max-w-[1440px]'>
      <div>
        <h1 className='text-xl font-semibold uppercase tracking-wide border-b-2 border-slate-50 pb-4'>Weather Forecast</h1>
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
        {forecastList.map((item) => {
          const dateTime = (item?.dt > 0 ? parseInt(item?.dt) * 1000 : '') as string;

          return (
            <div key={'fci_' + item.dt} className='p-4 bg-slate-50  shadow-sm rounded-md odd:bg-gradient-to-l odd:from-lime-50 odd:to-sky-50 even:bg-gradient-to-r even:from-cyan-50 even:to-slate-50'>
              <div className='flex items-center justify-between'>
                <div className='leading-tight tracking-tighter'>
                  <h4 className='font-light text-sm'>{formatDate(dateTime)}</h4>
                  <h3 className='font-bold text-lg'>{formatForecastTime(dateTime)}</h3>
                </div>

                <Image src={getWeatherIcon(item?.weather?.[0]?.icon)} width={40} height={40} alt='Weather Icon' />
              </div>

              <div className='mt-2 relative'>
                <Image src='/images/bg_svg/cloudy.svg' width={540} height={160} alt='Weather Image' />

                <div className='absolute bottom-2 left-4'>
                  <h2 className='text-xl text-white font-light leading-none tracking-tighter select-none'>
                    {item?.main?.temp}
                    <sup className='text-sm -top-2 left-1'>{getTemperatureSymbol(unit)}</sup>
                  </h2>

                  <p className='capitalize text-white text-xs leading-tight font-semibold'>{item?.weather?.[0]?.description}</p>
                </div>
              </div>

              {/* Temperature */}
              <div className='mt-3 relative grid grid-cols-2 gap-x-2 gap-y-2 text-center'>
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
        })}
      </div>
    </div>
  );
}
