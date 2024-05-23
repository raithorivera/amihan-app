export const getTemperatureSymbol = (type?: string) => {
  switch (type) {
    case 'imperial':
      return '℉';
    case 'metric':
      return '℃';
    case 'standard':
    default:
      return 'K';
  }
};

export const getHumiditySymbol = () => {
  return '%';
};

export const getPressureSymbol = () => {
  return 'hPa';
};

export const getVisibilitySymbol = () => {
  return 'm';
};

export const getWindDirectionSymbol = () => {
  return '°';
};

export const getWindSymbol = (type?: string) => {
  switch (type) {
    case 'imperial':
      return 'mph';
    case 'metric':
      return 'm/s';
    case 'standard':
    default:
      return 'm/s';
  }
};
