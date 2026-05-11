import type {ReactNode} from 'react';

const BR = '/media/brands';

function LogoPill({children}: {children: ReactNode}) {
  return (
    <div className="flex h-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05] px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:px-2.5">
      {children}
    </div>
  );
}

export function HeroEcosystemStrip() {
  return (
    <div className="hero-eco-marquee relative mb-5 sm:mb-6">
      <span className="sr-only">
        Logotipos Anthropic, Claude e OpenAI; marcas registadas dos respetivos titulares, exibidos apenas como referência visual ao ecossistema de IA.
      </span>
      <div className="relative overflow-hidden py-0.5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="hero-eco-track flex items-center">
          <div className="flex shrink-0 items-center gap-3.5 pr-3.5 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6">
            <LogoPill>
              <img
                src={`${BR}/anthropic-wordmark.svg`}
                alt="Anthropic"
                width={88}
                height={18}
                className="h-3.5 w-auto max-w-[4.75rem] object-contain object-left brightness-0 invert opacity-[0.9] sm:h-4 sm:max-w-[5.25rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
            <LogoPill>
              <img
                src={`${BR}/claude-ai-wordmark.svg`}
                alt="Claude"
                width={100}
                height={22}
                className="h-3.5 w-auto max-w-[5rem] object-contain object-left brightness-0 invert opacity-[0.9] sm:h-4 sm:max-w-[5.5rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
            <LogoPill>
              <img
                src={`${BR}/openai-lockup.svg`}
                alt="OpenAI"
                width={80}
                height={22}
                className="h-3.5 w-auto max-w-[4.25rem] object-contain object-left brightness-0 invert opacity-[0.88] sm:h-4 sm:max-w-[4.75rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
          </div>
          <div
            className="flex shrink-0 items-center gap-3.5 pr-3.5 motion-reduce:hidden sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
            aria-hidden="true"
          >
            <LogoPill>
              <img
                src={`${BR}/anthropic-wordmark.svg`}
                alt=""
                width={88}
                height={18}
                className="h-3.5 w-auto max-w-[4.75rem] object-contain object-left brightness-0 invert opacity-[0.9] sm:h-4 sm:max-w-[5.25rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
            <LogoPill>
              <img
                src={`${BR}/claude-ai-wordmark.svg`}
                alt=""
                width={100}
                height={22}
                className="h-3.5 w-auto max-w-[5rem] object-contain object-left brightness-0 invert opacity-[0.9] sm:h-4 sm:max-w-[5.5rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
            <LogoPill>
              <img
                src={`${BR}/openai-lockup.svg`}
                alt=""
                width={80}
                height={22}
                className="h-3.5 w-auto max-w-[4.25rem] object-contain object-left brightness-0 invert opacity-[0.88] sm:h-4 sm:max-w-[4.75rem]"
                loading="lazy"
                decoding="async"
              />
            </LogoPill>
          </div>
        </div>
      </div>
    </div>
  );
}
