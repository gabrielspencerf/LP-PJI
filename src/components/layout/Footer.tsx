import {Link} from 'react-router-dom';
import {productName} from '@/config/site.ts';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="scale-exempt border-t border-white/10 py-8 font-sans text-white sm:py-10">
      <div className="layout-container">
        {/* Até lg: marca + links numa linha; texto legal em bloco full-width (evita coluna estreita em tablet). */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-x-10">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:justify-start lg:col-span-4">
            <span className="footer-dark-brand shrink-0">{productName}</span>
            <nav className="flex shrink-0 gap-6 sm:gap-10" aria-label="Links do rodapé">
              <Link to="/termos" className="footer-dark-nav">
                Termos
              </Link>
              <Link to="/privacidade" className="footer-dark-nav">
                Privacidade
              </Link>
            </nav>
          </div>

          <p className="footer-dark-disclaimer max-w-none text-pretty lg:col-span-8 lg:text-right">
            Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="footer-dark-meta">
            © {year} {productName}.
          </p>
          <p className="footer-dark-meta max-w-sm text-pretty text-center md:text-right">
            Uso assistido de IA com responsabilidade profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
