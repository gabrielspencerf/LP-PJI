import {Link} from 'react-router-dom';
import {productName} from '@/config/site.ts';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="scale-exempt border-t border-white/10 py-8 font-sans text-white sm:py-10">
      <div className="layout-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
          <span className="footer-dark-brand shrink-0">{productName}</span>

          <nav className="flex shrink-0 gap-6 sm:gap-10" aria-label="Links do rodapé">
            <Link to="/termos" className="footer-dark-nav">
              Termos
            </Link>
            <Link to="/privacidade" className="footer-dark-nav">
              Privacidade
            </Link>
          </nav>

          <p className="footer-dark-disclaimer max-w-xl text-pretty md:max-w-md md:text-right">
            Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 md:flex-row">
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
