// components/ui/Timeline.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
}

interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      <div className="absolute left-4 top-0 h-full w-px bg-neutral-200 sm:left-1/2 sm:-translate-x-px" />

      <ol className="space-y-10">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              'relative flex flex-col sm:flex-row sm:items-start',
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            )}
          >
            <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary-600 sm:left-1/2">
              <span className="sr-only">Step {index + 1}</span>
            </div>

            <div
              className={cn(
                'ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]',
                index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
              )}
            >
              {item.date && (
                <time className="text-sm font-medium text-primary-600">
                  {item.date}
                </time>
              )}
              <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-neutral-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}