'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import MainHeaderComponent from './main-header.component';
import TemperatureComponent from './temperature.component';

import { DEFAULT_CITY } from '@/constant/main';

import { useWeather } from '../_hooks/use-weather.hook';
import TwilightComponent from './twilight.component';

interface WeatherComponentProps {
  children?: React.ReactNode;
}

export default function WeatherComponent({ children }: WeatherComponentProps) {
  const searchParams = useSearchParams();
  const params = useMemo(() => Object.fromEntries(searchParams), [searchParams]);

  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [city, setCity] = useState(DEFAULT_CITY);

  const unit = params?.unit || '';
  const dateToday = new Date()?.toString();

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
  const weatherData: any = weatherQueryData?.data ? weatherQueryData?.data : {};

  return (
    <React.Fragment>
      <MainHeaderComponent weatherData={weatherData} unit={unit} />
      <TemperatureComponent weatherData={weatherData} unit={unit} />
      <TwilightComponent weatherData={weatherData} />
    </React.Fragment>
  );
}
