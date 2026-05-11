import {ShieldCheck} from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="section-base bg-bg-soft border-t border-border/60" aria-labelledby="heading-garantia">
      <div className="layout-container max-w-4xl reveal">
        <article className="card-premium text-center bg-white">
          <div className="w-11 h-11 rounded-xl bg-bg-soft border border-border text-accent flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" aria-hidden="true" />
          </div>
          <p className="technical-label mb-2">GARANTIA COMERCIAL</p>
          <h2 id="heading-garantia" className="font-display text-2xl sm:text-3xl font-semibold text-brand mb-4">
            Teste por 7 dias
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto mb-3">
            Você pode acessar o conteúdo e avaliar se o método faz sentido para sua rotina profissional.
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            Se não fizer sentido para o seu momento, solicite reembolso dentro do prazo da plataforma de pagamento.
          </p>
        </article>
      </div>
    </section>
  );
}
