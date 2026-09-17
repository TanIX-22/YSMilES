import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'default' | 'subtle';
  as?: 'section' | 'div';
}

export function Section({
  background = 'default',
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        'overflow-hidden py-12 sm:py-16 lg:py-24',
        background === 'subtle' ? 'bg-[var(--surface-soft-alt)]' : 'bg-white',
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </Component>
  );
}
