'use client';

import { AddressFormSchema } from '@app/_/AddressForm/address-form-schema';
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
  // 0x388c818ca8b9251b393131c08a736a67ccb19297 should have 0.0001 ETH
  // 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 should have 0.074062847318492938 ETH

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
