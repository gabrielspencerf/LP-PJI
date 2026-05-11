import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {productName} from '@/config/site.ts';

type LegalLayoutProps = {
  children: ReactNode;
};

export function LegalLayout({children}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-soft text-brand">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/80 backdrop-blur-md">
        <div className="layout-container flex flex-wrap items-center justify-between gap-4 py-3.5 sm:py-4">
          <Link
            to="/"
            className="font-display text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:text-accent sm:text-base"
          >
            {productName}
          </Link>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6" aria-label="Documentos legais">
            <Link to="/termos" className="label-micro text-muted transition-colors hover:text-accent">
              Termos
            </Link>
            <Link to="/privacidade" className="label-micro text-muted transition-colors hover:text-accent">
              Privacidade
            </Link>
            <Link to="/" className="label-micro font-semibold text-accent transition-colors hover:text-accent-dark">
              ← Página inicial
            </Link>
          </nav>
        </div>
      </header>

      <div className="layout-container max-w-3xl py-10 sm:py-14">{children}</div>

      <footer className="border-t border-border py-8 font-sans">
        <div className="layout-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="footer-light-meta shrink-0">
            © {new Date().getFullYear()} {productName}
          </p>
          <nav className="flex flex-wrap gap-4 sm:gap-6" aria-label="Links do rodapé">
            <Link to="/termos" className="footer-light-nav">
              Termos de uso
            </Link>
            <Link to="/privacidade" className="footer-light-nav">
              Privacidade
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
