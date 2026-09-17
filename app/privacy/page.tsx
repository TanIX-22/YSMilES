import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'OUR IMPACT', href: '/#impact' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'OUR WORK', href: '/#programme' },
  { label: 'CONTACT', href: '/contact' },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar items={navItems} />

      <main className="pt-32">
        <section className="border-b border-neutral-200 bg-[linear-gradient(135deg,_#f7fbff_0%,_#f3f8ff_45%,_#eef8f3_100%)] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0d9488]">Privacy and Legal Notice</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                Your privacy and our work
              </h1>
              <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
                <p>
                  Y-SMiLES respects the privacy, dignity, and rights of the students, families, schools, partners, and communities connected with our work. We collect, use, and publish information only for legitimate programme, communication, documentation, and public-health purposes.
                </p>
                <p>
                  We undertake our activities and use photographs, videos, testimonials, names, and other materials only with the appropriate consent, authorization, or legal basis from the relevant individuals, institutions, or partners.
                </p>

                <div className="rounded-[1.5rem] border border-[#cfe8e6] bg-white p-6 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.2)] sm:p-8">
                  <h2 className="text-2xl font-semibold text-neutral-950">Use of website content</h2>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    All text, photographs, videos, logos, graphics, designs, and other material on this website belong to or are used by Y-SMiLES, ILBS, NTPC, or their respective rights holders. You must not copy, download, reproduce, modify, publish, distribute, republish, or use any website content for commercial or public purposes without prior written permission from the appropriate rights holder.
                  </p>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    Unauthorized use may result in removal requests, suspension of access, and legal action under applicable law. Permission requests can be made through the contact details on our Contact page.
                  </p>
                </div>

                <h2 className="pt-2 text-2xl font-semibold text-neutral-950">Consent and corrections</h2>
                <p>
                  If you believe content has been published incorrectly, or if you have a question about consent, privacy, or the use of your information, please contact the Y-SMiLES project team. We will review the request and take appropriate action in accordance with applicable law and our programme responsibilities.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
