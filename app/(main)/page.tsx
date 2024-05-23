import { Metadata } from 'next';
import Image from 'next/image';

import { Waveform } from '@/components/waveform.component';

import SideNavComponent from './_components/side-nav.component';
import WeatherComponent from './_components/weather.component';
import ForecastComponent from './_components/forecast.component';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function HomePage() {
  return (
    <div>
      <SideNavComponent />

      <div className='ml-16 relative'>
        <header className='bg-slate-50 lg:fixed lg:inset-0 lg:w-112 lg:left-16 xl:w-120 bg-gradient-to-b from-cyan-50 via-white to-sky-50 lg:shadow relative h-full overflow-y-auto lg:items-start flex flex-col'>
          <div className='z-10 relative w-full'>
            {/* Main Weather Component */}
            <WeatherComponent />
          </div>

          <div className='w-full mt-auto hidden lg:flex'>
            <Image src='/images/nature-no-moon.svg' width={1040} height={160} alt='Nature Image' />
          </div>
        </header>

        <main className='lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120 mt-2 bg-gradient-to-b from-gray-50 via-100%'>
          <Waveform className='absolute left-0 top-0 h-20 w-full' />
          <ForecastComponent />
        </main>
      </div>
    </div>
  );
}
