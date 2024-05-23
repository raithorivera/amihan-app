'use client';

import React from 'react';

import HeaderComponent from './weather/header.component';
import TemperatureComponent from './weather/temperature.component';
import TwilightComponent from './weather/twilight.component';
import WindComponent from './weather/wind.component';

import type { TWeatherData } from '@/types/index';

import { useWeather } from '../_hooks/use-weather.hook';
import { useWeatherParams } from '../_hooks/use-weather-params.hook';

interface WeatherComponentProps {
  children?: React.ReactNode;
}

export default function WeatherComponent({ children }: WeatherComponentProps) {
  const weatherParams = useWeatherParams();

  const weatherQueryData = useWeather(weatherParams?.location ? { lat: weatherParams?.location?.lat, lon: weatherParams?.location?.lon, ...weatherParams } : { ...weatherParams });
  const weatherData: TWeatherData = weatherQueryData?.data ? weatherQueryData?.data : {};

  return (
    <React.Fragment>
      <HeaderComponent weatherData={weatherData} unit={weatherParams?.unit} />
      <TemperatureComponent weatherData={weatherData} unit={weatherParams?.unit} />
      <TwilightComponent weatherData={weatherData} />
      <WindComponent weatherData={weatherData} unit={weatherParams?.unit} />
    </React.Fragment>
  );
}
