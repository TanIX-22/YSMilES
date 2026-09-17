import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GalleryPage as GalleryContent } from '@/components/gallery/GalleryPage';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'OUR IMPACT', href: '/#impact' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'OUR WORK', href: '/#programme' },
  { label: 'CONTACT', href: '/contact' },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar items={navItems} />

      <main className="pt-32">
        <GalleryContent />
      </main>

      <Footer />
    </>
  );
}
