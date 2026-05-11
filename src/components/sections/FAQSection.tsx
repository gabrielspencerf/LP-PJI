import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Check} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const qna = [
    {
      q: 'Quais áreas do direito o protocolo atende?',
      a: 'O método é agnóstico e estrutural. Ele foca nos princípios de fundamentação jurídica, pesquisa jurisprudencial avançada e revisão dialética, sendo aplicável com excelência do Direito Civil e Empresarial ao Penal Estratégico, especialmente em peças destinadas a Tribunais Superiores (STJ e STF).',
    },
    {
      q: 'O protocolo é atualizado para o Claude 3.5 Sonnet?',
      a: "Sim. O método é nativamente otimizado para as capacidades de 'computer use' e raciocínio lógico avançado da família Claude 3.5. Exploramos a janela de contexto de 200k tokens para garantir que o modelo processe volumes maciços de provas sem perder a coerência argumentativa.",
    },
    {
      q: 'O acesso à biblioteca de prompts é vitalício?',
      a: 'Exatamente. Ao garantir sua vaga, você recebe acesso vitalício à nossa Central de Inteligência, que inclui a biblioteca completa de engenharia de instruções e atualizações garantidas para todos os novos modelos lançados em 2026, mantendo sua operação sempre no estado da arte.',
    },
    {
      q: 'Como funciona a garantia de higidez jurídica?',
      a: 'Oferecemos 7 dias de garantia incondicional via Hotmart. Além disso, o protocolo é desenhado para que a IA nunca tenha a palavra final; o sistema impõe camadas de auditoria humana que garantem a segurança técnica, ética e a higidez absoluta de cada petição gerada.',
    },
  ];

  return (
    <section id="faq" className="section-base section-tall bg-white reveal" aria-labelledby="heading-faq">
      <div className="layout-container max-w-4xl">
        <SectionTitle eyebrow="SUPORTE TÉCNICO" title="Perguntas Frequentes" id="heading-faq" />

        <div className="space-y-6">
          {qna.map((item, idx) => (
            <div key={idx} className="card-premium card-premium-flush overflow-hidden">
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
