// components/layout/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { withBasePath } from '@/lib/paths';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  items: NavItem[];
}

export function Navbar({ logo, items }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pb-2 pt-8 sm:px-4">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-auto max-w-[1280px]">
          <div className="hidden items-center justify-center lg:flex">
            <Link
              href="/"
              aria-label="Y-SMILES Home"
              className="absolute left-4 top-1/2 z-20 flex h-[104px] w-[104px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[5px] border-[#003a91] bg-[#003a91] shadow-[0_20px_38px_rgba(0,58,145,0.22)] transition-transform duration-200 hover:scale-[1.02]"
            >
                {logo || (
                  <Image
                    src={withBasePath('/logos/Ysmiles_logo.jpg')}
                  alt="Y-SMILES logo"
                  width={104}
                  height={104}
                  className="h-full w-full -translate-y-[3%] scale-[1.28] object-cover"
                  priority
                />
              )}
            </Link>

            <div className="flex w-full items-center justify-center rounded-[32px] border border-[#dceef4] bg-white px-5 py-4 pl-[116px] shadow-[0_14px_30px_rgba(0,58,145,0.08)] transition-all duration-300">
              <nav className="flex flex-1 items-center justify-center gap-2 xl:gap-3" aria-label="Main navigation">
                {items.map((item) => {
                  const isHome = item.label === 'HOME';

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'relative rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#174a7e] transition-all duration-200 hover:text-[#003a91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/20',
                        isHome && 'bg-[#eaf7fb] text-[#003a91] shadow-[0_0_0_1px_rgba(0,168,150,0.14)]',
                        !isHome && 'hover:bg-[#f2fbfc] hover:shadow-[0_0_0_1px_rgba(0,168,150,0.1)]'
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="flex h-[84px] items-center gap-3 rounded-[28px] border border-[#dceef4] bg-white px-2 py-2 shadow-[0_14px_30px_rgba(0,58,145,0.08)]">
              <Link
                href="/"
                aria-label="Y-SMILES Home"
                className="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-full border-[4px] border-[#003a91] bg-[#003a91] shadow-[0_10px_20px_rgba(0,58,145,0.22)]"
              >
                  {logo || (
                    <Image
                      src={withBasePath('/logos/Ysmiles_logo.jpg')}
                    alt="Y-SMILES logo"
                    width={68}
                    height={68}
                    className="h-full w-full -translate-y-[3%] scale-[1.28] object-cover"
                    priority
                  />
                )}
              </Link>

              <div className="flex min-w-0 flex-1 justify-center px-2" aria-hidden="true">
                <Image
                  src={withBasePath('/logos/ysmiles-wordmark.svg')}
                  alt=""
                  width={280}
                  height={64}
                  className="h-auto max-h-12 w-auto max-w-full object-contain"
                />
              </div>

              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-end">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dceef4] bg-[#f2fbfc] text-[#003a91] transition hover:bg-[#eaf7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/20"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden transition-all duration-300 lg:hidden',
          mobileOpen ? 'mt-3 max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container>
          <nav className="rounded-[24px] border border-[#eaf0f6] bg-white p-2 shadow-[0_16px_30px_rgba(15,40,71,0.09)]" aria-label="Mobile navigation">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#163b62] transition hover:bg-[#f3f8ff] hover:text-[#0f2847]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}