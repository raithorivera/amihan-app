import { isBlank } from './validation.util';

export const getWeatherIcon = (value: string, size?: string) => {
  if (value && !isBlank(value)) return `https://openweathermap.org/img/wn/${value}@${size || '4x'}.png`;
  return '/images/icon_svg/sunrise.svg';
};
