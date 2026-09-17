import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AlbumHeader } from '@/components/gallery/AlbumHeader';
import { PhotoGrid } from '@/components/gallery/PhotoGrid';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { albums, getAlbumBySlug } from '@/components/gallery/content';

interface AlbumPageProps {
  params: Promise<{ album: string }>;
}

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'OUR IMPACT', href: '/#impact' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'OUR WORK', href: '/#programme' },
  { label: 'CONTACT', href: '/contact' },
];

export function generateStaticParams() {
  return albums.map((album) => ({ album: album.slug }));
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { album } = await params;
  const currentAlbum = getAlbumBySlug(album);

  if (!currentAlbum) {
    notFound();
  }

  return (
    <>
      <Navbar items={navItems} />

      <main className="pt-32">
        <AlbumHeader album={currentAlbum} />

        <Section className="bg-white">
          <SectionHeading
            title="Photo collection"
            subtitle="Tap any image to expand it, browse through the album, and experience the full story in a polished lightbox."
            align="center"
          />
          <PhotoGrid photos={currentAlbum.gallery} />
        </Section>
      </main>

      <Footer />
    </>
  );
}
