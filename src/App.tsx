import {Footer} from '@/components/layout/Footer.tsx';
import {Navbar} from '@/components/layout/Navbar.tsx';
import {FAQSection} from '@/components/sections/FAQSection.tsx';
import {Hero} from '@/components/sections/Hero.tsx';
import {MethodSection} from '@/components/sections/MethodSection.tsx';
import {OfferSection} from '@/components/sections/OfferSection.tsx';
import {RiskSection} from '@/components/sections/RiskSection.tsx';
import {StepsSection} from '@/components/sections/StepsSection.tsx';
import {TestimonialSection} from '@/components/sections/TestimonialSection.tsx';
import {useRevealOnScroll} from '@/hooks/useRevealOnScroll.ts';

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-2xl"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />

      <main id="main-content" className="outline-none" tabIndex={-1}>
        <Hero />
        <MethodSection />
        <RiskSection />
        <StepsSection />
        <TestimonialSection />
        <FAQSection />
        <OfferSection />
      </main>

      <Footer />
    </div>
  );
}
