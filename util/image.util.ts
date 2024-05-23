export const getWeatherIcon = (value: string, size?: string) => {
  return `https://openweathermap.org/img/wn/${value}@${size || '4x'}.png`;
};
