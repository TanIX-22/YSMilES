'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Lightbox } from '@/components/gallery/Lightbox';
import type { GalleryPhoto } from '@/components/gallery/content';

interface Leader {
  name: string;
  role: string;
  image: StaticImageData;
  achievement: string;
}

interface LeadershipGalleryProps {
  leaders: Leader[];
}

export function LeadershipGallery({ leaders }: LeadershipGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos: GalleryPhoto[] = leaders.map((leader) => ({
    src: leader.image.src,
    alt: leader.name,
    caption: `${leader.role}. ${leader.achievement}`,
  }));

  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader, index) => (
          <button
            key={leader.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group flex h-full flex-col rounded-[1.5rem] border border-neutral-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            aria-label={`View ${leader.name} photo and achievements`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] bg-[#f8fafc] md:aspect-[4/3] lg:aspect-square">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-contain transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex-1">
              <h3 className="text-lg font-semibold text-neutral-900">{leader.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary-700">{leader.role}</p>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          isOpen
          photos={photos}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
