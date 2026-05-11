# Design system — Protocolo Claude Jurídico

Manual de identidade visual e padrões de implementação da landing.

## Princípios visuais

1. **Sobriedade jurídica**: contraste limpo, pouco ruído ornamental.
2. **Densidade útil**: cada dobra deve entregar conteúdo real.
3. **Hierarquia clara**: título, explicação, prova e CTA bem separados.
4. **Ritmo estrutural**: espaçamentos verticais alinhados entre seções; hero integrada ao viewport sem cortar conteúdo sensível (foto `object-contain`, sem `scale` sobre a imagem).

## Paleta (tokens CSS)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand` | `#0A0A0A` | Texto forte e blocos escuros |
| `--color-brand-light` | `#1A1A1A` | Hover de botão escuro |
| `--color-accent` | `#da7759` | CTAs e destaques (laranja Claude) |
| `--color-accent-dark` | `#c45f42` | Hover dos botões de destaque |
| `--color-bg-soft` | `#F9F9F7` | Fundo alternado de seção |
| `--color-cta` | `#D94B3E` | Alertas e risco |
| `--color-border` | `rgba(0,0,0,0.08)` | Linhas e divisórias |
| `--color-muted` | `#6B7280` | Texto secundário |

## Escala tipográfica

- Base global reduzida: `html { font-size: 80%; }`.
- Exceções de escala: `.scale-exempt` (**miolo** da hero no `layout-container`, não no `<header>`; footer). Navbar desativada na página — pode voltar a usar a mesma regra.
- Labels oficiais:
  - `.label-micro`
  - `.label-nano`
  - `.label-ultra`
  - `.technical-label`
  - `.metadata-text`

## Ritmo vertical das seções

Valores aplicados em `src/index.css` (harmonia entre blocos):

| Classe | Padding vertical |
|--------|-------------------|
| `.section-base` | `py-12` → `sm:py-16` → `lg:py-20` |
| `.section-tall` | + em `lg`: `py-24` (acumula com base no breakpoint `lg`) |
| `.section-xl` | + em `lg`: `py-28` |

Uso típico: `section-base` em quase todas; `section-tall` ou `section-xl` onde a secção precisa de mais ar.

## Classes de estrutura

| Classe | Função |
|--------|--------|
| `.layout-container` | `container mx-auto px-4 sm:px-8` |
| `.section-base` | Espaçamento vertical base (ver tabela acima) |
| `.section-tall` | Reforço de altura em `lg` |
| `.section-xl` | Reforço maior em `lg` |
| `.section-hero` | Reservado; a hero atual não usa esta classe no `header` |
| `.glass-header` | Header translúcido (quando `Navbar` estiver ativo) |

## Hero (primeira dobra)

Especificação detalhada (viewport, flex centro–centro, breakpoints, dots, CTAs, fundos escuros e checklist): **[hero-layout-e-fundos-escuros.md](./hero-layout-e-fundos-escuros.md)**.

Resumo:

- **`<header>`**: `h-dvh max-h-dvh min-h-0 overflow-hidden`, `bg-[#050505]`, `pb` com safe-area; **sem** `scale-exempt` no header.
- **`layout-container`**: `scale-exempt`, `flex flex-1 min-h-0 flex-col items-center justify-center` + padding vertical; grelha 1 coluna centrada → `lg:grid-cols-12` com `items-center` e `justify-items-stretch`.
- **Fundo**: textura de pontos (malha ~3,5px, tom accent escurecido) + gradientes/blobs numa camada `overflow-hidden` interior.
- **Foto**: `object-contain`, `max-h` em **`dvh`** + `rem` por breakpoint; máscara linear na base; ficheiro `public/media/hero-founders-duo.webp`.
- **CTA**: `.btn-gold-hero` com `text-brand` sobre accent (contraste).
- **H1 (copy):** primeira linha *«O Claude / GPT não têm OAB.»*; segunda *«Você tem.»* com **gradiente** em `bg-clip-text` na paleta accent; parágrafo de apoio menciona Claude, GPT ou outro grande modelo.

## Fundos escuros e cards escuros em secção clara

- Secções **totalmente** escuras: `bg-brand` ou preto hero-adjacente, texto e bordas em escala `white/xx` (ver guia ligado acima).
- **Programa / módulos**: secção em **`bg-bg-soft`**; cada módulo é um **card escuro** (`bg-brand`, bordas `white/10`, texto claro) — não inverter o fundo da secção inteira.

## Programa com mídia 16:9

- Seção `ProgramSection` suporta thumbs e clipes por módulo; **UI dos módulos** segue o padrão “card escuro em secção clara” (ver [hero-layout-e-fundos-escuros.md](./hero-layout-e-fundos-escuros.md)).
- Pasta: `public/media/modules`.
- Convenção de ficheiros (thumbs em WebP):
  - `modulo-01-thumb-16x9.webp` … `modulo-05-thumb-16x9.webp`
  - `modulo-01-clip.mp4` (quando existir), etc.

## Classes de cards e componentes

| Classe | Função |
|--------|--------|
| `.card-premium` | Card claro padrão |
| `.card-premium-lg` | Card claro com padding maior |
| `.card-premium-flush` | Card sem padding interno |
| `.card-dark` | Card escuro |
| `.card-dark-flush` | Card escuro sem padding |
| `.steps-dashboard-shell` | Bloco de mecanismo/fluxo |
| `.offer-shell` | Legado: bloco único escuro; a oferta atual usa **secção clara** + apenas `.offer-card-glow` |
| `.offer-card-glow` | Card de compra da oferta |
| `.price-display` | Escala tipográfica do preço |

## Botões

| Classe | Uso |
|--------|-----|
| `.btn-primary` | CTA escuro secundário |
| `.btn-primary-nav` | CTA do header |
| `.btn-gold` | CTA de destaque base (`inline-flex`) |
| `.btn-gold-hero` | CTA principal da hero |
| `.btn-gold-drawer` | CTA no menu mobile |
| `.btn-gold-offer` | CTA principal da oferta (`w-full`) |

Tipografia dos botões: **sem letter-spacing extra** (sem `tracking-widest` / `tracking-[0.15em]` nas classes `btn-*`).

## Marca

- Nome principal exibido na interface: **Protocolo Claude Jurídico**.
- Nome do mecanismo interno (copy): **Protocolo Jurisprudência Inteligente**.
- Wordmark no footer; logo gráfica pendente.

## Acessibilidade e UX

- Manter skip-link ativo no topo.
- Garantir contraste mínimo em CTA de destaque e textos secundários.
- Preservar `aria-expanded` no accordion (FAQ e Programa).
- Evitar blocos finais “quebrados”: manter transição visual contínua entre Garantia → FAQ → CTA final → Footer.
