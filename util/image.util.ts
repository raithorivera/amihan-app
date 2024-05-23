import { isBlank } from './validation.util';

export const getWeatherIcon = (value: string, size?: string) => {
  if (value && !isBlank(value)) return `/images/weather_icon/${value}@${size || '4x'}.png`;
  return '/images/weather_icon/03d@4x.png';
};

export const getWeatherBanner = (value?: string, icon?: string) => {
  switch (value) {
    case 'scattered clouds':
    case 'broken clouds':
      return '/images/bg_svg/cloudy.svg';
    case 'mist':
      return '/images/bg_svg/partial.svg';
    case 'shower rain':
    case 'light rain':
    case 'rain':
    case 'thunderstorm':
      return '/images/bg_svg/raining.svg';
    case 'snow':
      return '/images/bg_svg/snowing.svg';
    default:
      if (icon && icon?.indexOf('d') > -1) return '/images/bg_svg/morning.svg';
      if (icon && icon?.indexOf('n') > -1) return '/images/bg_svg/night.svg';
      return '/images/bg_svg/cloudy.svg';
  }
};
