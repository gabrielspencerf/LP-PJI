import {Activity, Award, Gavel, Library, Lock, ShieldCheck, Zap} from 'lucide-react';
import {getCheckoutUrl} from '@/config/site.ts';

export function OfferSection() {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section id="oferta" className="section-base section-xl bg-bg-soft relative" aria-labelledby="heading-oferta">
      <div className="layout-container">
        <div className="offer-shell">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full text-accent label-micro mb-10">
                <Award className="w-4 h-4" />
                MASTER Edition Access
              </div>

              <h2
                id="heading-oferta"
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold mb-8 leading-[1.1] tracking-tighter"
              >
                Domine a <br />
                <span className="text-accent italic decoration-white/20 underline underline-offset-[16px]">Nova ERA</span> da <br />
                Advocacia.
              </h2>

              <p className="book-text max-w-md !text-white/90 mb-12">
                O Protocolo IJ não é apenas um guia. É o seu novo sistema operacional jurídico, blindado contra o maior risco do mercado:{' '}
                <span className="text-accent font-bold">a imprudência tecnológica.</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  {icon: ShieldCheck, t: 'Auditoria 360', d: 'Zero risco de alucinação.'},
                  {icon: Activity, t: 'Fluxo Dinâmico', d: 'Ganho real de escala.'},
                  {icon: Library, t: 'Prompt Library', d: 'Instruções auditadas.'},
                  {icon: Gavel, t: 'Tese Dialética', d: 'Argumentação blindada.'},
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wider">{item.t}</p>
                      <p className="label-micro text-white/40">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                        className="w-10 h-10 rounded-full border-2 border-brand bg-accent/20 flex items-center justify-center label-micro"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="label-micro font-medium text-white/60 tracking-widest">
                  <span className="text-accent font-semibold">850+</span> advogados operando o protocolo
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-[80px] opacity-10 -rotate-12" />

              <div className="offer-card-glow group/card">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-8">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="label-micro text-accent">Vagas Limitadas • 2026</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white/30 self-start mt-8">R$</span>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl text-white/10 line-through font-bold mb-[-8px] tracking-wide">497,90</span>
                      <div className="flex items-baseline">
                        <span className="price-display">197</span>
                        <div className="flex flex-col items-start ml-2 translate-y-[-10px] sm:translate-y-[-20px]">
                          <span className="text-3xl sm:text-4xl font-display font-bold text-accent">,90</span>
                          <span className="label-micro font-bold text-white/40 tracking-widest">Único</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="label-micro text-accent tracking-[0.3em] mb-4">Acesso Vitalício + Atualizações</p>
                </div>

                <div className="space-y-5 mb-12">
                  {[
                    {l: 'Tipo de Acesso', v: 'Vitalício'},
                    {l: 'Biblioteca Prompts', v: 'Premium'},
                    {l: 'Suporte Técnico', v: 'VIP'},
                    {l: 'Certificado', v: 'Incluso'},
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center label-micro sm:text-xs tracking-[0.15em] text-white/40 border-b border-white/[0.03] pb-4"
                    >
                      <span>{row.l}</span>
                      <span className={row.v === 'Incluso' || row.v === 'Vitalício' ? 'text-white' : 'text-accent'}>{row.v}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={checkoutUrl}
                  rel={checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={checkoutUrl.startsWith('http') ? '_blank' : undefined}
                  className="btn-gold-offer group flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 transition-transform group-hover:scale-125" />
                  <span className="relative z-10 text-sm sm:text-base">GARANTIR MEU ACESSO</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1 opacity-40 grayscale group hover:grayscale-0 transition-all">
                    <Lock className="w-3 h-3" />
                    <span className="label-nano tracking-widest">SSL Encrypted</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/10" />
                  <div className="flex items-center gap-1 opacity-40">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="label-nano tracking-widest">Hotmart Secure</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 animate-float hidden sm:flex">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="label-nano text-brand tracking-widest">Inscrição Validada</p>
                  <p className="label-micro text-brand">Vagas Disponíveis: 04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
