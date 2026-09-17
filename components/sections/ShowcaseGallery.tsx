'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Lightbox } from '@/components/gallery/Lightbox';
import type { GalleryPhoto } from '@/components/gallery/content';

interface ShowcaseItem extends GalleryPhoto {
  title: string;
  description: string;
}

interface ShowcaseGalleryProps {
  items: ShowcaseItem[];
}

export function ShowcaseGallery({ items }: ShowcaseGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = items.map(({ alt, caption, src }) => ({ src, alt, caption }));

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group h-full overflow-hidden rounded-[1.5rem] border border-[#dceef4] bg-white text-left shadow-[0_18px_35px_rgba(0,58,145,0.06)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,58,145,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003a91]/30"
            aria-label={`Open ${item.title} image full screen`}
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" aria-hidden="true" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#003a91]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
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
