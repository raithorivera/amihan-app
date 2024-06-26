'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { DEFAULT_CITY, DEFAULT_UNIT } from '@/constant/main';

export function useWeatherParams() {
  const queryClient = useQueryClient();

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams);

  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [city, setCity] = useState(params?.city || DEFAULT_CITY);
  const [unit, setUnit] = useState(params?.unit || DEFAULT_UNIT);

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

  useEffect(() => {
    setCity(params?.city);
    queryClient.invalidateQueries({ queryKey: ['weather'] });
    queryClient.invalidateQueries({ queryKey: ['forecast'] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.city]);

  useEffect(() => {
    setUnit(params?.unit);
    queryClient.invalidateQueries({ queryKey: ['weather'] });
    queryClient.invalidateQueries({ queryKey: ['forecast'] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.unit]);

  return {
    params,
    location,
    city,
    unit
  };
}
