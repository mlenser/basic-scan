import { type AddressFormSchema } from '@app/_/AddressForm/address-form-schema';
import { useTransactionsList } from '@app/_/AddressForm/useTransactionsList';
import { Card, CardContent, CardLabelValue } from '@components/Card';
import { ERC20AmountDisplay } from '@components/ERC20AmountDisplay';
import { TextLink } from '@components/TextLink';
import { ETHER_DECIMALS } from '@constants';
import { formatDate } from '@utils/formatDate';
import { useFormContext, useWatch } from 'react-hook-form';
import type { Address } from 'viem';

export const Transactions = () => {
  const { control } = useFormContext<AddressFormSchema>();
  const address = useWatch({
    control,
    name: 'address',
  });
  const { transactions } = useTransactionsList({ address: address as Address }); // TODO: fix address type

  return transactions?.map((transaction) => (
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
            <TextLink href={`https://etherscan.io/address/${transaction.from}`}>
              {transaction.from}
            </TextLink>
          }
        />
        <CardLabelValue
          label="To"
          value={
            <TextLink href={`https://etherscan.io/address/${transaction.to}`}>
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
  ));
};
