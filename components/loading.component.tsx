import { Icon } from '@/components/icon.component';

export default function LoadingComponent() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh_-_250px)]'>
      <Icon.spinner className='mr-2 h-8 w-8 animate-spin' />
    </div>
  );
}
