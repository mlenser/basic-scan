import { HexSchema } from '@internal-types/hex';

const ADDRESS_LENGTH = 42;
export const AddressSchema = HexSchema.refine(
  (val) => val.length === ADDRESS_LENGTH,
  'Invalid address length'
).transform((val) => val.toLowerCase() as `0x${string}`);
