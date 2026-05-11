# 05 — Plano de Implementação e Checklist

## Objetivo

Orientar a implementação das atualizações da landing do **Protocolo Claude Jurídico** sem recomeçar o projeto e sem depender de contexto anterior.

---

## Princípio de implementação

Manter a base atual em React/Vite/Tailwind.  
Criar, renomear ou ajustar componentes conforme necessário, mas sem reescrever a aplicação do zero.

A atualização deve ser feita em etapas para evitar regressão visual, copy quebrada ou promessa indevida.

---

# Etapa 1 — Padronizar naming

## Ações

1. Trocar nome principal para **Protocolo Claude Jurídico**.
2. Usar **Protocolo Jurisprudência Inteligente** apenas como mecanismo interno.
3. Remover ou reduzir:
   - Protocolo IJ;
   - Nova ERA da Advocacia;
   - Master Edition;
   - Anthropic Optimized.

## Arquivos prováveis

- `src/config/site.ts`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/OfferSection.tsx`

## Critério de aceite

O visitante entende em menos de 5 segundos:

- nome do produto;
- público;
- problema;
- método.

---

# Etapa 2 — Corrigir copy perigosa

## Remover expressões

- segurança absoluta;
- zero risco;
- zero alucinação;
- anula risco de alucinação;
- higidez absoluta;
- argumentação blindada;
- garantia de higidez jurídica;
- sistema operacional jurídico;
- vagas limitadas sem prova;
- 850 advogados sem prova.

## Substituir por

- redução de risco;
- camadas de validação;
- conferência de fonte oficial;
- revisão humana;
- uso assistido;
- protocolo de briefing;
- anonimização;
- rastreabilidade.

## Arquivos prováveis

- `Hero.tsx`
- `MethodSection.tsx`
- `RiskSection.tsx`
- `StepsSection.tsx`
- `FAQSection.tsx`
- `OfferSection.tsx`

## Critério de aceite

Nenhuma promessa pode sugerir que a IA substitui o advogado, garante resultado ou elimina totalmente risco.

---

# Etapa 3 — Compactar escala visual

## Ajustes globais

Em `src/index.css`, aplicar:

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
```

## Ajustar preço

```css
.price-display {
  font-size: clamp(4rem, 16vw, 8rem);
}
```

## Ajustar título global

Em `SectionTitle.tsx`, reduzir:

- margem inferior;
- tamanho de H2;
- espaçamento entre eyebrow e título.

## Critério de aceite

No mobile, a landing deve exibir conteúdo real por dobra.  
Nenhuma seção deve parecer um cartaz gigante com pouca informação.

---

# Etapa 4 — Reescrever Hero

## Novo conteúdo

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

## Widget lateral

Trocar itens para:

- Briefing estruturado — pronto
- Dados anonimizados — revisar
- Fonte oficial — conferir
- Saída assistida — revisão humana

## Critério de aceite

O hero deve comunicar:

- dor;
- público;
- método;
- CTA;
- responsabilidade humana.

---

# Etapa 5 — Criar/ajustar seções

## Sequência final

No `App.tsx`, renderizar a ordem:

```tsx
<Hero />
<ManifestoSection />
<ProblemSection />
<TransformationSection />
<ProtocolSection />
<DeliverablesSection />
<ProgramSection />
<AudienceSection />
<OfferSection />
<GuaranteeSection />
<FAQSection />
<FinalCTASection />
```

Footer permanece fora do main ou após o main.

---

## Componentes novos sugeridos

### ManifestoSection

Função: explicar filosofia.

Título:
Método primeiro. Ferramenta depois.

---

### ProblemSection

Pode substituir ou evoluir `RiskSection`.

Título:
O risco não é a IA errar. É você protocolar o erro.

---

### TransformationSection

Criar comparação antes/depois.

---

### ProtocolSection

Pode substituir ou evoluir `StepsSection`.

Etapas:
1. Delimitar
2. Anonimizar
3. Analisar
4. Validar
5. Redigir

---

### DeliverablesSection

Cards de entregáveis tangíveis.

---

### ProgramSection

Accordion com módulos do curso.

---

### AudienceSection

Split "para quem é" e "para quem não é".

---

### GuaranteeSection

Garantia comercial de 7 dias.

---

### FinalCTASection

Fechamento com CTA final.

---

# Etapa 6 — Programa do curso

## Componente

Criar `ProgramSection.tsx`.

## Estrutura

Usar array de módulos:

```tsx
const modules = [
  {
    number: "01",
    title: "Setup Seguro",
    objective: "Configurar o Claude para uso jurídico com organização, privacidade e controle.",
    lessons: [
      "Instalação e primeiros passos no Claude Desktop",
      "Projetos e organização do trabalho dentro do Claude",
      "O que nunca colar no Claude sem tratar antes"
    ],
    deliverables: [
      "Checklist de instalação",
      "Instrução global pronta",
      "Estrutura de projetos",
      "Guia de anonimização",
      "Checklist de privacidade"
    ]
  }
]
```

## Critério de aceite

O usuário deve conseguir ver o valor do curso sem comprar.  
Não listar 16 aulas abertas de cara. Usar accordion.

---

# Etapa 7 — Oferta

## Ajustes

1. Remover prova social não comprovada.
2. Remover vagas limitadas se não for real.
3. Remover "zero risco".
4. Tornar os itens inclusos tangíveis.
5. Separar garantia.

## Nova estrutura

- Nome do produto.
- Preço.
- O que inclui.
- CTA.
- Microcopy de pagamento.
- Garantia em seção separada.

## Critério de aceite

A oferta deve parecer clara, não inflada.

---

# Etapa 8 — FAQ

## Trocar perguntas atuais por objeções reais

Perguntas:

1. O curso substitui pesquisa jurídica?
2. O Claude vai buscar jurisprudência sozinho?
3. Preciso saber programar?
4. Posso usar em qualquer área do direito?
5. Posso inserir dados reais de clientes?
6. O curso promete resultado em processo?
7. Existe garantia?

## Critério de aceite

FAQ deve reduzir objeções, não aumentar risco.

---

# Etapa 9 — Footer

## Adicionar aviso educacional

Texto:

Este treinamento tem finalidade educacional. O uso de IA em atividades jurídicas deve respeitar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável.

## Critério de aceite

Footer fecha a página com maturidade e não com hype.

---

# Etapa 10 — Responsividade

## Validar mobile

Larguras:

- 360px
- 390px
- 430px
- 768px

## Validar desktop

Larguras:

- 1024px
- 1280px
- 1440px
- 1920px

## Pontos críticos

- Header não deve quebrar.
- H1 não deve ultrapassar largura.
- Botões devem caber.
- Cards não devem ficar altos demais.
- Accordion deve ser confortável.
- Oferta deve ser legível.
- Preço não deve deformar o card.
- Footer deve manter leitura.

---

# Etapa 11 — Checklist final de compliance

Antes de finalizar, buscar no código:

```txt
absoluta
zero risco
zero alucinação
anula
garantida
higidez absoluta
blindada
vagas limitadas
850
automatize
substitui
```

Revisar cada ocorrência.

---

# Etapa 12 — Checklist final de UX

Validar:

- A primeira dobra comunica produto e dor?
- O CTA aparece antes da primeira rolagem?
- O método aparece antes da oferta?
- O programa aparece antes da oferta?
- Existe clareza sobre o que a pessoa recebe?
- A garantia está separada?
- O FAQ responde objeções reais?
- O mobile não parece gigante?
- O desktop não parece vazio?
- A linguagem não parece SaaS futurista genérico?

---

# Prompt curto para execução no Cursor

```txt
Atualize a landing do Protocolo Claude Jurídico seguindo os arquivos de documentação fornecidos. Mantenha a base React/Vite/Tailwind atual, mas corrija copy, estrutura de seções, responsividade e conteúdo. Não use contexto antigo. Não prometa resultado jurídico, segurança absoluta, zero risco ou automação autônoma. Use Protocolo Claude Jurídico como produto principal e Protocolo Jurisprudência Inteligente como mecanismo interno. Adicione seções de manifesto, problema, transformação, mecanismo, entregáveis, programa, público, oferta, garantia, FAQ e CTA final. Compacte tipografia e espaçamentos para melhorar mobile.
```
