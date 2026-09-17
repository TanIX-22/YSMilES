import { Mail, Phone } from 'lucide-react';
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

export default function ContactPage() {
  return (
    <>
      <Navbar items={navItems} />

      <main className="pt-32">
        <section className="border-b border-neutral-200 bg-[linear-gradient(135deg,_#f7fbff_0%,_#f3f8ff_45%,_#eef8f3_100%)] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0d9488]">Contact Us</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                Connect with the Y-SMiLES team
              </h1>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                For programme enquiries and coordination, please contact the Y-SMiLES project team.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-5">
              {[
                {
                  name: 'Naveen Parashar',
                  role: 'Project Co-ordinator',
                  phone: '7018045621',
                  email: 'pc.ysmiles.ilbs@gmail.com',
                },
                {
                  name: 'Dr. Pooja',
                  role: 'Project Officer 1',
                  phone: '8278734526',
                  email: 'poojajp.ilbs@gmail.com',
                },
                {
                  name: 'Vaishali Naugain',
                  role: 'Project Officer 2',
                  phone: '7303904778',
                  email: 'po2.ysmiles.ilbs@gmail.com',
                },
              ].map((contact) => (
                <div
                  key={contact.email}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.24)] sm:p-7"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-neutral-950">{contact.name}</h2>
                      <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-[#0d9488]">{contact.role}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href={`tel:+91${contact.phone}`}
                        className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 text-sm text-neutral-700 transition hover:border-[#0d9488] hover:bg-[#f0fdfa]"
                      >
                        <Phone className="h-5 w-5 text-[#0d9488]" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 text-sm text-neutral-700 transition hover:border-[#0d9488] hover:bg-[#f0fdfa]"
                      >
                        <Mail className="h-5 w-5 text-[#0d9488]" />
                        <span className="break-all">{contact.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}