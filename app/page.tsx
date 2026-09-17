// app/page.tsx  (or pages/index.tsx)
import Image from 'next/image';
import ilbsLogo from '@/logos/ILBS_logo.png';
import nationwideReachImage from '@/images/gallery/Map.jpeg';
import riskScaleImage from '@/images/gallery/Risk Scale.png';
import peerEducatorImage from '@/images/gallery/Peer to peer.png';
import schoolVisitsImage from '@/images/gallery/home-banner1.jpg';
import directorImage from '@/images/leadership/Dr_Sarin.jpg';
import csrOutreachImage from '@/images/gallery/ILBS & NTPC CSR Outreach.png';
import rewariImage from '@/images/leadership/Dr_Rewari.jpeg';
import kanicaImage from '@/images/leadership/Dr_Kanica.jpg';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { PartnerLogos } from '@/components/sections/PartnerLogos';
import { ShowcaseGallery } from '@/components/sections/ShowcaseGallery';
import { LeadershipGallery } from '@/components/sections/LeadershipGallery';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { StatsCard } from '@/components/ui/StatsCard';
import { ImpactCard } from '@/components/ui/ImpactCard';
import { RiskZoneCard } from '@/components/ui/RiskZoneCard';
import { Timeline } from '@/components/ui/Timeline';
import { Testimonial } from '@/components/ui/Testimonial';
import {
  Users,
  School,
  MapPin,
  Target,
  BookOpen,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Building2,
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'OUR IMPACT', href: '#impact' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'OUR WORK', href: '#programme' },
  { label: 'CONTACT', href: '/contact' },
];

const partners = [
  { name: 'ILBS', logoUrl: ilbsLogo, href: 'https://www.ilbs.in' },
  { name: 'NTPC', logoUrl: '/logos/NTPC_logo.png', href: 'https://www.ntpc.co.in' },
  { name: 'Y-SMILES', logoUrl: '/logos/Ysmiles_logo.jpg', href: '/' },
];

export default function HomePage() {
  return (
    <>
      <Navbar items={navItems} />

      <main className="pt-32">
        {/* 1. Hero */}
        <HeroBanner
          title="Building a Healthier Generation, One Student at a Time"
          subtitle="Y-SMilES is a nationwide public health education initiative by the Institute of Liver and Biliary Sciences, supported by NTPC CSR, aiming to reach one lakh students with essential health knowledge and life skills."
        />

        {/* 2. About Y-SMilES */}
        <Section id="about-ysmiles" className="bg-white">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/logos/Ysmiles_logo.jpg"
                alt="Y-SMiLES logo"
                width={720}
                height={720}
                className="h-auto w-full max-w-[420px] object-contain md:max-w-[300px] lg:max-w-[500px]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0d9488]">
                Young - Stronger India
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0f2847] sm:text-4xl">
                Health education that grows with every student
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Y-SMiLES is a school-based public health education programme designed to help children understand their bodies, build healthier habits, and make informed choices early in life.
                </p>
                <p>
                  Through age-appropriate learning, teacher engagement, screening, and community support, the programme brings practical knowledge about liver health, nutrition, hygiene, physical activity, and preventive care into everyday school life.
                </p>
                <p>
                  Led by ILBS and supported by NTPC CSR, Y-SMiLES is building a stronger generation by making reliable health education accessible across communities throughout India.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Impact Dashboard */}
        <Section background="subtle" id="impact">
          <SectionHeading
            title="Impact at a Glance"
            subtitle="Real progress toward a healthier, stronger India."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              value="47,338+"
              label="Students Reached"
              description="Across participating schools"
              icon={<Users className="h-5 w-5" />}
            />
            <StatsCard
              value="80+"
              label="Schools Enrolled"
              description="Government & private"
              icon={<School className="h-5 w-5" />}
            />
            <StatsCard
              value="11+"
              label="States Covered"
              description="Across India"
              icon={<MapPin className="h-5 w-5" />}
            />
            <StatsCard
              value="1 Lakh"
              label="Target by 2027"
              description="Health-educated students"
              icon={<Target className="h-5 w-5" />}
            />
          </div>
        </Section>

        {/* 3. Trusted By */}
        <PartnerLogos
          title="An Initiative Of"
          partners={partners}
          size="large"
          className="border-y border-neutral-100 bg-white"
        />

        <Section background="subtle" id="gallery-showcase">
          <SectionHeading
            title="Moments of impact, captured with purpose."
            subtitle="School visits, workshops, and outreach moments that bring health education to life across India."
            align="center"
          />
          <ShowcaseGallery
            items={[
              {
                title: 'School Visits & Awareness Webinars',
                description: 'Students and teachers engage with health experts through structured learning sessions.',
                src: schoolVisitsImage.src,
                alt: 'School visits and awareness webinars',
              },
              {
                title: 'Green, Yellow & Red Risk Screening',
                description: 'Practical screening and health discussions help identify the right support path for each student.',
                src: riskScaleImage.src,
                alt: 'Green, yellow, and red risk screening scale',
              },
              {
                title: 'Peer Educator Workshops',
                description: 'Interactive classroom activities build confidence, understanding, and healthy habits.',
                src: peerEducatorImage.src,
                alt: 'Peer educator workshop',
              },
              {
                title: 'ILBS & NTPC CSR Outreach',
                description: 'Partnership-driven events connect clinical expertise with community action.',
                src: csrOutreachImage.src,
                alt: 'ILBS and NTPC CSR outreach',
              },
            ]}
          />
        </Section>

        {/* 4. About */}
        <Section id="about">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                title="About Y-SMilES"
                subtitle="Young – Stronger India through a 1 Lakh Health Educated Students"
              />
              <div className="space-y-5 text-lg text-neutral-600">
                <p>
                  Y-SMilES is a flagship public health education programme led by the Institute of Liver and Biliary Sciences (ILBS), New Delhi, and supported by NTPC Limited under its Corporate Social Responsibility mandate.
                </p>
                <p>
                  The initiative equips school students with scientific, age-appropriate knowledge on liver health, lifestyle diseases, nutrition, hygiene, and preventive care—empowering the next generation to make informed health decisions.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ImpactCard
                title="Evidence-Based"
                metric="Curriculum"
                description="Developed by leading hepatologists and public health experts at ILBS."
                icon={<BookOpen className="h-5 w-5" />}
              />
              <ImpactCard
                title="School-Centric"
                metric="Delivery"
                description="Seamless integration into existing school systems with teacher training."
                icon={<School className="h-5 w-5" />}
              />
              <ImpactCard
                title="Preventive Focus"
                metric="Health"
                description="Emphasis on early awareness to reduce future disease burden."
                icon={<HeartPulse className="h-5 w-5" />}
              />
              <ImpactCard
                title="Scalable Model"
                metric="Nationwide"
                description="Designed for rapid, high-quality expansion across India."
                icon={<MapPin className="h-5 w-5" />}
              />
            </div>
          </div>
        </Section>

        {/* 5. Why It Matters */}
        <Section background="subtle" id="why-it-matters">
          <SectionHeading
            title="Why It Matters"
            subtitle="India faces a rising burden of lifestyle and liver-related diseases. Early education is one of the most powerful preventive tools we have."
            align="center"
          />
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <CardTitle>Rising Disease Burden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Non-communicable diseases and liver disorders are increasing among younger populations, driven by lifestyle and limited awareness.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle>Power of Early Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Health literacy developed in school years creates lifelong habits and reduces future healthcare costs for families and the nation.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle>National Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Aligns with India’s commitment to preventive healthcare, school health programmes, and Sustainable Development Goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 6. Programme Workflow */}
        <Section id="programme">
          <SectionHeading
            title={
              <span>
                How{' '}
                <span aria-label="Y-SMiLES">
                  <span className="text-[#FF5700]">Y</span>
                  <span className="text-[#121212]">-</span>
                  <span className="text-[#FFC107]">S</span>
                  <span className="text-[#0055C4]">M</span>
                  <span className="text-[#00A896]">i</span>
                  <span className="text-[#4CAF50]">l</span>
                  <span className="text-[#00A6FF]">E</span>
                  <span className="text-[#E91E63]">S</span>
                </span>{' '}
                Works
              </span>
            }
            subtitle="A clear, structured pathway from school enrolment to measurable student impact."
            align="center"
          />
          <div className="mx-auto max-w-4xl">
            <Timeline
              items={[
                {
                  title: 'School Registration',
                  description:
                    'Principals express interest and complete a simple onboarding process with regional support.',
                  date: 'Step 1',
                },
                {
                  title: 'Teacher Training',
                  description:
                    'Educators receive structured training and classroom-ready modules tailored to age groups.',
                  date: 'Step 2',
                },
                {
                  title: 'Classroom Delivery & Screening',
                  description:
                    'Age-appropriate sessions on liver health, nutrition, hygiene, and lifestyle are conducted alongside early screening assessments.',
                  date: 'Step 3',
                },
                {
                  title: 'Biochemical blood test and fibroscan',
                  description:
                    'Advanced confirmatory tests are used to detect liver health risk early and guide intervention with greater precision.',
                  date: 'Step 4',
                },
              ]}
            />
          </div>
        </Section>

        {/* 7. Risk Classification */}
        <Section background="subtle" id="risk">
          <SectionHeading
            title="Understanding Risk Zones"
            subtitle="Y-SMilES helps schools and communities recognise and respond to different levels of health risk through education."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-3">
            <RiskZoneCard
              title="Low Risk"
              level="low"
              description="Students with healthy habits and good baseline awareness."
              actions={[
                'Reinforce positive behaviours',
                'Continue regular health education',
              ]}
            />
            <RiskZoneCard
              title="Moderate Risk"
              level="moderate"
              description="Emerging lifestyle concerns or limited health knowledge."
              actions={[
                'Targeted classroom modules',
                'Parent engagement sessions',
              ]}
            />
            <RiskZoneCard
              title="High Risk"
              level="high"
              description="Significant gaps in awareness or early signs of concern."
              actions={[
                'Intensive education support',
                'Referral pathways if needed',
              ]}
            />
          </div>
        </Section>

        {/* 8. Objectives */}
        <Section id="objectives">
          <SectionHeading
            title="Programme Objectives"
            subtitle="Clear goals that guide every activity and partnership."
            align="center"
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Health Literacy',
                text: 'Equip one lakh students with accurate, age-appropriate knowledge on liver health and preventive care.',
              },
              {
                title: 'Teacher Capacity',
                text: 'Train educators to confidently deliver and sustain health education within the school system.',
              },
              {
                title: 'Behaviour Change',
                text: 'Foster lifelong healthy habits related to nutrition, physical activity, and hygiene.',
              },
              {
                title: 'System Strengthening',
                text: 'Integrate preventive health education into the regular school framework at scale.',
              },
              {
                title: 'Evidence Generation',
                text: 'Build a robust monitoring system to measure knowledge gains and programme effectiveness.',
              },
              {
                title: 'Partnership Ecosystem',
                text: 'Create a collaborative network of schools, government, academia, and CSR partners.',
              },
            ].map((obj) => (
              <Card key={obj.title} variant="outlined">
                <CardHeader>
                  <CardTitle className="text-lg">{obj.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{obj.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* 9. ILBS Leadership */}
        <Section background="subtle" id="leadership">
          <SectionHeading
            title="Led by ILBS"
            subtitle="The Institute of Liver and Biliary Sciences brings unmatched clinical and public-health expertise to this national initiative."
            align="center"
          />
          <LeadershipGallery
            leaders={[
              {
                name: 'Director Dr. S. K. Sarin',
                role: 'Director, ILBS',
                image: directorImage,
                achievement: 'Provides clinical and institutional leadership for ILBS and its preventive health education initiatives.',
              },
              {
                name: 'Dr. B. B. Rewari',
                role: 'Head Of Department (Epidemiology)',
                image: rewariImage,
                achievement: 'Leads epidemiology expertise that supports evidence-based screening, monitoring, and population health action.',
              },
              {
                name: 'Dr. Kanica Kaushal',
                role: 'Principal Investigator (Epidemiology)',
                image: kanicaImage,
                achievement: 'Supports programme research and implementation, helping translate health evidence into practical school outreach.',
              },
            ]}
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <Testimonial
              quote="Y-SMilES represents our deep commitment to moving beyond treatment into prevention. By reaching children early, we can change the trajectory of liver and lifestyle diseases for an entire generation."
              author="Leadership, Institute of Liver and Biliary Sciences"
              role="ILBS"
              organization="New Delhi"
              logoUrl={ilbsLogo}
            />
          </div>
        </Section>

        {/* 10. Nationwide Impact */}
        <Section id="nationwide">
          <SectionHeading
            title="Nationwide Reach"
            subtitle="From metropolitan schools to remote districts, Y-SMilES is building a uniform standard of health education."
            align="center"
          />
          <div className="mb-10 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-sm">
            <Image
              src={nationwideReachImage}
              alt="Y-SMilES nationwide reach, schools, children, states, and phase two activities"
              className="h-auto max-h-[620px] w-full rounded-[1.5rem] object-contain"
              sizes="(max-width: 1280px) 100vw, 1200px"
              loading="lazy"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <ImpactCard
              title="Geographic Coverage"
              metric="20 States & UTs"
              description="Active implementation with a clear roadmap for pan-India expansion."
              icon={<MapPin className="h-5 w-5" />}
            />
            <ImpactCard
              title="School Diversity"
              metric="Government + Private"
              description="Inclusive model serving students across socio-economic backgrounds."
              icon={<Building2 className="h-5 w-5" />}
            />
            <ImpactCard
              title="Long-term Vision"
              metric="1 Lakh Students"
              description="Ambitious yet achievable target anchored in rigorous monitoring."
              icon={<Target className="h-5 w-5" />}
            />
          </div>
        </Section>

        {/* 11. Partners */}
        <Section background="subtle" id="partners">
          <SectionHeading
            title="Our Partners"
            subtitle="Y-SMilES is made possible through the commitment of institutions that share a vision for a healthier India."
            align="center"
          />
            <PartnerLogos title="" partners={partners} size="large" />
        </Section>

      </main>

      <Footer
        logo={
          <Image
            src={ilbsLogo}
            alt="Institute of Liver and Biliary Sciences"
            width={220}
            height={86}
            className="h-14 w-auto object-contain"
          />
        }
      />
    </>
  );
}