// components/ui/Container.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:px-8',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';