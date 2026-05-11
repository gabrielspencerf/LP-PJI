import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Check} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const qna = [
    {
      q: 'O curso substitui pesquisa jurídica?',
      a: 'Não. O curso ensina a usar Claude como apoio de análise, organização e redação. A conferência de fonte, tese e aplicação continua sendo responsabilidade do advogado.',
    },
    {
      q: 'O Claude vai buscar jurisprudência sozinho?',
      a: 'Não é esse o fluxo recomendado. O advogado deve buscar a decisão em fonte oficial e usar Claude para resumir, comparar e organizar a análise.',
    },
    {
      q: 'Preciso saber programar?',
      a: 'Não. O treinamento é prático e focado no uso de Claude com prompts, checklists e organização de contexto.',
    },
    {
      q: 'Posso usar em qualquer área do direito?',
      a: 'Sim. O método é estrutural. Os exemplos podem variar, mas briefing, anonimização, validação de fonte e revisão humana se aplicam em diferentes áreas.',
    },
    {
      q: 'Posso inserir dados reais de clientes?',
      a: 'O treinamento ensina critérios para evitar exposição indevida. Dados sensíveis devem ser tratados, anonimizados ou removidos conforme o caso.',
    },
    {
      q: 'O curso promete resultado em processo?',
      a: 'Não. O curso não promete resultado jurídico, processual ou financeiro. Ele ensina um método de uso assistido de IA.',
    },
    {
      q: 'Existe garantia?',
      a: 'Sim. São 7 dias de garantia, conforme as regras da plataforma de pagamento.',
    },
  ];

  return (
    <section id="faq" className="section-base section-tall bg-bg-soft reveal" aria-labelledby="heading-faq">
      <div className="layout-container max-w-4xl">
        <SectionTitle eyebrow="OBJEÇÕES REAIS" title="Perguntas frequentes" id="heading-faq" />

        <div className="space-y-6">
          {qna.map((item, idx) => (
            <div key={idx} className="card-premium card-premium-flush overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-8 sm:px-10 py-6 sm:py-8 flex justify-between items-center text-left group"
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="font-display font-semibold text-lg sm:text-xl text-brand pr-8 transition-colors group-hover:text-accent">{item.q}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-xl border border-brand/10 flex items-center justify-center text-accent transition-all ${open === idx ? 'rotate-45 bg-brand text-white border-brand' : 'bg-bg-soft'}`}
                  aria-hidden="true"
                >
                  <Check className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    className="overflow-hidden bg-bg-soft/50"
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                  >
                    <div className="px-8 sm:px-10 pb-8 sm:pb-10 text-lg text-muted leading-[1.7] font-medium opacity-90">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
