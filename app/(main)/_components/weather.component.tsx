'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import HeaderComponent from './weather/header.component';
import TemperatureComponent from './weather/temperature.component';
import TwilightComponent from './weather/twilight.component';
import WindComponent from './weather/wind.component';
import LoadingComponent from '@/components/loading.component';

import type { TWeatherData } from '@/types/index';
import { isBlank, isEmptyObject } from '@/util/validation.util';
import { getPreferredUnit } from '@/util/unit.util';

import { useWeather } from '../_hooks/use-weather.hook';
import { useWeatherParams } from '../_hooks/use-weather-params.hook';

interface WeatherComponentProps {
  children?: React.ReactNode;
}

export default function WeatherComponent({ children }: WeatherComponentProps) {
  const weatherParams = useWeatherParams();

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams);

  const weatherQueryData = useWeather(weatherParams?.location ? { lat: weatherParams?.location?.lat, lon: weatherParams?.location?.lon, ...weatherParams } : { ...weatherParams });
  const weatherData: TWeatherData = weatherQueryData?.data ? weatherQueryData?.data : {};

  if (weatherData?.sys?.country && isBlank(params?.check)) {
    const preferredUnit = getPreferredUnit(weatherData?.sys?.country);

    if (params?.unit !== preferredUnit) {
      const newParams = new URLSearchParams(searchParams?.toString());
      newParams.set('unit', preferredUnit);
      newParams.set('check', 'true');

      const newUrl = `${pathname}?${newParams.toString()}`;
      router.push(newUrl, { scroll: false });
    }
  }

  if (weatherQueryData?.isFetching) {
    return <LoadingComponent />;
  }

  if (!weatherQueryData?.isFetching && isEmptyObject(weatherData)) {
    return null;
  }

  return (
    <React.Fragment>
      <HeaderComponent weatherData={weatherData} unit={weatherParams?.unit} />
      <TemperatureComponent weatherData={weatherData} unit={weatherParams?.unit} />
      <TwilightComponent weatherData={weatherData} />
      <WindComponent weatherData={weatherData} unit={weatherParams?.unit} />
    </React.Fragment>
  );
}
