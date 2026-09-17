import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, CalendarDays, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import type { GalleryAlbum } from './content';

interface AlbumCardProps {
  album: GalleryAlbum;
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Card
      variant="elevated"
      className="group overflow-hidden border border-neutral-200/80 bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-24px_rgba(15,23,42,0.25)]"
    >
      <div className="relative overflow-hidden">
        <Image
          src={album.coverImage}
          alt={album.title}
          width={900}
          height={600}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-neutral-950/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-sm backdrop-blur">
          {album.highlight}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-neutral-950">{album.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{album.description}</p>
          </div>
        </div>

        <div className="mt-5 space-y-2 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary-600" />
            <span>{album.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary-600" />
            <span>{album.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-primary-600" />
            <span>{album.photoCount} photos</span>
          </div>
        </div>

        <Link
          href={`/gallery/${album.slug}`}
          className={cn(
            'mt-6 inline-flex items-center gap-2 rounded-full border border-primary-200 px-4 py-2 text-sm font-semibold text-primary-700 transition',
            'hover:bg-primary-50 hover:text-primary-800'
          )}
        >
          View Album
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
