import {EyeOff, MonitorCheck, Terminal, Workflow} from 'lucide-react';
import {ClaudeLogo} from '@/components/icons/ClaudeLogo.tsx';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function MethodSection() {
  return (
    <section id="metodo" className="section-base section-xl bg-bg-soft" aria-labelledby="heading-metodo">
      <div className="layout-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <SectionTitle
              centered={false}
              eyebrow="MÉTODO VS FERRAMENTA"
              title={
                <>
                  O Direito não tolera <br />
                  <span className="text-accent italic">o amanhã sem prova</span>.
                </>
              }
              id="heading-metodo"
            />
            <p className="text-xl sm:text-2xl text-muted italic mb-10 leading-relaxed font-sans opacity-90 border-l-4 border-accent pl-8">
              "O Claude é um estagiário de elite que tem transtorno de personalidade. Se você não souber como ele opera, ele vai te
              vender uma mentira como se fosse a verdade absoluta."
            </p>
            <div className="flex items-center gap-4 text-brand font-bold text-xs tracking-widest uppercase bg-white/50 w-fit px-6 py-3 rounded-full border border-brand/5 shadow-sm">
              <ClaudeLogo className="w-5 h-5 text-accent" />
              Selo de Auditoria Cognitiva Ativo
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
            {[
              {title: 'Lógica Sistêmica', icon: Terminal, color: 'bg-white', desc: 'Estruturação de prompts complexos baseados em ritos judiciais.'},
              {title: 'Escrita Tática', icon: Workflow, color: 'bg-white', desc: 'Roteirização de teses com apoio de IA regenerativa de elite.'},
              {title: 'Filtro de Sigilo', icon: EyeOff, color: 'bg-white', desc: 'Anonimização de dados sensíveis em camada pré-processamento.'},
              {
                title: 'Selo de Auditoria',
                icon: MonitorCheck,
                color: 'bg-accent/[0.08]',
                desc: 'Protocolo de verificação humana obrigatória em 3 níveis.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`card-premium h-auto min-h-[180px] p-8 sm:p-10 flex flex-col justify-between items-start text-left border-brand/5 shadow-premium group transition-all hover:-translate-y-2 ${c.color}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${c.color === 'bg-white' ? 'bg-bg-soft text-accent' : 'bg-white/10 text-white'}`}
                >
                  <c.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4
                    className={`font-display font-semibold text-lg sm:text-xl mb-2 ${c.color.includes('text-white') ? 'text-white' : 'text-brand'}`}
                  >
                    {c.title}
                  </h4>
                  <p className="metadata-text !text-brand/40 leading-relaxed font-semibold">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
