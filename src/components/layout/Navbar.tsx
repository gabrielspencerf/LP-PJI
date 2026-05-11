import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowRight, Menu, X} from 'lucide-react';
import {productName} from '@/config/site.ts';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {label: 'Método', href: '#metodo'},
    {label: 'Riscos', href: '#riscos'},
    {label: 'Programa', href: '#programa'},
    {label: 'FAQ', href: '#faq'},
  ];

  return (
    <>
      <nav
        className="w-full z-[50] glass-header py-2.5 scale-exempt"
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="layout-container flex justify-between items-center gap-4">
          <a href="#" className="flex items-center gap-3 sm:gap-4 group" aria-label={`${productName} - Ir para o topo`}>
            <span className="font-display font-semibold text-brand text-sm sm:text-base leading-none tracking-tight uppercase truncate">
              {productName}
            </span>
          </a>

          <div className="flex items-center gap-5 lg:gap-8">
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="label-micro font-bold tracking-[0.14em] text-muted hover:text-accent transition-all relative group/nav"
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
              ACESSAR PROTOCOLO
            </a>

            <button
              type="button"
              className="md:hidden w-11 h-11 flex items-center justify-center text-brand focus:outline-none bg-bg-soft rounded-xl transition-all active:scale-95"
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
                  className="text-3xl font-display font-bold text-brand border-b border-border pb-5 flex items-center justify-between hover:text-accent transition-all group"
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
                ACESSAR PROTOCOLO
              </motion.a>
            </div>
            <div className="mt-auto pb-12 flex flex-col items-center gap-4">
              <p className="label-micro font-bold tracking-[0.2em] text-muted">{productName}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
