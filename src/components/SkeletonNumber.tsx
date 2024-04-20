'use client';

import { clsx } from 'clsx';
import { type HTMLAttributes } from 'react';

export const SkeletonNumber = ({
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
  <span className={clsx('bg-muted animate-pulse', className)} {...rest}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>
);
