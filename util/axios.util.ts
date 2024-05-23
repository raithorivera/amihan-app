import axios, { AxiosInstance } from 'axios';

const BASE_URL = '/api';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});
