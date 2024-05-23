'use client';

import { axiosInstance } from '@/util/axios.util';
import { useQuery } from '@tanstack/react-query';

import { TIME_10_MINUTES } from '@/constant/query';

// Define a function to fetch user info using an API call
const fetchData = async () => {
  console.log('should fetch data');
  try {
    const responseData = await axiosInstance.get(`/weather?q=Manila`);
    console.log('responseData', responseData);
    const returnData = responseData?.data?.data ? responseData?.data?.data : {};

    return returnData;
  } catch (err) {
    console.log('err', err);
  }
};

export const QUERY_KEY = 'weather-city';

export function useWeatherCity() {
  // Use the useQuery hook to fetch user info
  const queryData = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => fetchData(),
    staleTime: TIME_10_MINUTES,
    gcTime: TIME_10_MINUTES,
    enabled: true
  });

  return queryData;
}

export const useWeatherCityCachedData = () => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY],
    enabled: false
  });

  return queryData;
};
