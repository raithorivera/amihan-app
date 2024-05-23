import Image from 'next/image';

export default function SideNavComponent() {
  return (
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
  );
}
