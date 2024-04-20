import { formatNumber } from '@utils/formatNumber';
import { toNormalizedString, toNormalizedValue } from '@utils/normalize';

const PRECISION = 4;

export const formatCurrency = ({
  amount,
  decimals,
}: {
  amount: bigint | number;
  decimals?: number;
}): { content: string; trigger: string } => {
  if (typeof amount === 'number') {
    return {
      content: formatNumber({ amount }),
      trigger: formatNumber({
        amount,
        maxDecimals: PRECISION,
      }),
    };
  }

  const numberAmount = decimals
    ? toNormalizedValue(amount, decimals)
    : Number(amount);
  const stringAmount = decimals
    ? toNormalizedString(amount, decimals)
    : amount.toString();

  const [beforeDecimal, afterDecimal] = stringAmount.split('.');

  let content;

  if (afterDecimal) {
    content = `${formatNumber({
      amount: BigInt(beforeDecimal),
    })}.${afterDecimal}`;
  } else {
    content = formatNumber({
      amount: BigInt(beforeDecimal),
    });
  }

  return {
    content,
    trigger: formatNumber({
      amount: numberAmount,
      maxDecimals: PRECISION,
    }),
  };
};
