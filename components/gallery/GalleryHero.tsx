import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import launchImage from '@/images/gallery/launch.jpg';

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.16),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#f6f9ff_45%,_#eef7f4_100%)]">
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#0f2847]">
              Y-SMILES Gallery
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Moments of impact, captured with purpose.
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
              Explore the stories, school programmes, and community events that are bringing health education to life across India.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-24px_rgba(15,23,42,0.24)] backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src={launchImage}
                alt="Y-SMILES launch event with ILBS and NTPC representatives"
                width={900}
                height={600}
                className="h-[360px] w-full object-cover sm:h-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
