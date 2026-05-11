import {ArrowRightLeft} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

const beforeItems = [
  'Cola o caso inteiro no Claude.',
  'Pede jurisprudência direto.',
  'Aceita o primeiro texto.',
  'Revisa só português.',
  'Não rastreia fonte.',
];

const afterItems = [
  'Organiza briefing por etapa.',
  'Anonimiza dados sensíveis.',
  'Usa decisão já encontrada em fonte oficial.',
  'Compara aplicabilidade com contexto.',
  'Revisa fonte, tese e saída final.',
];

export function TransformationSection() {
  return (
    <section className="section-base bg-bg-soft/50 border-y border-border" aria-labelledby="heading-transformacao">
      <div className="layout-container">
        <SectionTitle
          eyebrow="ANTES E DEPOIS"
          title="Do prompt solto ao fluxo validado."
          desc="O curso não ensina apenas a pedir melhor. Ensina a dividir a tarefa jurídica em etapas para o Claude operar com contexto, limite e conferência."
          id="heading-transformacao"
        />

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 reveal">
          <article className="card-premium bg-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-bg-soft mb-4">
              <p className="technical-label !text-brand/70">ANTES</p>
            </div>
            <ul className="space-y-3.5">
              {beforeItems.map((item) => (
                <li key={item} className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand/30 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-premium border-accent/30 bg-accent/[0.03]">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/25 bg-white mb-4">
              <p className="technical-label !text-accent">DEPOIS</p>
            </div>
            <ul className="space-y-3.5">
              {afterItems.map((item) => (
                <li key={item} className="text-sm sm:text-base text-brand leading-relaxed font-medium flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 reveal flex justify-center">
          <a href="#oferta" className="btn-primary inline-flex items-center gap-2">
            QUERO OPERAR COM PROTOCOLO
            <ArrowRightLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
