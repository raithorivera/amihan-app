'use client';

import React from 'react';

import type { TForecastData, TWeatherData } from '@/types/index';
import ForecastCardComponent from './forecast/card.component';

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

  return (
    <div className='relative xl:p-20 lg:p-10 p-4 pb-10 xl:max-w-[1440px]'>
      <div>
        <h1 className='text-xl font-semibold uppercase tracking-wide border-b-2 border-slate-50 pb-4'>Weather Forecast</h1>
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
        {forecastList.map((item) => (
          <ForecastCardComponent key={'fci_' + item.dt} item={item} unit={unit} />
        ))}
      </div>
    </div>
  );
}
