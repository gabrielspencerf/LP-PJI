import {
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  Fingerprint,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import {ClaudeLogo} from '@/components/icons/ClaudeLogo.tsx';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function StepsSection() {
  return (
    <section id="fluxo" className="section-base section-xl bg-bg-soft overflow-hidden" aria-labelledby="heading-fluxo">
      <div className="layout-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="reveal">
            <SectionTitle
              centered={false}
              eyebrow="O PROTOCOLO"
              title={
                <>
                  Engenharia de <br />
                  <span className="text-accent italic decoration-accent/20 underline underline-offset-8">Prompt Jurídico</span>.
                </>
              }
              desc="Não se trata de 'pedir' algo à IA. É um método de extração técnica em 4 camadas que anula o risco de alucinação e garante a higidez do resultado final."
              id="heading-fluxo"
            />

            <div className="mt-16 space-y-4">
              {[
                {
                  n: '01',
                  t: 'Blindagem Cognitiva',
                  d: "Configuração de 'System Prompt' que impõe restrições de submissão à jurisdição brasileira, forçando o modelo a citar apenas fontes com selo oficial de tribunais.",
                  code: 'SYS_LEVEL: RESTRICT_G_PUB_DOCS',
                  icon: ShieldCheck,
                },
                {
                  n: '02',
                  t: 'Sondagem Dialética',
                  d: "Processo de 'Red Teaming' onde o Claude é treinado para atacar sua própria tese, revelando pontos cegos estratégicos antes da protocolização.",
                  code: 'OP_MODE: ADVERSARIAL_AUDIT',
                  icon: MessageSquare,
                },
                {
                  n: '03',
                  t: 'Triangulação de Dados',
                  d: 'Cruzamento automático entre a saída da IA e repositórios de jurisprudência via scraping legal ou APIs, garantindo que o número do processo citado realmente exista.',
                  code: 'VALID_STATE: SYNC_STJ_STF',
                  icon: Database,
                },
                {
                  n: '04',
                  t: 'Auditoria Humana de Saída',
                  d: 'Aplicação do Checklist de 15 pontos de conformidade ética e técnica. A peça só é liberada após validação de cada parâmetro de higidez processual.',
                  code: 'FINAL_GATE: HUMAN_IN_LOOP',
                  icon: Fingerprint,
                },
              ].map((step, i) => (
                <div key={i} className="group relative flex gap-6 p-6 rounded-2xl bg-white/75 border border-brand/[0.06] shadow-sm transition-all hover:bg-white hover:shadow-premium hover:-translate-y-0.5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/5 border border-brand/5 flex items-center justify-center text-accent font-display font-bold text-lg transition-all group-hover:bg-brand group-hover:text-accent">
                    {step.n}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-lg font-display font-semibold text-brand transition-colors leading-tight">{step.t}</h4>
                      <span className="label-nano font-mono font-bold text-accent/50 group-hover:text-accent tracking-tighter transition-colors break-words">
                        [{step.code}]
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed max-w-md opacity-80">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal">
            <div className="steps-dashboard-shell">
              <div className="flex items-center justify-between mb-8 px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="label-micro font-mono text-white/30 tracking-widest">Encryption: Active</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 relative">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="label-micro font-bold text-white/40">Stage 01</span>
                    <Workflow className="w-4 h-4 text-white/30" />
                  </div>
                  <div className="text-white font-display font-semibold text-lg tracking-tight">Delimitação de Cenário</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/10 rounded label-nano font-mono text-white/60">Fatos</span>
                    <span className="px-2 py-1 bg-white/10 rounded label-nano font-mono text-white/60">Provas</span>
                    <span className="px-2 py-1 bg-white/10 rounded label-nano font-mono text-white/60">Tese</span>
                  </div>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-brand">
                    <Zap className="w-4 h-4 fill-brand" />
                  </div>
                </div>

                <div className="bg-accent p-6 rounded-2xl flex flex-col gap-4 steps-processing-glow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ClaudeLogo className="w-24 h-24 -mr-8 -mt-8" />
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="label-micro font-bold text-brand/60">Processing Layer</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    </div>
                    <Cpu className="w-4 h-4 text-brand/40 animate-spin-slow" />
                  </div>
                  <div className="text-brand font-display font-bold text-xl tracking-tight flex items-center gap-3 relative z-10">
                    <ClaudeLogo className="w-6 h-6" />
                    Claude 3.5 Sonnet
                    <div className="px-2 py-1 bg-brand text-accent label-nano rounded font-black">v3.5_Stable</div>
                  </div>
                  <div className="h-1 bg-brand/10 rounded-full overflow-hidden relative z-10">
                    <div className="h-full bg-brand w-2/3 animate-pulse" />
                  </div>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white/50">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <Terminal className="w-5 h-5 text-accent mb-3" />
                    <div className="text-white font-semibold text-sm mb-1">Auditoria</div>
                    <div className="label-micro text-white/40 leading-snug">Checklist IJ v4.0 Ativo</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mb-3" />
                    <div className="text-white font-semibold text-sm mb-1">Protocolo</div>
                    <div className="label-micro text-green-400 opacity-60 leading-snug">Higidez Validada</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between label-nano font-mono text-white/20 tracking-widest leading-none">
                <div>0X882_SECURE_CONNECTION</div>
                <div>UTC: 12:44:02</div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
