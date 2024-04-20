import { z } from 'zod';

export const ENSNameSchema = z
  .string()
  .includes('.eth', { message: 'Enter an ens name that ends in .eth' })
  .toLowerCase()
  .trim();
