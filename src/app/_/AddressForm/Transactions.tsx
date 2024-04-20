import { type AddressFormSchema } from '@app/_/AddressForm/address-form-schema';
import { useTransactionsList } from '@app/_/AddressForm/useTransactionsList';
import { Card, CardContent } from '@components/Card';
import { useFormContext, useWatch } from 'react-hook-form';
import type { Address } from 'viem';

export const Transactions = () => {
  const { control } = useFormContext<AddressFormSchema>();
  const address = useWatch({
    control,
    name: 'address',
  });
  const { transactions } = useTransactionsList({ address: address as Address }); // TODO: fix address type

  console.log('transactions', transactions);
  return transactions?.map((transaction) => (
    <Card key={transaction.hash}>
      <CardContent>{transaction.from}</CardContent>
    </Card>
  ));
};
