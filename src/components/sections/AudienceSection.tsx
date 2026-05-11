import {CircleCheckBig, CircleX} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

const fitItems = [
  'Advogados que querem usar IA sem perder controle técnico.',
  'Escritórios que precisam padronizar prompts e revisão.',
  'Profissionais que querem produtividade com responsabilidade.',
  'Quem já testou IA e recebeu respostas genéricas.',
  'Quem entende que revisão humana continua obrigatória.',
];

const noFitItems = [
  'Quem quer peça pronta sem revisar.',
  'Quem quer substituir pesquisa jurídica por IA.',
  'Quem busca promessa de resultado processual.',
  'Quem quer inserir dados sensíveis sem critério.',
  'Quem não pretende conferir fonte oficial.',
];

export function AudienceSection() {
  return (
    <section className="section-base bg-white border-y border-border" aria-labelledby="heading-publico">
      <div className="layout-container">
        <SectionTitle eyebrow="QUALIFICAÇÃO" title="Para quem é e para quem não é." id="heading-publico" />

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 reveal">
          <article className="card-premium">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand mb-4">Para quem faz sentido</h3>
            <ul className="space-y-3">
              {fitItems.map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm sm:text-base text-brand leading-relaxed">
                  <CircleCheckBig className="w-4 h-4 mt-1 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-premium">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand mb-4">Para quem não faz sentido</h3>
            <ul className="space-y-3">
              {noFitItems.map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm sm:text-base text-muted leading-relaxed">
                  <CircleX className="w-4 h-4 mt-1 text-cta flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
