import { type NextRequest, NextResponse } from 'next/server';

import { fetchData } from '@/util/fetch.util';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const city = url.searchParams.get('city');
  const unit = url.searchParams.get('unit') || '';

  if (!city) {
    return NextResponse.json({ statusCode: 400, message: 'City is not provided!' });
  }

  try {
    const data = await fetchData('weather', { q: city, units: unit });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ statusCode: 400, message: error.message || 'Invalid request!' });
  }
}
