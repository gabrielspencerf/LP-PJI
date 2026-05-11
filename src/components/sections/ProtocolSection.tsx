import {CheckCircle2, Circle, FileSearch, Lock, PenLine, ScanSearch} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

const stages = [
  {
    number: '01',
    title: 'Delimitar',
    desc: 'Separar fatos, pedido, tese, documentos e objetivo da tarefa.',
    icon: Circle,
  },
  {
    number: '02',
    title: 'Anonimizar',
    desc: 'Tratar dados sensíveis antes de inserir contexto no Claude.',
    icon: Lock,
  },
  {
    number: '03',
    title: 'Analisar',
    desc: 'Usar prompts estruturados para resumo, comparação e riscos.',
    icon: ScanSearch,
  },
  {
    number: '04',
    title: 'Validar',
    desc: 'Conferir fonte oficial, tribunal, data, tese e contexto.',
    icon: FileSearch,
  },
  {
    number: '05',
    title: 'Redigir',
    desc: 'Gerar versão assistida, rastreável e revisada pelo advogado.',
    icon: PenLine,
  },
];

export function ProtocolSection() {
  return (
    <section id="fluxo" className="section-base section-xl bg-bg-soft overflow-hidden" aria-labelledby="heading-protocolo">
      <div className="layout-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="reveal">
            <SectionTitle
              centered={false}
              eyebrow="MECANISMO DO CURSO"
              title="Protocolo Jurisprudência Inteligente"
              desc="Um fluxo em cinco etapas para usar Claude como apoio de análise, redação e validação, sem transformar IA em fonte cega."
              id="heading-protocolo"
            />

            <div className="space-y-3">
              {stages.map((stage) => (
                <article key={stage.number} className="card-premium flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand text-accent flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {stage.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <stage.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                      <h3 className="font-display font-semibold text-brand text-lg">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{stage.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="steps-dashboard-shell">
              <p className="technical-label text-white/70 mb-5">FLUXO DE USO ASSISTIDO</p>
              <div className="space-y-3">
                {[
                  {label: 'Briefing estruturado', status: 'Pronto'},
                  {label: 'Dados anonimizados', status: 'Revisar'},
                  {label: 'Fonte oficial', status: 'Conferir'},
                  {label: 'Saída assistida', status: 'Revisão humana'},
                ].map((item, index) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center label-nano">
                        {index + 1}
                      </div>
                      <span className="text-sm text-white">{item.label}</span>
                    </div>
                    <span className="label-micro text-white/60">{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="label-micro">Responsabilidade final: advogado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
