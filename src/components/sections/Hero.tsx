import {motion} from 'motion/react';
import {Building2, GraduationCap, PlayCircle} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {ClaudeLogo} from '@/components/icons/ClaudeLogo.tsx';
import {HeroEcosystemStrip} from '@/components/sections/HeroEcosystemStrip.tsx';

const HERO_FOUNDERS_SRC = '/media/hero-founders-duo.webp';
const HERO_IMG_W = 1202;
const HERO_IMG_H = 888;

function FounderBadge({
  name,
  lines,
  icon: Icon,
  className,
  delay = 0,
}: {
  name: string;
  lines: string[];
  icon: LucideIcon;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, ease: 'easeOut', delay}}
      className={className}
    >
      <div className="rounded-2xl border border-white/20 bg-black/45 p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.07] backdrop-blur-xl sm:p-4">
        <div className="flex items-start gap-2.5">
          <div
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/35 bg-accent/15 text-accent"
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold leading-tight text-white">{name}</p>
            {lines.map((line) => (
              <p key={line} className="mt-1 text-[11px] sm:text-xs leading-snug text-white/60">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <header className="relative flex h-dvh max-h-dvh min-h-0 flex-col overflow-hidden bg-[#050505] pb-[env(safe-area-inset-bottom,0px)] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.38] [background-size:3.5px_3.5px]"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(150, 72, 52, 0.38) 0.55px, transparent 0.6px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.07] via-transparent to-transparent" />
        <div className="absolute top-[8%] left-[-8%] h-[min(52vw,28rem)] w-[min(52vw,28rem)] rounded-full bg-accent/30 blur-[100px] opacity-35" />
        <div className="absolute top-[18%] right-[-12%] h-[min(60vw,32rem)] w-[min(60vw,32rem)] rounded-full bg-orange-500/25 blur-[120px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,rgba(218,119,89,0.12),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_35%,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="layout-container scale-exempt relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center py-5 sm:py-8 lg:min-h-0 lg:py-9 xl:py-10">
        <div className="grid min-h-0 w-full min-w-0 max-w-full auto-rows-min items-center justify-items-center gap-y-7 gap-x-0 sm:gap-y-10 lg:grid-cols-12 lg:items-center lg:justify-items-stretch lg:gap-x-10 lg:gap-y-8 xl:gap-x-12">
          <div className="flex min-h-0 w-full min-w-0 max-w-full flex-col justify-center justify-self-center px-0.5 sm:px-0 lg:col-span-6 lg:max-w-none lg:justify-self-stretch">
            <motion.div
              initial={{opacity: 0, x: -28}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.75, ease: 'easeOut'}}
              className="w-full min-w-0 max-w-full lg:max-w-none"
            >
              <div className="mb-5 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 sm:mb-8 sm:flex-nowrap sm:gap-4">
                <div className="h-[2px] w-8 shrink-0 bg-accent/60 sm:w-12" aria-hidden="true" />
                <span className="min-w-0 max-w-full text-pretty text-[9px] font-semibold uppercase leading-snug tracking-[0.14em] text-accent sm:text-[10px] sm:tracking-[0.2em]">
                  Método prático para advogados que usam IA
                </span>
              </div>

              <h1 className="mb-4 max-w-full text-pretty font-display text-[1.72rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:mb-6 sm:text-[2.35rem] sm:leading-[1.02] md:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.45rem]">
                <span className="block break-words text-white">
                  O Claude / GPT{' '}
                  <span className="text-white/90">não têm OAB.</span>
                </span>
                <span className="mt-1.5 block bg-gradient-to-r from-accent via-[#e8a090] to-accent bg-clip-text text-transparent sm:mt-3">
                  Você tem.
                </span>
              </h1>

              <p className="mb-5 max-w-full text-pretty text-[0.9rem] leading-relaxed text-white/65 sm:mb-8 sm:text-base">
                Use Claude, GPT ou outro grande modelo na advocacia com protocolo de briefing, validação de fonte, proteção de dados e revisão humana — antes de virar peça, parecer ou orientação ao cliente.
              </p>

              <div className="w-full min-w-0 max-w-full overflow-hidden">
                <HeroEcosystemStrip />
              </div>

              <div className="mx-auto flex w-full max-w-full flex-col items-stretch justify-center gap-2.5 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                <a
                  href="#oferta"
                  className="btn-gold-hero group relative mx-auto inline-flex min-h-[2.75rem] w-full max-w-[min(100%,20rem)] shrink-0 items-center justify-center overflow-hidden px-4 transition-all active:scale-[0.98] sm:mx-0 sm:min-h-[3rem] sm:w-auto sm:max-w-sm"
                >
                  <ClaudeLogo className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="px-1 text-center text-[9px] leading-tight sm:text-[11px]">ACESSAR O PROTOCOLO</span>
                  <div className="absolute inset-0 -translate-x-full bg-black/[0.06] transition-transform duration-500 group-hover:translate-x-0" />
                </a>
                <a
                  href="#metodo"
                  className="group mx-auto inline-flex w-full max-w-[min(100%,11.5rem)] shrink-0 items-center justify-center gap-1.5 rounded-md border border-white/16 bg-transparent px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-wide text-white/90 transition-all hover:border-white/28 hover:bg-white/[0.05] hover:text-white sm:mx-0 sm:w-auto sm:max-w-none sm:gap-2 sm:px-3 sm:py-2 sm:text-[9px]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/18 transition-all group-hover:scale-105 group-hover:border-white/35 sm:h-6 sm:w-6">
                    <PlayCircle className="h-3 w-3 sm:h-3.5 sm:h-3.5" aria-hidden="true" />
                  </div>
                  VER MÉTODO
                </a>
              </div>

              <p className="mx-auto mt-5 max-w-full text-pretty px-0.5 text-center text-[7.5px] font-semibold uppercase leading-relaxed tracking-[0.06em] text-accent/44 sm:mt-8 sm:px-0 sm:text-[8.5px] sm:!tracking-[0.04em]">
                Curso gravado · Prompts · Checklists · Fluxos de validação · Sem promessa de resultado jurídico
              </p>
            </motion.div>
          </div>

          <div className="flex min-h-0 w-full min-w-0 max-w-lg flex-col items-center justify-center justify-self-center px-0.5 sm:max-w-xl sm:px-0 lg:col-span-6 lg:col-start-7 lg:max-w-none lg:items-stretch lg:justify-self-stretch lg:pl-1 lg:pr-2 xl:pl-2 xl:pr-3">
            <motion.div
              initial={{opacity: 0, scale: 0.98, y: 20}}
              animate={{opacity: 1, scale: 1, y: 0}}
              transition={{duration: 0.9, ease: 'easeOut', delay: 0.1}}
              className="relative flex w-full min-w-0 max-w-md flex-col items-center justify-center sm:max-w-lg lg:max-w-none"
            >
              <div
                className="pointer-events-none absolute inset-x-[6%] bottom-[22%] top-[22%] rounded-[50%] bg-gradient-to-t from-accent/14 via-accent/6 to-transparent opacity-80 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative flex w-full min-w-0 flex-col items-center justify-center">
                <div
                  className="relative isolate mx-auto w-full max-w-full overflow-hidden rounded-lg px-0.5 sm:px-1 lg:max-w-[min(100%,42rem)]"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, #000 0%, #000 97%, rgba(0,0,0,0.45) 99.2%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to bottom, #000 0%, #000 97%, rgba(0,0,0,0.45) 99.2%, transparent 100%)',
                  }}
                >
                  <img
                    src={HERO_FOUNDERS_SRC}
                    alt="Gabriel Spencer e Vitor Paim, instrutores do Protocolo Claude Jurídico."
                    width={HERO_IMG_W}
                    height={HERO_IMG_H}
                    decoding="async"
                    fetchPriority="high"
                    className={[
                      'relative z-[1] mx-auto block h-auto w-full max-w-full object-contain object-center',
                      'max-h-[min(42dvh,24rem)]',
                      'sm:max-h-[min(40dvh,26rem)]',
                      'md:max-h-[min(38dvh,28rem)]',
                      'lg:max-h-[min(44dvh,32rem)]',
                      'xl:max-h-[min(46dvh,34rem)]',
                      '2xl:max-h-[min(48dvh,36rem)]',
                    ].join(' ')}
                  />
                </div>

                <div className="relative z-[4] -mt-7 grid w-full max-w-md grid-cols-1 justify-items-stretch gap-2.5 px-0.5 sm:-mt-9 sm:max-w-lg sm:grid-cols-2 sm:gap-3 sm:px-0 md:-mt-10 lg:max-w-none lg:-mt-11 lg:grid-cols-2 xl:-mt-12">
                  <FounderBadge
                    name="Gabriel Spencer"
                    lines={['CEO, Creative Lane', 'Estrategista empresarial']}
                    icon={Building2}
                    delay={0.35}
                  />
                  <FounderBadge
                    name="Vitor Paim"
                    lines={['Professor, Asimov Academy', 'Maior escola de Python do Brasil']}
                    icon={GraduationCap}
                    delay={0.45}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
