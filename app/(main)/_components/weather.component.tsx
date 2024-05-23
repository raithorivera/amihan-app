'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import HeaderComponent from './weather/header.component';
import TemperatureComponent from './weather/temperature.component';
import TwilightComponent from './weather/twilight.component';
import WindComponent from './weather/wind.component';

import { DEFAULT_CITY } from '@/constant/main';

import type { TWeatherData } from '@/types/index';

import { useWeather } from '../_hooks/use-weather.hook';

interface WeatherComponentProps {
  children?: React.ReactNode;
}

export default function WeatherComponent({ children }: WeatherComponentProps) {
  const searchParams = useSearchParams();
  const params = useMemo(() => Object.fromEntries(searchParams), [searchParams]);

  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [city, setCity] = useState(DEFAULT_CITY);

  const unit = params?.unit || '';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        () => {
          setCity(DEFAULT_CITY);
        }
      );
    } else {
      setCity(DEFAULT_CITY);
    }
  }, []);

  const weatherQueryData = useWeather(location ? { lat: location.lat, lon: location.lon, ...params } : { city, ...params });
  const weatherData: TWeatherData = weatherQueryData?.data ? weatherQueryData?.data : {};

  return (
    <React.Fragment>
      <HeaderComponent weatherData={weatherData} unit={unit} />
      <TemperatureComponent weatherData={weatherData} unit={unit} />
      <TwilightComponent weatherData={weatherData} />
      <WindComponent weatherData={weatherData} unit={unit} />
    </React.Fragment>
  );
}
