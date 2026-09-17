import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { withBasePath } from '@/lib/paths';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  logo?: React.ReactNode;
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '#about' },
      { label: 'Impact at a Glance', href: '#impact' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
];

export function Footer({ columns = defaultColumns, logo, className, ...props }: FooterProps) {
  return (
    <footer className={cn('border-t border-[#dceef4] bg-white', className)} {...props}>
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Y-SMILES Home">
              {logo || (
                <Image
                  src={withBasePath('/logos/Ysmiles_logo.jpg')}
                  alt="Y-SMiLES logo"
                  width={112}
                  height={112}
                  className="h-24 w-24 rounded-full object-cover"
                />
              )}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Young – Stronger India through Million Health Educated Students.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#003a91]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-[#003a91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/20"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#dceef4] pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Institute of Liver and Biliary Sciences. Supported by NTPC CSR.
        </div>
      </Container>
    </footer>
  );
}