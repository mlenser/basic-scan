import { Card, CardContent, CardLabelValue } from '@components/Card';
import { SkeletonAddress } from '@components/SkeletonAddress';
import { SkeletonHash } from '@components/SkeletonHash';
import { SkeletonNumber } from '@components/SkeletonNumber';
import { SkeletonText } from '@components/SkeletonText';

export const SkeletonTransaction = () => (
  <Card>
    <CardContent className="space-y-3">
      <CardLabelValue label="Date" value={<SkeletonText />} />
      <CardLabelValue label="From" value={<SkeletonAddress />} />
      <CardLabelValue label="To" value={<SkeletonAddress />} />
      <CardLabelValue label="Hash" value={<SkeletonHash />} />
      <CardLabelValue label="Value" value={<SkeletonNumber />} />
    </CardContent>
  </Card>
);
