import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {CheckCircle2, ChevronDown, PlayCircle} from 'lucide-react';
import {SectionTitle} from '@/components/ui/SectionTitle.tsx';

type ProgramModule = {
  number: string;
  title: string;
  objective: string;
  lessons: string[];
  deliverables: string[];
  practical: string;
  media: {
    thumbnailFile: string;
    videoFile?: string;
    alt: string;
  };
};

const modules: ProgramModule[] = [
  {
    number: '01',
    title: 'Setup Seguro',
    objective: 'Configurar o ambiente de uso do Claude com organização, privacidade e critérios mínimos de segurança para a rotina jurídica.',
    lessons: ['Instalação e primeiros passos no Claude Desktop', 'Organização por projetos e tipo de tarefa', 'O que nunca colar no Claude sem tratamento prévio'],
    deliverables: ['Checklist de instalação', 'Instrução global pronta', 'Estrutura de projetos', 'Guia de anonimização'],
    practical: 'Implementar uma base operacional segura antes de escalar o uso de IA no escritório.',
    media: {
      thumbnailFile: 'modulo-01-thumb-16x9.webp',
      videoFile: 'modulo-01-clip.mp4',
      alt: 'Prévia do Módulo 01 — Setup Seguro',
    },
  },
  {
    number: '02',
    title: 'Método de Briefing Jurídico',
    objective: 'Transformar pedidos genéricos em instruções estruturadas para obter respostas claras, úteis e auditáveis.',
    lessons: ['Por que a saída fica genérica', 'Como dividir tarefas complexas em etapas', 'Como orientar o Claude no padrão do escritório'],
    deliverables: ['Template de prompt jurídico', 'Fluxo de prompt por etapa', 'Prompt-base por área'],
    practical: 'Padronizar prompts reaproveitáveis e reduzir retrabalho na revisão.',
    media: {
      thumbnailFile: 'modulo-02-thumb-16x9.webp',
      videoFile: 'modulo-02-clip.mp4',
      alt: 'Prévia do Módulo 02 — Método de Briefing Jurídico',
    },
  },
  {
    number: '03',
    title: 'Jurisprudência com Claude',
    objective: 'Usar o Claude para analisar decisões trazidas pelo advogado, sem delegar à IA a origem da fonte jurídica.',
    lessons: ['Por que LLMs podem gerar conteúdo plausível e falso', 'Como resumir e comparar decisões', 'Como validar aplicabilidade antes da redação'],
    deliverables: ['Fluxograma de uso correto', 'Prompt de resumo', 'Prompt de comparação', 'Checklist pré-uso'],
    practical: 'Converter decisões oficiais em insumos rastreáveis para análise e redação assistida.',
    media: {
      thumbnailFile: 'modulo-03-thumb-16x9.webp',
      videoFile: 'modulo-03-clip.mp4',
      alt: 'Prévia do Módulo 03 — Jurisprudência com Claude',
    },
  },
  {
    number: '04',
    title: 'Rotina do Escritório Automatizada',
    objective: 'Aplicar o Claude em tarefas repetitivas com ganho de velocidade, sem perder controle técnico.',
    lessons: ['Resumo de documentos extensos', 'Comunicação com cliente', 'Tarefas operacionais recorrentes'],
    deliverables: ['Template de linha do tempo', 'Modelos de e-mail', 'Checklist de documentos'],
    practical: 'Aumentar produtividade operacional preservando padrão técnico e revisão humana.',
    media: {
      thumbnailFile: 'modulo-04-thumb-16x9.webp',
      videoFile: 'modulo-04-clip.mp4',
      alt: 'Prévia do Módulo 04 — Rotina do Escritório Automatizada',
    },
  },
  {
    number: '05',
    title: 'Segurança, Ética e Validação',
    objective: 'Estabelecer uma camada de governança para uso responsável de IA na prática jurídica.',
    lessons: ['Casos reais de erro e prevenção', 'Política interna e comunicação com cliente'],
    deliverables: ['Checklist anti-alucinação', 'Modelo de política interna', 'Cláusula-base de uso assistido'],
    practical: 'Definir regras claras de validação, responsabilidade e comunicação no escritório.',
    media: {
      thumbnailFile: 'modulo-05-thumb-16x9.webp',
      videoFile: 'modulo-05-clip.mp4',
      alt: 'Prévia do Módulo 05 — Segurança, Ética e Validação',
    },
  },
];

const mediaBasePath = '/media/modules';

export function ProgramSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="programa" className="section-base section-tall bg-bg-soft" aria-labelledby="heading-programa">
      <div className="layout-container max-w-5xl">
        <SectionTitle
          eyebrow="CONTEÚDO DO TREINAMENTO"
          title="O curso foi estruturado para tirar o advogado do improviso."
          desc="Cada módulo resolve uma parte do uso responsável de IA: configuração, briefing, jurisprudência, rotina operacional e validação."
          id="heading-programa"
        />

        <div className="space-y-4 reveal">
          {modules.map((module, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={module.number}
                className="overflow-hidden rounded-2xl border border-white/10 bg-brand text-white shadow-[0_28px_70px_-32px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/[0.05]"
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.04] sm:px-7 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1">
                      <span className="label-nano text-accent">MÓDULO {module.number}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">{module.title}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/55 transition-transform duration-300 group-hover:text-white/80 ${isOpen ? 'rotate-180 text-white' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      className="overflow-hidden border-t border-white/10 bg-black/35"
                    >
                      <div className="px-5 py-5 sm:px-7 sm:py-6">
                        <div className="grid items-start gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
                          <div className="rounded-2xl border border-white/12 bg-black/40 p-3">
                            <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/50">
                              <img
                                src={`${mediaBasePath}/${module.media.thumbnailFile}`}
                                alt={module.media.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(event) => {
                                  const target = event.currentTarget;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="mt-3 inline-flex items-center gap-2 text-white/55">
                              <PlayCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                              <span className="text-xs font-medium">Prévia da aula</span>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/12 bg-black/45 p-4 sm:p-5">
                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                              <div>
                                <p className="label-micro mb-2 text-white/50">OBJETIVO</p>
                                <p className="mb-4 text-sm leading-relaxed text-white/72">{module.objective}</p>
                                <p className="label-micro mb-2 text-white/50">APLICAÇÃO PRÁTICA</p>
                                <p className="text-sm leading-relaxed text-white/72">{module.practical}</p>
                              </div>
                              <div>
                                <p className="label-micro mb-2 text-white/50">AULAS</p>
                                <ul className="mb-4 space-y-2">
                                  {module.lessons.map((lesson) => (
                                    <li key={lesson} className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
                                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                                      <span>{lesson}</span>
                                    </li>
                                  ))}
                                </ul>
                                <p className="label-micro mb-2 text-white/50">VOCÊ RECEBE</p>
                                <ul className="space-y-2">
                                  {module.deliverables.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
                                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
