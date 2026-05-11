import {ShieldCheck} from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="section-base bg-bg-soft border-t border-border/60"
      aria-labelledby="heading-garantia"
    >
      <div className="layout-container max-w-4xl reveal">
        <article className="card-premium text-center bg-white">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-soft text-accent">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="technical-label mb-2">GARANTIA COMERCIAL</p>
          <h2 id="heading-garantia" className="mb-4 font-display text-2xl font-semibold text-brand sm:text-3xl">
            7 dias para avaliar com tranquilidade
          </h2>
          <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Em ambiente típico de marketplace, costuma existir prazo de arrependimento para compra à distância — em geral até <strong className="font-semibold text-brand/90">7 dias corridos</strong>, conforme a legislação aplicável e o contrato exibido no checkout.
          </p>
          <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Use esse período para acessar o conteúdo e ver se o método combina com a sua rotina. Se não for o caso, solicite cancelamento ou reembolso <strong className="font-semibold text-brand/90">pelo canal oficial da plataforma</strong>, dentro do prazo e das condições vigentes (incluindo eventuais regras sobre uso parcial do material).
          </p>
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted sm:text-sm">
            O processamento é feito pela plataforma de pagamento, não pelo site desta landing. Guarde o comprovante e siga as instruções do provedor do checkout.
          </p>
        </article>
      </div>
    </section>
  );
}
