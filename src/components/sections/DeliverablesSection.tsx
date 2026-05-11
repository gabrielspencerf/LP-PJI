import {BookCopy, ClipboardCheck, FileText, ListChecks, MessageSquareMore, Scale, ShieldCheck, Workflow} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

const deliverables = [
  {icon: BookCopy, title: 'Biblioteca de prompts', text: 'Prompts para briefing, resumo, comparação, aplicabilidade e redação assistida.'},
  {icon: ListChecks, title: 'Checklists de validação', text: 'Listas para revisar fonte, tese, sigilo e coerência antes do uso.'},
  {icon: ShieldCheck, title: 'Guia de anonimização', text: 'Passo a passo para tratar dados sensíveis antes de usar IA.'},
  {icon: Workflow, title: 'Templates de briefing', text: 'Modelos para transformar pedido genérico em instruções claras.'},
  {icon: ClipboardCheck, title: 'Fluxo jurisprudencial', text: 'Roteiro para analisar decisões trazidas de base oficial.'},
  {icon: Scale, title: 'Política interna de IA', text: 'Modelo base para governança mínima no escritório.'},
  {icon: FileText, title: 'Cláusula de uso assistido', text: 'Texto base para comunicação com cliente quando aplicável.'},
  {icon: MessageSquareMore, title: 'Modelos de comunicação', text: 'Estruturas de e-mail, follow-up e resposta com linguagem profissional.'},
];

export function DeliverablesSection() {
  return (
    <section className="section-base section-tall bg-white" aria-labelledby="heading-entregaveis">
      <div className="layout-container">
        <SectionTitle
          eyebrow="O QUE VOCÊ RECEBE"
          title={
            <>
              Você não recebe teoria solta.
              <br />
              Recebe ferramentas de operação.
            </>
          }
          id="heading-entregaveis"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal">
          {deliverables.map((item) => (
            <article key={item.title} className="card-premium">
              <div className="w-10 h-10 rounded-xl bg-bg-soft border border-brand/10 text-accent flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-brand mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
