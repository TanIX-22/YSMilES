// components/ui/StatsCard.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';

interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  description?: string;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  icon?: React.ReactNode;
}

export function StatsCard({
  value,
  label,
  description,
  trend,
  icon,
  className,
  ...props
}: StatsCardProps) {
  return (
    <Card
      className={cn('flex flex-col bg-white text-[#0f2d58]', className)}
      variant="elevated"
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#01800f]">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#0f2d58] sm:text-4xl">
            {value}
          </p>
        </div>
        {icon && (
          <div className="rounded-lg bg-white/50 p-2.5 text-[#0f2d58]">
            {icon}
          </div>
        )}
      </div>

      {(description || trend) && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          {trend && (
            <span
              className={cn(
                'font-medium',
                trend.direction === 'up' && 'text-[#01800f]',
                trend.direction === 'down' && 'text-[#01800f]',
                trend.direction === 'neutral' && 'text-[#01800f]'
              )}
            >
              {trend.value}
            </span>
          )}
          {description && (
            <span className="text-[#01790f]">{description}</span>
          )}
        </div>
      )}
    </Card>
  );
}