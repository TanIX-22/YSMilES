import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-600">
      <Link href="/" className="transition hover:text-primary-700">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/gallery" className="transition hover:text-primary-700">
        Gallery
      </Link>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-primary-700">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-neutral-900">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="h-4 w-4" />}
        </div>
      ))}
    </nav>
  );
}
