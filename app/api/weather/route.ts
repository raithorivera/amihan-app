import { type NextRequest, NextResponse } from 'next/server';

import { fetchData } from '@/util/fetch.util';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  console.log('url', url.searchParams)

  const city = url.searchParams.get('city');
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');
  const unit = url.searchParams.get('unit') || '';

  if (!city && (!lat || !lon)) {
    return NextResponse.json({ statusCode: 400, message: 'Either city or lat/lon must be provided!' });
  }

  try {
    const params: Record<string, string> = {};
    if (city) {
      params.q = city;
    } else if (lat && lon) {
      params.lat = lat;
      params.lon = lon;
    }
    params.units = unit;

    const data = await fetchData('weather', params);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ statusCode: 400, message: error.message || 'Invalid request!' });
  }
}
