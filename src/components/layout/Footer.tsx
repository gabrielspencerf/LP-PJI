import {Scale} from 'lucide-react';
import {ClaudeLogo} from '@/components/icons/ClaudeLogo.tsx';

export function Footer() {
  return (
    <footer className="py-12 sm:py-20 bg-white border-t border-border">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-accent" aria-hidden="true">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-display font-semibold text-brand uppercase tracking-widest text-sm">Protocolo IJ</span>
          </div>

          <div className="flex gap-6 sm:gap-10">
            <a href="#" className="label-micro text-muted hover:text-brand transition-colors">
              Termos
            </a>
            <a href="#" className="label-micro text-muted hover:text-brand transition-colors">
              Privacidade
            </a>
          </div>

          <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <ClaudeLogo className="w-5 h-5 text-brand" />
            <span className="label-nano font-bold text-brand tracking-[0.2em]">Powered by Anthropic Claude AI</span>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="metadata-text">© 2026 Protocolo Jurisprudência Inteligente. Master Edition.</p>
          <p className="metadata-text max-w-sm text-center md:text-right !tracking-tight opacity-40">
            Auditoria Ética & Técnica via Claude LLM
          </p>
        </div>
      </div>
    </footer>
  );
}
