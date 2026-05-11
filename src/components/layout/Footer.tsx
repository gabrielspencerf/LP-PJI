import {productName} from '@/config/site.ts';

export function Footer() {
  return (
    <footer className="scale-exempt border-t border-white/10 py-8 text-white sm:py-10">
      <div className="layout-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
          <span className="font-display text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">{productName}</span>

          <div className="flex gap-6 sm:gap-10">
            <a href="#" className="label-micro text-white/65 transition-colors hover:text-white">
              Termos
            </a>
            <a href="#" className="label-micro text-white/65 transition-colors hover:text-white">
              Privacidade
            </a>
          </div>

          <p className="label-nano max-w-xl text-left !tracking-[0.18em] text-white/60 md:max-w-md md:text-right">
            Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 md:flex-row">
          <p className="metadata-text !text-white/55 !opacity-100">© 2026 {productName}.</p>
          <p className="metadata-text max-w-sm text-center !tracking-tight !text-white/50 !opacity-100 md:text-right">
            Uso assistido de IA com responsabilidade profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
