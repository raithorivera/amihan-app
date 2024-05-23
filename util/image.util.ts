import { isBlank } from './validation.util';

export const getWeatherIcon = (value: string, size?: string) => {
  if (value && !isBlank(value)) return `/images/weather_icon/${value}@${size || '4x'}.png`;
  return '/images/weather_icon/03d@4x.png';
};
