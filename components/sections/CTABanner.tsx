// components/sections/CTABanner.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface CTABannerProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'primary' | 'subtle';
}

export function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'primary',
  className,
  ...props
}: CTABannerProps) {
  return (
    <section
      className={cn(
        variant === 'primary'
          ? 'bg-primary-700 text-white'
          : 'bg-neutral-100 text-neutral-900',
        className
      )}
      {...props}
    >
      <Container className="py-12 sm:py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mx-auto mt-4 max-w-2xl text-lg',
              variant === 'primary' ? 'text-primary-100' : 'text-neutral-600'
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant={variant === 'primary' ? 'soft' : 'primary'}
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant={variant === 'primary' ? 'tertiary' : 'secondary'}
              className={variant === 'primary' ? 'text-white hover:bg-primary-600' : ''}
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}