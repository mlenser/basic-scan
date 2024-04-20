import { AddressSchema } from '@internal-types/address';
import { ENSNameSchema } from '@internal-types/ens-name';
import { z } from 'zod';

export const addressFormSchema = z.object({
  address: z.union([AddressSchema, ENSNameSchema]).optional(),
});
