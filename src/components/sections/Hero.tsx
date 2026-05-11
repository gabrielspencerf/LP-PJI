import {motion} from 'motion/react';
import {
  BookOpen,
  Fingerprint,
  Gavel,
  Lock,
  MessageSquare,
  PlayCircle,
  ShieldCheck,
} from 'lucide-react';
import {ClaudeLogo} from '@/components/icons/ClaudeLogo.tsx';

export function Hero() {
  return (
    <header className="section-hero relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: 'easeOut'}}
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="accent-rule" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <span className="label-micro text-accent">MASTER Edition • 2026</span>
                  <div className="h-4 w-[1px] bg-accent/20" />
                  <div className="flex items-center gap-1.5">
                    <ClaudeLogo className="w-3.5 h-3.5 text-brand" />
                    <span className="label-micro font-bold text-brand/40 tracking-widest">Anthropic Optimized</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-semibold text-brand leading-[1.1] sm:leading-[1.05] tracking-tight mb-10">
                A Nova ERA da <br />
                <span className="text-accent italic decoration-accent/20 underline underline-offset-[16px]">Advocacia</span>.
              </h1>

              <p className="book-text max-w-xl mb-12 sm:mb-16">
                O protocolo definitivo para transformar o Claude 3.5 em seu braço operacional tático, garantindo{' '}
                <span className="text-brand font-bold underline decoration-accent/30 underline-offset-8">higidez técnica</span> e segurança absoluta.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a href="#oferta" className="btn-gold-hero group flex items-center justify-center gap-4 relative overflow-hidden transition-all active:scale-95">
                  <ClaudeLogo className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span>INICIAR PROTOCOLO AGORA</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
                <a href="#metodo" className="flex items-center justify-center gap-4 px-8 py-4 text-brand font-bold text-sm tracking-widest uppercase hover:text-accent transition-all group">
                  <div className="w-12 h-12 rounded-full border-2 border-brand/10 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all">
                    <PlayCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  O MÉTODO
                </a>
              </div>

              <div className="mt-16 sm:mt-20 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-4 border-white bg-bg-soft flex items-center justify-center label-micro font-bold text-brand shadow-lg"
                    >
                      {['R', 'G', 'V', 'A'][i - 1]}
                    </div>
                  ))}
                </div>
                <p className="label-micro text-muted tracking-widest leading-loose">
                  <span className="text-brand">+850 Advogados</span> já operam <br /> com o selo de auditoria ativo.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div
              initial={{opacity: 0, scale: 0.9, x: 50}}
              animate={{opacity: 1, scale: 1, x: 0}}
              transition={{duration: 1.2, ease: 'easeOut', delay: 0.2}}
              className="card-dark card-dark-flush hero-panel-shadow border-white/5 group overflow-hidden"
            >
              <div className="bg-white/[0.03] p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full bg-accent animate-pulse accent-glow-strong"
                    aria-hidden="true"
                  />
                  <span className="label-micro text-white/50 tracking-[0.3em]">
                    Protocol: Active_Flow_Monitor
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="label-micro items-center gap-2 text-white/30 tracking-widest hidden sm:flex">
                    SECURE_LAYER_X12
                  </div>
                  <ShieldCheck className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
              </div>

              <div className="p-10 sm:p-14 space-y-10">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border shadow-2xl bg-accent/10 border-accent/20 text-accent group-hover/item:scale-110">
                    <ClaudeLogo className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-display font-bold tracking-tight text-white">Claude Integration</div>
                    <div className="metadata-text mt-1 italic">Active Intelligence Layer</div>
                  </div>
                </div>

                {[
                  {icon: Gavel, t: 'Qualificação Fática', s: 'Concluído', c: 'accent', time: '09:42 AM', progress: 100},
                  {icon: MessageSquare, t: 'Sondagem Dialética', s: 'Validando', c: 'accent', time: '10:15 AM', progress: 65},
                  {icon: BookOpen, t: 'Triangulação de Fontes', s: 'Aguardando', c: 'white/20', time: '--:--', progress: 0},
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group/item">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border shadow-2xl ${item.c === 'accent' ? 'bg-accent/10 border-accent/30 text-accent group-hover/item:scale-110 shadow-accent/10' : 'bg-white/5 border-white/5 text-white/20'}`}
                        >
                          <item.icon className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <div>
                          <div
                            className={`text-lg sm:text-xl font-display font-bold tracking-tight ${item.c === 'accent' ? 'text-white' : 'text-white/20'}`}
                          >
                            {item.t}
                          </div>
                          <div className="label-micro text-white/30 mt-1">{item.time}</div>
                        </div>
                      </div>
                      <div
                        className={`label-micro tracking-[0.3em] px-4 py-2 rounded-xl transition-all ${item.c === 'accent' ? 'bg-accent text-brand shadow-lg shadow-accent/20' : 'bg-white/5 text-white/20'}`}
                      >
                        {item.s}
                      </div>
                    </div>
                    {item.progress > 0 && (
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full ml-20">
                        <motion.div
                          initial={{width: 0}}
                          animate={{width: `${item.progress}%`}}
                          className="h-full bg-accent accent-glow-soft"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white/[0.02] p-8 border-t border-white/5 flex items-center justify-center gap-8">
                <div className="label-micro font-bold text-white/30 tracking-[0.3em] flex items-center gap-4">
                  <Lock className="w-4 h-4 text-accent" aria-hidden="true" />
                  AES-256 Protocol
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                <div className="label-micro font-bold text-white/30 tracking-[0.3em] flex items-center gap-4">
                  <Fingerprint className="w-4 h-4 text-accent" aria-hidden="true" />
                  AI_AUTH_ONLY
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
