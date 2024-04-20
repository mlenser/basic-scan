'use client';

import { AddressInput } from '@app/_/AddressForm/AddressInput';
import { Balance } from '@app/_/AddressForm/Balance';
import { Transactions } from '@app/_/AddressForm/Transactions';
import { addressFormSchema } from '@app/_/AddressForm/address-form-schema';
import { Form } from '@components/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

export const AddressForm = () => {
  const form = useForm<z.infer<typeof addressFormSchema>>({
    defaultValues: { address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045' },
    mode: 'onTouched',
    resolver: zodResolver(addressFormSchema),
  });

  return (
    <Form {...form}>
      <form className="space-y-8">
        <AddressInput />
        <Balance />
        <Transactions />
      </form>
    </Form>
  );
};
