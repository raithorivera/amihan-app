'use client';

import { axiosInstance } from '@/util/axios.util';
import { useQuery } from '@tanstack/react-query';

import { TIME_10_MINUTES } from '@/constant/query';

// Define a function to fetch user info using an API call
const fetchData = async (city: string) => {
  try {
    const responseData = await axiosInstance.get(`/weather/city?city=${city}`);

    const returnData = responseData?.data ? responseData?.data : {};
    return returnData;
  } catch (err) {
    console.log('err', err);
  }
};

export const QUERY_KEY = 'weather-city';

export function useWeatherCity(city: string) {
  // Use the useQuery hook to fetch user info
  const queryData = useQuery({
    queryKey: [QUERY_KEY, city],
    queryFn: () => fetchData(city),
    staleTime: TIME_10_MINUTES,
    gcTime: TIME_10_MINUTES,
    enabled: city && city !== '' ? true : false
  });

  return queryData;
}

export const useWeatherCityCachedData = (city: string) => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY, city],
    enabled: false
  });

  return queryData;
};
