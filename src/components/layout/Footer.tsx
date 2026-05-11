import {productName} from '@/config/site.ts';

export function Footer() {
  return (
    <footer className="py-8 sm:py-10 bg-brand text-white border-t border-white/10 scale-exempt">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <span className="font-display font-semibold text-white uppercase tracking-wide text-xs sm:text-sm">{productName}</span>

          <div className="flex gap-6 sm:gap-10">
            <a href="#" className="label-micro text-white/60 hover:text-white transition-colors">
              Termos
            </a>
            <a href="#" className="label-micro text-white/60 hover:text-white transition-colors">
              Privacidade
            </a>
          </div>

          <p className="label-nano text-white/55 max-w-xl md:max-w-md text-left md:text-right !tracking-[0.18em]">
            Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="metadata-text !text-white/60 !opacity-100">© 2026 {productName}.</p>
          <p className="metadata-text max-w-sm text-center md:text-right !tracking-tight !text-white/45 !opacity-100">
            Uso assistido de IA com responsabilidade profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
