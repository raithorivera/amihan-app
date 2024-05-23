import { Metadata } from 'next';
import Image from 'next/image';

import { Waveform } from '@/components/waveform.component';

import SideNavComponent from './_components/side-nav.component';
import MainHeaderComponent from './_components/main-header.component';
import TemperatureComponent from './_components/temperature.component';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function HomePage() {
  return (
    <div>
      <SideNavComponent />

      <div className='ml-16 relative'>
        <header className='bg-slate-50 lg:fixed lg:inset-0 lg:w-112 lg:left-16 xl:w-120 bg-gradient-to-b from-cyan-50 via-white to-sky-50 lg:shadow relative h-full overflow-y-auto lg:items-start flex flex-col'>
          <div className='z-10 relative'>
            <MainHeaderComponent />

            {/* Temperature */}
            <TemperatureComponent />

            {/* Sunset/Sunrise */}
            <div className='mt-4 grid grid-cols-2 justify-between p-8'>
              <div className='flex items-center gap-6'>
                <Image src='/images/icon_svg/sunrise.svg' width={65} height={65} alt='Sunrise Image' className='' />
                <div className='grid gap-1'>
                  <p className='text-sm'>Sunrise</p>
                  <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>6:00 PM</h3>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <Image src='/images/icon_svg/sunset.svg' width={65} height={65} alt='Sunset Image' className='' />

                <div className='grid gap-1'>
                  <p className='text-sm'>Sunset</p>
                  <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>6:00 AM</h3>
                </div>
              </div>
            </div>

            {/* Wind */}
            <div className='flex items-center justify-between p-8'>
              <div className='grid grid-cols-4 gap-6'>
                <Image src='/images/icon_svg/cloud-gust.svg' width={65} height={65} alt='Sunrise Image' className='' />

                <div className='grid gap-1'>
                  <p className='text-sm'>Wind Speed</p>
                  <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>1.79</h3>
                </div>

                <div className='grid gap-1'>
                  <p className='text-sm'>Direction</p>
                  <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>356&deg;</h3>
                </div>

                <div className='grid gap-1'>
                  <p className='text-sm'>Wind Gust</p>
                  <h3 className='text-xl font-semibold leading-none tracking-tighter select-none'>8.94</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full mt-auto hidden lg:flex'>
            <Image src='/images/nature-no-moon.svg' width={1040} height={160} alt='Nature Image' />
          </div>
        </header>

        <main className='lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120 mt-2 bg-gradient-to-l from-gray-50 via-100%'>
          <Waveform className='absolute left-0 top-0 h-20 w-full' />

          <div className='relative xl:p-20 lg:p-10 p-4 pb-10 xl:max-w-[1440px]'>
            <div>
              <h1 className='text-xl font-semibold uppercase tracking-wide border-b-2 border-slate-50 pb-4'>Weather Forecast</h1>
            </div>

            <div className='grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                <div key={index} className='p-4 bg-slate-50 bg-gradient-to-l from-lime-50 to-sky-50 shadow-sm rounded-md'>
                  <div className='flex items-center justify-between'>
                    <div className='leading-tight tracking-tighter'>
                      <h4 className='font-light text-sm'>23 May 2024</h4>
                      <h3 className='font-bold text-lg'>Sunday 11:00AM</h3>
                    </div>

                    <Image src='https://openweathermap.org/img/wn/10d@4x.png' width={40} height={40} alt='Weather Icon' />
                  </div>

                  <div className='mt-2 relative'>
                    <Image src='/images/bg_svg/cloudy.svg' width={540} height={160} alt='Weather Image' />

                    <div className='absolute bottom-2 left-4'>
                      <h2 className='text-xl text-white font-light leading-none tracking-tighter select-none'>
                        26.9<sup className='text-sm -top-2 left-1'>&deg;C</sup>
                      </h2>

                      <p className='capitalize text-white text-xs leading-tight font-semibold'>overcast clouds</p>
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className='mt-3 relative grid grid-cols-2 gap-x-2 gap-y-2 text-center'>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Minimum</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                        26.9<sup className='text-sm -top-2'>&deg;C</sup>
                      </h3>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Maximum</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                        26.9<sup className='text-sm -top-2'>&deg;C</sup>
                      </h3>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Feels Like</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>
                        26.9<sup className='text-sm -top-2'>&deg;C</sup>
                      </h3>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Humidity</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>64</h3>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Pressure</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>1007</h3>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                      <p className='text-sm font-light'>Visibility</p>
                      <h3 className='bottom-4 left-6 text-lg text-gray-900 font-semibold leading-tight tracking-tighter select-none pl-2'>1000</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
