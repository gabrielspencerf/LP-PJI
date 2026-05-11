# Hero, responsividade e fundos escuros — guia de coerência

Este documento descreve a **hero atual** (`src/components/sections/Hero.tsx`) e padrões para alinhar o resto da landing: **flex centro–centro**, **breakpoints**, **superfícies escuras** e **cards** (vidro/desfoco no programa; cards escuros em secções claras noutros blocos, ex.: oferta).

Referência cruzada: tokens e classes globais em [design-system.md](./design-system.md).

---

## 1. Shell da hero (viewport)

| Propriedade | Valor | Motivo |
|-------------|--------|--------|
| Altura | `h-dvh max-h-dvh min-h-0` no `<header>` | Altura **fixa** a uma viewport dinâmica; evita a hero crescer além do ecrã (problema antigo com `min-h-dvh` só como mínimo + conteúdo alto). |
| Overflow | `overflow-hidden` no `<header>` | Corta sangrias decorativas sem criar scroll interno na hero. |
| Fundo base | `bg-[#050505]` | Preto levemente aquecido; não usar `bg-brand` puro na hero se quiser contraste com dots e glows. |
| Safe area | `pb-[env(safe-area-inset-bottom,0px)]` | Respeita barra inferior em iPhone. |

**Não aplicar** `overflow-x-hidden` + `overflow-y-visible` no mesmo elemento (força `overflow-y: auto` nalguns browsers).

---

## 2. `scale-exempt` e zoom

- Em **`< 640px`**, `.scale-exempt` usa **`zoom: 1`**; a partir de **`sm`**, **`zoom: 1.25`** (`src/index.css`) — evita overflow horizontal no telemóvel na hero e no footer.
- Na hero, **`.scale-exempt` vai no `layout-container` interior**, não no `<header>`.
- Motivo: zoom no mesmo nó que `h-dvh` inflacionava altura / overflow em relação ao viewport; em mobile o zoom extra agravava cortes de texto e CTAs.
- **Footer** mantém `scale-exempt` no próprio `<footer>` (ver `Footer.tsx`).

Checklist noutras secções: se precisar de “tamanho visual” equivalente ao da hero, preferir **wrapper interno** com `scale-exempt`, não a `<section>` inteira.

---

## 3. Padrão flex “centro–centro”

| Camada | Classes principais | Comportamento |
|--------|-------------------|----------------|
| Miolo | `… justify-start lg:justify-center` no `layout-container` | **Mobile:** conteúdo começa no **topo** (evita “corte” que mostrava fotos primeiro quando o miolo era mais alto que o viewport); **desktop:** centro vertical como antes. |
| `<header>` | `overflow-x-hidden`; **sem** `max-h` nem scroll interno em `<lg` (a página faz scroll único); `lg:h-dvh lg:max-h-dvh lg:overflow-hidden` | Mobile: hero pode crescer em altura; desktop mantém viewport fixa. |
| Grelha | `order-1` texto / `order-2` fotos em `<lg`; `items-start` mobile; `lg:order-none` + `items-center` | Ordem leitura: **copy → fotos** no telemóvel. |
| Grelha | `lg:grid-cols-12 …` | Duas colunas no desktop. |
| `html` / `body` | `overflow-x-hidden`, `max-w-[100%]` | Evita faixa clara por overflow horizontal global. |

---

## 4. Resoluções e grelha (referência rápida)

| Breakpoint (Tailwind) | Largura típica | Hero — comportamento |
|----------------------|----------------|----------------------|
| default (`<640px`) | &lt; 640px | 1 coluna; texto `max-w-xl` centrado na pista; imagem `max-w-lg`; botões em coluna centrada. |
| `sm` | ≥ 640px | Mesma 1 coluna; espaçamentos `sm:`; botões em linha quando couber. |
| `lg` | ≥ 1024px | **12 colunas**: texto `col-span-6`, imagem `col-span-6 col-start-7`; `items-center` na grelha. |
| `xl` | ≥ 1280px | Mais ar horizontal (`xl:gap-x-12`); tipografia do título maior. |

**Testes manuais sugeridos:** 375×667, 390×844, 768×1024, 1280×800, 1440×900, 1920×1080 — confirmar: sem scroll global causado só pela hero; conteúdo não cortado de forma crítica (aceitar `overflow-hidden` leve em viewports muito baixos).

---

## 5. Imagem da hero (`max-h` em `dvh`)

Alinhar tetos da foto ao **mesmo referencial** que o shell (`dvh`), não `svh` isolado (evitava soma com padding e estourar o `h-dvh`).

Ordem atual (simplificada):

- `max-h-[min(42dvh,24rem)]` base  
- `sm: … 40dvh, 26rem`  
- `md: … 38dvh, 28rem`  
- `lg: … 44dvh, 32rem` + wrapper `lg:max-w-[min(100%,42rem)]`  
- `xl` / `2xl`: incrementos moderados  

Máscara linear no fundo da imagem (~97–100%) mantém ligação visual aos cards dos instrutores.

---

## 6. Headline (H1) e parágrafo da hero

- **H1 — linha 1:** `O Claude / GPT não têm OAB.` (tipografia maior, `leading` apertado, `tracking` ligeiramente negativo).
- **H1 — linha 2:** `Você tem.` com `bg-gradient-to-r from-accent via-[#e8a090] to-accent` + `bg-clip-text text-transparent` para destaque.
- **Parágrafo:** refere *Claude, GPT ou outro grande modelo* e mantém compliance (protocolo, validação, revisão humana, sem promessa de resultado jurídico).
- **Eyebrow** (régua + label): inalterado — *«Método prático para advogados que usam IA»*.

---

## 7. Textura de pontos (fundo)

- Camada absoluta **dentro** de `overflow-hidden` no stack de fundos (não no `<header>` com eixos de overflow mistos).
- **Malha:** `background-size: 3.5px 3.5px` (alta densidade).
- **Cor:** radial na paleta do CTA, mais escura, ex.: `rgba(150, 72, 52, 0.38)` em círculo ~0,55px; opacidade da camada ~0,38.
- Glows e gradientes radiais/lineares mantêm-se por cima ou por baixo conforme a stack em `Hero.tsx`.

---

## 8. CTAs e microcopy da hero

- **Principal:** classe `.btn-gold-hero` — texto **`text-brand`** sobre `bg-accent` (contraste).
- **Secundário:** ghost menor; não competir em altura com o principal.
- **Linha sob botões:** `text-[8px] sm:text-[8.5px]`, `!tracking-[0.04em]`, `text-accent/44` (mesma família de cor do eyebrow, mais apagada).

### 8.1 Faixa de ecossistema (Anthropic, Claude, OpenAI)

- Componente: `HeroEcosystemStrip.tsx` (entre o parágrafo da hero e os botões). **Sem legenda visível** acima do marquee (apenas `sr-only` para leitores de ecrã).
- Logotipos em **SVG** em `public/media/brands/` (ver `public/media/brands/README.md` para proveniência Commons). Renderização com `<img>`; os três wordmarks com `brightness-0 invert` para leitura no fundo escuro (inclui Claude, cujo SVG traz texto preto). O ficheiro `chatgpt-mark.svg` pode existir na pasta por compatibilidade com cache de build; **não** é usado na faixa atual.
- **Marquee:** classe `.hero-eco-track` + `@keyframes hero-eco-marquee` em `src/index.css` (~38s, linear, infinito); `translate3d(-50%,0,0)` com duas cópias da fila para loop contínuo; **máscara** em gradiente horizontal nas extremidades; **pausa** ao passar o rato (`.hero-eco-marquee:hover .hero-eco-track`).
- **Acessibilidade:** texto `sr-only` a clarificar que são referências visuais; com `prefers-reduced-motion`: animação off, segunda cópia com `motion-reduce:hidden`, fila em `flex-wrap` centrada (regras em `index.css` sobre `.hero-eco-track`).

---

## 9. Fundos escuros (fora da hero)

Regra de ouro: **secção escura = `bg-brand` ou `#050505`/`#0A0A0A` + texto `text-white` / hierarquia `white/xx`**. Bordas discretas: `border-white/10`–`border-white/20`.

Checklist por secção escura:

- [ ] Títulos: `text-white` ou `text-white/95`.
- [ ] Corpo: `text-white/70`–`white/80`; secundário nunca cinzento “frio” isolado — preferir `white/55` ou `accent/xx` alinhado à marca.
- [ ] Bordas e divisórias: `white/10`–`white/15`, não `border-border` (pensado para fundo claro).
- [ ] Cards sobre escuro: `bg-black/35`–`bg-white/5`, `backdrop-blur` opcional, `ring-inset ring-white/[0.05]` se quiser profundidade tipo hero badges.

---

## 10. Programa / módulos (fundo escuro + **vidro**)

**Regra:** a secção **programa** usa o **mesmo tipo de fundo** que a hero (`#050505`, textura de pontos, glows). Os **`<article>`** dos módulos são **cartões em vidro**: fundo semitransparente + **`backdrop-blur`** + bordas claras, para o fundo aparecer desfocado por baixo. O `SectionTitle` usa `tone="dark"` (texto claro sobre o fundo da secção).

Padrão visual (referência `ProgramSection.tsx`):

- Card raiz: `bg-black/25` + `backdrop-blur-2xl` + `backdrop-saturate-150` (+ `supports-[backdrop-filter]:bg-black/20`), `border-white/12`, `ring-inset`.
- Cabeçalho do acordeão: hover `bg-white/[0.07]`; chevron `text-white/55`.
- Painel expandido: `border-t border-white/10`, `bg-black/15` + `backdrop-blur-xl` (mais leve que o raiz).
- Sub-blocos (prévia, conteúdo): `backdrop-blur-md`, `bg-white/[0.06]` ou `bg-black/25` sem opacidade opaca total.
- Labels: `text-white/50`; parágrafos e listas: `text-white/65`–`text-white/75`.
- Ícones de destaque: **`text-accent`**.

Implementação de referência: `ProgramSection.tsx` (`id="programa"`).

### 10.1 Oferta (`OfferSection`, `id="oferta"`)

- Secção em **`bg-bg-soft`**; coluna esquerda com **copy claro** (`text-brand`, `book-text`, `text-muted`, eyebrow `accent/10`).
- **Apenas** o bloco de compra usa **`.offer-card-glow`** (card escuro, `max-w-lg`, `ring-inset` alinhado aos módulos).
- Não usar `.offer-shell` à volta das duas colunas (padrão legado de “caixa escura inteira”).
- CTA: **`.btn-gold-offer`** com `text-brand` sobre accent (definido em `src/index.css`, igual à lógica da hero).

---

## 11. Checklist global antes de merge visual

1. [ ] Secções claras: `book-text`, `text-brand`, `border-border` onde aplicável.  
2. [ ] Secções escuras: paleta da secção 9.  
3. [ ] **Programa**: secção com fundo escuro texturado; cards módulo em **vidro** (`backdrop-blur`, sem `bg-brand` opaco no raiz) — secção 10.  
3b. [ ] **Oferta**: secção clara; só o card `.offer-card-glow` escuro (secção 10.1).  
4. [ ] `layout-container` + `section-base` / `section-tall` / `section-xl` coerentes com [design-system.md](./design-system.md).  
5. [ ] Não introduzir `min-h-dvh` em wrappers de página **com** conteúdo que cresce sem teto — usar `min-h-0` na cadeia flex quando necessário.  
6. [ ] CTAs de destaque: `.btn-gold-hero` e `.btn-gold-offer` usam **`text-brand`** sobre `bg-accent` (mesma lógica de contraste).  

---

## 12. Ficheiros tocados com frequência

| Ficheiro | Notas |
|----------|--------|
| `src/components/sections/Hero.tsx` | Shell, grelha, dots, CTAs, foto. |
| `src/components/sections/HeroEcosystemStrip.tsx` | Marquee de marcas do ecossistema. |
| `public/media/brands/*.svg` | SVG oficiais (Commons) + `README` de atribuição. |
| `src/index.css` | `.btn-gold-hero`, `.scale-exempt`, tokens `@theme`. |
| `src/components/sections/ProgramSection.tsx` | Módulos em fundo escuro texturado; cards com `backdrop-blur`. |
| `docs/design/design-system.md` | Índice e secções gerais; este ficheiro é o detalhe da hero + coerência. |

Quando alterar a hero, **atualizar este documento** na mesma PR.
