'use client';

import {
  type GetTransactionsListResponse,
  getTransactionsList,
} from '@app/_/AddressInfo/Transactions/getTransactionsList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { type Address } from 'viem';

const ADDRESS_LENGTH = 42;
const PER_PAGE = 5;

export const useTransactionsList = ({
  address,
}: {
  address: Address | undefined;
}) => {
  const { data, ...rest } = useInfiniteQuery({
    enabled: address?.length === ADDRESS_LENGTH,
    getNextPageParam: (lastPage: GetTransactionsListResponse) => {
      if (!lastPage || lastPage.onLastPage) {
        return undefined;
      }
      return lastPage.page + 1;
    },
    initialPageParam: 1,
    queryFn: async ({ pageParam }) =>
      getTransactionsList({
        address,
        limit: PER_PAGE,
        page: pageParam,
      }),
    queryKey: ['transactions', { address }],
  });

  const transactions = data?.pages.flatMap((page) => page.transactions) ?? [];

  return { transactions, ...rest };
};
