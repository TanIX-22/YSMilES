'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { GalleryPhoto } from './content';

interface LightboxProps {
  isOpen: boolean;
  photos: GalleryPhoto[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ isOpen, photos, initialIndex, onClose }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % photos.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, photos.length]);

  const currentPhoto = useMemo(() => photos[activeIndex], [photos, activeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!currentPhoto) {
    return null;
  }

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % photos.length);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 px-3 py-4 transition-all duration-200 sm:px-6 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative flex h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-2xl transition-all duration-200 sm:h-[calc(100dvh-3rem)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[1.75rem] ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchStartX === null) return;
          const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX;
          if (delta > 60) {
            setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
          } else if (delta < -60) {
            setActiveIndex((prev) => (prev + 1) % photos.length);
          }
          setTouchStartX(null);
        }}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-primary-700">Photo preview</p>
            <p className="text-sm text-neutral-600">{activeIndex + 1} of {photos.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:bg-neutral-100"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden bg-neutral-100 p-3 sm:p-5">
          <div className="flex h-full min-h-0 items-center justify-center">
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              width={1400}
              height={900}
              className="max-h-[52dvh] max-w-full rounded-[1.2rem] object-contain sm:max-h-full"
              priority
            />
          </div>
        </div>

        <div className="max-h-[30dvh] overflow-y-auto border-t border-neutral-200 bg-white px-4 py-3 sm:max-h-none sm:overflow-visible sm:px-6 sm:py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-lg font-semibold text-neutral-900">{currentPhoto.alt}</p>
              {currentPhoto.caption && (
                <p className="mt-1 text-sm leading-6 text-neutral-600">{currentPhoto.caption}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrev}
                className="rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:bg-neutral-100"
                aria-label="Previous photo"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:bg-neutral-100"
                aria-label="Next photo"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
