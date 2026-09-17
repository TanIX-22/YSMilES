// components/ui/RiskZoneCard.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';

type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';

interface RiskZoneCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  level: RiskLevel;
  description: string;
  actions?: string[];
}

const levelStyles: Record<
  RiskLevel,
  { border: string; badge: string; label: string }
> = {
  low: {
    border: 'border-l-emerald-500',
    badge: 'bg-emerald-50 text-emerald-800',
    label: 'Low Risk',
  },
  moderate: {
    border: 'border-l-amber-500',
    badge: 'bg-amber-50 text-amber-800',
    label: 'Moderate Risk',
  },
  high: {
    border: 'border-l-orange-500',
    badge: 'bg-orange-50 text-orange-800',
    label: 'High Risk',
  },
  critical: {
    border: 'border-l-red-600',
    badge: 'bg-red-50 text-red-800',
    label: 'Critical',
  },
};

export function RiskZoneCard({
  title,
  level,
  description,
  actions,
  className,
  ...props
}: RiskZoneCardProps) {
  const styles = levelStyles[level];

  return (
    <Card
      className={cn(
        'h-full border-l-4',
        styles.border,
        className
      )}
      variant="outlined"
      {...props}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <span
            className={cn(
              'shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium',
              styles.badge
            )}
          >
            {styles.label}
          </span>
        </div>
        <p className="mt-3 text-neutral-600">{description}</p>
        {actions && actions.length > 0 && (
          <ul className="mt-4 flex flex-1 flex-col gap-1.5">
            {actions.map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                {action}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}