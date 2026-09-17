// components/ui/ImpactCard.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

interface ImpactCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  metric: string;
  description: string;
  icon?: React.ReactNode;
}

export function ImpactCard({
  title,
  metric,
  description,
  icon,
  className,
  ...props
}: ImpactCardProps) {
  return (
    <Card className={cn('h-full', className)} variant="elevated" {...props}>
      <CardHeader>
        {icon && (
          <div className="mb-3 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600">
            {icon}
          </div>
        )}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-primary-700">{metric}</p>
        <p className="mt-2 text-neutral-600">{description}</p>
      </CardContent>
    </Card>
  );
}