'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@ui';
import { toast } from 'sonner';

import { DEFAULT_UNIT } from '@/constant/main';

import { Icon } from '@/components/icon.component';

export default function SideNavComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams);

  const [measurementUnit, setMeasurementUnit] = useState(params?.unit || DEFAULT_UNIT);

  const onChangeTheme = () => {
    toast.warning('Change Theme!', { description: 'This feature is currently being developed and will be available in an upcoming release. Stay tuned for updates!' });
  };

  const onChangeLanguage = () => {
    toast.warning('Change Language!', { description: 'This feature is currently being developed and will be available in an upcoming release. Stay tuned for updates!' });
  };

  const handleMeasurementUnitChange = (unit: string) => {
    setMeasurementUnit(unit);
    const newParams = new URLSearchParams(searchParams?.toString());
    newParams.set('unit', unit);
    const newUrl = `${pathname}?${newParams.toString()}`;
    router.push(newUrl, { scroll: false });
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Icon.cog className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' side='right'>
            <DropdownMenuLabel>Units of Measurement</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={measurementUnit} onValueChange={handleMeasurementUnitChange}>
              <DropdownMenuRadioItem value='standard'>Standard</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='metric'>Metric</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='imperial'>Imperial</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

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
