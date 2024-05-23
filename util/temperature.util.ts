export const getTemperatureSymbol = (type?: string) => {
  switch (type) {
    case 'imperial':
      return '℉';
    case 'metric':
      return '℃';
    default:
      return 'K';
  }
};
