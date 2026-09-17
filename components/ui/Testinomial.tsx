// components/ui/Testimonial.tsx
import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  avatarUrl?: string;
  logoUrl?: ImageProps['src'];
}

export function Testimonial({
  quote,
  author,
  role,
  organization,
  avatarUrl,
  logoUrl,
  className,
  ...props
}: TestimonialProps) {
  return (
    <Card
      className={cn('h-full', className)}
      variant="elevated"
      {...props}
    >
      <blockquote className="text-lg text-neutral-700 leading-relaxed">
        “{quote}”
      </blockquote>
      <footer className="mt-6 flex items-center gap-4">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt="ILBS"
            width={140}
            height={56}
            className="h-12 w-24 object-contain"
          />
        ) : avatarUrl ? (
          <Image
            src={avatarUrl}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <cite className="not-italic font-semibold text-neutral-900">
            {author}
          </cite>
          <p className="text-sm text-neutral-500">
            {role}
            {organization && ` · ${organization}`}
          </p>
        </div>
      </footer>
    </Card>
  );
}