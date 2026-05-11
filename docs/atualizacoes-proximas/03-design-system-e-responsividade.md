# 03 — Design System e Responsividade

## Objetivo

Ajustar a estética, escala visual e responsividade da landing do **Protocolo Claude Jurídico** sem recomeçar o projeto.

A página atual deve ser compactada e refinada. O problema principal não é falta de beleza. É excesso de escala, excesso de espaçamento e baixa densidade útil por dobra.

---

## Direção visual

A landing deve parecer um **dossiê jurídico digital moderno**.

### Características

- fundo branco e off-white;
- preto profundo para autoridade;
- dourado sóbrio para destaque;
- vermelho apenas para risco e alerta;
- cards como documentos;
- widgets simulando validação, fonte e revisão;
- serif/display nos títulos;
- sans-serif no corpo;
- boa densidade informacional;
- animações discretas.

---

## Paleta recomendada

```css
:root {
  --color-brand: #0A0A0A;
  --color-brand-soft: #1A1A1A;
  --color-bg: #FFFFFF;
  --color-bg-soft: #F7F5F0;
  --color-paper: #FBFAF7;
  --color-accent: #B8924B;
  --color-accent-dark: #8F6D35;
  --color-risk: #C94336;
  --color-muted: #6F6A60;
  --color-border: rgba(10, 10, 10, 0.08);
}
```

### Uso

- `brand`: títulos, textos fortes, fundos escuros.
- `bg-soft`: áreas alternadas.
- `paper`: cards documentais.
- `accent`: CTAs e destaques.
- `risk`: alertas, risco e erros.
- `muted`: textos secundários.
- `border`: linhas finas.

---

## Tipografia

### Direção

A página precisa reduzir a escala atual.  
No mobile, títulos devem ser fortes, mas não podem ocupar a dobra inteira.

### Regra

- H1 grande, mas controlado.
- H2 compacto.
- Body legível, sem parecer livro impresso.
- Labels pequenos, mas não microscópicos.
- Evitar tracking alto em textos longos.

### Tamanhos recomendados

```css
:root {
  --fs-label: clamp(0.68rem, 1.5vw, 0.78rem);
  --fs-body: clamp(0.94rem, 2vw, 1.02rem);
  --fs-lead: clamp(1rem, 2.4vw, 1.18rem);
  --fs-card-title: clamp(1.05rem, 2.2vw, 1.22rem);
  --fs-h2: clamp(1.9rem, 4.8vw, 3.25rem);
  --fs-h1: clamp(2.55rem, 8vw, 5rem);
}
```

### Hero

```css
.hero-title {
  font-size: var(--fs-h1);
  line-height: 0.98;
  letter-spacing: -0.045em;
  max-width: 760px;
}
```

### Seções

```css
.section-title {
  font-size: var(--fs-h2);
  line-height: 1.04;
  letter-spacing: -0.035em;
  max-width: 860px;
}
```

### Corpo

```css
.body-text,
.card p,
.section-subtitle {
  font-size: var(--fs-body);
  line-height: 1.58;
}
```

---

## Ajuste imediato de classes existentes

### Reduzir seções

Substituir o padrão atual por:

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
```

---

## Ajuste do SectionTitle

### Problema

O componente de título está criando espaçamento excessivo.

### Ajuste recomendado

```tsx
<div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'}`}>
```

### H2 recomendado

```tsx
className={`text-2xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand leading-[1.06] tracking-tight mb-5 max-w-4xl ${centered ? 'mx-auto' : ''}`}
```

### Subtítulo

```tsx
<p className={`book-text text-sm sm:text-base ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>{desc}</p>
```

---

## Ajuste do Hero

### H1

Trocar escala atual por:

```tsx
className="text-[2.55rem] sm:text-5xl lg:text-7xl font-display font-semibold text-brand leading-[0.98] sm:leading-[1] tracking-tight mb-6 sm:mb-8"
```

### Subheadline

```tsx
className="text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed text-muted"
```

### CTA wrapper

```tsx
className="flex flex-col sm:flex-row gap-3 sm:gap-5"
```

### Prova social

Não usar números sem prova.  
Trocar por microcopy de entregáveis.

```tsx
Curso gravado · Prompts · Checklists · Fluxos de validação
```

---

## Cards

### Problema

Os cards atuais estão grandes demais.

### Ajuste recomendado

```css
.card-premium {
  @apply bg-white border border-brand/[0.06] rounded-2xl p-5 sm:p-7 transition-all duration-300 relative overflow-hidden;
}

.card-premium-lg {
  @apply p-6 sm:p-8;
}
```

### Ícones

```css
.card-icon {
  @apply w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center;
}
```

Evitar ícones de 64px em todos os cards.

---

## Espaçamento

### Gaps recomendados

```css
.grid-gap-section {
  @apply gap-8 sm:gap-10 lg:gap-14;
}

.grid-gap-cards {
  @apply gap-4 sm:gap-6;
}
```

### Margens recomendadas

- Eyebrow → título: 12px a 20px.
- Título → subtítulo: 16px a 24px.
- Subtítulo → cards: 32px a 48px.
- Card title → texto: 8px a 12px.
- Seção → seção: controlado pelo padding global.

---

## Mobile-first

### Até 640px

Regras:

- Hero em uma coluna.
- H1 até aproximadamente 3.15rem.
- Cards com padding de 16px a 20px.
- CTA full width.
- Mockup escuro abaixo do texto, não ao lado.
- Reduzir bordas arredondadas muito grandes.
- Evitar grids 2 colunas em cards de texto.
- Mostrar no máximo 4 bullets por bloco.
- Accordion fechado por padrão.
- Oferta em coluna única.

### CSS recomendado

```css
@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(2.35rem, 11vw, 3.15rem);
    line-height: 0.96;
  }

  .section-title {
    font-size: clamp(1.75rem, 8vw, 2.25rem);
    line-height: 1.05;
  }

  .section-base {
    padding-block: 56px;
  }

  .card-premium,
  .module-card,
  .risk-card {
    padding: 18px;
    border-radius: 18px;
  }

  .offer-shell {
    padding: 24px 18px;
    border-radius: 28px;
  }

  .price-display {
    font-size: clamp(4rem, 20vw, 6rem);
  }
}
```

---

## Desktop

### A partir de 1024px

- Usar grids 12 colunas em seções principais.
- Hero: 7/5 ou 6/6.
- Mecanismo: texto à esquerda, widget à direita.
- Programa: accordion largo ou grid de módulos.
- Oferta: texto à esquerda, card de compra à direita.

### Regra

O desktop pode parecer premium.  
O mobile precisa ser rápido.

---

## Animações

### Manter

- reveal on scroll;
- hover leve;
- movimento suave em cards;
- animação mínima no widget.

### Reduzir/remover

- scale exagerado;
- blur muito forte;
- animações constantes;
- excesso de glow;
- painéis que parecem dashboard hacker.

### Preferência

Animação deve reforçar hierarquia, não competir com copy.

---

## Componentes recomendados

### 1. ValidationWidget

Simula o fluxo:

- briefing;
- anonimização;
- fonte;
- revisão.

### 2. ComparisonTable

Antes/depois do uso do Claude.

### 3. DeliverableGrid

Cards de entregáveis tangíveis.

### 4. ProgramAccordion

Módulos do curso.

### 5. AudienceSplit

Para quem é / para quem não é.

### 6. GuaranteeCard

Garantia comercial.

---

## Ajustes de acessibilidade

- Botões devem ter texto claro.
- Contraste mínimo bom em dourado sobre fundo claro.
- Não usar texto cinza muito claro.
- Accordion com `aria-expanded`.
- Links de navegação com foco visível.
- Evitar texto em imagem.
- Respeitar `prefers-reduced-motion`.

### CSS

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Checklist visual

Antes de finalizar, validar:

- O hero cabe melhor no mobile?
- O H1 não ocupa mais que 45% da primeira dobra?
- O usuário entende produto antes de rolar?
- Os cards têm conteúdo denso?
- As seções não parecem vazias?
- A oferta é clara?
- O programa é fácil de escanear?
- O dourado está sóbrio?
- O vermelho aparece apenas em risco?
- O mockup parece jurídico, não hacker?
