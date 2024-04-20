'use client';

import { addressFormSchema } from '@app/_/AddressForm/address-form-schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/Form';
import { Input } from '@components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

export const AddressForm = () => {
  const form = useForm<z.infer<typeof addressFormSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(addressFormSchema),
  });
  const { control, handleSubmit } = form;
  const onSubmit = (values: z.infer<typeof addressFormSchema>) => {
    console.log('values', values);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address or ENS name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
