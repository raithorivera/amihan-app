'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { DEFAULT_CITY } from '@/constant/main';

export function useWeatherParams() {
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

  return {
    params,
    location,
    city,
    unit
  };
}
