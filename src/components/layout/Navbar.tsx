import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowRight, Menu, Scale, Sparkles, X} from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {label: 'Método', href: '#metodo'},
    {label: 'Riscos', href: '#riscos'},
    {label: 'Fluxo', href: '#fluxo'},
    {label: 'FAQ', href: '#faq'},
  ];

  return (
    <>
      <nav
        className="w-full z-[50] glass-header py-3 shadow-xl shadow-brand/[0.02]"
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="layout-container flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 sm:gap-4 group" aria-label="Protocolo IJ - Ir para o topo">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-xl flex items-center justify-center text-accent transition-all group-hover:rotate-6 group-hover:scale-105 shadow-lg shadow-brand/10">
                <Scale className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-brand text-xl sm:text-2xl leading-none tracking-tighter uppercase">
                  Protocolo IJ
                </span>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 rounded-full border border-accent/20">
                  <Sparkles className="w-2.5 h-2.5 text-accent" />
                  <span className="label-ultra font-bold text-accent">Claude 3.5</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-[1px] bg-accent" />
                <span className="label-nano font-bold text-accent">Edição 2026</span>
              </div>
            </div>
          </a>

          <div className="flex items-center gap-8 lg:gap-12">
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="label-micro font-bold tracking-[0.15em] text-muted hover:text-accent transition-all relative group/nav"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover/nav:w-full" />
                </a>
              ))}
            </div>
            <a
              href="#oferta"
              className="hidden sm:inline-flex btn-primary-nav"
            >
              INICIAR PROTOCOLO
            </a>

            <button
              type="button"
              className="md:hidden w-12 h-12 flex items-center justify-center text-brand focus:outline-none bg-bg-soft rounded-xl transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cta" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{opacity: 0, x: '100%'}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: '100%'}}
            transition={{type: 'spring', damping: 25, stiffness: 200}}
            className="fixed inset-0 z-[80] bg-white md:hidden flex flex-col pt-24 px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
          >
            <div className="flex flex-col gap-8 mt-12">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{opacity: 0, x: 20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: idx * 0.1}}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold text-brand border-b border-border pb-6 flex items-center justify-between hover:text-accent transition-all group"
                >
                  {item.label}
                  <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </motion.a>
              ))}
              <motion.a
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                href="#oferta"
                onClick={() => setIsMenuOpen(false)}
                className="btn-gold-drawer"
              >
                GARANTIR ACESSO AGORA
              </motion.a>
            </div>
            <div className="mt-auto pb-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-bg-soft rounded-full flex items-center justify-center text-muted">
                <Scale className="w-6 h-6" />
              </div>
              <p className="label-micro font-bold tracking-[0.3em] text-muted">Protocolo IJ • 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
