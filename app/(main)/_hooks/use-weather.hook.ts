'use client';

import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/util/axios.util';

import { TIME_10_MINUTES } from '@/constant/query';

// Define a function to fetch user info using an API call
const fetchData = async (params: Record<string, any>) => {
  const responseData = await axiosInstance.get(`/weather`, { params });

  if (responseData && responseData?.data?.statusCode === 200) {
    const returnData = responseData?.data ? responseData?.data : {};
    return returnData;
  }

  throw new Error('Invalid request data.');
};

export const QUERY_KEY = 'weather';

export function useWeather(params: Record<string, any>) {
  // Use the useQuery hook to fetch user info
  const queryData = useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: async () => fetchData(params),
    staleTime: TIME_10_MINUTES,
    gcTime: TIME_10_MINUTES,
    enabled: (params?.city && params?.city !== '') || (params?.lat && params?.lon) ? true : false,
    placeholderData: (previousData, previousQuery) => {
      return previousData;
    }
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
