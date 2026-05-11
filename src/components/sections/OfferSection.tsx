import {BookOpenCheck, CheckCircle2, ClipboardList, Lock, ShieldCheck, Zap} from 'lucide-react';
import {getCheckoutUrl, productName} from '@/config/site.ts';

export function OfferSection() {
  const checkoutUrl = getCheckoutUrl();
  const includedItems = [
    'Curso gravado',
    'Biblioteca de prompts',
    'Checklists de validação',
    'Modelos prontos para adaptar',
    'Política interna de IA',
    'Garantia de 7 dias',
  ];

  return (
    <section id="oferta" className="section-base section-xl relative bg-bg-soft" aria-labelledby="heading-oferta">
      <div className="layout-container">
        <div className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <div className="label-micro mb-8 inline-flex items-center gap-3 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-accent sm:mb-10">
              <BookOpenCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              Acesso ao treinamento
            </div>

            <h2
              id="heading-oferta"
              className="mb-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-brand sm:mb-8 sm:text-4xl lg:text-5xl"
            >
              Acesse o
              <br />
              <span className="text-accent italic">{productName}</span>
            </h2>

            <p className="book-text mb-10 max-w-md sm:mb-12">
              Curso gravado, prompts, checklists e modelos para usar Claude na advocacia com método, validação e revisão humana.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {[
                {icon: ClipboardList, t: 'Briefing estruturado', d: 'Uso assistido por etapa.'},
                {icon: ShieldCheck, t: 'Redução de risco', d: 'Camadas de validação e revisão.'},
                {icon: BookOpenCheck, t: 'Prompt library', d: 'Modelos para adaptar ao escritório.'},
                {icon: CheckCircle2, t: 'Garantia comercial', d: 'Sete dias conforme plataforma.'},
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">{item.t}</p>
                    <p className="label-micro text-muted">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-0 justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-accent/15 blur-[80px] opacity-40 sm:opacity-50" aria-hidden="true" />

            <div className="offer-card-glow group/card relative w-full max-w-lg ring-1 ring-inset ring-white/[0.06]">
              <div className="pointer-events-none absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover/card:opacity-100" />

              <div className="mb-10 text-center sm:mb-12">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="mt-8 self-start text-2xl font-bold text-white/30">R$</span>
                  <div className="flex flex-col items-center">
                    <span className="mb-[-8px] text-3xl font-bold tracking-wide text-white/10 line-through">497,90</span>
                    <div className="flex items-baseline">
                      <span className="price-display">197</span>
                      <div className="ml-2 flex translate-y-[-10px] flex-col items-start sm:translate-y-[-20px]">
                        <span className="font-display text-3xl font-bold text-accent sm:text-4xl">,90</span>
                        <span className="label-micro font-bold tracking-widest text-white/40">Único</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="label-micro mb-4 tracking-[0.3em] text-accent">Pagamento único</p>
              </div>

              <div className="mb-10 space-y-5 sm:mb-12">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="label-micro flex items-center justify-between border-b border-white/[0.06] pb-4 tracking-[0.12em] text-white/45 sm:text-xs"
                  >
                    <span>{item}</span>
                    <span className="text-white/90">Incluso</span>
                  </div>
                ))}
              </div>

              <a
                href={checkoutUrl}
                rel={checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                target={checkoutUrl.startsWith('http') ? '_blank' : undefined}
                className="btn-gold-offer group flex items-center justify-center gap-3"
              >
                <Zap className="h-5 w-5 shrink-0 transition-transform group-hover:scale-125" aria-hidden="true" />
                <span className="relative z-10 text-sm sm:text-base">GARANTIR MEU ACESSO</span>
                <div className="absolute inset-0 translate-y-full bg-black/[0.07] transition-transform duration-500 group-hover:translate-y-0" />
              </a>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex items-center gap-1 opacity-40 grayscale transition-all hover:grayscale-0">
                  <Lock className="h-3 w-3 text-white" aria-hidden="true" />
                  <span className="label-nano tracking-widest text-white/80">SSL Encrypted</span>
                </div>
                <div className="h-4 w-px bg-white/15" />
                <div className="flex items-center gap-1 opacity-40">
                  <ShieldCheck className="h-3 w-3 text-white" aria-hidden="true" />
                  <span className="label-nano tracking-widest text-white/80">Hotmart Secure</span>
                </div>
              </div>

              <p className="label-micro mt-6 text-center text-white/50">
                Pagamento seguro · Acesso pela plataforma · Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
