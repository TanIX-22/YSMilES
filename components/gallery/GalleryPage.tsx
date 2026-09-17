import { GalleryHero } from './GalleryHero';
import { AlbumGrid } from './AlbumGrid';
import { albums } from './content';

export function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <section className="bg-[linear-gradient(180deg,_#f8fbfc_0%,_#f6fcfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700">Featured albums</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Moments of impact in motion
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Explore the school programmes, awareness drives, and community events that bring the Y-SMilES mission to life.
            </p>
          </div>
          <AlbumGrid albums={albums} />
        </div>
      </section>
    </>
  );
}
