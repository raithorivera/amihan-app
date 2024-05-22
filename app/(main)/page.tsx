import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <div className='fixed top-0 flex w-16 flex-none items-center whitespace-nowrap py-12 text-sm leading-7 [writing-mode:vertical-rl] bg-white h-screen border-x border-slate-200'>
        <div className='w-[100px] mt-[20px] mb-[36px]'>
          <Image src='/images/logo/amihan.png' width={180} height={120} alt='Amihan Logo' className='rotate-90' />
        </div>
        <span className='mt-6 flex gap-6 font-bold text-slate-900'>
          <span aria-hidden='true' className='text-slate-400'>
            /
          </span>
          Your weather companion.
        </span>
      </div>

      <div className='ml-16 relative'>
        <header className='bg-slate-50 lg:fixed lg:inset-y-0 lg:left-16 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120 px-4 py-4'>

        </header>

        <main className='border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120'>
          <div className='relative'>RIGHT</div>
        </main>
      </div>
    </div>
  );
}
