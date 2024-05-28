export const getPreferredUnit = (countryCode: string): string => {
  // United States, Liberia, Myanmar
  const imperialCountries = ['US', 'LR', 'MM'];

  if (imperialCountries.includes(countryCode)) {
    return 'imperial';
  }

  // Default to metric for all other countries
  return 'metric';
};
