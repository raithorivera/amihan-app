import { Waveform } from '@/components/waveform';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <div className='fixed top-0 flex w-16 flex-none items-center whitespace-nowrap py-12 text-sm leading-7 [writing-mode:vertical-rl] bg-white h-screen border-x border-slate-200'>
        <div className='w-[100px] mt-[20px] mb-[36px] ml-[6px]'>
          <Image src='/images/logo/amihan.png' width={180} height={120} alt='Amihan Logo' className='rotate-90' />
        </div>
        <span className='mt-6 flex gap-6 font-semibold t text-slate-900'>
          <span aria-hidden='true' className='text-slate-400'>
            /
          </span>
          Your weather companion.
        </span>
      </div>

      <div className='ml-16 relative'>
        <header className='bg-slate-50 lg:fixed lg:inset-y-0 lg:left-16 lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120 bg-gradient-to-r from-lime-50 via-white-50 via-orange-50 to-amber-50'>
          <div className='mt-10 px-8 py-4'>
            <div className='flex items-center justify-between px-3'>
              <div className=''>
                <h2 className='text-lg leading-tight'>Today, 22 May 2024</h2>
                <h1 className='text-4xl font-bold leading-tight tracking-tighter'>Manila, PH</h1>
              </div>

              <Image src='https://openweathermap.org/img/wn/10d@4x.png' width={100} height={100} alt='Weather Icon' className='' />
            </div>

            <div className='mt-2 relative'>
              <Image src='/images/bg_svg/morning.svg' width={540} height={160} alt='Weather Image' className='shadow-lg rounded-[20px]' />

              <div className='absolute bottom-4 left-6'>
                <h2 className='text-5xl text-white font-light leading-none tracking-tighter select-none'>
                  26.9<sup className='text-xl -top-8'>&deg;C</sup>
                </h2>

                <p className='capitalize text-white text-sm leading-tight ml-1 font-semibold'>overcast clouds</p>
              </div>
            </div>
          </div>

          <div className='mt-2 relative grid grid-cols-3 gap-4 py-6 px-4  bg-gradient-to-r from-white to-amber-50 drop-shadow-sm'>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Temperature</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>
                26.9<sup className='text-lg -top-4'>&deg;C</sup>
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Minimum</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>
                26.9<sup className='text-lg -top-4'>&deg;C</sup>
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Maximum</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>
                26.9<sup className='text-lg -top-4'>&deg;C</sup>
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Feels Like</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>
                26.9<sup className='text-lg -top-4'>&deg;C</sup>
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Humidity</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>64</h3>
            </div>
            <div className='flex flex-col justify-between gap-2 border-l-2 border-orange-600 pl-4'>
              <p className='text-sm font-medium text-slate-700'>Pressure</p>
              <h3 className='bottom-4 left-6 text-2xl text-gray-900 font-semibold leading-tight tracking-tighter select-none'>1007</h3>
            </div>
          </div>
        </header>

        <main className='border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120'>
          <Waveform className='absolute left-0 top-0 h-20 w-full' />

          <div className='relative lg:p-20 p-4'>
            <h1 className='text-xl font-semibold uppercase tracking-wide border-b-2 border-slate-50 pb-4'>Weather Forecast</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
