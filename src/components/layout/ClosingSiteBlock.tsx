import type {ReactNode} from 'react';

/**
 * Fundo alinhado à hero (dots + glows) para CTA final + footer contínuos.
 */
export function ClosingSiteBlock({children}: {children: ReactNode}) {
  return (
    <div className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
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
      <div className="relative z-10">{children}</div>
    </div>
  );
}
