import {Award} from 'lucide-react';

export function TestimonialSection() {
  return (
    <section className="section-base section-tall bg-brand text-white overflow-hidden relative" aria-label="Depoimento">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-accent/10 to-transparent" />
      </div>

      <div className="layout-container text-center relative z-10">
        <Award className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-10 sm:mb-12 animate-float" aria-hidden="true" />
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold mb-10 sm:mb-14 max-w-4xl mx-auto leading-[1.2] tracking-tight italic">
          &quot;A diferença entre o advogado{' '}
          <span className="text-accent underline decoration-accent/20 underline-offset-8">insustentável</span> e o que domina a IA está na
          capacidade de auditar o que é gerado.&quot;
        </h2>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="accent-rule sm:w-16" aria-hidden="true" />
          <span className="label-micro font-bold tracking-[0.3em] text-accent">
            Protocolo Jurisprudência Inteligente MASTER
          </span>
          <div className="accent-rule sm:w-16" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
