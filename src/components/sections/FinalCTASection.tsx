import {ArrowRight} from 'lucide-react';
import {getCheckoutUrl} from '@/config/site.ts';

export function FinalCTASection() {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section className="section-base section-tall bg-brand text-white border-t border-white/10" aria-labelledby="heading-cta-final">
      <div className="layout-container text-center reveal">
        <h2 id="heading-cta-final" className="font-display text-2xl sm:text-4xl font-semibold leading-tight mb-5">
          Use IA com método.
          <br />
          Não com fé.
        </h2>
        <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
          O Claude pode acelerar sua rotina. Mas a responsabilidade continua sendo sua. O Protocolo Claude Jurídico entrega o fluxo para usar IA com briefing, validação, sigilo e revisão humana.
        </p>
        <a
          href={checkoutUrl}
          rel={checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          target={checkoutUrl.startsWith('http') ? '_blank' : undefined}
          className="btn-gold inline-flex items-center gap-3"
        >
          ACESSAR O PROTOCOLO CLAUDE JURÍDICO
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
