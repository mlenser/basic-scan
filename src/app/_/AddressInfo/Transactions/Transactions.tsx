import { SkeletonTransaction } from '@app/_/AddressInfo/Transactions/SkeletonTransaction';
import { useTransactionsList } from '@app/_/AddressInfo/Transactions/useTransactionsList';
import { type AddressFormSchema } from '@app/_/AddressInfo/address-form-schema';
import { Card, CardContent, CardLabelValue } from '@components/Card';
import { ERC20AmountDisplay } from '@components/ERC20AmountDisplay';
import { TextLink } from '@components/TextLink';
import { ETHER_DECIMALS } from '@constants';
import { formatDate } from '@utils/formatDate';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

const NUMBER_OF_MORE_SKELETON_CARDS_TO_SHOW = 2;

const loadingArray = [...Array(NUMBER_OF_MORE_SKELETON_CARDS_TO_SHOW).keys()];

export const Transactions = () => {
  const { control } = useFormContext<AddressFormSchema>();
  const address = useWatch({
    control,
    name: 'address',
  });
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    transactions,
  } = useTransactionsList({ address });
  const { inView, ref: endOfPage } = useInView();

  useEffect(() => {
    if (transactions && inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetchingNextPage, transactions]);

  return (
    <section className="space-y-5">
      {transactions?.map((transaction) => (
        <Card key={transaction.hash}>
          <CardContent className="space-y-3">
            <CardLabelValue
              label="Date"
              value={formatDate({
                date: transaction.timeStamp,
              })}
            />
            <CardLabelValue
              label="From"
              value={
                <TextLink
                  href={`https://etherscan.io/address/${transaction.from}`}
                >
                  {transaction.from}
                </TextLink>
              }
            />
            <CardLabelValue
              label="To"
              value={
                <TextLink
                  href={`https://etherscan.io/address/${transaction.to}`}
                >
                  {transaction.to}
                </TextLink>
              }
            />
            <CardLabelValue
              label="Hash"
              value={
                <TextLink href={`https://etherscan.io/tx/${transaction.hash}`}>
                  {transaction.hash}
                </TextLink>
              }
            />
            <CardLabelValue
              label="Value"
              value={
                <ERC20AmountDisplay
                  erc20={{
                    decimals: ETHER_DECIMALS,
                    symbol: 'ETH',
                    value: BigInt(transaction.value),
                  }}
                />
              }
            />
          </CardContent>
        </Card>
      ))}
      {isPending
        ? loadingArray.map((id) => <SkeletonTransaction key={id} />)
        : null}
      {!isPending && isFetchingNextPage ? <SkeletonTransaction /> : null}
      <div className="relative">
        <div ref={endOfPage} className="absolute -top-96" />
      </div>
    </section>
  );
};
