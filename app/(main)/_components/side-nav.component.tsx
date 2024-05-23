'use client';

import Image from 'next/image';
import { Button } from '@ui';
import { toast } from 'sonner';

import { Icon } from '@/components/icon.component';

export default function SideNavComponent() {
  const onChangeUnit = () => {}

  const onChangeTheme = () => {
    toast.warning('Change Theme!', { description: 'This feature is currently being developed and will be available in an upcoming release. Stay tuned for updates!' });
  };

  const onChangeLanguage = () => {
    toast.warning('Change Language!', { description: 'This feature is currently being developed and will be available in an upcoming release. Stay tuned for updates!' });
  };

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

      <div className='flex gap-4 mt-auto'>
        <Button variant='outline' size='icon' onClick={onChangeUnit}>
          <Icon.cog className='h-4 w-4' />
        </Button>

        <Button variant='outline' size='icon' onClick={onChangeTheme}>
          <Icon.palette className='h-4 w-4' />
        </Button>

        <Button variant='outline' size='icon' onClick={onChangeLanguage}>
          <Icon.languages className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
