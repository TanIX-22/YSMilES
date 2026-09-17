// components/ui/Accordion.tsx
'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionContextValue {
  openItems: string[];
  toggle: (id: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({
  type = 'single',
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      if (type === 'single') {
        return prev.includes(id) ? [] : [id];
      }
      return prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div className={cn('divide-y divide-neutral-200', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div className={cn('py-1', className)} data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

export function AccordionTrigger({
  value,
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionTrigger must be used within Accordion');

  const isOpen = ctx.openItems.includes(value);

  return (
    <button
      type="button"
      onClick={() => ctx.toggle(value)}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-trigger-${value}`}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left text-base font-medium text-neutral-900',
        'hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
        aria-hidden="true"
      />
    </button>
  );
}

interface AccordionContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionContent({
  value,
  children,
  className,
}: AccordionContentProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionContent must be used within Accordion');

  const isOpen = ctx.openItems.includes(value);

  return (
    <div
      id={`accordion-content-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      hidden={!isOpen}
      className={cn(
        'overflow-hidden text-neutral-600',
        isOpen ? 'pb-4' : 'hidden',
        className
      )}
    >
      {children}
    </div>
  );
}