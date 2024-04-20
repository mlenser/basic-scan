'use client';

import { CurrencyAmount } from '@components/CurrencyAmount';
import { type ERC20 } from '@internal-types/ERC20';

export const ERC20AmountDisplay = ({
  className,
  erc20,
  skeleton,
}: {
  className?: string;
  erc20: ERC20 | undefined;
  skeleton?: boolean;
}) => (
  <div className="flex flex-wrap items-center gap-1">
    <span className={className}>
      <CurrencyAmount
        amount={erc20?.value}
        decimals={erc20?.decimals}
        skeleton={skeleton}
      />{' '}
      {erc20?.symbol}
    </span>
  </div>
);
