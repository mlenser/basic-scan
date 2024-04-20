'use client';

import { getTransactionsList } from '@app/_/AddressForm/getTransactionsList';
import { useQuery } from '@tanstack/react-query';
import { type Address } from 'viem';

const ADDRESS_LENGTH = 42;

export const useTransactionsList = ({
  address,
}: {
  address: Address | undefined;
}) => {
  const { data: transactions, ...rest } = useQuery({
    enabled: address?.length === ADDRESS_LENGTH,
    queryFn: () =>
      getTransactionsList({
        address,
      }),
    queryKey: ['transactions', { address }],
  });

  return { transactions, ...rest };
};
