// Add helper type TTodo, temporary set to any, and should be updated later on.
export type TTodo = any;

export type TWeatherData = TTodo;

export type TForecastData = {
  city: {
    id: number;
    name: string;
    coord: Record<string, number>;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: TWeatherData[];
};
