'use client';

import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input, Button, Form, FormControl, FormField, FormItem, FormMessage } from '@ui';

const FormSchema = z.object({
  search: z.string().min(2, { message: 'City name must be at least 2 characters.' }).max(50, { message: 'City name cannot be more than 50 characters.' })
});

export default function SearchFormComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: ''
    }
  });

  const searchMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormSchema>) => {
      return values;
    },
    onSuccess: async (responseData) => {
      // Update the search params
      const newParams = new URLSearchParams(searchParams?.toString());
      newParams.set('city', responseData.search);
      const newUrl = `${pathname}?${newParams.toString()}`;
      router.push(newUrl, { scroll: false });
    }
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    searchMutation.mutate(values);
  };

  return (
    <div className='px-3 mt-6 relative'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='search'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Search city name' className='py-6 pl-4 pr-[90px] capitalize' {...field} disabled={searchMutation?.isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' size='sm' className='absolute top-[10px] right-[24px]' disabled={!form?.formState?.isValid || searchMutation?.isPending}>
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
}
