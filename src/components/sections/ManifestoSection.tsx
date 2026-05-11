import {CircleCheck, FileSearch, Shield, TriangleAlert} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

export function ManifestoSection() {
  const principles = [
    {icon: FileSearch, text: 'IA não é fonte.'},
    {icon: TriangleAlert, text: 'Prompt não é prova.'},
    {icon: Shield, text: 'Texto bonito não é validação.'},
    {icon: CircleCheck, text: 'Revisão humana não é opcional.'},
  ];

  return (
    <section id="metodo" className="section-base bg-bg-soft" aria-labelledby="heading-manifesto">
      <div className="layout-container">
        <SectionTitle
          centered={false}
          eyebrow="MÉTODO ANTES DA FERRAMENTA"
          title="IA sem protocolo é só texto convincente."
          desc="O Claude pode acelerar leitura, organização, comparação e redação. Mas ele não valida fonte sozinho, não assume responsabilidade profissional e não decide estratégia jurídica."
          id="heading-manifesto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal">
          {principles.map((item, index) => (
            <article key={index} className="card-premium bg-white hover:border-accent/25 hover:shadow-md min-h-[120px] flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-bg-soft border border-brand/10 text-accent flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-base font-medium text-brand leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
