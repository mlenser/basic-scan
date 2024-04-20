'use client';

import { type AddressFormSchema } from '@app/_/AddressForm/address-form-schema';
import { ERC20AmountDisplay } from '@components/ERC20AmountDisplay';
import { Label } from '@components/Label';
import { useFormContext, useWatch } from 'react-hook-form';
import { type Address } from 'viem';
import { useBalance } from 'wagmi';

export const Balance = () => {
  const { control } = useFormContext<AddressFormSchema>();
  const address = useWatch({
    control,
    name: 'address',
  });

  const { data: balance, isPending } = useBalance({
    address: address as Address, // TODO: fix address type
  });

  if (!balance) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Label>Balance</Label>
      <ERC20AmountDisplay erc20={balance} skeleton={isPending} />
    </div>
  );
};
