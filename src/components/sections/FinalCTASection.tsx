import {ArrowRight} from 'lucide-react';
import {getCheckoutUrl} from '@/config/site.ts';

export function FinalCTASection() {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section className="section-base section-tall text-white" aria-labelledby="heading-cta-final">
      <div className="layout-container text-center reveal">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <div className="h-px w-10 bg-accent/50 sm:w-12" aria-hidden="true" />
          <span className="label-micro text-accent/90">Último passo</span>
          <div className="h-px w-10 bg-accent/50 sm:w-12" aria-hidden="true" />
        </div>
        <h2
          id="heading-cta-final"
          className="mb-5 font-display text-2xl font-semibold leading-[1.08] tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl"
        >
          <span className="block text-white">Use IA com método.</span>
          <span className="mt-2 block bg-gradient-to-r from-accent via-[#e8a090] to-accent bg-clip-text text-transparent sm:mt-3">
            Não com fé.
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/65 sm:mb-10 sm:text-lg">
          O Claude pode acelerar sua rotina. Mas a responsabilidade continua sendo sua. O Protocolo Claude Jurídico entrega o fluxo para usar IA com briefing, validação, sigilo e revisão humana.
        </p>
        <a
          href={checkoutUrl}
          rel={checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          target={checkoutUrl.startsWith('http') ? '_blank' : undefined}
          className="btn-gold-hero group relative inline-flex min-h-[3rem] items-center justify-center gap-2.5 overflow-hidden px-8 py-3.5 text-[10px] shadow-lg shadow-accent/25 sm:min-h-[3.25rem] sm:px-10 sm:py-4 sm:text-[11px]"
        >
          <span className="relative z-10 text-center leading-tight">ACESSAR O PROTOCOLO CLAUDE JURÍDICO</span>
          <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          <div className="absolute inset-0 -translate-x-full bg-black/[0.06] transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
}
