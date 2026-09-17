import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { GalleryPhoto } from './content';

interface PhotoCardProps {
  photo: GalleryPhoto;
  onOpen: () => void;
}

export function PhotoCard({ photo, onOpen }: PhotoCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-[1.35rem] border border-neutral-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_-20px_rgba(15,23,42,0.28)]"
      aria-label={`Open ${photo.alt}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={900}
        height={600}
        loading="lazy"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      {photo.caption && (
        <div className="absolute inset-x-0 bottom-0 p-4 text-sm text-white">
          <p className={cn('line-clamp-2 leading-6', 'opacity-95')}>{photo.caption}</p>
        </div>
      )}
    </button>
  );
}
