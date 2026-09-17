// components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  items: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function Navbar({
  logo,
  items,
  ctaLabel = 'Join as School',
  ctaHref = '/join',
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-18">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2" aria-label="Y-SMilES Home">
              {logo || (
                <span className="text-xl font-bold text-primary-700">
                  Y-SMilES
                </span>
              )}
            </Link>

            <nav className="hidden lg:flex lg:gap-1" aria-label="Main">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="md"
              className="hidden sm:inline-flex"
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-neutral-200 bg-white lg:hidden',
          mobileOpen ? 'block' : 'hidden'
        )}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button asChild className="w-full">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}