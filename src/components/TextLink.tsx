import { IconExternalLink } from '@tabler/icons-react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { type ReactNode } from 'react';

export type TextLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  showIcon?: boolean;
};

export const TextLink = ({
  children,
  className,
  href,
  showIcon = true,
  ...rest
}: TextLinkProps) => {
  if (href.startsWith('http')) {
    return (
      <a
        className={clsx('text-primary underline', className)}
        href={href as string}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      >
        {children}
        {showIcon ? (
          <IconExternalLink
            size={16}
            style={{ display: 'inline', verticalAlign: 'middle' }}
          />
        ) : null}
      </a>
    );
  }
  return (
    <Link
      className={clsx('text-primary underline', className)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
