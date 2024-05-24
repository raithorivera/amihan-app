export async function fetchData(endpoint: string, params: Record<string, string>) {
  const BASE_URL = process.env.OPEN_WEATHER_HOST;
  const APP_ID = process.env.OPEN_WEATHER_APP_ID;

  if (!APP_ID) {
    throw new Error('APP_ID is not defined');
  }

  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.append('appid', APP_ID);

  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Error fetching weather data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
