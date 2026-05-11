# Design system — Protocolo Jurisprudência Inteligente

Manual de uso da identidade da landing. Tokens vivem principalmente em `src/index.css` (`@theme` + classes utilitárias). Componentes de marca vivem em `src/components/`.

## Princípios visuais

1. **Autoridade técnica** — contraste forte marca escura + ouro; poucos ornamentos, hierarquia clara.
2. **Precisão** — tipografia sans estável (Montserrat); mono só para metadados e “labels técnicos”.
3. **Confiança** — bastante branco e cinzas neutros; CTAs em ouro (`accent`) ou vermelho de alerta (`cta`) quando o texto pedir urgência ou risco.

## Paleta (tokens CSS)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand` | `#0A0A0A` | Texto principal, superfícies escuras (“cards dark”), navbar |
| `--color-brand-light` | `#1A1A1A` | Hover de botões escuros |
| `--color-accent` | `#C5A059` | Destaques, CTAs primários (`.btn-gold`), selos, links hover |
| `--color-accent-dark` | `#A6864B` | Hover do `.btn-gold` |
| `--color-bg-soft` | `#F9F9F7` | Fundo alternado de seções |
| `--color-cta` | `#D94B3E` | Alertas, severidade, ênfase “crítico” |
| `--color-border` | `rgba(0,0,0,0.08)` | Divisórias leves |
| `--color-muted` | `#6B7280` | Texto secundário |

Sombras nomeadas: `--shadow-premium`, `--shadow-heavy`, `--shadow-gold`, `--shadow-inner-glow` — usar nas classes `.card-premium`, `.card-dark`, `.btn-gold` antes de inventar novas sombras.

## Tipografia

| Papel | Fonte | Onde |
|-------|--------|------|
| Display / títulos | Montserrat semibold, tracking tight | `font-display` em headings |
| Corpo “editorial” | Montserrat light/medium, tracking wide | classe `.book-text` |
| Label técnico | Montserrat, uppercase, tracking amplo | `.technical-label` |
| Metadados / código | JetBrains Mono, uppercase | `.metadata-text` |

Import das fontes: primeira linha de `src/index.css` (Google Fonts). Ao trocar fontes, atualizar `@theme` e esta doc.

### Escalas oficiais (evitar valores arbitrários repetidos)

| Classe | Uso |
|--------|-----|
| `.label-micro` | Microtexto de interface (`10px`, uppercase, tracking amplo) |
| `.label-nano` | Nano labels/selos (`9px`, uppercase, tracking mais amplo) |
| `.label-ultra` | Labels ultra compactas (`8px`, uppercase, tracking widest) |
| `.technical-label` | Eyebrow técnico de seção |
| `.metadata-text` | Metadado em mono (`11px`) |

## Componentes reutilizáveis (CSS)

| Classe | Função |
|--------|--------|
| `.glass-header` | Navbar com blur translúcido (layout não fixo) |
| `.layout-container` | Container horizontal padrão (`px-4 sm:px-8`) |
| `.section-base` | Espaçamento vertical base (`py-24 sm:py-32`) |
| `.section-tall` | Extensão vertical grande (`lg:py-40`) |
| `.section-xl` | Extensão vertical extra (`lg:py-48`) |
| `.section-hero` | Ritmo próprio do Hero para equilíbrio visual inicial |
| `.card-premium` | Card claro, borda suave, hover elevado |
| `.card-premium-lg` | Variação de card claro com padding maior |
| `.card-premium-flush` | Variação sem padding interno |
| `.card-dark` | Bloco escuro (simulação de painel / oferta) |
| `.card-dark-flush` | Variação escura sem padding interno |
| `.btn-primary` | Botão preenchido escuro (nav desktop) |
| `.btn-gold` | CTA principal dourado |
| `.accent-rule` | Linha de destaque padrão em headers/eyebrows |
| `.reveal` + `.reveal.visible` | Animação de entrada (hook `useRevealOnScroll`, disparado via `App`) |
| `.animate-float` | Decoração suave (ícones, widget flutuante) |

## Padrões de layout

- **Container:** usar `.layout-container` em layout e seções.
- **Seções:** combinar `.section-base` + (`.section-tall` ou `.section-xl`) conforme densidade; Hero usa `.section-hero`.
- **Grid de conteúdo:** frequentemente `lg:grid-cols-2` com `gap-16`–`gap-24`.
- **Acessibilidade:** link “Pular para o conteúdo”, `aria-label` em nav e botões de menu, `aria-expanded` no FAQ.

## Marca e terceiros

- Uso de **“Claude” / Anthropic** é descritivo do produto; manter coerência com o posicionamento legal/ético da copy.
- Logotipo da aplicação na LP é o ícone de **balança** (`Scale` do Lucide) + wordmark “Protocolo IJ” — não trocar sem atualizar navbar e footer juntos.

## O que mudar com cuidado

- Alterar `--color-accent` impacta **toda** a percepção de “premium”; testar contraste em `.btn-gold` e textos `text-accent` sobre `bg-brand`.
- Evite criar novos tamanhos `text-[Npx]` sem necessidade. Priorize `.label-micro`, `.label-nano`, `.technical-label` e `.metadata-text`.
- Novas seções devem reusar `SectionTitle`, classes de card e tokens em vez de cores hex ou espaçamentos soltos.
