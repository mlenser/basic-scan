'use client';

import { ERC20AmountDisplay } from '@components/ERC20AmountDisplay';
import { Label } from '@components/Label';
import { useBalance } from 'wagmi';

export const Balance = () => {
  const { data, isPending } = useBalance({
    address: '0x388c818ca8b9251b393131c08a736a67ccb19297',
  });

  return (
    <div className="flex items-center gap-2">
      <Label>Balance</Label>
      <ERC20AmountDisplay erc20={data} skeleton={isPending} />
    </div>
  );
};
