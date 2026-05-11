# Especificação leve — LP-PJI

Projeto **simples**: uma landing estática de marketing para o **Protocolo Jurisprudência Inteligente (Protocolo IJ)** — método de uso de IA (Claude) na advocacia com foco em auditoria e redução de risco.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server porta `3000`, host `0.0.0.0`)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Motion** (`motion/react`) para animações
- **Lucide React** para ícones

Não há backend nem chamadas a API no código atual; a página é 100% cliente.

## Convenções técnicas

- Alias de import: `@/*` aponta para `src/*` (configurado em `vite.config.ts` e `tsconfig.json`).
- Padrão preferido de import interno: `@/components/*`, `@/hooks/*`, `@/config/*`.
- Revelação de elementos com animação: hook `useRevealOnScroll` em `src/hooks/useRevealOnScroll.ts`.

## Estrutura de pastas

```
LP-PJI/
├── docs/                      # Spec, design system, copy, IA, logs
├── public/
│   └── favicon.svg            # Ícone servido em /
├── src/
│   ├── components/
│   │   ├── icons/             # ClaudeLogo, etc.
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, Método, Riscos, Fluxo, Depoimento, FAQ, Oferta
│   │   └── ui/                # SectionTitle e peças reutilizáveis
│   ├── config/
│   │   └── site.ts            # Textos/links centralizados (checkout via VITE_*)
│   ├── hooks/
│   │   └── useRevealOnScroll.ts
│   ├── App.tsx                # Composição da página + acessibilidade
│   ├── main.tsx
│   ├── index.css              # Tokens @theme + classes globais
│   └── vite-env.d.ts          # Tipos das env VITE_*
├── index.html                 # Meta SEO / OG básicos + favicon
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Mapa da página (âncoras)

| Âncora | Conteúdo |
|--------|----------|
| `#` / topo | Navbar + Hero |
| `#metodo` | Método vs ferramenta + grid de pilares |
| `#riscos` | Cartões de risco (imprudência digital) |
| `#fluxo` | Passos do protocolo + painel ilustrativo |
| — | Depoimento / prova social (full width escuro) |
| `#faq` | Accordion FAQ |
| `#oferta` | Pricing e CTA final |

## Decisões já tomadas

- Landing organizada em componentes por domínio (`layout`, `sections`, `ui`, `icons`) para facilitar manutenção incremental.
- Identidade visual centralizada em **`index.css`** (`@theme` + utilitários), com classes semânticas de consistência (`.layout-container`, `.section-*`, `.card-*`, `.label-*`).
- Boilerplate do **Google AI Studio** foi removido do fluxo de build (sem Gemini obrigatório, sem `metadata.json` na raiz — ver `docs/referencias/ai-studio-metadata.json`).

## Roadmap / melhorias futuras (sugeridas)

Prioridade baixa, ordem não rígida:

1. Substituir `href="#"` dos links legais por páginas reais (Termos / Privacidade).
2. Consolidar auditoria visual periódica para manter uso de classes semânticas e evitar retorno de valores arbitrários.
3. Testes visuais ou E2E mínimos se o deploy exigir regressão automática.

## Histórico de mudanças relevantes

| Período | Notas |
|---------|--------|
| Base | Criada no AI Studio; migrada para repo limpo com Vite. |
| Documentação | Pasta `docs/` com design system, copy, logs e guias para IA. |
| Padronização visual | Introduzidas classes semânticas globais para seções, containers, cards e labels. |
| Refactor de produção | Componentização completa da página, aliases `@/`, config central de checkout e metadados SEO/OG. |
| Estabilização visual | Ajustes de consistência em botões/cards e correção de regressões estruturais entre breakpoints. |

Atualize a linha acima quando houver releases ou mudanças estruturais importantes.
