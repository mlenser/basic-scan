import { ETHER_DECIMALS } from '@constants';
import { faker } from '@faker-js/faker';
import { formatCurrency } from '@utils/currency/formatCurrency';
import { describe, expect, it } from 'vitest';

describe('formatCurrency', () => {
  it('should handle a regular number type', () => {
    const amount = faker.number.int({ max: 999 });
    expect(formatCurrency({ amount })).toEqual({
      content: `${amount}`,
      trigger: `${amount}`,
    });
  });
  it('should handle a decimal', () => {
    const amount = faker.number.float({ precision: 0.01 });
    expect(formatCurrency({ amount })).toEqual({
      content: `${amount}`,
      trigger: `${amount}`,
    });
  });
  it('should add commas to number values', () => {
    const amount = 1234.56789;
    expect(formatCurrency({ amount })).toEqual({
      content: '1,234.56789',
      trigger: '1,234.5679',
    });
  });
  it('should handle a BigInt', () => {
    const baseValue = faker.number.int({ max: 999 });
    const amount = BigInt(baseValue);
    expect(formatCurrency({ amount })).toEqual({
      content: `${baseValue}`,
      trigger: `${baseValue}`,
    });
  });
  it('should add commas to bigint values', () => {
    const amount = 1234567890000000000000n;
    expect(formatCurrency({ amount, decimals: ETHER_DECIMALS })).toEqual({
      content: '1,234.56789',
      trigger: '1,234.5679',
    });
  });
  it('should handle full 18 decimals', () => {
    const amount = 4123456789012345678901n;
    expect(formatCurrency({ amount, decimals: ETHER_DECIMALS })).toEqual({
      content: '4,123.456789012345678901',
      trigger: '4,123.4568',
    });
  });
  it('should handle a poor backend structure', () => {
    const amount = 28n;
    expect(formatCurrency({ amount, decimals: ETHER_DECIMALS })).toEqual({
      content: '0.000000000000000028',
      trigger: '0',
    });
  });
  it('should give the correct decimal places', () => {
    const amount = 4123456789012345678901n;
    expect(formatCurrency({ amount, decimals: ETHER_DECIMALS })).toEqual({
      content: '4,123.456789012345678901',
      trigger: '4,123.4568',
    });
  });
});
