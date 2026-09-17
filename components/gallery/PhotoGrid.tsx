'use client';

import { useState } from 'react';
import { PhotoCard } from './PhotoCard';
import { Lightbox } from './Lightbox';
import type { GalleryPhoto } from './content';

interface PhotoGridProps {
  photos: GalleryPhoto[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!photos.length) {
    return null;
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo, index) => (
          <PhotoCard
            key={`${photo.src}-${index}`}
            photo={photo}
            onOpen={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <Lightbox
        isOpen={selectedIndex !== null}
        photos={photos}
        initialIndex={selectedIndex ?? 0}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}
