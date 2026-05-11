import {AlertTriangle, Compass, EyeOff, Microscope} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function RiskSection() {
  return (
    <section id="riscos" className="section-base section-tall bg-white border-y border-border" aria-labelledby="heading-riscos">
      <div className="layout-container">
        <SectionTitle
          eyebrow="SEGURANÇA JURÍDICA"
          title={
            <>
              O Risco da <br />
              <span className="text-cta">Imprudência</span> Digital.
            </>
          }
          desc="O uso de IA sem um protocolo de auditoria não é apenas um erro tático, é uma vulnerabilidade ética que pode custar sua carreira profissional."
          id="heading-riscos"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 reveal">
          {[
            {
              icon: AlertTriangle,
              title: 'Precedente Fantasma',
              desc: 'O risco de citar julgados fictícios resultantes de alucinações da IA, o que destrói sua credibilidade técnica perante o tribunal em segundos.',
              impact: 'Sanções processuais imediatas',
              severity: 'CRÍTICO',
            },
            {
              icon: Compass,
              title: 'Deriva Estratégica',
              desc: 'Aplicar teses genéricas que ignoram as particularidades do caso concreto, resultando em negativas de seguimento por falta de dialeticidade.',
              impact: 'Preclusão Consumativa',
              severity: 'ALTO',
            },
            {
              icon: Microscope,
              title: 'Erosão Autoral',
              desc: 'A perda da voz e do estilo do advogado pela submissão total à linguagem do modelo, fragilizando a persuasão e a identidade da peça.',
              impact: 'Fracasso Argumentativo',
              severity: 'MÉDIO',
            },
            {
              icon: EyeOff,
              title: 'Vazamento de Dados',
              desc: 'Input de fatos sensíveis sem anonimização prévia, expondo segredos de justiça e informações confidenciais em servidores de terceiros.',
              impact: 'Processo Ético Disciplinar',
              severity: 'CRÍTICO',
            },
          ].map((risk, idx) => (
            <div key={idx} className="card-premium card-premium-lg group border-brand/5 shadow-premium">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cta/5 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-110 blur-3xl" />

              <div className="flex justify-between items-start mb-12 relative">
                <div className="w-16 h-16 bg-bg-soft rounded-2xl flex items-center justify-center text-cta border border-cta/10 shadow-sm transition-all group-hover:bg-cta group-hover:text-white">
                  <risk.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`technical-label px-3 py-1.5 rounded-full ${risk.severity === 'CRÍTICO' ? 'bg-cta text-white shadow-lg shadow-cta/20 !tracking-widest' : 'bg-brand/10 text-brand'}`}
                  >
                    {risk.severity}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand mb-4 leading-snug group-hover:text-accent transition-colors">
                {risk.title}
              </h3>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-10 opacity-90 font-medium">{risk.desc}</p>

              <div className="pt-8 border-t border-brand/[0.05] relative">
                <span className="metadata-text block mb-3">Impacto Processual</span>
                <p className="text-base font-semibold text-cta italic">&quot;{risk.impact}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
