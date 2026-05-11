import {ClosingSiteBlock} from '@/components/layout/ClosingSiteBlock.tsx';
import {Footer} from '@/components/layout/Footer.tsx';
import {AudienceSection} from '@/components/sections/AudienceSection.tsx';
import {DeliverablesSection} from '@/components/sections/DeliverablesSection.tsx';
import {FAQSection} from '@/components/sections/FAQSection.tsx';
import {FinalCTASection} from '@/components/sections/FinalCTASection.tsx';
import {GuaranteeSection} from '@/components/sections/GuaranteeSection.tsx';
import {Hero} from '@/components/sections/Hero.tsx';
import {ManifestoSection} from '@/components/sections/ManifestoSection.tsx';
import {OfferSection} from '@/components/sections/OfferSection.tsx';
import {ProblemSection} from '@/components/sections/ProblemSection.tsx';
import {ProgramSection} from '@/components/sections/ProgramSection.tsx';
import {ProtocolSection} from '@/components/sections/ProtocolSection.tsx';
import {TransformationSection} from '@/components/sections/TransformationSection.tsx';
import {useRevealOnScroll} from '@/hooks/useRevealOnScroll.ts';

export function LandingPage() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-6 focus:py-3 focus:font-bold focus:text-white focus:shadow-2xl"
      >
        Pular para o conteúdo principal
      </a>
      <main id="main-content" className="outline-none" tabIndex={-1}>
        <Hero />
        <ManifestoSection />
        <ProblemSection />
        <TransformationSection />
        <ProtocolSection />
        <DeliverablesSection />
        <ProgramSection />
        <AudienceSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <ClosingSiteBlock>
          <FinalCTASection />
          <Footer />
        </ClosingSiteBlock>
      </main>
    </div>
  );
}
