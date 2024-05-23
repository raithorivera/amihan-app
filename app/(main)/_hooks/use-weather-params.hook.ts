'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { DEFAULT_CITY } from '@/constant/main';

export function useWeatherParams() {
  const searchParams = useSearchParams();
  const params = useMemo(() => Object.fromEntries(searchParams), [searchParams]);

  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [city, setCity] = useState(params?.city || DEFAULT_CITY);

  const unit = params?.unit || '';

  // On mounted
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        () => {
          setCity(params?.city || DEFAULT_CITY);
        }
      );
    } else {
      setCity(params?.city || DEFAULT_CITY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    params,
    location,
    city,
    unit
  };
}
