import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_OPEN_WEATHER_HOST;
const APP_ID: string = process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID || '';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

// Add a request interceptor to append the APP_ID to every request
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url && APP_ID) {
      const url = new URL(config.url, config.baseURL);
      url.searchParams.append('appid', APP_ID);
      config.url = url.toString();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
