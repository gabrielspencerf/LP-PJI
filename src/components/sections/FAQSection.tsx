import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Check} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const qna = [
    {
      q: 'O curso substitui pesquisa jurídica?',
      a: 'Não. O treinamento mostra uso assistido do Claude para análise, organização e redação. Pesquisa em fonte oficial, checagem de tese e decisão técnica continuam com o advogado.',
    },
    {
      q: 'O Claude vai buscar jurisprudência sozinho?',
      a: 'Não é o fluxo recomendado. A decisão deve vir de fonte oficial; o Claude entra para resumir, comparar e organizar o material que você trouxer, sempre sob revisão humana.',
    },
    {
      q: 'Preciso saber programar?',
      a: 'Não. O foco é operacional: prompts, checklists, organização de contexto e validação — sem exigência de código.',
    },
    {
      q: 'Posso usar em qualquer área do direito?',
      a: 'Sim. O método é estrutural: briefing, anonimização, validação de fonte e revisão humana valem para diferentes áreas; os exemplos podem variar.',
    },
    {
      q: 'Posso inserir dados reais de clientes?',
      a: 'O treinamento traz critérios para reduzir exposição indevida. Dados sensíveis exigem cuidado de sigilo, base legal e, quando fizer sentido, anonimização ou remoção antes de usar em IA.',
    },
    {
      q: 'O curso promete resultado em processo?',
      a: 'Não. Não há promessa de resultado jurídico, processual ou financeiro — apenas método de uso assistido de IA com responsabilidade profissional.',
    },
    {
      q: 'Como funcionam cancelamento e os 7 dias de garantia?',
      a: 'Prazo, pedido de reembolso e eventual consumo parcial do conteúdo seguem exclusivamente a política da plataforma em que você concluir a compra (checkout), incluindo regras de arrependimento do consumidor quando aplicáveis. Leia o resumo no momento da compra e abra o pedido pelo suporte oficial da plataforma dentro do prazo indicado. Há um resumo dedicado na secção Garantia comercial, logo acima deste FAQ.',
    },
    {
      q: 'Onde acesso o curso depois do pagamento?',
      a: 'O acesso costuma ser liberado na própria plataforma (área do comprador ou e-mail de confirmação). Guarde o comprovante e use apenas links oficiais enviados pela plataforma.',
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
