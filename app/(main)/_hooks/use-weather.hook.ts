'use client';

import { axiosInstance } from '@/util/axios.util';
import { useQuery } from '@tanstack/react-query';

import { TIME_10_MINUTES } from '@/constant/query';

// Define a function to fetch user info using an API call
const fetchData = async (params: Record<string, any>) => {
  try {
    const responseData = await axiosInstance.get(`/weather`, { params });

    const returnData = responseData?.data ? responseData?.data : {};
    return returnData;
  } catch (err) {
    console.log('error in fetchingData: ', err);
  }
};

export const QUERY_KEY = 'weather';

export function useWeather(params: Record<string, any>) {
  // Use the useQuery hook to fetch user info
  const queryData = useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => fetchData(params),
    staleTime: TIME_10_MINUTES,
    gcTime: TIME_10_MINUTES,
    enabled: (params?.city && params?.city !== '') || (params?.lat && params?.lon) ? true : false
  });

  return queryData;
}

export const useWeatherCachedData = (params: Record<string, any>) => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY, params],
    enabled: false
  });

  return queryData;
};
