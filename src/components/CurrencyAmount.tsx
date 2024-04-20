import { SkeletonNumber } from '@components/SkeletonNumber';
import { formatCurrency } from '@utils/currency/formatCurrency';

export const CurrencyAmount = ({
  amount,
  className,
  decimals,
  skeleton,
  ...rest
}: {
  amount: bigint | number | undefined;
  className?: string;
  decimals: number | undefined;
  skeleton?: boolean;
}) => {
  if (skeleton) {
    return <SkeletonNumber />;
  }
  if (amount === undefined) {
    return null;
  }

  const { content } = formatCurrency({
    amount,
    decimals,
  });

  return (
    <span className={className} {...rest}>
      {content}
    </span>
  );
};
