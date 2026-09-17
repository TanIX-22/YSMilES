// components/ui/Card.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-neutral-200/80 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.22)]',
      elevated: 'bg-white shadow-[0_16px_45px_-24px_rgba(15,23,42,0.28)] hover:shadow-[0_22px_55px_-24px_rgba(15,23,42,0.35)] transition-all duration-300',
      outlined: 'bg-white border-2 border-neutral-200/80',
      interactive:
        'bg-white border border-neutral-200/80 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.22)] hover:shadow-[0_18px_45px_-24px_rgba(15,23,42,0.32)] hover:border-primary-200 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-5 sm:p-6',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl font-semibold text-neutral-900', className)}
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
    className={cn('mt-1 text-neutral-600', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-6 flex items-center gap-3', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';