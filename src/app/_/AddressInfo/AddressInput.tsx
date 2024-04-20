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
