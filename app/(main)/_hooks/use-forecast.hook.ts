'use client';

import { axiosInstance } from '@/util/axios.util';
import { useQuery } from '@tanstack/react-query';

import { TIME_10_MINUTES } from '@/constant/query';

// Define a function to fetch user info using an API call
const fetchData = async (params: Record<string, any>) => {
  const responseData = await axiosInstance.get(`/forecast`, { params });

  if (responseData && responseData?.data?.statusCode === 200) {
    const returnData = responseData?.data ? responseData?.data : {};
    return returnData;
  }

  throw new Error('Invalid request data.');
};

export const QUERY_KEY = 'forecast';

export function useForecast(params: Record<string, any>) {
  // Use the useQuery hook to fetch user info
  const queryData = useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => fetchData(params),
    staleTime: TIME_10_MINUTES,
    gcTime: TIME_10_MINUTES,
    enabled: (params?.city && params?.city !== '') || (params?.lat && params?.lon) ? true : false,
    placeholderData: (previousData, previousQuery) => {
      return previousData;
    }
  });

  return queryData;
}

export const useForecastCachedData = (params: Record<string, any>) => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY, params],
    enabled: false
  });

  return queryData;
};
