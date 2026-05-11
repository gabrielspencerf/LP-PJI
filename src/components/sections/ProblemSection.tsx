import {AlertTriangle, EyeOff, FileWarning, Target} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

const risks = [
  {
    icon: FileWarning,
    title: 'Precedente fantasma',
    risk: 'Usar decisão inexistente ou não conferida pode comprometer a credibilidade da peça.',
    control: 'Conferência em fonte oficial antes do uso.',
  },
  {
    icon: Target,
    title: 'Fonte fora de contexto',
    risk: 'Uma tese real pode ser inútil se o caso concreto for diferente.',
    control: 'Revisar tribunal, data, tese e encaixe fático.',
  },
  {
    icon: EyeOff,
    title: 'Dados sensíveis no prompt',
    risk: 'Informações do cliente não devem ser inseridas sem critério de proteção.',
    control: 'Anonimização e regra de não inserção.',
  },
  {
    icon: AlertTriangle,
    title: 'Peça genérica',
    risk: 'A IA tende a responder com segurança mesmo sem contexto suficiente.',
    control: 'Briefing estruturado e revisão humana obrigatória.',
  },
];

export function ProblemSection() {
  return (
    <section id="riscos" className="section-base section-tall bg-white border-y border-border" aria-labelledby="heading-problema">
      <div className="layout-container">
        <SectionTitle
          eyebrow="RISCO OPERACIONAL"
          title={
            <>
              O risco não é a IA errar.
              <br />
              É você protocolar o erro.
            </>
          }
          desc="A resposta pode parecer técnica e bem escrita. Mas texto bonito não valida fonte, não protege sigilo e não transfere responsabilidade profissional."
          id="heading-problema"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 reveal">
          {risks.map((item) => (
            <article key={item.title} className="card-premium card-premium-lg">
              <div className="w-11 h-11 rounded-xl bg-bg-soft border border-brand/10 text-cta flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brand mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{item.risk}</p>
              <p className="text-sm text-brand leading-relaxed">
                <span className="font-semibold">Controle:</span> {item.control}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
