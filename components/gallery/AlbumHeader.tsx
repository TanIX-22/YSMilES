import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from './Breadcrumb';
import type { GalleryAlbum } from './content';

interface AlbumHeaderProps {
  album: GalleryAlbum;
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(135deg,_#f7fbff_0%,_#f3f8ff_45%,_#eef8f3_100%)]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800">
          <ArrowLeft className="h-4 w-4" />
          Back to gallery
        </Link>
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumb items={[{ label: album.title }]} />
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              {album.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              {album.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-700">
              <span className="rounded-full border border-primary-200 bg-white/80 px-3 py-1.5">{album.location}</span>
              <span className="rounded-full border border-primary-200 bg-white/80 px-3 py-1.5">{album.date}</span>
              <span className="rounded-full border border-primary-200 bg-white/80 px-3 py-1.5">{album.photoCount} photos</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.24)] backdrop-blur">
            <Image
              src={album.coverImage}
              alt={album.title}
              width={900}
              height={600}
              className="h-[320px] w-full rounded-[1.25rem] object-cover sm:h-[380px]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
