'use client';

import Image from 'next/image';
import React from 'react';

import { useForecast } from '../_hooks/use-forecast.hook';
import { useWeatherParams } from '../_hooks/use-weather-params.hook';

import type { TForecastData } from '@/types/index';

interface ForecastComponentProps {
  children?: React.ReactNode;
}

export default function ForecastComponent({ children }: ForecastComponentProps) {
  const weatherParams = useWeatherParams();

  const forecastQueryData = useForecast(weatherParams?.location ? { lat: weatherParams?.location?.lat, lon: weatherParams?.location?.lon, ...weatherParams } : { ...weatherParams });
  const forecastData: TForecastData = forecastQueryData?.data ? forecastQueryData?.data : {};

  return (
    <div className='relative xl:p-20 lg:p-10 p-4 pb-10 xl:max-w-[1440px]'>
      <div>
        <h1 className='text-xl font-semibold uppercase tracking-wide border-b-2 border-slate-50 pb-4'>Weather Forecast</h1>
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <div key={index} className='p-4 bg-slate-50 bg-gradient-to-l from-lime-50 to-sky-50 shadow-sm rounded-md'>
            <div className='flex items-center justify-between'>
              <div className='leading-tight tracking-tighter'>
                <h4 className='font-light text-sm'>23 May 2024</h4>
                <h3 className='font-bold text-lg'>Sunday 11:00AM</h3>
              </div>

              <Image src='https://openweathermap.org/img/wn/10d@4x.png' width={40} height={40} alt='Weather Icon' />
            </div>

            <div className='mt-2 relative'>
              <Image src='/images/bg_svg/cloudy.svg' width={540} height={160} alt='Weather Image' />

              <div className='absolute bottom-2 left-4'>
                <h2 className='text-xl text-white font-light leading-none tracking-tighter select-none'>
                  26.9<sup className='text-sm -top-2 left-1'>&deg;C</sup>
                </h2>

                <p className='capitalize text-white text-xs leading-tight font-semibold'>overcast clouds</p>
              </div>
            </div>

            {/* Temperature */}
            <div className='mt-3 relative grid grid-cols-2 gap-x-2 gap-y-2 text-center'>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Minimum</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                  26.9<sup className='text-sm -top-2'>&deg;C</sup>
                </h3>
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Maximum</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                  26.9<sup className='text-sm -top-2'>&deg;C</sup>
                </h3>
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Feels Like</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                  26.9<sup className='text-sm -top-2'>&deg;C</sup>
                </h3>
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Humidity</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>64</h3>
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Pressure</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>1007</h3>
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-sm font-light'>Visibility</p>
                <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>1000</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
