// components/ui/ImageCard.tsx
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';

interface ImageCardProps extends HTMLAttributes<HTMLElement> {
  src: string;
  alt: string;
  title: string;
  description?: string;
  href?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export function ImageCard({
  src,
  alt,
  title,
  description,
  href,
  aspectRatio = 'video',
  className,
  ...props
}: ImageCardProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  const content = (
    <>
      <div className={cn('overflow-hidden rounded-t-xl', aspectClasses[aspectRatio])}>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-700">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm',
          'transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          className
        )}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      {content}
    </Card>
  );
}