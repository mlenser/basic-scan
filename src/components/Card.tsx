import { clsx } from 'clsx';
import { type HTMLAttributes, type ReactNode, forwardRef, useId } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'bg-card text-card-foreground rounded-lg border shadow-sm',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    ref={ref}
    className={clsx(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('text-muted-foreground text-sm', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('p-6', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export interface CardLabelValueProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  value: ReactNode;
}
export const CardLabelValue = forwardRef<HTMLDivElement, CardLabelValueProps>(
  ({ className, label, orientation = 'vertical', value, ...rest }, ref) => {
    const id = useId();

    return (
      <div ref={ref} className={className} {...rest}>
        <label htmlFor={id}>{label}</label>
        {orientation === 'horizontal' ? ' ' : ''}
        <div
          className={clsx('break-all', {
            inline: orientation === 'horizontal',
          })}
          id={id}
        >
          {value}
        </div>
      </div>
    );
  }
);
CardLabelValue.displayName = 'CardLabelValue';
