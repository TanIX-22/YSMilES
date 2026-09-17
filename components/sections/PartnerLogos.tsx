// components/sections/PartnerLogos.tsx
import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

interface Partner {
  name: string;
  logoUrl: ImageProps['src'];
  href?: string;
}

interface PartnerLogosProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  partners: Partner[];
  size?: 'default' | 'large';
}

export function PartnerLogos({
  title = 'Trusted Partners',
  partners,
  size = 'default',
  className,
  ...props
}: PartnerLogosProps) {
  const logoClassName = size === 'large'
    ? 'h-28 w-56 object-contain sm:h-32 sm:w-64'
    : 'h-8 w-auto max-w-[140px] object-contain sm:h-10';
  const itemClassName = size === 'large'
    ? 'flex h-32 w-56 shrink-0 items-center justify-center sm:h-36 sm:w-64'
    : '';
  const linkClassName = size === 'large'
    ? 'flex h-full w-full items-center justify-center'
    : 'block rounded-2xl border border-neutral-200 bg-white/90 p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500';
  const logoWrapperClassName = size === 'large'
    ? 'flex h-full w-full items-center justify-center'
    : 'rounded-2xl border border-neutral-200 bg-white/90 p-3 shadow-sm';

  return (
    <section className={cn('py-10 sm:py-12', className)} {...props}>
      <Container>
        {title && (
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-neutral-500">
            {title}
          </p>
        )}
        <ul className={cn(
          'flex flex-wrap items-center justify-center gap-x-4 gap-y-8 sm:gap-x-6',
          size === 'large' && 'md:flex-nowrap md:gap-x-2 lg:gap-x-8',
        )}>
          {partners.map((partner) => (
            <li
              key={partner.name}
              className={itemClassName}
            >
              {partner.href ? (
                <a
                  href={partner.href}
                  className={linkClassName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className={cn(
                      logoClassName,
                      size === 'large' && partner.name === 'Y-SMILES' && 'h-32 w-64 sm:h-36 sm:w-72',
                    )}
                  />
                </a>
              ) : (
                <div className={logoWrapperClassName}>
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className={cn(
                      logoClassName,
                      size === 'large' && partner.name === 'Y-SMILES' && 'h-32 w-64 sm:h-36 sm:w-72',
                    )}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}