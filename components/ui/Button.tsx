// components/ui/Button.tsx
import {
  cloneElement,
  forwardRef,
  isValidElement,
  ButtonHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'soft'
  | 'destructive'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow-sm',
  secondary:
    'border-2 border-primary-600 text-primary-700 bg-transparent hover:bg-primary-50 focus-visible:ring-primary-500',
  tertiary:
    'text-primary-700 bg-transparent hover:bg-primary-50 focus-visible:ring-primary-500',
  soft: 'bg-primary-50 text-primary-800 hover:bg-primary-100 focus-visible:ring-primary-500',
  destructive:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  ghost:
    'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    if (asChild && isValidElement(children)) {
      const childProps = children.props as { className?: string };
      return cloneElement(children, {
        className: cn(
          'inline-flex items-center justify-center gap-2 rounded-md font-medium',
          'transition-colors duration-150 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className,
          childProps.className
        ),
        ...(disabled || isLoading ? { disabled: disabled || isLoading } : {}),
      } as Record<string, unknown>);
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md font-medium',
          'transition-colors duration-150 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';