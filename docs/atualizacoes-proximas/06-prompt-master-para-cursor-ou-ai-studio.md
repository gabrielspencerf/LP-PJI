# 06 — Prompt Master para Cursor ou Google AI Studio

Use este prompt como comando principal para implementar a atualização da landing.

---

## Prompt

Você está atualizando a landing page do **Protocolo Claude Jurídico**.

Ignore qualquer contexto anterior que não esteja nos arquivos `.md` desta documentação. A implementação deve seguir somente estes documentos.

O projeto atual usa React, Vite, Tailwind, Motion e componentes por seção. Mantenha essa base técnica. Não converta para HTML puro e não recomece do zero.

## Objetivo

Corrigir copy, seções, design, responsividade e conteúdo da landing para vender o Protocolo Claude Jurídico como um treinamento prático para advogados usarem Claude/IA generativa com briefing estruturado, validação de fontes, proteção de dados e revisão humana.

## Naming obrigatório

Produto principal:
**Protocolo Claude Jurídico**

Mecanismo interno:
**Protocolo Jurisprudência Inteligente**

Não usar como nome principal:
- Protocolo IJ
- Nova ERA da Advocacia
- Master Edition
- Anthropic Optimized

## Tom e posicionamento

A página deve parecer um dossiê jurídico digital moderno, com estética white/off-white, sóbria, técnica e premium.

O tom deve ser direto, educacional, comercial e juridicamente seguro.

Não usar linguagem de hype futurista. Não vender a IA como substituta do advogado.

## Copy do Hero

Eyebrow:
Método prático para advogados que usam IA

H1:
O Claude / GPT não têm OAB. Você tem. (segunda linha com gradiente no site)

Subheadline:
Use Claude, GPT ou outro grande modelo na advocacia com protocolo de briefing, validação de fonte, proteção de dados e revisão humana — antes de virar peça, parecer ou orientação ao cliente.

CTA primário:
Acessar o Protocolo Claude Jurídico

CTA secundário:
Ver método

Microcopy:
Curso gravado · Prompts · Checklists · Fluxos de validação · Sem promessa de resultado jurídico

## Estrutura final da página

Atualize o `App.tsx` para renderizar esta sequência:

1. Hero
2. ManifestoSection
3. ProblemSection
4. TransformationSection
5. ProtocolSection
6. DeliverablesSection
7. ProgramSection
8. AudienceSection
9. OfferSection
10. GuaranteeSection
11. FAQSection
12. FinalCTASection
13. Footer

A ordem é obrigatória.

## Seções

### Hero

Deve comunicar dor, público, método e CTA.

Trocar o widget lateral para um fluxo real:

- Briefing estruturado — pronto
- Dados anonimizados — revisar
- Fonte oficial — conferir
- Saída assistida — revisão humana

Remover:
- 850 advogados;
- segurança absoluta;
- Master Edition;
- Anthropic Optimized;
- Nova ERA como promessa principal.

---

### ManifestoSection

Título:
Método primeiro. Ferramenta depois.

Texto:
O Claude pode acelerar leitura, organização, comparação e redação. Mas ele não valida fonte sozinho, não assume responsabilidade profissional e não decide estratégia jurídica. O método existe para colocar a IA no lugar certo: apoio operacional sob revisão do advogado.

Cards:
- IA não é fonte.
- Prompt não é prova.
- Texto bonito não é validação.
- Revisão humana não é opcional.

---

### ProblemSection

Título:
O risco não é a IA errar. É você protocolar o erro.

Subtítulo:
A resposta pode parecer técnica, coerente e bem escrita. Mas texto bonito não é fonte válida, não protege sigilo e não transfere responsabilidade profissional.

Cards:
1. Precedente fantasma
2. Fonte fora de contexto
3. Dados sensíveis no prompt
4. Peça genérica

Cada card deve ter:
- risco;
- controle.

---

### TransformationSection

Título:
Do prompt solto ao fluxo validado.

Criar comparação antes/depois:

Antes:
- cola o caso inteiro;
- pede jurisprudência direto;
- aceita o primeiro texto;
- revisa só português;
- não rastreia fonte.

Depois:
- organiza briefing;
- anonimiza dados;
- usa decisão já encontrada;
- compara aplicabilidade;
- revisa fonte, tese e saída.

---

### ProtocolSection

Título:
Protocolo Jurisprudência Inteligente

Subtítulo:
Um fluxo em cinco etapas para usar Claude como apoio de análise, redação e validação, sem transformar IA em fonte cega.

Etapas:
1. Delimitar
2. Anonimizar
3. Analisar
4. Validar
5. Redigir

Não mencionar scraping, API, STJ/STF sync ou validação automática se isso não estiver implementado e entregue.

---

### DeliverablesSection

Título:
Você não recebe teoria solta. Recebe ferramentas de operação.

Cards:
- Biblioteca de prompts.
- Checklists de validação.
- Guia de anonimização.
- Templates de briefing.
- Fluxo de análise jurisprudencial.
- Política interna de IA.
- Cláusula-base sobre uso assistido de IA.
- Modelos de comunicação com cliente.

---

### ProgramSection

Criar accordion com módulos:

1. Setup Seguro
2. Método de Briefing Jurídico
3. Jurisprudência com Claude
4. Rotina do Escritório Automatizada
5. Segurança, Ética e Validação

Cada módulo deve exibir:
- objetivo;
- aulas resumidas;
- entregáveis;
- aplicação prática.

Não abrir 16 aulas de cara. O accordion deve ser fechado por padrão, exceto talvez o primeiro.

---

### AudienceSection

Criar split:

Para quem é:
- advogados que querem usar IA sem perder controle técnico;
- escritórios que precisam padronizar prompts;
- profissionais que querem produtividade com revisão;
- quem já testou IA e recebeu respostas genéricas;
- quem entende que revisão humana continua obrigatória.

Para quem não é:
- quem quer peça pronta sem revisar;
- quem quer substituir pesquisa jurídica por IA;
- quem busca promessa de resultado processual;
- quem quer inserir dados sensíveis sem critério;
- quem não pretende conferir fonte oficial.

---

### OfferSection

Reescrever para clareza.

Título:
Acesse o Protocolo Claude Jurídico

Texto:
Curso gravado, prompts, checklists e modelos para usar Claude na advocacia com método, validação e revisão humana.

Itens:
- Curso gravado.
- Biblioteca de prompts.
- Checklists de validação.
- Modelos prontos para adaptar.
- Política interna de IA.
- Garantia de 7 dias.

CTA:
Garantir meu acesso

Remover se não houver prova:
- vagas limitadas;
- vagas disponíveis;
- 850 advogados;
- suporte VIP;
- certificado incluso;
- atualizações vitalícias;
- zero risco.

---

### GuaranteeSection

Título:
Teste por 7 dias

Texto:
Você pode acessar o conteúdo e avaliar se o método se encaixa na sua rotina. Se não fizer sentido, solicite reembolso dentro do prazo da plataforma de pagamento.

Não chamar isso de garantia jurídica.

---

### FAQSection

Substituir por perguntas reais:

1. O curso substitui pesquisa jurídica?
2. O Claude vai buscar jurisprudência sozinho?
3. Preciso saber programar?
4. Posso usar em qualquer área do direito?
5. Posso inserir dados reais de clientes?
6. O curso promete resultado em processo?
7. Existe garantia?

Respostas devem ser objetivas e sem promessa absoluta.

---

### FinalCTASection

Título:
Use IA com método. Não com fé.

Texto:
O Claude pode acelerar sua rotina. Mas a responsabilidade continua sendo sua. O Protocolo Claude Jurídico entrega o fluxo para usar IA com briefing, validação, sigilo e revisão humana.

CTA:
Acessar o Protocolo Claude Jurídico

---

### Footer

Adicionar aviso:

Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.

## Design e responsividade

Compactar a escala visual.

Em `index.css`, ajustar:

```css
.section-base {
  @apply py-14 sm:py-20;
}

.section-tall {
  @apply lg:py-28;
}

.section-xl {
  @apply lg:py-32;
}

.section-hero {
  @apply pt-14 sm:pt-20 pb-12 sm:pb-20;
}

.card-premium {
  @apply bg-white border border-brand/[0.06] rounded-2xl p-5 sm:p-7 transition-all duration-300 relative overflow-hidden;
}

.card-premium-lg {
  @apply p-6 sm:p-8;
}

.price-display {
  font-size: clamp(4rem, 16vw, 8rem);
}
```

Em `SectionTitle.tsx`, reduzir margem e tamanho:

```tsx
<div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'}`}>
```

H2:

```tsx
className={`text-2xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand leading-[1.06] tracking-tight mb-5 max-w-4xl ${centered ? 'mx-auto' : ''}`}
```

Hero H1:

```tsx
className="text-[2.55rem] sm:text-5xl lg:text-7xl font-display font-semibold text-brand leading-[0.98] sm:leading-[1] tracking-tight mb-6 sm:mb-8"
```

## Compliance

Remover qualquer ocorrência de:

- segurança absoluta;
- zero risco;
- zero alucinação;
- anula risco;
- higidez absoluta;
- argumentação blindada;
- garantia de resultado;
- substitui advogado;
- automação autônoma;
- vagas limitadas sem prova;
- 850 advogados sem prova.

## Validação final

Antes de finalizar, rode:

- busca textual por termos proibidos;
- teste mobile 360/390/430;
- teste desktop 1280/1440;
- validação de contraste;
- validação de CTAs;
- build do projeto;
- lint/typecheck.

Resultado esperado:
landing mais compacta, com copy segura, seções completas, programa claro, oferta objetiva e responsividade corrigida.
