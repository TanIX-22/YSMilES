// components/sections/HeroBanner.tsx
'use client';

import Image from 'next/image';
import ilbsLogo from '@/logos/ILBS_logo.png';
import launchImage from '@/images/gallery/launch.jpg';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function HeroBanner({ title, subtitle, className }: HeroBannerProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-[#071a2c]',
        className
      )}
      aria-labelledby="hero-heading"
    >
      <Image
        src={launchImage}
        alt="Y-SMilES launch event"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#061525]/70" aria-hidden="true" />

      <Container className="relative z-10 py-24 sm:py-20 lg:py-20">
        <a
          href="https://www.ilbs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-4 top-5 z-10 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/30 sm:left-6 sm:top-6"
          aria-label="Institute of Liver and Biliary Sciences"
        >
          <Image src={ilbsLogo} alt="ILBS" width={180} height={70} className="h-12 w-auto object-contain mix-blend-multiply sm:h-14" priority />
        </a>
        <a
          href="https://www.ntpc.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-5 z-10 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/30 sm:right-6 sm:top-6"
          aria-label="NTPC"
        >
          <Image src="/logos/NTPC_logo.png" alt="NTPC" width={180} height={70} className="h-12 w-auto object-contain mix-blend-multiply sm:h-14" priority />
        </a>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            An ILBS initiative · Supported by NTPC CSR
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.05]"
          >
            {title || 'Building a Healthier Generation, One Student at a Time'}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            {subtitle ||
              'Y-SMILES creates awareness about liver health, nutrition, and preventive care among school students across India—equipping young people with the knowledge to build healthier habits for life.'}
          </p>
        </div>
      </Container>
    </section>
  );
}