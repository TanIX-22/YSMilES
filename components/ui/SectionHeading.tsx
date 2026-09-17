import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">{subtitle}</p>}
    </div>
  );
}
