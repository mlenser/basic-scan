import { type AddressFormSchema } from '@app/_/AddressInfo/address-form-schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/Form';
import { Input } from '@components/Input';
import { useFormContext } from 'react-hook-form';

export const AddressInput = () => {
  const { control } = useFormContext<AddressFormSchema>();

  // 0x388c818ca8b9251b393131c08a736a67ccb19297 should have 0.0001 ETH
  // 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 should have 0.074062847318492938 ETH
  return (
    <FormField
      control={control}
      name="address"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
