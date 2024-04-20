import { AddressSchema } from '@internal-types/address';
import { z } from 'zod';

export const addressFormSchema = z.object({
  address: AddressSchema.optional(),
});
export type AddressFormSchema = z.infer<typeof addressFormSchema>;
